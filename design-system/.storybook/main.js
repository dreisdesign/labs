

/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
    "stories": [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    "addons": [
        "@chromatic-com/storybook",
        "@storybook/addon-docs",
        "@storybook/addon-a11y",
        "@storybook/addon-vitest"
    ],
    // Serve all static assets (including icons) for Storybook
    "staticDirs": ["../assets", "../icons"],
    viteFinal: (config) => {
        config.assetsInclude = config.assetsInclude || [];
        config.assetsInclude.push('**/*.svg');
        return config;
    },
    "framework": {
        "name": "@storybook/web-components-vite",
        "options": {}
    }
};
export default config;