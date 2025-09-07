const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./iframe-DJqNhYZN.js","./preload-helper-D9Z9MdNV.js","./iframe-D9gWr3C5.css"])))=>i.map(i=>d[i]);
import{_ as m}from"./preload-helper-D9Z9MdNV.js";import"./iframe-DJqNhYZN.js";class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          max-width: 340px;
          margin: 0 auto;
          background: var(--color-surface, #fff);
          border-radius: 18px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.10), 0 1.5px 4px rgba(0,0,0,0.04);
          padding: 28px 24px 20px 24px;
          font-family: var(--font-family-base, system-ui, sans-serif);
          position: relative;
        }
        .header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }
        .close-btn {
          width: 40px;
          height: 40px;
          min-width: 40px;
          min-height: 40px;
          border-radius: 50%;
          position: static;
          background: none;
          box-shadow: none;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.18s cubic-bezier(.4,2,.6,1);
        }
        .close-btn:hover,
        .close-btn:focus-visible {
          background: var(--color-surface-variant, #e0e0e0);
        }
        .close-btn labs-icon {
          --icon-size: 28px;
        }
        h3 {
          margin: 0;
          font-size: 1.18rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }
        .settings-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .settings-list labs-button {
          width: 100%;
          box-sizing: border-box;
        }
        .settings-actions {
          display: none;
        }
        /* Icon hover animation for settings icon in icon-only button */
        labs-button[variant="icon"] labs-icon[name="settings"] {
          transition: transform 0.3s cubic-bezier(.4,2,.6,1);
        }
        labs-button[variant="icon"]:hover labs-icon[name="settings"] {
          transform: rotate(180deg);
        }
      </style>
      <div class="header-row">
        <h3>Settings</h3>
        <labs-button id="icon-close-btn" class="close-btn" variant="icon" aria-label="Close">
          <labs-icon name="close" slot="icon-left" width="28" height="28"></labs-icon>
        </labs-button>
      </div>
      <div class="settings-list">
        <labs-button id="all-apps-btn" variant="secondary" style="gap:10px;">
          <labs-icon name="apps" slot="icon-left"></labs-icon>
          All Apps
        </labs-button>
        <div id="appearance-btn-slot"></div>
        <labs-button id="reset-all-btn" variant="destructive" style="gap:10px;">
          Reset All Data
        </labs-button>
      </div>
    `;const i=this.shadowRoot.getElementById("icon-close-btn");i&&i.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))});const r=this.shadowRoot.getElementById("appearance-btn-slot");if(r){let o=function(){const e=document.documentElement.classList.contains("theme-dark");for(;t.firstChild;)t.removeChild(t.firstChild);const s=document.createElement("labs-icon");s.setAttribute("slot","icon-left"),s.setAttribute("name",e?"bedtime_off":"bedtime"),t.appendChild(s),t.appendChild(document.createTextNode(e?"Turn on light mode":"Turn on dark mode"))};const t=document.createElement("labs-button");t.setAttribute("variant","secondary"),t.setAttribute("size","large"),t.style.width="100%",t.style.justifyContent="flex-start",t.style.margin="0",t.style.position="static",t.id="theme-toggle-btn",t.onclick=()=>{const e=document.documentElement.classList.contains("theme-dark"),s=document.documentElement,c=Array.from(s.classList).find(n=>n.startsWith("flavor-")),d=c?c.replace("flavor-",""):"vanilla";m(async()=>{const{applyTheme:n}=await import("./iframe-DJqNhYZN.js").then(b=>b.t);return{applyTheme:n}},__vite__mapDeps([0,1,2]),import.meta.url).then(({applyTheme:n})=>{n({flavor:d,theme:e?"light":"dark"}),o()})};const l=new MutationObserver(()=>o());try{l.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})}catch{}o(),r.appendChild(t)}}}customElements.define("labs-settings-card",p);const f={title:"Patterns/Cards/Settings Card",parameters:{docs:{description:{component:"A settings card pattern matching the Tracker app, using Labs Button components."}}}},a={render:()=>`
    <labs-settings-card></labs-settings-card>
  `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <labs-settings-card></labs-settings-card>
  \`
}`,...a.parameters?.docs?.source}}};const v=["SettingsCard"];export{a as SettingsCard,v as __namedExportsOrder,f as default};
