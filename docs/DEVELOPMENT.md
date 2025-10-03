## Metric Card Implementation

### Overview
The metric card variant (`<labs-card variant="metric">`) uses a modular pattern combining shadow DOM styles with CSS custom properties to ensure consistent appearance across all applications.

### CSS Custom Properties Pattern
The `labs-card` component defines metric-specific CSS custom properties on the host element via `connectedCallback`:
- `--metric-label-size: 0.875rem`
- `--metric-label-weight: 800`
- `--metric-label-line-height: 1.2`
- `--metric-value-size: 2rem`
- `--metric-value-weight: 800`
- `--metric-value-line-height: 1.2`

These properties are set directly on the host element's inline style to ensure they're accessible to light DOM slotted content.

### Usage in Applications
When rendering metric cards in apps (e.g., Tracker), use inline styles that reference the CSS custom properties:

```javascript
const label = document.createElement('div');
label.className = 'metric-label';
label.style.cssText = 'font-size: var(--metric-label-size, 0.875rem); font-weight: var(--metric-label-weight, 800); line-height: var(--metric-label-line-height, 1.2); color: var(--color-on-surface); margin-bottom: var(--space-md, 1rem); text-align: center; width: 100%;';
label.textContent = 'Entries';
```

This pattern ensures:
- **Modularity**: Component controls the CSS custom property values
- **Consistency**: All metric cards use the same typography tokens
- **Flexibility**: Apps can override values if needed by setting custom properties on the component

### Updating Metric Card Styles (Tracker App)
To update the metric card logic in the Tracker app, always edit the source file:

```
src/tracker/js/main.js
```

Edits made directly in `docs/tracker/js/main.js` will be overwritten by the build/sync process. After making changes in the source file, run:

```
npm run rp
```

**What `npm run rp` does:**
- Updates static paths for local preview
- Kills any existing servers on ports 6006/8000
- Starts Python http.server for Labs Homepage (from `docs/`)
- Starts Storybook dev server
- Shows live build progress with timing
- Auto-opens both URLs in browser when ready
- Leaves servers running in background

After running, your changes will be synced to production docs and both servers will be available at:
- Storybook: http://localhost:6006
- Labs Homepage: http://localhost:8000
- Apps: http://localhost:8000/tracker/, http://localhost:8000/today-list/, etc.

Hard-refresh your browser after syncing to see the update.

## Development notes — serving docs/demo locally

Issue: When running the local docs demo server (python http.server serving the `docs/` directory on port 8000), some component imports in the demo HTML referenced `/design-system/components/...` but the built components were not present under `docs/design-system/components/`, resulting in 404s for component JS (for example `labs-checkbox.js`). The Storybook environment worked because it imports components from `design-system/src/components` during development.

Fix: Run the project's asset update script to copy built public files and JS components into the `docs/design-system/` public folder. From the project root run:

```bash
node scripts/update-static-paths.js --public
```

This will copy `design-system/src/components/*.js` to `design-system/components/` and then copy those into `docs/design-system/components/`, along with token CSS and other assets. If you prefer a one-off copy during development, copy the components directly:

```bash
cp design-system/components/* docs/design-system/components/
```

Notes:
- After running the script or copying files, hard-refresh the browser to clear cached 404s.
- The `--auto` mode detects whether the build is for GitHub Pages or public/local and applies the appropriate rewrites and copies.

Additional context and guidance:
- For local development, prefer `--public` so asset paths are rewritten for a local `python3 -m http.server` preview (paths like `/design-system/...`).
- The repository includes a pre-commit hook that runs the same script in `--auto` mode before commit; this automatically converts local/public paths to the GitHub Pages format (`/labs/design-system/...`) and stages the changes. That means committing local-preview edits is safe: the pre-commit hook will ensure committed files use the public/GitHub paths expected for deployment.
- The deploy script (`scripts/deploy.sh`) also runs `update-static-paths.js --auto` during the deploy flow to ensure the published `docs/design-system/` contains correctly rewritten GitHub Pages paths and copied assets.

If you see 404s while serving `docs/` locally, run:

```bash
# one-off local preview prep
node scripts/update-static-paths.js --public

# then serve the docs directory
python3 -m http.server 8000 --directory docs
```

Or use the menu helper which runs the public rewrite for preview:

```bash
npm run l   # opens the "Preview Labs Homepage" flow in the menu and applies --public
```

## Src automatic (what is mirrored from `src` → `docs`)

