## Development notes — serving docs/demo locally

Issue: When running the local docs demo server (python http.server serving the `docs/` directory on port 8000), some component imports in the demo HTML referenced `/design-system/components/...` but the built components were not present under `docs/design-system/components/`, resulting in 404s for component JS (for example `labs-checkbox.js`). The Storybook environment worked because it imports components from `design-system/src/components` during development.

Fix: Run the project's asset update script to copy built public files and JS components into the `docs/design-system/` public folder. From the project root run:

```bash
node scripts/update-static-paths.js --auto
```

This will copy `design-system/src/components/*.js` to `design-system/components/` and then copy those into `docs/design-system/components/`, along with token CSS and other assets. If you prefer a one-off copy during development, copy the components directly:

```bash
cp design-system/components/* docs/design-system/components/
```

Notes:
- After running the script or copying files, hard-refresh the browser to clear cached 404s.
- The `--auto` mode detects whether the build is for GitHub Pages or public/local and applies the appropriate rewrites and copies.
