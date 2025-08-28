
# Labs Design System

> **Production-Ready Component Library with Complete Token Architecture**

---

## Overview

This is the canonical design system for Labs apps, featuring a comprehensive two-layer token system, semantic color architecture, and modular Web Components. All UI components, design tokens, and documentation are maintained here with full theme support and accessibility compliance.


**🎯 Current Status: Production-Ready & Robust**
- ✅ Complete semantic token system with "on-" text color pairings
- ✅ Three-flavor theming (Vanilla, Blueberry, Strawberry) with light/dark modes
- ✅ WCAG AA accessibility compliance across all combinations
- ✅ Strategic Storybook documentation with Base column and reorganized Colors story
- ✅ Robust Colors story: all tokens and flavors now display correct base mapping and theme-driven polaroid labels

---



## Key Docs & Links

- **[🎨 Color Tokens & Theme Docs](src/styles/COLORS-DOCS.md)** — Complete theming guide and token architecture
- **[🎨 Storybook Live](https://dreisdesign.github.io/labs/design-system/)** — Interactive component documentation
- **[🔘 Button Docs](src/components/labs-button/BUTTON-DOCS.md)** — Canonical button component documentation
- **[Smoothie Design System Overview](smoothie.md)** — Philosophy and metaphor for all components
- **[📋 Changelog](CHANGELOG.md)** — Version history and updates
- **[🛤️ Roadmap](ROADMAP.md)** — Planned features and improvements
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
