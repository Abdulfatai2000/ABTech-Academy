import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { courses, modules } from "../src/data/courses";
import { lessons } from "../src/data/lessons";
import { projects } from "../src/data/projects";
import { filterCourses } from "../src/lib/catalog";
import { parseProgress, moduleState } from "../src/lib/progress";

test("curriculum references and completion rules are coherent", () => {
  expect(new Set(lessons.map((item) => item.slug)).size).toBe(lessons.length);
  for (const item of modules) {
    for (const slug of item.lessonSlugs)
      expect(lessons.some((lesson) => lesson.slug === slug)).toBeTruthy();
    for (const slug of item.prerequisites)
      expect(modules.some((parent) => parent.slug === slug)).toBeTruthy();
    expect(
      projects.some((project) => project.id === item.projectId),
    ).toBeTruthy();
  }
  for (const lesson of lessons) {
    expect(new Set(lesson.steps.map((step) => step.id)).size).toBe(
      lesson.steps.length,
    );
    expect(lesson.steps.length).toBeGreaterThan(0);
    for (const step of lesson.steps)
      if (step.quiz) expect(step.quiz.options[step.quiz.answer]).toBeTruthy();
  }
  expect(moduleState(modules[2], [])).toBe("Planned");
  expect(moduleState(modules[0], modules[0].lessonSlugs)).toBe("Completed");
  expect(moduleState(modules[0], [], modules[0].slug)).toBe("Current");
  expect(parseProgress("broken").completed).toEqual([]);
  expect(
    parseProgress(
      '{"version":1,"completed":["a","a",3],"steps":{"a":-1,"b":2}}',
    ),
  ).toMatchObject({ completed: ["a"], steps: { b: 2 } });
  expect(
    filterCourses(courses, " EXPO ", "Mobile development").map(
      (item) => item.slug,
    ),
  ).toEqual(["react-native"]);
  expect(filterCourses(courses, "React Native", "Programming")).toHaveLength(0);
});

test("discovery filters work and have a recoverable empty state", async ({
  page,
}) => {
  await page.goto("/courses");
  await page.getByLabel("Find your next skill").fill("React Native");
  await expect(page.getByRole("status")).toHaveText("1 course found");
  await page.getByRole("button", { name: "Programming", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "No courses match yet" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "clear your filters" }).click();
  await expect(page.getByRole("status")).toHaveText("9 courses found");
});

