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

Validation outcomes and remaining limitations are recorded here after final checks. Required commands: `npm run lint`, `npx tsc --noEmit`, `npm run build`. Browser and data tests supplement these checks.
