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

  static get observedAttributes() {
    return ['value', 'checked'];
  }

  attributeChangedCallback(name, oldV, newV) {
    if (name === 'value') this._value = newV;
    if (name === 'checked') this._checked = this.hasAttribute('checked');
    this.render();
  }

  render() {
    // Only create the DOM structure once
    if (!this.shadowRoot.innerHTML) {
      this.shadowRoot.innerHTML = `
        <style>
          :host { display: block; font-family: var(--font-family-base, system-ui, sans-serif); }
          .row { display:flex; align-items:center; gap:12px; padding:10px 12px; border-radius:12px; background:var(--color-surface, #fff); }
          .text { flex:1; font-size:1rem; color:var(--color-on-surface, #111); word-break:break-word; }
          .actions { display:flex; gap:8px; align-items:center; }
          labs-button[variant="icon"] { --icon-size:20px; }
        </style>
        <div class="row" role="listitem" data-id="${this._id}">
          <labs-checkbox id="chk" aria-label="Toggle complete"></labs-checkbox>
          <div class="text"></div>
          <div class="actions">
            <labs-button id="archiveBtn" variant="icon" aria-label="Archive">
              <labs-icon slot="icon-left" name="published_with_changes" width="20" height="20"></labs-icon>
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
      if (archive) archive.addEventListener('click', () => this._archive());
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
    this.dispatchEvent(new CustomEvent('archive', { detail: { value: this._value, id: this._id }, bubbles: true, composed: true }));
  }

  _remove() {
    this.dispatchEvent(new CustomEvent('remove', { detail: { value: this._value, id: this._id }, bubbles: true, composed: true }));
  }

  get value() { return this._value; }
  set value(v) { this._value = v; this.setAttribute('value', v); }
}

if (!customElements.get('labs-list-item')) customElements.define('labs-list-item', LabsListItem);
