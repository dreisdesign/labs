// Minimal labs-container component: token-driven max-width and padding
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host { display: block; box-sizing: border-box; max-width: var(--app-container-max); margin-left: auto; margin-right: auto; padding-left: var(--grid-container-padding-sm); padding-right: var(--grid-container-padding-sm); }
    :host([padding-md]) { padding-left: var(--grid-container-padding-md); padding-right: var(--grid-container-padding-md); }
    :host([padding-lg]) { padding-left: var(--grid-container-padding-lg); padding-right: var(--grid-container-padding-lg); }
    :host([fullbleed]) { max-width: 100%; padding-left: 0; padding-right: 0; }
    @media (max-width: var(--container-mobile-breakpoint, 640px)) {
      :host { padding-left: var(--container-mobile-padding); padding-right: var(--container-mobile-padding); }
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
