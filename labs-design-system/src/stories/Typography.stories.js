import '../tokens/index.css';

export default {
    title: 'Design Tokens/Typography',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Typography system extracted from the Tracker app. Includes font families, sizes, weights, and utilities used across all components.'
            }
        }
    }
};

// Typography scale component
function createTypographyScale() {
    const container = document.createElement('div');
    container.style.cssText = `
    font-family: var(--labs-font-family-base);
    color: var(--labs-color-on-background);
  `;

    const sizes = [
        { name: 'Extra Small', class: 'labs-text-xs', var: '--labs-font-size-xs', usage: 'Captions, metadata' },
        { name: 'Small', class: 'labs-text-sm', var: '--labs-font-size-sm', usage: 'Secondary text' },
        { name: 'Base', class: 'labs-text-base', var: '--labs-font-size-base', usage: 'Body text, buttons' },
        { name: 'Large', class: 'labs-text-lg', var: '--labs-font-size-lg', usage: 'Large buttons' },
        { name: 'Extra Large', class: 'labs-text-xl', var: '--labs-font-size-xl', usage: 'Section headings' },
        { name: '2X Large', class: 'labs-text-2xl', var: '--labs-font-size-2xl', usage: 'Page headings' },
        { name: '3X Large', class: 'labs-text-3xl', var: '--labs-font-size-3xl', usage: 'Hero text' },
        { name: '4X Large', class: 'labs-text-4xl', var: '--labs-font-size-4xl', usage: 'Display text' }
    ];

    sizes.forEach(size => {
        const item = document.createElement('div');
        item.style.cssText = `
      margin-bottom: 1.5rem;
      padding: 1rem;
      border: 1px solid var(--labs-color-primary-25);
      border-radius: var(--labs-border-radius-lg);
    `;

        item.innerHTML = `
      <div class="${size.class}" style="margin-bottom: 0.5rem;">
        The quick brown fox jumps over the lazy dog
      </div>
      <div style="font-size: var(--labs-font-size-sm); color: var(--labs-color-on-surface-75);">
        <strong>${size.name}</strong> • ${size.var} • ${size.usage}
      </div>
    `;

        container.appendChild(item);
    });

    return container;
}

// Font weights component
function createFontWeights() {
    const container = document.createElement('div');
    container.style.cssText = `
    font-family: var(--labs-font-family-base);
    color: var(--labs-color-on-background);
  `;

    const weights = [
        { name: 'Light', class: 'labs-font-light', var: '--labs-font-weight-light', value: '300' },
        { name: 'Normal', class: 'labs-font-normal', var: '--labs-font-weight-normal', value: '400' },
        { name: 'Semibold', class: 'labs-font-semibold', var: '--labs-font-weight-semibold', value: '600' },
        { name: 'Bold', class: 'labs-font-bold', var: '--labs-font-weight-bold', value: '700' },
        { name: 'Black', class: 'labs-font-black', var: '--labs-font-weight-black', value: '900' }
    ];

    weights.forEach(weight => {
        const item = document.createElement('div');
        item.style.cssText = `
      margin-bottom: 1rem;
      padding: 1rem;
      border: 1px solid var(--labs-color-primary-25);
      border-radius: var(--labs-border-radius-lg);
    `;

        item.innerHTML = `
      <div class="${weight.class} labs-text-xl" style="margin-bottom: 0.5rem;">
        The quick brown fox
      </div>
      <div style="font-size: var(--labs-font-size-sm); color: var(--labs-color-on-surface-75);">
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

// Button typography examples (showing how typography is used in components)
export const ButtonTypography = {
    name: 'Typography in Buttons',
    render: () => {
        const container = document.createElement('div');
        container.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-family: var(--labs-font-family-base);
    `;

        container.innerHTML = `
      <div>
        <h3 style="margin-bottom: 0.5rem; font-weight: var(--labs-font-weight-semibold);">
          Button Typography Usage
        </h3>
        <p style="color: var(--labs-color-on-surface-75); margin-bottom: 1rem;">
          Examples of how typography tokens are applied in the Button component:
        </p>
        
        <button class="labs-button labs-button--sm labs-button--outline" 
                style="margin-right: 0.5rem; margin-bottom: 0.5rem;">
          Small Button (font-size-sm)
        </button>
        
        <button class="labs-button labs-button--primary" 
                style="margin-right: 0.5rem; margin-bottom: 0.5rem;">
          Default Button (font-size-base)
        </button>
        
        <button class="labs-button labs-button--lg labs-button--secondary" 
                style="margin-right: 0.5rem; margin-bottom: 0.5rem;">
          Large Button (font-size-lg)
        </button>
      </div>
    `;

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
