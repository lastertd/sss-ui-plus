import {
  d,
  noop,
  unrefElement,
  useEventListener,
  useMutationObserver,
  useResizeObserver
} from "./chunk-UD3B5P3B.js";
import {
  Fragment,
  Teleport,
  Transition,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentScope,
  inject,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  onUnmounted,
  openBlock,
  provide,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDynamicComponent,
  shallowReadonly,
  shallowRef,
  toDisplayString,
  unref,
  useSlots,
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-V634PGSD.js";
import {
  __export
} from "./chunk-SSYGV25P.js";

// node_modules/sss-ui-plus/es/packages/index.mjs
var packages_exports = {};
__export(packages_exports, {
  SButton: () => p4,
  SCascader: () => A5,
  SDialog: () => a6,
  SDivider: () => s3,
  SDrawer: () => s2,
  SDropdown: () => s5,
  SDropdownItem: () => e7,
  SFloating: () => a8,
  SIcon: () => p3,
  SInput: () => s,
  SLink: () => p5,
  SPopconfirm: () => s4,
  SRow: () => p6,
  SScrollbar: () => s6,
  SSkeleton: () => s7,
  SSkeletonItem: () => s8,
  SSwitch: () => p7,
  STooltip: () => l5
});

// node_modules/sss-ui-plus/es/node_modules/@vue/shared/dist/shared.esm-bundler.mjs
function S(t10, s9) {
  const e11 = /* @__PURE__ */ Object.create(null), n4 = t10.split(",");
  for (let o8 = 0; o8 < n4.length; o8++)
    e11[n4[o8]] = true;
  return s9 ? (o8) => !!e11[o8.toLowerCase()] : (o8) => !!e11[o8];
}
var w = true ? Object.freeze({}) : {};
Object.freeze([]);
var N = () => {
};
var z = Object.assign;
var E = (t10, s9) => {
  const e11 = t10.indexOf(s9);
  e11 > -1 && t10.splice(e11, 1);
};
var u = Object.prototype.hasOwnProperty;
var P = (t10, s9) => u.call(t10, s9);
var p = Array.isArray;
var v = (t10) => i(t10) === "[object Map]";
var A = (t10) => i(t10) === "[object Set]";
var l = (t10) => typeof t10 == "function";
var a = (t10) => typeof t10 == "string";
var C = (t10) => typeof t10 == "symbol";
var r = (t10) => t10 !== null && typeof t10 == "object";
var x = (t10) => r(t10) && l(t10.then) && l(t10.catch);
var y = Object.prototype.toString;
var i = (t10) => y.call(t10);
var M = (t10) => i(t10).slice(8, -1);
var D = (t10) => i(t10) === "[object Object]";
var _ = (t10) => a(t10) && t10 !== "NaN" && t10[0] !== "-" && "" + parseInt(t10, 10) === t10;
var I = ((t10) => {
  const s9 = /* @__PURE__ */ Object.create(null);
  return (e11) => s9[e11] || (s9[e11] = t10(e11));
})((t10) => t10.charAt(0).toUpperCase() + t10.slice(1));
var V = (t10, s9) => !Object.is(t10, s9);
var k = (t10, s9, e11) => {
  Object.defineProperty(t10, s9, { configurable: true, enumerable: false, value: e11 });
};
var f;
var B = () => f || (f = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

// node_modules/sss-ui-plus/es/packages/SInput/src/input.mjs
var t = {
  /**
     * @description 输入框类型
     */
  type: { type: String, default: "text" },
  modelValue: { type: String || Number || void 0 },
  /**
     * @description test
     */
  placeholder: String,
  maxLength: Number,
  minLength: Number,
  id: String,
  autofocus: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  clearable: Boolean,
  showWordLimit: Boolean,
  showPassword: Boolean,
  prefixIcon: String,
  suffixIcon: String,
  checkFunc: Function
};
var a2 = { clear: () => true, input: (o8) => a(o8), "update:modelValue": (o8) => a(o8), blur: (o8) => o8 instanceof FocusEvent, focus: (o8) => o8 instanceof FocusEvent };

// node_modules/sss-ui-plus/es/packages/SIcon/src/icon.vue.mjs
var p2 = defineComponent({ name: "SIcon" });
var v2 = defineComponent({ ...p2, props: { target: String, verticalPadding: Number, rotating: Boolean, color: String }, setup(t10, { expose: r5 }) {
  const o8 = t10, a12 = ref(void 0);
  return onMounted(() => {
    const e11 = a12.value;
    o8.verticalPadding !== void 0 && o8.target && (e11.style.paddingTop = `${o8.verticalPadding}px`, e11.style.paddingBottom = `${o8.verticalPadding}px`), o8.color && (e11.style.color = o8.color);
  }), r5({ hh: "111" }), (e11, m5) => o8.target ? (openBlock(), createElementBlock("i", { key: 0, ref_key: "icon", ref: a12, class: normalizeClass(["sss-icon iconfont", [{ "is-rotating": o8.rotating }, `sss-${t10.target}`]]) }, null, 2)) : createCommentVNode("", true);
} });

// node_modules/sss-ui-plus/es/packages/SInput/src/input.vue.mjs
var J = { key: 0, class: "sss-input-prefixSlot" };
var K = ["for"];
var Q = ["type", "id", "maxlength", "minlength", "placeholder", "disabled", "readonly", "autofocus"];
var U = ["for"];
var X = ["data-overflow"];
var Y = { key: 6, class: "sss-input-suffixSlot" };
var Z = ["for"];
var ee = defineComponent({ name: "SInput", inheritAttrs: false });
var se = defineComponent({ ...ee, props: { ...t }, emits: { ...a2 }, setup(C3, { emit: n4 }) {
  const e11 = C3, i3 = ref(void 0), f4 = ref(false);
  let y3 = true;
  const m5 = ref(false), V5 = ref("default text"), x4 = ref("error"), I4 = function(t10, o8) {
    m5.value = true, V5.value = t10, x4.value = o8 || "error";
  }, M4 = computed(() => e11.modelValue !== void 0 && e11.modelValue !== null && e11.modelValue !== "" && e11.showPassword && e11.type === "password" && !e11.disabled), L2 = computed(() => e11.modelValue !== void 0 && e11.modelValue !== null && e11.modelValue !== "" && e11.clearable && !e11.readonly && !e11.disabled), r5 = computed(() => e11.modelValue === void 0 || e11.modelValue === null ? "" : e11.modelValue.toString()), $ = function(t10) {
    if (e11.readonly)
      return;
    const o8 = t10.target;
    e11.modelValue !== void 0 && e11.modelValue !== null || (o8.value = "", A6(o8)), f4.value || (n4("update:modelValue", o8.value), n4("input", o8.value));
  }, R3 = function() {
    const t10 = i3.value;
    n4("update:modelValue", ""), n4("input", ""), t10.value = "", t10.focus();
  }, B6 = function() {
    const t10 = i3.value;
    t10.type === "password" ? t10.type = "text" : t10.type = "password", setTimeout(() => {
      t10.setSelectionRange(t10.value.length, t10.value.length);
    });
  }, E5 = function() {
    f4.value = true;
  }, N4 = function() {
  }, T4 = function() {
    const t10 = i3.value;
    f4.value = false, n4("update:modelValue", t10.value), n4("input", t10.value);
  }, F4 = function() {
    e11.checkFunc && e11.checkFunc(e11.modelValue, I4);
  }, P4 = function() {
    m5.value = false;
  }, A6 = function(t10) {
    y3 && (console.log("AT: ", t10), console.log("ERROR: Missing binding value for element.")), y3 = false;
  }, k4 = function() {
    i3.value.value = r5.value;
  };
  return watch(r5, () => {
    k4();
  }), onMounted(() => {
    k4();
  }), (t10, o8) => (openBlock(), createElementBlock("div", { class: normalizeClass(["sss-input", [{ "is-disabled": e11.disabled }]]) }, [t10.$slots.prefixSlot ? (openBlock(), createElementBlock("div", J, [renderSlot(t10.$slots, "prefixSlot")])) : createCommentVNode("", true), e11.prefixIcon ? (openBlock(), createElementBlock("label", { key: 1, for: e11.id, onMousedown: o8[0] || (o8[0] = withModifiers(() => {
  }, ["prevent"])) }, [createVNode(v2, { class: "sss-input-icon", style: { "padding-right": "0" }, target: e11.prefixIcon }, null, 8, ["target"])], 40, K)) : createCommentVNode("", true), createBaseVNode("input", mergeProps({ ref_key: "inner", ref: i3, class: "sss-input-inner", type: e11.type, id: e11.id, maxlength: e11.maxLength, minlength: e11.minLength, placeholder: e11.placeholder, disabled: e11.disabled, readonly: e11.readonly, autofocus: e11.autofocus }, t10.$attrs, { onInput: $, onFocus: P4, onBlur: F4, onCompositionstart: E5, onCompositionupdate: N4, onCompositionend: T4 }), null, 16, Q), e11.suffixIcon ? (openBlock(), createElementBlock("label", { key: 2, for: e11.id, onMousedown: o8[1] || (o8[1] = withModifiers(() => {
  }, ["prevent"])) }, [createVNode(v2, { class: "sss-input-icon", target: e11.suffixIcon }, null, 8, ["target"])], 40, U)) : createCommentVNode("", true), t10.showWordLimit ? (openBlock(), createElementBlock("label", { key: 3, class: "sss-input-limit", "data-overflow": r5.value.length > e11.maxLength }, [r5.value.length > e11.maxLength ? (openBlock(), createBlock(v2, { key: 0, target: "warn" })) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(r5.value.length) + " / " + toDisplayString(e11.maxLength), 1)], 8, X)) : createCommentVNode("", true), L2.value ? (openBlock(), createBlock(v2, { key: 4, class: "sss-input-icon sss-input-icon-close", target: "cricle-close", onClick: R3, tabindex: "0", onMousedown: o8[2] || (o8[2] = withModifiers(() => {
  }, ["prevent"])) })) : createCommentVNode("", true), M4.value ? (openBlock(), createBlock(v2, { key: 5, class: "sss-input-icon sss-input-icon-eye", target: "eye", onClick: B6, tabindex: "0", onMousedown: o8[3] || (o8[3] = withModifiers(() => {
  }, ["prevent"])) })) : createCommentVNode("", true), t10.$slots.suffixSlot ? (openBlock(), createElementBlock("div", Y, [renderSlot(t10.$slots, "suffixSlot")])) : createCommentVNode("", true), createVNode(Transition, { name: "sss-transition-down-fade" }, { default: withCtx(() => [m5.value ? (openBlock(), createElementBlock("label", { key: 0, class: "sss-input-alert", for: t10.id }, [createVNode(v2, { target: x4.value }, null, 8, ["target"]), createTextVNode(" " + toDisplayString(V5.value), 1)], 8, Z)) : createCommentVNode("", true)]), _: 1 })], 2));
} });

// node_modules/sss-ui-plus/es/src/utils/vn/registerInstall.mjs
var e = function(n4) {
  return n4.install = function(t10) {
    t10.component(n4.name, n4);
  }, n4;
};

// node_modules/sss-ui-plus/es/packages/SInput/index.mjs
se.install = function(o8) {
  o8.component("SInput", se);
};
var s = e(se);

// node_modules/sss-ui-plus/es/packages/SButton/src/button.mjs
var e2 = {
  /**
     * @description 按钮类型
     */
  type: { type: String, default: "default" },
  /**
     * @description 按钮原生类型
     */
  nativeType: { type: String, default: "button" },
  /**
     * @description 按钮大小
     */
  size: { type: String, default: "normal" },
  /**
     * @description 是否是圆角
     */
  round: Boolean,
  /**
     * @description 是否是圆形
     */
  circle: Boolean,
  /**
     * @description 是否禁用按钮
     */
  disabled: Boolean,
  /**
     * @description 是否是镂空按钮
     */
  empty: Boolean,
  /**
     * 按钮是否是幽灵型
     */
  ghost: Boolean,
  /**
     * @description 是否加载中按钮
     */
  loading: Boolean,
  /**
     * @description 按钮前缀图标
     */
  prefixIcon: String,
  /**
     * 按钮后缀图标
     */
  suffixIcon: String
};
var n = { click: (t10) => t10 instanceof Event };

// node_modules/sss-ui-plus/es/packages/SIcon/index.mjs
v2.install = function(t10) {
  t10.component("SIcon", v2);
};
var p3 = e(v2);

// node_modules/sss-ui-plus/es/packages/SButton/src/button.vue.mjs
var b = ["disabled", "type"];
var y2 = defineComponent({ name: "SButton" });
var v3 = defineComponent({ ...y2, props: { ...e2 }, emits: { ...n }, setup(r5, { emit: l8 }) {
  const t10 = r5;
  return (e11, s9) => (openBlock(), createElementBlock("button", { ref: "container", class: normalizeClass(["sss-button", [{ "is-round": t10.round, "is-circle": t10.circle, "is-disabled": t10.disabled, "is-loading": t10.loading, "is-empty": t10.empty, "is-ghost": t10.ghost }, e11.type ? `sss-button-type-${t10.type}` : "", e11.size ? `sss-button-size-${t10.size}` : ""]]), onClick: s9[0] || (s9[0] = (d5) => {
    l8("click", d5);
  }), disabled: t10.disabled || t10.loading, type: t10.nativeType }, [createVNode(unref(p3), { target: t10.prefixIcon, "vertical-padding": 0 }, null, 8, ["target"]), renderSlot(e11.$slots, "default"), createVNode(unref(p3), { target: t10.suffixIcon, "vertical-padding": 0 }, null, 8, ["target"])], 10, b));
} });

// node_modules/sss-ui-plus/es/packages/SButton/index.mjs
v3.install = function(o8) {
  o8.component("SButton", v3);
};
var p4 = e(v3);

// node_modules/sss-ui-plus/es/packages/SLink/src/link.mjs
var t2 = { type: { type: String, default: "default" }, disabled: Boolean, underline: Boolean, href: String, prefixIcon: String, suffixIcon: String, jumpMethod: { type: String, default: "push" } };

// node_modules/sss-ui-plus/es/packages/SLink/src/link.vue.mjs
var k2 = ["href", "onClick"];
var w2 = defineComponent({ name: "SLink" });
var b2 = defineComponent({ ...w2, props: { ...t2 }, setup(r5) {
  const e11 = r5, a12 = ref(void 0), i3 = () => {
    e11.href && !e11.disabled && (e11.jumpMethod === "push" ? window.location.href = e11.href : e11.jumpMethod === "replace" ? window.location.replace(e11.href) : e11.jumpMethod === "newView" && window.open(e11.href));
  };
  return (t10, x4) => (openBlock(), createElementBlock("a", { ref_key: "a", ref: a12, class: normalizeClass(["sss-link", [`sss-link-type-${e11.type}`, { "has-underline": e11.underline, "is-disabled": e11.disabled }]]), href: e11.href, onClick: withModifiers(i3, ["prevent"]) }, [createVNode(v2, { target: e11.prefixIcon, class: "sss-link-prefix-icon" }, null, 8, ["target"]), createBaseVNode("span", null, [renderSlot(t10.$slots, "default")]), createVNode(v2, { target: e11.suffixIcon, class: "sss-link-suffix-icon" }, null, 8, ["target"])], 10, k2));
} });

// node_modules/sss-ui-plus/es/packages/SLink/index.mjs
b2.install = function(o8) {
  o8.component("SLink", b2);
};
var p5 = e(b2);

// node_modules/sss-ui-plus/es/packages/SMessageBox/src/msgBox.mjs
var a3 = { type: String, icon: String, title: { type: String, default: "default title" }, text: String, transition: { type: String, default: "down-fade" }, closeOnPressEscape: { type: Boolean, default: true }, draggable: { type: Boolean, default: false }, top: { type: String }, showHead: Boolean, showBody: Boolean, showFoot: Boolean, showClose: Boolean, cancelBtnText: { type: String, default: "取消" }, btnSize: { type: String, default: "small" }, confirmBtnText: { type: String, default: "确认" }, beforeClose: Function };
var l2 = { close: (e11) => a(e11), closed: () => true, open: () => true, opened: () => true, cancel: () => true, confirm: () => true, hidden: () => true };

// node_modules/sss-ui-plus/es/src/hooks/useFlag.mjs
function f2(u6 = false) {
  const e11 = ref(u6), t10 = function() {
    e11.value = false;
  }, n4 = function() {
    e11.value = true;
  };
  return { flag: e11, setTrue: n4, setFalse: t10, toggle: function() {
    e11.value ? t10() : n4();
  } };
}

// node_modules/sss-ui-plus/es/src/utils/decorator/throttle.mjs
var r2 = function(n4, o8 = 0, c5) {
  let t10 = 0;
  return function(...i3) {
    const e11 = (/* @__PURE__ */ new Date()).getTime();
    e11 - t10 >= o8 && (t10 = e11, n4.apply(c5, i3));
  };
};

// node_modules/sss-ui-plus/es/src/utils/fnUnion.mjs
var o = function(...t10) {
  return function() {
    for (let n4 = 0; n4 < t10.length; n4++)
      t10[n4]();
  };
};

// node_modules/sss-ui-plus/es/src/hooks/useDraggable.mjs
var H = (e11, t10, E5) => {
  let s9 = { offsetX: 0, offsetY: 0 };
  const u6 = (l8) => {
    const p10 = l8.clientX, L2 = l8.clientY, { offsetX: o8, offsetY: a12 } = s9, n4 = e11.value.getBoundingClientRect(), c5 = n4.left, i3 = n4.top, g3 = n4.width, x4 = n4.height, M4 = document.documentElement.clientWidth, X3 = document.documentElement.clientHeight, Y3 = -c5 + o8, w5 = -i3 + a12, B6 = M4 - c5 - g3 + o8, $ = X3 - i3 - x4 + a12, d5 = (f4) => {
      const r5 = Math.min(Math.max(o8 + f4.clientX - p10, Y3), B6), h3 = Math.min(Math.max(a12 + f4.clientY - L2, w5), $);
      s9 = { offsetX: r5, offsetY: h3 }, e11.value.style.transform = `translate(${r5}px, ${h3}px)`;
    }, v8 = () => {
      document.removeEventListener("mousemove", d5), document.removeEventListener("mouseup", v8);
    };
    document.addEventListener("mousemove", d5), document.addEventListener("mouseup", v8);
  }, m5 = () => {
    t10.value && e11.value && t10.value.removeEventListener("mousedown", u6);
  };
  onMounted(() => {
    watchEffect(() => {
      E5.value ? t10.value && e11.value && t10.value.addEventListener("mousedown", u6) : m5();
    });
  }), onBeforeUnmount(() => {
    m5();
  });
};

// node_modules/sss-ui-plus/es/packages/SMessageBox/src/msgBox.vue.mjs
var Z2 = { class: "sss-message" };
var ee2 = { key: 1, class: "sss-message-body" };
var se2 = { class: "sss-message-text" };
var te = { key: 2, class: "sss-message-foot" };
var ae = defineComponent({ name: "SMessageBox", inheritAttrs: false });
var ue = defineComponent({ ...ae, props: { ...a3 }, emits: { ...l2 }, setup(B6, { expose: $, emit: o8 }) {
  const e11 = B6, v8 = ref(null), p10 = ref(void 0), h3 = ref(void 0), g3 = ref(void 0), z4 = computed(() => true), E5 = computed(() => e11.icon ? e11.icon : e11.type);
  let { flag: T4, setTrue: M4, setFalse: i3, toggle: N4 } = f2(false);
  H(g3, h3, z4);
  const V5 = o(M4, async () => {
    var s9, t10;
    o8("open"), e11.draggable && g3.value.appendChild(p10.value), await nextTick(), (s9 = p10.value) == null || s9.focus(), (t10 = v8.value) == null || t10.$el.focus();
  }), u6 = r2(function(s9) {
    const t10 = function() {
      i3(), o8("close", s9);
    };
    (e11.closeOnPressEscape || s9 !== "esc") && (e11.beforeClose ? e11.beforeClose(t10) : t10());
  }, 500), A6 = r2(function() {
    i3(), o8("cancel");
  }, 500), D3 = r2(function() {
    i3(), o8("confirm");
  }, 500), F4 = function() {
    o8("closed");
  }, P4 = function() {
    o8("opened");
  };
  return $({ open: V5, hidden: i3, toggle: N4, close: u6 }), (s9, t10) => (openBlock(), createElementBlock(Fragment, null, [createVNode(Transition, { name: `sss-transition-${e11.transition}`, onAfterEnter: P4, onAfterLeave: F4 }, { default: withCtx(() => [withDirectives(createBaseVNode("div", mergeProps({ ref_key: "outer", ref: p10, class: "sss-message-box" }, s9.$attrs, { tabindex: "0", onKeydown: t10[1] || (t10[1] = withKeys((K3) => unref(u6)("esc"), ["esc"])), class: [`sss-message-type-${e11.type || "default"}`], style: `top:${e11.top}` }), [createVNode(unref(p3), { target: E5.value, class: "sss-message-icon" }, null, 8, ["target"]), createBaseVNode("div", Z2, [e11.showHead ? (openBlock(), createElementBlock("div", { key: 0, ref_key: "head", ref: h3, class: "sss-message-head" }, [createBaseVNode("h3", null, toDisplayString(e11.title), 1), e11.showClose ? (openBlock(), createBlock(unref(p3), { key: 0, ref_key: "closeIcon", ref: v8, target: "close", class: "sss-message-head-icon", tabindex: "0", onClick: t10[0] || (t10[0] = (K3) => unref(u6)("icon")) }, null, 512)) : createCommentVNode("", true)], 512)) : createCommentVNode("", true), s9.$slots.default || e11.text ? (openBlock(), createElementBlock("div", ee2, [renderSlot(s9.$slots, "default", {}, () => [createBaseVNode("p", se2, toDisplayString(e11.text), 1)])])) : createCommentVNode("", true), e11.showFoot ? (openBlock(), createElementBlock("div", te, [createVNode(unref(p4), { size: e11.btnSize, class: "clear-after", type: "cyan", ghost: "", onClick: unref(A6) }, { default: withCtx(() => [createTextVNode(toDisplayString(e11.cancelBtnText), 1)]), _: 1 }, 8, ["size", "onClick"]), createVNode(unref(p4), { size: e11.btnSize, class: "clear-after", type: "primary", onClick: unref(D3) }, { default: withCtx(() => [createTextVNode(toDisplayString(e11.confirmBtnText), 1)]), _: 1 }, 8, ["size", "onClick"])])) : createCommentVNode("", true)])], 16), [[vShow, unref(T4)]])]), _: 3 }, 8, ["name"]), s9.draggable ? (openBlock(), createElementBlock("div", { key: 0, ref_key: "drag", ref: g3, style: normalizeStyle(`top:${e11.top}`), class: "sss-message-draggable-container" }, null, 4)) : createCommentVNode("", true)], 64));
} });

// node_modules/sss-ui-plus/es/src/hooks/useLockScroll.mjs
var o2 = 0;
function t3() {
  return { lockScroll: function() {
    o2 === 0 && (document.body.style.overflowY = "hidden"), o2++;
  }, unLockScroll: function() {
    o2--, o2 <= 0 && (o2 = 0), o2 === 0 && (document.body.style.overflowY = "auto");
  } };
}

// node_modules/sss-ui-plus/es/src/utils/element/Mark.mjs
var i2 = Object.defineProperty;
var a4 = (s9, e11, t10) => e11 in s9 ? i2(s9, e11, { enumerable: true, configurable: true, writable: true, value: t10 }) : s9[e11] = t10;
var n2 = (s9, e11, t10) => (a4(s9, typeof e11 != "symbol" ? e11 + "" : e11, t10), t10);
var m = class {
  constructor(e11 = "cover") {
    n2(this, "element");
    n2(this, "closed");
    this.element = document.createElement("div"), this.closed = noop, e11 === "cover" ? (this.element.classList.add("sss-mark-cover"), this.element.style.zIndex = "-1") : e11 === "part" && this.element.classList.add("sss-mark-part");
  }
  open() {
    const e11 = () => {
      this.element.classList.remove("sss-transition-fadeIn"), this.element.removeEventListener("animationend", e11);
    };
    this.element.removeEventListener("animationend", this.closed), this.element.style.display = "unset", this.element.classList.add("sss-transition-fadeIn"), this.element.addEventListener("animationend", e11);
  }
  close() {
    this.closed = () => {
      this.element.classList.remove("sss-transition-fadeOut"), this.element.style.display = "none", this.element.removeEventListener("animationend", this.closed);
    }, this.element.classList.add("sss-transition-fadeOut"), this.element.addEventListener("animationend", this.closed);
  }
};

// node_modules/sss-ui-plus/es/src/hooks/useMark.mjs
function u2(n4, m5) {
  const e11 = new m(m5);
  let t10 = noop;
  const a12 = watch(() => n4 instanceof HTMLElement ? n4 : unrefElement(n4), (o8) => {
    t10(), o8 && (o8.appendChild(e11.element), t10 = () => {
      o8.removeChild(e11.element), t10 = noop;
    });
  });
  return onUnmounted(() => {
    a12();
  }), { mark: e11.element, showMark: () => e11.open(), hiddenMark: () => e11.close() };
}

// node_modules/sss-ui-plus/es/packages/SDialog/src/dialog.mjs
var l3 = { showFoot: { type: Boolean, default: false }, showHead: { type: Boolean, default: true }, cancelBtnText: { type: String, default: "取消" }, confirmBtnText: { type: String, default: "确认" }, title: { type: String, default: "default title" }, showMark: { type: Boolean, default: true }, closeOnClickMark: { type: Boolean, default: true }, closeOnPressEscape: { type: Boolean, default: true }, lockScroll: { type: Boolean, default: true }, appendToBody: { type: Boolean, default: false }, draggable: { type: Boolean, default: false }, modelValue: { type: Boolean, default: false, required: true }, top: { type: String, default: "15vh" }, beforeClose: Function };
var a5 = { "update:modelValue": (e11) => true, open: () => true, opened: () => true, close: (e11) => a(e11), closed: () => true, cancel: () => true, confirm: () => true };

// node_modules/sss-ui-plus/es/packages/SDialog/src/dialog.vue.mjs
var q = defineComponent({ name: "SDialog", inheritAttrs: false });
var Z3 = defineComponent({ ...q, props: { ...l3 }, emits: { ...a5 }, setup(i3, { emit: o8 }) {
  const e11 = i3, d5 = new d(), t10 = ref(null), n4 = ref(null), l8 = ref(e11.modelValue);
  let a12 = true;
  const { lockScroll: m5, unLockScroll: f4 } = t3(), { mark: u6, hiddenMark: p10, showMark: h3 } = u2(n4, "cover"), k4 = function() {
    o8("open"), unrefElement(n4).style.zIndex = d5.nextIndex().toString(), e11.lockScroll && m5(), e11.showMark && h3();
  }, w5 = function() {
    o8("opened");
  }, g3 = function(s9) {
    o8("close", s9), a12 = false, o8("update:modelValue", false);
  }, b6 = function() {
    l8.value = false, o8("closed");
  }, x4 = function() {
    o8("cancel"), a12 = false, o8("update:modelValue", false);
  }, S5 = function() {
    o8("confirm"), a12 = false, o8("update:modelValue", false);
  };
  return watch(() => e11.modelValue, (s9) => s9 ? async function() {
    l8.value = true, await nextTick(), t10.value.open();
  }() : function() {
    if (a12)
      return t10.value.close("system"), void (a12 = true);
    e11.lockScroll && f4(), e11.showMark && p10(), t10.value.hidden();
  }()), e11.closeOnClickMark && e11.showMark && useEventListener(u6, "click", () => {
    t10.value.close("mark");
  }), onMounted(() => {
    e11.modelValue && t10.value.open();
  }), (s9, G3) => (openBlock(), createBlock(Teleport, { to: "body", disabled: !e11.appendToBody }, [withDirectives(createBaseVNode("div", { ref_key: "container", ref: n4, class: "sss-message-dialog-container" }, [createVNode(ue, mergeProps({ ref_key: "msgBox", ref: t10, transition: "down-fade", "show-head": e11.showHead, "show-body": "", "show-close": "", "show-foot": e11.showFoot, "cancel-btn-text": e11.cancelBtnText, "confirm-btn-text": e11.confirmBtnText, "close-on-press-escape": e11.closeOnPressEscape, draggable: e11.draggable, top: e11.top, "before-close": e11.beforeClose, title: e11.title }, s9.$attrs, { onCancel: x4, onConfirm: S5, onOpen: k4, onOpened: w5, onClose: g3, onClosed: b6, class: "sss-message-dialog" }), { default: withCtx(() => [renderSlot(s9.$slots, "default")]), _: 3 }, 16, ["show-head", "show-foot", "cancel-btn-text", "confirm-btn-text", "close-on-press-escape", "draggable", "top", "before-close", "title"])], 512), [[vShow, l8.value]])], 8, ["disabled"]));
} });

// node_modules/sss-ui-plus/es/packages/SDialog/index.mjs
Z3.install = function(t10) {
  t10.component("SDialog", Z3);
};
var a6 = e(Z3);

// node_modules/sss-ui-plus/es/packages/SDrawer/src/drawer.mjs
var l4 = { showFoot: { type: Boolean, default: true }, showHead: { type: Boolean, default: true }, btnSize: { type: String, default: "normal" }, cancelBtnText: { type: String, default: "取消" }, confirmBtnText: { type: String, default: "确认" }, title: { type: String, default: "default title" }, closeOnClickMark: { type: Boolean, default: true }, closeOnPressEscape: { type: Boolean, default: true }, lockScroll: { type: Boolean, default: true }, appendToBody: { type: Boolean, default: false }, showMark: { type: Boolean, default: true }, modelValue: { type: Boolean, default: false, required: true }, position: { type: String, default: "top" }, beforeClose: Function };
var a7 = { "update:modelValue": (e11) => typeof e11 == "boolean", open: () => true, opened: () => true, close: (e11) => a(e11), closed: () => true, cancel: () => true, confirm: () => true };

// node_modules/sss-ui-plus/es/packages/SDrawer/src/drawer.vue.mjs
var A2 = defineComponent({ name: "SDrawer" });
var Z4 = defineComponent({ ...A2, props: { ...l4 }, emits: { ...a7 }, setup(c5, { emit: o8 }) {
  const e11 = c5, d5 = new d(), s9 = ref(null), t10 = ref(null), l8 = ref(e11.modelValue);
  let n4 = true;
  const { lockScroll: u6, unLockScroll: m5 } = t3(), { mark: p10, hiddenMark: f4, showMark: h3 } = u2(t10, "cover"), k4 = function() {
    o8("open"), unrefElement(t10).style.zIndex = d5.nextIndex().toString(), e11.lockScroll && u6(), e11.showMark && h3();
  }, v8 = function() {
    o8("opened");
  }, w5 = function(a12) {
    o8("close", a12), n4 = false, o8("update:modelValue", false);
  }, S5 = function() {
    l8.value = false, o8("closed");
  }, b6 = function() {
    o8("cancel"), n4 = false, o8("update:modelValue", false);
  }, y3 = function() {
    o8("confirm"), n4 = false, o8("update:modelValue", false);
  };
  return watch(() => e11.modelValue, (a12) => a12 ? async function() {
    l8.value = true, await nextTick(), s9.value.open();
  }() : function() {
    if (n4)
      return s9.value.close("system"), void (n4 = true);
    e11.lockScroll && m5(), e11.showMark && f4(), s9.value.hidden();
  }()), e11.closeOnClickMark && e11.showMark && useEventListener(p10, "click", () => {
    s9.value.close("mark");
  }), onMounted(() => {
    e11.modelValue && s9.value.open();
  }), (a12, G3) => (openBlock(), createBlock(Teleport, { to: "body", disabled: e11.appendToBody }, [withDirectives(createBaseVNode("div", { ref_key: "container", ref: t10, class: "sss-message-drawer-container" }, [createVNode(ue, mergeProps({ ref_key: "msgBox", ref: s9, class: [`sss-drawer-pos-${e11.position}`], "show-head": e11.showHead, "show-body": "", "show-close": "", "show-foot": e11.showFoot, "close-on-press-escape": e11.closeOnPressEscape, "before-close": e11.beforeClose, transition: e11.position, title: e11.title, "btn-size": e11.btnSize }, a12.$attrs, { onCancel: b6, onConfirm: y3, onOpen: k4, onOpened: v8, onClose: w5, onClosed: S5 }), { default: withCtx(() => [renderSlot(a12.$slots, "default")]), _: 3 }, 16, ["class", "show-head", "show-foot", "close-on-press-escape", "before-close", "transition", "title", "btn-size"])], 512), [[vShow, l8.value]])], 8, ["disabled"]));
} });

// node_modules/sss-ui-plus/es/packages/SDrawer/index.mjs
Z4.install = function(t10) {
  t10.component("SDrawer", Z4);
};
var s2 = e(Z4);

// node_modules/sss-ui-plus/es/packages/SRow/src/row.mjs
var e3 = { gap: { type: Number, default: 0 }, vertical: { type: String, default: "center" }, horizontal: { type: String, default: "center" }, wrappable: Boolean };

// node_modules/sss-ui-plus/es/packages/SRow/src/row.vue.mjs
var c = defineComponent({ name: "SRow" });
var S2 = defineComponent({ ...c, props: { ...e3 }, setup(a12) {
  const o8 = a12, s9 = computed(() => ({ gap: `${o8.gap}px`, justifyContent: `${o8.horizontal}`, alignItems: `${o8.vertical}`, flexFlow: o8.wrappable ? "wrap" : "nowrap" }));
  return (t10, f4) => (openBlock(), createElementBlock("div", { class: "sss-row", style: normalizeStyle(s9.value) }, [renderSlot(t10.$slots, "default")], 4));
} });

// node_modules/sss-ui-plus/es/packages/SRow/index.mjs
S2.install = function(t10) {
  t10.component("SRow", S2);
};
var p6 = e(S2);

// node_modules/sss-ui-plus/es/packages/SDivider/src/divider.mjs
var t4 = { direction: { type: String, default: "horizontal" }, type: { type: String, default: "solid" }, contentPosition: { type: String, default: "center" }, prefixIcon: String, suffixIcon: String, content: String, gap: { type: Number } };

// node_modules/sss-ui-plus/es/packages/SDivider/src/divider.vue.mjs
var z2 = defineComponent({ __name: "divider", props: { ...t4 }, setup(c5) {
  const t10 = c5, o8 = ref(void 0), s9 = ref(void 0), p10 = useSlots();
  return onMounted(() => {
    const e11 = o8.value;
    t10.direction === "horizontal" ? (t10.contentPosition === "start" ? e11.style.left = "15px" : t10.contentPosition === "center" && (e11.style.left = "50%", e11.style.transform = "translate(-50%,-50%)"), t10.contentPosition === "end" ? e11.style.right = "15px" : e11.style.left = t10.contentPosition, t10.gap !== void 0 && (unrefElement(s9).style.margin = `${t10.gap}px 0`)) : t10.direction === "vertical" && (t10.contentPosition === "start" ? e11.style.top = "15px" : t10.contentPosition === "center" && (e11.style.top = "50%", e11.style.transform = "translate(-50%,-50%)"), t10.contentPosition === "end" ? e11.style.bottom = "15px" : e11.style.top = t10.contentPosition, t10.gap !== void 0 && (unrefElement(s9).style.margin = `0 ${t10.gap}px`));
  }), (e11, C3) => {
    const n4 = resolveComponent("s-icon");
    return openBlock(), createElementBlock("div", { ref_key: "divider", ref: s9, class: normalizeClass(["sss-divider", [`sss-divider-${t10.type}`, `sss-divider-${t10.direction}`]]) }, [createBaseVNode("span", { class: "sss-divider-content", ref_key: "content", ref: o8 }, [createVNode(n4, { target: t10.prefixIcon, style: { padding: "0" } }, null, 8, ["target"]), unref(p10).default ? renderSlot(e11.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(t10.content), 1)], 64)), createVNode(n4, { target: t10.suffixIcon, style: { padding: "0" } }, null, 8, ["target"])], 512)], 2);
  };
} });

