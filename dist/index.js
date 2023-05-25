import { ref as r, watch as d, resolveComponent as c, openBlock as b, createElementBlock as g, normalizeStyle as S, withModifiers as w, createVNode as p, mergeProps as f } from "vue";
const _ = ["onClick"], k = {
  name: "AdInputSelect"
}, O = /* @__PURE__ */ Object.assign(k, {
  props: {
    value: {
      type: [String, Number],
      default: void 0
    },
    options: {
      type: Array,
      default: () => []
    },
    width: {
      default: "100%",
      type: String
    },
    placeholder: {
      default: "请输入",
      type: String
    }
  },
  emits: ["update:value"],
  setup(t, { emit: n }) {
    const u = t, l = r(u.value || void 0), o = r(!1), m = () => {
      o.value = !o.value;
    }, s = () => {
      o.value = !1;
    };
    return d(l, (e) => {
      e !== u.value && n("update:value", e);
    }, { immediate: !0 }), d(() => u.value, (e) => {
      e !== l.value && (l.value = e);
    }), (e, a) => {
      const h = c("a-input"), y = c("a-select");
      return b(), g("div", {
        style: S({ width: t.width }),
        class: "relative",
        onClick: w(m, ["stop"])
      }, [
        p(h, f({
          value: l.value,
          "onUpdate:value": a[0] || (a[0] = (i) => l.value = i),
          style: { width: t.width },
          bordered: !1
        }, e.$attrs, {
          placeholder: t.placeholder,
          class: "absolute top-0 left-0 z-999",
          style: { background: "#fff !important" },
          onBlur: s
        }), null, 16, ["value", "style", "placeholder"]),
        p(y, f({
          value: l.value,
          "onUpdate:value": a[1] || (a[1] = (i) => l.value = i),
          options: t.options,
          style: { width: "100%", "margin-left": "0" },
          open: o.value,
          "list-height": 320
        }, e.$attrs, {
          onBlur: s,
          onSelect: s
        }), null, 16, ["value", "options", "open"])
      ], 12, _);
    };
  }
}), v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AdInputSelect: O
}, Symbol.toStringTag, { value: "Module" }));
const A = {
  install(t) {
    Object.keys(v).forEach((n) => {
      t.components(n, v[n]);
    });
  }
};
export {
  O as AdInputSelect,
  A as default
};
