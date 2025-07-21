import '../tokens/index.css';
import { Button } from '../components/Button/Button.jsx';

export default {
    title: 'Playground/Button Usage',
    parameters: {
        docs: {
            description: {
                component: 'Button usage examples, showing real-world combinations of size, color, and typography tokens.'
            }
        }
    }
};

export const AllSizes = {
    name: 'All Sizes',
    render: () => {
        const container = document.createElement('div');
        container.style.cssText = `display: flex; gap: 1rem; flex-wrap: wrap; align-items: flex-end; padding: 2rem; background: var(--color-surface);`;
        container.appendChild(Button({ label: 'Small', size: 'sm', variant: 'primary' }));
        container.appendChild(Button({ label: 'Medium', size: 'md', variant: 'primary' }));
        container.appendChild(Button({ label: 'Large', size: 'lg', variant: 'primary' }));
        container.appendChild(Button({ label: 'Full Width', size: 'full', variant: 'primary', style: { width: '100%' } }));
        return container;
    },
    parameters: {
        docs: {
            description: {
                story: 'Shows all button sizes with primary styling and correct typography tokens.'
            }
        }
    }
};

export const TypographyUsage = {
    name: 'Typography in Buttons',
    render: () => {
        const container = document.createElement('div');
        container.style.cssText = `display: flex; flex-direction: column; gap: 1rem; padding: 2rem; background: var(--color-surface);`;
        container.innerHTML = `
      <h3 style="margin-bottom: 0.5rem; font-weight: var(--font-weight-semibold);">Button Typography Usage</h3>
      <p style="color: var(--color-on-surface-75); margin-bottom: 1rem;">Examples of how typography tokens are applied in the Button component:</p>
    `;
        container.appendChild(Button({ label: 'Small (font-size-sm)', size: 'sm', variant: 'primary' }));
        container.appendChild(Button({ label: 'Default (font-size-md)', size: 'md', variant: 'primary' }));
        container.appendChild(Button({ label: 'Large (font-size-lg)', size: 'lg', variant: 'primary' }));
        return container;
    },
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates how typography tokens are applied in the Button component across different sizes.'
            }
        }
    }
};