// node_modules/sss-ui-plus/es/packages/SDivider/index.mjs
z2.install = function(o8) {
  o8.component("SDivider", z2);
};
var s3 = e(z2);

// node_modules/sss-ui-plus/es/packages/SSwitch/src/switch.mjs
var o3 = { defaultColor: String, activeColor: String, defaultText: String, activeText: String, defaultIcon: String, activeIcon: String, loading: Boolean, disabled: Boolean, inlineText: Boolean, modelValue: Boolean, beforeChange: Function };
var t5 = { "update:modelValue": (e11) => true, change: (e11) => true };

// node_modules/sss-ui-plus/es/packages/SSwitch/src/switch.vue.mjs
var C2 = createBaseVNode("input", { type: "radio" }, null, -1);
var S3 = { class: "sss-switch-trigger is-round" };
var b3 = { key: 0, class: "sss-switch-text" };
var I2 = defineComponent({ name: "SSwitch", inheritAttrs: false });
var P2 = defineComponent({ ...I2, props: { ...o3 }, emits: { ...t5 }, setup(g3, { emit: s9 }) {
  const e11 = g3, h3 = computed(() => e11.modelValue ? e11.activeText : e11.defaultText), x4 = computed(() => e11.modelValue ? e11.activeIcon : e11.defaultIcon), u6 = () => {
    e11.loading || (e11.modelValue ? (s9("update:modelValue", false), s9("change", "default")) : (s9("update:modelValue", true), s9("change", "active")));
  }, v8 = () => {
    e11.beforeChange ? e11.beforeChange(u6) : u6();
  };
  return (f4, N4) => {
    const a12 = resolveComponent("s-icon");
    return openBlock(), createElementBlock("div", { class: normalizeClass(["sss-switch-container", [{ "is-checked": e11.modelValue, "is-disabled": e11.disabled }]]) }, [C2, e11.inlineText ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(["sss-switch-default-text", [{ "is-active": !e11.modelValue }]]) }, [createVNode(a12, { target: e11.defaultIcon, style: { padding: "0 5px 0 0" } }, null, 8, ["target"]), createTextVNode(" " + toDisplayString(e11.defaultText), 1)], 2)), createBaseVNode("div", mergeProps({ class: "sss-switch is-round" }, f4.$attrs, { onClick: v8 }), [createBaseVNode("span", S3, [e11.loading ? (openBlock(), createBlock(a12, { key: 0, class: "sss-switch-trigger-icon", target: "loading", rotating: "", style: { padding: "0", "font-size": "19px" } })) : createCommentVNode("", true)]), e11.inlineText ? (openBlock(), createElementBlock("span", b3, [createVNode(a12, { target: x4.value, style: { padding: "0 5px 0 0" } }, null, 8, ["target"]), createTextVNode(" " + toDisplayString(h3.value), 1)])) : createCommentVNode("", true)], 16), e11.inlineText ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", { key: 1, class: normalizeClass(["sss-switch-active-text", [{ "is-active": e11.modelValue }]]) }, [createVNode(a12, { target: e11.activeIcon, style: { padding: "0 5px 0 0" } }, null, 8, ["target"]), createTextVNode(" " + toDisplayString(e11.activeText), 1)], 2))], 2);
  };
} });

