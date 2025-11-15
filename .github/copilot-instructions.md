# Labs — AI Coding Instructions

**Labs** is a modular Web Components design system and productivity app platform. These instructions help AI agents contribute effectively.

## 🏗️ Architecture & Directory Structure

**Key principle:** Active development in `design-system/src/`, production in `docs/`

```
design-system/src/          ← Edit here (Storybook development)
  ├── components/           ← Web components (labs-button.js, labs-card.js)
  ├── styles/tokens/        ← Design tokens (colors.css, spacing.css)
  ├── styles/flavors.css    ← Theme system (light/dark variants)
  └── stories/              ← Storybook stories

docs/design-system/         ← DO NOT edit directly (built/synced from src/)
design-system/.storybook/   ← Storybook config (rarely changes)
scripts/                    ← Build automation (rp.mjs, menu.mjs, etc.)
```

**Critical rule:** Never edit `docs/` directly. Always edit `design-system/src/` and sync via `npm run rp`.

## 🧩 Component Architecture (Web Components Pattern)

Every component follows this structure:

- **Shadow DOM**: Use `attachShadow({ mode: 'open' })` for encapsulation
- **Self-contained styles**: All CSS in shadow DOM with CSS custom properties
- **Render method**: Set `shadowRoot.innerHTML` with styles and template
- **Slot usage**: Include `<slot></slot>` for content projection

**Key principles:**
- **Self-contained styling**: All CSS in shadow DOM, no external dependencies
- **CSS custom properties**: Always use CSS variables with fallbacks for theming
- **Component attributes**: Use semantic attributes (`fullwidth`, `variant="metric"`) instead of external CSS targeting
- **Shadow DOM encapsulation**: Prevents style conflicts, ensures modularity

**Variant patterns:**
```html
<labs-button fullwidth variant="primary">Save</labs-button>
<labs-card variant="metric">Statistics</labs-card>
<labs-list-item text-only checked>Item</labs-list-item>
```

## 🎨 Design Tokens & Theming

- **Colors:** `design-system/src/styles/tokens/colors.css` — Use `--color-primary`, `--color-surface`, `--color-on-*`
- **Spacing:** `--space-xs` through `--space-xl`
- **Typography:** `--font-family-base`, `--font-size-*`, `--line-height-*`
- **Borders:** `--radius-sm`, `--radius-lg`
- **Theme system:** `design-system/src/styles/flavors.css` — Light/dark variants

Always use tokens in component styles; never hardcode colors/spacing.

## 🔧 Development Workflow

### Quick preview:
```bash
npm run rp              # Start Storybook + Labs homepage (opens URLs)
npm run storybook       # Just Storybook on port 6006
npm run menu            # Interactive build/deploy menu
```

### Server management:
- **HMR enabled:** File changes auto-reload (no restart needed)
- **Check Storybook:** `lsof -ti:6006` or `ps aux | grep storybook`
- **Stop gracefully:** `echo "1" | npm run menu` (kills servers safely)
- **Force kill:** `lsof -ti:6006 | xargs kill -9`

### Git + servers:
Always close servers before git operations to avoid hangs. Run `echo "1" | npm run menu` first.

## 📝 Storybook Story Organization

Stories live in `design-system/src/stories/`. Structure follows this pattern:

| Story Type | File Name | Storybook Location |
|---|---|---|
| Canonical component | `labs-button.stories.js` | Components > Button |
| Wrapped variant | `labs-list-item-text-only.stories.js` | Components (Wrapped) > List Item - Text Only |

**Navigation order in Storybook:**
```
0. Tokens
1. Foundations  
2. Components
3. Components (Wrapped)
4. Patterns
```

When adding stories, match file naming and title conventions for consistent organization.

## 🔄 Service Worker Architecture

Service workers use **network-first for navigation, cache-first for assets**:

```javascript
self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    try {
      // Navigation: network first, fallback to cached index
      if (req.mode === 'navigate') {
        return await fetch(req) || await caches.match('/labs/index.html');
      }
      // Same-origin assets: cache first, fallback to network
      if (new URL(req.url).origin === self.location.origin) {
        return await caches.match(req) || await fetch(req);
      }
    } catch (error) {
      return new Response('Service unavailable', { status: 503 });
    }
  })());
});
```

**Critical:** Always return a `Response` object (never `undefined`). Include fallback offline HTML.

## 🎯 Icon System

- **Source:** `design-system/icons/*.svg` with `--labs-icons.svg` suffix (enforced)
- **Auto-generation:** Run `npm run generate-icons-list` to generate `icons-list.js`
- **Component:** `<labs-icon name="add"></labs-icon>`
- **Sync:** Automatic during `npm run rp`, manual via `node scripts/sync-icons.js`

If sync halts, it's due to missing/duplicate suffixes. Run cleanup via menu: Utilities > Clean Up Icons.

## 📋 TODO File Management

- **Canonical index:** `todo-index.md` (project-wide checklist)
- **Area-specific:** Feature-specific TODOs (e.g., `COLORS-DOCS--TODO.md`) referenced from index
- **Never rename** the global todo file — maintain continuity
- Keep it as a **living checklist**, updated as tasks complete or become obsolete

## ❌ Common Pitfalls & Solutions

### Service Worker Issues
- **Problem:** Fetch handler returns `undefined`
  - **Solution:** Always wrap in async and return a `Response` (use fallback HTML or 503 status)
- **Problem:** Worker won't update after fixes
  - **Solution:** Increment `CACHE_NAME` or add version query params (`?v=3`) to force cache bust

### Component/Shadow DOM Issues
- **Problem:** External CSS doesn't style component internals
  - **Solution:** Add component attribute (`fullwidth`, `variant`) — don't fight the shadow boundary
- **Problem:** `width: 100%` doesn't work on internal button
  - **Solution:** Component handles internal layout; use attributes on host element

### Build/Sync Issues
- **Problem:** Icons not appearing after edits
  - **Solution:** Ensure all SVG filenames end with `--labs-icons.svg`, then run `npm run rp`
- **Problem:** Changes don't appear in docs/ or Storybook
  - **Solution:** Always edit `design-system/src/`, run `npm run rp` to sync

### Git Hangs
- **Problem:** `git` commands hang when servers are running
  - **Solution:** Stop servers first: `echo "1" | npm run menu`

## 🚀 Key Commands Reference

| Command | Purpose |
|---|---|
| `npm run rp` | Full preview: start Storybook + Labs homepage, open URLs |
| `npm run storybook` | Start Storybook dev server (port 6006) |
| `npm run menu` | Interactive menu (build, preview, deploy) |
| `npm run generate-icons-list` | Regenerate icon component from SVG files |
| `npm run d` | Deploy to GitHub Pages (manual) |
| `npm run s` | Smooth preview (Storybook) |
| `npm run l` | Labs preview (homepage) |

## 📖 Additional Resources

For deep dives:
- `.github/instructions/github-copilot-expert.instructions.md` — Full architecture, patterns, recent learnings
- `.github/instructions/modularity.instructions.md` — Component modularity standards
- `.github/instructions/task-management.instructions.md` — Server management, Storybook testing links format
- `DEVELOPMENT.md` — Storybook organization, Timer app layout patterns
- `todo-index.md` — Current project TODOs

---

**Always prioritize:**
1. Modularity — components must be self-contained and portable
2. Web Components patterns — use Web Components, not frameworks
3. Design tokens — never hardcode colors/spacing
4. Source-of-truth edits — always edit `src/`, not `docs/`
