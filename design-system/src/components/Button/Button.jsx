// Simple, reusable button component for HTML/JS (no React)
import './../../../src/tokens/colors.css';
import './../../../src/tokens/typography.css';
import './Button.css';

/**
 * Creates a design system button as a DOM node.
 * @param {Object} options
 * @param {string} options.label - Button text
 * @param {function} [options.onClick] - Click handler
 * @param {string} [options.type] - Button type (button, submit, etc)
 * @param {string} [options.variant] - 'primary' | 'danger' | undefined
 * @param {Object} [options.style] - Inline style object
 * @returns {HTMLButtonElement}
 */
export function Button({ label = 'Button', onClick, type = 'button', variant = 'primary', style = {} }) {
    const btn = document.createElement('button');
    btn.type = type;
    btn.innerText = label;
    let className = 'ds-btn';
    if (variant === 'primary') className += ' ds-btn--primary';
    if (variant === 'danger') className += ' ds-btn--danger';
    btn.className = className;
    if (onClick) btn.addEventListener('click', onClick);
    if (style && typeof style === 'object') {
        Object.assign(btn.style, style);
    }
    return btn;
}
