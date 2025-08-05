const x={title:"Tokens/Typography",parameters:{docs:{description:{component:"All typography tokens used in the Labs Design System."}}}},c=()=>{const u=[{name:"Heading 1",token:"font-size-h1",weight:"font-weight-bold",sample:"Main Page Title"},{name:"Heading 2",token:"font-size-h2",weight:"font-weight-bold",sample:"Section Heading"},{name:"Heading 3",token:"font-size-h3",weight:"font-weight-semibold",sample:"Subsection"},{name:"Body Large",token:"font-size-large",weight:"font-weight-normal",sample:"Large body text for emphasis"},{name:"Body",token:"font-size-base",weight:"font-weight-normal",sample:"Regular body text content"},{name:"Body Small",token:"font-size-small",weight:"font-weight-normal",sample:"Secondary information"},{name:"Caption",token:"font-size-tiny",weight:"font-weight-normal",sample:"Captions and hints"}],w=[{name:"Bold",token:"font-weight-bold",value:"700"},{name:"Semibold",token:"font-weight-semibold",value:"600"},{name:"Normal",token:"font-weight-normal",value:"400"}],r=document.createElement("div");r.style.cssText=`
    padding: 2rem;
    background: var(--color-background);
    max-width: 1200px;
  `;const m=document.createElement("h2");m.textContent="Typography System",m.style.cssText=`
    margin: 0 0 0.5rem 0;
    color: var(--color-on-background);
    font-size: 1.5rem;
    font-weight: 700;
  `;const d=document.createElement("p");d.textContent="Typography tokens with live examples. Click any token to copy the CSS custom property name.",d.style.cssText=`
    margin: 0 0 3rem 0;
    color: var(--color-on-background);
    opacity: 0.7;
  `,r.appendChild(m),r.appendChild(d);const l=document.createElement("div");l.style.cssText=`
    margin-bottom: 3rem;
  `;const g=document.createElement("h3");g.textContent="Type Scale",g.style.cssText=`
    margin: 0 0 1.5rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-on-background);
  `,l.appendChild(g),u.forEach(t=>{const e=document.createElement("div");e.style.cssText=`
      background: var(--color-surface);
      border: 1px solid var(--color-primary-25);
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 1rem;
      cursor: pointer;
      transition: all 0.2s;
      display: grid;
      grid-template-columns: 200px 1fr auto;
      gap: 1.5rem;
      align-items: center;
    `;const o=document.createElement("div");o.style.cssText=`
      color: var(--color-on-surface);
      font-size: 0.875rem;
      font-weight: 600;
    `,o.textContent=t.name;const n=document.createElement("div");n.style.cssText=`
      color: var(--color-on-surface);
      line-height: 1.3;
    `;try{if(getComputedStyle(document.documentElement).getPropertyValue(`--${t.token}`).trim())n.style.fontSize=`var(--${t.token})`;else{const f={"Heading 1":"2rem","Heading 2":"1.5rem","Heading 3":"1.25rem","Body Large":"1.125rem",Body:"1rem","Body Small":"0.875rem",Caption:"0.75rem"};n.style.fontSize=f[t.name]||"1rem"}}catch{n.style.fontSize="1rem"}try{if(getComputedStyle(document.documentElement).getPropertyValue(`--${t.weight}`).trim())n.style.fontWeight=`var(--${t.weight})`;else{const f={"font-weight-bold":"700","font-weight-semibold":"600","font-weight-normal":"400"};n.style.fontWeight=f[t.weight]||"400"}}catch{n.style.fontWeight="400"}n.textContent=t.sample;const a=document.createElement("div");a.style.cssText=`
      font-family: monospace;
      font-size: 0.75rem;
      color: var(--color-on-surface);
      opacity: 0.7;
      text-align: right;
    `;const y=getComputedStyle(document.documentElement).getPropertyValue(`--${t.token}`).trim()||"Not defined";a.innerHTML=`
      <div>--${t.token}</div>
      <div style="margin-top: 0.25rem;">${y}</div>
    `,e.appendChild(o),e.appendChild(n),e.appendChild(a),e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-1px)",e.style.boxShadow="0 4px 12px rgba(0,0,0,0.08)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)",e.style.boxShadow="none"}),e.addEventListener("click",()=>{navigator.clipboard.writeText(`var(--${t.token})`),e.style.background="var(--color-primary-25)",setTimeout(()=>{e.style.background="var(--color-surface)"},200)}),l.appendChild(e)});const s=document.createElement("div");s.style.cssText=`
    margin-bottom: 2rem;
  `;const p=document.createElement("h3");p.textContent="Font Weights",p.style.cssText=`
    margin: 0 0 1.5rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-on-background);
  `,s.appendChild(p);const h=document.createElement("div");return h.style.cssText=`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  `,w.forEach(t=>{const e=document.createElement("div");e.style.cssText=`
      background: var(--color-surface);
      border: 1px solid var(--color-primary-25);
      border-radius: 8px;
      padding: 1.5rem;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
    `;const o=document.createElement("div");o.style.cssText=`
      font-size: 1.125rem;
      color: var(--color-on-surface);
      margin-bottom: 0.75rem;
    `;try{getComputedStyle(document.documentElement).getPropertyValue(`--${t.token}`).trim()?o.style.fontWeight=`var(--${t.token})`:o.style.fontWeight=t.value}catch{o.style.fontWeight=t.value}o.textContent="Sample Text";const n=document.createElement("div");n.style.cssText=`
      font-size: 0.875rem;
      color: var(--color-on-surface);
      margin-bottom: 0.5rem;
      font-weight: 600;
    `,n.textContent=t.name;const a=document.createElement("div");a.style.cssText=`
      font-family: monospace;
      font-size: 0.75rem;
      color: var(--color-on-surface);
      opacity: 0.7;
    `;const y=getComputedStyle(document.documentElement).getPropertyValue(`--${t.token}`).trim()||t.value;a.innerHTML=`
      --${t.token}<br>
      ${y}
    `,e.appendChild(o),e.appendChild(n),e.appendChild(a),e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-2px)",e.style.boxShadow="0 4px 12px rgba(0,0,0,0.1)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)",e.style.boxShadow="none"}),e.addEventListener("click",()=>{navigator.clipboard.writeText(`var(--${t.token})`),e.style.background="var(--color-primary-25)",setTimeout(()=>{e.style.background="var(--color-surface)"},200)}),h.appendChild(e)}),s.appendChild(h),r.appendChild(l),r.appendChild(s),r};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const typeScales = [{
    name: "Heading 1",
    token: "font-size-h1",
    weight: "font-weight-bold",
    sample: "Main Page Title"
  }, {
    name: "Heading 2",
    token: "font-size-h2",
    weight: "font-weight-bold",
    sample: "Section Heading"
  }, {
    name: "Heading 3",
    token: "font-size-h3",
    weight: "font-weight-semibold",
    sample: "Subsection"
  }, {
    name: "Body Large",
    token: "font-size-large",
    weight: "font-weight-normal",
    sample: "Large body text for emphasis"
  }, {
    name: "Body",
    token: "font-size-base",
    weight: "font-weight-normal",
    sample: "Regular body text content"
  }, {
    name: "Body Small",
    token: "font-size-small",
    weight: "font-weight-normal",
    sample: "Secondary information"
  }, {
    name: "Caption",
    token: "font-size-tiny",
    weight: "font-weight-normal",
    sample: "Captions and hints"
  }];
  const fontWeights = [{
    name: "Bold",
    token: "font-weight-bold",
    value: "700"
  }, {
    name: "Semibold",
    token: "font-weight-semibold",
    value: "600"
  }, {
    name: "Normal",
    token: "font-weight-normal",
    value: "400"
  }];
  const container = document.createElement("div");
  container.style.cssText = \`
    padding: 2rem;
    background: var(--color-background);
    max-width: 1200px;
  \`;
  const title = document.createElement("h2");
  title.textContent = "Typography System";
  title.style.cssText = \`
    margin: 0 0 0.5rem 0;
    color: var(--color-on-background);
    font-size: 1.5rem;
    font-weight: 700;
  \`;
  const subtitle = document.createElement("p");
  subtitle.textContent = "Typography tokens with live examples. Click any token to copy the CSS custom property name.";
  subtitle.style.cssText = \`
    margin: 0 0 3rem 0;
    color: var(--color-on-background);
    opacity: 0.7;
  \`;
  container.appendChild(title);
  container.appendChild(subtitle);

  // Type Scale Section
  const scaleSection = document.createElement("div");
  scaleSection.style.cssText = \`
    margin-bottom: 3rem;
  \`;
  const scaleHeading = document.createElement("h3");
  scaleHeading.textContent = "Type Scale";
  scaleHeading.style.cssText = \`
    margin: 0 0 1.5rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-on-background);
  \`;
  scaleSection.appendChild(scaleHeading);
  typeScales.forEach(type => {
    const typeExample = document.createElement("div");
    typeExample.style.cssText = \`
      background: var(--color-surface);
      border: 1px solid var(--color-primary-25);
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 1rem;
      cursor: pointer;
      transition: all 0.2s;
      display: grid;
      grid-template-columns: 200px 1fr auto;
      gap: 1.5rem;
      align-items: center;
    \`;
    const label = document.createElement("div");
    label.style.cssText = \`
      color: var(--color-on-surface);
      font-size: 0.875rem;
      font-weight: 600;
    \`;
    label.textContent = type.name;
    const sample = document.createElement("div");
    sample.style.cssText = \`
      color: var(--color-on-surface);
      line-height: 1.3;
    \`;

    // Apply font size if token exists, otherwise use fallback
    try {
      const fontSize = getComputedStyle(document.documentElement).getPropertyValue(\`--\${type.token}\`).trim();
      if (fontSize) {
        sample.style.fontSize = \`var(--\${type.token})\`;
      } else {
        // Fallback sizes based on name
        const fallbackSizes = {
          "Heading 1": "2rem",
          "Heading 2": "1.5rem",
          "Heading 3": "1.25rem",
          "Body Large": "1.125rem",
          "Body": "1rem",
          "Body Small": "0.875rem",
          "Caption": "0.75rem"
        };
        sample.style.fontSize = fallbackSizes[type.name] || "1rem";
      }
    } catch (e) {
      sample.style.fontSize = "1rem";
    }

    // Apply font weight if token exists
    try {
      const fontWeight = getComputedStyle(document.documentElement).getPropertyValue(\`--\${type.weight}\`).trim();
      if (fontWeight) {
        sample.style.fontWeight = \`var(--\${type.weight})\`;
      } else {
        // Fallback weights
        const fallbackWeights = {
          "font-weight-bold": "700",
          "font-weight-semibold": "600",
          "font-weight-normal": "400"
        };
        sample.style.fontWeight = fallbackWeights[type.weight] || "400";
      }
    } catch (e) {
      sample.style.fontWeight = "400";
    }
    sample.textContent = type.sample;
    const tokenInfo = document.createElement("div");
    tokenInfo.style.cssText = \`
      font-family: monospace;
      font-size: 0.75rem;
      color: var(--color-on-surface);
      opacity: 0.7;
      text-align: right;
    \`;
    const fontSize = getComputedStyle(document.documentElement).getPropertyValue(\`--\${type.token}\`).trim() || "Not defined";
    tokenInfo.innerHTML = \`
      <div>--\${type.token}</div>
      <div style="margin-top: 0.25rem;">\${fontSize}</div>
    \`;
    typeExample.appendChild(label);
    typeExample.appendChild(sample);
    typeExample.appendChild(tokenInfo);

    // Add interaction
    typeExample.addEventListener('mouseenter', () => {
      typeExample.style.transform = 'translateY(-1px)';
      typeExample.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
    });
    typeExample.addEventListener('mouseleave', () => {
      typeExample.style.transform = 'translateY(0)';
      typeExample.style.boxShadow = 'none';
    });
    typeExample.addEventListener('click', () => {
      navigator.clipboard.writeText(\`var(--\${type.token})\`);
      typeExample.style.background = 'var(--color-primary-25)';
      setTimeout(() => {
        typeExample.style.background = 'var(--color-surface)';
      }, 200);
    });
    scaleSection.appendChild(typeExample);
  });

  // Font Weights Section
  const weightsSection = document.createElement("div");
  weightsSection.style.cssText = \`
    margin-bottom: 2rem;
  \`;
  const weightsHeading = document.createElement("h3");
  weightsHeading.textContent = "Font Weights";
  weightsHeading.style.cssText = \`
    margin: 0 0 1.5rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-on-background);
  \`;
  weightsSection.appendChild(weightsHeading);
  const weightsGrid = document.createElement("div");
  weightsGrid.style.cssText = \`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  \`;
  fontWeights.forEach(weight => {
    const weightCard = document.createElement("div");
    weightCard.style.cssText = \`
      background: var(--color-surface);
      border: 1px solid var(--color-primary-25);
      border-radius: 8px;
      padding: 1.5rem;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
    \`;
    const weightSample = document.createElement("div");
    weightSample.style.cssText = \`
      font-size: 1.125rem;
      color: var(--color-on-surface);
      margin-bottom: 0.75rem;
    \`;

    // Apply font weight if token exists
    try {
      const fontWeight = getComputedStyle(document.documentElement).getPropertyValue(\`--\${weight.token}\`).trim();
      if (fontWeight) {
        weightSample.style.fontWeight = \`var(--\${weight.token})\`;
      } else {
        weightSample.style.fontWeight = weight.value;
      }
    } catch (e) {
      weightSample.style.fontWeight = weight.value;
    }
    weightSample.textContent = "Sample Text";
    const weightLabel = document.createElement("div");
    weightLabel.style.cssText = \`
      font-size: 0.875rem;
      color: var(--color-on-surface);
      margin-bottom: 0.5rem;
      font-weight: 600;
    \`;
    weightLabel.textContent = weight.name;
    const weightToken = document.createElement("div");
    weightToken.style.cssText = \`
      font-family: monospace;
      font-size: 0.75rem;
      color: var(--color-on-surface);
      opacity: 0.7;
    \`;
    const actualWeight = getComputedStyle(document.documentElement).getPropertyValue(\`--\${weight.token}\`).trim() || weight.value;
    weightToken.innerHTML = \`
      --\${weight.token}<br>
      \${actualWeight}
    \`;
    weightCard.appendChild(weightSample);
    weightCard.appendChild(weightLabel);
    weightCard.appendChild(weightToken);

    // Add interaction
    weightCard.addEventListener('mouseenter', () => {
      weightCard.style.transform = 'translateY(-2px)';
      weightCard.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    });
    weightCard.addEventListener('mouseleave', () => {
      weightCard.style.transform = 'translateY(0)';
      weightCard.style.boxShadow = 'none';
    });
    weightCard.addEventListener('click', () => {
      navigator.clipboard.writeText(\`var(--\${weight.token})\`);
      weightCard.style.background = 'var(--color-primary-25)';
      setTimeout(() => {
        weightCard.style.background = 'var(--color-surface)';
      }, 200);
    });
    weightsGrid.appendChild(weightCard);
  });
  weightsSection.appendChild(weightsGrid);
  container.appendChild(scaleSection);
  container.appendChild(weightsSection);
  return container;
}`,...c.parameters?.docs?.source}}};const v=["Typography"];export{c as Typography,v as __namedExportsOrder,x as default};
