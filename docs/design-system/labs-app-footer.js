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
        // Wait for custom elements to be defined
        Promise.all([
            customElements.whenDefined('labs-footer'),
            customElements.whenDefined('labs-settings-overlay')
        ]).then(() => {
            // Use additional timeout to ensure components are rendered
            setTimeout(() => {
                const footer = this.querySelector('labs-footer');
                const overlay = this.querySelector('labs-settings-overlay');

                if (footer && overlay) {
                    // Connect footer to overlay
                    footer.addEventListener('settings-click', () => {
                        if (typeof overlay.open === 'function') {
                            overlay.open();
                        } else {
                            console.error('labs-settings-overlay: open method not available');
                        }
                    });
                    // Let native bubbling handle other events (add-click, action-click)
                } else {
                    console.warn('labs-app-footer: Child components not found', { footer, overlay });
                }
            }, 10);
        }).catch(error => {
            console.error('labs-app-footer: Error waiting for component definitions', error);
        });
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
