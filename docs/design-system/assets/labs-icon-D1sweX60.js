const e=(()=>{const r=window.location.pathname;return window.location.hostname==="dreisdesign.github.io"?"/labs/design-system/icons/":r.includes("iframe.html")||r.includes("storybook")||window.parent!==window?"/icons/":"/design-system/icons/"})(),g={add:e+"add--labs-icons.svg",add_circle:e+"add_circle--labs-icons.svg",add_comment:e+"add_comment--labs-icons.svg",apps:e+"apps--labs-icons.svg",bedtime:e+"bedtime--labs-icons.svg",bedtime_off:e+"bedtime_off--labs-icons.svg",build:e+"build--labs-icons.svg",cancel:e+"cancel--labs-icons.svg",change_circle:e+"change_circle--labs-icons.svg",check:e+"check--labs-icons.svg",check_box:e+"check_box--labs-icons.svg",check_box_outline_blank:e+"check_box_outline_blank--labs-icons.svg",check_indeterminate_small:e+"check_indeterminate_small--labs-icons.svg",close:e+"close--labs-icons.svg",code:e+"code--labs-icons.svg",comment:e+"comment--labs-icons.svg",content_copy:e+"content_copy--labs-icons.svg",delete_forever:e+"delete_forever--labs-icons.svg",edit:e+"edit--labs-icons.svg",history:e+"history--labs-icons.svg",indeterminate_check_box:e+"indeterminate_check_box--labs-icons.svg",open_in_new:e+"open_in_new--labs-icons.svg",rate_review:e+"rate_review--labs-icons.svg",settings:e+"settings--labs-icons.svg",star:e+"star--labs-icons.svg",undo:e+"undo--labs-icons.svg"};class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["name","width","height","color","style"]}attributeChangedCallback(o,n,c){this.render()}connectedCallback(){this.render(),this.themeObserver=new MutationObserver(o=>{o.forEach(n=>{n.type==="attributes"&&n.attributeName==="class"&&(n.target.classList.contains("theme-dark")||n.target.classList.contains("theme-light"))&&this.render()})}),this.themeObserver.observe(document.body,{attributes:!0,attributeFilter:["class"]})}disconnectedCallback(){this.themeObserver&&this.themeObserver.disconnect()}async render(){const o=`
      <style>
        :host {
          display: inline-block;
          width: 1em;
          height: 1em;
          vertical-align: middle;
        }
        svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        div {
          width: 100%;
          height: 100%;
          display: block;
        }
      </style>
    `,n=this.getAttribute("name");let c=g[n];if(!c){this.shadowRoot.innerHTML=o;return}const d=window.getComputedStyle(this),a=this.getAttribute("width")||d.width||"1em",l=this.getAttribute("height")||d.height||"1em",h=a==="auto"||!a||a==="0px"?"1em":a.replace("px",""),b=l==="auto"||!l||l==="0px"?"1em":l.replace("px","");let i=this.getAttribute("color")||"var(--color-on-surface)";if(i.startsWith("var(")){const s=document.createElement("div");s.style.color=i,s.style.position="absolute",s.style.visibility="hidden",document.body.appendChild(s);const t=getComputedStyle(s).color;document.body.removeChild(s),t&&t!=="rgba(0, 0, 0, 0)"&&t!=="transparent"?i=t:i=document.body.classList.contains("theme-dark")?"#ffffff":"#000000"}i==="currentColor"&&(i=document.body.classList.contains("theme-dark")?"#ffffff":"#000000");try{const s=await fetch(c);if(!s.ok)throw new Error("SVG fetch failed");let t=await s.text();t=t.replace(/fill="#[^"]*"/gi,`fill="${i}"`),t=t.replace(/fill='#[^']*'/gi,`fill='${i}'`),t=t.replace(/width="[^"]*"/gi,`width="${h}"`),t=t.replace(/height="[^"]*"/gi,`height="${b}"`),this.shadowRoot.innerHTML=o+t;return}catch{this.shadowRoot.innerHTML=o+`
        <div style="
          width: 100%;
          height: 100%;
          background-color: ${i};
          mask: url('${c}') no-repeat center / contain;
          -webkit-mask: url('${c}') no-repeat center / contain;
        "></div>
      `}}}customElements.define("labs-icon",m);
