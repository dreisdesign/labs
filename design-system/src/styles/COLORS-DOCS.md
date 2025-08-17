# Color Tokens & Theme System

This document explains the Labs Design System color organization: the small brand palette (base colors), the semantic tokens used by components, and how theme flavors (blueberry/strawberry) + light/dark modes map to those tokens.

## Summary
- Palette: a small set of base colors (brand anchors). Keep this minimal and stable.
- Semantic tokens: the colors components consume (e.g., `--color-primary`, `--color-background`, `--color-surface`, `--color-on-primary`). These are the public API for theming and should be used across components.
- Flavors: per-flavor token overrides live in `src/styles/flavors.css` and are applied via classes like `flavor-blueberry` and `flavor-strawberry` combined with `theme-light` / `theme-dark`.

## Where to look in the code
- `tokens/colors.css` — the small palette file (recommended location: `src/styles/tokens/colors.css`). Define `--palette-*` variables here.
- `src/styles/main.css` — the global entrypoint. It imports `tokens/colors.css` and declares root/global utility tokens (status colors, surface containers, outlines). It can also provide fallback semantic tokens for non-themed contexts.
- `src/styles/flavors.css` — declares `--color-*` semantic tokens per flavor + theme (e.g., `.flavor-blueberry.theme-dark { ... }`) and is applied by toggling classes on `document.documentElement`.

## Global root colors (existing)
The system currently exposes several useful root/global colors in `:root` (see `src/styles/main.css`):

- `--color-overlay-background` — overlay backdrop color
- `--shadow-overlay` — overlay shadow
- `--color-success`, `--color-warning`, `--color-error-inactive` — status colors
- `--color-on-success`, `--color-on-warning`, `--color-on-error-inactive` — on-colors for status tokens
- `--color-surface-container`, `--color-surface-container-high`, `--color-surface-variant` — surface containers used for cards/panels
- `--color-outline`, `--color-outline-variant` — subtle outline/border colors

These are intentionally kept at the root because they are used by utilities and pattern-level layouts. Flavor-specific token overrides (for `--color-background`, `--color-surface`, `--color-primary`, etc.) live in `flavors.css` and are applied by setting `document.documentElement.classList.add('flavor-blueberry', 'theme-dark')` (see Storybook preview & manager decorators).

## Recommended token structure (minimal)
For now we keep the token surface as small as possible to maximize modularity and reduce cognitive load.

1. Palette (base colors) — a tiny, stable set of anchors in `tokens/colors.css` as `--palette-*` variables. Keep 5 shades per brand flavor and 5 neutral stops.
2. Semantic tokens — the public component API. Start with this pragmatic-minimal set (place fallbacks in `main.css`, flavors map these):
  - `--color-primary`
  - `--color-background`
  - `--color-surface`
  - `--color-on-primary`
  - `--color-on-background`
  - `--color-error`
3. Flavor overrides — `flavors.css` must map the semantic tokens above to palette anchors for each flavor + theme. No flavor should introduce new semantic names.

Clear derivation pattern (recommended)

1) `tokens/colors.css` — base palette

```css
/* src/styles/tokens/colors.css */
:root {
  --palette-blueberry: #2e2b74;
  --palette-blueberry-10: #c1c1ff;
  --palette-strawberry: #800800;
}
```

2) `src/styles/main.css` — global tokens & fallbacks

```css
/* src/styles/main.css */
@import "./tokens/colors.css";

:root {
  /* utility/status tokens that live at root and are always available */
  --color-success: rgb(0, 181, 106);
  --color-warning: rgb(255, 198, 52);
  --color-error-inactive: rgb(181, 181, 181);

  /* optional: provide sensible semantic fallbacks that use palette values */
  --color-primary: var(--palette-blueberry);
  --color-background: var(--palette-blueberry-10);
  --color-surface: #ffffff;
}
```

3) `src/styles/flavors.css` — flavor + theme overrides (applied via classes on root)

```css
/* src/styles/flavors.css */
.flavor-blueberry.theme-light {
  --color-primary: var(--palette-blueberry);
  --color-background: var(--palette-blueberry-10);
  --color-surface: #ffffff;
}
.flavor-blueberry.theme-dark {
  --color-primary: var(--palette-blueberry);
  --color-background: #121212;
  --color-surface: #1e1e1e;
}
```

Explanation:
- `tokens/colors.css` contains brand anchors — the single source of truth for raw palette values.
- `main.css` imports the palette and exposes global utility tokens and optional semantic fallbacks so that the system works even if no flavor classes are applied (useful for server-rendered pages or docs fallbacks).
- `flavors.css` contains the authoritative per-flavor, per-theme overrides for all semantic tokens; these are toggled by adding `flavor-*` and `theme-*` classes to `document.documentElement` (the Storybook decorators do this already).

This structure keeps the palette small and stable while allowing semantic tokens to be expressive and themeable.

## Docs & usage
- Use semantic tokens in components: `color: var(--color-on-background)` not a palette color.
- For new tokens, add them to `tokens/colors.css` and reference them in `flavors.css`.
- Storybook already syncs the active flavor & theme via `preview.js` → `manager.js` message sync so docs and components will show the same token set.

## Migration notes
- If you rename `Colors` in docs to `Theme Colors` or split into `Palette` + `Color Tokens`, update links in README and component docs to point to this new file and the palette file.

---
_This file was generated automatically as part of the documentation reorganization. Keep `tokens/colors.css` as the single source of truth for base palette values and `flavors.css` for per-flavor overrides._

