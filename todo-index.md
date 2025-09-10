# Project TODO




**AI: THIS IS NOT A CHANGELOG.**

**This is the canonical project-wide TODO index file.** Use this ONLY as an index of links to area- and feature-specific TODO files. This is NOT a changelog - do not track completed work here. Keep all detailed todos in the linked files to maintain clarity and focus.

**Guidelines:**
- Link to area-specific TODO files (e.g., `design-system/TODO.md`, `docs/timer/TODO.md`)
- Reference feature-specific TODOs (e.g., `COLORS-TODO.md`) from appropriate area files
- Never rename TODO files for branches; keep single canonical files for continuity
- Remove completed items; add new actionable tasks as they emerge
- This file should remain concise and focused on active work



## Design System
- [Design System TODOs](design-system/TODO.md) — *All color/theming tasks complete; only future enhancements remain* (last-reviewed: 2025-09-01)
- Remove Tokens Overview page — Tokens Overview duplicates links already present in the sidebar; remove the page and its route to simplify docs.  ✅ (archived)

## Apps

### Production Apps
- [Note App TODOs](docs/note/TODO.md)
- [Timer App TODOs](docs/timer/TODO.md)
- [Tracker App TODOs](docs/tracker/TODO.md)
- [Pad App TODOs](docs/pad/TODO.md)
- [Today List TODOs](docs/today-list/TODO.md)
	- In progress: implement List Input, item row component, archive/delete with undo toasts (working demo in `docs/today-list/index.html`)
	  - Note: For local development, use `npm run l` to preview with correct local paths, or run `node scripts/update-static-paths.js --public` manually to ensure components/tokens are available in `docs/design-system/`.
