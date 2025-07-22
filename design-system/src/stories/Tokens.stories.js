// Labs Design System - Tokens Story
import '../styles/tokens/colors.css';
import '../styles/tokens/typography.css';
import '../styles/tokens/spacing.css';

export default {
    title: 'Tokens/All',
    parameters: {
        docs: {
            description: {
                component: 'All design tokens (colors, typography, spacing) used in the Labs Design System.'
            }
        }
    }
};

export const Colors = () => {
    const colors = [
        'color-primary', 'color-secondary', 'color-background', 'color-surface', 'color-success', 'color-error', 'color-on-primary', 'color-on-background', 'color-on-surface'
    ];
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(180px, 1fr))';
    container.style.gap = '1rem';
    // Helper to get best contrast text color (black/white) for a given background
    function getContrastTextColor(bgColor) {
        // Remove spaces and hash if present
        bgColor = bgColor.trim();
        if (bgColor.startsWith('#')) bgColor = bgColor.slice(1);
        // Support rgb/rgba
        if (bgColor.startsWith('rgb')) {
            const rgb = bgColor.match(/\d+/g).map(Number);
            // Use luminance formula
            const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]);
            return luminance > 186 ? '#222' : '#fff';
        }
        // Support hex
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
        // fallback
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
Colors.storyName = 'Colors';

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
Typography.storyName = 'Typography';

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
Spacing.storyName = 'Spacing';
