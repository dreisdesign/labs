/** @type { import('@storybook/web-components-vite').Preview } */
import "../src/components/labs-button/labs-button.js";
import { withThemeByClassName } from '@storybook/addon-themes';

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
      // Set theme class (light/dark) on document root
      const theme = context.globals.theme || 'light';
      const root = document.documentElement;
      root.classList.remove('theme-light', 'theme-dark');
      root.classList.add(`theme-${theme}`);
      // Notify manager (docs UI) so it can mirror the same theme classes
      try {
        if (window.parent && window.parent !== window) {
          window.parent.postMessage({ type: 'STORYBOOK_SYNC_THEME', theme }, '*');
        }
      } catch (e) {
        // silent
      }
      return Story();
    },
    (Story, context) => {
      // Add smoothie flavor class to document root for blueberry/strawberry theme switching
      const flavor = context.globals.flavor || 'blueberry';
      const root = document.documentElement;
      root.classList.remove('flavor-blueberry', 'flavor-strawberry');
      root.classList.add(`flavor-${flavor}`);
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
