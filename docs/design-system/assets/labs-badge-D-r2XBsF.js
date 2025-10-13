class t extends HTMLElement{static get observedAttributes(){return["variant","text"]}constructor(){super(),this.attachShadow({mode:"open"}),this._badge=document.createElement("span"),this._badge.className="badge",this._badge.textContent=this.text;const e=document.createElement("style");e.textContent=`:host {
      --badge-padding: 0.25em 0.75em;
      --badge-radius: 6px;
      --badge-font: var(--font-weight-badge, 500) var(--font-size-badge, 0.75rem)/var(--line-height-badge, 1.2) var(--font-family-base, system-ui, sans-serif);
      display: inline-block;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font: var(--badge-font);
      background: var(--color-primary);
      color: var(--color-on-primary);
      border: none;
      border-radius: var(--badge-radius, 6px);
      padding: var(--badge-padding, 0.25em 0.75em);
      min-width: 2em;
      min-height: 1.5em;
      white-space: nowrap;
      transition: background 0.15s, color 0.15s, border 0.15s;
    }
    :host([variant="primary"]) .badge {
      background: var(--color-primary);
      color: var(--color-on-primary);
      border: none;
    }
    :host([variant="secondary"]) .badge {
      background: transparent;
      color: var(--color-on-surface);
      border: 1px solid var(--color-outline, var(--color-primary));
    }
    :host([variant="success"]) .badge {
      background: var(--color-success, #28a745);
      color: var(--color-on-success, #fff);
      border: none;
    }
    :host([variant="warning"]) .badge {
      background: var(--color-warning, #ffc107);
      color: var(--color-on-warning, #000);
      border: none;
    }
    :host([variant="error"]) .badge {
      background: var(--color-error, #dc3545);
      color: var(--color-on-error, #fff);
      border: none;
    }`,this.shadowRoot.appendChild(e),this.shadowRoot.appendChild(this._badge)}get text(){return this.getAttribute("text")||""}set text(e){this.setAttribute("text",e)}attributeChangedCallback(e,o,r){e==="text"&&this._badge&&(this._badge.textContent=r||"")}}customElements.get("labs-badge")||customElements.define("labs-badge",t);
