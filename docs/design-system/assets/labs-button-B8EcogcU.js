import"./labs-icon-CrKMoNQo.js";class d extends HTMLElement{static get observedAttributes(){return["variant","icon","icon-right","checkmark","label","iconcolor"]}constructor(){super(),this.attachShadow({mode:"open"}),this.animating=!1,this.handleClick=this.handleClick.bind(this)}connectedCallback(){console.log("[LabsButton] LOCAL COMPONENT LOADED - DEMO TEST"),this.render(),this.shadowRoot.querySelector("button").addEventListener("click",this.handleClick)}disconnectedCallback(){this.shadowRoot.querySelector("button").removeEventListener("click",this.handleClick)}attributeChangedCallback(){console.log("[LabsButton] attributeChangedCallback:",{variant:this.getAttribute("variant"),icon:this.getAttribute("icon"),iconRight:this.getAttribute("icon-right"),checkmark:this.getAttribute("checkmark"),label:this.getAttribute("label"),iconcolor:this.getAttribute("iconcolor")}),this.render()}handleClick(n){const t=this.shadowRoot.querySelector("button");if(t.setAttribute("data-active","true"),setTimeout(()=>{t.removeAttribute("data-active")},200),this.hasAttribute("checkmark")){if(this.animating)return;this.animating=!0,t.classList.remove("success"),t.offsetWidth,t.classList.add("success"),setTimeout(()=>{t.classList.remove("success"),this.animating=!1},800)}this.dispatchEvent(new CustomEvent("labs-click",{bubbles:!0}))}render(){const n=this.getAttribute("label")||"",t=n.toLowerCase(),s=this.getAttribute("variant")||"primary";let a=this.getAttribute("iconcolor")||"";if(a.startsWith("var(")){const o=document.createElement("div");o.style.color=a,document.body.appendChild(o),a=getComputedStyle(o).color,document.body.removeChild(o)}let e=a;t==="add"?(a="var(--add-icon-color, #000)",e="#fff"):t==="save"?(a="#fff",e="#fff"):["icon left","icon right"].includes(t)?e="#000":["settings","default"].includes(t)&&(e="#fff");const i=o=>o?o.replace(/\.(svg|png|jpg|jpeg)$/i,"").replace(/--fill|--outline|--regular|--solid/gi,"").replace(/-/g,"_"):"",c=i(this.getAttribute("icon"));let r=i(this.getAttribute("icon-right"));!r&&this.hasAttribute("default-icon-right")&&(r="settings");const l=this.hasAttribute("checkmark"),b=t.replace(/\s/g,""),u=t==="add"?`--add-icon-color: ${this.hasAttribute("data-active")?"#fff":"#000"};`:"";this.shadowRoot.innerHTML=`
      <style>
        :host { display: inline-block; }
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
            /* Add: default is white bg, black text/icon; on press, black bg, white text/icon */
            .labs-button[data-buttontype="add"] {
              background: #fff !important;
              color: #000 !important;
            }
            .labs-button[data-buttontype="add"] .labs-icon {
              color: #000 !important;
            }
            .labs-button[data-active="true"][data-buttontype="add"],
            .labs-button:active[data-buttontype="add"] {
              background: #000 !important;
              color: #fff !important;
            }
            .labs-button[data-active="true"][data-buttontype="add"] .labs-icon,
            .labs-button:active[data-buttontype="add"] .labs-icon {
              color: #fff !important;
            }
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
        .labs-button:hover {
          background: rgb(13, 11, 63);
        }
        
        /* Container variants should not have default hover styles */
        .labs-button.container:hover,
        .labs-button.container-danger:hover {
          background: transparent;
          transform: none;
        }
        .labs-button.container:active,
        .labs-button.container-danger:active {
          background: transparent;
          transform: none;
        }
        
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
          background: var(--color-primary-25);
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
          background: var(--color-primary-25);
        }
        
        /* Container variants for overlay use */
        .labs-button.container {
          background: transparent;
          color: var(--color-on-surface);
          border-radius: 0.7rem;
        }
        .labs-button.container:hover {
          background: var(--color-primary-25);
        }
        .labs-button.container:active {
          background: var(--color-primary-75);
        }
        
        .labs-button.container-danger {
          background: transparent;
          color: var(--color-error);
          border-radius: 0.7rem;
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
          filter: ${a==="#fff"||a.toLowerCase()==="white"?"brightness(0) invert(1)":a?"hue-rotate(0deg) saturate(0) brightness(0) invert(1)":"none"};
        }
        /* Ensure right icon is visible and spaced */
        .labs-button labs-icon:last-of-type {
          opacity: 1 !important;
          display: inline-block !important;
        }
      </style>
      <button class="labs-button ${s}" part="button"
        data-buttontype="${b}"
        style="--icon-active-color: ${e}; ${u}">
        ${c?`<labs-icon class="labs-icon" name="${c}" color="${a}"></labs-icon>`:""}
        <span class="labs-label">${n}</span>
        ${r?`<labs-icon class="labs-icon" name="${r}" color="${a}"></labs-icon>`:""}
        ${l?`<span class="labs-checkmark"><labs-icon name="check" class="labs-icon" color="${a||"white"}"></labs-icon></span>`:""}
      </button>
    `}}customElements.define("labs-button",d);
