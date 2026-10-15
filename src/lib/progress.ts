import type { LearningProgress, Module } from "../types/course";
export const emptyProgress: LearningProgress = {
  version: 1,
  completed: [],
  bookmarks: [],
  steps: {},
};
export function parseProgress(raw: string | null): LearningProgress {
  try {
    const value: unknown = JSON.parse(raw || "null");
    if (
      !value ||
      typeof value !== "object" ||
      !("version" in value) ||
      value.version !== 1
    )
      return emptyProgress;
    const record = value as Record<string, unknown>;
    const strings = (input: unknown) =>
      Array.isArray(input)
        ? [
            ...new Set(
              input.filter(
                (v): v is string => typeof v === "string" && v.length < 160,
              ),
            ),
          ]
        : [];
    const steps = Object.fromEntries(
      Object.entries(
        record.steps &&
          typeof record.steps === "object" &&
          !Array.isArray(record.steps)
          ? record.steps
          : {},
      ).filter(
        ([key, v]) =>
          key.length < 160 &&
          Number.isInteger(v) &&
          (v as number) >= 0 &&
          (v as number) < 1000,
      ),
    );
    return {
      version: 1,
      completed: strings(record.completed),
      bookmarks: strings(record.bookmarks),
      steps,
      lastLesson:
        typeof record.lastLesson === "string" ? record.lastLesson : undefined,
    };
  } catch {
    return emptyProgress;
  }
}
export function moduleState(
  module: Module,
  completed: string[],
  currentSlug?: string,
) {
  if (!module.lessonSlugs.length) return "Planned";
  if (module.lessonSlugs.every((slug) => completed.includes(slug)))
    return "Completed";
  return module.slug === currentSlug ? "Current" : "Available";
}
