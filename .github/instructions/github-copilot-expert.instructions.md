---
applyTo: '**'
---

# GitHub Copilot Expert Instructions for Labs Repository

These instructions ensure GitHub Copilot understands the Labs repository structure, patterns, and best practices to provide accurate, context-aware assistance.

---

## Repository Overview

**Labs** is a monorepo containing a design system and multiple productivity applications built with vanilla JavaScript and Web Components. The project emphasizes modularity, progressive web app features, and complete theming support.

### Key Architecture Principles
- **Web Components** with Shadow DOM encapsulation
- **CSS Custom Properties** for comprehensive theming
- **Vanilla JavaScript** - no framework dependencies
- **Progressive Web Apps** with service workers
- **Modular Design System** shared across all applications

---

## Repository Structure & File Organization

```
labs/
├── design-system/               # 🎨 Core design system
│   ├── src/
│   │   ├── components/         # Web components (labs-button, labs-card, etc.)
│   │   ├── styles/
│   │   │   ├── tokens/         # Design tokens (colors.css, spacing.css)
│   │   │   └── flavors.css     # Theme variations
│   │   └── stories/            # Storybook stories
│   ├── .storybook/             # Storybook v9.1.5 config
│   ├── icons/                  # SVG icon library (--labs-icons.svg suffix)
│   └── package.json           # Design system dependencies
├── docs/                       # 📦 Production builds (GitHub Pages)
│   ├── design-system/         # Built Storybook
│   ├── timer/                 # Timer app
│   ├── tracker/               # Tracker app  
│   ├── note/                  # Daily note app
│   ├── pad/                   # Drawing app
│   └── today-list/            # Todo app
├── scripts/                   # 🔧 Build automation
│   ├── generate-icons-list.mjs # Auto-generates icons-list.js
│   ├── sync-icons.js          # Syncs icons across directories
│   ├── update-static-paths.js # GitHub Pages path fixes
│   └── menu.mjs               # Development workflow menu
└── .github/instructions/      # AI coding guidelines
```

### Critical File Locations
- **Active development**: `design-system/src/` (not `docs/`)
- **Production/deployed**: `docs/` (built/copied from `src/`)
- **Component entry points**: `design-system/src/components/labs-{name}.js`
- **Design tokens**: `design-system/src/styles/tokens/colors.css`
- **Theme system**: `design-system/src/styles/flavors.css`
- **Icon management**: Auto-generated via `scripts/generate-icons-list.mjs`

---

## Component Development Patterns

### Web Component Structure
All components follow this pattern:
```javascript
class LabsComponentName extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }
  
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host { /* component styling */ }
        /* Use CSS custom properties for theming */
      </style>
      <div class="wrapper">
        <slot></slot> <!-- Enable content projection -->
      </div>
    `;
  }
}