test("lesson bookmarking, steps, completion and resume survive reload", async ({
  page,
}) => {
  await page.goto("/learn/react-native/lessons/javascript-values");
  await page.getByRole("button", { name: "Bookmark", exact: true }).click();
  await page.getByRole("link", { name: "Next step" }).click();
  await expect(page).toHaveURL(/step=understand/);
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Bookmarked" }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.goto("/learn/react-native/lessons/javascript-values");
  await expect(
    page.getByRole("heading", { name: "Give a value a name" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Show lesson outline" }).click();
  await page
    .getByRole("link", { name: "06 Your foundation is taking shape" })
    .click();
  await page
    .getByRole("button", { name: "Complete lesson", exact: true })
    .click();
  await expect(page.getByText("Reading milestone complete")).toBeVisible();
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Lesson marked read" }),
  ).toBeDisabled();
  await page.goto("/learn/react-native");
  await expect(
    page.getByRole("progressbar", { name: "Published lessons read" }),
  ).toHaveAttribute("value", "1");
  await page
    .getByRole("link", { name: "Continue learning", exact: true })
    .click();
  await expect(page).toHaveURL(/javascript-functions/);
});

test("knowledge checks explain wrong answers and allow retries", async ({
  page,
}) => {
  await page.goto("/learn/react-native/lessons/usestate?step=check-handler");
  await page.getByRole("radio", { name: "setCount(0)", exact: true }).check();
  await page.getByRole("button", { name: "Check answer" }).click();
  await expect(
    page.getByText("Not quite. Let’s work through it."),
  ).toBeVisible();
  await page
    .getByRole("radio", { name: "() => setCount(0)", exact: true })
    .check();
  await page.getByRole("button", { name: "Check answer" }).click();
  await expect(page.getByText("That’s right.")).toBeVisible();
});

test("practice has editable drafts and truthful reference output", async ({
  page,
}) => {
  await page.goto("/learn/react-native/lessons/usestate?step=practice");
  await page.getByLabel("React Native source").fill("// my draft");
  await page
    .getByRole("button", { name: "Expected output", exact: true })
    .click();
  await expect(
    page.getByText("Written reference · not live output"),
  ).toBeVisible();
  await page.getByRole("button", { name: "Code editor", exact: true }).click();
  await expect(page.getByLabel("React Native source")).toHaveValue(
    "// my draft",
  );
  await page.getByRole("button", { name: "Reset code" }).click();
  await expect(page.getByLabel("React Native source")).toHaveValue(
    /export default function Counter/,
  );
});

test("roadmap selection and list alternative expose planned content", async ({
  page,
}) => {
  await page.goto("/learn/react-native");
  await page.getByRole("button", { name: /LEVEL 9/ }).click();
  await expect(
    page
      .getByRole("complementary", { name: "Selected module details" })
      .getByRole("heading", { name: "Deployment and Production Applications" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Show simple list" }).click();
  await expect(
    page.getByRole("button", { name: "Show connected roadmap" }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("link", { name: "View module", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "This milestone is on the horizon" }),
  ).toBeVisible();
});

test("theme persists and mobile navigation is keyboard operable", async ({
  page,
  isMobile,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  if (isMobile) {
    const menu = page.getByLabel("Toggle navigation");
    await menu.focus();
    await page.keyboard.press("Enter");
    await expect(
      page.getByRole("navigation", { name: "Mobile navigation" }),
    ).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(
      page.getByRole("navigation", { name: "Mobile navigation" }),
    ).not.toBeVisible();
  }
});

test("malformed or unavailable storage does not break learning", async ({
  page,
}) => {
  await page.addInitScript(() =>
    localStorage.setItem("abtech-progress-v1", "{bad json"),
  );
  await page.goto("/learn/react-native");
  await expect(page.getByRole("progressbar")).toHaveAttribute("value", "0");
  await page.addInitScript(() => {
    Storage.prototype.setItem = () => {
      throw new Error("Storage unavailable");
    };
  });
  await page.goto("/learn/react-native/lessons/usestate");
  await page.getByRole("button", { name: "Bookmark", exact: true }).click();
  await expect(
    page.getByText(/Storage unavailable: progress and bookmarks/),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Bookmarked" }),
  ).toHaveAttribute("aria-pressed", "true");
});

test("primary routes are accessible and fit the viewport", async ({
  page,
}, testInfo) => {
  test.setTimeout(90_000);
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const route of [
    "/",
    "/courses",
    "/courses/react-native",
    "/learn/react-native",
    "/learn/react-native/modules/react-fundamentals",
    "/learn/react-native/lessons/usestate?step=example",
    "/projects",
  ]) {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    const width = await page.evaluate(() => ({
      scroll: document.documentElement.scrollWidth,
      viewport: innerWidth,
    }));
    expect(width.scroll, route).toBeLessThanOrEqual(width.viewport);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      results.violations.map(
        (item) =>
          `${item.id}: ${item.nodes.map((node) => node.target).join(", ")}`,
      ),
      route,
    ).toEqual([]);
    if (route === "/")
      await page.screenshot({
        path: testInfo.outputPath("landing.png"),
        fullPage: true,
      });
  }
  expect(errors).toEqual([]);
});

test("dark theme and focused practice controls remain accessible", async ({
  page,
}) => {
  test.setTimeout(90_000);
  await page.addInitScript(() => localStorage.setItem("abtech-theme", "dark"));
  for (const route of [
    "/",
    "/learn/react-native",
    "/learn/react-native/lessons/usestate?step=practice",
    "/learn/react-native/lessons/usestate?step=check-handler",
  ]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      results.violations.map(
        (item) =>
          `${item.id}: ${item.nodes.map((node) => node.target).join(", ")}`,
      ),
      route,
    ).toEqual([]);
  }
});

test("unknown curriculum slugs show recovery pages", async ({ page }) => {
  for (const route of [
    "/learn/react-native/modules/missing",
    "/learn/react-native/lessons/missing",
  ]) {
    await page.goto(route);
    await expect(
      page.getByRole("heading", { name: "This page isn’t on the path." }),
    ).toBeVisible();
  }
});
