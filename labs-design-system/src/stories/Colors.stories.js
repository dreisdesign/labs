import '../tokens/index.css';

export default {
    title: 'Design Tokens/Colors',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Color system extracted from the Tracker app. These colors are used across all components and support both light and dark themes.'
            }
        }
    }
};

// Color palette component
function createColorPalette() {
    const container = document.createElement('div');
    container.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    font-family: var(--labs-font-family-base);
  `;

    const colors = [
        { name: 'Primary', var: '--labs-color-primary', onVar: '--labs-color-on-primary' },
        { name: 'Secondary', var: '--labs-color-secondary', onVar: '--labs-color-on-primary' },
        { name: 'Primary Darker', var: '--labs-color-primary-darker', onVar: '--labs-color-on-primary' },
        { name: 'Background', var: '--labs-color-background', onVar: '--labs-color-on-background' },
        { name: 'Surface', var: '--labs-color-surface', onVar: '--labs-color-on-surface' },
        { name: 'Success', var: '--labs-color-success', onVar: '--labs-color-on-success' },
        { name: 'Error', var: '--labs-color-error', onVar: '--labs-color-on-error' },
    ];

    colors.forEach(color => {
        const colorCard = document.createElement('div');
        colorCard.style.cssText = `
      background: var(${color.var});
      color: var(${color.onVar});
      padding: 1.5rem;
      border-radius: var(--labs-border-radius-lg);
      text-align: center;
      border: 1px solid var(--labs-color-primary-25);
    `;

        colorCard.innerHTML = `
      <div style="font-weight: var(--labs-font-weight-semibold); margin-bottom: 0.5rem;">
        ${color.name}
      </div>
      <div style="font-size: var(--labs-font-size-sm); opacity: 0.8;">
        ${color.var}
      </div>
      <div style="font-size: var(--labs-font-size-sm); opacity: 0.8;">
        Text: ${color.onVar}
      </div>
    `;

        container.appendChild(colorCard);
    });

    return container;
}

export const ColorPalette = {
    render: () => createColorPalette(),
    parameters: {
        docs: {
            description: {
                story: 'Complete color palette used across the Labs design system. Colors automatically adapt to light/dark themes.'
            }
        }
    }
};

// Individual color examples
export const Primary = {
    render: () => {
        const div = document.createElement('div');
        div.style.cssText = `
      background: var(--labs-color-primary);
      color: var(--labs-color-on-primary);
      padding: 2rem;
      border-radius: var(--labs-border-radius-lg);
      text-align: center;
      font-weight: var(--labs-font-weight-semibold);
    `;
        div.textContent = 'Primary Color';
        return div;
    }
};

export const Secondary = {
    render: () => {
        const div = document.createElement('div');
        div.style.cssText = `
      background: var(--labs-color-secondary);
      color: var(--labs-color-on-primary);
      padding: 2rem;
      border-radius: var(--labs-border-radius-lg);
      text-align: center;
      font-weight: var(--labs-font-weight-semibold);
    `;
        div.textContent = 'Secondary Color';
        return div;
    }
};

export const Success = {
    render: () => {
        const div = document.createElement('div');
        div.style.cssText = `
      background: var(--labs-color-success);
      color: var(--labs-color-on-success);
      padding: 2rem;
      border-radius: var(--labs-border-radius-lg);
      text-align: center;
      font-weight: var(--labs-font-weight-semibold);
    `;
        div.textContent = 'Success Color';
        return div;
    }
};

export const Error = {
    render: () => {
        const div = document.createElement('div');
        div.style.cssText = `
      background: var(--labs-color-error);
      color: var(--labs-color-on-error);
      padding: 2rem;
      border-radius: var(--labs-border-radius-lg);
      text-align: center;
      font-weight: var(--labs-font-weight-semibold);
    `;
        div.textContent = 'Error Color';
        return div;
    }
};
