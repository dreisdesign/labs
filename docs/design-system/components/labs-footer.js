/**
 * Labs Footer Component
 * A flexible footer component with slots for left, center, and right content.
 * Based on styling patterns from Tracker app but built for modularity.
 */

class LabsFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._render();
  }

  _render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 16px;
          background: var(--color-footer-bg, var(--color-surface, #fff));
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 0.75px solid rgba(255, 255, 255, 0.5);
          border-radius: 100px 100px 0 0;
          color: var(--color-on-surface, #1b1c1f);
          font-family: var(--font-family-base, system-ui, sans-serif);
          font-size: var(--font-size-footer, 0.9rem);
          line-height: var(--line-height-footer, 1.4);
          min-height: 56px;
          box-sizing: border-box;
          position: relative;
          width: 95%;
          margin: 0 auto;
          transition: background-color 0.3s ease, box-shadow 0.3s ease, opacity 0.3s;
        }

        .footer-section {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-left {
          flex: 1;
          justify-content: flex-start;
        }

        .footer-center {
          flex: 0 0 auto;
          justify-content: center;
        }

        .footer-right {
          flex: 1;
          justify-content: flex-end;
        }

        /* Support for sticky positioning */
        :host([sticky]) .footer {
          position: sticky;
          bottom: 0;
          z-index: 10;
        }

        /* Dark mode: adjust border for footer */
        :host-context(.dark-mode) .footer,
        :host-context([data-theme="dark"]) .footer {
          border-top: 0.25px solid rgba(179, 168, 247, 0.25);
        }

        /* Elevated variant with shadow */
        :host([elevated]) .footer {
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
        }

        :host-context(.dark-mode) :host([elevated]) .footer,
        :host-context([data-theme="dark"]) :host([elevated]) .footer {
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
          border-top: 0.75px solid rgba(0, 0, 0, 0.15);
        }

        /* Support for fixed positioning */
        :host([fixed]) .footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10;
        }

        /* Full-width variant like Tracker app */
        :host([full-width]) {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 100;
        }

        :host([full-width]) .footer {
          width: 95%;
          margin: 0 auto;
          border-radius: 100px 100px 0 0;
        }

        /* Elevated variant */
        :host([elevated]) .footer {
          box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
          border-top: none;
        }

        /* Compact variant */
        :host([compact]) .footer {
          min-height: 48px;
          padding: 12px 16px;
        }

        /* Safe area support for mobile devices */
        :host([safe-area]) .footer {
          padding-bottom: calc(16px + env(safe-area-inset-bottom));
          padding-left: calc(20px + env(safe-area-inset-left));
          padding-right: calc(20px + env(safe-area-inset-right));
        }

        /* Hide empty slots */
        .footer-section:not(:has(*)) {
          display: none;
        }

        /* Responsive behavior */
        @media (max-width: 480px) {
          .footer {
            padding: 12px 16px;
          }

          :host([safe-area]) .footer {
            padding-left: calc(16px + env(safe-area-inset-left));
            padding-right: calc(16px + env(safe-area-inset-right));
          }
        }
      </style>

      <footer class="footer" part="footer">
        <div class="footer-section footer-left" part="left">
          <slot name="left"></slot>
        </div>
        <div class="footer-section footer-center" part="center">
          <slot name="center"></slot>
        </div>
        <div class="footer-section footer-right" part="right">
          <slot name="right"></slot>
        </div>
      </footer>
    `;
  }

  // Observed attributes for reactive behavior
  static get observedAttributes() {
    return ['sticky', 'fixed', 'elevated', 'compact', 'safe-area'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // The styling is handled via CSS attribute selectors,
    // so no additional JavaScript is needed for these attributes
  }
}

// Register the custom element
if (!customElements.get('labs-footer')) {
  customElements.define('labs-footer', LabsFooter);
}

export default LabsFooter;
