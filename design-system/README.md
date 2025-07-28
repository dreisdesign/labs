# Design System

This folder contains the Labs Design System, including all shared UI components, Storybook configuration, and documentation.

## Structure
- `src/components/` — All reusable UI components (e.g., Button, Input, etc.)
- `.storybook/` — Storybook configuration files
- `storybook-static/` — Static build output (after running `npm run build-storybook`)
- `README.md` — This file

## Usage
- Develop and document components here.
- Run Storybook locally for living documentation and visual testing.
- Build and deploy Storybook as described in the main project plan.

See the main project plan and VS Code instructions for details on paths and commands.

## Recent Changes (2025-07-28)

- Storybook sidebar navigation flattened for icons and tokens; removed unnecessary folder levels.
- Added "Grid Preview" story for icons, showing all available icons in a responsive grid.
- Each icon in the grid links directly to its demo story with controls.
- Comments added to story files for easier editing of navigation labels, icon lists, and grid layout.
- Automated icon list generation and grid rendering.
- Cleaned up obsolete MDX docs and legacy story files.
