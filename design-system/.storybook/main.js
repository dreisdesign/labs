/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-themes",
  ],
  // Serve all static assets (including icons) for Storybook
  staticDirs: [
    { from: "../icons", to: "/icons" },
    { from: "../assets", to: "/assets" },
  ],
  viteFinal: (config) => {
    config.assetsInclude = config.assetsInclude || [];
    config.assetsInclude.push("**/*.svg");
    return config;
  },
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
};
export default config;
