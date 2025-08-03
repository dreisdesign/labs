
## 🆕 Recent Improvements

- **Unified Container Button System:** Modular, token-based container and destructive button variants for overlays and dialogs. Visual consistency with Tracker app.
- **Storybook Cleanup:** Redundant stories removed, sidebar and sitemap automated, and all button/icon demos are now modular and clear.
- **Button Configs:** Centralized, grouped, and documented for best practices. Container, destructive, and navigation variants are easy to use and extend.
- **Icon Color Logic:** All icon colors now use design tokens and match text in all states.
- **Overlay & Button CSS:** Improved for shape, width, and hover/fill states. Overlay buttons now match Tracker app exactly.
- **Docs & Automation:** All stories and tokens are documented. Deploy script ensures parity between Storybook and public demo. Storybook sitemap is auto-generated.

---

## Changelog

See [`CHANGELOG.md`](CHANGELOG.md) for a detailed list of recent changes and improvements.

---


# Labs Design System

This folder contains the Labs Design System: shared UI components, tokens, Storybook config, and documentation.


## Structure

- `src/components/` — Reusable UI components (Button, Input, etc.)
- `src/tokens/` — Design tokens (colors, typography, spacing)
- `.storybook/` — Storybook configuration
- `storybook-static/` — Static build output (after running `npm run build-storybook`)
- `README.md` — This file
## Components

- `labs-button`: Button component supporting primary, secondary, container, and container-danger variants, with icon and checkmark support.
- `labs-icon`: SVG icon component, supports color tokens and accessibility.
- `labs-settings-overlay`: Reusable settings modal overlay as a custom element. [Docs](components/labs-settings-overlay.md)

See `/components/` for more.



## Usage & Docs

- Develop and document components and tokens here
- Run Storybook locally for live docs and visual testing
- Build and deploy Storybook for public docs
- See the [Changelog](CHANGELOG.md) for recent updates
- See `/docs/demo/index.html` for a live demo of the design system components, including `<labs-settings-overlay>` in action.


## Key Links

- [Global Monorepo README](../README.md)
- [Labs Storybook (Live)](https://dreisdesign.github.io/labs/design-system/)
- [Design System Changelog](CHANGELOG.md)
- [Changelog & Roadmap](../docs/CHANGELOG.md)
- [Migration Guide](../_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md)

## Troubleshooting: SVG Icon MIME Type Error

**Problem:**
If you see an error like `'image/svg+xml' is not a valid JavaScript MIME type` when using SVG icons in Storybook or Vite, it means your SVGs are being imported as JavaScript modules instead of static assets.

**Solution:**

- **Do not use** `import icon from '../icons/foo.svg?url'` or `import icon from '../icons/foo.svg'` in your icon registry/component.
- Instead, use direct static paths in your icon registry, e.g.:
  ```js
  const icons = {
    check: '/icons/check--labs-icons.svg',
    ... // other icons
  };
  ```
- Make sure your `.storybook/main.js` includes the icons directory in `staticDirs`:
  ```js
  staticDirs: ["../assets", "../icons"],
  ```
- This ensures SVGs are served as static files and can be referenced by URL in your components.

**References:**

- See the [Migration Guide](../_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md) for more details.

## Recent Changes

- Sidebar navigation flattened for icons and tokens
- Tokens split into separate stories for colors, typography, spacing
- Icon grid preview added; each icon links to its demo story
- Automated icon list and grid rendering
- Obsolete MDX docs and legacy stories removed
- Storybook controls persistence disabled (no save popup)

## Developer Workflow

- Run Storybook: `npm run storybook`
- Build Storybook: `npm run build-storybook`
- Deploy: see [global README](../README.md) and [docs/README.md](../docs/README.md)

---

For setup, usage, and contribution details, see the [migration guide](../_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md).
