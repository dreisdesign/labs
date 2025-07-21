---
applyTo: '**'
---
Provide project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.

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

## Terminal Command Rules
1. **Check your current directory:**
   - Run `pwd` to confirm you are in `/Users/danielreis/labs/` before running scripts.
2. **Use absolute or root-relative paths** for all commands and scripts.
3. **Common commands:**
   - Build Storybook:
     ```sh
     cd design-system
     npm install
     npm run build-storybook
     cd ..
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

## VS Code Recommendations
- Open the entire `labs/` folder as your workspace.
- Use VS Code's built-in terminal (it opens in the workspace root by default).
- Use VS Code's path autocompletion to avoid typos.
- When editing scripts or configs, always use root-relative paths (e.g., `design-system/src/` not `./src/`).

## Path Consistency
- Never use quoted folder names (e.g., `"tracker"` is incorrect; use `tracker`).
- Avoid manual path edits in scripts—update this instructions file if paths change.
- If you add new apps or folders, document them here.

## Troubleshooting
- If a command fails due to a path error, check your current directory and the path in this file.
- If you see unexpected folders (e.g., with quotes), check your scripts for incorrect path usage.

---

**Keep this file up to date as your project evolves!**
