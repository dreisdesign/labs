import '../tokens/index.css';

export default {
    title: 'Tokens/Typography',
    parameters: {
        docs: {
            description: {
                component: 'Typography system for the Labs Design System. Includes font families, sizes, weights, and usage examples.'
            }
        }
    }
};

function createTypographyScale() {
    const container = document.createElement('div');
    container.style.cssText = `
    font-family: var(--font-family-base);
    color: var(--color-on-background);
  `;

    const sizes = [
        { name: 'Extra Small', class: 'ds-text-xs', var: '--font-size-xs', usage: 'Captions, metadata' },
        { name: 'Small', class: 'ds-text-sm', var: '--font-size-sm', usage: 'Secondary text' },
        { name: 'Base', class: 'ds-text-base', var: '--font-size-base', usage: 'Body text, buttons' },
        { name: 'Large', class: 'ds-text-lg', var: '--font-size-lg', usage: 'Large buttons' },
        { name: 'Extra Large', class: 'ds-text-xl', var: '--font-size-xl', usage: 'Section headings' },
        { name: '2X Large', class: 'ds-text-2xl', var: '--font-size-2xl', usage: 'Page headings' },
        { name: '3X Large', class: 'ds-text-3xl', var: '--font-size-3xl', usage: 'Hero text' },
        { name: '4X Large', class: 'ds-text-4xl', var: '--font-size-4xl', usage: 'Display text' }
    ];

    sizes.forEach(size => {
        const item = document.createElement('div');
        item.style.cssText = `
      margin-bottom: 1.5rem;
      padding: 1rem;
      border: 1px solid var(--color-primary-25);
      border-radius: var(--button-radius, 1rem);
    `;

        item.innerHTML = `
      <div class="${size.class}" style="margin-bottom: 0.5rem;">
        The quick brown fox jumps over the lazy dog
      </div>
      <div style="font-size: var(--font-size-sm); color: var(--color-on-surface-75);">
        <strong>${size.name}</strong> • ${size.var} • ${size.usage}
      </div>
    `;

        container.appendChild(item);
    });

    return container;
}

function createFontWeights() {
    const container = document.createElement('div');
    container.style.cssText = `
    font-family: var(--font-family-base);
    color: var(--color-on-background);
  `;

    const weights = [
        { name: 'Light', class: 'ds-font-light', var: '--font-weight-light', value: '300' },
        { name: 'Normal', class: 'ds-font-normal', var: '--font-weight-normal', value: '400' },
        { name: 'Semibold', class: 'ds-font-semibold', var: '--font-weight-semibold', value: '600' },
        { name: 'Bold', class: 'ds-font-bold', var: '--font-weight-bold', value: '700' },
        { name: 'Black', class: 'ds-font-black', var: '--font-weight-black', value: '900' }
    ];

    weights.forEach(weight => {
        const item = document.createElement('div');
        item.style.cssText = `
      margin-bottom: 1rem;
      padding: 1rem;
      border: 1px solid var(--color-primary-25);
      border-radius: var(--button-radius, 1rem);
    `;

        item.innerHTML = `
      <div class="${weight.class} ds-text-xl" style="margin-bottom: 0.5rem;">
        The quick brown fox
      </div>
      <div style="font-size: var(--font-size-sm); color: var(--color-on-surface-75);">
        <strong>${weight.name}</strong> • ${weight.var} • ${weight.value}
      </div>
    `;

        container.appendChild(item);
    });

    return container;
}

export const TypeScale = {
    name: 'Font Size Scale',
    render: () => createTypographyScale(),
    parameters: {
        docs: {
            description: {
                story: 'Complete font size scale used across the Labs design system. Each size has a specific use case and responsive behavior.'
            }
        }
    }
};

export const FontWeights = {
    name: 'Font Weights',
    render: () => createFontWeights(),
    parameters: {
        docs: {
            description: {
                story: 'Font weight variations available in the Labs design system. Used to create hierarchy and emphasis.'
            }
        }
    }
};
