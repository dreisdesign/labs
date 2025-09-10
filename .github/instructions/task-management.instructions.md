---
applyTo: '**'
---
Project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.

# TODO File Maintenance

When assisting with any project, always help maintain, update, and clean up the global `todo-index.md` file at the root of the repository as the canonical project-wide checklist. This includes:
- Reviewing outstanding tasks when requested.
- Removing completed or obsolete items.
- Adding new actionable items as needed.
- Keeping the TODO file as a living checklist, referenced from main documentation.
- Never rename the TODO file for each branch; keep a single canonical file for continuity.
- When asked, provide summaries, cleanups, or periodic reviews of outstanding tasks.

For area-specific or feature-specific work (e.g., colors/theming), maintain focused TODO files (such as `COLORS-DOCS--TODO.md`) and reference them from the global todo-index as needed.


---

# Server Management

## HMR (Hot Module Reload) Available
This project has HMR enabled, so file changes automatically reload without restarting servers.

## Server Detection
Before running server commands, check if a server is already running:
- Check Storybook: `lsof -ti:6006 || echo "No server on port 6006"`
- Check processes: `ps aux | grep -i storybook | grep -v grep || echo "No Storybook processes found"`

## When to Restart vs. Let HMR Handle
- **File changes** (CSS, JS, stories): Let HMR handle it automatically
- **Config changes** (.storybook/*, package.json): May need restart
- **Git operations**: Close servers first to avoid hangs

## Server Commands
- Start: `npm run storybook` (runs on port 6006)
- Stop gracefully: Use the menu system: `echo "1" | npm run menu`
- Force stop if needed: `lsof -ti:6006 | xargs kill -9`

---

# Source Directory Structure

## Local Development (Storybook)
All active development files are in `design-system/src/`:
- `design-system/src/styles/tokens/colors.css` ← **Active for Storybook**
- `design-system/src/styles/flavors.css` ← **Active for Storybook**
- `design-system/src/stories/` ← **Active story files**

## Production/Documentation
Static copies are in `docs/design-system/`:
- `docs/design-system/tokens/colors.css` ← Generated/copied from src
- These are typically built/copied from the src directory

**Rule**: When making changes for Storybook, always edit files in `design-system/src/`, not `docs/`.

---

# Avoid Git Hangups

check to see if server is running then run

echo "1" | npm run menu

---

# CI/CD and Automation Preferences

## No GitHub Actions
- **Do not suggest GitHub Actions** for automation, CI/CD, or deployment workflows
- This project uses local scripts and manual deployment processes by choice
- Prefer local automation solutions (npm scripts, shell scripts, git hooks) over cloud-based CI/CD

## Deployment Method
- Deployment is handled manually via `npm run d` (deploy script)
- Uses local build processes and git-based deployment to GitHub Pages
- Pre-commit hooks and local scripts are preferred for automation
