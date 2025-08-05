const E={title:"Tokens/Spacing",parameters:{docs:{description:{component:"All spacing tokens used in the Labs Design System."}}}},i=()=>{const b=[{name:"Extra Small",token:"space-xs",usage:"Tight spacing, element gaps"},{name:"Small",token:"space-sm",usage:"Button padding, small margins"},{name:"Medium",token:"space-md",usage:"Card padding, section gaps"},{name:"Large",token:"space-lg",usage:"Page margins, large sections"},{name:"Extra Large",token:"space-xl",usage:"Major layout spacing"}],t=document.createElement("div");t.style.cssText=`
    padding: 2rem;
    background: var(--color-background);
    max-width: 1000px;
  `;const c=document.createElement("h2");c.textContent="Spacing System",c.style.cssText=`
    margin: 0 0 0.5rem 0;
    color: var(--color-on-background);
    font-size: 1.5rem;
    font-weight: 700;
  `;const d=document.createElement("p");d.textContent="Consistent spacing tokens for layouts and components. Click any token to copy the CSS custom property name.",d.style.cssText=`
    margin: 0 0 3rem 0;
    color: var(--color-on-background);
    opacity: 0.7;
  `,t.appendChild(c),t.appendChild(d),b.forEach((a,C)=>{const e=document.createElement("div");e.style.cssText=`
      background: var(--color-surface);
      border: 1px solid var(--color-primary-25);
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      cursor: pointer;
      transition: all 0.2s;
    `;const s=document.createElement("div");s.style.cssText=`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    `;const p=document.createElement("div"),g=document.createElement("div");g.textContent=a.name,g.style.cssText=`
      font-weight: 600;
      color: var(--color-on-surface);
      margin-bottom: 0.25rem;
    `;const u=document.createElement("div");u.textContent=a.usage,u.style.cssText=`
      font-size: 0.875rem;
      color: var(--color-on-surface);
      opacity: 0.7;
    `,p.appendChild(g),p.appendChild(u);const x=document.createElement("div");x.style.cssText=`
      text-align: right;
      font-family: monospace;
      font-size: 0.875rem;
      color: var(--color-on-surface);
    `;let n;try{n=getComputedStyle(document.documentElement).getPropertyValue(`--${a.token}`).trim()}catch{n="Not defined"}(!n||n==="")&&(n={"space-xs":"0.25rem","space-sm":"0.5rem","space-md":"1rem","space-lg":"1.5rem","space-xl":"2rem"}[a.token]||"1rem"),x.innerHTML=`
      <div style="font-weight: 600;">--${a.token}</div>
      <div style="opacity: 0.7; margin-top: 0.25rem;">${n}</div>
    `,s.appendChild(p),s.appendChild(x);const o=document.createElement("div");o.style.cssText=`
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;
    `;const v=document.createElement("div");v.style.cssText=`
      background: var(--color-primary);
      border-radius: 4px;
      min-height: ${n};
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-on-primary);
      font-size: 0.75rem;
      font-weight: 600;
    `,v.textContent="Height";const y=document.createElement("div");y.style.cssText=`
      background: var(--color-secondary);
      border-radius: 4px;
      height: 40px;
      width: ${n};
      min-width: ${n};
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-on-primary);
      font-size: 0.75rem;
      font-weight: 600;
      writing-mode: vertical-lr;
      text-orientation: mixed;
    `,y.textContent="Width";const h=document.createElement("div");h.style.cssText=`
      background: var(--color-primary-25);
      border-radius: 4px;
      padding: ${n};
      border: 2px dashed var(--color-primary);
    `;const f=document.createElement("div");f.style.cssText=`
      background: var(--color-primary);
      color: var(--color-on-primary);
      padding: 0.5rem;
      border-radius: 2px;
      font-size: 0.75rem;
      font-weight: 600;
      text-align: center;
    `,f.textContent="Padding",h.appendChild(f),o.appendChild(v),o.appendChild(y),o.appendChild(h),e.appendChild(s),e.appendChild(o),e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-2px)",e.style.boxShadow="0 4px 12px rgba(0,0,0,0.1)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)",e.style.boxShadow="none"}),e.addEventListener("click",()=>{navigator.clipboard.writeText(`var(--${a.token})`),e.style.background="var(--color-primary-25)",setTimeout(()=>{e.style.background="var(--color-surface)"},200)}),t.appendChild(e)});const r=document.createElement("div");r.style.cssText=`
    margin-top: 2rem;
    padding: 1.5rem;
    background: var(--color-surface);
    border: 1px solid var(--color-primary-25);
    border-radius: 8px;
  `;const l=document.createElement("h3");l.textContent="Usage Examples",l.style.cssText=`
    margin: 0 0 1rem 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-on-surface);
  `;const m=document.createElement("pre");return m.style.cssText=`
    background: var(--color-background);
    border: 1px solid var(--color-primary-25);
    border-radius: 4px;
    padding: 1rem;
    overflow-x: auto;
    font-family: monospace;
    font-size: 0.875rem;
    color: var(--color-on-background);
    margin: 0;
  `,m.textContent=`/* Padding */
