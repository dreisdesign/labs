import { n as g, h as d } from "./iframe-DxL4c4aX.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const h = { ATTRIBUTE: 1 },
  _ =
    (n) =>
    (...e) => ({ _$litDirective$: n, values: e });
class v {
  constructor(e) {}
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _$initialize(e, t, r) {
    (this.__part = e), (this._$parent = t), (this.__attributeIndex = r);
  }
  _$resolve(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const p = "important",
  m = " !" + p,
  b = 0 - m.length;
class y extends v {
  constructor(e) {
    if (
      (super(e),
      e.type !== h.ATTRIBUTE || e.name !== "style" || e.strings?.length > 2)
    )
      throw new Error(
        "The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.",
      );
  }
  render(e) {
    return Object.keys(e).reduce((t, r) => {
      const s = e[r];
      return s == null
        ? t
        : ((r = r.includes("-")
            ? r
            : r
                .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&")
                .toLowerCase()),
          t + `${r}:${s};`);
    }, "");
  }
  update(e, [t]) {
    const { style: r } = e.element;
    if (this._previousStyleProperties === void 0)
      return (
        (this._previousStyleProperties = new Set(Object.keys(t))),
        this.render(t)
      );
    for (const s of this._previousStyleProperties)
      t[s] == null &&
        (this._previousStyleProperties.delete(s),
        s.includes("-") ? r.removeProperty(s) : (r[s] = null));
    for (const s in t) {
      const o = t[s];
      if (o != null) {
        this._previousStyleProperties.add(s);
        const l = typeof o == "string" && o.endsWith(m);
        s.includes("-") || l
          ? r.setProperty(s, l ? o.slice(0, b) : o, l ? p : "")
          : (r[s] = o);
      }
    }
    return g;
  }
}
const $ = _(y),
  c = ({
    primary: n,
    backgroundColor: e = null,
    size: t,
    label: r,
    onClick: s,
  }) => {
    const o = n ? "labs-button--primary" : "labs-button--secondary";
    return d`
    <button
      type="button"
      class=${["labs-button", `labs-button--${t}`, o].join(" ")}
      style=${$({ backgroundColor: e })}
      @click=${s}
    >
      ${r}
    </button>
  `;
  },
  f = ({ user: n, onLogin: e, onLogout: t, onCreateAccount: r }) => d`
  <header>
    <div class="storybook-header">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        ${
          n
            ? c({ size: "small", onClick: t, label: "Log out" })
            : d`${c({ size: "small", onClick: e, label: "Log in" })}
            ${c({ primary: !0, size: "small", onClick: r, label: "Sign up" })}`
        }
      </div>
    </div>
  </header>
`,
  { fn: u } = __STORYBOOK_MODULE_TEST__,
  S = {
    title: "Example/Header",
    tags: ["autodocs"],
    render: (n) => f(n),
    args: { onLogin: u(), onLogout: u(), onCreateAccount: u() },
  },
  i = { args: { user: { name: "Jane Doe" } } },
  a = {};
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,
      ...i.parameters?.docs?.source,
    },
  },
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: { originalSource: "{}", ...a.parameters?.docs?.source },
  },
};
const T = ["LoggedIn", "LoggedOut"],
  w = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        LoggedIn: i,
        LoggedOut: a,
        __namedExportsOrder: T,
        default: S,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
export { f as H, i as L, a, w as b };
