/** @type { import('@storybook/html').Preview } */
import '../src/tokens/index.css';

const preview = {
    parameters: {
        options: {
            storySort: {
                order: ['Labs Design System', 'Design Tokens', 'Components'],
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        docs: {
            toc: true,
        },
        backgrounds: {
            default: 'labs-light',
            values: [
                {
                    name: 'labs-light',
                    value: 'rgb(193, 193, 255)',
                },
                {
                    name: 'labs-dark',
                    value: 'rgb(18, 18, 18)',
                },
                {
                    name: 'white',
                    value: '#ffffff',
                },
            ],
        },
    },
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: [
                    { value: 'light', title: 'Light' },
                    { value: 'dark', title: 'Dark' },
                ],
                dynamicTitle: true,
            },
        },
    },
};

// Apply theme to document body
const withThemeProvider = (Story, context) => {
    const theme = context.globals.theme;

    // Apply theme class to document body
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }

    return Story();
};

preview.decorators = [withThemeProvider];

export default preview;
