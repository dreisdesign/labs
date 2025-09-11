// Labs List Item - single-row item for Today List
class LabsListItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._id = this.getAttribute('data-id') || `item-${Math.random().toString(36).slice(2, 9)}`;
    this._value = this.getAttribute('value') || this.textContent || '';
    this._checked = this.hasAttribute('checked');
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['value', 'checked', 'archived', 'restored'];
  }

  attributeChangedCallback(name, oldV, newV) {
    if (name === 'value') this._value = newV;
    if (name === 'checked') this._checked = this.hasAttribute('checked');
    // Re-render when archival state changes so the icon and button state update
    if (name === 'archived' || name === 'restored') {
      // no internal field to update, but we need to refresh the DOM
    }
    this.render();
  }

  render() {
    // Only create the DOM structure once
    if (!this.shadowRoot.innerHTML) {
      this.shadowRoot.innerHTML = `
        <style>
          :host { display: block; font-family: var(--font-family-base, system-ui, sans-serif); }
          .row { display:flex; align-items:center; gap:12px; padding:10px 12px; border-radius:12px; background:var(--color-surface, #fff); width:100%; box-sizing:border-box; }
          .text { flex:1; font-size:1rem; color:var(--color-on-surface, #111); word-break:break-word; }
          .actions { display:flex; gap:8px; align-items:center; }
          labs-button[variant="icon"] { --icon-size:20px; }
        </style>
        <div class="row" role="listitem" data-id="${this._id}">
          <labs-checkbox id="chk" aria-label="Toggle complete"></labs-checkbox>
          <div class="text"></div>
          <div class="actions">
            <labs-button id="archiveBtn" variant="icon" aria-label="Archive">
              <labs-icon id="archiveIcon" slot="icon-left" name="archive" width="20" height="20"></labs-icon>
            </labs-button>
            <labs-button id="deleteBtn" variant="icon" aria-label="Delete">
              <labs-icon slot="icon-left" name="delete_forever" width="20" height="20"></labs-icon>
            </labs-button>
          </div>
        </div>
      `;
      // Wire events once
      const chk = this.shadowRoot.getElementById('chk');
      if (chk) {
        chk.addEventListener('change', (e) => {
          this._checked = !!e.detail && !!e.detail.checked;
          if (this._checked) this.setAttribute('checked', ''); else this.removeAttribute('checked');
          this.dispatchEvent(new CustomEvent('toggle', { detail: { checked: this._checked, id: this._id }, bubbles: true, composed: true }));
        });
      }
      const archive = this.shadowRoot.getElementById('archiveBtn');
      if (archive) archive.addEventListener('click', () => {
        if (this.hasAttribute('archived') && !this.hasAttribute('restored')) {
          // Request that the app create a restored copy while leaving this archived item in place
          // Mark this archived instance as 'restored' so it shows the inactive/history icon
          this.setAttribute('restored', '');
          this.dispatchEvent(new CustomEvent('request-restore-copy', { detail: { value: this._value, id: this._id }, bubbles: true, composed: true }));
        } else if (!this.hasAttribute('archived')) {
          this._archive();
        }
      });
      const del = this.shadowRoot.getElementById('deleteBtn');
      if (del) del.addEventListener('click', () => this._remove());
    }
    // Update checkbox state and text content only
    const chk = this.shadowRoot.getElementById('chk');
    if (chk) {
      if (this._checked) {
        chk.setAttribute('checked', '');
      } else {
        chk.removeAttribute('checked');
      }
    }
    const textDiv = this.shadowRoot.querySelector('.text');
    if (textDiv) textDiv.textContent = this._value;
    // reflect restored/archived state visually and adjust archive icon and aria label
    const archiveIcon = this.shadowRoot.getElementById('archiveIcon');
    const archiveBtn = this.shadowRoot.getElementById('archiveBtn');
    if (this.hasAttribute('restored')) {
      // archived-original that has been 'restored' should show history icon and be inactive
      if (archiveIcon) {
        archiveIcon.setAttribute('name', 'history');
        archiveIcon.setAttribute('color', 'var(--color-on-surface-variant)');
        archiveIcon.style.opacity = '0.45';
      }
      if (archiveBtn) {
        archiveBtn.setAttribute('aria-label', 'Already restored');
        archiveBtn.setAttribute('disabled', '');
        archiveBtn.style.pointerEvents = 'none';
      }
    } else if (this.hasAttribute('archived')) {
      // archived state shows the history icon visually to indicate archived
      if (archiveIcon) {
        archiveIcon.setAttribute('name', 'history');
        archiveIcon.setAttribute('color', 'var(--color-on-surface)');
        archiveIcon.style.opacity = '1';
      }
      if (archiveBtn) {
        archiveBtn.setAttribute('aria-label', 'Restore');
        archiveBtn.style.pointerEvents = '';
        archiveBtn.removeAttribute('disabled');
      }
    } else {
      if (archiveIcon) {
        archiveIcon.setAttribute('name', 'archive');
        archiveIcon.setAttribute('color', 'var(--color-on-surface)');
        archiveIcon.style.opacity = '1';
      }
      if (archiveBtn) {
        archiveBtn.setAttribute('aria-label', 'Archive');
        archiveBtn.removeAttribute('disabled');
        archiveBtn.style.pointerEvents = '';
      }
    }
  }

  _toggle() {
    this._checked = !this._checked;
    if (this._checked) this.setAttribute('checked', ''); else this.removeAttribute('checked');
    // update aria state on the interactive node if present
    const chk = this.shadowRoot && this.shadowRoot.getElementById && this.shadowRoot.getElementById('chk');
    if (chk) chk.setAttribute('aria-checked', String(this._checked));
    this.dispatchEvent(new CustomEvent('toggle', { detail: { checked: this._checked, id: this._id }, bubbles: true, composed: true }));
    this.render();
  }

  _archive() {
    // mark as archived; apps will move DOM and persist
    this.setAttribute('archived', '');
    // emit archive intent
    this.dispatchEvent(new CustomEvent('archive', { detail: { value: this._value, id: this._id }, bubbles: true, composed: true }));
  }

  _restore() {
    // If the item was previously restored (from archive) don't allow re-restore
    if (this.hasAttribute('restored')) return;
    this.removeAttribute('archived');
    this.setAttribute('restored', '');
    this.dispatchEvent(new CustomEvent('restore', { detail: { value: this._value, id: this._id }, bubbles: true, composed: true }));
  }

  _remove() {
    this.dispatchEvent(new CustomEvent('remove', { detail: { value: this._value, id: this._id }, bubbles: true, composed: true }));
  }

  get value() { return this._value; }
  set value(v) { this._value = v; this.setAttribute('value', v); }
}

if (!customElements.get('labs-list-item')) customElements.define('labs-list-item', LabsListItem);
