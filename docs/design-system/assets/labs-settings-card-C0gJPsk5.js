const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./iframe-h_PT_nLs.js","./preload-helper-PPVm8Dsz.js","./iframe-CzszD6LP.css"])))=>i.map(i=>d[i]);
import{_ as g}from"./preload-helper-PPVm8Dsz.js";class w extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
        /* Layout for appearance slot: ensure buttons inside are stacked with spacing */
        .settings-list #appearance-btn-slot {
          display: flex;
          flex-direction: column;
          gap: 12px;
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
        /* Fix icon color in destructive buttons: ensure icon inherits semantic error color */
        labs-button[variant="destructive"] labs-icon,
        labs-button[variant="destructive"] ::slotted(labs-icon) {
          color: var(--color-on-error, #fff);
        }
      </style>
      <div class="header-row">
        <h3>Settings</h3>
        <labs-button id="icon-close-btn" class="close-btn" variant="icon" aria-label="Close">
          <labs-icon name="close" slot="icon-left" width="28" height="28"></labs-icon>
        </labs-button>
      </div>
      <div class="settings-list">
        <labs-button id="all-apps-btn" variant="secondary" size="large" style="gap:10px;">
          <labs-icon name="apps" slot="icon-left"></labs-icon>
          All Apps
        </labs-button>
        <div id="appearance-btn-slot"></div>
        <labs-button id="simulate-next-btn" variant="secondary" size="large" style="gap:10px; display:none;">
          <labs-icon name="add" slot="icon-left" width="20" height="20"></labs-icon>
          Simulate Next Day
        </labs-button>
        <labs-button id="reset-all-btn" variant="destructive" size="large" style="gap:10px;">
          <labs-icon name="delete" slot="icon-left" width="20" height="20" color="var(--color-on-error)"></labs-icon>
          Reset All Data
        </labs-button>
      </div>
    `;const d=this.shadowRoot.getElementById("icon-close-btn");d&&d.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))});const b=this.shadowRoot.getElementById("all-apps-btn");if(b){const e="http://localhost:8000/",s="/labs/",r=typeof window<"u"&&window.location&&(window.location.hostname.includes("localhost")||window.location.hostname==="127.0.0.1"),i=async()=>{if(!r){window.open(s,"_blank");return}const n=new AbortController,u=setTimeout(()=>n.abort(),600);try{await fetch(e,{mode:"no-cors",signal:n.signal}),window.open(e,"_blank")}catch{window.open(s,"_blank")}finally{clearTimeout(u)}};b.addEventListener("click",n=>{n.preventDefault(),i()})}const l=this.shadowRoot.getElementById("appearance-btn-slot");if(l){let s=function(){const t=document.documentElement.classList.contains("theme-dark");for(;e.firstChild;)e.removeChild(e.firstChild);const o=document.createElement("labs-icon");o.setAttribute("slot","icon-left"),o.setAttribute("name",t?"bedtime_off":"bedtime"),e.appendChild(o),e.appendChild(document.createTextNode(t?"Turn on light mode":"Turn on dark mode"))};const e=document.createElement("labs-button");e.setAttribute("variant","secondary"),e.setAttribute("size","large"),e.style.width="100%",e.style.justifyContent="flex-start",e.style.margin="0",e.style.position="static",e.id="theme-toggle-btn",e.onclick=()=>{const t=document.documentElement.classList.contains("theme-dark"),o=document.documentElement,p=Array.from(o.classList).find(a=>a.startsWith("flavor-")),f=p?p.replace("flavor-",""):"vanilla";g(async()=>{const{applyTheme:a}=await import("./iframe-h_PT_nLs.js").then(v=>v.t);return{applyTheme:a}},__vite__mapDeps([0,1,2]),import.meta.url).then(({applyTheme:a})=>{a({flavor:f,theme:t?"light":"dark"}),s()})};const r=new MutationObserver(()=>s());try{r.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})}catch{}s(),l.appendChild(e);const i=document.createElement("labs-flavor-button"),n=Array.from(document.documentElement.classList).find(t=>t&&t.startsWith("flavor-")),h=(n?n.replace("flavor-",""):"blueberry").split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ");i.setAttribute("label",h),this.shadowRoot.getElementById("flavor-btn")||l.appendChild(i);const m=this.shadowRoot.getElementById("reset-all-btn");m&&m.addEventListener("click",t=>{t.preventDefault(),window.confirm("Warning: This will delete all entries. Are you sure you want to continue?")&&(this.dispatchEvent(new CustomEvent("reset-all",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})))});const c=this.shadowRoot.getElementById("simulate-next-btn");if(c){try{const t=new URL(window.location.href),o=t.searchParams.get("simulate")||t.searchParams.get("simulateNext");(o==="1"||o==="true")&&(c.style.display="")}catch{}c.addEventListener("click",t=>{t.preventDefault(),this.dispatchEvent(new CustomEvent("simulate-next-day",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))})}}}}customElements.define("labs-settings-card",w);
