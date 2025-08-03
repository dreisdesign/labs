const e = window.location.pathname.includes("/labs/")
    ? "/labs/design-system/icons/"
    : "icons/",
  a = {
    add_comment: e + "add_comment--labs-icons.svg",
    bedtime: e + "bedtime--labs-icons.svg",
    bedtime_off: e + "bedtime_off--labs-icons.svg",
    cancel: e + "cancel--labs-icons.svg",
    change_circle: e + "change_circle--labs-icons.svg",
    check: e + "check--labs-icons.svg",
    close: e + "close--labs-icons.svg",
    comment: e + "comment--labs-icons.svg",
    delete_forever: e + "delete_forever--labs-icons.svg",
    edit: e + "edit--labs-icons.svg",
    rate_review: e + "rate_review--labs-icons.svg",
    settings: e + "settings--labs-icons.svg",
    undo: e + "undo--labs-icons.svg",
  };
class l extends HTMLElement {
  static get observedAttributes() {
    return ["name", "style"];
  }
  attributeChangedCallback(n, s, t) {
    this.render();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const n = this.getAttribute("name");
    let s = a[n];
    if (s) {
      const t = window.getComputedStyle(this),
        i = this.getAttribute("width") || t.width || "24px",
        c = this.getAttribute("height") || t.height || "24px",
        o = this.style.color || "currentColor";
      this.innerHTML = `
                <div style="
                    width: ${i};
                    height: ${c};
                    background-color: ${o};
                    mask-image: url(${s});
                    mask-size: contain;
                    mask-repeat: no-repeat;
                    mask-position: center;
                "></div>
            `;
    } else this.innerHTML = "";
  }
}
customElements.define("labs-icon", l);