customElements.define('labs-component-name', LabsComponentName);
```

### Shadow DOM Best Practices
- **Never fight the shadow boundary** - external CSS cannot penetrate
- **Use component attributes** for layout variations (`fullwidth`, `variant="metric"`)
- **Provide semantic slots** (`header`, `content`, `actions`)
- **Always use CSS custom properties** for themeable values
- **Test modularity** - components should work in any parent context

### Component Variants Pattern
```html
<!-- Semantic attributes for component variations -->
<labs-button fullwidth variant="primary">Save</labs-button>
<labs-card variant="metric">Statistics content</labs-card>
<labs-list-item text-only checked>Simple item</labs-list-item>
```

---

## Design Token System

### Color Architecture
- **Primary tokens**: `design-system/src/styles/tokens/colors.css`
- **Theme flavors**: `design-system/src/styles/flavors.css`
- **Naming convention**: `--color-{role}-{variant}` (e.g., `--color-surface-variant`)
- **Light/dark support**: All tokens have light/dark variants

### Token Usage in Components
```css
/* In component styles - always use tokens */
.card {
  background: var(--color-surface);
  color: var(--color-on-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-md);
}
```

### Available Token Categories
- **Colors**: `--color-primary`, `--color-surface`, `--color-on-*`
- **Spacing**: `--space-xs` through `--space-xl`
- **Typography**: `--font-family-base`, `--font-size-*`, `--line-height-*`
- **Borders**: `--radius-sm`, `--radius-lg`
- **Shadows**: `--elevation-*`

---

## Icon System

### Icon Management
- **Source**: `design-system/icons/*.svg` files with `--labs-icons.svg` suffix
- **Auto-generation**: `scripts/generate-icons-list.mjs` creates `icons-list.js`
- **Component**: `<labs-icon name="add"></labs-icon>`
- **Available icons**: Generated dynamically from SVG files

### Adding New Icons
1. Place SVG in `design-system/icons/` with `--labs-icons.svg` suffix
2. Run `npm run generate-icons-list` from design-system directory
3. Icon automatically available in `icons-list.js` and `<labs-icon>`

---

## Service Worker Architecture

### Service Worker Files
- **Root**: `sw.js` (main PWA service worker)
- **Docs**: `docs/sw.js` (GitHub Pages deployment copy)
- **App-specific**: `docs/{app}/sw.js` (Timer, Note apps have dedicated workers)

### Service Worker Pattern
```javascript
// Always use robust fetch handlers that return Response objects
self.addEventListener('fetch', async (event) => {
  event.respondWith(handleFetch(event.request));
});

async function handleFetch(request) {
  try {
    // Network-first for navigation, cache-first for assets
    if (request.mode === 'navigate') {
      return await fetch(request) || await caches.match('/offline.html');
    }
    // Always return a Response object - never undefined
    return await caches.match(request) || await fetch(request);
  } catch (error) {
    return new Response('Service unavailable', { status: 503 });
  }
}
```

---

## Development Workflow

### Local Development Servers
- **Storybook**: `npm run storybook` (port 6006)
- **Labs Homepage**: Python HTTP server (port 8000)
- **Quick preview**: `npm run rp` (starts both servers and opens URLs)

### Server Management
- **Check running**: `lsof -ti:6006` for Storybook
- **Kill gracefully**: `echo "1" | npm run menu`
- **Force kill**: `lsof -ti:6006 | xargs kill -9`
- **HMR enabled**: File changes auto-reload without restart

### Build Process
- **Development**: Edit files in `design-system/src/`
- **Production**: `scripts/update-static-paths.js` copies to `docs/`
- **Deployment**: Manual via `npm run d` (deploy script)
- **Icon sync**: Automatic during Storybook startup

---

## Testing & Quality Assurance

### Storybook Testing Links Format
When providing test URLs, use this format:
```
1. **Component — Story Name:** `http://localhost:6006/?path=/story/components-component--story-name`
   - **Controls:** List interactive controls to test
   - **Keyboard:** Key interactions to verify
   - **A11y:** Accessibility features to check
```

### Common Test Scenarios
- **Dropdown components**: `open` state, keyboard navigation, ARIA attributes
- **List items**: Variants, slots pattern, event emissions
- **Buttons**: Fullwidth behavior, icon-only variants, focus states
- **Cards**: Metric variant, slotted content, responsive behavior

---

## File Path Conventions

### Import Patterns
```javascript
// Component imports (from design-system/src/)
import '../components/labs-button.js';
import '../components/labs-card.js';

// Token imports
import '../styles/tokens/colors.css';
import '../styles/flavors.css';

// Icon usage
import iconsList from '../components/icons-list.js';
```

### Directory-Specific Rules
- **Never edit** `docs/design-system/` directly - it's built from `src/`
- **Always edit** `design-system/src/` for active development
- **Git operations**: Close servers first to avoid hangs
- **Asset paths**: Use relative paths, build process handles GitHub Pages

---

## Application-Specific Patterns

### App Structure
Each app in `docs/` follows this pattern:
```
docs/{app}/
├── index.html          # Main app entry point
├── sw.js              # Optional service worker
├── manifest.json      # PWA manifest
├── README.md          # App documentation
└── js/                # App-specific JavaScript
```

### Smoothie Template Pattern
Apps use the "Smoothie" template approach:
- Load design system tokens and components
- Minimal custom CSS/JS glue code
- Consistent theming and dark mode support
- Progressive enhancement with JavaScript

---

## Common Patterns & Anti-Patterns

### ✅ Preferred Approaches
- **Component attributes** for variations (`fullwidth`, `variant="metric"`)
- **CSS custom properties** for all themeable values
- **Semantic HTML** with proper ARIA attributes
- **Progressive enhancement** - HTML first, then JavaScript
- **Network-first** service worker caching for navigation
- **Cache-first** service worker caching for static assets

### ❌ Avoid These Patterns
- **External CSS targeting shadow DOM** - use component attributes instead
- **Framework dependencies** - keep vanilla JavaScript
- **Hardcoded colors/spacing** - always use design tokens
- **Complex build processes** - prefer simple scripts
- **GitHub Actions** - use local automation instead
- **Service worker fetch handlers returning undefined** - always return Response

---

## Error Prevention Guidelines

### Service Worker Issues
- **Always return Response objects** from fetch handlers
- **Use async/await** instead of promise chains for clarity
- **Include error handling** with fallback responses
- **Version query params** for cache invalidation (`?v=3`)

### Component Development
- **Test in multiple contexts** - ensure modularity
- **Provide fallback content** for empty slots
- **Use semantic attributes** instead of fighting CSS specificity
- **Include keyboard navigation** for interactive components

### Build & Deployment
- **Run icon generation** before Storybook builds
- **Check server status** before starting new processes
- **Use absolute paths** in terminal commands
- **Close servers** before git operations

---

## Maintenance Tasks

### Icon Management
```bash
# Generate icon list from SVG files
npm run generate-icons-list

# Sync icons across directories  
node ../scripts/sync-icons.js
```

### Todo Management
- **Global todo**: `todo-index.md` (canonical project checklist)
- **Feature-specific**: `COLORS-DOCS--TODO.md` style naming
- **Never rename** global todo file - maintain continuity

### Regular Reviews
- Clean up completed todos from `todo-index.md`
- Update documentation links in README files
- Verify icon generation is working correctly
- Check service worker registration across apps

---

This instruction set should be referenced whenever GitHub Copilot needs to understand the Labs repository structure, coding patterns, or development workflow. Always prioritize modularity, accessibility, and progressive enhancement in all suggestions and code generation.