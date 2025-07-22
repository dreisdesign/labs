// Labs Design System - Button Web Component
import '../styles/main.css';

class LabsButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
      <style>
        @import url('../styles/main.css');
        button {
          font-family: var(--font-family-base);
          font-size: var(--font-size-base);
          font-weight: var(--font-weight-bold);
          border-radius: var(--space-lg);
          background: var(--color-primary);
          color: var(--color-on-primary);
          cursor: pointer;
          padding: var(--space-sm) var(--space-lg);
          border: none;
          transition: background 0.2s, transform 0.1s;
        }
        button:active {
          background: var(--color-secondary);
          transform: scale(0.97);
        }
        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      </style>
      <button part="button"><slot>Button</slot></button>
    `;
        this._btn = shadow.querySelector('button');
    }
    connectedCallback() {
        if (this.hasAttribute('disabled')) {
            this._btn.disabled = true;
        }
    }
    static get observedAttributes() {
        return ['disabled'];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'disabled') {
            this._btn.disabled = this.hasAttribute('disabled');
        }
    }
}
customElements.define('labs-button', LabsButton);
