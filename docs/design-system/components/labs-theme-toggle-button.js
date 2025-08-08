/* eslint-disable */
import "./labs-button.js";
import { createButtonElement, setupThemeToggle, updateThemeToggleButton } from "../tokens/button-configs.js";

/**
 * <labs-theme-toggle-button>
 * A reusable theme toggle that wraps the shared setupThemeToggle logic.
 *
 * Attributes:
 * - variant: "transparent" (default), "container", or "icon"
 *
 * Behavior:
 * - Initializes to current theme
 * - Toggles theme on click
 * - Updates icon/label to reflect current theme
 * - Keeps icon color consistent with variant
 */
class LabsThemeToggleButton extends HTMLElement {
    static get observedAttributes() {
        return ["variant"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.button = null;
        this.variant = this.getAttribute("variant") || "transparent";
    }

    connectedCallback() {
        this.render();
        this.setupThemeObserver();
    }

    disconnectedCallback() {
        if (this.themeObserver) this.themeObserver.disconnect();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === "variant" && oldVal !== newVal) {
            this.variant = newVal || "transparent";
            this.render();
        }
    }

    setupThemeObserver() {
        // Keep button state synced if theme changes outside of this button
        this.themeObserver = new MutationObserver(() => {
            const isDark = document.body.classList.contains('theme-dark') || document.body.classList.contains('dark-mode');
            if (this.button) {
                updateThemeToggleButton(this.button, isDark);
                // Re-apply variant-specific icon color
                if (this.variant !== 'container') {
                    this.button.setAttribute('iconcolor', 'var(--color-on-surface)');
                }
            }
        });
        this.themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    }

    render() {
        const variant = this.getAttribute("variant") || "transparent";

        // Clear and set up base styles
        this.shadowRoot.innerHTML = `
      <style>
        :host { display: ${variant === 'container' ? 'block' : 'inline-block'}; width: ${variant === 'container' ? '100%' : 'auto'}; }
        .wrap { width: ${variant === 'container' ? '100%' : 'auto'}; }
      </style>
      <div class="wrap"></div>
    `;

        const wrap = this.shadowRoot.querySelector('.wrap');

        // Create the underlying labs-button according to variant
        let btn;
        if (variant === "container") {
            btn = createButtonElement("themeToggleContainer");
        } else if (variant === "icon") {
            btn = document.createElement("labs-button");
            btn.setAttribute("variant", "icon");
            btn.setAttribute("icon", "bedtime");
            btn.setAttribute("aria-label", "Toggle theme");
            // For non-container, keep icon color aligned with text/on-surface
            btn.setAttribute("iconcolor", "var(--color-on-surface)");
        } else {
            // default transparent
            btn = createButtonElement("themeToggle");
        }

        // Place the button
        wrap.appendChild(btn);
        this.button = btn;

        // Wire functionality + set initial state
        setupThemeToggle(btn, (theme, isDark) => {
            // Normalize icon color per variant after update
            if (variant !== 'container') {
                btn.setAttribute('iconcolor', 'var(--color-on-surface)');
            }
        });
    }
}

customElements.define("labs-theme-toggle-button", LabsThemeToggleButton);
