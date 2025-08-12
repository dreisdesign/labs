try{
(()=>{document.documentElement.setAttribute("data-color-scheme","light");var t=document.createElement("style");t.innerHTML=`
  :root {
    color-scheme: light !important;
  }
  
  html, body {
    color-scheme: light !important;
    background: white !important;
    color: black !important;
  }
`;document.head.appendChild(t);})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
