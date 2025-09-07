// Minimal labs-toast web component
class LabsToast extends HTMLElement {
  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: 'open' });

    const container = document.createElement('div');
    container.className = 'toast';
    container.setAttribute('role', 'status');
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('aria-atomic', 'true');

    const message = document.createElement('div');
    message.className = 'message';
    this._message = message;

    const actions = document.createElement('div');
    actions.className = 'actions';

    const actionBtn = document.createElement('button');
    actionBtn.className = 'action';
    actionBtn.setAttribute('part', 'action');
    actionBtn.type = 'button';
    actionBtn.textContent = 'Undo';
    this._actionBtn = actionBtn;

    const closeBtn = document.createElement('button');
    closeBtn.className = 'close';
    closeBtn.setAttribute('part', 'close');
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', 'Dismiss');
    closeBtn.textContent = '✕';
    this._closeBtn = closeBtn;

    actions.appendChild(actionBtn);
    actions.appendChild(closeBtn);

    container.appendChild(message);
    container.appendChild(actions);

    const style = document.createElement('style');
    style.textContent = `:host{position:fixed;left:50%;bottom:var(--toast-bottom,24px);transform:translateX(-50%);z-index:9999;display:block;font-family:var(--font-family-base, inherit)}
.toast{display:flex;align-items:center;gap:12px;min-width:200px;max-width:640px;padding:12px 16px;border-radius:10px;background:var(--color-surface,#fff);color:var(--color-on-surface);box-shadow:var(--elevation-1, 0 6px 20px rgba(0,0,0,.12));border:1px solid color-mix(in srgb, var(--color-on-surface) 6%, transparent);opacity:0;pointer-events:none;transform:translateY(8px);transition:opacity .18s ease,transform .18s ease}
.toast.show{opacity:1;pointer-events:auto;transform:translateY(0)}
.message{flex:1;font-size:var(--font-size-toast, 0.95rem);line-height:var(--line-height-toast, 1.3)}
.actions{display:flex;align-items:center;gap:8px}
.action{background:transparent;border:0;padding:6px 10px;border-radius:8px;color:var(--color-primary);cursor:pointer;font-weight:var(--font-weight-toast-action, 600);font-size:var(--font-size-toast-action, 0.9rem)}
.close{background:transparent;border:0;padding:6px 8px;border-radius:8px;color:var(--color-on-surface);cursor:pointer}
`;

    this._shadow.appendChild(style);
    this._shadow.appendChild(container);

    this._container = container;
    this._timeout = null;

    this._onAction = this._onAction.bind(this);
    this._onClose = this._onClose.bind(this);
  }

  connectedCallback() {
    this._actionBtn.addEventListener('click', this._onAction);
    this._closeBtn.addEventListener('click', this._onClose);
  }

  disconnectedCallback() {
    this._actionBtn.removeEventListener('click', this._onAction);
    this._closeBtn.removeEventListener('click', this._onClose);
    this._clearTimeout();
  }

  show(text, { actionText = 'Undo', duration = 5000 } = {}) {
    this._message.textContent = text;
    this._actionBtn.textContent = actionText;
    this._container.classList.add('show');
    this._clearTimeout();
    if (duration > 0) this._timeout = setTimeout(() => this.hide(), duration);
    this.dispatchEvent(new CustomEvent('show', { bubbles: true, composed: true }));
  }

  hide() {
    this._container.classList.remove('show');
    this._clearTimeout();
    this.dispatchEvent(new CustomEvent('dismiss', { bubbles: true, composed: true }));
  }

  _onAction() {
    this.dispatchEvent(new CustomEvent('action', { detail: { message: this._message.textContent }, bubbles: true, composed: true }));
    this.hide();
  }

  _onClose() {
    this.hide();
  }

  _clearTimeout() {
    if (this._timeout) {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
  }
}

if (!customElements.get('labs-toast')) {
  customElements.define('labs-toast', LabsToast);
}

export default LabsToast;
