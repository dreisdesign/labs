/**
 * labs-input: Reusable input component with design system integration
 * 
 * Features:
 * - Consistent styling with design tokens
 * - Focus states and accessibility
 * - Event forwarding for parent components
 * - Placeholder and value management
 * - Keyboard interaction support
 */
class LabsInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ["placeholder", "value", "maxlength", "type", "disabled"];
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    setupEventListeners() {
        const input = this.shadowRoot.querySelector('input');

        // Forward input events to parent
        input?.addEventListener('input', (e) => {
            this.dispatchEvent(new CustomEvent('labs-input', {
                detail: { value: e.target.value },
                bubbles: true
            }));
        });

        // Forward change events
        input?.addEventListener('change', (e) => {
            this.dispatchEvent(new CustomEvent('labs-change', {
                detail: { value: e.target.value },
                bubbles: true
            }));
        });

        // Forward keydown events (for Enter handling)
        input?.addEventListener('keydown', (e) => {
            this.dispatchEvent(new CustomEvent('labs-keydown', {
                detail: { key: e.key, value: e.target.value },
                bubbles: true
            }));
        });

        // Forward focus/blur events
        input?.addEventListener('focus', (e) => {
            this.dispatchEvent(new CustomEvent('labs-focus', {
                detail: { value: e.target.value },
                bubbles: true
            }));
        });

        input?.addEventListener('blur', (e) => {
            this.dispatchEvent(new CustomEvent('labs-blur', {
                detail: { value: e.target.value },
                bubbles: true
            }));
        });
    }

    // Public API methods
    focus() {
        this.shadowRoot.querySelector('input')?.focus();
    }

    blur() {
        this.shadowRoot.querySelector('input')?.blur();
    }

    getValue() {
        return this.shadowRoot.querySelector('input')?.value || '';
    }

    setValue(value) {
        const input = this.shadowRoot.querySelector('input');
        if (input) {
            input.value = value;
        }
    }

    clear() {
        this.setValue('');
    }

    render() {
        const placeholder = this.getAttribute("placeholder") || "";
        const value = this.getAttribute("value") || "";
        const maxlength = this.getAttribute("maxlength") || "100";
        const type = this.getAttribute("type") || "text";
        const disabled = this.hasAttribute("disabled");

        this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .input-container {
          position: relative;
          width: 100%;
        }

        .input-field {
          width: 100%;
          padding: var(--space-md, 12px);
          border: 2px solid var(--color-outline-variant, #e0e0e0);
          border-radius: var(--border-radius-md, 8px);
          font-size: var(--font-size-body, 1rem);
          font-family: var(--font-family-base, system-ui);
          background: var(--color-surface, #ffffff);
          color: var(--color-on-surface, #1f1f1f);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-sizing: border-box;
        }

        .input-field:focus {
          outline: none;
          border-color: var(--color-primary, #007bff);
          box-shadow: 0 0 0 3px var(--color-primary-25, rgba(0, 123, 255, 0.25));
        }

        .input-field:disabled {
          background: var(--color-surface-variant, #f5f5f5);
          color: var(--color-on-surface-variant, #6b6b6b);
          cursor: not-allowed;
        }

        .input-field::placeholder {
          color: var(--color-on-surface-variant, #6b6b6b);
        }

        /* Dark theme adjustments */
        :host-context(.theme-dark) .input-field {
          background: var(--color-surface-container, #2a2a2a);
          border-color: var(--color-outline, #525252);
          color: var(--color-on-surface, #e0e0e0);
        }

        :host-context(.theme-dark) .input-field:focus {
          border-color: var(--color-primary, #66b3ff);
          box-shadow: 0 0 0 3px var(--color-primary-25, rgba(102, 179, 255, 0.25));
        }

        :host-context(.theme-dark) .input-field::placeholder {
          color: var(--color-on-surface-variant, #a0a0a0);
        }
      </style>

      <div class="input-container">
        <input 
          class="input-field"
          type="${type}"
          placeholder="${placeholder}"
          value="${value}"
          maxlength="${maxlength}"
          ${disabled ? 'disabled' : ''}
        />
      </div>
    `;
    }
}

customElements.define("labs-input", LabsInput);
