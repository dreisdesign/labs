
# Labs Design System

---

## Overview

This is the canonical design system for Labs apps. All UI components, tokens, and Storybook documentation are maintained here.

---



## Key Docs & Links

- [Button Docs (Canonical)](src/components/labs-button/BUTTON-DOCS.md)
- [Button Docs (Canonical)](src/components/labs-button/BUTTON-DOCS.md)
- [Color Tokens & Theme Docs](src/styles/COLORS-DOCS.md)
- [Smoothie Design System Overview](smoothie.md) — Philosophy and metaphor for all components
- [Storybook Live](https://dreisdesign.github.io/labs/design-system/)
- [Changelog](CHANGELOG.md)
- [Roadmap](ROADMAP.md)
- [Modularity Guidelines](../.github/instructions/Modularity.instructions.md)

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
