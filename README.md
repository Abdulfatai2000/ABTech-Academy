# ABTech Academy

**Learn. Build. Master.** A responsive learning platform built with Next.js 16, React 19, TypeScript, Tailwind CSS and Lucide.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000. No environment secrets or backend services are required for Phase 1.

## Validate

```bash
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm test
npm run format:check
```

The browser suite starts and stops its own production server on port 3100. Build first; keep that port available. It checks desktop and 375px mobile layouts, accessibility in both themes, navigation, quizzes, progress persistence and malformed/unavailable storage. Generated reports and browser artifacts are ignored by Git.

## Explore

- `/courses`: search and filter courses.
- `/courses/react-native`: course introduction and curriculum.
- `/learn/react-native`: connected ten-level roadmap.
- `/learn/react-native/lessons/javascript-values`: start at the beginning.
- `/learn/react-native/lessons/usestate`: detailed interactive lesson reader.
- `/projects`: self-guided project briefs.

Four beginner lessons are published. Eight later React Native modules and eight future courses are explicitly planned. Reading progress and bookmarks stay in this browser. The practice editor does not execute or assess code.

## Documentation

- [Design system](docs/DESIGN_SYSTEM.md)
- [Frontend architecture](docs/FRONTEND_ARCHITECTURE.md)
- [Course content structure](docs/COURSE_CONTENT_STRUCTURE.md)
- [Phase 1 implementation and validation](docs/PHASE_1_IMPLEMENTATION.md)
- [Development log](docs/DEVELOPMENT_LOG.md)

Read the installed guides in `node_modules/next/dist/docs/` before modifying framework integration. This project retains Cache Components and Partial Prefetching from the original Next.js configuration.
