import"./labs-footer-Cz6M6BBG.js";import"./iframe-Cv1Tuenz.js";import{i as h}from"./icons-list-BKmguoAm.js";import"./labs-overlay-AWkXp-xX.js";import"./labs-settings-card-7JBa7PaP.js";import"./preload-helper-PPVm8Dsz.js";const k={title:"Templates/Smoothie Template",parameters:{docs:{description:{component:"A minimal template for pattern demos: footer, flavor switcher, and settings overlay."}}},argTypes:{settingsIcon:{name:"settingsIcon",control:{type:"select"},options:Object.keys(h)}}},i={render:c=>{const n=document.createElement("div");n.innerHTML=`
      <style>
        html, body, .smoothie-root {
          height: 100%;
          min-height: 100%;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          overflow: hidden;
          background: var(--color-background, #f6f6f9);
        }
        .smoothie-root {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .smoothie-root labs-footer {
          flex-shrink: 0;
          width: 100%;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        #floating-toggles {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        #flavorToggle {
          height: 48px;
          width: 48px;
          min-width: 48px;
          min-height: 48px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #flavorIcon {
          width: 28px;
          height: 28px;
        }
        #footer-settings-btn labs-icon {
          width: 28px;
          height: 28px;
          transition: transform 0.4s cubic-bezier(.4,2,.6,1);
        }
        #footer-settings-btn:hover labs-icon {
          transform: rotate(90deg);
        }
      </style>
      <div class="smoothie-root">
        <div id="floating-toggles">
          <labs-button id="flavorToggle" variant="icon" aria-label="Switch flavor" title="Switch flavor">
            <labs-icon id="flavorIcon" slot="icon-left" name="colors" style="color:var(--color-on-surface);width:28px;height:28px;"></labs-icon>
          </labs-button>
        </div>
        <labs-footer full-width elevated>
          <div slot="center">
            <labs-button id="footerAddBtn" pill variant="primary">+ Add</labs-button>
          </div>
          <div slot="right" style="display: flex; align-items: center; gap: 8px;">
            <labs-button id="footer-settings-btn" variant="icon" aria-label="Settings" style="padding-right:12px;">
              <labs-icon name="${c.settingsIcon||"settings"}" slot="icon-left" width="28" height="28"></labs-icon>
            </labs-button>
          </div>
        </labs-footer>
        <labs-overlay id="settingsOverlay" size="medium" transparent>
          <labs-settings-card></labs-settings-card>
        </labs-overlay>
      </div>
    `;const a=n.querySelector("#flavorToggle");function d(){const t=["vanilla","blueberry","strawberry"];for(const o of t)if(document.documentElement.classList.contains(`flavor-${o}`))return o;return"blueberry"}function g({flavor:t="blueberry",theme:o="light"}={}){const e=document.documentElement;e.classList.remove("flavor-vanilla","flavor-blueberry","flavor-strawberry"),e.classList.add(`flavor-${t}`);const r=e.classList.contains("theme-dark");e.classList.remove("theme-light","theme-dark"),e.classList.add(r?"theme-dark":"theme-light"),e.setAttribute("data-color-scheme",r?"dark":"light"),localStorage.setItem("today-list-theme",r?"dark":"light"),localStorage.setItem("today-list-flavor",t)}function f(){const t=["vanilla","blueberry","strawberry"],o=d(),e=t.indexOf(o),r=t[(e+1)%t.length],m=document.documentElement.classList.contains("theme-dark");g({flavor:r,theme:m?"dark":"light"})}a&&a.addEventListener("click",f);const l=n.querySelector("#footer-settings-btn"),s=n.querySelector("#settingsOverlay");if(l&&s){l.addEventListener("click",()=>s.open());const t=s.querySelector("labs-settings-card");t&&t.addEventListener("close",()=>s.close())}return n}};i.args={settingsIcon:"settings"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    container.innerHTML = \`
      <style>
        html, body, .smoothie-root {
          height: 100%;
          min-height: 100%;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          overflow: hidden;
          background: var(--color-background, #f6f6f9);
        }
        .smoothie-root {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .smoothie-root labs-footer {
          flex-shrink: 0;
          width: 100%;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        #floating-toggles {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        #flavorToggle {
          height: 48px;
          width: 48px;
          min-width: 48px;
          min-height: 48px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #flavorIcon {
          width: 28px;
          height: 28px;
        }
        #footer-settings-btn labs-icon {
          width: 28px;
          height: 28px;
          transition: transform 0.4s cubic-bezier(.4,2,.6,1);
        }
        #footer-settings-btn:hover labs-icon {
          transform: rotate(90deg);
        }
      </style>
      <div class="smoothie-root">
        <div id="floating-toggles">
          <labs-button id="flavorToggle" variant="icon" aria-label="Switch flavor" title="Switch flavor">
            <labs-icon id="flavorIcon" slot="icon-left" name="colors" style="color:var(--color-on-surface);width:28px;height:28px;"></labs-icon>
          </labs-button>
        </div>
        <labs-footer full-width elevated>
          <div slot="center">
            <labs-button id="footerAddBtn" pill variant="primary">+ Add</labs-button>
          </div>
          <div slot="right" style="display: flex; align-items: center; gap: 8px;">
            <labs-button id="footer-settings-btn" variant="icon" aria-label="Settings" style="padding-right:12px;">
              <labs-icon name="\${args.settingsIcon || 'settings'}" slot="icon-left" width="28" height="28"></labs-icon>
            </labs-button>
          </div>
        </labs-footer>
        <labs-overlay id="settingsOverlay" size="medium" transparent>
          <labs-settings-card></labs-settings-card>
        </labs-overlay>
      </div>
    \`;
    // Flavor switcher logic
    const flavorToggle = container.querySelector('#flavorToggle');
    function getCurrentFlavor() {
      const flavors = ['vanilla', 'blueberry', 'strawberry'];
      for (const f of flavors) {
        if (document.documentElement.classList.contains(\`flavor-\${f}\`)) return f;
      }
      return 'blueberry';
    }
    function applyTheme({
      flavor = 'blueberry',
      theme = 'light'
    } = {}) {
      const root = document.documentElement;
      root.classList.remove('flavor-vanilla', 'flavor-blueberry', 'flavor-strawberry');
      root.classList.add(\`flavor-\${flavor}\`);
      // Keep current theme
      const isDark = root.classList.contains('theme-dark');
      root.classList.remove('theme-light', 'theme-dark');
      root.classList.add(isDark ? 'theme-dark' : 'theme-light');
      root.setAttribute('data-color-scheme', isDark ? 'dark' : 'light');
      localStorage.setItem('today-list-theme', isDark ? 'dark' : 'light');
      localStorage.setItem('today-list-flavor', flavor);
    }
    function cycleFlavor() {
      const flavors = ['vanilla', 'blueberry', 'strawberry'];
      const current = getCurrentFlavor();
      const idx = flavors.indexOf(current);
      const next = flavors[(idx + 1) % flavors.length];
      const isDark = document.documentElement.classList.contains('theme-dark');
      applyTheme({
        flavor: next,
        theme: isDark ? 'dark' : 'light'
      });
    }
    if (flavorToggle) {
      flavorToggle.addEventListener('click', cycleFlavor);
    }
    // Settings overlay logic
    const settingsBtn = container.querySelector('#footer-settings-btn');
    const settingsOverlay = container.querySelector('#settingsOverlay');
    if (settingsBtn && settingsOverlay) {
      settingsBtn.addEventListener('click', () => settingsOverlay.open());
      const settingsCard = settingsOverlay.querySelector('labs-settings-card');
      if (settingsCard) {
        settingsCard.addEventListener('close', () => settingsOverlay.close());
      }
    }
    return container;
  }
}`,...i.parameters?.docs?.source}}};const w=["SmoothieTemplate"];export{i as SmoothieTemplate,w as __namedExportsOrder,k as default};
