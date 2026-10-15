# Frontend architecture

ABTech Academy Phase 1 retains Next.js 16.4.1, React 19, TypeScript, Tailwind 4 and the App Router. Installed Next.js routing and server/client component guides were reviewed before implementation.

## Plan

1. Establish typed curriculum and design tokens.
2. Build shared navigation, themes and discovery pages.
3. Add local progress, connected roadmap and module views.
4. Build a focused lesson reader, authored useState content and practice foundations.
5. Add project discovery, validation and delivery documentation.

Server pages resolve content and reject unknown slugs. Small client components own search, theme, progress and lesson interactions. Course-neutral models live in `src/types`; authored records live in `src/data`; reusable presentation lives in `src/components`; browser progress lives in `src/features`.

## Scope and SRS reconciliation

Reviewed `React_Native_Masterclass_Complete_SRS_v1-1.pdf` (document identifies itself as v1.0, 60 pages). The user's Phase 1 prompt supersedes its broader launch plan: authentication, publishing backend, real execution and assessed mastery are deferred. Branding is ABTech Academy. Ten curriculum levels are discoverable, but unfinished content is explicitly planned. Reading completion is self-reported and never mastery credit. Prerequisites guide learning without locking public reading.

No SRS is missing. Unresolved later decisions include hosting, identity provider, curriculum editorial ownership, runtime provider, assessment policy and guest-progress migration. The user's original untracked PDF remains untouched and outside implementation commits.