## Current token snapshot (what's defined now)
Below is a quick reference of the color tokens that currently exist in the codebase based on `src/styles/main.css` and `src/styles/flavors.css`. This is a read-only snapshot to help you understand what to expect today.

### Root / global tokens (minimal contract)
The canonical minimal root semantic tokens we expose (and that components should consume) are:

- `--color-primary`
- `--color-background`
- `--color-surface`
- `--color-on-primary`
- `--color-on-background`
- `--color-error`

Utilities (shadows, overlays, spacing, typography) may remain at root but color semantics should be constrained to the list above.

### Flavor + theme tokens (from `src/styles/flavors.css`)
These are the semantic tokens that `flavors.css` currently defines for each flavor + theme combination.


Blueberry (dark)
- `--color-primary`: rgb(46, 43, 116)
- `--color-background`: rgb(18, 18, 18)
- `--color-surface`: rgb(30, 30, 30)
- `--color-on-primary`: rgb(255, 255, 255)
- `--color-on-background`: rgb(193, 193, 255)
- `--color-error`: rgb(207, 102, 121)
- `--color-on-error`: rgb(0, 0, 0)
- `--settings-icon-color`: rgba(255, 255, 255, .25)

Strawberry (light)
- `--color-primary`: rgb(128, 8, 0)
- `--color-background`: rgb(254, 226, 225)
- `--color-surface`: rgb(255, 255, 255)
- `--color-on-primary`: rgb(255, 255, 255)
- `--color-on-background`: rgb(34, 34, 34)
- `--color-error`: rgb(229, 57, 53)
- `--color-on-error`: rgb(255, 255, 255)
- `--settings-icon-color`: rgb(102, 6, 0)

Blueberry (light)
- `--color-primary`: rgb(46, 43, 116)
- `--color-background`: rgb(193, 193, 255)
- `--color-surface`: rgb(255, 255, 255)
- `--color-on-primary`: rgb(255, 255, 255)
- `--color-on-background`: rgb(22, 10, 56)
- `--color-error`: rgb(181, 0, 90)

Blueberry (dark)
- `--color-primary`: rgb(46, 43, 116)
- `--color-background`: rgb(18, 18, 18)
- `--color-surface`: rgb(30, 30, 30)
- `--color-on-primary`: rgb(255, 255, 255)
- `--color-on-background`: rgb(193, 193, 255)
- `--color-error`: rgb(207, 102, 121)

Strawberry (light)
- `--color-primary`: rgb(128, 8, 0)
- `--color-background`: rgb(254, 226, 225)
- `--color-surface`: rgb(255, 255, 255)
- `--color-on-primary`: rgb(255, 255, 255)
- `--color-on-background`: rgb(34, 34, 34)
- `--color-error`: rgb(229, 57, 53)

Strawberry (dark)
- `--color-primary`: rgb(128, 8, 0)
- `--color-background`: rgb(34, 34, 34)
- `--color-surface`: rgb(24, 24, 24)
- `--color-on-primary`: rgb(255, 255, 255)
- `--color-on-background`: rgb(255, 255, 255)
- `--color-error`: rgb(255, 111, 96)

---
If you'd like, I can:
- extract these values into `src/styles/tokens/colors.css` as `--palette-*` variables and update `flavors.css` to reference them (keeps palette centralized), or
- add a Storybook visual tokens page that renders these swatches for each flavor + theme so you can inspect contrast and color relationships visually.

## Implementation notes (what I found)

- The palette file already exists at `src/styles/tokens/colors.css` and contains `--palette-*` variables for Blueberry, Strawberry, and several neutral helpers.
- `src/styles/flavors.css` correctly maps semantic tokens (e.g. `--color-primary`, `--color-background`) to the palette variables for each flavor+theme.
- There is an existing Storybook tokens story at `design-system/src/stories/tokens/colors.stories.js` that renders palette swatches and flavor/theme sections.
- `src/styles/main.css` imports the tokens and flavors and contains root/global utility tokens used across components (overlay, surface-containers, shadows, etc.).
- I noticed some semantic tokens and light/dark theme blocks are also present inside `src/styles/tokens/colors.css` (for example a `:root` block and `.theme-light` / `.theme-dark` sections). That overlaps with the intent in this doc (where `tokens/colors.css` should be a small palette and `flavors.css` should hold flavor/theme overrides). This is harmless now but could lead to duplicate/conflicting declarations later.

## Suggested next steps (small, prioritized)

1. Centralize only palette values in `tokens/colors.css` (keep `--palette-*` only). Move semantic fallbacks and `.theme-light` / `.theme-dark` blocks out of `tokens/colors.css` into `src/styles/main.css` (for fallbacks) and `src/styles/flavors.css` (for per-flavor overrides). This removes duplication and matches the docs.
2. Run a quick scan to ensure every semantic token referenced in components (e.g. `--color-primary-25`, `--color-on-surface-variant`) is defined either in `main.css` (fallback) or in every flavor+theme in `flavors.css`.
3. Add a small CI lint or test that detects unknown CSS custom properties in component CSS (optional low-effort: a grep-based check in `scripts/` that fails on undeclared tokens).
4. Keep the Storybook tokens page and expand it (if helpful) to show contrast numbers and token name copy-to-clipboard.

If you want, I can start with step (1) and perform the mechanical cleanup (move theme blocks out of `tokens/colors.css` and update imports). It's low-risk and reversible — I can create a small PR with the change and run a smoke-check by opening the tokens story in Storybook (or run a local preview) to confirm nothing visually regressed.
