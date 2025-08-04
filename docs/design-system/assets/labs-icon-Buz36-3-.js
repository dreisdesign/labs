const e=window.location.pathname.includes("/labs/")?"/labs/design-system/icons/":"icons/",l={add:e+"add--labs-icons.svg",add_comment:e+"add_comment--labs-icons.svg",bedtime:e+"bedtime--labs-icons.svg",bedtime_off:e+"bedtime_off--labs-icons.svg",cancel:e+"cancel--labs-icons.svg",change_circle:e+"change_circle--labs-icons.svg",check:e+"check--labs-icons.svg",close:e+"close--labs-icons.svg",comment:e+"comment--labs-icons.svg",delete_forever:e+"delete_forever--labs-icons.svg",edit:e+"edit--labs-icons.svg",rate_review:e+"rate_review--labs-icons.svg",settings:e+"settings--labs-icons.svg",undo:e+"undo--labs-icons.svg"};class g extends HTMLElement{static get observedAttributes(){return["name","style"]}constructor(){super(),this.svgCache=new Map}attributeChangedCallback(t,s,n){this.render()}connectedCallback(){this.render()}async loadSvg(t){if(this.svgCache.has(t))return this.svgCache.get(t);try{const s=await fetch(t);if(!s.ok)throw new Error(`Failed to load icon: ${s.status}`);const n=await s.text();return this.svgCache.set(t,n),n}catch(s){return console.error("Error loading icon:",s),null}}async render(){const t=this.getAttribute("name");let s=l[t];if(s){const n=window.getComputedStyle(this),c=this.getAttribute("width")||n.width||"24px",a=this.getAttribute("height")||n.height||"24px",o=this.style.color||"currentColor",r=await this.loadSvg(s);if(r){const i=new DOMParser().parseFromString(r,"image/svg+xml").querySelector("svg");if(i){i.style.width=c,i.style.height=a,i.style.fill=o,i.style.color=o,this.innerHTML=i.outerHTML;return}}this.innerHTML=`
        <div style="
          width: ${c};
          height: ${a};
          background-color: ${o};
          mask-image: url(${s});
          mask-size: contain;
          mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-image: url(${s});
          -webkit-mask-size: contain;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-position: center;
        "></div>
      `}else this.innerHTML=""}}customElements.define("labs-icon",g);
