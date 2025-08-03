/** @type { import('@storybook/web-components-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      // Disable persisted controls (no save popup)
      persistLocal: false,
    },

    themes: {
      default: "light",
      list: [
        {
          name: "light",
          class: "theme-light",
          color: "var(--color-background)",
        },
        {
          name: "dark",
          class: "theme-dark",
          color: "var(--color-background)",
        },
      ],
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },

    options: {
      storySort: {
        order: [
          "About",
          "Tokens",
          ["All", "Colors", "Typography", "Spacing"],
          "Icons",
          ["Default", "Preview"],
          "Components",
          ["Default", "Preview"],
        ],
      },
    },
  },
};

import "../src/styles/main.css";
export default preview;
