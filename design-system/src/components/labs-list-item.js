// Labs List Item - single-row item for Today List
import { formatTime12, formatHuman } from '../utils/date-format.js';
class LabsListItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._id = this.getAttribute('data-id') || `item-${Math.random().toString(36).slice(2, 9)}`;
    this._value = this.getAttribute('value') || this.textContent || '';
    this._timestamp = this.getAttribute('timestamp') || null;
    this._date = this.getAttribute('date') || null;
    this._checked = this.hasAttribute('checked');
    this._slotChangeHandler = this._onSlotChange.bind(this);
    this.render();
  }

  connectedCallback() {
    this.render();
    // Listen for change events from slotted controls (like labs-checkbox)
    this.addEventListener('change', (e) => {
      // If a labs-checkbox bubbled up a change, toggle internal state and re-emit
      if (e.target && e.target.matches && e.target.matches('labs-checkbox')) {
        const checked = e.detail && !!e.detail.checked;
        this._checked = checked;
        if (this._checked) this.setAttribute('checked', ''); else this.removeAttribute('checked');
        this.dispatchEvent(new CustomEvent('toggle', { detail: { checked: this._checked, id: this._id }, bubbles: true, composed: true }));
        this.render();
      }
    });
  }

  static get observedAttributes() {
    return ['value', 'checked', 'archived', 'restored', 'timestamp', 'date', 'variant'];
  }

  attributeChangedCallback(name, oldV, newV) {
    if (name === 'value') this._value = newV;
    if (name === 'timestamp') this._timestamp = newV;
    if (name === 'date') this._date = newV;
    if (name === 'checked') this._checked = this.hasAttribute('checked');
    if (name === 'variant') this.shadowRoot.innerHTML = '';
    this.render();
  }

  _onSlotChange() {
    // Re-wire event listeners or re-render if light DOM content changed
    this.render();
  }

  render() {
    // Build a slot-driven template with sensible, backwards-compatible fallbacks.
    if (!this.shadowRoot.innerHTML) {
      this.shadowRoot.innerHTML = `
        <style>
          :host { display: block; width: 100%; font-family: var(--font-family-base, system-ui, sans-serif); }
          .row { display:flex; align-items:center; gap:12px; padding:10px 12px; border-radius:12px; background:var(--color-surface, #fff); width:100%; box-sizing:border-box; min-width:0; }
          .text { flex:1; font-size:1rem; color:var(--color-on-surface, #111); word-break:break-word; min-width:0; }
          .timestamp { font-size:0.75rem; color:var(--color-on-surface-variant, #666); margin-left:6px; }
          .badge { font-size:0.625rem; padding:4px 8px; border-radius:999px; background:var(--color-surface-secondary, #f1f3f4); color:var(--color-on-surface); margin-left:8px; }
          .actions { display:flex; gap:8px; align-items:center; flex: 0 0 auto; }
          labs-button[variant="icon"] { --icon-size:20px; }
          .secondary-variant { background: var(--color-surface-secondary, #f6f7f8); }
          :host([variant="text-only"]) .row { padding: 8px 12px; }
          :host([variant="text-only"]) .text { font-weight: var(--font-weight-semibold, 600); }
          :host([variant="text-only"]) .timestamp { margin-left: 0; margin-top: 2px; font-size: 0.75rem; }
          /* Style for a slotted primary label (timestamp) when present */
          .labelHost { font-size: 0.95rem; color: var(--color-on-surface, #111); margin-right: 12px; white-space: nowrap; flex: 0 0 auto; }
          ::slotted(.item-label) {
            font-size: 0.95rem;
            color: var(--color-on-surface-variant, #666);
            margin-right: 12px;
            white-space: nowrap;
            flex: 0 0 auto;
          }
        </style>
  <div class="row" role="listitem" data-id="${this._id}">
          <!-- Left control slot: checkbox or other control. Fallback: labs-checkbox -->
          <slot name="control">
            <labs-checkbox id="chk" aria-label="Toggle complete"></labs-checkbox>
          </slot>

          <!-- Label slot: optional primary label (e.g. timestamp) -->
          <slot name="label"></slot>

          <!-- Shadow label host: copy slotted label text here for consistent styling -->
          <div class="labelHost" aria-hidden="true"></div>

          <!-- Content slot: main text + optional inline timestamp fallback -->
          <div style="display:flex;flex-direction:column;flex:1;min-width:0;">
            <slot name="content">
              <div class="text"></div>
              <div class="timestamp" aria-hidden="true"></div>
            </slot>
          </div>

          <!-- Reserved badge area (fallback empty) -->
          <div id="archivedBadgeContainer" aria-hidden="true"></div>

          <!-- Actions slot: overflow, buttons. Fallback: labs-dropdown -->
          <div class="actions">
            <slot name="actions">
              <labs-dropdown id="overflowMenu" aria-label="More actions"></labs-dropdown>
            </slot>
          </div>
        </div>
      `;

      // Wire slotchange observers to respond to light DOM changes
      const slots = this.shadowRoot.querySelectorAll('slot');
      slots.forEach(s => s.addEventListener('slotchange', this._slotChangeHandler));
    }

    // Helper lookups: prefer slotted nodes, fall back to shadow fallback elements
    const slottedControl = this.querySelector('[slot="control"]');
    const chk = slottedControl || this.shadowRoot.getElementById('chk');
    if (chk) {
      // labs-checkbox emits a 'change' CustomEvent; handle fallback checkbox directly
      if (chk.tagName && chk.tagName.toLowerCase() === 'labs-checkbox') {
        // If this is the shadow-hosted fallback checkbox, wire its events directly
        if (chk.addEventListener && !chk._labsListItemWired) {
          chk.addEventListener('change', (e) => {
            const checked = e.detail && !!e.detail.checked;
            this._checked = checked;
            if (this._checked) this.setAttribute('checked', ''); else this.removeAttribute('checked');
            this.dispatchEvent(new CustomEvent('toggle', { detail: { checked: this._checked, id: this._id }, bubbles: true, composed: true }));
            this.render();
          });
          chk._labsListItemWired = true;
        }
      }

      // If a light-DOM label is provided, mirror its text into the shadow labelHost
      try {
        const slLabel = this.querySelector('[slot="label"]');
        const host = this.shadowRoot.querySelector('.labelHost');
        const ts = this.shadowRoot.querySelector('.timestamp');
        if (host) {
          if (slLabel) {
            host.textContent = slLabel.textContent || '';
            // mark the original slotted node as present but hidden from visual flow
            try { slLabel.setAttribute('aria-hidden', 'true'); slLabel.style.display = 'none'; } catch (e) { }
            // hide the inline shadow fallback timestamp to avoid duplicate visuals
            try { if (ts) { ts.style.display = 'none'; ts.textContent = ''; } } catch (e) { }
          } else {
            // fall back to timestamp attribute if present (human-friendly)
            host.textContent = this._timestamp ? formatHuman(this._timestamp) : '';
            // ensure inline shadow timestamp is visible for the fallback
            try { if (ts) { ts.style.display = ''; } } catch (e) { }
          }
        }
      } catch (e) { /* non-fatal */ }

      // Reflect checked/inactive state
      if (this._checked) {
        try { chk.setAttribute('checked', ''); } catch (e) { }
      } else {
        try { chk.removeAttribute('checked'); } catch (e) { }
      }
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
        try { chk.setAttribute('inactive', ''); } catch (e) { }
      } else {
        try { chk.removeAttribute('inactive'); } catch (e) { }
      }
    }

    // Content: prefer slotted content; if not present, fill fallback text/timestamp
    const assignedContent = this.querySelector('[slot="content"]');
    if (!assignedContent) {
      const textDiv = this.shadowRoot.querySelector('.text');
      if (textDiv) textDiv.textContent = this._value;
      const ts = this.shadowRoot.querySelector('.timestamp');
      if (ts) ts.textContent = this._timestamp ? formatTime12(this._timestamp) : '';
    }

    // Actions/overflow: respect slotted action node when present
    const slottedActions = this.querySelector('[slot="actions"]');
    const overflow = slottedActions || this.shadowRoot.getElementById('overflowMenu');
    if (overflow) {
      // Mirror archived/restored attributes onto overflow control regardless of where it lives
      try {
        if (this.hasAttribute('archived')) overflow.setAttribute('archived', ''); else overflow.removeAttribute('archived');
      } catch (e) { }
      try {
        if (this.hasAttribute('restored')) overflow.setAttribute('restored', ''); else overflow.removeAttribute('restored');
      } catch (e) { }

      // Forward archive/restore/remove events from overflow to host if the overflow is in shadow
      if (overflow.addEventListener && overflow.id === 'overflowMenu' && !overflow._labsListItemWired) {
        overflow.addEventListener('archive', (e) => {
          if (this.hasAttribute('archived') && !this.hasAttribute('restored')) {
            this.setAttribute('restored', '');
            this.dispatchEvent(new CustomEvent('request-restore-copy', { detail: { value: this._value, id: this._id }, bubbles: true, composed: true }));
          } else if (!this.hasAttribute('archived')) {
            this._archive();
          }
        });
        overflow.addEventListener('restore', (e) => this._restore());
        overflow.addEventListener('remove', (e) => { if (this.hasAttribute('archived')) this._remove(); });
        overflow._labsListItemWired = true;
      }
    }

    // Update visual state for archive/restore/delete similar to previous behavior
    const archiveIcon = this.shadowRoot.getElementById('archiveIcon');
    const archiveBtn = this.shadowRoot.getElementById('archiveBtn');
    const row = this.shadowRoot.querySelector('.row');
    if (this.hasAttribute('restored')) {
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
      if (row) row.style.opacity = 'var(--labs-archived-opacity, 0.7)';
    } else if (this.hasAttribute('archived')) {
      if (archiveIcon) {
        archiveIcon.setAttribute('name', 'history');
        archiveIcon.setAttribute('color', 'var(--color-on-surface)');
        archiveIcon.style.opacity = '';
      }
      if (archiveBtn) {
        archiveBtn.setAttribute('aria-label', 'Restore');
        archiveBtn.style.pointerEvents = '';
        archiveBtn.removeAttribute('disabled');
        try {
          archiveBtn.innerHTML = `<labs-icon slot="icon-left" name="history" width="20" height="20"></labs-icon> Restore`;
          archiveBtn.setAttribute('variant', 'secondary');
          archiveBtn.setAttribute('size', 'small');
        } catch (e) { }
      }
      if (row) row.style.opacity = '';
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

    // Delete button visibility handling (if present in slotted actions, it should still work)
    const deleteBtn = this.querySelector('[slot="actions"] #deleteBtn') || this.shadowRoot.getElementById('deleteBtn');
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

  // timestamp formatting delegated to design-system utility

  _archive() {
    this.setAttribute('archived', '');
    this.dispatchEvent(new CustomEvent('archive', { detail: { value: this._value, id: this._id }, bubbles: true, composed: true }));
  }

  _restore() {
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
