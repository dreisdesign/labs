import"./iframe-jSMGooAK.js";import"./preload-helper-PPVm8Dsz.js";function R(u={}){const c=u&&u.onlyFlavor?String(u.onlyFlavor):"",v={global:{"--palette-base-100":"Surface","--palette-base-500":"Outline","--palette-base-800":"Text","--palette-green-500":"Success","--palette-yellow-500":"Warning","--palette-red-500":"Error"},vanilla:{"--palette-vanilla-100":"Surface","--palette-vanilla-200":"Background","--palette-vanilla-300":"Primary Lighter","--palette-vanilla-500":"Primary","--palette-vanilla-800":"Primary Darker"},blueberry:{"--palette-blueberry-100":"Surface","--palette-blueberry-200":"Background","--palette-blueberry-300":"Primary Lighter","--palette-blueberry-500":"Primary","--palette-blueberry-800":"Primary Darker"},strawberry:{"--palette-strawberry-100":"Surface","--palette-strawberry-200":"Background","--palette-strawberry-300":"Primary Lighter","--palette-strawberry-500":"Primary","--palette-strawberry-800":"Primary Darker"}},w=(s,g,i,e)=>{let o="";return v[s]&&v[s][i]&&(o=`<br><span style="font-weight:bold;font-size:13px;opacity:0.8;">${v[s][i]}</span>`),`
    <div class="polaroid-card${i==="--color-primary"?" polaroid-primary":""}" data-var="${i}" role="button" tabindex="0" title="Copy ${i}">
      <div class="card-swatch" style="background:var(${i});">
        <div class="swatch-text">${(()=>{const r=String(i).replace(/^--/,"");if(i==="--color-primary-lighter")return"Primary Lighter";if(i==="--color-on-primary-lighter")return"On Primary Lighter";const a=r.match(/^palette-([^-]+)-(\d+)$/);if(a)return a[1].charAt(0).toUpperCase()+a[1].slice(1)+" "+a[2];const t=r.match(/^palette-([^-]+)-([a-zA-Z]+)$/);return t?t[1].charAt(0).toUpperCase()+t[1].slice(1)+" "+t[2]:r.replace(/^color-/,"").split("-").map(function(l){return l.charAt(0).toUpperCase()+l.slice(1)}).join(" ")||r})()}${o}</div>
      </div>
      <div class="card-token-label"><code>${i}</code></div>
      
    </div>
    `},_=s=>c&&c!==s?'style="display:none;"':"",h={global:{label:"Global",tokens:["--color-surface","--color-surface-alt","--color-success","--color-warning","--color-error"],palette:["--palette-base-100","--palette-base-500","--palette-base-800"],statusPalette:["--palette-green-500","--palette-yellow-500","--palette-red-500"]},blueberry:{semantic:["--color-primary","--color-primary-darker","--color-primary-lighter"],neutrals:["--color-surface","--color-background"],palette:["--palette-blueberry-100","--palette-blueberry-200","--palette-blueberry-300","--palette-blueberry-500","--palette-blueberry-800"],accents:[]},strawberry:{semantic:["--color-primary","--color-primary-darker","--color-primary-lighter"],neutrals:["--color-surface","--color-background"],palette:["--palette-strawberry-100","--palette-strawberry-200","--palette-strawberry-300","--palette-strawberry-500","--palette-strawberry-800"],accents:[]},vanilla:{semantic:["--color-primary","--color-primary-darker","--color-primary-lighter"],neutrals:["--color-surface","--color-background"],palette:["--palette-vanilla-100","--palette-vanilla-200","--palette-vanilla-300","--palette-vanilla-500","--palette-vanilla-800"],accents:[]}},O=s=>{const g=h[s];return Array.from(new Set([...g.semantic||[],...g.neutrals||[]]))},T=c?`flavor-${c} theme-light`:"flavor-global theme-light",I=c?`data-only-flavor="${c}"`:"";let P="";if(c&&h[c]){const s=c,g=O(s);P=`
  <details class="flavor-column flavor-${s}" ${_(s)} open style="margin-top:12px">
        <summary style="margin:8px 0"><h3 style="display:inline;margin:0">Theme: ${s.charAt(0).toUpperCase()+s.slice(1)}</h3></summary>
        <div class="polaroid-row polaroid-palette" style="margin-bottom:18px;">
          ${h[s].palette.map(i=>w(s,i.replace(/^--/,""),i)).join("")}
        </div>
        <div class="token-list-wrap">
          <table class="token-list">
            <thead><tr><th>Semantic</th><th>Swatch</th><th>Resolved</th><th>Base</th><th>Text color</th><th>Contrast</th></tr></thead>
            <tbody>
              ${g.map(i=>`
                <tr>
                  <td><code>${i}</code></td>
                  <td><span class="swatch-thumb" data-var="${i}" style="background:var(${i});"><span class="swatch-thumb-text" data-var="${i}">Aa</span></span></td>
                  <td class="list-resolved" data-var="${i}">resolving...</td>
                  <td class="list-chain" data-var="${i}">–</td>
                  <td class="list-text-color" data-var="${i}">computing...</td>
                  <td class="list-contrast" data-var="${i}">–</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </details>
    `}const F=`
    <div style="width:100%; display:flex; justify-content:center;">
      <div style="max-width:1200px; padding:20px; font-family:var(--font-family-base); color:var(--color-on-background); background:var(--color-surface);">
        <div class="tokens-doc-root ${T}" ${I}>
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
  /* Override text color for primary-lighter swatch to use correct on color */
  .polaroid-card[data-var="--color-primary-lighter"] .swatch-text {
    color: var(--color-on-primary-lighter, var(--color-on-surface));
  }
  /* Override text color for dark palette tokens (500, 700, 800, 900) to use light text */
  .polaroid-card[data-var*="-500"] .swatch-text,
  .polaroid-card[data-var*="-700"] .swatch-text,
  .polaroid-card[data-var*="-800"] .swatch-text,
  .polaroid-card[data-var*="-900"] .swatch-text,
  .polaroid-card[data-var="--palette-base-800"] .swatch-text {
    color: var(--color-on-primary-darker, #fff);
  }
  /* Override yellow-500 swatch to use dark text for contrast */
  .polaroid-card[data-var="--palette-yellow-500"] .swatch-text {
    color: var(--color-on-primary-lighter, #222);
  }
  /* Override text color for light palette tokens (100, 200, 300) to use dark text */
  .polaroid-card[data-var*="-100"] .swatch-text,
  .polaroid-card[data-var*="-200"] .swatch-text,
  .polaroid-card[data-var*="-300"] .swatch-text,
  .polaroid-card[data-var="--palette-base-100"] .swatch-text,
  .polaroid-card[data-var="--palette-base-500"] .swatch-text {
    color: var(--color-on-primary-lighter, #000);
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
  <details class="flavor-column flavor-global" ${_("global")} ${!c||c==="global"?"open":""} style="margin-bottom:18px">
        <summary style="margin:8px 0"><h3 style="display:inline;margin:0">Global</h3></summary>
  <div class="palette-heading">Core Palette</div>
        <div class="polaroid-row polaroid-palette" style="margin-bottom:18px;">
          ${h.global.palette.map(s=>w("global",s.replace(/^--/,""),s)).join("")}
        </div>
  <div class="palette-heading">Status Palette</div>
        <div class="polaroid-row polaroid-palette" style="margin-bottom:18px;">
          ${h.global.statusPalette.map(s=>w("global",s.replace(/^--/,""),s)).join("")}
        </div>
        <div class="token-list-wrap">
          <table class="token-list">
            <thead><tr><th>Semantic</th><th>Swatch</th><th>Resolved</th><th>Base</th><th>Text color</th><th>Contrast</th></tr></thead>
            <tbody>
              ${h.global.tokens.map(s=>`
                <tr>
                  <td><code>${s}</code></td>
                  <td><span class="swatch-thumb" data-var="${s}" style="background:var(${s});"><span class="swatch-thumb-text" data-var="${s}">Aa</span></span></td>
                  <td class="list-resolved" data-var="${s}">resolving...</td>
                  <td class="list-chain" data-var="${s}">–</td>
                  <td class="list-text-color" data-var="${s}">computing...</td>
                  <td class="list-contrast" data-var="${s}">–</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
        </details>
  ${P}
      </div>
    </div>
  </div>
  </div>
  `;return setTimeout(()=>{document.querySelectorAll(".swatch-thumb, .swatch-thumb-text").forEach(t=>{t.addEventListener("click",function(d){const l=t.getAttribute("data-var");if(!l)return;let n=getComputedStyle(document.documentElement).getPropertyValue(l).trim();n||(n=l),navigator.clipboard.writeText(n),t.style.outline="2px solid #007aff",setTimeout(()=>{t.style.outline=""},600)})}),document.querySelectorAll(".list-resolved").forEach(t=>{const d=t.getAttribute("data-var");if(d){const l=getComputedStyle(document.documentElement).getPropertyValue(d).trim();t.textContent=l||"unset"}});const s=document.documentElement.getAttribute("data-flavor"),g=Array.from(document.documentElement.classList).find(t=>t.indexOf("flavor-")===0);let i=s||(g?g.replace("flavor-",""):"blueberry");if(!s&&!g)try{const d=new URL(window.location.href).searchParams.get("globals")||"",l=decodeURIComponent(d||"");try{if(l&&(l[0]==="{"||l.indexOf('"flavor"')!==-1)){const n=JSON.parse(l);n&&n.flavor&&(i=n.flavor)}}catch{}if(!i||i==="blueberry"){const n=l.match(/flavor:([^,&\}\"]+)/)||d.match(/flavor:([^,&\}\"]+)/)||d.match(/flavor%3A([^,&\}\"]+)/i);n&&n[1]&&(i=decodeURIComponent(n[1]))}}catch{}const e=(t,d)=>`--palette-${t}-${d}`,o=t=>({"--color-primary":e(t,"500"),"--color-primary-darker":e(t,"800"),"--color-primary-lighter":e(t,"300"),"--color-surface":e(t,"100"),"--color-background":e(t,"200")}),r={"--color-primary":"--color-on-primary","--color-primary-darker":"--color-on-primary-darker","--color-primary-lighter":"--color-on-primary-lighter","--color-surface":"--color-on-surface","--color-background":"--color-on-background"},a=o(i);try{window.__colors_last_resolutions=window.__colors_last_resolutions||[],window.__colors_last_resolutions.push({debug:"baseMapSnapshot",flavor:i,baseMap:a,ts:Date.now()})}catch{}document.querySelectorAll(".list-chain").forEach(t=>{const d=t.getAttribute("data-var");if(d){const l=a[d]||"–";t.innerHTML=l!=="–"?`<code>${l}</code>`:"–"}}),document.querySelectorAll(".list-text-color").forEach(t=>{const d=t.getAttribute("data-var");if(d){const l=r[d];l?t.innerHTML=`<code>${l}</code>`:t.textContent="computing..."}})},300),F}function G(){function u(e,o){try{if(o&&o.nodeType===1)return getComputedStyle(o).getPropertyValue(e).trim()}catch{}return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function c(e,o,r){o=o||[];var a=u(e,r);if(!a)return{chain:[e],value:"unset"};if(a=a.trim(),a.indexOf("var(")===0){var t=a.slice(4,-1).trim(),d=t.split(/,(.+)/).map(function(x){return x&&x.trim()}).filter(Boolean),l=d[0],n=d[1]||null;if(!l||o.indexOf(l)!==-1||l===e)return{chain:[e,l],value:n||a};var p=c(l,o.concat([e]),r);return{chain:[e].concat(p.chain),value:p.value}}return{chain:[e],value:a}}function v(e){if(!e)return null;e=e.trim();try{if(e.indexOf("rgb")===0){var o=e.replace(/[rgba()]/g,"").split(",").map(function(t){return parseFloat(t.trim())});return{r:o[0],g:o[1],b:o[2],a:o[3]||1}}if(e[0]==="#"){var r=e.slice(1);r.length===3&&(r=r.split("").map(function(t){return t+t}).join(""));var a=parseInt(r,16);return{r:a>>16&255,g:a>>8&255,b:a&255,a:1}}}catch{}return null}function w(e){var o=Math.round(e||0),r=(o<0?0:o>255?255:o).toString(16);return r.length===1?"0"+r:r}function _(e){try{var o=v(e);return o?"#"+w(o.r)+w(o.g)+w(o.b):null}catch{return null}}function h(e){try{if(!e||typeof e!="string")return e;var o=e.trim();if(o[0]!=="#")return e;var r=o.slice(1).toLowerCase();return r.length===3&&(r=r.split("").map(function(a){return a+a}).join("")),r.length===6&&/^[0-9a-f]{6}$/.test(r)?"#"+r:e}catch{return e}}function O(e){return e=e/255,e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}function T(e){return .2126*O(e.r)+.7152*O(e.g)+.0722*O(e.b)}function I(e,o){var r=T(e),a=T(o),t=Math.max(r,a),d=Math.min(r,a);return(t+.05)/(d+.05)}const P={global:{tokens:["--color-surface","--color-surface-hover","--color-surface-alt","--color-success","--color-warning","--color-error"],palette:["--palette-base-100","--palette-base-800"],statusPalette:["--palette-green-500","--palette-yellow-500","--palette-red-500"]},vanilla:{semantic:["--color-primary","--color-primary-darker"],neutrals:["--color-surface","--color-surface-hover","--color-background"],palette:["--palette-vanilla-100","--palette-vanilla-200","--palette-vanilla-500","--palette-vanilla-800"],accents:[]},blueberry:{semantic:["--color-primary","--color-primary-darker"],neutrals:["--color-surface","--color-surface-hover","--color-background"],palette:["--palette-blueberry-100","--palette-blueberry-200","--palette-blueberry-500","--palette-blueberry-800"],accents:[]},strawberry:{semantic:["--color-primary","--color-primary-darker"],neutrals:["--color-surface","--color-surface-hover","--color-background"],palette:["--palette-strawberry-100","--palette-strawberry-200","--palette-strawberry-500","--palette-strawberry-800"],accents:[]}};function F(e){if(!e||typeof e!="string")return null;const o=e.match(/^--palette-([^-]+)-(\d+)$/);if(o)return o[1].charAt(0).toUpperCase()+o[1].slice(1)+" "+o[2];const r=e.match(/^--palette-([^-]+)-([a-zA-Z]+)$/);return r?r[1].charAt(0).toUpperCase()+r[1].slice(1)+" "+r[2]:e.indexOf("--")===0?e.replace(/^--/,"").split("-").map(function(a){return a.charAt(0).toUpperCase()+a.slice(1)}).join(" "):e}function s(){document.querySelectorAll(".polaroid-card").forEach(function(e){var o=e.getAttribute("data-var");try{for(var r=e;r&&r!==document.documentElement&&!(r.classList&&Array.from(r.classList).some(function(t){return t.indexOf("flavor-")===0||t.indexOf("theme-")===0}));)r=r.parentElement;var a=o?c(o,void 0,r||document.documentElement):null}catch(t){console.error("Error resolving polaroid token:",o,t)}}),document.querySelectorAll("[data-var]").forEach(function(e){var o=e.getAttribute("data-var");if(o)try{for(var r=e;r&&r!==document.documentElement&&!(r.classList&&Array.from(r.classList).some(function(m){return m.indexOf("flavor-")===0||m.indexOf("theme-")===0}));)r=r.parentElement;var a=!1;r&&r.classList&&r.classList.contains("flavor-global")&&(a=!0);var t=null;if(a){var d={"--color-surface":"--palette-base-100","--color-surface-alt":"--palette-base-800","--color-success":"--palette-green-500","--color-warning":"--palette-yellow-500","--color-error":"--palette-red-500"};if(d[o]){var l=d[o];try{var n=c(l,void 0,document.documentElement);t={chain:[o,l],value:n&&n.value?n.value:getComputedStyle(document.documentElement).getPropertyValue(l).trim()||"unset"}}catch{t={chain:[o,l],value:getComputedStyle(document.documentElement).getPropertyValue(l).trim()||"unset"}}}else t=c(o,void 0,document.documentElement)}else t=c(o,void 0,r||document.documentElement);var p=t.value;if(e.classList.contains("list-resolved")&&(e.textContent=p||"unset"),e.classList.contains("list-chain")){var x=!1;try{var M=e.querySelector&&e.querySelector("code");M&&M.textContent&&M.textContent.indexOf("--palette-")===0&&(x=!0)}catch{}if(!x&&t&&t.value&&t.value!=="unset"){var A=null;try{if(t.chain&&Array.isArray(t.chain))for(var z=0;z<t.chain.length;z++){var E=t.chain[z];if(E&&typeof E=="string"&&E.indexOf("--palette-")===0){A=F(E);break}}}catch{}if(!A){var k=t.value,J={};try{Object.keys(P).forEach(function(m){var L=P[m];L&&Array.isArray(L.palette)&&L.palette.forEach(function(j){try{var q=getComputedStyle(document.documentElement).getPropertyValue(j).trim();if(q&&q!=="unset"){var ee=h(_(q)||q);ee&&(J[ee.toLowerCase()]=F(j))}}catch{}})}),["--palette-base-100","--palette-base-500","--palette-base-800","--palette-green-500","--palette-yellow-500","--palette-red-500","--palette-blueberry-300","--palette-vanilla-300","--palette-strawberry-300"].forEach(function(m){try{var L=getComputedStyle(document.documentElement).getPropertyValue(m).trim();if(L&&L!=="unset"){var j=h(_(L)||L);j&&(J[j.toLowerCase()]=F(m))}}catch{}});var X=h(_(k)||k);X&&(A=J[(X||"").toLowerCase()])}catch{}}if(A)e.innerHTML="<code>"+A+"</code>";else{try{window.__colors_last_resolutions=window.__colors_last_resolutions||[],window.__colors_last_resolutions.push({token:o,resolved:t&&t.value,chain:t&&t.chain,ctx:r&&r.className||null,ts:Date.now()})}catch{}var B="";try{t&&Array.isArray(t.chain)&&(B='<br/><small style="color:#aaa">'+t.chain.join(" → ")+"</small>"),t&&t.value&&(B+='<br/><small style="color:#aaa">'+t.value+"</small>")}catch{B=""}e.innerHTML='<small style="color:#888">Unknown base</small>'+B}}else e.innerHTML="–"}if(e.classList.contains("swatch-thumb")&&(p&&p!=="unset"?(e.style.background=p,e.style.backgroundColor=p):(e.style.background="transparent",e.style.backgroundColor="transparent")),e.classList.contains("list-text-color")&&p&&p!=="unset"){var f=null,C=null;if(o.includes("--palette-"))try{var S=v(p);if(S){var Z=T(S);f=Z>.5?"#000000":"#ffffff"}else f="#ffffff";C=h(f)}catch{f="#ffffff",C="#ffffff"}else{if(o.startsWith("--color-")){var te=o.replace(/^--color-/,""),Y="--color-on-"+te,K=c(Y,void 0,r||document.documentElement);K.value&&K.value!=="unset"&&(f=K.value,C=Y)}if(!f&&!o.includes("primary")){var Q=c("--color-on-background",void 0,r||document.documentElement);Q.value&&Q.value!=="unset"&&(f=Q.value,C="--color-on-background")}if(!f||f==="unset")try{var S=v(p);if(S){var Z=T(S);f=Z>.5?"#000000":"#ffffff",C=h(f)}else f="#ffffff",C="#ffffff"}catch{f="#ffffff",C="#ffffff"}}e.textContent=C||"unset";var N=e.parentElement.querySelector(".swatch-thumb-text");if(N&&f&&f!=="unset"){var re=h(f);N.style.color=re}var y=e.parentElement.querySelector(".list-contrast");if(y&&p&&f)try{var S=v(p),V=v(f);if(S&&V){var $=I(S,V);y.textContent=$.toFixed(1)+":1",$>=7?(y.style.color="#006600",y.style.fontWeight="bold"):$>=4.5?(y.style.color="#006600",y.style.fontWeight="normal"):$>=3?(y.style.color="#cc6600",y.style.fontWeight="normal"):(y.style.color="#cc0000",y.style.fontWeight="normal");var b=document.createElement("span");b.className="contrast-badge",b.textContent=$.toFixed(1)+":1",b.style.background="#FFFFFF",$>=7?(b.style.color="#006600",b.style.fontWeight="700"):$>=4.5?(b.style.color="#006600",b.style.fontWeight="600"):$>=3?(b.style.color="#cc6600",b.style.fontWeight="600"):(b.style.color="#a00000",b.style.fontWeight="600"),y.innerHTML="",y.appendChild(b)}}catch{y.textContent="–",y.style.color="",y.style.fontWeight=""}}}catch(m){console.error("Error processing element:",e,m),e.classList.contains("list-resolved")&&(e.textContent="error")}})}function g(){var e=document.querySelectorAll(".polaroid-card .swatch-text");e.forEach(function(o){try{var r=o.closest(".polaroid-card");if(!r)return;for(var a=r;a&&a!==document.documentElement&&!(a.classList&&Array.from(a.classList).some(function(k){return k.indexOf("flavor-")===0||k.indexOf("theme-")===0}));)a=a.parentElement;var t=r.getAttribute("data-var");if(!t)return;var d=c(t,void 0,a||document.documentElement),l=d.value;if(l&&l!=="unset"){var n=null;if(t.includes("--palette-"))try{var p=v(l);if(p){var x=T(p);n=x>.5?"#000000":"#ffffff"}else n="#ffffff"}catch{n="#ffffff"}else{var M=t.replace(/^--color-/,"").replace(/^palette-/,""),A="--color-on-"+M,z=c(A,void 0,a||document.documentElement);if(n=z.value,(!n||n==="unset")&&(t.includes("primary")&&(n=c("--color-on-primary",void 0,a||document.documentElement).value),(!n||n==="unset")&&(n=c("--color-on-background",void 0,a||document.documentElement).value)),!n||n==="unset")try{var p=v(l);if(p){var x=T(p);n=x>.5?"#000000":"#ffffff"}else n="#ffffff"}catch{n="#ffffff"}}try{var E=r.querySelector(".swatch-thumb-text");E&&(n&&n!=="unset"?E.style.color=h(n):E.style.color="")}catch{}}}catch{}})}function i(){s(),g()}return i}const ne={title:"Tokens/Colors",parameters:{viewMode:"docs"}},W={name:"Global",render:()=>R(),play:async()=>{const u=G();console.log("Colors story: executing color logic"),setTimeout(()=>{console.log("Colors story: first execution"),u()},100),setTimeout(()=>{console.log("Colors story: second execution"),u()},300),setTimeout(()=>{console.log("Colors story: third execution"),u()},600),setTimeout(()=>{try{if(window.__colors_observer){try{window.__colors_observer.disconnect()}catch{}window.__colors_observer=null}const c=new MutationObserver(v=>{v.forEach(w=>{if(w.attributeName==="class"||w.attributeName==="data-color-scheme"){console.log("Colors story: root attribute change detected, re-executing");try{u()}catch(_){console.error(_)}}})});c.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-color-scheme"]}),window.__colors_observer=c}catch{}},100),setTimeout(()=>{try{u()}catch(c){console.error(c)}},1200)}},U={name:"Theme: Blueberry",render:()=>R({onlyFlavor:"blueberry"}),play:async()=>{const u=G();setTimeout(u,100),setTimeout(u,300),setTimeout(u,600),setTimeout(u,1200),setTimeout(()=>{try{window.__colors_observer&&(window.__colors_observer.disconnect(),window.__colors_observer=null);const c=new MutationObserver(()=>{try{u()}catch{}});c.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-color-scheme"]}),window.__colors_observer=c}catch{}},120)}},D={name:"Theme: Strawberry",render:()=>R({onlyFlavor:"strawberry"}),play:async()=>{const u=G();setTimeout(u,100),setTimeout(u,300),setTimeout(u,600),setTimeout(u,1200)}},H={name:"Theme: Vanilla",render:()=>R({onlyFlavor:"vanilla"}),play:async()=>{const u=G();setTimeout(u,100),setTimeout(u,300),setTimeout(u,600)}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};const se=["Colors","Blueberry","Strawberry","Vanilla"];export{U as Blueberry,W as Colors,D as Strawberry,H as Vanilla,se as __namedExportsOrder,ne as default};
