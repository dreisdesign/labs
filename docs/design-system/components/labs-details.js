// labs-details - small wrapper component for a styled <details>
class LabsDetails extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        if (!this.shadowRoot.innerHTML) {
            this.shadowRoot.innerHTML = `
        <style>
          :host { display:block; width:100%; }
          details { width:100%; border:1px solid var(--color-surface-variant, #e6e7e8); border-radius:12px; padding:0; box-sizing:border-box; background:var(--color-surface, #fff); }
          summary { list-style:none; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; padding:8px 12px; font-weight:600; }
          summary labs-icon { transition: transform 0.2s ease; }
          details[open] summary labs-icon { transform: rotate(90deg); }
          .content { padding:8px 12px 12px 12px; }
        </style>
        <details>
          <summary><slot name="summary"></slot></summary>
          <div class="content"><slot></slot></div>
        </details>
      `;
        }
    }
}

if (!customElements.get('labs-details')) customElements.define('labs-details', LabsDetails);
