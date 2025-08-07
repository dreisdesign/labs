/* eslint-disable */
import "./labs-footer.js";
import "./labs-settings-overlay.js";

class LabsAppFooter extends HTMLElement {
    constructor() {
        super();
        // No shadow DOM - this is just a composition pattern
    }

    static get observedAttributes() {
        return ["add-label", "variant"];
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Use a timeout to ensure components are fully rendered
        setTimeout(() => {
            const footer = this.querySelector('labs-footer');
            const overlay = this.querySelector('labs-settings-overlay');

            if (footer && overlay) {
                // Connect footer to overlay
                footer.addEventListener('settings-click', () => overlay.open());

                // Forward add clicks to parent
                footer.addEventListener('add-click', () => {
                    this.dispatchEvent(new CustomEvent('add-click', { bubbles: true }));
                });

                // Forward overlay actions to parent
                overlay.addEventListener('action-click', (e) => {
                    this.dispatchEvent(new CustomEvent('action-click', {
                        bubbles: true,
                        detail: e.detail
                    }));
                });
            } else {
                console.warn('labs-app-footer: Child components not found', { footer, overlay });
            }
        }, 0);
    }

    render() {
        const addLabel = this.getAttribute("add-label") || "+ Add";
        const variant = this.getAttribute("variant") || "default";

        this.innerHTML = `
      <!-- Footer Component -->
      <labs-footer 
        add-label="${addLabel}" 
        ${variant !== "default" ? `variant="${variant}"` : ""}
      ></labs-footer>
      
      <!-- Settings Overlay Component -->
      <labs-settings-overlay></labs-settings-overlay>
    `;

        // Re-setup event listeners after re-render
        this.setupEventListeners();
    }
}

customElements.define("labs-app-footer", LabsAppFooter);
