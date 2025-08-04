import"./labs-icon-C4xN8_d9.js";class l extends HTMLElement{static get observedAttributes(){return["variant","icon","icon-right","checkmark","label","iconcolor"]}constructor(){super(),this.attachShadow({mode:"open"}),this.animating=!1,this.handleClick=this.handleClick.bind(this)}connectedCallback(){console.log("[LabsButton] LOCAL COMPONENT LOADED - DEMO TEST"),this.render(),this.shadowRoot.querySelector("button").addEventListener("click",this.handleClick)}disconnectedCallback(){this.shadowRoot.querySelector("button").removeEventListener("click",this.handleClick)}attributeChangedCallback(){console.log("[LabsButton] attributeChangedCallback:",{variant:this.getAttribute("variant"),icon:this.getAttribute("icon"),iconRight:this.getAttribute("icon-right"),checkmark:this.getAttribute("checkmark"),label:this.getAttribute("label"),iconcolor:this.getAttribute("iconcolor")}),this.render()}handleClick(t){if(console.log("[LabsButton] handleClick:",{checkmark:this.hasAttribute("checkmark"),label:this.getAttribute("label"),icon:this.getAttribute("icon"),iconRight:this.getAttribute("icon-right")}),this.hasAttribute("checkmark")){if(this.animating)return;this.animating=!0;const e=this.shadowRoot.querySelector("button");e.classList.remove("success"),e.offsetWidth,e.classList.add("success"),setTimeout(()=>{e.classList.remove("success"),this.animating=!1},800)}this.dispatchEvent(new CustomEvent("labs-click",{bubbles:!0}))}render(){let t=this.getAttribute("iconcolor");const e=this.getAttribute("variant")||"primary";let s="";if(t||(e==="primary"||e==="success"?s="var(--color-on-primary)":e==="danger"||e==="container-danger"?s="var(--color-on-error)":s="var(--color-on-surface)",t=s),t&&t.startsWith("var(")){const i=document.createElement("div");i.style.color=t,document.body.appendChild(i),t=getComputedStyle(i).color,document.body.removeChild(i)}const a=i=>i?i.replace(/\.(svg|png|jpg|jpeg)$/i,"").replace(/--fill|--outline|--regular|--solid/gi,"").replace(/-/g,"_"):"",n=a(this.getAttribute("icon"));let o=a(this.getAttribute("icon-right"));!o&&this.hasAttribute("default-icon-right")&&(o="settings");const r=this.getAttribute("label")||"",c=this.hasAttribute("checkmark");this.shadowRoot.innerHTML=`
      <style>
        :host { display: inline-block; }
        .labs-button {
          font-size: 1.25rem;
          font-weight: 600;
          border: none;
          border-radius: 5rem;
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
        .labs-label {
          text-align: center;
          line-height: 1.2;
          height: 24px;
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .labs-checkmark {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
        }
        .success .labs-label {
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.3s ease-out, transform 0.3s ease-out;
        }
        .success .labs-checkmark {
          opacity: 1;
          transform: scale(1) rotate(0deg);
          animation: rollInCheckmark 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
        }
        @keyframes rollInCheckmark {
          from {
            opacity: 0;
            transform: scale(0.3) rotate(-360deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        /* Ensure right icon is visible and spaced */
        .labs-button labs-icon:last-of-type {
          opacity: 1 !important;
          display: inline-block !important;
        }
      </style>
      <button class="labs-button ${e}" part="button">
        ${n?`<labs-icon class="labs-icon" name="${n}" color="${t}"></labs-icon>`:""}
        <span class="labs-label">${r}</span>
        ${o?`<labs-icon class="labs-icon" name="${o}" color="${t}"></labs-icon>`:""}
        ${c?`<span class="labs-checkmark"><labs-icon name="check" class="labs-icon" color="${t}"></labs-icon></span>`:""}
      </button>
    `}}customElements.define("labs-button",l);
