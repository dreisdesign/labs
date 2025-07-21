import '../tokens/button.css';

export default {
    title: 'Tokens/Colors',
    parameters: {
        docs: {
            description: {
                component: 'Color system for the Labs Design System. These colors are used across all components and support both light and dark themes.'
            }
        }
    }
};

function createColorPalette() {
    const container = document.createElement('div');
    container.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    font-family: var(--button-font-family, sans-serif);
  `;

    const colors = [
        { name: 'Primary', var: '--button-color-primary', onVar: '--button-color-on-primary' },
        { name: 'Secondary', var: '--button-color-secondary', onVar: '--button-color-on-secondary' },
        { name: 'Primary Darker', var: '--color-primary-darker', onVar: '--button-color-on-primary' },
        { name: 'Success', var: '--button-color-success', onVar: '--button-color-on-success' },
        { name: 'Error', var: '--button-color-error', onVar: '--button-color-on-error' },
        { name: 'Disabled', var: '--button-color-disabled', onVar: '--button-color-on-disabled' },
        { name: 'Outline', var: '--button-color-outline', onVar: '--button-color-on-primary' },
        { name: 'Ghost BG', var: '--button-color-ghost-bg', onVar: '--button-color-on-primary' },
        { name: 'Focus', var: '--button-color-focus', onVar: '--button-color-on-primary' },
    ];

    colors.forEach(color => {
        const colorCard = document.createElement('div');
        colorCard.style.cssText = `
      background: var(${color.var});
      color: var(${color.onVar});
      padding: 1.5rem;
      border-radius: 1rem;
      text-align: center;
      border: 1px solid var(--button-color-outline, #eee);
    `;

        colorCard.innerHTML = `
      <div style="font-weight: 600; margin-bottom: 0.5rem;">
        ${color.name}
      </div>
      <div style="font-size: 0.9rem; opacity: 0.8;">
        ${color.var}
      </div>
      <div style="font-size: 0.9rem; opacity: 0.8;">
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
