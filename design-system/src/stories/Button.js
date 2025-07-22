import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

import './button.css';

/** Primary UI component for user interaction */
export const Button = ({ primary, backgroundColor = null, size, label, onClick }) => {
  const mode = primary ? 'labs-button--primary' : 'labs-button--secondary';

  return html`
    <button
      type="button"
      class=${['labs-button', `labs-button--${size || 'medium'}`, mode].join(' ')}
      style=${styleMap({ backgroundColor })}
      @click=${onClick}
    >
      ${label}
    </button>
  `;
};
