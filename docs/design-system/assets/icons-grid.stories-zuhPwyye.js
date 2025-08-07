import{h as i}from"./iframe-DJBvnOau.js";import{i as o}from"./icons-list-DSoMNQaz.js";import"./labs-icon-zkbF4V76.js";import"./preload-helper-D9Z9MdNV.js";const c={title:"Patterns/Icons",parameters:{layout:"fullscreen"},argTypes:{size:{control:{type:"range",min:16,max:64,step:1},description:"Icon size in pixels"},color:{control:"color",description:"Icon color"}}},t=({size:e=32,color:a="#374151"})=>i`
  <style>
    * {
      box-sizing: border-box;
    }
    
    .container {
      padding: 2rem;
      background: #f8fafc;
      min-height: 100vh;
    }
    
    .title {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 1rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      min-height: 140px;
      justify-content: center;
      transition: all 0.2s ease;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
    
    .card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      border-color: #3b82f6;
    }
    
    .icon {
      display: block;
      width: ${e}px;
      height: ${e}px;
      color: ${a};
    }
    
    .name {
      font-size: var(--font-size-small, 0.875rem);
      font-weight: 500;
      color: #374151;
      margin-top: 0.5rem;
    }
    
    .usage {
      font-size: var(--font-size-small, 0.875rem);
      color: #6b7280;
      font-family: monospace;
      margin-top: 0.25rem;
      word-break: break-word;
      hyphens: none;
      max-width: 100%;
      overflow-wrap: break-word;
      white-space: pre-wrap;
    }
    
    @media (max-width: 768px) {
      .grid {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 0.75rem;
      }
      
      .card {
        padding: 0.75rem;
        min-height: 120px;
      }
    }
    
    @media (max-width: 480px) {
      .grid {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 0.5rem;
      }
      
      .card {
        padding: 0.5rem;
        min-height: 100px;
      }
      
      .usage {
        font-size: 0.75rem;
      }
      
      .container {
        padding: 1rem;
      }
    }
  </style>
  
  <div class="container">
    <h1 class="title">Icons (${o.length} total)</h1>
    <div class="grid">
      ${o.map(r=>i`
        <div class="card">
          <labs-icon 
            name="${r}" 
            class="icon"
            width="${e}"
            height="${e}"
            color="${a}"
          ></labs-icon>
          <div class="name">${r}</div>
          <div class="usage">&lt;labs-icon name="${r}"&gt;</div>
        </div>
      `)}
    </div>
  </div>
`,n=t.bind({});n.args={size:32,color:"#374151"};n.parameters={docs:{description:{story:"A clean grid layout showcasing all available icons in the Labs Design System."}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  size = 32,
  color = '#374151'
}) => html\`
  <style>
    * {
      box-sizing: border-box;
    }
    
    .container {
      padding: 2rem;
      background: #f8fafc;
      min-height: 100vh;
    }
    
    .title {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 1rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      min-height: 140px;
      justify-content: center;
      transition: all 0.2s ease;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
    
    .card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      border-color: #3b82f6;
    }
    
    .icon {
      display: block;
      width: \${size}px;
      height: \${size}px;
      color: \${color};
    }
    
    .name {
      font-size: var(--font-size-small, 0.875rem);
      font-weight: 500;
      color: #374151;
      margin-top: 0.5rem;
    }
    
    .usage {
      font-size: var(--font-size-small, 0.875rem);
      color: #6b7280;
      font-family: monospace;
      margin-top: 0.25rem;
      word-break: break-word;
      hyphens: none;
      max-width: 100%;
      overflow-wrap: break-word;
      white-space: pre-wrap;
    }
    
    @media (max-width: 768px) {
      .grid {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 0.75rem;
      }
      
      .card {
        padding: 0.75rem;
        min-height: 120px;
      }
    }
    
    @media (max-width: 480px) {
      .grid {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 0.5rem;
      }
      
      .card {
        padding: 0.5rem;
        min-height: 100px;
      }
      
      .usage {
        font-size: 0.75rem;
      }
      
      .container {
        padding: 1rem;
      }
    }
  </style>
  
  <div class="container">
    <h1 class="title">Icons (\${iconsList.length} total)</h1>
    <div class="grid">
      \${iconsList.map(icon => html\`
        <div class="card">
          <labs-icon 
            name="\${icon}" 
            class="icon"
            width="\${size}"
            height="\${size}"
            color="\${color}"
          ></labs-icon>
          <div class="name">\${icon}</div>
          <div class="usage">&lt;labs-icon name="\${icon}"&gt;</div>
        </div>
      \`)}
    </div>
  </div>
\``,...n.parameters?.docs?.source}}};const p=["IconsGrid"];export{n as IconsGrid,p as __namedExportsOrder,c as default};
