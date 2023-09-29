import {
    o as Re,
    d as $,
    r as V,
    w as U,
    n as Se,
    a as c,
    c as L,
    m as K,
    b as pe,
    e as x,
    f as M,
    g as se,
    h as p,
    i as f,
    j as S,
    k as Le,
    u,
    l as _,
    p as G,
    t as D,
    q as k,
    T as Ee,
    s as z,
    v as Je,
    x as Cn,
    y as je,
    z as Tn,
    F as j,
    A as We,
    B as Me,
    C as yo,
    D as Mn,
    E as bo,
    G as In,
    H as An,
    I as ko,
    J as Ne,
    K as De,
    L as On,
    M as be,
    N as _e,
    O as bt,
    P as Ve,
    Q as $o,
    R as wo,
    S as _n,
    _ as En,
    U as me,
    V as ie,
    W as te,
    X as Qt,
    Y as I,
    Z as Nn,
    $ as xo,
    a0 as Zt,
    a1 as ce,
    a2 as ue,
    a3 as we,
    a4 as He,
    a5 as Ct,
    a6 as Dn,
    a7 as So,
    a8 as qe,
    a9 as Hn,
    aa as kt,
    ab as zn,
    ac as Po,
    ad as Vo,
    ae as Bo,
    af as Lo
} from "./framework.efcebf82.js";

const Co = {
    type: {type: String, default: "text"},
    modelValue: {type: String || Number || void 0},
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
}, To = {
    "update:modelValue": t => Re(t),
    clear: () => !0,
    input: t => Re(t),
    blur: t => t instanceof FocusEvent,
    focus: t => t instanceof FocusEvent
}, Mo = {
    target: String,
    tag: {type: String, default: "i"},
    for: String,
    rotating: Boolean,
    color: String,
    noPadding: Boolean
}, Io = $({name: "SIcon", inheritAttrs: !1}), ee = $({
    ...Io, props: {...Mo}, setup(t) {
        const e = t, n = V(null);
        return U(() => e.target, o => {
            o && Se().then(() => {
                e.noPadding && (n.value.style.padding = "0"), e.color && (n.value.style.color = e.color)
            })
        }, {immediate: !0}), (o, a) => e.target ? (c(), L(pe(e.tag), K({
            key: 0,
            ref_key: "icon",
            ref: n,
            for: e.for,
            class: ["s-icon iconfont", [{"is-rotating": e.rotating}, `sss-${o.target}`]]
        }, o.$attrs), null, 16, ["for", "class"])) : x("", !0)
    }
}), Q = function (t) {
    return t.install = function (e) {
        e.component(t.name) || e.component(t.name, t)
    }, t
};
ee.install = function (t) {
    t.component("SIcon", ee)
};
const Ao = Q(ee), Oo = {key: 0, class: "s-input__prefixSlot"},
    Eo = ["type", "id", "maxlength", "minlength", "placeholder", "disabled", "readonly", "autofocus"],
    No = ["data-overflow"], Do = {key: 4, class: "sss-input__suffixSlot"}, Ho = ["for"],
    zo = $({name: "SInput", inheritAttrs: !1}), Tt = $({
        ...zo, props: {...Co}, emits: {...To}, setup(t, {emit: e}) {
            const n = t, o = V(void 0), a = V(!1);
            let s = !0;
            const i = V(!1), l = V("default text"), r = V("error"), d = function (P, E) {
                    i.value = !0, l.value = P, r.value = E || "error"
                },
                h = M(() => n.modelValue !== void 0 && n.modelValue !== null && n.modelValue !== "" && n.showPassword && n.type === "password" && !n.disabled),
                y = M(() => n.modelValue !== void 0 && n.modelValue !== null && n.modelValue !== "" && n.clearable && !n.readonly && !n.disabled),
                v = M(() => n.modelValue === void 0 || n.modelValue === null ? "" : n.modelValue.toString()),
                b = function (P) {
                    if (n.readonly) return;
                    const E = P.target;
                    n.modelValue !== void 0 && n.modelValue !== null || (E.value = "", N(E)), a.value || (e("update:modelValue", E.value), e("input", E.value))
                }, g = function () {
                    const P = o.value;
                    e("update:modelValue", ""), e("input", ""), P.value = "", P.focus()
                }, w = function () {
                    const P = o.value;
                    P.type === "password" ? P.type = "text" : P.type = "password", setTimeout(() => {
                        P.setSelectionRange(P.value.length, P.value.length)
                    })
                }, m = function () {
                    a.value = !0
                }, B = function () {
                }, C = function () {
                    const P = o.value;
                    a.value = !1, e("update:modelValue", P.value), e("input", P.value)
                }, A = function () {
                    n.checkFunc && n.checkFunc(n.modelValue, d)
                }, T = function () {
                    i.value = !1
                }, N = function (P) {
                    s && (console.log("AT: ", P), console.log("ERROR: Missing binding value for element.")), s = !1
                }, O = function () {
                    o.value.value = v.value
                };
            return U(v, () => {
                O()
            }), se(() => {
                O()
            }), (P, E) => (c(), p("div", {class: z(["s-input", [{"is-disabled": n.disabled}]])}, [P.$slots.prefixSlot ? (c(), p("div", Oo, [f(P.$slots, "prefixSlot")])) : x("", !0), S(u(ee), {
                class: "s-input__prefixIcon",
                target: n.prefixIcon,
                type: "label",
                for: n.id,
                onMousedown: E[0] || (E[0] = Le(() => {
                }, ["prevent"]))
            }, null, 8, ["target", "for"]), _("input", K({
                ref_key: "inner",
                ref: o,
                class: "s-input__inner",
                type: n.type,
                id: n.id,
                maxlength: n.maxLength,
                minlength: n.minLength,
                placeholder: n.placeholder,
                disabled: n.disabled,
                readonly: n.readonly,
                autofocus: n.autofocus
            }, P.$attrs, {
                onInput: b,
                onFocus: T,
                onBlur: A,
                onCompositionstart: m,
                onCompositionupdate: B,
                onCompositionend: C
            }), null, 16, Eo), S(u(ee), {
                class: "s-input-suffixIcon",
                target: n.suffixIcon,
                type: "label",
                for: n.id,
                onMousedown: E[1] || (E[1] = Le(() => {
                }, ["prevent"]))
            }, null, 8, ["target", "for"]), P.showWordLimit ? (c(), p("label", {
                key: 1,
                class: "s-input__limitIcon",
                "data-overflow": v.value.length > n.maxLength
            }, [v.value.length > n.maxLength ? (c(), L(u(ee), {
                key: 0,
                target: "warning"
            })) : x("", !0), G(" " + D(v.value.length) + " / " + D(n.maxLength), 1)], 8, No)) : x("", !0), y.value ? (c(), L(u(ee), {
                key: 2,
                class: "s-input__closeIcon",
                target: "cricle-close",
                onClick: g,
                tabindex: "0",
                onMousedown: E[2] || (E[2] = Le(() => {
                }, ["prevent"]))
            })) : x("", !0), h.value ? (c(), L(u(ee), {
                key: 3,
                class: "s-input__eyeIcon",
                target: "eye",
                onClick: w,
                tabindex: "0",
                onMousedown: E[3] || (E[3] = Le(() => {
                }, ["prevent"]))
            })) : x("", !0), P.$slots.suffixSlot ? (c(), p("div", Do, [f(P.$slots, "suffixSlot")])) : x("", !0), S(Ee, {name: "sss-transition-down-fade"}, {
                default: k(() => [i.value ? (c(), p("label", {
                    key: 0,
                    class: "s-input__alert",
                    for: P.id
                }, [S(u(ee), {target: r.value}, null, 8, ["target"]), G(" " + D(l.value), 1)], 8, Ho)) : x("", !0)]), _: 1
            })], 2))
        }
    });
Tt.install = function (t) {
    t.component("SInput", Tt)
};
const Fo = Q(Tt), Ro = {
        type: {type: String, default: "default"},
        nativeType: {type: String, default: "button"},
        size: {type: String, default: "normal"},
        round: Boolean,
        circle: Boolean,
        disabled: Boolean,
        empty: Boolean,
        ghost: Boolean,
        loading: Boolean,
        prefixIcon: String,
        suffixIcon: String
    }, jo = {click: t => t instanceof Event}, Wo = ["disabled", "type"], qo = $({name: "SButton", inheritAttrs: !0}),
    Ue = $({
        ...qo, props: {...Ro}, emits: {...jo}, setup(t, {emit: e}) {
            const n = t;
            return (o, a) => (c(), p("button", {
                ref: "container",
                class: z(["s-button", [{
                    "is-round": n.round,
                    "is-circle": n.circle,
                    "is-disabled": n.disabled,
                    "is-loading": n.loading,
                    "is-empty": n.empty,
                    "is-ghost": n.ghost
                }, o.type ? `s-button--${n.type}` : "", o.size ? `s-button--${n.size}` : ""]]),
                onClick: a[0] || (a[0] = s => {
                    e("click", s)
                }),
                disabled: n.disabled || n.loading,
                type: n.nativeType
            }, [S(u(ee), {
                target: n.prefixIcon,
                "vertical-padding": 0
            }, null, 8, ["target"]), f(o.$slots, "default"), S(u(ee), {
                target: n.suffixIcon,
                "vertical-padding": 0
            }, null, 8, ["target"])], 10, Wo))
        }
    });
Ue.install = function (t) {
    t.component("SButton", Ue)
};
const Uo = Q(Ue), Yo = {
    type: {type: String, default: "default"},
    disabled: Boolean,
    underline: Boolean,
    href: String,
    jumpMethod: {type: String, default: "push"},
    prefixIcon: String,
    suffixIcon: String
}, Xo = ["href", "onClick"], Go = $({name: "SLink", inheritAttrs: !1}), Mt = $({
    ...Go, props: {...Yo}, setup(t) {
        const e = t, n = V(void 0), o = () => {
            e.href && !e.disabled && (e.jumpMethod === "push" ? window.location.href = e.href : e.jumpMethod === "replace" ? window.location.replace(e.href) : e.jumpMethod === "newView" && window.open(e.href))
        };
        return (a, s) => (c(), p("a", K({
            ref_key: "a",
            ref: n,
            class: "s-link",
            href: e.href
        }, a.$attrs, {
            class: [`s-link--${e.type}`, {
                "has-underline": e.underline && !e.disabled,
                "is-disabled": e.disabled
            }], onClick: Le(o, ["prevent"])
        }), [S(u(ee), {
            target: e.prefixIcon,
            class: "s-link__prefixIcon"
        }, null, 8, ["target"]), _("span", null, [f(a.$slots, "default")]), S(u(ee), {
            target: e.suffixIcon,
            class: "s-link__suffixIcon"
        }, null, 8, ["target"])], 16, Xo))
    }
});
Mt.install = function (t) {
    t.component("SLink", Mt)
};
const Ko = Q(Mt), Jo = {
        title: {type: String, default: "default title"},
        showCloseIcon: {type: Boolean, default: !0},
        cancelBtnText: String,
        confirmBtnText: String,
        btnSize: String,
        noHeader: Boolean,
        noBody: Boolean,
        noFooter: Boolean,
        transition: String,
        draggable: Boolean,
        top: {type: String, default: "20vh"},
        beforeClose: Function,
        showMark: {type: Boolean, default: !0},
        closeOnPressEscape: {type: Boolean, default: !0},
        closeOnClickMark: {type: Boolean, default: !0},
        lockScroll: {type: Boolean, default: !0},
        appendToBody: Boolean,
        modelValue: Boolean
    }, Qo = {
        "update:modelValue": t => !0,
        open: () => !0,
        opened: () => !0,
        close: t => Re(t),
        closed: () => !0,
        cancel: () => !0,
        confirm: () => !0,
        hidden: () => !0
    }, Zo = {
        type: String,
        icon: String,
        iconColor: String,
        title: {type: String, default: "default title"},
        text: String,
        transition: {type: String, default: "s-transition-downFade"},
        closeOnPressEscape: {type: Boolean, default: !0},
        draggable: Boolean,
        top: {type: String},
        noHeader: Boolean,
        noBody: Boolean,
        noFooter: Boolean,
        showCloseIcon: Boolean,
        cancelBtnText: {type: String, default: "取消"},
        confirmBtnText: {type: String, default: "确认"},
        btnSize: {type: String, default: "small"},
        beforeClose: Function
    }, es = {
        close: t => Re(t),
        closed: () => !0,
        open: () => !0,
        opened: () => !0,
        cancel: () => !0,
        confirm: () => !0,
        hidden: () => !0
    }, Fn = function (t = !1) {
        const e = V(t), n = function () {
            e.value = !1
        }, o = function () {
            e.value = !0
        };
        return {
            flag: e, setTrue: o, setFalse: n, toggle: function () {
                e.value ? n() : o()
            }
        }
    }, ts = (t, e, n) => {
        let o = {offsetX: 0, offsetY: 0};
        t instanceof HTMLElement && (t = V(t));
        const a = i => {
            const l = i.clientX, r = i.clientY, {offsetX: d, offsetY: h} = o, y = t.value.getBoundingClientRect(),
                v = y.left, b = y.top, g = y.width, w = y.height, m = document.documentElement.clientWidth,
                B = document.documentElement.clientHeight, C = -v + d, A = -b + h, T = m - v - g + d, N = B - b - w + h,
                O = E => {
                    const F = Math.min(Math.max(d + E.clientX - l, C), T), q = Math.min(Math.max(h + E.clientY - r, A), N);
                    o = {offsetX: F, offsetY: q}, t.value.style.transform = `translate(${F}px, ${q}px)`
                }, P = () => {
                    document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", P)
                };
            document.addEventListener("mousemove", O), document.addEventListener("mouseup", P)
        }, s = () => {
            e.value && t.value && e.value.removeEventListener("mousedown", a)
        };
        se(() => {
            Je(() => {
                n.value ? e.value && t.value && e.value.addEventListener("mousedown", a) : s()
            })
        }), Cn(() => {
            s()
        })
    }, hn = function (...t) {
        return function () {
            for (let e = 0; e < t.length; e++) t[e]()
        }
    }, Vt = function (t, e = 0, n) {
        let o = 0;
        return function (...a) {
            const s = new Date().getTime();
            s - o >= e && (o = s, t.apply(n, a))
        }
    }, ns = {class: "s-message"}, os = {class: "s-message__header__title"},
    ss = {key: 1, class: "s-message__body", ref: "body"}, as = {key: 0, class: "s-message__body__text"},
    ls = {key: 0, class: "s-message__footer--default"}, is = $({name: "SMessageBox", inheritAttrs: !1}), ze = $({
        ...is, props: {...Zo}, emits: {...es}, setup(t, {expose: e, emit: n}) {
            const o = t, a = V(null), s = V(void 0), i = V(void 0), l = V(void 0), r = M(() => o.icon ? o.icon : o.type);
            let {flag: d, setTrue: h, setFalse: y} = Fn(!1);
            ts(l, i, M(() => o.draggable));
            const v = hn(h, async () => {
                var B, C;
                n("open"), o.draggable && l.value.appendChild(s.value), await Se(), (B = s.value) == null || B.focus(), (C = a.value) == null || C.$el.focus()
            }), b = Vt(function (B = "system") {
                const C = function () {
                    g(), n("close", B)
                };
                (o.closeOnPressEscape || B !== "esc") && (o.beforeClose ? o.beforeClose(C) : C())
            }, 500), g = hn(y, () => {
                n("hidden")
            }), w = Vt(function () {
                g(), n("cancel")
            }, 500), m = Vt(function () {
                g(), n("confirm")
            }, 500);
            return e({
                open: v, close: b, hidden: g, toggle: function () {
                    d.value ? b("system") : v()
                }, cancel: w, confirm: m
            }), (B, C) => (c(), p(j, null, [S(Ee, {
                name: o.transition,
                onAfterEnter: C[2] || (C[2] = A => n("opened")),
                onAfterLeave: C[3] || (C[3] = A => n("closed"))
            }, {
                default: k(() => [je(_("div", K({
                    class: "s-message-box",
                    ref_key: "outer",
                    ref: s
                }, B.$attrs, {
                    tabindex: "0",
                    onKeydown: C[1] || (C[1] = Tn(A => u(b)("esc"), ["esc"])),
                    class: [`s-message-box--${o.type || "default"}`],
                    style: `top:${o.top}`
                }), [S(u(ee), {
                    target: r.value,
                    class: "s-message-box__icon"
                }, null, 8, ["target"]), _("div", ns, [o.noHeader ? x("", !0) : (c(), p("div", {
                    key: 0,
                    class: z(["s-message__header", [{"s-message__header--default": !B.$slots.header}]]),
                    ref_key: "header",
                    ref: i
                }, [B.$slots.header ? x("", !0) : (c(), p(j, {key: 0}, [_("h1", os, D(o.title), 1), o.showCloseIcon ? (c(), L(u(ee), {
                    key: 0,
                    ref_key: "closeIcon",
                    ref: a,
                    target: "close",
                    class: "s-message__header__icon",
                    tabindex: "0",
                    onClick: C[0] || (C[0] = A => u(b)("icon"))
                }, null, 512)) : x("", !0)], 64)), f(B.$slots, "header")], 2)), o.noBody ? x("", !0) : (c(), p("div", ss, [f(B.$slots, "default"), o.text ? (c(), p("div", as, D(o.text), 1)) : x("", !0)], 512)), o.noFooter ? x("", !0) : (c(), p("div", {
                    key: 2,
                    class: z(["s-message__footer", [{"s-message__footer--default": !B.$slots.footer}]]),
                    ref: "footer"
                }, [B.$slots.footer ? x("", !0) : (c(), p("div", ls, [S(u(Ue), {
                    size: o.btnSize,
                    type: "cyan",
                    ghost: "",
                    onClick: u(w)
                }, {default: k(() => [G(D(o.cancelBtnText), 1)]), _: 1}, 8, ["size", "onClick"]), S(u(Ue), {
                    size: o.btnSize,
                    type: "primary",
                    onClick: u(m)
                }, {
                    default: k(() => [G(D(o.confirmBtnText), 1)]),
                    _: 1
                }, 8, ["size", "onClick"])])), f(B.$slots, "footer")], 2))])], 16), [[We, u(d)]])]), _: 3
            }, 8, ["name"]), o.draggable ? (c(), p("div", {
                key: 0,
                ref_key: "drag",
                ref: l,
                style: Me(`top:${o.top}`),
                class: "s-message-draggable-container"
            }, null, 4)) : x("", !0)], 64))
        }
    });

function $t(t) {
    return In() ? (An(t), !0) : !1
}

function dt(t) {
    return typeof t == "function" ? t() : u(t)
}

const Rn = typeof window < "u", Ie = () => {
}, mn = rs();

function rs() {
    var t;
    return Rn && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent)
}

function cs(...t) {
    if (t.length !== 1) return yo(...t);
    const e = t[0];
    return typeof e == "function" ? Mn(bo(() => ({get: e, set: Ie}))) : V(e)
}

function H(t) {
    var e;
    const n = dt(t);
    return (e = n == null ? void 0 : n.$el) != null ? e : n
}

const en = Rn ? window : void 0;

function J(...t) {
    let e, n, o, a;
    if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, o, a] = t, e = en) : [e, n, o, a] = t, !e) return Ie;
    Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
    const s = [], i = () => {
            s.forEach(h => h()), s.length = 0
        }, l = (h, y, v, b) => (h.addEventListener(y, v, b), () => h.removeEventListener(y, v, b)),
        r = U(() => [H(e), dt(a)], ([h, y]) => {
            i(), h && s.push(...n.flatMap(v => o.map(b => l(h, v, b, y))))
        }, {immediate: !0, flush: "post"}), d = () => {
            r(), i()
        };
    return $t(d), d
}

function us() {
    const t = V(!1);
    return ko() && se(() => {
        t.value = !0
    }), t
}

function jn(t) {
    const e = us();
    return M(() => (e.value, !!t()))
}

var gn = Object.getOwnPropertySymbols, ds = Object.prototype.hasOwnProperty, ps = Object.prototype.propertyIsEnumerable,
    fs = (t, e) => {
        var n = {};
        for (var o in t) ds.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
        if (t != null && gn) for (var o of gn(t)) e.indexOf(o) < 0 && ps.call(t, o) && (n[o] = t[o]);
        return n
    };

function Wn(t, e, n = {}) {
    const o = n, {window: a = en} = o, s = fs(o, ["window"]);
    let i;
    const l = jn(() => a && "MutationObserver" in a), r = () => {
        i && (i.disconnect(), i = void 0)
    }, d = U(() => H(t), y => {
        r(), l.value && a && y && (i = new MutationObserver(e), i.observe(y, s))
    }, {immediate: !0}), h = () => {
        r(), d()
    };
    return $t(h), {isSupported: l, stop: h}
}

var yn = Object.getOwnPropertySymbols, vs = Object.prototype.hasOwnProperty, _s = Object.prototype.propertyIsEnumerable,
    hs = (t, e) => {
        var n = {};
        for (var o in t) vs.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
        if (t != null && yn) for (var o of yn(t)) e.indexOf(o) < 0 && _s.call(t, o) && (n[o] = t[o]);
        return n
    };

function ms(t, e, n = {}) {
    const o = n, {window: a = en} = o, s = hs(o, ["window"]);
    let i;
    const l = jn(() => a && "ResizeObserver" in a), r = () => {
        i && (i.disconnect(), i = void 0)
    }, d = M(() => Array.isArray(t) ? t.map(v => H(v)) : [H(t)]), h = U(d, v => {
        if (r(), l.value && a) {
            i = new ResizeObserver(e);
            for (const b of v) b && i.observe(b, s)
        }
    }, {immediate: !0, flush: "post", deep: !0}), y = () => {
        r(), h()
    };
    return $t(y), {isSupported: l, stop: y}
}

function qn(t) {
    const e = window.getComputedStyle(t);
    if (e.overflowX === "scroll" || e.overflowY === "scroll" || e.overflowX === "auto" && t.clientWidth < t.scrollWidth || e.overflowY === "auto" && t.clientHeight < t.scrollHeight) return !0;
    {
        const n = t.parentNode;
        return !n || n.tagName === "BODY" ? !1 : qn(n)
    }
}

function gs(t) {
    const e = t || window.event, n = e.target;
    return qn(n) ? !1 : e.touches.length > 1 ? !0 : (e.preventDefault && e.preventDefault(), !1)
}

function ys(t, e = !1) {
    const n = V(e);
    let o = null, a;
    U(cs(t), l => {
        if (l) {
            const r = l;
            a = r.style.overflow, n.value && (r.style.overflow = "hidden")
        }
    }, {immediate: !0});
    const s = () => {
        const l = dt(t);
        !l || n.value || (mn && (o = J(l, "touchmove", r => {
            gs(r)
        }, {passive: !1})), l.style.overflow = "hidden", n.value = !0)
    }, i = () => {
        const l = dt(t);
        !l || !n.value || (mn && (o == null || o()), l.style.overflow = a, n.value = !1)
    };
    return $t(i), M({
        get() {
            return n.value
        }, set(l) {
            l ? s() : i()
        }
    })
}

const bs = function (t) {
    let e;
    return new Proxy(t, {construct: (n, o) => e || (e = new n(...o))})
};
var ks = Object.defineProperty,
    $s = (t, e, n) => e in t ? ks(t, e, {enumerable: !0, configurable: !0, writable: !0, value: n}) : t[e] = n,
    ws = (t, e, n) => ($s(t, typeof e != "symbol" ? e + "" : e, n), n);
