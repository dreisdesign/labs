# Today List — TODO (MVP requirements)

Last reviewed: 2025-09-01

Last updated: 2025-11-03 (layout fix deployed)

Priority order: MVP requirements first. Anything not marked MVP has been moved to `docs/today-list/ROADMAP.md` for future planning.

## Completed - Layout & Responsiveness ✅

- ✅ **iOS Footer Sticky Positioning (November 2025)**: Fixed issue where footer would scroll off-screen on iPad/iPhone when list content exceeded viewport height. Implemented: `100dvh` for viewport height, `position: sticky; bottom: 0;` for footer, `min-height: 0; overflow: auto;` for internal container scrolling. Tested on iOS Safari (real device and emulation).

## MVP Requirements

1) Add item
  - Two-line input (default rows=2), Ctrl/Cmd+Enter to save (updated)
  - Trim empty values and ignore duplicates (optional)
  - Status: Input overlay implemented; clicking Add opens input, Save appends items to the demo list in `index.html`.

2) Persist items
  - Persist list to `localStorage` as JSON
  - Provide simple migration/fallback for corrupt data (reset to empty)

3) Display list
  - Render items in a mobile-first list
  - Show basic metadata (createdAt rendered via `Intl.DateTimeFormat`)

4) Mark complete / unmark
  - Toggle completion state and persist

5) Edit item
  - Inline edit or edit modal; save on Enter

6) Delete with undo
  - Soft-delete behavior with undo toast (5–8s)
  - Status: Demo wiring added to `index.html` using `labs-toast` for Undo actions on archive/delete.

New implementation tasks:
- [ ] Add `labs-list-item` component (single-row with checkbox, text, archive, delete) — implemented in `design-system/src/components/labs-list-item.js` and docs copy exists. Needs tests and Storybook story.
- [ ] Add Icon select control to Icon-Only Button story (ensure `icons-list` used); small story update needed.

Notes about recent UI changes:
- Settings overlay now uses `transparent` mode so the overlay provides backdrop only and the settings card supplies the visible surface (fixes double-wrapping). Mirrored to docs and stories in commit `76e1b47`.
- Input card default width increased (max-width ~520px) and host set to `width:100%` to allow full overlay content width when used in overlays. See `design-system/src/components/labs-input-card.js`.

7) Empty-state
  - Show a `Welcome Card` (use `labs-card` when available) with header, description and primary Add CTA

--

Non-MVP / Roadmap

All non-MVP items (components, extended behaviors, timeline features) were moved to `docs/today-list/ROADMAP.md` for prioritization and scheduling.

Link: `docs/today-list/ROADMAP.md`

If you want me to, I can now:
- scaffold the `docs/today-list/README.md` MVP section (recommended), or
- scaffold the `today-list` app files (component + stories) with basic behavior.
- draft the `labs-card` spec prior to implementing the Welcome Card.
