import"./iframe-K65wYJzS.js";import"./preload-helper-D9Z9MdNV.js";function q(i={}){const l=i&&i.onlyFlavor?String(i.onlyFlavor):"",p={global:{"--palette-base-100":"Surface","--palette-base-500":"Outline","--palette-base-800":"Text","--palette-green-500":"Success","--palette-yellow-500":"Warning","--palette-red-500":"Error"},vanilla:{"--palette-vanilla-100":"Surface","--palette-vanilla-200":"Background","--palette-vanilla-500":"Primary","--palette-vanilla-800":"Primary Darker"},blueberry:{"--palette-blueberry-100":"Surface","--palette-blueberry-200":"Background","--palette-blueberry-500":"Primary","--palette-blueberry-800":"Primary Darker"},strawberry:{"--palette-strawberry-100":"Surface","--palette-strawberry-200":"Background","--palette-strawberry-500":"Primary","--palette-strawberry-800":"Primary Darker"}},w=(n,u,e,t)=>{let r="";return p[n]&&p[n][e]&&(r=`<br><span style="font-weight:bold;font-size:13px;opacity:0.8;">${p[n][e]}</span>`),`
    <div class="polaroid-card${e==="--color-primary"?" polaroid-primary":""}" data-var="${e}" role="button" tabindex="0" title="Copy ${e}">
      <div class="card-swatch" style="background:var(${e});">
        <div class="swatch-text">${(()=>{const a=String(e).replace(/^--/,""),o=a.match(/^palette-([^-]+)-(\d+)$/);if(o)return o[1].charAt(0).toUpperCase()+o[1].slice(1)+" "+o[2];const v=a.match(/^palette-([^-]+)-([a-zA-Z]+)$/);return v?v[1].charAt(0).toUpperCase()+v[1].slice(1)+" "+v[2]:a.replace(/^color-/,"").split("-").map(function(s){return s.charAt(0).toUpperCase()+s.slice(1)}).join(" ")||a})()}${r}</div>
      </div>
      <div class="card-token-label"><code>${e}</code></div>
      
    </div>
    `},F=n=>l&&l!==n?'style="display:none;"':"",b={global:{label:"Global",tokens:["--color-surface","--color-surface-alt","--color-success","--color-warning","--color-error"],palette:["--palette-base-100","--palette-base-500","--palette-base-800"],statusPalette:["--palette-green-500","--palette-yellow-500","--palette-red-500"]},blueberry:{semantic:["--color-primary","--color-primary-darker"],neutrals:["--color-surface","--color-background"],palette:["--palette-blueberry-100","--palette-blueberry-200","--palette-blueberry-500","--palette-blueberry-800"],accents:[]},strawberry:{semantic:["--color-primary","--color-primary-darker"],neutrals:["--color-surface","--color-background"],palette:["--palette-strawberry-100","--palette-strawberry-200","--palette-strawberry-500","--palette-strawberry-800"],accents:[]},vanilla:{semantic:["--color-primary","--color-primary-darker"],neutrals:["--color-surface","--color-background"],palette:["--palette-vanilla-100","--palette-vanilla-200","--palette-vanilla-500","--palette-vanilla-800"],accents:[]}},C=n=>{const u=b[n];return Array.from(new Set([...u.semantic||[],...u.neutrals||[]]))},x=l?`flavor-${l} theme-light`:"theme-light",G=l?`data-only-flavor="${l}"`:"";let B="";if(l&&b[l]){const n=l;B=`
  <details class="flavor-column flavor-${n}" ${F(n)} open style="margin-top:12px">
        <summary style="margin:8px 0"><h3 style="display:inline;margin:0">Theme: ${n.charAt(0).toUpperCase()+n.slice(1)}</h3></summary>
        <div class="polaroid-row polaroid-palette" style="margin-bottom:18px;">
          ${b[n].palette.map(u=>w(n,u.replace(/^--/,""),u)).join("")}
        </div>
        <div class="token-list-wrap">
          <table class="token-list">
            <thead><tr><th>Semantic</th><th>Swatch</th><th>Resolved</th><th>Base</th><th>Text color</th><th>Contrast</th></tr></thead>
            <tbody>
              ${C(n).map(u=>`
                <tr>
                  <td><code>${u}</code></td>
                  <td><span class="swatch-thumb" data-var="${u}" style="background:var(${u});"><span class="swatch-thumb-text" data-var="${u}">Aa</span></span></td>
                  <td class="list-resolved" data-var="${u}">resolving...</td>
                  <td class="list-chain" data-var="${u}">–</td>
                  <td class="list-text-color" data-var="${u}">computing...</td>
                  <td class="list-contrast" data-var="${u}">–</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </details>
    `}const H=`
    <div class="tokens-doc-root ${x}" ${G}>
      <style>
  .tokens-doc-root{padding:16px 40px;font-family:var(--font-family-base);}

  /* Responsive grid of compact polaroids */
  .polaroid-row{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:14px;margin-bottom:16px}
  details.flavor-column{margin-bottom:12px;border-radius:8px;padding:8px;border:1px solid rgba(0,0,0,0.04);background:var(--color-surface);color:var(--color-on-surface);transition:background 0.2s,color 0.2s}
  /* Force the Global details to use the neutral base palette (Base 100/800) via semantic tokens
     so we render using --color-surface / --color-on-surface while remaining flavor-agnostic. */
  details.flavor-column.flavor-global{
    --color-surface: var(--palette-base-100);
    --color-on-surface: var(--palette-base-800);
    background: var(--color-surface);
    color: var(--color-on-surface);
  }
  details.flavor-column[open]{box-shadow:0 1px 0 rgba(0,0,0,0.04)}
  details.flavor-column summary{list-style:none;cursor:pointer;padding:6px 8px}
  details.flavor-column summary::-webkit-details-marker{display:none}
  details.flavor-column summary h3{font-size:15px;display:inline}

  .polaroid-card{border-radius:8px;padding:10px;border:1px solid var(--palette-base-500, var(--color-outline));background:var(--color-surface,#FBFBFD);}
  /* Make the swatch a square (1:1) so color area is consistent */
  .card-swatch{width:100%;min-width:64px;min-height:64px;aspect-ratio:1/1;border-radius:8px;background-size:cover;margin-bottom:10px;position:relative;display:flex;align-items:center;justify-content:center;background:var(--color-surface,#FBFBFD);}
  .swatch-text{
    font-weight:700;
    font-size:16px;
    line-height:1;
    color:var(--color-on-surface);
    pointer-events:none;
    text-shadow:0 1px 0 rgba(0,0,0,0.15);
    transition:color 0.2s;
  }
  /* Remove any dark mode overrides for .swatch-text (do not force color) */
  /* Ensure polaroid code labels never wrap */
  .card-token-label, .card-base-label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
  .card-token-label{font-size:12px;color:inherit;margin-top:6px;word-break:break-all;transition:color 0.2s;}
  .card-base-label{font-size:11px;color:inherit;opacity:0.8;margin-top:4px;word-break:break-all;transition:color 0.2s;}
  .polaroid-card[data-copied]{outline:2px solid rgba(0,0,0,0.08)}

  /* Match global polaroid size to theme palettes */
  .flavor-global .polaroid-row{grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:16px}
  .flavor-global .polaroid-card{padding:12px}
  .polaroid-palette{grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:16px}
  .polaroid-palette .polaroid-card{padding:12px}

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
    border:2px solid rgba(0,0,0,0.08) !important;
    font-size:16px;
    font-weight:700;
    text-align:center;
    cursor:pointer;
    transition: border-color 0.2s, color 0.2s;
  }
  .swatch-thumb:hover, .swatch-thumb-text:hover {
    border-color: rgba(0,0,0,0.28) !important;
  }
  /* Let the text sample inherit theme text color; background remains the swatch color when inside .swatch-thumb */
  .swatch-thumb-text { color: var(--color-on-surface); background: transparent; display:inline-flex; align-items:center; justify-content:center; width:100%; height:100%; border-radius:6px; }
  .resolve-chain{font-size:11px;color:var(--color-on-surface, rgba(28,27,31,0.6));margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  /* Contrast cell visual states (JS will place a .contrast-badge inside the cell) */
  .list-contrast{transition:background 0.18s, color 0.18s; text-align:center}
  .contrast-badge{display:inline-block;padding:2px 8px;border-radius:999px;font-size:12px;line-height:1;min-width:36px}
  .palette-heading {
    font-size:14px;
    color:inherit;
    opacity:0.6;
    margin-bottom:12px;
    font-weight:600;
  }
      </style>
      <div id="flavors-top">
        <h1 style="margin:8px 0">Design Tokens — Palette</h1>
  <details class="flavor-column flavor-global" ${F("global")} ${!l||l==="global"?"open":""} style="margin-bottom:18px">
        <summary style="margin:8px 0"><h3 style="display:inline;margin:0">Global</h3></summary>
  <div class="palette-heading">Core Palette</div>
        <div class="polaroid-row polaroid-palette" style="margin-bottom:18px;">
          ${b.global.palette.map(n=>w("global",n.replace(/^--/,""),n)).join("")}
        </div>
  <div class="palette-heading">Status Palette</div>
        <div class="polaroid-row polaroid-palette" style="margin-bottom:18px;">
          ${b.global.statusPalette.map(n=>w("global",n.replace(/^--/,""),n)).join("")}
        </div>
        <div class="token-list-wrap">
          <table class="token-list">
            <thead><tr><th>Semantic</th><th>Swatch</th><th>Resolved</th><th>Base</th><th>Text color</th><th>Contrast</th></tr></thead>
            <tbody>
              ${b.global.tokens.map(n=>`
                <tr>
                  <td><code>${n}</code></td>
                  <td><span class="swatch-thumb" data-var="${n}" style="background:var(${n});"><span class="swatch-thumb-text" data-var="${n}">Aa</span></span></td>
                  <td class="list-resolved" data-var="${n}">resolving...</td>
                  <td class="list-chain" data-var="${n}">–</td>
                  <td class="list-text-color" data-var="${n}">computing...</td>
                  <td class="list-contrast" data-var="${n}">–</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
        </details>
  ${B}
      </div>
    </div>
  `;return setTimeout(()=>{document.querySelectorAll(".swatch-thumb, .swatch-thumb-text").forEach(n=>{n.addEventListener("click",function(u){const e=n.getAttribute("data-var");if(!e)return;let t=getComputedStyle(document.documentElement).getPropertyValue(e).trim();t||(t=e),navigator.clipboard.writeText(t),n.style.outline="2px solid #007aff",setTimeout(()=>{n.style.outline=""},600)})})},300),H}function U(){function i(e,t){try{if(t&&t.nodeType===1)return getComputedStyle(t).getPropertyValue(e).trim()}catch{}return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function l(e,t,r){t=t||[];var a=i(e,r);if(!a)return{chain:[e],value:"unset"};if(a=a.trim(),a.indexOf("var(")===0){var o=a.slice(4,-1).trim(),v=o.split(/,(.+)/).map(function(h){return h&&h.trim()}).filter(Boolean),f=v[0],s=v[1]||null;if(!f||t.indexOf(f)!==-1||f===e)return{chain:[e,f],value:s||a};var c=l(f,t.concat([e]),r);return{chain:[e].concat(c.chain),value:c.value}}return{chain:[e],value:a}}function p(e){if(!e)return null;e=e.trim();try{if(e.indexOf("rgb")===0){var t=e.replace(/[rgba()]/g,"").split(",").map(function(o){return parseFloat(o.trim())});return{r:t[0],g:t[1],b:t[2],a:t[3]||1}}if(e[0]==="#"){var r=e.slice(1);r.length===3&&(r=r.split("").map(function(o){return o+o}).join(""));var a=parseInt(r,16);return{r:a>>16&255,g:a>>8&255,b:a&255,a:1}}}catch{}return null}function w(e){var t=Math.round(e||0),r=(t<0?0:t>255?255:t).toString(16);return r.length===1?"0"+r:r}function F(e){try{var t=p(e);return t?"#"+w(t.r)+w(t.g)+w(t.b):null}catch{return null}}function b(e){try{if(!e||typeof e!="string")return e;var t=e.trim();if(t[0]!=="#")return e;var r=t.slice(1).toLowerCase();return r.length===3&&(r=r.split("").map(function(a){return a+a}).join("")),r.length===6&&/^[0-9a-f]{6}$/.test(r)?"#"+r:e}catch{return e}}function C(e){return e=e/255,e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}function x(e){return .2126*C(e.r)+.7152*C(e.g)+.0722*C(e.b)}function G(e,t){var r=x(e),a=x(t),o=Math.max(r,a),v=Math.min(r,a);return(o+.05)/(v+.05)}function B(e){if(!e||typeof e!="string")return null;const t=e.match(/^--palette-([^-]+)-(\d+)$/);if(t)return t[1].charAt(0).toUpperCase()+t[1].slice(1)+" "+t[2];const r=e.match(/^--palette-([^-]+)-([a-zA-Z]+)$/);return r?r[1].charAt(0).toUpperCase()+r[1].slice(1)+" "+r[2]:e.indexOf("--")===0?e.replace(/^--/,"").split("-").map(function(a){return a.charAt(0).toUpperCase()+a.slice(1)}).join(" "):e}function H(){document.querySelectorAll(".polaroid-card").forEach(function(e){var t=e.getAttribute("data-var");try{for(var r=e;r&&r!==document.documentElement&&!(r.classList&&Array.from(r.classList).some(function(o){return o.indexOf("flavor-")===0||o.indexOf("theme-")===0}));)r=r.parentElement;var a=t?l(t,void 0,r||document.documentElement):null}catch(o){console.error("Error resolving polaroid token:",t,o)}}),document.querySelectorAll("[data-var]").forEach(function(e){var t=e.getAttribute("data-var");if(t)try{for(var r=e;r&&r!==document.documentElement&&!(r.classList&&Array.from(r.classList).some(function(g){return g.indexOf("flavor-")===0||g.indexOf("theme-")===0}));)r=r.parentElement;var a=!1;r&&r.classList&&r.classList.contains("flavor-global")&&(a=!0);var o=null;if(a){var v={"--color-surface":"--palette-base-100","--color-surface-alt":"--palette-base-800","--color-success":"--palette-green-500","--color-warning":"--palette-yellow-500","--color-error":"--palette-red-500"};if(v[t]){var f=v[t];try{var s=l(f,void 0,document.documentElement);o={chain:[t,f],value:s&&s.value?s.value:getComputedStyle(document.documentElement).getPropertyValue(f).trim()||"unset"}}catch{o={chain:[t,f],value:getComputedStyle(document.documentElement).getPropertyValue(f).trim()||"unset"}}}else o=l(t,void 0,document.documentElement)}else o=l(t,void 0,r||document.documentElement);var c=o.value;if(e.classList.contains("list-resolved")&&(e.textContent=c||"unset"),e.classList.contains("list-chain"))if(o&&o.value&&o.value!=="unset"){var h=null;try{if(o.chain&&Array.isArray(o.chain))for(var L=0;L<o.chain.length;L++){var $=o.chain[L];if($&&typeof $=="string"&&$.indexOf("--palette-")===0){h=B($);break}}}catch{}if(!h){var O=o.value,A={"#FBFBFD":"Base 100","#9E9E9E":"Base 500","#2A2A30":"Base 800","#00800C":"Green 500","#FFB300":"Yellow 500","#D32F2F":"Red 500","#F0EEFF":"Blueberry 100","#DBD7FF":"Blueberry 200","#2E2B74":"Blueberry 500","#1E193E":"Blueberry 800","#F5F1E7":"Vanilla 100","#E8E2D6":"Vanilla 200","#6B5C4B":"Vanilla 500","#1B1C1F":"Vanilla 800","#FFF2F1":"Strawberry 100","#FFD3D2":"Strawberry 200","#800800":"Strawberry 500","#4A1614":"Strawberry 800"};try{var S=b(F(O)||O);if(S){var P=(S||"").toLowerCase(),_=(S||"").toUpperCase();h=A[P]||A[_]}}catch{}}if(h)e.innerHTML="<code>"+h+"</code>";else{try{window.__colors_last_resolutions=window.__colors_last_resolutions||[],window.__colors_last_resolutions.push({token:t,resolved:o&&o.value,chain:o&&o.chain,ctx:r&&r.className||null,ts:Date.now()})}catch{}var z="";try{o&&Array.isArray(o.chain)&&(z='<br/><small style="color:#aaa">'+o.chain.join(" → ")+"</small>"),o&&o.value&&(z+='<br/><small style="color:#aaa">'+o.value+"</small>")}catch{z=""}e.innerHTML='<small style="color:#888">Unknown base</small>'+z}}else e.innerHTML="–";if(e.classList.contains("swatch-thumb")&&(c&&c!=="unset"?(e.style.background=c,e.style.backgroundColor=c):(e.style.background="transparent",e.style.backgroundColor="transparent")),e.classList.contains("list-text-color")&&c&&c!=="unset"){var d=null,k=null;if(t.includes("--palette-"))try{var T=p(c);if(T){var I=x(T);d=I>.5?"#000000":"#ffffff"}else d="#ffffff";k=b(d)}catch{d="#ffffff",k="#ffffff"}else{if(t.startsWith("--color-")){var Q=t.replace(/^--color-/,""),J="--color-on-"+Q,R=l(J,void 0,r||document.documentElement);R.value&&R.value!=="unset"&&(d=R.value,k=J)}if(!d&&!t.includes("primary")){var Z=l("--color-on-background",void 0,r||document.documentElement);Z.value&&Z.value!=="unset"&&(d=Z.value,k="--color-on-background")}if(!d||d==="unset")try{var T=p(c);if(T){var I=x(T);d=I>.5?"#000000":"#ffffff",k=b(d)}else d="#ffffff",k="#ffffff"}catch{d="#ffffff",k="#ffffff"}}e.textContent=k||"unset";var Y=e.parentElement.querySelector(".swatch-thumb-text");if(Y&&d&&d!=="unset"){var X=b(d);Y.style.color=X}var m=e.parentElement.querySelector(".list-contrast");if(m&&c&&d)try{var T=p(c),K=p(d);if(T&&K){var E=G(T,K);m.textContent=E.toFixed(1)+":1",E>=7?(m.style.color="#006600",m.style.fontWeight="bold"):E>=4.5?(m.style.color="#006600",m.style.fontWeight="normal"):E>=3?(m.style.color="#cc6600",m.style.fontWeight="normal"):(m.style.color="#cc0000",m.style.fontWeight="normal");var y=document.createElement("span");y.className="contrast-badge",y.textContent=E.toFixed(1)+":1",y.style.background="#FFFFFF",E>=7?(y.style.color="#006600",y.style.fontWeight="700"):E>=4.5?(y.style.color="#006600",y.style.fontWeight="600"):E>=3?(y.style.color="#cc6600",y.style.fontWeight="600"):(y.style.color="#a00000",y.style.fontWeight="600"),m.innerHTML="",m.appendChild(y)}}catch{m.textContent="–",m.style.color="",m.style.fontWeight=""}}}catch(g){console.error("Error processing element:",e,g),e.classList.contains("list-resolved")&&(e.textContent="error")}})}function n(){var e=document.querySelectorAll(".polaroid-card .swatch-text");e.forEach(function(t){try{var r=t.closest(".polaroid-card");if(!r)return;for(var a=r;a&&a!==document.documentElement&&!(a.classList&&Array.from(a.classList).some(function(_){return _.indexOf("flavor-")===0||_.indexOf("theme-")===0}));)a=a.parentElement;var o=r.getAttribute("data-var");if(!o)return;var v=l(o,void 0,a||document.documentElement),f=v.value;if(f&&f!=="unset"){var s=null;if(o.includes("--palette-"))try{var c=p(f);if(c){var h=x(c);s=h>.5?"#000000":"#ffffff"}else s="#ffffff"}catch{s="#ffffff"}else{var L=o.replace(/^--color-/,"").replace(/^palette-/,""),$="--color-on-"+L,O=l($,void 0,a||document.documentElement);if(s=O.value,(!s||s==="unset")&&(o.includes("primary")&&(s=l("--color-on-primary",void 0,a||document.documentElement).value),(!s||s==="unset")&&(s=l("--color-on-background",void 0,a||document.documentElement).value)),!s||s==="unset")try{var c=p(f);if(c){var h=x(c);s=h>.5?"#000000":"#ffffff"}else s="#ffffff"}catch{s="#ffffff"}}try{if(s&&s!=="unset"){var A=b(s);t.style.color=A;var S=r.querySelector(".swatch-thumb-text");S&&(S.style.color=A)}else{t.style.color="";var P=r.querySelector(".card-token-label code");P&&(P.style.color="")}}catch{t.style.color=""}}}catch{t.style.color="#ffffff"}})}function u(){H(),n()}return u}const ee={title:"Tokens/Colors",parameters:{viewMode:"docs",layout:"fullscreen"}},D={name:"Global",render:()=>q(),play:async()=>{const i=U();console.log("Colors story: executing color logic"),setTimeout(()=>{console.log("Colors story: first execution"),i()},100),setTimeout(()=>{console.log("Colors story: second execution"),i()},300),setTimeout(()=>{console.log("Colors story: third execution"),i()},600),setTimeout(()=>{try{if(window.__colors_observer){try{window.__colors_observer.disconnect()}catch{}window.__colors_observer=null}const l=new MutationObserver(p=>{p.forEach(w=>{if(w.attributeName==="class"||w.attributeName==="data-color-scheme"){console.log("Colors story: root attribute change detected, re-executing");try{i()}catch(F){console.error(F)}}})});l.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-color-scheme"]}),window.__colors_observer=l}catch{}},100),setTimeout(()=>{try{i()}catch(l){console.error(l)}},1200)}},M={name:"Theme: Blueberry",render:()=>q({onlyFlavor:"blueberry"}),play:async()=>{const i=U();setTimeout(i,100),setTimeout(i,300),setTimeout(i,600),setTimeout(i,1200),setTimeout(()=>{try{window.__colors_observer&&(window.__colors_observer.disconnect(),window.__colors_observer=null);const l=new MutationObserver(()=>{try{i()}catch{}});l.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-color-scheme"]}),window.__colors_observer=l}catch{}},120)}},j={name:"Theme: Strawberry",render:()=>q({onlyFlavor:"strawberry"}),play:async()=>{const i=U();setTimeout(i,100),setTimeout(i,300),setTimeout(i,600),setTimeout(i,1200)}},W={name:"Theme: Vanilla",render:()=>q({onlyFlavor:"vanilla"}),play:async()=>{const i=U();setTimeout(i,100),setTimeout(i,300),setTimeout(i,600)}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
      try {
        // avoid multiple observers across hot reloads
        if (window.__colors_observer) {
          try {
            window.__colors_observer.disconnect();
          } catch (e) {}
          window.__colors_observer = null;
        }
        const observer = new MutationObserver(mutations => {
          mutations.forEach(mutation => {
            if (mutation.attributeName === 'class' || mutation.attributeName === 'data-color-scheme') {
              console.log('Colors story: root attribute change detected, re-executing');
              try {
                execute();
              } catch (e) {
                console.error(e);
              }
            }
          });
        });
        observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['class', 'data-color-scheme']
        });
        window.__colors_observer = observer;
      } catch (e) {/* ignore */}
    }, 100);
    // Final delayed run to catch late theme initialization
    setTimeout(() => {
      try {
        execute();
      } catch (e) {
        console.error(e);
      }
    }, 1200);
  }
}`,...D.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Theme: Blueberry',
  render: () => renderColors({
    onlyFlavor: 'blueberry'
  }),
  play: async () => {
    const execute = executeColorLogic();
    setTimeout(execute, 100);
    setTimeout(execute, 300);
    setTimeout(execute, 600);
    setTimeout(execute, 1200);
    // ensure observer runs for late theme changes
    setTimeout(() => {
      try {
        if (window.__colors_observer) {
          window.__colors_observer.disconnect();
          window.__colors_observer = null;
        }
        const obs = new MutationObserver(() => {
          try {
            execute();
          } catch (e) {}
        });
        obs.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['class', 'data-color-scheme']
        });
        window.__colors_observer = obs;
      } catch (e) {}
    }, 120);
  }
}`,...M.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Theme: Strawberry',
  render: () => renderColors({
    onlyFlavor: 'strawberry'
  }),
  play: async () => {
    const execute = executeColorLogic();
    setTimeout(execute, 100);
    setTimeout(execute, 300);
    setTimeout(execute, 600);
    setTimeout(execute, 1200);
  }
}`,...j.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};const te=["Colors","Blueberry","Strawberry","Vanilla"];export{M as Blueberry,D as Colors,j as Strawberry,W as Vanilla,te as __namedExportsOrder,ee as default};
