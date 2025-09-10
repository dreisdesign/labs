// Simple Labs Checkbox component (icon-only) - reusable canonical checkbox
class LabsCheckbox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._checked = this.hasAttribute('checked');
    this.render();
  }

  static get observedAttributes() { return ['checked']; }

  attributeChangedCallback(name, oldV, newV) {
    if (name === 'checked') this._checked = this.hasAttribute('checked');
    this._updateAria();
    this.render();
  }

  connectedCallback() {
    // delegate events
    this.addEventListener('click', this._onClick);
    this.addEventListener('keydown', this._onKeyDown);
    this.setAttribute('tabindex', this.getAttribute('tabindex') || '0');
    this.setAttribute('role', this.getAttribute('role') || 'checkbox');
    this._updateAria();
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._onClick);
    this.removeEventListener('keydown', this._onKeyDown);
  }

  _onClick = (e) => {
    e.stopPropagation();
    this.toggle();
  }

  _onKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter') {
      e.preventDefault();
      this.toggle();
    }
  }

  toggle() {
    this._checked = !this._checked;
    if (this._checked) this.setAttribute('checked', ''); else this.removeAttribute('checked');
    this._updateAria();
    this.dispatchEvent(new CustomEvent('change', { detail: { checked: this._checked }, bubbles: true, composed: true }));
    this.render();
  }

  _updateAria() {
    if (!this.shadowRoot) return;
    this.setAttribute('aria-checked', String(this._checked));
  }

  render() {
    const icon = this._checked ? 'check_box' : 'check_box_outline_blank';
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: inline-flex; align-items:center; }
        ::slotted(*) { pointer-events: none; }
      </style>
      <labs-button variant="icon" aria-hidden="true" tabindex="-1" disabled>
        <labs-icon slot="icon-left" name="${icon}" width="20" height="20"></labs-icon>
      </labs-button>
      <slot style="display:none"></slot>
    `;
  }
}

if (!customElements.get('labs-checkbox')) customElements.define('labs-checkbox', LabsCheckbox);
