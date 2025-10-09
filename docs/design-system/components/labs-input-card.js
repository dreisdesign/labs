// Labs Input Card - a small card with a title, input, and Save/Cancel actions
class LabsInputCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          max-width: 420px;
          margin: 0 auto;
          background: var(--color-surface, #fff);
          border-radius: 18px;
          box-shadow: 0 6px 40px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.04);
          padding: 20px 18px;
          font-family: var(--font-family-base, system-ui, sans-serif);
          position: relative;
        }
        .header-row {
          display:flex;
          align-items:center;
          justify-content:space-between;
        }
        .close-btn {
          width:40px; height:40px; min-width:40px; min-height:40px;
          border-radius:50%; background:inherit; box-shadow:none; padding:0; display:flex; align-items:center; justify-content:center;
        }
        .header {
          margin:0;
          font-size:var(--font-size-card-header, 1.125rem);
          font-weight:var(--font-weight-card-header, 600);
          line-height:var(--line-height-card-header, 1.2);
          color:var(--color-on-background,inherit);
        }
        .description { margin-top:8px; color:var(--color-on-surface-muted, #666); font-size:0.95rem; }
        .input-row { margin-top:14px; }
        textarea { width:100%; box-sizing:border-box; padding:12px 14px; border-radius:10px; border:1px solid var(--color-outline, #e6e6ea); font-size:1rem; font-family: inherit; resize: vertical; min-height: 60px; }
        .actions { display:flex; gap:10px; margin-top:16px; justify-content:flex-end; }
        .btn-transparent labs-button {
          background: transparent;
          box-shadow: none;
        }
        labs-button { min-width: 92px; }
      </style>
      <div class="header-row">
        <div class="header">New item</div>
        <labs-button id="icon-close-btn" class="close-btn" variant="icon" aria-label="Close">
          <labs-icon name="close" slot="icon-left" width="24" height="24"></labs-icon>
        </labs-button>
      </div>
  <!-- description removed for Today-List -->
      <div class="input-row">
        <textarea id="cardInput" rows="2" placeholder="What do you want to do?" autocomplete="off"></textarea>
      </div>
      <div class="actions">
        <div class="btn-transparent">
          <labs-button id="cancelBtn" variant="secondary">Cancel</labs-button>
        </div>
        <labs-button id="saveBtn" variant="primary">Save</labs-button>
      </div>
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
      // Ctrl/Cmd + Enter key to save (since Enter should create new lines in textarea)
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          doSave();
        }
      });

    }
  }
}
customElements.define('labs-input-card', LabsInputCard);
