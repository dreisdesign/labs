/** @type { import('@storybook/web-components-vite').Preview } */
import { withThemeByClassName } from '@storybook/addon-themes';

const preview = {
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
    withThemeByClassName({
      themes: {
        light: 'theme-light',
        dark: 'theme-dark',
      },
      defaultTheme: 'light',
      // Apply theme classes to the document body
      parentSelector: 'body',
    }),
  ],
};

import "../src/styles/main.css";

export default preview;
