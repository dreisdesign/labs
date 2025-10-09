class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});const e=document.createElement("div");e.className="card";const i=document.createElement("slot");i.name="header";const o=document.createElement("slot");o.name="media";const d=document.createElement("slot"),c=document.createElement("slot");c.name="actions";const s=document.createElement("style");s.textContent=`
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
  .actions{display:flex;gap:8px;align-items:center;justify-content:center;}

/* Ensure slotted content inherits proper styling */
::slotted(*) {
  color: inherit;
  font-family: inherit;
}

/* Center slotted buttons in welcome card */
:host[variant="welcome"][align="center"] ::slotted(*) {
  margin: 0 auto;
}

:host[variant="welcome"] .card{padding:calc(var(--card-padding)*1.25);}

/* Welcome card with centered alignment */
:host[variant="welcome"][align="center"] .card {
  text-align: center;
}
:host[variant="welcome"][align="center"] .header {
  text-align: center;
}
:host[variant="welcome"][align="center"] .description {
  text-align: center;
}
:host[variant="welcome"][align="center"] .actions {
  justify-content: center;
}
/* Robustly center slotted actions in flex container */
:host[variant="welcome"][align="center"] .actions > ::slotted(*) {
  margin-left: auto;
  margin-right: auto;
}

:host[variant="welcome"][align="center"] .actions > ::slotted(div) > * {
  margin-left: auto;
  margin-right: auto;
}
/* Center slotted elements within their wrappers */
:host[variant="welcome"][align="center"] .header slot,
:host[variant="welcome"][align="center"] .description slot {
  display: block;
  text-align: center;
}

:host[variant="metric"] .card {
    actionsWrap.appendChild(slotActions);
        
      headerWrap.appendChild(slotHeader);
      mediaWrap.appendChild(slotMedia);
      descWrap.appendChild(slotBody);
      wrapper.appendChild(headerWrap);
      wrapper.appendChild(mediaWrap);
      wrapper.appendChild(descWrap);
      wrapper.appendChild(actionsWrap);
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

/* Modular centering for any slotted actions content */
:host[variant="welcome"][align="center"] .actions {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
`;const t=document.createElement("div");t.className="header",t.setAttribute("part","header");const a=document.createElement("div");a.className="description",a.setAttribute("part","body");const n=document.createElement("div");n.className="media",n.setAttribute("part","media");const r=document.createElement("div");r.className="actions",r.setAttribute("part","actions"),t.appendChild(i),n.appendChild(o),a.appendChild(d),r.appendChild(c),e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(r),this.shadowRoot.appendChild(s),this.shadowRoot.appendChild(e)}}customElements.get("labs-card")||customElements.define("labs-card",l);
