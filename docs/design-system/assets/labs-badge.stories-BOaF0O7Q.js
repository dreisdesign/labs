class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});const o=document.createElement("span");o.className="badge";const t=document.createElement("slot");o.appendChild(t);const r=document.createElement("style");r.textContent=`:host {
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
`,this.shadowRoot.appendChild(r),this.shadowRoot.appendChild(o)}}customElements.get("labs-badge")||customElements.define("labs-badge",n);const s={title:"Components/Badge"},e=()=>{const a=document.createElement("labs-badge");return a.textContent="Badge",a};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const el = document.createElement('labs-badge');
  el.textContent = 'Badge';
  return el;
}`,...e.parameters?.docs?.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,s as default};
