// Force Storybook manager UI to light theme
document.documentElement.setAttribute('data-color-scheme', 'light');

// Additional CSS injection to force light theme
const style = document.createElement('style');
style.innerHTML = `
  :root {
    color-scheme: light !important;
  }
  
  html, body {
    color-scheme: light !important;
    background: white !important;
    color: black !important;
  }
`;
document.head.appendChild(style);
