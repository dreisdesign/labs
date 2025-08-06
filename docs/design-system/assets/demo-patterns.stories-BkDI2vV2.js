import"./labs-button-DCfWJOEd.js";import"./labs-icon-D-jGsLwe.js";/* empty css                         */import{c as l,s as x,a as y}from"./button-configs-B4KyLDXm.js";const z={title:"Patterns/Demo Page",parameters:{docs:{description:{component:"Comprehensive demonstration of the Labs Design System v2.0 features with real-world usage patterns."}}}},o=()=>{const n=document.createElement("div");n.style.cssText=`
    padding: 2rem;
    background: var(--color-background);
    color: var(--color-on-background);
    min-height: 80vh;
    max-width: 1200px;
    font-family: system-ui, -apple-system, sans-serif;
  `;const d=document.createElement("div");d.style.cssText=`
    margin-bottom: 3rem;
    text-align: center;
  `,d.innerHTML=`
    <h1 style="margin: 0 0 1rem 0; color: var(--color-on-background); font-size: 2.5rem; font-weight: 700;">
      Labs Design System v2.0
    </h1>
    <p style="margin: 0; color: var(--color-on-background); opacity: 0.8; font-size: 1.2rem;">
      Complete modular design system with theme support and pre-configured components
    </p>
  `;const r=document.createElement("div");r.style.cssText=`
    background: var(--color-surface);
    border-radius: 12px;
    border: 1px solid var(--color-primary-25);
    padding: 2rem;
    margin-bottom: 3rem;
    text-align: center;
  `;const m=document.createElement("h2");m.textContent="Interactive Theme Demo",m.style.cssText=`
    margin: 0 0 1rem 0; 
    color: var(--color-on-background); 
    font-size: 1.5rem;
  `;const b=l("themeToggle");x(b);const p=document.createElement("div");p.style.cssText=`
    background: var(--color-primary-25);
    padding: 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    color: var(--color-on-background);
    opacity: 0.7;
    margin-top: 1rem;
  `,p.textContent="Click to toggle between light and dark themes. Changes persist across sessions.",r.appendChild(m),r.appendChild(b),r.appendChild(p);const a=document.createElement("div");a.style.cssText=`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  `;const u=document.createElement("div");u.style.cssText=`
    background: var(--color-surface);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid var(--color-primary-25);
  `,u.innerHTML=`
    <h3 style="margin: 0 0 1rem 0; color: var(--color-on-surface); font-size: 1.3rem;">Pre-Configured Components</h3>
    <p style="margin: 0 0 1.5rem 0; color: var(--color-on-surface); opacity: 0.8; line-height: 1.5;">Ready-to-use button configurations for common patterns.</p>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      ${y("save")}
      ${y("edit")}
      ${y("delete")}
    </div>
  `;const g=document.createElement("div");g.style.cssText=`
    background: var(--color-surface);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid var(--color-primary-25);
  `,g.innerHTML=`
    <h3 style="margin: 0 0 1rem 0; color: var(--color-on-surface); font-size: 1.3rem;">Container Variants</h3>
    <p style="margin: 0 0 1.5rem 0; color: var(--color-on-surface); opacity: 0.8; line-height: 1.5;">Full-width buttons optimized for overlays and panels.</p>
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <labs-button label="All Apps" icon="apps" variant="container"></labs-button>
      <labs-button id="demo-settings-btn" label="Settings" icon="settings" variant="container"></labs-button>
    </div>
  `,a.appendChild(u),a.appendChild(g);const v=document.createElement("div");return v.style.cssText=`
    background: var(--color-surface);   
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
  `,v.innerHTML=`
    <h3 style="margin: 0 0 1.5rem 0; color: var(--color-on-background); font-size: 1.5rem;">
      Built for Modern Development
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
      <div style="color: var(--color-on-background);">
        <strong>Fully Modular</strong><br>
        <span style="opacity: 0.8; font-size: 0.9rem;">Shadow DOM encapsulation</span>
      </div>
      <div style="color: var(--color-on-background);">
        <strong>Zero Dependencies</strong><br>
        <span style="opacity: 0.8; font-size: 0.9rem;">Self-contained components</span>
      </div>
      <div style="color: var(--color-on-background);">
        <strong>Accessible by Default</strong><br>
        <span style="opacity: 0.8; font-size: 0.9rem;">ARIA attributes included</span>
      </div>
      <div style="color: var(--color-on-background);">
        <strong>Theme System</strong><br>
        <span style="opacity: 0.8; font-size: 0.9rem;">Light/dark with persistence</span>
      </div>
    </div>
  `,n.appendChild(d),n.appendChild(r),n.appendChild(a),n.appendChild(v),setTimeout(()=>{const h=n.querySelector("#demo-settings-btn");h&&h.addEventListener("click",()=>{const t=document.createElement("div");t.className="settings-overlay";const s=document.createElement("div");s.className="overlay-content";const i=document.createElement("div");i.className="overlay-header";const f=document.createElement("h2");f.textContent="Settings";const c=document.createElement("button");c.className="close-button",c.innerHTML='<labs-icon name="close" class="close-icon"></labs-icon>',i.appendChild(f),i.appendChild(c);const e=document.createElement("div");e.className="button-container",e.style.display="flex",e.style.flexDirection="column",e.style.gap="0.5rem";const k=l("allAppsContainer"),C=l("themeToggleContainer"),T=l("resetAllDataContainer");x(C),e.appendChild(k),e.appendChild(C),e.appendChild(T),s.appendChild(i),s.appendChild(e),t.appendChild(s),c.addEventListener("click",()=>{t.remove()}),t.addEventListener("click",S=>{S.target===t&&t.remove()}),document.body.appendChild(t)})},100),n};o.parameters={docs:{description:{story:"Comprehensive showcase of Labs Design System v2.0 featuring interactive theme demo, pre-configured components, container variants, and key benefits."}}};o.storyName="Complete Demo & Showcase";o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  // =============================
  // Main Container
  // =============================
  const container = document.createElement("div");
  container.style.cssText = \`
    padding: 2rem;
    background: var(--color-background);
    color: var(--color-on-background);
    min-height: 80vh;
    max-width: 1200px;
    font-family: system-ui, -apple-system, sans-serif;
  \`;

  // =============================
  // Title Section
  // =============================
  const titleSection = document.createElement("div");
  titleSection.style.cssText = \`
    margin-bottom: 3rem;
    text-align: center;
  \`;
  titleSection.innerHTML = \`
    <h1 style="margin: 0 0 1rem 0; color: var(--color-on-background); font-size: 2.5rem; font-weight: 700;">
      Labs Design System v2.0
    </h1>
    <p style="margin: 0; color: var(--color-on-background); opacity: 0.8; font-size: 1.2rem;">
      Complete modular design system with theme support and pre-configured components
    </p>
  \`;

  // =============================
  // Live Demo Section  
  // =============================
  const demoSection = document.createElement("div");
  demoSection.style.cssText = \`
    background: var(--color-surface);
    border-radius: 12px;
    border: 1px solid var(--color-primary-25);
    padding: 2rem;
    margin-bottom: 3rem;
    text-align: center;
  \`;
  const demoHeader = document.createElement("h2");
  demoHeader.textContent = "Interactive Theme Demo";
  demoHeader.style.cssText = \`
    margin: 0 0 1rem 0; 
    color: var(--color-on-background); 
    font-size: 1.5rem;
  \`;
  const themeToggleBtn = createButtonElement("themeToggle");
  setupThemeToggle(themeToggleBtn);
  const infoDiv = document.createElement('div');
  infoDiv.style.cssText = \`
    background: var(--color-primary-25);
    padding: 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    color: var(--color-on-background);
    opacity: 0.7;
    margin-top: 1rem;
  \`;
  infoDiv.textContent = 'Click to toggle between light and dark themes. Changes persist across sessions.';
  demoSection.appendChild(demoHeader);
  demoSection.appendChild(themeToggleBtn);
  demoSection.appendChild(infoDiv);

  // =============================
  // Features Grid
  // =============================
  const featuresSection = document.createElement("div");
  featuresSection.style.cssText = \`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  \`;

  // Pre-configured Components Card
  const componentsCard = document.createElement("div");
  componentsCard.style.cssText = \`
    background: var(--color-surface);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid var(--color-primary-25);
  \`;
  componentsCard.innerHTML = \`
    <h3 style="margin: 0 0 1rem 0; color: var(--color-on-surface); font-size: 1.3rem;">Pre-Configured Components</h3>
    <p style="margin: 0 0 1.5rem 0; color: var(--color-on-surface); opacity: 0.8; line-height: 1.5;">Ready-to-use button configurations for common patterns.</p>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      \${createButton("save")}
      \${createButton("edit")}
      \${createButton("delete")}
    </div>
  \`;

  // Container Variants Card
  const containerCard = document.createElement("div");
  containerCard.style.cssText = \`
    background: var(--color-surface);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid var(--color-primary-25);
  \`;
  containerCard.innerHTML = \`
    <h3 style="margin: 0 0 1rem 0; color: var(--color-on-surface); font-size: 1.3rem;">Container Variants</h3>
    <p style="margin: 0 0 1.5rem 0; color: var(--color-on-surface); opacity: 0.8; line-height: 1.5;">Full-width buttons optimized for overlays and panels.</p>
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <labs-button label="All Apps" icon="apps" variant="container"></labs-button>
      <labs-button id="demo-settings-btn" label="Settings" icon="settings" variant="container"></labs-button>
    </div>
  \`;
  featuresSection.appendChild(componentsCard);
  featuresSection.appendChild(containerCard);

  // =============================
  // Key Benefits Summary
  // =============================
  const benefitsSection = document.createElement("div");
  benefitsSection.style.cssText = \`
    background: var(--color-surface);   
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
  \`;
  benefitsSection.innerHTML = \`
    <h3 style="margin: 0 0 1.5rem 0; color: var(--color-on-background); font-size: 1.5rem;">
      Built for Modern Development
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
      <div style="color: var(--color-on-background);">
        <strong>Fully Modular</strong><br>
        <span style="opacity: 0.8; font-size: 0.9rem;">Shadow DOM encapsulation</span>
      </div>
      <div style="color: var(--color-on-background);">
        <strong>Zero Dependencies</strong><br>
        <span style="opacity: 0.8; font-size: 0.9rem;">Self-contained components</span>
      </div>
      <div style="color: var(--color-on-background);">
        <strong>Accessible by Default</strong><br>
        <span style="opacity: 0.8; font-size: 0.9rem;">ARIA attributes included</span>
      </div>
      <div style="color: var(--color-on-background);">
        <strong>Theme System</strong><br>
        <span style="opacity: 0.8; font-size: 0.9rem;">Light/dark with persistence</span>
      </div>
    </div>
  \`;

  // =============================
  // Assemble Page
  // =============================
  container.appendChild(titleSection);
  container.appendChild(demoSection);
  container.appendChild(featuresSection);
  container.appendChild(benefitsSection);

  // =============================
  // Setup Settings Overlay Functionality
  // =============================
  setTimeout(() => {
    const settingsBtn = container.querySelector('#demo-settings-btn');
    if (settingsBtn) {
      settingsBtn.addEventListener('click', () => {
        // Create the actual Settings Overlay component
        const overlay = document.createElement("div");
        overlay.className = "settings-overlay";
        const overlayContent = document.createElement("div");
        overlayContent.className = "overlay-content";
        const overlayHeader = document.createElement("div");
        overlayHeader.className = "overlay-header";
        const title = document.createElement("h2");
        title.textContent = "Settings";
        const closeButtonHeader = document.createElement("button");
        closeButtonHeader.className = "close-button";
        closeButtonHeader.innerHTML = '<labs-icon name="close" class="close-icon"></labs-icon>';
        overlayHeader.appendChild(title);
        overlayHeader.appendChild(closeButtonHeader);
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";
        buttonContainer.style.display = "flex";
        buttonContainer.style.flexDirection = "column";
        buttonContainer.style.gap = "0.5rem";

        // Use container button variants for proper overlay styling
        const allAppsButton = createButtonElement("allAppsContainer");
        const themeButton = createButtonElement("themeToggleContainer");
        const resetButton = createButtonElement("resetAllDataContainer");

        // Make theme button functional
        setupThemeToggle(themeButton);
        buttonContainer.appendChild(allAppsButton);
        buttonContainer.appendChild(themeButton);
        buttonContainer.appendChild(resetButton);
        overlayContent.appendChild(overlayHeader);
        overlayContent.appendChild(buttonContainer);
        overlay.appendChild(overlayContent);

        // Add close functionality
        closeButtonHeader.addEventListener("click", () => {
          overlay.remove();
        });

        // Close on background click
        overlay.addEventListener("click", e => {
          if (e.target === overlay) {
            overlay.remove();
          }
        });
        document.body.appendChild(overlay);
      });
    }
  }, 100);
  return container;
}`,...o.parameters?.docs?.source}}};const L=["ComprehensiveDemo"];export{o as ComprehensiveDemo,L as __namedExportsOrder,z as default};
