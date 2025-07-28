---
applyTo: '**'
---

I am using this to write code.

Please start each response with an emoji to indicate the type of response, using the following emojis such as:
✅ for confirmation, ❓for questions, 💬 for options to consider.

If a recommended action is available please move forward with it, rather than asking for confirmation.


# Migration & Documentation Updates
- The unified migration guide is now at `_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md`.
- All migration steps, best practices, and checklists are tracked there.
- Reference this guide for any design system, app, or Storybook migration work.


# VS Code Workspace Path & Command Instructions

## Project Root
- Always start from `/Users/danielreis/labs/` (the root of your monorepo).
- All commands and scripts should assume this as the base directory unless otherwise noted.


## Key Paths
- **Design System:** `design-system/`
- **Storybook Config:** `design-system/.storybook/`
- **Storybook Source:** `design-system/src/`
- **Storybook Build Output:** `design-system/storybook-static/`
- **Apps:** `note/`, `timer/`, `tracker/`, `today-list/`
- **Demo Playground:** `demo/`
- **Scripts:** `scripts/`
- **Migration Guide:** `_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md`


## Terminal Command Rules & Migration Workflow
1. **Check your current directory:**
   - Run `pwd` to confirm you are in `/Users/danielreis/labs/` before running scripts.
   - If running npm scripts for a subproject (like Storybook), always `cd` into that folder first (e.g., `cd design-system`).
2. **Use absolute or root-relative paths** for all commands and scripts.
3. **Reference the migration guide for any design system or app migration work.**
4. **Common commands:**
   - Build Storybook (always run from the correct directory!):
     ```sh
     cd design-system
     npm install
     npm run build-storybook
     cd ..
     ```
   - Start Storybook locally (always run from the correct directory!):
     ```sh
     cd design-system
     npm run storybook
     ```
   - Deploy Storybook:
     ```sh
     cp -r design-system/storybook-static/* design-system/
     git add design-system/
     git commit -m "Deploy Storybook build"
     git push
     ```
   - Run scripts:
     ```sh
     ./scripts/your-script.sh
     ```

## VS Code Recommendations & Migration Docs
- Open the entire `labs/` folder as your workspace.
- Use VS Code's built-in terminal (it opens in the workspace root by default).
- Use VS Code's path autocompletion to avoid typos.
- When editing scripts or configs, always use root-relative paths (e.g., `design-system/src/` not `./src/`).
- For migration steps, always check `_dev/_documents/DESIGN-SYSTEM-MIGRATION-GUIDE.md` for the latest workflow and checklist.

## Path Consistency
- Never use quoted folder names (e.g., `"tracker"` is incorrect; use `tracker`).
- Avoid manual path edits in scripts—update this instructions file if paths change.
- If you add new apps or folders, document them here.

## Troubleshooting & Migration Reference
- If a command fails due to a path error, check your current directory and the path in this file.
- If you see unexpected folders (e.g., with quotes), check your scripts for incorrect path usage.
- For migration issues, consult the migration guide for troubleshooting steps and best practices.

---

**Keep this file up to date as your project evolves!**
