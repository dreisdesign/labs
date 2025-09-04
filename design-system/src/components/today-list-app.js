import './labs-input.js';
import './labs-card.js';
import './labs-toast.js';

// Today List app - minimal scaffold for the MVP
class TodayListApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._items = [];
    this._deleted = null; // {item, index, timeoutId}

    const style = document.createElement('style');
    style.textContent = `:host{display:block;max-width:720px;margin:0 auto;font-family:inherit;color:var(--color-on-surface)}
header{display:flex;align-items:center;justify-content:space-between;margin:0 0 var(--space-4,16px) 0}
.list{display:flex;flex-direction:column;gap:12px}
.empty{color:var(--color-on-surface, #6b7280);text-align:center;padding:32px 12px;border-radius:var(--radius-1,8px);background:color-mix(in srgb,var(--color-surface) 90%, transparent)}
.controls{display:flex;gap:12px;align-items:center}
`;

    const container = document.createElement('div');
    container.className = 'container';

    const header = document.createElement('header');
    const title = document.createElement('h2');
    title.textContent = 'Today';
    title.setAttribute('part', 'title');
    header.appendChild(title);

    const inputWrap = document.createElement('div');
    inputWrap.className = 'controls';
    this._input = document.createElement('labs-input');
    this._input.setAttribute('placeholder', 'Add item and press Enter');
    inputWrap.appendChild(this._input);

    header.appendChild(inputWrap);

    const list = document.createElement('div');
    list.className = 'list';
    this._list = list;

    container.appendChild(header);
    container.appendChild(list);

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(container);

    this._onSubmit = this._onSubmit.bind(this);
  }

  connectedCallback() {
    this._input.addEventListener('submit', this._onSubmit);
    this._load();
    this._ensureToast();
    this._render();
  }

  disconnectedCallback() {
    this._input.removeEventListener('submit', this._onSubmit);
  }

  _ensureToast() {
    // single toast instance appended to body
    if (!document.body.querySelector('labs-toast')) {
      const t = document.createElement('labs-toast');
      document.body.appendChild(t);
    }
    this._toast = document.body.querySelector('labs-toast');
  }

  _save() {
    try {
      localStorage.setItem('today-list-items', JSON.stringify(this._items));
    } catch (e) {
      // ignore storage errors
    }
  }

  _load() {
    try {
      const raw = localStorage.getItem('today-list-items');
      if (raw) this._items = JSON.parse(raw);
    } catch (e) {
      this._items = [];
    }
  }

  _onSubmit(e) {
    const value = e.detail.value && e.detail.value.trim();
    if (!value) return;
    const item = { id: Date.now() + Math.random().toString(36).slice(2, 7), text: value, completed: false, createdAt: Date.now() };
    this._items.unshift(item);
    this._save();
    this._render();
  }

  _render() {
    this._list.innerHTML = '';
    if (!this._items.length) {
      const empty = document.createElement('div');
      empty.className = 'empty';
      empty.textContent = 'No items yet — add something using the input above.';
      this._list.appendChild(empty);
      return;
    }

    this._items.forEach((item, index) => {
      const card = document.createElement('labs-card');

      // header slot
      const header = document.createElement('div');
      header.slot = 'header';
      header.textContent = item.text;
      header.style.textDecoration = item.completed ? 'line-through' : 'none';

      // body slot (meta)
      const body = document.createElement('div');
      body.slot = '';
      body.textContent = `Added ${new Date(item.createdAt).toLocaleString()}`;

      // actions slot
      const actions = document.createElement('div');
      actions.slot = 'actions';

      const completeBtn = document.createElement('button');
      completeBtn.type = 'button';
      completeBtn.textContent = item.completed ? 'Mark undone' : 'Mark done';
      completeBtn.addEventListener('click', () => {
        item.completed = !item.completed;
        this._save();
        this._render();
      });

      const editBtn = document.createElement('button');
      editBtn.type = 'button';
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', () => {
        const v = prompt('Edit item', item.text);
        if (v != null) {
          item.text = v.trim();
          this._save();
          this._render();
        }
      });

      const delBtn = document.createElement('button');
      delBtn.type = 'button';
      delBtn.textContent = 'Delete';
      delBtn.addEventListener('click', () => this._deleteWithUndo(item, index));

      actions.appendChild(completeBtn);
      actions.appendChild(editBtn);
      actions.appendChild(delBtn);

      card.appendChild(header);
      card.appendChild(body);
      card.appendChild(actions);

      this._list.appendChild(card);
    });
  }

  _deleteWithUndo(item, index) {
    // remove immediately from view and storage, but keep a short undo window
    const removed = this._items.splice(index, 1)[0];
    this._save();
    this._render();

    // show toast
    if (this._toast) {
      this._toast.show('Item deleted', { actionText: 'Undo', duration: 5000 });
      const onAction = () => {
        // restore at original index
        this._items.splice(index, 0, removed);
        this._save();
        this._render();
        cleanup();
      };
      const onDismiss = () => { cleanup(); };

      const cleanup = () => {
        this._toast.removeEventListener('action', onAction);
        this._toast.removeEventListener('dismiss', onDismiss);
      };

      this._toast.addEventListener('action', onAction, { once: true });
      this._toast.addEventListener('dismiss', onDismiss, { once: true });
    }
  }
}

if (!customElements.get('today-list-app')) {
  customElements.define('today-list-app', TodayListApp);
}

export default TodayListApp;
