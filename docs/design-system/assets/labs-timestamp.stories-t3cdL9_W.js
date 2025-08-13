import"./labs-timestamp-DgxLifyK.js";const s={title:"Components/Timestamp",tags:["autodocs"],parameters:{docs:{description:{component:"Timestamp component matching tracker app styling. Provides consistent time and date formatting with design token integration and accessibility features."}}},argTypes:{datetime:{control:"text",description:"ISO datetime string or timestamp"},format:{control:{type:"select"},options:["time","date-header","short-date"],description:"Display format"},size:{control:{type:"select"},options:["small","medium","large"],description:"Size variant"},interactive:{control:"boolean",description:"Enable hover effects for clickable timestamps"}}},i=n=>(setTimeout(()=>{document.addEventListener("click",r=>{r.target.tagName==="LABS-TIMESTAMP"&&console.log("Timestamp clicked:",r.target.getFormattedText())})},100),`
    <style>
      .timestamp-demo {
        max-width: 400px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
        text-align: center;
      }
    </style>
    
    <div class="timestamp-demo">
      <labs-timestamp 
        datetime="${n.datetime||new Date().toISOString()}"
        format="${n.format||"time"}"
        size="${n.size||"normal"}"
        ${n.interactive?"interactive":""}
      ></labs-timestamp>
    </div>
  `),t=i.bind({});t.args={datetime:new Date().toISOString(),format:"time",size:"medium",interactive:!1};t.parameters={docs:{description:{story:"Time format timestamp component. Use controls to explore all sizes (small, medium, large) and interactive states. Matches tracker app styling."}}};const e=i.bind({});e.args={datetime:new Date().toISOString(),format:"date-header",size:"medium"};const a=i.bind({});a.args={datetime:new Date().toISOString(),format:"short-date",size:"medium"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  setTimeout(() => {
    document.addEventListener('click', e => {
      if (e.target.tagName === 'LABS-TIMESTAMP') {
        console.log('Timestamp clicked:', e.target.getFormattedText());
      }
    });
  }, 100);
  return \`
    <style>
      .timestamp-demo {
        max-width: 400px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
        text-align: center;
      }
    </style>
    
    <div class="timestamp-demo">
      <labs-timestamp 
        datetime="\${args.datetime || new Date().toISOString()}"
        format="\${args.format || 'time'}"
        size="\${args.size || 'normal'}"
        \${args.interactive ? 'interactive' : ''}
      ></labs-timestamp>
    </div>
  \`;
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  setTimeout(() => {
    document.addEventListener('click', e => {
      if (e.target.tagName === 'LABS-TIMESTAMP') {
        console.log('Timestamp clicked:', e.target.getFormattedText());
      }
    });
  }, 100);
  return \`
    <style>
      .timestamp-demo {
        max-width: 400px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
        text-align: center;
      }
    </style>
    
    <div class="timestamp-demo">
      <labs-timestamp 
        datetime="\${args.datetime || new Date().toISOString()}"
        format="\${args.format || 'time'}"
        size="\${args.size || 'normal'}"
        \${args.interactive ? 'interactive' : ''}
      ></labs-timestamp>
    </div>
  \`;
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  setTimeout(() => {
    document.addEventListener('click', e => {
      if (e.target.tagName === 'LABS-TIMESTAMP') {
        console.log('Timestamp clicked:', e.target.getFormattedText());
      }
    });
  }, 100);
  return \`
    <style>
      .timestamp-demo {
        max-width: 400px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
        text-align: center;
      }
    </style>
    
    <div class="timestamp-demo">
      <labs-timestamp 
        datetime="\${args.datetime || new Date().toISOString()}"
        format="\${args.format || 'time'}"
        size="\${args.size || 'normal'}"
        \${args.interactive ? 'interactive' : ''}
      ></labs-timestamp>
    </div>
  \`;
}`,...a.parameters?.docs?.source}}};const o=["Time","DateHeader","ShortDate"];export{e as DateHeader,a as ShortDate,t as Time,o as __namedExportsOrder,s as default};
