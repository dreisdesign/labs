import"./iframe-63MKswns.js";import"./preload-helper-D9Z9MdNV.js";class f extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._observer=null,this.render=this.render.bind(this),this.render()}static get observedAttributes(){return["label"]}connectedCallback(){const e=document.documentElement;this._observer=new MutationObserver(r=>{for(const t of r)if(t.attributeName==="class"){this.render();break}}),this._observer.observe(e,{attributes:!0,attributeFilter:["class"]})}disconnectedCallback(){this._observer&&(this._observer.disconnect(),this._observer=null)}attributeChangedCallback(){this.render()}getFlavorName(){const e=[...document.documentElement.classList].find(t=>t.startsWith("flavor-"));return e?e.split("-").slice(1).join("-").split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" "):null}render(){const e=this.getFlavorName(),r=this.getAttribute("label"),t=this.getAttribute("variant")||"secondary",u=e||r||"Flavor";this.shadowRoot.innerHTML=`
      <style>
        :host { display: block; }
        labs-button { width: 100%; box-sizing: border-box; }
      </style>
    <labs-button variant="${t}" size="large" style="gap:10px; justify-content:flex-start;">
        <labs-icon name="colors" slot="icon-left" width="20" height="20"></labs-icon>
        ${u}
      </labs-button>
    `;const i=this.shadowRoot.querySelector("labs-button");i&&i.addEventListener("click",d=>{d.preventDefault();const s=["vanilla","blueberry","strawberry"],n=document.documentElement,c=[...n.classList].find(a=>a&&a.startsWith("flavor-")),v=c?c.split("-").slice(1).join("-"):null,m=Math.max(0,s.indexOf(v)),b=s[(m+1)%s.length];for(const a of s)n.classList.remove(`flavor-${a}`);n.classList.add(`flavor-${b}`),this.render(),this.dispatchEvent(new CustomEvent("cycle-flavor",{detail:{flavor:b},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("click",{bubbles:!0,composed:!0}))})}}customElements.define("labs-flavor-button",f);const y={title:"Patterns/Flavor Button",argTypes:{variant:{control:{type:"select",options:["primary","secondary","destructive","icon"]}},flavor:{control:"text"}}},o=({flavor:l="blueberry",variant:e="secondary"})=>{const r=document.createElement("div");r.style.maxWidth="360px",r.innerHTML=`<labs-flavor-button variant="${e}"></labs-flavor-button>`;const t=document.documentElement;return t.classList.remove("flavor-vanilla","flavor-blueberry","flavor-strawberry"),t.classList.add(`flavor-${l.toLowerCase()}`),r};o.args={flavor:"blueberry",variant:"secondary"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  flavor = 'blueberry',
  variant = 'secondary'
}) => {
  const wrap = document.createElement('div');
  wrap.style.maxWidth = '360px';
  wrap.innerHTML = \`<labs-flavor-button variant="\${variant}"></labs-flavor-button>\`;
  // Set initial flavor based on the story arg. The component will handle subsequent cycles.
  const root = document.documentElement;
  root.classList.remove('flavor-vanilla', 'flavor-blueberry', 'flavor-strawberry');
  root.classList.add(\`flavor-\${flavor.toLowerCase()}\`);
  return wrap;
}`,...o.parameters?.docs?.source}}};const w=["FlavorButton"];export{o as FlavorButton,w as __namedExportsOrder,y as default};
