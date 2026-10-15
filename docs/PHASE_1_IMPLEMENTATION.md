# Phase 1 implementation

## Scope

ABTech Academy provides public discovery and a focused beginner learning slice. It does not claim to deliver the full beginner-to-advanced curriculum yet. The supplied master prompt governs Phase 1 where the SRS describes a broader release.

## Routes

- `/`: landing page, learning model, featured course and project previews.
- `/courses`: searchable course catalog and category filters.
- `/courses/react-native`: objectives, prerequisites, curriculum and project previews.
- `/learn/react-native`: connected roadmap, list alternative and reading progress.
- `/learn/react-native/modules/[moduleSlug]`: ten module views.
- `/learn/react-native/lessons/[lessonSlug]`: four published lessons, with `?step=<id>` deep links.
- `/projects`: six self-guided project briefs and milestone disclosures.

## Honest boundaries

Progress and bookmarks use localStorage, with defensive parsing and session fallback if storage fails. There is no account, database, cloud sync, payment, AI assistant, community, certificate or production code runner. Completion records reading only. Knowledge checks provide conceptual feedback; they do not validate the practice draft. Editor drafts are temporary and must be copied before leaving the step.

## Phase 2

Integrate an isolated Expo Snack adapter with loading/provider-error/fallback states; test actual native examples and dependency versions. Add deterministic behavior checks and distinguish reading from assessed mastery. Design identity, consent-based guest progress migration, server persistence and idempotent progress events. Establish versioned editorial publishing and expand the eight planned modules. Pilot the learning flow with beginners before making broader release claims.

## Validation

Validation performed on 15 October 2026:

- `npm run lint`: passed, no warnings or errors.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed with the original Cache Components and Partial Prefetching configuration retained.
- `npm run format:check`: passed.
- `npm test`: 22 passed across desktop Chromium and 375px Chromium mobile emulation.
- Automated axe WCAG A/AA scans: no violations on the tested public pages and focused lesson controls, including dark-theme scenarios.
- Browser checks covered filtering/empty states, step deep links, bookmarks, reading completion, reload/resume, quiz retries, editor/reset/reference output, roadmap selection/list mode, theme persistence, mobile keyboard navigation, malformed/blocked storage and unknown slugs.
- Tested public routes had no horizontal page overflow or uncaught browser exceptions. Desktop and mobile landing screenshots were visually reviewed.

The tests do not establish universal accessibility conformance: screen-reader review, Safari/Firefox testing, real-device testing and the SRS beginner usability pilot remain future validation. Native React Native execution and automated assessment are explicitly outside Phase 1.

`npm audit --omit=dev` reports zero vulnerabilities. The full `npm audit` reports five high findings in the existing development-only ESLint/fast-glob/micromatch/braces chain. The registry's proposed remediation downgrades `eslint-config-next` to 14.2.35. That incompatible downgrade was not applied; no force audit fix was used. Reassess the tooling chain when a compatible upstream fix is available.

## Delivery history

Work began from `135b218` on `main`; the first new commit is `334e0a6`. Commits were created for coherent foundations, individual pages, learning components, integration fixes, tests and documentation, with regular pushes to `https://github.com/Abdulfatai2000/ABTech-Academy.git`. The history is intentionally smaller than the approximate 30–50 target rather than splitting inseparable changes solely to increase the count. Use `git log --oneline 135b218..HEAD` for the complete delivery history.

The supplied SRS PDF was untracked before development and remains untracked. All implementation files are committed; the PDF was neither modified nor added to implementation commits. No hosted deployment was requested or performed.
