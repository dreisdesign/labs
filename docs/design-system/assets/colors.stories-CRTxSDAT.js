import"./iframe-VV1Zl8Nl.js";import"./preload-helper-D9Z9MdNV.js";function D(i={}){const l=i&&i.onlyFlavor?String(i.onlyFlavor):"",f={global:{"--palette-base-100":"Surface","--palette-base-500":"Outline","--palette-base-800":"Text","--palette-green-500":"Success","--palette-yellow-500":"Warning","--palette-red-500":"Error"},vanilla:{"--palette-vanilla-100":"Background","--palette-vanilla-500":"Primary","--palette-vanilla-800":"Primary Darker"},blueberry:{"--palette-blueberry-200":"Background","--palette-blueberry-500":"Primary","--palette-blueberry-800":"Primary Darker"},strawberry:{"--palette-strawberry-200":"Background","--palette-strawberry-500":"Primary","--palette-strawberry-800":"Primary Darker"}},x=(a,u,e,o)=>{let r="";return f[a]&&f[a][e]&&(r=`<br><span style="font-weight:bold;font-size:13px;opacity:0.8;">${f[a][e]}</span>`),`
    <div class="polaroid-card${e==="--color-primary"?" polaroid-primary":""}" data-var="${e}" role="button" tabindex="0" title="Copy ${e}">
      <div class="card-swatch" style="background:var(${e});">
        <div class="swatch-text">${(()=>{const t=String(e).replace(/^--/,""),n=t.match(/^palette-([^-]+)-(\d+)$/);if(n)return n[1].charAt(0).toUpperCase()+n[1].slice(1)+" "+n[2];const d=t.match(/^palette-([^-]+)-([a-zA-Z]+)$/);return d?d[1].charAt(0).toUpperCase()+d[1].slice(1)+" "+d[2]:t.replace(/^color-/,"").split("-").map(function(s){return s.charAt(0).toUpperCase()+s.slice(1)}).join(" ")||t})()}${r}</div>
      </div>
      <div class="card-token-label"><code>${e}</code></div>
      
    </div>
    `},$=a=>l&&l!==a?'style="display:none;"':"",b={global:{label:"Global",tokens:["--color-surface","--color-surface-alt","--color-success","--color-warning","--color-error"],palette:["--palette-base-100","--palette-base-500","--palette-base-800"],statusPalette:["--palette-green-500","--palette-yellow-500","--palette-red-500"]},blueberry:{semantic:["--color-primary","--color-primary-darker"],neutrals:["--color-surface","--color-background"],palette:["--palette-blueberry-100","--palette-blueberry-200","--palette-blueberry-500","--palette-blueberry-800"],accents:[]},strawberry:{semantic:["--color-primary","--color-primary-darker"],neutrals:["--color-surface","--color-background"],palette:["--palette-strawberry-100","--palette-strawberry-200","--palette-strawberry-500","--palette-strawberry-800"],accents:[]},vanilla:{semantic:["--color-primary","--color-primary-darker"],neutrals:["--color-surface","--color-background"],palette:["--palette-vanilla-100","--palette-vanilla-200","--palette-vanilla-500","--palette-vanilla-800"],accents:[]}},C=a=>{const u=b[a];return Array.from(new Set([...u.semantic||[],...u.neutrals||[]]))},_=l?`flavor-${l} theme-light`:"flavor-vanilla theme-light",j=l?`data-only-flavor="${l}"`:"";let A="";if(l&&b[l]){const a=l;A=`
  <details class="flavor-column flavor-${a}" ${$(a)} open style="margin-top:12px">
        <summary style="margin:8px 0"><h3 style="display:inline;margin:0">Theme: ${a.charAt(0).toUpperCase()+a.slice(1)}</h3></summary>
        <div class="polaroid-row polaroid-palette" style="margin-bottom:18px;">
          ${b[a].palette.map(u=>x(a,u.replace(/^--/,""),u)).join("")}
        </div>
        <div class="token-list-wrap">
          <table class="token-list">
            <thead><tr><th>Semantic</th><th>Swatch</th><th>Resolved</th><th>Base</th><th>Text color</th><th>Contrast</th></tr></thead>
            <tbody>
              ${C(a).map(u=>`
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
    `}const W=`
    <div class="tokens-doc-root ${_}" ${j}>
      <style>
  .tokens-doc-root{padding:16px 40px;font-family:var(--font-family-base);}

  /* Responsive grid of compact polaroids */
  .polaroid-row{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:14px;margin-bottom:16px}
  details.flavor-column{margin-bottom:12px;border-radius:8px;padding:8px;border:1px solid rgba(0,0,0,0.04);background:var(--color-surface);color:var(--color-on-surface);transition:background 0.2s,color 0.2s}
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
        <details class="flavor-column flavor-global" ${$("global")} ${!l||l==="global"?"open":""} style="margin-bottom:18px">
        <summary style="margin:8px 0"><h3 style="display:inline;margin:0">Global</h3></summary>
  <div class="palette-heading">Core Palette</div>
        <div class="polaroid-row polaroid-palette" style="margin-bottom:18px;">
          ${b.global.palette.map(a=>x("global",a.replace(/^--/,""),a)).join("")}
        </div>
  <div class="palette-heading">Status Palette</div>
        <div class="polaroid-row polaroid-palette" style="margin-bottom:18px;">
          ${b.global.statusPalette.map(a=>x("global",a.replace(/^--/,""),a)).join("")}
        </div>
        <div class="token-list-wrap">
          <table class="token-list">
            <thead><tr><th>Semantic</th><th>Swatch</th><th>Resolved</th><th>Base</th><th>Text color</th><th>Contrast</th></tr></thead>
            <tbody>
              ${b.global.tokens.map(a=>`
                <tr>
                  <td><code>${a}</code></td>
                  <td><span class="swatch-thumb" data-var="${a}" style="background:var(${a});"><span class="swatch-thumb-text" data-var="${a}">Aa</span></span></td>
                  <td class="list-resolved" data-var="${a}">resolving...</td>
                  <td class="list-chain" data-var="${a}">–</td>
                  <td class="list-text-color" data-var="${a}">computing...</td>
                  <td class="list-contrast" data-var="${a}">–</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
        </details>
  ${A}
      </div>
    </div>
  `;return setTimeout(()=>{document.querySelectorAll(".swatch-thumb, .swatch-thumb-text").forEach(a=>{a.addEventListener("click",function(u){const e=a.getAttribute("data-var");if(!e)return;let o=getComputedStyle(document.documentElement).getPropertyValue(e).trim();o||(o=e),navigator.clipboard.writeText(o),a.style.outline="2px solid #007aff",setTimeout(()=>{a.style.outline=""},600)})})},300),W}function P(){function i(e,o){try{if(o&&o.nodeType===1)return getComputedStyle(o).getPropertyValue(e).trim()}catch{}return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function l(e,o,r){o=o||[];var t=i(e,r);if(!t)return{chain:[e],value:"unset"};if(t=t.trim(),t.indexOf("var(")===0){var n=t.slice(4,-1).trim(),d=n.split(/,(.+)/).map(function(k){return k&&k.trim()}).filter(Boolean),p=d[0],s=d[1]||null;if(!p||o.indexOf(p)!==-1||p===e)return{chain:[e,p],value:s||t};var h=l(p,o.concat([e]),r);return{chain:[e].concat(h.chain),value:h.value}}return{chain:[e],value:t}}function f(e){if(!e)return null;e=e.trim();try{if(e.indexOf("rgb")===0){var o=e.replace(/[rgba()]/g,"").split(",").map(function(n){return parseFloat(n.trim())});return{r:o[0],g:o[1],b:o[2],a:o[3]||1}}if(e[0]==="#"){var r=e.slice(1);r.length===3&&(r=r.split("").map(function(n){return n+n}).join(""));var t=parseInt(r,16);return{r:t>>16&255,g:t>>8&255,b:t&255,a:1}}}catch{}return null}function x(e){var o=Math.round(e||0),r=(o<0?0:o>255?255:o).toString(16);return r.length===1?"0"+r:r}function $(e){try{var o=f(e);return o?"#"+x(o.r)+x(o.g)+x(o.b):null}catch{return null}}function b(e){try{if(!e||typeof e!="string")return e;var o=e.trim();if(o[0]!=="#")return e;var r=o.slice(1).toLowerCase();return r.length===3&&(r=r.split("").map(function(t){return t+t}).join("")),r.length===6&&/^[0-9a-f]{6}$/.test(r)?"#"+r:e}catch{return e}}function C(e){return e=e/255,e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}function _(e){return .2126*C(e.r)+.7152*C(e.g)+.0722*C(e.b)}function j(e,o){var r=_(e),t=_(o),n=Math.max(r,t),d=Math.min(r,t);return(n+.05)/(d+.05)}function A(e){if(!e||typeof e!="string")return null;const o=e.match(/^--palette-([^-]+)-(\d+)$/);if(o)return o[1].charAt(0).toUpperCase()+o[1].slice(1)+" "+o[2];const r=e.match(/^--palette-([^-]+)-([a-zA-Z]+)$/);return r?r[1].charAt(0).toUpperCase()+r[1].slice(1)+" "+r[2]:e.indexOf("--")===0?e.replace(/^--/,"").split("-").map(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}).join(" "):e}function W(){document.querySelectorAll(".polaroid-card").forEach(function(e){var o=e.getAttribute("data-var");try{for(var r=e;r&&r!==document.documentElement&&!(r.classList&&Array.from(r.classList).some(function(n){return n.indexOf("flavor-")===0||n.indexOf("theme-")===0}));)r=r.parentElement;var t=o?l(o,void 0,r||document.documentElement):null}catch(n){console.error("Error resolving polaroid token:",o,n)}}),document.querySelectorAll("[data-var]").forEach(function(e){var o=e.getAttribute("data-var");if(o)try{for(var r=e;r&&r!==document.documentElement&&!(r.classList&&Array.from(r.classList).some(function(w){return w.indexOf("flavor-")===0||w.indexOf("theme-")===0}));)r=r.parentElement;var t=l(o,void 0,r||document.documentElement),n=t.value;if(e.classList.contains("list-resolved")&&(e.textContent=n||"unset"),e.classList.contains("list-chain"))if(t&&t.value&&t.value!=="unset"){var d=null;try{if(t.chain&&Array.isArray(t.chain))for(var p=0;p<t.chain.length;p++){var s=t.chain[p];if(s&&typeof s=="string"&&s.indexOf("--palette-")===0){d=A(s);break}}}catch{}if(!d){var h=t.value,k={"#FBFBFD":"Base 100","#9E9E9E":"Base 500","#2A2A30":"Base 800","#00800C":"Green 500","#FFB300":"Yellow 500","#D32F2F":"Red 500","#F0EEFF":"Blueberry 100","#DBD7FF":"Blueberry 200","#2E2B74":"Blueberry 500","#1E193E":"Blueberry 800","#F5F1E7":"Vanilla 100","#E8E2D6":"Vanilla 200","#6B5C4B":"Vanilla 500","#372116":"Vanilla 800","#FFF2F1":"Strawberry 100","#FFD3D2":"Strawberry 200","#800800":"Strawberry 500","#4A1614":"Strawberry 800"};try{var L=b($(h)||h);L&&(d=k[L.toUpperCase()])}catch{}}if(d)e.innerHTML="<code>"+d+"</code>";else{try{window.__colors_last_resolutions=window.__colors_last_resolutions||[],window.__colors_last_resolutions.push({token:o,resolved:t&&t.value,chain:t&&t.chain,ctx:r&&r.className||null,ts:Date.now()})}catch{}var S="";try{t&&Array.isArray(t.chain)&&(S='<br/><small style="color:#aaa">'+t.chain.join(" → ")+"</small>"),t&&t.value&&(S+='<br/><small style="color:#aaa">'+t.value+"</small>")}catch{S=""}e.innerHTML='<small style="color:#888">Unknown base</small>'+S}}else e.innerHTML="–";if(e.classList.contains("swatch-thumb")&&(n&&n!=="unset"?(e.style.background=n,e.style.backgroundColor=n):(e.style.background="transparent",e.style.backgroundColor="transparent")),e.classList.contains("list-text-color")&&n&&n!=="unset"){var c=null,y=null;if(o.includes("--palette-"))try{var g=f(n);if(g){var F=_(g);c=F>.5?"#000000":"#ffffff"}else c="#ffffff";y=b(c)}catch{c="#ffffff",y="#ffffff"}else{if(o.startsWith("--color-")){var T=o.replace(/^--color-/,""),G="--color-on-"+T,q=l(G,void 0,r||document.documentElement);q.value&&q.value!=="unset"&&(c=q.value,y=G)}if(!c&&!o.includes("primary")){var U=l("--color-on-background",void 0,r||document.documentElement);U.value&&U.value!=="unset"&&(c=U.value,y="--color-on-background")}if(!c||c==="unset")try{var g=f(n);if(g){var F=_(g);c=F>.5?"#000000":"#ffffff",y=b(c)}else c="#ffffff",y="#ffffff"}catch{c="#ffffff",y="#ffffff"}}e.textContent=y||"unset";var H=e.parentElement.querySelector(".swatch-thumb-text");if(H&&c&&c!=="unset"){var I=b(c);H.style.color=I}var m=e.parentElement.querySelector(".list-contrast");if(m&&n&&c)try{var g=f(n),R=f(c);if(g&&R){var E=j(g,R);m.textContent=E.toFixed(1)+":1",E>=7?(m.style.color="#006600",m.style.fontWeight="bold"):E>=4.5?(m.style.color="#006600",m.style.fontWeight="normal"):E>=3?(m.style.color="#cc6600",m.style.fontWeight="normal"):(m.style.color="#cc0000",m.style.fontWeight="normal");var v=document.createElement("span");v.className="contrast-badge",v.textContent=E.toFixed(1)+":1",E>=7?(v.style.background="#eaf7ea",v.style.color="#006600",v.style.fontWeight="700"):E>=4.5?(v.style.background="#eaf7ea",v.style.color="#006600",v.style.fontWeight="600"):E>=3?(v.style.background="#fff7e6",v.style.color="#cc6600",v.style.fontWeight="600"):(v.style.background="#ffe6e6",v.style.color="#a00000",v.style.fontWeight="600"),m.innerHTML="",m.appendChild(v)}}catch{m.textContent="–",m.style.color="",m.style.fontWeight=""}}}catch(w){console.error("Error processing element:",e,w),e.classList.contains("list-resolved")&&(e.textContent="error")}})}function a(){var e=document.querySelectorAll(".polaroid-card .swatch-text");e.forEach(function(o){try{var r=o.closest(".polaroid-card");if(!r)return;for(var t=r;t&&t!==document.documentElement&&!(t.classList&&Array.from(t.classList).some(function(T){return T.indexOf("flavor-")===0||T.indexOf("theme-")===0}));)t=t.parentElement;var n=r.getAttribute("data-var");if(!n)return;var d=l(n,void 0,t||document.documentElement),p=d.value;if(p&&p!=="unset"){var s=null;if(n.includes("--palette-"))try{var h=f(p);if(h){var k=_(h);s=k>.5?"#000000":"#ffffff"}else s="#ffffff"}catch{s="#ffffff"}else{var L=n.replace(/^--color-/,"").replace(/^palette-/,""),S="--color-on-"+L,c=l(S,void 0,t||document.documentElement);if(s=c.value,(!s||s==="unset")&&(n.includes("primary")&&(s=l("--color-on-primary",void 0,t||document.documentElement).value),(!s||s==="unset")&&(s=l("--color-on-background",void 0,t||document.documentElement).value)),!s||s==="unset")try{var h=f(p);if(h){var k=_(h);s=k>.5?"#000000":"#ffffff"}else s="#ffffff"}catch{s="#ffffff"}}try{if(s&&s!=="unset"){var y=b(s);o.style.color=y;var g=r.querySelector(".swatch-thumb-text");g&&(g.style.color=y)}else{o.style.color="";var F=r.querySelector(".card-token-label code");F&&(F.style.color="")}}catch{o.style.color=""}}}catch{o.style.color="#ffffff"}})}function u(){W(),a()}return u}const Y={title:"Tokens/Colors",parameters:{viewMode:"docs",layout:"fullscreen"}},B={name:"Global",render:()=>D(),play:async()=>{const i=P();console.log("Colors story: executing color logic"),setTimeout(()=>{console.log("Colors story: first execution"),i()},100),setTimeout(()=>{console.log("Colors story: second execution"),i()},300),setTimeout(()=>{console.log("Colors story: third execution"),i()},600),setTimeout(()=>{try{if(window.__colors_observer){try{window.__colors_observer.disconnect()}catch{}window.__colors_observer=null}const l=new MutationObserver(f=>{f.forEach(x=>{if(x.attributeName==="class"||x.attributeName==="data-color-scheme"){console.log("Colors story: root attribute change detected, re-executing");try{i()}catch($){console.error($)}}})});l.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-color-scheme"]}),window.__colors_observer=l}catch{}},100),setTimeout(()=>{try{i()}catch(l){console.error(l)}},1200)}},O={name:"Theme: Blueberry",render:()=>D({onlyFlavor:"blueberry"}),play:async()=>{const i=P();setTimeout(i,100),setTimeout(i,300),setTimeout(i,600),setTimeout(i,1200),setTimeout(()=>{try{window.__colors_observer&&(window.__colors_observer.disconnect(),window.__colors_observer=null);const l=new MutationObserver(()=>{try{i()}catch{}});l.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-color-scheme"]}),window.__colors_observer=l}catch{}},120)}},z={name:"Theme: Strawberry",render:()=>D({onlyFlavor:"strawberry"}),play:async()=>{const i=P();setTimeout(i,100),setTimeout(i,300),setTimeout(i,600),setTimeout(i,1200)}},M={name:"Theme: Vanilla",render:()=>D({onlyFlavor:"vanilla"}),play:async()=>{const i=P();setTimeout(i,100),setTimeout(i,300),setTimeout(i,600)}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};const K=["Colors","Blueberry","Strawberry","Vanilla"];export{O as Blueberry,B as Colors,z as Strawberry,M as Vanilla,K as __namedExportsOrder,Y as default};
