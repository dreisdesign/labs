/* eslint-disable */
import "./labs-icon.js";

class LabsButton extends HTMLElement {
  static get observedAttributes() {
    return ["variant", "icon-left", "icon-right", "checkmark", "label", "size"];
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
    // Event listener is now added in render() method

    // Listen for theme changes to re-render when CSS variables change
    this.themeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' &&
          (mutation.attributeName === 'class' &&
            (mutation.target.classList.contains('theme-dark') ||
              mutation.target.classList.contains('theme-light')))) {
          // Theme changed, re-render to update CSS variable resolution
          this.render();
        }
      });
    });

    // Watch for class changes on body (where theme classes are applied)
    this.themeObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  disconnectedCallback() {
    const button = this.shadowRoot.querySelector("button");
    if (button) {
      button.removeEventListener("click", this.handleClick);
    }

    // Clean up theme observer
    if (this.themeObserver) {
      this.themeObserver.disconnect();
    }
  }

  attributeChangedCallback() {
    console.log("[LabsButton] attributeChangedCallback:", {
      variant: this.getAttribute("variant"),
      iconLeft: this.getAttribute("icon-left"),
      iconRight: this.getAttribute("icon-right"),
      checkmark: this.getAttribute("checkmark"),
      label: this.getAttribute("label"),
      iconcolor: this.getAttribute("iconcolor"),
      size: this.getAttribute("size"),
    });
    this.render();
  }

  handleClick(e) {
    const btn = this.shadowRoot.querySelector("button");
    btn.setAttribute('data-active', 'true');
    setTimeout(() => {
      btn.removeAttribute('data-active');
    }, 200); // short active state
    if (this.hasAttribute("checkmark")) {
      if (this.animating) return;
      this.animating = true;
      btn.classList.remove("checkmark-animation");
      void btn.offsetWidth;
      btn.classList.add("checkmark-animation");
      setTimeout(() => {
        btn.classList.remove("checkmark-animation");
        this.animating = false;
      }, 800);
    }
    this.dispatchEvent(new CustomEvent("labs-click", { bubbles: true }));
  }

  render() {
    // Determine icon color logic based on label/variant
    const labelRaw = this.getAttribute("label") || "";
    const label = labelRaw.toLowerCase();
    const variant = this.getAttribute("variant") || "primary";
    const size = this.getAttribute("size") || "lg";
    // Icon color is now determined by theme and variant, not by control
    let iconColor = this.getAttribute("iconcolor") || "";
    let iconColorActive = "";
    // Map legacy icon names to icon registry keys
    const mapIconName = (name) => {
      if (!name) return "";
      // Remove file extensions and --fill, --outline, etc.
      return name
        .replace(/\.(svg|png|jpg|jpeg)$/i, "")
        .replace(/--fill|--outline|--regular|--solid/gi, "")
        .replace(/-/g, "_");
    };

    const icon = mapIconName(this.getAttribute("icon-left"));
    let iconRight = mapIconName(this.getAttribute("icon-right"));
    // Only use the default icon if the attribute 'default-icon-right' is present and icon-right is not set
    if (!iconRight && this.hasAttribute("default-icon-right")) {
      iconRight = "settings";
    }
    const checkmark = this.hasAttribute("checkmark");

    const buttonType = label.replace(/\s/g, "");
    // No special icon color variable for Add button
    const addIconColorVar = '';
    // Determine if icon-only: size='sm' or label is empty and icon is present
    const isIconOnly = size === "sm" || (!labelRaw && (icon || iconRight));
    const sizeClass = isIconOnly ? "icon" : size === "lg" ? "large" : "";

    this.shadowRoot.innerHTML = `
      <style>
        :host { 
          display: inline-block; 
          margin: 0;
          padding: 0;
        }
        :host([variant="container"]),
        :host([variant="container-danger"]) {
          display: block;
          width: 100%;
          min-height: 3.5rem;
          margin: 0;
          padding: 0;
        }
        .labs-button {
          font-size: 1.25rem;
          font-weight: 600;
          border: none;
          border-radius: 5rem;
          cursor: pointer;
          transition: background-color 0.2s, color 0.2s, transform 0.1s ease-out;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          overflow: hidden;
          position: relative;
          padding: 0.75rem 1.5rem;
        }
            .labs-button[data-active="true"],
            .labs-button:active {
              transition-duration: 0.05s;
              transform: scale(0.93);
            }
            /* Add: no special-case, uses primary variant like Save */
            /* Settings/Default: on press, bg is white, text/icon are black */
            .labs-button[data-active="true"][data-buttontype="settings"],
            .labs-button:active[data-buttontype="settings"],
            .labs-button[data-active="true"][data-buttontype="default"],
            .labs-button:active[data-buttontype="default"] {
              background: var(--color-surface, #ffffff) !important;
              color: var(--color-on-surface, #000000) !important;
            }
            .labs-button[data-active="true"][data-buttontype="settings"] .labs-icon,
            .labs-button:active[data-buttontype="settings"] .labs-icon,
            .labs-button[data-active="true"][data-buttontype="default"] .labs-icon,
            .labs-button:active[data-buttontype="default"] .labs-icon {
              color: var(--color-on-surface, #000000) !important;
            }
            /* Icon Left/Right: on press, bg is white, text is black, icon is black */
            .labs-button[data-active="true"][data-buttontype="iconleft"],
            .labs-button:active[data-buttontype="iconleft"],
            .labs-button[data-active="true"][data-buttontype="iconright"],
            .labs-button:active[data-buttontype="iconright"] {
              background: var(--color-surface, #ffffff) !important;
              color: var(--color-on-surface, #000000) !important;
            }
            .labs-button[data-active="true"][data-buttontype="iconleft"] .labs-icon,
            .labs-button:active[data-buttontype="iconleft"] .labs-icon,
            .labs-button[data-active="true"][data-buttontype="iconright"] .labs-icon,
            .labs-button:active[data-buttontype="iconright"] .labs-icon {
              color: var(--color-on-surface, #000000) !important;
            }
        
        /* Remove default hover - let variants handle their own hover states */
        
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
          background: var(--color-hover-light);
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
          background: var(--color-hover-light);
        }
        
        /* Icon-only variant */
        .labs-button.icon {
          background: transparent;
          border: none;
          border-radius: 50%;
          padding: 0.5rem;
          min-width: 44px;
          min-height: 44px;
          width: auto;
        }
        .labs-button.icon:hover {
          background: var(--color-hover-light);
        }
        .labs-button.icon:active {
          background: var(--color-primary-75);
        }
        .labs-button.icon .labs-label {
          display: none; /* Hide label in icon variant */
        }
        
        /* Transparent icon variant - for hover actions and minimal icons */
        .labs-button.icon-transparent {
          background: transparent !important;
          border: none;
          padding: 0;
          min-width: auto;
          min-height: auto;
          width: auto;
          height: auto;
          border-radius: 0;
        }
        .labs-button.icon-transparent:hover {
          background: transparent !important;
          transform: none;
        }
        .labs-button.icon-transparent:active {
          background: transparent !important;
          transform: none;
        }
        .labs-button.icon-transparent .labs-label {
          display: none; /* Hide label in icon variant */
        }
        
        /* Container variants for overlay use */
        .labs-button.container {
          background: transparent;
          color: var(--color-on-surface);
          border-radius: 0.7rem;
          width: 100%;
          min-width: 100%;
          height: 100%;
          box-sizing: border-box;
          justify-content: flex-start;
          padding: 1.25rem;
        }
        .labs-button.container:hover {
          background: var(--color-hover-light);
        }
        .labs-button.container:active {
          background: var(--color-primary-75);
        }
        
        .labs-button.container-danger {
          background: transparent;
          color: var(--color-error);
          border-radius: 0.7rem;
          width: 100%;
          min-width: 100%;
          height: 100%;
          box-sizing: border-box;
          justify-content: flex-start;
          padding: 1.25rem;
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
        .labs-button.container-danger:hover .labs-label,
        .labs-button.container-danger:active .labs-label {
          color: var(--color-on-error);
        }
        
        /* Pill variant - Fully rounded buttons for forms */
        .labs-button.pill {
          background: var(--color-primary);
          color: var(--color-on-primary);
          border-radius: 2rem; /* Full pill shape */
          padding: 0.75rem 1.5rem;
          min-height: auto;
        }
        .labs-button.pill:hover {
          background: var(--color-secondary);
        }
        .labs-button.pill:active {
          background: var(--color-primary-darker);
        }
        
        /* Pill secondary variant */
        .labs-button.pill-secondary {
          background: transparent;
          color: var(--color-primary);
          border: 2px solid var(--color-primary);
          border-radius: 2rem;
          padding: 0.75rem 1.5rem;
          min-height: auto;
        }
        .labs-button.pill-secondary:hover {
          background: var(--color-primary-25);
        }
        .labs-button.pill-secondary:active {
          background: var(--color-primary-75);
        }
        
        /* Rounded rectangle variant - Softer corners for overlays */
        .labs-button.rounded {
          background: var(--color-primary);
          color: var(--color-on-primary);
          border-radius: 1rem; /* Softer rounded corners */
          padding: 0.875rem 1.25rem;
        }
        .labs-button.rounded:hover {
          background: var(--color-secondary);
        }
        .labs-button.rounded:active {
          background: var(--color-primary-darker);
        }
        
        /* Rounded secondary variant */
        .labs-button.rounded-secondary {
          background: transparent;
          color: var(--color-primary);
          border: 2px solid var(--color-primary);
          border-radius: 1rem;
          padding: 0.875rem 1.25rem;
        }
        .labs-button.rounded-secondary:hover {
          background: var(--color-primary-25);
        }
        .labs-button.rounded-secondary:active {
          background: var(--color-primary-75);
        }
        
        .labs-icon {
          width: 1.5rem;
          height: 1.5rem;
          display: inline-block;
          vertical-align: middle;
          transition: transform 0.3s ease;
        }

        /* Settings icon rotation animation */
        .labs-button[icon="settings"]:hover .labs-icon,
        .labs-button[icon="settings"]:active .labs-icon {
          transform: rotate(180deg);
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
        .checkmark-animation .labs-label {
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.3s ease-out, transform 0.3s ease-out;
        }
        /* Hide primary icon during animation to prevent overlap */
        .checkmark-animation .labs-icon:not(.labs-checkmark .labs-icon) {
          opacity: 0;
          transition: opacity 0.3s ease-out;
        }
        .checkmark-animation .labs-checkmark {
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
      <button class="labs-button ${variant} ${sizeClass}" part="button"
        data-buttontype="${buttonType}"
        style="--icon-active-color: ${iconColorActive}; ${addIconColorVar}">
  ${icon ? `<labs-icon class="labs-icon" name="${icon}"${iconColor ? ` color=\"${iconColor}\"` : ""}></labs-icon>` : ""}
  <span class="labs-label">${labelRaw}</span>
  ${iconRight ? `<labs-icon class="labs-icon" name="${iconRight}" color="${iconColor}"></labs-icon>` : ""}
  ${checkmark ? `<span class="labs-checkmark"><labs-icon name="check" class="labs-icon" color="${iconColor || "white"}"></labs-icon></span>` : ""}
      </button>
    `;

    // Re-add event listener after DOM recreation
    this.shadowRoot
      .querySelector("button")
      .addEventListener("click", this.handleClick);
  }
}

customElements.define("labs-button", LabsButton);
