# Labs Development Guide

> Complete workflow for local development, build, and deployment

---

## 🚀 Quick Start

```bash
# Start both development servers
npm run rp

# Or use interactive menu
npm run menu
```

**Development URLs:**
- **Storybook:** http://localhost:6006
- **Labs Homepage:** http://localhost:8000
- **Apps:** http://localhost:8000/{app}/ (tracker, today-list, note, pad, timer)

---

## 📦 Common Commands

| Command | Purpose |
|---------|---------|
| `npm run rp` | Start dev servers + open browsers |
| `npm run menu` | Interactive development menu |
| `npm run d` | Deploy to GitHub Pages |
| `npm run storybook` | Storybook only (port 6006) |

---

## 🔄 Development Workflow

### Editing Components
1. Edit files in `design-system/src/components/`
2. Changes auto-reload in Storybook (HMR)
3. Run `npm run rp` to sync to `docs/` for app testing
4. Deploy when ready: `npm run d`

### Editing Apps
1. Edit files in `docs/{app}/` (HTML, JS, CSS)
2. View at http://localhost:8000/{app}/
3. Deploy when ready: `npm run d`

---

## 🎨 Icon Management

**All icon SVGs must end with `--labs-icons.svg`.**

If you see a warning about unsuffixed icons:

```bash
node scripts/cleanup-icon-dupes.js && npm run rp
```

**Icon paths by environment:**
| Environment | Path |
|-------------|------|
| Local dev | `/design-system/icons/` |
| Storybook dev | `/icons/` |
| Storybook static | `./icons/` |
| GitHub Pages | `/labs/design-system/icons/` |

The icon loader auto-detects the environment.

---

## 📤 Deployment

```bash
npm run d
```

**What it does:**
1. Pre-build checks (icons, assets)
2. Builds static Storybook
3. Syncs files to `docs/`
4. Fixes paths for GitHub Pages
5. Commits and pushes to `main`
6. GitHub Pages deploys (~30 seconds)

**Deployed sites:**
- https://dreisdesign.github.io/labs/design-system/
- https://dreisdesign.github.io/labs/

---

## 🗂️ Path Management

The `scripts/update-static-paths.js` handles path conversion:

| Mode | Trigger | Paths |
|------|---------|-------|
| `--local` | `npm run rp` | Relative (`../design-system/`) |
| `--github` | `npm run d` | Absolute (`/labs/design-system/`) |
| `--auto` | Deploy | Auto-detect environment |

**Pre-commit hook** automatically runs `--local` mode to ensure committed files use local-friendly paths.

---

## 📁 Source → Docs Sync

The sync script copies files from source to production:

| Source | Destination |
|--------|-------------|
| `design-system/src/components/*.js` | `docs/design-system/components/` |
| `design-system/src/styles/tokens/*.css` | `docs/design-system/tokens/` |
| `design-system/src/utils/*.js` | `docs/design-system/utils/` |
| `design-system/icons/` | `docs/design-system/icons/` |

**Important:** Always edit in `src/`, not `docs/`. The sync may overwrite `docs/` files.

---

## 📚 Storybook Conventions

### Story Organization
```
0. Tokens        — Colors, Spacing, Typography
1. Foundations   — Theme System, Icons, Container
2. Components    — Button, Card, List Item, etc.
3. Wrapped       — Real-world usage examples
4. Patterns      — Multi-component patterns
```

### Story Naming
| Type | Directory | Example File | Storybook Path |
|------|-----------|--------------|----------------|
| Canonical | stories/ | `labs-button.stories.js` | Components/Button |
| Wrapped | stories/ | `labs-button.wrapped.stories.js` | Components (Wrapped)/Button |

---

## 🔧 Troubleshooting

### 404 Errors for Assets
1. Check if files exist in `docs/design-system/`
2. Run `npm run rp` to reset paths
3. Hard-refresh browser (Cmd+Shift+R)

### Icons Not Showing
1. Verify SVG ends with `--labs-icons.svg`
2. Run `node scripts/cleanup-icon-dupes.js`
3. Run `npm run rp`

### Port Already in Use
```bash
# Kill process on port 6006
lsof -ti:6006 | xargs kill -9

# Or use the menu
echo "1" | npm run menu
```

### Storybook Won't Start
1. Check for port conflicts
2. Delete `.cache` folders
3. Run `npm install` in design-system/

---

## 📖 Related Documentation

- [README.md](README.md) — Project overview
- [CONTRIBUTING.md](CONTRIBUTING.md) — How to contribute
- [design-system/README.md](design-system/README.md) — Component library
- [APP-PATTERNS.md](APP-PATTERNS.md) — ThemeManager integration

---

**Last updated:** November 25, 2025
