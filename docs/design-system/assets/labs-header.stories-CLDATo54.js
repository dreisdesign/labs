import"./labs-header-CHHtlePv.js";const u={title:"Components/Header",component:"labs-header",argTypes:{title:{control:"text"},date:{control:"text"},subtitle:{control:"text"},center:{control:"boolean"},showSubtitle:{control:"boolean",name:"Show Subtitle"}}},n=({title:s,date:a,subtitle:o,center:l,showSubtitle:r})=>`
  <labs-header
    title="${s}"
    date="${a}"
    subtitle="${o}"${l?" center":""}${r?" show-subtitle":""}
  ></labs-header>
`,t=n.bind({});t.args={title:"Today",date:"October 2, 2025",subtitle:"Your daily summary",center:!0,showSubtitle:!0};const e=()=>`
  <labs-header center show-subtitle>
    <span slot="title">Custom Title via Slot</span>
    <span slot="subtitle">Slot Subtitle</span>
    <span slot="date">2025-10-02</span>
  </labs-header>
`;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  title,
  date,
  subtitle,
  center,
  showSubtitle
}) => \`
  <labs-header
    title="\${title}"
    date="\${date}"
    subtitle="\${subtitle}"\${center ? ' center' : ''}\${showSubtitle ? ' show-subtitle' : ''}
  ></labs-header>
\``,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
  <labs-header center show-subtitle>
    <span slot="title">Custom Title via Slot</span>
    <span slot="subtitle">Slot Subtitle</span>
    <span slot="date">2025-10-02</span>
  </labs-header>
\``,...e.parameters?.docs?.source}}};const b=["Default","SlotDriven"];export{t as Default,e as SlotDriven,b as __namedExportsOrder,u as default};
