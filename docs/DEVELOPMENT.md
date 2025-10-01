## Metric Card Fixes (Tracker App)

To update the metric card styles or logic in the Tracker app, always edit the source file:

```
src/tracker/js/main.js
```

Edits made directly in `docs/tracker/js/main.js` will be overwritten by the build/sync process. After making changes in the source file, run:

```
npm run rp
```

This will sync your changes to the production docs and ensure the fix persists. Hard-refresh your browser after syncing to see the update.

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
