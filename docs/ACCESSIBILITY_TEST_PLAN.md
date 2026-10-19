# Accessibility regression test plan

The automated Playwright/axe checks are a baseline, not a replacement for manual testing.

## Keyboard-only checks
1. Open the home page, course catalog, a lesson, and a quiz.
2. Use Tab and Shift+Tab to reach all interactive controls.
3. Confirm focus remains visible in light and dark themes.
4. Activate links and buttons with Enter; use Space where applicable.
5. Verify no keyboard trap exists in menus or dialogs.

## Screen-reader checks
1. Verify page titles and heading order communicate the content structure.
2. Check that course filters, search, lesson navigation, and quiz choices have meaningful names.
3. Verify correctness feedback is understandable without relying on color alone.
4. Confirm disabled or unavailable modules communicate their status in text.

## Responsive and zoom checks
1. Test at 375px width and 200% browser zoom.
2. Confirm code samples can scroll without clipping controls.
3. Verify long headings, error messages, and button labels do not overlap.
4. Check reduced-motion preferences where animations are present.

## Persistence and failure checks
1. Save reading progress, reload, and confirm it is retained.
2. Disable or corrupt browser storage and confirm the learning UI remains usable.
3. Ensure errors do not erase learner input without warning.

Record browser, viewport, theme, assistive technology, expected result, actual result, and a reproduction path for any defect. These are **manual scenarios**, not claims that all checks have already passed.