const Pe = bs(class {
    constructor(t = 2e3) {
        ws(this, "index"), this.index = t
    }

    nextIndex() {
        return this.index++
    }
});
var xs = Object.defineProperty,
    Ss = (t, e, n) => e in t ? xs(t, e, {enumerable: !0, configurable: !0, writable: !0, value: n}) : t[e] = n,
    It = (t, e, n) => (Ss(t, typeof e != "symbol" ? e + "" : e, n), n);
const Un = class At {
    constructor(e = "cover") {
        It(this, "element"), It(this, "flag"), this.element = document.createElement("div"), this.flag = !1, e === "cover" ? (this.element.classList.add("s-mark--cover"), this.element.style.zIndex = "-1") : e === "part" && this.element.classList.add("s-mark--part")
    }

    open() {
        this.flag || (this.flag = !0, this.element.animate(At.keyframes, {duration: 300, fill: "forwards"}))
    }

    close() {
        this.flag && (this.flag = !1, this.element.animate(At.keyframes, {
            duration: 300,
            fill: "forwards",
            direction: "reverse"
        }))
    }
};
It(Un, "keyframes", [{opacity: 0, display: "none"}, {opacity: 1, display: "unset"}]);
let Yn = Un;
const Xn = function (t, e) {
    const n = new Yn(e);
    let o = Ie;
    const a = U(() => t instanceof HTMLElement ? t : H(t), s => {
        o(), s && (s.appendChild(n.element), o = () => {
            s.removeChild(n.element), o = Ie
        })
    });
    return Ne(() => {
        a(), o()
    }), {mark: n.element, showMark: () => n.open(), hiddenMark: () => n.close()}
};
let Be = 0;
const Gn = function () {
    const t = document.body;
    return {
        lockScroll: function () {
            if (Be === 0) {
                const e = t.offsetWidth;
                t.style.overflowY = "hidden";
                const n = t.offsetWidth;
                t.style.width = `calc(100% - ${n - e}px)`
            }
            Be++
        }, unLockScroll: function () {
            Be--, Be <= 0 && (Be = 0), Be === 0 && (t.style.overflowY = "auto", t.style.width = "100%")
        }
    }
}, Ps = $({name: "SDialog", inheritAttrs: !1}), Ot = $({
    ...Ps, props: {...Jo}, emits: {...Qo}, setup(t, {expose: e, emit: n}) {
        const o = t, a = new Pe, s = V(null), i = V(null), l = V(o.modelValue);
        let r = !0;
        const {lockScroll: d, unLockScroll: h} = Gn(), {mark: y, hiddenMark: v, showMark: b} = Xn(i, "cover"),
            g = function () {
                l.value = !0, r = !0, n("update:modelValue", !0), n("open"), H(i).style.zIndex = a.nextIndex().toString(), o.lockScroll && d(), o.showMark && b()
            }, w = function (O) {
                n("close", O)
            }, m = function () {
                r = !1, n("hidden"), n("update:modelValue", !1), o.showMark && v()
            }, B = function () {
                n("cancel")
            }, C = function () {
                n("confirm")
            }, A = function () {
                n("opened")
            }, T = function () {
                o.lockScroll && h(), l.value = !1, n("closed")
            }, N = async function () {
                await Se(), s.value.open()
            };
        return U(() => o.modelValue, O => O ? N() : function () {
            if (r) return s.value.close("system"), void (r = !1);
            s.value.hidden()
        }()), se(() => {
            o.modelValue && N()
        }), o.closeOnClickMark && o.showMark && J(y, "click", () => {
            s.value.close("mark")
        }), e({
            open: () => s.value.open(),
            close: O => s.value.close(O),
            hidden: () => s.value.hidden(),
            toggle: () => s.value.toggle(),
            cancel: () => s.value.cancel(),
            confirm: () => s.value.confirm()
        }), (O, P) => (c(), L(On, {to: "body", disabled: !o.appendToBody}, [je(_("div", {
            ref_key: "container",
            ref: i,
            class: "s-message-dialog"
        }, [S(u(ze), K({
            ref_key: "msgBox",
            ref: s,
            transition: o.transition || "s-transition-fadeDown",
            title: o.title,
            "no-header": o.noHeader,
            "no-body": o.noBody,
            "no-footer": o.noFooter,
            "show-close-icon": o.showCloseIcon,
            "cancel-btn-text": o.cancelBtnText,
            "confirm-btn-text": o.confirmBtnText,
            "btn-size": o.btnSize,
            "close-on-press-escape": o.closeOnPressEscape,
            draggable: o.draggable,
            top: o.top,
            "before-close": o.beforeClose
        }, O.$attrs, {
            onCancel: B,
            onConfirm: C,
            onOpen: g,
            onOpened: A,
            onClose: w,
            onClosed: T,
            onHidden: m,
            class: "s-message-dialog__inner"
        }), De({_: 2}, [O.$slots.header ? {
            name: "header",
            fn: k(() => [f(O.$slots, "header")]),
            key: "0"
        } : void 0, O.$slots.default ? {
            name: "default",
            fn: k(() => [f(O.$slots, "default")]),
            key: "1"
        } : void 0, O.$slots.footer ? {
            name: "footer",
            fn: k(() => [f(O.$slots, "footer")]),
            key: "2"
        } : void 0]), 1040, ["transition", "title", "no-header", "no-body", "no-footer", "show-close-icon", "cancel-btn-text", "confirm-btn-text", "btn-size", "close-on-press-escape", "draggable", "top", "before-close"])], 512), [[We, l.value]])], 8, ["disabled"]))
    }
});
Ot.install = function (t) {
    t.component("SDialog", Ot)
};
const Vs = Q(Ot), Bs = {
    modelValue: {type: Boolean, default: !1},
    position: {type: String, default: "top"},
    transition: {type: String},
    title: {type: String, default: "default title"},
    closeOnPressEscape: {type: Boolean, default: !0},
    closeOnClickMark: {type: Boolean, default: !0},
    noHeader: Boolean,
    noBody: Boolean,
    noFooter: Boolean,
    showCloseIcon: {type: Boolean, default: !0},
    cancelBtnText: {type: String, default: "取消"},
    confirmBtnText: {type: String, default: "确认"},
    btnSize: {type: String, default: "small"},
    beforeClose: Function,
    showMark: {type: Boolean, default: !0},
    lockScroll: {type: Boolean, default: !0},
    appendToBody: Boolean
}, Ls = {
    "update:modelValue": t => !0,
    open: () => !0,
    opened: () => !0,
    close: t => Re(t),
    closed: () => !0,
    cancel: () => !0,
    confirm: () => !0,
    hidden: () => !0
}, Cs = $({name: "SDrawer", inheritAttrs: !1}), Et = $({
    ...Cs, props: {...Bs}, emits: {...Ls}, setup(t, {expose: e, emit: n}) {
        const o = t, a = new Pe, s = V(null), i = V(null), l = V(o.modelValue);
        let r = !0;
        const {lockScroll: d, unLockScroll: h} = Gn(), {mark: y, hiddenMark: v, showMark: b} = Xn(i, "cover"),
            g = M(() => {
                switch (o.position) {
                    case"top":
                        return "s-transition-fadeDown--completely";
                    case"right":
                        return "s-transition-fadeLeft--completely";
                    case"bottom":
                        return "s-transition-fadeUp--completely";
                    case"left":
                        return "s-transition-fadeRight--completely"
                }
            }), w = function () {
                l.value = !0, r = !0, n("update:modelValue", !0), n("open"), H(i).style.zIndex = a.nextIndex().toString(), o.lockScroll && d(), o.showMark && b()
            }, m = function (P) {
                n("close", P)
            }, B = function () {
                r = !1, n("hidden"), n("update:modelValue", !1), o.showMark && v()
            }, C = function () {
                n("cancel")
            }, A = function () {
                n("confirm")
            }, T = function () {
                n("opened")
            }, N = function () {
                o.lockScroll && h(), l.value = !1, n("closed")
            }, O = async function () {
                await Se(), s.value.open()
            };
        return U(() => o.modelValue, P => P ? O() : function () {
            if (r) return s.value.close("system"), void (r = !1);
            s.value.hidden()
        }()), se(() => {
            o.modelValue && O()
        }), o.closeOnClickMark && o.showMark && J(y, "click", () => {
            s.value.close("mark")
        }), e({
            open: () => s.value.open(),
            close: P => s.value.close(P),
            hidden: () => s.value.hidden(),
            toggle: () => s.value.toggle(),
            cancel: () => s.value.cancel(),
            confirm: () => s.value.confirm()
        }), (P, E) => (c(), L(On, {to: "body", disabled: o.appendToBody}, [je(_("div", {
            class: "s-drawer",
            ref_key: "container",
            ref: i
        }, [S(u(ze), K({
            class: ["s-drawer__inner", [`s-drawer__inner--${o.position}`]],
            ref_key: "msgBox",
            ref: s,
            transition: o.transition || g.value,
            title: o.title,
            "no-header": o.noHeader,
            "no-body": o.noBody,
            "no-footer": o.noFooter,
            "show-close-icon": o.showCloseIcon,
            "cancel-btn-text": o.cancelBtnText,
            "confirm-btn-text": o.confirmBtnText,
            "btn-size": o.btnSize,
            "close-on-press-escape": o.closeOnPressEscape,
            "before-close": o.beforeClose
        }, P.$attrs, {
            onCancel: C,
            onConfirm: A,
            onOpen: w,
            onOpened: T,
            onClose: m,
            onClosed: N,
            onHidden: B
        }), De({default: k(() => [f(P.$slots, "default")]), _: 2}, [P.$slots.header ? {
            name: "header",
            fn: k(() => [f(P.$slots, "header")]),
            key: "0"
        } : void 0, P.$slots.footer ? {
            name: "footer",
            fn: k(() => [f(P.$slots, "footer")]),
            key: "1"
        } : void 0]), 1040, ["class", "transition", "title", "no-header", "no-body", "no-footer", "show-close-icon", "cancel-btn-text", "confirm-btn-text", "btn-size", "close-on-press-escape", "before-close"])], 512), [[We, l.value]])], 8, ["disabled"]))
    }
});
Et.install = function (t) {
    t.component("SDrawer", Et)
};
const Ts = Q(Et), Ms = {
    gap: {type: Number, default: 0},
    vertical: {type: String, default: "center"},
    horizontal: {type: String, default: "center"},
    wrappable: Boolean
}, Is = $({name: "SRow", inheritAttrs: !1}), Nt = $({
    ...Is, props: {...Ms}, setup(t) {
        const e = t, n = M(() => ({
            gap: `${e.gap}px`,
            justifyContent: `${e.horizontal}`,
            alignItems: `${e.vertical}`,
            flexFlow: e.wrappable ? "wrap" : "nowrap"
        }));
        return (o, a) => (c(), p("div", K({class: "s-row", style: n.value}, o.$attrs), [f(o.$slots, "default")], 16))
    }
});
Nt.install = function (t) {
    t.component("SRow", Nt)
};
const As = Q(Nt), Os = {
    direction: {type: String, default: "horizontal"},
    type: {type: String, default: "solid"},
    text: String,
    contentPosition: {type: String, default: "center"},
    prefixIcon: String,
    suffixIcon: String,
    gap: {type: Number}
}, Es = $({name: "SDivider", inheritAttrs: !0}), Dt = $({
    ...Es, props: {...Os}, setup(t) {
        const e = t, n = V(void 0), o = V(void 0), a = be();
        return se(() => {
            const s = H(n);
            e.direction === "horizontal" ? (e.contentPosition === "start" ? s.style.left = "15px" : e.contentPosition === "center" && (s.style.left = "50%", s.style.transform = "translate(-50%,-50%)"), e.contentPosition === "end" ? s.style.right = "15px" : s.style.left = e.contentPosition, e.gap !== void 0 && (H(o).style.margin = e.gap - .5 + "px 0")) : e.direction === "vertical" && (e.contentPosition === "start" ? s.style.top = "15px" : e.contentPosition === "center" && (s.style.top = "50%", s.style.transform = "translate(-50%,-50%)"), e.contentPosition === "end" ? s.style.bottom = "15px" : s.style.top = e.contentPosition, e.gap !== void 0 && (H(o).style.margin = `0 ${e.gap - .5}px`))
        }), (s, i) => {
            const l = _e("s-icon");
            return c(), p("div", {
                ref_key: "divider",
                ref: o,
                class: z(["s-divider", [`s-divider--${e.type}`, `s-divider--${e.direction}`]])
            }, [_("span", {class: "s-divider__content", ref_key: "content", ref: n}, [S(l, {
                target: e.prefixIcon,
                "no-padding": ""
            }, null, 8, ["target"]), u(a).default ? f(s.$slots, "default", {key: 0}) : (c(), p(j, {key: 1}, [G(D(e.text), 1)], 64)), S(l, {
                target: e.suffixIcon,
                "no-padding": ""
            }, null, 8, ["target"])], 512)], 2)
        }
    }
});
Dt.install = function (t) {
    t.component("SDivider", Dt)
};
const Ns = Q(Dt), Ds = {
        inactiveText: String,
        activeText: String,
        inactiveIcon: String,
        activeIcon: String,
        triggerIcon: String,
        disabled: Boolean,
        inlineText: Boolean,
        modelValue: Boolean,
        rotating: Boolean,
        beforeChange: Function
    }, Hs = {"update:modelValue": t => !0, change: t => !0}, zs = $({
        __name: "switchTxt", props: {active: Boolean, txt: String}, setup(t) {
            const e = t, n = V(null),
                o = [{opacity: "0", transform: "translateX(15px)"}, {opacity: "1", transform: "translateX(0)"}],
                a = [{opacity: "0", transform: "translateX(-15px)"}, {opacity: "1", transform: "translateX(0)"}];
            return U(() => e.active, s => {
                const i = H(n);
                i && (s ? i.animate(o, {
                    duration: 200,
                    fill: "forwards",
                    easing: "linear"
                }) : i.animate(a, {duration: 200, fill: "forwards", easing: "linear"}))
            }, {immediate: !1}), (s, i) => (c(), p("span", {ref_key: "txt", ref: n}, D(e.txt), 513))
        }
    }), Fs = _("input", {class: "s-switch__input", type: "radio", placeholder: "ヾ(≧▽≦*)o"}, null, -1),
    Rs = {class: "s-switch__trigger is-round"}, js = $({name: "SSwitch", inheritAttrs: !1}), Ht = $({
        ...js, props: {...Ds}, emits: {...Hs}, setup(t, {emit: e}) {
            const n = t, o = M(() => n.modelValue ? n.activeText : n.inactiveText), a = () => {
                const s = () => {
                    n.loading || (n.modelValue ? (e("update:modelValue", !1), e("change", "off")) : (e("update:modelValue", !0), e("change", "on")))
                };
                n.beforeChange ? n.beforeChange(s) : s()
            };
            return (s, i) => {
                const l = _e("s-icon");
                return c(), p("div", {
                    class: z(["s-switch", [{"is-checked": n.modelValue, "is-disabled": n.disabled}]]),
                    onClick: a
                }, [Fs, n.inlineText ? x("", !0) : (c(), p("span", {
                    key: 0,
                    class: z(["s-switch__label s-switch__label--left", [{"is-active": !n.modelValue}]])
                }, [S(l, {
                    class: "s-switch__label__icon",
                    target: n.inactiveIcon
                }, null, 8, ["target"]), G(" " + D(n.inactiveText), 1)], 2)), _("div", K({class: "s-switch__inner is-round"}, s.$attrs), [_("span", Rs, [n.triggerIcon ? (c(), L(l, {
                    key: 0,
                    class: "s-switch__trigger__icon",
                    target: n.triggerIcon,
                    rotating: n.rotating
                }, null, 8, ["target", "rotating"])) : x("", !0)]), n.inlineText ? (c(), L(zs, {
                    key: 0,
                    class: "s-switch__text",
                    txt: o.value,
                    active: n.modelValue
                }, null, 8, ["txt", "active"])) : x("", !0)], 16), n.inlineText ? x("", !0) : (c(), p("span", {
                    key: 1,
                    class: z(["s-switch__label s-switch__label--right", [{"is-active": n.modelValue}]])
                }, [S(l, {
                    class: "s-switch__label__icon",
                    target: n.activeIcon
                }, null, 8, ["target"]), G(" " + D(n.activeText), 1)], 2))], 2)
            }
        }
    });
Ht.install = function (t) {
    t.component("SSwitch", Ht)
};
const Ws = Q(Ht), qs = {
    trigger: {type: String, default: "click"},
    placement: {type: String, default: "bottom"},
    offset: {type: Number, default: 5},
    transition: {type: String, default: "s-transition-fade"},
    openDelay: {type: Number, default: 0},
    closeDelay: {type: Number, default: 0},
    disabled: Boolean,
    closeOnClickBody: Boolean,
    openOnMounted: Boolean,
    teleported: {type: Boolean, default: !0},
    showArrow: Boolean,
    floatingClass: String,
    reference: Object,
    quickTrack: Boolean
}, Us = {open: () => !0, opened: () => !0, close: () => !0, closed: () => !0};

function Qe(t) {
    return t.split("-")[1]
}

function tn(t) {
    return t === "y" ? "height" : "width"
}

function $e(t) {
    return t.split("-")[0]
}

function Ze(t) {
    return ["top", "bottom"].includes($e(t)) ? "x" : "y"
}

function bn(t, e, n) {
    let {reference: o, floating: a} = t;
    const s = o.x + o.width / 2 - a.width / 2, i = o.y + o.height / 2 - a.height / 2, l = Ze(e), r = tn(l),
        d = o[r] / 2 - a[r] / 2, h = l === "x";
    let y;
    switch ($e(e)) {
        case"top":
            y = {x: s, y: o.y - a.height};
            break;
        case"bottom":
            y = {x: s, y: o.y + o.height};
            break;
        case"right":
            y = {x: o.x + o.width, y: i};
            break;
        case"left":
            y = {x: o.x - a.width, y: i};
            break;
        default:
            y = {x: o.x, y: o.y}
    }
    switch (Qe(e)) {
        case"start":
            y[l] -= d * (n && h ? -1 : 1);
            break;
        case"end":
            y[l] += d * (n && h ? -1 : 1)
    }
    return y
}

const Ys = async (t, e, n) => {
    const {placement: o = "bottom", strategy: a = "absolute", middleware: s = [], platform: i} = n,
        l = s.filter(Boolean), r = await (i.isRTL == null ? void 0 : i.isRTL(e));
    let d = await i.getElementRects({reference: t, floating: e, strategy: a}), {x: h, y} = bn(d, o, r), v = o, b = {},
        g = 0;
    for (let w = 0; w < l.length; w++) {
        const {name: m, fn: B} = l[w], {x: C, y: A, data: T, reset: N} = await B({
            x: h,
            y,
            initialPlacement: o,
            placement: v,
            strategy: a,
            middlewareData: b,
            rects: d,
            platform: i,
            elements: {reference: t, floating: e}
        });
        h = C ?? h, y = A ?? y, b = {
            ...b,
            [m]: {...b[m], ...T}
        }, N && g <= 50 && (g++, typeof N == "object" && (N.placement && (v = N.placement), N.rects && (d = N.rects === !0 ? await i.getElementRects({
            reference: t,
            floating: e,
            strategy: a
        }) : N.rects), {x: h, y} = bn(d, v, r)), w = -1)
    }
    return {x: h, y, placement: v, strategy: a, middlewareData: b}
};

function et(t, e) {
    return typeof t == "function" ? t(e) : t
}

function Kn(t) {
    return typeof t != "number" ? function (e) {
        return {top: 0, right: 0, bottom: 0, left: 0, ...e}
    }(t) : {top: t, right: t, bottom: t, left: t}
}

function pt(t) {
    return {...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height}
}

async function Jn(t, e) {
    var n;
    e === void 0 && (e = {});
    const {x: o, y: a, platform: s, rects: i, elements: l, strategy: r} = t, {
            boundary: d = "clippingAncestors",
            rootBoundary: h = "viewport",
            elementContext: y = "floating",
            altBoundary: v = !1,
            padding: b = 0
        } = et(e, t), g = Kn(b), w = l[v ? y === "floating" ? "reference" : "floating" : y],
        m = pt(await s.getClippingRect({
            element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
            boundary: d,
            rootBoundary: h,
            strategy: r
        })), B = y === "floating" ? {...i.floating, x: o, y: a} : i.reference,
        C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)),
        A = await (s.isElement == null ? void 0 : s.isElement(C)) && await (s.getScale == null ? void 0 : s.getScale(C)) || {
            x: 1,
            y: 1
        },
        T = pt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: B,
            offsetParent: C,
            strategy: r
        }) : B);
    return {
        top: (m.top - T.top + g.top) / A.y,
        bottom: (T.bottom - m.bottom + g.bottom) / A.y,
        left: (m.left - T.left + g.left) / A.x,
        right: (T.right - m.right + g.right) / A.x
    }
}

const zt = Math.min, Xs = Math.max;

function Ft(t, e, n) {
    return Xs(t, zt(e, n))
}

const Gs = t => ({
    name: "arrow", options: t, async fn(e) {
        const {x: n, y: o, placement: a, rects: s, platform: i, elements: l} = e, {
            element: r,
            padding: d = 0
        } = et(t, e) || {};
        if (r == null) return {};
        const h = Kn(d), y = {x: n, y: o}, v = Ze(a), b = tn(v), g = await i.getDimensions(r), w = v === "y",
            m = w ? "top" : "left", B = w ? "bottom" : "right", C = w ? "clientHeight" : "clientWidth",
            A = s.reference[b] + s.reference[v] - y[v] - s.floating[b], T = y[v] - s.reference[v],
            N = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(r));
        let O = N ? N[C] : 0;
        O && await (i.isElement == null ? void 0 : i.isElement(N)) || (O = l.floating[C] || s.floating[b]);
        const P = A / 2 - T / 2, E = O / 2 - g[b] / 2 - 1, F = zt(h[m], E), q = zt(h[B], E), W = F, X = O - g[b] - q,
            Y = O / 2 - g[b] / 2 + P, Z = Ft(W, Y, X),
            ne = Qe(a) != null && Y != Z && s.reference[b] / 2 - (Y < W ? F : q) - g[b] / 2 < 0 ? Y < W ? W - Y : X - Y : 0;
        return {[v]: y[v] - ne, data: {[v]: Z, centerOffset: Y - Z + ne}}
    }
}), Ks = ["top", "right", "bottom", "left"];
Ks.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const Js = {left: "right", right: "left", bottom: "top", top: "bottom"};

function ft(t) {
    return t.replace(/left|right|bottom|top/g, e => Js[e])
}

function Qs(t, e, n) {
    n === void 0 && (n = !1);
    const o = Qe(t), a = Ze(t), s = tn(a);
    let i = a === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
    return e.reference[s] > e.floating[s] && (i = ft(i)), {main: i, cross: ft(i)}
}

const Zs = {start: "end", end: "start"};

function Bt(t) {
    return t.replace(/start|end/g, e => Zs[e])
}

