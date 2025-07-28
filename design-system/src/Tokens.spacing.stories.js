import './styles/tokens/spacing.css';

export default {
    title: 'Tokens/Spacing',
    parameters: {
        docs: {
            description: {
                component: 'All spacing tokens used in the Labs Design System.'
            }
        }
    }
};

export const Spacing = () => {
    const tokens = [
        'space-xs', 'space-sm', 'space-md', 'space-lg', 'space-xl'
    ];
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1.5rem';
    tokens.forEach(token => {
        const item = document.createElement('div');
        item.style.height = `var(--${token})`;
        item.style.width = '200px';
        item.style.background = '#eee';
        item.style.border = '1px solid #ccc';
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        item.style.justifyContent = 'flex-start';
        item.style.paddingLeft = '1rem';
        item.innerHTML = `<strong>--${token}</strong> <span style="margin-left:0.5rem; color:#666;">${getComputedStyle(document.documentElement).getPropertyValue(`--${token}`)}</span>`;
        container.appendChild(item);
    });
    return container;
};
