/** @type { import('@storybook/web-components-vite').Preview } */
import "../src/components/labs-button/labs-button.js";
import { applyTheme, initSystemTheme } from '../src/utils/theme.js';

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

    // Disable the default backgrounds addon to avoid confusion
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

        // Return the story; flavor classes (blueberry/strawberry) will still be applied by the flavor decorator
        return Story();
      }

      // Set theme class (light/dark) on document root and data attribute for system consumers
      // Apply theme globally via helper
      try { applyTheme({ theme: context.globals.theme || 'light' }); } catch (e) { }
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
  ],
};

import "../src/styles/main.css";

export default preview;
