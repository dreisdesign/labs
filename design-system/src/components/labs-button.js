/* eslint-disable */
import './labs-icon.js';

class LabsButton extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'icon', 'icon-right', 'checkmark', 'label', 'iconcolor'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.animating = false;
    this.handleClick = this.handleClick.bind(this);
  }

  connectedCallback() {
    console.log('[LabsButton] LOCAL COMPONENT LOADED - DEMO TEST');
    this.render();
    this.shadowRoot.querySelector('button').addEventListener('click', this.handleClick);
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('button').removeEventListener('click', this.handleClick);
  }

  attributeChangedCallback() {
    console.log('[LabsButton] attributeChangedCallback:', {
      variant: this.getAttribute('variant'),
      icon: this.getAttribute('icon'),
      iconRight: this.getAttribute('icon-right'),
      checkmark: this.getAttribute('checkmark'),
      label: this.getAttribute('label'),
      iconcolor: this.getAttribute('iconcolor')
    });
    this.render();
  }

  handleClick(e) {
    console.log('[LabsButton] handleClick:', {
      checkmark: this.hasAttribute('checkmark'),
      label: this.getAttribute('label'),
      icon: this.getAttribute('icon'),
      iconRight: this.getAttribute('icon-right')
    });
    if (this.hasAttribute('checkmark')) {
      if (this.animating) return;
      this.animating = true;
      const btn = this.shadowRoot.querySelector('button');
      btn.classList.remove('success');
      void btn.offsetWidth;
      btn.classList.add('success');
      setTimeout(() => {
        btn.classList.remove('success');
        this.animating = false;
      }, 800);
    }
    this.dispatchEvent(new CustomEvent('labs-click', { bubbles: true }));
  }

  render() {
    const iconColor = this.getAttribute('iconcolor') || '';
    // Map legacy icon names to icon registry keys
    const mapIconName = (name) => {
      if (!name) return '';
      // Remove file extensions and --fill, --outline, etc.
      return name
        .replace(/\.(svg|png|jpg|jpeg)$/i, '')
        .replace(/--fill|--outline|--regular|--solid/gi, '')
        .replace(/-/g, '_');
    };

    const icon = mapIconName(this.getAttribute('icon'));
    let iconRight = mapIconName(this.getAttribute('icon-right'));
    // Only use the default icon if the attribute 'default-icon-right' is present and icon-right is not set
    if (!iconRight && this.hasAttribute('default-icon-right')) {
      iconRight = 'settings';
    }
    const label = this.getAttribute('label') || '';
    const checkmark = this.hasAttribute('checkmark');
    const variant = this.getAttribute('variant') || 'primary';

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: inline-block; }
        .labs-button {
          font-size: 1.25rem;
          font-weight: 600;
          border: none;
          border-radius: 5rem;
          background: rgb(46, 43, 116);
          color: #fff;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.1s ease-out;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          overflow: hidden;
          position: relative;
          padding: 0.75rem 1.5rem;
        }
        .labs-button:active,
        .labs-button.button-pressed {
          background-color: rgb(25, 23, 80);
          transform: scale(0.95);
          transition-duration: 0.05s;
        }
        .labs-button:hover {
          background: rgb(13, 11, 63);
        }
        .labs-button:focus-visible {
          outline: 3px solid rgb(0, 95, 204);
          outline-offset: 2px;
        }
        .labs-icon {
          width: 1.5rem;
          height: 1.5rem;
          display: inline-block;
          vertical-align: middle;
        }
        .labs-label {
          text-align: center;
          line-height: 1.2;
          height: 24px;
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .labs-checkmark {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
        }
        .success .labs-label {
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.3s ease-out, transform 0.3s ease-out;
        }
        .success .labs-checkmark {
          opacity: 1;
          transform: scale(1) rotate(0deg);
          animation: rollInCheckmark 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
        }
        @keyframes rollInCheckmark {
          from {
            opacity: 0;
            transform: scale(0.3) rotate(-360deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        /* Apply icon color filter */
        .labs-icon img {
          filter: ${iconColor === '#fff' || iconColor.toLowerCase() === 'white' ? 'brightness(0) invert(1)' : iconColor ? `hue-rotate(0deg) saturate(0) brightness(0) invert(1)` : 'none'};
        }
        /* Ensure right icon is visible and spaced */
        .labs-button labs-icon:last-of-type {
          margin-left: 0.5em;
          opacity: 1 !important;
          display: inline-block !important;
        }
      </style>
      <button class="labs-button ${variant}" part="button">
        ${icon ? `<labs-icon class="labs-icon" name="${icon}"></labs-icon>` : ''}
        <span class="labs-label">${label}</span>
        ${iconRight ? `<labs-icon class="labs-icon" name="${iconRight}"></labs-icon>` : ''}
        ${checkmark ? `<span class="labs-checkmark"><labs-icon name="check" class="labs-icon"></labs-icon></span>` : ''}
      </button>
    `;
  }

}

customElements.define('labs-button', LabsButton);

