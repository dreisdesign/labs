class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._observer=null,this.render=this.render.bind(this),this.render()}static get observedAttributes(){return["label"]}connectedCallback(){const e=document.documentElement;this._observer=new MutationObserver(s=>{for(const t of s)if(t.attributeName==="class"){this.render();break}}),this._observer.observe(e,{attributes:!0,attributeFilter:["class"]})}disconnectedCallback(){this._observer&&(this._observer.disconnect(),this._observer=null)}attributeChangedCallback(){this.render()}getFlavorName(){const e=[...document.documentElement.classList].find(t=>t.startsWith("flavor-"));return e?e.split("-").slice(1).join("-").split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" "):null}render(){const e=this.getFlavorName(),s=this.getAttribute("label"),t=this.getAttribute("variant")||"secondary",c=e||s||"Flavor";this.shadowRoot.innerHTML=`
      <style>
        :host { display: block; }
        labs-button { width: 100%; box-sizing: border-box; }
      </style>
    <labs-button variant="${t}" size="large" style="gap:10px; justify-content:flex-start;">
        <labs-icon name="colors" slot="icon-left" width="20" height="20"></labs-icon>
        ${c}
      </labs-button>
    `;const a=this.shadowRoot.querySelector("labs-button");a&&a.addEventListener("click",b=>{b.preventDefault();const r=["vanilla","blueberry","strawberry"],n=document.documentElement,l=[...n.classList].find(o=>o&&o.startsWith("flavor-")),u=l?l.split("-").slice(1).join("-"):null,d=Math.max(0,r.indexOf(u)),i=r[(d+1)%r.length];for(const o of r)n.classList.remove(`flavor-${o}`);n.classList.add(`flavor-${i}`),this.render(),this.dispatchEvent(new CustomEvent("cycle-flavor",{detail:{flavor:i},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("click",{bubbles:!0,composed:!0}))})}}customElements.define("labs-flavor-button",h);export{h as default};
