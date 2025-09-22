const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./iframe-uJWqsDVy.js","./preload-helper-PPVm8Dsz.js","./iframe-CzszD6LP.css"])))=>i.map(i=>d[i]);
import{_ as h}from"./preload-helper-PPVm8Dsz.js";class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
    `;const b=this.shadowRoot.getElementById("icon-close-btn");b&&b.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))});const u=this.shadowRoot.getElementById("all-apps-btn");if(u){const e="http://localhost:8000/",a="/labs/",r=typeof window<"u"&&window.location&&(window.location.hostname.includes("localhost")||window.location.hostname==="127.0.0.1"),i=async()=>{if(!r){window.open(a,"_blank");return}const s=new AbortController,t=setTimeout(()=>s.abort(),600);try{await fetch(e,{mode:"no-cors",signal:s.signal}),window.open(e,"_blank")}catch{window.open(a,"_blank")}finally{clearTimeout(t)}};u.addEventListener("click",s=>{s.preventDefault(),i()})}const l=this.shadowRoot.getElementById("appearance-btn-slot");if(l){let a=function(){const t=document.documentElement.classList.contains("theme-dark");for(;e.firstChild;)e.removeChild(e.firstChild);const o=document.createElement("labs-icon");o.setAttribute("slot","icon-left"),o.setAttribute("name",t?"bedtime_off":"bedtime"),e.appendChild(o),e.appendChild(document.createTextNode(t?"Turn on light mode":"Turn on dark mode"))};const e=document.createElement("labs-button");e.setAttribute("variant","secondary"),e.setAttribute("size","large"),e.style.width="100%",e.style.justifyContent="flex-start",e.style.margin="0",e.style.position="static",e.id="theme-toggle-btn",e.onclick=()=>{const t=document.documentElement.classList.contains("theme-dark"),o=document.documentElement,c=Array.from(o.classList).find(n=>n.startsWith("flavor-")),d=c?c.replace("flavor-",""):"vanilla";h(async()=>{const{applyTheme:n}=await import("./iframe-uJWqsDVy.js").then(m=>m.t);return{applyTheme:n}},__vite__mapDeps([0,1,2]),import.meta.url).then(({applyTheme:n})=>{n({flavor:d,theme:t?"light":"dark"}),a()})};const r=new MutationObserver(()=>a());try{r.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})}catch{}a(),l.appendChild(e),h(()=>import("./labs-flavor-button-CmhZR9Hc.js"),[],import.meta.url).then(()=>{const t=document.createElement("labs-flavor-button"),o=Array.from(document.documentElement.classList).find(n=>n&&n.startsWith("flavor-")),d=(o?o.replace("flavor-",""):"blueberry").split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" ");t.setAttribute("label",d),this.shadowRoot.getElementById("flavor-btn")||l.appendChild(t),t.addEventListener("cycle-flavor",n=>{this.dispatchEvent(new CustomEvent("flavor-changed",{detail:n.detail,bubbles:!0,composed:!0}))})}).catch(()=>{});const i=this.shadowRoot.getElementById("reset-all-btn");i&&i.addEventListener("click",t=>{t.preventDefault(),window.confirm("Warning: This will delete all entries. Are you sure you want to continue?")&&(this.dispatchEvent(new CustomEvent("reset-all",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})))});const s=this.shadowRoot.getElementById("simulate-next-btn");if(s){try{const t=new URL(window.location.href),o=t.searchParams.get("simulate")||t.searchParams.get("simulateNext");(o==="1"||o==="true")&&(s.style.display="")}catch{}s.addEventListener("click",t=>{t.preventDefault(),this.dispatchEvent(new CustomEvent("simulate-next-day",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))})}}}}customElements.define("labs-settings-card",p);
