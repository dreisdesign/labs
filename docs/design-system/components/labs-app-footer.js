/* eslint-disable */
import "./labs-footer.js";
import "./labs-settings-overlay.js";

class LabsAppFooter extends HTMLElement {
    constructor() {
        super();
        // No shadow DOM - this is just a composition pattern
        this._listenersSetup = false;
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
        // Prevent duplicate setup
        if (this._listenersSetup) return;

        // Use a timeout to ensure components are fully rendered
        setTimeout(() => {
            const footer = this.querySelector('labs-footer');
            const overlay = this.querySelector('labs-settings-overlay');

            if (footer && overlay) {
                // Connect footer to overlay
                footer.addEventListener('settings-click', () => overlay.open());
                // Let native bubbling handle other events (add-click, action-click)
                this._listenersSetup = true;
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

        // Only setup listeners once - render() can be called multiple times
        if (!this._listenersSetup) {
            this.setupEventListeners();
        }
    }
}

customElements.define("labs-app-footer", LabsAppFooter);
