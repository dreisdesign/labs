// Dynamic icon loading - Vite-friendly approach
// Use the correct base path for both local dev and GitHub Pages
// Icons are served under icons/ in both environments
const ICON_BASE = window.location.pathname.includes("/labs/")
  ? "/labs/design-system/icons/"
  : "icons/";
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
    comment: ICON_BASE + 'comment--labs-icons.svg',
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
    return ["name", "style"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  async render() {

    const iconName = this.getAttribute("name");
    let url = icons[iconName];

    if (!url) {
      this.shadowRoot.innerHTML = "";
      return;
    }

    const style = window.getComputedStyle(this);
    const width = this.getAttribute("width") || style.width || "24px";
    const height = this.getAttribute("height") || style.height || "24px";
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
      // Replace all fill attributes (except fill="none") with fill="currentColor"
      svg = svg.replace(/fill=("|')(?!none)([^"']*)("|')/gi, 'fill="currentColor"');
      // Set width/height on SVG root
      svg = svg.replace(/<svg\b([^>]*)>/, `<svg$1 width=\"${width}\" height=\"${height}\">`);
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
