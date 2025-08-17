
class LabsButton extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  connectedCallback() {
    console.log('[labs-button] connectedCallback');
    // Force a re-render after initial connection to catch late style application
    setTimeout(() => this.render(), 0);
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }
        button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5em;
          font: var(--button-font, 600 20px/1.2 system-ui, sans-serif);
          background: var(--color-primary, #2563eb);
          color: var(--color-on-primary, #fff);
          border: none;
          border-radius: var(--button-radius, 6px);
          padding: var(--button-padding, 0.5em 1.25em);
          cursor: pointer;
          transition: background 0.15s, color 0.15s, box-shadow 0.15s;
          box-shadow: var(--button-shadow, 0 1px 2px rgba(0,0,0,0.04));
          outline: none;
          min-width: 2.5em;
          min-height: 2.5em;
        }
        button:focus-visible {
          box-shadow: 0 0 0 2px var(--button-focus, #93c5fd);
        }
        /* Secondary variant */
        :host([variant="secondary"]) button {
          background: var(--color-surface, #fff);
          color: var(--color-on-background, #2563eb);
          border: 1px solid var(--color-primary, #2563eb);
        }
        /* Destructive variant */
        :host([variant="destructive"]) button {
          background: var(--color-surface, #fff);
          color: var(--color-error, #b5005a);
          border: 1px solid var(--color-error, #b5005a);
        }
        /* Icon-only variant */
        :host([variant="icon"]) button {
          background: none;
          color: var(--color-primary, #2563eb);
          border: none;
          padding: var(--button-icon-padding, 0.5em);
          min-width: 2.5em;
          min-height: 2.5em;
          width: 2.5em;
          height: 2.5em;
          border-radius: 50%;
          box-shadow: none;
          aspect-ratio: 1 / 1;
        }
        :host([variant="icon"]) button:hover,
        :host([variant="icon"]) button:focus-visible {
          background: var(--button-icon-only-hover-bg, #f1f5f9);
        }
        /* Icon sizing */
        ::slotted([slot="icon-left"]),
        ::slotted([slot="icon-right"]) {
          display: inline-flex;
          align-items: center;
          font-size: var(--button-icon-size, 1.25em);
          margin: 0 !important;
          vertical-align: middle !important;
        }
        /* Default slot label alignment */
        ::slotted(:not([slot])) {
          display: inline-flex;
          align-items: center;
          vertical-align: middle;
          line-height: 1;
        }
        /* Hide label for icon-only */
        :host([variant="icon"]) ::slotted(:not([slot])) {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0,0,0,0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }
      </style>
      <button part="button">
        <slot name="icon-left"></slot>
        <slot></slot>
        <slot name="icon-right"></slot>
      </button>
    `;
  }
}

customElements.define('labs-button', LabsButton);
