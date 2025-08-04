const e=window.location.pathname.includes("/labs/")?"/labs/design-system/icons/":"icons/",r={add:e+"add--labs-icons.svg",add_comment:e+"add_comment--labs-icons.svg",bedtime:e+"bedtime--labs-icons.svg",bedtime_off:e+"bedtime_off--labs-icons.svg",cancel:e+"cancel--labs-icons.svg",change_circle:e+"change_circle--labs-icons.svg",check:e+"check--labs-icons.svg",close:e+"close--labs-icons.svg",comment:e+"comment--labs-icons.svg",delete_forever:e+"delete_forever--labs-icons.svg",edit:e+"edit--labs-icons.svg",rate_review:e+"rate_review--labs-icons.svg",settings:e+"settings--labs-icons.svg",undo:e+"undo--labs-icons.svg"};class d extends HTMLElement{static get observedAttributes(){return["name","style"]}attributeChangedCallback(o,n,c){this.render()}connectedCallback(){this.render()}async render(){const o=this.getAttribute("name");let n=r[o];if(!n){this.innerHTML="";return}const c=window.getComputedStyle(this),l=this.getAttribute("width")||c.width||"24px",a=this.getAttribute("height")||c.height||"24px";let t=this.getAttribute("color")||"#000";if(t.startsWith("var(")){const s=document.createElement("div");s.style.color=t,document.body.appendChild(s),t=getComputedStyle(s).color,document.body.removeChild(s)}(!t||t==="currentColor"||t.startsWith("var("))&&(t="#000");try{const s=await fetch(n);if(!s.ok)throw new Error("SVG fetch failed");let i=await s.text();i=i.replace(/fill="currentColor"/g,`fill="${t}"`),i=i.replace(/fill='currentColor'/g,`fill='${t}'`),i=i.replace(/<svg\b([^>]*)>/,`<svg$1 width="${l}" height="${a}">`),this.innerHTML=i;return}catch{this.innerHTML=`
        <div style="
          width: ${l};
          height: ${a};
          background-color: ${t};
          mask: url('${n}') no-repeat center / contain;
          -webkit-mask: url('${n}') no-repeat center / contain;
          display: inline-block;
        "></div>
      `}}}customElements.define("labs-icon",d);
