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
- [Today List TODOs](docs/today-list/TODO.md) — *Major UX overhaul complete: archive buttons, menu system, icon syncing* (last-updated: 2025-09-11)
	- ✅ Completed: List Input, item row component, archive/delete with undo toasts
	- ✅ Completed: Archive button visibility fixes and icon management
	- ✅ Completed: Development workflow improvements with automated icon syncing

## Development Workflow & Build System
- ✅ Completed: Menu system restructure with letter prefixes (S/L/R/D/U) and automated server management
- ✅ Completed: Icon syncing automation (`scripts/sync-icons.js`) integrated into build pipeline
- ✅ Completed: Enhanced update-static-paths.js with comprehensive asset management
- 📋 Future: Consider VS Code extension integration (documented in `plan-2025-09-10.md`)
