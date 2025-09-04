/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {},
    },
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
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

    // Suppress chunk size warnings for Storybook build
    config.build = config.build || {};
    config.build.chunkSizeWarningLimit = 2000; // 2MB limit (default is 500kB)

    // Configure Lit for production mode and prevent multiple versions
    config.define = config.define || {};
    config.define['process.env.NODE_ENV'] = JSON.stringify(process.env.NODE_ENV || 'development');

    // Optimize Lit dependencies
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = config.optimizeDeps.include || [];
    config.optimizeDeps.include.push('lit', 'lit-html', 'lit-element');

    return config;
  },
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
};
export default config;
