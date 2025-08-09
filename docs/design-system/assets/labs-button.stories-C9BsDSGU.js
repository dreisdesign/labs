class d extends HTMLElement {
  static get observedAttributes() {
    return ["variant", "icon", "icon-right", "checkmark", "label", "iconcolor"];
  }
  constructor() {
    super(),
      this.attachShadow({ mode: "open" }),
      (this.animating = !1),
      (this.handleClick = this.handleClick.bind(this));
  }
  connectedCallback() {
    this.render(),
      this.shadowRoot
        .querySelector("button")
        .addEventListener("click", this.handleClick);
  }
  disconnectedCallback() {
    this.shadowRoot
      .querySelector("button")
      .removeEventListener("click", this.handleClick);
  }
  attributeChangedCallback() {
    this.render();
  }
  handleClick(n) {
    if (this.hasAttribute("checkmark")) {
      if (this.animating) return;
      this.animating = !0;
      const t = this.shadowRoot.querySelector("button");
      t.classList.remove("success"),
        t.offsetWidth,
        t.classList.add("success"),
        setTimeout(() => {
          t.classList.remove("success"), (this.animating = !1);
        }, 800);
    }
    this.dispatchEvent(new CustomEvent("labs-click", { bubbles: !0 }));
  }
  render() {
    const n = this.getAttribute("iconcolor") || "",
      t = n
        ? `filter: ${n === "#fff" || n.toLowerCase() === "white" ? "brightness(0) invert(1)" : ""}; color: ${n};`
        : "",
      c = this.getAttribute("icon");
    let o = this.getAttribute("icon-right");
    !o &&
      this.hasAttribute("default-icon-right") &&
      (o = "icons/settings--labs-icons.svg");
    const s = "icons/check--labs-icons.svg",
      b = this.getAttribute("label") || "",
      m = this.hasAttribute("checkmark"),
      u = this.getAttribute("variant") || "primary";
    this.shadowRoot.innerHTML = `
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
          /* Removed transition to prevent double animation in Safari */
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
          animation: rollInCheckmark 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
        }
        @keyframes rollInCheckmark {
          from {
            opacity: 0;
            transform: scale(0.3) rotate(-180deg);
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
        @media (max-width: 480px) {
          .labs-button {
            padding-left: 1.2em;
            padding-right: 1.2em;
            font-size: 1rem;
          }
        }
      </style>
      <button class="labs-button ${u}">
        ${c ? `<img src="${c}" class="labs-icon labs-icon-left" alt="" style="${t}">` : ""}
        <span class="labs-label">${b}</span>
        ${o ? `<img src="${o}" class="labs-icon labs-icon-right" alt="" style="${t}">` : ""}
        ${m ? `<span class="labs-checkmark"><img src="${s}" alt="Success" class="checkmark-icon"></span>` : ""}
        <slot></slot>
      </button>
    `;
  }
}
customElements.define("labs-button", d);
const g = {
    title: "Components/Button",
    argTypes: {
      label: { control: "text" },
      icon: { control: "text" },
      iconRight: { control: "text" },
      checkmark: { control: "boolean" },
      variant: { control: "text" },
      iconColor: { control: "color", name: "Icon Color" },
    },
  },
  l = ({
    label: h,
    icon: n,
    iconRight: t,
    checkmark: c,
    variant: o,
    iconColor: s,
  }) => `
    <labs-button
      label="${h || ""}"
      ${n ? `icon="${n}"` : ""}
      ${t ? `icon-right="${t}"` : ""}
      ${c ? "checkmark" : ""}
      variant="${o || "primary"}"
      ${s ? `iconcolor="${s}"` : ""}
    ></labs-button>
  `,
  e = l.bind({});
e.args = {
  label: "Primary Button",
  checkmark: !1,
  variant: "primary",
  iconColor: "",
};
e.storyName = "Primary";
const i = l.bind({});
i.args = {
  label: "Icon Left",
  icon: "assets/icons/undo--labs-icons.svg",
  checkmark: !1,
  variant: "primary",
  iconColor: "#fff",
};
const r = l.bind({});
r.args = {
  label: "Icon Right",
  iconRight: "icons/settings--labs-icons.svg",
  checkmark: !1,
  variant: "primary",
  iconColor: "#fff",
};
const a = l.bind({});
a.args = { label: "+ Add", checkmark: !0, variant: "primary", iconColor: "" };
a.storyName = "On click: Checkmark";
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `({
  label,
  icon,
  iconRight,
  checkmark,
  variant,
  iconColor
}) => {
  return \`
    <labs-button
      label="\${label || ''}"
      \${icon ? \`icon="\${icon}"\` : ''}
      \${iconRight ? \`icon-right="\${iconRight}"\` : ''}
      \${checkmark ? 'checkmark' : ''}
      variant="\${variant || 'primary'}"
      \${iconColor ? \`iconcolor="\${iconColor}"\` : ''}
    ></labs-button>
  \`;
}`,
      ...e.parameters?.docs?.source,
    },
  },
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `({
  label,
  icon,
  iconRight,
  checkmark,
  variant,
  iconColor
}) => {
  return \`
    <labs-button
      label="\${label || ''}"
      \${icon ? \`icon="\${icon}"\` : ''}
      \${iconRight ? \`icon-right="\${iconRight}"\` : ''}
      \${checkmark ? 'checkmark' : ''}
      variant="\${variant || 'primary'}"
      \${iconColor ? \`iconcolor="\${iconColor}"\` : ''}
    ></labs-button>
  \`;
}`,
      ...i.parameters?.docs?.source,
    },
  },
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `({
  label,
  icon,
  iconRight,
  checkmark,
  variant,
  iconColor
}) => {
  return \`
    <labs-button
      label="\${label || ''}"
      \${icon ? \`icon="\${icon}"\` : ''}
      \${iconRight ? \`icon-right="\${iconRight}"\` : ''}
      \${checkmark ? 'checkmark' : ''}
      variant="\${variant || 'primary'}"
      \${iconColor ? \`iconcolor="\${iconColor}"\` : ''}
    ></labs-button>
  \`;
}`,
      ...r.parameters?.docs?.source,
    },
  },
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `({
  label,
  icon,
  iconRight,
  checkmark,
  variant,
  iconColor
}) => {
  return \`
    <labs-button
      label="\${label || ''}"
      \${icon ? \`icon="\${icon}"\` : ''}
      \${iconRight ? \`icon-right="\${iconRight}"\` : ''}
      \${checkmark ? 'checkmark' : ''}
      variant="\${variant || 'primary'}"
      \${iconColor ? \`iconcolor="\${iconColor}"\` : ''}
    ></labs-button>
  \`;
}`,
      ...a.parameters?.docs?.source,
    },
  },
};
const k = ["Default", "IconLeft", "IconRight", "WithCheckmark"];
export {
  e as Default,
  i as IconLeft,
  r as IconRight,
  a as WithCheckmark,
  k as __namedExportsOrder,
  g as default,
};
