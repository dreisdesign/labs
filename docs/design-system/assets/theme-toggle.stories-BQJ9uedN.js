import"./labs-icon-8279HnLw.js";class b extends HTMLElement{static get observedAttributes(){return["variant","icon","icon-right","checkmark","label","iconcolor"]}constructor(){super(),this.attachShadow({mode:"open"}),this.animating=!1,this.handleClick=this.handleClick.bind(this)}connectedCallback(){console.log("[LabsButton] LOCAL COMPONENT LOADED - DEMO TEST"),this.render(),this.shadowRoot.querySelector("button").addEventListener("click",this.handleClick)}disconnectedCallback(){this.shadowRoot.querySelector("button").removeEventListener("click",this.handleClick)}attributeChangedCallback(){console.log("[LabsButton] attributeChangedCallback:",{variant:this.getAttribute("variant"),icon:this.getAttribute("icon"),iconRight:this.getAttribute("icon-right"),checkmark:this.getAttribute("checkmark"),label:this.getAttribute("label"),iconcolor:this.getAttribute("iconcolor")}),this.render()}handleClick(e){if(console.log("[LabsButton] handleClick:",{checkmark:this.hasAttribute("checkmark"),label:this.getAttribute("label"),icon:this.getAttribute("icon"),iconRight:this.getAttribute("icon-right")}),this.hasAttribute("checkmark")){if(this.animating)return;this.animating=!0;const t=this.shadowRoot.querySelector("button");t.classList.remove("success"),t.offsetWidth,t.classList.add("success"),setTimeout(()=>{t.classList.remove("success"),this.animating=!1},800)}this.dispatchEvent(new CustomEvent("labs-click",{bubbles:!0}))}render(){const e=this.getAttribute("iconcolor")||"",t=r=>r?r.replace(/\.(svg|png|jpg|jpeg)$/i,"").replace(/--fill|--outline|--regular|--solid/gi,"").replace(/-/g,"_"):"",n=t(this.getAttribute("icon"));let a=t(this.getAttribute("icon-right"));!a&&this.hasAttribute("default-icon-right")&&(a="settings");const s=this.getAttribute("label")||"",c=this.hasAttribute("checkmark"),l=this.getAttribute("variant")||"primary";this.shadowRoot.innerHTML=`
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
          filter: ${e==="#fff"||e.toLowerCase()==="white"?"brightness(0) invert(1)":e?"hue-rotate(0deg) saturate(0) brightness(0) invert(1)":"none"};
        }
        /* Ensure right icon is visible and spaced */
        .labs-button labs-icon:last-of-type {
          opacity: 1 !important;
          display: inline-block !important;
        }
      </style>
      <button class="labs-button ${l}" part="button">
        ${n?`<labs-icon class="labs-icon" name="${n}"></labs-icon>`:""}
        <span class="labs-label">${s}</span>
        ${a?`<labs-icon class="labs-icon" name="${a}"></labs-icon>`:""}
        ${c?'<span class="labs-checkmark"><labs-icon name="check" class="labs-icon"></labs-icon></span>':""}
      </button>
    `}}customElements.define("labs-button",b);const h={title:"Components/Theme/ThemeToggleButton",parameters:{docs:{description:{component:"A theme toggle button using <labs-button> and <labs-icon> that manages only its own UI state."}}}},o=()=>{const i=document.createElement("div");i.innerHTML=`
    <labs-button id="theme-toggle-btn" icon="bedtime" variant="primary" label="Turn on Dark Mode" iconcolor="var(--color-on-primary)"></labs-button>
  `;const e=i.querySelector("#theme-toggle-btn");let t=!1;function n(){e.setAttribute("icon",t?"bedtime_off":"bedtime"),e.setAttribute("label",t?"Turn off Dark Mode":"Turn on Dark Mode"),e.setAttribute("iconcolor","var(--color-on-primary)")}return e.addEventListener("click",()=>{t=!t,n()}),n(),i};o.storyName="Theme Toggle Button";o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  // Create a wrapper div to isolate state
  const wrapper = document.createElement('div');
  wrapper.innerHTML = \`
    <labs-button id="theme-toggle-btn" icon="bedtime" variant="primary" label="Turn on Dark Mode" iconcolor="var(--color-on-primary)"></labs-button>
  \`;
  const btn = wrapper.querySelector('#theme-toggle-btn');
  let isDark = false;
  function updateButton() {
    btn.setAttribute('icon', isDark ? 'bedtime_off' : 'bedtime');
    btn.setAttribute('label', isDark ? 'Turn off Dark Mode' : 'Turn on Dark Mode');
    btn.setAttribute('iconcolor', 'var(--color-on-primary)');
  }
  btn.addEventListener('click', () => {
    isDark = !isDark;
    updateButton();
  });
  updateButton();
  return wrapper;
}`,...o.parameters?.docs?.source}}};const d=["ThemeToggleButton"];export{o as ThemeToggleButton,d as __namedExportsOrder,h as default};