const ea = function (t) {
    return t === void 0 && (t = {}), {
        name: "flip", options: t, async fn(e) {
            var n;
            const {
                    placement: o,
                    middlewareData: a,
                    rects: s,
                    initialPlacement: i,
                    platform: l,
                    elements: r
                } = e, {
                    mainAxis: d = !0,
                    crossAxis: h = !0,
                    fallbackPlacements: y,
                    fallbackStrategy: v = "bestFit",
                    fallbackAxisSideDirection: b = "none",
                    flipAlignment: g = !0,
                    ...w
                } = et(t, e), m = $e(o), B = $e(i) === i, C = await (l.isRTL == null ? void 0 : l.isRTL(r.floating)),
                A = y || (B || !g ? [ft(i)] : function (W) {
                    const X = ft(W);
                    return [Bt(W), X, Bt(X)]
                }(i));
            y || b === "none" || A.push(...function (W, X, Y, Z) {
                const ne = Qe(W);
                let oe = function (de, Pt, ho) {
                    const fn = ["left", "right"], vn = ["right", "left"], mo = ["top", "bottom"],
                        go = ["bottom", "top"];
                    switch (de) {
                        case"top":
                        case"bottom":
                            return ho ? Pt ? vn : fn : Pt ? fn : vn;
                        case"left":
                        case"right":
                            return Pt ? mo : go;
                        default:
                            return []
                    }
                }($e(W), Y === "start", Z);
                return ne && (oe = oe.map(de => de + "-" + ne), X && (oe = oe.concat(oe.map(Bt)))), oe
            }(i, g, b, C));
            const T = [i, ...A], N = await Jn(e, w), O = [];
            let P = ((n = a.flip) == null ? void 0 : n.overflows) || [];
            if (d && O.push(N[m]), h) {
                const {main: W, cross: X} = Qs(o, s, C);
                O.push(N[W], N[X])
            }
            if (P = [...P, {placement: o, overflows: O}], !O.every(W => W <= 0)) {
                var E, F;
                const W = (((E = a.flip) == null ? void 0 : E.index) || 0) + 1, X = T[W];
                if (X) return {data: {index: W, overflows: P}, reset: {placement: X}};
                let Y = (F = P.filter(Z => Z.overflows[0] <= 0).sort((Z, ne) => Z.overflows[1] - ne.overflows[1])[0]) == null ? void 0 : F.placement;
                if (!Y) switch (v) {
                    case"bestFit": {
                        var q;
                        const Z = (q = P.map(ne => [ne.placement, ne.overflows.filter(oe => oe > 0).reduce((oe, de) => oe + de, 0)]).sort((ne, oe) => ne[1] - oe[1])[0]) == null ? void 0 : q[0];
                        Z && (Y = Z);
                        break
                    }
                    case"initialPlacement":
                        Y = i
                }
                if (o !== Y) return {reset: {placement: Y}}
            }
            return {}
        }
    }
}, ta = function (t) {
    return t === void 0 && (t = 0), {
        name: "offset", options: t, async fn(e) {
            const {x: n, y: o} = e, a = await async function (s, i) {
                const {placement: l, platform: r, elements: d} = s,
                    h = await (r.isRTL == null ? void 0 : r.isRTL(d.floating)), y = $e(l), v = Qe(l), b = Ze(l) === "x",
                    g = ["left", "top"].includes(y) ? -1 : 1, w = h && b ? -1 : 1, m = et(i, s);
                let {mainAxis: B, crossAxis: C, alignmentAxis: A} = typeof m == "number" ? {
                    mainAxis: m,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...m};
                return v && typeof A == "number" && (C = v === "end" ? -1 * A : A), b ? {
                    x: C * w,
                    y: B * g
                } : {x: B * g, y: C * w}
            }(e, t);
            return {x: n + a.x, y: o + a.y, data: a}
        }
    }
};

function na(t) {
    return t === "x" ? "y" : "x"
}

const oa = function (t) {
    return t === void 0 && (t = {}), {
        name: "shift", options: t, async fn(e) {
            const {x: n, y: o, placement: a} = e, {
                mainAxis: s = !0, crossAxis: i = !1, limiter: l = {
                    fn: m => {
                        let {x: B, y: C} = m;
                        return {x: B, y: C}
                    }
                }, ...r
            } = et(t, e), d = {x: n, y: o}, h = await Jn(e, r), y = Ze($e(a)), v = na(y);
            let b = d[y], g = d[v];
            if (s) {
                const m = y === "y" ? "bottom" : "right";
                b = Ft(b + h[y === "y" ? "top" : "left"], b, b - h[m])
            }
            if (i) {
                const m = v === "y" ? "bottom" : "right";
                g = Ft(g + h[v === "y" ? "top" : "left"], g, g - h[m])
            }
            const w = l.fn({...e, [y]: b, [v]: g});
            return {...w, data: {x: w.x - n, y: w.y - o}}
        }
    }
};

function ae(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window
}

function re(t) {
    return ae(t).getComputedStyle(t)
}

function Qn(t) {
    return t instanceof ae(t).Node
}

function ge(t) {
    return Qn(t) ? (t.nodeName || "").toLowerCase() : "#document"
}

function le(t) {
    return t instanceof HTMLElement || t instanceof ae(t).HTMLElement
}

function kn(t) {
    return typeof ShadowRoot < "u" && (t instanceof ae(t).ShadowRoot || t instanceof ShadowRoot)
}