// node_modules/sss-ui-plus/es/packages/SSwitch/index.mjs
P2.install = function(o8) {
  o8.component("SSwitch", P2);
};
var p7 = e(P2);

// node_modules/sss-ui-plus/es/packages/SFloating/src/floating.mjs
var e4 = {
  /**
     * @description floating元素的出现的触发方式
     */
  trigger: { type: String, default: "click" },
  placement: { type: String, default: "bottom" },
  transition: { type: String, default: "fade" },
  openDelay: { type: Number, default: 0 },
  closeDelay: { type: Number, default: 0 },
  disabled: Boolean,
  offset: { type: Number, default: 5 },
  theme: { type: String, default: "light" },
  closeOnClickBody: Boolean,
  openOnMounted: Boolean,
  teleported: { type: Boolean, default: true },
  showArrow: Boolean,
  expression: { type: String, default: "block" },
  floatingClass: String,
  reference: Object,
  quickTrack: Boolean
};
var t6 = { open: () => true, opened: () => true, close: () => true, closed: () => true };

// node_modules/@floating-ui/core/dist/floating-ui.core.browser.mjs
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getLengthFromAxis(axis) {
  return axis === "y" ? "height" : "width";
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === "x";
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x4,
    y: y3
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i3 = 0; i3 < validMiddleware.length; i3++) {
    const {
      name,
      fn: fn2
    } = validMiddleware[i3];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn2({
      x: x4,
      y: y3,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x4 = nextX != null ? nextX : x4;
    y3 = nextY != null ? nextY : y3;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x4,
          y: y3
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i3 = -1;
      continue;
    }
  }
  return {
    x: x4,
    y: y3,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getSideObjectFromPadding(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x4,
    y: y3,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x: x4,
    y: y3
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var min = Math.min;
var max = Math.max;
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x: x4,
      y: y3,
      placement,
      rects,
      platform: platform2,
      elements
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x: x4,
      y: y3
    };
    const axis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max3 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = within(min$1, center, max3);
    const shouldAddOffset = getAlignment(placement) != null && center != offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? min$1 - center : max3 - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 + alignmentOffset
      }
    };
  }
});
var sides = ["top", "right", "bottom", "left"];
var allPlacements = sides.reduce((acc, side) => acc.concat(side, side + "-start", side + "-end"), []);
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt2 = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt2;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d5) => d5.overflows[0] <= 0).sort((a12, b6) => a12.overflows[1] - b6.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d5) => [d5.placement, d5.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a12, b6) => a12[1] - b6[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === "x";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      const {
        x: x4,
        y: y3
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      return {
        x: x4 + diffCoords.x,
        y: y3 + diffCoords.y,
        data: diffCoords
      };
    }
  };
};
function getCrossAxis(axis) {
  return axis === "x" ? "y" : "x";
}
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x4,
        y: y3,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x5,
              y: y4
            } = _ref;
            return {
              x: x5,
              y: y4
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x: x4,
        y: y3
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min3 = mainAxisCoord + overflow[minSide];
        const max3 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min3, mainAxisCoord, max3);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min3 = crossAxisCoord + overflow[minSide];
        const max3 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min3, crossAxisCoord, max3);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x4,
          y: limitedCoords.y - y3
        }
      };
    }
  };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.mjs
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return node instanceof getWindow(node).ShadowRoot || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const safari = isSafari();
  const css = getComputedStyle$1(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !safari && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !safari && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function isSafari() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
var min2 = Math.min;
var max2 = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v8) => ({
  x: v8,
  y: v8
});
function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x4 = ($ ? round(rect.width) : rect.width) / width;
  let y3 = ($ ? round(rect.height) : rect.height) / height;
  if (!x4 || !Number.isFinite(x4)) {
    x4 = 1;
  }
  if (!y3 || !Number.isFinite(y3)) {
    y3 = 1;
  }
  return {
    x: x4,
    y: y3
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isSafari() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x4 = (clientRect.left + visualOffsets.x) / scale.x;
  let y3 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x4 *= iframeScale.x;
      y3 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x4 += left;
      y3 += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x4,
    y: y3
  });
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max2(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max2(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x4 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y3 = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x4 += max2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x4,
    y: y3
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x4 = 0;
  let y3 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isSafari();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x4 = visualViewport.offsetLeft;
      y3 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x4,
    y: y3
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x4 = left * scale.x;
  const y3 = top * scale.y;
  return {
    width,
    height,
    x: x4,
    y: y3
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  return getCssDimensions(element);
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var getElementRects = async function(_ref) {
  let {
    reference,
    floating,
    strategy
  } = _ref;
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
    floating: {
      x: 0,
      y: 0,
      ...await getDimensionsFn(floating)
    }
  };
};
function isRTL(element) {
  return getComputedStyle(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max2(0, min2(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e11) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/vue/dist/floating-ui.vue.esm.js
function unwrapElement2(element) {
  var _$el;
  return (_$el = element == null ? void 0 : element.$el) != null ? _$el : element;
}
function arrow2(options) {
  return {
    name: "arrow",
    options,
    fn(args) {
      const element = unwrapElement2(unref(options.element));
      if (element == null) {
        return {};
      }
      return arrow({
        element,
        padding: options.padding
      }).fn(args);
    }
  };
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useFloating(reference, floating, options) {
  if (options === void 0) {
    options = {};
  }
  const whileElementsMountedOption = options.whileElementsMounted;
  const openOption = computed(() => {
    var _unref;
    return (_unref = unref(options.open)) != null ? _unref : true;
  });
  const middlewareOption = computed(() => unref(options.middleware));
  const placementOption = computed(() => {
    var _unref2;
    return (_unref2 = unref(options.placement)) != null ? _unref2 : "bottom";
  });
  const strategyOption = computed(() => {
    var _unref3;
    return (_unref3 = unref(options.strategy)) != null ? _unref3 : "absolute";
  });
  const transformOption = computed(() => {
    var _unref4;
    return (_unref4 = unref(options.transform)) != null ? _unref4 : true;
  });
  const referenceElement = computed(() => unwrapElement2(reference.value));
  const floatingElement = computed(() => unwrapElement2(floating.value));
  const x4 = ref(0);
  const y3 = ref(0);
  const strategy = ref(strategyOption.value);
  const placement = ref(placementOption.value);
  const middlewareData = shallowRef({});
  const isPositioned = ref(false);
  const floatingStyles = computed(() => {
    const initialStyles = {
      position: strategy.value,
      left: "0",
      top: "0"
    };
    if (!floatingElement.value) {
      return initialStyles;
    }
    const xVal = roundByDPR(floatingElement.value, x4.value);
    const yVal = roundByDPR(floatingElement.value, y3.value);
    if (transformOption.value) {
      return {
        ...initialStyles,
        transform: "translate(" + xVal + "px, " + yVal + "px)",
        ...getDPR(floatingElement.value) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy.value,
      left: xVal + "px",
      top: yVal + "px"
    };
  });
  let whileElementsMountedCleanup;
  function update() {
    if (referenceElement.value == null || floatingElement.value == null) {
      return;
    }
    computePosition2(referenceElement.value, floatingElement.value, {
      middleware: middlewareOption.value,
      placement: placementOption.value,
      strategy: strategyOption.value
    }).then((position) => {
      x4.value = position.x;
      y3.value = position.y;
      strategy.value = position.strategy;
      placement.value = position.placement;
      middlewareData.value = position.middlewareData;
      isPositioned.value = true;
    });
  }
  function cleanup() {
    if (typeof whileElementsMountedCleanup === "function") {
      whileElementsMountedCleanup();
      whileElementsMountedCleanup = void 0;
    }
  }
  function attach() {
    cleanup();
    if (whileElementsMountedOption === void 0) {
      update();
      return;
    }
    if (referenceElement.value != null && floatingElement.value != null) {
      whileElementsMountedCleanup = whileElementsMountedOption(referenceElement.value, floatingElement.value, update);
      return;
    }
  }
  function reset() {
    if (!openOption.value) {
      isPositioned.value = false;
    }
  }
  watch([middlewareOption, placementOption, strategyOption], update, {
    flush: "sync"
  });
  watch([referenceElement, floatingElement], attach, {
    flush: "sync"
  });
  watch(openOption, reset, {
    flush: "sync"
  });
  if (getCurrentScope()) {
    onScopeDispose(cleanup);
  }
  return {
    x: shallowReadonly(x4),
    y: shallowReadonly(y3),
    strategy: shallowReadonly(strategy),
    placement: shallowReadonly(placement),
    middlewareData: shallowReadonly(middlewareData),
    isPositioned: shallowReadonly(isPositioned),
    floatingStyles,
    update
  };
}

// node_modules/sss-ui-plus/es/packages/SFloating/src/floating.vue.mjs
var ce = ["data-placement", "data-theme"];
var me = defineComponent({ name: "SFloating", inheritAttrs: false });
var ke = defineComponent({ ...me, props: { ...e4 }, emits: { ...t6 }, setup(I4, { expose: N4, emit: p10 }) {
  const e11 = I4, c5 = useSlots(), V5 = new d();
  let C3;
  const L2 = computed(() => m5.value ? (C3 = b6.value, b6.value) : C3), n4 = computed(() => ref(unrefElement(e11.reference)).value), r5 = ref(null), o8 = ref(null), g3 = ref(null), { floatingStyles: b6, placement: P4, middlewareData: U4, update: j4 } = c5.reference ? useFloating(r5, o8, { placement: e11.placement, whileElementsMounted: autoUpdate, middleware: [offset(e11.offset), flip(), shift(), arrow2({ element: g3 })] }) : useFloating(n4, o8, { placement: e11.placement, whileElementsMounted: autoUpdate, middleware: [offset(e11.offset), flip(), shift(), arrow2({ element: g3 })] }), { flag: m5, setTrue: G3, setFalse: H3 } = f2(false);
  let k4, w5;
  const a12 = () => {
    clearTimeout(k4), clearTimeout(w5), m5.value || e11.disabled || (k4 = setTimeout(() => {
      G3(), o8.value.style.zIndex = V5.nextIndex().toString(), p10("open");
    }, e11.openDelay));
  }, l8 = () => {
    clearTimeout(k4), clearTimeout(w5), m5.value && (w5 = setTimeout(() => {
      H3(), p10("close");
    }, e11.closeDelay));
  }, h3 = () => {
    m5.value ? l8() : a12();
  }, J4 = (i3) => {
    const s9 = i3.target, u6 = unrefElement(o8), S5 = unrefElement(r5);
    u6.contains(s9) || S5.contains(s9) || l8();
  }, _3 = ref({ left: void 0, top: void 0, transform: "translate3d(0,0,0)" });
  return e11.showArrow && watch(() => U4.value.arrow, (i3) => {
    const s9 = g3.value, { x: u6, y: S5 } = i3;
    s9 && (_3.value.left = `${u6}px`, _3.value.top = `${S5}px`);
  }), e11.quickTrack && useMutationObserver(n4, () => {
    j4();
  }, { attributes: true }), e11.closeOnClickBody && useEventListener(document.body, "click", J4), e11.trigger === "hover" && (c5.reference ? (useEventListener(r5, "mouseenter", a12), useEventListener(r5, "mouseleave", l8)) : (useEventListener(n4, "mouseenter", a12), useEventListener(n4, "mouseleave", l8)), useEventListener(o8, "mouseenter", a12), useEventListener(o8, "mouseleave", l8)), e11.trigger === "click" && (c5.reference ? useEventListener(r5, "click", h3) : useEventListener(n4, "click", h3)), e11.trigger === "clickToOpen" && (c5.reference ? useEventListener(r5, "click", a12) : useEventListener(n4, "click", a12)), e11.trigger === "focus" && (c5.reference ? useEventListener(r5, "mousedown", a12) : useEventListener(n4, "mousedown", a12), useEventListener(document.body, "mouseup", l8)), onMounted(() => {
    import("./creatFloatingContainer-LUJNTDMU.js").then(() => {
      e11.teleported && document.body.querySelector(".___sss-floating-container").appendChild(unrefElement(o8));
    }), e11.openOnMounted && a12();
  }), onBeforeUnmount(() => {
    e11.teleported && document.body.querySelector(".___sss-floating-container").removeChild(unrefElement(o8));
  }), N4({ close: l8, open: a12, toggle: h3 }), (i3, s9) => (openBlock(), createElementBlock(Fragment, null, [unref(c5).reference ? (openBlock(), createElementBlock("div", { key: 0, class: "sss-floating-reference", ref_key: "reference", ref: r5, style: normalizeStyle(`display:${e11.expression}`) }, [renderSlot(i3.$slots, "reference")], 4)) : createCommentVNode("", true), createBaseVNode("div", { ref_key: "floating", ref: o8, style: normalizeStyle(L2.value), class: normalizeClass(e11.floatingClass) }, [createVNode(Transition, { name: `sss-transition-${e11.transition}`, onAfterEnter: s9[0] || (s9[0] = (u6) => p10("opened")), onAfterLeave: s9[1] || (s9[1] = (u6) => p10("closed")) }, { default: withCtx(() => [unref(m5) ? (openBlock(), createElementBlock("div", mergeProps({ key: 0, class: "sss-floating-floating", "data-placement": unref(P4), "data-theme": e11.theme }, i3.$attrs), [renderSlot(i3.$slots, "default"), e11.showArrow ? (openBlock(), createElementBlock("div", { key: 0, ref_key: "_arrow", ref: g3, class: "sss-floating-arrow", style: normalizeStyle(_3.value) }, null, 4)) : createCommentVNode("", true)], 16, ce)) : createCommentVNode("", true)]), _: 3 }, 8, ["name"])], 6)], 64));
} });

// node_modules/sss-ui-plus/es/packages/SFloating/index.mjs
ke.install = function(o8) {
  o8.component("SFloating", ke);
};
var a8 = e(ke);

// node_modules/sss-ui-plus/es/packages/STooltip/src/tooltip.mjs
var e5 = {
  /**
     * @description floating元素的出现的触发方式
     */
  trigger: { type: String, default: "hover" },
  placement: { type: String, default: "bottom" },
  transition: { type: String, default: "fade" },
  openDelay: { type: Number, default: 50 },
  closeDelay: { type: Number, default: 200 },
  disabled: Boolean,
  offset: { type: Number, default: 10 },
  theme: { type: String, default: "dark" },
  closeOnClickBody: Boolean,
  openOnMounted: Boolean,
  teleported: { type: Boolean, default: true },
  showArrow: { type: Boolean, default: true },
  expression: { type: String, default: "block" },
  floatingClass: String,
  reference: Object,
  quickTrack: Boolean,
  content: String
};
var t7 = { open: () => true, opened: () => true, close: () => true, closed: () => true };

// node_modules/sss-ui-plus/es/packages/STooltip/src/tooltip.vue.mjs
var T = defineComponent({ __name: "tooltip", props: { ...e5 }, emits: { ...t7 }, setup(p10, { emit: t10 }) {
  const e11 = p10, a12 = useSlots();
  return (l8, o8) => (openBlock(), createBlock(unref(a8), { trigger: e11.trigger, placement: e11.placement, transition: e11.transition, "open-delay": e11.openDelay, "close-delay": e11.closeDelay, disabled: e11.disabled, offset: e11.offset, theme: e11.theme, "close-on-click-body": e11.closeOnClickBody, "open-on-mounted": e11.openOnMounted, teleported: e11.teleported, "show-arrow": e11.showArrow, expression: e11.expression, "floating-class": e11.floatingClass, reference: e11.reference, "quick-track": e11.quickTrack, onOpen: o8[0] || (o8[0] = (s9) => t10("open")), onOpened: o8[1] || (o8[1] = (s9) => t10("opened")), onClose: o8[2] || (o8[2] = (s9) => t10("close")), onClosed: o8[3] || (o8[3] = (s9) => t10("closed")), class: "sss-tooltip" }, createSlots({ default: withCtx(() => [unref(a12).content ? renderSlot(l8.$slots, "content", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(e11.content), 1)], 64))]), _: 2 }, [unref(a12).default ? { name: "reference", fn: withCtx(() => [renderSlot(l8.$slots, "default")]), key: "0" } : void 0]), 1032, ["trigger", "placement", "transition", "open-delay", "close-delay", "disabled", "offset", "theme", "close-on-click-body", "open-on-mounted", "teleported", "show-arrow", "expression", "floating-class", "reference", "quick-track"]));
} });

// node_modules/sss-ui-plus/es/packages/STooltip/index.mjs
T.install = function(t10) {
  t10.component("STooltip", T);
};
var l5 = e(T);

// node_modules/sss-ui-plus/es/packages/SPopConfirm/src/popconfirm.mjs
var e6 = {
  /**
     * @description floating元素的出现的触发方式
     */
  trigger: { type: String, default: "clickToOpen" },
  placement: { type: String, default: "bottom" },
  transition: { type: String, default: "scale" },
  openDelay: { type: Number, default: 0 },
  closeDelay: { type: Number, default: 0 },
  disabled: Boolean,
  offset: { type: Number, default: 10 },
  theme: { type: String, default: "light" },
  closeOnClickBody: Boolean,
  openOnMounted: Boolean,
  teleported: { type: Boolean, default: true },
  showArrow: { type: Boolean, default: true },
  expression: { type: String, default: "block" },
  floatingClass: String,
  reference: Object,
  quickTrack: Boolean,
  content: String,
  type: String,
  cancelBtnText: { type: String, default: "取消" },
  confirmBtnType: { type: String, default: "确认" }
};
var t8 = { open: () => true, opened: () => true, close: () => true, closed: () => true, cancel: () => true, confirm: () => true };

// node_modules/sss-ui-plus/es/packages/SPopConfirm/src/popconfirm.vue.mjs
var M2 = defineComponent({ __name: "popconfirm", props: { ...e6 }, emits: { ...t8 }, setup(p10, { emit: o8 }) {
  const e11 = p10, m5 = useSlots(), n4 = ref(void 0), r5 = ref(void 0), f4 = () => {
    o8("open"), nextTick().then(() => {
      n4.value.open();
    });
  }, s9 = () => {
    n4.value.open(), r5.value.close();
  }, d5 = () => {
    s9(), o8("close");
  }, u6 = () => {
    s9(), o8("cancel");
  }, y3 = () => {
    s9(), o8("confirm");
  };
  return (k4, t10) => (openBlock(), createBlock(unref(a8), { ref_key: "floating", ref: r5, trigger: e11.trigger, placement: e11.placement, transition: e11.transition, "open-delay": e11.openDelay, "close-delay": e11.closeDelay, disabled: e11.disabled, offset: e11.offset, theme: e11.theme, "close-on-click-body": e11.closeOnClickBody, "open-on-mounted": e11.openOnMounted, teleported: e11.teleported, "show-arrow": e11.showArrow, expression: e11.expression, "floating-class": e11.floatingClass, reference: e11.reference, "quick-track": e11.quickTrack, onOpen: f4, onOpened: t10[0] || (t10[0] = (a12) => o8("opened")), onClose: t10[1] || (t10[1] = (a12) => o8("close")), onClosed: t10[2] || (t10[2] = (a12) => o8("closed")), class: "sss-popconfirm" }, createSlots({ default: withCtx(() => [createVNode(ue, { class: "sss-popconfirm-message-box", ref_key: "msgBox", ref: n4, "show-head": "", "show-foot": "", transition: e11.transition, type: e11.type, "cancel-btn-text": e11.cancelBtnText, "confirm-btn-text": e11.confirmBtnType, title: e11.content, onClose: d5, onCancel: u6, onConfirm: y3 }, null, 8, ["transition", "type", "cancel-btn-text", "confirm-btn-text", "title"])]), _: 2 }, [unref(m5).default ? { name: "reference", fn: withCtx(() => [renderSlot(k4.$slots, "default")]), key: "0" } : void 0]), 1032, ["trigger", "placement", "transition", "open-delay", "close-delay", "disabled", "offset", "theme", "close-on-click-body", "open-on-mounted", "teleported", "show-arrow", "expression", "floating-class", "reference", "quick-track"]));
} });

// node_modules/sss-ui-plus/es/packages/SPopConfirm/index.mjs
M2.install = function(t10) {
  t10.component("SPopconfirm", M2);
};
var s4 = e(M2);

// node_modules/sss-ui-plus/es/packages/SDropdown/src/dropdown.mjs
var a9 = {
  /*以下是floating属性*/
  trigger: { type: String, default: "click" },
  placement: { type: String, default: "bottom" },
  transition: { type: String, default: "scale" },
  openDelay: { type: Number, default: 0 },
  closeDelay: { type: Number, default: 0 },
  disabled: Boolean,
  offset: { type: Number, default: 10 },
  theme: { type: String, default: "light" },
  closeOnClickBody: Boolean,
  openOnMounted: Boolean,
  teleported: { type: Boolean, default: true },
  showArrow: { type: Boolean, default: true },
  expression: { type: String, default: "block" },
  floatingClass: String,
  reference: Object,
  quickTrack: Boolean,
  /*以下是scrollbar属性*/
  scrollbarVertical: { type: Boolean, default: true },
  // 是否显示水平滚动条
  scrollbarHorizontal: Boolean,
  // 视口大小不再改变
  scrollbarNoResize: Boolean,
  // 滚动条始终显示
  scrollbarAlways: Boolean,
  // 滚动条显示在视口外面
  scrollbarIsOutside: Boolean,
  // 是否开启跳转
  scrollbarQuickJump: { type: Boolean, default: true },
  /*以下是dropdown属性*/
  center: Boolean,
  closeOnClickItem: { type: Boolean, default: true },
  prefix: Array
};
var r3 = { select: (e11, l8) => a(e11), open: () => true, opened: () => true, close: () => true, closed: () => true };

// node_modules/sss-ui-plus/es/packages/SDropdown/src/dropdown.vue.mjs
var B2 = defineComponent({ __name: "dropdown", props: { ...a9 }, emits: { ...r3 }, setup(d5, { expose: f4, emit: s9 }) {
  const e11 = d5, u6 = useSlots(), r5 = ref(void 0), i3 = () => r5.value.close();
  return provide("inDropdown", true), provide("isCenter", e11.center), provide("DropdownItemClick", (l8) => {
    s9("select", l8, e11.prefix);
  }), provide("DropdownClose", () => {
    e11.closeOnClickItem && i3();
  }), f4({ close: i3, open: () => r5.value.open(), toggle: () => r5.value.toggle() }), (l8, o8) => {
    const m5 = resolveComponent("s-scrollbar");
    return openBlock(), createBlock(unref(a8), { ref_key: "floating", ref: r5, class: "sss-dropdown", trigger: e11.trigger, placement: e11.placement, transition: e11.transition, "open-delay": e11.openDelay, "close-delay": e11.closeDelay, disabled: e11.disabled, offset: e11.offset, theme: e11.theme, "close-on-click-body": e11.closeOnClickBody, "open-on-mounted": e11.openOnMounted, teleported: e11.teleported, "show-arrow": e11.showArrow, expression: e11.expression, "floating-class": e11.floatingClass, reference: e11.reference, "quick-track": e11.quickTrack, onOpen: o8[0] || (o8[0] = (t10) => s9("open")), onOpened: o8[1] || (o8[1] = (t10) => s9("opened")), onClose: o8[2] || (o8[2] = (t10) => s9("close")), onClosed: o8[3] || (o8[3] = (t10) => s9("closed")), style: { padding: "7px 0" } }, createSlots({ default: withCtx(() => [createVNode(m5, { vertical: e11.scrollbarVertical, horizontal: e11.scrollbarHorizontal, "no-resize": e11.scrollbarNoResize, always: e11.scrollbarAlways, "is-outside": e11.scrollbarIsOutside, "quick-jump": e11.scrollbarQuickJump }, { default: withCtx(() => [renderSlot(l8.$slots, "default")]), _: 3 }, 8, ["vertical", "horizontal", "no-resize", "always", "is-outside", "quick-jump"])]), _: 2 }, [unref(u6).reference ? { name: "reference", fn: withCtx(() => [renderSlot(l8.$slots, "reference")]), key: "0" } : void 0]), 1032, ["trigger", "placement", "transition", "open-delay", "close-delay", "disabled", "offset", "theme", "close-on-click-body", "open-on-mounted", "teleported", "show-arrow", "expression", "floating-class", "reference", "quick-track"]);
  };
} });

// node_modules/sss-ui-plus/es/packages/SDropdown/index.mjs
B2.install = function(t10) {
  t10.component("SDropdown", B2);
};
var s5 = e(B2);

// node_modules/sss-ui-plus/es/packages/SDropDownItem/src/dropdownItem.mjs
var o4 = { suffixIcon: String, prefixIcon: String, label: String, value: String, closeOnClick: { type: Boolean, default: true }, isActive: Boolean, disabled: Boolean, tag: { type: String, default: "div" }, href: String, jumpMethod: { type: String, default: "push" } };
var n3 = { select: (t10) => a(t10), click: () => true };

// node_modules/sss-ui-plus/es/packages/SDropDownItem/src/dropdownItem.vue.mjs
var B3 = { key: 0 };
var E2 = { key: 1 };
var V2 = defineComponent({ __name: "dropdownItem", props: { ...o4 }, emits: { ...n3 }, setup(p10, { emit: a12 }) {
  const e11 = p10, c5 = inject("inDropdown"), m5 = inject("isCenter"), u6 = inject("DropdownItemClick"), f4 = inject("DropdownClose");
  if (c5 === void 0)
    throw SyntaxError("dropdown-item component should be within dropdown component");
  const w5 = () => {
    u6(e11.value), a12("select", e11.value), a12("click"), e11.closeOnClick && !e11.disabled && f4();
  };
  return (o8, M4) => {
    var r5;
    const n4 = resolveComponent("s-icon");
    return e11.label || (r5 = o8.$slots) != null && r5.default ? (openBlock(), createBlock(resolveDynamicComponent(e11.tag), { key: 0, class: normalizeClass(["sss-dropdown-item", [{ "is-active": e11.isActive, "is-disabled": e11.disabled }]]), onClick: w5, "data-center": unref(m5), href: e11.href, jumpMethod: e11.jumpMethod }, { default: withCtx(() => {
      var l8;
      return [createVNode(n4, { target: e11.prefixIcon, style: { padding: "0" } }, null, 8, ["target"]), (l8 = o8.$slots) != null && l8.default ? (openBlock(), createElementBlock("span", B3, [renderSlot(o8.$slots, "default")])) : (openBlock(), createElementBlock("span", E2, toDisplayString(e11.label), 1)), createVNode(n4, { target: e11.suffixIcon, style: { padding: "0" } }, null, 8, ["target"])];
    }), _: 3 }, 8, ["data-center", "href", "jumpMethod", "class"])) : createCommentVNode("", true);
  };
} });

// node_modules/sss-ui-plus/es/packages/SDropDownItem/index.mjs
V2.install = function(t10) {
  t10.component("SDropdownItem", V2);
};
var e7 = e(V2);

// node_modules/sss-ui-plus/es/packages/SScrollbar/src/scrollbar.mjs
var o5 = {
  // 是否显示垂直滚动条
  vertical: { type: Boolean, default: true },
  // 是否显示水平滚动条
  horizontal: Boolean,
  // 视口大小不再改变
  noResize: Boolean,
  // 滚动条始终显示
  always: Boolean,
  // 滚动条显示在视口外面
  isOutside: Boolean,
  // 是否开启跳转
  quickJump: { type: Boolean, default: true }
};

// node_modules/sss-ui-plus/es/packages/SScrollbar/src/scrollbar.vue.mjs
var j = ["data-always"];
var F = defineComponent({ name: "SScrollbar", inheritAttrs: false });
var U2 = defineComponent({ ...F, props: { ...o5 }, setup(R3) {
  const d5 = R3, s9 = ref(void 0), k4 = ref(void 0), h3 = ref(void 0), L2 = ref(void 0), m5 = ref(void 0), g3 = ref(false);
  let a12;
  const X3 = ref({ top: "0", right: "0", height: "0" }), Y3 = ref({ bottom: "0", left: "0", width: "0" }), o8 = { x: 0, y: 0 }, x4 = { x: 0, y: 0 }, H3 = { x: 0, y: 0 }, W2 = { x: 0, y: 0 }, E5 = (t10) => {
    H3.x = t10.clientX, H3.y = t10.clientY, o8.x = H3.x - x4.x, o8.y = H3.y - x4.y;
    const l8 = unrefElement(s9), r5 = unrefElement(h3), c5 = unrefElement(m5), n4 = l8.scrollHeight, i3 = l8.scrollWidth, v8 = r5.offsetHeight, u6 = c5.offsetWidth;
    a12 === "thumbY" ? unrefElement(s9).scrollTop = n4 * o8.y / v8 + W2.y : a12 === "thumbX" && (unrefElement(s9).scrollLeft = i3 * o8.x / u6 + W2.x);
  }, S5 = (t10) => {
    if (t10.target !== t10.currentTarget)
      return;
    t10.stopPropagation();
    const l8 = unrefElement(s9), r5 = unrefElement(h3), c5 = unrefElement(k4), n4 = unrefElement(L2), i3 = unrefElement(m5), v8 = l8.scrollHeight, u6 = l8.scrollWidth, y3 = r5.offsetHeight, w5 = i3.offsetWidth;
    o8.y = t10.clientY - r5.getBoundingClientRect().top - c5.offsetHeight / 2, o8.x = t10.clientX - i3.getBoundingClientRect().left - n4.offsetWidth / 2, o8.y = Math.min(Math.max(0, o8.y), r5.offsetHeight - c5.offsetHeight), o8.x = Math.min(Math.max(0, o8.x), i3.offsetWidth - n4.offsetWidth), a12 === "thumbY" ? unrefElement(s9).scrollTop = v8 * o8.y / y3 : a12 === "thumbX" && (unrefElement(s9).scrollLeft = u6 * o8.x / w5);
  }, $ = () => {
    const t10 = unrefElement(s9), l8 = unrefElement(h3), r5 = unrefElement(m5), { scrollHeight: c5, scrollWidth: n4, offsetHeight: i3, offsetWidth: v8 } = t10, u6 = l8.offsetHeight, y3 = r5.offsetWidth, w5 = i3 * u6 / c5, M4 = v8 * y3 / n4;
    unrefElement(h3).style.opacity = w5 === u6 ? "0" : "", unrefElement(m5).style.opacity = M4 === y3 ? "0" : "", X3.value.height = `${w5}px`, Y3.value.width = `${M4}px`;
  }, z4 = () => {
    const t10 = unrefElement(s9), l8 = unrefElement(h3), r5 = unrefElement(m5), { scrollHeight: c5, scrollWidth: n4, scrollTop: i3, scrollLeft: v8 } = t10, u6 = i3 * l8.offsetHeight / c5, y3 = v8 * r5.offsetWidth / n4;
    X3.value.top = `${u6}px`, Y3.value.left = `${y3}px`;
  };
  return useEventListener(s9, "scroll", () => {
    z4();
  }), d5.quickJump && (useEventListener(h3, "click", (t10) => {
    a12 = "thumbY", S5(t10);
  }), useEventListener(m5, "click", (t10) => {
    a12 = "thumbX", S5(t10);
  })), d5.noResize || useResizeObserver(s9, () => {
    z4(), $();
  }), useMutationObserver(s9, () => {
    z4(), $();
  }, { attributes: true, childList: true, subtree: true }), useEventListener(k4, "mousedown", (t10) => {
    x4.y = t10.clientY, W2.y = unrefElement(s9).scrollTop, a12 = "thumbY", g3.value = true, unrefElement(document.body).addEventListener("mousemove", E5);
  }), useEventListener(L2, "mousedown", (t10) => {
    x4.x = t10.clientX, W2.x = unrefElement(s9).scrollLeft, a12 = "thumbX", g3.value = true, unrefElement(document.body).addEventListener("mousemove", E5);
  }), useEventListener(document.body, "mouseup", () => {
    g3.value = false, unrefElement(document.body).removeEventListener("mousemove", E5);
  }), (t10, l8) => (openBlock(), createElementBlock("div", mergeProps({ class: "sss-scrollbar" }, t10.$attrs, { "data-always": d5.always, class: [{ "is-active": g3.value }] }), [createBaseVNode("div", { ref_key: "warp", ref: s9, class: "sss-scrollbar-warp" }, [renderSlot(t10.$slots, "default")], 512), withDirectives(createBaseVNode("div", { ref_key: "barY", ref: h3, class: normalizeClass(["sss-scrollbar-bar is-vertical", [{ "is-outside": d5.isOutside }]]) }, [createBaseVNode("div", { ref_key: "thumbY", ref: k4, class: "sss-scrollbar-thumb is-round", style: normalizeStyle(X3.value) }, null, 4)], 2), [[vShow, d5.vertical]]), withDirectives(createBaseVNode("div", { ref_key: "barX", ref: m5, class: normalizeClass(["sss-scrollbar-bar is-horizontal", [{ "is-outside": d5.isOutside }]]) }, [createBaseVNode("div", { ref_key: "thumbX", ref: L2, class: "sss-scrollbar-thumb is-round", style: normalizeStyle(Y3.value) }, null, 4)], 2), [[vShow, d5.horizontal]])], 16, j));
} });

// node_modules/sss-ui-plus/es/packages/SScrollbar/index.mjs
U2.install = function(r5) {
  r5.component("SScrollbar", U2);
};
var s6 = e(U2);

// node_modules/sss-ui-plus/es/packages/SCascader/src/cascader.mjs
var l6 = {
  /*以下是floating属性*/
  trigger: { type: String, default: "click" },
  placement: { type: String, default: "bottom" },
  transition: { type: String, default: "scale" },
  openDelay: { type: Number, default: 0 },
  closeDelay: { type: Number, default: 0 },
  disabled: Boolean,
  offset: { type: Number, default: 10 },
  theme: { type: String, default: "light" },
  closeOnClickBody: Boolean,
  openOnMounted: Boolean,
  teleported: { type: Boolean, default: true },
  showArrow: { type: Boolean, default: true },
  type: String,
  cancelBtnText: { type: String, default: "取消" },
  confirmBtnType: { type: String, default: "确认" },
  title: String,
  expression: { type: String, default: "block" },
  floatingClass: String,
  reference: Object,
  quickTrack: Boolean,
  /*以下是scrollbar属性*/
  scrollbarVertical: { type: Boolean, default: true },
  // 是否显示水平滚动条
  scrollbarHorizontal: Boolean,
  // 视口大小不再改变
  scrollbarNoResize: { type: Boolean, default: true },
  // 滚动条始终显示
  scrollbarAlways: Boolean,
  // 滚动条显示在视口外面
  scrollbarIsOutside: Boolean,
  // 是否开启跳转
  scrollbarQuickJump: { type: Boolean, default: true },
  /*以下是dropdown属性*/
  center: Boolean,
  closeOnClickItem: { type: Boolean, default: true },
  prefix: Array,
  /*以下是cascader属性*/
  options: { type: Object, default: [] },
  subCascaderPlacement: { type: String, default: "right" }
};
var o6 = { select: (e11, t10) => true, open: () => true, opened: () => true, close: () => true, closed: () => true };

// node_modules/sss-ui-plus/es/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs
function L(t10, ...e11) {
  console.warn(`[Vue warn] ${t10}`, ...e11);
}
var yt;
function Bt() {
  return yt;
}
var W = (t10) => {
  const e11 = new Set(t10);
  return e11.w = 0, e11.n = 0, e11;
};
var ot = (t10) => (t10.w & _2) > 0;
var it = (t10) => (t10.n & _2) > 0;
var j2 = /* @__PURE__ */ new WeakMap();
var R = 0;
var _2 = 1;
var z3 = 30;
var u3;
var E3 = Symbol(true ? "iterate" : "");
var A3 = Symbol(true ? "Map key iterate" : "");
var Ft = class {
  constructor(e11, s9 = null, r5) {
    this.fn = e11, this.scheduler = s9, this.active = true, this.deps = [], this.parent = void 0, function(n4, o8) {
      o8 && o8.active && o8.effects.push(n4);
    }(this, r5);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e11 = u3, s9 = N2;
    for (; e11; ) {
      if (e11 === this)
        return;
      e11 = e11.parent;
    }
    try {
      return this.parent = u3, u3 = this, N2 = true, _2 = 1 << ++R, R <= z3 ? (({ deps: r5 }) => {
        if (r5.length)
          for (let n4 = 0; n4 < r5.length; n4++)
            r5[n4].w |= _2;
      })(this) : Q2(this), this.fn();
    } finally {
      R <= z3 && ((r5) => {
        const { deps: n4 } = r5;
        if (n4.length) {
          let o8 = 0;
          for (let i3 = 0; i3 < n4.length; i3++) {
            const a12 = n4[i3];
            ot(a12) && !it(a12) ? a12.delete(r5) : n4[o8++] = a12, a12.w &= ~_2, a12.n &= ~_2;
          }
          n4.length = o8;
        }
      })(this), _2 = 1 << --R, u3 = this.parent, N2 = s9, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    u3 === this ? this.deferStop = true : this.active && (Q2(this), this.onStop && this.onStop(), this.active = false);
  }
};
function Q2(t10) {
  const { deps: e11 } = t10;
  if (e11.length) {
    for (let s9 = 0; s9 < e11.length; s9++)
      e11[s9].delete(t10);
    e11.length = 0;
  }
}
var N2 = true;
var at = [];
function Et() {
  at.push(N2), N2 = false;
}
function Nt() {
  const t10 = at.pop();
  N2 = t10 === void 0 || t10;
}
function l7(t10, e11, s9) {
  if (N2 && u3) {
    let r5 = j2.get(t10);
    r5 || j2.set(t10, r5 = /* @__PURE__ */ new Map());
    let n4 = r5.get(s9);
    n4 || r5.set(s9, n4 = W()), function(o8, i3) {
      let a12 = false;
      R <= z3 ? it(o8) || (o8.n |= _2, a12 = !ot(o8)) : a12 = !o8.has(u3), a12 && (o8.add(u3), u3.deps.push(o8), u3.onTrack && u3.onTrack(z({ effect: u3 }, i3)));
    }(n4, true ? { effect: u3, target: t10, type: e11, key: s9 } : void 0);
  }
}
function w3(t10, e11, s9, r5, n4, o8) {
  const i3 = j2.get(t10);
  if (!i3)
    return;
  let a12 = [];
  if (e11 === "clear")
    a12 = [...i3.values()];
  else if (s9 === "length" && p(t10)) {
    const f4 = Number(r5);
    i3.forEach((d5, y3) => {
      (y3 === "length" || y3 >= f4) && a12.push(d5);
    });
  } else
    switch (s9 !== void 0 && a12.push(i3.get(s9)), e11) {
      case "add":
        p(t10) ? _(s9) && a12.push(i3.get("length")) : (a12.push(i3.get(E3)), v(t10) && a12.push(i3.get(A3)));
        break;
      case "delete":
        p(t10) || (a12.push(i3.get(E3)), v(t10) && a12.push(i3.get(A3)));
        break;
      case "set":
        v(t10) && a12.push(i3.get(E3));
    }
  const h3 = true ? { target: t10, type: e11, key: s9, newValue: r5, oldValue: n4, oldTarget: o8 } : void 0;
  if (a12.length === 1)
    a12[0] && (true ? S4(a12[0], h3) : S4(a12[0]));
  else {
    const f4 = [];
    for (const d5 of a12)
      d5 && f4.push(...d5);
    true ? S4(W(f4), h3) : S4(W(f4));
  }
}
function S4(t10, e11) {
  const s9 = p(t10) ? t10 : [...t10];
  for (const r5 of s9)
    r5.computed && U3(r5, e11);
  for (const r5 of s9)
    r5.computed || U3(r5, e11);
}
function U3(t10, e11) {
  (t10 !== u3 || t10.allowRecurse) && (t10.onTrigger && t10.onTrigger(z({ effect: t10 }, e11)), t10.scheduler ? t10.scheduler() : t10.run());
}
var Rt = S("__proto__,__v_isRef,__isVue");
var ct = new Set(
  Object.getOwnPropertyNames(Symbol).filter((t10) => t10 !== "arguments" && t10 !== "caller").map((t10) => Symbol[t10]).filter(C)
);
var kt = Y2();
var Ot = Y2(true);
var St = Y2(true, true);
var X2 = bt();
function bt() {
  const t10 = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e11) => {
    t10[e11] = function(...s9) {
      const r5 = c2(this);
      for (let o8 = 0, i3 = this.length; o8 < i3; o8++)
        l7(r5, "get", o8 + "");
      const n4 = r5[e11](...s9);
      return n4 === -1 || n4 === false ? r5[e11](...s9.map(c2)) : n4;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e11) => {
    t10[e11] = function(...s9) {
      Et();
      const r5 = c2(this)[e11].apply(this, s9);
      return Nt(), r5;
    };
  }), t10;
}
function mt(t10) {
  const e11 = c2(this);
  return l7(e11, "has", t10), e11.hasOwnProperty(t10);
}
function Y2(t10 = false, e11 = false) {
  return function(s9, r5, n4) {
    if (r5 === "__v_isReactive")
      return !t10;
    if (r5 === "__v_isReadonly")
      return t10;
    if (r5 === "__v_isShallow")
      return e11;
    if (r5 === "__v_raw" && n4 === (t10 ? e11 ? dt : ht : e11 ? Kt : ft).get(s9))
      return s9;
    const o8 = p(s9);
    if (!t10) {
      if (o8 && P(X2, r5))
        return Reflect.get(X2, r5, n4);
      if (r5 === "hasOwnProperty")
        return mt;
    }
    const i3 = Reflect.get(s9, r5, n4);
    return (C(r5) ? ct.has(r5) : Rt(r5)) ? i3 : (t10 || l7(s9, "get", r5), e11 ? i3 : v4(i3) ? o8 && _(r5) ? i3 : i3.value : r(i3) ? t10 ? _t(i3) : pt(i3) : i3);
  };
}
function Vt(t10 = false) {
  return function(e11, s9, r5, n4) {
    let o8 = e11[s9];
    if (O(o8) && v4(o8) && !v4(r5))
      return false;
    if (!t10 && (It(r5) || O(r5) || (o8 = c2(o8), r5 = c2(r5)), !p(e11) && v4(o8) && !v4(r5)))
      return o8.value = r5, true;
    const i3 = p(e11) && _(s9) ? Number(s9) < e11.length : P(e11, s9), a12 = Reflect.set(e11, s9, r5, n4);
    return e11 === c2(n4) && (i3 ? V(r5, o8) && w3(e11, "set", s9, r5, o8) : w3(e11, "add", s9, r5)), a12;
  };
}
var Dt = { get: kt, set: Vt(), deleteProperty: function(t10, e11) {
  const s9 = P(t10, e11), r5 = t10[e11], n4 = Reflect.deleteProperty(t10, e11);
  return n4 && s9 && w3(t10, "delete", e11, void 0, r5), n4;
}, has: function(t10, e11) {
  const s9 = Reflect.has(t10, e11);
  return C(e11) && ct.has(e11) || l7(t10, "has", e11), s9;
}, ownKeys: function(t10) {
  return l7(t10, "iterate", p(t10) ? "length" : E3), Reflect.ownKeys(t10);
} };
var ut = { get: Ot, set: (t10, e11) => (L(`Set operation on key "${String(e11)}" failed: target is readonly.`, t10), true), deleteProperty: (t10, e11) => (L(`Delete operation on key "${String(e11)}" failed: target is readonly.`, t10), true) };
var Mt = z({}, ut, { get: St });
var q2 = (t10) => t10;
var T2 = (t10) => Reflect.getPrototypeOf(t10);
function b4(t10, e11, s9 = false, r5 = false) {
  const n4 = c2(t10 = t10.__v_raw), o8 = c2(e11);
  s9 || (e11 !== o8 && l7(n4, "get", e11), l7(n4, "get", o8));
  const { has: i3 } = T2(n4), a12 = r5 ? q2 : s9 ? J2 : H2;
  return i3.call(n4, e11) ? a12(t10.get(e11)) : i3.call(n4, o8) ? a12(t10.get(o8)) : void (t10 !== n4 && t10.get(e11));
}
function m2(t10, e11 = false) {
  const s9 = this.__v_raw, r5 = c2(s9), n4 = c2(t10);
  return e11 || (t10 !== n4 && l7(r5, "has", t10), l7(r5, "has", n4)), t10 === n4 ? s9.has(t10) : s9.has(t10) || s9.has(n4);
}
function V3(t10, e11 = false) {
  return t10 = t10.__v_raw, !e11 && l7(c2(t10), "iterate", E3), Reflect.get(t10, "size", t10);
}
function Z5(t10) {
  t10 = c2(t10);
  const e11 = c2(this);
  return T2(e11).has.call(e11, t10) || (e11.add(t10), w3(e11, "add", t10, t10)), this;
}
function tt(t10, e11) {
  e11 = c2(e11);
  const s9 = c2(this), { has: r5, get: n4 } = T2(s9);
  let o8 = r5.call(s9, t10);
  o8 ? lt(s9, r5, t10) : (t10 = c2(t10), o8 = r5.call(s9, t10));
  const i3 = n4.call(s9, t10);
  return s9.set(t10, e11), o8 ? V(e11, i3) && w3(s9, "set", t10, e11, i3) : w3(s9, "add", t10, e11), this;
}
function et(t10) {
  const e11 = c2(this), { has: s9, get: r5 } = T2(e11);
  let n4 = s9.call(e11, t10);
  n4 ? lt(e11, s9, t10) : (t10 = c2(t10), n4 = s9.call(e11, t10));
  const o8 = r5 ? r5.call(e11, t10) : void 0, i3 = e11.delete(t10);
  return n4 && w3(e11, "delete", t10, void 0, o8), i3;
}
function nt() {
  const t10 = c2(this), e11 = t10.size !== 0, s9 = true ? v(t10) ? new Map(t10) : new Set(t10) : void 0, r5 = t10.clear();
  return e11 && w3(t10, "clear", void 0, void 0, s9), r5;
}
function D2(t10, e11) {
  return function(s9, r5) {
    const n4 = this, o8 = n4.__v_raw, i3 = c2(o8), a12 = e11 ? q2 : t10 ? J2 : H2;
    return !t10 && l7(i3, "iterate", E3), o8.forEach((h3, f4) => s9.call(r5, a12(h3), a12(f4), n4));
  };
}
function M3(t10, e11, s9) {
  return function(...r5) {
    const n4 = this.__v_raw, o8 = c2(n4), i3 = v(o8), a12 = t10 === "entries" || t10 === Symbol.iterator && i3, h3 = t10 === "keys" && i3, f4 = n4[t10](...r5), d5 = s9 ? q2 : e11 ? J2 : H2;
    return !e11 && l7(o8, "iterate", h3 ? A3 : E3), {
      // iterator protocol
      next() {
        const { value: y3, done: $ } = f4.next();
        return $ ? { value: y3, done: $ } : { value: a12 ? [d5(y3[0]), d5(y3[1])] : d5(y3), done: $ };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function p8(t10) {
  return function(...e11) {
    if (true) {
      const s9 = e11[0] ? `on key "${e11[0]}" ` : "";
      console.warn(`${I(t10)} operation ${s9}failed: target is readonly.`, c2(this));
    }
    return t10 !== "delete" && this;
  };
}
function xt() {
  const t10 = { get(n4) {
    return b4(this, n4);
  }, get size() {
    return V3(this);
  }, has: m2, add: Z5, set: tt, delete: et, clear: nt, forEach: D2(false, false) }, e11 = { get(n4) {
    return b4(this, n4, false, true);
  }, get size() {
    return V3(this);
  }, has: m2, add: Z5, set: tt, delete: et, clear: nt, forEach: D2(false, true) }, s9 = { get(n4) {
    return b4(this, n4, true);
  }, get size() {
    return V3(this, true);
  }, has(n4) {
    return m2.call(this, n4, true);
  }, add: p8("add"), set: p8("set"), delete: p8("delete"), clear: p8("clear"), forEach: D2(true, false) }, r5 = { get(n4) {
    return b4(this, n4, true, true);
  }, get size() {
    return V3(this, true);
  }, has(n4) {
    return m2.call(this, n4, true);
  }, add: p8("add"), set: p8("set"), delete: p8("delete"), clear: p8("clear"), forEach: D2(true, true) };
  return ["keys", "values", "entries", Symbol.iterator].forEach((n4) => {
    t10[n4] = M3(n4, false, false), s9[n4] = M3(n4, true, false), e11[n4] = M3(n4, false, true), r5[n4] = M3(n4, true, true);
  }), [t10, s9, e11, r5];
}
var [Pt, Tt, $t, Wt] = xt();
function B4(t10, e11) {
  const s9 = e11 ? t10 ? Wt : $t : t10 ? Tt : Pt;
  return (r5, n4, o8) => n4 === "__v_isReactive" ? !t10 : n4 === "__v_isReadonly" ? t10 : n4 === "__v_raw" ? r5 : Reflect.get(P(s9, n4) && n4 in r5 ? s9 : r5, n4, o8);
}
var jt = { get: B4(false, false) };
var zt = { get: B4(true, false) };
var At = { get: B4(true, true) };
function lt(t10, e11, s9) {
  const r5 = c2(s9);
  if (r5 !== s9 && e11.call(t10, r5)) {
    const n4 = M(t10);
    console.warn(`Reactive ${n4} contains both the raw and reactive versions of the same object${n4 === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
var ft = /* @__PURE__ */ new WeakMap();
var Kt = /* @__PURE__ */ new WeakMap();
var ht = /* @__PURE__ */ new WeakMap();
var dt = /* @__PURE__ */ new WeakMap();
function pt(t10) {
  return O(t10) ? t10 : F2(t10, false, Dt, jt, ft);
}
function _t(t10) {
  return F2(t10, true, ut, zt, ht);
}
function Gt(t10) {
  return F2(t10, true, Mt, At, dt);
}
function F2(t10, e11, s9, r5, n4) {
  if (!r(t10))
    return console.warn(`value cannot be made reactive: ${String(t10)}`), t10;
  if (t10.__v_raw && (!e11 || !t10.__v_isReactive))
    return t10;
  const o8 = n4.get(t10);
  if (o8)
    return o8;
  const i3 = (a12 = t10).__v_skip || !Object.isExtensible(a12) ? 0 : function(f4) {
    switch (f4) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }(M(a12));
  var a12;
  if (i3 === 0)
    return t10;
  const h3 = new Proxy(t10, i3 === 2 ? r5 : s9);
  return n4.set(t10, h3), h3;
}
function G(t10) {
  return O(t10) ? G(t10.__v_raw) : !(!t10 || !t10.__v_isReactive);
}
function O(t10) {
  return !(!t10 || !t10.__v_isReadonly);
}
function It(t10) {
  return !(!t10 || !t10.__v_isShallow);
}
function c2(t10) {
  const e11 = t10 && t10.__v_raw;
  return e11 ? c2(e11) : t10;
}
function Jt(t10) {
  return k(t10, "__v_skip", true), t10;
}
var H2 = (t10) => r(t10) ? pt(t10) : t10;
var J2 = (t10) => r(t10) ? _t(t10) : t10;
function v4(t10) {
  return !(!t10 || t10.__v_isRef !== true);
}
function Ct(t10) {
  return v4(t10) ? t10.value : t10;
}
var Yt = { get: (t10, e11, s9) => Ct(Reflect.get(t10, e11, s9)), set: (t10, e11, s9, r5) => {
  const n4 = t10[e11];
  return v4(n4) && !v4(s9) ? (n4.value = s9, true) : Reflect.set(t10, e11, s9, r5);
} };
function Lt(t10) {
  return G(t10) ? t10 : new Proxy(t10, Yt);
}

// node_modules/sss-ui-plus/es/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs
var P3 = [];
function d2(e11, ...n4) {
  if (false)
    return;
  Et();
  const t10 = P3.length ? P3[P3.length - 1].component : null, r5 = t10 && t10.appContext.config.warnHandler, o8 = function() {
    let s9 = P3[P3.length - 1];
    if (!s9)
      return [];
    const c5 = [];
    for (; s9; ) {
      const i3 = c5[0];
      i3 && i3.vnode === s9 ? i3.recurseCount++ : c5.push({ vnode: s9, recurseCount: 0 });
      const a12 = s9.component && s9.component.parent;
      s9 = a12 && a12.vnode;
    }
    return c5;
  }();
  if (r5)
    R2(r5, t10, 11, [e11 + n4.join(""), t10 && t10.proxy, o8.map(({ vnode: s9 }) => `at <${je(t10, s9.type)}>`).join(`
`), o8]);
  else {
    const s9 = [`[Vue warn]: ${e11}`, ...n4];
    o8.length && s9.push(`
`, ...function(c5) {
      const i3 = [];
      return c5.forEach((a12, l8) => {
        i3.push(...l8 === 0 ? [] : [`
`], ...function({ vnode: u6, recurseCount: f4 }) {
          const y3 = f4 > 0 ? `... (${f4} recursive calls)` : "", w5 = !!u6.component && u6.component.parent == null, Y3 = ` at <${je(u6.component, u6.type, w5)}`, H3 = ">" + y3;
          return u6.props ? [Y3, ...fn(u6.props), H3] : [Y3 + H3];
        }(a12));
      }), i3;
    }(o8)), console.warn(...s9);
  }
  Nt();
}
function fn(e11) {
  const n4 = [], t10 = Object.keys(e11);
  return t10.slice(0, 3).forEach((r5) => {
    n4.push(...Ue(r5, e11[r5]));
  }), t10.length > 3 && n4.push(" ..."), n4;
}
function Ue(e11, n4, t10) {
  return a(n4) ? (n4 = JSON.stringify(n4), t10 ? n4 : [`${e11}=${n4}`]) : typeof n4 == "number" || typeof n4 == "boolean" || n4 == null ? t10 ? n4 : [`${e11}=${n4}`] : v4(n4) ? (n4 = Ue(e11, c2(n4.value), true), t10 ? n4 : [`${e11}=Ref<`, n4, ">"]) : l(n4) ? [`${e11}=fn${n4.name ? `<${n4.name}>` : ""}`] : (n4 = c2(n4), t10 ? n4 : [`${e11}=`, n4]);
}
var be = { sp: "serverPrefetch hook", bc: "beforeCreate hook", c: "created hook", bm: "beforeMount hook", m: "mounted hook", bu: "beforeUpdate hook", u: "updated", bum: "beforeUnmount hook", um: "unmounted hook", a: "activated hook", da: "deactivated hook", ec: "errorCaptured hook", rtc: "renderTracked hook", rtg: "renderTriggered hook", 0: "setup function", 1: "render function", 2: "watcher getter", 3: "watcher callback", 4: "watcher cleanup function", 5: "native event handler", 6: "component event handler", 7: "vnode hook", 8: "directive hook", 9: "transition hook", 10: "app errorHandler", 11: "app warnHandler", 12: "ref function", 13: "async component loader", 14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core" };
function R2(e11, n4, t10, r5) {
  let o8;
  try {
    o8 = r5 ? e11(...r5) : e11();
  } catch (s9) {
    He(s9, n4, t10);
  }
  return o8;
}
function fe(e11, n4, t10, r5) {
  if (l(e11)) {
    const s9 = R2(e11, n4, t10, r5);
    return s9 && x(s9) && s9.catch((c5) => {
      He(c5, n4, t10);
    }), s9;
  }
  const o8 = [];
  for (let s9 = 0; s9 < e11.length; s9++)
    o8.push(fe(e11[s9], n4, t10, r5));
  return o8;
}
function He(e11, n4, t10, r5 = true) {
  const o8 = n4 ? n4.vnode : null;
  if (n4) {
    let s9 = n4.parent;
    const c5 = n4.proxy, i3 = true ? be[t10] : t10;
    for (; s9; ) {
      const l8 = s9.ec;
      if (l8) {
        for (let u6 = 0; u6 < l8.length; u6++)
          if (l8[u6](e11, c5, i3) === false)
            return;
      }
      s9 = s9.parent;
    }
    const a12 = n4.appContext.config.errorHandler;
    if (a12)
      return void R2(a12, null, 10, [e11, c5, i3]);
  }
  (function(s9, c5, i3, a12 = true) {
    if (true) {
      const u6 = be[c5];
      if (i3 && (l8 = i3, P3.push(l8)), d2("Unhandled error" + (u6 ? ` during execution of ${u6}` : "")), i3 && P3.pop(), a12)
        throw s9;
      console.error(s9);
    } else
      console.error(s9);
    var l8;
  })(e11, t10, o8, r5);
}
var oe = false;
var he = false;
var N3 = [];
var k3 = 0;
var I3 = [];
var x2 = null;
var V4 = 0;
var ze = Promise.resolve();
var ve = null;
var hn = 100;
function gn(e11) {
  const n4 = ve || ze;
  return e11 ? n4.then(this ? e11.bind(this) : e11) : n4;
}
function me2(e11) {
  N3.length && N3.includes(e11, oe && e11.allowRecurse ? k3 + 1 : k3) || (e11.id == null ? N3.push(e11) : N3.splice(function(n4) {
    let t10 = k3 + 1, r5 = N3.length;
    for (; t10 < r5; ) {
      const o8 = t10 + r5 >>> 1;
      G2(N3[o8]) < n4 ? t10 = o8 + 1 : r5 = o8;
    }
    return t10;
  }(e11.id), 0, e11), Je());
}
function Je() {
  oe || he || (he = true, ve = ze.then(Be));
}
function qe(e11) {
  p(e11) ? I3.push(...e11) : x2 && x2.includes(e11, e11.allowRecurse ? V4 + 1 : V4) || I3.push(e11), Je();
}
var G2 = (e11) => e11.id == null ? 1 / 0 : e11.id;
var vn = (e11, n4) => {
  const t10 = G2(e11) - G2(n4);
  if (t10 === 0) {
    if (e11.pre && !n4.pre)
      return -1;
    if (n4.pre && !e11.pre)
      return 1;
  }
  return t10;
};
function Be(e11) {
  he = false, oe = true, e11 = e11 || /* @__PURE__ */ new Map(), N3.sort(vn);
  const n4 = true ? (t10) => Oe(e11, t10) : N;
  try {
    for (k3 = 0; k3 < N3.length; k3++) {
      const t10 = N3[k3];
      if (t10 && t10.active !== false) {
        if (n4(t10))
          continue;
        R2(t10, null, 14);
      }
    }
  } finally {
    k3 = 0, N3.length = 0, function(t10) {
      if (I3.length) {
        const r5 = [...new Set(I3)];
        if (I3.length = 0, x2)
          return void x2.push(...r5);
        for (x2 = r5, t10 = t10 || /* @__PURE__ */ new Map(), x2.sort((o8, s9) => G2(o8) - G2(s9)), V4 = 0; V4 < x2.length; V4++)
          Oe(t10, x2[V4]) || x2[V4]();
        x2 = null, V4 = 0;
      }
    }(e11), oe = false, ve = null, (N3.length || I3.length) && Be(e11);
  }
}
function Oe(e11, n4) {
  if (e11.has(n4)) {
    const t10 = e11.get(n4);
    if (t10 > hn) {
      const r5 = n4.ownerInstance, o8 = r5 && Le(r5.type);
      return d2(`Maximum recursive updates exceeded${o8 ? ` in component <${o8}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), true;
    }
    e11.set(n4, t10 + 1);
  } else
    e11.set(n4, 1);
}
var J3 = /* @__PURE__ */ new Set();
B().__VUE_HMR_RUNTIME__ = { createRecord: ie(function(e11, n4) {
  return Z6.has(e11) ? false : (Z6.set(e11, { initialDef: q3(n4), instances: /* @__PURE__ */ new Set() }), true);
}), rerender: ie(function(e11, n4) {
  const t10 = Z6.get(e11);
  t10 && (t10.initialDef.render = n4, [...t10.instances].forEach((r5) => {
    n4 && (r5.render = n4, q3(r5.type).render = n4), r5.renderCache = [], r5.update();
  }));
}), reload: ie(function(e11, n4) {
  const t10 = Z6.get(e11);
  if (!t10)
    return;
  n4 = q3(n4), Ce(t10.initialDef, n4);
  const r5 = [...t10.instances];
  for (const o8 of r5) {
    const s9 = q3(o8.type);
    J3.has(s9) || (s9 !== t10.initialDef && Ce(s9, n4), J3.add(s9)), o8.appContext.propsCache.delete(o8.type), o8.appContext.emitsCache.delete(o8.type), o8.appContext.optionsCache.delete(o8.type), o8.ceReload ? (J3.add(s9), o8.ceReload(n4.styles), J3.delete(s9)) : o8.parent ? me2(o8.parent.update) : o8.appContext.reload ? o8.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  qe(() => {
    for (const o8 of r5)
      J3.delete(q3(o8.type));
  });
}) };
var Z6 = /* @__PURE__ */ new Map();
function q3(e11) {
  return Qe(e11) ? e11.__vccOpts : e11;
}
function Ce(e11, n4) {
  z(e11, n4);
  for (const t10 in e11)
    t10 === "__file" || t10 in n4 || delete e11[t10];
}
function ie(e11) {
  return (n4, t10) => {
    try {
      return e11(n4, t10);
    } catch (r5) {
      console.error(r5), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
var b5 = null;
var ee3 = {};
function yn(e11, n4, t10) {
  const r5 = this.proxy, o8 = a(e11) ? e11.includes(".") ? function(a12, l8) {
    const u6 = l8.split(".");
    return () => {
      let f4 = a12;
      for (let y3 = 0; y3 < u6.length && f4; y3++)
        f4 = f4[u6[y3]];
      return f4;
    };
  }(r5, e11) : () => r5[e11] : e11.bind(r5, r5);
  let s9;
  l(n4) ? s9 = n4 : (s9 = n4.handler, t10 = n4);
  const c5 = F3;
  Fe(this);
  const i3 = function(a12, l8, { immediate: u6, deep: f4, flush: y3, onTrack: w5, onTrigger: Y3 } = w) {
    var H3;
    l8 || (u6 !== void 0 && d2('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), f4 !== void 0 && d2('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
    const Ee = (p10) => {
      d2("Invalid watch source: ", p10, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
    }, h3 = Bt() === ((H3 = F3) == null ? void 0 : H3.scope) ? F3 : null;
    let O2, z4, ce2 = false, L2 = false;
    if (v4(a12) ? (O2 = () => a12.value, ce2 = It(a12)) : G(a12) ? (O2 = () => a12, f4 = true) : p(a12) ? (L2 = true, ce2 = a12.some((p10) => G(p10) || It(p10)), O2 = () => a12.map((p10) => v4(p10) ? p10.value : G(p10) ? A4(p10) : l(p10) ? R2(p10, h3, 2) : void Ee(p10))) : l(a12) ? O2 = l8 ? () => R2(a12, h3, 2) : () => {
      if (!h3 || !h3.isUnmounted)
        return z4 && z4(), fe(a12, h3, 3, [Ne]);
    } : (O2 = N, Ee(a12)), l8 && f4) {
      const p10 = O2;
      O2 = () => A4(p10());
    }
    let Ne = (p10) => {
      z4 = _3.onStop = () => {
        R2(p10, h3, 4);
      };
    }, D3 = L2 ? new Array(a12.length).fill(ee3) : ee3;
    const S5 = () => {
      if (_3.active)
        if (l8) {
          const p10 = _3.run();
          (f4 || ce2 || (L2 ? p10.some((Xe, Ze) => V(Xe, D3[Ze])) : V(p10, D3))) && (z4 && z4(), fe(l8, h3, 3, [
            p10,
            // pass undefined as the old value when it's changed for the first time
            D3 === ee3 ? void 0 : L2 && D3[0] === ee3 ? [] : D3,
            Ne
          ]), D3 = p10);
        } else
          _3.run();
    };
    let Q3;
    S5.allowRecurse = !!l8, y3 === "sync" ? Q3 = S5 : y3 === "post" ? Q3 = () => Se(S5, h3 && h3.suspense) : (S5.pre = true, h3 && (S5.id = h3.uid), Q3 = () => me2(S5));
    const _3 = new Ft(O2, Q3);
    return _3.onTrack = w5, _3.onTrigger = Y3, l8 ? u6 ? S5() : D3 = _3.run() : y3 === "post" ? Se(_3.run.bind(_3), h3 && h3.suspense) : _3.run(), () => {
      _3.stop(), h3 && h3.scope && E(h3.scope.effects, _3);
    };
  }(o8, s9.bind(r5), t10);
  return c5 ? Fe(c5) : Sn(), i3;
}
function A4(e11, n4) {
  if (!r(e11) || e11.__v_skip || (n4 = n4 || /* @__PURE__ */ new Set()).has(e11))
    return e11;
  if (n4.add(e11), v4(e11))
    A4(e11.value, n4);
  else if (p(e11))
    for (let t10 = 0; t10 < e11.length; t10++)
      A4(e11[t10], n4);
  else if (A(e11) || v(e11))
    e11.forEach((t10) => {
      A4(t10, n4);
    });
  else if (D(e11))
    for (const t10 in e11)
      A4(e11[t10], n4);
  return e11;
}
var _n = Symbol.for("v-ndc");
var ge = (e11) => e11 ? 4 & e11.vnode.shapeFlag ? function(n4) {
  if (n4.exposed)
    return n4.exposeProxy || (n4.exposeProxy = new Proxy(Lt(Jt(n4.exposed)), { get: (t10, r5) => r5 in t10 ? t10[r5] : r5 in K2 ? K2[r5](n4) : void 0, has: (t10, r5) => r5 in t10 || r5 in K2 }));
}(e11) || e11.proxy : ge(e11.parent) : null;
var K2 = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  z(/* @__PURE__ */ Object.create(null), { $: (e11) => e11, $el: (e11) => e11.vnode.el, $data: (e11) => e11.data, $props: (e11) => true ? Gt(e11.props) : e11.props, $attrs: (e11) => true ? Gt(e11.attrs) : e11.attrs, $slots: (e11) => true ? Gt(e11.slots) : e11.slots, $refs: (e11) => true ? Gt(e11.refs) : e11.refs, $parent: (e11) => ge(e11.parent), $root: (e11) => ge(e11.root), $emit: (e11) => e11.emit, $options: (e11) => function(n4) {
    const t10 = n4.type, { mixins: r5, extends: o8 } = t10, { mixins: s9, optionsCache: c5, config: { optionMergeStrategies: i3 } } = n4.appContext, a12 = c5.get(t10);
    let l8;
    return a12 ? l8 = a12 : s9.length || r5 || o8 ? (l8 = {}, s9.length && s9.forEach((u6) => re(l8, u6, i3, true)), re(l8, t10, i3)) : l8 = t10, r(t10) && c5.set(t10, l8), l8;
  }(e11), $forceUpdate: (e11) => e11.f || (e11.f = () => me2(e11.update)), $nextTick: (e11) => e11.n || (e11.n = gn.bind(e11.proxy)), $watch: (e11) => yn.bind(e11) })
);
var le = (e11, n4) => e11 !== w && !e11.__isScriptSetup && P(e11, n4);
var En = { get({ _: e11 }, n4) {
  const { ctx: t10, setupState: r5, data: o8, props: s9, accessCache: c5, type: i3, appContext: a12 } = e11;
  if (n4 === "__isVue")
    return true;
  let l8;
  if (n4[0] !== "$") {
    const w5 = c5[n4];
    if (w5 !== void 0)
      switch (w5) {
        case 1:
          return r5[n4];
        case 2:
          return o8[n4];
        case 4:
          return t10[n4];
        case 3:
          return s9[n4];
      }
    else {
      if (le(r5, n4))
        return c5[n4] = 1, r5[n4];
      if (o8 !== w && P(o8, n4))
        return c5[n4] = 2, o8[n4];
      if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (l8 = e11.propsOptions[0]) && P(l8, n4)
      )
        return c5[n4] = 3, s9[n4];
      if (t10 !== w && P(t10, n4))
        return c5[n4] = 4, t10[n4];
      c5[n4] = 0;
    }
  }
  const u6 = K2[n4];
  let f4, y3;
  return u6 ? (n4 === "$attrs" ? (l7(e11, "get", n4), "development") : n4 === "$slots" && l7(e11, "get", n4), u6(e11)) : (
    // css module (injected by vue-loader)
    (f4 = i3.__cssModules) && (f4 = f4[n4]) ? f4 : t10 !== w && P(t10, n4) ? (c5[n4] = 4, t10[n4]) : (
      // global properties
      (y3 = a12.config.globalProperties, P(y3, n4) ? y3[n4] : void (!b5 || a(n4) && // #1091 avoid internal isRef/isVNode checks on component instance leading
      // to infinite warning loop
      n4.indexOf("__v") === 0 || (o8 !== w && ((w5) => w5 === "_" || w5 === "$")(n4[0]) && P(o8, n4) ? d2(`Property ${JSON.stringify(n4)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e11 === b5 && d2(`Property ${JSON.stringify(n4)} was accessed during render but is not defined on instance.`))))
    )
  );
}, set({ _: e11 }, n4, t10) {
  const { data: r5, setupState: o8, ctx: s9 } = e11;
  return le(o8, n4) ? (o8[n4] = t10, true) : o8.__isScriptSetup && P(o8, n4) ? (d2(`Cannot mutate <script setup> binding "${n4}" from Options API.`), false) : r5 !== w && P(r5, n4) ? (r5[n4] = t10, true) : P(e11.props, n4) ? (d2(`Attempting to mutate prop "${n4}". Props are readonly.`), false) : n4[0] === "$" && n4.slice(1) in e11 ? (d2(`Attempting to mutate public property "${n4}". Properties starting with $ are reserved and readonly.`), false) : (n4 in e11.appContext.config.globalProperties ? Object.defineProperty(s9, n4, { enumerable: true, configurable: true, value: t10 }) : s9[n4] = t10, true);
}, has({ _: { data: e11, setupState: n4, accessCache: t10, ctx: r5, appContext: o8, propsOptions: s9 } }, c5) {
  let i3;
  return !!t10[c5] || e11 !== w && P(e11, c5) || le(n4, c5) || (i3 = s9[0]) && P(i3, c5) || P(r5, c5) || P(K2, c5) || P(o8.config.globalProperties, c5);
}, defineProperty(e11, n4, t10) {
  return t10.get != null ? e11._.accessCache[n4] = 0 : P(t10, "value") && this.set(e11, n4, t10.value, null), Reflect.defineProperty(e11, n4, t10);
} };
function jn() {
  return function() {
    const e11 = Dn();
    return e11 || d2("useContext() called without active instance."), e11.setupContext || (e11.setupContext = function(n4) {
      const t10 = (r5) => {
        if (n4.exposed && d2("expose() should be called only once per setup()."), r5 != null) {
          let o8 = typeof r5;
          o8 === "object" && (p(r5) ? o8 = "array" : v4(r5) && (o8 = "ref")), o8 !== "object" && d2(`expose() should be passed a plain object, received ${o8}.`);
        }
        n4.exposed = r5 || {};
      };
      return true ? Object.freeze({ get attrs() {
        return Te(n4);
      }, get slots() {
        return function(r5) {
          return r5.slotsProxy || (r5.slotsProxy = new Proxy(r5.slots, { get: (o8, s9) => (l7(r5, "get", "$slots"), o8[s9]) }));
        }(n4);
      }, get emit() {
        return (r5, ...o8) => n4.emit(r5, ...o8);
      }, expose: t10 }) : { get attrs() {
        return Te(n4);
      }, slots: n4.slots, emit: n4.emit, expose: t10 };
    }(e11));
  }().slots;
}
function Ve(e11) {
  return p(e11) ? e11.reduce((n4, t10) => (n4[t10] = null, n4), {}) : e11;
}
function re(e11, n4, t10, r5 = false) {
  const { mixins: o8, extends: s9 } = n4;
  s9 && re(e11, s9, t10, true), o8 && o8.forEach((c5) => re(e11, c5, t10, true));
  for (const c5 in n4)
    if (r5 && c5 === "expose")
      d2('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const i3 = Nn[c5] || t10 && t10[c5];
      e11[c5] = i3 ? i3(e11[c5], n4[c5]) : n4[c5];
    }
  return e11;
}
En.ownKeys = (e11) => (d2("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e11));
var Nn = {
  data: ke2,
  props: De,
  emits: De,
  // objects
  methods: B5,
  computed: B5,
  // lifecycle
  beforeCreate: v5,
  created: v5,
  beforeMount: v5,
  mounted: v5,
  beforeUpdate: v5,
  updated: v5,
  beforeDestroy: v5,
  beforeUnmount: v5,
  destroyed: v5,
  unmounted: v5,
  activated: v5,
  deactivated: v5,
  errorCaptured: v5,
  serverPrefetch: v5,
  // assets
  components: B5,
  directives: B5,
  // watch
  watch: function(e11, n4) {
    if (!e11)
      return n4;
    if (!n4)
      return e11;
    const t10 = z(/* @__PURE__ */ Object.create(null), e11);
    for (const r5 in n4)
      t10[r5] = v5(e11[r5], n4[r5]);
    return t10;
  },
  // provide / inject
  provide: ke2,
  inject: function(e11, n4) {
    return B5($e(e11), $e(n4));
  }
};
function ke2(e11, n4) {
  return n4 ? e11 ? function() {
    return z(l(e11) ? e11.call(this, this) : e11, l(n4) ? n4.call(this, this) : n4);
  } : n4 : e11;
}
function $e(e11) {
  if (p(e11)) {
    const n4 = {};
    for (let t10 = 0; t10 < e11.length; t10++)
      n4[e11[t10]] = e11[t10];
    return n4;
  }
  return e11;
}
function v5(e11, n4) {
  return e11 ? [...new Set([].concat(e11, n4))] : n4;
}
function B5(e11, n4) {
  return e11 ? z(/* @__PURE__ */ Object.create(null), e11, n4) : n4;
}
function De(e11, n4) {
  return e11 ? p(e11) && p(n4) ? [.../* @__PURE__ */ new Set([...e11, ...n4])] : z(
    /* @__PURE__ */ Object.create(null),
    Ve(e11),
    Ve(n4 ?? {})
  ) : n4;
}
var Se = function(e11, n4) {
  n4 && n4.pendingBranch ? p(e11) ? n4.effects.push(...e11) : n4.effects.push(e11) : qe(e11);
};
var Ke = Symbol.for("v-fgt");
var xn = Symbol.for("v-txt");
var wn = Symbol.for("v-cmt");
var F3 = null;
var Dn = () => F3 || b5;
var _e;
var j3;
var Re = "__VUE_INSTANCE_SETTERS__";
(j3 = B()[Re]) || (j3 = B()[Re] = []), j3.push((e11) => F3 = e11), _e = (e11) => {
  j3.length > 1 ? j3.forEach((n4) => n4(e11)) : j3[0](e11);
};
var Fe = (e11) => {
  _e(e11), e11.scope.on();
};
var Sn = () => {
  F3 && F3.scope.off(), _e(null);
};
function Te(e11) {
  return e11.attrsProxy || (e11.attrsProxy = new Proxy(e11.attrs, true ? { get: (n4, t10) => (l7(e11, "get", "$attrs"), n4[t10]), set: () => (d2("setupContext.attrs is readonly."), false), deleteProperty: () => (d2("setupContext.attrs is readonly."), false) } : { get: (n4, t10) => (l7(e11, "get", "$attrs"), n4[t10]) }));
}
var Pn = /(?:^|[-_])(\w)/g;
var Rn = (e11) => e11.replace(Pn, (n4) => n4.toUpperCase()).replace(/[-_]/g, "");
function Le(e11, n4 = true) {
  return l(e11) ? e11.displayName || e11.name : e11.name || n4 && e11.__name;
}
function je(e11, n4, t10 = false) {
  let r5 = Le(n4);
  if (!r5 && n4.__file) {
    const o8 = n4.__file.match(/([^/\\]+)\.\w+$/);
    o8 && (r5 = o8[1]);
  }
  if (!r5 && e11 && e11.parent) {
    const o8 = (s9) => {
      for (const c5 in s9)
        if (s9[c5] === n4)
          return c5;
    };
    r5 = o8(e11.components || e11.parent.type.components) || o8(e11.appContext.components);
  }
  return r5 ? Rn(r5) : t10 ? "App" : "Anonymous";
}
function Qe(e11) {
  return l(e11) && "__vccOpts" in e11;
}

// node_modules/sss-ui-plus/es/packages/SCascader/src/cascader.vue.mjs
var A5 = defineComponent({ __name: "cascader", props: { ...l6 }, emits: { ...o6 }, setup(v8, { expose: g3, emit: a12 }) {
  const e11 = v8, y3 = jn(), t10 = ref(void 0), d5 = ref(void 0), p10 = ref([]), u6 = () => t10.value.close(), C3 = () => {
    u6();
  };
  return g3({ close: u6, open: () => t10.value.open(), toggle: () => t10.value.toggle() }), (h3, o8) => (openBlock(), createBlock(unref(s5), { ref_key: "dropdown", ref: t10, class: normalizeClass(`sss-cascader-${e11.subCascaderPlacement}`), trigger: e11.trigger, placement: e11.placement, transition: e11.transition, "open-delay": e11.openDelay, "close-delay": e11.closeDelay, disabled: e11.disabled, offset: e11.offset, theme: e11.theme, "close-on-click-body": e11.closeOnClickBody, "open-on-mounted": e11.openOnMounted, teleported: e11.teleported, "show-arrow": e11.showArrow, expression: e11.expression, "floating-class": e11.floatingClass, reference: e11.reference, "quick-track": e11.quickTrack, "scrollbar-vertical": e11.scrollbarVertical, "scrollbar-horizontal": e11.scrollbarHorizontal, "scrollbar-no-resize": e11.scrollbarNoResize, "scrollbar-always": e11.scrollbarAlways, "scrollbar-is-outside": e11.scrollbarIsOutside, "scrollbar-quick-jump": e11.scrollbarQuickJump, center: e11.center, "close-on-click-item": e11.closeOnClickItem, prefix: e11.prefix, onOpen: o8[0] || (o8[0] = (l8) => a12("open")), onOpened: o8[1] || (o8[1] = (l8) => a12("opened")), onClose: o8[2] || (o8[2] = (l8) => a12("close")), onClosed: o8[3] || (o8[3] = (l8) => a12("closed")) }, createSlots({ default: withCtx(() => [createVNode(unref(A5), { ref_key: "subCascader", ref: d5, "floating-class": "sss-sub-cascader", trigger: "unset", options: p10.value, teleported: false, placement: e11.subCascaderPlacement, offset: 0, style: { height: "100%" } }, { default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(e11.options, (l8) => (openBlock(), createElementBlock(Fragment, null, [l8.children ? (openBlock(), createBlock(unref(e7), { key: 1, label: `${l8.label} >`, value: l8.value, onClick: (D3) => {
    return m5 = l8.children, p10.value = m5, void nextTick().then(() => {
      d5.value.open();
    });
    var m5;
  } }, null, 8, ["label", "value", "onClick"])) : (openBlock(), createBlock(unref(e7), { key: 0, label: l8.label, value: l8.value, onClick: C3 }, null, 8, ["label", "value"]))], 64))), 256))]), _: 1 }, 8, ["options", "placement"])]), _: 2 }, [unref(y3).default ? { name: "reference", fn: withCtx(() => [renderSlot(h3.$slots, "default")]), key: "0" } : void 0]), 1032, ["class", "trigger", "placement", "transition", "open-delay", "close-delay", "disabled", "offset", "theme", "close-on-click-body", "open-on-mounted", "teleported", "show-arrow", "expression", "floating-class", "reference", "quick-track", "scrollbar-vertical", "scrollbar-horizontal", "scrollbar-no-resize", "scrollbar-always", "scrollbar-is-outside", "scrollbar-quick-jump", "center", "close-on-click-item", "prefix"]));
} });

// node_modules/sss-ui-plus/es/packages/SCascader/index.mjs
A5.install = function(o8) {
  o8.component("SCascader", A5);
};

// node_modules/sss-ui-plus/es/packages/SSkeleton/src/skeleton.mjs
var e8 = { animated: Boolean, loading: { type: Boolean, default: true }, throttle: Number };

// node_modules/sss-ui-plus/es/packages/SSkeleton/src/skeleton.vue.mjs
var d3 = defineComponent({ name: "SSkeleton", inheritAttrs: false });
var c3 = defineComponent({ ...d3, props: { ...e8 }, setup(l8) {
  const e11 = l8;
  let o8;
  provide("hasSkeletonAnimation", e11.animated), provide("isWithinSkeleton", true);
  const t10 = ref(e11.loading);
  return watch(() => e11.loading, () => {
    clearTimeout(o8), e11.loading ? t10.value = true : o8 = setTimeout(() => {
      t10.value = false;
    }, e11.throttle);
  }), (a12, u6) => t10.value ? renderSlot(a12.$slots, "skeleton", { key: 0 }) : renderSlot(a12.$slots, "default", { key: 1 });
} });

// node_modules/sss-ui-plus/es/packages/SSkeleton/index.mjs
c3.install = function(o8) {
  o8.component("SSkeleton", c3);
};
var s7 = e(c3);

// node_modules/sss-ui-plus/es/packages/SSkeletonItem/src/skeletonItem.mjs
var e9 = { type: { type: String, default: "rectangle" }, isCircle: Boolean, isRound: Boolean };

// node_modules/sss-ui-plus/es/packages/SSkeletonItem/src/skeletonItem.vue.mjs
var h = { key: 0, viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg" };
var u4 = [createBaseVNode("path", { fill: "currentColor", d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z" }, null, -1)];
var x3 = defineComponent({ __name: "skeletonItem", props: { ...e9 }, setup(n4) {
  const e11 = n4, a12 = inject("hasSkeletonAnimation"), i3 = inject("isWithinSkeleton"), r5 = ref(void 0);
  if (i3 === void 0)
    throw SyntaxError("skeleton-item component should be within skeleton component");
  return (v8, w5) => (openBlock(), createElementBlock("div", { ref_key: "item", ref: r5, class: normalizeClass(["sss-skeleton-item", [{ "is-circle": e11.isCircle, "is-round": e11.isRound, animated: unref(a12) }, "sss-skeleton-item-image"]]) }, [e11.type === "image" ? (openBlock(), createElementBlock("svg", h, u4)) : createCommentVNode("", true)], 2));
} });

// node_modules/sss-ui-plus/es/packages/SSkeletonItem/index.mjs
x3.install = function(o8) {
  o8.component("SSkeletonItem", x3);
};
var s8 = e(x3);

// node_modules/sss-ui-plus/es/installer.mjs
var c4 = function(e11, o8) {
  (function(n4) {
    if (!n4)
      return;
    const { zIndex: r5 = 2e3 } = n4;
    new d(r5);
  })(o8);
  for (let n4 in packages_exports)
    e11.component(n4, Reflect.get(packages_exports, n4));
};

// node_modules/sss-ui-plus/es/src/utils/managers/LayoutManager.mjs
var e10 = Object.defineProperty;
var a10 = (i3, t10, s9) => t10 in i3 ? e10(i3, t10, { enumerable: true, configurable: true, writable: true, value: s9 }) : i3[t10] = s9;
var p9 = (i3, t10, s9) => (a10(i3, typeof t10 != "symbol" ? t10 + "" : t10, s9), s9);
var h2 = class {
  constructor(t10) {
    p9(this, "position");
    p9(this, "appList");
    this.position = t10, this.appList = [];
  }
  /**
     * @description 在尾部添加一个元素
     * @param el
     */
  push(t10) {
    this.appList.push(t10), this.update();
  }
  /**
     * @description 删除一个元素
     * @param el
     */
  delete(t10) {
    const s9 = this.appList.indexOf(t10);
    this.appList.splice(s9, 1), this.update();
  }
  /**
     * @description 下一个元素的位置
     */
  nextPos() {
    let t10 = 0;
    return this.appList.forEach((s9) => {
      t10 += parseInt(s9.getAttribute("data-space")) + s9.offsetHeight;
    }), t10;
  }
  getEl(t10) {
    return this.appList[t10];
  }
  getIndexOf(t10) {
    return this.appList.indexOf(t10);
  }
  /**
     * @description 更新元素位置
     * @protected
     */
  update() {
    this.position === "up" && this._layoutUp(), this.position === "down" && this._layoutDown();
  }
  _layoutUp() {
    let t10 = 0;
    this.appList.forEach((s9) => {
      t10 += parseInt(s9.getAttribute("data-space")), s9.style.bottom = `${t10}px`, t10 += s9.offsetHeight;
    });
  }
  _layoutDown() {
    let t10 = 0;
    this.appList.forEach((s9) => {
      t10 += parseInt(s9.getAttribute("data-space")), s9.style.top = `${t10}px`, t10 += s9.offsetHeight;
    });
  }
};

// node_modules/sss-ui-plus/es/src/utils/delay.mjs
var t9 = function(e11) {
  return new Promise((o8) => {
    setTimeout(() => {
      o8("ok");
    }, e11);
  });
};

// node_modules/sss-ui-plus/es/packages/SMessage/message.mjs
var o7 = new h2("down");
async function E4(t10) {
  const { timeout: n4 = 3e3, offset: c5 = 10 } = t10, s9 = createApp(ue, { type: t10.type, icon: t10.icon, title: t10.text, showHead: true, showClose: t10.showClose, transition: "msg", onClose() {
    var r5, m5;
    (m5 = (r5 = o7.getEl(o7.getIndexOf(e11) - 1)) == null ? void 0 : r5.firstElementChild) == null || m5.focus(), o7.delete(e11), t9(500).then(() => {
      a12.removeChild(e11), s9.unmount();
    });
  } }), e11 = document.createElement("div"), a12 = document.body, i3 = s9.mount(e11);
  g2(e11, c5), a12.appendChild(e11), i3.open(), o7.push(e11), n4 !== 0 && (await t9(n4), i3.close("system"));
}
var g2 = function(t10, n4) {
  t10.classList.add("pos-top-center"), t10.classList.add("sss-message-msg-container"), t10.setAttribute("data-space", n4.toString()), t10.style.top = `${o7.nextPos()}px`, t10.style.zIndex = new d().nextIndex().toString();
};

// node_modules/sss-ui-plus/es/packages/SMessage/notify.mjs
var m4 = new h2("down");
var r4 = new h2("down");
var f3 = new h2("up");
var d4 = new h2("up");
var a11 = function(t10, e11) {
  var l8, p10;
  const n4 = t10.getIndexOf(e11) - 1;
  (p10 = (l8 = t10.getEl(n4)) == null ? void 0 : l8.firstElementChild) == null || p10.focus();
};
async function v6(t10) {
  const { timeout: e11 = 3e3, placement: n4 = "top-right", offset: l8 = 10 } = t10, p10 = createApp(ue, { type: t10.type, icon: t10.icon, title: t10.title, text: t10.text, showHead: true, showBody: true, showClose: true, transition: n4 === "top-left" || n4 === "bottom-left" ? "notify-left" : "notify-right", onClose() {
    (function(o8, s9) {
      s9 === "top-right" ? (a11(m4, o8), m4.delete(o8)) : s9 === "bottom-right" ? (a11(f3, o8), f3.delete(o8)) : s9 === "top-left" ? (a11(r4, o8), r4.delete(o8)) : s9 === "bottom-left" && (a11(d4, o8), d4.delete(o8));
    })(i3, n4), t9(500).then(() => {
      u6.removeChild(i3), p10.unmount();
    });
  } }), i3 = document.createElement("div"), u6 = document.body, h3 = p10.mount(i3);
  w4(i3, n4, l8), u6.appendChild(i3), h3.open(), function(o8, s9) {
    s9 === "top-right" ? m4.push(o8) : s9 === "bottom-right" ? f3.push(o8) : s9 === "top-left" ? r4.push(o8) : s9 === "bottom-left" && d4.push(o8);
  }(i3, n4), e11 !== 0 && (await t9(e11), h3.close("system"));
}
var w4 = function(t10, e11, n4) {
  t10.classList.add(`pos-${e11}`), t10.setAttribute("data-space", n4.toString()), e11 === "top-right" ? t10.style.top = `${m4.nextPos()}px` : e11 === "top-left" ? t10.style.top = `${r4.nextPos()}px` : e11 === "bottom-right" ? t10.style.bottom = `${f3.nextPos()}px` : e11 === "bottom-left" && (t10.style.bottom = `${d4.nextPos()}px`), t10.classList.add("sss-message-notify-container"), t10.style.zIndex = new d().nextIndex().toString();
};

// node_modules/sss-ui-plus/es/packages/SMessage/confirm.mjs
function v7(e11) {
  return new Promise((l8, r5) => {
    const { showMark: t10 = true } = e11, c5 = createApp(ue, { type: e11.type, icon: e11.icon, title: e11.title, text: e11.text, draggable: e11.draggable, showHead: true, showFoot: true, showClose: true, transition: "confirm", confirmBtnText: e11.confirmBtnText, cancelBtnText: e11.cancelBtnText, top: e11.top, onClose(m5) {
      r5(m5), t10 && n4.close();
    }, onCancel() {
      r5("cancel"), t10 && n4.close();
    }, onConfirm() {
      t10 && n4.close(), l8("confirm");
    }, onOpen() {
      t10 && n4.open();
    }, onClosed() {
      n4.element.removeEventListener("click", s9), i3.removeChild(o8), c5.unmount();
    } }), o8 = document.createElement("div"), i3 = document.body, n4 = new m("cover"), s9 = function() {
      a12.close("mark");
    };
    n4.element.addEventListener("click", s9);
    const a12 = c5.mount(o8);
    u5(o8), o8.appendChild(n4.element), i3.appendChild(o8), a12.open();
  });
}
var u5 = function(e11) {
  e11.classList.add("sss-message-confirm-container"), e11.style.zIndex = new d().nextIndex().toString();
};
export {
  p4 as SButton,
  A5 as SCascader,
  a6 as SDialog,
  s3 as SDivider,
  s2 as SDrawer,
  s5 as SDropdown,
  e7 as SDropdownItem,
  a8 as SFloating,
  p3 as SIcon,
  s as SInput,
  p5 as SLink,
  s4 as SPopconfirm,
  p6 as SRow,
  s6 as SScrollbar,
  s7 as SSkeleton,
  s8 as SSkeletonItem,
  p7 as SSwitch,
  l5 as STooltip,
  v7 as confirm,
  c4 as default,
  E4 as message,
  v6 as notify
};
//# sourceMappingURL=sss-ui-plus_es_index.js.map
