import "./labs-button.js";

class LabsCheckbox extends HTMLElement {
    static get observedAttributes() {
        return ["checked", "iconcolor"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.checked = false;
        this.handleClick = this.handleClick.bind(this);
    }

    connectedCallback() {
        this.render();
        this.addEventListener("labs-click", this.handleClick);
    }

    disconnectedCallback() {
        this.removeEventListener("labs-click", this.handleClick);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "checked") {
            this.checked = newValue !== null;
        }
        this.render();
    }

    handleClick(e) {
        e.stopPropagation(); // Prevent double events
        this.toggleState();
    }

    toggleState() {
        this.checked = !this.checked;

        if (this.checked) {
            this.setAttribute("checked", "");
        } else {
            this.removeAttribute("checked");
        }

        // Dispatch change event
        this.dispatchEvent(new CustomEvent("labs-checkbox-change", {
            bubbles: true,
            detail: { checked: this.checked }
        }));
    }

    render() {
        const iconColor = this.getAttribute("iconcolor") || "var(--color-on-surface)";

        this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }
        
        /* Ensure smooth transitions */
        labs-button {
          transition: all 0.2s ease;
        }
      </style>
      
      <labs-button
        icon="${this.checked ? 'check_box' : 'check_box_outline_blank'}"
        variant="icon"
        iconcolor="${this.checked ? 'var(--color-primary)' : iconColor}"
        aria-label="${this.checked ? 'Mark as incomplete' : 'Mark as complete'}"
        data-checkbox-state="${this.checked ? 'checked' : 'unchecked'}"
      ></labs-button>
    `;
    }
}

customElements.define("labs-checkbox", LabsCheckbox);
