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

## Development Workflow

### Quick Start
The fastest way to start development is with the preview command:

```bash
npm run rp
```

**What `npm run rp` does:**
- Updates static paths for local preview (runs `update-static-paths.js --local`)
- Kills any existing servers on ports 6006/8000
- Starts Python http.server for Labs Homepage (from `docs/`) on port 8000
- Starts Storybook dev server on port 6006
- Shows live build progress with timing
- Auto-opens both URLs in browser when ready
- Leaves servers running in background

After running, both development servers are available:
- **Storybook**: http://localhost:6006
- **Labs Homepage**: http://localhost:8000
- **Apps**: http://localhost:8000/tracker/, http://localhost:8000/today-list/, etc.

### Deployment Workflow

To build and deploy to GitHub Pages:

```bash
npm run d
```

**What `npm run d` does:**
1. Runs `update-static-paths.js --local` to prepare for local preview
2. Opens interactive menu → Select "Build & Deploy"
3. Runs pre-build checks (icon generation, icon sync)
4. Stops any running Storybook dev server
5. Builds static Storybook (`npm run build-storybook`)
6. Syncs design system files to `docs/` (runs `update-static-paths.js --auto` which detects GitHub Pages mode)
7. Fixes asset paths for GitHub Pages (`/labs/design-system/...`)
8. Commits changes with automation message
9. Pushes to `main` branch
10. GitHub Pages automatically deploys within ~30 seconds

**Deployed sites:**
- **Storybook**: https://dreisdesign.github.io/labs/design-system/
- **Labs Homepage**: https://dreisdesign.github.io/labs/
- **Tracker App**: https://dreisdesign.github.io/labs/tracker/

### Path Management System

The repository uses `scripts/update-static-paths.js` to manage asset paths for different environments:

#### Modes

1. **`--local`**: Local preview (Python http.server from project root)
   - Converts `/labs/design-system/` → `../design-system/`
   - Converts `/design-system/` → `../design-system/`
   - **Exception**: Tracker JS files (`docs/tracker/js/*.js`) are excluded - they manage their own paths via `isProd` checks

2. **`--github`**: GitHub Pages deployment
   - Converts relative paths → `/labs/design-system/`
   - Fixes Storybook iframe paths for GitHub Pages
   - Copies all assets to `docs/design-system/`

3. **`--auto`**: Auto-detect mode (used by deploy)
   - Detects GitHub repository → uses `--github` mode
   - Otherwise uses `--public` mode

#### Special Cases

**Tracker Application**
The tracker app uses a hybrid path strategy:
- **HTML files** (`docs/tracker/index.html`): Use relative paths `../design-system/` (works for both local and GitHub Pages)
- **JS files** (`docs/tracker/js/main.js`): Use runtime detection:
  ```javascript
  const isProd = location.hostname.includes('github.io');
  const dateFormatPath = isProd
      ? '/labs/design-system/utils/date-format.js'  // Production (GitHub Pages)
      : '../../design-system/utils/date-format.js'; // Local development
  ```

**Storybook Assets**
- Storybook build outputs to `design-system/storybook-static/`
- Assets are copied to `docs/design-system/assets/` (tracked in git since October 2024)
- Absolute paths in iframe.html are converted to relative paths for GitHub Pages

### Pre-commit Hook

The repository includes a pre-commit hook that:
1. Runs `update-static-paths.js --local` to normalize paths for local development
2. Stages the path changes automatically
3. Ensures committed files use local-friendly paths

This means you can work with GitHub Pages paths during development, and they'll be automatically converted to local paths before commit.

### Common Scenarios

**Editing Design System Components**
```bash
# Edit files in design-system/src/
# Changes are reflected immediately in Storybook (HMR)
npm run rp  # Preview changes
npm run d   # Deploy when ready
```

**Editing Tracker App**
```bash
# Edit docs/tracker/index.html or docs/tracker/js/main.js
npm run rp  # Preview changes at http://localhost:8000/tracker/
npm run d   # Deploy when ready
```

**Troubleshooting 404s**
If you see 404 errors for design-system assets:
1. Check if assets exist in `docs/design-system/assets/`
2. Verify paths match environment (relative for local, `/labs/` for GitHub Pages)
3. Run `npm run rp` to reset to local preview mode
4. Hard-refresh browser (Cmd+Shift+R) to clear cached 404s

## Recent Fixes & Improvements

### October 4, 2025 - Path Management & Deployment Fixes

**Issues Resolved:**
1. **Storybook Assets 404 Errors**
   - **Problem**: `docs/design-system/assets/` was in `.gitignore`, causing all Storybook build files (JS/CSS) to return 404 on GitHub Pages
   - **Fix**: Removed assets folder from `.gitignore` and committed all Storybook build files
   - **Impact**: Storybook now fully functional on GitHub Pages

2. **Storybook iframe Path Issues**
   - **Problem**: Absolute paths like `/vite-inject-mocker-entry.js` and `/assets/` don't work under GitHub Pages subpath `/labs/design-system/`
   - **Fix**: Added post-processing to `update-static-paths.js` that converts absolute paths to relative (`./vite-inject-mocker-entry.js`, `./assets/`)
   - **Impact**: Storybook iframe loads correctly on GitHub Pages

3. **Tracker date-format.js 404 Errors**
   - **Problem**: Dynamic import used relative path `../design-system/utils/date-format.js` which resolved incorrectly on GitHub Pages
   - **Fix**: Implemented `isProd` check in tracker JS to use absolute path `/labs/design-system/utils/date-format.js` for production
   - **Impact**: Tracker date formatting works on both local and production

4. **Tracker Component Import 404s**
   - **Problem**: Tracker HTML used absolute paths `/design-system/...` instead of relative paths
   - **Fix**: Updated path management to use relative paths `../design-system/...` which work on both local and GitHub Pages
   - **Impact**: All tracker components and styles load correctly

5. **Path Management Script Improvements**
   - **Problem**: Pre-commit hook was reverting production paths in tracker files
   - **Fix**: Added exclusion for tracker JS files in local mode - they manage their own paths via `isProd` checks
   - **Impact**: Tracker production paths preserved across commits and deploys

**Files Modified:**
- `.gitignore` - Removed `docs/design-system/assets/` exclusion
- `scripts/update-static-paths.js` - Added Storybook iframe path fixing, tracker JS exclusion
- `docs/tracker/js/main.js` - Added `isProd` check for dynamic imports
- `docs/tracker/index.html` - Converted to relative paths
- `docs/design-system/assets/*` - All Storybook build files now tracked in git

**Verification:**
- ✅ Storybook fully functional: https://dreisdesign.github.io/labs/design-system/
- ✅ Tracker app working: https://dreisdesign.github.io/labs/tracker/
- ✅ All design system components loading correctly
- ✅ `npm run rp` and `npm run d` workflows tested and working



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

