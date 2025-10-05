import './labs-card.js';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
    }
    
    .metric-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: var(--space-sm, 8px);
      width: 100%;
    }
    
    .metric-label {
      font-size: 0.875rem;
      font-weight: 800;
      color: var(--color-on-surface);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .metric-value {
      font-size: 2rem;
      font-weight: 800;
      color: var(--color-primary);
      line-height: 1.2;
    }
  </style>

  <labs-card variant="metric">
    <div class="metric-container">
      <div class="metric-label"><slot name="label">Label</slot></div>
      <div class="metric-value"><slot name="value">0</slot></div>
    </div>
  </labs-card>
`;

class LabsMetricCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

if (!customElements.get('labs-metric-card')) {
    customElements.define('labs-metric-card', LabsMetricCard);
}

export default LabsMetricCard;
