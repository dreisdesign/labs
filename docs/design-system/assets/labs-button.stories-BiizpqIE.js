class k extends HTMLElement{static get observedAttributes(){return["variant","icon","icon-right","checkmark","checkmark-icon","label","iconcolor"]}constructor(){super(),this.attachShadow({mode:"open"}),this.animating=!1,this.handleClick=this.handleClick.bind(this)}connectedCallback(){this.render(),this.shadowRoot.querySelector("button").addEventListener("click",this.handleClick)}disconnectedCallback(){this.shadowRoot.querySelector("button").removeEventListener("click",this.handleClick)}attributeChangedCallback(){console.log("[LabsButton] attributeChangedCallback:",{variant:this.getAttribute("variant"),icon:this.getAttribute("icon"),iconRight:this.getAttribute("icon-right"),checkmark:this.getAttribute("checkmark"),checkmarkIcon:this.getAttribute("checkmark-icon"),label:this.getAttribute("label"),iconcolor:this.getAttribute("iconcolor")}),this.render()}handleClick(n){if(console.log("[LabsButton] handleClick:",{checkmark:this.hasAttribute("checkmark"),label:this.getAttribute("label"),icon:this.getAttribute("icon"),iconRight:this.getAttribute("icon-right")}),this.hasAttribute("checkmark")){if(this.animating)return;this.animating=!0;const t=this.shadowRoot.querySelector("button");t.classList.remove("success"),t.offsetWidth,t.classList.add("success"),setTimeout(()=>{t.classList.remove("success"),this.animating=!1},800)}this.dispatchEvent(new CustomEvent("labs-click",{bubbles:!0}))}render(){const n=this.getAttribute("iconcolor")||"",t=n?`filter: ${n==="#fff"||n.toLowerCase()==="white"?"brightness(0) invert(1)":""}; color: ${n};`:"",r=this.getAttribute("icon");let o=this.getAttribute("icon-right");!o&&this.hasAttribute("default-icon-right")&&(o="assets/icons/settings--fill.svg");const s=this.getAttribute("checkmark-icon")||"assets/icons/check--fill.svg",b=this.getAttribute("label")||"",m=this.hasAttribute("checkmark"),u=this.getAttribute("variant")||"primary";this.shadowRoot.innerHTML=`
      <style>
        :host { display: inline-block; }
        .labs-button {
          font-size: 1.25rem;
          font-weight: 600;
          border: none;
          border-radius: 5rem;
          background: rgb(46, 43, 116);
          color: #fff;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.1s ease-out;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          overflow: hidden;
          position: relative;
          padding: 0.75rem 1.5rem;
        }
        .labs-button:active,
        .labs-button.button-pressed {
          background-color: rgb(25, 23, 80);
          transform: scale(0.95);
          transition-duration: 0.05s;
        }
        .labs-button:hover {
          background: rgb(13, 11, 63);
        }
        .labs-button:focus-visible {
          outline: 3px solid rgb(0, 95, 204);
          outline-offset: 2px;
        }
        .labs-icon {
          width: 1.5rem;
          height: 1.5rem;
          display: inline-block;
          vertical-align: middle;
        }
                .labs-label {
                  text-align: center;
                  line-height: 1.2;
                  height: 24px;
                  white-space: nowrap;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
                .checkmark-icon {
                  display: none;
                  position: absolute;
                  width: 1.5rem;
                  height: 1.5rem;
                }
                .success .labs-label, .success .labs-icon:not(.checkmark-icon) {
                  animation: fadeOut 0.3s forwards;
                }
                .success .checkmark-icon {
                  display: inline-block;
                  animation: fadeIn 0.3s forwards;
                }
                @keyframes fadeOut {
                  from { opacity: 1; transform: scale(1); }
                  to { opacity: 0; transform: scale(0.8); }
                }
                @keyframes fadeIn {
                  from { opacity: 0; transform: scale(0.8); }
                  to { opacity: 1; transform: scale(1); }
                }
              </style>
              <button class="labs-button ${u}" part="button">
                ${r?`<img src="${r}" class="labs-icon" style="${t}" alt=""/>`:""}
                <span class="labs-label">${b}</span>
                ${o?`<img src="${o}" class="labs-icon" style="${t}" alt=""/>`:""}
                ${m?`<img src="${s}" class="labs-icon checkmark-icon" alt="Success"/>`:""}
              </button>
            `}}customElements.define("labs-button",k);const g={title:"Components/Button",argTypes:{label:{control:"text"},icon:{control:"text"},iconRight:{control:"text"},checkmark:{control:"boolean"},variant:{control:"text"},iconColor:{control:"color",name:"Icon Color"}}},l=({label:h,icon:n,iconRight:t,checkmark:r,variant:o,iconColor:s})=>`
    <labs-button
      label="${h||""}"
      ${n?`icon="${n}"`:""}
      ${t?`icon-right="${t}"`:""}
      ${r?"checkmark":""}
      variant="${o||"primary"}"
      ${s?`iconcolor="${s}"`:""}
    ></labs-button>
  `,e=l.bind({});e.args={label:"Primary Button",checkmark:!1,variant:"primary",iconColor:""};e.storyName="Primary";const a=l.bind({});a.args={label:"Icon Left",icon:"assets/icons/undo.svg",checkmark:!1,variant:"primary",iconColor:"#fff"};const c=l.bind({});c.args={label:"Icon Right",iconRight:"assets/icons/settings--fill.svg",checkmark:!1,variant:"primary",iconColor:"#fff"};const i=l.bind({});i.args={label:"+ Add",checkmark:!0,variant:"primary",iconColor:""};i.storyName="On click: Checkmark";e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  label,
  icon,
  iconRight,
  checkmark,
  variant,
  iconColor
}) => {
  return \`
    <labs-button
      label="\${label || ''}"
      \${icon ? \`icon="\${icon}"\` : ''}
      \${iconRight ? \`icon-right="\${iconRight}"\` : ''}
      \${checkmark ? 'checkmark' : ''}
      variant="\${variant || 'primary'}"
      \${iconColor ? \`iconcolor="\${iconColor}"\` : ''}
    ></labs-button>
  \`;
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  label,
  icon,
  iconRight,
  checkmark,
  variant,
  iconColor
}) => {
  return \`
    <labs-button
      label="\${label || ''}"
      \${icon ? \`icon="\${icon}"\` : ''}
      \${iconRight ? \`icon-right="\${iconRight}"\` : ''}
      \${checkmark ? 'checkmark' : ''}
      variant="\${variant || 'primary'}"
      \${iconColor ? \`iconcolor="\${iconColor}"\` : ''}
    ></labs-button>
  \`;
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  label,
  icon,
  iconRight,
  checkmark,
  variant,
  iconColor
}) => {
  return \`
    <labs-button
      label="\${label || ''}"
      \${icon ? \`icon="\${icon}"\` : ''}
      \${iconRight ? \`icon-right="\${iconRight}"\` : ''}
      \${checkmark ? 'checkmark' : ''}
      variant="\${variant || 'primary'}"
      \${iconColor ? \`iconcolor="\${iconColor}"\` : ''}
    ></labs-button>
  \`;
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  label,
  icon,
  iconRight,
  checkmark,
  variant,
  iconColor
}) => {
  return \`
    <labs-button
      label="\${label || ''}"
      \${icon ? \`icon="\${icon}"\` : ''}
      \${iconRight ? \`icon-right="\${iconRight}"\` : ''}
      \${checkmark ? 'checkmark' : ''}
      variant="\${variant || 'primary'}"
      \${iconColor ? \`iconcolor="\${iconColor}"\` : ''}
    ></labs-button>
  \`;
}`,...i.parameters?.docs?.source}}};const d=["Default","IconLeft","IconRight","WithCheckmark"];export{e as Default,a as IconLeft,c as IconRight,i as WithCheckmark,d as __namedExportsOrder,g as default};
