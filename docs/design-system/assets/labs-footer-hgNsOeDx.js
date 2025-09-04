class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._render()}_render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: var(--color-surface, #ffffff);
          border-top: 1px solid var(--color-outline, #e0e0e0);
          color: var(--color-on-surface, #1b1c1f);
          font-family: var(--font-family, system-ui, sans-serif);
          min-height: 56px;
          box-sizing: border-box;
          position: relative;
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

        /* Support for fixed positioning */
        :host([fixed]) .footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10;
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
    `}static get observedAttributes(){return["sticky","fixed","elevated","compact","safe-area"]}attributeChangedCallback(o,a,i){}}customElements.get("labs-footer")||customElements.define("labs-footer",e);
