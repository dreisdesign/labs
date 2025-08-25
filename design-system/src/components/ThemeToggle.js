// ThemeToggle.js
// Reusable theme toggle button for Storybook and apps
import { applyTheme } from '../utils/theme.js';

export function createThemeToggleButton({ parent = document.body } = {}) {
  // Remove any existing toggle
  const existing = parent.querySelector('.labs-theme-toggle');
  if (existing) existing.remove();

  const btn = document.createElement('labs-button');
  btn.className = 'labs-theme-toggle';
  btn.setAttribute('variant', 'secondary');
  btn.setAttribute('size', 'large');
  btn.setAttribute('icon-left', 'bedtime');
  btn.style.margin = '1rem';
  btn.style.position = 'fixed';
  btn.style.top = '1rem';
  btn.style.right = '1rem';
  btn.style.zIndex = 1000;

  // Use a text node for the label to ensure slot compatibility
  let labelNode = document.createTextNode('');
  btn.appendChild(labelNode);
  function updateLabel() {
    const isDark = document.documentElement.classList.contains('theme-dark');
    labelNode.textContent = isDark ? 'Turn on light mode' : 'Turn on dark mode';
    // Always update text color to match theme
    btn.style.color = 'var(--color-on-surface)';
  }

  btn.onclick = () => {
    const isDark = document.documentElement.classList.contains('theme-dark');
    // Detect current flavor from the root element's classList
    const root = document.documentElement;
    const flavorClass = Array.from(root.classList).find(c => c.startsWith('flavor-'));
    const flavor = flavorClass ? flavorClass.replace('flavor-', '') : 'vanilla';
    applyTheme({ flavor, theme: isDark ? 'light' : 'dark' });
    updateLabel();
  };

  updateLabel();
  parent.appendChild(btn);
  return btn;
}
