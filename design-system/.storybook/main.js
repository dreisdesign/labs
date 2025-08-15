/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {},
    },
    "@storybook/addon-themes"
  ],
  parameters: {
    options: {
      storySort: (a, b) => {
        const order = ["Tokens", "Icons", "Components", "Patterns"];
        const getGroupIndex = (item) => {
          const group = item[1].kind.split("/")[0];
          const idx = order.indexOf(group);
          return idx === -1 ? order.length : idx;
        };
        const aIdx = getGroupIndex(a);
        const bIdx = getGroupIndex(b);
        if (aIdx !== bIdx) return aIdx - bIdx;
        // Within group, sort alphabetically, but "docs" or "default" first
        const aName = a[1].name.toLowerCase();
        const bName = b[1].name.toLowerCase();
        if (aName === "docs" || aName === "default") return -1;
        if (bName === "docs" || bName === "default") return 1;
        return aName.localeCompare(bName);
      },
    },
  },
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
