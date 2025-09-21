---
title: "v2.4.6 — Post-deploy QA & Lighthouse Follow-ups"
date: 2025-09-21
---

# v2.4.6 — Post-deploy QA Checklist

This file contains the release QA checklist and actionable Lighthouse follow-ups for the v2.4.6 release.

## QA Checklist
- [ ] Verify Storybook: `https://dreisdesign.github.io/labs/design-system/` loads and interactive stories work.
- [ ] Sanity-check apps (visit each, create/modify one sample item where applicable):
  - `/timer/` — start/stop timer
  - `/tracker/` — add sample tracking event
  - `/note/` — create a quick note
  - `/pad/` — draw a short stroke and save/export
  - `/today-list/` — add and complete a task
- [ ] Confirm each page returns HTTP 200 and has no console errors.
- [ ] If a tester sees stale absolute `/labs/...` asset requests, instruct them to unregister service workers and clear site data.

## Lighthouse Follow-ups (prioritized)
1. Add `meta[name=viewport]` with `width=device-width, initial-scale=1` to all deployed HTML pages (improves mobile rendering).
2. Ensure all pages include `<!doctype html>` at the top to prevent quirks-mode rendering.
3. Add `meta description` tags for main pages (Homepage, Design System, Tracker, Pad, Note, Today List).
4. Fix accessibility issues flagged by Lighthouse:
   - Provide accessible names for interactive elements (`button-name`, `link-name`).
   - Remove prohibited ARIA attributes and validate ARIA roles.
   - Improve color contrast where necessary.
5. Investigate `errors-in-console` Lighthouse finding — run the apps locally with DevTools open and fix JS console errors.
6. Tune cache headers for static assets (long TTLs for hashed assets, short TTLs for index.html).

## Notes & Guidance
- The `update-static-paths.js` script rewrites asset paths for GitHub Pages during deploy — when making local preview changes, keep one set of local-relative imports under `design-system/src/` and let the deploy flow rewrite for `docs/`.
- For mass client recovery from broken service workers, use `scripts/unregister-sws.js` (headful Puppeteer) or instruct users to unregister via DevTools -> Application -> Service Workers.
