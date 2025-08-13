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

      storySort: {
        order: [
          "Welcome",
          ["System Overview"],
          "Tokens",
          ["Colors", "Typography", "Spacing"],
          "Icons",
          ["Default", "Preview"],
          "Components",
          ["Button"],
          "Patterns",
          ["Settings Overlay"],
        ],
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
