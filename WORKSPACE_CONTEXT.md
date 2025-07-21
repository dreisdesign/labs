# Workspace Context for AI Assistant

## Directory Structure
- **Root**: `/Users/danielreis/labs/`
- **Design System**: `/Users/danielreis/labs/design-system/`
- **Current Working Directory**: Always assume `/Users/danielreis/labs/` unless explicitly changed

## Terminal Command Rules
1. **Always check `pwd` first** if unsure about current location
2. **Use absolute paths** or verify relative paths from `/Users/danielreis/labs/`
3. **Common paths**:
   - Build Storybook: `cd design-system && npm run build-storybook && cd ..`
   - Deploy: `./deploy-clean.sh` (from root)
   - Design system files: `design-system/src/stories/`

## Dependencies
- Node modules may need reinstalling in `design-system/` directory
- Always run `npm install` in `design-system/` before building if Storybook command fails

## Deployment
- Use `./deploy-clean.sh` from root directory
- Script handles all path changes internally
- Source files remain in main branch, deployment goes to gh-pages

## URL Structure
- Main site: `https://dreisdesign.github.io/labs/`
- Storybook: `https://dreisdesign.github.io/labs/design-system/`
- Apps: `https://dreisdesign.github.io/labs/{app-name}/`

## For AI Assistant
- When running terminal commands, ALWAYS start from `/Users/danielreis/labs/`
- If current directory is wrong, use `cd /Users/danielreis/labs` first
- Check `pwd` before running commands if unsure about location

## Deploy Script Behavior
- Script automatically includes all committed files in deployment
- Excludes development files (source code, node_modules, build scripts)
- Replaces design-system source with built Storybook
- New files are automatically included once committed to git
