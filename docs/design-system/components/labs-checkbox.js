import "./labs-button.js";

class LabsCheckbox extends HTMLElement {
  static get observedAttributes() {
    return ["checked"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.checked = false;
    this.handleClick = this.handleClick.bind(this);
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    this.shadowRoot?.removeEventListener("labs-click", this.handleClick);
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
    this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    /* default icon color */
                    color: var(--color-on-surface);
                }

                /* checked state uses primary token so the icon follows theme */
                :host([checked]) {
                    color: var(--color-primary);
                }

                /* Ensure smooth transitions */
                labs-button {
                    transition: all 0.2s ease;
                }
            </style>

                                <labs-button
                                icon="${this.checked ? 'check_box' : 'check_box_outline_blank'}"
                                variant="icon"
                                aria-label="${this.checked ? 'Mark as incomplete' : 'Mark as complete'}"
                                data-checkbox-state="${this.checked ? 'checked' : 'unchecked'}"
                        ></labs-button>
        `;

    // Setup event listeners after DOM is rendered
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Remove any existing listeners first
    this.shadowRoot.removeEventListener("labs-click", this.handleClick);
    // Listen for labs-click events from the button inside shadow DOM
    this.shadowRoot.addEventListener("labs-click", this.handleClick);
  }
}

customElements.define("labs-checkbox", LabsCheckbox);
