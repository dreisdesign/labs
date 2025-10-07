class LabsTemplateHeaderWrapped extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
      <style>
        h1 {
          font-size: var(--font-size-h1, 3rem);
          font-weight: var(--font-weight-heading, 800);
          margin: 0;
          line-height: 1.2;
          text-align: center;
        }
      </style>
      <header>
        <h1><slot name="title">Footer Test Page</slot></h1>
      </header>
    `;
    }
}
customElements.define('labs-template-header-wrapped', LabsTemplateHeaderWrapped);
