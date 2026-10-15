# Course content structure

`Course → Level → Module → Lesson → LearningStep` is the reusable hierarchy. Each record has a stable slug or ID. A course carries a category, difficulty, availability, description and technologies; a module references lesson slugs and prerequisite module slugs. Projects reference a module and contain self-guided milestones. Step content can include a typed code example, exercise and knowledge check.

## Initial inventory

- React Native: ten levels, one module per level.
- Four published lessons: Values and variables; Functions and arrays; Components and props; Making your app interactive with useState.
- The useState lesson has seventeen focused steps and five explained questions.
- Eight later React Native modules are explicitly planned, with objectives and project connections.
- Eight future courses are marked coming soon.
- Six project briefs; the Counter App links to the authored water-tracker activity.

Durations are editorial estimates, not measured completion times. Counts are calculated from records. Planned modules cannot be marked completed merely because they have no lessons. Prerequisites recommend an order without restricting guest reading.

## Content policy

Use original plain-language explanations, complete imports for runnable examples, clearly labeled fragments for syntax and solutions, and a written expected output. Do not label the reference output as execution. Quizzes explain answers and permit retrying. Reading completion is separate from mastery. Code practice requires an external React Native environment until Phase 2.

Reference checks: [React useState](https://react.dev/reference/react/useState), [React Native Button](https://reactnative.dev/docs/button), and [TextInput](https://reactnative.dev/docs/textinput). The lesson applies setter/updater semantics, event callbacks and controlled text inputs from these primary references.

## Adding content

1. Add course-neutral records using `src/types/course.ts`.
2. Add unique lesson and step slugs; update the owning module's lesson references.
3. Specify honest publication status, objectives, prerequisites and estimated duration.
4. Author practice hints, expected output and useful answer explanations.
5. Run content tests, TypeScript, lint, build and browser checks.

Future backend content should add revision IDs and publication workflows before syncing assessed progress. Browser progress uses a versioned storage key and is not a trusted assessment ledger.
