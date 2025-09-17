# Tracker Migration TODO

Goal: Rebuild the Tracker app using the Smoothie Design System template
(https://dreisdesign.github.io/labs/design-system/?path=/story/templates-smoothie-template--smoothie-template).

Notes:
- Existing tracker has been backed up to `_archive` (do not delete backups).
- We are starting a fresh implementation using the Smoothie template components and patterns.

Steps & Components
-------------------

1. Setup base template
   - [ ] Create a new page using the Smoothie template as a base (`templates/smoothie-template`).
   - [ ] Ensure global tokens and `flavors.css` are loaded and match app expectations.

2. Core UI pieces to implement (Smoothie equivalents)
   - [ ] Metric card (summary/total) — map to `labs-card` + heading + large numeric value pattern
   - [ ] Primary Track button — implement using `labs-button` (support both top/bottom placements)
   - [ ] Settings button & overlay — replace current overlay with `labs-overlay` + `labs-settings-card` or equivalent
   - [ ] Timestamp list — implement using `labs-list` / `labs-list-item` pattern (grouped by date)
   - [ ] Undo affordance — use `labs-toast` or `labs-button` with overlay for undo interactions
   - [ ] Comment overlay — map to `labs-overlay` + `labs-input-card` or a lightweight `labs-card` with textarea
   - [ ] Label edit overlay — similar mapping to comment overlay

3. Behavior & Patterns
   - [ ] Persist state using same LocalStorage keys and validate shape on load
   - [ ] Maintain undo semantics and timers
   - [ ] Respect PWA/standalone detection (preserve `isRunningAsWebApp` behavior)
   - [ ] Ensure keyboard accessibility for overlays and inputs (focus trap, Escape to close)

4. Assets & Icons
   - [ ] Use `labs-icon` for all iconography; add any missing icons to the design-system icons list
   - [ ] Move app-specific static images (if still needed) into design-system icons when appropriate

5. Theming & Tokens
   - [ ] Ensure the app uses `--color-surface-variant` and flavor tokens instead of hardcoded colors
   - [ ] Validate dark-mode switch and persistence via `localStorage` (existing theme logic should remain)

6. Migration & Cleanup
   - [ ] Move current tracker HTML/CSS/JS to `_archive` directory (already done)
   - [ ] Implement the new tracker under `docs/tracker/` (replace index.html and `js/*` as needed)
   - [ ] Update `docs/tracker/CHANGELOG.md` with migration notes

7. Tests & Validation
   - [ ] Build Storybook and ensure `Smoothie Template` stories render without errors
   - [ ] Smoke test the new tracker page in desktop and mobile breakpoints

8. Follow-up Tasks
   - [ ] Add usage documentation for newly created components/patterns specific to Tracker
   - [ ] Consider adding an integration story to Storybook demonstrating the Tracker layout

Priority & Notes
----------------
- High priority: Metric card, Track button, Timestamp list, Settings overlay.
- Medium: Undo behavior, Comment/Label overlays, Themability tests.
- Low: Migration of legacy images; can be deferred if using `labs-icon` replacements.

If you want, I can start implementing the base Smoothie template and scaffold the new Tracker page next.
