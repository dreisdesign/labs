
import './labs-card.js';
import './labs-button.js';
import './labs-icon.js';

class LabsInputCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <labs-card>
        <span slot="header">New item</span>
        <labs-button id="icon-close-btn" slot="close" variant="icon" aria-label="Close">
          <labs-icon name="close" slot="icon-left" width="24" height="24"></labs-icon>
        </labs-button>
        <div slot="input">
          <textarea id="cardInput" rows="2" placeholder="What do you want to do?" autocomplete="off"></textarea>
        </div>
        <div slot="actions" style="display:flex;gap:10px;justify-content:flex-end;">
          <div class="btn-transparent">
            <labs-button id="cancelBtn" variant="secondary">Cancel</labs-button>
          </div>
          <labs-button id="saveBtn" variant="primary">Save</labs-button>
        </div>
      </labs-card>
      <style>
        :host { display: block; max-width: 420px; margin: 0 auto; }
        textarea { width:100%; box-sizing:border-box; padding:12px 14px; border-radius:10px; border:1px solid var(--color-outline, #e6e6ea); font-size:1rem; font-family: inherit; resize: vertical; min-height: 60px; }
        .btn-transparent labs-button { background: transparent; box-shadow: none; }
        labs-button { min-width: 92px; }
      </style>
    `;

    // Close handlers
    const iconClose = this.shadowRoot.getElementById('icon-close-btn');
    if (iconClose) iconClose.addEventListener('click', () => this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true })));
    const cancel = this.shadowRoot.getElementById('cancelBtn');
    if (cancel) cancel.addEventListener('click', () => this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true })));

    // Save handler
    const save = this.shadowRoot.getElementById('saveBtn');
    const input = this.shadowRoot.getElementById('cardInput');
    if (save && input) {
      const doSave = () => {
        const value = input.value.trim();
        this.dispatchEvent(new CustomEvent('save', { detail: { value }, bubbles: true, composed: true }));
      };
      save.addEventListener('click', () => doSave());
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          doSave();
        }
      });
    }
  }
}
customElements.define('labs-input-card', LabsInputCard);
