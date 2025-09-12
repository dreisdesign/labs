const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./iframe-DqYqYabm.js","./preload-helper-D9Z9MdNV.js","./iframe-oFT66fZk.css"])))=>i.map(i=>d[i]);
import{_ as m}from"./preload-helper-D9Z9MdNV.js";class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
        <labs-button id="all-apps-btn" variant="secondary" style="gap:10px;">
          <labs-icon name="apps" slot="icon-left"></labs-icon>
          All Apps
        </labs-button>
        <div id="appearance-btn-slot"></div>
        <labs-button id="simulate-next-btn" variant="secondary" style="gap:10px; display:none;">
          <labs-icon name="add" slot="icon-left" width="20" height="20"></labs-icon>
          Simulate Next Day
        </labs-button>
        <labs-button id="reset-all-btn" variant="destructive" style="gap:10px;">
          <labs-icon name="delete" slot="icon-left" width="20" height="20" color="var(--color-on-error)"></labs-icon>
          Reset All Data
        </labs-button>
      </div>
    `;const r=this.shadowRoot.getElementById("icon-close-btn");r&&r.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))});const c=this.shadowRoot.getElementById("all-apps-btn");if(c){const t="http://localhost:8000/",s="https://dreisdesign.github.io/labs/",l=async()=>{const n=new AbortController,i=setTimeout(()=>n.abort(),600);try{await fetch(t,{mode:"no-cors",signal:n.signal}),window.open(t,"_blank")}catch{window.open(s,"_blank")}finally{clearTimeout(i)}};c.addEventListener("click",n=>{n.preventDefault(),l()})}const d=this.shadowRoot.getElementById("appearance-btn-slot");if(d){let s=function(){const e=document.documentElement.classList.contains("theme-dark");for(;t.firstChild;)t.removeChild(t.firstChild);const o=document.createElement("labs-icon");o.setAttribute("slot","icon-left"),o.setAttribute("name",e?"bedtime_off":"bedtime"),t.appendChild(o),t.appendChild(document.createTextNode(e?"Turn on light mode":"Turn on dark mode"))};const t=document.createElement("labs-button");t.setAttribute("variant","secondary"),t.setAttribute("size","large"),t.style.width="100%",t.style.justifyContent="flex-start",t.style.margin="0",t.style.position="static",t.id="theme-toggle-btn",t.onclick=()=>{const e=document.documentElement.classList.contains("theme-dark"),o=document.documentElement,b=Array.from(o.classList).find(a=>a.startsWith("flavor-")),u=b?b.replace("flavor-",""):"vanilla";m(async()=>{const{applyTheme:a}=await import("./iframe-DqYqYabm.js").then(h=>h.t);return{applyTheme:a}},__vite__mapDeps([0,1,2]),import.meta.url).then(({applyTheme:a})=>{a({flavor:u,theme:e?"light":"dark"}),s()})};const l=new MutationObserver(()=>s());try{l.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})}catch{}s(),d.appendChild(t);const n=this.shadowRoot.getElementById("reset-all-btn");n&&n.addEventListener("click",e=>{e.preventDefault(),window.confirm("Warning: This will delete all entries. Are you sure you want to continue?")&&(this.dispatchEvent(new CustomEvent("reset-all",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})))});const i=this.shadowRoot.getElementById("simulate-next-btn");if(i){try{const e=new URL(window.location.href),o=e.searchParams.get("simulate")||e.searchParams.get("simulateNext");(o==="1"||o==="true")&&(i.style.display="")}catch{}i.addEventListener("click",e=>{e.preventDefault(),this.dispatchEvent(new CustomEvent("simulate-next-day",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))})}}}}customElements.define("labs-settings-card",p);
