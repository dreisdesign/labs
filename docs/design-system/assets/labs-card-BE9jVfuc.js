class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});const e=document.createElement("div");e.className="card";const n=document.createElement("slot");n.name="header";const o=document.createElement("slot");o.name="media";const l=document.createElement("slot"),c=document.createElement("slot");c.name="actions";const s=document.createElement("style");s.textContent=`
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
:host[variant="welcome"] .card{padding:calc(var(--card-padding)*1.25);}
:host[variant="metric"] .card{background:var(--color-surface);border-radius:var(--radius-lg);box-shadow:none;padding:var(--space-lg,24px);max-width:320px;margin:0 auto;display:flex;flex-direction:column;align-items:center;text-align:center;border:none;}

/* Metric variant - set up custom properties on :host so light DOM slotted content can access them */
:host[variant="metric"] {
  --metric-label-size: 0.875rem;
  --metric-label-weight: 800;
  --metric-label-line-height: 1.2;
  --metric-value-size: 2rem;
  --metric-value-weight: 800;
  --metric-value-line-height: 1.2;
}

:host[variant="metric"] .description {
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm, 0.5rem);
  align-items: center;
  text-align: center;
  width: 100%;
}

/* Style any slotted content in metric variant */
:host[variant="metric"] ::slotted(*) {
  margin: 0;
}


:host[variant="metric"] ::slotted(.metric-label),
:host[variant="metric"] .metric-label {
  font-size: var(--metric-label-size, 0.875rem);
  font-weight: var(--metric-label-weight, 800);
  line-height: var(--metric-label-line-height, 1.2);
  color: var(--color-on-surface);
  margin-bottom: var(--space-md, 1rem);
  text-align: center;
  width: 100%;
}

:host[variant="metric"] ::slotted(.metric-value),
:host[variant="metric"] .metric-value {
  font-size: var(--metric-value-size, 2rem);
  font-weight: var(--metric-value-weight, 800);
  line-height: var(--metric-value-line-height, 1.2);
  color: var(--color-primary);
  text-align: center;
  width: 100%;
}
`;const t=document.createElement("div");t.className="header",t.setAttribute("part","header");const a=document.createElement("div");a.className="description",a.setAttribute("part","body");const r=document.createElement("div");r.className="media",r.setAttribute("part","media");const i=document.createElement("div");i.className="actions",i.setAttribute("part","actions"),t.appendChild(n),r.appendChild(o),a.appendChild(l),i.appendChild(c),e.appendChild(t),e.appendChild(r),e.appendChild(a),e.appendChild(i),this.shadowRoot.appendChild(s),this.shadowRoot.appendChild(e)}connectedCallback(){this.getAttribute("variant")==="metric"&&(this.style.setProperty("--metric-label-size","0.875rem"),this.style.setProperty("--metric-label-weight","800"),this.style.setProperty("--metric-label-line-height","1.2"),this.style.setProperty("--metric-value-size","2rem"),this.style.setProperty("--metric-value-weight","800"),this.style.setProperty("--metric-value-line-height","1.2"))}}customElements.get("labs-card")||customElements.define("labs-card",d);
