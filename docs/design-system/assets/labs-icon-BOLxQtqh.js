const e=window.location.pathname.includes("/labs/")?"/labs/design-system/icons/":"icons/",a={add:e+"add--labs-icons.svg",add_comment:e+"add_comment--labs-icons.svg",bedtime:e+"bedtime--labs-icons.svg",bedtime_off:e+"bedtime_off--labs-icons.svg",cancel:e+"cancel--labs-icons.svg",change_circle:e+"change_circle--labs-icons.svg",check:e+"check--labs-icons.svg",close:e+"close--labs-icons.svg",comment:e+"comment--labs-icons.svg",delete_forever:e+"delete_forever--labs-icons.svg",edit:e+"edit--labs-icons.svg",rate_review:e+"rate_review--labs-icons.svg",settings:e+"settings--labs-icons.svg",undo:e+"undo--labs-icons.svg"};class d extends HTMLElement{static get observedAttributes(){return["name","style"]}attributeChangedCallback(o,i,n){this.render()}connectedCallback(){this.render()}async render(){const o=this.getAttribute("name");let i=a[o];if(!i){this.innerHTML="";return}const n=window.getComputedStyle(this),l=this.getAttribute("width")||n.width||"24px",r=this.getAttribute("height")||n.height||"24px";let t=this.getAttribute("color")||this.style.color||n.color||"#000";t&&t.startsWith("var(")&&(t=n.color),(!t||t==="currentColor"||t.startsWith("var("))&&(t="#000");try{const c=await fetch(i);if(!c.ok)throw new Error("SVG fetch failed");let s=await c.text();s=s.replace(/fill="currentColor"/g,`fill="${t}"`),s=s.replace(/fill='currentColor'/g,`fill='${t}'`),s=s.replace(/<svg\b([^>]*)>/,`<svg$1 width="${l}" height="${r}">`),this.innerHTML=s;return}catch{this.innerHTML=`
        <div style="
          width: ${l};
          height: ${r};
          background-color: ${t};
          mask: url('${i}') no-repeat center / contain;
          -webkit-mask: url('${i}') no-repeat center / contain;
          display: inline-block;
        "></div>
      `}}}customElements.define("labs-icon",d);
