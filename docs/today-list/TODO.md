# Today List — TODO (MVP requirements)

Last reviewed: 2025-09-01

Priority order: MVP requirements first. Anything not marked MVP has been moved to `docs/today-list/ROADMAP.md` for future planning.

1) Add item
  - Single-line input, Enter to save
  - Trim empty values and ignore duplicates (optional)

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