.card { padding: var(--space-md); }

/* Margins */
.section { margin-bottom: var(--space-lg); }

/* Gap in flex/grid */
.grid { gap: var(--space-sm); }

/* Complex spacing */
.header { 
  padding: var(--space-sm) var(--space-md);
  margin-bottom: var(--space-xl);
}`,r.appendChild(l),r.appendChild(m),t.appendChild(r),t};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const spacingTokens = [{
    name: "Extra Small",
    token: "space-xs",
    usage: "Tight spacing, element gaps"
  }, {
    name: "Small",
    token: "space-sm",
    usage: "Button padding, small margins"
  }, {
    name: "Medium",
    token: "space-md",
    usage: "Card padding, section gaps"
  }, {
    name: "Large",
    token: "space-lg",
    usage: "Page margins, large sections"
  }, {
    name: "Extra Large",
    token: "space-xl",
    usage: "Major layout spacing"
  }];
  const container = document.createElement("div");
  container.style.cssText = \`
    padding: 2rem;
    background: var(--color-background);
    max-width: 1000px;
  \`;
  const title = document.createElement("h2");
  title.textContent = "Spacing System";
  title.style.cssText = \`
    margin: 0 0 0.5rem 0;
    color: var(--color-on-background);
    font-size: 1.5rem;
    font-weight: 700;
  \`;
  const subtitle = document.createElement("p");
  subtitle.textContent = "Consistent spacing tokens for layouts and components. Click any token to copy the CSS custom property name.";
  subtitle.style.cssText = \`
    margin: 0 0 3rem 0;
    color: var(--color-on-background);
    opacity: 0.7;
  \`;
  container.appendChild(title);
  container.appendChild(subtitle);
  spacingTokens.forEach((spacing, index) => {
    const spacingDemo = document.createElement("div");
    spacingDemo.style.cssText = \`
      background: var(--color-surface);
      border: 1px solid var(--color-primary-25);
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      cursor: pointer;
      transition: all 0.2s;
    \`;
    const header = document.createElement("div");
    header.style.cssText = \`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    \`;
    const info = document.createElement("div");
    const spacingName = document.createElement("div");
    spacingName.textContent = spacing.name;
    spacingName.style.cssText = \`
      font-weight: 600;
      color: var(--color-on-surface);
      margin-bottom: 0.25rem;
    \`;
    const spacingUsage = document.createElement("div");
    spacingUsage.textContent = spacing.usage;
    spacingUsage.style.cssText = \`
      font-size: 0.875rem;
      color: var(--color-on-surface);
      opacity: 0.7;
    \`;
    info.appendChild(spacingName);
    info.appendChild(spacingUsage);
    const tokenInfo = document.createElement("div");
    tokenInfo.style.cssText = \`
      text-align: right;
      font-family: monospace;
      font-size: 0.875rem;
      color: var(--color-on-surface);
    \`;

    // Get the actual spacing value
    let spacingValue;
    try {
      spacingValue = getComputedStyle(document.documentElement).getPropertyValue(\`--\${spacing.token}\`).trim();
    } catch (e) {
      spacingValue = "Not defined";
    }

    // If token doesn't exist, use fallback values
    if (!spacingValue || spacingValue === "") {
      const fallbackValues = {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2rem"
      };
      spacingValue = fallbackValues[spacing.token] || "1rem";
    }
    tokenInfo.innerHTML = \`
      <div style="font-weight: 600;">--\${spacing.token}</div>
      <div style="opacity: 0.7; margin-top: 0.25rem;">\${spacingValue}</div>
    \`;
    header.appendChild(info);
    header.appendChild(tokenInfo);

    // Visual representation
    const visualDemo = document.createElement("div");
    visualDemo.style.cssText = \`
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;
    \`;

    // Height demonstration
    const heightDemo = document.createElement("div");
    heightDemo.style.cssText = \`
      background: var(--color-primary);
      border-radius: 4px;
      min-height: \${spacingValue};
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-on-primary);
      font-size: 0.75rem;
      font-weight: 600;
    \`;
    heightDemo.textContent = "Height";

    // Width demonstration  
    const widthDemo = document.createElement("div");
    widthDemo.style.cssText = \`
      background: var(--color-secondary);
      border-radius: 4px;
      height: 40px;
      width: \${spacingValue};
      min-width: \${spacingValue};
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-on-primary);
      font-size: 0.75rem;
      font-weight: 600;
      writing-mode: vertical-lr;
      text-orientation: mixed;
    \`;
    widthDemo.textContent = "Width";

    // Padding demonstration
    const paddingDemo = document.createElement("div");
    paddingDemo.style.cssText = \`
      background: var(--color-primary-25);
      border-radius: 4px;
      padding: \${spacingValue};
      border: 2px dashed var(--color-primary);
    \`;
    const paddingInner = document.createElement("div");
    paddingInner.style.cssText = \`
      background: var(--color-primary);
      color: var(--color-on-primary);
      padding: 0.5rem;
      border-radius: 2px;
      font-size: 0.75rem;
      font-weight: 600;
      text-align: center;
    \`;
    paddingInner.textContent = "Padding";
    paddingDemo.appendChild(paddingInner);
    visualDemo.appendChild(heightDemo);
    visualDemo.appendChild(widthDemo);
    visualDemo.appendChild(paddingDemo);
    spacingDemo.appendChild(header);
    spacingDemo.appendChild(visualDemo);

    // Add interaction
    spacingDemo.addEventListener('mouseenter', () => {
      spacingDemo.style.transform = 'translateY(-2px)';
      spacingDemo.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    });
    spacingDemo.addEventListener('mouseleave', () => {
      spacingDemo.style.transform = 'translateY(0)';
      spacingDemo.style.boxShadow = 'none';
    });
    spacingDemo.addEventListener('click', () => {
      navigator.clipboard.writeText(\`var(--\${spacing.token})\`);
      spacingDemo.style.background = 'var(--color-primary-25)';
      setTimeout(() => {
        spacingDemo.style.background = 'var(--color-surface)';
      }, 200);
    });
    container.appendChild(spacingDemo);
  });

  // Add usage examples section
  const usageSection = document.createElement("div");
  usageSection.style.cssText = \`
    margin-top: 2rem;
    padding: 1.5rem;
    background: var(--color-surface);
    border: 1px solid var(--color-primary-25);
    border-radius: 8px;
  \`;
  const usageTitle = document.createElement("h3");
  usageTitle.textContent = "Usage Examples";
  usageTitle.style.cssText = \`
    margin: 0 0 1rem 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-on-surface);
  \`;
  const usageCode = document.createElement("pre");
  usageCode.style.cssText = \`
    background: var(--color-background);
    border: 1px solid var(--color-primary-25);
    border-radius: 4px;
    padding: 1rem;
    overflow-x: auto;
    font-family: monospace;
    font-size: 0.875rem;
    color: var(--color-on-background);
    margin: 0;
  \`;
  usageCode.textContent = \`/* Padding */
.card { padding: var(--space-md); }

/* Margins */
.section { margin-bottom: var(--space-lg); }

/* Gap in flex/grid */
.grid { gap: var(--space-sm); }

/* Complex spacing */
.header { 
  padding: var(--space-sm) var(--space-md);
  margin-bottom: var(--space-xl);
}\`;
  usageSection.appendChild(usageTitle);
  usageSection.appendChild(usageCode);
  container.appendChild(usageSection);
  return container;
}`,...i.parameters?.docs?.source}}};const T=["Spacing"];export{i as Spacing,T as __namedExportsOrder,E as default};
