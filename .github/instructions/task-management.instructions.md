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

## Preview Shortcut

- `npm run rp`: runs the repo preview/menu flow (same as `r`) and attempts to open both `http://localhost:6006` (Storybook) and `http://localhost:8000/` (Labs Homepage) in the default browser once both servers are serving. Use this when you want a quick, detached preview that opens the two key pages.

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

---

# Shadow DOM Component Development

## Common Layout Issues
When working with web components that use shadow DOM (like `labs-button`, `labs-card`, etc.):

### Problem Pattern: CSS Cannot Penetrate Shadow Boundary
- External CSS selectors like `.menu labs-button button` cannot reach nested elements inside shadow DOM
- `width: 100%` on host element doesn't affect internal `<button>` element
- `display: inline-flex` on internal elements prevents width stretching in flex containers

### ❌ Avoid These Approaches
- Complex CSS selectors with `!important` to override shadow DOM styles
- Dynamic width calculations that conflict with CSS layouts
- Fighting the shadow boundary with external stylesheets

### ✅ Preferred Solution: Component Attributes
Add semantic attributes to components that internally handle layout needs:

```html
<!-- Instead of external CSS targeting -->
<labs-button fullwidth variant="secondary">Archive</labs-button>
<labs-button fullwidth variant="destructive">Delete</labs-button>
```

## Component Design Principles

### 1. Self-Contained Layout Logic
- Components should handle their own layout scenarios internally
- Use CSS custom properties for flexible theming
- Provide attributes for common layout needs (`fullwidth`, `metric`, `text-only`)

### 2. Modularity Validation
Always ask: **"Is this modular?"**
- Solution should work across different parent contexts
- Test in dropdowns, cards, flex containers, grid layouts
- Avoid context-specific CSS in parent containers

### 3. Variant Pattern
Use semantic attributes for component variations:
- `labs-card metric` - for large numeric displays
- `labs-list-item text-only` - for simple text content
- `labs-button fullwidth` - for container-width buttons

## Debugging Shadow DOM Issues

### 1. Browser Dev Tools Workflow
- Use Elements panel to inspect shadow DOM structure
- Check Computed styles to verify CSS application
- Confirm that styling reaches intended target elements

### 2. Progressive Problem Solving
1. **Identify shadow boundary** - can external CSS reach the target?
2. **Check component internals** - what styling exists inside the component?
3. **Consider component solution** - can an attribute solve this universally?
4. **Test modularity** - does it work in multiple contexts?

### 3. User Feedback Indicators
Key phrases that indicate successful solutions:
- "Finally!" - previous approaches failed, this one works
- "great!" - confirms the solution is working
- "Perfect!" - user validation of success
- Questions about modularity indicate solution quality
