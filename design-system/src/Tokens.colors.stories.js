import './styles/tokens/colors.css';

export default {
    title: 'Tokens/Colors',
    parameters: {
        docs: {
            description: {
                component: 'All color tokens used in the Labs Design System.'
            }
        }
    }
};

export const Colors = () => {
        const colors = [
        'color-primary', 'color-secondary', 'color-primary-darker', 'color-background', 'color-surface', 'color-success', 'color-error', 'color-error-inactive', 'color-on-primary', 'color-on-background', 'color-on-surface', 'color-on-error', 'color-on-error-inactive', 'color-primary-75', 'color-primary-25', 'color-secondary-75', 'color-on-surface-75', 'settings-icon-color'
    ];
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(180px, 1fr))';
    container.style.gap = '1rem';
    function getContrastTextColor(bgColor) {
        bgColor = bgColor.trim();
        if (bgColor.startsWith('#')) bgColor = bgColor.slice(1);
        if (bgColor.startsWith('rgb')) {
            const rgb = bgColor.match(/\d+/g).map(Number);
            const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]);
            return luminance > 186 ? '#222' : '#fff';
        }
        if (bgColor.length === 3) {
            bgColor = bgColor.split('').map(x => x + x).join('');
        }
        if (bgColor.length === 6) {
            const r = parseInt(bgColor.substr(0, 2), 16);
            const g = parseInt(bgColor.substr(2, 2), 16);
            const b = parseInt(bgColor.substr(4, 2), 16);
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
            return luminance > 186 ? '#222' : '#fff';
        }
        return '#222';
    }
    colors.forEach(token => {
        const swatch = document.createElement('div');
        const bgValue = getComputedStyle(document.documentElement).getPropertyValue(`--${token}`).trim();
        swatch.style.background = `var(--${token})`;
        swatch.style.color = getContrastTextColor(bgValue);
        swatch.style.padding = '1.5rem';
        swatch.style.borderRadius = '1rem';
        swatch.style.textAlign = 'center';
        swatch.innerHTML = `<strong>--${token}</strong><br/>${bgValue}`;
        container.appendChild(swatch);
    });
    return container;
};
