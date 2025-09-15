// Labs List Item - single-row item for Today List
class LabsListItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._id = this.getAttribute('data-id') || `item-${Math.random().toString(36).slice(2, 9)}`;
    this._value = this.getAttribute('value') || this.textContent || '';
    this._timestamp = this.getAttribute('timestamp') || null; // ISO string or display string
    this._date = this.getAttribute('date') || null; // YYYY-MM-DD for grouping
    this._checked = this.hasAttribute('checked');
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['value', 'checked', 'archived', 'restored', 'timestamp', 'date'];
  }

  attributeChangedCallback(name, oldV, newV) {
    if (name === 'value') this._value = newV;
    if (name === 'timestamp') this._timestamp = newV;
    if (name === 'date') this._date = newV;
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
          :host { display: block; width: 100%; font-family: var(--font-family-base, system-ui, sans-serif); }
          .row { display:flex; align-items:center; gap:12px; padding:10px 12px; border-radius:12px; background:var(--color-surface, #fff); width:100%; box-sizing:border-box; min-width:0; }
          .text { flex:1; font-size:1rem; color:var(--color-on-surface, #111); word-break:break-word; }
          .timestamp { font-size:0.75rem; color:var(--color-on-surface-variant, #666); margin-left:6px; }
          .badge { font-size:0.625rem; padding:4px 8px; border-radius:999px; background:var(--color-surface-secondary, #f1f3f4); color:var(--color-on-surface); margin-left:8px; }
          .actions { display:flex; gap:8px; align-items:center; }
          labs-button[variant="icon"] { --icon-size:20px; }
          .secondary-variant { background: var(--color-surface-secondary, #f6f7f8); }
        </style>
        <div class="row" role="listitem" data-id="${this._id}">
          <labs-checkbox id="chk" aria-label="Toggle complete"></labs-checkbox>
          <div style="display:flex;flex-direction:column;flex:1;">
            <div class="text"></div>
            <div class="timestamp" aria-hidden="true"></div>
          </div>
          <div id="archivedBadgeContainer" aria-hidden="true"></div>
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
      if (del) del.addEventListener('click', () => {
        // Only allow deletion when the item is archived. Live items must be archived first.
        if (this.hasAttribute('archived')) this._remove();
      });
    }
    // Update checkbox state and text content only
    const chk = this.shadowRoot.getElementById('chk');
    if (chk) {
      if (this._checked) {
        chk.setAttribute('checked', '');
      } else {
        chk.removeAttribute('checked');
      }
      // If archived or date is not today, mark checkbox inactive
      const isPrevDay = (() => {
        if (!this._date) return false;
        try {
          const d = new Date(this._date + 'T00:00:00');
          const today = new Date();
          const todayStr = today.toISOString().slice(0, 10);
          return d.toISOString().slice(0, 10) !== todayStr;
        } catch (e) { return false; }
      })();
      if (this.hasAttribute('archived') || isPrevDay) {
        chk.setAttribute('inactive', '');
      } else {
        chk.removeAttribute('inactive');
      }
    }
    const textDiv = this.shadowRoot.querySelector('.text');
    if (textDiv) textDiv.textContent = this._value;
    // timestamp small area
    const ts = this.shadowRoot.querySelector('.timestamp');
    if (ts) ts.textContent = this._timestamp ? this._formatTimestamp(this._timestamp) : '';
    // reflect restored/archived state visually and adjust archive icon and aria label
    const archiveIcon = this.shadowRoot.getElementById('archiveIcon');
    const archiveBtn = this.shadowRoot.getElementById('archiveBtn');
    const row = this.shadowRoot.querySelector('.row');
    if (this.hasAttribute('restored')) {
      // archived-original that has been 'restored' should show history icon and be inactive
      if (archiveIcon) {
        archiveIcon.setAttribute('name', 'history');
        archiveIcon.setAttribute('color', 'var(--color-on-surface)');
        archiveIcon.style.opacity = '0.45';
      }
      if (archiveBtn) {
        archiveBtn.setAttribute('aria-label', 'Already restored');
        archiveBtn.setAttribute('disabled', '');
        archiveBtn.style.pointerEvents = 'none';
      }
      if (row) {
        // Keep the same theme as other items; only reduce opacity for archived/restored
        row.style.opacity = 'var(--labs-archived-opacity, 0.7)';
      }
    } else if (this.hasAttribute('archived')) {
      // archived state shows the history icon visually to indicate archived
      if (archiveIcon) {
        archiveIcon.setAttribute('name', 'history');
        archiveIcon.setAttribute('color', 'var(--color-on-surface)');
        archiveIcon.style.opacity = '';
      }
      if (archiveBtn) {
        // Replace icon-only button with a labelled restore button for clarity and make it small
        archiveBtn.setAttribute('aria-label', 'Restore');
        archiveBtn.style.pointerEvents = '';
        archiveBtn.removeAttribute('disabled');
        try {
          archiveBtn.innerHTML = `<labs-icon slot="icon-left" name="history" width="20" height="20"></labs-icon> Restore`;
          archiveBtn.setAttribute('variant', 'secondary');
          archiveBtn.setAttribute('size', 'small');
        } catch (e) { }
      }
      // archived items are full opacity when inside the collapsed section
      if (row) {
        row.style.opacity = '';
      }
    } else {
      if (archiveIcon) {
        archiveIcon.setAttribute('name', 'archive');
        archiveIcon.setAttribute('color', 'var(--color-on-surface)');
        archiveIcon.style.opacity = '';
      }
      if (archiveBtn) {
        archiveBtn.setAttribute('aria-label', 'Archive');
        archiveBtn.removeAttribute('disabled');
        archiveBtn.style.pointerEvents = '';
        // Replace icon-only button with a standard button just like restore
        try {
          archiveBtn.innerHTML = `<labs-icon id="archiveIcon" slot="icon-left" name="archive" width="20" height="20"></labs-icon> Archive`;
          archiveBtn.setAttribute('variant', 'secondary');
          archiveBtn.setAttribute('size', 'small');
        } catch (e) { }
      }
      if (row) {
        row.style.opacity = '';
        row.classList.remove('secondary-variant');
      }
    }
    // Render archived badge in the reserved container
    const badgeContainer = this.shadowRoot.getElementById('archivedBadgeContainer');
    if (badgeContainer) {
      badgeContainer.innerHTML = '';
    }
    // Show or hide the delete button depending on archived state
    const deleteBtn = this.shadowRoot.getElementById('deleteBtn');
    if (deleteBtn) {
      if (this.hasAttribute('archived')) {
        deleteBtn.style.display = '';
        deleteBtn.removeAttribute('aria-hidden');
        deleteBtn.removeAttribute('disabled');
      } else {
        deleteBtn.style.display = 'none';
        deleteBtn.setAttribute('aria-hidden', 'true');
        deleteBtn.setAttribute('disabled', '');
      }
    }
  }

  _formatTimestamp(v) {
    try {
      const d = new Date(v);
      const h = d.getHours().toString().padStart(2, '0');
      const m = d.getMinutes().toString().padStart(2, '0');
      return `${h}:${m}`;
    } catch (e) { return v; }
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
