class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});const e=document.createElement("div");e.className="card";const n=document.createElement("slot");n.name="header";const i=document.createElement("slot");i.name="media";const s=document.createElement("slot"),d=document.createElement("slot");d.name="actions";const c=document.createElement("style");c.textContent=`:host{display:block;--card-padding:var(--space-md,16px);font-family:var(--font-family-base, inherit)}
.card{background:var(--color-surface,#fff);color:var(--color-on-surface);border-radius:var(--radius-lg,8px);padding:var(--card-padding);box-shadow:var(--card-elevation, none);border:1px solid color-mix(in srgb, var(--color-on-surface) 6%, transparent)}
.header{font-weight:var(--font-weight-card-header, 600);margin:0 0 8px 0;color:var(--color-on-background, inherit);font-size:var(--font-size-card-header, 1.125rem);line-height:var(--line-height-card-header, 1.2)}
.description{margin:0 0 12px 0;line-height:var(--line-height-card-desc, 1.4);color:var(--color-on-surface, inherit);font-size:var(--font-size-card-desc, 1rem)}
.media{margin-bottom:12px}
.actions{display:flex;gap:8px;align-items:center}
:host([variant="welcome"]) .card{padding:calc(var(--card-padding) * 1.25);}
:host([variant="metric"]) .card{
  background:var(--color-surface);
  border-radius:var(--radius-lg);
  box-shadow:none;
  padding:var(--space-xl);
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
  border:none;
}
:host([variant="metric"]) ::slotted(.metric-label),
:host([variant="metric"]) .metric-label{ 
    font-size:var(--font-size-entry-text, 1rem);
    color:var(--color-on-surface);
    font-weight:var(--font-weight-normal, 400);
    margin-bottom:var(--space-md, 1rem);
    text-transform:none;
}
:host([variant="metric"]) ::slotted(.metric-value),
:host([variant="metric"]) .metric-value{
    font-size:var(--font-size-h1, 1.75rem);
    font-weight:var(--font-weight-heading, 800);
    color:var(--color-on-surface);
    line-height:var(--line-height-heading, 1.2);
    margin-bottom:var(--space-sm, 0.5rem);
}
`;const a=document.createElement("div");a.className="header",a.setAttribute("part","header");const t=document.createElement("div");t.className="description",t.setAttribute("part","body");const r=document.createElement("div");r.className="media",r.setAttribute("part","media");const o=document.createElement("div");o.className="actions",o.setAttribute("part","actions"),a.appendChild(n),r.appendChild(i),t.appendChild(s),o.appendChild(d),e.appendChild(a),e.appendChild(r),e.appendChild(t),e.appendChild(o),this.shadowRoot.appendChild(c),this.shadowRoot.appendChild(e)}}customElements.get("labs-card")||customElements.define("labs-card",l);
