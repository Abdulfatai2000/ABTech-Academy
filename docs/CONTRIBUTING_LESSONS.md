# Contributing lessons to ABTech Academy

Contributions should make the beginner learning path clearer, more accurate, or more practical.

## Before writing
1. Review `docs/COURSE_CONTENT_STRUCTURE.md` and `docs/CONTENT_QUALITY_CHECKLIST.md`.
2. Check the existing published lessons to avoid duplicate topics.
3. Choose a single learner outcome and identify prerequisites.
4. Prefer official React, React Native, JavaScript, and Expo references.

## Content workflow
1. Locate the existing course data and types in the repository.
2. Add a lesson with a stable unique slug and ordered learning steps.
3. Connect the lesson to its owning module and appropriate prerequisites.
4. Add a runnable example or explicitly labeled code fragment, an exercise, and explained checks.
5. Update the published lesson inventory and any affected learner navigation.

## Review expectations
- Explanations should be original, approachable, and technically correct.
- Do not present simulated editor output as executed code.
- Do not include private keys, tokens, personal data, or copied paid-course content.
- Keep publication status accurate; unfinished modules remain planned.
- Check keyboard navigation and narrow mobile layouts for any UI changes.

## Local validation
```bash
npm ci
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm test
```

The Playwright suite uses port 3100. Document any tests you cannot run, and never report unexecuted checks as passing. Make each commit a coherent, reviewable improvement.
