import"./labs-icon-D-jGsLwe.js";class d extends HTMLElement{static get observedAttributes(){return["variant","icon","icon-right","checkmark","label","iconcolor"]}constructor(){super(),this.attachShadow({mode:"open"}),this.animating=!1,this.handleClick=this.handleClick.bind(this)}connectedCallback(){console.log("[LabsButton] LOCAL COMPONENT LOADED - DEMO TEST"),this.render(),this.shadowRoot.querySelector("button").addEventListener("click",this.handleClick)}disconnectedCallback(){this.shadowRoot.querySelector("button").removeEventListener("click",this.handleClick)}attributeChangedCallback(){console.log("[LabsButton] attributeChangedCallback:",{variant:this.getAttribute("variant"),icon:this.getAttribute("icon"),iconRight:this.getAttribute("icon-right"),checkmark:this.getAttribute("checkmark"),label:this.getAttribute("label"),iconcolor:this.getAttribute("iconcolor")}),this.render()}handleClick(n){const t=this.shadowRoot.querySelector("button");if(t.setAttribute("data-active","true"),setTimeout(()=>{t.removeAttribute("data-active")},200),this.hasAttribute("checkmark")){if(this.animating)return;this.animating=!0,t.classList.remove("success"),t.offsetWidth,t.classList.add("success"),setTimeout(()=>{t.classList.remove("success"),this.animating=!1},800)}this.dispatchEvent(new CustomEvent("labs-click",{bubbles:!0}))}render(){const n=this.getAttribute("label")||"",t=n.toLowerCase(),s=this.getAttribute("variant")||"primary";let o=this.getAttribute("iconcolor")||"";if(o.startsWith("var(")){const a=document.createElement("div");a.style.color=o,document.body.appendChild(a),o=getComputedStyle(a).color,document.body.removeChild(a)}let r=o;["add","save"].includes(t)?(o="var(--color-on-primary)",r="var(--color-on-primary)"):["icon left","icon right"].includes(t)?r="#000":["settings","default"].includes(t)&&(r="#fff");const i=a=>a?a.replace(/\.(svg|png|jpg|jpeg)$/i,"").replace(/--fill|--outline|--regular|--solid/gi,"").replace(/-/g,"_"):"",c=i(this.getAttribute("icon"));let e=i(this.getAttribute("icon-right"));!e&&this.hasAttribute("default-icon-right")&&(e="settings");const l=this.hasAttribute("checkmark"),b=t.replace(/\s/g,""),u="";this.shadowRoot.innerHTML=`
      <style>
        :host { 
          display: inline-block; 
          margin: 0;
          padding: 0;
        }
        :host([variant="container"]),
        :host([variant="container-danger"]) {
          display: block;
          width: 100%;
          min-height: 3.5rem;
          margin: 0;
          padding: 0;
        }
        .labs-button {
          font-size: 1.25rem;
          font-weight: 600;
          border: none;
          border-radius: 5rem;
          cursor: pointer;
          transition: background-color 0.2s, color 0.2s, transform 0.1s ease-out;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          overflow: hidden;
          position: relative;
          padding: 0.75rem 1.5rem;
        }
            .labs-button[data-active="true"],
            .labs-button:active {
              transition-duration: 0.05s;
              transform: scale(0.93);
            }
            /* Add: no special-case, uses primary variant like Save */
            /* Settings/Default: on press, bg is white, text/icon are black */
            .labs-button[data-active="true"][data-buttontype="settings"],
            .labs-button:active[data-buttontype="settings"],
            .labs-button[data-active="true"][data-buttontype="default"],
            .labs-button:active[data-buttontype="default"] {
              background: #fff !important;
              color: #000 !important;
            }
            .labs-button[data-active="true"][data-buttontype="settings"] .labs-icon,
            .labs-button:active[data-buttontype="settings"] .labs-icon,
            .labs-button[data-active="true"][data-buttontype="default"] .labs-icon,
            .labs-button:active[data-buttontype="default"] .labs-icon {
              color: #000 !important;
            }
            /* Icon Left/Right: on press, bg is white, text is black, icon is black */
            .labs-button[data-active="true"][data-buttontype="iconleft"],
            .labs-button:active[data-buttontype="iconleft"],
            .labs-button[data-active="true"][data-buttontype="iconright"],
            .labs-button:active[data-buttontype="iconright"] {
              background: #fff !important;
              color: #000 !important;
            }
            .labs-button[data-active="true"][data-buttontype="iconleft"] .labs-icon,
            .labs-button:active[data-buttontype="iconleft"] .labs-icon,
            .labs-button[data-active="true"][data-buttontype="iconright"] .labs-icon,
            .labs-button:active[data-buttontype="iconright"] .labs-icon {
              color: #000 !important;
            }
        
        /* Remove default hover - let variants handle their own hover states */
        
        .labs-button:focus-visible {
          outline: 3px solid rgb(0, 95, 204);
          outline-offset: 2px;
        }
        
        /* Variant Styles */
        .labs-button.primary {
          background: var(--color-primary);
          color: var(--color-on-primary);
        }
        .labs-button.primary:hover {
          background: var(--color-secondary);
        }
        .labs-button.primary:active {
          background: var(--color-primary-darker);
        }
        
        .labs-button.secondary {
          background: var(--color-surface);
          color: var(--color-on-surface);
          border: 2px solid var(--color-primary);
        }
        .labs-button.secondary:hover {
          background: var(--color-hover-light);
        }
        .labs-button.secondary:active {
          background: var(--color-primary-75);
        }
        
        .labs-button.danger {
          background: var(--color-error);
          color: var(--color-on-error);
        }
        .labs-button.danger:hover {
          background: var(--color-error);
          opacity: 0.9;
        }
        .labs-button.danger:active {
          background: var(--color-error);
          opacity: 0.8;
        }
        
        .labs-button.success {
          background: var(--color-success);
          color: var(--color-on-primary);
        }
        .labs-button.success:hover {
          background: var(--color-success);
          opacity: 0.9;
        }
        
        .labs-button.transparent {
          background: transparent;
          color: var(--color-on-surface);
        }
        .labs-button.transparent:hover {
          background: var(--color-hover-light);
        }
        
        /* Icon-only variant */
        .labs-button.icon {
          background: transparent;
          border: none;
          border-radius: 50%;
          padding: 0.5rem;
          min-width: 44px;
          min-height: 44px;
          width: auto;
        }
        .labs-button.icon:hover {
          background: var(--color-hover-light);
        }
        .labs-button.icon:active {
          background: var(--color-primary-75);
        }
        .labs-button.icon .labs-label {
          display: none; /* Hide label in icon variant */
        }
        
        /* Container variants for overlay use */
        .labs-button.container {
          background: transparent;
          color: var(--color-on-surface);
          border-radius: 0.7rem;
          width: 100%;
          min-width: 100%;
          height: 100%;
          box-sizing: border-box;
          justify-content: flex-start;
          padding: 1rem;
        }
        .labs-button.container:hover {
          background: var(--color-hover-light);
        }
        .labs-button.container:active {
          background: var(--color-primary-75);
        }
        
        .labs-button.container-danger {
          background: transparent;
          color: var(--color-error);
          border-radius: 0.7rem;
          width: 100%;
          min-width: 100%;
          height: 100%;
          box-sizing: border-box;
          justify-content: flex-start;
          padding: 1rem;
        }
        .labs-button.container-danger:hover {
          background: var(--color-error);
          color: var(--color-on-error);
        }
        .labs-button.container-danger:active {
          background: var(--color-error);
          color: var(--color-on-error);
          opacity: 0.85;
        }
        .labs-button.container-danger:hover .labs-label,
        .labs-button.container-danger:active .labs-label {
          color: var(--color-on-error);
        }
        
        .labs-icon {
          width: 1.5rem;
          height: 1.5rem;
          display: inline-block;
          vertical-align: middle;
        }
        
        /* Icon colors for container variants */
        .labs-button.container .labs-icon {
          color: var(--color-primary-75);
        }
        .labs-button.container-danger .labs-icon {
          color: var(--color-error);
        }
        .labs-button.container-danger:hover .labs-icon,
        .labs-button.container-danger:active .labs-icon {
          color: var(--color-on-error);
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
        /* Apply icon color filter */
        .labs-icon img {
          filter: ${o==="#fff"||o.toLowerCase()==="white"?"brightness(0) invert(1)":o?"hue-rotate(0deg) saturate(0) brightness(0) invert(1)":"none"};
        }
        /* Ensure right icon is visible and spaced */
        .labs-button labs-icon:last-of-type {
          opacity: 1 !important;
          display: inline-block !important;
        }
      </style>
      <button class="labs-button ${s}" part="button"
        data-buttontype="${b}"
        style="--icon-active-color: ${r}; ${u}">
        ${c?`<labs-icon class="labs-icon" name="${c}" color="${o}"></labs-icon>`:""}
        <span class="labs-label">${n}</span>
        ${e?`<labs-icon class="labs-icon" name="${e}" color="${o}"></labs-icon>`:""}
        ${l?`<span class="labs-checkmark"><labs-icon name="check" class="labs-icon" color="${o||"white"}"></labs-icon></span>`:""}
      </button>
    `}}customElements.define("labs-button",d);
