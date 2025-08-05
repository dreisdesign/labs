const e=window.location.pathname.includes("/labs/")?"/labs/design-system/icons/":"icons/",r={add:e+"add--labs-icons.svg",add_comment:e+"add_comment--labs-icons.svg",apps:e+"apps--labs-icons.svg",bedtime:e+"bedtime--labs-icons.svg",bedtime_off:e+"bedtime_off--labs-icons.svg",cancel:e+"cancel--labs-icons.svg",change_circle:e+"change_circle--labs-icons.svg",check:e+"check--labs-icons.svg",close:e+"close--labs-icons.svg",comment:e+"comment--labs-icons.svg",delete_forever:e+"delete_forever--labs-icons.svg",edit:e+"edit--labs-icons.svg",rate_review:e+"rate_review--labs-icons.svg",settings:e+"settings--labs-icons.svg",undo:e+"undo--labs-icons.svg"};class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["name","style"]}attributeChangedCallback(c,o,i){this.render()}connectedCallback(){this.render()}async render(){const c=this.getAttribute("name");let o=r[c];if(!o){this.shadowRoot.innerHTML="";return}const i=window.getComputedStyle(this),a=this.getAttribute("width")||i.width||"24px",l=this.getAttribute("height")||i.height||"24px";let t=this.getAttribute("color")||"#000";if(t.startsWith("var(")){const s=document.createElement("div");s.style.color=t,document.body.appendChild(s),t=getComputedStyle(s).color,document.body.removeChild(s)}(!t||t==="currentColor"||t.startsWith("var("))&&(t="#000");try{const s=await fetch(o);if(!s.ok)throw new Error("SVG fetch failed");let n=await s.text();n=n.replace(/fill=("|')(?!none)([^"']*)("|')/gi,'fill="currentColor"'),n=n.replace(/<svg\b([^>]*)>/,`<svg$1 width="${a}" height="${l}">`),this.shadowRoot.innerHTML=n;return}catch{this.shadowRoot.innerHTML=`
        <div style="
          width: ${a};
          height: ${l};
          background-color: ${t};
          mask: url('${o}') no-repeat center / contain;
          -webkit-mask: url('${o}') no-repeat center / contain;
          display: inline-block;
        "></div>
      `}}}customElements.define("labs-icon",d);
