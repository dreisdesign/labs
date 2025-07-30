import "./labs-icon-BAEphFFD.js"; class u extends HTMLElement {
  static get observedAttributes() { return ["variant", "icon", "icon-right", "checkmark", "checkmark-icon", "label", "iconcolor"] } constructor() { super(), this.attachShadow({ mode: "open" }), this.animating = !1, this.handleClick = this.handleClick.bind(this) } connectedCallback() { console.log("[LabsButton] LOCAL COMPONENT LOADED - DEMO TEST"), this.render(), this.shadowRoot.querySelector("button").addEventListener("click", this.handleClick) } disconnectedCallback() { this.shadowRoot.querySelector("button").removeEventListener("click", this.handleClick) } attributeChangedCallback() { console.log("[LabsButton] attributeChangedCallback:", { variant: this.getAttribute("variant"), icon: this.getAttribute("icon"), iconRight: this.getAttribute("icon-right"), checkmark: this.getAttribute("checkmark"), checkmarkIcon: this.getAttribute("checkmark-icon"), label: this.getAttribute("label"), iconcolor: this.getAttribute("iconcolor") }), this.render() } handleClick(e) { if (console.log("[LabsButton] handleClick:", { checkmark: this.hasAttribute("checkmark"), label: this.getAttribute("label"), icon: this.getAttribute("icon"), iconRight: this.getAttribute("icon-right") }), this.hasAttribute("checkmark")) { if (this.animating) return; this.animating = !0; const t = this.shadowRoot.querySelector("button"); t.classList.remove("success"), t.offsetWidth, t.classList.add("success"), setTimeout(() => { t.classList.remove("success"), this.animating = !1 }, 800) } this.dispatchEvent(new CustomEvent("labs-click", { bubbles: !0 })) } render() {
    const e = this.getAttribute("iconcolor") || "", t = c => c ? c.replace(/\.(svg|png|jpg|jpeg)$/i, "").replace(/--fill|--outline|--regular|--solid/gi, "").replace(/-/g, "_") : "", s = t(this.getAttribute("icon")); let n = t(this.getAttribute("icon-right")); !n && this.hasAttribute("default-icon-right") && (n = "settings"); const b = this.getAttribute("checkmark-icon") || "assets/icons/check--fill.svg", l = this.getAttribute("label") || "", i = this.hasAttribute("checkmark"), a = this.getAttribute("variant") || "primary"; this.shadowRoot.innerHTML = `
      <style>
        :host { display: inline-block; }
        .labs-button {
          font-size: 1.25rem;
          font-weight: 600;
          border: none;
          border-radius: 5rem;
          background: rgb(46, 43, 116);
          color: #fff;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.1s ease-out;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          overflow: hidden;
          position: relative;
          padding: 0.75rem 1.5rem;
        }
        .labs-button:active,
        .labs-button.button-pressed {
          background-color: rgb(25, 23, 80);
          transform: scale(0.95);
          transition-duration: 0.05s;
        }
        .labs-button:hover {
          background: rgb(13, 11, 63);
        }
        .labs-button:focus-visible {
          outline: 3px solid rgb(0, 95, 204);
          outline-offset: 2px;
        }
        .labs-icon {
          width: 1.5rem;
          height: 1.5rem;
          display: inline-block;
          vertical-align: middle;
        }
        .labs-label {
          text-align: center;
          line-height: 1.2;
          height: 24px;
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .labs-checkmark {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
        }
        .success .labs-label {
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.3s ease-out, transform 0.3s ease-out;
        }
        .success .labs-checkmark {
          opacity: 1;
          transform: scale(1) rotate(0deg);
          animation: rollInCheckmark 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
        }
        @keyframes rollInCheckmark {
          from {
            opacity: 0;
            transform: scale(0.3) rotate(-360deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        .checkmark-icon {
          width: 1.5rem;
          height: 1.5rem;
          filter: brightness(0) invert(1);
        }
        /* Apply icon color filter */
        .labs-icon img {
          filter: ${e === "#fff" || e.toLowerCase() === "white" ? "brightness(0) invert(1)" : e ? "hue-rotate(0deg) saturate(0) brightness(0) invert(1)" : "none"};
        }
        /* Ensure right icon is visible and spaced */
        .labs-button labs-icon:last-of-type {
          margin-left: 0.5em;
          opacity: 1 !important;
          display: inline-block !important;
        }
      </style>
      <button class="labs-button ${a}" part="button">
        ${s ? `<labs-icon class="labs-icon" name="${s}"></labs-icon>` : ""}
        <span class="labs-label">${l}</span>
        ${n ? `<labs-icon class="labs-icon" name="${n}"></labs-icon>` : ""}
        ${i ? `<span class="labs-checkmark"><img src="${b}" class="checkmark-icon" alt="Success"/></span>` : ""}
      </button>
    `}
} customElements.define("labs-button", u); const d = { title: "Components/Button", argTypes: { label: { control: "text" }, iconLeft: { control: "boolean", name: "Icon Left" }, icon: { control: { type: "select" }, name: "Left Icon Name", description: "Set left icon name (if iconLeft is true)", options: ["", "add_comment", "bedtime", "bedtime_off", "cancel", "change_circle", "check--labs-icons.svg", "check", "close", "comment", "delete_forever", "edit", "rate_review", "settings--labs-icons", "settings", "undo", "undo_svg"] }, iconRight: { control: "boolean", name: "Icon Right" }, iconRightName: { control: { type: "select" }, name: "Right Icon Name", description: "Set right icon name (if iconRight is true)", options: ["", "add_comment", "bedtime", "bedtime_off", "cancel", "change_circle", "check--labs-icons.svg", "check", "close", "comment", "delete_forever", "edit", "rate_review", "settings--labs-icons", "settings", "undo", "undo_svg"] }, checkmark: { control: "boolean", name: "Check Animation" }, variant: { control: { type: "select" }, options: ["primary", "secondary", "danger", "success"] } } }, f = ({ label: h, iconLeft: e, icon: t, iconRight: s, iconRightName: n, checkmark: b, variant: l }) => {
  let i = e ? t || "undo" : "", a = s ? n || "settings--fill" : "", c = "#fff"; return l === "danger" && (i = "delete_forever", a = "", c = "#b5005a"), `
    <labs-button
      label="${h || ""}"
      ${i ? `icon="${i}"` : ""}
      ${a ? `icon-right="${a}"` : ""}
      ${b ? "checkmark" : ""}
      variant="${l || "primary"}"
      iconcolor="${c}"
    ></labs-button>
  `}, o = f.bind({}); o.args = { label: "Primary Button", iconLeft: !1, icon: "", iconRight: !1, iconRightName: "", checkmark: !1, variant: "primary" }; o.storyName = "Primary"; const r = () => `
  <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: flex-end;">
    <labs-button label="Undo" icon="undo" variant="primary" iconcolor="#fff"></labs-button>
    <labs-button label="Settings" icon-right="settings--labs-icons" variant="primary" iconcolor="#fff"></labs-button>
    <labs-button label="Check" checkmark variant="primary" iconcolor="#fff"></labs-button>
    <labs-button label="Secondary" icon="undo" variant="secondary" iconcolor="#fff"></labs-button>
    <labs-button label="Danger" icon="delete_forever" variant="danger" iconcolor="#b5005a"></labs-button>
    <labs-button label="Success" icon="check" variant="success" iconcolor="#fff"></labs-button>
    <labs-button label="Edit" icon="edit" variant="primary" iconcolor="#fff"></labs-button>
  </div>
`; r.storyName = "Icon Grid Demo"; o.parameters = {
  ...o.parameters, docs: {
    ...o.parameters?.docs, source: {
      originalSource: `({
  label,
  iconLeft,
  icon,
  iconRight,
  iconRightName,
  checkmark,
  variant
}) => {
  let leftIcon = iconLeft ? icon || 'undo' : '';
  let rightIcon = iconRight ? iconRightName || 'settings--fill' : '';
  let iconColor = '#fff';
  if (variant === 'danger') {
    leftIcon = 'delete_forever';
    rightIcon = '';
    iconColor = '#b5005a';
  }
  return \`
    <labs-button
      label="\${label || ''}"
      \${leftIcon ? \`icon="\${leftIcon}"\` : ''}
      \${rightIcon ? \`icon-right="\${rightIcon}"\` : ''}
      \${checkmark ? 'checkmark' : ''}
      variant="\${variant || 'primary'}"
      iconcolor="\${iconColor}"
    ></labs-button>
  \`;
}`, ...o.parameters?.docs?.source
    }
  }
}; r.parameters = {
  ...r.parameters, docs: {
    ...r.parameters?.docs, source: {
      originalSource: `() => \`
  <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: flex-end;">
    <labs-button label="Undo" icon="undo" variant="primary" iconcolor="#fff"></labs-button>
    <labs-button label="Settings" icon-right="settings--labs-icons" variant="primary" iconcolor="#fff"></labs-button>
    <labs-button label="Check" checkmark variant="primary" iconcolor="#fff"></labs-button>
    <labs-button label="Secondary" icon="undo" variant="secondary" iconcolor="#fff"></labs-button>
    <labs-button label="Danger" icon="delete_forever" variant="danger" iconcolor="#b5005a"></labs-button>
    <labs-button label="Success" icon="check" variant="success" iconcolor="#fff"></labs-button>
    <labs-button label="Edit" icon="edit" variant="primary" iconcolor="#fff"></labs-button>
  </div>
\``, ...r.parameters?.docs?.source
    }
  }
}; const g = ["Default", "IconGrid"]; export { o as Default, r as IconGrid, g as __namedExportsOrder, d as default };
