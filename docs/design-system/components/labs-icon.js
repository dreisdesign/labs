// Dynamic icon loading - Vite-friendly approach
// Use the correct base path for both local dev and GitHub Pages
// Icons are served under design-system/icons/ for local dev, icons/ for Storybook
const ICON_BASE = (() => {
  const path = window.location.pathname;
  const hostname = window.location.hostname;

  // GitHub Pages production - always use full path
  if (hostname === 'dreisdesign.github.io') {
    return "/labs/design-system/icons/";
  }

  // Local Storybook development - use relative path
  if (path.includes('iframe.html') || path.includes('storybook') || window.parent !== window) {
    return "/icons/";
  }

  // Default for other local development
  return "/design-system/icons/";
})();
const icons = {
    add: ICON_BASE + 'add--labs-icons.svg',
    add_comment: ICON_BASE + 'add_comment--labs-icons.svg',
    apps: ICON_BASE + 'apps--labs-icons.svg',
    bedtime: ICON_BASE + 'bedtime--labs-icons.svg',
    bedtime_off: ICON_BASE + 'bedtime_off--labs-icons.svg',
    cancel: ICON_BASE + 'cancel--labs-icons.svg',
    change_circle: ICON_BASE + 'change_circle--labs-icons.svg',
    check: ICON_BASE + 'check--labs-icons.svg',
    close: ICON_BASE + 'close--labs-icons.svg',
    code: ICON_BASE + 'code--labs-icons.svg',
    comment: ICON_BASE + 'comment--labs-icons.svg',
    content_copy: ICON_BASE + 'content_copy--labs-icons.svg',
    delete_forever: ICON_BASE + 'delete_forever--labs-icons.svg',
    edit: ICON_BASE + 'edit--labs-icons.svg',
    rate_review: ICON_BASE + 'rate_review--labs-icons.svg',
    settings: ICON_BASE + 'settings--labs-icons.svg',
    undo: ICON_BASE + 'undo--labs-icons.svg'
};

class LabsIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["name", "width", "height", "color", "style"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  connectedCallback() {
    this.render();

    // Listen for theme changes to re-render when CSS variables change
    this.themeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' &&
          (mutation.attributeName === 'class' &&
            (mutation.target.classList.contains('theme-dark') ||
              mutation.target.classList.contains('theme-light')))) {
          // Theme changed, re-render to update CSS variable resolution
          this.render();
        }
      });
    });

    // Watch for class changes on body (where theme classes are applied)
    this.themeObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  disconnectedCallback() {
    // Clean up theme observer
    if (this.themeObserver) {
      this.themeObserver.disconnect();
    }
  }

  async render() {

    const iconName = this.getAttribute("name");
    let url = icons[iconName];

    if (!url) {
      this.shadowRoot.innerHTML = "";
      return;
    }

    const style = window.getComputedStyle(this);
    const rawWidth = this.getAttribute("width") || style.width || "24";
    const rawHeight = this.getAttribute("height") || style.height || "24";

    // Ensure width and height are never "auto" or invalid values
    const width = (rawWidth === "auto" || !rawWidth || rawWidth === "0px") ? "24" : rawWidth.replace("px", "");
    const height = (rawHeight === "auto" || !rawHeight || rawHeight === "0px") ? "24" : rawHeight.replace("px", "");

    const widthPx = width + "px";
    const heightPx = height + "px";
    // Always resolve color to a real value (not a CSS variable or currentColor)
    let color = this.getAttribute("color") || "#000";
    // If color is a CSS variable (token), resolve it to a real value
    if (color.startsWith('var(')) {
      // Create a temp element to resolve the variable
      const temp = document.createElement('div');
      temp.style.color = color;
      document.body.appendChild(temp);
      color = getComputedStyle(temp).color;
      document.body.removeChild(temp);
    }
    // If color is still not a hex/rgb value, default to #000
    if (!color || color === "currentColor" || color.startsWith("var(")) {
      color = "#000";
    }

    // Try to fetch and inline the SVG
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("SVG fetch failed");
      let svg = await response.text();

      // Simple approach: just set the color directly on fill attributes
      svg = svg.replace(/fill="#[^"]*"/gi, `fill="${color}"`);
      svg = svg.replace(/fill='#[^']*'/gi, `fill='${color}'`);

      // Set width and height with proper pixel values
      svg = svg.replace(/width="[^"]*"/gi, `width="${width}"`);
      svg = svg.replace(/height="[^"]*"/gi, `height="${height}"`);

      this.shadowRoot.innerHTML = svg;
      return;
    } catch (e) {
      // Fallback to mask if fetch fails
      this.shadowRoot.innerHTML = `
        <div style="
          width: ${width};
          height: ${height};
          background-color: ${color};
          mask: url('${url}') no-repeat center / contain;
          -webkit-mask: url('${url}') no-repeat center / contain;
          display: inline-block;
        "></div>
      `;
    }
  }
}
customElements.define("labs-icon", LabsIcon);
