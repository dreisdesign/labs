// Minimal labs-input web component
class Input extends HTMLElement {
  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: 'open' });
    this._input = document.createElement('input');
    this._input.type = 'text';
    this._input.placeholder = this.getAttribute('placeholder') || '';
    this._input.setAttribute('part', 'input');

    const style = document.createElement('style');
    style.textContent = `:host{display:block} input{display:block;width:100%;box-sizing:border-box;padding:var(--space-2,8px);border-radius:var(--radius-1,8px);border:1px solid var(--color-outline, color-mix(in srgb, var(--color-on-surface, var(--color-on-background)) 6%, transparent));background:var(--color-surface, var(--color-background));color:var(--color-on-surface);font:inherit} input:focus{outline:2px solid color-mix(in srgb, var(--color-primary, var(--color-accent, var(--color-on-surface))) 20%, transparent)}`;

    this._shadow.appendChild(style);
    this._shadow.appendChild(this._input);

    this._onKey = this._onKey.bind(this);
    this._onInput = this._onInput.bind(this);
  }

  connectedCallback() {
    this._input.addEventListener('keydown', this._onKey);
    this._input.addEventListener('input', this._onInput);
    if (this.hasAttribute('value')) this._input.value = this.getAttribute('value');
    if (this.hasAttribute('aria-label')) this._input.setAttribute('aria-label', this.getAttribute('aria-label'));
  }

  disconnectedCallback() {
    this._input.removeEventListener('keydown', this._onKey);
    this._input.removeEventListener('input', this._onInput);
  }

  static get observedAttributes() { return ['placeholder', 'value', 'aria-label']; }
  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'placeholder') this._input.placeholder = newVal || '';
    if (name === 'value' && newVal !== this._input.value) this._input.value = newVal || '';
    if (name === 'aria-label') this._input.setAttribute('aria-label', newVal || '');
  }

  get value() { return this._input.value; }
  set value(v) { this._input.value = v; this.setAttribute('value', v); }

  focus() { this._input.focus(); }

  _onInput() {
    this.dispatchEvent(new CustomEvent('value-changed', { detail: { value: this.value } }));
  }

  _onKey(e) {
    if (e.key === 'Enter') {
      const val = this.value.trim();
      if (val.length > 0) {
        this.dispatchEvent(new CustomEvent('submit', { detail: { value: val } }));
        // clear input unless attribute keep is set
        if (!this.hasAttribute('keep')) this._input.value = '';
        this.dispatchEvent(new CustomEvent('value-changed', { detail: { value: this.value } }));
      }
    }
  }
}

if (!customElements.get('labs-input')) {
  customElements.define('labs-input', Input);
}

export default Input;
