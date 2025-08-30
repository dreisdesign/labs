/**
 * labs-alert: Toast-style notification component
 *
 * Features:
 * - Auto-dismiss after timeout
 * - Success, error, and info variants
 * - Checkmark icon for success
 * - Bottom-centered positioning like tracker app
 * - Smooth animations
 */
import "./labs-icon.js";

class LabsAlert extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.dismissTimeout = null;
    this.defaultTimeout = 2000; // 2 seconds
  }

  static get observedAttributes() {
    return ["active", "message", "variant", "timeout"];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    this.clearDismissTimeout();
  }

  show(message, variant = 'success', timeout = this.defaultTimeout) {
    this.setAttribute('message', message);
    this.setAttribute('variant', variant);
    this.setAttribute('timeout', timeout.toString());
    this.setAttribute('active', '');

    // Auto-dismiss after timeout
    this.clearDismissTimeout();
    this.dismissTimeout = setTimeout(() => {
      this.dismiss();
    }, timeout);

    // Dispatch show event
    this.dispatchEvent(new CustomEvent('labs-alert-show', {
      bubbles: true,
      detail: { message, variant, timeout }
    }));
  }

  dismiss() {
    this.removeAttribute('active');
    this.clearDismissTimeout();

    // Dispatch dismiss event
    this.dispatchEvent(new CustomEvent('labs-alert-dismiss', {
      bubbles: true,
      detail: { message: this.getAttribute('message') }
    }));
  }

  clearDismissTimeout() {
    if (this.dismissTimeout) {
      clearTimeout(this.dismissTimeout);
      this.dismissTimeout = null;
    }
  }

  render() {
    const isActive = this.hasAttribute('active');

    // Don't render anything if not active
    if (!isActive) {
      this.shadowRoot.innerHTML = `
                <style>
                    :host {
                        display: none;
                    }
                </style>
            `;
      return;
    }

    const message = this.getAttribute('message') || 'Action completed';
    const variant = this.getAttribute('variant') || 'success';

    // Get variant colors and icon
    let backgroundColor, textColor, icon;
    switch (variant) {
      case 'success':
        backgroundColor = 'var(--color-success, #00B56A)';
        textColor = 'var(--color-on-success, #ffffff)';
        icon = 'check';
        break;
      case 'error':
        backgroundColor = 'var(--color-error, #B5005A)';
        textColor = 'var(--color-on-error, #ffffff)';
        icon = 'cancel';
        break;
      case 'warning':
        backgroundColor = 'var(--color-warning, #FFC634)';
        textColor = 'var(--color-on-warning, #000000)';
        icon = 'change_circle';
        break;
      case 'info':
        backgroundColor = 'var(--color-primary, #3b82f6)';
        textColor = 'var(--color-on-primary, #ffffff)';
        icon = 'change_circle';
        break;
      default:
        backgroundColor = 'var(--color-success, #00B56A)';
        textColor = 'var(--color-on-success, #ffffff)';
        icon = 'check';
    }

    this.shadowRoot.innerHTML = `
            <style>
                :host {
                    position: fixed;
                    bottom: 120px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 1000;
                    transition: all 0.3s ease;
                    opacity: ${isActive ? '1' : '0'};
                    pointer-events: ${isActive ? 'auto' : 'none'};
                    visibility: ${isActive ? 'visible' : 'hidden'};
                }

                .alert {
                    background-color: ${backgroundColor};
                    color: ${textColor};
                    border: none;
                    border-radius: 8px;
                    padding: var(--space-md, 1rem) var(--space-lg, 1.5rem);
                    font-weight: var(--font-weight-semibold, 600);
                    font-size: var(--font-size-base, 1rem);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    display: flex;
                    align-items: center;
                    gap: var(--space-sm, 0.5rem);
                    min-width: 200px;
                    max-width: 400px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .alert-icon {
                    flex-shrink: 0;
                }

                .alert-message {
                    flex: 1;
                    min-width: 0;
                }

                /* Animation states */
                :host(:not([active])) {
                    transform: translateX(-50%) translateY(20px);
                }
            </style>

            <div class="alert">
                <labs-icon
                    class="alert-icon"
                    name="${icon}"
                    style="color: ${textColor}"
                ></labs-icon>
                <span class="alert-message">${message}</span>
            </div>
        `;
  }
}

customElements.define("labs-alert", LabsAlert);
