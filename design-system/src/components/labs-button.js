/* eslint-disable */
import "./labs-icon.js";

class LabsButton extends HTMLElement {
  static get observedAttributes() {
    return ["variant", "icon", "icon-right", "checkmark", "label", "iconcolor"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.animating = false;
    this.handleClick = this.handleClick.bind(this);
  }

  connectedCallback() {
    console.log("[LabsButton] LOCAL COMPONENT LOADED - DEMO TEST");
    this.render();
    this.shadowRoot
      .querySelector("button")
      .addEventListener("click", this.handleClick);
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector("button")
      .removeEventListener("click", this.handleClick);
  }

  attributeChangedCallback() {
    console.log("[LabsButton] attributeChangedCallback:", {
      variant: this.getAttribute("variant"),
      icon: this.getAttribute("icon"),
      iconRight: this.getAttribute("icon-right"),
      checkmark: this.getAttribute("checkmark"),
      label: this.getAttribute("label"),
      iconcolor: this.getAttribute("iconcolor"),
    });
    this.render();
  }

  handleClick(e) {
    console.log("[LabsButton] handleClick:", {
      checkmark: this.hasAttribute("checkmark"),
      label: this.getAttribute("label"),
      icon: this.getAttribute("icon"),
      iconRight: this.getAttribute("icon-right"),
    });
    if (this.hasAttribute("checkmark")) {
      if (this.animating) return;
      this.animating = true;
      const btn = this.shadowRoot.querySelector("button");
      btn.classList.remove("success");
      void btn.offsetWidth;
      btn.classList.add("success");
      setTimeout(() => {
        btn.classList.remove("success");
        this.animating = false;
      }, 800);
    }
    this.dispatchEvent(new CustomEvent("labs-click", { bubbles: true }));
  }

  render() {
    let iconColor = this.getAttribute("iconcolor") || "";
    // If iconColor is a CSS variable (token), resolve it to a real value
    if (iconColor.startsWith('var(')) {
      const temp = document.createElement('div');
      temp.style.color = iconColor;
      document.body.appendChild(temp);
      iconColor = getComputedStyle(temp).color;
      document.body.removeChild(temp);
    }
    // Map legacy icon names to icon registry keys
    const mapIconName = (name) => {
      if (!name) return "";
      // Remove file extensions and --fill, --outline, etc.
      return name
        .replace(/\.(svg|png|jpg|jpeg)$/i, "")
        .replace(/--fill|--outline|--regular|--solid/gi, "")
        .replace(/-/g, "_");
    };

    const icon = mapIconName(this.getAttribute("icon"));
    let iconRight = mapIconName(this.getAttribute("icon-right"));
    // Only use the default icon if the attribute 'default-icon-right' is present and icon-right is not set
    if (!iconRight && this.hasAttribute("default-icon-right")) {
      iconRight = "settings";
    }
    const label = this.getAttribute("label") || "";
    const checkmark = this.hasAttribute("checkmark");
    const variant = this.getAttribute("variant") || "primary";

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: inline-block; }
        .labs-button {
          font-size: 1.25rem;
          font-weight: 600;
          border: none;
          border-radius: 5rem;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.1s ease-out;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          overflow: hidden;
          position: relative;
          padding: 0.75rem 1.5rem;
        }
        .labs-button:active,
        .labs-button.button-pressed {
          background-color: rgb(25, 23, 80);
          transform: scale(0.95);
          transition-duration: 0.05s;
        }
        .labs-button:hover {
          background: rgb(13, 11, 63);
        }
        
        /* Container variants should not have default hover styles */
        .labs-button.container:hover,
        .labs-button.container-danger:hover {
          background: transparent;
          transform: none;
        }
        .labs-button.container:active,
        .labs-button.container-danger:active {
          background: transparent;
          transform: none;
        }
        
        .labs-button:focus-visible {
          outline: 3px solid rgb(0, 95, 204);
          outline-offset: 2px;
        }
        
        /* Variant Styles */
        .labs-button.primary {
          background: var(--color-primary);
          color: var(--color-on-primary);
        }
        .labs-button.primary:hover {
          background: var(--color-secondary);
        }
        .labs-button.primary:active {
          background: var(--color-primary-darker);
        }
        
        .labs-button.secondary {
          background: var(--color-surface);
          color: var(--color-on-surface);
          border: 2px solid var(--color-primary);
        }
        .labs-button.secondary:hover {
          background: var(--color-primary-25);
        }
        .labs-button.secondary:active {
          background: var(--color-primary-75);
        }
        
        .labs-button.danger {
          background: var(--color-error);
          color: var(--color-on-error);
        }
        .labs-button.danger:hover {
          background: var(--color-error);
          opacity: 0.9;
        }
        .labs-button.danger:active {
          background: var(--color-error);
          opacity: 0.8;
        }
        
        .labs-button.success {
          background: var(--color-success);
          color: var(--color-on-primary);
        }
        .labs-button.success:hover {
          background: var(--color-success);
          opacity: 0.9;
        }
        
        .labs-button.transparent {
          background: transparent;
          color: var(--color-on-surface);
        }
        .labs-button.transparent:hover {
          background: var(--color-primary-25);
        }
        
        /* Container variants for overlay use */
        .labs-button.container {
          background: transparent;
          color: var(--color-on-surface);
          border-radius: 0.7rem;
        }
        .labs-button.container:hover {
          background: var(--color-primary-25);
        }
        .labs-button.container:active {
          background: var(--color-primary-75);
        }
        
        .labs-button.container-danger {
          background: transparent;
          color: var(--color-error);
          border-radius: 0.7rem;
        }
        .labs-button.container-danger:hover {
          background: var(--color-error);
          color: var(--color-on-error);
        }
        .labs-button.container-danger:active {
          background: var(--color-error);
          color: var(--color-on-error);
          opacity: 0.85;
        }
        
        .labs-icon {
          width: 1.5rem;
          height: 1.5rem;
          display: inline-block;
          vertical-align: middle;
        }
        
        /* Icon colors for container variants */
        .labs-button.container .labs-icon {
          color: var(--color-primary-75);
        }
        .labs-button.container-danger .labs-icon {
          color: var(--color-error);
        }
        .labs-button.container-danger:hover .labs-icon,
        .labs-button.container-danger:active .labs-icon {
          color: var(--color-on-error);
        }
        .labs-label {
          text-align: center;
          line-height: 1.2;
          height: 24px;
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .labs-checkmark {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
        }
        .success .labs-label {
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.3s ease-out, transform 0.3s ease-out;
        }
        .success .labs-checkmark {
          opacity: 1;
          transform: scale(1) rotate(0deg);
          animation: rollInCheckmark 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
        }
        @keyframes rollInCheckmark {
          from {
            opacity: 0;
            transform: scale(0.3) rotate(-360deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        /* Apply icon color filter */
        .labs-icon img {
          filter: ${iconColor === "#fff" || iconColor.toLowerCase() === "white" ? "brightness(0) invert(1)" : iconColor ? `hue-rotate(0deg) saturate(0) brightness(0) invert(1)` : "none"};
        }
        /* Ensure right icon is visible and spaced */
        .labs-button labs-icon:last-of-type {
          opacity: 1 !important;
          display: inline-block !important;
        }
      </style>
      <button class="labs-button ${variant}" part="button">
        ${icon ? `<labs-icon class="labs-icon" name="${icon}" color="${iconColor}"></labs-icon>` : ""}
        <span class="labs-label">${label}</span>
        ${iconRight ? `<labs-icon class="labs-icon" name="${iconRight}" color="${iconColor}"></labs-icon>` : ""}
                ${checkmark ? `<span class="labs-checkmark"><labs-icon name="check" class="labs-icon" color="${iconColor || "white"}"></labs-icon></span>` : ""}
      </button>
    `;
  }
}

customElements.define("labs-button", LabsButton);
