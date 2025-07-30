## 🛠️ Recent Fixes & Workflow Improvements

### 1. Consistent Component Paths for Public Demo
- The deploy script now copies `labs-button.js` and `labs-icon.js` from `src/components/` to `docs/design-system/components/` so the public demo and Storybook both load components from the same URL.
- This resolves 404 errors for custom elements on GitHub Pages.

### 2. Correct Icon Paths in Demo
- All icon references (including checkmark icons) in the demo now use the correct path: `/labs/design-system/icons/[icon].svg`.
- The demo HTML was updated to use the full path for the checkmark icon, fixing 404s.

### 3. Deploy Script Automation
- The deploy script (`scripts/deploy.sh`) was updated to:
  - Build Storybook.
  - Copy the static build and all required component files to the deploy directory.
  - Ensure all assets and components are present for GitHub Pages.

### 4. Storybook & Demo Parity
- Both Storybook and the public demo now use the same asset and component paths, ensuring what you see in dev matches production.

### 5. Troubleshooting Tips
- If you see 404s for icons or components, check that the deploy script is copying all necessary files and that your HTML references the correct paths.
- For any new components, add a copy step in the deploy script if they need to be public.
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
