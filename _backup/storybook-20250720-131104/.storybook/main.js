/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)', '../src/**/*.mdx'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-docs',
        '@storybook/addon-controls',
        '@storybook/addon-a11y'
    ],
    framework: {
        name: '@storybook/html-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    core: {
        disableTelemetry: true,
    },
    viteFinal: (config) => {
        config.base = './';
        return config;
    },
};

export default config;
