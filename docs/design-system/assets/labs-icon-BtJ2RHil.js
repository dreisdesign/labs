const s=window.location.pathname.includes("/labs/")?"/labs/design-system/icons/":"icons/",r={add:s+"add--labs-icons.svg",add_comment:s+"add_comment--labs-icons.svg",bedtime:s+"bedtime--labs-icons.svg",bedtime_off:s+"bedtime_off--labs-icons.svg",cancel:s+"cancel--labs-icons.svg",change_circle:s+"change_circle--labs-icons.svg",check:s+"check--labs-icons.svg",close:s+"close--labs-icons.svg",comment:s+"comment--labs-icons.svg",delete_forever:s+"delete_forever--labs-icons.svg",edit:s+"edit--labs-icons.svg",rate_review:s+"rate_review--labs-icons.svg",settings:s+"settings--labs-icons.svg",undo:s+"undo--labs-icons.svg"};class g extends HTMLElement{static get observedAttributes(){return["name","style"]}constructor(){super(),this.svgCache=new Map}attributeChangedCallback(e,t,n){this.render()}connectedCallback(){this.render()}async loadSvg(e){if(this.svgCache.has(e))return this.svgCache.get(e);try{const t=await fetch(e);if(!t.ok)throw new Error(`Failed to load icon: ${t.status}`);const n=await t.text();return this.svgCache.set(e,n),n}catch(t){return console.error("Error loading icon:",t),null}}async render(){const e=this.getAttribute("name");let t=r[e];if(t){const n=window.getComputedStyle(this),a=this.getAttribute("width")||n.width||"24px",l=this.getAttribute("height")||n.height||"24px",i=this.style.color||"currentColor";console.log(`Icon render: ${e}, URL: ${t}, Color: ${i}`);const c=await this.loadSvg(t);if(c){console.log(`SVG loaded for ${e}, content length: ${c.length}`);const o=new DOMParser().parseFromString(c,"image/svg+xml").querySelector("svg");if(o){o.style.width=a,o.style.height=l,o.style.fill=i,o.style.color=i,console.log(`SVG element prepared for ${e}:`,o.outerHTML.substring(0,200)),this.innerHTML=o.outerHTML;return}else console.log(`No SVG element found for ${e}`)}else console.log(`Failed to load SVG for ${e}`);console.log(`Using mask-image fallback for ${e}`),this.innerHTML=`
        <div style="
          width: ${a};
          height: ${l};
          background-color: ${i};
          mask-image: url(${t});
          mask-size: contain;
          mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-image: url(${t});
          -webkit-mask-size: contain;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-position: center;
        "></div>
      `}else console.log(`No URL found for icon: ${e}`),this.innerHTML=""}}customElements.define("labs-icon",g);
