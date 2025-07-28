import './styles/tokens/typography.css';

export default {
    title: 'Tokens/Typography',
    parameters: {
        docs: {
            description: {
                component: 'All typography tokens used in the Labs Design System.'
            }
        }
    }
};

export const Typography = () => {
    const tokens = [
        'font-family-base', 'font-size-base', 'font-size-lg', 'font-size-sm', 'font-weight-regular', 'font-weight-bold'
    ];
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '1rem';
    tokens.forEach(token => {
        const item = document.createElement('div');
        item.style.fontFamily = token === 'font-family-base' ? `var(--${token})` : 'inherit';
        item.style.fontSize = token.startsWith('font-size') ? `var(--${token})` : '1rem';
        item.style.fontWeight = token.startsWith('font-weight') ? `var(--${token})` : '400';
        item.innerHTML = `<strong>--${token}</strong>: <span style='font-family:var(--font-family-base);'>${getComputedStyle(document.documentElement).getPropertyValue(`--${token}`)}</span>`;
        container.appendChild(item);
    });
    return container;
};
