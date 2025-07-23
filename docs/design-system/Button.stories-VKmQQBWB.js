class s extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=window.location.pathname.includes("/labs/")?"/labs":"";t.innerHTML=`
      <style>
        @import url('${e}/design-system/main.css');
        button {
          font-family: var(--font-family-base);
          font-size: var(--font-size-base);
          font-weight: var(--font-weight-bold);
          border-radius: var(--space-lg);
          background: var(--color-primary);
          color: var(--color-on-primary);
          cursor: pointer;
          padding: var(--space-sm) var(--space-lg);
          border: none;
          transition: background 0.2s, transform 0.1s;
        }
        button:active {
          background: var(--color-secondary);
          transform: scale(0.97);
        }
        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      </style>
      <button part="button"><slot>Button</slot></button>
    `,this._btn=t.querySelector("button")}connectedCallback(){this.hasAttribute("disabled")&&(this._btn.disabled=!0)}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,n){t==="disabled"&&(this._btn.disabled=this.hasAttribute("disabled"))}}customElements.define("labs-button",s);const{fn:a}=__STORYBOOK_MODULE_TEST__,r={title:"Components/Button",tags:["autodocs"],render:o=>Button(o),argTypes:{backgroundColor:{control:"color"},size:{control:{type:"select"},options:["small","medium","large"]}},args:{onClick:a()},parameters:{docs:{description:{component:"Labs Design System Button Web Component."}}}};export{r as default};
