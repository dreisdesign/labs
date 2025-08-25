module.exports = {
  stories: [
    '../design-system/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],

  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@storybook/addon-vitest'
  ],

  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  }
};
