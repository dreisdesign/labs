

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
    "stories": [
        "../src/stories/Welcome.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
        "../src/**/*.mdx"
    ],
    "addons": [
        "@storybook/addon-docs"
    ],
    "framework": {
        "name": "@storybook/html-vite",
        "options": {}
    },
    "core": {
        "disableTelemetry": true
    },
    "viteFinal": (config) => {
        config.base = '/labs/design-system/';
        return config;
    }
};
export default config;