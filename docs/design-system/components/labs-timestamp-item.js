import './labs-list-item.js';
import './labs-icon.js';

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
    <labs-icon slot="control" name="check" id="icon" aria-hidden="true"></labs-icon>
    <div slot="content" id="content"><slot></slot></div>
  </labs-list-item>
`;

class LabsTimestampItem extends HTMLElement {
    static get observedAttributes() {
        return ['icon', 'value'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._listItem = this.shadowRoot.getElementById('list-item');
        this._icon = this.shadowRoot.getElementById('icon');
    }

    connectedCallback() {
        // Forward click events from internal list-item
        this._listItem.addEventListener('click', (e) => {
            this.dispatchEvent(new CustomEvent('click', {
                detail: e.detail,
                bubbles: true,
                composed: true
            }));
        });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (!this._listItem) return;

        switch (name) {
            case 'icon':
                if (this._icon) {
                    this._icon.setAttribute('name', newValue || 'check');
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
    get icon() {
        return this.getAttribute('icon');
    }

    set icon(val) {
        if (val) {
            this.setAttribute('icon', val);
        } else {
            this.removeAttribute('icon');
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

if (!customElements.get('labs-timestamp-item')) {
    customElements.define('labs-timestamp-item', LabsTimestampItem);
}

export default LabsTimestampItem;
