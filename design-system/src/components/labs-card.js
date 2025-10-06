// Minimal labs-card web component

class LabsCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div');
    wrapper.className = 'card';

    const slotHeader = document.createElement('slot'); slotHeader.name = 'header';
    const slotMedia = document.createElement('slot'); slotMedia.name = 'media';
    const slotBody = document.createElement('slot'); // default slot
    const slotActions = document.createElement('slot'); slotActions.name = 'actions';

    const style = document.createElement('style');
    style.textContent = `
/* Include metric tokens directly in shadow DOM */
:host {
  --font-size-metric-display: var(--font-size-display, 2rem);
  --font-size-metric-label: 0.875rem;
  --font-weight-metric: 800;
  --line-height-metric: 1.2;
}

:host{display:block;--card-padding:var(--space-md,16px);font-family:var(--font-family-base,inherit);}
.card{background:var(--color-surface,#fff);color:var(--color-on-surface);border-radius:var(--radius-lg,8px);padding:var(--card-padding);box-shadow:var(--card-elevation,none);border:1px solid color-mix(in srgb,var(--color-on-surface) 6%,transparent);}
.header{font-weight:var(--font-weight-card-header,600);margin:0 0 8px 0;color:var(--color-on-background,inherit);font-size:var(--font-size-card-header,1.125rem);line-height:var(--line-height-card-header,1.2);}
.description{margin:0 0 12px 0;line-height:var(--line-height-card-desc,1.4);color:var(--color-on-surface,inherit);font-size:var(--font-size-card-desc,1rem);}
.media{margin-bottom:12px;}
.actions{display:flex;gap:8px;align-items:center;}

/* Ensure slotted content inherits proper styling */
::slotted(*) {
  color: inherit;
  font-family: inherit;
}

:host[variant="welcome"] .card{padding:calc(var(--card-padding)*1.25);}
:host[variant="metric"] .card {
  padding: var(--space-lg, 24px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

:host[variant="metric"] .description {
  display: contents;
}

/* Use ::slotted() to directly style metric elements */
:host[variant="metric"] ::slotted(.metric-label) {
  font-size: var(--font-size-metric-label);
  font-weight: var(--font-weight-metric);
  line-height: var(--line-height-metric);
  color: var(--color-on-surface-variant);
  margin-bottom: var(--space-xs);
}

:host[variant="metric"] ::slotted(.metric-value) {
  font-size: var(--font-size-metric-display);
  font-weight: var(--font-weight-metric);
  line-height: var(--line-height-metric);
  color: var(--color-primary);
}
`;
    const headerWrap = document.createElement('div'); headerWrap.className = 'header'; headerWrap.setAttribute('part', 'header');
    const descWrap = document.createElement('div'); descWrap.className = 'description'; descWrap.setAttribute('part', 'body');
    const mediaWrap = document.createElement('div'); mediaWrap.className = 'media'; mediaWrap.setAttribute('part', 'media');
    const actionsWrap = document.createElement('div'); actionsWrap.className = 'actions'; actionsWrap.setAttribute('part', 'actions');

    headerWrap.appendChild(slotHeader);
    mediaWrap.appendChild(slotMedia);
    descWrap.appendChild(slotBody);
    actionsWrap.appendChild(slotActions);

    wrapper.appendChild(headerWrap);
    wrapper.appendChild(mediaWrap);
    wrapper.appendChild(descWrap);
    wrapper.appendChild(actionsWrap);

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(wrapper);
  }
}

if (!customElements.get('labs-card')) {
  customElements.define('labs-card', LabsCard);
}

export default LabsCard;
