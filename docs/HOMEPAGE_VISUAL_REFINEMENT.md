# Homepage visual refinement — Linear / Modern

## Scope

This update refines the **existing** ABTech Academy homepage without rebuilding it, changing application routes, or modifying the React Native learning workspace. It adds a short explanation of how a lesson works and clarifies what learners can do today versus what is planned.

## Visual implementation

- **Scoped theme:** `src/styles/home.css` uses `body:has(.home-page)` to customize the shared navbar, footer and buttons **only while the homepage is present**. Course and lesson pages retain their calmer Phase 1 design.
- **Dark:** Near-black `#050506` and `#020203` foundations, off-white text, indigo `#5E6AD2` decorative accents, readable lighter indigo link text, muted hairline borders.
- **Light:** A semantic light-mode translation with warm-white surfaces, subdued indigo accents and visible contrast. The original theme toggle continues to control `data-theme`; the system preference also works without a stored choice.
- **Atmosphere:** Layered radial lighting and low-opacity 64px grid detail. Decorative overlays are behind content; animations stop with reduced-motion preferences and are reduced on narrow screens.
- **Hero:** Refined type scale, accent gradient on the existing heading, brighter CTA treatment, subtle code-window depth. Existing CTAs still navigate to the same routes.
- **Cards:** More deliberate radius, borders and multi-layer shadows. Selected homepage feature and project cards use a pointer spotlight implemented by `SpotlightArticle`. The pointer coordinates are written to CSS variables rather than React state to avoid render work on mouse movements. Touch users never depend on hover.
- **Content:** Improved value proposition, guidance through the existing learning roadmap, project summaries, and future course plans. New `#inside-a-lesson` section walks through Understand → Explore → Practise → Reflect without presenting unfinished native code execution as a current feature.

## Important boundaries

- Real React Native execution, automated grading and a production AI tutor are **not** claimed to be available. Native execution remains a Phase 2 integration.
- No dependencies or npm configuration were changed.
- No new data layer, account system or backend endpoints were introduced.
- The homepage's overall information hierarchy and existing sections were preserved.
- Accessibility: visible focus styles come from the established global design system; decorative effects are non-essential; `prefers-reduced-motion` disables entrance and ambient animations.

## Follow-up verification on a development machine

The GitHub-connected editing environment allows source inspection and commits but does not provide the local `node_modules` or browser session. Run these checks in the cloned repository:

```bash
npm ci
npm run lint
npx tsc --noEmit
npm run build
npm run format:check
npm test
```

Inspect `/` on mobile and desktop, in both themes, and confirm:
- navigation and CTAs remain functional,
- the learning section and sample lesson link render correctly,
- reduced-motion and keyboard focus work,
- no horizontal overflow or hydration warnings,
- WCAG automated scans remain clean.

If the formatter requests changes, format only the modified files and make a separate scoped formatting commit.
