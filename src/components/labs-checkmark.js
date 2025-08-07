class LabsCheckmark extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.size = 64;
        this.color = '#10b981';
        this.trigger = false;
    }

    static get observedAttributes() {
        return ['size', 'color', 'trigger'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'size') {
            this.size = parseInt(newValue) || 64;
        } else if (name === 'color') {
            this.color = newValue || '#10b981';
        } else if (name === 'trigger') {
            this.trigger = newValue !== null;
        }
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: var(--checkmark-size, ${this.size}px);
          height: var(--checkmark-size, ${this.size}px);
          --checkmark-color: ${this.color};
        }
        
        .checkmark-container {
          width: 100%;
          height: 100%;
          position: relative;
        }
        
        .checkmark {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: block;
          stroke-width: var(--checkmark-stroke-width, 2);
          stroke: #fff;
          stroke-miterlimit: 10;
          box-shadow: inset 0px 0px 0px var(--checkmark-color);
          position: relative;
        }
        
        .checkmark.animate {
          animation: fill var(--checkmark-fill-duration, 0.4s) ease-in-out var(--checkmark-fill-delay, 0.4s) forwards, 
                     scale var(--checkmark-scale-duration, 0.3s) ease-in-out var(--checkmark-scale-delay, 0.9s) both;
        }
        
        .checkmark__circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: var(--checkmark-stroke-width, 2);
          stroke-miterlimit: 10;
          stroke: var(--checkmark-color);
          fill: none;
        }
        
        .checkmark.animate .checkmark__circle {
          animation: stroke var(--checkmark-stroke-duration, 0.6s) cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }
        
        .checkmark__check {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          stroke: var(--checkmark-color);
        }
        
        .checkmark.animate .checkmark__check {
          animation: stroke var(--checkmark-check-duration, 0.3s) cubic-bezier(0.65, 0, 0.45, 1) var(--checkmark-check-delay, 0.8s) forwards;
        }
        
        @keyframes stroke {
          100% { stroke-dashoffset: 0; }
        }
        
        @keyframes scale {
          0%, 100% { transform: none; }
          50% { transform: scale3d(1.1, 1.1, 1); }
        }
        
        @keyframes fill {
          100% { 
            box-shadow: inset 0px 0px 0px ${this.size / 2}px var(--checkmark-color); 
          }
        }
      </style>
      <div class="checkmark-container">
        <svg class="checkmark ${this.trigger ? 'animate' : ''}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
          <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
      </div>
    `;
    }

    // Method to trigger animation
    animate() {
        this.trigger = true;
        this.render();

        // Reset trigger after animation completes
        setTimeout(() => {
            this.trigger = false;
            this.render();
        }, 1500);
    }
}

customElements.define('labs-checkmark', LabsCheckmark);
