import './labs-warning-card.js';

class LabsWarningOverlay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        const card = document.createElement('labs-warning-card');
        card.innerHTML = `
      <slot name="icon" slot="icon"></slot>
      <slot name="header" slot="header"></slot>
      <slot></slot>
      <slot name="actions" slot="actions"></slot>
    `;
        overlay.appendChild(card);
        const style = document.createElement('style');
        style.textContent = `
:host {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.18);
}
.overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
labs-warning-card {
  min-width: 320px;
  max-width: 90vw;
}
`;
        this.shadowRoot.append(style, overlay);
    }
    connectedCallback() {
        this.addEventListener('click', (e) => {
            if (e.target === this) {
                this.dispatchEvent(new CustomEvent('close', { bubbles: true }));
            }
        });
    }
}
if (!customElements.get('labs-warning-overlay')) customElements.define('labs-warning-overlay', LabsWarningOverlay);
export default LabsWarningOverlay;
