import "./labs-button-CTm3BRv_.js";
import "./labs-icon-8279HnLw.js";
const g = {
    title: "Components/Button",
    argTypes: {
      label: { control: "text" },
      iconLeft: { control: "boolean", name: "Icon Left" },
      icon: {
        control: { type: "select" },
        name: "Left Icon Name",
        description: "Set left icon name (if iconLeft is true)",
        options: [
          "",
          "add_comment",
          "bedtime",
          "bedtime_off",
          "cancel",
          "change_circle",
          "check--labs-icons.svg",
          "check",
          "close",
          "comment",
          "delete_forever",
          "edit",
          "rate_review",
          "settings--labs-icons",
          "settings",
          "undo",
          "undo_svg",
        ],
      },
      iconRight: { control: "boolean", name: "Icon Right" },
      iconRightName: {
        control: { type: "select" },
        name: "Right Icon Name",
        description: "Set right icon name (if iconRight is true)",
        options: [
          "",
          "add_comment",
          "bedtime",
          "bedtime_off",
          "cancel",
          "change_circle",
          "check--labs-icons.svg",
          "check",
          "close",
          "comment",
          "delete_forever",
          "edit",
          "rate_review",
          "settings--labs-icons",
          "settings",
          "undo",
          "undo_svg",
        ],
      },
      checkmark: { control: "boolean", name: "Check Animation" },
      variant: {
        control: { type: "select" },
        options: ["primary", "secondary", "danger", "success"],
      },
    },
  },
  m = ({
    label: i,
    iconLeft: r,
    icon: l,
    iconRight: s,
    iconRightName: b,
    checkmark: f,
    variant: a,
  }) => {
    let e = r ? l || "undo" : "",
      t = s ? b || "settings--labs-icons" : "",
      c = "#fff";
    return (
      a === "danger" && ((e = "delete_forever"), (t = ""), (c = "#b5005a")),
      `
    <labs-button
      label="${i || ""}"
      ${e ? `icon="${e}"` : ""}
      ${t ? `icon-right="${t}"` : ""}
      ${f ? "checkmark" : ""}
      variant="${a || "primary"}"
      iconcolor="${c}"
    ></labs-button>
  `
    );
  },
  n = m.bind({});
n.args = {
  label: "Primary Button",
  iconLeft: !1,
  icon: "",
  iconRight: !1,
  iconRightName: "",
  checkmark: !1,
  variant: "primary",
};
n.storyName = "Primary";
const o = () => `
  <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: flex-end;">
    <labs-button label="Undo" icon="undo" variant="primary" iconcolor="#fff"></labs-button>
    <labs-button label="Settings" icon-right="settings--labs-icons" variant="primary" iconcolor="#fff"></labs-button>
    <labs-button label="Check" checkmark variant="primary" iconcolor="#fff"></labs-button>
    <labs-button label="Secondary" icon="undo" variant="secondary" iconcolor="#fff"></labs-button>
    <labs-button label="Danger" icon="delete_forever" variant="danger" iconcolor="#b5005a"></labs-button>
    <labs-button label="Success" icon="check" variant="success" iconcolor="#fff"></labs-button>
    <labs-button label="Edit" icon="edit" variant="primary" iconcolor="#fff"></labs-button>
  </div>
`;
o.storyName = "Preview All Buttons";
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
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
  let rightIcon = iconRight ? iconRightName || 'settings--labs-icons' : '';
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
}`,
      ...n.parameters?.docs?.source,
    },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
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
\``,
      ...o.parameters?.docs?.source,
    },
  },
};
const p = ["Default", "IconGrid"];
export { n as Default, o as IconGrid, p as __namedExportsOrder, g as default };
