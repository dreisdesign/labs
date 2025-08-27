import"./iframe-Ds_r7HSn.js";import"./preload-helper-D9Z9MdNV.js";function S(s={}){const i=s&&s.onlyFlavor?String(s.onlyFlavor):"",m={global:{"--palette-base-100":"Surface","--palette-base-500":"Outline","--palette-base-800":"Text","--palette-green-500":"Success","--palette-yellow-500":"Warning","--palette-red-500":"Error"},vanilla:{"--palette-vanilla-100":"Background","--palette-vanilla-500":"Primary","--palette-vanilla-800":"Primary Darker"},blueberry:{"--palette-blueberry-200":"Background","--palette-blueberry-500":"Primary","--palette-blueberry-800":"Primary Darker"},strawberry:{"--palette-strawberry-200":"Background","--palette-strawberry-500":"Primary","--palette-strawberry-800":"Primary Darker"}},v=(e,r,a,o)=>{let b="";return m[e]&&m[e][a]&&(b=`<br><span style="font-weight:bold;font-size:13px;opacity:0.8;">${m[e][a]}</span>`),`
    <div class="polaroid-card${a==="--color-primary"?" polaroid-primary":""}" data-var="${a}" role="button" tabindex="0" title="Copy ${a}">
      <div class="card-swatch" style="background:var(${a});">
        <div class="swatch-text">${(()=>{const c=String(a).replace(/^--/,""),l=c.match(/^palette-([^-]+)-(\d+)$/);if(l)return l[1].charAt(0).toUpperCase()+l[1].slice(1)+" "+l[2];const n=c.match(/^palette-([^-]+)-([a-zA-Z]+)$/);return n?n[1].charAt(0).toUpperCase()+n[1].slice(1)+" "+n[2]:c.replace(/^color-/,"").split("-").map(function(p){return p.charAt(0).toUpperCase()+p.slice(1)}).join(" ")||c})()}${b}</div>
      </div>
      <div class="card-token-label"><code>${a}</code></div>
      
    </div>
    `},g=e=>i&&i!==e?'style="display:none;"':"",d={global:{label:"Global",tokens:["--color-surface","--color-surface-alt","--color-success","--color-warning","--color-error"],palette:["--palette-base-100","--palette-base-500","--palette-base-800"],statusPalette:["--palette-green-500","--palette-yellow-500","--palette-red-500"]},blueberry:{semantic:["--color-primary","--color-primary-darker"],neutrals:["--color-surface","--color-background"],palette:["--palette-blueberry-100","--palette-blueberry-200","--palette-blueberry-500","--palette-blueberry-800"],accents:[]},strawberry:{semantic:["--color-primary","--color-primary-darker"],neutrals:["--color-surface","--color-background"],palette:["--palette-strawberry-100","--palette-strawberry-200","--palette-strawberry-500","--palette-strawberry-800"],accents:[]},vanilla:{semantic:["--color-primary","--color-primary-darker"],neutrals:["--color-surface","--color-background"],palette:["--palette-vanilla-100","--palette-vanilla-200","--palette-vanilla-500","--palette-vanilla-800"],accents:[]}},B=e=>{const r=d[e];return Array.from(new Set([...r.semantic||[],...r.neutrals||[]]))},L=i?`flavor-${i} theme-light`:"flavor-vanilla theme-light",A=i?`data-only-flavor="${i}"`:"";let w="";if(i&&d[i]){const e=i;w=`
      <details class="flavor-column flavor-${e}" ${g(e)} open style="margin-top:12px">
        <summary style="margin:8px 0"><h3 style="display:inline;margin:0">Theme: ${e.charAt(0).toUpperCase()+e.slice(1)}</h3></summary>
        <div class="polaroid-row polaroid-palette" style="margin-bottom:18px;">
          ${d[e].palette.map(r=>v(e,r.replace(/^--/,""),r)).join("")}
        </div>
        <div class="token-list-wrap">
          <table class="token-list">
            <thead><tr><th>Semantic</th><th>Swatch</th><th>Resolved</th><th>Base</th><th>Text</th><th>Text color</th><th>Contrast</th></tr></thead>
            <tbody>
              ${B(e).map(r=>`
                <tr>
                  <td><code>${r}</code></td>
                  <td><span class="swatch-thumb" data-var="${r}" style="background:var(${r});"></span></td>
                  <td class="list-resolved" data-var="${r}">resolving...</td>
                  <td class="list-chain" data-var="${r}">–</td>
                  <td><span class="swatch-thumb-text" data-var="${r}"></span></td>
                  <td class="list-text-color" data-var="${r}">computing...</td>
                  <td class="list-contrast" data-var="${r}">–</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </details>
    `}const t=`
    <div class="tokens-doc-root ${L}" ${A}>
      <style>
  .tokens-doc-root{padding:16px 40px;font-family:var(--font-family-base);}

  /* Responsive grid of compact polaroids */
  .polaroid-row{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;margin-bottom:12px}
  details.flavor-column{margin-bottom:12px;border-radius:8px;padding:8px;border:1px solid rgba(0,0,0,0.04);background:var(--color-surface)}
  details.flavor-column[open]{box-shadow:0 1px 0 rgba(0,0,0,0.04)}
  details.flavor-column summary{list-style:none;cursor:pointer;padding:6px 8px}
  details.flavor-column summary::-webkit-details-marker{display:none}
  details.flavor-column summary h3{font-size:15px;display:inline}

  .polaroid-card{border-radius:8px;padding:10px;border:1px solid var(--palette-base-500, var(--color-outline));background:var(--color-surface,#FBFBFD);}
  /* Make the swatch a square (1:1) so color area is consistent */
  .card-swatch{width:100%;aspect-ratio:1/1;border-radius:6px;background-size:cover;margin-bottom:8px;position:relative;display:flex;align-items:center;justify-content:center;background:var(--color-surface,#FBFBFD);}
  .swatch-text{font-weight:700;font-size:16px;line-height:1;color:var(--color-on-primary);pointer-events:none;text-shadow:0 1px 0 rgba(0,0,0,0.15);}
  .card-token-label{font-size:12px;color:var(--color-on-background);margin-top:6px;word-break:break-all}
  .card-base-label{font-size:11px;color:var(--color-on-background);opacity:0.8;margin-top:4px;word-break:break-all}
  .polaroid-card[data-copied]{outline:2px solid rgba(0,0,0,0.08)}

  /* Match global polaroid size to theme palettes */
  .flavor-global .polaroid-row{grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px}
  .flavor-global .polaroid-card{padding:10px}
  .polaroid-palette{grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px}
  .polaroid-palette .polaroid-card{padding:10px}

  .token-list-wrap{margin-top:8px}
  .token-list{width:100%;border-collapse:collapse;font-size:13px}
  .token-list th,.token-list td{border:1px solid rgba(0,0,0,0.06);padding:6px 8px;text-align:left}
  .token-list th{background:rgba(0,0,0,0.02);font-weight:600}
  .token-list code{font-size:12px}
  .swatch-thumb, .swatch-thumb-text {
    box-shadow: 0 1px 2px rgba(0,0,0,0.04);
    display:inline-flex;
    align-items:center;
    justify-content:center;
    width:40px;height:40px;
    border-radius:8px;
    border:2px solid #bbb !important;
    font-size:16px;
    font-weight:700;
    text-align:center;
    cursor:pointer;
    transition: border-color 0.2s;
  }
  .swatch-thumb:hover, .swatch-thumb-text:hover {
    border-color: #333 !important;
  }
  .swatch-thumb-text { background:#fff; }
  .resolve-chain{font-size:11px;color:rgba(28,27,31,0.6);margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      </style>
      <div id="flavors-top">
        <h1 style="margin:8px 0">Design Tokens — Palette</h1>
        <details class="flavor-column flavor-global" ${g("global")} ${!i||i==="global"?"open":""} style="margin-bottom:18px">
        <summary style="margin:8px 0"><h3 style="display:inline;margin:0">Global</h3></summary>
        <div style="font-size:14px;color:rgba(0,0,0,0.6);margin-bottom:12px;font-weight:600;">Base Palette</div>
        <div class="polaroid-row polaroid-palette" style="margin-bottom:18px;">
          ${d.global.palette.map(e=>v("global",e.replace(/^--/,""),e)).join("")}
        </div>
        <div style="font-size:14px;color:rgba(0,0,0,0.6);margin-bottom:12px;font-weight:600;">Status Palette</div>
        <div class="polaroid-row polaroid-palette" style="margin-bottom:18px;">
          ${d.global.statusPalette.map(e=>v("global",e.replace(/^--/,""),e)).join("")}
        </div>
        <div class="token-list-wrap">
          <table class="token-list">
            <thead><tr><th>Semantic</th><th>Swatch</th><th>Resolved</th><th>Base</th><th>Text</th><th>Text color</th><th>Contrast</th></tr></thead>
            <tbody>
              ${d.global.tokens.map(e=>`
                <tr>
                  <td><code>${e}</code></td>
                  <td><span class="swatch-thumb" data-var="${e}" style="background:var(${e});"></span></td>
                  <td class="list-resolved" data-var="${e}">resolving...</td>
                  <td class="list-chain" data-var="${e}">–</td>
                  <td><span class="swatch-thumb-text" data-var="${e}"></span></td>
                  <td class="list-text-color" data-var="${e}">computing...</td>
                  <td class="list-contrast" data-var="${e}">–</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
        </details>
  ${w}
      </div>
    </div>
  `;return setTimeout(()=>{document.querySelectorAll(".swatch-thumb, .swatch-thumb-text").forEach(e=>{e.addEventListener("click",function(r){const a=e.getAttribute("data-var");if(!a)return;let o=getComputedStyle(document.documentElement).getPropertyValue(a).trim();o||(o=a),navigator.clipboard.writeText(o),e.style.outline="2px solid #007aff",setTimeout(()=>{e.style.outline=""},600)})})},300),t}function C(){function s(t,e){try{if(e&&e.nodeType===1)return getComputedStyle(e).getPropertyValue(t).trim()}catch{}return getComputedStyle(document.documentElement).getPropertyValue(t).trim()}function i(t,e,r){e=e||[];var a=s(t,r);if(!a)return{chain:[t],value:"unset"};if(a=a.trim(),a.indexOf("var(")===0){var o=a.slice(4,-1).trim(),b=o.split(/,(.+)/).map(function(u){return u&&u.trim()}).filter(Boolean),c=b[0],l=b[1]||null;if(!c||e.indexOf(c)!==-1||c===t)return{chain:[t,c],value:l||a};var n=i(c,e.concat([t]),r);return{chain:[t].concat(n.chain),value:n.value}}return{chain:[t],value:a}}function m(t){if(!t)return null;t=t.trim();try{if(t.indexOf("rgb")===0){var e=t.replace(/[rgba()]/g,"").split(",").map(function(o){return parseFloat(o.trim())});return{r:e[0],g:e[1],b:e[2],a:e[3]||1}}if(t[0]==="#"){var r=t.slice(1);r.length===3&&(r=r.split("").map(function(o){return o+o}).join(""));var a=parseInt(r,16);return{r:a>>16&255,g:a>>8&255,b:a&255,a:1}}}catch{}return null}function v(t){try{if(!t||typeof t!="string")return t;var e=t.trim();if(e[0]!=="#")return t;var r=e.slice(1).toLowerCase();return r.length===3&&(r=r.split("").map(function(a){return a+a}).join("")),r.length===6&&/^[0-9a-f]{6}$/.test(r)?"#"+r:t}catch{return t}}function g(t){return t=t/255,t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}function d(t){return .2126*g(t.r)+.7152*g(t.g)+.0722*g(t.b)}function B(t,e){var r=d(t),a=d(e),o=Math.max(r,a),b=Math.min(r,a);return(o+.05)/(b+.05)}function L(){document.querySelectorAll(".polaroid-card").forEach(function(t){var e=t.getAttribute("data-var");try{for(var r=t;r&&r!==document.documentElement&&!(r.classList&&Array.from(r.classList).some(function(o){return o.indexOf("flavor-")===0||o.indexOf("theme-")===0}));)r=r.parentElement;var a=e?i(e,void 0,r||document.documentElement):null}catch(o){console.error("Error resolving polaroid token:",e,o)}}),document.querySelectorAll("[data-var]").forEach(function(t){var e=t.getAttribute("data-var");if(e)try{for(var r=t;r&&r!==document.documentElement&&!(r.classList&&Array.from(r.classList).some(function(h){return h.indexOf("flavor-")===0||h.indexOf("theme-")===0}));)r=r.parentElement;var a=i(e,void 0,r||document.documentElement),o=a.value;if(t.classList.contains("list-resolved")&&(t.textContent=o||"unset"),t.classList.contains("list-chain"))if(a&&a.value&&a.value!=="unset"){var b=a.value,c=null,l={"#FBFBFD":"Base 100","#9E9E9E":"Base 500","#2A2A30":"Base 800","#2E2B74":"Blueberry 500","#1E193E":"Blueberry 800","#DBD7FF":"Blueberry 200","#F0EEFF":"Blueberry 100","#800800":"Strawberry 500","#4A1614":"Strawberry 800","#FFD3D2":"Strawberry 200","#FFF2F1":"Strawberry 100","#6B5C4B":"Vanilla 500","#372116":"Vanilla 800","#E8E2D6":"Vanilla 200","#F5F1E7":"Vanilla 100","#00800C":"Green 500","#FFB300":"Yellow 500","#D32F2F":"Red 500"};c=l[b.toUpperCase()],c?t.innerHTML="<code>"+c+"</code>":t.innerHTML='<small style="color:#888">Unknown base</small>'}else t.innerHTML="–";if(t.classList.contains("swatch-thumb")&&(o&&o!=="unset"?(t.style.background=o,t.style.backgroundColor=o):(t.style.background="transparent",t.style.backgroundColor="transparent")),t.classList.contains("list-text-color")&&o&&o!=="unset"){var n=null,u=null;if(e.includes("--palette-"))try{var p=m(o);if(p){var x=d(p);n=x>.5?"#000000":"#ffffff"}else n="#ffffff";u=v(n)}catch{n="#ffffff",u="#ffffff"}else{if(e.startsWith("--color-")){var z=e.replace(/^--color-/,""),y="--color-on-"+z,P=i(y,void 0,r||document.documentElement);P.value&&P.value!=="unset"&&(n=P.value,u=y)}if(!n&&!e.includes("primary")){var D=i("--color-on-background",void 0,r||document.documentElement);D.value&&D.value!=="unset"&&(n=D.value,u="--color-on-background")}if(!n||n==="unset")try{var p=m(o);if(p){var x=d(p);n=x>.5?"#000000":"#ffffff",u=v(n)}else n="#ffffff",u="#ffffff"}catch{n="#ffffff",u="#ffffff"}}t.textContent=u||"unset";var O=t.parentElement.querySelector(".swatch-thumb-text");if(O&&n&&n!=="unset"){var j=v(n);O.style.background=j}var f=t.parentElement.querySelector(".list-contrast");if(f&&o&&n)try{var p=m(o),M=m(n);if(p&&M){var k=B(p,M);f.textContent=k.toFixed(1)+":1",k>=7?(f.style.color="#006600",f.style.fontWeight="bold"):k>=4.5?(f.style.color="#006600",f.style.fontWeight="normal"):k>=3?(f.style.color="#cc6600",f.style.fontWeight="normal"):(f.style.color="#cc0000",f.style.fontWeight="normal")}}catch{f.textContent="–",f.style.color="",f.style.fontWeight=""}}}catch(h){console.error("Error processing element:",t,h),t.classList.contains("list-resolved")&&(t.textContent="error")}})}function A(){var t=document.querySelectorAll(".polaroid-card .swatch-text");t.forEach(function(e){try{var r=e.closest(".polaroid-card");if(!r)return;for(var a=r;a&&a!==document.documentElement&&!(a.classList&&Array.from(a.classList).some(function(y){return y.indexOf("flavor-")===0||y.indexOf("theme-")===0}));)a=a.parentElement;var o=r.getAttribute("data-var");if(!o)return;var b=i(o,void 0,a||document.documentElement),c=b.value;if(c&&c!=="unset"){var l=null;if(o.includes("--palette-"))try{var n=m(c);if(n){var u=d(n);l=u>.5?"#000000":"#ffffff"}else l="#ffffff"}catch{l="#ffffff"}else{var p=o.replace(/^--color-/,"").replace(/^palette-/,""),x="--color-on-"+p,z=i(x,void 0,a||document.documentElement);if(l=z.value,(!l||l==="unset")&&(o.includes("primary")&&(l=i("--color-on-primary",void 0,a||document.documentElement).value),(!l||l==="unset")&&(l=i("--color-on-background",void 0,a||document.documentElement).value)),!l||l==="unset")try{var n=m(c);if(n){var u=d(n);l=u>.5?"#000000":"#ffffff"}else l="#ffffff"}catch{l="#ffffff"}}e.style.color=l}}catch{e.style.color="#ffffff"}})}function w(){L(),A()}return w}const U={title:"Tokens/Colors",parameters:{viewMode:"docs",layout:"fullscreen"}},T={name:"Global",render:()=>S(),play:async()=>{const s=C();console.log("Colors story: executing color logic"),setTimeout(()=>{console.log("Colors story: first execution"),s()},100),setTimeout(()=>{console.log("Colors story: second execution"),s()},300),setTimeout(()=>{console.log("Colors story: third execution"),s()},600),setTimeout(()=>{new MutationObserver(m=>{m.forEach(v=>{v.attributeName==="class"&&(console.log("Colors story: class change detected, re-executing"),s())})}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})},100)}},$={name:"Theme: Blueberry",render:()=>S({onlyFlavor:"blueberry"}),play:async()=>{const s=C();setTimeout(s,100),setTimeout(s,300),setTimeout(s,600)}},E={name:"Theme: Strawberry",render:()=>S({onlyFlavor:"strawberry"}),play:async()=>{const s=C();setTimeout(s,100),setTimeout(s,300),setTimeout(s,600)}},F={name:"Theme: Vanilla",render:()=>S({onlyFlavor:"vanilla"}),play:async()=>{const s=C();setTimeout(s,100),setTimeout(s,300),setTimeout(s,600)}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Global',
  render: () => renderColors(),
  play: async () => {
    const execute = executeColorLogic();
    console.log('Colors story: executing color logic');

    // Wait a bit for DOM to be ready and execute multiple times
    setTimeout(() => {
      console.log('Colors story: first execution');
      execute();
    }, 100);
    setTimeout(() => {
      console.log('Colors story: second execution');
      execute();
    }, 300);
    setTimeout(() => {
      console.log('Colors story: third execution');
      execute();
    }, 600);

    // Set up mutation observer for theme changes
    setTimeout(() => {
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.attributeName === 'class') {
            console.log('Colors story: class change detected, re-executing');
            execute();
          }
        });
      });
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });
    }, 100);
  }
}`,...T.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'Theme: Blueberry',
  render: () => renderColors({
    onlyFlavor: 'blueberry'
  }),
  play: async () => {
    const execute = executeColorLogic();
    setTimeout(execute, 100);
    setTimeout(execute, 300);
    setTimeout(execute, 600);
  }
}`,...$.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Theme: Strawberry',
  render: () => renderColors({
    onlyFlavor: 'strawberry'
  }),
  play: async () => {
    const execute = executeColorLogic();
    setTimeout(execute, 100);
    setTimeout(execute, 300);
    setTimeout(execute, 600);
  }
}`,...E.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Theme: Vanilla',
  render: () => renderColors({
    onlyFlavor: 'vanilla'
  }),
  play: async () => {
    const execute = executeColorLogic();
    setTimeout(execute, 100);
    setTimeout(execute, 300);
    setTimeout(execute, 600);
  }
}`,...F.parameters?.docs?.source}}};const G=["Colors","Blueberry","Strawberry","Vanilla"];export{$ as Blueberry,T as Colors,E as Strawberry,F as Vanilla,G as __namedExportsOrder,U as default};
