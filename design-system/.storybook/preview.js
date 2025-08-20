// --- Listen for Storybook global and story changes, always re-apply flavor/theme classes ---
function syncFlavorTheme(globals) {
  try {
    // Remove all flavor-* and theme-* classes
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
    // Determine which flavor/theme to apply: URL globals win, then Storybook globals, then default
    const flavor = urlGlobals.flavor || (globals && globals.flavor) || 'blueberry';
    const theme = urlGlobals.theme || (globals && globals.theme) || 'light';
    root.classList.add(`flavor-${flavor}`);
    root.classList.add(`theme-${theme}`);
    try { root.setAttribute('data-color-scheme', theme); } catch (e) { }
    try { document.body.style.background = 'var(--color-background)'; } catch (e) { }
  } catch (e) { /* ignore */ }
}

if (typeof window !== 'undefined' && window.__STORYBOOK_ADDONS_CHANNEL__) {
  window.__STORYBOOK_ADDONS_CHANNEL__.on('globalsUpdated', ({ globals }) => {
    syncFlavorTheme(globals);
  });
  window.__STORYBOOK_ADDONS_CHANNEL__.on('storyRendered', () => {
    // Try to get the latest globals from the channel's store
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
/** @type { import('@storybook/web-components-vite').Preview } */
import "../src/components/labs-button/labs-button.js";
import { applyTheme, initSystemTheme } from '../src/utils/theme.js';

// Fallback: if the preview iframe URL contains a `globals` query param (e.g. "globals=flavor:strawberry"),
// parse it and apply the theme/flavor early so the preview reflects toolbar globals even when manager->preview
// postMessage sync isn't applied (some Storybook links use manager state and don't always propagate to preview).
try {
  (function initFromUrlGlobals() {
    if (typeof window === 'undefined' || !window.location) return;
    const params = new URLSearchParams(window.location.search || '');
    const raw = params.get('globals');
    if (!raw) return;
    try {
      const decoded = decodeURIComponent(raw || '');
      // allow separators like , ; & |
      const parts = decoded.split(/[,;|&]/).map(s => s.trim()).filter(Boolean);
      const opts = {};
      parts.forEach(p => {
        const [k, v] = p.split(':');
        if (k && v) opts[k.trim()] = v.trim();
      });
      // Only pass keys we know (flavor, theme)
      const payload = {};
      if (opts.flavor) payload.flavor = opts.flavor;
      if (opts.theme) payload.theme = opts.theme;
      if (payload.flavor || payload.theme) {
        try { applyTheme(payload); } catch (e) { }
        try { document.body.style.background = 'var(--color-background)'; } catch (e) { }
      }
    } catch (e) {
      // ignore parse errors
    }
  })();
} catch (e) { }

const preview = {
  globalTypes: {
    flavor: {
      name: 'Flavor',
      description: 'Smoothie flavor (theme token set)',
      defaultValue: 'blueberry',
      toolbar: {
        icon: 'arrowdown',
        items: [
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
    // Robust flavor/theme sync: always remove all flavor-* and theme-* classes, then apply the correct ones from URL globals or Storybook globals
    (Story, context) => {
      try {
        // Remove all flavor-* and theme-* classes from documentElement
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

        // Determine which flavor/theme to apply: URL globals win, then Storybook globals, then default
        const flavor = urlGlobals.flavor || context.globals.flavor || 'blueberry';
        const theme = urlGlobals.theme || context.globals.theme || 'light';

        // Apply the new classes
        root.classList.add(`flavor-${flavor}`);
        root.classList.add(`theme-${theme}`);
        try { root.setAttribute('data-color-scheme', theme); } catch (e) { }
        try { document.body.style.background = 'var(--color-background)'; } catch (e) { }
      } catch (e) {
        // ignore parse errors
      }
      return Story();
    },
    (Story, context) => {
      // Disable theme switching for specific pages (Tokens/Colors)
      const storyTitle = context.title || context.kind || '';
      if (storyTitle && storyTitle.indexOf('Tokens/Colors') === 0) {
        // Hide the Theme toolbar button for Colors pages and force a stable theme
        try {
          if (window.parent && window.parent !== window) {
            window.parent.postMessage({ type: 'STORYBOOK_SET_TOOL_VISIBILITY', tool: 'Theme', hide: true }, '*');
            // Ensure the manager mirrors a deterministic theme so token CSS rules match
            window.parent.postMessage({ type: 'STORYBOOK_SYNC_THEME', theme: 'light' }, '*');
          }
        } catch (e) {
          // ignore
        }

        // Force a deterministic theme class so flavor-scoped token rules (e.g. .flavor-strawberry.theme-light)
        // are applied. We choose 'light' as the stable token set for Colors pages.
        // Force deterministic light theme for Colors pages
        try { applyTheme({ theme: 'light' }); } catch (e) { }
        // Ensure the canvas background follows the CSS token so it updates when variables change
        try { document.body.style.background = 'var(--color-background)'; } catch (e) { }

        // Return the story; flavor classes (blueberry/strawberry) will still be applied by the flavor decorator
        return Story();
      }

      // Set theme class (light/dark) on document root and data attribute for system consumers
      // Apply theme globally via helper
      let theme = context.globals.theme || 'light';

      // Check URL globals as fallback if context.globals is empty/default
      if (!context.globals.theme || context.globals.theme === 'light') {
        try {
          const params = new URLSearchParams(window.location.search || '');
          const raw = params.get('globals');
          if (raw) {
            const decoded = decodeURIComponent(raw);
            const parts = decoded.split(/[,;|&]/).map(s => s.trim()).filter(Boolean);
            const opts = {};
            parts.forEach(p => {
              const [k, v] = p.split(':');
              if (k && v) opts[k.trim()] = v.trim();
            });
            if (opts.theme) theme = opts.theme;
          }
        } catch (e) { /* ignore */ }
      }

      try { applyTheme({ theme }); } catch (e) { }
      // Ensure the canvas background follows the CSS token so it updates when variables change
      try { document.body.style.background = 'var(--color-background)'; } catch (e) { }
      // Notify manager (docs UI) so it can mirror the same theme classes
      try {
        if (window.parent && window.parent !== window) {
          window.parent.postMessage({ type: 'STORYBOOK_SET_TOOL_VISIBILITY', tool: 'Theme', hide: false }, '*');
          window.parent.postMessage({ type: 'STORYBOOK_SYNC_THEME', theme }, '*');
        }
      } catch (e) {
        // silent
      }
      return Story();
    },
    (Story, context) => {
      // Add smoothie flavor class to document root for blueberry/strawberry theme switching
      // For Tokens/Colors stories, prefer a deterministic flavor based on the story name
      const storyTitle = context.title || context.kind || '';
      let flavor = context.globals.flavor || 'blueberry';

      // Check URL globals as fallback if context.globals is empty/default
      if (!context.globals.flavor || context.globals.flavor === 'blueberry') {
        try {
          const params = new URLSearchParams(window.location.search || '');
          const raw = params.get('globals');
          if (raw) {
            const decoded = decodeURIComponent(raw);
            const parts = decoded.split(/[,;|&]/).map(s => s.trim()).filter(Boolean);
            const opts = {};
            parts.forEach(p => {
              const [k, v] = p.split(':');
              if (k && v) opts[k.trim()] = v.trim();
            });
            if (opts.flavor) flavor = opts.flavor;
          }
        } catch (e) { /* ignore */ }
      }

      if (storyTitle && storyTitle.indexOf('Tokens/Colors') === 0) {
        const storyName = (context.name || '').toLowerCase();
        if (storyName.includes('strawberry')) {
          flavor = 'strawberry';
        } else if (storyName.includes('blueberry')) {
          flavor = 'blueberry';
        }
      }

      // apply flavor via helper (keeps class + data attribute in sync)
      try { applyTheme({ flavor }); } catch (e) { }
      // Ensure the canvas background follows the CSS token so it updates when variables change
      try { document.body.style.background = 'var(--color-background)'; } catch (e) { }
      // Notify manager (docs UI) so it can mirror the same flavor classes
      try {
        if (window.parent && window.parent !== window) {
          window.parent.postMessage({ type: 'STORYBOOK_SYNC_THEME', flavor }, '*');
        }
      } catch (e) {
        // silent
      }
      return Story();
    },
    // Final URL globals override: ensure URL-based globals always win at the end
    (Story, context) => {
      try {
        const params = new URLSearchParams(window.location.search || '');
        const raw = params.get('globals');
        if (raw) {
          const decoded = decodeURIComponent(raw);
          const parts = decoded.split(/[,;|&]/).map(s => s.trim()).filter(Boolean);
          const urlGlobals = {};
          parts.forEach(p => {
            const [k, v] = p.split(':');
            if (k && v) urlGlobals[k.trim()] = v.trim();
          });

          // Always apply URL globals at the end to override context/defaults
          const payload = {};
          if (urlGlobals.flavor) payload.flavor = urlGlobals.flavor;
          if (urlGlobals.theme) payload.theme = urlGlobals.theme;
          if (Object.keys(payload).length > 0) {
            try { applyTheme(payload); } catch (e) { }
            try { document.body.style.background = 'var(--color-background)'; } catch (e) { }
          }
        }
      } catch (e) {
        // ignore parse errors
      }
      return Story();
    },
  ],
};

import "../src/styles/main.css";

export default preview;
