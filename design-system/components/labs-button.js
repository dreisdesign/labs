
class LabsButton extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'icon', 'icon-right', 'checkmark', 'checkmark-icon', 'label', 'iconcolor'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.animating = false;
    this.handleClick = this.handleClick.bind(this);
  }

  connectedCallback() {
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
      checkmarkIcon: this.getAttribute('checkmark-icon'),
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
    const iconStyle = iconColor ? `filter: ${iconColor === '#fff' || iconColor.toLowerCase() === 'white' ? 'brightness(0) invert(1)' : ''}; color: ${iconColor};` : '';
    const icon = this.getAttribute('icon');
    let iconRight = this.getAttribute('icon-right');
    // Only use the default icon if the attribute 'default-icon-right' is present and icon-right is not set
    if (!iconRight && this.hasAttribute('default-icon-right')) {
      iconRight = 'assets/icons/settings--fill.svg';
    }
    const checkmarkIcon = this.getAttribute('checkmark-icon') || 'assets/icons/check--fill.svg';
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
          animation: rollInCheckmark 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
        }
        @keyframes rollInCheckmark {
          from {
            opacity: 0;
            transform: scale(0.3) rotate(-180deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        .checkmark-icon {
          width: 1.5rem;
          height: 1.5rem;
          filter: brightness(0) invert(1);
        }
                .checkmark-icon {
                  display: none;
                  position: absolute;
                  width: 1.5rem;
                  height: 1.5rem;
                }
                .success .labs-label, .success .labs-icon:not(.checkmark-icon) {
                  animation: fadeOut 0.3s forwards;
                }
                .success .checkmark-icon {
                  display: inline-block;
                  animation: fadeIn 0.3s forwards;
                }
                @keyframes fadeOut {
                  from { opacity: 1; transform: scale(1); }
                  to { opacity: 0; transform: scale(0.8); }
                }
                @keyframes fadeIn {
                  from { opacity: 0; transform: scale(0.8); }
                  to { opacity: 1; transform: scale(1); }
                }
              </style>
              <button class="labs-button ${variant}" part="button">
                ${icon ? `<img src="${icon}" class="labs-icon" style="${iconStyle}" alt=""/>` : ''}
                <span class="labs-label">${label}</span>
                ${iconRight ? `<img src="${iconRight}" class="labs-icon" style="${iconStyle}" alt=""/>` : ''}
                ${checkmark ? `<img src="${checkmarkIcon}" class="labs-icon checkmark-icon" alt="Success"/>` : ''}
              </button>
            `;
  }
}

customElements.define('labs-button', LabsButton);

