// Minimal labs-container component: token-driven max-width and padding
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      width: 100%;
      max-width: 400px;
      box-sizing: border-box;
      margin-left: auto;
      margin-right: auto;
      padding-left: var(--grid-container-padding-sm);
      padding-right: var(--grid-container-padding-sm);
    }
    @media (min-width: 640px) {
      :host {
        max-width: 600px;
      }
    }
    :host([padding-md]) {
      padding-left: var(--grid-container-padding-md, 20px);
      padding-right: var(--grid-container-padding-md, 20px);
    }
    :host([padding-lg]) {
      padding-left: var(--grid-container-padding-lg, 24px);
      padding-right: var(--grid-container-padding-lg, 24px);
    }
    :host([fullbleed]) {
      max-width: 100vw;
      padding-left: 0;
      padding-right: 0;
    }
    @media (max-width: var(--container-mobile-breakpoint, 640px)) {
      :host {
        max-width: 100vw;
        padding-left: var(--container-mobile-padding, 12px);
        padding-right: var(--container-mobile-padding, 12px);
      }
    }
  </style>
  <slot></slot>
`;

class LabsContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'region');
  }
}

if (!customElements.get('labs-container')) customElements.define('labs-container', LabsContainer);

export default LabsContainer;
