# Labs Design System

> **Production-Ready Component Library with Complete Token Architecture**

---

## Overview

This is the canonical design system for Labs apps, featuring a comprehensive two-layer token system, semantic color architecture, and modular Web Components. All UI components, design tokens, and documentation are maintained here with full theme support and accessibility compliance.


**🎯 Current Status: Production-Ready & Robust**

**2025-09-16 Icon Issue Reference:**

**Icon Not Showing in Dropdown (e.g. more_vert):**
- If an icon is missing in the UI, check that its SVG filename in `design-system/icons/` ends with `--labs-icons.svg` (e.g. `more_vert--labs-icons.svg`).
- The icon generation script (`scripts/generate-icons-list.mjs`) only includes files with this suffix.
- After renaming, run `npm run r` to regenerate the icons map and sync all components.
- Manual copying is not required; the build system will sync files automatically.
- This fixes issues where icons disappear after server restarts or builds.

**2025-09-05 Update:**
- All icons in Labs apps and demos must use the `<labs-icon>` component and the design system icon set (see `src/components/labs-icon.js`).
- Inlined SVGs are not allowed in app or demo markup; all icons are loaded dynamically from the icon set for consistency and maintainability.
- Theme and flavor toggles in all apps are now fully consistent with Storybook and the design system.
- ✅ Complete semantic token system with "on-" text color pairings
- ✅ Three-flavor theming (Vanilla, Blueberry, Strawberry) with light/dark modes
- ✅ WCAG AA accessibility compliance across all combinations
- ✅ Strategic Storybook documentation with Base column and reorganized Colors story
- ✅ Robust Colors story: all tokens and flavors now display correct base mapping and theme-driven polaroid labels

---



## Key Docs & Links

 - **Note:** Small UI parity fixes (icon-only button color and Global colors story rendering) were applied on 2025-08-31 — see `CHANGELOG.md` Unreleased section.
## � Modular Container & Header Token Usage (2025-10-02)
- `<labs-container>` is now the canonical way to wrap app content, providing mobile-first max-width and grid token-based padding.
- Headers in all apps use design system tokens (`--font-size-h1`, `--font-weight-heading`) for font size and weight.
- Tracker and Today-list now use the same header/date/metric card structure for true design system parity.
- `<labs-header>` component now supports `center` and `show-subtitle` attributes for flexible layout and Storybook controls.
- Storybook story for labs-header includes boolean controls for centering and subtitle visibility.
- Tracker markup fixed: header, metric card, and list root are now properly wrapped in container/main/section for correct rendering.
- **[📐 Modularity Guidelines](../.github/instructions/Modularity.instructions.md)** — Development principles

---

## Structure

- `src/components/` — Modular UI components (Button, Icon, Overlay, etc.)
- `src/tokens/` — Design tokens (colors, typography, spacing)
- `.storybook/` — Storybook config
- `storybook-static/` — Static build output

---

## Usage

- Run Storybook: `npm run storybook`
- Build Storybook: `npm run build-storybook`
- All component and token documentation is in Storybook or the canonical docs above.

---

## Contribution

- Follow [Modularity Guidelines](../.github/instructions/Modularity.instructions.md)
- All new docs should be added to the appropriate canonical file or Storybook story.

---

## Archive

The previous README has been archived for reference in `_archive/README-2021-2025.md`.

For setup, usage, and contribution details, see the [migration guide](../_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md).

## 🆕 Recent UX & Component Improvements

### Archive/Restore Logic for List Items
- List items (`<labs-list-item>`) now visually distinguish between normal, archived, and restored (inactive) states.
- The archive button icon changes to a history icon when archived, and becomes inactive (faded) when restored.
- See the new Storybook story: `List Item/Archived` for a live demo of all states.

### List Item — Timestamp & Centered Content
- The `labs-list-item` component now supports a refined `timestamp`/`text-only` presentation where the control (checkmark) and action slots match sizing, and the content is centered.
- For timestamp-driven lists (like Tracker), prefer using `variant="text-only"` or `variant="timestamp"` so the left (control) slot is constrained to a 40×32 container and the icon itself is kept to a 20px height for visual parity with action buttons.
- The `content` slot is wrapped in a `.text` container that flex-grows and centers its text, which is ideal for timestamp-only rows and empty states.

### Input Card & Destructive Button UX
- Input cards now have `autocomplete="off"` for better browser UX.
- Destructive button icons (e.g., delete/reset) now always use the correct error color in all themes.

### Dropdown Portal Architecture (2025-09-30)
- **Major Improvement**: `<labs-dropdown>` now uses a document-level portal pattern to prevent menu clipping issues.
- The dropdown menu is rendered outside its parent component at document level (`#labs-dropdown-portal`), completely avoiding ancestor overflow constraints.
- **Benefits**: No more clipped menus in list items, cards, or containers with `overflow: hidden`. Consistent z-index behavior. Better accessibility.
- **Technical**: Uses viewport-aware positioning, automatic cleanup, and maintains all existing keyboard navigation and event handling.
- **Breaking Change**: None - all existing usage remains identical. This is a pure architectural improvement.
- See Storybook stories: `Components/List Item` and `Templates/Smoothie` for examples of dropdowns that now render properly.
