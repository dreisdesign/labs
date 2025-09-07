// Minimal labs-badge web component
class LabsBadge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('span');
    wrapper.className = 'badge';

    const slot = document.createElement('slot');
    wrapper.appendChild(slot);

    const style = document.createElement('style');
    style.textContent = `:host {
  display: inline-flex;
  font-family: var(--font-family-base, inherit);
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  background: var(--color-primary, #007bff);
  color: var(--color-on-primary, #fff);
  border-radius: var(--radius-1, 4px);
  font-size: var(--font-size-badge, 0.75rem);
  font-weight: var(--font-weight-badge, 500);
  line-height: var(--line-height-badge, 1.2);
  white-space: nowrap;
}

:host([variant="secondary"]) .badge {
  background: var(--color-secondary, #6c757d);
  color: var(--color-on-secondary, #fff);
}

:host([variant="success"]) .badge {
  background: var(--color-success, #28a745);
  color: var(--color-on-success, #fff);
}

:host([variant="warning"]) .badge {
  background: var(--color-warning, #ffc107);
  color: var(--color-on-warning, #000);
}

:host([variant="error"]) .badge {
  background: var(--color-error, #dc3545);
  color: var(--color-on-error, #fff);
}
`;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(wrapper);
  }
}

if (!customElements.get('labs-badge')) {
  customElements.define('labs-badge', LabsBadge);
}

export default LabsBadge;
