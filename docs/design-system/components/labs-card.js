class LabsCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ["title", "subtitle", "variant", "width"];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute("title") || "";
        const subtitle = this.getAttribute("subtitle") || "";
        const variant = this.getAttribute("variant") || "default";
        const width = this.getAttribute("width") || "auto";

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: ${width === 'full' ? '100%' : width === 'constrained' ? 'min(500px, 100%)' : width};
                    margin: var(--card-margin, 0);
                }

                .card {
                    background: var(--card-bg, var(--color-surface-container, #f8f9fa));
                    border-radius: var(--card-border-radius, var(--border-radius-lg, 12px));
                    border: var(--card-border, 1px solid var(--color-outline-variant, #e0e0e0));
                    padding: var(--card-padding, var(--space-lg, 24px));
                    transition: all 0.2s ease;
                    box-shadow: var(--card-shadow, none);
                }

                /* Variant styles */
                .card.default {
                    /* Uses default styles above */
                }

                .card.elevated {
                    box-shadow: var(--card-shadow, var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1)));
                    background: var(--card-bg, var(--color-surface, white));
                }

                .card.stats {
                    text-align: center;
                    background: var(--card-bg, var(--color-surface-container, #f8f9fa));
                    border: var(--card-border, 1px solid var(--color-outline-variant, #e0e0e0));
                }

                .card.header {
                    text-align: center;
                    background: var(--card-bg, var(--color-surface-container, #f8f9fa));
                    margin-bottom: var(--space-lg, 24px);
                }

                .card.compact {
                    padding: var(--card-padding, var(--space-md, 16px));
                }

                .card.outline {
                    background: transparent;
                    border: var(--card-border, 2px solid var(--color-outline, #d1d5db));
                }

                /* Interactive variants */
                .card.clickable {
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .card.clickable:hover {
                    transform: translateY(-2px);
                    box-shadow: var(--card-hover-shadow, var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1)));
                    background: var(--card-hover-bg, var(--color-surface-container-high, #e8eaed));
                }

                .card.clickable:active {
                    transform: translateY(0);
                }

                .card-header {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-xs, 8px);
                    margin-bottom: var(--card-content-gap, var(--space-md, 16px));
                }

                .card-title {
                    font-size: var(--card-title-size, var(--font-size-h3, 1.25rem));
                    font-weight: var(--card-title-weight, var(--font-weight-semibold, 600));
                    color: var(--card-title-color, var(--color-on-surface, #1f2937));
                    margin: 0;
                    line-height: 1.3;
                }

                .card-subtitle {
                    font-size: var(--card-subtitle-size, var(--font-size-body-sm, 0.875rem));
                    color: var(--card-subtitle-color, var(--color-on-surface-variant, #6b7280));
                    margin: 0;
                    line-height: 1.4;
                }

                .card-content {
                    color: var(--card-content-color, var(--color-on-surface, #1f2937));
                }

                /* Hide header if no title/subtitle */
                .card-header:empty {
                    display: none;
                    margin: 0;
                }

                /* Dark theme support */
                :host-context(.theme-dark) .card {
                    background: var(--card-bg, var(--color-surface-container-dark, #2a2a2a));
                    border-color: var(--color-outline-dark, #525252);
                }

                :host-context(.theme-dark) .card.elevated {
                    background: var(--card-bg, var(--color-surface-dark, #1f1f1f));
                }

                :host-context(.theme-dark) .card-title {
                    color: var(--card-title-color, var(--color-on-surface-dark, #e0e0e0));
                }

                :host-context(.theme-dark) .card-subtitle {
                    color: var(--card-subtitle-color, var(--color-on-surface-variant-dark, #a0a0a0));
                }
            </style>
            
            <div class="card ${variant}">
                <div class="card-header">
                    ${title ? `<h3 class="card-title">${title}</h3>` : ''}
                    ${subtitle ? `<p class="card-subtitle">${subtitle}</p>` : ''}
                </div>
                <div class="card-content">
                    <slot></slot>
                </div>
            </div>
        `;

        // Handle click events for clickable variant
        if (variant === 'clickable') {
            this.shadowRoot.addEventListener('click', (e) => {
                this.dispatchEvent(new CustomEvent('card-click', {
                    detail: {
                        title,
                        subtitle,
                        target: this
                    },
                    bubbles: true
                }));
            });
        }
    }
}

customElements.define("labs-card", LabsCard);

export default LabsCard;
