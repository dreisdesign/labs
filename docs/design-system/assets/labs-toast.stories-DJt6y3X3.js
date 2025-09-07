class r extends HTMLElement{constructor(){super(),this._shadow=this.attachShadow({mode:"open"});const t=document.createElement("div");t.className="toast",t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-atomic","true");const n=document.createElement("div");n.className="message",this._message=n;const e=document.createElement("div");e.className="actions";const o=document.createElement("button");o.className="action",o.setAttribute("part","action"),o.type="button",o.textContent="Undo",this._actionBtn=o;const s=document.createElement("button");s.className="close",s.setAttribute("part","close"),s.type="button",s.setAttribute("aria-label","Dismiss"),s.textContent="✕",this._closeBtn=s,e.appendChild(o),e.appendChild(s),t.appendChild(n),t.appendChild(e);const c=document.createElement("style");c.textContent=`:host{position:fixed;left:50%;bottom:var(--toast-bottom,24px);transform:translateX(-50%);z-index:9999;display:block;font-family:var(--font-family-base, inherit)}
.toast{display:flex;align-items:center;gap:12px;min-width:200px;max-width:640px;padding:12px 16px;border-radius:10px;background:var(--color-surface,#fff);color:var(--color-on-surface);box-shadow:var(--elevation-1, 0 6px 20px rgba(0,0,0,.12));border:1px solid color-mix(in srgb, var(--color-on-surface) 6%, transparent);opacity:0;pointer-events:none;transform:translateY(8px);transition:opacity .18s ease,transform .18s ease}
.toast.show{opacity:1;pointer-events:auto;transform:translateY(0)}
.message{flex:1;font-size:var(--font-size-toast, 0.95rem);line-height:var(--line-height-toast, 1.3)}
.actions{display:flex;align-items:center;gap:8px}
.action{background:transparent;border:0;padding:6px 10px;border-radius:8px;color:var(--color-primary);cursor:pointer;font-weight:var(--font-weight-toast-action, 600);font-size:var(--font-size-toast-action, 0.9rem)}
.close{background:transparent;border:0;padding:6px 8px;border-radius:8px;color:var(--color-on-surface);cursor:pointer}
`,this._shadow.appendChild(c),this._shadow.appendChild(t),this._container=t,this._timeout=null,this._onAction=this._onAction.bind(this),this._onClose=this._onClose.bind(this)}connectedCallback(){this._actionBtn.addEventListener("click",this._onAction),this._closeBtn.addEventListener("click",this._onClose)}disconnectedCallback(){this._actionBtn.removeEventListener("click",this._onAction),this._closeBtn.removeEventListener("click",this._onClose),this._clearTimeout()}show(t,{actionText:n="Undo",duration:e=5e3}={}){this._message.textContent=t,this._actionBtn.textContent=n,this._container.classList.add("show"),this._clearTimeout(),e>0&&(this._timeout=setTimeout(()=>this.hide(),e)),this.dispatchEvent(new CustomEvent("show",{bubbles:!0,composed:!0}))}hide(){this._container.classList.remove("show"),this._clearTimeout(),this.dispatchEvent(new CustomEvent("dismiss",{bubbles:!0,composed:!0}))}_onAction(){this.dispatchEvent(new CustomEvent("action",{detail:{message:this._message.textContent},bubbles:!0,composed:!0})),this.hide()}_onClose(){this.hide()}_clearTimeout(){this._timeout&&(clearTimeout(this._timeout),this._timeout=null)}}customElements.get("labs-toast")||customElements.define("labs-toast",r);const d={title:"Components/Toast"},i=()=>{const a=document.createElement("div"),t=document.createElement("labs-toast");document.body.appendChild(t);const n=document.createElement("button");return n.textContent="Show undo toast",n.addEventListener("click",()=>{t.show("Item deleted",{actionText:"Undo",duration:4e3}),t.addEventListener("action",e=>{const o=document.createElement("p");o.textContent=`Action clicked: ${e.detail.message}`,a.appendChild(o)},{once:!0}),t.addEventListener("dismiss",()=>{const e=document.createElement("p");e.textContent="Toast dismissed",a.appendChild(e)},{once:!0})}),a.appendChild(n),a};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const root = document.createElement('div');
  const toast = document.createElement('labs-toast');
  // ensure single instance in document body for demo
  document.body.appendChild(toast);
  const btn = document.createElement('button');
  btn.textContent = 'Show undo toast';
  btn.addEventListener('click', () => {
    toast.show('Item deleted', {
      actionText: 'Undo',
      duration: 4000
    });
    toast.addEventListener('action', e => {
      const p = document.createElement('p');
      p.textContent = \`Action clicked: \${e.detail.message}\`;
      root.appendChild(p);
    }, {
      once: true
    });
    toast.addEventListener('dismiss', () => {
      const p = document.createElement('p');
      p.textContent = 'Toast dismissed';
      root.appendChild(p);
    }, {
      once: true
    });
  });
  root.appendChild(btn);
  return root;
}`,...i.parameters?.docs?.source}}};const l=["Default"];export{i as Default,l as __namedExportsOrder,d as default};
