// Labs Dropdown - simple overflow menu (icon button + card-style menu)
class LabsDropdown extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._open = false;
        this.render();
    }

    static get observedAttributes() { return ['archived', 'restored']; }

    attributeChangedCallback() { this.render(); }

    connectedCallback() {
        document.addEventListener('click', this._outsideClick = (e) => {
            if (!this._open) return;
            if (!this.contains(e.target) && !this.shadowRoot.contains(e.target)) this._close();
        });
    }

    disconnectedCallback() {
        document.removeEventListener('click', this._outsideClick);
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        :host { display: inline-block; position: relative; }
        .trigger { display:inline-flex; }
        labs-button[variant="icon"] { --icon-size:20px; }
                .menu {
                    position: absolute;
                    right: -12px;
                    top: calc(100%);
                    background: var(--color-surface, #fff);
                    border-radius: var(--labs-card-radius, 12px);
                    box-shadow: var(--labs-card-shadow, 0 6px 26px rgba(0,0,0,0.12));
                    padding: 8px;
                    min-width: fit-content;
                    width: 100%;
                    z-index: 40;
                    display: none;
                    box-sizing: border-box;
                }
        .menu.open { display: block; }
                                    .menu labs-button {
                                        width: 100%;
                                        display: block;
                                        text-align: left;
                                        gap: 10px;
                                        margin: 0;
                                        box-sizing: border-box;
                                    }
                                            .menu labs-button button {
                                                display: flex !important;
                                                width: 100% !important;
                                                align-items: center;
                                                justify-content: flex-end;
                                                text-align: left;
                                            }
                    .menu labs-button + labs-button { margin-top: 6px; }
                    .menu labs-button[variant="destructive"] labs-icon { color: var(--color-on-error, #fff); }
      </style>
            <div class="trigger">
                <labs-button id="toggleBtn" variant="icon" aria-label="More">
                    <labs-icon slot="icon-left" name="more_vert" width="20" height="20" color="currentColor"></labs-icon>
                </labs-button>
            </div>
      <div id="menu" class="menu" role="menu" aria-hidden="true">
    <labs-button id="archiveBtn" variant="secondary" size="small" fullwidth>
          <labs-icon slot="icon-left" name="archive" width="20" height="20"></labs-icon>
          Archive
        </labs-button>
    <labs-button id="deleteBtn" variant="destructive" size="small" fullwidth>
          <labs-icon slot="icon-left" name="delete_forever" width="20" height="20"></labs-icon>
          Delete
        </labs-button>
      </div>
    `;

        const toggle = this.shadowRoot.getElementById('toggleBtn');
        if (toggle) toggle.addEventListener('click', (e) => { e.stopPropagation(); this._toggle(); });

        const archiveBtn = this.shadowRoot.getElementById('archiveBtn');
        if (archiveBtn) archiveBtn.addEventListener('click', (e) => {
            e.preventDefault(); e.stopPropagation();
            if (this.hasAttribute('archived') && !this.hasAttribute('restored')) {
                this.dispatchEvent(new CustomEvent('restore', { bubbles: true, composed: true }));
            } else if (!this.hasAttribute('archived')) {
                this.dispatchEvent(new CustomEvent('archive', { bubbles: true, composed: true }));
            }
            this._close();
        });

        const deleteBtn = this.shadowRoot.getElementById('deleteBtn');
        if (deleteBtn) deleteBtn.addEventListener('click', (e) => {
            e.preventDefault(); e.stopPropagation();
            this.dispatchEvent(new CustomEvent('remove', { bubbles: true, composed: true }));
            this._close();
        });

        // reflect attributes into UI
        const menu = this.shadowRoot.getElementById('menu');
        if (this.hasAttribute('archived')) {
            // show delete button and change archive label to Restore
            if (archiveBtn) archiveBtn.innerHTML = `<labs-icon slot="icon-left" name="history" width="20" height="20"></labs-icon> Restore`;
            if (deleteBtn) deleteBtn.style.display = '';
        } else {
            if (archiveBtn) archiveBtn.innerHTML = `<labs-icon slot="icon-left" name="archive" width="20" height="20"></labs-icon> Archive`;
            if (deleteBtn) deleteBtn.style.display = 'none';
        }
        // Removed dynamic width calculation; menu and buttons use 100% width via CSS
        if (this._open) {
            if (menu) { menu.classList.add('open'); menu.setAttribute('aria-hidden', 'false'); }
        } else {
            if (menu) { menu.classList.remove('open'); menu.setAttribute('aria-hidden', 'true'); }
        }
    }

    _toggle() { this._open = !this._open; this.render(); }
    _close() { this._open = false; this.render(); }
}

if (!customElements.get('labs-dropdown')) customElements.define('labs-dropdown', LabsDropdown);
