import './labs-card.js';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      border-radius: var(--radius-lg, 8px);
      background: var(--color-surface, #fff);
      box-shadow: var(--card-elevation, none);
      padding: var(--space-lg, 1.5rem);
      text-align: center;
    }
    
    .metric-label {
      font-size: var(--font-size-metric-label, 0.875rem);
      font-weight: var(--font-weight-metric, 800);
      line-height: var(--line-height-metric, 1.2);
      color: var(--color-on-surface-variant, #666);
      margin-bottom: var(--space-xs, 4px);
      text-transform: uppercase;
    }
    
    .metric-value {
      font-size: var(--font-size-metric-display, 2rem);
      font-weight: var(--font-weight-metric, 800);
      line-height: var(--line-height-metric, 1.2);
      color: var(--color-primary, #007acc);
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
    this.render();
  }
  static get observedAttributes() { return ['label', 'value']; }
  attributeChangedCallback() { this.render(); }
  connectedCallback() { this.render(); }
  render() {
    const label = this.getAttribute('label') || 'Metric Label';
    const value = this.getAttribute('value') || '42';
    this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            border-radius: var(--radius-lg, 8px);
            background: var(--color-surface, #fff);
            box-shadow: var(--card-elevation, none);
            padding: var(--space-lg, 1.5rem);
            text-align: center;
          }
          
          .metric-label {
            font-size: var(--font-size-metric-label, 0.875rem);
            font-weight: var(--font-weight-metric, 800);
            line-height: var(--line-height-metric, 1.2);
            color: var(--color-on-surface-variant, var(--color-on-surface, #666));
            margin-bottom: var(--space-xs, 4px);
            text-transform: uppercase;
          }
          
          .metric-value {
            font-size: var(--font-size-metric-display, 2rem);
            font-weight: var(--font-weight-metric, 800);
            line-height: var(--line-height-metric, 1.2);
          color: var(--color-on-surface, #fff);
          }
        </style>
        <div class="metric-label">${label}</div>
        <div class="metric-value">${value}</div>
      `;
  }
}

if (!customElements.get('labs-metric-card')) {
  customElements.define('labs-metric-card', LabsMetricCard);
}

export default LabsMetricCard;