The project ships a small sync helper (`scripts/update-static-paths.js`) that automatically copies a set of "public" files from the editable `src/` tree into the publication-ready `docs/` tree. This keeps the GitHub Pages `docs/` demo in sync with active development without requiring manual file copies for every change.

Key behaviors (summary):
- Inputs: `design-system/src/*` and selected `src/{app}/js/*` folders.
- Outputs: `design-system/components/`, `design-system/tokens/`, `design-system/styles/`, `docs/design-system/` utilities, and `docs/{app}/js/` for the mirrored apps.
- Trigger points: the sync runs during the common workflows below (see "When it runs").

What the script copies (by default):
- Design system JS components: `design-system/src/components/*.js` → `design-system/components/` (public copy).
- Token CSS and flavors: `design-system/src/styles/tokens/*.css` → `design-system/tokens/` and `docs/design-system/tokens/`.
- Main CSS and TL styles: `design-system/src/styles/main.css` → public `design-system/main.css` and a docs-corrected `docs/design-system/styles/main.css` (import paths adjusted).
- Utilities: `design-system/src/utils/*.js` → `docs/design-system/utils/` (e.g. `date-format.js`).
- Assets & icons: `design-system/assets/` → `design-system/storybook-static/assets/` and `docs/design-system/icons/` (SVGs copied from `design-system/icons/`).
- Storybook static assets: copied into `design-system/storybook-static/assets` for local preview consistency.
- App JS for a small list of apps (configurable in the script): `src/{app}/js/*.js` → `docs/{app}/js/` (defaults: `tracker`, `today-list`, `note`, `pad`).

What the script does NOT do (important):
- It does not automatically copy app HTML (`src/{app}/index.html`) into `docs/{app}/index.html` — the `docs/` HTML files remain authoritative for the published site. If you maintain app HTML in `src/` and want it mirrored, copy it manually or add a mirroring step to the script.
- It does not remove files from `docs/` when you delete them from `src/`. If you delete source files, clean up `docs/` manually.

When it runs
- `npm run rp` (repo preview) calls the update script to prepare a local preview (mode --local or --public as configured).
- The deploy menu and `npm run deploy` call the script in `--auto` or `--github` mode as part of the build/deploy flow so published assets are copied and paths rewritten for GitHub Pages.
- Pre-commit or other hooks in the repo may also run the script in `--auto` mode to normalize public paths before commits.

How to opt-in / opt-out / customize
- One-off copy (manual): copy app JS or components directly:

```bash
# copy components or JS to docs once
cp design-system/components/* docs/design-system/components/
cp src/tracker/js/* docs/tracker/js/
# optionally copy HTML if you want src/index.html mirrored
cp src/tracker/index.html docs/tracker/index.html
```

- To change which apps are mirrored, update the `appsToMirror` array at the bottom of `scripts/update-static-paths.js` (e.g., add or remove `'tracker'`, `'today-list'`, `'note'`, `'pad'`).
- To stop automatic copying of components to the public `design-system/components/` folder, remove or guard the copy block that copies `design-system/src/components` in the script.

Common gotchas & recommendations
- Edit source JS under `src/` (for apps) and `design-system/src/` (for components/tokens). Edits performed directly under `docs/` may be overwritten by the sync step.
- The script is conservative: it copies files but does not delete stale files from `docs/` automatically. If you rename or remove a source file, manually remove the old file from `docs/`.
- For local preview use `npm run rp` (recommended) which sets the correct mode and copies the required assets. If you must serve docs directly with `python3 -m http.server`, run `node scripts/update-static-paths.js --public` first.
- If you need `docs/` HTML to reflect `src/` HTML automatically, we can add an optional mirroring step to the script — tell us which apps to mirror and whether you want the behavior enabled by default.

Deploy note
- The deploy flow publishes the `docs/` folder to GitHub Pages. The deployment script intentionally commits `docs/design-system` (the generated public files) and no longer forces adding ignored `design-system/components` files. If you want generated public components committed, add them manually with `git add -f design-system/components` (not recommended for routine deploys).

Examples
- Make a local change to a component or app JS, run preview, and verify:

```bash
# edit source
code design-system/src/components/labs-footer-with-settings.js
# prepare preview and run servers
npm run rp
# open http://localhost:6006 (Storybook) and http://localhost:8000/tracker/
```

If anything looks stale on the demo pages, hard-refresh the browser (clear cache) after running the sync step.

