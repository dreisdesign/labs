---
**Note:** Storybook controls persistence (the save popup) is currently disabled for a cleaner workflow. You can re-enable it in `.storybook/preview.js` if needed.
---

# Labs Design System

This folder contains the Labs Design System: shared UI components, tokens, Storybook config, and documentation.

## Structure
- `src/components/` — Reusable UI components (Button, Input, etc.)
- `src/tokens/` — Design tokens (colors, typography, spacing)
- `.storybook/` — Storybook configuration
- `storybook-static/` — Static build output (after running `npm run build-storybook`)
- `README.md` — This file

## Usage & Docs
- Develop and document components and tokens here
- Run Storybook locally for live docs and visual testing
- Build and deploy Storybook for public docs

## Key Links
- [Global Monorepo README](../README.md)
- [Labs Storybook (Live)](https://dreisdesign.github.io/labs/design-system/)
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
