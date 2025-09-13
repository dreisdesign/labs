// labs-flavor-button - simple flavor button for Storybook and demos
class LabsFlavorButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    static get observedAttributes() { return ['label']; }

    attributeChangedCallback() { this.render(); }

    render() {
        const label = this.getAttribute('label') || 'Flavor';
        this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        labs-button { width: 100%; box-sizing: border-box; }
      </style>
      <labs-button variant="secondary" size="large" style="gap:10px; justify-content:flex-start;">
        <labs-icon name="colors" slot="icon-left" width="20" height="20"></labs-icon>
        ${label}
      </labs-button>
    `;
        const btn = this.shadowRoot.querySelector('labs-button');
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.dispatchEvent(new CustomEvent('click', { bubbles: true, composed: true }));
            });
        }
    }
}
customElements.define('labs-flavor-button', LabsFlavorButton);

export default LabsFlavorButton;
