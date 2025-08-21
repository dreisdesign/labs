import "../src/styles/main.css";
import "../src/components/labs-button/labs-button.js";
import { applyTheme } from '../src/utils/theme.js';

// Helper: sync flavor/theme classes on the document root
function syncFlavorTheme(globals) {
  try {
    const root = document.documentElement;
    root.className = root.className
      .split(/\s+/)
      .filter(c => !/^flavor-/.test(c) && !/^theme-/.test(c))
      .join(' ');
    // Parse URL globals if present
    const params = new URLSearchParams(window.location.search || '');
    const raw = params.get('globals');
    let urlGlobals = {};
    if (raw) {
      const decoded = decodeURIComponent(raw);
      const parts = decoded.split(/[,;|&]/).map(s => s.trim()).filter(Boolean);
      parts.forEach(p => {
        const [k, v] = p.split(':');
        if (k && v) urlGlobals[k.trim()] = v.trim();
      });
    }
    const flavor = urlGlobals.flavor || (globals && globals.flavor) || 'vanilla';
    const theme = urlGlobals.theme || (globals && globals.theme) || 'light';
    root.classList.add(`flavor-${flavor}`);
    root.classList.add(`theme-${theme}`);
    try { root.setAttribute('data-color-scheme', theme); } catch (e) { }
    try { document.body.style.background = 'var(--color-background)'; } catch (e) { }
  } catch (e) { /* ignore */ }
}

// Fallback: apply theme/flavor from URL globals on load
function initFromUrlGlobals() {
  if (typeof window === 'undefined' || !window.location) return;
  const params = new URLSearchParams(window.location.search || '');
  const raw = params.get('globals');
  if (!raw) return;
  try {
    const decoded = decodeURIComponent(raw || '');
    const parts = decoded.split(/[,;|&]/).map(s => s.trim()).filter(Boolean);
    const opts = {};
    parts.forEach(p => {
      const [k, v] = p.split(':');
      if (k && v) opts[k.trim()] = v.trim();
    });
    const payload = {};
    if (opts.flavor) payload.flavor = opts.flavor;
    if (opts.theme) payload.theme = opts.theme;
    if (payload.flavor || payload.theme) {
      try { applyTheme(payload); } catch (e) { }
      try { document.body.style.background = 'var(--color-background)'; } catch (e) { }
    }
  } catch (e) { /* ignore */ }
}

if (typeof window !== 'undefined') {
  initFromUrlGlobals();
  if (window.__STORYBOOK_ADDONS_CHANNEL__) {
    window.__STORYBOOK_ADDONS_CHANNEL__.on('globalsUpdated', ({ globals }) => {
      syncFlavorTheme(globals);
    });
    window.__STORYBOOK_ADDONS_CHANNEL__.on('storyRendered', () => {
      let globals = undefined;
      try {
        if (window.__STORYBOOK_ADDONS_CHANNEL__._globalsStore) {
          globals = window.__STORYBOOK_ADDONS_CHANNEL__._globalsStore.getAll();
        } else if (window.__STORYBOOK_STORY_STORE__ && window.__STORYBOOK_STORY_STORE__.globals) {
          globals = window.__STORYBOOK_STORY_STORE__.globals;
        }
      } catch (e) { /* ignore */ }
      syncFlavorTheme(globals);
    });
  }
}

const preview = {
  globalTypes: {
    flavor: {
      name: 'Flavor',
      description: 'Smoothie flavor (theme token set)',
      defaultValue: 'vanilla',
      toolbar: {
        icon: 'arrowdown',
        items: [
          { value: 'vanilla', title: 'vanilla' },
          { value: 'blueberry', title: 'blueberry' },
          { value: 'strawberry', title: 'strawberry' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
    theme: {
      name: 'Theme',
      description: 'UI theme (light/dark)',
      defaultValue: 'light',
      toolbar: {
        icon: 'sun',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    // Enable docs for all stories
    docs: {
      autodocs: 'tag',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      // Disable persisted controls (no save popup)
      persistLocal: false,
    },

    // Configure Storybook UI theme and layout
    layout: 'centered',

    // Configure backgrounds using Storybook v9+ API (options + initialGlobals)
    backgrounds: {
      disable: true,
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },

    // Configure Storybook interface options
    options: {
      // Controls panel on the right
      panelPosition: 'right',
      storySort: (a, b) => {
        // V7+ API: a and b are objects with {title, id, name, ...}
        const order = ["Tokens", "Icons", "Components", "Patterns"];
        const getGroupIndex = (item) => {
          const group = item.title.split("/")[0];
          const idx = order.indexOf(group);
          return idx === -1 ? order.length : idx;
        };
        const aIdx = getGroupIndex(a);
        const bIdx = getGroupIndex(b);
        if (aIdx !== bIdx) return aIdx - bIdx;
        // Within group, sort alphabetically, but "docs" or "default" first
        const aName = a.name?.toLowerCase() || "";
        const bName = b.name?.toLowerCase() || "";
        if (aName === "docs" || aName === "default") return -1;
        if (bName === "docs" || bName === "default") return 1;
        return aName.localeCompare(bName);
      },
    },
  },

  decorators: [
    (Story, context) => {
      // Robust flavor/theme sync: always remove all flavor-* and theme-* classes, then apply the correct ones from URL globals or Storybook globals
      syncFlavorTheme(context.globals);
      return Story();
    },
  ],
};

export default preview;
