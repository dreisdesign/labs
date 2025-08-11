class LabsBadge extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ["label", "variant", "color"];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const label = this.getAttribute("label") || this.textContent || "Badge";
        const variant = this.getAttribute("variant") || "default";
        const color = this.getAttribute("color");

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                .badge {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: var(--badge-padding, 0.25rem 0.5rem);
                    font-size: var(--badge-font-size, var(--font-size-body-xs, 12px));
                    font-weight: var(--badge-font-weight, 600);
                    line-height: 1.2;
                    border-radius: var(--badge-border-radius, var(--border-radius-full, 9999px));
                    text-transform: var(--badge-text-transform, uppercase);
                    letter-spacing: var(--badge-letter-spacing, 0.025em);
                    white-space: nowrap;
                    border: 1px solid transparent;
                    transition: all 0.2s ease;
                    min-height: 20px;
                }

                /* Default variant */
                .badge.default {
                    background: var(--badge-bg, var(--color-surface-container-high));
                    color: var(--badge-color, var(--color-on-surface));
                }

                /* Primary variant */
                .badge.primary {
                    background: var(--badge-bg, var(--color-primary));
                    color: var(--badge-color, var(--color-on-primary));
                }

                /* Secondary variant */
                .badge.secondary {
                    background: var(--badge-bg, var(--color-secondary));
                    color: var(--badge-color, var(--color-on-primary));
                }

                /* Success variant */
                .badge.success {
                    background: var(--badge-bg, var(--color-success));
                    color: var(--badge-color, var(--color-on-primary));
                }

                /* Warning variant - using primary color as there's no warning in design system */
                .badge.warning {
                    background: var(--badge-bg, var(--color-primary-75));
                    color: var(--badge-color, var(--color-on-primary));
                }

                /* Danger variant */
                .badge.danger {
                    background: var(--badge-bg, var(--color-error));
                    color: var(--badge-color, var(--color-on-error));
                }

                /* Active variant for highlighting current state */
                .badge.active {
                    background: var(--badge-bg, var(--color-primary-25));
                    color: var(--badge-color, var(--color-primary));
                    border-color: var(--color-primary);
                }

                /* Outline variant */
                .badge.outline {
                    background: transparent;
                    color: var(--badge-color, var(--color-on-surface));
                    border-color: var(--color-outline);
                }

                /* Custom color override */
                .badge[data-custom-color] {
                    background: var(--badge-custom-bg) !important;
                    color: var(--badge-custom-color) !important;
                }
            </style>
            
            <span class="badge ${variant}" ${color ? 'data-custom-color' : ''} style="${color ? `--badge-custom-bg: ${color}; --badge-custom-color: ${this.getContrastColor(color)};` : ''}">
                ${label}
            </span>
        `;
    }

    // Simple contrast color calculation
    getContrastColor(hexColor) {
        if (!hexColor) return 'inherit';

        // Remove # if present
        const hex = hexColor.replace('#', '');

        // Convert to RGB
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);

        // Calculate luminance to determine optimal text color
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        // Return CSS custom properties instead of hard-coded colors
        return luminance > 0.5 ? 'var(--color-on-surface, #000000)' : 'var(--color-on-primary, #ffffff)';
    }
}

customElements.define("labs-badge", LabsBadge);
