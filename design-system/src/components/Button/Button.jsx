// Simple, reusable button component for HTML/JS (no React)
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
export function Button({ label = 'Button', onClick, type = 'button', variant = 'primary', size = 'md', style = {}, disabled = false }) {
    const btn = document.createElement('button');
    btn.type = type;
    btn.innerText = label;
    let className = 'ds-btn';
    if (variant === 'primary') className += ' ds-btn--primary';
    if (variant === 'danger') className += ' ds-btn--danger';
    if (variant === 'success') className += ' ds-btn--success';
    if (variant === 'error') className += ' ds-btn--error';
    if (variant === 'outline') className += ' ds-btn--outline';
    if (variant === 'ghost') className += ' ds-btn--ghost';
    if (size === 'sm') className += ' ds-btn--sm';
    if (size === 'md') className += ' ds-btn--md';
    if (size === 'lg') className += ' ds-btn--lg';
    if (size === 'full') className += ' ds-btn--full';
    btn.setAttribute('role', 'button');
    btn.setAttribute('aria-label', label);
    btn.setAttribute('tabindex', disabled ? '-1' : '0');
    if (disabled) {
        btn.setAttribute('aria-disabled', 'true');
        btn.disabled = true;
    }
    btn.className = className;
    if (onClick && !disabled) btn.addEventListener('click', onClick);
    if (style && typeof style === 'object') {
        Object.assign(btn.style, style);
    }
    return btn;
}
