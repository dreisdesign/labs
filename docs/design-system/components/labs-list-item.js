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
    // Hide archivedBadgeContainer if empty
    const archivedBadgeContainer = this.shadowRoot.getElementById('archivedBadgeContainer');
    if (archivedBadgeContainer && !archivedBadgeContainer.textContent.trim()) {
      archivedBadgeContainer.style.display = 'none';
    } else if (archivedBadgeContainer) {
      archivedBadgeContainer.style.display = '';
    }
    // Build a slot-driven template with sensible, backwards-compatible fallbacks.
    if (!this.shadowRoot.innerHTML) {
      this.shadowRoot.innerHTML = `
        <style>
          :host { display: block; width: 100%; font-family: var(--font-family-base, system-ui, sans-serif); }
          .row { display:flex; align-items:center; gap:12px; padding:10px 12px; border-radius:12px; background:var(--color-surface, #fff); border:1px solid color-mix(in srgb,var(--color-on-surface) 6%,transparent); width:100%; box-sizing:border-box; min-width:0; min-height:60px; overflow: hidden; }
          .text { flex-grow:1; font-size:1rem; color:var(--color-on-surface, #111); word-break:break-word; min-width:0; text-align: center; }
          .actions { display:flex; gap:0; align-items:center; flex: 0 0 auto; min-width:0; width:auto; min-height:32px; margin-right:0 !important; }
          .text { flex:1; font-size:1rem; color:var(--color-on-surface, #111); word-break:break-word; min-width:0; }
          .timestamp { font-size:0.75rem; color:var(--color-on-surface-variant, #666); margin-left:6px; }
          .badge { font-size:0.625rem; padding:4px 8px; border-radius:999px; background:var(--color-surface-secondary, #f1f3f4); color:var(--color-on-surface); margin-left:8px; }
          .actions { display:flex; gap:8px; align-items:center; flex: 0 0 auto; min-width:40px; min-height:32px; }
          ::slotted([slot="control"]) {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 40px;
            min-height: 32px;
            padding: 0 2px;
          }
          ::slotted([slot="actions"]) {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 40px;
            min-height: 32px;
            padding: 0 2px;
          }
          /* Control slot SVG: container may be up to 40px wide; icon should not exceed 20px height */
          ::slotted([slot="control"] svg) {
            display: block;
            margin: auto;
            max-width: 40px !important;
            max-height: 20px !important;
            width: auto !important;
            height: auto !important;
          }
          /* Ensure timestamp variant also constrains control/label icons to match the checkbox sizing */
          :host([variant="timestamp"]) ::slotted([slot="control"]),
          :host([variant="timestamp"]) ::slotted([slot="label"]) {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 40px;
            min-height: 32px;
            padding: 0 2px;
          }
          :host([variant="timestamp"]) ::slotted([slot="control"] svg),
          :host([variant="timestamp"]) ::slotted([slot="label"] svg) {
            display: block;
            margin: auto;
            max-width: 40px !important;
            max-height: 20px !important;
            width: auto !important;
            height: auto !important;
          }
          labs-button[variant="icon"] { --icon-size:20px; }
          .secondary-variant { background: var(--color-surface-secondary, #f6f7f8); }
          :host([variant="text-only"]) .row { padding: 8px 12px; min-height: 60px; }
          :host([variant="timestamp"]) .row { padding: 8px 12px; min-height: 60px; }
          :host([variant="text-only"]) .row:has(:not([slot="actions"])) .text {
            margin-right: auto;
            margin-left: auto;
            text-align: center;
          }
          :host([variant="text-only"]) .text { font-weight: var(--font-weight-semibold, 600); }
          :host([variant="text-only"]) .timestamp { margin-left: 0; margin-top: 2px; font-size: 0.75rem; }
          :host([variant="text-only"]) ::slotted([slot="control"]),
          :host([variant="text-only"]) ::slotted([slot="actions"]) {
            padding: 0 1px;
          }
          /* Enforced constraints already applied above for control SVG */
          /* Style for a slotted primary label (timestamp) when present */
          .labelHost { font-size: 0.95rem; color: var(--color-on-surface, #111); margin-right: 12px; white-space: nowrap; flex: 0 0 auto; }
          ::slotted(.item-label) {
            font-size: 0.95rem;
            color: var(--color-on-surface-variant, #666);
            margin-right: 12px;
            white-space: nowrap;
            flex: 0 0 auto;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 140px;
          }
          /* Constrain timestamp label text so it doesn't overflow the row */
          :host([variant="timestamp"]) ::slotted([slot="label"]) {
            max-width: 120px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            flex: 0 0 auto;
          }
        </style>
        <div class="row" role="listitem" data-id="${this._id}">
          <slot name="control"></slot>
          <div class="text"><slot name="content"></slot></div>
          <div id="archivedBadgeContainer" aria-hidden="true"></div>
          <div class="actions" style="display:none;width:0;min-width:0;">
            <slot name="actions" onslotchange="
              const parent = this.parentElement;
              if (this.assignedNodes().length) {
                parent.style.display = 'flex';
                parent.style.minWidth = '40px';
                parent.style.width = '';
              } else {
                parent.style.display = 'none';
                parent.style.minWidth = '0';
                parent.style.width = '0';
              }
            "></slot>
          </div>
        </div>
      `;

      // Wire slotchange observers to respond to light DOM changes
      const slots = this.shadowRoot.querySelectorAll('slot');
      slots.forEach(s => s.addEventListener('slotchange', this._slotChangeHandler));

      // NOTE: component-owned left-side timestamp/label removed — keep content slot only
    }

    // Only wire slotchange observers; all content must be provided via slots.

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
