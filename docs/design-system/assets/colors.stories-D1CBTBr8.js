import"./iframe-Cd5IRrjw.js";import"./preload-helper-D9Z9MdNV.js";function F(s={}){const i=s&&s.onlyFlavor?String(s.onlyFlavor):"",f={global:{"--palette-base-100":"Surface","--palette-base-500":"Outline","--palette-base-800":"Text","--palette-green-500":"Success","--palette-yellow-500":"Warning","--palette-red-500":"Error"},vanilla:{"--palette-vanilla-100":"Background","--palette-vanilla-500":"Primary","--palette-vanilla-800":"Primary Darker"},blueberry:{"--palette-blueberry-200":"Background","--palette-blueberry-500":"Primary","--palette-blueberry-800":"Primary Darker"},strawberry:{"--palette-strawberry-200":"Background","--palette-strawberry-500":"Primary","--palette-strawberry-800":"Primary Darker"}},v=(e,r,t,a)=>{let o="";return f[e]&&f[e][t]&&(o=`<br><span style="font-weight:bold;font-size:13px;opacity:0.8;">${f[e][t]}</span>`),`
    <div class="polaroid-card${t==="--color-primary"?" polaroid-primary":""}" data-var="${t}" role="button" tabindex="0" title="Copy ${t}">
      <div class="card-swatch" style="background:var(${t});">
        <div class="swatch-text">${(()=>{const d=String(t).replace(/^--/,""),c=d.match(/^palette-([^-]+)-(\d+)$/);if(c)return c[1].charAt(0).toUpperCase()+c[1].slice(1)+" "+c[2];const l=d.match(/^palette-([^-]+)-([a-zA-Z]+)$/);return l?l[1].charAt(0).toUpperCase()+l[1].slice(1)+" "+l[2]:d.replace(/^color-/,"").split("-").map(function(u){return u.charAt(0).toUpperCase()+u.slice(1)}).join(" ")||d})()}${o}</div>
      </div>
      <div class="card-token-label"><code>${t}</code></div>
      
    </div>
    `},g=e=>i&&i!==e?'style="display:none;"':"",m={global:{label:"Global",tokens:["--color-surface","--color-surface-alt","--color-success","--color-warning","--color-error"],palette:["--palette-base-100","--palette-base-500","--palette-base-800"],statusPalette:["--palette-green-500","--palette-yellow-500","--palette-red-500"]},blueberry:{semantic:["--color-primary","--color-primary-darker"],neutrals:["--color-surface","--color-background"],palette:["--palette-blueberry-100","--palette-blueberry-200","--palette-blueberry-500","--palette-blueberry-800"],accents:[]},strawberry:{semantic:["--color-primary","--color-primary-darker"],neutrals:["--color-surface","--color-background"],palette:["--palette-strawberry-100","--palette-strawberry-200","--palette-strawberry-500","--palette-strawberry-800"],accents:[]},vanilla:{semantic:["--color-primary","--color-primary-darker"],neutrals:["--color-surface","--color-background"],palette:["--palette-vanilla-100","--palette-vanilla-200","--palette-vanilla-500","--palette-vanilla-800"],accents:[]}},S=e=>{const r=m[e];return Array.from(new Set([...r.semantic||[],...r.neutrals||[]]))},B=i?`flavor-${i} theme-light`:"flavor-vanilla theme-light",L=i?`data-only-flavor="${i}"`:"",A=`
    <div class="tokens-doc-root ${B}" ${L}>
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
          ${m.global.palette.map(e=>v("global",e.replace(/^--/,""),e)).join("")}
        </div>
        <div style="font-size:14px;color:rgba(0,0,0,0.6);margin-bottom:12px;font-weight:600;">Status Palette</div>
        <div class="polaroid-row polaroid-palette" style="margin-bottom:18px;">
          ${m.global.statusPalette.map(e=>v("global",e.replace(/^--/,""),e)).join("")}
        </div>
        <div class="token-list-wrap">
          <table class="token-list">
            <thead><tr><th>Semantic</th><th>Swatch</th><th>Resolved</th><th>Base</th><th>Text</th><th>Text color</th><th>Contrast</th></tr></thead>
            <tbody>
              ${m.global.tokens.map(e=>`
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
        ${["vanilla","blueberry","strawberry"].map(e=>`
          <details class="flavor-column flavor-${e}" ${g(e)} ${i?"open":""} style="margin-top:12px">
            <summary style="margin:8px 0"><h3 style="display:inline;margin:0">Theme: ${e.charAt(0).toUpperCase()+e.slice(1)}</h3></summary>
            <div class="polaroid-row polaroid-palette" style="margin-bottom:18px;">
              ${m[e].palette.map(r=>v(e,r.replace(/^--/,""),r)).join("")}
            </div>
            <div class="token-list-wrap">
              <table class="token-list">
                <thead><tr><th>Semantic</th><th>Swatch</th><th>Resolved</th><th>Base</th><th>Text</th><th>Text color</th><th>Contrast</th></tr></thead>
                <tbody>
                  ${S(e).map(r=>`
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
        `).join("")}
      </div>
    </div>
  `;return setTimeout(()=>{document.querySelectorAll(".swatch-thumb, .swatch-thumb-text").forEach(e=>{e.addEventListener("click",function(r){const t=e.getAttribute("data-var");if(!t)return;let a=getComputedStyle(document.documentElement).getPropertyValue(t).trim();a||(a=t),navigator.clipboard.writeText(a),e.style.outline="2px solid #007aff",setTimeout(()=>{e.style.outline=""},600)})})},300),A}function C(){function s(e,r){try{if(r&&r.nodeType===1)return getComputedStyle(r).getPropertyValue(e).trim()}catch{}return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function i(e,r,t){r=r||[];var a=s(e,t);if(!a)return{chain:[e],value:"unset"};if(a=a.trim(),a.indexOf("var(")===0){var o=a.slice(4,-1).trim(),d=o.split(/,(.+)/).map(function(u){return u&&u.trim()}).filter(Boolean),c=d[0],l=d[1]||null;if(!c||r.indexOf(c)!==-1||c===e)return{chain:[e,c],value:l||a};var n=i(c,r.concat([e]),t);return{chain:[e].concat(n.chain),value:n.value}}return{chain:[e],value:a}}function f(e){if(!e)return null;e=e.trim();try{if(e.indexOf("rgb")===0){var r=e.replace(/[rgba()]/g,"").split(",").map(function(o){return parseFloat(o.trim())});return{r:r[0],g:r[1],b:r[2],a:r[3]||1}}if(e[0]==="#"){var t=e.slice(1);t.length===3&&(t=t.split("").map(function(o){return o+o}).join(""));var a=parseInt(t,16);return{r:a>>16&255,g:a>>8&255,b:a&255,a:1}}}catch{}return null}function v(e){try{if(!e||typeof e!="string")return e;var r=e.trim();if(r[0]!=="#")return e;var t=r.slice(1).toLowerCase();return t.length===3&&(t=t.split("").map(function(a){return a+a}).join("")),t.length===6&&/^[0-9a-f]{6}$/.test(t)?"#"+t:e}catch{return e}}function g(e){return e=e/255,e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}function m(e){return .2126*g(e.r)+.7152*g(e.g)+.0722*g(e.b)}function S(e,r){var t=m(e),a=m(r),o=Math.max(t,a),d=Math.min(t,a);return(o+.05)/(d+.05)}function B(){document.querySelectorAll(".polaroid-card").forEach(function(e){var r=e.getAttribute("data-var");try{for(var t=e;t&&t!==document.documentElement&&!(t.classList&&Array.from(t.classList).some(function(o){return o.indexOf("flavor-")===0||o.indexOf("theme-")===0}));)t=t.parentElement;var a=r?i(r,void 0,t||document.documentElement):null}catch(o){console.error("Error resolving polaroid token:",r,o)}}),document.querySelectorAll("[data-var]").forEach(function(e){var r=e.getAttribute("data-var");if(r)try{for(var t=e;t&&t!==document.documentElement&&!(t.classList&&Array.from(t.classList).some(function(h){return h.indexOf("flavor-")===0||h.indexOf("theme-")===0}));)t=t.parentElement;var a=i(r,void 0,t||document.documentElement),o=a.value;if(e.classList.contains("list-resolved")&&(e.textContent=o||"unset"),e.classList.contains("list-chain"))if(a&&a.value&&a.value!=="unset"){var d=a.value,c=null,l={"#FBFBFD":"Base 100","#9E9E9E":"Base 500","#2A2A30":"Base 800","#2E2B74":"Blueberry 500","#1E193E":"Blueberry 800","#DBD7FF":"Blueberry 200","#F0EEFF":"Blueberry 100","#800800":"Strawberry 500","#4A1614":"Strawberry 800","#FFD3D2":"Strawberry 200","#FFF2F1":"Strawberry 100","#6B5C4B":"Vanilla 500","#372116":"Vanilla 800","#E8E2D6":"Vanilla 200","#F5F1E7":"Vanilla 100","#00800C":"Green 500","#FFB300":"Yellow 500","#D32F2F":"Red 500"};c=l[d.toUpperCase()],c?e.innerHTML="<code>"+c+"</code>":e.innerHTML='<small style="color:#888">Unknown base</small>'}else e.innerHTML="–";if(e.classList.contains("swatch-thumb")&&(o&&o!=="unset"?(e.style.background=o,e.style.backgroundColor=o):(e.style.background="transparent",e.style.backgroundColor="transparent")),e.classList.contains("list-text-color")&&o&&o!=="unset"){var n=null,u=null;if(r.includes("--palette-"))try{var b=f(o);if(b){var x=m(b);n=x>.5?"#000000":"#ffffff"}else n="#ffffff";u=v(n)}catch{n="#ffffff",u="#ffffff"}else{if(r.startsWith("--color-")){var z=r.replace(/^--color-/,""),y="--color-on-"+z,P=i(y,void 0,t||document.documentElement);P.value&&P.value!=="unset"&&(n=P.value,u=y)}if(!n&&!r.includes("primary")){var D=i("--color-on-background",void 0,t||document.documentElement);D.value&&D.value!=="unset"&&(n=D.value,u="--color-on-background")}if(!n||n==="unset")try{var b=f(o);if(b){var x=m(b);n=x>.5?"#000000":"#ffffff",u=v(n)}else n="#ffffff",u="#ffffff"}catch{n="#ffffff",u="#ffffff"}}e.textContent=u||"unset";var O=e.parentElement.querySelector(".swatch-thumb-text");if(O&&n&&n!=="unset"){var j=v(n);O.style.background=j}var p=e.parentElement.querySelector(".list-contrast");if(p&&o&&n)try{var b=f(o),M=f(n);if(b&&M){var w=S(b,M);p.textContent=w.toFixed(1)+":1",w>=7?(p.style.color="#006600",p.style.fontWeight="bold"):w>=4.5?(p.style.color="#006600",p.style.fontWeight="normal"):w>=3?(p.style.color="#cc6600",p.style.fontWeight="normal"):(p.style.color="#cc0000",p.style.fontWeight="normal")}}catch{p.textContent="–",p.style.color="",p.style.fontWeight=""}}}catch(h){console.error("Error processing element:",e,h),e.classList.contains("list-resolved")&&(e.textContent="error")}})}function L(){var e=document.querySelectorAll(".polaroid-card .swatch-text");e.forEach(function(r){try{var t=r.closest(".polaroid-card");if(!t)return;for(var a=t;a&&a!==document.documentElement&&!(a.classList&&Array.from(a.classList).some(function(y){return y.indexOf("flavor-")===0||y.indexOf("theme-")===0}));)a=a.parentElement;var o=t.getAttribute("data-var");if(!o)return;var d=i(o,void 0,a||document.documentElement),c=d.value;if(c&&c!=="unset"){var l=null;if(o.includes("--palette-"))try{var n=f(c);if(n){var u=m(n);l=u>.5?"#000000":"#ffffff"}else l="#ffffff"}catch{l="#ffffff"}else{var b=o.replace(/^--color-/,"").replace(/^palette-/,""),x="--color-on-"+b,z=i(x,void 0,a||document.documentElement);if(l=z.value,(!l||l==="unset")&&(o.includes("primary")&&(l=i("--color-on-primary",void 0,a||document.documentElement).value),(!l||l==="unset")&&(l=i("--color-on-background",void 0,a||document.documentElement).value)),!l||l==="unset")try{var n=f(c);if(n){var u=m(n);l=u>.5?"#000000":"#ffffff"}else l="#ffffff"}catch{l="#ffffff"}}r.style.color=l}}catch{r.style.color="#ffffff"}})}function A(){B(),L()}return A}const U={title:"Tokens/Colors",parameters:{viewMode:"docs",layout:"fullscreen"}},k={name:"Global",render:()=>F(),play:async()=>{const s=C();console.log("Colors story: executing color logic"),setTimeout(()=>{console.log("Colors story: first execution"),s()},100),setTimeout(()=>{console.log("Colors story: second execution"),s()},300),setTimeout(()=>{console.log("Colors story: third execution"),s()},600),setTimeout(()=>{new MutationObserver(f=>{f.forEach(v=>{v.attributeName==="class"&&(console.log("Colors story: class change detected, re-executing"),s())})}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})},100)}},T={name:"Theme: Blueberry",render:()=>F({onlyFlavor:"blueberry"}),play:async()=>{const s=C();setTimeout(s,100),setTimeout(s,300),setTimeout(s,600)}},$={name:"Theme: Strawberry",render:()=>F({onlyFlavor:"strawberry"}),play:async()=>{const s=C();setTimeout(s,100),setTimeout(s,300),setTimeout(s,600)}},E={name:"Theme: Vanilla",render:()=>F({onlyFlavor:"vanilla"}),play:async()=>{const s=C();setTimeout(s,100),setTimeout(s,300),setTimeout(s,600)}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};const G=["Colors","Blueberry","Strawberry","Vanilla"];export{T as Blueberry,k as Colors,$ as Strawberry,E as Vanilla,G as __namedExportsOrder,U as default};
