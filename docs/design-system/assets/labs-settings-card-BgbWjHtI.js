const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./iframe-CWxIXq9l.js","./preload-helper-D9Z9MdNV.js","./iframe-BcqqgJpE.css"])))=>i.map(i=>d[i]);
import{_ as h}from"./preload-helper-D9Z9MdNV.js";class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
          background: inherit;
          box-shadow: none;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.10s cubic-bezier(.4,2,.6,1), color 0.10s cubic-bezier(.4,2,.6,1);
        }
        :host {
          background: var(--color-surface, #fff);
        }
        :host-context(.theme-dark) .close-btn {
          background: var(--color-surface, #181a1b);
        }
        :host-context(.theme-dark) .close-btn:hover,
        :host-context(.theme-dark) .close-btn:focus-visible {
          background: var(--color-surface-hover, #23272a);
        }
        :host-context(.theme-light) .close-btn {
          background: var(--color-surface, #fff);
        }
        :host-context(.theme-light) .close-btn:hover,
        :host-context(.theme-light) .close-btn:focus-visible {
          background: var(--color-surface-hover, #f5f5f5);
        }
        .close-btn:hover,
        .close-btn:focus-visible {
          color: var(--color-on-surface, #222);
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
    `;const l=this.shadowRoot.getElementById("icon-close-btn");l&&l.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))});const r=this.shadowRoot.getElementById("all-apps-btn");if(r){const t="http://localhost:8000/",n="https://dreisdesign.github.io/labs/",a=async()=>{const e=new AbortController,o=setTimeout(()=>e.abort(),600);try{await fetch(t,{mode:"no-cors",signal:e.signal}),window.open(t,"_blank")}catch{window.open(n,"_blank")}finally{clearTimeout(o)}};r.addEventListener("click",e=>{e.preventDefault(),a()})}const c=this.shadowRoot.getElementById("appearance-btn-slot");if(c){let n=function(){const e=document.documentElement.classList.contains("theme-dark");for(;t.firstChild;)t.removeChild(t.firstChild);const o=document.createElement("labs-icon");o.setAttribute("slot","icon-left"),o.setAttribute("name",e?"bedtime_off":"bedtime"),t.appendChild(o),t.appendChild(document.createTextNode(e?"Turn on light mode":"Turn on dark mode"))};const t=document.createElement("labs-button");t.setAttribute("variant","secondary"),t.setAttribute("size","large"),t.style.width="100%",t.style.justifyContent="flex-start",t.style.margin="0",t.style.position="static",t.id="theme-toggle-btn",t.onclick=()=>{const e=document.documentElement.classList.contains("theme-dark"),o=document.documentElement,i=Array.from(o.classList).find(s=>s.startsWith("flavor-")),d=i?i.replace("flavor-",""):"vanilla";h(async()=>{const{applyTheme:s}=await import("./iframe-CWxIXq9l.js").then(b=>b.t);return{applyTheme:s}},__vite__mapDeps([0,1,2]),import.meta.url).then(({applyTheme:s})=>{s({flavor:d,theme:e?"light":"dark"}),n()})};const a=new MutationObserver(()=>n());try{a.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})}catch{}n(),c.appendChild(t)}}}customElements.define("labs-settings-card",u);