function Ye(t) {
    const {overflow: e, overflowX: n, overflowY: o, display: a} = re(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(a)
}

function sa(t) {
    return ["table", "td", "th"].includes(ge(t))
}

function Rt(t) {
    const e = nn(), n = re(t);
    return n.transform !== "none" || n.perspective !== "none" || !!n.containerType && n.containerType !== "normal" || !e && !!n.backdropFilter && n.backdropFilter !== "none" || !e && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some(o => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some(o => (n.contain || "").includes(o))
}

function nn() {
    return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
}

function wt(t) {
    return ["html", "body", "#document"].includes(ge(t))
}

const jt = Math.min, Ce = Math.max, vt = Math.round, ot = Math.floor, ye = t => ({x: t, y: t});

function Zn(t) {
    const e = re(t);
    let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
    const a = le(t), s = a ? t.offsetWidth : n, i = a ? t.offsetHeight : o, l = vt(n) !== s || vt(o) !== i;
    return l && (n = s, o = i), {width: n, height: o, $: l}
}

function fe(t) {
    return t instanceof Element || t instanceof ae(t).Element
}

function on(t) {
    return fe(t) ? t : t.contextElement
}

function Te(t) {
    const e = on(t);
    if (!le(e)) return ye(1);
    const n = e.getBoundingClientRect(), {width: o, height: a, $: s} = Zn(e);
    let i = (s ? vt(n.width) : n.width) / o, l = (s ? vt(n.height) : n.height) / a;
    return i && Number.isFinite(i) || (i = 1), l && Number.isFinite(l) || (l = 1), {x: i, y: l}
}

const aa = ye(0);

function eo(t) {
    const e = ae(t);
    return nn() && e.visualViewport ? {x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop} : aa
}

function xe(t, e, n, o) {
    e === void 0 && (e = !1), n === void 0 && (n = !1);
    const a = t.getBoundingClientRect(), s = on(t);
    let i = ye(1);
    e && (o ? fe(o) && (i = Te(o)) : i = Te(t));
    const l = function (v, b, g) {
        return b === void 0 && (b = !1), !(!g || b && g !== ae(v)) && b
    }(s, n, o) ? eo(s) : ye(0);
    let r = (a.left + l.x) / i.x, d = (a.top + l.y) / i.y, h = a.width / i.x, y = a.height / i.y;
    if (s) {
        const v = ae(s), b = o && fe(o) ? ae(o) : o;
        let g = v.frameElement;
        for (; g && o && b !== v;) {
            const w = Te(g), m = g.getBoundingClientRect(), B = getComputedStyle(g),
                C = m.left + (g.clientLeft + parseFloat(B.paddingLeft)) * w.x,
                A = m.top + (g.clientTop + parseFloat(B.paddingTop)) * w.y;
            r *= w.x, d *= w.y, h *= w.x, y *= w.y, r += C, d += A, g = ae(g).frameElement
        }
    }
    return pt({width: h, height: y, x: r, y: d})
}

function xt(t) {
    return fe(t) ? {scrollLeft: t.scrollLeft, scrollTop: t.scrollTop} : {
        scrollLeft: t.pageXOffset,
        scrollTop: t.pageYOffset
    }
}

function ve(t) {
    var e;
    return (e = (Qn(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement
}

function to(t) {
    return xe(ve(t)).left + xt(t).scrollLeft
}

function Ae(t) {
    if (ge(t) === "html") return t;
    const e = t.assignedSlot || t.parentNode || kn(t) && t.host || ve(t);
    return kn(e) ? e.host : e
}

function no(t) {
    const e = Ae(t);
    return wt(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : le(e) && Ye(e) ? e : no(e)
}

function _t(t, e) {
    var n;
    e === void 0 && (e = []);
    const o = no(t), a = o === ((n = t.ownerDocument) == null ? void 0 : n.body), s = ae(o);
    return a ? e.concat(s, s.visualViewport || [], Ye(o) ? o : []) : e.concat(o, _t(o))
}

function $n(t, e, n) {
    let o;
    if (e === "viewport") o = function (a, s) {
        const i = ae(a), l = ve(a), r = i.visualViewport;
        let d = l.clientWidth, h = l.clientHeight, y = 0, v = 0;
        if (r) {
            d = r.width, h = r.height;
            const b = nn();
            (!b || b && s === "fixed") && (y = r.offsetLeft, v = r.offsetTop)
        }
        return {width: d, height: h, x: y, y: v}
    }(t, n); else if (e === "document") o = function (a) {
        const s = ve(a), i = xt(a), l = a.ownerDocument.body,
            r = Ce(s.scrollWidth, s.clientWidth, l.scrollWidth, l.clientWidth),
            d = Ce(s.scrollHeight, s.clientHeight, l.scrollHeight, l.clientHeight);
        let h = -i.scrollLeft + to(a);
        const y = -i.scrollTop;
        return re(l).direction === "rtl" && (h += Ce(s.clientWidth, l.clientWidth) - r), {width: r, height: d, x: h, y}
    }(ve(t)); else if (fe(e)) o = function (a, s) {
        const i = xe(a, !0, s === "fixed"), l = i.top + a.clientTop, r = i.left + a.clientLeft,
            d = le(a) ? Te(a) : ye(1);
        return {width: a.clientWidth * d.x, height: a.clientHeight * d.y, x: r * d.x, y: l * d.y}
    }(e, n); else {
        const a = eo(t);
        o = {...e, x: e.x - a.x, y: e.y - a.y}
    }
    return pt(o)
}

function oo(t, e) {
    const n = Ae(t);
    return !(n === e || !fe(n) || wt(n)) && (re(n).position === "fixed" || oo(n, e))
}

function la(t, e, n) {
    const o = le(e), a = ve(e), s = n === "fixed", i = xe(t, !0, s, e);
    let l = {scrollLeft: 0, scrollTop: 0};
    const r = ye(0);
    if (o || !o && !s) if ((ge(e) !== "body" || Ye(a)) && (l = xt(e)), le(e)) {
        const d = xe(e, !0, s, e);
        r.x = d.x + e.clientLeft, r.y = d.y + e.clientTop
    } else a && (r.x = to(a));
    return {x: i.left + l.scrollLeft - r.x, y: i.top + l.scrollTop - r.y, width: i.width, height: i.height}
}

function wn(t, e) {
    return le(t) && re(t).position !== "fixed" ? e ? e(t) : t.offsetParent : null
}

function xn(t, e) {
    const n = ae(t);
    if (!le(t)) return n;
    let o = wn(t, e);
    for (; o && sa(o) && re(o).position === "static";) o = wn(o, e);
    return o && (ge(o) === "html" || ge(o) === "body" && re(o).position === "static" && !Rt(o)) ? n : o || function (a) {
        let s = Ae(a);
        for (; le(s) && !wt(s);) {
            if (Rt(s)) return s;
            s = Ae(s)
        }
        return null
    }(t) || n
}

const ia = {
    convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
        let {rect: e, offsetParent: n, strategy: o} = t;
        const a = le(n), s = ve(n);
        if (n === s) return e;
        let i = {scrollLeft: 0, scrollTop: 0}, l = ye(1);
        const r = ye(0);
        if ((a || !a && o !== "fixed") && ((ge(n) !== "body" || Ye(s)) && (i = xt(n)), le(n))) {
            const d = xe(n);
            l = Te(n), r.x = d.x + n.clientLeft, r.y = d.y + n.clientTop
        }
        return {
            width: e.width * l.x,
            height: e.height * l.y,
            x: e.x * l.x - i.scrollLeft * l.x + r.x,
            y: e.y * l.y - i.scrollTop * l.y + r.y
        }
    }, getDocumentElement: ve, getClippingRect: function (t) {
        let {element: e, boundary: n, rootBoundary: o, strategy: a} = t;
        const s = [...n === "clippingAncestors" ? function (r, d) {
            const h = d.get(r);
            if (h) return h;
            let y = _t(r).filter(w => fe(w) && ge(w) !== "body"), v = null;
            const b = re(r).position === "fixed";
            let g = b ? Ae(r) : r;
            for (; fe(g) && !wt(g);) {
                const w = re(g), m = Rt(g);
                m || w.position !== "fixed" || (v = null), (b ? !m && !v : !m && w.position === "static" && v && ["absolute", "fixed"].includes(v.position) || Ye(g) && !m && oo(r, g)) ? y = y.filter(B => B !== g) : v = w, g = Ae(g)
            }
            return d.set(r, y), y
        }(e, this._c) : [].concat(n), o], i = s[0], l = s.reduce((r, d) => {
            const h = $n(e, d, a);
            return r.top = Ce(h.top, r.top), r.right = jt(h.right, r.right), r.bottom = jt(h.bottom, r.bottom), r.left = Ce(h.left, r.left), r
        }, $n(e, i, a));
        return {width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top}
    }, getOffsetParent: xn, getElementRects: async function (t) {
        let {reference: e, floating: n, strategy: o} = t;
        const a = this.getOffsetParent || xn, s = this.getDimensions;
        return {reference: la(e, await a(n), o), floating: {x: 0, y: 0, ...await s(n)}}
    }, getClientRects: function (t) {
        return Array.from(t.getClientRects())
    }, getDimensions: function (t) {
        return Zn(t)
    }, getScale: Te, isElement: fe, isRTL: function (t) {
        return getComputedStyle(t).direction === "rtl"
    }
};

function ra(t, e, n, o) {
    o === void 0 && (o = {});
    const {
        ancestorScroll: a = !0,
        ancestorResize: s = !0,
        elementResize: i = typeof ResizeObserver == "function",
        layoutShift: l = typeof IntersectionObserver == "function",
        animationFrame: r = !1
    } = o, d = on(t), h = a || s ? [...d ? _t(d) : [], ..._t(e)] : [];
    h.forEach(m => {
        a && m.addEventListener("scroll", n, {passive: !0}), s && m.addEventListener("resize", n)
    });
    const y = d && l ? function (m, B) {
        let C, A = null;
        const T = ve(m);

        function N() {
            clearTimeout(C), A && A.disconnect(), A = null
        }

        return function O(P, E) {
            P === void 0 && (P = !1), E === void 0 && (E = 1), N();
            const {left: F, top: q, width: W, height: X} = m.getBoundingClientRect();
            if (P || B(), !W || !X) return;
            const Y = {
                rootMargin: -ot(q) + "px " + -ot(T.clientWidth - (F + W)) + "px " + -ot(T.clientHeight - (q + X)) + "px " + -ot(F) + "px",
                threshold: Ce(0, jt(1, E)) || 1
            };
            let Z = !0;

            function ne(oe) {
                const de = oe[0].intersectionRatio;
                if (de !== E) {
                    if (!Z) return O();
                    de ? O(!1, de) : C = setTimeout(() => {
                        O(!1, 1e-7)
                    }, 100)
                }
                Z = !1
            }

            try {
                A = new IntersectionObserver(ne, {...Y, root: T.ownerDocument})
            } catch {
                A = new IntersectionObserver(ne, Y)
            }
            A.observe(m)
        }(!0), N
    }(d, n) : null;
    let v, b = -1, g = null;
    i && (g = new ResizeObserver(m => {
        let [B] = m;
        B && B.target === d && g && (g.unobserve(e), cancelAnimationFrame(b), b = requestAnimationFrame(() => {
            g && g.observe(e)
        })), n()
    }), d && !r && g.observe(d), g.observe(e));
    let w = r ? xe(t) : null;
    return r && function m() {
        const B = xe(t);
        !w || B.x === w.x && B.y === w.y && B.width === w.width && B.height === w.height || n(), w = B, v = requestAnimationFrame(m)
    }(), n(), () => {
        h.forEach(m => {
            a && m.removeEventListener("scroll", n), s && m.removeEventListener("resize", n)
        }), y && y(), g && g.disconnect(), g = null, r && cancelAnimationFrame(v)
    }
}

const ca = (t, e, n) => {
    const o = new Map, a = {platform: ia, ...n}, s = {...a.platform, _c: o};
    return Ys(t, e, {...a, platform: s})
};

function Wt(t) {
    var e;
    return (e = t == null ? void 0 : t.$el) != null ? e : t
}

function ua(t) {
    return {
        name: "arrow", options: t, fn(e) {
            const n = Wt(u(t.element));
            return n == null ? {} : Gs({element: n, padding: t.padding}).fn(e)
        }
    }
}

function so(t) {
    return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Sn(t, e) {
    const n = so(t);
    return Math.round(e * n) / n
}

function da(t, e, n) {
    n === void 0 && (n = {});
    const o = n.whileElementsMounted, a = M(() => {
            var P;
            return (P = u(n.open)) != null ? P : !0
        }), s = M(() => u(n.middleware)), i = M(() => {
            var P;
            return (P = u(n.placement)) != null ? P : "bottom"
        }), l = M(() => {
            var P;
            return (P = u(n.strategy)) != null ? P : "absolute"
        }), r = M(() => {
            var P;
            return (P = u(n.transform)) != null ? P : !0
        }), d = M(() => Wt(t.value)), h = M(() => Wt(e.value)), y = V(0), v = V(0), b = V(l.value), g = V(i.value),
        w = bt({}), m = V(!1), B = M(() => {
            const P = {position: b.value, left: "0", top: "0"};
            if (!h.value) return P;
            const E = Sn(h.value, y.value), F = Sn(h.value, v.value);
            return r.value ? {
                ...P,
                transform: "translate(" + E + "px, " + F + "px)", ...so(h.value) >= 1.5 && {willChange: "transform"}
            } : {position: b.value, left: E + "px", top: F + "px"}
        });
    let C;

    function A() {
        d.value == null || h.value == null || ca(d.value, h.value, {
            middleware: s.value,
            placement: i.value,
            strategy: l.value
        }).then(P => {
            y.value = P.x, v.value = P.y, b.value = P.strategy, g.value = P.placement, w.value = P.middlewareData, m.value = !0
        })
    }

    function T() {
        typeof C == "function" && (C(), C = void 0)
    }

    function N() {
        if (T(), o === void 0) {
            A();
            return
        }
        if (d.value != null && h.value != null) {
            C = o(d.value, h.value, A);
            return
        }
    }

    function O() {
        a.value || (m.value = !1)
    }

    return U([s, i, l], A, {flush: "sync"}), U([d, h], N, {flush: "sync"}), U(a, O, {flush: "sync"}), In() && An(T), {
        x: Ve(y),
        y: Ve(v),
        strategy: Ve(b),
        placement: Ve(g),
        middlewareData: Ve(w),
        isPositioned: Ve(m),
        floatingStyles: B,
        update: A
    }
}

const ao = $({
    setup(t, e) {
        const n = e.slots, o = $o();
        if (!n.default) return void wo();
        const a = n.default();
        let s, i;
        for (let l = 0; l < a.length; l++) {
            const r = a[l];
            if (r.type !== Symbol.for("v-cmt")) {
                s = r;
                break
            }
        }
        if (s) {
            for (; s && typeof s.type == "symbol";) {
                let l = 0;
                if (s.type === Symbol.for("v-txt")) {
                    s = _n("span", {...o}, [s]);
                    break
                }
                for (; s.type === Symbol.for("v-cmt") && l < i.children.length;) s = i.children[++l];
                l === 0 && (i = s, s = s.children[0])
            }
            if (s) return () => _n(s, {...o})
        }
    }, name: "SPartial"
}), pa = ["data-placement"], fa = $({name: "SFloating", inheritAttrs: !1}), Oe = $({
    ...fa, props: {...qs}, emits: {...Us}, setup(t, {expose: e, emit: n}) {
        const o = t, a = be(), s = new Pe, i = a.reference ? V(null) : M(() => V(H(o.reference)).value), l = V(null),
            r = V(null), {
                floatingStyles: d,
                placement: h,
                middlewareData: y,
                update: v
            } = da(i, l, {
                placement: o.placement,
                whileElementsMounted: ra,
                middleware: [ta(o.offset), ea(), oa(), ua({element: r})]
            }), {flag: b, setTrue: g, setFalse: w} = Fn(!1);
        let m;
        const B = M(() => b.value ? (m = d.value, d.value) : m);
        let C, A;
        const T = () => {
            clearTimeout(C), clearTimeout(A), b.value || o.disabled || (C = setTimeout(() => {
                g(), l.value.style.zIndex = s.nextIndex().toString(), n("open")
            }, o.openDelay))
        }, N = () => {
            clearTimeout(C), clearTimeout(A), b.value && (A = setTimeout(() => {
                w(), n("close")
            }, o.closeDelay))
        }, O = () => {
            b.value ? N() : T()
        }, P = V({left: void 0, top: void 0, transform: "translate3d(0,0,0)"});
        if (o.showArrow && U(() => y.value.arrow, E => {
            const F = r.value, {x: q, y: W} = E;
            F && (P.value.left = `${q}px`, P.value.top = `${W}px`)
        }), o.quickTrack && Wn(i, () => {
            v()
        }, {attributes: !0}), o.closeOnClickBody) {
            let E;
            J(document.body, "mousedown", F => {
                b.value && (F.stopPropagation(), E = F.target)
            }), J(document.body, "mouseup", F => {
                if (!b.value) return;
                F.stopPropagation();
                const q = H(l), W = H(i);
                q.contains(E) || W.contains(E) || N()
            })
        }
        return o.trigger === "hover" && (J(i, "mouseenter", T), J(i, "mouseleave", N), J(l, "mouseenter", T), J(l, "mouseleave", N)), o.trigger === "click" && J(i, "click", O), o.trigger === "clickToOpen" && J(i, "click", T), o.trigger === "focus" && (J(i, "mousedown", T), J(document.body, "mouseup", N)), se(() => {
            En(() => import("./creatFloatingContainer.3e449d29.js"), ["assets/chunks/creatFloatingContainer.3e449d29.js", "assets/chunks/framework.efcebf82.js"]).then(() => {
                o.teleported && document.body.querySelector(".___sss-floating-container").appendChild(H(l))
            }), o.openOnMounted && T()
        }), Cn(() => {
            o.teleported && document.body.querySelector(".___sss-floating-container").removeChild(H(l))
        }), e({close: N, open: T, toggle: O}), (E, F) => (c(), p(j, null, [u(a).reference ? (c(), L(u(ao), {
            key: 0,
            ref_key: "reference",
            ref: i
        }, {default: k(() => [f(E.$slots, "reference")]), _: 3}, 512)) : x("", !0), _("div", {
            ref_key: "floating",
            ref: l,
            style: Me(B.value),
            class: z(o.floatingClass)
        }, [S(Ee, {
            name: o.transition,
            onAfterEnter: F[0] || (F[0] = q => n("opened")),
            onAfterLeave: F[1] || (F[1] = q => n("closed"))
        }, {
            default: k(() => [u(b) ? (c(), p("div", K({
                key: 0,
                class: "s-floating",
                "data-placement": u(h)
            }, E.$attrs), [f(E.$slots, "default"), o.showArrow ? (c(), p("div", {
                key: 0,
                ref_key: "_arrow",
                ref: r,
                class: "s-floating__arrow",
                style: Me(P.value)
            }, null, 4)) : x("", !0)], 16, pa)) : x("", !0)]), _: 3
        }, 8, ["name"])], 6)], 64))
    }
});
Oe.install = function (t) {
    t.component("SFloating", Oe)
};
const va = Q(Oe), _a = {
        trigger: {type: String, default: "hover"},
        placement: {type: String, default: "bottom"},
        offset: {type: Number, default: 10},
        transition: {type: String, default: "s-transition-scale"},
        openDelay: {type: Number, default: 50},
        closeDelay: {type: Number, default: 200},
        disabled: Boolean,
        closeOnClickBody: Boolean,
        openOnMounted: Boolean,
        teleported: {type: Boolean, default: !0},
        showArrow: {type: Boolean, default: !0},
        floatingClass: String,
        reference: Object,
        quickTrack: Boolean,
        content: String,
        theme: {type: String, default: "dark"}
    }, ha = {close: () => !0, closed: () => !0, open: () => !0, opened: () => !0},
    ma = $({name: "STooltip", inheritAttrs: !1}), qt = $({
        ...ma, props: {..._a}, emits: {...ha}, setup(t, {expose: e, emit: n}) {
            const o = t, a = be(), s = V(null);
            return e({
                close: () => s.value.close(),
                open: () => s.value.open(),
                toggle: () => s.value.toggle()
            }), (i, l) => (c(), L(u(Oe), K({
                ref_key: "floating",
                ref: s,
                trigger: o.trigger,
                placement: o.placement,
                transition: o.transition,
                "open-delay": o.openDelay,
                "close-delay": o.closeDelay,
                disabled: o.disabled,
                offset: o.offset,
                "close-on-click-body": o.closeOnClickBody,
                "open-on-mounted": o.openOnMounted,
                teleported: o.teleported,
                "show-arrow": o.showArrow,
                "floating-class": o.floatingClass,
                reference: o.reference,
                "quick-track": o.quickTrack
            }, i.$attrs, {
                onOpen: l[0] || (l[0] = r => n("open")),
                onOpened: l[1] || (l[1] = r => n("opened")),
                onClose: l[2] || (l[2] = r => n("close")),
                onClosed: l[3] || (l[3] = r => n("closed")),
                class: ["s-tooltip", `s-tooltip--${o.theme}`]
            }), De({
                default: k(() => [u(a).content ? f(i.$slots, "content", {key: 0}) : (c(), p(j, {key: 1}, [G(D(o.content), 1)], 64))]),
                _: 2
            }, [u(a).default ? {
                name: "reference",
                fn: k(() => [f(i.$slots, "default")]),
                key: "0"
            } : void 0]), 1040, ["trigger", "placement", "transition", "open-delay", "close-delay", "disabled", "offset", "close-on-click-body", "open-on-mounted", "teleported", "show-arrow", "floating-class", "reference", "quick-track", "class"]))
        }
    });
qt.install = function (t) {
    t.component("STooltip", qt)
};
const ga = Q(qt), ya = {
        trigger: {type: String, default: "clickToOpen"},
        placement: {type: String, default: "bottom"},
        offset: {type: Number, default: 10},
        transition: {type: String, default: "s-transition-scale"},
        openDelay: {type: Number, default: 0},
        closeDelay: {type: Number, default: 0},
        disabled: Boolean,
        closeOnClickBody: Boolean,
        openOnMounted: Boolean,
        teleported: {type: Boolean, default: !0},
        showArrow: {type: Boolean, default: !0},
        floatingClass: String,
        reference: Object,
        quickTrack: Boolean,
        content: String,
        type: String,
        cancelBtnText: {type: String, default: "取消"},
        confirmBtnText: {type: String, default: "确认"},
        icon: String,
        iconColor: String
    }, ba = {close: () => !0, closed: () => !0, open: () => !0, opened: () => !0, cancel: () => !0, confirm: () => !0},
    ka = $({name: "SPopconfirm", inheritAttrs: !1}), Ut = $({
        ...ka, props: {...ya}, emits: {...ba}, setup(t, {emit: e}) {
            const n = t, o = be(), a = V(void 0), s = V(void 0), i = () => {
                e("open"), Se().then(() => {
                    a.value.open()
                })
            }, l = () => {
                a.value.open(), s.value.close()
            }, r = () => {
                l(), e("close")
            }, d = () => {
                l(), e("cancel")
            }, h = () => {
                l(), e("confirm")
            };
            return (y, v) => (c(), L(u(Oe), K({
                class: "s-popconfirm",
                ref_key: "floating",
                ref: s,
                trigger: n.trigger,
                placement: n.placement,
                transition: n.transition,
                "open-delay": n.openDelay,
                "close-delay": n.closeDelay,
                disabled: n.disabled,
                offset: n.offset,
                "close-on-click-body": n.closeOnClickBody,
                "open-on-mounted": n.openOnMounted,
                teleported: n.teleported,
                "show-arrow": n.showArrow,
                "floating-class": n.floatingClass,
                reference: n.reference,
                "quick-track": n.quickTrack
            }, y.$attrs, {
                onOpen: i,
                onOpened: v[0] || (v[0] = b => e("opened")),
                onClose: v[1] || (v[1] = b => e("close")),
                onClosed: v[2] || (v[2] = b => e("closed"))
            }), De({
                default: k(() => [S(u(ze), {
                    class: "s-popconfirm__inner",
                    ref_key: "msgBox",
                    ref: a,
                    transition: n.transition,
                    type: n.type,
                    "cancel-btn-text": n.cancelBtnText,
                    "confirm-btn-text": n.confirmBtnText,
                    title: n.content,
                    icon: n.icon,
                    "icon-color": n.iconColor,
                    onClose: r,
                    onCancel: d,
                    onConfirm: h
                }, null, 8, ["transition", "type", "cancel-btn-text", "confirm-btn-text", "title", "icon", "icon-color"])]),
                _: 2
            }, [u(o).default ? {
                name: "reference",
                fn: k(() => [f(y.$slots, "default")]),
                key: "0"
            } : void 0]), 1040, ["trigger", "placement", "transition", "open-delay", "close-delay", "disabled", "offset", "close-on-click-body", "open-on-mounted", "teleported", "show-arrow", "floating-class", "reference", "quick-track"]))
        }
    });
Ut.install = function (t) {
    t.component("SPopconfirm", Ut)
};
const $a = Q(Ut), wa = {
        trigger: {type: String, default: "click"},
        placement: {type: String, default: "bottom"},
        transition: {type: String, default: "s-transition-scale"},
        openDelay: {type: Number, default: 0},
        closeDelay: {type: Number, default: 0},
        disabled: Boolean,
        offset: {type: Number, default: 10},
        closeOnClickBody: Boolean,
        openOnMounted: Boolean,
        teleported: {type: Boolean, default: !0},
        showArrow: {type: Boolean, default: !0},
        floatingClass: String,
        reference: Object,
        quickTrack: Boolean,
        scrollbarVertical: {type: Boolean, default: !0},
        scrollbarHorizontal: Boolean,
        scrollbarNoResize: Boolean,
        scrollbarAlways: Boolean,
        scrollbarIsOutside: Boolean,
        scrollbarQuickJump: {type: Boolean, default: !0},
        center: Boolean,
        closeOnClickItem: {type: Boolean, default: !0},
        prefix: Array
    }, xa = {select: (t, e) => !0, open: () => !0, opened: () => !0, close: () => !0, closed: () => !0}, Sa = {
        vertical: {type: Boolean, default: !0},
        horizontal: Boolean,
        noResize: Boolean,
        always: Boolean,
        native: Boolean,
        isOutside: Boolean,
        quickJump: {type: Boolean, default: !0}
    }, Pa = {scroll: (t, e) => !0}, Va = ["data-always", "data-native"], Ba = $({name: "SScrollbar", inheritAttrs: !1}),
    Xe = $({
        ...Ba, props: {...Sa}, emits: {...Pa}, setup(t, {emit: e}) {
            const n = t, o = V(void 0), a = V(void 0), s = V(void 0), i = V(void 0), l = V(void 0), r = V(0);
            let d;
            const h = V({top: "0", right: "0", height: "0"}), y = V({bottom: "0", left: "0", width: "0"}),
                v = {x: 0, y: 0}, b = {x: 0, y: 0}, g = {x: 0, y: 0}, w = {x: 0, y: 0}, m = T => {
                    g.x = T.clientX, g.y = T.clientY, v.x = g.x - b.x, v.y = g.y - b.y;
                    const N = H(o), O = H(s), P = H(l), E = N.scrollHeight, F = N.scrollWidth, q = O.offsetHeight,
                        W = P.offsetWidth;
                    d === "thumbY" ? H(o).scrollTop = E * v.y / q + w.y : d === "thumbX" && (H(o).scrollLeft = F * v.x / W + w.x)
                }, B = T => {
                    if (T.target !== T.currentTarget) return;
                    T.stopPropagation();
                    const N = H(o), O = H(s), P = H(a), E = H(i), F = H(l), q = N.scrollHeight, W = N.scrollWidth,
                        X = O.offsetHeight, Y = F.offsetWidth;
                    v.y = T.clientY - O.getBoundingClientRect().top - P.offsetHeight / 2, v.x = T.clientX - F.getBoundingClientRect().left - E.offsetWidth / 2, v.y = Math.min(Math.max(0, v.y), O.offsetHeight - P.offsetHeight), v.x = Math.min(Math.max(0, v.x), F.offsetWidth - E.offsetWidth), d === "thumbY" ? H(o).scrollTop = q * v.y / X : d === "thumbX" && (H(o).scrollLeft = W * v.x / Y)
                }, C = () => {
                    if (n.native) return;
                    const T = H(o), N = H(s), O = H(l), {
                        scrollHeight: P,
                        scrollWidth: E,
                        offsetHeight: F,
                        offsetWidth: q
                    } = T, W = N.offsetHeight, X = O.offsetWidth, Y = F * W / P, Z = q * X / E;
                    H(s).style.opacity = Y === W ? "0" : "", H(l).style.opacity = Z === X ? "0" : "", h.value.height = `${Y}px`, y.value.width = `${Z}px`
                }, A = () => {
                    if (n.native) return;
                    const T = H(o), N = H(s), O = H(l), {scrollHeight: P, scrollWidth: E, scrollTop: F, scrollLeft: q} = T,
                        W = F * N.offsetHeight / P, X = q * O.offsetWidth / E;
                    h.value.top = `${W}px`, y.value.left = `${X}px`
                };
            return J(o, "scroll", () => {
                const T = H(o);
                A(), e("scroll", T.scrollLeft, T.scrollTop)
            }), n.quickJump && (J(s, "click", T => {
                d = "thumbY", B(T)
            }), J(l, "click", T => {
                d = "thumbX", B(T)
            })), n.noResize || ms(o, () => {
                A(), C()
            }), Wn(o, () => {
                A(), C()
            }, {attributes: !0, childList: !0, subtree: !0}), J(a, "mousedown", T => {
                b.y = T.clientY, w.y = H(o).scrollTop, d = "thumbY", r.value = 1, H(document.body).addEventListener("mousemove", m)
            }), J(i, "mousedown", T => {
                b.x = T.clientX, w.x = H(o).scrollLeft, d = "thumbX", r.value = 2, H(document.body).addEventListener("mousemove", m)
            }), J(document.body, "mouseup", () => {
                r.value = 0, H(document.body).removeEventListener("mousemove", m)
            }), (T, N) => (c(), p("div", K({
                class: "s-scrollbar",
                "data-always": n.always,
                "data-native": n.native
            }, T.$attrs), [_("div", {
                ref_key: "warp",
                ref: o,
                class: "s-scrollbar__warp"
            }, [f(T.$slots, "default")], 512), n.native ? x("", !0) : je((c(), p("div", {
                key: 0,
                ref_key: "barY",
                ref: s,
                class: z(["s-scrollbar__bar is-vertical", [{"is-outside": n.isOutside, "is-active": r.value === 1}]])
            }, [_("div", {
                ref_key: "thumbY",
                ref: a,
                class: "s-scrollbar__bar__thumb is-round",
                style: Me(h.value)
            }, null, 4)], 2)), [[We, n.vertical]]), n.native ? x("", !0) : je((c(), p("div", {
                key: 1,
                ref_key: "barX",
                ref: l,
                class: z(["s-scrollbar__bar is-horizontal", [{"is-outside": n.isOutside, "is-active": r.value === 2}]])
            }, [_("div", {
                ref_key: "thumbX",
                ref: i,
                class: "s-scrollbar__bar__thumb is-round",
                style: Me(y.value)
            }, null, 4)], 2)), [[We, n.horizontal]])], 16, Va))
        }
    });
Xe.install = function (t) {
    t.component("SScrollbar", Xe)
};
const La = Q(Xe), Ca = {class: "s-dropdown__inner"}, Ta = $({name: "SDropdown", inheritAttrs: !1}), ht = $({
    ...Ta, props: {...wa}, emits: {...xa}, setup(t, {expose: e, emit: n}) {
        const o = t, a = be(), s = V(null), i = () => s.value.close();
        return me("inDropdown", !0), me("isCenter", o.center), me("DropdownItemClick", l => {
            n("select", l, o.prefix)
        }), me("DropdownClose", () => {
            o.closeOnClickItem && i()
        }), e({
            close: i,
            open: () => s.value.open(),
            toggle: () => s.value.toggle()
        }), (l, r) => (c(), L(u(Oe), {
            ref_key: "floating",
            ref: s,
            class: "s-dropdown",
            trigger: o.trigger,
            placement: o.placement,
            transition: o.transition,
            "open-delay": o.openDelay,
            "close-delay": o.closeDelay,
            disabled: o.disabled,
            offset: o.offset,
            "close-on-click-body": o.closeOnClickBody,
            "open-on-mounted": o.openOnMounted,
            teleported: o.teleported,
            "show-arrow": o.showArrow,
            "floating-class": o.floatingClass,
            reference: o.reference,
            "quick-track": o.quickTrack,
            onOpen: r[0] || (r[0] = d => n("open")),
            onOpened: r[1] || (r[1] = d => n("opened")),
            onClose: r[2] || (r[2] = d => n("close")),
            onClosed: r[3] || (r[3] = d => n("closed"))
        }, De({
            default: k(() => [S(u(Xe), K({
                vertical: o.scrollbarVertical,
                horizontal: o.scrollbarHorizontal,
                "no-resize": o.scrollbarNoResize,
                always: o.scrollbarAlways,
                "is-outside": o.scrollbarIsOutside,
                "quick-jump": o.scrollbarQuickJump
            }, l.$attrs), {
                default: k(() => [_("ul", Ca, [f(l.$slots, "default")])]),
                _: 3
            }, 16, ["vertical", "horizontal", "no-resize", "always", "is-outside", "quick-jump"])]), _: 2
        }, [u(a).reference ? {
            name: "reference",
            fn: k(() => [f(l.$slots, "reference")]),
            key: "0"
        } : void 0]), 1032, ["trigger", "placement", "transition", "open-delay", "close-delay", "disabled", "offset", "close-on-click-body", "open-on-mounted", "teleported", "show-arrow", "floating-class", "reference", "quick-track"]))
    }
});
ht.install = function (t) {
    t.component("SDropdown", ht)
};
const Ma = Q(ht), Ia = {
        suffixIcon: String,
        prefixIcon: String,
        label: String,
        value: String,
        closeOnClick: {type: Boolean, default: !0},
        isActive: Boolean,
        disabled: Boolean,
        tag: {type: String, default: "span"},
        href: String,
        jumpMethod: {type: String, default: "push"}
    }, Aa = {select: t => !0, click: () => !0}, Oa = {key: 0}, Ea = {key: 1},
    Na = $({name: "SDropdownItem", inheritAttrs: !1}), Ge = $({
        ...Na, props: {...Ia}, emits: {...Aa}, setup(t, {emit: e}) {
            const n = t;
            ie("inDropdown");
            const o = ie("isCenter"), a = ie("DropdownItemClick"), s = ie("DropdownClose"), i = () => {
                a(n.value), e("select", n.value), e("click"), n.closeOnClick && !n.disabled && s()
            };
            return (l, r) => {
                var d;
                return c(), p("li", K({class: "s-dropdown__item"}, l.$attrs, {
                    class: [{
                        "is-active": n.isActive,
                        "is-disabled": n.disabled
                    }], onClick: i
                }), [n.label || (d = l.$slots) != null && d.default ? (c(), L(pe(n.tag), {
                    key: 0,
                    "data-center": u(o),
                    href: n.href,
                    jumpMethod: n.jumpMethod
                }, {
                    default: k(() => {
                        var h;
                        return [S(u(ee), {
                            target: n.prefixIcon,
                            style: {padding: "0"}
                        }, null, 8, ["target"]), (h = l.$slots) != null && h.default ? (c(), p("span", Oa, [f(l.$slots, "default")])) : (c(), p("span", Ea, D(n.label), 1)), S(u(ee), {
                            target: n.suffixIcon,
                            style: {padding: "0"}
                        }, null, 8, ["target"])]
                    }), _: 3
                }, 8, ["data-center", "href", "jumpMethod"])) : x("", !0)], 16)
            }
        }
    });
Ge.install = function (t) {
    t.component("SDropdownItem", Ge)
};
const Da = Q(Ge), Ha = {
        trigger: {type: String, default: "click"},
        placement: {type: String, default: "bottom"},
        transition: {type: String, default: "scale"},
        openDelay: {type: Number, default: 0},
        closeDelay: {type: Number, default: 0},
        disabled: Boolean,
        offset: {type: Number, default: 10},
        theme: {type: String, default: "light"},
        closeOnClickBody: Boolean,
        openOnMounted: Boolean,
        teleported: {type: Boolean, default: !0},
        showArrow: {type: Boolean, default: !0},
        type: String,
        cancelBtnText: {type: String, default: "取消"},
        confirmBtnType: {type: String, default: "确认"},
        title: String,
        floatingClass: String,
        reference: Object,
        quickTrack: Boolean,
        scrollbarVertical: {type: Boolean, default: !0},
        scrollbarHorizontal: Boolean,
        scrollbarNoResize: {type: Boolean, default: !0},
        scrollbarAlways: Boolean,
        scrollbarIsOutside: Boolean,
        scrollbarQuickJump: {type: Boolean, default: !0},
        center: Boolean,
        closeOnClickItem: {type: Boolean, default: !0},
        prefix: Array,
        options: {type: Object, default: []},
        subCascaderPlacement: {type: String, default: "right"}
    }, za = {select: (t, e) => !0, open: () => !0, opened: () => !0, close: () => !0, closed: () => !0},
    Fa = $({name: "SCascader", inheritAttrs: !1}), mt = $({
        ...Fa, props: {...Ha}, emits: {...za}, setup(t, {expose: e, emit: n}) {
            const o = t, a = be(), s = V(void 0), i = V(void 0), l = V([]), r = () => s.value.close(), d = () => {
                r()
            };
            return e({
                close: r,
                open: () => s.value.open(),
                toggle: () => s.value.toggle()
            }), (h, y) => (c(), L(ht, {
                ref_key: "dropdown",
                ref: s,
                class: z(`sss-cascader-${o.subCascaderPlacement}`),
                trigger: o.trigger,
                placement: o.placement,
                transition: o.transition,
                "open-delay": o.openDelay,
                "close-delay": o.closeDelay,
                disabled: o.disabled,
                offset: o.offset,
                theme: o.theme,
                "close-on-click-body": o.closeOnClickBody,
                "open-on-mounted": o.openOnMounted,
                teleported: o.teleported,
                "show-arrow": o.showArrow,
                "floating-class": o.floatingClass,
                reference: o.reference,
                "quick-track": o.quickTrack,
                "scrollbar-vertical": o.scrollbarVertical,
                "scrollbar-horizontal": o.scrollbarHorizontal,
                "scrollbar-no-resize": o.scrollbarNoResize,
                "scrollbar-always": o.scrollbarAlways,
                "scrollbar-is-outside": o.scrollbarIsOutside,
                "scrollbar-quick-jump": o.scrollbarQuickJump,
                center: o.center,
                "close-on-click-item": o.closeOnClickItem,
                prefix: o.prefix,
                onOpen: y[0] || (y[0] = v => n("open")),
                onOpened: y[1] || (y[1] = v => n("opened")),
                onClose: y[2] || (y[2] = v => n("close")),
                onClosed: y[3] || (y[3] = v => n("closed"))
            }, De({
                default: k(() => [S(u(mt), {
                    ref_key: "subCascader",
                    ref: i,
                    "floating-class": "sss-sub-cascader",
                    trigger: "unset",
                    options: l.value,
                    teleported: !1,
                    placement: o.subCascaderPlacement,
                    offset: 0,
                    style: {height: "100%"}
                }, {
                    default: k(() => [(c(!0), p(j, null, te(o.options, v => (c(), p(j, null, [v.children ? (c(), L(Ge, {
                        key: 1,
                        label: `${v.label} >`,
                        value: v.value,
                        onClick: b => {
                            return g = v.children, l.value = g, void Se().then(() => {
                                i.value.open()
                            });
                            var g
                        }
                    }, null, 8, ["label", "value", "onClick"])) : (c(), L(Ge, {
                        key: 0,
                        label: v.label,
                        value: v.value,
                        onClick: d
                    }, null, 8, ["label", "value"]))], 64))), 256))]), _: 1
                }, 8, ["options", "placement"])]), _: 2
            }, [u(a).default ? {
                name: "reference",
                fn: k(() => [f(h.$slots, "default")]),
                key: "0"
            } : void 0]), 1032, ["class", "trigger", "placement", "transition", "open-delay", "close-delay", "disabled", "offset", "theme", "close-on-click-body", "open-on-mounted", "teleported", "show-arrow", "floating-class", "reference", "quick-track", "scrollbar-vertical", "scrollbar-horizontal", "scrollbar-no-resize", "scrollbar-always", "scrollbar-is-outside", "scrollbar-quick-jump", "center", "close-on-click-item", "prefix"]))
        }
    });
mt.install = function (t) {
    t.component("SCascader", mt)
};
const Ra = Q(mt), ja = {animated: Boolean, loading: {type: Boolean, default: !0}, throttle: Number},
    Wa = $({name: "SSkeleton", inheritAttrs: !1}), Yt = $({
        ...Wa, props: {...ja}, setup(t) {
            const e = t;
            let n;
            me("hasSkeletonAnimation", e.animated), me("isWithinSkeleton", !0);
            const o = V(e.loading);
            return U(() => e.loading, () => {
                clearTimeout(n), e.loading ? o.value = !0 : n = setTimeout(() => {
                    o.value = !1
                }, e.throttle)
            }), (a, s) => o.value ? f(a.$slots, "skeleton", {key: 0}) : f(a.$slots, "default", {key: 1})
        }
    });
Yt.install = function (t) {
    t.component("SSkeleton", Yt)
};
const qa = Q(Yt), Ua = {type: {type: String, default: "rectangle"}, isCircle: Boolean, isRound: Boolean},
    Ya = {key: 0, viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg"}, Xa = [_("path", {
        fill: "currentColor",
        d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z"
    }, null, -1)], Ga = $({name: "SSkeletonItem", inheritAttrs: !1}), Xt = $({
        ...Ga, props: {...Ua}, setup(t) {
            const e = t, n = ie("hasSkeletonAnimation");
            ie("isWithinSkeleton");
            const o = V(void 0);
            return (a, s) => (c(), p("div", K({
                ref_key: "item",
                ref: o,
                class: ["s-skeleton__item", [{
                    "is-circle": e.isCircle,
                    "is-round": e.isRound,
                    animated: u(n),
                    "s-skeleton__item--image": e.type === "image"
                }]]
            }, a.$attrs), [e.type === "image" ? (c(), p("svg", Ya, Xa)) : x("", !0)], 16))
        }
    });
Xt.install = function (t) {
    t.component("SSkeletonItem", Xt)
};
const Ka = Q(Xt), Ja = {
    type: String,
    value: {type: [String, Number]},
    maxvalue: {type: [String, Number], default: 99},
    hidden: Boolean,
    empty: Boolean
};
var Qa = Object.defineProperty,
    Za = (t, e, n) => e in t ? Qa(t, e, {enumerable: !0, configurable: !0, writable: !0, value: n}) : t[e] = n,
    at = (t, e, n) => (Za(t, typeof e != "symbol" ? e + "" : e, n), n);

class lo {
    constructor(e = "primary") {
        at(this, "element"), at(this, "parent"), at(this, "type"), this.element = document.createElement("span"), this.element.classList.add("s-badge"), this.element.classList.add(`s-badge--${e}`), this.type = e, this.parent = null
    }

    getElement() {
        return this.element
    }

    mountTo(e) {
        this.parent || (this.parent = e, this.parent.classList.add("is-relative"), this.parent.appendChild(this.element))
    }

    unMount() {
        this.parent && (this.parent.removeChild(this.element), this.parent.classList.remove("is-relative"))
    }

    show() {
        this.element.classList.remove("is-invisible")
    }

    hidden() {
        this.element.classList.add("is-invisible")
    }

    setTxt(e) {
        this.element.innerText = e.toString()
    }
}

at(lo, "keyframes", [{transform: "scale(.7) translate(50%,-50%)"}, {}]);
const el = function (t, e) {
    const {value: n, type: o, isEmpty: a} = e, s = new lo(o);
    let i = Ie;
    a && s.getElement().classList.add("s-badge--empty");
    const l = U(() => t instanceof HTMLElement ? t : t.value ? H(t) : void 0, d => {
        i(), d && (s.mountTo(d), i = () => {
            s.unMount(), i = Ie
        })
    }, {immediate: !0}), r = U(() => n == null ? void 0 : n.value, d => {
        d != null && s.setTxt(d)
    }, {immediate: !0});
    return Ne(() => {
        i(), l(), r()
    }), {
        stop: () => {
            l(), i(), r()
        }, show: s.show.bind(s), hidden: s.hidden.bind(s), setTxt: s.setTxt.bind(s)
    }
}, tl = $({name: "SBadge", inheritAttrs: !1}), Gt = $({
    ...tl, props: {...Ja}, setup(t, {expose: e}) {
        const n = t, o = be();
        let a = V(null);
        const s = M(() => n.maxvalue !== void 0 && typeof n.value == "number" && n.value > n.maxvalue ? `${n.maxvalue}+` : n.value), {
            hidden: i,
            show: l,
            setTxt: r,
            stop: d
        } = el(a, {value: s, type: n.type, isEmpty: n.empty});
        return U(() => n.hidden, h => {
            h ? i() : l()
        }), e({hidden: i, show: l, setTxt: r, stop: d}), (h, y) => u(o).default ? (c(), L(u(ao), K({
            key: 0,
            ref_key: "target",
            ref: a
        }, h.$attrs, {class: {"s-badge--empty": n.empty}}), {
            default: k(() => [f(h.$slots, "default")]),
            _: 3
        }, 16, ["class"])) : (c(), p("span", {
            key: 1,
            ref_key: "target",
            ref: a,
            style: {display: "inline-block", width: "10px", height: "10px"}
        }, null, 512))
    }
});
Gt.install = function (t) {
    t.component("SBadge", Gt)
};
const nl = Q(Gt), Pn = {
    SInput: Fo,
    SButton: Uo,
    SIcon: Ao,
    SLink: Ko,
    SDrawer: Ts,
    SDialog: Vs,
    SRow: As,
    SDivider: Ns,
    SSwitch: Ws,
    SFloating: va,
    STooltip: ga,
    SPopconfirm: $a,
    SDropdown: Ma,
    SDropdownItem: Da,
    SScrollbar: La,
    SCascader: Ra,
    SSkeleton: qa,
    SSkeletonItem: Ka,
    SBadge: nl
};

function ol(t) {
    for (let e in Pn) {
        const n = Reflect.get(Pn, e);
        t.use(n)
    }
}

const gt = function (t) {
    return new Promise(e => {
        setTimeout(() => {
            e("ok")
        }, t)
    })
};
var sl = Object.defineProperty,
    al = (t, e, n) => e in t ? sl(t, e, {enumerable: !0, configurable: !0, writable: !0, value: n}) : t[e] = n,
    Vn = (t, e, n) => (al(t, typeof e != "symbol" ? e + "" : e, n), n);
let tt = class {
    constructor(e) {
        Vn(this, "position"), Vn(this, "appList"), this.position = e, this.appList = []
    }

    push(e) {
        this.appList.push(e), this.update()
    }

    delete(e) {
        const n = this.appList.indexOf(e);
        this.appList.splice(n, 1), this.update()
    }

    nextPos() {
        let e = 0;
        return this.appList.forEach(n => {
            e += parseInt(n.getAttribute("data-space")) + n.offsetHeight
        }), e
    }

    getEl(e) {
        return this.appList[e]
    }

    getIndexOf(e) {
        return this.appList.indexOf(e)
    }

    update() {
        this.position === "up" && this._layoutUp(), this.position === "down" && this._layoutDown()
    }

    _layoutUp() {
        let e = 0;
        this.appList.forEach(n => {
            e += parseInt(n.getAttribute("data-space")), n.style.bottom = `${e}px`, e += n.offsetHeight
        })
    }

    _layoutDown() {
        let e = 0;
        this.appList.forEach(n => {
            e += parseInt(n.getAttribute("data-space")), n.style.top = `${e}px`, e += n.offsetHeight
        })
    }
};
const Fe = new tt("down");

async function _p(t) {
    const {timeout: e = 3e3, offset: n = 10} = t, o = Qt(ze, {
        type: t.type,
        icon: t.icon,
        iconColor: t.color,
        title: t.text,
        showHead: !0,
        noFooter: !0,
        noBody: !0,
        showCloseIcon: t.showCloseIcon,
        transition: "s-transition-messageOnly",
        onClose() {
            var l, r;
            (r = (l = Fe.getEl(Fe.getIndexOf(a) - 1)) == null ? void 0 : l.firstElementChild) == null || r.focus(), Fe.delete(a), gt(500).then(() => {
                s.removeChild(a), o.unmount()
            })
        }
    }), a = document.createElement("div"), s = document.body, i = o.mount(a);
    ll(a, n), s.appendChild(a), i.open(), Fe.push(a), e !== 0 && (await gt(e), i.close("system"))
}

const ll = function (t, e) {
    t.classList.add("pos-top-center"), t.classList.add("s-message-container"), t.setAttribute("data-space", e.toString()), t.style.top = `${Fe.nextPos()}px`, t.style.zIndex = new Pe().nextIndex().toString()
}, lt = new tt("down"), it = new tt("down"), rt = new tt("up"), ct = new tt("up"), st = function (t, e) {
    var n, o;
    const a = t.getIndexOf(e) - 1;
    (o = (n = t.getEl(a)) == null ? void 0 : n.firstElementChild) == null || o.focus()
};

async function hp(t) {
    const {timeout: e = 3e3, placement: n = "top-right", offset: o = 10} = t, a = Qt(ze, {
        type: t.type,
        icon: t.icon,
        iconColor: t.color,
        title: t.title,
        text: t.text,
        noFooter: !0,
        showCloseIcon: !0,
        transition: n.includes("right") ? "s-transition-fadeLeft--completely" : "s-transition-fadeRight--completely",
        onClose() {
            (function (r, d) {
                d === "top-right" ? (st(lt, r), lt.delete(r)) : d === "bottom-right" ? (st(rt, r), rt.delete(r)) : d === "top-left" ? (st(it, r), it.delete(r)) : d === "bottom-left" && (st(ct, r), ct.delete(r))
            })(s, n), gt(500).then(() => {
                i.removeChild(s), a.unmount()
            })
        }
    }), s = document.createElement("div"), i = document.body, l = a.mount(s);
    il(s, n, o), i.appendChild(s), l.open(), function (r, d) {
        d === "top-right" ? lt.push(r) : d === "bottom-right" ? rt.push(r) : d === "top-left" ? it.push(r) : d === "bottom-left" && ct.push(r)
    }(s, n), e !== 0 && (await gt(e), l.close("system"))
}

const il = function (t, e, n) {
    t.classList.add(`pos-${e}`), t.setAttribute("data-space", n.toString()), e === "top-right" ? t.style.top = `${lt.nextPos()}px` : e === "top-left" ? t.style.top = `${it.nextPos()}px` : e === "bottom-right" ? t.style.bottom = `${rt.nextPos()}px` : e === "bottom-left" && (t.style.bottom = `${ct.nextPos()}px`), t.classList.add("s-notify-container"), t.style.zIndex = new Pe().nextIndex().toString()
};

function mp(t) {
    return new Promise((e, n) => {
        const {showMark: o = !0} = t, a = Qt(ze, {
            type: t.type,
            icon: t.icon,
            iconColor: t.color,
            title: t.title,
            text: t.text,
            draggable: t.draggable,
            showCloseIcon: !0,
            transition: "s-transition-fadeDown",
            confirmBtnText: t.confirmBtnText,
            cancelBtnText: t.cancelBtnText,
            top: t.top,
            onClose(h) {
                n(h), o && l.close()
            },
            onCancel() {
                n("cancel"), o && l.close()
            },
            onConfirm() {
                o && l.close(), e("confirm")
            },
            onOpen() {
                o && l.open()
            },
            onClosed() {
                l.element.removeEventListener("click", r), i.removeChild(s), a.unmount()
            }
        }), s = document.createElement("div"), i = document.body, l = new Yn("cover"), r = function () {
            d.close("mark")
        };
        l.element.addEventListener("click", r);
        const d = a.mount(s);
        rl(s), s.appendChild(l.element), i.appendChild(s), d.open()
    })
}

const rl = function (t) {
    t.classList.add("s-confirm-container"), t.style.zIndex = new Pe().nextIndex().toString()
};

function gp(t, e) {
    (function (n) {
        if (!n) return;
        const {zIndex: o = 2e3} = n;
        new Pe(o)
    })(e), ol(t)
}

const cl = $({
    __name: "VPBadge", props: {text: {}, type: {default: "tip"}}, setup(t) {
        return (e, n) => (c(), p("span", {class: z(["VPBadge", e.type])}, [f(e.$slots, "default", {}, () => [G(D(e.text), 1)], !0)], 2))
    }
});
const ul = I(cl, [["__scopeId", "data-v-9613cc9f"]]), dl = {key: 0, class: "VPBackdrop"}, pl = $({
    __name: "VPBackdrop", props: {show: {type: Boolean}}, setup(t) {
        return (e, n) => (c(), L(Ee, {name: "fade"}, {
            default: k(() => [e.show ? (c(), p("div", dl)) : x("", !0)]),
            _: 1
        }))
    }
});
const fl = I(pl, [["__scopeId", "data-v-c79a1216"]]), R = Nn;

function vl(t, e) {
    let n, o = !1;
    return () => {
        n && clearTimeout(n), o ? n = setTimeout(t, e) : (t(), (o = !0) && setTimeout(() => o = !1, e))
    }
}

function Kt(t) {
    return /^\//.test(t) ? t : `/${t}`
}

function Ke(t) {
    if (xo(t)) return t;
    const {site: e} = R(), {pathname: n, search: o, hash: a} = new URL(t, "http://a.com"),
        s = n.endsWith("/") || n.endsWith(".html") ? t : t.replace(/(?:(^\.+)\/)?.*$/, `$1${n.replace(/(\.md)?$/, e.value.cleanUrls ? "" : ".html")}${o}${a}`);
    return Zt(s)
}

function nt({removeCurrent: t = !0, correspondingLink: e = !1} = {}) {
    const {site: n, localeIndex: o, page: a, theme: s} = R(), i = M(() => {
        var r, d;
        return {
            label: (r = n.value.locales[o.value]) == null ? void 0 : r.label,
            link: ((d = n.value.locales[o.value]) == null ? void 0 : d.link) || (o.value === "root" ? "/" : `/${o.value}/`)
        }
    });
    return {
        localeLinks: M(() => Object.entries(n.value.locales).flatMap(([r, d]) => t && i.value.label === d.label ? [] : {
            text: d.label,
            link: _l(d.link || (r === "root" ? "/" : `/${r}/`), s.value.i18nRouting !== !1 && e, a.value.relativePath.slice(i.value.link.length - 1), !n.value.cleanUrls)
        })), currentLang: i
    }
}

function _l(t, e, n, o) {
    return e ? t.replace(/\/$/, "") + Kt(n.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, o ? ".html" : "")) : t
}

const hl = t => (ce("data-v-dfcf8e56"), t = t(), ue(), t), ml = {class: "NotFound"}, gl = {class: "code"},
    yl = {class: "title"}, bl = hl(() => _("div", {class: "divider"}, null, -1)), kl = {class: "quote"},
    $l = {class: "action"}, wl = ["href", "aria-label"], xl = $({
        __name: "NotFound", setup(t) {
            const {site: e, theme: n} = R(), {localeLinks: o} = nt({removeCurrent: !1}), a = V("/");
            return se(() => {
                var i;
                const s = window.location.pathname.replace(e.value.base, "").replace(/(^.*?\/).*$/, "/$1");
                o.value.length && (a.value = ((i = o.value.find(({link: l}) => l.startsWith(s))) == null ? void 0 : i.link) || o.value[0].link)
            }), (s, i) => {
                var l, r, d, h, y;
                return c(), p("div", ml, [_("p", gl, D(((l = u(n).notFound) == null ? void 0 : l.code) ?? "404"), 1), _("h1", yl, D(((r = u(n).notFound) == null ? void 0 : r.title) ?? "PAGE NOT FOUND"), 1), bl, _("blockquote", kl, D(((d = u(n).notFound) == null ? void 0 : d.quote) ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading."), 1), _("div", $l, [_("a", {
                    class: "link",
                    href: u(Zt)(a.value),
                    "aria-label": ((h = u(n).notFound) == null ? void 0 : h.linkLabel) ?? "go to home",
                    target: "_self"
                }, D(((y = u(n).notFound) == null ? void 0 : y.linkText) ?? "Take me home"), 9, wl)])])
            }
        }
    });
const Sl = I(xl, [["__scopeId", "data-v-dfcf8e56"]]);

function io(t, e) {
    if (Array.isArray(t)) return ut(t);
    if (t == null) return [];
    e = Kt(e);
    const n = Object.keys(t).sort((a, s) => s.split("/").length - a.split("/").length).find(a => e.startsWith(Kt(a))),
        o = n ? t[n] : [];
    return Array.isArray(o) ? ut(o) : ut(o.items, o.base)
}

function Pl(t) {
    const e = [];
    let n = 0;
    for (const o in t) {
        const a = t[o];
        if (a.items) {
            n = e.push(a);
            continue
        }
        e[n] || e.push({items: []}), e[n].items.push(a)
    }
    return e
}

function Vl(t) {
    const e = [];

    function n(o) {
        for (const a of o) a.text && a.link && e.push({
            text: a.text,
            link: a.link,
            docFooterText: a.docFooterText
        }), a.items && n(a.items)
    }

    return n(t), e
}

function Jt(t, e) {
    return Array.isArray(e) ? e.some(n => Jt(t, n)) : we(t, e.link) ? !0 : e.items ? Jt(t, e.items) : !1
}

function ut(t, e) {
    return [...t].map(n => {
        const o = {...n}, a = o.base || e;
        return a && o.link && (o.link = a + o.link), o.items && (o.items = ut(o.items, a)), o
    })
}

function he() {
    const {frontmatter: t, page: e, theme: n} = R(), o = Ct("(min-width: 960px)"), a = V(!1), s = M(() => {
        const w = n.value.sidebar, m = e.value.relativePath;
        return w ? io(w, m) : []
    }), i = V(s.value);
    U(s, (w, m) => {
        JSON.stringify(w) !== JSON.stringify(m) && (i.value = s.value)
    });
    const l = M(() => t.value.sidebar !== !1 && i.value.length > 0 && t.value.layout !== "home"),
        r = M(() => d ? t.value.aside == null ? n.value.aside === "left" : t.value.aside === "left" : !1),
        d = M(() => t.value.layout === "home" ? !1 : t.value.aside != null ? !!t.value.aside : n.value.aside !== !1),
        h = M(() => l.value && o.value), y = M(() => l.value ? Pl(i.value) : []);

    function v() {
        a.value = !0
    }

    function b() {
        a.value = !1
    }

    function g() {
        a.value ? b() : v()
    }

    return {
        isOpen: a,
        sidebar: i,
        sidebarGroups: y,
        hasSidebar: l,
        hasAside: d,
        leftAside: r,
        isSidebarEnabled: h,
        open: v,
        close: b,
        toggle: g
    }
}

function Bl(t, e) {
    let n;
    Je(() => {
        n = t.value ? document.activeElement : void 0
    }), se(() => {
        window.addEventListener("keyup", o)
    }), Ne(() => {
        window.removeEventListener("keyup", o)
    });

    function o(a) {
        a.key === "Escape" && t.value && (e(), n == null || n.focus())
    }
}

const ro = V(He ? location.hash : "");
He && window.addEventListener("hashchange", () => {
    ro.value = location.hash
});

function Ll(t) {
    const {page: e} = R(), n = V(!1), o = M(() => t.value.collapsed != null), a = M(() => !!t.value.link), s = V(!1),
        i = () => {
            s.value = we(e.value.relativePath, t.value.link)
        };
    U([e, t, ro], i), se(i);
    const l = M(() => s.value ? !0 : t.value.items ? Jt(e.value.relativePath, t.value.items) : !1),
        r = M(() => !!(t.value.items && t.value.items.length));
    Je(() => {
        n.value = !!(o.value && t.value.collapsed)
    }), Dn(() => {
        (s.value || l.value) && (n.value = !1)
    });

    function d() {
        o.value && (n.value = !n.value)
    }

    return {collapsed: n, collapsible: o, isLink: a, isActiveLink: s, hasActiveLink: l, hasChildren: r, toggle: d}
}

function Cl() {
    const {hasSidebar: t} = he(), e = Ct("(min-width: 960px)"), n = Ct("(min-width: 1280px)");
    return {isAsideEnabled: M(() => !n.value && !e.value ? !1 : t.value ? n.value : e.value)}
}

const Tl = 71;

function sn(t) {
    return typeof t.outline == "object" && !Array.isArray(t.outline) && t.outline.label || t.outlineTitle || "On this page"
}

function an(t) {
    const e = [...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n => n.id && n.hasChildNodes()).map(n => {
        const o = Number(n.tagName[1]);
        return {title: Ml(n), link: "#" + n.id, level: o}
    });
    return Il(e, t)
}

function Ml(t) {
    let e = "";
    for (const n of t.childNodes) if (n.nodeType === 1) {
        if (n.classList.contains("VPBadge") || n.classList.contains("header-anchor")) continue;
        e += n.textContent
    } else n.nodeType === 3 && (e += n.textContent);
    return e.trim()
}

function Il(t, e) {
    if (e === !1) return [];
    const n = (typeof e == "object" && !Array.isArray(e) ? e.level : e) || 2, [o, a] = typeof n == "number" ? [n, n] : n === "deep" ? [2, 6] : n;
    t = t.filter(i => i.level >= o && i.level <= a);
    const s = [];
    e:for (let i = 0; i < t.length; i++) {
        const l = t[i];
        if (i === 0) s.push(l); else {
            for (let r = i - 1; r >= 0; r--) {
                const d = t[r];
                if (d.level < l.level) {
                    (d.children || (d.children = [])).push(l);
                    continue e
                }
            }
            s.push(l)
        }
    }
    return s
}

function Al(t, e) {
    const {isAsideEnabled: n} = Cl(), o = vl(s, 100);
    let a = null;
    se(() => {
        requestAnimationFrame(s), window.addEventListener("scroll", o)
    }), So(() => {
        i(location.hash)
    }), Ne(() => {
        window.removeEventListener("scroll", o)
    });

    function s() {
        if (!n.value) return;
        const l = [].slice.call(t.value.querySelectorAll(".outline-link")),
            r = [].slice.call(document.querySelectorAll(".content .header-anchor")).filter(b => l.some(g => g.hash === b.hash && b.offsetParent !== null)),
            d = window.scrollY, h = window.innerHeight, y = document.body.offsetHeight, v = Math.abs(d + h - y) < 1;
        if (r.length && v) {
            i(r[r.length - 1].hash);
            return
        }
        for (let b = 0; b < r.length; b++) {
            const g = r[b], w = r[b + 1], [m, B] = Ol(b, g, w);
            if (m) {
                i(B);
                return
            }
        }
    }

    function i(l) {
        a && a.classList.remove("active"), l == null ? a = null : a = t.value.querySelector(`a[href="${decodeURIComponent(l)}"]`);
        const r = a;
        r ? (r.classList.add("active"), e.value.style.top = r.offsetTop + 33 + "px", e.value.style.opacity = "1") : (e.value.style.top = "33px", e.value.style.opacity = "0")
    }
}

function Bn(t) {
    return t.parentElement.offsetTop - Tl
}

function Ol(t, e, n) {
    const o = window.scrollY;
    return t === 0 && o === 0 ? [!0, null] : o < Bn(e) ? [!1, null] : !n || o < Bn(n) ? [!0, e.hash] : [!1, null]
}

const El = ["href", "title"], Nl = $({
    __name: "VPDocOutlineItem", props: {headers: {}, root: {type: Boolean}}, setup(t) {
        function e({target: n}) {
            const o = n.href.split("#")[1], a = document.getElementById(decodeURIComponent(o));
            a == null || a.focus({preventScroll: !0})
        }

        return (n, o) => {
            const a = _e("VPDocOutlineItem", !0);
            return c(), p("ul", {class: z(n.root ? "root" : "nested")}, [(c(!0), p(j, null, te(n.headers, ({
                                                                                                               children: s,
                                                                                                               link: i,
                                                                                                               title: l
                                                                                                           }) => (c(), p("li", null, [_("a", {
                class: "outline-link",
                href: i,
                onClick: e,
                title: l
            }, D(l), 9, El), s != null && s.length ? (c(), L(a, {
                key: 0,
                headers: s
            }, null, 8, ["headers"])) : x("", !0)]))), 256))], 2)
        }
    }
});
const ln = I(Nl, [["__scopeId", "data-v-d0ee3533"]]), Dl = t => (ce("data-v-d330b1bb"), t = t(), ue(), t),
    Hl = {class: "content"}, zl = {class: "outline-title", role: "heading", "aria-level": "2"},
    Fl = {"aria-labelledby": "doc-outline-aria-label"}, Rl = Dl(() => _("span", {
        class: "visually-hidden",
        id: "doc-outline-aria-label"
    }, " Table of Contents for current page ", -1)), jl = $({
        __name: "VPDocAsideOutline", setup(t) {
            const {frontmatter: e, theme: n} = R(), o = bt([]);
            qe(() => {
                o.value = an(e.value.outline ?? n.value.outline)
            });
            const a = V(), s = V();
            return Al(a, s), (i, l) => (c(), p("div", {
                class: z(["VPDocAsideOutline", {"has-outline": o.value.length > 0}]),
                ref_key: "container",
                ref: a,
                role: "navigation"
            }, [_("div", Hl, [_("div", {
                class: "outline-marker",
                ref_key: "marker",
                ref: s
            }, null, 512), _("div", zl, D(u(sn)(u(n))), 1), _("nav", Fl, [Rl, S(ln, {
                headers: o.value,
                root: !0
            }, null, 8, ["headers"])])])], 2))
        }
    });
const Wl = I(jl, [["__scopeId", "data-v-d330b1bb"]]), ql = {class: "VPDocAsideCarbonAds"}, Ul = $({
        __name: "VPDocAsideCarbonAds", props: {carbonAds: {}}, setup(t) {
            const e = () => null;
            return (n, o) => (c(), p("div", ql, [S(u(e), {"carbon-ads": n.carbonAds}, null, 8, ["carbon-ads"])]))
        }
    }), Yl = t => (ce("data-v-3f215769"), t = t(), ue(), t), Xl = {class: "VPDocAside"},
    Gl = Yl(() => _("div", {class: "spacer"}, null, -1)), Kl = $({
        __name: "VPDocAside", setup(t) {
            const {theme: e} = R();
            return (n, o) => (c(), p("div", Xl, [f(n.$slots, "aside-top", {}, void 0, !0), f(n.$slots, "aside-outline-before", {}, void 0, !0), S(Wl), f(n.$slots, "aside-outline-after", {}, void 0, !0), Gl, f(n.$slots, "aside-ads-before", {}, void 0, !0), u(e).carbonAds ? (c(), L(Ul, {
                key: 0,
                "carbon-ads": u(e).carbonAds
            }, null, 8, ["carbon-ads"])) : x("", !0), f(n.$slots, "aside-ads-after", {}, void 0, !0), f(n.$slots, "aside-bottom", {}, void 0, !0)]))
        }
    });
const Jl = I(Kl, [["__scopeId", "data-v-3f215769"]]);

function Ql() {
    const {theme: t, page: e} = R();
    return M(() => {
        const {text: n = "Edit this page", pattern: o = ""} = t.value.editLink || {};
        let a;
        return typeof o == "function" ? a = o(e.value) : a = o.replace(/:path/g, e.value.filePath), {url: a, text: n}
    })
}

function Zl() {
    const {page: t, theme: e, frontmatter: n} = R();
    return M(() => {
        var r, d, h, y, v, b, g, w;
        const o = io(e.value.sidebar, t.value.relativePath), a = Vl(o),
            s = a.findIndex(m => we(t.value.relativePath, m.link)),
            i = ((r = e.value.docFooter) == null ? void 0 : r.prev) === !1 && !n.value.prev || n.value.prev === !1,
            l = ((d = e.value.docFooter) == null ? void 0 : d.next) === !1 && !n.value.next || n.value.next === !1;
        return {
            prev: i ? void 0 : {
                text: (typeof n.value.prev == "string" ? n.value.prev : typeof n.value.prev == "object" ? n.value.prev.text : void 0) ?? ((h = a[s - 1]) == null ? void 0 : h.docFooterText) ?? ((y = a[s - 1]) == null ? void 0 : y.text),
                link: (typeof n.value.prev == "object" ? n.value.prev.link : void 0) ?? ((v = a[s - 1]) == null ? void 0 : v.link)
            },
            next: l ? void 0 : {
                text: (typeof n.value.next == "string" ? n.value.next : typeof n.value.next == "object" ? n.value.next.text : void 0) ?? ((b = a[s + 1]) == null ? void 0 : b.docFooterText) ?? ((g = a[s + 1]) == null ? void 0 : g.text),
                link: (typeof n.value.next == "object" ? n.value.next.link : void 0) ?? ((w = a[s + 1]) == null ? void 0 : w.link)
            }
        }
    })
}

const ei = {}, ti = {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24"},
    ni = _("path", {d: "M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"}, null, -1),
    oi = _("path", {d: "M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"}, null, -1),
    si = [ni, oi];

function ai(t, e) {
    return c(), p("svg", ti, si)
}

const li = I(ei, [["render", ai]]), ke = $({
    __name: "VPLink", props: {tag: {}, href: {}, noIcon: {type: Boolean}, target: {}, rel: {}}, setup(t) {
        const e = t, n = M(() => e.tag ?? (e.href ? "a" : "span")), o = M(() => e.href && Hn.test(e.href));
        return (a, s) => (c(), L(pe(n.value), {
            class: z(["VPLink", {
                link: a.href,
                "vp-external-link-icon": o.value,
                "no-icon": a.noIcon
            }]),
            href: a.href ? u(Ke)(a.href) : void 0,
            target: a.target ?? (o.value ? "_blank" : void 0),
            rel: a.rel ?? (o.value ? "noreferrer" : void 0)
        }, {default: k(() => [f(a.$slots, "default")]), _: 3}, 8, ["class", "href", "target", "rel"]))
    }
}), ii = {class: "VPLastUpdated"}, ri = ["datetime"], ci = $({
    __name: "VPDocFooterLastUpdated", setup(t) {
        const {theme: e, page: n, frontmatter: o} = R(),
            a = M(() => new Date(o.value.lastUpdated ?? n.value.lastUpdated)), s = M(() => a.value.toISOString()),
            i = V("");
        return se(() => {
            Je(() => {
                var l;
                i.value = new Intl.DateTimeFormat(void 0, ((l = e.value.lastUpdated) == null ? void 0 : l.formatOptions) ?? {
                    dateStyle: "short",
                    timeStyle: "short"
                }).format(a.value)
            })
        }), (l, r) => {
            var d;
            return c(), p("p", ii, [G(D(((d = u(e).lastUpdated) == null ? void 0 : d.text) || u(e).lastUpdatedText || "Last updated") + ": ", 1), _("time", {datetime: s.value}, D(i.value), 9, ri)])
        }
    }
});
const ui = I(ci, [["__scopeId", "data-v-7de715c0"]]), di = {key: 0, class: "VPDocFooter"},
    pi = {key: 0, class: "edit-info"}, fi = {key: 0, class: "edit-link"}, vi = {key: 1, class: "last-updated"},
    _i = {key: 1, class: "prev-next"}, hi = {class: "pager"}, mi = ["href"], gi = ["innerHTML"], yi = ["innerHTML"],
    bi = {class: "pager"}, ki = ["href"], $i = ["innerHTML"], wi = ["innerHTML"], xi = $({
        __name: "VPDocFooter", setup(t) {
            const {theme: e, page: n, frontmatter: o} = R(), a = Ql(), s = Zl(),
                i = M(() => e.value.editLink && o.value.editLink !== !1),
                l = M(() => n.value.lastUpdated && o.value.lastUpdated !== !1),
                r = M(() => i.value || l.value || s.value.prev || s.value.next);
            return (d, h) => {
                var y, v, b, g, w, m;
                return r.value ? (c(), p("footer", di, [f(d.$slots, "doc-footer-before", {}, void 0, !0), i.value || l.value ? (c(), p("div", pi, [i.value ? (c(), p("div", fi, [S(ke, {
                    class: "edit-link-button",
                    href: u(a).url,
                    "no-icon": !0
                }, {
                    default: k(() => [S(li, {
                        class: "edit-link-icon",
                        "aria-label": "edit icon"
                    }), G(" " + D(u(a).text), 1)]), _: 1
                }, 8, ["href"])])) : x("", !0), l.value ? (c(), p("div", vi, [S(ui)])) : x("", !0)])) : x("", !0), (y = u(s).prev) != null && y.link || (v = u(s).next) != null && v.link ? (c(), p("nav", _i, [_("div", hi, [(b = u(s).prev) != null && b.link ? (c(), p("a", {
                    key: 0,
                    class: "pager-link prev",
                    href: u(Ke)(u(s).prev.link)
                }, [_("span", {
                    class: "desc",
                    innerHTML: ((g = u(e).docFooter) == null ? void 0 : g.prev) || "Previous page"
                }, null, 8, gi), _("span", {
                    class: "title",
                    innerHTML: u(s).prev.text
                }, null, 8, yi)], 8, mi)) : x("", !0)]), _("div", bi, [(w = u(s).next) != null && w.link ? (c(), p("a", {
                    key: 0,
                    class: "pager-link next",
                    href: u(Ke)(u(s).next.link)
                }, [_("span", {
                    class: "desc",
                    innerHTML: ((m = u(e).docFooter) == null ? void 0 : m.next) || "Next page"
                }, null, 8, $i), _("span", {
                    class: "title",
                    innerHTML: u(s).next.text
                }, null, 8, wi)], 8, ki)) : x("", !0)])])) : x("", !0)])) : x("", !0)
            }
        }
    });
const Si = I(xi, [["__scopeId", "data-v-ef5dee53"]]), Pi = {},
    Vi = {xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false", viewBox: "0 0 24 24"},
    Bi = _("path", {d: "M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"}, null, -1),
    Li = [Bi];

function Ci(t, e) {
    return c(), p("svg", Vi, Li)
}

const rn = I(Pi, [["render", Ci]]), Ti = {key: 0, class: "VPDocOutlineDropdown"}, Mi = {key: 0, class: "items"},
    Ii = $({
        __name: "VPDocOutlineDropdown", setup(t) {
            const {frontmatter: e, theme: n} = R(), o = V(!1);
            qe(() => {
                o.value = !1
            });
            const a = bt([]);
            return qe(() => {
                a.value = an(e.value.outline ?? n.value.outline)
            }), (s, i) => a.value.length > 0 ? (c(), p("div", Ti, [_("button", {
                onClick: i[0] || (i[0] = l => o.value = !o.value),
                class: z({open: o.value})
            }, [G(D(u(sn)(u(n))) + " ", 1), S(rn, {class: "icon"})], 2), o.value ? (c(), p("div", Mi, [S(ln, {headers: a.value}, null, 8, ["headers"])])) : x("", !0)])) : x("", !0)
        }
    });
const Ai = I(Ii, [["__scopeId", "data-v-eadfb36b"]]), Oi = t => (ce("data-v-6b87e69f"), t = t(), ue(), t),
    Ei = {class: "container"}, Ni = Oi(() => _("div", {class: "aside-curtain"}, null, -1)),
    Di = {class: "aside-container"}, Hi = {class: "aside-content"}, zi = {class: "content"},
    Fi = {class: "content-container"}, Ri = {class: "main"}, ji = $({
        __name: "VPDoc", setup(t) {
            const {theme: e} = R(), n = kt(), {hasSidebar: o, hasAside: a, leftAside: s} = he(),
                i = M(() => n.path.replace(/[./]+/g, "_").replace(/_html$/, ""));
            return (l, r) => {
                const d = _e("Content");
                return c(), p("div", {
                    class: z(["VPDoc", {
                        "has-sidebar": u(o),
                        "has-aside": u(a)
                    }])
                }, [f(l.$slots, "doc-top", {}, void 0, !0), _("div", Ei, [u(a) ? (c(), p("div", {
                    key: 0,
                    class: z(["aside", {"left-aside": u(s)}])
                }, [Ni, _("div", Di, [_("div", Hi, [S(Jl, null, {
                    "aside-top": k(() => [f(l.$slots, "aside-top", {}, void 0, !0)]),
                    "aside-bottom": k(() => [f(l.$slots, "aside-bottom", {}, void 0, !0)]),
                    "aside-outline-before": k(() => [f(l.$slots, "aside-outline-before", {}, void 0, !0)]),
                    "aside-outline-after": k(() => [f(l.$slots, "aside-outline-after", {}, void 0, !0)]),
                    "aside-ads-before": k(() => [f(l.$slots, "aside-ads-before", {}, void 0, !0)]),
                    "aside-ads-after": k(() => [f(l.$slots, "aside-ads-after", {}, void 0, !0)]),
                    _: 3
                })])])], 2)) : x("", !0), _("div", zi, [_("div", Fi, [f(l.$slots, "doc-before", {}, void 0, !0), S(Ai), _("main", Ri, [S(d, {class: z(["vp-doc", [i.value, u(e).externalLinkIcon && "external-link-icon-enabled"]])}, null, 8, ["class"])]), S(Si, null, {
                    "doc-footer-before": k(() => [f(l.$slots, "doc-footer-before", {}, void 0, !0)]),
                    _: 3
                }), f(l.$slots, "doc-after", {}, void 0, !0)])])]), f(l.$slots, "doc-bottom", {}, void 0, !0)], 2)
            }
        }
    });
const Wi = I(ji, [["__scopeId", "data-v-6b87e69f"]]), qi = $({
    __name: "VPButton",
    props: {tag: {}, size: {default: "medium"}, theme: {default: "brand"}, text: {}, href: {}},
    setup(t) {
        const e = t, n = M(() => e.href && Hn.test(e.href)), o = M(() => e.tag || e.href ? "a" : "button");
        return (a, s) => (c(), L(pe(o.value), {
            class: z(["VPButton", [a.size, a.theme]]),
            href: a.href ? u(Ke)(a.href) : void 0,
            target: n.value ? "_blank" : void 0,
            rel: n.value ? "noreferrer" : void 0
        }, {default: k(() => [G(D(a.text), 1)]), _: 1}, 8, ["class", "href", "target", "rel"]))
    }
});
const Ui = I(qi, [["__scopeId", "data-v-c1c5efc1"]]), Yi = ["src", "alt"], Xi = $({
    inheritAttrs: !1, __name: "VPImage", props: {image: {}, alt: {}}, setup(t) {
        return (e, n) => {
            const o = _e("VPImage", !0);
            return e.image ? (c(), p(j, {key: 0}, [typeof e.image == "string" || "src" in e.image ? (c(), p("img", K({
                key: 0,
                class: "VPImage"
            }, typeof e.image == "string" ? e.$attrs : {...e.image, ...e.$attrs}, {
                src: u(Zt)(typeof e.image == "string" ? e.image : e.image.src),
                alt: e.alt ?? (typeof e.image == "string" ? "" : e.image.alt || "")
            }), null, 16, Yi)) : (c(), p(j, {key: 1}, [S(o, K({
                class: "dark",
                image: e.image.dark,
                alt: e.image.alt
            }, e.$attrs), null, 16, ["image", "alt"]), S(o, K({
                class: "light",
                image: e.image.light,
                alt: e.image.alt
            }, e.$attrs), null, 16, ["image", "alt"])], 64))], 64)) : x("", !0)
        }
    }
});
const yt = I(Xi, [["__scopeId", "data-v-8426fc1a"]]), Gi = t => (ce("data-v-da5d1713"), t = t(), ue(), t),
    Ki = {class: "container"}, Ji = {class: "main"}, Qi = {key: 0, class: "name"}, Zi = ["innerHTML"],
    er = ["innerHTML"], tr = ["innerHTML"], nr = {key: 0, class: "actions"}, or = {key: 0, class: "image"},
    sr = {class: "image-container"}, ar = Gi(() => _("div", {class: "image-bg"}, null, -1)), lr = $({
        __name: "VPHero", props: {name: {}, text: {}, tagline: {}, image: {}, actions: {}}, setup(t) {
            const e = ie("hero-image-slot-exists");
            return (n, o) => (c(), p("div", {class: z(["VPHero", {"has-image": n.image || u(e)}])}, [_("div", Ki, [_("div", Ji, [f(n.$slots, "home-hero-info", {}, () => [n.name ? (c(), p("h1", Qi, [_("span", {
                innerHTML: n.name,
                class: "clip"
            }, null, 8, Zi)])) : x("", !0), n.text ? (c(), p("p", {
                key: 1,
                innerHTML: n.text,
                class: "text"
            }, null, 8, er)) : x("", !0), n.tagline ? (c(), p("p", {
                key: 2,
                innerHTML: n.tagline,
                class: "tagline"
            }, null, 8, tr)) : x("", !0)], !0), n.actions ? (c(), p("div", nr, [(c(!0), p(j, null, te(n.actions, a => (c(), p("div", {
                key: a.link,
                class: "action"
            }, [S(Ui, {
                tag: "a",
                size: "medium",
                theme: a.theme,
                text: a.text,
                href: a.link
            }, null, 8, ["theme", "text", "href"])]))), 128))])) : x("", !0)]), n.image || u(e) ? (c(), p("div", or, [_("div", sr, [ar, f(n.$slots, "home-hero-image", {}, () => [n.image ? (c(), L(yt, {
                key: 0,
                class: "image-src",
                image: n.image
            }, null, 8, ["image"])) : x("", !0)], !0)])])) : x("", !0)])], 2))
        }
    });
const ir = I(lr, [["__scopeId", "data-v-da5d1713"]]), rr = $({
        __name: "VPHomeHero", setup(t) {
            const {frontmatter: e} = R();
            return (n, o) => u(e).hero ? (c(), L(ir, {
                key: 0,
                class: "VPHomeHero",
                name: u(e).hero.name,
                text: u(e).hero.text,
                tagline: u(e).hero.tagline,
                image: u(e).hero.image,
                actions: u(e).hero.actions
            }, {
                "home-hero-info": k(() => [f(n.$slots, "home-hero-info")]),
                "home-hero-image": k(() => [f(n.$slots, "home-hero-image")]),
                _: 3
            }, 8, ["name", "text", "tagline", "image", "actions"])) : x("", !0)
        }
    }), cr = {}, ur = {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24"},
    dr = _("path", {d: "M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"}, null, -1),
    pr = [dr];

function fr(t, e) {
    return c(), p("svg", ur, pr)
}

const vr = I(cr, [["render", fr]]), _r = {class: "box"}, hr = {key: 0, class: "icon"}, mr = ["innerHTML"],
    gr = ["innerHTML"], yr = ["innerHTML"], br = {key: 4, class: "link-text"}, kr = {class: "link-text-value"}, $r = $({
        __name: "VPFeature",
        props: {icon: {}, title: {}, details: {}, link: {}, linkText: {}, rel: {}, target: {}},
        setup(t) {
            return (e, n) => (c(), L(ke, {
                class: "VPFeature",
                href: e.link,
                rel: e.rel,
                target: e.target,
                "no-icon": !0,
                tag: e.link ? "a" : "div"
            }, {
                default: k(() => [_("article", _r, [typeof e.icon == "object" && e.icon.wrap ? (c(), p("div", hr, [S(yt, {
                    image: e.icon,
                    alt: e.icon.alt,
                    height: e.icon.height || 48,
                    width: e.icon.width || 48
                }, null, 8, ["image", "alt", "height", "width"])])) : typeof e.icon == "object" ? (c(), L(yt, {
                    key: 1,
                    image: e.icon,
                    alt: e.icon.alt,
                    height: e.icon.height || 48,
                    width: e.icon.width || 48
                }, null, 8, ["image", "alt", "height", "width"])) : e.icon ? (c(), p("div", {
                    key: 2,
                    class: "icon",
                    innerHTML: e.icon
                }, null, 8, mr)) : x("", !0), _("h2", {
                    class: "title",
                    innerHTML: e.title
                }, null, 8, gr), e.details ? (c(), p("p", {
                    key: 3,
                    class: "details",
                    innerHTML: e.details
                }, null, 8, yr)) : x("", !0), e.linkText ? (c(), p("div", br, [_("p", kr, [G(D(e.linkText) + " ", 1), S(vr, {class: "link-text-icon"})])])) : x("", !0)])]),
                _: 1
            }, 8, ["href", "rel", "target", "tag"]))
        }
    });
const wr = I($r, [["__scopeId", "data-v-33204567"]]), xr = {key: 0, class: "VPFeatures"}, Sr = {class: "container"},
    Pr = {class: "items"}, Vr = $({
        __name: "VPFeatures", props: {features: {}}, setup(t) {
            const e = t, n = M(() => {
                const o = e.features.length;
                if (o) {
                    if (o === 2) return "grid-2";
                    if (o === 3) return "grid-3";
                    if (o % 3 === 0) return "grid-6";
                    if (o > 3) return "grid-4"
                } else return
            });
            return (o, a) => o.features ? (c(), p("div", xr, [_("div", Sr, [_("div", Pr, [(c(!0), p(j, null, te(o.features, s => (c(), p("div", {
                key: s.title,
                class: z(["item", [n.value]])
            }, [S(wr, {
                icon: s.icon,
                title: s.title,
                details: s.details,
                link: s.link,
                "link-text": s.linkText,
                rel: s.rel,
                target: s.target
            }, null, 8, ["icon", "title", "details", "link", "link-text", "rel", "target"])], 2))), 128))])])])) : x("", !0)
        }
    });
const Br = I(Vr, [["__scopeId", "data-v-a6181336"]]), Lr = $({
    __name: "VPHomeFeatures", setup(t) {
        const {frontmatter: e} = R();
        return (n, o) => u(e).features ? (c(), L(Br, {
            key: 0,
            class: "VPHomeFeatures",
            features: u(e).features
        }, null, 8, ["features"])) : x("", !0)
    }
}), Cr = {class: "VPHome"}, Tr = $({
    __name: "VPHome", setup(t) {
        return (e, n) => {
            const o = _e("Content");
            return c(), p("div", Cr, [f(e.$slots, "home-hero-before", {}, void 0, !0), S(rr, null, {
                "home-hero-info": k(() => [f(e.$slots, "home-hero-info", {}, void 0, !0)]),
                "home-hero-image": k(() => [f(e.$slots, "home-hero-image", {}, void 0, !0)]),
                _: 3
            }), f(e.$slots, "home-hero-after", {}, void 0, !0), f(e.$slots, "home-features-before", {}, void 0, !0), S(Lr), f(e.$slots, "home-features-after", {}, void 0, !0), S(o)])
        }
    }
});
const Mr = I(Tr, [["__scopeId", "data-v-d82743a8"]]), Ir = {}, Ar = {class: "VPPage"};

function Or(t, e) {
    const n = _e("Content");
    return c(), p("div", Ar, [f(t.$slots, "page-top"), S(n), f(t.$slots, "page-bottom")])
}

const Er = I(Ir, [["render", Or]]), Nr = $({
    __name: "VPContent", setup(t) {
        const {page: e, frontmatter: n} = R(), {hasSidebar: o} = he();
        return (a, s) => (c(), p("div", {
            class: z(["VPContent", {
                "has-sidebar": u(o),
                "is-home": u(n).layout === "home"
            }]), id: "VPContent"
        }, [u(e).isNotFound ? f(a.$slots, "not-found", {key: 0}, () => [S(Sl)], !0) : u(n).layout === "page" ? (c(), L(Er, {key: 1}, {
            "page-top": k(() => [f(a.$slots, "page-top", {}, void 0, !0)]),
            "page-bottom": k(() => [f(a.$slots, "page-bottom", {}, void 0, !0)]),
            _: 3
        })) : u(n).layout === "home" ? (c(), L(Mr, {key: 2}, {
            "home-hero-before": k(() => [f(a.$slots, "home-hero-before", {}, void 0, !0)]),
            "home-hero-info": k(() => [f(a.$slots, "home-hero-info", {}, void 0, !0)]),
            "home-hero-image": k(() => [f(a.$slots, "home-hero-image", {}, void 0, !0)]),
            "home-hero-after": k(() => [f(a.$slots, "home-hero-after", {}, void 0, !0)]),
            "home-features-before": k(() => [f(a.$slots, "home-features-before", {}, void 0, !0)]),
            "home-features-after": k(() => [f(a.$slots, "home-features-after", {}, void 0, !0)]),
            _: 3
        })) : u(n).layout && u(n).layout !== "doc" ? (c(), L(pe(u(n).layout), {key: 3})) : (c(), L(Wi, {key: 4}, {
            "doc-top": k(() => [f(a.$slots, "doc-top", {}, void 0, !0)]),
            "doc-bottom": k(() => [f(a.$slots, "doc-bottom", {}, void 0, !0)]),
            "doc-footer-before": k(() => [f(a.$slots, "doc-footer-before", {}, void 0, !0)]),
            "doc-before": k(() => [f(a.$slots, "doc-before", {}, void 0, !0)]),
            "doc-after": k(() => [f(a.$slots, "doc-after", {}, void 0, !0)]),
            "aside-top": k(() => [f(a.$slots, "aside-top", {}, void 0, !0)]),
            "aside-outline-before": k(() => [f(a.$slots, "aside-outline-before", {}, void 0, !0)]),
            "aside-outline-after": k(() => [f(a.$slots, "aside-outline-after", {}, void 0, !0)]),
            "aside-ads-before": k(() => [f(a.$slots, "aside-ads-before", {}, void 0, !0)]),
            "aside-ads-after": k(() => [f(a.$slots, "aside-ads-after", {}, void 0, !0)]),
            "aside-bottom": k(() => [f(a.$slots, "aside-bottom", {}, void 0, !0)]),
            _: 3
        }))], 2))
    }
});
const Dr = I(Nr, [["__scopeId", "data-v-669faec9"]]), Hr = {class: "container"}, zr = ["innerHTML"], Fr = ["innerHTML"],
    Rr = $({
        __name: "VPFooter", setup(t) {
            const {theme: e, frontmatter: n} = R(), {hasSidebar: o} = he();
            return (a, s) => u(e).footer && u(n).footer !== !1 ? (c(), p("footer", {
                key: 0,
                class: z(["VPFooter", {"has-sidebar": u(o)}])
            }, [_("div", Hr, [u(e).footer.message ? (c(), p("p", {
                key: 0,
                class: "message",
                innerHTML: u(e).footer.message
            }, null, 8, zr)) : x("", !0), u(e).footer.copyright ? (c(), p("p", {
                key: 1,
                class: "copyright",
                innerHTML: u(e).footer.copyright
            }, null, 8, Fr)) : x("", !0)])], 2)) : x("", !0)
        }
    });
const jr = I(Rr, [["__scopeId", "data-v-e03eb2e1"]]), Wr = {class: "header"}, qr = {class: "outline"}, Ur = $({
    __name: "VPLocalNavOutlineDropdown", props: {headers: {}, navHeight: {}}, setup(t) {
        const e = t, {theme: n} = R(), o = V(!1), a = V(0), s = V();
        qe(() => {
            o.value = !1
        });

        function i() {
            o.value = !o.value, a.value = window.innerHeight + Math.min(window.scrollY - e.navHeight, 0)
        }

        function l(d) {
            d.target.classList.contains("outline-link") && (s.value && (s.value.style.transition = "none"), Se(() => {
                o.value = !1
            }))
        }

        function r() {
            o.value = !1, window.scrollTo({top: 0, left: 0, behavior: "smooth"})
        }

        return (d, h) => (c(), p("div", {
            class: "VPLocalNavOutlineDropdown",
            style: Me({"--vp-vh": a.value + "px"})
        }, [d.headers.length > 0 ? (c(), p("button", {
            key: 0,
            onClick: i,
            class: z({open: o.value})
        }, [G(D(u(sn)(u(n))) + " ", 1), S(rn, {class: "icon"})], 2)) : (c(), p("button", {
            key: 1,
            onClick: r
        }, D(u(n).returnToTopLabel || "Return to top"), 1)), S(Ee, {name: "flyout"}, {
            default: k(() => [o.value ? (c(), p("div", {
                key: 0,
                ref_key: "items",
                ref: s,
                class: "items",
                onClick: l
            }, [_("div", Wr, [_("a", {
                class: "top-link",
                href: "#",
                onClick: r
            }, D(u(n).returnToTopLabel || "Return to top"), 1)]), _("div", qr, [S(ln, {headers: d.headers}, null, 8, ["headers"])])], 512)) : x("", !0)]),
            _: 1
        })], 4))
    }
});
const Yr = I(Ur, [["__scopeId", "data-v-1c15a60a"]]), Xr = {},
    Gr = {xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false", viewBox: "0 0 24 24"},
    Kr = _("path", {d: "M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"}, null, -1),
    Jr = _("path", {d: "M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"}, null, -1),
    Qr = _("path", {d: "M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"}, null, -1),
    Zr = _("path", {d: "M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"}, null, -1),
    ec = [Kr, Jr, Qr, Zr];

function tc(t, e) {
    return c(), p("svg", Gr, ec)
}

const nc = I(Xr, [["render", tc]]), oc = ["aria-expanded"], sc = {class: "menu-text"}, ac = $({
    __name: "VPLocalNav", props: {open: {type: Boolean}}, emits: ["open-menu"], setup(t) {
        const {theme: e, frontmatter: n} = R(), {hasSidebar: o} = he(), {y: a} = zn(), s = bt([]), i = V(0);
        se(() => {
            i.value = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))
        }), qe(() => {
            s.value = an(n.value.outline ?? e.value.outline)
        });
        const l = M(() => s.value.length === 0 && !o.value),
            r = M(() => ({VPLocalNav: !0, fixed: l.value, "reached-top": a.value >= i.value}));
        return (d, h) => u(n).layout !== "home" && (!l.value || u(a) >= i.value) ? (c(), p("div", {
            key: 0,
            class: z(r.value)
        }, [u(o) ? (c(), p("button", {
            key: 0,
            class: "menu",
            "aria-expanded": d.open,
            "aria-controls": "VPSidebarNav",
            onClick: h[0] || (h[0] = y => d.$emit("open-menu"))
        }, [S(nc, {class: "menu-icon"}), _("span", sc, D(u(e).sidebarMenuLabel || "Menu"), 1)], 8, oc)) : x("", !0), S(Yr, {
            headers: s.value,
            navHeight: i.value
        }, null, 8, ["headers", "navHeight"])], 2)) : x("", !0)
    }
});
const lc = I(ac, [["__scopeId", "data-v-79c8c1df"]]);

function ic() {
    const t = V(!1);

    function e() {
        t.value = !0, window.addEventListener("resize", a)
    }

    function n() {
        t.value = !1, window.removeEventListener("resize", a)
    }

    function o() {
        t.value ? n() : e()
    }

    function a() {
        window.outerWidth >= 768 && n()
    }

    const s = kt();
    return U(() => s.path, n), {isScreenOpen: t, openScreen: e, closeScreen: n, toggleScreen: o}
}

const rc = {}, cc = {class: "VPSwitch", type: "button", role: "switch"}, uc = {class: "check"},
    dc = {key: 0, class: "icon"};

function pc(t, e) {
    return c(), p("button", cc, [_("span", uc, [t.$slots.default ? (c(), p("span", dc, [f(t.$slots, "default", {}, void 0, !0)])) : x("", !0)])])
}

const fc = I(rc, [["render", pc], ["__scopeId", "data-v-b1685198"]]), vc = {},
    _c = {xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false", viewBox: "0 0 24 24"},
    hc = _("path", {d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"}, null, -1),
    mc = [hc];

function gc(t, e) {
    return c(), p("svg", _c, mc)
}

const yc = I(vc, [["render", gc]]), bc = {},
    kc = {xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false", viewBox: "0 0 24 24"},
    $c = Po('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>', 9),
    wc = [$c];

function xc(t, e) {
    return c(), p("svg", kc, wc)
}

const Sc = I(bc, [["render", xc]]), Pc = $({
    __name: "VPSwitchAppearance", setup(t) {
        const {isDark: e} = R(), n = ie("toggle-appearance", () => {
            e.value = !e.value
        });
        return (o, a) => (c(), L(fc, {
            title: "toggle dark mode",
            class: "VPSwitchAppearance",
            "aria-checked": u(e),
            onClick: u(n)
        }, {default: k(() => [S(Sc, {class: "sun"}), S(yc, {class: "moon"})]), _: 1}, 8, ["aria-checked", "onClick"]))
    }
});
const cn = I(Pc, [["__scopeId", "data-v-ce54a7d1"]]), Vc = {key: 0, class: "VPNavBarAppearance"}, Bc = $({
    __name: "VPNavBarAppearance", setup(t) {
        const {site: e} = R();
        return (n, o) => u(e).appearance ? (c(), p("div", Vc, [S(cn)])) : x("", !0)
    }
});
const Lc = I(Bc, [["__scopeId", "data-v-f6a63727"]]), un = V();
let co = !1, Lt = 0;

function Cc(t) {
    const e = V(!1);
    if (He) {
        !co && Tc(), Lt++;
        const n = U(un, o => {
            var a, s, i;
            o === t.el.value || (a = t.el.value) != null && a.contains(o) ? (e.value = !0, (s = t.onFocus) == null || s.call(t)) : (e.value = !1, (i = t.onBlur) == null || i.call(t))
        });
        Ne(() => {
            n(), Lt--, Lt || Mc()
        })
    }
    return Mn(e)
}

function Tc() {
    document.addEventListener("focusin", uo), co = !0, un.value = document.activeElement
}

function Mc() {
    document.removeEventListener("focusin", uo)
}

function uo() {
    un.value = document.activeElement
}

const Ic = {},
    Ac = {xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false", viewBox: "0 0 24 24"},
    Oc = _("path", {d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"}, null, -1),
    Ec = [Oc];

function Nc(t, e) {
    return c(), p("svg", Ac, Ec)
}

const po = I(Ic, [["render", Nc]]), Dc = {},
    Hc = {xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false", viewBox: "0 0 24 24"},
    zc = _("circle", {cx: "12", cy: "12", r: "2"}, null, -1), Fc = _("circle", {cx: "19", cy: "12", r: "2"}, null, -1),
    Rc = _("circle", {cx: "5", cy: "12", r: "2"}, null, -1), jc = [zc, Fc, Rc];

function Wc(t, e) {
    return c(), p("svg", Hc, jc)
}

const qc = I(Dc, [["render", Wc]]), Uc = {class: "VPMenuLink"}, Yc = $({
    __name: "VPMenuLink", props: {item: {}}, setup(t) {
        const {page: e} = R();
        return (n, o) => (c(), p("div", Uc, [S(ke, {
            class: z({active: u(we)(u(e).relativePath, n.item.activeMatch || n.item.link, !!n.item.activeMatch)}),
            href: n.item.link,
            target: n.item.target,
            rel: n.item.rel
        }, {default: k(() => [G(D(n.item.text), 1)]), _: 1}, 8, ["class", "href", "target", "rel"])]))
    }
});
const St = I(Yc, [["__scopeId", "data-v-43f1e123"]]), Xc = {class: "VPMenuGroup"}, Gc = {key: 0, class: "title"},
    Kc = $({
        __name: "VPMenuGroup", props: {text: {}, items: {}}, setup(t) {
            return (e, n) => (c(), p("div", Xc, [e.text ? (c(), p("p", Gc, D(e.text), 1)) : x("", !0), (c(!0), p(j, null, te(e.items, o => (c(), p(j, null, ["link" in o ? (c(), L(St, {
                key: 0,
                item: o
            }, null, 8, ["item"])) : x("", !0)], 64))), 256))]))
        }
    });
const Jc = I(Kc, [["__scopeId", "data-v-69e747b5"]]), Qc = {class: "VPMenu"}, Zc = {key: 0, class: "items"}, eu = $({
    __name: "VPMenu", props: {items: {}}, setup(t) {
        return (e, n) => (c(), p("div", Qc, [e.items ? (c(), p("div", Zc, [(c(!0), p(j, null, te(e.items, o => (c(), p(j, {key: o.text}, ["link" in o ? (c(), L(St, {
            key: 0,
            item: o
        }, null, 8, ["item"])) : (c(), L(Jc, {
            key: 1,
            text: o.text,
            items: o.items
        }, null, 8, ["text", "items"]))], 64))), 128))])) : x("", !0), f(e.$slots, "default", {}, void 0, !0)]))
    }
});
const tu = I(eu, [["__scopeId", "data-v-e7ea1737"]]), nu = ["aria-expanded", "aria-label"],
    ou = {key: 0, class: "text"}, su = ["innerHTML"], au = {class: "menu"}, lu = $({
        __name: "VPFlyout", props: {icon: {}, button: {}, label: {}, items: {}}, setup(t) {
            const e = V(!1), n = V();
            Cc({el: n, onBlur: o});

            function o() {
                e.value = !1
            }

            return (a, s) => (c(), p("div", {
                class: "VPFlyout",
                ref_key: "el",
                ref: n,
                onMouseenter: s[1] || (s[1] = i => e.value = !0),
                onMouseleave: s[2] || (s[2] = i => e.value = !1)
            }, [_("button", {
                type: "button",
                class: "button",
                "aria-haspopup": "true",
                "aria-expanded": e.value,
                "aria-label": a.label,
                onClick: s[0] || (s[0] = i => e.value = !e.value)
            }, [a.button || a.icon ? (c(), p("span", ou, [a.icon ? (c(), L(pe(a.icon), {
                key: 0,
                class: "option-icon"
            })) : x("", !0), a.button ? (c(), p("span", {
                key: 1,
                innerHTML: a.button
            }, null, 8, su)) : x("", !0), S(po, {class: "text-icon"})])) : (c(), L(qc, {
                key: 1,
                class: "icon"
            }))], 8, nu), _("div", au, [S(tu, {items: a.items}, {
                default: k(() => [f(a.$slots, "default", {}, void 0, !0)]),
                _: 3
            }, 8, ["items"])])], 544))
        }
    });
const dn = I(lu, [["__scopeId", "data-v-9c007e85"]]), iu = {
    discord: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
    facebook: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    github: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    instagram: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
    linkedin: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    mastodon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
    slack: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
    twitter: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>',
    x: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',
    youtube: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
}, ru = ["href", "aria-label", "innerHTML"], cu = $({
    __name: "VPSocialLink", props: {icon: {}, link: {}, ariaLabel: {}}, setup(t) {
        const e = t, n = M(() => typeof e.icon == "object" ? e.icon.svg : iu[e.icon]);
        return (o, a) => (c(), p("a", {
            class: "VPSocialLink no-icon",
            href: o.link,
            "aria-label": o.ariaLabel ?? (typeof o.icon == "string" ? o.icon : ""),
            target: "_blank",
            rel: "noopener",
            innerHTML: n.value
        }, null, 8, ru))
    }
});
const uu = I(cu, [["__scopeId", "data-v-f80f8133"]]), du = {class: "VPSocialLinks"}, pu = $({
    __name: "VPSocialLinks", props: {links: {}}, setup(t) {
        return (e, n) => (c(), p("div", du, [(c(!0), p(j, null, te(e.links, ({
                                                                                 link: o,
                                                                                 icon: a,
                                                                                 ariaLabel: s
                                                                             }) => (c(), L(uu, {
            key: o,
            icon: a,
            link: o,
            ariaLabel: s
        }, null, 8, ["icon", "link", "ariaLabel"]))), 128))]))
    }
});
const pn = I(pu, [["__scopeId", "data-v-7bc22406"]]), fu = {key: 0, class: "group translations"},
    vu = {class: "trans-title"}, _u = {key: 1, class: "group"}, hu = {class: "item appearance"}, mu = {class: "label"},
    gu = {class: "appearance-action"}, yu = {key: 2, class: "group"}, bu = {class: "item social-links"}, ku = $({
        __name: "VPNavBarExtra", setup(t) {
            const {site: e, theme: n} = R(), {localeLinks: o, currentLang: a} = nt({correspondingLink: !0}),
                s = M(() => o.value.length && a.value.label || e.value.appearance || n.value.socialLinks);
            return (i, l) => s.value ? (c(), L(dn, {
                key: 0,
                class: "VPNavBarExtra",
                label: "extra navigation"
            }, {
                default: k(() => [u(o).length && u(a).label ? (c(), p("div", fu, [_("p", vu, D(u(a).label), 1), (c(!0), p(j, null, te(u(o), r => (c(), L(St, {
                    key: r.link,
                    item: r
                }, null, 8, ["item"]))), 128))])) : x("", !0), u(e).appearance ? (c(), p("div", _u, [_("div", hu, [_("p", mu, D(u(n).darkModeSwitchLabel || "Appearance"), 1), _("div", gu, [S(cn)])])])) : x("", !0), u(n).socialLinks ? (c(), p("div", yu, [_("div", bu, [S(pn, {
                    class: "social-links-list",
                    links: u(n).socialLinks
                }, null, 8, ["links"])])])) : x("", !0)]), _: 1
            })) : x("", !0)
        }
    });
const $u = I(ku, [["__scopeId", "data-v-40855f84"]]), wu = t => (ce("data-v-e5dd9c1c"), t = t(), ue(), t),
    xu = ["aria-expanded"],
    Su = wu(() => _("span", {class: "container"}, [_("span", {class: "top"}), _("span", {class: "middle"}), _("span", {class: "bottom"})], -1)),
    Pu = [Su], Vu = $({
        __name: "VPNavBarHamburger", props: {active: {type: Boolean}}, emits: ["click"], setup(t) {
            return (e, n) => (c(), p("button", {
                type: "button",
                class: z(["VPNavBarHamburger", {active: e.active}]),
                "aria-label": "mobile navigation",
                "aria-expanded": e.active,
                "aria-controls": "VPNavScreen",
                onClick: n[0] || (n[0] = o => e.$emit("click"))
            }, Pu, 10, xu))
        }
    });
const Bu = I(Vu, [["__scopeId", "data-v-e5dd9c1c"]]), Lu = ["innerHTML"], Cu = $({
    __name: "VPNavBarMenuLink", props: {item: {}}, setup(t) {
        const {page: e} = R();
        return (n, o) => (c(), L(ke, {
            class: z({
                VPNavBarMenuLink: !0,
                active: u(we)(u(e).relativePath, n.item.activeMatch || n.item.link, !!n.item.activeMatch)
            }), href: n.item.link, target: n.item.target, rel: n.item.rel, tabindex: "0"
        }, {
            default: k(() => [_("span", {innerHTML: n.item.text}, null, 8, Lu)]),
            _: 1
        }, 8, ["class", "href", "target", "rel"]))
    }
});
const Tu = I(Cu, [["__scopeId", "data-v-42ef59de"]]), Mu = $({
        __name: "VPNavBarMenuGroup", props: {item: {}}, setup(t) {
            const e = t, {page: n} = R(),
                o = s => "link" in s ? we(n.value.relativePath, s.link, !!e.item.activeMatch) : s.items.some(o),
                a = M(() => o(e.item));
            return (s, i) => (c(), L(dn, {
                class: z({
                    VPNavBarMenuGroup: !0,
                    active: u(we)(u(n).relativePath, s.item.activeMatch, !!s.item.activeMatch) || a.value
                }), button: s.item.text, items: s.item.items
            }, null, 8, ["class", "button", "items"]))
        }
    }), Iu = t => (ce("data-v-7f418b0f"), t = t(), ue(), t),
    Au = {key: 0, "aria-labelledby": "main-nav-aria-label", class: "VPNavBarMenu"},
    Ou = Iu(() => _("span", {id: "main-nav-aria-label", class: "visually-hidden"}, "Main Navigation", -1)), Eu = $({
        __name: "VPNavBarMenu", setup(t) {
            const {theme: e} = R();
            return (n, o) => u(e).nav ? (c(), p("nav", Au, [Ou, (c(!0), p(j, null, te(u(e).nav, a => (c(), p(j, {key: a.text}, ["link" in a ? (c(), L(Tu, {
                key: 0,
                item: a
            }, null, 8, ["item"])) : (c(), L(Mu, {key: 1, item: a}, null, 8, ["item"]))], 64))), 128))])) : x("", !0)
        }
    });
const Nu = I(Eu, [["__scopeId", "data-v-7f418b0f"]]);
const Du = {type: "button", class: "DocSearch DocSearch-Button", "aria-label": "Search"},
    Hu = {class: "DocSearch-Button-Container"}, zu = _("svg", {
        class: "DocSearch-Search-Icon",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-label": "search icon"
    }, [_("path", {
        d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
        stroke: "currentColor",
        fill: "none",
        "fill-rule": "evenodd",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1), Fu = {class: "DocSearch-Button-Placeholder"},
    Ru = _("span", {class: "DocSearch-Button-Keys"}, [_("kbd", {class: "DocSearch-Button-Key"}), _("kbd", {class: "DocSearch-Button-Key"}, "K")], -1),
    Ln = $({
        __name: "VPNavBarSearchButton", props: {placeholder: {}}, setup(t) {
            return (e, n) => (c(), p("button", Du, [_("span", Hu, [zu, _("span", Fu, D(e.placeholder), 1)]), Ru]))
        }
    });
const ju = {class: "VPNavBarSearch"}, Wu = {id: "local-search"}, qu = {key: 1, id: "docsearch"}, Uu = $({
    __name: "VPNavBarSearch", setup(t) {
        const e = () => null,
            n = Vo(() => En(() => import("./VPAlgoliaSearchBox.65e27da7.js"), ["assets/chunks/VPAlgoliaSearchBox.65e27da7.js", "assets/chunks/framework.efcebf82.js"])), {
                theme: o,
                localeIndex: a
            } = R(), s = V(!1), i = V(!1), l = M(() => {
                var w, m, B, C, A, T, N;
                const g = ((w = o.value.search) == null ? void 0 : w.options) ?? o.value.algolia;
                return ((A = (C = (B = (m = g == null ? void 0 : g.locales) == null ? void 0 : m[a.value]) == null ? void 0 : B.translations) == null ? void 0 : C.button) == null ? void 0 : A.buttonText) || ((N = (T = g == null ? void 0 : g.translations) == null ? void 0 : T.button) == null ? void 0 : N.buttonText) || "Search"
            }), r = () => {
                const g = "VPAlgoliaPreconnect";
                (window.requestIdleCallback || setTimeout)(() => {
                    var B;
                    const m = document.createElement("link");
                    m.id = g, m.rel = "preconnect", m.href = `https://${(((B = o.value.search) == null ? void 0 : B.options) ?? o.value.algolia).appId}-dsn.algolia.net`, m.crossOrigin = "", document.head.appendChild(m)
                })
            };
        se(() => {
            r();
            const g = m => {
                (m.key.toLowerCase() === "k" && (m.metaKey || m.ctrlKey) || !y(m) && m.key === "/") && (m.preventDefault(), d(), w())
            }, w = () => {
                window.removeEventListener("keydown", g)
            };
            window.addEventListener("keydown", g), Ne(w)
        });

        function d() {
            s.value || (s.value = !0, setTimeout(h, 16))
        }

        function h() {
            const g = new Event("keydown");
            g.key = "k", g.metaKey = !0, window.dispatchEvent(g), setTimeout(() => {
                document.querySelector(".DocSearch-Modal") || h()
            }, 16)
        }

        function y(g) {
            const w = g.target, m = w.tagName;
            return w.isContentEditable || m === "INPUT" || m === "SELECT" || m === "TEXTAREA"
        }

        const v = V(!1), b = "algolia";
        return (g, w) => {
            var m;
            return c(), p("div", ju, [u(b) === "local" ? (c(), p(j, {key: 0}, [v.value ? (c(), L(u(e), {
                key: 0,
                placeholder: l.value,
                onClose: w[0] || (w[0] = B => v.value = !1)
            }, null, 8, ["placeholder"])) : x("", !0), _("div", Wu, [S(Ln, {
                placeholder: l.value,
                onClick: w[1] || (w[1] = B => v.value = !0)
            }, null, 8, ["placeholder"])])], 64)) : u(b) === "algolia" ? (c(), p(j, {key: 1}, [s.value ? (c(), L(u(n), {
                key: 0,
                algolia: ((m = u(o).search) == null ? void 0 : m.options) ?? u(o).algolia,
                onVnodeBeforeMount: w[2] || (w[2] = B => i.value = !0)
            }, null, 8, ["algolia"])) : x("", !0), i.value ? x("", !0) : (c(), p("div", qu, [S(Ln, {
                placeholder: l.value,
                onClick: d
            }, null, 8, ["placeholder"])]))], 64)) : x("", !0)])
        }
    }
});
const Yu = $({
    __name: "VPNavBarSocialLinks", setup(t) {
        const {theme: e} = R();
        return (n, o) => u(e).socialLinks ? (c(), L(pn, {
            key: 0,
            class: "VPNavBarSocialLinks",
            links: u(e).socialLinks
        }, null, 8, ["links"])) : x("", !0)
    }
});
const Xu = I(Yu, [["__scopeId", "data-v-0394ad82"]]), Gu = ["href"], Ku = $({
    __name: "VPNavBarTitle", setup(t) {
        const {site: e, theme: n} = R(), {hasSidebar: o} = he(), {currentLang: a} = nt();
        return (s, i) => (c(), p("div", {class: z(["VPNavBarTitle", {"has-sidebar": u(o)}])}, [_("a", {
            class: "title",
            href: u(n).logoLink ?? u(Ke)(u(a).link)
        }, [f(s.$slots, "nav-bar-title-before", {}, void 0, !0), u(n).logo ? (c(), L(yt, {
            key: 0,
            class: "logo",
            image: u(n).logo
        }, null, 8, ["image"])) : x("", !0), u(n).siteTitle ? (c(), p(j, {key: 1}, [G(D(u(n).siteTitle), 1)], 64)) : u(n).siteTitle === void 0 ? (c(), p(j, {key: 2}, [G(D(u(e).title), 1)], 64)) : x("", !0), f(s.$slots, "nav-bar-title-after", {}, void 0, !0)], 8, Gu)], 2))
    }
});
const Ju = I(Ku, [["__scopeId", "data-v-86d1bed8"]]), Qu = {},
    Zu = {xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false", viewBox: "0 0 24 24"},
    ed = _("path", {d: "M0 0h24v24H0z", fill: "none"}, null, -1), td = _("path", {
        d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",
        class: "css-c4d79v"
    }, null, -1), nd = [ed, td];

function od(t, e) {
    return c(), p("svg", Zu, nd)
}

const fo = I(Qu, [["render", od]]), sd = {class: "items"}, ad = {class: "title"}, ld = $({
    __name: "VPNavBarTranslations", setup(t) {
        const {theme: e} = R(), {localeLinks: n, currentLang: o} = nt({correspondingLink: !0});
        return (a, s) => u(n).length && u(o).label ? (c(), L(dn, {
            key: 0,
            class: "VPNavBarTranslations",
            icon: fo,
            label: u(e).langMenuLabel || "Change language"
        }, {
            default: k(() => [_("div", sd, [_("p", ad, D(u(o).label), 1), (c(!0), p(j, null, te(u(n), i => (c(), L(St, {
                key: i.link,
                item: i
            }, null, 8, ["item"]))), 128))])]), _: 1
        }, 8, ["label"])) : x("", !0)
    }
});
const id = I(ld, [["__scopeId", "data-v-74abcbb9"]]), rd = t => (ce("data-v-a0fd61f4"), t = t(), ue(), t),
    cd = {class: "container"}, ud = {class: "title"}, dd = {class: "content"},
    pd = rd(() => _("div", {class: "curtain"}, null, -1)), fd = {class: "content-body"}, vd = $({
        __name: "VPNavBar", props: {isScreenOpen: {type: Boolean}}, emits: ["toggle-screen"], setup(t) {
            const {y: e} = zn(), {hasSidebar: n} = he(), {frontmatter: o} = R(), a = V({});
            return Dn(() => {
                a.value = {"has-sidebar": n.value, top: o.value.layout === "home" && e.value === 0}
            }), (s, i) => (c(), p("div", {class: z(["VPNavBar", a.value])}, [_("div", cd, [_("div", ud, [S(Ju, null, {
                "nav-bar-title-before": k(() => [f(s.$slots, "nav-bar-title-before", {}, void 0, !0)]),
                "nav-bar-title-after": k(() => [f(s.$slots, "nav-bar-title-after", {}, void 0, !0)]),
                _: 3
            })]), _("div", dd, [pd, _("div", fd, [f(s.$slots, "nav-bar-content-before", {}, void 0, !0), S(Uu, {class: "search"}), S(Nu, {class: "menu"}), S(id, {class: "translations"}), S(Lc, {class: "appearance"}), S(Xu, {class: "social-links"}), S($u, {class: "extra"}), f(s.$slots, "nav-bar-content-after", {}, void 0, !0), S(Bu, {
                class: "hamburger",
                active: s.isScreenOpen,
                onClick: i[0] || (i[0] = l => s.$emit("toggle-screen"))
            }, null, 8, ["active"])])])])], 2))
        }
    });
const _d = I(vd, [["__scopeId", "data-v-a0fd61f4"]]), hd = {key: 0, class: "VPNavScreenAppearance"},
    md = {class: "text"}, gd = $({
        __name: "VPNavScreenAppearance", setup(t) {
            const {site: e, theme: n} = R();
            return (o, a) => u(e).appearance ? (c(), p("div", hd, [_("p", md, D(u(n).darkModeSwitchLabel || "Appearance"), 1), S(cn)])) : x("", !0)
        }
    });
const yd = I(gd, [["__scopeId", "data-v-add8f686"]]), bd = $({
    __name: "VPNavScreenMenuLink", props: {item: {}}, setup(t) {
        const e = ie("close-screen");
        return (n, o) => (c(), L(ke, {
            class: "VPNavScreenMenuLink",
            href: n.item.link,
            target: n.item.target,
            rel: n.item.rel,
            onClick: u(e)
        }, {default: k(() => [G(D(n.item.text), 1)]), _: 1}, 8, ["href", "target", "rel", "onClick"]))
    }
});
const kd = I(bd, [["__scopeId", "data-v-05f27b2a"]]), $d = {},
    wd = {xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false", viewBox: "0 0 24 24"},
    xd = _("path", {d: "M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"}, null, -1),
    Sd = [xd];

function Pd(t, e) {
    return c(), p("svg", wd, Sd)
}

const Vd = I($d, [["render", Pd]]), Bd = $({
    __name: "VPNavScreenMenuGroupLink", props: {item: {}}, setup(t) {
        const e = ie("close-screen");
        return (n, o) => (c(), L(ke, {
            class: "VPNavScreenMenuGroupLink",
            href: n.item.link,
            target: n.item.target,
            rel: n.item.rel,
            onClick: u(e)
        }, {default: k(() => [G(D(n.item.text), 1)]), _: 1}, 8, ["href", "target", "rel", "onClick"]))
    }
});
const vo = I(Bd, [["__scopeId", "data-v-19976ae1"]]), Ld = {class: "VPNavScreenMenuGroupSection"},
    Cd = {key: 0, class: "title"}, Td = $({
        __name: "VPNavScreenMenuGroupSection", props: {text: {}, items: {}}, setup(t) {
            return (e, n) => (c(), p("div", Ld, [e.text ? (c(), p("p", Cd, D(e.text), 1)) : x("", !0), (c(!0), p(j, null, te(e.items, o => (c(), L(vo, {
                key: o.text,
                item: o
            }, null, 8, ["item"]))), 128))]))
        }
    });
const Md = I(Td, [["__scopeId", "data-v-8133b170"]]), Id = ["aria-controls", "aria-expanded"],
    Ad = {class: "button-text"}, Od = ["id"], Ed = {key: 1, class: "group"}, Nd = $({
        __name: "VPNavScreenMenuGroup", props: {text: {}, items: {}}, setup(t) {
            const e = t, n = V(!1), o = M(() => `NavScreenGroup-${e.text.replace(" ", "-").toLowerCase()}`);

            function a() {
                n.value = !n.value
            }

            return (s, i) => (c(), p("div", {class: z(["VPNavScreenMenuGroup", {open: n.value}])}, [_("button", {
                class: "button",
                "aria-controls": o.value,
                "aria-expanded": n.value,
                onClick: a
            }, [_("span", Ad, D(s.text), 1), S(Vd, {class: "button-icon"})], 8, Id), _("div", {
                id: o.value,
                class: "items"
            }, [(c(!0), p(j, null, te(s.items, l => (c(), p(j, {key: l.text}, ["link" in l ? (c(), p("div", {
                key: l.text,
                class: "item"
            }, [S(vo, {item: l}, null, 8, ["item"])])) : (c(), p("div", Ed, [S(Md, {
                text: l.text,
                items: l.items
            }, null, 8, ["text", "items"])]))], 64))), 128))], 8, Od)], 2))
        }
    });
const Dd = I(Nd, [["__scopeId", "data-v-1ecb84e7"]]), Hd = {key: 0, class: "VPNavScreenMenu"}, zd = $({
    __name: "VPNavScreenMenu", setup(t) {
        const {theme: e} = R();
        return (n, o) => u(e).nav ? (c(), p("nav", Hd, [(c(!0), p(j, null, te(u(e).nav, a => (c(), p(j, {key: a.text}, ["link" in a ? (c(), L(kd, {
            key: 0,
            item: a
        }, null, 8, ["item"])) : (c(), L(Dd, {
            key: 1,
            text: a.text || "",
            items: a.items
        }, null, 8, ["text", "items"]))], 64))), 128))])) : x("", !0)
    }
}), Fd = $({
    __name: "VPNavScreenSocialLinks", setup(t) {
        const {theme: e} = R();
        return (n, o) => u(e).socialLinks ? (c(), L(pn, {
            key: 0,
            class: "VPNavScreenSocialLinks",
            links: u(e).socialLinks
        }, null, 8, ["links"])) : x("", !0)
    }
}), Rd = {class: "list"}, jd = $({
    __name: "VPNavScreenTranslations", setup(t) {
        const {localeLinks: e, currentLang: n} = nt({correspondingLink: !0}), o = V(!1);

        function a() {
            o.value = !o.value
        }

        return (s, i) => u(e).length && u(n).label ? (c(), p("div", {
            key: 0,
            class: z(["VPNavScreenTranslations", {open: o.value}])
        }, [_("button", {
            class: "title",
            onClick: a
        }, [S(fo, {class: "icon lang"}), G(" " + D(u(n).label) + " ", 1), S(po, {class: "icon chevron"})]), _("ul", Rd, [(c(!0), p(j, null, te(u(e), l => (c(), p("li", {
            key: l.link,
            class: "item"
        }, [S(ke, {class: "link", href: l.link}, {
            default: k(() => [G(D(l.text), 1)]),
            _: 2
        }, 1032, ["href"])]))), 128))])], 2)) : x("", !0)
    }
});
const Wd = I(jd, [["__scopeId", "data-v-d72aa483"]]), qd = {class: "container"}, Ud = $({
    __name: "VPNavScreen", props: {open: {type: Boolean}}, setup(t) {
        const e = V(null), n = Bo(He ? document.body : null);
        return (o, a) => (c(), L(Ee, {
            name: "fade",
            onEnter: a[0] || (a[0] = s => n.value = !0),
            onAfterLeave: a[1] || (a[1] = s => n.value = !1)
        }, {
            default: k(() => [o.open ? (c(), p("div", {
                key: 0,
                class: "VPNavScreen",
                ref_key: "screen",
                ref: e,
                id: "VPNavScreen"
            }, [_("div", qd, [f(o.$slots, "nav-screen-content-before", {}, void 0, !0), S(zd, {class: "menu"}), S(Wd, {class: "translations"}), S(yd, {class: "appearance"}), S(Fd, {class: "social-links"}), f(o.$slots, "nav-screen-content-after", {}, void 0, !0)])], 512)) : x("", !0)]),
            _: 3
        }))
    }
});
const Yd = I(Ud, [["__scopeId", "data-v-cc5739dd"]]), Xd = {key: 0, class: "VPNav"}, Gd = $({
    __name: "navBar", setup(t) {
        const {isScreenOpen: e, closeScreen: n, toggleScreen: o} = ic(), {frontmatter: a} = Nn(),
            s = M(() => a.value.navbar !== !1);
        return me("close-screen", n), Je(() => {
            He && document.documentElement.classList.toggle("hide-nav", !s.value)
        }), (i, l) => s.value ? (c(), p("header", Xd, [S(_d, {
            "is-screen-open": u(e),
            onToggleScreen: u(o)
        }, {
            "nav-bar-title-before": k(() => [f(i.$slots, "nav-bar-title-before", {}, void 0, !0)]),
            "nav-bar-title-after": k(() => [f(i.$slots, "nav-bar-title-after", {}, void 0, !0)]),
            "nav-bar-content-before": k(() => [f(i.$slots, "nav-bar-content-before", {}, void 0, !0)]),
            "nav-bar-content-after": k(() => [f(i.$slots, "nav-bar-content-after", {}, void 0, !0)]),
            _: 3
        }, 8, ["is-screen-open", "onToggleScreen"]), S(Yd, {open: u(e)}, {
            "nav-screen-content-before": k(() => [f(i.$slots, "nav-screen-content-before", {}, void 0, !0)]),
            "nav-screen-content-after": k(() => [f(i.$slots, "nav-screen-content-after", {}, void 0, !0)]),
            _: 3
        }, 8, ["open"])])) : x("", !0)
    }
});
const Kd = I(Gd, [["__scopeId", "data-v-85aee418"]]), Jd = t => (ce("data-v-e31bd47b"), t = t(), ue(), t),
    Qd = ["role", "tabindex"], Zd = Jd(() => _("div", {class: "indicator"}, null, -1)), ep = ["onKeydown"],
    tp = {key: 1, class: "items"}, np = $({
        __name: "VPSidebarItem", props: {item: {}, depth: {}}, setup(t) {
            const e = t, {
                    collapsed: n,
                    collapsible: o,
                    isLink: a,
                    isActiveLink: s,
                    hasActiveLink: i,
                    hasChildren: l,
                    toggle: r
                } = Ll(M(() => e.item)), d = M(() => l.value ? "section" : "div"), h = M(() => a.value ? "a" : "div"),
                y = M(() => l.value ? e.depth + 2 === 7 ? "p" : `h${e.depth + 2}` : "p"),
                v = M(() => a.value ? void 0 : "button"),
                b = M(() => [[`level-${e.depth}`], {collapsible: o.value}, {collapsed: n.value}, {"is-link": a.value}, {"is-active": s.value}, {"has-active": i.value}]);

            function g(m) {
                "key" in m && m.key !== "Enter" || !e.item.link && r()
            }

            function w() {
                e.item.link && r()
            }

            return (m, B) => {
                const C = _e("VPSidebarItem", !0);
                return c(), L(pe(d.value), {class: z(["VPSidebarItem", b.value])}, {
                    default: k(() => [m.item.text ? (c(), p("div", K({
                        key: 0,
                        class: "item",
                        role: v.value
                    }, Lo(m.item.items ? {
                        click: g,
                        keydown: g
                    } : {}, !0), {tabindex: m.item.items && 0}), [Zd, m.item.link ? (c(), L(ke, {
                        key: 0,
                        tag: h.value,
                        class: "link",
                        href: m.item.link,
                        rel: m.item.rel,
                        target: m.item.target
                    }, {
                        default: k(() => [(c(), L(pe(y.value), {
                            class: "text",
                            innerHTML: m.item.text
                        }, null, 8, ["innerHTML"]))]), _: 1
                    }, 8, ["tag", "href", "rel", "target"])) : (c(), L(pe(y.value), {
                        key: 1,
                        class: "text",
                        innerHTML: m.item.text
                    }, null, 8, ["innerHTML"])), m.item.collapsed != null ? (c(), p("div", {
                        key: 2,
                        class: "caret",
                        role: "button",
                        "aria-label": "toggle section",
                        onClick: w,
                        onKeydown: Tn(w, ["enter"]),
                        tabindex: "0"
                    }, [S(rn, {class: "caret-icon"})], 40, ep)) : x("", !0)], 16, Qd)) : x("", !0), m.item.items && m.item.items.length ? (c(), p("div", tp, [m.depth < 5 ? (c(!0), p(j, {key: 0}, te(m.item.items, A => (c(), L(C, {
                        key: A.text,
                        item: A,
                        depth: m.depth + 1
                    }, null, 8, ["item", "depth"]))), 128)) : x("", !0)])) : x("", !0)]), _: 1
                }, 8, ["class"])
            }
        }
    });
const op = I(np, [["__scopeId", "data-v-e31bd47b"]]), _o = t => (ce("data-v-31d24ea0"), t = t(), ue(), t),
    sp = _o(() => _("div", {class: "curtain"}, null, -1)),
    ap = {class: "nav", id: "VPSidebarNav", "aria-labelledby": "sidebar-aria-label", tabindex: "-1"},
    lp = _o(() => _("span", {class: "visually-hidden", id: "sidebar-aria-label"}, " Sidebar Navigation ", -1)), ip = $({
        __name: "sideBar", props: {open: {type: Boolean}}, setup(t) {
            const e = t, {sidebarGroups: n, hasSidebar: o} = he(), a = V(null), s = ys(He ? document.body : null);
            return U([e, a], () => {
                var i;
                e.open ? (s.value = !0, (i = a.value) == null || i.focus()) : s.value = !1
            }, {immediate: !0, flush: "post"}), (i, l) => u(o) ? (c(), L(u(Xe), {
                key: 0,
                class: z(["side-container", {open: i.open}])
            }, {
                default: k(() => [_("aside", {
                    class: "VPSidebar",
                    ref_key: "navEl",
                    ref: a,
                    onClick: l[0] || (l[0] = Le(() => {
                    }, ["stop"]))
                }, [sp, _("nav", ap, [lp, f(i.$slots, "sidebar-nav-before", {}, void 0, !0), (c(!0), p(j, null, te(u(n), r => (c(), p("div", {
                    key: r.text,
                    class: "group"
                }, [S(op, {
                    item: r,
                    depth: 0
                }, null, 8, ["item"])]))), 128)), f(i.$slots, "sidebar-nav-after", {}, void 0, !0)])], 512)]), _: 3
            }, 8, ["class"])) : x("", !0)
        }
    });
const rp = I(ip, [["__scopeId", "data-v-31d24ea0"]]), cp = $({
    __name: "VPSkipLink", setup(t) {
        const e = kt(), n = V();
        U(() => e.path, () => n.value.focus());

        function o({target: a}) {
            const s = document.getElementById(decodeURIComponent(a.hash).slice(1));
            if (s) {
                const i = () => {
                    s.removeAttribute("tabindex"), s.removeEventListener("blur", i)
                };
                s.setAttribute("tabindex", "-1"), s.addEventListener("blur", i), s.focus(), window.scrollTo(0, 0)
            }
        }

        return (a, s) => (c(), p(j, null, [_("span", {
            ref_key: "backToTop",
            ref: n,
            tabindex: "-1"
        }, null, 512), _("a", {
            href: "#VPContent",
            class: "VPSkipLink visually-hidden",
            onClick: o
        }, " Skip to content ")], 64))
    }
});
const up = I(cp, [["__scopeId", "data-v-0f60ec36"]]), dp = $({
    __name: "Layout", setup(t) {
        const {isOpen: e, open: n, close: o} = he(), a = kt();
        U(() => a.path, o), Bl(e, o);
        const {frontmatter: s} = R(), i = be(), l = M(() => !!i["home-hero-image"]);
        return me("hero-image-slot-exists", l), (r, d) => {
            const h = _e("Content");
            return u(s).layout !== !1 ? (c(), p("div", {
                key: 0,
                class: z(["Layout", u(s).pageClass])
            }, [f(r.$slots, "layout-top", {}, void 0, !0), S(up), S(fl, {
                class: "backdrop",
                show: u(e),
                onClick: u(o)
            }, null, 8, ["show", "onClick"]), u(s).navbar !== !1 ? (c(), L(Kd, {key: 0}, {
                "nav-bar-title-before": k(() => [f(r.$slots, "nav-bar-title-before", {}, void 0, !0)]),
                "nav-bar-title-after": k(() => [f(r.$slots, "nav-bar-title-after", {}, void 0, !0)]),
                "nav-bar-content-before": k(() => [f(r.$slots, "nav-bar-content-before", {}, void 0, !0)]),
                "nav-bar-content-after": k(() => [f(r.$slots, "nav-bar-content-after", {}, void 0, !0)]),
                "nav-screen-content-before": k(() => [f(r.$slots, "nav-screen-content-before", {}, void 0, !0)]),
                "nav-screen-content-after": k(() => [f(r.$slots, "nav-screen-content-after", {}, void 0, !0)]),
                _: 3
            })) : x("", !0), S(lc, {
                open: u(e),
                onOpenMenu: u(n)
            }, null, 8, ["open", "onOpenMenu"]), S(rp, {open: u(e)}, {
                "sidebar-nav-before": k(() => [f(r.$slots, "sidebar-nav-before", {}, void 0, !0)]),
                "sidebar-nav-after": k(() => [f(r.$slots, "sidebar-nav-after", {}, void 0, !0)]),
                _: 3
            }, 8, ["open"]), S(Dr, null, {
                "page-top": k(() => [f(r.$slots, "page-top", {}, void 0, !0)]),
                "page-bottom": k(() => [f(r.$slots, "page-bottom", {}, void 0, !0)]),
                "not-found": k(() => [f(r.$slots, "not-found", {}, void 0, !0)]),
                "home-hero-before": k(() => [f(r.$slots, "home-hero-before", {}, void 0, !0)]),
                "home-hero-info": k(() => [f(r.$slots, "home-hero-info", {}, void 0, !0)]),
                "home-hero-image": k(() => [f(r.$slots, "home-hero-image", {}, void 0, !0)]),
                "home-hero-after": k(() => [f(r.$slots, "home-hero-after", {}, void 0, !0)]),
                "home-features-before": k(() => [f(r.$slots, "home-features-before", {}, void 0, !0)]),
                "home-features-after": k(() => [f(r.$slots, "home-features-after", {}, void 0, !0)]),
                "doc-footer-before": k(() => [f(r.$slots, "doc-footer-before", {}, void 0, !0)]),
                "doc-before": k(() => [f(r.$slots, "doc-before", {}, void 0, !0)]),
                "doc-after": k(() => [f(r.$slots, "doc-after", {}, void 0, !0)]),
                "doc-top": k(() => [f(r.$slots, "doc-top", {}, void 0, !0)]),
                "doc-bottom": k(() => [f(r.$slots, "doc-bottom", {}, void 0, !0)]),
                "aside-top": k(() => [f(r.$slots, "aside-top", {}, void 0, !0)]),
                "aside-bottom": k(() => [f(r.$slots, "aside-bottom", {}, void 0, !0)]),
                "aside-outline-before": k(() => [f(r.$slots, "aside-outline-before", {}, void 0, !0)]),
                "aside-outline-after": k(() => [f(r.$slots, "aside-outline-after", {}, void 0, !0)]),
                "aside-ads-before": k(() => [f(r.$slots, "aside-ads-before", {}, void 0, !0)]),
                "aside-ads-after": k(() => [f(r.$slots, "aside-ads-after", {}, void 0, !0)]),
                _: 3
            }), S(jr), f(r.$slots, "layout-bottom", {}, void 0, !0)], 2)) : (c(), L(h, {key: 1}))
        }
    }
});
const pp = I(dp, [["__scopeId", "data-v-1919c326"]]);
const yp = {
    Layout: pp, enhanceApp: ({app: t}) => {
        t.component("Badge", ul)
    }
};
export {
    ra as A,
    hp as E,
    _p as I,
    ta as L,
    oa as O,
    gp as T,
    da as a,
    ea as b,
    ua as c,
    Wn as d,
    J as e,
    ms as f,
    Pe as g,
    mp as h,
    R as i,
    Ie as n,
    yp as t,
    H as u
};
