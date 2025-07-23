import"./iframe-Dc0PHe5e.js";class n extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.innerHTML=`
      <style>
        @import url('../styles/main.css');
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
    `,this._btn=e.querySelector("button")}connectedCallback(){this.hasAttribute("disabled")&&(this._btn.disabled=!0)}static get observedAttributes(){return["disabled"]}attributeChangedCallback(e,a,l){e==="disabled"&&(this._btn.disabled=this.hasAttribute("disabled"))}}customElements.define("labs-button",n);const{fn:s}=__STORYBOOK_MODULE_TEST__,i={title:"Components/Button",tags:["autodocs"],render:t=>Button(t),argTypes:{backgroundColor:{control:"color"},size:{control:{type:"select"},options:["small","medium","large"]}},args:{onClick:s()},parameters:{docs:{description:{component:"Labs Design System Button Web Component."}}}},o=()=>{const t=document.createElement("labs-button");return t.textContent="Primary Button",t},r=()=>{const t=document.createElement("labs-button");return t.textContent="Disabled Button",t.setAttribute("disabled",""),t};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const el = document.createElement('labs-button');
  el.textContent = 'Primary Button';
  return el;
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const el = document.createElement('labs-button');
  el.textContent = 'Disabled Button';
  el.setAttribute('disabled', '');
  return el;
}`,...r.parameters?.docs?.source}}};const d=["Primary","Disabled"];export{r as Disabled,o as Primary,d as __namedExportsOrder,i as default};
