# Today List — TODO (MVP requirements)

Last reviewed: 2025-09-01

Priority order: MVP requirements first. Anything not marked MVP has been moved to `docs/today-list/ROADMAP.md` for future planning.

1) Add item
  - Single-line input, Enter to save
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
