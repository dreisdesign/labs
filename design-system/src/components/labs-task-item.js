import './labs-list-item.js';
import './labs-checkbox.js';
import './labs-dropdown.js';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      /* Ensure CSS custom properties pass through to nested shadow DOM */
      --color-surface: var(--color-surface);
      --color-on-surface: var(--color-on-surface);
      --color-primary: var(--color-primary);
      --font-family-base: var(--font-family-base);
    }
  </style>

  <labs-list-item id="list-item">
    <labs-checkbox slot="control" aria-label="Mark complete" id="checkbox"></labs-checkbox>
    <div slot="content" id="content"><slot></slot></div>
    <labs-dropdown slot="actions" id="dropdown"></labs-dropdown>
  </labs-list-item>
`;

class LabsTaskItem extends HTMLElement {
    static get observedAttributes() {
        return ['checked', 'archived', 'restored', 'value'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._listItem = this.shadowRoot.getElementById('list-item');
        this._checkbox = this.shadowRoot.getElementById('checkbox');
        this._dropdown = this.shadowRoot.getElementById('dropdown');
    }

    connectedCallback() {
        // Forward events from internal list-item
        this._listItem.addEventListener('toggle', (e) => {
            this.dispatchEvent(new CustomEvent('toggle', {
                detail: e.detail,
                bubbles: true,
                composed: true
            }));
        });

        this._listItem.addEventListener('archive', (e) => {
            this.dispatchEvent(new CustomEvent('archive', {
                detail: e.detail,
                bubbles: true,
                composed: true
            }));
        });

        this._listItem.addEventListener('restore', (e) => {
            this.dispatchEvent(new CustomEvent('restore', {
                detail: e.detail,
                bubbles: true,
                composed: true
            }));
        });

        this._listItem.addEventListener('remove', (e) => {
            this.dispatchEvent(new CustomEvent('remove', {
                detail: e.detail,
                bubbles: true,
                composed: true
            }));
        });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (!this._listItem) return;

        switch (name) {
            case 'checked':
                if (this.hasAttribute('checked')) {
                    this._listItem.setAttribute('checked', '');
                } else {
                    this._listItem.removeAttribute('checked');
                }
                break;
            case 'archived':
                if (this.hasAttribute('archived')) {
                    this._listItem.setAttribute('archived', '');
                } else {
                    this._listItem.removeAttribute('archived');
                }
                break;
            case 'restored':
                if (this.hasAttribute('restored')) {
                    this._listItem.setAttribute('restored', '');
                } else {
                    this._listItem.removeAttribute('restored');
                }
                break;
            case 'value':
                if (newValue !== null) {
                    this._listItem.setAttribute('value', newValue);
                } else {
                    this._listItem.removeAttribute('value');
                }
                break;
        }
    }

    // Property accessors for convenience
    get checked() {
        return this.hasAttribute('checked');
    }

    set checked(val) {
        if (val) {
            this.setAttribute('checked', '');
        } else {
            this.removeAttribute('checked');
        }
    }

    get archived() {
        return this.hasAttribute('archived');
    }

    set archived(val) {
        if (val) {
            this.setAttribute('archived', '');
        } else {
            this.removeAttribute('archived');
        }
    }

    get value() {
        return this.getAttribute('value');
    }

    set value(val) {
        if (val) {
            this.setAttribute('value', val);
        } else {
            this.removeAttribute('value');
        }
    }
}

if (!customElements.get('labs-task-item')) {
    customElements.define('labs-task-item', LabsTaskItem);
}

export default LabsTaskItem;
