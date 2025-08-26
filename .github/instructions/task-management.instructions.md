---
applyTo: '**'
---
Project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.

# TODO File Maintenance

When assisting with any project, always help maintain, update, and clean up the global `TODO.md` file at the root of the repository as the canonical project-wide checklist. This includes:
- Reviewing outstanding tasks when requested.
- Removing completed or obsolete items.
- Adding new actionable items as needed.
- Keeping the TODO file as a living checklist, referenced from main documentation.
- Never rename the TODO file for each branch; keep a single canonical file for continuity.
- When asked, provide summaries, cleanups, or periodic reviews of outstanding tasks.

For area-specific or feature-specific work (e.g., colors/theming), maintain focused TODO files (such as `COLORS-DOCS--TODO.md`) and reference them from the global TODO as needed.


---

# Server Management

Before doing git commands make sure a server is not running first and close it - otherwise it will just hang.

---

# Documentation
Ensure appropriate docs are being updated and maintainted and organized.

---

# Avoid Git Hangups

check to see if server is running then run

echo "1" | npm run menu
