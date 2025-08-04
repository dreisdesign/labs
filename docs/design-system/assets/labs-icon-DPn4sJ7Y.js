const e=window.location.pathname.includes("/labs/")?"/labs/design-system/icons/":"icons/",r={add:e+"add--labs-icons.svg",add_comment:e+"add_comment--labs-icons.svg",bedtime:e+"bedtime--labs-icons.svg",bedtime_off:e+"bedtime_off--labs-icons.svg",cancel:e+"cancel--labs-icons.svg",change_circle:e+"change_circle--labs-icons.svg",check:e+"check--labs-icons.svg",close:e+"close--labs-icons.svg",comment:e+"comment--labs-icons.svg",delete_forever:e+"delete_forever--labs-icons.svg",edit:e+"edit--labs-icons.svg",rate_review:e+"rate_review--labs-icons.svg",settings:e+"settings--labs-icons.svg",undo:e+"undo--labs-icons.svg"};class d extends HTMLElement{static get observedAttributes(){return["name","style"]}attributeChangedCallback(c,t,n){this.render()}connectedCallback(){this.render()}async render(){const c=this.getAttribute("name");let t=r[c];if(!t){this.innerHTML="";return}const n=window.getComputedStyle(this),o=this.getAttribute("width")||n.width||"24px",l=this.getAttribute("height")||n.height||"24px",a=this.style.color||n.color||"currentColor";try{const i=await fetch(t);if(!i.ok)throw new Error("SVG fetch failed");let s=await i.text();s=s.replace(/fill="currentColor"/g,`fill="${a}"`),s=s.replace(/<svg\b([^>]*)>/,`<svg$1 width="${o}" height="${l}">`),this.innerHTML=s;return}catch{this.innerHTML=`
        <div style="
          width: ${o};
          height: ${l};
          background-color: ${a};
          mask: url('${t}') no-repeat center / contain;
          -webkit-mask: url('${t}') no-repeat center / contain;
          display: inline-block;
        "></div>
      `}}}customElements.define("labs-icon",d);
