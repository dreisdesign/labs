/* empty css              */function h({variant:t="primary",size:a="md",disabled:v=!1,loading:f=!1,fullWidth:gt=!1,icon:bt=!1,text:Bt="Button",onClick:S=()=>console.log("Button clicked"),...xt}){const r=document.createElement("button"),e=["labs-button"];return e.push(`labs-button--${t}`),a!=="md"&&e.push(`labs-button--${a}`),gt&&e.push("labs-button--full"),bt&&e.push("labs-button--icon"),f&&e.push("labs-button--loading"),r.className=e.join(" "),r.textContent=Bt,r.disabled=v||f,S&&r.addEventListener("click",S),r}const vt={title:"Components/Button",tags:["autodocs"],render:({...t})=>h(t),argTypes:{variant:{control:{type:"select"},options:["primary","secondary","success","error","outline","ghost"],description:"Button variant/style"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Button size"},text:{control:{type:"text"},description:"Button text content"},disabled:{control:{type:"boolean"},name:"Inactive",description:"Inactive state"},loading:{control:{type:"boolean"},description:"Loading state with spinner"},fullWidth:{control:{type:"boolean"},description:"Full width button"},icon:{control:{type:"boolean"},description:"Icon-only button (circular)"},onClick:{action:"clicked"}},parameters:{docs:{description:{component:"Primary interactive element based on Labs design system. Supports multiple variants, sizes, and states extracted from the Tracker app patterns."}}}},n={args:{text:"Default Button",variant:"primary",size:"md"}},s={args:{text:"Primary Button",variant:"primary"}},o={args:{text:"Secondary Button",variant:"secondary"}},c={args:{text:"Success Button",variant:"success"}},i={args:{text:"Error Button",variant:"error"}},u={args:{text:"Outline Button",variant:"outline"}},l={args:{text:"Ghost Button",variant:"ghost"}},d={args:{text:"Small Button",size:"sm"}},p={args:{text:"Large Button",size:"lg"}},m={args:{text:"Inactive Button",disabled:!0}},g={args:{text:"Loading Button",loading:!0}},b={args:{text:"Full Width Button",fullWidth:!0}},B={args:{text:"×",icon:!0,variant:"ghost"}},x={args:{text:"Playground Button",variant:"primary",size:"md",disabled:!1,loading:!1,fullWidth:!1,icon:!1}},y={render:()=>{const t=document.createElement("div");t.className="labs-button-group";const a=h({text:"Save",variant:"primary"}),v=h({text:"Cancel",variant:"outline"});return t.appendChild(a),t.appendChild(v),t},parameters:{docs:{description:{story:"Buttons can be grouped together using the `labs-button-group` class."}}}};var L,z,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    text: 'Default Button',
    variant: 'primary',
    size: 'md'
  }
}`,...(E=(z=n.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var I,P,W;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    variant: 'primary'
  }
}`,...(W=(P=s.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var C,G,D;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Button',
    variant: 'secondary'
  }
}`,...(D=(G=o.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var F,O,k;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    text: 'Success Button',
    variant: 'success'
  }
}`,...(k=(O=c.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var N,_,w;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    text: 'Error Button',
    variant: 'error'
  }
}`,...(w=(_=i.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var T,$,j;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    text: 'Outline Button',
    variant: 'outline'
  }
}`,...(j=($=u.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var q,A,H;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    text: 'Ghost Button',
    variant: 'ghost'
  }
}`,...(H=(A=l.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var J,K,M;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    text: 'Small Button',
    size: 'sm'
  }
}`,...(M=(K=d.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,R,U;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    text: 'Large Button',
    size: 'lg'
  }
}`,...(U=(R=p.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var V,X,Y;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    text: 'Inactive Button',
    disabled: true
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,tt,et;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    text: 'Loading Button',
    loading: true
  }
}`,...(et=(tt=g.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var rt,at,nt;b.parameters={...b.parameters,docs:{...(rt=b.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  args: {
    text: 'Full Width Button',
    fullWidth: true
  }
}`,...(nt=(at=b.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var st,ot,ct;B.parameters={...B.parameters,docs:{...(st=B.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    text: '×',
    icon: true,
    variant: 'ghost'
  }
}`,...(ct=(ot=B.parameters)==null?void 0:ot.docs)==null?void 0:ct.source}}};var it,ut,lt;x.parameters={...x.parameters,docs:{...(it=x.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    text: 'Playground Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false,
    icon: false
  }
}`,...(lt=(ut=x.parameters)==null?void 0:ut.docs)==null?void 0:lt.source}}};var dt,pt,mt;y.parameters={...y.parameters,docs:{...(dt=y.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.className = 'labs-button-group';
    const button1 = createButton({
      text: 'Save',
      variant: 'primary'
    });
    const button2 = createButton({
      text: 'Cancel',
      variant: 'outline'
    });
    container.appendChild(button1);
    container.appendChild(button2);
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Buttons can be grouped together using the \`labs-button-group\` class.'
      }
    }
  }
}`,...(mt=(pt=y.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};const ht=["Default","Primary","Secondary","Success","Error","Outline","Ghost","Small","Large","Inactive","Loading","FullWidth","IconButton","Playground","ButtonGroup"];export{y as ButtonGroup,n as Default,i as Error,b as FullWidth,l as Ghost,B as IconButton,m as Inactive,p as Large,g as Loading,u as Outline,x as Playground,s as Primary,o as Secondary,d as Small,c as Success,ht as __namedExportsOrder,vt as default};
