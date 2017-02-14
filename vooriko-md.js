module.exports = function() {
	
	function dropdownEffectData(a) {
    var b = null,
        c = null,
        d = $(a),
        e = $(".dropdown-menu", a),
        f = d.parents("ul.nav");
    return f.height > 0 && (b = f.data("dropdown-in") || null, c = f.data("dropdown-out") || null), {
        target: a,
        dropdown: d,
        dropdownMenu: e,
        effectIn: e.data("dropdown-in") || b,
        effectOut: e.data("dropdown-out") || c
    }
}

function dropdownEffectStart(a, b) {
    b && (a.dropdown.addClass("dropdown-animating"), a.dropdownMenu.addClass("animated"), a.dropdownMenu.addClass(b))
}

function dropdownEffectEnd(a, b) {
    var c = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    a.dropdown.one(c, function() {
        a.dropdown.removeClass("dropdown-animating"), a.dropdownMenu.removeClass("animated"), a.dropdownMenu.removeClass(a.effectIn), a.dropdownMenu.removeClass(a.effectOut), "function" == typeof b && b()
    })
}

function get_social_counts() {
    var a = window.location.protocol + "//" + window.location.host + window.location.pathname;
    $.ajax({
        type: "GET",
        url: "http://mdbootstrap.com/wp-content/themes/mdbootstrap/inc/get_social_counts.php?thisurl=" + a,
        dataType: "json",
        success: function(a) {
            var b = document.getElementById("dom-target-fb"),
                c = b.textContent,
                b = document.getElementById("dom-target-tw"),
                d = b.textContent,
                b = document.getElementById("dom-target-gp"),
                e = b.textContent,
                f = 1 * c.valueOf() + a.facebook,
                g = 1 * d.valueOf() + a.twitter,
                h = 1 * e.valueOf() + a.gplus;
            f > 0 ? $("#facebook-span").html(f) : $("#facebook-span").hide(), $("#twitter-span").html(g), $("#gplus-span").html(h)
        }
    })
}

function loadTemplatesBy(a, b) {
    $.post(ajax_object.ajaxurl, {
        action: "ajax_action",
        category: a
    }, function(b) {
        console.log(a), $("#products").html(b)
    })
}
if (function(a, b) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function(a, b) {
        "use strict";

        function c(a, b) {
            b = b || ba;
            var c = b.createElement("script");
            c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
        }

        function d(a) {
            var b = !!a && "length" in a && a.length,
                c = oa.type(a);
            return "function" !== c && !oa.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
        }

        function e(a, b, c) {
            return oa.isFunction(b) ? oa.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            }) : b.nodeType ? oa.grep(a, function(a) {
                return a === b !== c
            }) : "string" != typeof b ? oa.grep(a, function(a) {
                return ga.call(b, a) > -1 !== c
            }) : ya.test(b) ? oa.filter(b, a, c) : (b = oa.filter(b, a), oa.grep(a, function(a) {
                return ga.call(b, a) > -1 !== c && 1 === a.nodeType
            }))
        }

        function f(a, b) {
            for (;
                (a = a[b]) && 1 !== a.nodeType;);
            return a
        }

        function g(a) {
            var b = {};
            return oa.each(a.match(Ea) || [], function(a, c) {
                b[c] = !0
            }), b
        }

        function h(a) {
            return a
        }

        function i(a) {
            throw a
        }

        function j(a, b, c) {
            var d;
            try {
                a && oa.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && oa.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a)
            } catch (a) {
                c.call(void 0, a)
            }
        }

        function k() {
            ba.removeEventListener("DOMContentLoaded", k), a.removeEventListener("load", k), oa.ready()
        }

        function l() {
            this.expando = oa.expando + l.uid++
        }

        function m(a) {
            return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : La.test(a) ? JSON.parse(a) : a)
        }

        function n(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType)
                if (d = "data-" + b.replace(Ma, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = m(c)
                    } catch (a) {}
                    Ka.set(a, b, c)
                } else c = void 0;
            return c
        }

        function o(a, b, c, d) {
            var e, f = 1,
                g = 20,
                h = d ? function() {
                    return d.cur()
                } : function() {
                    return oa.css(a, b, "")
                },
                i = h(),
                j = c && c[3] || (oa.cssNumber[b] ? "" : "px"),
                k = (oa.cssNumber[b] || "px" !== j && +i) && Oa.exec(oa.css(a, b));
            if (k && k[3] !== j) {
                j = j || k[3], c = c || [], k = +i || 1;
                do f = f || ".5", k /= f, oa.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
            }
            return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
        }

        function p(a) {
            var b, c = a.ownerDocument,
                d = a.nodeName,
                e = Sa[d];
            return e ? e : (b = c.body.appendChild(c.createElement(d)), e = oa.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), Sa[d] = e, e)
        }

        function q(a, b) {
            for (var c, d, e = [], f = 0, g = a.length; g > f; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = Ja.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && Qa(d) && (e[f] = p(d))) : "none" !== c && (e[f] = "none", Ja.set(d, "display", c)));
            for (f = 0; g > f; f++) null != e[f] && (a[f].style.display = e[f]);
            return a
        }

        function r(a, b) {
            var c;
            return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && oa.nodeName(a, b) ? oa.merge([a], c) : c
        }

        function s(a, b) {
            for (var c = 0, d = a.length; d > c; c++) Ja.set(a[c], "globalEval", !b || Ja.get(b[c], "globalEval"))
        }

        function t(a, b, c, d, e) {
            for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; o > n; n++)
                if (f = a[n], f || 0 === f)
                    if ("object" === oa.type(f)) oa.merge(m, f.nodeType ? [f] : f);
                    else if (Xa.test(f)) {
                        for (g = g || l.appendChild(b.createElement("div")), h = (Ua.exec(f) || ["", ""])[1].toLowerCase(), i = Wa[h] || Wa._default, g.innerHTML = i[1] + oa.htmlPrefilter(f) + i[2], k = i[0]; k--;) g = g.lastChild;
                        oa.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
                    } else m.push(b.createTextNode(f));
            for (l.textContent = "", n = 0; f = m[n++];)
                if (d && oa.inArray(f, d) > -1) e && e.push(f);
                else if (j = oa.contains(f.ownerDocument, f), g = r(l.appendChild(f), "script"), j && s(g), c)
                    for (k = 0; f = g[k++];) Va.test(f.type || "") && c.push(f);
            return l
        }

        function u() {
            return !0
        }

        function v() {
            return !1
        }

        function w() {
            try {
                return ba.activeElement
            } catch (a) {}
        }

        function x(a, b, c, d, e, f) {
            var g, h;
            if ("object" == typeof b) {
                "string" != typeof c && (d = d || c, c = void 0);
                for (h in b) x(a, h, c, d, b[h], f);
                return a
            }
            if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = v;
            else if (!e) return a;
            return 1 === f && (g = e, e = function(a) {
                return oa().off(a), g.apply(this, arguments)
            }, e.guid = g.guid || (g.guid = oa.guid++)), a.each(function() {
                oa.event.add(this, b, e, d, c)
            })
        }

        function y(a, b) {
            return oa.nodeName(a, "table") && oa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
        }

        function z(a) {
            return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
        }

        function A(a) {
            var b = db.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function B(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (Ja.hasData(a) && (f = Ja.access(a), g = Ja.set(b, f), j = f.events)) {
                    delete g.handle, g.events = {};
                    for (e in j)
                        for (c = 0, d = j[e].length; d > c; c++) oa.event.add(b, e, j[e][c])
                }
                Ka.hasData(a) && (h = Ka.access(a), i = oa.extend({}, h), Ka.set(b, i))
            }
        }

        function C(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && Ta.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }

        function D(a, b, d, e) {
            b = ea.apply([], b);
            var f, g, h, i, j, k, l = 0,
                m = a.length,
                n = m - 1,
                o = b[0],
                p = oa.isFunction(o);
            if (p || m > 1 && "string" == typeof o && !ma.checkClone && cb.test(o)) return a.each(function(c) {
                var f = a.eq(c);
                p && (b[0] = o.call(this, c, f.html())), D(f, b, d, e)
            });
            if (m && (f = t(b, a[0].ownerDocument, !1, a, e), g = f.firstChild, 1 === f.childNodes.length && (f = g), g || e)) {
                for (h = oa.map(r(f, "script"), z), i = h.length; m > l; l++) j = f, l !== n && (j = oa.clone(j, !0, !0), i && oa.merge(h, r(j, "script"))), d.call(a[l], j, l);
                if (i)
                    for (k = h[h.length - 1].ownerDocument, oa.map(h, A), l = 0; i > l; l++) j = h[l], Va.test(j.type || "") && !Ja.access(j, "globalEval") && oa.contains(k, j) && (j.src ? oa._evalUrl && oa._evalUrl(j.src) : c(j.textContent.replace(eb, ""), k))
            }
            return a
        }

        function E(a, b, c) {
            for (var d, e = b ? oa.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || oa.cleanData(r(d)), d.parentNode && (c && oa.contains(d.ownerDocument, d) && s(r(d, "script")), d.parentNode.removeChild(d));
            return a
        }

        function F(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || hb(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || oa.contains(a.ownerDocument, a) || (g = oa.style(a, b)), !ma.pixelMarginRight() && gb.test(g) && fb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
        }

        function G(a, b) {
            return {
                get: function() {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }

        function H(a) {
            if (a in mb) return a;
            for (var b = a[0].toUpperCase() + a.slice(1), c = lb.length; c--;)
                if (a = lb[c] + b, a in mb) return a
        }

        function I(a, b, c) {
            var d = Oa.exec(b);
            return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
        }

        function J(a, b, c, d, e) {
            var f, g = 0;
            for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; 4 > f; f += 2) "margin" === c && (g += oa.css(a, c + Pa[f], !0, e)), d ? ("content" === c && (g -= oa.css(a, "padding" + Pa[f], !0, e)), "margin" !== c && (g -= oa.css(a, "border" + Pa[f] + "Width", !0, e))) : (g += oa.css(a, "padding" + Pa[f], !0, e), "padding" !== c && (g += oa.css(a, "border" + Pa[f] + "Width", !0, e)));
            return g
        }

        function K(a, b, c) {
            var d, e = !0,
                f = hb(a),
                g = "border-box" === oa.css(a, "boxSizing", !1, f);
            if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), 0 >= d || null == d) {
                if (d = F(a, b, f), (0 > d || null == d) && (d = a.style[b]), gb.test(d)) return d;
                e = g && (ma.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0
            }
            return d + J(a, b, c || (g ? "border" : "content"), e, f) + "px"
        }

        function L(a, b, c, d, e) {
            return new L.prototype.init(a, b, c, d, e)
        }

        function M() {
            ob && (a.requestAnimationFrame(M), oa.fx.tick())
        }

        function N() {
            return a.setTimeout(function() {
                nb = void 0
            }), nb = oa.now()
        }

        function O(a, b) {
            var c, d = 0,
                e = {
                    height: a
                };
            for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = Pa[d], e["margin" + c] = e["padding" + c] = a;
            return b && (e.opacity = e.width = a), e
        }

        function P(a, b, c) {
            for (var d, e = (S.tweeners[b] || []).concat(S.tweeners["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function Q(a, b, c) {
            var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
                m = this,
                n = {},
                o = a.style,
                p = a.nodeType && Qa(a),
                r = Ja.get(a, "fxshow");
            c.queue || (g = oa._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
                g.unqueued || h()
            }), g.unqueued++, m.always(function() {
                m.always(function() {
                    g.unqueued--, oa.queue(a, "fx").length || g.empty.fire()
                })
            }));
            for (d in b)
                if (e = b[d], pb.test(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                        if ("show" !== e || !r || void 0 === r[d]) continue;
                        p = !0
                    }
                    n[d] = r && r[d] || oa.style(a, d)
                }
            if (i = !oa.isEmptyObject(b), i || !oa.isEmptyObject(n)) {
                l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = r && r.display, null == j && (j = Ja.get(a, "display")), k = oa.css(a, "display"), "none" === k && (j ? k = j : (q([a], !0), j = a.style.display || j, k = oa.css(a, "display"), q([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === oa.css(a, "float") && (i || (m.done(function() {
                    o.display = j
                }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() {
                    o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
                })), i = !1;
                for (d in n) i || (r ? "hidden" in r && (p = r.hidden) : r = Ja.access(a, "fxshow", {
                    display: j
                }), f && (r.hidden = !p), p && q([a], !0), m.done(function() {
                    p || q([a]), Ja.remove(a, "fxshow");
                    for (d in n) oa.style(a, d, n[d])
                })), i = P(p ? r[d] : 0, d, m), d in r || (r[d] = i.start, p && (i.end = i.start, i.start = 0))
            }
        }

        function R(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = oa.camelCase(c), e = b[d], f = a[c], oa.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = oa.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
        }

        function S(a, b, c) {
            var d, e, f = 0,
                g = S.prefilters.length,
                h = oa.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e) return !1;
                    for (var b = nb || N(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: oa.extend({}, b),
                    opts: oa.extend(!0, {
                        specialEasing: {},
                        easing: oa.easing._default
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: nb || N(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = oa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (R(k, j.opts.specialEasing); g > f; f++)
                if (d = S.prefilters[f].call(j, a, k, j.opts)) return oa.isFunction(d.stop) && (oa._queueHooks(j.elem, j.opts.queue).stop = oa.proxy(d.stop, d)), d;
            return oa.map(k, P, j), oa.isFunction(j.opts.start) && j.opts.start.call(a, j), oa.fx.timer(oa.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function T(a) {
            var b = a.match(Ea) || [];
            return b.join(" ")
        }

        function U(a) {
            return a.getAttribute && a.getAttribute("class") || ""
        }

        function V(a, b, c, d) {
            var e;
            if (oa.isArray(b)) oa.each(b, function(b, e) {
                c || Ab.test(a) ? d(a, e) : V(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== oa.type(b)) d(a, b);
            else
                for (e in b) V(a + "[" + e + "]", b[e], c, d)
        }

        function W(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(Ea) || [];
                if (oa.isFunction(c))
                    for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function X(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0, oa.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                }), i
            }
            var f = {},
                g = a === Mb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function Y(a, b) {
            var c, d, e = oa.ajaxSettings.flatOptions || {};
            for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
            return d && oa.extend(!0, a, d), a
        }

        function Z(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                 "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
            if (d)
                for (e in h)
                    if (h[e] && h[e].test(d)) {
                        i.unshift(e);
                        break
                    }
            if (i[0] in c) f = i[0];
            else {
                for (e in c) {
                    if (!i[0] || a.converters[e + " " + i[0]]) {
                        f = e;
                        break
                    }
                    g || (g = e)
                }
                f = f || g
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function $(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f], !g)
                            for (e in j)
                                if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                    break
                                }
                        if (g !== !0)
                            if (g && a.throws) b = g(b);
                            else try {
                                b = g(b)
                            } catch (a) {
                                return {
                                    state: "parsererror",
                                    error: g ? a : "No conversion from " + i + " to " + f
                                }
                            }
                    }
            return {
                state: "success",
                data: b
            }
        }

        function _(a) {
            return oa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
        }
        var aa = [],
            ba = a.document,
            ca = Object.getPrototypeOf,
            da = aa.slice,
            ea = aa.concat,
            fa = aa.push,
            ga = aa.indexOf,
            ha = {},
            ia = ha.toString,
            ja = ha.hasOwnProperty,
            ka = ja.toString,
            la = ka.call(Object),
            ma = {},
            na = "3.1.1",
            oa = function(a, b) {
                return new oa.fn.init(a, b)
            },
            pa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            qa = /^-ms-/,
            ra = /-([a-z])/g,
            sa = function(a, b) {
                return b.toUpperCase()
            };
        oa.fn = oa.prototype = {
            jquery: na,
            constructor: oa,
            length: 0,
            toArray: function() {
                return da.call(this)
            },
            get: function(a) {
                return null == a ? da.call(this) : 0 > a ? this[a + this.length] : this[a]
            },
            pushStack: function(a) {
                var b = oa.merge(this.constructor(), a);
                return b.prevObject = this, b
            },
            each: function(a) {
                return oa.each(this, a)
            },
            map: function(a) {
                return this.pushStack(oa.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(da.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: fa,
            sort: aa.sort,
            splice: aa.splice
        }, oa.extend = oa.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || oa.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                if (null != (a = arguments[h]))
                    for (b in a) c = g[b], d = a[b], g !== d && (j && d && (oa.isPlainObject(d) || (e = oa.isArray(d))) ? (e ? (e = !1, f = c && oa.isArray(c) ? c : []) : f = c && oa.isPlainObject(c) ? c : {}, g[b] = oa.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            return g
        }, oa.extend({
            expando: "jQuery" + (na + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === oa.type(a)
            },
            isArray: Array.isArray,
            isWindow: function(a) {
                return null != a && a === a.window
            },
            isNumeric: function(a) {
                var b = oa.type(a);
                return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
            },
            isPlainObject: function(a) {
                var b, c;
                return !(!a || "[object Object]" !== ia.call(a)) && (!(b = ca(a)) || (c = ja.call(b, "constructor") && b.constructor, "function" == typeof c && ka.call(c) === la))
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ha[ia.call(a)] || "object" : typeof a
            },
            globalEval: function(a) {
                c(a)
            },
            camelCase: function(a) {
                return a.replace(qa, "ms-").replace(ra, sa)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b) {
                var c, e = 0;
                if (d(a))
                    for (c = a.length; c > e && b.call(a[e], e, a[e]) !== !1; e++);
                else
                    for (e in a)
                        if (b.call(a[e], e, a[e]) === !1) break; return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(pa, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                return null != a && (d(Object(a)) ? oa.merge(c, "string" == typeof a ? [a] : a) : fa.call(c, a)), c
            },
            inArray: function(a, b, c) {
                return null == b ? -1 : ga.call(b, a, c)
            },
            merge: function(a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
                return a.length = e, a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, c) {
                var e, f, g = 0,
                    h = [];
                if (d(a))
                    for (e = a.length; e > g; g++) f = b(a[g], g, c), null != f && h.push(f);
                else
                    for (g in a) f = b(a[g], g, c), null != f && h.push(f);
                return ea.apply([], h)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, d, e;
                return "string" == typeof b && (c = a[b], b = a, a = c), oa.isFunction(a) ? (d = da.call(arguments, 2), e = function() {
                    return a.apply(b || this, d.concat(da.call(arguments)))
                }, e.guid = a.guid = a.guid || oa.guid++, e) : void 0
            },
            now: Date.now,
            support: ma
        }), "function" == typeof Symbol && (oa.fn[Symbol.iterator] = aa[Symbol.iterator]), oa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
            ha["[object " + b + "]"] = b.toLowerCase()
        });
        var ta = function(a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, k, m = b && b.ownerDocument,
                    o = b ? b.nodeType : 9;
                if (c = c || [], "string" != typeof a || !a || 1 !== o && 9 !== o && 11 !== o) return c;
                if (!d && ((b ? b.ownerDocument || b : P) !== H && G(b), b = b || H, J)) {
                    if (11 !== o && (i = ra.exec(a)))
                        if (e = i[1]) {
                            if (9 === o) {
                                if (!(g = b.getElementById(e))) return c;
                                if (g.id === e) return c.push(g), c
                            } else if (m && (g = m.getElementById(e)) && N(b, g) && g.id === e) return c.push(g), c
                        } else {
                            if (i[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                            if ((e = i[3]) && w.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c
                        }
                    if (w.qsa && !U[a + " "] && (!K || !K.test(a))) {
                        if (1 !== o) m = b, k = a;
                        else if ("object" !== b.nodeName.toLowerCase()) {
                            for ((h = b.getAttribute("id")) ? h = h.replace(va, wa) : b.setAttribute("id", h = O), j = A(a), f = j.length; f--;) j[f] = "#" + h + " " + n(j[f]);
                            k = j.join(","), m = sa.test(a) && l(b.parentNode) || b
                        }
                        if (k) try {
                            return $.apply(c, m.querySelectorAll(k)), c
                        } catch (a) {} finally {
                            h === O && b.removeAttribute("id")
                        }
                    }
                }
                return C(a.replace(ha, "$1"), b, c, d)
            }

            function c() {
                function a(c, d) {
                    return b.push(c + " ") > x.cacheLength && delete a[b.shift()], a[c + " "] = d
                }
                var b = [];
                return a
            }

            function d(a) {
                return a[O] = !0, a
            }

            function e(a) {
                var b = H.createElement("fieldset");
                try {
                    return !!a(b)
                } catch (a) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function f(a, b) {
                for (var c = a.split("|"), d = c.length; d--;) x.attrHandle[c[d]] = b
            }

            function g(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function h(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function i(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function j(a) {
                return function(b) {
                    return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ya(b) === a : b.disabled === a : "label" in b && b.disabled === a
                }
            }

            function k(a) {
                return d(function(b) {
                    return b = +b, d(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function l(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }

            function m() {}

            function n(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function o(a, b, c) {
                var d = b.dir,
                    e = b.next,
                    f = e || d,
                    g = c && "parentNode" === f,
                    h = R++;
                return b.first ? function(b, c, e) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || g) return a(b, c, e);
                    return !1
                } : function(b, c, i) {
                    var j, k, l, m = [Q, h];
                    if (i) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || g)
                                if (l = b[O] || (b[O] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                                else {
                                    if ((j = k[f]) && j[0] === Q && j[1] === h) return m[2] = j[2];
                                    if (k[f] = m, m[2] = a(b, c, i)) return !0
                                } return !1
                }
            }

            function p(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function q(a, c, d) {
                for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
                return d
            }

            function r(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }

            function s(a, b, c, e, f, g) {
                return e && !e[O] && (e = s(e)), f && !f[O] && (f = s(f, g)), d(function(d, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = d || q(b || "*", h.nodeType ? [h] : h, []),
                        s = !a || !d && b ? p : r(p, m, a, h, i),
                        t = c ? f || (d ? a : o || e) ? [] : g : s;
                    if (c && c(s, t, h, i), e)
                        for (j = r(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i)
                            }
                            for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else t = r(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
                })
            }

            function t(a) {
                for (var b, c, d, e = a.length, f = x.relative[a[0].type], g = f || x.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                    return a === b
                }, g, !0), j = o(function(a) {
                    return aa(b, a) > -1
                }, g, !0), k = [function(a, c, d) {
                    var e = !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; e > h; h++)
                    if (c = x.relative[a[h].type]) k = [o(p(k), c)];
                    else {
                        if (c = x.filter[a[h].type].apply(null, a[h].matches), c[O]) {
                            for (d = ++h; e > d && !x.relative[a[d].type]; d++);
                            return s(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                                    value: " " === a[h - 2].type ? "*" : ""
                                })).replace(ha, "$1"), c, d > h && t(a.slice(h, d)), e > d && t(a = a.slice(d)), e > d && n(a))
                        }
                        k.push(c)
                    }
                return p(k)
            }

            function u(a, c) {
                var e = c.length > 0,
                    f = a.length > 0,
                    g = function(d, g, h, i, j) {
                        var k, l, m, n = 0,
                            o = "0",
                            p = d && [],
                            q = [],
                            s = D,
                            t = d || f && x.find.TAG("*", j),
                            u = Q += null == s ? 1 : Math.random() || .1,
                            v = t.length;
                        for (j && (D = g === H || g || j); o !== v && null != (k = t[o]); o++) {
                            if (f && k) {
                                for (l = 0, g || k.ownerDocument === H || (G(k), h = !J); m = a[l++];)
                                    if (m(k, g || H, h)) {
                                        i.push(k);
                                        break
                                    }
                                j && (Q = u)
                            }
                            e && ((k = !m && k) && n--, d && p.push(k))
                        }
                        if (n += o, e && o !== n) {
                            for (l = 0; m = c[l++];) m(p, q, g, h);
                            if (d) {
                                if (n > 0)
                                    for (; o--;) p[o] || q[o] || (q[o] = Y.call(i));
                                q = r(q)
                            }
                            $.apply(i, q), j && !d && q.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                        }
                        return j && (Q = u, D = s), p
                    };
                return e ? d(g) : g
            }
            var v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = "sizzle" + 1 * new Date,
                P = a.document,
                Q = 0,
                R = 0,
                S = c(),
                T = c(),
                U = c(),
                V = function(a, b) {
                    return a === b && (F = !0), 0
                },
                W = {}.hasOwnProperty,
                X = [],
                Y = X.pop,
                Z = X.push,
                $ = X.push,
                _ = X.slice,
                aa = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ca = "[\\x20\\t\\r\\n\\f]",
                da = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
                fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
                ga = new RegExp(ca + "+", "g"),
                ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                ia = new RegExp("^" + ca + "*," + ca + "*"),
                ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
                la = new RegExp(fa),
                ma = new RegExp("^" + da + "$"),
                na = {
                    ID: new RegExp("^#(" + da + ")"),
                    CLASS: new RegExp("^\\.(" + da + ")"),
                    TAG: new RegExp("^(" + da + "|[*])"),
                    ATTR: new RegExp("^" + ea),
                    PSEUDO: new RegExp("^" + fa),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ba + ")$", "i"),
                    needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
                },
                oa = /^(?:input|select|textarea|button)$/i,
                pa = /^h\d$/i,
                qa = /^[^{]+\{\s*\[native \w/,
                ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                sa = /[+~]/,
                ta = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
                ua = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                va = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                wa = function(a, b) {
                    return b ? "\0" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
                },
                xa = function() {
                    G()
                },
                ya = o(function(a) {
                    return a.disabled === !0 && ("form" in a || "label" in a)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                $.apply(X = _.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType
            } catch (a) {
                $ = {
                    apply: X.length ? function(a, b) {
                        Z.apply(a, _.call(b))
                    } : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            w = b.support = {}, z = b.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return !!b && "HTML" !== b.nodeName
            }, G = b.setDocument = function(a) {
                var b, c, d = a ? a.ownerDocument || a : P;
                return d !== H && 9 === d.nodeType && d.documentElement ? (H = d, I = H.documentElement, J = !z(H), P !== H && (c = H.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), w.attributes = e(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), w.getElementsByTagName = e(function(a) {
                    return a.appendChild(H.createComment("")), !a.getElementsByTagName("*").length
                }), w.getElementsByClassName = qa.test(H.getElementsByClassName), w.getById = e(function(a) {
                    return I.appendChild(a).id = O, !H.getElementsByName || !H.getElementsByName(O).length
                }), w.getById ? (x.filter.ID = function(a) {
                    var b = a.replace(ta, ua);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }, x.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && J) {
                        var c = b.getElementById(a);
                        return c ? [c] : []
                    }
                }) : (x.filter.ID = function(a) {
                    var b = a.replace(ta, ua);
                    return function(a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }, x.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && J) {
                        var c, d, e, f = b.getElementById(a);
                        if (f) {
                            if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                            for (e = b.getElementsByName(a), d = 0; f = e[d++];)
                                if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                        }
                        return []
                    }
                }), x.find.TAG = w.getElementsByTagName ? function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : w.qsa ? b.querySelectorAll(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, x.find.CLASS = w.getElementsByClassName && function(a, b) {
                        return "undefined" != typeof b.getElementsByClassName && J ? b.getElementsByClassName(a) : void 0
                    }, L = [], K = [], (w.qsa = qa.test(H.querySelectorAll)) && (e(function(a) {
                    I.appendChild(a).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && K.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || K.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + O + "-]").length || K.push("~="), a.querySelectorAll(":checked").length || K.push(":checked"), a.querySelectorAll("a#" + O + "+*").length || K.push(".#.+[+~]")
                }), e(function(a) {
                    a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var b = H.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && K.push("name" + ca + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && K.push(":enabled", ":disabled"), I.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && K.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), K.push(",.*:")
                })), (w.matchesSelector = qa.test(M = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && e(function(a) {
                    w.disconnectedMatch = M.call(a, "*"), M.call(a, "[s!='']:x"), L.push("!=", fa)
                }), K = K.length && new RegExp(K.join("|")), L = L.length && new RegExp(L.join("|")), b = qa.test(I.compareDocumentPosition), N = b || qa.test(I.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, V = b ? function(a, b) {
                    if (a === b) return F = !0, 0;
                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !w.sortDetached && b.compareDocumentPosition(a) === c ? a === H || a.ownerDocument === P && N(P, a) ? -1 : b === H || b.ownerDocument === P && N(P, b) ? 1 : E ? aa(E, a) - aa(E, b) : 0 : 4 & c ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return F = !0, 0;
                    var c, d = 0,
                        e = a.parentNode,
                        f = b.parentNode,
                        h = [a],
                        i = [b];
                    if (!e || !f) return a === H ? -1 : b === H ? 1 : e ? -1 : f ? 1 : E ? aa(E, a) - aa(E, b) : 0;
                    if (e === f) return g(a, b);
                    for (c = a; c = c.parentNode;) h.unshift(c);
                    for (c = b; c = c.parentNode;) i.unshift(c);
                    for (; h[d] === i[d];) d++;
                    return d ? g(h[d], i[d]) : h[d] === P ? -1 : i[d] === P ? 1 : 0
                }, H) : H
            }, b.matches = function(a, c) {
                return b(a, null, null, c)
            }, b.matchesSelector = function(a, c) {
                if ((a.ownerDocument || a) !== H && G(a), c = c.replace(ka, "='$1']"), w.matchesSelector && J && !U[c + " "] && (!L || !L.test(c)) && (!K || !K.test(c))) try {
                    var d = M.call(a, c);
                    if (d || w.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (a) {}
                return b(c, H, null, [a]).length > 0
            }, b.contains = function(a, b) {
                return (a.ownerDocument || a) !== H && G(a), N(a, b)
            }, b.attr = function(a, b) {
                (a.ownerDocument || a) !== H && G(a);
                var c = x.attrHandle[b.toLowerCase()],
                    d = c && W.call(x.attrHandle, b.toLowerCase()) ? c(a, b, !J) : void 0;
                return void 0 !== d ? d : w.attributes || !J ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.escape = function(a) {
                return (a + "").replace(va, wa)
            }, b.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, b.uniqueSort = function(a) {
                var b, c = [],
                    d = 0,
                    e = 0;
                if (F = !w.detectDuplicates, E = !w.sortStable && a.slice(0), a.sort(V), F) {
                    for (; b = a[e++];) b === a[e] && (d = c.push(e));
                    for (; d--;) a.splice(c[d], 1)
                }
                return E = null, a
            }, y = b.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += y(a)
                    } else if (3 === e || 4 === e) return a.nodeValue
                } else
                    for (; b = a[d++];) c += y(b);
                return c
            }, x = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: na,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(ta, ua), a[3] = (a[3] || a[4] || a[5] || "").replace(ta, ua), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = A(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(ta, ua).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = S[a + " "];
                        return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && S(a, function(a) {
                                return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                            })
                    },
                    ATTR: function(a, c, d) {
                        return function(e) {
                            var f = b.attr(e, a);
                            return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h,
                                t = !1;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (m = b; m = m[p];)
                                            if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild],
                                    g && s) {
                                    for (m = q, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                        if (1 === m.nodeType && ++t && m === b) {
                                            k[a] = [Q, n, t];
                                            break
                                        }
                                } else if (s && (m = b, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n), t === !1)
                                    for (;
                                        (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [Q, t]), m !== b)););
                                return t -= e, t === d || t % d === 0 && t / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, c) {
                        var e, f = x.pseudos[a] || x.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[O] ? f(c) : f.length > 1 ? (e = [a, a, "", c], x.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                            for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                        }) : function(a) {
                            return f(a, 0, e)
                        }) : f
                    }
                },
                pseudos: {
                    not: d(function(a) {
                        var b = [],
                            c = [],
                            e = B(a.replace(ha, "$1"));
                        return e[O] ? d(function(a, b, c, d) {
                            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, d, f) {
                            return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: d(function(a) {
                        return function(c) {
                            return b(a, c).length > 0
                        }
                    }),
                    contains: d(function(a) {
                        return a = a.replace(ta, ua),
                            function(b) {
                                return (b.textContent || b.innerText || y(b)).indexOf(a) > -1
                            }
                    }),
                    lang: d(function(a) {
                        return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ta, ua).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = J ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === I
                    },
                    focus: function(a) {
                        return a === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: j(!1),
                    disabled: j(!0),
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !x.pseudos.empty(a)
                    },
                    header: function(a) {
                        return pa.test(a.nodeName)
                    },
                    input: function(a) {
                        return oa.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: k(function() {
                        return [0]
                    }),
                    last: k(function(a, b) {
                        return [b - 1]
                    }),
                    eq: k(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: k(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: k(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: k(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: k(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (v in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[v] = h(v);
            for (v in {
                submit: !0,
                reset: !0
            }) x.pseudos[v] = i(v);
            return m.prototype = x.filters = x.pseudos, x.setFilters = new m, A = b.tokenize = function(a, c) {
                var d, e, f, g, h, i, j, k = T[a + " "];
                if (k) return c ? 0 : k.slice(0);
                for (h = a, i = [], j = x.preFilter; h;) {
                    (!d || (e = ia.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(ha, " ")
                    }), h = h.slice(d.length));
                    for (g in x.filter) !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                        value: d,
                        type: g,
                        matches: e
                    }), h = h.slice(d.length));
                    if (!d) break
                }
                return c ? h.length : h ? b.error(a) : T(a, i).slice(0)
            }, B = b.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = U[a + " "];
                if (!f) {
                    for (b || (b = A(a)), c = b.length; c--;) f = t(b[c]), f[O] ? d.push(f) : e.push(f);
                    f = U(a, u(e, d)), f.selector = a
                }
                return f
            }, C = b.select = function(a, b, c, d) {
                var e, f, g, h, i, j = "function" == typeof a && a,
                    k = !d && A(a = j.selector || a);
                if (c = c || [], 1 === k.length) {
                    if (f = k[0] = k[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && 9 === b.nodeType && J && x.relative[f[1].type]) {
                        if (b = (x.find.ID(g.matches[0].replace(ta, ua), b) || [])[0], !b) return c;
                        j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                    }
                    for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !x.relative[h = g.type]);)
                        if ((i = x.find[h]) && (d = i(g.matches[0].replace(ta, ua), sa.test(f[0].type) && l(b.parentNode) || b))) {
                            if (f.splice(e, 1), a = d.length && n(f), !a) return $.apply(c, d), c;
                            break
                        }
                }
                return (j || B(a, k))(d, b, !J, c, !b || sa.test(a) && l(b.parentNode) || b), c
            }, w.sortStable = O.split("").sort(V).join("") === O, w.detectDuplicates = !!F, G(), w.sortDetached = e(function(a) {
                return 1 & a.compareDocumentPosition(H.createElement("fieldset"))
            }), e(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || f("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), w.attributes && e(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || f("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), e(function(a) {
                return null == a.getAttribute("disabled")
            }) || f(ba, function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), b
        }(a);
        oa.find = ta, oa.expr = ta.selectors, oa.expr[":"] = oa.expr.pseudos, oa.uniqueSort = oa.unique = ta.uniqueSort, oa.text = ta.getText, oa.isXMLDoc = ta.isXML, oa.contains = ta.contains, oa.escapeSelector = ta.escape;
        var ua = function(a, b, c) {
                for (var d = [], e = void 0 !== c;
                     (a = a[b]) && 9 !== a.nodeType;)
                    if (1 === a.nodeType) {
                        if (e && oa(a).is(c)) break;
                        d.push(a)
                    }
                return d
            },
            va = function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            },
            wa = oa.expr.match.needsContext,
            xa = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            ya = /^.[^:#\[\.,]*$/;
        oa.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? oa.find.matchesSelector(d, a) ? [d] : [] : oa.find.matches(a, oa.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }, oa.fn.extend({
            find: function(a) {
                var b, c, d = this.length,
                    e = this;
                if ("string" != typeof a) return this.pushStack(oa(a).filter(function() {
                    for (b = 0; d > b; b++)
                        if (oa.contains(e[b], this)) return !0
                }));
                for (c = this.pushStack([]), b = 0; d > b; b++) oa.find(a, e[b], c);
                return d > 1 ? oa.uniqueSort(c) : c
            },
            filter: function(a) {
                return this.pushStack(e(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(e(this, a || [], !0))
            },
            is: function(a) {
                return !!e(this, "string" == typeof a && wa.test(a) ? oa(a) : a || [], !1).length
            }
        });
        var za, Aa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            Ba = oa.fn.init = function(a, b, c) {
                var d, e;
                if (!a) return this;
                if (c = c || za, "string" == typeof a) {
                    if (d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : Aa.exec(a), !d || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                    if (d[1]) {
                        if (b = b instanceof oa ? b[0] : b, oa.merge(this, oa.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : ba, !0)), xa.test(d[1]) && oa.isPlainObject(b))
                            for (d in b) oa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                        return this
                    }
                    return e = ba.getElementById(d[2]), e && (this[0] = e, this.length = 1), this
                }
                return a.nodeType ? (this[0] = a, this.length = 1, this) : oa.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(oa) : oa.makeArray(a, this)
            };
        Ba.prototype = oa.fn, za = oa(ba);
        var Ca = /^(?:parents|prev(?:Until|All))/,
            Da = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        oa.fn.extend({
            has: function(a) {
                var b = oa(a, this),
                    c = b.length;
                return this.filter(function() {
                    for (var a = 0; c > a; a++)
                        if (oa.contains(this, b[a])) return !0
                })
            },
            closest: function(a, b) {
                var c, d = 0,
                    e = this.length,
                    f = [],
                    g = "string" != typeof a && oa(a);
                if (!wa.test(a))
                    for (; e > d; d++)
                        for (c = this[d]; c && c !== b; c = c.parentNode)
                            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && oa.find.matchesSelector(c, a))) {
                                f.push(c);
                                break
                            }
                return this.pushStack(f.length > 1 ? oa.uniqueSort(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? ga.call(oa(a), this[0]) : ga.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(oa.uniqueSort(oa.merge(this.get(), oa(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), oa.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return ua(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return ua(a, "parentNode", c)
            },
            next: function(a) {
                return f(a, "nextSibling")
            },
            prev: function(a) {
                return f(a, "previousSibling")
            },
            nextAll: function(a) {
                return ua(a, "nextSibling")
            },
            prevAll: function(a) {
                return ua(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return ua(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return ua(a, "previousSibling", c)
            },
            siblings: function(a) {
                return va((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return va(a.firstChild)
            },
            contents: function(a) {
                return a.contentDocument || oa.merge([], a.childNodes)
            }
        }, function(a, b) {
            oa.fn[a] = function(c, d) {
                var e = oa.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = oa.filter(d, e)), this.length > 1 && (Da[a] || oa.uniqueSort(e), Ca.test(a) && e.reverse()), this.pushStack(e)
            }
        });
        var Ea = /[^\x20\t\r\n\f]+/g;
        oa.Callbacks = function(a) {
            a = "string" == typeof a ? g(a) : oa.extend({}, a);
            var b, c, d, e, f = [],
                h = [],
                i = -1,
                j = function() {
                    for (e = a.once, d = b = !0; h.length; i = -1)
                        for (c = h.shift(); ++i < f.length;) f[i].apply(c[0], c[1]) === !1 && a.stopOnFalse && (i = f.length, c = !1);
                    a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
                },
                k = {
                    add: function() {
                        return f && (c && !b && (i = f.length - 1, h.push(c)), function b(c) {
                            oa.each(c, function(c, d) {
                                oa.isFunction(d) ? a.unique && k.has(d) || f.push(d) : d && d.length && "string" !== oa.type(d) && b(d)
                            })
                        }(arguments), c && !b && j()), this
                    },
                    remove: function() {
                        return oa.each(arguments, function(a, b) {
                            for (var c;
                                 (c = oa.inArray(b, f, c)) > -1;) f.splice(c, 1), i >= c && i--
                        }), this
                    },
                    has: function(a) {
                        return a ? oa.inArray(a, f) > -1 : f.length > 0
                    },
                    empty: function() {
                        return f && (f = []), this
                    },
                    disable: function() {
                        return e = h = [], f = c = "", this
                    },
                    disabled: function() {
                        return !f
                    },
                    lock: function() {
                        return e = h = [], c || b || (f = c = ""), this
                    },
                    locked: function() {
                        return !!e
                    },
                    fireWith: function(a, c) {
                        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || j()), this
                    },
                    fire: function() {
                        return k.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!d
                    }
                };
            return k
        }, oa.extend({
            Deferred: function(b) {
                var c = [
                        ["notify", "progress", oa.Callbacks("memory"), oa.Callbacks("memory"), 2],
                        ["resolve", "done", oa.Callbacks("once memory"), oa.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", oa.Callbacks("once memory"), oa.Callbacks("once memory"), 1, "rejected"]
                    ],
                    d = "pending",
                    e = {
                        state: function() {
                            return d
                        },
                        always: function() {
                            return f.done(arguments).fail(arguments), this
                        },
                        catch: function(a) {
                            return e.then(null, a)
                        },
                        pipe: function() {
                            var a = arguments;
                            return oa.Deferred(function(b) {
                                oa.each(c, function(c, d) {
                                    var e = oa.isFunction(a[d[4]]) && a[d[4]];
                                    f[d[1]](function() {
                                        var a = e && e.apply(this, arguments);
                                        a && oa.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        then: function(b, d, e) {
                            function f(b, c, d, e) {
                                return function() {
                                    var j = this,
                                        k = arguments,
                                        l = function() {
                                            var a, l;
                                            if (!(g > b)) {
                                                if (a = d.apply(j, k), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                                l = a && ("object" == typeof a || "function" == typeof a) && a.then, oa.isFunction(l) ? e ? l.call(a, f(g, c, h, e), f(g, c, i, e)) : (g++, l.call(a, f(g, c, h, e), f(g, c, i, e), f(g, c, h, c.notifyWith))) : (d !== h && (j = void 0, k = [a]), (e || c.resolveWith)(j, k))
                                            }
                                        },
                                        m = e ? l : function() {
                                            try {
                                                l()
                                            } catch (a) {
                                                oa.Deferred.exceptionHook && oa.Deferred.exceptionHook(a, m.stackTrace), b + 1 >= g && (d !== i && (j = void 0, k = [a]), c.rejectWith(j, k))
                                            }
                                        };
                                    b ? m() : (oa.Deferred.getStackHook && (m.stackTrace = oa.Deferred.getStackHook()), a.setTimeout(m))
                                }
                            }
                            var g = 0;
                            return oa.Deferred(function(a) {
                                c[0][3].add(f(0, a, oa.isFunction(e) ? e : h, a.notifyWith)), c[1][3].add(f(0, a, oa.isFunction(b) ? b : h)), c[2][3].add(f(0, a, oa.isFunction(d) ? d : i))
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? oa.extend(a, e) : e
                        }
                    },
                    f = {};
                return oa.each(c, function(a, b) {
                    var g = b[2],
                        h = b[5];
                    e[b[1]] = g.add, h && g.add(function() {
                        d = h
                    }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {
                        return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                    }, f[b[0] + "With"] = g.fireWith
                }), e.promise(f), b && b.call(f, f), f
            },
            when: function(a) {
                var b = arguments.length,
                    c = b,
                    d = Array(c),
                    e = da.call(arguments),
                    f = oa.Deferred(),
                    g = function(a) {
                        return function(c) {
                            d[a] = this, e[a] = arguments.length > 1 ? da.call(arguments) : c, --b || f.resolveWith(d, e)
                        }
                    };
                if (1 >= b && (j(a, f.done(g(c)).resolve, f.reject), "pending" === f.state() || oa.isFunction(e[c] && e[c].then))) return f.then();
                for (; c--;) j(e[c], g(c), f.reject);
                return f.promise()
            }
        });
        var Fa = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        oa.Deferred.exceptionHook = function(b, c) {
            a.console && a.console.warn && b && Fa.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
        }, oa.readyException = function(b) {
            a.setTimeout(function() {
                throw b
            })
        };
        var Ga = oa.Deferred();
        oa.fn.ready = function(a) {
            return Ga.then(a).catch(function(a) {
                oa.readyException(a)
            }), this
        }, oa.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? oa.readyWait++ : oa.ready(!0)
            },
            ready: function(a) {
                (a === !0 ? --oa.readyWait : oa.isReady) || (oa.isReady = !0, a !== !0 && --oa.readyWait > 0 || Ga.resolveWith(ba, [oa]))
            }
        }), oa.ready.then = Ga.then, "complete" === ba.readyState || "loading" !== ba.readyState && !ba.documentElement.doScroll ? a.setTimeout(oa.ready) : (ba.addEventListener("DOMContentLoaded", k), a.addEventListener("load", k));
        var Ha = function(a, b, c, d, e, f, g) {
                var h = 0,
                    i = a.length,
                    j = null == c;
                if ("object" === oa.type(c)) {
                    e = !0;
                    for (h in c) Ha(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0, oa.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                        return j.call(oa(a), c)
                    })), b))
                    for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            },
            Ia = function(a) {
                return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
            };
        l.uid = 1, l.prototype = {
            cache: function(a) {
                var b = a[this.expando];
                return b || (b = {}, Ia(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0
                }))), b
            },
            set: function(a, b, c) {
                var d, e = this.cache(a);
                if ("string" == typeof b) e[oa.camelCase(b)] = c;
                else
                    for (d in b) e[oa.camelCase(d)] = b[d];
                return e
            },
            get: function(a, b) {
                return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][oa.camelCase(b)]
            },
            access: function(a, b, c) {
                return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
            },
            remove: function(a, b) {
                var c, d = a[this.expando];
                if (void 0 !== d) {
                    if (void 0 !== b) {
                        oa.isArray(b) ? b = b.map(oa.camelCase) : (b = oa.camelCase(b), b = b in d ? [b] : b.match(Ea) || []), c = b.length;
                        for (; c--;) delete d[b[c]]
                    }(void 0 === b || oa.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
                }
            },
            hasData: function(a) {
                var b = a[this.expando];
                return void 0 !== b && !oa.isEmptyObject(b)
            }
        };
        var Ja = new l,
            Ka = new l,
            La = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ma = /[A-Z]/g;
        oa.extend({
            hasData: function(a) {
                return Ka.hasData(a) || Ja.hasData(a)
            },
            data: function(a, b, c) {
                return Ka.access(a, b, c)
            },
            removeData: function(a, b) {
                Ka.remove(a, b)
            },
            _data: function(a, b, c) {
                return Ja.access(a, b, c)
            },
            _removeData: function(a, b) {
                Ja.remove(a, b)
            }
        }), oa.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = Ka.get(f), 1 === f.nodeType && !Ja.get(f, "hasDataAttrs"))) {
                        for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = oa.camelCase(d.slice(5)), n(f, d, e[d])));
                        Ja.set(f, "hasDataAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    Ka.set(this, a)
                }) : Ha(this, function(b) {
                    var c;
                    if (f && void 0 === b) {
                        if (c = Ka.get(f, a), void 0 !== c) return c;
                        if (c = n(f, a), void 0 !== c) return c
                    } else this.each(function() {
                        Ka.set(this, a, b)
                    })
                }, null, b, arguments.length > 1, null, !0)
            },
            removeData: function(a) {
                return this.each(function() {
                    Ka.remove(this, a)
                })
            }
        }), oa.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = Ja.get(a, b), c && (!d || oa.isArray(c) ? d = Ja.access(a, b, oa.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = oa.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = oa._queueHooks(a, b),
                    g = function() {
                        oa.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return Ja.get(a, c) || Ja.access(a, c, {
                        empty: oa.Callbacks("once memory").add(function() {
                            Ja.remove(a, [b + "queue", c])
                        })
                    })
            }
        }), oa.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? oa.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = oa.queue(this, a, b);
                    oa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && oa.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    oa.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = oa.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = Ja.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var Na = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Oa = new RegExp("^(?:([+-])=|)(" + Na + ")([a-z%]*)$", "i"),
            Pa = ["Top", "Right", "Bottom", "Left"],
            Qa = function(a, b) {
                return a = b || a, "none" === a.style.display || "" === a.style.display && oa.contains(a.ownerDocument, a) && "none" === oa.css(a, "display")
            },
            Ra = function(a, b, c, d) {
                var e, f, g = {};
                for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b) a.style[f] = g[f];
                return e
            },
            Sa = {};
        oa.fn.extend({
            show: function() {
                return q(this, !0)
            },
            hide: function() {
                return q(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    Qa(this) ? oa(this).show() : oa(this).hide()
                })
            }
        });
        var Ta = /^(?:checkbox|radio)$/i,
            Ua = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Va = /^$|\/(?:java|ecma)script/i,
            Wa = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Wa.optgroup = Wa.option, Wa.tbody = Wa.tfoot = Wa.colgroup = Wa.caption = Wa.thead, Wa.th = Wa.td;
        var Xa = /<|&#?\w+;/;
        ! function() {
            var a = ba.createDocumentFragment(),
                b = a.appendChild(ba.createElement("div")),
                c = ba.createElement("input");
            c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), ma.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", ma.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
        }();
        var Ya = ba.documentElement,
            Za = /^key/,
            $a = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            _a = /^([^.]*)(?:\.(.+)|)/;
        oa.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = Ja.get(a);
                if (q)
                    for (c.handler && (f = c, c = f.handler, e = f.selector), e && oa.find.matchesSelector(Ya, e), c.guid || (c.guid = oa.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                        return "undefined" != typeof oa && oa.event.triggered !== b.type ? oa.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(Ea) || [""], j = b.length; j--;) h = _a.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = oa.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = oa.event.special[n] || {}, k = oa.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && oa.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), oa.event.global[n] = !0)
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = Ja.hasData(a) && Ja.get(a);
                if (q && (i = q.events)) {
                    for (b = (b || "").match(Ea) || [""], j = b.length; j--;)
                        if (h = _a.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = oa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || oa.removeEvent(a, n, q.handle), delete i[n])
                        } else
                            for (n in i) oa.event.remove(a, n + b[j], c, d, !0);
                    oa.isEmptyObject(i) && Ja.remove(a, "handle events")
                }
            },
            dispatch: function(a) {
                var b, c, d, e, f, g, h = oa.event.fix(a),
                    i = new Array(arguments.length),
                    j = (Ja.get(this, "events") || {})[h.type] || [],
                    k = oa.event.special[h.type] || {};
                for (i[0] = h, b = 1; b < arguments.length; b++) i[b] = arguments[b];
                if (h.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, h) !== !1) {
                    for (g = oa.event.handlers.call(this, h, j), b = 0;
                         (e = g[b++]) && !h.isPropagationStopped();)
                        for (h.currentTarget = e.elem, c = 0;
                             (f = e.handlers[c++]) && !h.isImmediatePropagationStopped();)(!h.rnamespace || h.rnamespace.test(f.namespace)) && (h.handleObj = f, h.data = f.data, d = ((oa.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, i), void 0 !== d && (h.result = d) === !1 && (h.preventDefault(), h.stopPropagation()));
                    return k.postDispatch && k.postDispatch.call(this, h), h.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g, h = [],
                    i = b.delegateCount,
                    j = a.target;
                if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                    for (; j !== this; j = j.parentNode || this)
                        if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                            for (f = [], g = {}, c = 0; i > c; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? oa(e, this).index(j) > -1 : oa.find(e, this, null, [j]).length), g[e] && f.push(d);
                            f.length && h.push({
                                elem: j,
                                handlers: f
                            })
                        }
                return j = this, i < b.length && h.push({
                    elem: j,
                    handlers: b.slice(i)
                }), h
            },
            addProp: function(a, b) {
                Object.defineProperty(oa.Event.prototype, a, {
                    enumerable: !0,
                    configurable: !0,
                    get: oa.isFunction(b) ? function() {
                        return this.originalEvent ? b(this.originalEvent) : void 0
                    } : function() {
                        return this.originalEvent ? this.originalEvent[a] : void 0
                    },
                    set: function(b) {
                        Object.defineProperty(this, a, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: b
                        })
                    }
                })
            },
            fix: function(a) {
                return a[oa.expando] ? a : new oa.Event(a)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== w() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === w() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && oa.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(a) {
                        return oa.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            }
        }, oa.removeEvent = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c)
        }, oa.Event = function(a, b) {
            return this instanceof oa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? u : v, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && oa.extend(this, b), this.timeStamp = a && a.timeStamp || oa.now(), void(this[oa.expando] = !0)) : new oa.Event(a, b)
        }, oa.Event.prototype = {
            constructor: oa.Event,
            isDefaultPrevented: v,
            isPropagationStopped: v,
            isImmediatePropagationStopped: v,
            isSimulated: !1,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = u, a && !this.isSimulated && a.preventDefault()
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = u, a && !this.isSimulated && a.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = u, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, oa.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(a) {
                var b = a.button;
                return null == a.which && Za.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && $a.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
            }
        }, oa.event.addProp), oa.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            oa.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return (!e || e !== d && !oa.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), oa.fn.extend({
            on: function(a, b, c, d) {
                return x(this, a, b, c, d)
            },
            one: function(a, b, c, d) {
                return x(this, a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, oa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this
                }
                return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = v), this.each(function() {
                    oa.event.remove(this, a, c, b)
                })
            }
        });
        var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            bb = /<script|<style|<link/i,
            cb = /checked\s*(?:[^=]|=\s*.checked.)/i,
            db = /^true\/(.*)/,
            eb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        oa.extend({
            htmlPrefilter: function(a) {
                return a.replace(ab, "<$1></$2>")
            },
            clone: function(a, b, c) {
                var d, e, f, g, h = a.cloneNode(!0),
                    i = oa.contains(a.ownerDocument, a);
                if (!(ma.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || oa.isXMLDoc(a)))
                    for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) C(f[d], g[d]);
                if (b)
                    if (c)
                        for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) B(f[d], g[d]);
                    else B(a, h);
                return g = r(h, "script"), g.length > 0 && s(g, !i && r(a, "script")), h
            },
            cleanData: function(a) {
                for (var b, c, d, e = oa.event.special, f = 0; void 0 !== (c = a[f]); f++)
                    if (Ia(c)) {
                        if (b = c[Ja.expando]) {
                            if (b.events)
                                for (d in b.events) e[d] ? oa.event.remove(c, d) : oa.removeEvent(c, d, b.handle);
                            c[Ja.expando] = void 0
                        }
                        c[Ka.expando] && (c[Ka.expando] = void 0)
                    }
            }
        }), oa.fn.extend({
            detach: function(a) {
                return E(this, a, !0)
            },
            remove: function(a) {
                return E(this, a)
            },
            text: function(a) {
                return Ha(this, function(a) {
                    return void 0 === a ? oa.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                    })
                }, null, a, arguments.length)
            },
            append: function() {
                return D(this, arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = y(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return D(this, arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = y(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return D(this, arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return D(this, arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (oa.cleanData(r(a, !1)), a.textContent = "");
                return this
            },
            clone: function(a, b) {
                return a = null != a && a, b = null == b ? a : b, this.map(function() {
                    return oa.clone(this, a, b)
                })
            },
            html: function(a) {
                return Ha(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                    if ("string" == typeof a && !bb.test(a) && !Wa[(Ua.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = oa.htmlPrefilter(a);
                        try {
                            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (oa.cleanData(r(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (a) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = [];
                return D(this, arguments, function(b) {
                    var c = this.parentNode;
                    oa.inArray(this, a) < 0 && (oa.cleanData(r(this)), c && c.replaceChild(b, this))
                }, a)
            }
        }), oa.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            oa.fn[a] = function(a) {
                for (var c, d = [], e = oa(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), oa(e[g])[b](c), fa.apply(d, c.get());
                return this.pushStack(d)
            }
        });
        var fb = /^margin/,
            gb = new RegExp("^(" + Na + ")(?!px)[a-z%]+$", "i"),
            hb = function(b) {
                var c = b.ownerDocument.defaultView;
                return c && c.opener || (c = a), c.getComputedStyle(b)
            };
        ! function() {
            function b() {
                if (h) {
                    h.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ya.appendChild(g);
                    var b = a.getComputedStyle(h);
                    c = "1%" !== b.top, f = "2px" === b.marginLeft, d = "4px" === b.width, h.style.marginRight = "50%", e = "4px" === b.marginRight, Ya.removeChild(g), h = null
                }
            }
            var c, d, e, f, g = ba.createElement("div"),
                h = ba.createElement("div");
            h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", ma.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h), oa.extend(ma, {
                pixelPosition: function() {
                    return b(), c
                },
                boxSizingReliable: function() {
                    return b(), d
                },
                pixelMarginRight: function() {
                    return b(), e
                },
                reliableMarginLeft: function() {
                    return b(), f
                }
            }))
        }();
        var ib = /^(none|table(?!-c[ea]).+)/,
            jb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            kb = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            lb = ["Webkit", "Moz", "ms"],
            mb = ba.createElement("div").style;
        oa.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = F(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = oa.camelCase(b),
                        i = a.style;
                    return b = oa.cssProps[h] || (oa.cssProps[h] = H(h) || h), g = oa.cssHooks[b] || oa.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Oa.exec(c)) && e[1] && (c = o(a, b, e), f = "number"), void(null != c && c === c && ("number" === f && (c += e && e[3] || (oa.cssNumber[h] ? "" : "px")), ma.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = oa.camelCase(b);
                return b = oa.cssProps[h] || (oa.cssProps[h] = H(h) || h), g = oa.cssHooks[b] || oa.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = F(a, b, d)), "normal" === e && b in kb && (e = kb[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
            }
        }), oa.each(["height", "width"], function(a, b) {
            oa.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? !ib.test(oa.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? K(a, b, d) : Ra(a, jb, function() {
                        return K(a, b, d)
                    }) : void 0
                },
                set: function(a, c, d) {
                    var e, f = d && hb(a),
                        g = d && J(a, b, d, "border-box" === oa.css(a, "boxSizing", !1, f), f);
                    return g && (e = Oa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = oa.css(a, b)), I(a, c, g)
                }
            }
        }), oa.cssHooks.marginLeft = G(ma.reliableMarginLeft, function(a, b) {
            return b ? (parseFloat(F(a, "marginLeft")) || a.getBoundingClientRect().left - Ra(a, {
                marginLeft: 0
            }, function() {
                return a.getBoundingClientRect().left
            })) + "px" : void 0
        }), oa.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            oa.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Pa[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, fb.test(a) || (oa.cssHooks[a + b].set = I)
        }), oa.fn.extend({
            css: function(a, b) {
                return Ha(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (oa.isArray(b)) {
                        for (d = hb(a), e = b.length; e > g; g++) f[b[g]] = oa.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? oa.style(a, b, c) : oa.css(a, b)
                }, a, b, arguments.length > 1)
            }
        }), oa.Tween = L, L.prototype = {
            constructor: L,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || oa.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (oa.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = L.propHooks[this.prop];
                return a && a.get ? a.get(this) : L.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = L.propHooks[this.prop];
                return this.options.duration ? this.pos = b = oa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : L.propHooks._default.set(this), this
            }
        }, L.prototype.init.prototype = L.prototype, L.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = oa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
                },
                set: function(a) {
                    oa.fx.step[a.prop] ? oa.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[oa.cssProps[a.prop]] && !oa.cssHooks[a.prop] ? a.elem[a.prop] = a.now : oa.style(a.elem, a.prop, a.now + a.unit)
                }
            }
        }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, oa.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            },
            _default: "swing"
        }, oa.fx = L.prototype.init, oa.fx.step = {};
        var nb, ob, pb = /^(?:toggle|show|hide)$/,
            qb = /queueHooks$/;
        oa.Animation = oa.extend(S, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return o(c.elem, a, Oa.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                oa.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(Ea);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], S.tweeners[c] = S.tweeners[c] || [], S.tweeners[c].unshift(b)
            },
            prefilters: [Q],
            prefilter: function(a, b) {
                b ? S.prefilters.unshift(a) : S.prefilters.push(a)
            }
        }), oa.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? oa.extend({}, a) : {
                complete: c || !c && b || oa.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !oa.isFunction(b) && b
            };
            return oa.fx.off || ba.hidden ? d.duration = 0 : "number" != typeof d.duration && (d.duration in oa.fx.speeds ? d.duration = oa.fx.speeds[d.duration] : d.duration = oa.fx.speeds._default), (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                oa.isFunction(d.old) && d.old.call(this), d.queue && oa.dequeue(this, d.queue)
            }, d
        }, oa.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(Qa).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = oa.isEmptyObject(a),
                    f = oa.speed(b, c, d),
                    g = function() {
                        var b = S(this, oa.extend({}, a), f);
                        (e || Ja.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = oa.timers,
                        g = Ja.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && qb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && oa.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = Ja.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = oa.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, oa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), oa.each(["toggle", "show", "hide"], function(a, b) {
            var c = oa.fn[b];
            oa.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(O(b, !0), a, d, e)
            }
        }), oa.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            oa.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), oa.timers = [], oa.fx.tick = function() {
            var a, b = 0,
                c = oa.timers;
            for (nb = oa.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || oa.fx.stop(), nb = void 0
        }, oa.fx.timer = function(a) {
            oa.timers.push(a), a() ? oa.fx.start() : oa.timers.pop()
        }, oa.fx.interval = 13, oa.fx.start = function() {
            ob || (ob = a.requestAnimationFrame ? a.requestAnimationFrame(M) : a.setInterval(oa.fx.tick, oa.fx.interval))
        }, oa.fx.stop = function() {
            a.cancelAnimationFrame ? a.cancelAnimationFrame(ob) : a.clearInterval(ob), ob = null
        }, oa.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oa.fn.delay = function(b, c) {
            return b = oa.fx ? oa.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
            function() {
                var a = ba.createElement("input"),
                    b = ba.createElement("select"),
                    c = b.appendChild(ba.createElement("option"));
                a.type = "checkbox", ma.checkOn = "" !== a.value, ma.optSelected = c.selected, a = ba.createElement("input"), a.value = "t", a.type = "radio", ma.radioValue = "t" === a.value
            }();
        var rb, sb = oa.expr.attrHandle;
        oa.fn.extend({
            attr: function(a, b) {
                return Ha(this, oa.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    oa.removeAttr(this, a)
                })
            }
        }), oa.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? oa.prop(a, b, c) : (1 === f && oa.isXMLDoc(a) || (e = oa.attrHooks[b.toLowerCase()] || (oa.expr.match.bool.test(b) ? rb : void 0)), void 0 !== c ? null === c ? void oa.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = oa.find.attr(a, b), null == d ? void 0 : d))
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!ma.radioValue && "radio" === b && oa.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            },
            removeAttr: function(a, b) {
                var c, d = 0,
                    e = b && b.match(Ea);
                if (e && 1 === a.nodeType)
                    for (; c = e[d++];) a.removeAttribute(c)
            }
        }), rb = {
            set: function(a, b, c) {
                return b === !1 ? oa.removeAttr(a, c) : a.setAttribute(c, c), c
            }
        }, oa.each(oa.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = sb[b] || oa.find.attr;
            sb[b] = function(a, b, d) {
                var e, f, g = b.toLowerCase();
                return d || (f = sb[g], sb[g] = e, e = null != c(a, b, d) ? g : null, sb[g] = f), e
            }
        });
        var tb = /^(?:input|select|textarea|button)$/i,
            ub = /^(?:a|area)$/i;
        oa.fn.extend({
            prop: function(a, b) {
                return Ha(this, oa.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return this.each(function() {
                    delete this[oa.propFix[a] || a]
                })
            }
        }), oa.extend({
            prop: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return 1 === f && oa.isXMLDoc(a) || (b = oa.propFix[b] || b, e = oa.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = oa.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : tb.test(a.nodeName) || ub.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), ma.optSelected || (oa.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex, null
            },
            set: function(a) {
                var b = a.parentNode;
                b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
            }
        }), oa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            oa.propFix[this.toLowerCase()] = this
        }), oa.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h, i = 0;
                if (oa.isFunction(a)) return this.each(function(b) {
                    oa(this).addClass(a.call(this, b, U(this)))
                });
                if ("string" == typeof a && a)
                    for (b = a.match(Ea) || []; c = this[i++];)
                        if (e = U(c), d = 1 === c.nodeType && " " + T(e) + " ") {
                            for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                            h = T(d), e !== h && c.setAttribute("class", h)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h, i = 0;
                if (oa.isFunction(a)) return this.each(function(b) {
                    oa(this).removeClass(a.call(this, b, U(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof a && a)
                    for (b = a.match(Ea) || []; c = this[i++];)
                        if (e = U(c), d = 1 === c.nodeType && " " + T(e) + " ") {
                            for (g = 0; f = b[g++];)
                                for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                            h = T(d), e !== h && c.setAttribute("class", h)
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : oa.isFunction(a) ? this.each(function(c) {
                    oa(this).toggleClass(a.call(this, c, U(this), b), b)
                }) : this.each(function() {
                    var b, d, e, f;
                    if ("string" === c)
                        for (d = 0, e = oa(this), f = a.match(Ea) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else(void 0 === a || "boolean" === c) && (b = U(this), b && Ja.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : Ja.get(this, "__className__") || ""))
                })
            },
            hasClass: function(a) {
                var b, c, d = 0;
                for (b = " " + a + " "; c = this[d++];)
                    if (1 === c.nodeType && (" " + T(U(c)) + " ").indexOf(b) > -1) return !0;
                return !1
            }
        });
        var vb = /\r/g;
        oa.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0];
                return arguments.length ? (d = oa.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, oa(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : oa.isArray(e) && (e = oa.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = oa.valHooks[this.type] || oa.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })) : e ? (b = oa.valHooks[e.type] || oa.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(vb, "") : null == c ? "" : c)) : void 0
            }
        }), oa.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = oa.find.attr(a, "value");
                        return null != b ? b : T(oa.text(a))
                    }
                },
                select: {
                    get: function(a) {
                        var b, c, d, e = a.options,
                            f = a.selectedIndex,
                            g = "select-one" === a.type,
                            h = g ? null : [],
                            i = g ? f + 1 : e.length;
                        for (d = 0 > f ? i : g ? f : 0; i > d; d++)
                            if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !oa.nodeName(c.parentNode, "optgroup"))) {
                                if (b = oa(c).val(), g) return b;
                                h.push(b)
                            }
                        return h
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = oa.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = oa.inArray(oa.valHooks.option.get(d), f) > -1) && (c = !0);
                        return c || (a.selectedIndex = -1), f
                    }
                }
            }
        }), oa.each(["radio", "checkbox"], function() {
            oa.valHooks[this] = {
                set: function(a, b) {
                    return oa.isArray(b) ? a.checked = oa.inArray(oa(a).val(), b) > -1 : void 0
                }
            }, ma.checkOn || (oa.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var wb = /^(?:focusinfocus|focusoutblur)$/;
        oa.extend(oa.event, {
            trigger: function(b, c, d, e) {
                var f, g, h, i, j, k, l, m = [d || ba],
                    n = ja.call(b, "type") ? b.type : b,
                    o = ja.call(b, "namespace") ? b.namespace.split(".") : [];
                if (g = h = d = d || ba, 3 !== d.nodeType && 8 !== d.nodeType && !wb.test(n + oa.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[oa.expando] ? b : new oa.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : oa.makeArray(c, [b]), l = oa.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                    if (!e && !l.noBubble && !oa.isWindow(d)) {
                        for (i = l.delegateType || n, wb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                        h === (d.ownerDocument || ba) && m.push(h.defaultView || h.parentWindow || a)
                    }
                    for (f = 0;
                         (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (Ja.get(g, "events") || {})[b.type] && Ja.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && Ia(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                    return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !Ia(d) || j && oa.isFunction(d[n]) && !oa.isWindow(d) && (h = d[j], h && (d[j] = null), oa.event.triggered = n, d[n](), oa.event.triggered = void 0, h && (d[j] = h)), b.result
                }
            },
            simulate: function(a, b, c) {
                var d = oa.extend(new oa.Event, c, {
                    type: a,
                    isSimulated: !0
                });
                oa.event.trigger(d, null, b)
            }
        }), oa.fn.extend({
            trigger: function(a, b) {
                return this.each(function() {
                    oa.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? oa.event.trigger(a, b, c, !0) : void 0
            }
        }), oa.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
            oa.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), oa.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }), ma.focusin = "onfocusin" in a, ma.focusin || oa.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                oa.event.simulate(b, a.target, oa.event.fix(a))
            };
            oa.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        e = Ja.access(d, b);
                    e || d.addEventListener(a, c, !0), Ja.access(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        e = Ja.access(d, b) - 1;
                    e ? Ja.access(d, b, e) : (d.removeEventListener(a, c, !0), Ja.remove(d, b))
                }
            }
        });
        var xb = a.location,
            yb = oa.now(),
            zb = /\?/;
        oa.parseXML = function(b) {
            var c;
            if (!b || "string" != typeof b) return null;
            try {
                c = (new a.DOMParser).parseFromString(b, "text/xml")
            } catch (a) {
                c = void 0
            }
            return (!c || c.getElementsByTagName("parsererror").length) && oa.error("Invalid XML: " + b), c
        };
        var Ab = /\[\]$/,
            Bb = /\r?\n/g,
            Cb = /^(?:submit|button|image|reset|file)$/i,
            Db = /^(?:input|select|textarea|keygen)/i;
        oa.param = function(a, b) {
            var c, d = [],
                e = function(a, b) {
                    var c = oa.isFunction(b) ? b() : b;
                    d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
                };
            if (oa.isArray(a) || a.jquery && !oa.isPlainObject(a)) oa.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (c in a) V(c, a[c], b, e);
            return d.join("&")
        }, oa.fn.extend({
            serialize: function() {
                return oa.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = oa.prop(this, "elements");
                    return a ? oa.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !oa(this).is(":disabled") && Db.test(this.nodeName) && !Cb.test(a) && (this.checked || !Ta.test(a))
                }).map(function(a, b) {
                    var c = oa(this).val();
                    return null == c ? null : oa.isArray(c) ? oa.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(Bb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(Bb, "\r\n")
                    }
                }).get()
            }
        });
        var Eb = /%20/g,
            Fb = /#.*$/,
            Gb = /([?&])_=[^&]*/,
            Hb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ib = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Jb = /^(?:GET|HEAD)$/,
            Kb = /^\/\//,
            Lb = {},
            Mb = {},
            Nb = "*/".concat("*"),
            Ob = ba.createElement("a");
        Ob.href = xb.href, oa.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xb.href,
                type: "GET",
                isLocal: Ib.test(xb.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Nb,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": oa.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? Y(Y(a, oa.ajaxSettings), b) : Y(oa.ajaxSettings, a)
            },
            ajaxPrefilter: W(Lb),
            ajaxTransport: W(Mb),
            ajax: function(b, c) {
                function d(b, c, d, h) {
                    var j, m, n, u, v, w = c;
                    k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = Z(o, x, d)), u = $(o, u, x, j), j ? (o.ifModified && (v = x.getResponseHeader("Last-Modified"), v && (oa.lastModified[f] = v), v = x.getResponseHeader("etag"), v && (oa.etag[f] = v)), 204 === b || "HEAD" === o.type ? w = "nocontent" : 304 === b ? w = "notmodified" : (w = u.state, m = u.data, n = u.error, j = !n)) : (n = w, (b || !w) && (w = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || w) + "", j ? r.resolveWith(p, [m, w, x]) : r.rejectWith(p, [x, w, n]), x.statusCode(t), t = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [x, o, j ? m : n]), s.fireWith(p, [x, w]), l && (q.trigger("ajaxComplete", [x, o]), --oa.active || oa.event.trigger("ajaxStop")))
                }
                "object" == typeof b && (c = b, b = void 0), c = c || {};
                var e, f, g, h, i, j, k, l, m, n, o = oa.ajaxSetup({}, c),
                    p = o.context || o,
                    q = o.context && (p.nodeType || p.jquery) ? oa(p) : oa.event,
                    r = oa.Deferred(),
                    s = oa.Callbacks("once memory"),
                    t = o.statusCode || {},
                    u = {},
                    v = {},
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (k) {
                                if (!h)
                                    for (h = {}; b = Hb.exec(g);) h[b[1].toLowerCase()] = b[2];
                                b = h[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return k ? g : null
                        },
                        setRequestHeader: function(a, b) {
                            return null == k && (a = v[a.toLowerCase()] = v[a.toLowerCase()] || a, u[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return null == k && (o.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (k) x.always(a[x.status]);
                                else
                                    for (b in a) t[b] = [t[b], a[b]];
                            return this
                        },
                        abort: function(a) {
                            var b = a || w;
                            return e && e.abort(b), d(0, b), this
                        }
                    };
                if (r.promise(x), o.url = ((b || o.url || xb.href) + "").replace(Kb, xb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(Ea) || [""], null == o.crossDomain) {
                    j = ba.createElement("a");
                    try {
                        j.href = o.url, j.href = j.href, o.crossDomain = Ob.protocol + "//" + Ob.host != j.protocol + "//" + j.host
                    } catch (a) {
                        o.crossDomain = !0
                    }
                }
                if (o.data && o.processData && "string" != typeof o.data && (o.data = oa.param(o.data, o.traditional)), X(Lb, o, c, x), k) return x;
                l = oa.event && o.global, l && 0 === oa.active++ && oa.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Jb.test(o.type), f = o.url.replace(Fb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Eb, "+")) : (n = o.url.slice(f.length), o.data && (f += (zb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Gb, "$1"), n = (zb.test(f) ? "&" : "?") + "_=" + yb++ + n), o.url = f + n), o.ifModified && (oa.lastModified[f] && x.setRequestHeader("If-Modified-Since", oa.lastModified[f]), oa.etag[f] && x.setRequestHeader("If-None-Match", oa.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", o.contentType), x.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Nb + "; q=0.01" : "") : o.accepts["*"]);
                for (m in o.headers) x.setRequestHeader(m, o.headers[m]);
                if (o.beforeSend && (o.beforeSend.call(p, x, o) === !1 || k)) return x.abort();
                if (w = "abort", s.add(o.complete), x.done(o.success), x.fail(o.error), e = X(Mb, o, c, x)) {
                    if (x.readyState = 1, l && q.trigger("ajaxSend", [x, o]), k) return x;
                    o.async && o.timeout > 0 && (i = a.setTimeout(function() {
                        x.abort("timeout")
                    }, o.timeout));
                    try {
                        k = !1, e.send(u, d)
                    } catch (a) {
                        if (k) throw a;
                        d(-1, a)
                    }
                } else d(-1, "No Transport");
                return x
            },
            getJSON: function(a, b, c) {
                return oa.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return oa.get(a, void 0, b, "script")
            }
        }), oa.each(["get", "post"], function(a, b) {
            oa[b] = function(a, c, d, e) {
                return oa.isFunction(c) && (e = e || d, d = c, c = void 0), oa.ajax(oa.extend({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                }, oa.isPlainObject(a) && a))
            }
        }), oa._evalUrl = function(a) {
            return oa.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, oa.fn.extend({
            wrapAll: function(a) {
                var b;
                return this[0] && (oa.isFunction(a) && (a = a.call(this[0])), b = oa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                    return a
                }).append(this)), this
            },
            wrapInner: function(a) {
                return oa.isFunction(a) ? this.each(function(b) {
                    oa(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = oa(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = oa.isFunction(a);
                return this.each(function(c) {
                    oa(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function(a) {
                return this.parent(a).not("body").each(function() {
                    oa(this).replaceWith(this.childNodes)
                }), this
            }
        }), oa.expr.pseudos.hidden = function(a) {
            return !oa.expr.pseudos.visible(a)
        }, oa.expr.pseudos.visible = function(a) {
            return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
        }, oa.ajaxSettings.xhr = function() {
            try {
                return new a.XMLHttpRequest
            } catch (a) {}
        };
        var Pb = {
                0: 200,
                1223: 204
            },
            Qb = oa.ajaxSettings.xhr();
        ma.cors = !!Qb && "withCredentials" in Qb, ma.ajax = Qb = !!Qb, oa.ajaxTransport(function(b) {
            var c, d;
            return ma.cors || Qb && !b.crossDomain ? {
                send: function(e, f) {
                    var g, h = b.xhr();
                    if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (g in b.xhrFields) h[g] = b.xhrFields[g];
                    b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    for (g in e) h.setRequestHeader(g, e[g]);
                    c = function(a) {
                        return function() {
                            c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Pb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                                binary: h.response
                            } : {
                                text: h.responseText
                            }, h.getAllResponseHeaders()))
                        }
                    }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                        4 === h.readyState && a.setTimeout(function() {
                            c && d()
                        })
                    }, c = c("abort");
                    try {
                        h.send(b.hasContent && b.data || null)
                    } catch (a) {
                        if (c) throw a
                    }
                },
                abort: function() {
                    c && c()
                }
            } : void 0
        }), oa.ajaxPrefilter(function(a) {
            a.crossDomain && (a.contents.script = !1)
        }), oa.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(a) {
                    return oa.globalEval(a), a
                }
            }
        }), oa.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
        }), oa.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function(d, e) {
                        b = oa("<script>").prop({
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", c = function(a) {
                            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                        }), ba.head.appendChild(b[0])
                    },
                    abort: function() {
                        c && c()
                    }
                }
            }
        });
        var Rb = [],
            Sb = /(=)\?(?=&|$)|\?\?/;
        oa.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = Rb.pop() || oa.expando + "_" + yb++;
                return this[a] = !0, a
            }
        }), oa.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (Sb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Sb.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = oa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Sb, "$1" + e) : b.jsonp !== !1 && (b.url += (zb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
                return g || oa.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                g = arguments
            }, d.always(function() {
                void 0 === f ? oa(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Rb.push(e)), g && oa.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
        }), ma.createHTMLDocument = function() {
            var a = ba.implementation.createHTMLDocument("").body;
            return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
        }(), oa.parseHTML = function(a, b, c) {
            if ("string" != typeof a) return [];
            "boolean" == typeof b && (c = b, b = !1);
            var d, e, f;
            return b || (ma.createHTMLDocument ? (b = ba.implementation.createHTMLDocument(""), d = b.createElement("base"), d.href = ba.location.href, b.head.appendChild(d)) : b = ba), e = xa.exec(a), f = !c && [], e ? [b.createElement(e[1])] : (e = t([a], b, f), f && f.length && oa(f).remove(), oa.merge([], e.childNodes))
        }, oa.fn.load = function(a, b, c) {
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h > -1 && (d = T(a.slice(h)), a = a.slice(0, h)), oa.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && oa.ajax({
                url: a,
                type: e || "GET",
                dataType: "html",
                data: b
            }).done(function(a) {
                f = arguments, g.html(d ? oa("<div>").append(oa.parseHTML(a)).find(d) : a)
            }).always(c && function(a, b) {
                    g.each(function() {
                        c.apply(this, f || [a.responseText, b, a])
                    })
                }), this
        }, oa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            oa.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), oa.expr.pseudos.animated = function(a) {
            return oa.grep(oa.timers, function(b) {
                return a === b.elem
            }).length
        }, oa.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = oa.css(a, "position"),
                    l = oa(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = oa.css(a, "top"), i = oa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), oa.isFunction(b) && (b = b.call(a, c, oa.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, oa.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                    oa.offset.setOffset(this, a, b)
                });
                var b, c, d, e, f = this[0];
                return f ? f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = _(e), b = e.documentElement, {
                    top: d.top + c.pageYOffset - b.clientTop,
                    left: d.left + c.pageXOffset - b.clientLeft
                }) : d) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = this[0],
                        d = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === oa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), oa.nodeName(a[0], "html") || (d = a.offset()), d = {
                        top: d.top + oa.css(a[0], "borderTopWidth", !0),
                        left: d.left + oa.css(a[0], "borderLeftWidth", !0)
                    }), {
                        top: b.top - d.top - oa.css(c, "marginTop", !0),
                        left: b.left - d.left - oa.css(c, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent; a && "static" === oa.css(a, "position");) a = a.offsetParent;
                    return a || Ya
                })
            }
        }), oa.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, b) {
            var c = "pageYOffset" === b;
            oa.fn[a] = function(d) {
                return Ha(this, function(a, d, e) {
                    var f = _(a);
                    return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
                }, a, d, arguments.length)
            }
        }), oa.each(["top", "left"], function(a, b) {
            oa.cssHooks[b] = G(ma.pixelPosition, function(a, c) {
                return c ? (c = F(a, b), gb.test(c) ? oa(a).position()[b] + "px" : c) : void 0
            })
        }), oa.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            oa.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                oa.fn[d] = function(e, f) {
                    var g = arguments.length && (c || "boolean" != typeof e),
                        h = c || (e === !0 || f === !0 ? "margin" : "border");
                    return Ha(this, function(b, c, e) {
                        var f;
                        return oa.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? oa.css(b, c, h) : oa.style(b, c, e, h)
                    }, b, g ? e : void 0, g)
                }
            })
        }), oa.fn.extend({
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        }), oa.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
            return oa
        });
        var Tb = a.jQuery,
            Ub = a.$;
        return oa.noConflict = function(b) {
            return a.$ === oa && (a.$ = Ub), b && a.jQuery === oa && (a.jQuery = Tb), oa
        }, b || (a.jQuery = a.$ = oa), oa
    }), function(a, b) {
        "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b(require, exports, module) : a.Tether = b()
    }(this, function(a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function e(a) {
            var b = getComputedStyle(a) || {},
                c = b.position;
            if ("fixed" === c) return a;
            for (var d = a; d = d.parentNode;) {
                var e = void 0;
                try {
                    e = getComputedStyle(d)
                } catch (a) {}
                if ("undefined" == typeof e || null === e) return d;
                var f = e,
                    g = f.overflow,
                    h = f.overflowX,
                    i = f.overflowY;
                if (/(auto|scroll)/.test(g + i + h) && ("absolute" !== c || ["relative", "absolute", "fixed"].indexOf(e.position) >= 0)) return d
            }
            return document.body
        }

        function f(a) {
            var b = void 0;
            a === document ? (b = document, a = document.documentElement) : b = a.ownerDocument;
            var c = b.documentElement,
                d = {},
                e = a.getBoundingClientRect();
            for (var f in e) d[f] = e[f];
            var g = y(b);
            return d.top -= g.top, d.left -= g.left, "undefined" == typeof d.width && (d.width = document.body.scrollWidth - d.left - d.right), "undefined" == typeof d.height && (d.height = document.body.scrollHeight - d.top - d.bottom), d.top = d.top - c.clientTop, d.left = d.left - c.clientLeft, d.right = b.body.clientWidth - d.width - d.left, d.bottom = b.body.clientHeight - d.height - d.top, d
        }

        function g(a) {
            return a.offsetParent || document.documentElement
        }

        function h() {
            var a = document.createElement("div");
            a.style.width = "100%", a.style.height = "200px";
            var b = document.createElement("div");
            i(b.style, {
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                visibility: "hidden",
                width: "200px",
                height: "150px",
                overflow: "hidden"
            }), b.appendChild(a), document.body.appendChild(b);
            var c = a.offsetWidth;
            b.style.overflow = "scroll";
            var d = a.offsetWidth;
            c === d && (d = b.clientWidth), document.body.removeChild(b);
            var e = c - d;
            return {
                width: e,
                height: e
            }
        }

        function i() {
            var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                b = [];
            return Array.prototype.push.apply(b, arguments), b.slice(1).forEach(function(b) {
                if (b)
                    for (var c in b)({}).hasOwnProperty.call(b, c) && (a[c] = b[c])
            }), a
        }

        function j(a, b) {
            if ("undefined" != typeof a.classList) b.split(" ").forEach(function(b) {
                b.trim() && a.classList.remove(b)
            });
            else {
                var c = new RegExp("(^| )" + b.split(" ").join("|") + "( |$)", "gi"),
                    d = m(a).replace(c, " ");
                n(a, d)
            }
        }

        function k(a, b) {
            if ("undefined" != typeof a.classList) b.split(" ").forEach(function(b) {
                b.trim() && a.classList.add(b)
            });
            else {
                j(a, b);
                var c = m(a) + (" " + b);
                n(a, c)
            }
        }

        function l(a, b) {
            if ("undefined" != typeof a.classList) return a.classList.contains(b);
            var c = m(a);
            return new RegExp("(^| )" + b + "( |$)", "gi").test(c)
        }

        function m(a) {
            return a.className instanceof SVGAnimatedString ? a.className.baseVal : a.className
        }

        function n(a, b) {
            a.setAttribute("class", b)
        }

        function o(a, b, c) {
            c.forEach(function(c) {
                -1 === b.indexOf(c) && l(a, c) && j(a, c)
            }), b.forEach(function(b) {
                l(a, b) || k(a, b)
            })
        }

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function p(a, b) {
            var c = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
            return a + c >= b && b >= a - c
        }

        function q() {
            return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
        }

        function r() {
            for (var a = {
                top: 0,
                left: 0
            }, b = arguments.length, c = Array(b), d = 0; b > d; d++) c[d] = arguments[d];
            return c.forEach(function(b) {
                var c = b.top,
                    d = b.left;
                "string" == typeof c && (c = parseFloat(c, 10)), "string" == typeof d && (d = parseFloat(d, 10)), a.top += c, a.left += d
            }), a
        }

        function s(a, b) {
            return "string" == typeof a.left && -1 !== a.left.indexOf("%") && (a.left = parseFloat(a.left, 10) / 100 * b.width), "string" == typeof a.top && -1 !== a.top.indexOf("%") && (a.top = parseFloat(a.top, 10) / 100 * b.height), a
        }

        function t(a, b) {
            return "scrollParent" === b ? b = a.scrollParent : "window" === b && (b = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), b === document && (b = b.documentElement), "undefined" != typeof b.nodeType && ! function() {
                var a = f(b),
                    c = a,
                    d = getComputedStyle(b);
                b = [c.left, c.top, a.width + c.left, a.height + c.top], R.forEach(function(a, c) {
                    a = a[0].toUpperCase() + a.substr(1), "Top" === a || "Left" === a ? b[c] += parseFloat(d["border" + a + "Width"]) : b[c] -= parseFloat(d["border" + a + "Width"])
                })
            }(), b
        }
        var u = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            v = void 0;
        "undefined" == typeof v && (v = {
            modules: []
        });
        var w = function() {
                var a = 0;
                return function() {
                    return ++a
                }
            }(),
            x = {},
            y = function(a) {
                var b = a._tetherZeroElement;
                "undefined" == typeof b && (b = a.createElement("div"), b.setAttribute("data-tether-id", w()), i(b.style, {
                    top: 0,
                    left: 0,
                    position: "absolute"
                }), a.body.appendChild(b), a._tetherZeroElement = b);
                var c = b.getAttribute("data-tether-id");
                if ("undefined" == typeof x[c]) {
                    x[c] = {};
                    var d = b.getBoundingClientRect();
                    for (var e in d) x[c][e] = d[e];
                    A(function() {
                        delete x[c]
                    })
                }
                return x[c]
            },
            z = [],
            A = function(a) {
                z.push(a)
            },
            B = function() {
                for (var a = void 0; a = z.pop();) a()
            },
            C = function() {
                function a() {
                    d(this, a)
                }
                return u(a, [{
                    key: "on",
                    value: function(a, b, c) {
                        var d = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                        "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[a] && (this.bindings[a] = []), this.bindings[a].push({
                            handler: b,
                            ctx: c,
                            once: d
                        })
                    }
                }, {
                    key: "once",
                    value: function(a, b, c) {
                        this.on(a, b, c, !0)
                    }
                }, {
                    key: "off",
                    value: function(a, b) {
                        if ("undefined" == typeof this.bindings || "undefined" == typeof this.bindings[a])
                            if ("undefined" == typeof b) delete this.bindings[a];
                            else
                                for (var c = 0; c < this.bindings[a].length;) this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : ++c
                    }
                }, {
                    key: "trigger",
                    value: function(a) {
                        if ("undefined" != typeof this.bindings && this.bindings[a]) {
                            for (var b = 0, c = arguments.length, d = Array(c > 1 ? c - 1 : 0), e = 1; c > e; e++) d[e - 1] = arguments[e];
                            for (; b < this.bindings[a].length;) {
                                var f = this.bindings[a][b],
                                    g = f.handler,
                                    h = f.ctx,
                                    i = f.once,
                                    j = h;
                                "undefined" == typeof j && (j = this), g.apply(j, d), i ? this.bindings[a].splice(b, 1) : ++b
                            }
                        }
                    }
                }]), a
            }();
        v.Utils = {
            getScrollParent: e,
            getBounds: f,
            getOffsetParent: g,
            extend: i,
            addClass: k,
            removeClass: j,
            hasClass: l,
            updateClasses: o,
            defer: A,
            flush: B,
            uniqueId: w,
            Evented: C,
            getScrollBarSize: h
        };
        var D = function() {
                function a(a, b) {
                    var c = [],
                        d = !0,
                        e = !1,
                        f = void 0;
                    try {
                        for (var g, h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value), !b || c.length !== b); d = !0);
                    } catch (a) {
                        e = !0, f = a
                    } finally {
                        try {
                            !d && h.return && h.return()
                        } finally {
                            if (e) throw f
                        }
                    }
                    return c
                }
                return function(b, c) {
                    if (Array.isArray(b)) return b;
                    if (Symbol.iterator in Object(b)) return a(b, c);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            u = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }();
        if ("undefined" == typeof v) throw new Error("You must include the utils.js file before tether.js");
        var E = v.Utils,
            e = E.getScrollParent,
            f = E.getBounds,
            g = E.getOffsetParent,
            i = E.extend,
            k = E.addClass,
            j = E.removeClass,
            o = E.updateClasses,
            A = E.defer,
            B = E.flush,
            h = E.getScrollBarSize,
            F = function() {
                if ("undefined" == typeof document) return "";
                for (var a = document.createElement("div"), b = ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"], c = 0; c < b.length; ++c) {
                    var d = b[c];
                    if (void 0 !== a.style[d]) return d
                }
            }(),
            G = [],
            H = function() {
                G.forEach(function(a) {
                    a.position(!1)
                }), B();
            };
        ! function() {
            var a = null,
                b = null,
                c = null,
                d = function d() {
                    return "undefined" != typeof b && b > 16 ? (b = Math.min(b - 16, 250), void(c = setTimeout(d, 250))) : void("undefined" != typeof a && q() - a < 10 || ("undefined" != typeof c && (clearTimeout(c), c = null), a = q(), H(), b = q() - a))
                };
            "undefined" != typeof window && ["resize", "scroll", "touchmove"].forEach(function(a) {
                window.addEventListener(a, d)
            })
        }();
        var I = {
                center: "center",
                left: "right",
                right: "left"
            },
            J = {
                middle: "middle",
                top: "bottom",
                bottom: "top"
            },
            K = {
                top: 0,
                left: 0,
                middle: "50%",
                center: "50%",
                bottom: "100%",
                right: "100%"
            },
            L = function(a, b) {
                var c = a.left,
                    d = a.top;
                return "auto" === c && (c = I[b.left]), "auto" === d && (d = J[b.top]), {
                    left: c,
                    top: d
                }
            },
            M = function(a) {
                var b = a.left,
                    c = a.top;
                return "undefined" != typeof K[a.left] && (b = K[a.left]), "undefined" != typeof K[a.top] && (c = K[a.top]), {
                    left: b,
                    top: c
                }
            },
            N = function(a) {
                var b = a.split(" "),
                    c = D(b, 2),
                    d = c[0],
                    e = c[1];
                return {
                    top: d,
                    left: e
                }
            },
            O = N,
            P = function() {
                function a(b) {
                    var c = this;
                    d(this, a), this.position = this.position.bind(this), G.push(this), this.history = [], this.setOptions(b, !1), v.modules.forEach(function(a) {
                        "undefined" != typeof a.initialize && a.initialize.call(c)
                    }), this.position()
                }
                return u(a, [{
                    key: "getClass",
                    value: function() {
                        var a = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                            b = this.options.classes;
                        return "undefined" != typeof b && b[a] ? this.options.classes[a] : this.options.classPrefix ? this.options.classPrefix + "-" + a : a
                    }
                }, {
                    key: "setOptions",
                    value: function(a) {
                        var b = this,
                            c = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
                            d = {
                                offset: "0 0",
                                targetOffset: "0 0",
                                targetAttachment: "auto auto",
                                classPrefix: "tether"
                            };
                        this.options = i(d, a);
                        var f = this.options,
                            g = f.element,
                            h = f.target,
                            j = f.targetModifier;
                        if (this.element = g, this.target = h, this.targetModifier = j, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function(a) {
                                if ("undefined" == typeof b[a]) throw new Error("Tether Error: Both element and target must be defined");
                                "undefined" != typeof b[a].jquery ? b[a] = b[a][0] : "string" == typeof b[a] && (b[a] = document.querySelector(b[a]))
                            }), k(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && k(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                        this.targetAttachment = O(this.options.targetAttachment), this.attachment = O(this.options.attachment), this.offset = N(this.options.offset), this.targetOffset = N(this.options.targetOffset), "undefined" != typeof this.scrollParent && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParent = this.target : this.scrollParent = e(this.target), this.options.enabled !== !1 && this.enable(c)
                    }
                }, {
                    key: "getTargetBounds",
                    value: function() {
                        if ("undefined" == typeof this.targetModifier) return f(this.target);
                        if ("visible" === this.targetModifier) {
                            if (this.target === document.body) return {
                                top: pageYOffset,
                                left: pageXOffset,
                                height: innerHeight,
                                width: innerWidth
                            };
                            var a = f(this.target),
                                b = {
                                    height: a.height,
                                    width: a.width,
                                    top: a.top,
                                    left: a.left
                                };
                            return b.height = Math.min(b.height, a.height - (pageYOffset - a.top)), b.height = Math.min(b.height, a.height - (a.top + a.height - (pageYOffset + innerHeight))), b.height = Math.min(innerHeight, b.height), b.height -= 2, b.width = Math.min(b.width, a.width - (pageXOffset - a.left)), b.width = Math.min(b.width, a.width - (a.left + a.width - (pageXOffset + innerWidth))), b.width = Math.min(innerWidth, b.width), b.width -= 2, b.top < pageYOffset && (b.top = pageYOffset), b.left < pageXOffset && (b.left = pageXOffset), b
                        }
                        if ("scroll-handle" === this.targetModifier) {
                            var a = void 0,
                                c = this.target;
                            c === document.body ? (c = document.documentElement, a = {
                                left: pageXOffset,
                                top: pageYOffset,
                                height: innerHeight,
                                width: innerWidth
                            }) : a = f(c);
                            var d = getComputedStyle(c),
                                e = c.scrollWidth > c.clientWidth || [d.overflow, d.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
                                g = 0;
                            e && (g = 15);
                            var h = a.height - parseFloat(d.borderTopWidth) - parseFloat(d.borderBottomWidth) - g,
                                b = {
                                    width: 15,
                                    height: .975 * h * (h / c.scrollHeight),
                                    left: a.left + a.width - parseFloat(d.borderLeftWidth) - 15
                                },
                                i = 0;
                            408 > h && this.target === document.body && (i = -11e-5 * Math.pow(h, 2) - .00727 * h + 22.58), this.target !== document.body && (b.height = Math.max(b.height, 24));
                            var j = this.target.scrollTop / (c.scrollHeight - h);
                            return b.top = j * (h - b.height - i) + a.top + parseFloat(d.borderTopWidth), this.target === document.body && (b.height = Math.max(b.height, 24)), b
                        }
                    }
                }, {
                    key: "clearCache",
                    value: function() {
                        this._cache = {}
                    }
                }, {
                    key: "cache",
                    value: function(a, b) {
                        return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[a] && (this._cache[a] = b.call(this)), this._cache[a]
                    }
                }, {
                    key: "enable",
                    value: function() {
                        var a = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        this.options.addTargetClasses !== !1 && k(this.target, this.getClass("enabled")), k(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParent !== document && this.scrollParent.addEventListener("scroll", this.position), a && this.position()
                    }
                }, {
                    key: "disable",
                    value: function() {
                        j(this.target, this.getClass("enabled")), j(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParent && this.scrollParent.removeEventListener("scroll", this.position)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var a = this;
                        this.disable(), G.forEach(function(b, c) {
                            return b === a ? void G.splice(c, 1) : void 0
                        })
                    }
                }, {
                    key: "updateAttachClasses",
                    value: function(a, b) {
                        var c = this;
                        a = a || this.attachment, b = b || this.targetAttachment;
                        var d = ["left", "top", "bottom", "right", "middle", "center"];
                        "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
                        var e = this._addAttachClasses;
                        a.top && e.push(this.getClass("element-attached") + "-" + a.top), a.left && e.push(this.getClass("element-attached") + "-" + a.left), b.top && e.push(this.getClass("target-attached") + "-" + b.top), b.left && e.push(this.getClass("target-attached") + "-" + b.left);
                        var f = [];
                        d.forEach(function(a) {
                            f.push(c.getClass("element-attached") + "-" + a), f.push(c.getClass("target-attached") + "-" + a)
                        }), A(function() {
                            "undefined" != typeof c._addAttachClasses && (o(c.element, c._addAttachClasses, f), c.options.addTargetClasses !== !1 && o(c.target, c._addAttachClasses, f), delete c._addAttachClasses)
                        })
                    }
                }, {
                    key: "position",
                    value: function() {
                        var a = this,
                            b = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        if (this.enabled) {
                            this.clearCache();
                            var c = L(this.targetAttachment, this.attachment);
                            this.updateAttachClasses(this.attachment, c);
                            var d = this.cache("element-bounds", function() {
                                    return f(a.element)
                                }),
                                e = d.width,
                                i = d.height;
                            if (0 === e && 0 === i && "undefined" != typeof this.lastSize) {
                                var j = this.lastSize;
                                e = j.width, i = j.height
                            } else this.lastSize = {
                                width: e,
                                height: i
                            };
                            var k = this.cache("target-bounds", function() {
                                    return a.getTargetBounds()
                                }),
                                l = k,
                                m = s(M(this.attachment), {
                                    width: e,
                                    height: i
                                }),
                                n = s(M(c), l),
                                o = s(this.offset, {
                                    width: e,
                                    height: i
                                }),
                                p = s(this.targetOffset, l);
                            m = r(m, o), n = r(n, p);
                            for (var q = k.left + n.left - m.left, t = k.top + n.top - m.top, u = 0; u < v.modules.length; ++u) {
                                var w = v.modules[u],
                                    x = w.position.call(this, {
                                        left: q,
                                        top: t,
                                        targetAttachment: c,
                                        targetPos: k,
                                        elementPos: d,
                                        offset: m,
                                        targetOffset: n,
                                        manualOffset: o,
                                        manualTargetOffset: p,
                                        scrollbarSize: z,
                                        attachment: this.attachment
                                    });
                                if (x === !1) return !1;
                                "undefined" != typeof x && "object" == typeof x && (t = x.top, q = x.left)
                            }
                            var y = {
                                    page: {
                                        top: t,
                                        left: q
                                    },
                                    viewport: {
                                        top: t - pageYOffset,
                                        bottom: pageYOffset - t - i + innerHeight,
                                        left: q - pageXOffset,
                                        right: pageXOffset - q - e + innerWidth
                                    }
                                },
                                z = void 0;
                            return document.body.scrollWidth > window.innerWidth && (z = this.cache("scrollbar-size", h), y.viewport.bottom -= z.height), document.body.scrollHeight > window.innerHeight && (z = this.cache("scrollbar-size", h), y.viewport.right -= z.width), (-1 === ["", "static"].indexOf(document.body.style.position) || -1 === ["", "static"].indexOf(document.body.parentElement.style.position)) && (y.page.bottom = document.body.scrollHeight - t - i, y.page.right = document.body.scrollWidth - q - e), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && ! function() {
                                var b = a.cache("target-offsetparent", function() {
                                        return g(a.target)
                                    }),
                                    c = a.cache("target-offsetparent-bounds", function() {
                                        return f(b)
                                    }),
                                    d = getComputedStyle(b),
                                    e = c,
                                    h = {};
                                if (["Top", "Left", "Bottom", "Right"].forEach(function(a) {
                                        h[a.toLowerCase()] = parseFloat(d["border" + a + "Width"])
                                    }), c.right = document.body.scrollWidth - c.left - e.width + h.right, c.bottom = document.body.scrollHeight - c.top - e.height + h.bottom, y.page.top >= c.top + h.top && y.page.bottom >= c.bottom && y.page.left >= c.left + h.left && y.page.right >= c.right) {
                                    var i = b.scrollTop,
                                        j = b.scrollLeft;
                                    y.offset = {
                                        top: y.page.top - c.top + i - h.top,
                                        left: y.page.left - c.left + j - h.left
                                    }
                                }
                            }(), this.move(y), this.history.unshift(y), this.history.length > 3 && this.history.pop(), b && B(), !0
                        }
                    }
                }, {
                    key: "move",
                    value: function(a) {
                        var b = this;
                        if ("undefined" != typeof this.element.parentNode) {
                            var c = {};
                            for (var d in a) {
                                c[d] = {};
                                for (var e in a[d]) {
                                    for (var f = !1, h = 0; h < this.history.length; ++h) {
                                        var j = this.history[h];
                                        if ("undefined" != typeof j[d] && !p(j[d][e], a[d][e])) {
                                            f = !0;
                                            break
                                        }
                                    }
                                    f || (c[d][e] = !0)
                                }
                            }
                            var k = {
                                    top: "",
                                    left: "",
                                    right: "",
                                    bottom: ""
                                },
                                l = function(a, c) {
                                    var d = "undefined" != typeof b.options.optimizations,
                                        e = d ? b.options.optimizations.gpu : null;
                                    if (e !== !1) {
                                        var f = void 0,
                                            g = void 0;
                                        a.top ? (k.top = 0, f = c.top) : (k.bottom = 0, f = -c.bottom), a.left ? (k.left = 0, g = c.left) : (k.right = 0, g = -c.right), k[F] = "translateX(" + Math.round(g) + "px) translateY(" + Math.round(f) + "px)", "msTransform" !== F && (k[F] += " translateZ(0)")
                                    } else a.top ? k.top = c.top + "px" : k.bottom = c.bottom + "px", a.left ? k.left = c.left + "px" : k.right = c.right + "px"
                                },
                                m = !1;
                            if ((c.page.top || c.page.bottom) && (c.page.left || c.page.right) ? (k.position = "absolute", l(c.page, a.page)) : (c.viewport.top || c.viewport.bottom) && (c.viewport.left || c.viewport.right) ? (k.position = "fixed", l(c.viewport, a.viewport)) : "undefined" != typeof c.offset && c.offset.top && c.offset.left ? ! function() {
                                    k.position = "absolute";
                                    var d = b.cache("target-offsetparent", function() {
                                        return g(b.target)
                                    });
                                    g(b.element) !== d && A(function() {
                                        b.element.parentNode.removeChild(b.element), d.appendChild(b.element)
                                    }), l(c.offset, a.offset), m = !0
                                }() : (k.position = "absolute", l({
                                    top: !0,
                                    left: !0
                                }, a.page)), !m) {
                                for (var n = !0, o = this.element.parentNode; o && "BODY" !== o.tagName;) {
                                    if ("static" !== getComputedStyle(o).position) {
                                        n = !1;
                                        break
                                    }
                                    o = o.parentNode
                                }
                                n || (this.element.parentNode.removeChild(this.element), document.body.appendChild(this.element))
                            }
                            var q = {},
                                r = !1;
                            for (var e in k) {
                                var s = k[e],
                                    t = this.element.style[e];
                                "" !== t && "" !== s && ["top", "left", "bottom", "right"].indexOf(e) >= 0 && (t = parseFloat(t), s = parseFloat(s)), t !== s && (r = !0, q[e] = s)
                            }
                            r && A(function() {
                                i(b.element.style, q)
                            })
                        }
                    }
                }]), a
            }();
        P.modules = [], v.position = H;
        var Q = i(P, v),
            D = function() {
                function a(a, b) {
                    var c = [],
                        d = !0,
                        e = !1,
                        f = void 0;
                    try {
                        for (var g, h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value), !b || c.length !== b); d = !0);
                    } catch (a) {
                        e = !0, f = a
                    } finally {
                        try {
                            !d && h.return && h.return()
                        } finally {
                            if (e) throw f
                        }
                    }
                    return c
                }
                return function(b, c) {
                    if (Array.isArray(b)) return b;
                    if (Symbol.iterator in Object(b)) return a(b, c);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            E = v.Utils,
            f = E.getBounds,
            i = E.extend,
            o = E.updateClasses,
            A = E.defer,
            R = ["left", "top", "right", "bottom"];
        v.modules.push({
            position: function(a) {
                var b = this,
                    c = a.top,
                    d = a.left,
                    e = a.targetAttachment;
                if (!this.options.constraints) return !0;
                var g = this.cache("element-bounds", function() {
                        return f(b.element)
                    }),
                    h = g.height,
                    j = g.width;
                if (0 === j && 0 === h && "undefined" != typeof this.lastSize) {
                    var k = this.lastSize;
                    j = k.width, h = k.height
                }
                var l = this.cache("target-bounds", function() {
                        return b.getTargetBounds()
                    }),
                    m = l.height,
                    n = l.width,
                    p = [this.getClass("pinned"), this.getClass("out-of-bounds")];
                this.options.constraints.forEach(function(a) {
                    var b = a.outOfBoundsClass,
                        c = a.pinnedClass;
                    b && p.push(b), c && p.push(c)
                }), p.forEach(function(a) {
                    ["left", "top", "right", "bottom"].forEach(function(b) {
                        p.push(a + "-" + b)
                    })
                });
                var q = [],
                    r = i({}, e),
                    s = i({}, this.attachment);
                return this.options.constraints.forEach(function(a) {
                    var f = a.to,
                        g = a.attachment,
                        i = a.pin;
                    "undefined" == typeof g && (g = "");
                    var k = void 0,
                        l = void 0;
                    if (g.indexOf(" ") >= 0) {
                        var o = g.split(" "),
                            p = D(o, 2);
                        l = p[0], k = p[1]
                    } else k = l = g;
                    var u = t(b, f);
                    ("target" === l || "both" === l) && (c < u[1] && "top" === r.top && (c += m, r.top = "bottom"), c + h > u[3] && "bottom" === r.top && (c -= m, r.top = "top")), "together" === l && (c < u[1] && "top" === r.top && ("bottom" === s.top ? (c += m, r.top = "bottom", c += h, s.top = "top") : "top" === s.top && (c += m, r.top = "bottom", c -= h, s.top = "bottom")), c + h > u[3] && "bottom" === r.top && ("top" === s.top ? (c -= m, r.top = "top", c -= h, s.top = "bottom") : "bottom" === s.top && (c -= m, r.top = "top", c += h, s.top = "top")), "middle" === r.top && (c + h > u[3] && "top" === s.top ? (c -= h, s.top = "bottom") : c < u[1] && "bottom" === s.top && (c += h, s.top = "top"))), ("target" === k || "both" === k) && (d < u[0] && "left" === r.left && (d += n, r.left = "right"), d + j > u[2] && "right" === r.left && (d -= n, r.left = "left")), "together" === k && (d < u[0] && "left" === r.left ? "right" === s.left ? (d += n, r.left = "right", d += j, s.left = "left") : "left" === s.left && (d += n, r.left = "right", d -= j, s.left = "right") : d + j > u[2] && "right" === r.left ? "left" === s.left ? (d -= n, r.left = "left", d -= j, s.left = "right") : "right" === s.left && (d -= n, r.left = "left", d += j, s.left = "left") : "center" === r.left && (d + j > u[2] && "left" === s.left ? (d -= j, s.left = "right") : d < u[0] && "right" === s.left && (d += j, s.left = "left"))), ("element" === l || "both" === l) && (c < u[1] && "bottom" === s.top && (c += h, s.top = "top"), c + h > u[3] && "top" === s.top && (c -= h, s.top = "bottom")), ("element" === k || "both" === k) && (d < u[0] && ("right" === s.left ? (d += j, s.left = "left") : "center" === s.left && (d += j / 2, s.left = "left")), d + j > u[2] && ("left" === s.left ? (d -= j, s.left = "right") : "center" === s.left && (d -= j / 2, s.left = "right"))), "string" == typeof i ? i = i.split(",").map(function(a) {
                        return a.trim()
                    }) : i === !0 && (i = ["top", "left", "right", "bottom"]), i = i || [];
                    var v = [],
                        w = [];
                    c < u[1] && (i.indexOf("top") >= 0 ? (c = u[1], v.push("top")) : w.push("top")), c + h > u[3] && (i.indexOf("bottom") >= 0 ? (c = u[3] - h, v.push("bottom")) : w.push("bottom")), d < u[0] && (i.indexOf("left") >= 0 ? (d = u[0], v.push("left")) : w.push("left")), d + j > u[2] && (i.indexOf("right") >= 0 ? (d = u[2] - j, v.push("right")) : w.push("right")), v.length && ! function() {
                        var a = void 0;
                        a = "undefined" != typeof b.options.pinnedClass ? b.options.pinnedClass : b.getClass("pinned"), q.push(a), v.forEach(function(b) {
                            q.push(a + "-" + b)
                        })
                    }(), w.length && ! function() {
                        var a = void 0;
                        a = "undefined" != typeof b.options.outOfBoundsClass ? b.options.outOfBoundsClass : b.getClass("out-of-bounds"), q.push(a), w.forEach(function(b) {
                            q.push(a + "-" + b)
                        })
                    }(), (v.indexOf("left") >= 0 || v.indexOf("right") >= 0) && (s.left = r.left = !1), (v.indexOf("top") >= 0 || v.indexOf("bottom") >= 0) && (s.top = r.top = !1), (r.top !== e.top || r.left !== e.left || s.top !== b.attachment.top || s.left !== b.attachment.left) && b.updateAttachClasses(s, r)
                }), A(function() {
                    b.options.addTargetClasses !== !1 && o(b.target, q, p), o(b.element, q, p)
                }), {
                    top: c,
                    left: d
                }
            }
        });
        var E = v.Utils,
            f = E.getBounds,
            o = E.updateClasses,
            A = E.defer;
        v.modules.push({
            position: function(a) {
                var b = this,
                    c = a.top,
                    d = a.left,
                    e = this.cache("element-bounds", function() {
                        return f(b.element)
                    }),
                    g = e.height,
                    h = e.width,
                    i = this.getTargetBounds(),
                    j = c + g,
                    k = d + h,
                    l = [];
                c <= i.bottom && j >= i.top && ["left", "right"].forEach(function(a) {
                    var b = i[a];
                    (b === d || b === k) && l.push(a)
                }), d <= i.right && k >= i.left && ["top", "bottom"].forEach(function(a) {
                    var b = i[a];
                    (b === c || b === j) && l.push(a)
                });
                var m = [],
                    n = [],
                    p = ["left", "top", "right", "bottom"];
                return m.push(this.getClass("abutted")), p.forEach(function(a) {
                    m.push(b.getClass("abutted") + "-" + a)
                }), l.length && n.push(this.getClass("abutted")), l.forEach(function(a) {
                    n.push(b.getClass("abutted") + "-" + a)
                }), A(function() {
                    b.options.addTargetClasses !== !1 && o(b.target, n, m), o(b.element, n, m)
                }), !0
            }
        });
        var D = function() {
            function a(a, b) {
                var c = [],
                    d = !0,
                    e = !1,
                    f = void 0;
                try {
                    for (var g, h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value), !b || c.length !== b); d = !0);
                } catch (a) {
                    e = !0, f = a
                } finally {
                    try {
                        !d && h.return && h.return()
                    } finally {
                        if (e) throw f
                    }
                }
                return c
            }
            return function(b, c) {
                if (Array.isArray(b)) return b;
                if (Symbol.iterator in Object(b)) return a(b, c);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        return v.modules.push({
            position: function(a) {
                var b = a.top,
                    c = a.left;
                if (this.options.shift) {
                    var d = this.options.shift;
                    "function" == typeof this.options.shift && (d = this.options.shift.call(this, {
                        top: b,
                        left: c
                    }));
                    var e = void 0,
                        f = void 0;
                    if ("string" == typeof d) {
                        d = d.split(" "), d[1] = d[1] || d[0];
                        var g = d,
                            h = D(g, 2);
                        e = h[0], f = h[1], e = parseFloat(e, 10), f = parseFloat(f, 10)
                    } else e = d.top, f = d.left;
                    return b += e, c += f, {
                        top: b,
                        left: c
                    }
                }
            }
        }), Q
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(jQuery), + function() {
    function a(a, b) {
        if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !b || "object" != typeof b && "function" != typeof b ? a : b
    }

    function b(a, b) {
        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }

    function c(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
            return typeof a
        } : function(a) {
            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        },
        e = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }
            return function(b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(),
        f = function(a) {
            function b(a) {
                return {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }

            function c(a) {
                return (a[0] || a).nodeType
            }

            function d() {
                return {
                    bindType: h.end,
                    delegateType: h.end,
                    handle: function(b) {
                        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
                    }
                }
            }

            function e() {
                if (window.QUnit) return !1;
                var a = document.createElement("bootstrap");
                for (var b in j)
                    if (void 0 !== a.style[b]) return {
                        end: j[b]
                    };
                return !1
            }

            function f(b) {
                var c = this,
                    d = !1;
                return a(this).one(k.TRANSITION_END, function() {
                    d = !0
                }), setTimeout(function() {
                    d || k.triggerTransitionEnd(c)
                }, b), this
            }

            function g() {
                h = e(), a.fn.emulateTransitionEnd = f, k.supportsTransitionEnd() && (a.event.special[k.TRANSITION_END] = d())
            }
            var h = !1,
                i = 1e6,
                j = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                },
                k = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(a) {
                        do a += ~~(Math.random() * i); while (document.getElementById(a));
                        return a
                    },
                    getSelectorFromElement: function(a) {
                        var b = a.getAttribute("data-target");
                        return b || (b = a.getAttribute("href") || "", b = /^#[a-z]/i.test(b) ? b : null), b
                    },
                    reflow: function(a) {
                        new Function("bs", "return bs")(a.offsetHeight)
                    },
                    triggerTransitionEnd: function(b) {
                        a(b).trigger(h.end)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(h)
                    },
                    typeCheckConfig: function(a, d, e) {
                        for (var f in e)
                            if (e.hasOwnProperty(f)) {
                                var g = e[f],
                                    h = d[f],
                                    i = void 0;
                                if (i = h && c(h) ? "element" : b(h), !new RegExp(g).test(i)) throw new Error(a.toUpperCase() + ": " + ('Option "' + f + '" provided type "' + i + '" ') + ('but expected type "' + g + '".'))
                            }
                    }
                };
            return g(), k
        }(jQuery),
        g = (function(a) {
            var b = "alert",
                d = "4.0.0-alpha.5",
                g = "bs.alert",
                h = "." + g,
                i = ".data-api",
                j = a.fn[b],
                k = 150,
                l = {
                    DISMISS: '[data-dismiss="alert"]'
                },
                m = {
                    CLOSE: "close" + h,
                    CLOSED: "closed" + h,
                    CLICK_DATA_API: "click" + h + i
                },
                n = {
                    ALERT: "alert",
                    FADE: "fade",
                    IN: "in"
                },
                o = function() {
                    function b(a) {
                        c(this, b), this._element = a
                    }
                    return b.prototype.close = function(a) {
                        a = a || this._element;
                        var b = this._getRootElement(a),
                            c = this._triggerCloseEvent(b);
                        c.isDefaultPrevented() || this._removeElement(b)
                    }, b.prototype.dispose = function() {
                        a.removeData(this._element, g), this._element = null
                    }, b.prototype._getRootElement = function(b) {
                        var c = f.getSelectorFromElement(b),
                            d = !1;
                        return c && (d = a(c)[0]), d || (d = a(b).closest("." + n.ALERT)[0]), d
                    }, b.prototype._triggerCloseEvent = function(b) {
                        var c = a.Event(m.CLOSE);
                        return a(b).trigger(c), c
                    }, b.prototype._removeElement = function(b) {
                        return a(b).removeClass(n.IN), f.supportsTransitionEnd() && a(b).hasClass(n.FADE) ? void a(b).one(f.TRANSITION_END, a.proxy(this._destroyElement, this, b)).emulateTransitionEnd(k) : void this._destroyElement(b)
                    }, b.prototype._destroyElement = function(b) {
                        a(b).detach().trigger(m.CLOSED).remove()
                    }, b._jQueryInterface = function(c) {
                        return this.each(function() {
                            var d = a(this),
                                e = d.data(g);
                            e || (e = new b(this), d.data(g, e)), "close" === c && e[c](this)
                        })
                    }, b._handleDismiss = function(a) {
                        return function(b) {
                            b && b.preventDefault(), a.close(this)
                        }
                    }, e(b, null, [{
                        key: "VERSION",
                        get: function() {
                            return d
                        }
                    }]), b
                }();
            return a(document).on(m.CLICK_DATA_API, l.DISMISS, o._handleDismiss(new o)), a.fn[b] = o._jQueryInterface, a.fn[b].Constructor = o, a.fn[b].noConflict = function() {
                return a.fn[b] = j, o._jQueryInterface
            }, o
        }(jQuery), function(a) {
            var b = "button",
                d = "4.0.0-alpha.5",
                f = "bs.button",
                g = "." + f,
                h = ".data-api",
                i = a.fn[b],
                j = {
                    ACTIVE: "active",
                    BUTTON: "btn",
                    FOCUS: "focus"
                },
                k = {
                    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                    DATA_TOGGLE: '[data-toggle="buttons"]',
                    INPUT: "input",
                    ACTIVE: ".active",
                    BUTTON: ".btn"
                },
                l = {
                    CLICK_DATA_API: "click" + g + h,
                    FOCUS_BLUR_DATA_API: "focus" + g + h + " " + ("blur" + g + h)
                },
                m = function() {
                    function b(a) {
                        c(this, b), this._element = a
                    }
                    return b.prototype.toggle = function() {
                        var b = !0,
                            c = a(this._element).closest(k.DATA_TOGGLE)[0];
                        if (c) {
                            var d = a(this._element).find(k.INPUT)[0];
                            if (d) {
                                if ("radio" === d.type)
                                    if (d.checked && a(this._element).hasClass(j.ACTIVE)) b = !1;
                                    else {
                                        var e = a(c).find(k.ACTIVE)[0];
                                        e && a(e).removeClass(j.ACTIVE)
                                    }
                                b && (d.checked = !a(this._element).hasClass(j.ACTIVE), a(this._element).trigger("change")), d.focus()
                            }
                        } else this._element.setAttribute("aria-pressed", !a(this._element).hasClass(j.ACTIVE));
                        b && a(this._element).toggleClass(j.ACTIVE)
                    }, b.prototype.dispose = function() {
                        a.removeData(this._element, f), this._element = null
                    }, b._jQueryInterface = function(c) {
                        return this.each(function() {
                            var d = a(this).data(f);
                            d || (d = new b(this), a(this).data(f, d)), "toggle" === c && d[c]()
                        })
                    }, e(b, null, [{
                        key: "VERSION",
                        get: function() {
                            return d
                        }
                    }]), b
                }();
            return a(document).on(l.CLICK_DATA_API, k.DATA_TOGGLE_CARROT, function(b) {
                b.preventDefault();
                var c = b.target;
                a(c).hasClass(j.BUTTON) || (c = a(c).closest(k.BUTTON)), m._jQueryInterface.call(a(c), "toggle")
            }).on(l.FOCUS_BLUR_DATA_API, k.DATA_TOGGLE_CARROT, function(b) {
                var c = a(b.target).closest(k.BUTTON)[0];
                a(c).toggleClass(j.FOCUS, /^focus(in)?$/.test(b.type))
            }), a.fn[b] = m._jQueryInterface, a.fn[b].Constructor = m, a.fn[b].noConflict = function() {
                return a.fn[b] = i, m._jQueryInterface
            }, m
        }(jQuery), function(a) {
            var b = "carousel",
                g = "4.0.0-alpha.5",
                h = "bs.carousel",
                i = "." + h,
                j = ".data-api",
                k = a.fn[b],
                l = 600,
                m = 37,
                n = 39,
                o = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                p = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                q = {
                    NEXT: "next",
                    PREVIOUS: "prev"
                },
                r = {
                    SLIDE: "slide" + i,
                    SLID: "slid" + i,
                    KEYDOWN: "keydown" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i,
                    LOAD_DATA_API: "load" + i + j,
                    CLICK_DATA_API: "click" + i + j
                },
                s = {
                    CAROUSEL: "carousel",
                    ACTIVE: "active",
                    SLIDE: "slide",
                    RIGHT: "right",
                    LEFT: "left",
                    ITEM: "carousel-item"
                },
                t = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".next, .prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                u = function() {
                    function j(b, d) {
                        c(this, j), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(d), this._element = a(b)[0], this._indicatorsElement = a(this._element).find(t.INDICATORS)[0], this._addEventListeners()
                    }
                    return j.prototype.next = function() {
                        this._isSliding || this._slide(q.NEXT)
                    }, j.prototype.nextWhenVisible = function() {
                        document.hidden || this.next()
                    }, j.prototype.prev = function() {
                        this._isSliding || this._slide(q.PREVIOUS)
                    }, j.prototype.pause = function(b) {
                        b || (this._isPaused = !0), a(this._element).find(t.NEXT_PREV)[0] && f.supportsTransitionEnd() && (f.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, j.prototype.cycle = function(b) {
                        b || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval(a.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval))
                    }, j.prototype.to = function(b) {
                        var c = this;
                        this._activeElement = a(this._element).find(t.ACTIVE_ITEM)[0];
                        var d = this._getItemIndex(this._activeElement);
                        if (!(b > this._items.length - 1 || 0 > b)) {
                            if (this._isSliding) return void a(this._element).one(r.SLID, function() {
                                return c.to(b)
                            });
                            if (d === b) return this.pause(), void this.cycle();
                            var e = b > d ? q.NEXT : q.PREVIOUS;
                            this._slide(e, this._items[b])
                        }
                    }, j.prototype.dispose = function() {
                        a(this._element).off(i), a.removeData(this._element, h), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, j.prototype._getConfig = function(c) {
                        return c = a.extend({}, o, c), f.typeCheckConfig(b, c, p), c
                    }, j.prototype._addEventListeners = function() {
                        this._config.keyboard && a(this._element).on(r.KEYDOWN, a.proxy(this._keydown, this)), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || a(this._element).on(r.MOUSEENTER, a.proxy(this.pause, this)).on(r.MOUSELEAVE, a.proxy(this.cycle, this))
                    }, j.prototype._keydown = function(a) {
                        if (a.preventDefault(), !/input|textarea/i.test(a.target.tagName)) switch (a.which) {
                            case m:
                                this.prev();
                                break;
                            case n:
                                this.next();
                                break;
                            default:
                                return
                        }
                    }, j.prototype._getItemIndex = function(b) {
                        return this._items = a.makeArray(a(b).parent().find(t.ITEM)), this._items.indexOf(b)
                    }, j.prototype._getItemByDirection = function(a, b) {
                        var c = a === q.NEXT,
                            d = a === q.PREVIOUS,
                            e = this._getItemIndex(b),
                            f = this._items.length - 1,
                            g = d && 0 === e || c && e === f;
                        if (g && !this._config.wrap) return b;
                        var h = a === q.PREVIOUS ? -1 : 1,
                            i = (e + h) % this._items.length;
                        return -1 === i ? this._items[this._items.length - 1] : this._items[i]
                    }, j.prototype._triggerSlideEvent = function(b, c) {
                        var d = a.Event(r.SLIDE, {
                            relatedTarget: b,
                            direction: c
                        });
                        return a(this._element).trigger(d), d
                    }, j.prototype._setActiveIndicatorElement = function(b) {
                        if (this._indicatorsElement) {
                            a(this._indicatorsElement).find(t.ACTIVE).removeClass(s.ACTIVE);
                            var c = this._indicatorsElement.children[this._getItemIndex(b)];
                            c && a(c).addClass(s.ACTIVE)
                        }
                    }, j.prototype._slide = function(b, c) {
                        var d = this,
                            e = a(this._element).find(t.ACTIVE_ITEM)[0],
                            g = c || e && this._getItemByDirection(b, e),
                            h = Boolean(this._interval),
                            i = b === q.NEXT ? s.LEFT : s.RIGHT;
                        if (g && a(g).hasClass(s.ACTIVE)) return void(this._isSliding = !1);
                        var j = this._triggerSlideEvent(g, i);
                        if (!j.isDefaultPrevented() && e && g) {
                            this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(g);
                            var k = a.Event(r.SLID, {
                                relatedTarget: g,
                                direction: i
                            });
                            f.supportsTransitionEnd() && a(this._element).hasClass(s.SLIDE) ? (a(g).addClass(b), f.reflow(g), a(e).addClass(i), a(g).addClass(i), a(e).one(f.TRANSITION_END, function() {
                                a(g).removeClass(i).removeClass(b), a(g).addClass(s.ACTIVE), a(e).removeClass(s.ACTIVE).removeClass(b).removeClass(i), d._isSliding = !1, setTimeout(function() {
                                    return a(d._element).trigger(k)
                                }, 0)
                            }).emulateTransitionEnd(l)) : (a(e).removeClass(s.ACTIVE), a(g).addClass(s.ACTIVE), this._isSliding = !1, a(this._element).trigger(k)), h && this.cycle()
                        }
                    }, j._jQueryInterface = function(b) {
                        return this.each(function() {
                            var c = a(this).data(h),
                                e = a.extend({}, o, a(this).data());
                            "object" === ("undefined" == typeof b ? "undefined" : d(b)) && a.extend(e, b);
                            var f = "string" == typeof b ? b : e.slide;
                            if (c || (c = new j(this, e), a(this).data(h, c)), "number" == typeof b) c.to(b);
                            else if ("string" == typeof f) {
                                if (void 0 === c[f]) throw new Error('No method named "' + f + '"');
                                c[f]()
                            } else e.interval && (c.pause(), c.cycle())
                        })
                    }, j._dataApiClickHandler = function(b) {
                        var c = f.getSelectorFromElement(this);
                        if (c) {
                            var d = a(c)[0];
                            if (d && a(d).hasClass(s.CAROUSEL)) {
                                var e = a.extend({}, a(d).data(), a(this).data()),
                                    g = this.getAttribute("data-slide-to");
                                g && (e.interval = !1), j._jQueryInterface.call(a(d), e), g && a(d).data(h).to(g), b.preventDefault()
                            }
                        }
                    }, e(j, null, [{
                        key: "VERSION",
                        get: function() {
                            return g
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return o
                        }
                    }]), j
                }();
            return a(document).on(r.CLICK_DATA_API, t.DATA_SLIDE, u._dataApiClickHandler), a(window).on(r.LOAD_DATA_API, function() {
                a(t.DATA_RIDE).each(function() {
                    var b = a(this);
                    u._jQueryInterface.call(b, b.data())
                })
            }), a.fn[b] = u._jQueryInterface, a.fn[b].Constructor = u, a.fn[b].noConflict = function() {
                return a.fn[b] = k, u._jQueryInterface
            }, u
        }(jQuery), function(a) {
            var b = "collapse",
                g = "4.0.0-alpha.5",
                h = "bs.collapse",
                i = "." + h,
                j = ".data-api",
                k = a.fn[b],
                l = 600,
                m = {
                    toggle: !0,
                    parent: ""
                },
                n = {
                    toggle: "boolean",
                    parent: "string"
                },
                o = {
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    CLICK_DATA_API: "click" + i + j
                },
                p = {
                    IN: "in",
                    COLLAPSE: "collapse",
                    COLLAPSING: "collapsing",
                    COLLAPSED: "collapsed"
                },
                q = {
                    WIDTH: "width",
                    HEIGHT: "height"
                },
                r = {
                    ACTIVES: ".card > .in, .card > .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                s = function() {
                    function i(b, d) {
                        c(this, i), this._isTransitioning = !1, this._element = b, this._config = this._getConfig(d), this._triggerArray = a.makeArray(a('[data-toggle="collapse"][href="#' + b.id + '"],' + ('[data-toggle="collapse"][data-target="#' + b.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    return i.prototype.toggle = function() {
                        a(this._element).hasClass(p.IN) ? this.hide() : this.show()
                    }, i.prototype.show = function() {
                        var b = this;
                        if (!this._isTransitioning && !a(this._element).hasClass(p.IN)) {
                            var c = void 0,
                                d = void 0;
                            if (this._parent && (c = a.makeArray(a(r.ACTIVES)), c.length || (c = null)), !(c && (d = a(c).data(h), d && d._isTransitioning))) {
                                var e = a.Event(o.SHOW);
                                if (a(this._element).trigger(e), !e.isDefaultPrevented()) {
                                    c && (i._jQueryInterface.call(a(c), "hide"), d || a(c).data(h, null));
                                    var g = this._getDimension();
                                    a(this._element).removeClass(p.COLLAPSE).addClass(p.COLLAPSING), this._element.style[g] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && a(this._triggerArray).removeClass(p.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                    var j = function() {
                                        a(b._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).addClass(p.IN), b._element.style[g] = "", b.setTransitioning(!1), a(b._element).trigger(o.SHOWN)
                                    };
                                    if (!f.supportsTransitionEnd()) return void j();
                                    var k = g[0].toUpperCase() + g.slice(1),
                                        m = "scroll" + k;
                                    a(this._element).one(f.TRANSITION_END, j).emulateTransitionEnd(l), this._element.style[g] = this._element[m] + "px"
                                }
                            }
                        }
                    }, i.prototype.hide = function() {
                        var b = this;
                        if (!this._isTransitioning && a(this._element).hasClass(p.IN)) {
                            var c = a.Event(o.HIDE);
                            if (a(this._element).trigger(c), !c.isDefaultPrevented()) {
                                var d = this._getDimension(),
                                    e = d === q.WIDTH ? "offsetWidth" : "offsetHeight";
                                this._element.style[d] = this._element[e] + "px", f.reflow(this._element), a(this._element).addClass(p.COLLAPSING).removeClass(p.COLLAPSE).removeClass(p.IN), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && a(this._triggerArray).addClass(p.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                                var g = function() {
                                    b.setTransitioning(!1), a(b._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).trigger(o.HIDDEN)
                                };
                                return this._element.style[d] = "", f.supportsTransitionEnd() ? void a(this._element).one(f.TRANSITION_END, g).emulateTransitionEnd(l) : void g()
                            }
                        }
                    }, i.prototype.setTransitioning = function(a) {
                        this._isTransitioning = a
                    }, i.prototype.dispose = function() {
                        a.removeData(this._element, h), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, i.prototype._getConfig = function(c) {
                        return c = a.extend({}, m, c), c.toggle = Boolean(c.toggle), f.typeCheckConfig(b, c, n), c
                    }, i.prototype._getDimension = function() {
                        var b = a(this._element).hasClass(q.WIDTH);
                        return b ? q.WIDTH : q.HEIGHT
                    }, i.prototype._getParent = function() {
                        var b = this,
                            c = a(this._config.parent)[0],
                            d = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return a(c).find(d).each(function(a, c) {
                            b._addAriaAndCollapsedClass(i._getTargetFromElement(c), [c])
                        }), c
                    }, i.prototype._addAriaAndCollapsedClass = function(b, c) {
                        if (b) {
                            var d = a(b).hasClass(p.IN);
                            b.setAttribute("aria-expanded", d), c.length && a(c).toggleClass(p.COLLAPSED, !d).attr("aria-expanded", d)
                        }
                    }, i._getTargetFromElement = function(b) {
                        var c = f.getSelectorFromElement(b);
                        return c ? a(c)[0] : null
                    }, i._jQueryInterface = function(b) {
                        return this.each(function() {
                            var c = a(this),
                                e = c.data(h),
                                f = a.extend({}, m, c.data(), "object" === ("undefined" == typeof b ? "undefined" : d(b)) && b);
                            if (!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || (e = new i(this, f), c.data(h, e)), "string" == typeof b) {
                                if (void 0 === e[b]) throw new Error('No method named "' + b + '"');
                                e[b]()
                            }
                        })
                    }, e(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return g
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return m
                        }
                    }]), i
                }();
            return a(document).on(o.CLICK_DATA_API, r.DATA_TOGGLE, function(b) {
                b.preventDefault();
                var c = s._getTargetFromElement(this),
                    d = a(c).data(h),
                    e = d ? "toggle" : a(this).data();
                s._jQueryInterface.call(a(c), e)
            }), a.fn[b] = s._jQueryInterface, a.fn[b].Constructor = s, a.fn[b].noConflict = function() {
                return a.fn[b] = k, s._jQueryInterface
            }, s
        }(jQuery), function(a) {
            var b = "dropdown",
                d = "4.0.0-alpha.5",
                g = "bs.dropdown",
                h = "." + g,
                i = ".data-api",
                j = a.fn[b],
                k = 27,
                l = 38,
                m = 40,
                n = 3,
                o = {
                    HIDE: "hide" + h,
                    HIDDEN: "hidden" + h,
                    SHOW: "show" + h,
                    SHOWN: "shown" + h,
                    CLICK: "click" + h,
                    CLICK_DATA_API: "click" + h + i,
                    KEYDOWN_DATA_API: "keydown" + h + i
                },
                p = {
                    BACKDROP: "dropdown-backdrop",
                    DISABLED: "disabled",
                    OPEN: "open"
                },
                q = {
                    BACKDROP: ".dropdown-backdrop",
                    DATA_TOGGLE: '[data-toggle="dropdown"]',
                    FORM_CHILD: ".dropdown form",
                    ROLE_MENU: '[role="menu"]',
                    ROLE_LISTBOX: '[role="listbox"]',
                    NAVBAR_NAV: ".navbar-nav",
                    VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
                },
                r = function() {
                    function b(a) {
                        c(this, b), this._element = a, this._addEventListeners()
                    }
                    return b.prototype.toggle = function() {
                        if (this.disabled || a(this).hasClass(p.DISABLED)) return !1;
                        var c = b._getParentFromElement(this),
                            d = a(c).hasClass(p.OPEN);
                        if (b._clearMenus(), d) return !1;
                        if ("ontouchstart" in document.documentElement && !a(c).closest(q.NAVBAR_NAV).length) {
                            var e = document.createElement("div");
                            e.className = p.BACKDROP, a(e).insertBefore(this), a(e).on("click", b._clearMenus)
                        }
                        var f = {
                                relatedTarget: this
                            },
                            g = a.Event(o.SHOW, f);
                        return a(c).trigger(g), !g.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", "true"), a(c).toggleClass(p.OPEN), a(c).trigger(a.Event(o.SHOWN, f)), !1)
                    }, b.prototype.dispose = function() {
                        a.removeData(this._element, g), a(this._element).off(h), this._element = null
                    }, b.prototype._addEventListeners = function() {
                        a(this._element).on(o.CLICK, this.toggle)
                    }, b._jQueryInterface = function(c) {
                        return this.each(function() {
                            var d = a(this).data(g);
                            if (d || a(this).data(g, d = new b(this)), "string" == typeof c) {
                                if (void 0 === d[c]) throw new Error('No method named "' + c + '"');
                                d[c].call(this)
                            }
                        })
                    }, b._clearMenus = function(c) {
                        if (!c || c.which !== n) {
                            var d = a(q.BACKDROP)[0];
                            d && d.parentNode.removeChild(d);
                            for (var e = a.makeArray(a(q.DATA_TOGGLE)), f = 0; f < e.length; f++) {
                                var g = b._getParentFromElement(e[f]),
                                    h = {
                                        relatedTarget: e[f]
                                    };
                                if (a(g).hasClass(p.OPEN) && !(c && "click" === c.type && /input|textarea/i.test(c.target.tagName) && a.contains(g, c.target))) {
                                    var i = a.Event(o.HIDE, h);
                                    a(g).trigger(i), i.isDefaultPrevented() || (e[f].setAttribute("aria-expanded", "false"), a(g).removeClass(p.OPEN).trigger(a.Event(o.HIDDEN, h)))
                                }
                            }
                        }
                    }, b._getParentFromElement = function(b) {
                        var c = void 0,
                            d = f.getSelectorFromElement(b);
                        return d && (c = a(d)[0]), c || b.parentNode
                    }, b._dataApiKeydownHandler = function(c) {
                        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName) && (c.preventDefault(), c.stopPropagation(), !this.disabled && !a(this).hasClass(p.DISABLED))) {
                            var d = b._getParentFromElement(this),
                                e = a(d).hasClass(p.OPEN);
                            if (!e && c.which !== k || e && c.which === k) {
                                if (c.which === k) {
                                    var f = a(d).find(q.DATA_TOGGLE)[0];
                                    a(f).trigger("focus")
                                }
                                return void a(this).trigger("click")
                            }
                            var g = a.makeArray(a(q.VISIBLE_ITEMS));
                            if (g = g.filter(function(a) {
                                    return a.offsetWidth || a.offsetHeight
                                }), g.length) {
                                var h = g.indexOf(c.target);
                                c.which === l && h > 0 && h--, c.which === m && h < g.length - 1 && h++, 0 > h && (h = 0), g[h].focus()
                            }
                        }
                    }, e(b, null, [{
                        key: "VERSION",
                        get: function() {
                            return d
                        }
                    }]), b
                }();
            return a(document).on(o.KEYDOWN_DATA_API, q.DATA_TOGGLE, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_MENU, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_LISTBOX, r._dataApiKeydownHandler).on(o.CLICK_DATA_API, r._clearMenus).on(o.CLICK_DATA_API, q.DATA_TOGGLE, r.prototype.toggle).on(o.CLICK_DATA_API, q.FORM_CHILD, function(a) {
                a.stopPropagation()
            }), a.fn[b] = r._jQueryInterface, a.fn[b].Constructor = r, a.fn[b].noConflict = function() {
                return a.fn[b] = j, r._jQueryInterface
            }, r
        }(jQuery), function(a) {
            var b = "modal",
                g = "4.0.0-alpha.5",
                h = "bs.modal",
                i = "." + h,
                j = ".data-api",
                k = a.fn[b],
                l = 300,
                m = 150,
                n = 27,
                o = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                p = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                q = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    FOCUSIN: "focusin" + i,
                    RESIZE: "resize" + i,
                    CLICK_DISMISS: "click.dismiss" + i,
                    KEYDOWN_DISMISS: "keydown.dismiss" + i,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + i,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
                    CLICK_DATA_API: "click" + i + j
                },
                r = {
                    SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                    BACKDROP: "modal-backdrop",
                    OPEN: "modal-open",
                    FADE: "fade",
                    IN: "in"
                },
                s = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
                },
                t = function() {
                    function j(b, d) {
                        c(this, j), this._config = this._getConfig(d), this._element = b, this._dialog = a(b).find(s.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    return j.prototype.toggle = function(a) {
                        return this._isShown ? this.hide() : this.show(a)
                    }, j.prototype.show = function(b) {
                        var c = this,
                            d = a.Event(q.SHOW, {
                                relatedTarget: b
                            });
                        a(this._element).trigger(d), this._isShown || d.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), a(document.body).addClass(r.OPEN), this._setEscapeEvent(), this._setResizeEvent(), a(this._element).on(q.CLICK_DISMISS, s.DATA_DISMISS, a.proxy(this.hide, this)), a(this._dialog).on(q.MOUSEDOWN_DISMISS, function() {
                            a(c._element).one(q.MOUSEUP_DISMISS, function(b) {
                                a(b.target).is(c._element) && (c._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(a.proxy(this._showElement, this, b)))
                    }, j.prototype.hide = function(b) {
                        b && b.preventDefault();
                        var c = a.Event(q.HIDE);
                        a(this._element).trigger(c), this._isShown && !c.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), a(document).off(q.FOCUSIN), a(this._element).removeClass(r.IN), a(this._element).off(q.CLICK_DISMISS), a(this._dialog).off(q.MOUSEDOWN_DISMISS), f.supportsTransitionEnd() && a(this._element).hasClass(r.FADE) ? a(this._element).one(f.TRANSITION_END, a.proxy(this._hideModal, this)).emulateTransitionEnd(l) : this._hideModal())
                    }, j.prototype.dispose = function() {
                        a.removeData(this._element, h), a(window).off(i), a(document).off(i), a(this._element).off(i), a(this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                    }, j.prototype._getConfig = function(c) {
                        return c = a.extend({}, o, c), f.typeCheckConfig(b, c, p), c
                    }, j.prototype._showElement = function(b) {
                        var c = this,
                            d = f.supportsTransitionEnd() && a(this._element).hasClass(r.FADE);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, d && f.reflow(this._element), a(this._element).addClass(r.IN), this._config.focus && this._enforceFocus();
                        var e = a.Event(q.SHOWN, {
                                relatedTarget: b
                            }),
                            g = function() {
                                c._config.focus && c._element.focus(), a(c._element).trigger(e)
                            };
                        d ? a(this._dialog).one(f.TRANSITION_END, g).emulateTransitionEnd(l) : g()
                    }, j.prototype._enforceFocus = function() {
                        var b = this;
                        a(document).off(q.FOCUSIN).on(q.FOCUSIN, function(c) {
                            document === c.target || b._element === c.target || a(b._element).has(c.target).length || b._element.focus()
                        })
                    }, j.prototype._setEscapeEvent = function() {
                        var b = this;
                        this._isShown && this._config.keyboard ? a(this._element).on(q.KEYDOWN_DISMISS, function(a) {
                            a.which === n && b.hide()
                        }) : this._isShown || a(this._element).off(q.KEYDOWN_DISMISS)
                    }, j.prototype._setResizeEvent = function() {
                        this._isShown ? a(window).on(q.RESIZE, a.proxy(this._handleUpdate, this)) : a(window).off(q.RESIZE)
                    }, j.prototype._hideModal = function() {
                        var b = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._showBackdrop(function() {
                            a(document.body).removeClass(r.OPEN), b._resetAdjustments(), b._resetScrollbar(), a(b._element).trigger(q.HIDDEN)
                        })
                    }, j.prototype._removeBackdrop = function() {
                        this._backdrop && (a(this._backdrop).remove(), this._backdrop = null)
                    }, j.prototype._showBackdrop = function(b) {
                        var c = this,
                            d = a(this._element).hasClass(r.FADE) ? r.FADE : "";
                        if (this._isShown && this._config.backdrop) {
                            var e = f.supportsTransitionEnd() && d;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = r.BACKDROP, d && a(this._backdrop).addClass(d), a(this._backdrop).appendTo(document.body), a(this._element).on(q.CLICK_DISMISS, function(a) {
                                    return c._ignoreBackdropClick ? void(c._ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" === c._config.backdrop ? c._element.focus() : c.hide()))
                                }), e && f.reflow(this._backdrop), a(this._backdrop).addClass(r.IN), !b) return;
                            if (!e) return void b();
                            a(this._backdrop).one(f.TRANSITION_END, b).emulateTransitionEnd(m)
                        } else if (!this._isShown && this._backdrop) {
                            a(this._backdrop).removeClass(r.IN);
                            var g = function() {
                                c._removeBackdrop(), b && b()
                            };
                            f.supportsTransitionEnd() && a(this._element).hasClass(r.FADE) ? a(this._backdrop).one(f.TRANSITION_END, g).emulateTransitionEnd(m) : g()
                        } else b && b()
                    }, j.prototype._handleUpdate = function() {
                        this._adjustDialog()
                    }, j.prototype._adjustDialog = function() {
                        var a = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && a && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !a && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, j.prototype._resetAdjustments = function() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, j.prototype._checkScrollbar = function() {
                        this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, j.prototype._setScrollbar = function() {
                        parseInt(a(s.FIXED_CONTENT).css("padding-right") || 0, 10)
                    }, j.prototype._resetScrollbar = function() {
                        document.body.style.paddingRight = this._originalBodyPadding
                    }, j.prototype._getScrollbarWidth = function() {
                        var a = document.createElement("div");
                        a.className = r.SCROLLBAR_MEASURER, document.body.appendChild(a);
                        var b = a.offsetWidth - a.clientWidth;
                        return document.body.removeChild(a), b
                    }, j._jQueryInterface = function(b, c) {
                        return this.each(function() {
                            var e = a(this).data(h),
                                f = a.extend({}, j.Default, a(this).data(), "object" === ("undefined" == typeof b ? "undefined" : d(b)) && b);
                            if (e || (e = new j(this, f), a(this).data(h, e)), "string" == typeof b) {
                                if (void 0 === e[b]) throw new Error('No method named "' + b + '"');
                                e[b](c)
                            } else f.show && e.show(c)
                        })
                    }, e(j, null, [{
                        key: "VERSION",
                        get: function() {
                            return g
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return o
                        }
                    }]), j
                }();
            return a(document).on(q.CLICK_DATA_API, s.DATA_TOGGLE, function(b) {
                var c = this,
                    d = void 0,
                    e = f.getSelectorFromElement(this);
                e && (d = a(e)[0]);
                var g = a(d).data(h) ? "toggle" : a.extend({}, a(d).data(), a(this).data());
                "A" === this.tagName && b.preventDefault();
                var i = a(d).one(q.SHOW, function(b) {
                    b.isDefaultPrevented() || i.one(q.HIDDEN, function() {
                        a(c).is(":visible") && c.focus()
                    })
                });
                t._jQueryInterface.call(a(d), g, this)
            }), a.fn[b] = t._jQueryInterface, a.fn[b].Constructor = t, a.fn[b].noConflict = function() {
                return a.fn[b] = k, t._jQueryInterface
            }, t
        }(jQuery), function(a) {
            var b = "scrollspy",
                g = "4.0.0-alpha.5",
                h = "bs.scrollspy",
                i = "." + h,
                j = ".data-api",
                k = a.fn[b],
                l = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                m = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                n = {
                    ACTIVATE: "activate" + i,
                    SCROLL: "scroll" + i,
                    LOAD_DATA_API: "load" + i + j
                },
                o = {
                    DROPDOWN_ITEM: "dropdown-item",
                    DROPDOWN_MENU: "dropdown-menu",
                    NAV_LINK: "nav-link",
                    NAV: "nav",
                    ACTIVE: "active"
                },
                p = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    LIST_ITEM: ".list-item",
                    LI: "li",
                    LI_DROPDOWN: "li.dropdown",
                    NAV_LINKS: ".nav-link",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                q = {
                    OFFSET: "offset",
                    POSITION: "position"
                },
                r = function() {
                    function j(b, d) {
                        c(this, j), this._element = b, this._scrollElement = "BODY" === b.tagName ? window : b, this._config = this._getConfig(d), this._selector = this._config.target + " " + p.NAV_LINKS + "," + (this._config.target + " " + p.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, a(this._scrollElement).on(n.SCROLL, a.proxy(this._process, this)), this.refresh(), this._process()
                    }
                    return j.prototype.refresh = function() {
                        var b = this,
                            c = this._scrollElement !== this._scrollElement.window ? q.POSITION : q.OFFSET,
                            d = "auto" === this._config.method ? c : this._config.method,
                            e = d === q.POSITION ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                        var g = a.makeArray(a(this._selector));
                        g.map(function(b) {
                            var c = void 0,
                                g = f.getSelectorFromElement(b);
                            return g && (c = a(g)[0]), c && (c.offsetWidth || c.offsetHeight) ? [a(c)[d]().top + e, g] : null
                        }).filter(function(a) {
                            return a
                        }).sort(function(a, b) {
                            return a[0] - b[0]
                        }).forEach(function(a) {
                            b._offsets.push(a[0]), b._targets.push(a[1])
                        })
                    }, j.prototype.dispose = function() {
                        a.removeData(this._element, h), a(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, j.prototype._getConfig = function(c) {
                        if (c = a.extend({}, l, c), "string" != typeof c.target) {
                            var d = a(c.target).attr("id");
                            d || (d = f.getUID(b), a(c.target).attr("id", d)), c.target = "#" + d
                        }
                        return f.typeCheckConfig(b, c, m), c
                    }, j.prototype._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop
                    }, j.prototype._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, j.prototype._process = function() {
                        var a = this._getScrollTop() + this._config.offset,
                            b = this._getScrollHeight(),
                            c = this._config.offset + b - this._scrollElement.offsetHeight;
                        if (this._scrollHeight !== b && this.refresh(), a >= c) {
                            var d = this._targets[this._targets.length - 1];
                            this._activeTarget !== d && this._activate(d)
                        }
                        if (this._activeTarget && a < this._offsets[0]) return this._activeTarget = null, void this._clear();
                        for (var e = this._offsets.length; e--;) {
                            var f = this._activeTarget !== this._targets[e] && a >= this._offsets[e] && (void 0 === this._offsets[e + 1] || a < this._offsets[e + 1]);
                            f && this._activate(this._targets[e])
                        }
                    }, j.prototype._activate = function(b) {
                        this._activeTarget = b, this._clear();
                        var c = this._selector.split(",");
                        c = c.map(function(a) {
                            return a + '[data-target="' + b + '"],' + (a + '[href="' + b + '"]')
                        });
                        var d = a(c.join(","));
                        d.hasClass(o.DROPDOWN_ITEM) ? (d.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(o.ACTIVE), d.addClass(o.ACTIVE)) : d.parents(p.LI).find(p.NAV_LINKS).addClass(o.ACTIVE), a(this._scrollElement).trigger(n.ACTIVATE, {
                            relatedTarget: b
                        })
                    }, j.prototype._clear = function() {
                        a(this._selector).filter(p.ACTIVE).removeClass(o.ACTIVE)
                    }, j._jQueryInterface = function(b) {
                        return this.each(function() {
                            var c = a(this).data(h),
                                e = "object" === ("undefined" == typeof b ? "undefined" : d(b)) && b || null;
                            if (c || (c = new j(this, e), a(this).data(h, c)), "string" == typeof b) {
                                if (void 0 === c[b]) throw new Error('No method named "' + b + '"');
                                c[b]()
                            }
                        })
                    }, e(j, null, [{
                        key: "VERSION",
                        get: function() {
                            return g
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return l
                        }
                    }]), j
                }();
            return a(window).on(n.LOAD_DATA_API, function() {
                for (var b = a.makeArray(a(p.DATA_SPY)), c = b.length; c--;) {
                    var d = a(b[c]);
                    r._jQueryInterface.call(d, d.data())
                }
            }), a.fn[b] = r._jQueryInterface, a.fn[b].Constructor = r, a.fn[b].noConflict = function() {
                return a.fn[b] = k, r._jQueryInterface
            }, r
        }(jQuery), function(a) {
            var b = "tab",
                d = "4.0.0-alpha.5",
                g = "bs.tab",
                h = "." + g,
                i = ".data-api",
                j = a.fn[b],
                k = 150,
                l = {
                    HIDE: "hide" + h,
                    HIDDEN: "hidden" + h,
                    SHOW: "show" + h,
                    SHOWN: "shown" + h,
                    CLICK_DATA_API: "click" + h + i
                },
                m = {
                    DROPDOWN_MENU: "dropdown-menu",
                    ACTIVE: "active",
                    FADE: "fade",
                    IN: "in"
                },
                n = {
                    A: "a",
                    LI: "li",
                    DROPDOWN: ".dropdown",
                    UL: "ul:not(.dropdown-menu)",
                    FADE_CHILD: "> .nav-item .fade, > .fade",
                    ACTIVE: ".active",
                    ACTIVE_CHILD: "> .nav-item > .active, > .active",
                    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                    DROPDOWN_TOGGLE: ".dropdown-toggle",
                    DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                },
                o = function() {
                    function b(a) {
                        c(this, b), this._element = a
                    }
                    return b.prototype.show = function() {
                        var b = this;
                        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !a(this._element).hasClass(m.ACTIVE)) {
                            var c = void 0,
                                d = void 0,
                                e = a(this._element).closest(n.UL)[0],
                                g = f.getSelectorFromElement(this._element);
                            e && (d = a.makeArray(a(e).find(n.ACTIVE)), d = d[d.length - 1]);
                            var h = a.Event(l.HIDE, {
                                    relatedTarget: this._element
                                }),
                                i = a.Event(l.SHOW, {
                                    relatedTarget: d
                                });
                            if (d && a(d).trigger(h), a(this._element).trigger(i), !i.isDefaultPrevented() && !h.isDefaultPrevented()) {
                                g && (c = a(g)[0]), this._activate(this._element, e);
                                var j = function() {
                                    var c = a.Event(l.HIDDEN, {
                                            relatedTarget: b._element
                                        }),
                                        e = a.Event(l.SHOWN, {
                                            relatedTarget: d
                                        });
                                    a(d).trigger(c), a(b._element).trigger(e)
                                };
                                c ? this._activate(c, c.parentNode, j) : j()
                            }
                        }
                    }, b.prototype.dispose = function() {
                        a.removeClass(this._element, g), this._element = null
                    }, b.prototype._activate = function(b, c, d) {
                        var e = a(c).find(n.ACTIVE_CHILD)[0],
                            g = d && f.supportsTransitionEnd() && (e && a(e).hasClass(m.FADE) || Boolean(a(c).find(n.FADE_CHILD)[0])),
                            h = a.proxy(this._transitionComplete, this, b, e, g, d);
                        e && g ? a(e).one(f.TRANSITION_END, h).emulateTransitionEnd(k) : h(), e && a(e).removeClass(m.IN)
                    }, b.prototype._transitionComplete = function(b, c, d, e) {
                        if (c) {
                            a(c).removeClass(m.ACTIVE);
                            var g = a(c).find(n.DROPDOWN_ACTIVE_CHILD)[0];
                            g && a(g).removeClass(m.ACTIVE), c.setAttribute("aria-expanded", !1)
                        }
                        if (a(b).addClass(m.ACTIVE), b.setAttribute("aria-expanded", !0), d ? (f.reflow(b), a(b).addClass(m.IN)) : a(b).removeClass(m.FADE), b.parentNode && a(b.parentNode).hasClass(m.DROPDOWN_MENU)) {
                            var h = a(b).closest(n.DROPDOWN)[0];
                            h && a(h).find(n.DROPDOWN_TOGGLE).addClass(m.ACTIVE), b.setAttribute("aria-expanded", !0)
                        }
                        e && e()
                    }, b._jQueryInterface = function(c) {
                        return this.each(function() {
                            var d = a(this),
                                e = d.data(g);
                            if (e || (e = e = new b(this), d.data(g, e)), "string" == typeof c) {
                                if (void 0 === e[c]) throw new Error('No method named "' + c + '"');
                                e[c]()
                            }
                        })
                    }, e(b, null, [{
                        key: "VERSION",
                        get: function() {
                            return d
                        }
                    }]), b
                }();
            return a(document).on(l.CLICK_DATA_API, n.DATA_TOGGLE, function(b) {
                b.preventDefault(), o._jQueryInterface.call(a(this), "show")
            }), a.fn[b] = o._jQueryInterface, a.fn[b].Constructor = o, a.fn[b].noConflict = function() {
                return a.fn[b] = j, o._jQueryInterface
            }, o
        }(jQuery), function(a) {
            if (void 0 === window.Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
            var b = "tooltip",
                g = "4.0.0-alpha.5",
                h = "bs.tooltip",
                i = "." + h,
                j = a.fn[b],
                k = 150,
                l = "bs-tether",
                m = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: "0 0",
                    constraints: []
                },
                n = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "string",
                    constraints: "array"
                },
                o = {
                    TOP: "bottom center",
                    RIGHT: "middle left",
                    BOTTOM: "top center",
                    LEFT: "middle right"
                },
                p = {
                    IN: "in",
                    OUT: "out"
                },
                q = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    INSERTED: "inserted" + i,
                    CLICK: "click" + i,
                    FOCUSIN: "focusin" + i,
                    FOCUSOUT: "focusout" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i
                },
                r = {
                    FADE: "fade",
                    IN: "in"
                },
                s = {
                    TOOLTIP: ".tooltip",
                    TOOLTIP_INNER: ".tooltip-inner"
                },
                t = {
                    element: !1,
                    enabled: !1
                },
                u = {
                    HOVER: "hover",
                    FOCUS: "focus",
                    CLICK: "click",
                    MANUAL: "manual"
                },
                v = function() {
                    function j(a, b) {
                        c(this, j), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._tether = null, this.element = a, this.config = this._getConfig(b), this.tip = null, this._setListeners()
                    }
                    return j.prototype.enable = function() {
                        this._isEnabled = !0
                    }, j.prototype.disable = function() {
                        this._isEnabled = !1
                    }, j.prototype.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled
                    }, j.prototype.toggle = function(b) {
                        if (b) {
                            var c = this.constructor.DATA_KEY,
                                d = a(b.currentTarget).data(c);
                            d || (d = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(c, d)), d._activeTrigger.click = !d._activeTrigger.click, d._isWithActiveTrigger() ? d._enter(null, d) : d._leave(null, d)
                        } else {
                            if (a(this.getTipElement()).hasClass(r.IN)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                    }, j.prototype.dispose = function() {
                        clearTimeout(this._timeout), this.cleanupTether(), a.removeData(this.element, this.constructor.DATA_KEY), a(this.element).off(this.constructor.EVENT_KEY), this.tip && a(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                    }, j.prototype.show = function() {
                        var b = this,
                            c = a.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            a(this.element).trigger(c);
                            var d = a.contains(this.element.ownerDocument.documentElement, this.element);
                            if (c.isDefaultPrevented() || !d) return;
                            var e = this.getTipElement(),
                                g = f.getUID(this.constructor.NAME);
                            e.setAttribute("id", g), this.element.setAttribute("aria-describedby", g), this.setContent(), this.config.animation && a(e).addClass(r.FADE);
                            var h = "function" == typeof this.config.placement ? this.config.placement.call(this, e, this.element) : this.config.placement,
                                i = this._getAttachment(h);
                            a(e).data(this.constructor.DATA_KEY, this).appendTo(document.body), a(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                                attachment: i,
                                element: e,
                                target: this.element,
                                classes: t,
                                classPrefix: l,
                                offset: this.config.offset,
                                constraints: this.config.constraints,
                                addTargetClasses: !1
                            }), f.reflow(e), this._tether.position(), a(e).addClass(r.IN);
                            var k = function() {
                                var c = b._hoverState;
                                b._hoverState = null, a(b.element).trigger(b.constructor.Event.SHOWN), c === p.OUT && b._leave(null, b)
                            };
                            if (f.supportsTransitionEnd() && a(this.tip).hasClass(r.FADE)) return void a(this.tip).one(f.TRANSITION_END, k).emulateTransitionEnd(j._TRANSITION_DURATION);
                            k()
                        }
                    }, j.prototype.hide = function(b) {
                        var c = this,
                            d = this.getTipElement(),
                            e = a.Event(this.constructor.Event.HIDE),
                            g = function() {
                                c._hoverState !== p.IN && d.parentNode && d.parentNode.removeChild(d), c.element.removeAttribute("aria-describedby"), a(c.element).trigger(c.constructor.Event.HIDDEN), c.cleanupTether(), b && b()
                            };
                        a(this.element).trigger(e), e.isDefaultPrevented() || (a(d).removeClass(r.IN), f.supportsTransitionEnd() && a(this.tip).hasClass(r.FADE) ? a(d).one(f.TRANSITION_END, g).emulateTransitionEnd(k) : g(), this._hoverState = "")
                    }, j.prototype.isWithContent = function() {
                        return Boolean(this.getTitle())
                    }, j.prototype.getTipElement = function() {
                        return this.tip = this.tip || a(this.config.template)[0]
                    }, j.prototype.setContent = function() {
                        var b = a(this.getTipElement());
                        this.setElementContent(b.find(s.TOOLTIP_INNER), this.getTitle()), b.removeClass(r.FADE).removeClass(r.IN), this.cleanupTether()
                    }, j.prototype.setElementContent = function(b, c) {
                        var e = this.config.html;
                        "object" === ("undefined" == typeof c ? "undefined" : d(c)) && (c.nodeType || c.jquery) ? e ? a(c).parent().is(b) || b.empty().append(c) : b.text(a(c).text()): b[e ? "html" : "text"](c)
                    }, j.prototype.getTitle = function() {
                        var a = this.element.getAttribute("data-original-title");
                        return a || (a = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), a
                    }, j.prototype.cleanupTether = function() {
                        this._tether && this._tether.destroy()
                    }, j.prototype._getAttachment = function(a) {
                        return o[a.toUpperCase()]
                    }, j.prototype._setListeners = function() {
                        var b = this,
                            c = this.config.trigger.split(" ");
                        c.forEach(function(c) {
                            if ("click" === c) a(b.element).on(b.constructor.Event.CLICK, b.config.selector, a.proxy(b.toggle, b));
                            else if (c !== u.MANUAL) {
                                var d = c === u.HOVER ? b.constructor.Event.MOUSEENTER : b.constructor.Event.FOCUSIN,
                                    e = c === u.HOVER ? b.constructor.Event.MOUSELEAVE : b.constructor.Event.FOCUSOUT;
                                a(b.element).on(d, b.config.selector, a.proxy(b._enter, b)).on(e, b.config.selector, a.proxy(b._leave, b))
                            }
                        }), this.config.selector ? this.config = a.extend({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, j.prototype._fixTitle = function() {
                        var a = d(this.element.getAttribute("data-original-title"));
                        (this.element.getAttribute("title") || "string" !== a) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, j.prototype._enter = function(b, c) {
                        var d = this.constructor.DATA_KEY;
                        return c = c || a(b.currentTarget).data(d), c || (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusin" === b.type ? u.FOCUS : u.HOVER] = !0), a(c.getTipElement()).hasClass(r.IN) || c._hoverState === p.IN ? void(c._hoverState = p.IN) : (clearTimeout(c._timeout), c._hoverState = p.IN, c.config.delay && c.config.delay.show ? void(c._timeout = setTimeout(function() {
                            c._hoverState === p.IN && c.show()
                        }, c.config.delay.show)) : void c.show())
                    }, j.prototype._leave = function(b, c) {
                        var d = this.constructor.DATA_KEY;
                        return c = c || a(b.currentTarget).data(d), c || (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusout" === b.type ? u.FOCUS : u.HOVER] = !1), c._isWithActiveTrigger() ? void 0 : (clearTimeout(c._timeout), c._hoverState = p.OUT, c.config.delay && c.config.delay.hide ? void(c._timeout = setTimeout(function() {
                            c._hoverState === p.OUT && c.hide()
                        }, c.config.delay.hide)) : void c.hide())
                    }, j.prototype._isWithActiveTrigger = function() {
                        for (var a in this._activeTrigger)
                            if (this._activeTrigger[a]) return !0;
                        return !1
                    }, j.prototype._getConfig = function(c) {
                        return c = a.extend({}, this.constructor.Default, a(this.element).data(), c), c.delay && "number" == typeof c.delay && (c.delay = {
                            show: c.delay,
                            hide: c.delay
                        }), f.typeCheckConfig(b, c, this.constructor.DefaultType), c
                    }, j.prototype._getDelegateConfig = function() {
                        var a = {};
                        if (this.config)
                            for (var b in this.config) this.constructor.Default[b] !== this.config[b] && (a[b] = this.config[b]);
                        return a
                    }, j._jQueryInterface = function(b) {
                        return this.each(function() {
                            var c = a(this).data(h),
                                e = "object" === ("undefined" == typeof b ? "undefined" : d(b)) ? b : null;
                            if ((c || !/dispose|hide/.test(b)) && (c || (c = new j(this, e), a(this).data(h, c)), "string" == typeof b)) {
                                if (void 0 === c[b]) throw new Error('No method named "' + b + '"');
                                c[b]()
                            }
                        })
                    }, e(j, null, [{
                        key: "VERSION",
                        get: function() {
                            return g
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return m
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return b
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return h
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return q
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return n
                        }
                    }]), j
                }();
            return a.fn[b] = v._jQueryInterface, a.fn[b].Constructor = v, a.fn[b].noConflict = function() {
                return a.fn[b] = j, v._jQueryInterface
            }, v
        }(jQuery));
    ! function(f) {
        var h = "popover",
            i = "4.0.0-alpha.5",
            j = "bs.popover",
            k = "." + j,
            l = f.fn[h],
            m = f.extend({}, g.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }),
            n = f.extend({}, g.DefaultType, {
                content: "(string|element|function)"
            }),
            o = {
                FADE: "fade",
                IN: "in"
            },
            p = {
                TITLE: ".popover-title",
                CONTENT: ".popover-content"
            },
            q = {
                HIDE: "hide" + k,
                HIDDEN: "hidden" + k,
                SHOW: "show" + k,
                SHOWN: "shown" + k,
                INSERTED: "inserted" + k,
                CLICK: "click" + k,
                FOCUSIN: "focusin" + k,
                FOCUSOUT: "focusout" + k,
                MOUSEENTER: "mouseenter" + k,
                MOUSELEAVE: "mouseleave" + k
            },
            r = function(g) {
                function l() {
                    return c(this, l), a(this, g.apply(this, arguments))
                }
                return b(l, g), l.prototype.isWithContent = function() {
                    return this.getTitle() || this._getContent()
                }, l.prototype.getTipElement = function() {
                    return this.tip = this.tip || f(this.config.template)[0]
                }, l.prototype.setContent = function() {
                    var a = f(this.getTipElement());
                    this.setElementContent(a.find(p.TITLE), this.getTitle()), this.setElementContent(a.find(p.CONTENT), this._getContent()), a.removeClass(o.FADE).removeClass(o.IN), this.cleanupTether()
                }, l.prototype._getContent = function() {
                    return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                }, l._jQueryInterface = function(a) {
                    return this.each(function() {
                        var b = f(this).data(j),
                            c = "object" === ("undefined" == typeof a ? "undefined" : d(a)) ? a : null;
                        if ((b || !/destroy|hide/.test(a)) && (b || (b = new l(this, c), f(this).data(j, b)), "string" == typeof a)) {
                            if (void 0 === b[a]) throw new Error('No method named "' + a + '"');
                            b[a]()
                        }
                    })
                }, e(l, null, [{
                    key: "VERSION",
                    get: function() {
                        return i
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return m
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return h
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return j
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return q
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return k
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return n
                    }
                }]), l
            }(g);
        return f.fn[h] = r._jQueryInterface, f.fn[h].Constructor = r, f.fn[h].noConflict = function() {
            return f.fn[h] = l, r._jQueryInterface
        }, r
    }(jQuery)
}(), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
    },
    easeInQuad: function(a, b, c, d, e) {
        return d * (b /= e) * b + c
    },
    easeOutQuad: function(a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c
    },
    easeInOutQuad: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function(a, b, c, d, e) {
        return d * (b /= e) * b * b + c
    },
    easeOutCubic: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
    },
    easeInOutCubic: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c
    },
    easeOutQuart: function(a, b, c, d, e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c
    },
    easeOutQuint: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function(a, b, c, d, e) {
        return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
    },
    easeOutSine: function(a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
    },
    easeInOutSine: function(a, b, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    },
    easeInExpo: function(a, b, c, d, e) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    },
    easeOutExpo: function(a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
    },
    easeInOutExpo: function(a, b, c, d, e) {
        return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    },
    easeInCirc: function(a, b, c, d, e) {
        return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
    },
    easeOutCirc: function(a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    },
    easeInOutCirc: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function(a, b, c, d, e) {
        var f = 1.70158,
            g = 0,
            h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c
    },
    easeOutElastic: function(a, b, c, d, e) {
        var f = 1.70158,
            g = 0,
            h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * (2 * Math.PI) / g) + d + c
    },
    easeInOutElastic: function(a, b, c, d, e) {
        var f = 1.70158,
            g = 0,
            h = d;
        if (0 == b) return c;
        if (2 == (b /= e / 2)) return c + d;
        if (g || (g = e * (.3 * 1.5)), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return 1 > b ? -.5 * (h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * .5 + d + c
    },
    easeInBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
    },
    easeOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    },
    easeInOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * (b * b * (((f *= 1.525) + 1) * b - f)) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
    },
    easeInBounce: function(a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
    },
    easeOutBounce: function(a, b, c, d, e) {
        return (b /= e) < 1 / 2.75 ? d * (7.5625 * b * b) + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
    },
    easeInOutBounce: function(a, b, c, d, e) {
        return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
    }
}),
    function(a) {
        a.Package ? Materialize = {} : a.Materialize = {}
    }(window), Materialize.guid = function() {
    function a() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return function() {
        return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a();
    }
}(), Materialize.elementOrParentIsFixed = function(a) {
    var b = $(a),
        c = b.add(b.parents()),
        d = !1;
    return c.each(function() {
        return "fixed" === $(this).css("position") ? (d = !0, !1) : void 0
    }), d
};
var Vel;
Vel = $ ? $.Velocity : jQuery ? jQuery.Velocity : Velocity, jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (! function(a) {
    function b(a) {
        var b = a.length,
            d = c.type(a);
        return "function" !== d && !c.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
    }
    if (!a.jQuery) {
        var c = function(a, b) {
            return new c.fn.init(a, b)
        };
        c.isWindow = function(a) {
            return null != a && a == a.window
        }, c.type = function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a
        }, c.isArray = Array.isArray || function(a) {
                return "array" === c.type(a)
            }, c.isPlainObject = function(a) {
            var b;
            if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
            try {
                if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (a) {
                return !1
            }
            for (b in a);
            return void 0 === b || f.call(a, b)
        }, c.each = function(a, c, d) {
            var e, f = 0,
                g = a.length,
                h = b(a);
            if (d) {
                if (h)
                    for (; g > f && (e = c.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = c.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = c.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = c.call(a[f], f, a[f]), e === !1) break; return a
        }, c.data = function(a, b, e) {
            if (void 0 === e) {
                var f = a[c.expando],
                    g = f && d[f];
                if (void 0 === b) return g;
                if (g && b in g) return g[b]
            } else if (void 0 !== b) {
                var f = a[c.expando] || (a[c.expando] = ++c.uuid);
                return d[f] = d[f] || {}, d[f][b] = e, e
            }
        }, c.removeData = function(a, b) {
            var e = a[c.expando],
                f = e && d[e];
            f && c.each(b, function(a, b) {
                delete f[b]
            })
        }, c.extend = function() {
            var a, b, d, e, f, g, h = arguments[0] || {},
                i = 1,
                j = arguments.length,
                k = !1;
            for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); j > i; i++)
                if (null != (f = arguments[i]))
                    for (e in f) a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d));
            return h
        }, c.queue = function(a, d, e) {
            function f(a, c) {
                var d = c || [];
                return null != a && (b(Object(a)) ? ! function(a, b) {
                    for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
                    if (c !== c)
                        for (; void 0 !== b[d];) a[e++] = b[d++];
                    return a.length = e, a
                }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d
            }
            if (a) {
                d = (d || "fx") + "queue";
                var g = c.data(a, d);
                return e ? (!g || c.isArray(e) ? g = c.data(a, d, f(e)) : g.push(e), g) : g || []
            }
        }, c.dequeue = function(a, b) {
            c.each(a.nodeType ? [a] : a, function(a, d) {
                b = b || "fx";
                var e = c.queue(d, b),
                    f = e.shift();
                "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function() {
                    c.dequeue(d, b)
                }))
            })
        }, c.fn = c.prototype = {
            init: function(a) {
                if (a.nodeType) return this[0] = a, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function a() {
                    for (var a = this.offsetParent || document; a && "html" === !a.nodeType.toLowerCase && "static" === a.style.position;) a = a.offsetParent;
                    return a || document
                }
                var b = this[0],
                    a = a.apply(b),
                    d = this.offset(),
                    e = /^(?:body|html)$/i.test(a.nodeName) ? {
                        top: 0,
                        left: 0
                    } : c(a).offset();
                return d.top -= parseFloat(b.style.marginTop) || 0, d.left -= parseFloat(b.style.marginLeft) || 0, a.style && (e.top += parseFloat(a.style.borderTopWidth) || 0, e.left += parseFloat(a.style.borderLeftWidth) || 0), {
                    top: d.top - e.top,
                    left: d.left - e.left
                }
            }
        };
        var d = {};
        c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
        for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) e["[object " + h[i] + "]"] = h[i].toLowerCase();
        c.fn.init.prototype = c.fn, a.Velocity = {
            Utilities: c
        }
    }
}(window), function(a) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a()
}(function() {
    return function(a, b, c, d) {
        function e(a) {
            for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                var e = a[b];
                e && d.push(e)
            }
            return d
        }

        function f(a) {
            return p.isWrapped(a) ? a = [].slice.call(a) : p.isNode(a) && (a = [a]), a
        }

        function g(a) {
            var b = m.data(a, "velocity");
            return null === b ? d : b
        }

        function h(a) {
            return function(b) {
                return Math.round(b * a) * (1 / a)
            }
        }

        function i(a, c, d, e) {
            function f(a, b) {
                return 1 - 3 * b + 3 * a
            }

            function g(a, b) {
                return 3 * b - 6 * a
            }

            function h(a) {
                return 3 * a
            }

            function i(a, b, c) {
                return ((f(b, c) * a + g(b, c)) * a + h(b)) * a
            }

            function j(a, b, c) {
                return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b)
            }

            function k(b, c) {
                for (var e = 0; p > e; ++e) {
                    var f = j(c, a, d);
                    if (0 === f) return c;
                    var g = i(c, a, d) - b;
                    c -= g / f
                }
                return c
            }

            function l() {
                for (var b = 0; t > b; ++b) x[b] = i(b * u, a, d)
            }

            function m(b, c, e) {
                var f, g, h = 0;
                do g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g; while (Math.abs(f) > r && ++h < s);
                return g
            }

            function n(b) {
                for (var c = 0, e = 1, f = t - 1; e != f && x[e] <= b; ++e) c += u;
                --e;
                var g = (b - x[e]) / (x[e + 1] - x[e]),
                    h = c + g * u,
                    i = j(h, a, d);
                return i >= q ? k(b, h) : 0 == i ? h : m(b, c, c + u)
            }

            function o() {
                y = !0, (a != c || d != e) && l()
            }
            var p = 4,
                q = .001,
                r = 1e-7,
                s = 10,
                t = 11,
                u = 1 / (t - 1),
                v = "Float32Array" in b;
            if (4 !== arguments.length) return !1;
            for (var w = 0; 4 > w; ++w)
                if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
            a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
            var x = v ? new Float32Array(t) : new Array(t),
                y = !1,
                z = function(b) {
                    return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e)
                };
            z.getControlPoints = function() {
                return [{
                    x: a,
                    y: c
                }, {
                    x: d,
                    y: e
                }]
            };
            var A = "generateBezier(" + [a, c, d, e] + ")";
            return z.toString = function() {
                return A
            }, z
        }

        function j(a, b) {
            var c = a;
            return p.isString(a) ? t.Easings[a] || (c = !1) : c = p.isArray(a) && 1 === a.length ? h.apply(null, a) : p.isArray(a) && 2 === a.length ? u.apply(null, a.concat([b])) : !(!p.isArray(a) || 4 !== a.length) && i.apply(null, a), c === !1 && (c = t.Easings[t.defaults.easing] ? t.defaults.easing : s), c
        }

        function k(a) {
            if (a) {
                var b = (new Date).getTime(),
                    c = t.State.calls.length;
                c > 1e4 && (t.State.calls = e(t.State.calls));
                for (var f = 0; c > f; f++)
                    if (t.State.calls[f]) {
                        var h = t.State.calls[f],
                            i = h[0],
                            j = h[2],
                            n = h[3],
                            o = !!n,
                            q = null;
                        n || (n = t.State.calls[f][3] = b - 16);
                        for (var r = Math.min((b - n) / j.duration, 1), s = 0, u = i.length; u > s; s++) {
                            var w = i[s],
                                y = w.element;
                            if (g(y)) {
                                var z = !1;
                                if (j.display !== d && null !== j.display && "none" !== j.display) {
                                    if ("flex" === j.display) {
                                        var A = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        m.each(A, function(a, b) {
                                            v.setPropertyValue(y, "display", b)
                                        })
                                    }
                                    v.setPropertyValue(y, "display", j.display)
                                }
                                j.visibility !== d && "hidden" !== j.visibility && v.setPropertyValue(y, "visibility", j.visibility);
                                for (var B in w)
                                    if ("element" !== B) {
                                        var C, D = w[B],
                                            E = p.isString(D.easing) ? t.Easings[D.easing] : D.easing;
                                        if (1 === r) C = D.endValue;
                                        else {
                                            var F = D.endValue - D.startValue;
                                            if (C = D.startValue + F * E(r, j, F), !o && C === D.currentValue) continue
                                        }
                                        if (D.currentValue = C, "tween" === B) q = C;
                                        else {
                                            if (v.Hooks.registered[B]) {
                                                var G = v.Hooks.getRoot(B),
                                                    H = g(y).rootPropertyValueCache[G];
                                                H && (D.rootPropertyValue = H)
                                            }
                                            var I = v.setPropertyValue(y, B, D.currentValue + (0 === parseFloat(C) ? "" : D.unitType), D.rootPropertyValue, D.scrollData);
                                            v.Hooks.registered[B] && (g(y).rootPropertyValueCache[G] = v.Normalizations.registered[G] ? v.Normalizations.registered[G]("extract", null, I[1]) : I[1]), "transform" === I[0] && (z = !0)
                                        }
                                    }
                                j.mobileHA && g(y).transformCache.translate3d === d && (g(y).transformCache.translate3d = "(0px, 0px, 0px)", z = !0), z && v.flushTransformCache(y)
                            }
                        }
                        j.display !== d && "none" !== j.display && (t.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (t.State.calls[f][2].visibility = !1), j.progress && j.progress.call(h[1], h[1], r, Math.max(0, n + j.duration - b), n, q), 1 === r && l(f)
                    }
            }
            t.State.isTicking && x(k)
        }

        function l(a, b) {
            if (!t.State.calls[a]) return !1;
            for (var c = t.State.calls[a][0], e = t.State.calls[a][1], f = t.State.calls[a][2], h = t.State.calls[a][4], i = !1, j = 0, k = c.length; k > j; j++) {
                var l = c[j].element;
                if (b || f.loop || ("none" === f.display && v.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && v.setPropertyValue(l, "visibility", f.visibility)), f.loop !== !0 && (m.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(m.queue(l)[1])) && g(l)) {
                    g(l).isAnimating = !1, g(l).rootPropertyValueCache = {};
                    var n = !1;
                    m.each(v.Lists.transforms3D, function(a, b) {
                        var c = /^scale/.test(b) ? 1 : 0,
                            e = g(l).transformCache[b];
                        g(l).transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete g(l).transformCache[b])
                    }), f.mobileHA && (n = !0, delete g(l).transformCache.translate3d), n && v.flushTransformCache(l), v.Values.removeClass(l, "velocity-animating")
                }
                if (!b && f.complete && !f.loop && j === k - 1) try {
                    f.complete.call(e, e)
                } catch (a) {
                    setTimeout(function() {
                        throw a
                    }, 1)
                }
                h && f.loop !== !0 && h(e), g(l) && f.loop === !0 && !b && (m.each(g(l).tweensContainer, function(a, b) {
                    /^rotate/.test(a) && 360 === parseFloat(b.endValue) && (b.endValue = 0, b.startValue = 360), /^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100)
                }), t(l, "reverse", {
                    loop: !0,
                    delay: f.delay
                })), f.queue !== !1 && m.dequeue(l, f.queue)
            }
            t.State.calls[a] = !1;
            for (var o = 0, p = t.State.calls.length; p > o; o++)
                if (t.State.calls[o] !== !1) {
                    i = !0;
                    break
                }
            i === !1 && (t.State.isTicking = !1, delete t.State.calls, t.State.calls = [])
        }
        var m, n = function() {
                if (c.documentMode) return c.documentMode;
                for (var a = 7; a > 4; a--) {
                    var b = c.createElement("div");
                    if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return b = null, a
                }
                return d
            }(),
            o = function() {
                var a = 0;
                return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function(b) {
                        var c, d = (new Date).getTime();
                        return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function() {
                            b(d + c)
                        }, c)
                    }
            }(),
            p = {
                isString: function(a) {
                    return "string" == typeof a
                },
                isArray: Array.isArray || function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                },
                isFunction: function(a) {
                    return "[object Function]" === Object.prototype.toString.call(a)
                },
                isNode: function(a) {
                    return a && a.nodeType
                },
                isNodeList: function(a) {
                    return "object" == typeof a && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a)) && a.length !== d && (0 === a.length || "object" == typeof a[0] && a[0].nodeType > 0)
                },
                isWrapped: function(a) {
                    return a && (a.jquery || b.Zepto && b.Zepto.zepto.isZ(a))
                },
                isSVG: function(a) {
                    return b.SVGElement && a instanceof b.SVGElement
                },
                isEmptyObject: function(a) {
                    for (var b in a) return !1;
                    return !0
                }
            },
            q = !1;
        if (a.fn && a.fn.jquery ? (m = a, q = !0) : m = b.Velocity.Utilities, 8 >= n && !q) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= n) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var r = 400,
            s = "swing",
            t = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: b.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: c.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: m,
                Redirects: {},
                Easings: {},
                Promise: b.Promise,
                defaults: {
                    queue: "",
                    duration: r,
                    easing: s,
                    begin: d,
                    complete: d,
                    progress: d,
                    display: d,
                    visibility: d,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function(a) {
                    m.data(a, "velocity", {
                        isSVG: p.isSVG(a),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 2,
                    patch: 2
                },
                debug: !1
            };
        b.pageYOffset !== d ? (t.State.scrollAnchor = b, t.State.scrollPropertyLeft = "pageXOffset", t.State.scrollPropertyTop = "pageYOffset") : (t.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, t.State.scrollPropertyLeft = "scrollLeft", t.State.scrollPropertyTop = "scrollTop");
        var u = function() {
            function a(a) {
                return -a.tension * a.x - a.friction * a.v
            }

            function b(b, c, d) {
                var e = {
                    x: b.x + d.dx * c,
                    v: b.v + d.dv * c,
                    tension: b.tension,
                    friction: b.friction
                };
                return {
                    dx: e.v,
                    dv: a(e)
                }
            }

            function c(c, d) {
                var e = {
                        dx: c.v,
                        dv: a(c)
                    },
                    f = b(c, .5 * d, e),
                    g = b(c, .5 * d, f),
                    h = b(c, d, g),
                    i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx),
                    j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
                return c.x = c.x + i * d, c.v = c.v + j * d, c
            }
            return function a(b, d, e) {
                var f, g, h, i = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    j = [0],
                    k = 0,
                    l = 1e-4,
                    m = .016;
                for (b = parseFloat(b) || 500, d = parseFloat(d) || 20, e = e || null, i.tension = b, i.friction = d, f = null !== e, f ? (k = a(b, d), g = k / e * m) : g = m; h = c(h || i, g), j.push(1 + h.x), k += 16, Math.abs(h.x) > l && Math.abs(h.v) > l;);
                return f ? function(a) {
                    return j[a * (j.length - 1) | 0]
                } : k
            }
        }();
        t.Easings = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            },
            spring: function(a) {
                return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a)
            }
        }, m.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(a, b) {
            t.Easings[b[0]] = i.apply(null, b[1])
        });
        var v = t.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var a = 0; a < v.Lists.colors.length; a++) {
                        var b = "color" === v.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
                        v.Hooks.templates[v.Lists.colors[a]] = ["Red Green Blue Alpha", b]
                    }
                    var c, d, e;
                    if (n)
                        for (c in v.Hooks.templates) {
                            d = v.Hooks.templates[c], e = d[0].split(" ");
                            var f = d[1].match(v.RegEx.valueSplit);
                            "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), v.Hooks.templates[c] = [e.join(" "), f.join(" ")])
                        }
                    for (c in v.Hooks.templates) {
                        d = v.Hooks.templates[c], e = d[0].split(" ");
                        for (var a in e) {
                            var g = c + e[a],
                                h = a;
                            v.Hooks.registered[g] = [c, h]
                        }
                    }
                },
                getRoot: function(a) {
                    var b = v.Hooks.registered[a];
                    return b ? b[0] : a
                },
                cleanRootPropertyValue: function(a, b) {
                    return v.RegEx.valueUnwrap.test(b) && (b = b.match(v.RegEx.valueUnwrap)[1]), v.Values.isCSSNullValue(b) && (b = v.Hooks.templates[a][1]), b
                },
                extractValue: function(a, b) {
                    var c = v.Hooks.registered[a];
                    if (c) {
                        var d = c[0],
                            e = c[1];
                        return b = v.Hooks.cleanRootPropertyValue(d, b), b.toString().match(v.RegEx.valueSplit)[e]
                    }
                    return b
                },
                injectValue: function(a, b, c) {
                    var d = v.Hooks.registered[a];
                    if (d) {
                        var e, f, g = d[0],
                            h = d[1];
                        return c = v.Hooks.cleanRootPropertyValue(g, c), e = c.toString().match(v.RegEx.valueSplit), e[h] = b, f = e.join(" ")
                    }
                    return c
                }
            },
            Normalizations: {
                registered: {
                    clip: function(a, b, c) {
                        switch (a) {
                            case "name":
                                return "clip";
                            case "extract":
                                var d;
                                return v.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(v.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;
                            case "inject":
                                return "rect(" + c + ")"
                        }
                    },
                    blur: function(a, b, c) {
                        switch (a) {
                            case "name":
                                return t.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var d = parseFloat(c);
                                if (!d && 0 !== d) {
                                    var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    d = e ? e[1] : 0
                                }
                                return d;
                            case "inject":
                                return parseFloat(c) ? "blur(" + c + ")" : "none"
                        }
                    },
                    opacity: function(a, b, c) {
                        if (8 >= n) switch (a) {
                            case "name":
                                return "filter";
                            case "extract":
                                var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                                return c = d ? d[1] / 100 : 1;
                            case "inject":
                                return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")"
                        } else switch (a) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return c;
                            case "inject":
                                return c
                        }
                    }
                },
                register: function() {
                    9 >= n || t.State.isGingerbread || (v.Lists.transformsBase = v.Lists.transformsBase.concat(v.Lists.transforms3D));
                    for (var a = 0; a < v.Lists.transformsBase.length; a++) ! function() {
                        var b = v.Lists.transformsBase[a];
                        v.Normalizations.registered[b] = function(a, c, e) {
                            switch (a) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return g(c) === d || g(c).transformCache[b] === d ? /^scale/i.test(b) ? 1 : 0 : g(c).transformCache[b].replace(/[()]/g, "");
                                case "inject":
                                    var f = !1;
                                    switch (b.substr(0, b.length - 1)) {
                                        case "translate":
                                            f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                                            break;
                                        case "scal":
                                        case "scale":
                                            t.State.isAndroid && g(c).transformCache[b] === d && 1 > e && (e = 1), f = !/(\d)$/i.test(e);
                                            break;
                                        case "skew":
                                            f = !/(deg|\d)$/i.test(e);
                                            break;
                                        case "rotate":
                                            f = !/(deg|\d)$/i.test(e)
                                    }
                                    return f || (g(c).transformCache[b] = "(" + e + ")"), g(c).transformCache[b]
                            }
                        }
                    }();
                    for (var a = 0; a < v.Lists.colors.length; a++) ! function() {
                        var b = v.Lists.colors[a];
                        v.Normalizations.registered[b] = function(a, c, e) {
                            switch (a) {
                                case "name":
                                    return b;
                                case "extract":
                                    var f;
                                    if (v.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;
                                    else {
                                        var g, h = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : v.RegEx.isHex.test(e) ? g = "rgb(" + v.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= n || 3 !== f.split(" ").length || (f += " 1"), f;
                                case "inject":
                                    return 8 >= n ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (8 >= n ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function(a) {
                    return a.replace(/-(\w)/g, function(a, b) {
                        return b.toUpperCase()
                    })
                },
                SVGAttribute: function(a) {
                    var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (n || t.State.isAndroid && !t.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a)
                },
                prefixCheck: function(a) {
                    if (t.State.prefixMatches[a]) return [t.State.prefixMatches[a], !0];
                    for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; d > c; c++) {
                        var e;
                        if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function(a) {
                                return a.toUpperCase()
                            }), p.isString(t.State.prefixElement.style[e])) return t.State.prefixMatches[a] = e, [e, !0]
                    }
                    return [a, !1]
                }
            },
            Values: {
                hexToRgb: function(a) {
                    var b, c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return a = a.replace(c, function(a, b, c, d) {
                        return b + b + c + c + d + d
                    }), b = d.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(a) {
                    return 0 == a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
                },
                getUnitType: function(a) {
                    return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
                },
                getDisplayType: function(a) {
                    var b = a && a.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block"
                },
                addClass: function(a, b) {
                    a.classList ? a.classList.add(b) : a.className += (a.className.length ? " " : "") + b
                },
                removeClass: function(a, b) {
                    a.classList ? a.classList.remove(b) : a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function(a, c, e, f) {
                function h(a, c) {
                    function e() {
                        j && v.setPropertyValue(a, "display", "none")
                    }
                    var i = 0;
                    if (8 >= n) i = m.css(a, c);
                    else {
                        var j = !1;
                        if (/^(width|height)$/.test(c) && 0 === v.getPropertyValue(a, "display") && (j = !0, v.setPropertyValue(a, "display", v.Values.getDisplayType(a))), !f) {
                            if ("height" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var k = a.offsetHeight - (parseFloat(v.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingBottom")) || 0);
                                return e(), k
                            }
                            if ("width" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var l = a.offsetWidth - (parseFloat(v.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingRight")) || 0);
                                return e(), l
                            }
                        }
                        var o;
                        o = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), i = 9 === n && "filter" === c ? o.getPropertyValue(c) : o[c], ("" === i || null === i) && (i = a.style[c]), e()
                    }
                    if ("auto" === i && /^(top|right|bottom|left)$/i.test(c)) {
                        var p = h(a, "position");
                        ("fixed" === p || "absolute" === p && /top|left/i.test(c)) && (i = m(a).position()[c] + "px")
                    }
                    return i
                }
                var i;
                if (v.Hooks.registered[c]) {
                    var j = c,
                        k = v.Hooks.getRoot(j);
                    e === d && (e = v.getPropertyValue(a, v.Names.prefixCheck(k)[0])), v.Normalizations.registered[k] && (e = v.Normalizations.registered[k]("extract", a, e)), i = v.Hooks.extractValue(j, e)
                } else if (v.Normalizations.registered[c]) {
                    var l, o;
                    l = v.Normalizations.registered[c]("name", a), "transform" !== l && (o = h(a, v.Names.prefixCheck(l)[0]), v.Values.isCSSNullValue(o) && v.Hooks.templates[c] && (o = v.Hooks.templates[c][1])), i = v.Normalizations.registered[c]("extract", a, o)
                }
                if (!/^[\d-]/.test(i))
                    if (g(a) && g(a).isSVG && v.Names.SVGAttribute(c))
                        if (/^(height|width)$/i.test(c)) try {
                            i = a.getBBox()[c]
                        } catch (a) {
                            i = 0
                        } else i = a.getAttribute(c);
                    else i = h(a, v.Names.prefixCheck(c)[0]);
                return v.Values.isCSSNullValue(i) && (i = 0), t.debug >= 2 && console.log("Get " + c + ": " + i), i
            },
            setPropertyValue: function(a, c, d, e, f) {
                var h = c;
                if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);
                else if (v.Normalizations.registered[c] && "transform" === v.Normalizations.registered[c]("name", a)) v.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];
                else {
                    if (v.Hooks.registered[c]) {
                        var i = c,
                            j = v.Hooks.getRoot(c);
                        e = e || v.getPropertyValue(a, j), d = v.Hooks.injectValue(i, d, e), c = j
                    }
                    if (v.Normalizations.registered[c] && (d = v.Normalizations.registered[c]("inject", a, d), c = v.Normalizations.registered[c]("name", a)), h = v.Names.prefixCheck(c)[0], 8 >= n) try {
                        a.style[h] = d
                    } catch (a) {
                        t.debug && console.log("Browser does not support [" + d + "] for [" + h + "]")
                    } else g(a) && g(a).isSVG && v.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d;
                    t.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d)
                }
                return [h, d]
            },
            flushTransformCache: function(a) {
                function b(b) {
                    return parseFloat(v.getPropertyValue(a, b))
                }
                var c = "";
                if ((n || t.State.isAndroid && !t.State.isChrome) && g(a).isSVG) {
                    var d = {
                        translate: [b("translateX"), b("translateY")],
                        skewX: [b("skewX")],
                        skewY: [b("skewY")],
                        scale: 1 !== b("scale") ? [b("scale"), b("scale")] : [b("scaleX"), b("scaleY")],
                        rotate: [b("rotateZ"), 0, 0]
                    };
                    m.each(g(a).transformCache, function(a) {
                        /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), d[a] && (c += a + "(" + d[a].join(" ") + ") ", delete d[a])
                    })
                } else {
                    var e, f;
                    m.each(g(a).transformCache, function(b) {
                        return e = g(a).transformCache[b], "transformPerspective" === b ? (f = e, !0) : (9 === n && "rotateZ" === b && (b = "rotate"), void(c += b + e + " "))
                    }), f && (c = "perspective" + f + " " + c)
                }
                v.setPropertyValue(a, "transform", c)
            }
        };
        v.Hooks.register(), v.Normalizations.register(), t.hook = function(a, b, c) {
            var e = d;
            return a = f(a), m.each(a, function(a, f) {
                if (g(f) === d && t.init(f), c === d) e === d && (e = t.CSS.getPropertyValue(f, b));
                else {
                    var h = t.CSS.setPropertyValue(f, b, c);
                    "transform" === h[0] && t.CSS.flushTransformCache(f), e = h
                }
            }), e
        };
        var w = function() {
            function a() {
                return h ? B.promise || null : i
            }

            function e() {
                function a(a) {
                    function l(a, b) {
                        var c = d,
                            e = d,
                            g = d;
                        return p.isArray(a) ? (c = a[0], !p.isArray(a[1]) && /^[\d-]/.test(a[1]) || p.isFunction(a[1]) || v.RegEx.isHex.test(a[1]) ? g = a[1] : (p.isString(a[1]) && !v.RegEx.isHex.test(a[1]) || p.isArray(a[1])) && (e = b ? a[1] : j(a[1], h.duration), a[2] !== d && (g = a[2]))) : c = a, b || (e = e || h.easing), p.isFunction(c) && (c = c.call(f, y, x)), p.isFunction(g) && (g = g.call(f, y, x)), [c || 0, e, g]
                    }

                    function n(a, b) {
                        var c, d;
                        return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(a) {
                            return c = a, ""
                        }), c || (c = v.Values.getUnitType(a)), [d, c]
                    }

                    function r() {
                        var a = {
                                myParent: f.parentNode || c.body,
                                position: v.getPropertyValue(f, "position"),
                                fontSize: v.getPropertyValue(f, "fontSize")
                            },
                            d = a.position === I.lastPosition && a.myParent === I.lastParent,
                            e = a.fontSize === I.lastFontSize;
                        I.lastParent = a.myParent, I.lastPosition = a.position, I.lastFontSize = a.fontSize;
                        var h = 100,
                            i = {};
                        if (e && d) i.emToPx = I.lastEmToPx, i.percentToPxWidth = I.lastPercentToPxWidth, i.percentToPxHeight = I.lastPercentToPxHeight;
                        else {
                            var j = g(f).isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
                            t.init(j), a.myParent.appendChild(j), m.each(["overflow", "overflowX", "overflowY"], function(a, b) {
                                t.CSS.setPropertyValue(j, b, "hidden")
                            }), t.CSS.setPropertyValue(j, "position", a.position), t.CSS.setPropertyValue(j, "fontSize", a.fontSize), t.CSS.setPropertyValue(j, "boxSizing", "content-box"), m.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(a, b) {
                                t.CSS.setPropertyValue(j, b, h + "%")
                            }), t.CSS.setPropertyValue(j, "paddingLeft", h + "em"), i.percentToPxWidth = I.lastPercentToPxWidth = (parseFloat(v.getPropertyValue(j, "width", null, !0)) || 1) / h, i.percentToPxHeight = I.lastPercentToPxHeight = (parseFloat(v.getPropertyValue(j, "height", null, !0)) || 1) / h, i.emToPx = I.lastEmToPx = (parseFloat(v.getPropertyValue(j, "paddingLeft")) || 1) / h, a.myParent.removeChild(j)
                        }
                        return null === I.remToPx && (I.remToPx = parseFloat(v.getPropertyValue(c.body, "fontSize")) || 16), null === I.vwToPx && (I.vwToPx = parseFloat(b.innerWidth) / 100, I.vhToPx = parseFloat(b.innerHeight) / 100), i.remToPx = I.remToPx, i.vwToPx = I.vwToPx, i.vhToPx = I.vhToPx, t.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(i), f), i
                    }
                    if (h.begin && 0 === y) try {
                        h.begin.call(o, o)
                    } catch (a) {
                        setTimeout(function() {
                            throw a
                        }, 1)
                    }
                    if ("scroll" === C) {
                        var u, w, z, A = /^x$/i.test(h.axis) ? "Left" : "Top",
                            D = parseFloat(h.offset) || 0;
                        h.container ? p.isWrapped(h.container) || p.isNode(h.container) ? (h.container = h.container[0] || h.container, u = h.container["scroll" + A], z = u + m(f).position()[A.toLowerCase()] + D) : h.container = null : (u = t.State.scrollAnchor[t.State["scrollProperty" + A]], w = t.State.scrollAnchor[t.State["scrollProperty" + ("Left" === A ? "Top" : "Left")]], z = m(f).offset()[A.toLowerCase()] + D), i = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: u,
                                currentValue: u,
                                endValue: z,
                                unitType: "",
                                easing: h.easing,
                                scrollData: {
                                    container: h.container,
                                    direction: A,
                                    alternateValue: w
                                }
                            },
                            element: f
                        }, t.debug && console.log("tweensContainer (scroll): ", i.scroll, f)
                    } else if ("reverse" === C) {
                        if (!g(f).tweensContainer) return void m.dequeue(f, h.queue);
                        "none" === g(f).opts.display && (g(f).opts.display = "auto"), "hidden" === g(f).opts.visibility && (g(f).opts.visibility = "visible"), g(f).opts.loop = !1, g(f).opts.begin = null, g(f).opts.complete = null, s.easing || delete h.easing, s.duration || delete h.duration, h = m.extend({}, g(f).opts, h);
                        var E = m.extend(!0, {}, g(f).tweensContainer);
                        for (var F in E)
                            if ("element" !== F) {
                                var G = E[F].startValue;
                                E[F].startValue = E[F].currentValue = E[F].endValue, E[F].endValue = G, p.isEmptyObject(s) || (E[F].easing = h.easing), t.debug && console.log("reverse tweensContainer (" + F + "): " + JSON.stringify(E[F]), f)
                            }
                        i = E
                    } else if ("start" === C) {
                        var E;
                        g(f).tweensContainer && g(f).isAnimating === !0 && (E = g(f).tweensContainer), m.each(q, function(a, b) {
                            if (RegExp("^" + v.Lists.colors.join("$|^") + "$").test(a)) {
                                var c = l(b, !0),
                                    e = c[0],
                                    f = c[1],
                                    g = c[2];
                                if (v.RegEx.isHex.test(e)) {
                                    for (var h = ["Red", "Green", "Blue"], i = v.Values.hexToRgb(e), j = g ? v.Values.hexToRgb(g) : d, k = 0; k < h.length; k++) {
                                        var m = [i[k]];
                                        f && m.push(f), j !== d && m.push(j[k]), q[a + h[k]] = m
                                    }
                                    delete q[a]
                                }
                            }
                        });
                        for (var H in q) {
                            var K = l(q[H]),
                                L = K[0],
                                M = K[1],
                                N = K[2];
                            H = v.Names.camelCase(H);
                            var O = v.Hooks.getRoot(H),
                                P = !1;
                            if (g(f).isSVG || "tween" === O || v.Names.prefixCheck(O)[1] !== !1 || v.Normalizations.registered[O] !== d) {
                                (h.display !== d && null !== h.display && "none" !== h.display || h.visibility !== d && "hidden" !== h.visibility) && /opacity|filter/.test(H) && !N && 0 !== L && (N = 0), h._cacheValues && E && E[H] ? (N === d && (N = E[H].endValue + E[H].unitType), P = g(f).rootPropertyValueCache[O]) : v.Hooks.registered[H] ? N === d ? (P = v.getPropertyValue(f, O), N = v.getPropertyValue(f, H, P)) : P = v.Hooks.templates[O][1] : N === d && (N = v.getPropertyValue(f, H));
                                var Q, R, S, T = !1;
                                if (Q = n(H, N), N = Q[0], S = Q[1], Q = n(H, L), L = Q[0].replace(/^([+-\/*])=/, function(a, b) {
                                        return T = b, ""
                                    }), R = Q[1], N = parseFloat(N) || 0, L = parseFloat(L) || 0, "%" === R && (/^(fontSize|lineHeight)$/.test(H) ? (L /= 100, R = "em") : /^scale/.test(H) ? (L /= 100, R = "") : /(Red|Green|Blue)$/i.test(H) && (L = L / 100 * 255, R = "")), /[\/*]/.test(T)) R = S;
                                else if (S !== R && 0 !== N)
                                    if (0 === L) R = S;
                                    else {
                                        e = e || r();
                                        var U = /margin|padding|left|right|width|text|word|letter/i.test(H) || /X$/.test(H) || "x" === H ? "x" : "y";
                                        switch (S) {
                                            case "%":
                                                N *= "x" === U ? e.percentToPxWidth : e.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                N *= e[S + "ToPx"]
                                        }
                                        switch (R) {
                                            case "%":
                                                N *= 1 / ("x" === U ? e.percentToPxWidth : e.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                N *= 1 / e[R + "ToPx"]
                                        }
                                    }
                                switch (T) {
                                    case "+":
                                        L = N + L;
                                        break;
                                    case "-":
                                        L = N - L;
                                        break;
                                    case "*":
                                        L *= N;
                                        break;
                                    case "/":
                                        L = N / L
                                }
                                i[H] = {
                                    rootPropertyValue: P,
                                    startValue: N,
                                    currentValue: N,
                                    endValue: L,
                                    unitType: R,
                                    easing: M
                                }, t.debug && console.log("tweensContainer (" + H + "): " + JSON.stringify(i[H]), f)
                            } else t.debug && console.log("Skipping [" + O + "] due to a lack of browser support.")
                        }
                        i.element = f
                    }
                    i.element && (v.Values.addClass(f, "velocity-animating"), J.push(i), "" === h.queue && (g(f).tweensContainer = i, g(f).opts = h), g(f).isAnimating = !0, y === x - 1 ? (t.State.calls.push([J, o, h, null, B.resolver]), t.State.isTicking === !1 && (t.State.isTicking = !0, k())) : y++)
                }
                var e, f = this,
                    h = m.extend({}, t.defaults, s),
                    i = {};
                switch (g(f) === d && t.init(f), parseFloat(h.delay) && h.queue !== !1 && m.queue(f, h.queue, function(a) {
                    t.velocityQueueEntryFlag = !0, g(f).delayTimer = {
                        setTimeout: setTimeout(a, parseFloat(h.delay)),
                        next: a
                    }
                }), h.duration.toString().toLowerCase()) {
                    case "fast":
                        h.duration = 200;
                        break;
                    case "normal":
                        h.duration = r;
                        break;
                    case "slow":
                        h.duration = 600;
                        break;
                    default:
                        h.duration = parseFloat(h.duration) || 1
                }
                t.mock !== !1 && (t.mock === !0 ? h.duration = h.delay = 1 : (h.duration *= parseFloat(t.mock) || 1, h.delay *= parseFloat(t.mock) || 1)), h.easing = j(h.easing, h.duration), h.begin && !p.isFunction(h.begin) && (h.begin = null), h.progress && !p.isFunction(h.progress) && (h.progress = null), h.complete && !p.isFunction(h.complete) && (h.complete = null), h.display !== d && null !== h.display && (h.display = h.display.toString().toLowerCase(), "auto" === h.display && (h.display = t.CSS.Values.getDisplayType(f))), h.visibility !== d && null !== h.visibility && (h.visibility = h.visibility.toString().toLowerCase()), h.mobileHA = h.mobileHA && t.State.isMobile && !t.State.isGingerbread, h.queue === !1 ? h.delay ? setTimeout(a, h.delay) : a() : m.queue(f, h.queue, function(b, c) {
                    return c === !0 ? (B.promise && B.resolver(o), !0) : (t.velocityQueueEntryFlag = !0, void a(b))
                }), "" !== h.queue && "fx" !== h.queue || "inprogress" === m.queue(f)[0] || m.dequeue(f)
            }
            var h, i, n, o, q, s, u = arguments[0] && (arguments[0].p || m.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || p.isString(arguments[0].properties));
            if (p.isWrapped(this) ? (h = !1, n = 0, o = this, i = this) : (h = !0, n = 1, o = u ? arguments[0].elements || arguments[0].e : arguments[0]), o = f(o)) {
                u ? (q = arguments[0].properties || arguments[0].p, s = arguments[0].options || arguments[0].o) : (q = arguments[n], s = arguments[n + 1]);
                var x = o.length,
                    y = 0;
                if (!/^(stop|finish)$/i.test(q) && !m.isPlainObject(s)) {
                    var z = n + 1;
                    s = {};
                    for (var A = z; A < arguments.length; A++) p.isArray(arguments[A]) || !/^(fast|normal|slow)$/i.test(arguments[A]) && !/^\d/.test(arguments[A]) ? p.isString(arguments[A]) || p.isArray(arguments[A]) ? s.easing = arguments[A] : p.isFunction(arguments[A]) && (s.complete = arguments[A]) : s.duration = arguments[A]
                }
                var B = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                h && t.Promise && (B.promise = new t.Promise(function(a, b) {
                    B.resolver = a, B.rejecter = b
                }));
                var C;
                switch (q) {
                    case "scroll":
                        C = "scroll";
                        break;
                    case "reverse":
                        C = "reverse";
                        break;
                    case "finish":
                    case "stop":
                        m.each(o, function(a, b) {
                            g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer)
                        });
                        var D = [];
                        return m.each(t.State.calls, function(a, b) {
                            b && m.each(b[1], function(c, e) {
                                var f = s === d ? "" : s;
                                return f !== !0 && b[2].queue !== f && (s !== d || b[2].queue !== !1) || void m.each(o, function(c, d) {
                                        d === e && ((s === !0 || p.isString(s)) && (m.each(m.queue(d, p.isString(s) ? s : ""), function(a, b) {
                                            p.isFunction(b) && b(null, !0)
                                        }), m.queue(d, p.isString(s) ? s : "", [])), "stop" === q ? (g(d) && g(d).tweensContainer && f !== !1 && m.each(g(d).tweensContainer, function(a, b) {
                                            b.endValue = b.currentValue
                                        }), D.push(a)) : "finish" === q && (b[2].duration = 1))
                                    })
                            })
                        }), "stop" === q && (m.each(D, function(a, b) {
                            l(b, !0)
                        }), B.promise && B.resolver(o)), a();
                    default:
                        if (!m.isPlainObject(q) || p.isEmptyObject(q)) {
                            if (p.isString(q) && t.Redirects[q]) {
                                var E = m.extend({}, s),
                                    F = E.duration,
                                    G = E.delay || 0;
                                return E.backwards === !0 && (o = m.extend(!0, [], o).reverse()), m.each(o, function(a, b) {
                                    parseFloat(E.stagger) ? E.delay = G + parseFloat(E.stagger) * a : p.isFunction(E.stagger) && (E.delay = G + E.stagger.call(b, a, x)), E.drag && (E.duration = parseFloat(F) || (/^(callout|transition)/.test(q) ? 1e3 : r), E.duration = Math.max(E.duration * (E.backwards ? 1 - a / x : (a + 1) / x), .75 * E.duration, 200)), t.Redirects[q].call(b, b, E || {}, a, x, o, B.promise ? B : d)
                                }), a()
                            }
                            var H = "Velocity: First argument (" + q + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return B.promise ? B.rejecter(new Error(H)) : console.log(H), a()
                        }
                        C = "start"
                }
                var I = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    J = [];
                m.each(o, function(a, b) {
                    p.isNode(b) && e.call(b)
                });
                var K, E = m.extend({}, t.defaults, s);
                if (E.loop = parseInt(E.loop), K = 2 * E.loop - 1, E.loop)
                    for (var L = 0; K > L; L++) {
                        var M = {
                            delay: E.delay,
                            progress: E.progress
                        };
                        L === K - 1 && (M.display = E.display, M.visibility = E.visibility, M.complete = E.complete), w(o, "reverse", M)
                    }
                return a()
            }
        };
        t = m.extend(w, t), t.animate = w;
        var x = b.requestAnimationFrame || o;
        return t.State.isMobile || c.hidden === d || c.addEventListener("visibilitychange", function() {
            c.hidden ? (x = function(a) {
                return setTimeout(function() {
                    a(!0)
                }, 16)
            }, k()) : x = b.requestAnimationFrame || o
        }), a.Velocity = t, a !== b && (a.fn.velocity = w, a.fn.velocity.defaults = t.defaults), m.each(["Down", "Up"], function(a, b) {
            t.Redirects["slide" + b] = function(a, c, e, f, g, h) {
                var i = m.extend({}, c),
                    j = i.begin,
                    k = i.complete,
                    l = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    },
                    n = {};
                i.display === d && (i.display = "Down" === b ? "inline" === t.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function() {
                    j && j.call(g, g);
                    for (var c in l) {
                        n[c] = a.style[c];
                        var d = t.CSS.getPropertyValue(a, c);
                        l[c] = "Down" === b ? [d, 0] : [0, d]
                    }
                    n.overflow = a.style.overflow, a.style.overflow = "hidden"
                }, i.complete = function() {
                    for (var b in n) a.style[b] = n[b];
                    k && k.call(g, g), h && h.resolver(g)
                }, t(a, l, i)
            }
        }), m.each(["In", "Out"], function(a, b) {
            t.Redirects["fade" + b] = function(a, c, e, f, g, h) {
                var i = m.extend({}, c),
                    j = {
                        opacity: "In" === b ? 1 : 0
                    },
                    k = i.complete;
                i.complete = e !== f - 1 ? i.begin = null : function() {
                    k && k.call(g, g), h && h.resolver(g)
                }, i.display === d && (i.display = "In" === b ? "auto" : "none"), t(this, j, i)
            }
        }), t
    }(window.jQuery || window.Zepto || window, window, document)
})),
    function() {
        "use strict";
        var a = this,
            b = a.Chart,
            c = function(a) {
                this.canvas = a.canvas, this.ctx = a;
                var b = function(a, b) {
                        return a["offset" + b] ? a["offset" + b] : document.defaultView.getComputedStyle(a).getPropertyValue(b)
                    },
                    c = this.width = b(a.canvas, "Width") || a.canvas.width,
                    e = this.height = b(a.canvas, "Height") || a.canvas.height;
                return c = this.width = a.canvas.width, e = this.height = a.canvas.height, this.aspectRatio = this.width / this.height, d.retinaScale(this), this
            };
        c.defaults = {
            global: {
                animation: !0,
                animationSteps: 60,
                animationEasing: "easeOutQuart",
                showScale: !0,
                scaleOverride: !1,
                scaleSteps: null,
                scaleStepWidth: null,
                scaleStartValue: null,
                scaleLineColor: "rgba(0,0,0,.1)",
                scaleLineWidth: 1,
                scaleShowLabels: !0,
                scaleLabel: "<%=value%>",
                scaleIntegersOnly: !0,
                scaleBeginAtZero: !1,
                scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                scaleFontSize: 12,
                scaleFontStyle: "normal",
                scaleFontColor: "#666",
                responsive: !1,
                maintainAspectRatio: !0,
                showTooltips: !0,
                customTooltips: !1,
                tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
                tooltipFillColor: "rgba(0,0,0,0.8)",
                tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipFontSize: 14,
                tooltipFontStyle: "normal",
                tooltipFontColor: "#fff",
                tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipTitleFontSize: 14,
                tooltipTitleFontStyle: "bold",
                tooltipTitleFontColor: "#fff",
                tooltipTitleTemplate: "<%= label%>",
                tooltipYPadding: 6,
                tooltipXPadding: 6,
                tooltipCaretSize: 8,
                tooltipCornerRadius: 6,
                tooltipXOffset: 10,
                tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
                multiTooltipTemplate: "<%= value %>",
                multiTooltipKeyBackground: "#fff",
                segmentColorDefault: ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#CAB2D6", "#6A3D9A", "#B4B482", "#B15928"],
                segmentHighlightColorDefaults: ["#CEF6FF", "#47A0DC", "#DAFFB2", "#5BC854", "#FFC2C1", "#FF4244", "#FFE797", "#FFA728", "#F2DAFE", "#9265C2", "#DCDCAA", "#D98150"],
                onAnimationProgress: function() {},
                onAnimationComplete: function() {}
            }
        }, c.types = {};
        var d = c.helpers = {},
            e = d.each = function(a, b, c) {
                var d = Array.prototype.slice.call(arguments, 3);
                if (a)
                    if (a.length === +a.length) {
                        var e;
                        for (e = 0; e < a.length; e++) b.apply(c, [a[e], e].concat(d))
                    } else
                        for (var f in a) b.apply(c, [a[f], f].concat(d))
            },
            f = d.clone = function(a) {
                var b = {};
                return e(a, function(c, d) {
                    a.hasOwnProperty(d) && (b[d] = c)
                }), b
            },
            g = d.extend = function(a) {
                return e(Array.prototype.slice.call(arguments, 1), function(b) {
                    e(b, function(c, d) {
                        b.hasOwnProperty(d) && (a[d] = c)
                    })
                }), a
            },
            h = d.merge = function(a, b) {
                var c = Array.prototype.slice.call(arguments, 0);
                return c.unshift({}), g.apply(null, c)
            },
            i = d.indexOf = function(a, b) {
                if (Array.prototype.indexOf) return a.indexOf(b);
                for (var c = 0; c < a.length; c++)
                    if (a[c] === b) return c;
                return -1
            },
            j = (d.where = function(a, b) {
                var c = [];
                return d.each(a, function(a) {
                    b(a) && c.push(a)
                }), c
            }, d.findNextWhere = function(a, b, c) {
                c || (c = -1);
                for (var d = c + 1; d < a.length; d++) {
                    var e = a[d];
                    if (b(e)) return e
                }
            }, d.findPreviousWhere = function(a, b, c) {
                c || (c = a.length);
                for (var d = c - 1; d >= 0; d--) {
                    var e = a[d];
                    if (b(e)) return e
                }
            }, d.inherits = function(a) {
                var b = this,
                    c = a && a.hasOwnProperty("constructor") ? a.constructor : function() {
                        return b.apply(this, arguments)
                    },
                    d = function() {
                        this.constructor = c
                    };
                return d.prototype = b.prototype, c.prototype = new d, c.extend = j, a && g(c.prototype, a), c.__super__ = b.prototype, c
            }),
            k = d.noop = function() {},
            l = d.uid = function() {
                var a = 0;
                return function() {
                    return "chart-" + a++
                }
            }(),
            m = d.warn = function(a) {
                window.console && "function" == typeof window.console.warn && console.warn(a)
            },
            n = d.amd = "function" == typeof define && define.amd,
            o = d.isNumber = function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            p = d.max = function(a) {
                return Math.max.apply(Math, a)
            },
            q = d.min = function(a) {
                return Math.min.apply(Math, a)
            },
            r = (d.cap = function(a, b, c) {
                if (o(b)) {
                    if (a > b) return b
                } else if (o(c) && c > a) return c;
                return a
            }, d.getDecimalPlaces = function(a) {
                if (a % 1 !== 0 && o(a)) {
                    var b = a.toString();
                    if (b.indexOf("e-") < 0) return b.split(".")[1].length;
                    if (b.indexOf(".") < 0) return parseInt(b.split("e-")[1]);
                    var c = b.split(".")[1].split("e-");
                    return c[0].length + parseInt(c[1])
                }
                return 0
            }),
            s = d.radians = function(a) {
                return a * (Math.PI / 180)
            },
            t = (d.getAngleFromPoint = function(a, b) {
                var c = b.x - a.x,
                    d = b.y - a.y,
                    e = Math.sqrt(c * c + d * d),
                    f = 2 * Math.PI + Math.atan2(d, c);
                return 0 > c && 0 > d && (f += 2 * Math.PI), {
                    angle: f,
                    distance: e
                }
            }, d.aliasPixel = function(a) {
                return a % 2 === 0 ? 0 : .5
            }),
            u = (d.splineCurve = function(a, b, c, d) {
                var e = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)),
                    f = Math.sqrt(Math.pow(c.x - b.x, 2) + Math.pow(c.y - b.y, 2)),
                    g = d * e / (e + f),
                    h = d * f / (e + f);
                return {
                    inner: {
                        x: b.x - g * (c.x - a.x),
                        y: b.y - g * (c.y - a.y)
                    },
                    outer: {
                        x: b.x + h * (c.x - a.x),
                        y: b.y + h * (c.y - a.y)
                    }
                }
            }, d.calculateOrderOfMagnitude = function(a) {
                return Math.floor(Math.log(a) / Math.LN10)
            }),
            v = (d.calculateScaleRange = function(a, b, c, d, f) {
                var g = 2,
                    h = Math.floor(b / (1.5 * c)),
                    i = g >= h,
                    j = [];
                e(a, function(a) {
                    null == a || j.push(a)
                });
                var k = q(j),
                    l = p(j);
                l === k && (l += .5, k >= .5 && !d ? k -= .5 : l += .5);
                for (var m = Math.abs(l - k), n = u(m), o = Math.ceil(l / (1 * Math.pow(10, n))) * Math.pow(10, n), r = d ? 0 : Math.floor(k / (1 * Math.pow(10, n))) * Math.pow(10, n), s = o - r, t = Math.pow(10, n), v = Math.round(s / t);
                     (v > h || h > 2 * v) && !i;)
                    if (v > h) t *= 2, v = Math.round(s / t), v % 1 !== 0 && (i = !0);
                    else if (f && n >= 0) {
                        if (t / 2 % 1 !== 0) break;
                        t /= 2, v = Math.round(s / t)
                    } else t /= 2, v = Math.round(s / t);
                return i && (v = g, t = s / v), {
                    steps: v,
                    stepValue: t,
                    min: r,
                    max: r + v * t
                }
            }, d.template = function(a, b) {
                function c(a, b) {
                    var c = /\W/.test(a) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + a.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : d[a] = d[a];
                    return b ? c(b) : c
                }
                if (a instanceof Function) return a(b);
                var d = {};
                return c(a, b)
            }),
            w = (d.generateLabels = function(a, b, c, d) {
                var f = new Array(b);
                return a && e(f, function(b, e) {
                    f[e] = v(a, {
                        value: c + d * (e + 1)
                    })
                }), f
            }, d.easingEffects = {
                linear: function(a) {
                    return a
                },
                easeInQuad: function(a) {
                    return a * a
                },
                easeOutQuad: function(a) {
                    return -1 * a * (a - 2)
                },
                easeInOutQuad: function(a) {
                    return (a /= .5) < 1 ? .5 * a * a : -.5 * (--a * (a - 2) - 1)
                },
                easeInCubic: function(a) {
                    return a * a * a
                },
                easeOutCubic: function(a) {
                    return 1 * ((a = a / 1 - 1) * a * a + 1)
                },
                easeInOutCubic: function(a) {
                    return (a /= .5) < 1 ? .5 * a * a * a : .5 * ((a -= 2) * a * a + 2)
                },
                easeInQuart: function(a) {
                    return a * a * a * a
                },
                easeOutQuart: function(a) {
                    return -1 * ((a = a / 1 - 1) * a * a * a - 1)
                },
                easeInOutQuart: function(a) {
                    return (a /= .5) < 1 ? .5 * a * a * a * a : -.5 * ((a -= 2) * a * a * a - 2)
                },
                easeInQuint: function(a) {
                    return 1 * (a /= 1) * a * a * a * a
                },
                easeOutQuint: function(a) {
                    return 1 * ((a = a / 1 - 1) * a * a * a * a + 1)
                },
                easeInOutQuint: function(a) {
                    return (a /= .5) < 1 ? .5 * a * a * a * a * a : .5 * ((a -= 2) * a * a * a * a + 2)
                },
                easeInSine: function(a) {
                    return -1 * Math.cos(a / 1 * (Math.PI / 2)) + 1
                },
                easeOutSine: function(a) {
                    return 1 * Math.sin(a / 1 * (Math.PI / 2))
                },
                easeInOutSine: function(a) {
                    return -.5 * (Math.cos(Math.PI * a / 1) - 1)
                },
                easeInExpo: function(a) {
                    return 0 === a ? 1 : 1 * Math.pow(2, 10 * (a / 1 - 1))
                },
                easeOutExpo: function(a) {
                    return 1 === a ? 1 : 1 * (-Math.pow(2, -10 * a / 1) + 1)
                },
                easeInOutExpo: function(a) {
                    return 0 === a ? 0 : 1 === a ? 1 : (a /= .5) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * --a) + 2)
                },
                easeInCirc: function(a) {
                    return a >= 1 ? a : -1 * (Math.sqrt(1 - (a /= 1) * a) - 1)
                },
                easeOutCirc: function(a) {
                    return 1 * Math.sqrt(1 - (a = a / 1 - 1) * a)
                },
                easeInOutCirc: function(a) {
                    return (a /= .5) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                },
                easeInElastic: function(a) {
                    var b = 1.70158,
                        c = 0,
                        d = 1;
                    return 0 === a ? 0 : 1 == (a /= 1) ? 1 : (c || (c = .3), d < Math.abs(1) ? (d = 1, b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d), -(d * Math.pow(2, 10 * (a -= 1)) * Math.sin((1 * a - b) * (2 * Math.PI) / c)))
                },
                easeOutElastic: function(a) {
                    var b = 1.70158,
                        c = 0,
                        d = 1;
                    return 0 === a ? 0 : 1 == (a /= 1) ? 1 : (c || (c = .3), d < Math.abs(1) ? (d = 1, b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d), d * Math.pow(2, -10 * a) * Math.sin((1 * a - b) * (2 * Math.PI) / c) + 1)
                },
                easeInOutElastic: function(a) {
                    var b = 1.70158,
                        c = 0,
                        d = 1;
                    return 0 === a ? 0 : 2 == (a /= .5) ? 1 : (c || (c = 1 * (.3 * 1.5)), d < Math.abs(1) ? (d = 1, b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d), 1 > a ? -.5 * (d * Math.pow(2, 10 * (a -= 1)) * Math.sin((1 * a - b) * (2 * Math.PI) / c)) : d * Math.pow(2, -10 * (a -= 1)) * Math.sin((1 * a - b) * (2 * Math.PI) / c) * .5 + 1)
                },
                easeInBack: function(a) {
                    var b = 1.70158;
                    return 1 * (a /= 1) * a * ((b + 1) * a - b)
                },
                easeOutBack: function(a) {
                    var b = 1.70158;
                    return 1 * ((a = a / 1 - 1) * a * ((b + 1) * a + b) + 1)
                },
                easeInOutBack: function(a) {
                    var b = 1.70158;
                    return (a /= .5) < 1 ? .5 * (a * a * (((b *= 1.525) + 1) * a - b)) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
                },
                easeInBounce: function(a) {
                    return 1 - w.easeOutBounce(1 - a)
                },
                easeOutBounce: function(a) {
                    return (a /= 1) < 1 / 2.75 ? 1 * (7.5625 * a * a) : 2 / 2.75 > a ? 1 * (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 * (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                },
                easeInOutBounce: function(a) {
                    return .5 > a ? .5 * w.easeInBounce(2 * a) : .5 * w.easeOutBounce(2 * a - 1) + .5
                }
            }),
            x = d.requestAnimFrame = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                        return window.setTimeout(a, 1e3 / 60)
                    }
            }(),
            y = (d.cancelAnimFrame = function() {
                return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(a) {
                        return window.clearTimeout(a, 1e3 / 60)
                    }
            }(), d.animationLoop = function(a, b, c, d, e, f) {
                var g = 0,
                    h = w[c] || w.linear,
                    i = function() {
                        g++;
                        var c = g / b,
                            j = h(c);
                        a.call(f, j, c, g), d.call(f, j, c), b > g ? f.animationFrame = x(i) : e.apply(f)
                    };
                x(i)
            }, d.getRelativePosition = function(a) {
                var b, c, d = a.originalEvent || a,
                    e = a.currentTarget || a.srcElement,
                    f = e.getBoundingClientRect();
                return d.touches ? (b = d.touches[0].clientX - f.left, c = d.touches[0].clientY - f.top) : (b = d.clientX - f.left, c = d.clientY - f.top), {
                    x: b,
                    y: c
                }
            }, d.addEvent = function(a, b, c) {
                a.addEventListener ? a.addEventListener(b, c) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
            }),
            z = d.removeEvent = function(a, b, c) {
                a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent ? a.detachEvent("on" + b, c) : a["on" + b] = k
            },
            A = (d.bindEvents = function(a, b, c) {
                a.events || (a.events = {}), e(b, function(b) {
                    a.events[b] = function() {
                        c.apply(a, arguments)
                    }, y(a.chart.canvas, b, a.events[b])
                })
            }, d.unbindEvents = function(a, b) {
                e(b, function(b, c) {
                    z(a.chart.canvas, c, b)
                })
            }),
            B = d.getMaximumWidth = function(a) {
                var b = a.parentNode,
                    c = parseInt(D(b, "padding-left")) + parseInt(D(b, "padding-right"));
                return b.clientWidth - c
            },
            C = d.getMaximumHeight = function(a) {
                var b = a.parentNode,
                    c = parseInt(D(b, "padding-bottom")) + parseInt(D(b, "padding-top"));
                return b.clientHeight - c
            },
            D = d.getStyle = function(a, b) {
                return a.currentStyle ? a.currentStyle[b] : document.defaultView.getComputedStyle(a, null).getPropertyValue(b)
            },
            E = (d.getMaximumSize = d.getMaximumWidth, d.retinaScale = function(a) {
                var b = a.ctx,
                    c = a.canvas.width,
                    d = a.canvas.height;
                window.devicePixelRatio && (b.canvas.style.width = c + "px", b.canvas.style.height = d + "px", b.canvas.height = d * window.devicePixelRatio, b.canvas.width = c * window.devicePixelRatio, b.scale(window.devicePixelRatio, window.devicePixelRatio))
            }),
            F = d.clear = function(a) {
                a.ctx.clearRect(0, 0, a.width, a.height)
            },
            G = d.fontString = function(a, b, c) {
                return b + " " + a + "px " + c
            },
            H = d.longestText = function(a, b, c) {
                a.font = b;
                var d = 0;
                return e(c, function(b) {
                    var c = a.measureText(b).width;
                    d = c > d ? c : d
                }), d
            },
            I = d.drawRoundedRectangle = function(a, b, c, d, e, f) {
                a.beginPath(), a.moveTo(b + f, c), a.lineTo(b + d - f, c), a.quadraticCurveTo(b + d, c, b + d, c + f), a.lineTo(b + d, c + e - f), a.quadraticCurveTo(b + d, c + e, b + d - f, c + e), a.lineTo(b + f, c + e), a.quadraticCurveTo(b, c + e, b, c + e - f), a.lineTo(b, c + f), a.quadraticCurveTo(b, c, b + f, c), a.closePath()
            };
        c.instances = {}, c.Type = function(a, b, d) {
            this.options = b, this.chart = d, this.id = l(), c.instances[this.id] = this, b.responsive && this.resize(), this.initialize.call(this, a)
        }, g(c.Type.prototype, {
            initialize: function() {
                return this
            },
            clear: function() {
                return F(this.chart), this
            },
            stop: function() {
                return c.animationService.cancelAnimation(this), this
            },
            resize: function(a) {
                this.stop();
                var b = this.chart.canvas,
                    c = B(this.chart.canvas),
                    d = this.options.maintainAspectRatio ? c / this.chart.aspectRatio : C(this.chart.canvas);
                return b.width = this.chart.width = c, b.height = this.chart.height = d, E(this.chart), "function" == typeof a && a.apply(this, Array.prototype.slice.call(arguments, 1)), this
            },
            reflow: k,
            render: function(a) {
                if (a && this.reflow(), this.options.animation && !a) {
                    var b = new c.Animation;
                    b.numSteps = this.options.animationSteps, b.easing = this.options.animationEasing, b.render = function(a, b) {
                        var c = d.easingEffects[b.easing],
                            e = b.currentStep / b.numSteps,
                            f = c(e);
                        a.draw(f, e, b.currentStep)
                    }, b.onAnimationProgress = this.options.onAnimationProgress, b.onAnimationComplete = this.options.onAnimationComplete, c.animationService.addAnimation(this, b)
                } else this.draw(), this.options.onAnimationComplete.call(this);
                return this
            },
            generateLegend: function() {
                return v(this.options.legendTemplate, this)
            },
            destroy: function() {
                this.clear(), A(this, this.events);
                var a = this.chart.canvas;
                a.width = this.chart.width, a.height = this.chart.height, a.style.removeProperty ? (a.style.removeProperty("width"), a.style.removeProperty("height")) : (a.style.removeAttribute("width"), a.style.removeAttribute("height")), delete c.instances[this.id]
            },
            showTooltip: function(a, b) {
                "undefined" == typeof this.activeElements && (this.activeElements = []);
                var f = function(a) {
                    var b = !1;
                    return a.length !== this.activeElements.length ? b = !0 : (e(a, function(a, c) {
                        a !== this.activeElements[c] && (b = !0)
                    }, this), b)
                }.call(this, a);
                if (f || b) {
                    if (this.activeElements = a, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), a.length > 0)
                        if (this.datasets && this.datasets.length > 1) {
                            for (var g, h, j = this.datasets.length - 1; j >= 0 && (g = this.datasets[j].points || this.datasets[j].bars || this.datasets[j].segments, h = i(g, a[0]), -1 === h); j--);
                            var k = [],
                                l = [],
                                m = function(a) {
                                    var b, c, e, f, g, i = [],
                                        j = [],
                                        m = [];
                                    return d.each(this.datasets, function(a) {
                                        b = a.points || a.bars || a.segments, b[h] && b[h].hasValue() && i.push(b[h])
                                    }), d.each(i, function(a) {
                                        j.push(a.x), m.push(a.y), k.push(d.template(this.options.multiTooltipTemplate, a)), l.push({
                                            fill: a._saved.fillColor || a.fillColor,
                                            stroke: a._saved.strokeColor || a.strokeColor
                                        })
                                    }, this), g = q(m), e = p(m), f = q(j), c = p(j), {
                                        x: f > this.chart.width / 2 ? f : c,
                                        y: (g + e) / 2
                                    }
                                }.call(this, h);
                            new c.MultiTooltip({
                                x: m.x,
                                y: m.y,
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                xOffset: this.options.tooltipXOffset,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                titleTextColor: this.options.tooltipTitleFontColor,
                                titleFontFamily: this.options.tooltipTitleFontFamily,
                                titleFontStyle: this.options.tooltipTitleFontStyle,
                                titleFontSize: this.options.tooltipTitleFontSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                labels: k,
                                legendColors: l,
                                legendColorBackground: this.options.multiTooltipKeyBackground,
                                title: v(this.options.tooltipTitleTemplate, a[0]),
                                chart: this.chart,
                                ctx: this.chart.ctx,
                                custom: this.options.customTooltips
                            }).draw()
                        } else e(a, function(a) {
                            var b = a.tooltipPosition();
                            new c.Tooltip({
                                x: Math.round(b.x),
                                y: Math.round(b.y),
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                caretHeight: this.options.tooltipCaretSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                text: v(this.options.tooltipTemplate, a),
                                chart: this.chart,
                                custom: this.options.customTooltips
                            }).draw()
                        }, this);
                    return this
                }
            },
            toBase64Image: function() {
                return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
            }
        }), c.Type.extend = function(a) {
            var b = this,
                d = function() {
                    return b.apply(this, arguments)
                };
            if (d.prototype = f(b.prototype), g(d.prototype, a), d.extend = c.Type.extend, a.name || b.prototype.name) {
                var e = a.name || b.prototype.name,
                    i = c.defaults[b.prototype.name] ? f(c.defaults[b.prototype.name]) : {};
                c.defaults[e] = g(i, a.defaults), c.types[e] = d, c.prototype[e] = function(a, b) {
                    var f = h(c.defaults.global, c.defaults[e], b || {});
                    return new d(a, f, this)
                }
            } else m("Name not provided for this chart, so it hasn't been registered");
            return b
        }, c.Element = function(a) {
            g(this, a), this.initialize.apply(this, arguments), this.save()
        }, g(c.Element.prototype, {
            initialize: function() {},
            restore: function(a) {
                return a ? e(a, function(a) {
                    this[a] = this._saved[a]
                }, this) : g(this, this._saved), this
            },
            save: function() {
                return this._saved = f(this), delete this._saved._saved, this
            },
            update: function(a) {
                return e(a, function(a, b) {
                    this._saved[b] = this[b], this[b] = a
                }, this), this
            },
            transition: function(a, b) {
                return e(a, function(a, c) {
                    this[c] = (a - this._saved[c]) * b + this._saved[c]
                }, this), this
            },
            tooltipPosition: function() {
                return {
                    x: this.x,
                    y: this.y
                }
            },
            hasValue: function() {
                return o(this.value)
            }
        }), c.Element.extend = j, c.Point = c.Element.extend({
            display: !0,
            inRange: function(a, b) {
                var c = this.hitDetectionRadius + this.radius;
                return Math.pow(a - this.x, 2) + Math.pow(b - this.y, 2) < Math.pow(c, 2)
            },
            draw: function() {
                if (this.display) {
                    var a = this.ctx;
                    a.beginPath(), a.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), a.closePath(), a.strokeStyle = this.strokeColor, a.lineWidth = this.strokeWidth, a.fillStyle = this.fillColor, a.fill(), a.stroke()
                }
            }
        }), c.Arc = c.Element.extend({
            inRange: function(a, b) {
                var c = d.getAngleFromPoint(this, {
                        x: a,
                        y: b
                    }),
                    e = c.angle % (2 * Math.PI),
                    f = (2 * Math.PI + this.startAngle) % (2 * Math.PI),
                    g = (2 * Math.PI + this.endAngle) % (2 * Math.PI) || 360,
                    h = f > g ? g >= e || e >= f : e >= f && g >= e,
                    i = c.distance >= this.innerRadius && c.distance <= this.outerRadius;
                return h && i
            },
            tooltipPosition: function() {
                var a = this.startAngle + (this.endAngle - this.startAngle) / 2,
                    b = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
                return {
                    x: this.x + Math.cos(a) * b,
                    y: this.y + Math.sin(a) * b
                }
            },
            draw: function(a) {
                var b = this.ctx;
                b.beginPath(), b.arc(this.x, this.y, this.outerRadius < 0 ? 0 : this.outerRadius, this.startAngle, this.endAngle), b.arc(this.x, this.y, this.innerRadius < 0 ? 0 : this.innerRadius, this.endAngle, this.startAngle, !0), b.closePath(), b.strokeStyle = this.strokeColor, b.lineWidth = this.strokeWidth, b.fillStyle = this.fillColor, b.fill(), b.lineJoin = "bevel", this.showStroke && b.stroke()
            }
        }), c.Rectangle = c.Element.extend({
            draw: function() {
                var a = this.ctx,
                    b = this.width / 2,
                    c = this.x - b,
                    d = this.x + b,
                    e = this.base - (this.base - this.y),
                    f = this.strokeWidth / 2;
                this.showStroke && (c += f, d -= f, e += f), a.beginPath(), a.fillStyle = this.fillColor, a.strokeStyle = this.strokeColor, a.lineWidth = this.strokeWidth, a.moveTo(c, this.base), a.lineTo(c, e), a.lineTo(d, e), a.lineTo(d, this.base), a.fill(), this.showStroke && a.stroke()
            },
            height: function() {
                return this.base - this.y
            },
            inRange: function(a, b) {
                return a >= this.x - this.width / 2 && a <= this.x + this.width / 2 && b >= this.y && b <= this.base
            }
        }), c.Animation = c.Element.extend({
            currentStep: null,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null
        }), c.Tooltip = c.Element.extend({
            draw: function() {
                var a = this.chart.ctx;
                a.font = G(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
                var b = this.caretPadding = 2,
                    c = a.measureText(this.text).width + 2 * this.xPadding,
                    d = this.fontSize + 2 * this.yPadding,
                    e = d + this.caretHeight + b;
                this.x + c / 2 > this.chart.width ? this.xAlign = "left" : this.x - c / 2 < 0 && (this.xAlign = "right"), this.y - e < 0 && (this.yAlign = "below");
                var f = this.x - c / 2,
                    g = this.y - e;
                if (a.fillStyle = this.fillColor, this.custom) this.custom(this);
                else {
                    switch (this.yAlign) {
                        case "above":
                            a.beginPath(), a.moveTo(this.x, this.y - b), a.lineTo(this.x + this.caretHeight, this.y - (b + this.caretHeight)), a.lineTo(this.x - this.caretHeight, this.y - (b + this.caretHeight)), a.closePath(), a.fill();
                            break;
                        case "below":
                            g = this.y + b + this.caretHeight, a.beginPath(), a.moveTo(this.x, this.y + b), a.lineTo(this.x + this.caretHeight, this.y + b + this.caretHeight), a.lineTo(this.x - this.caretHeight, this.y + b + this.caretHeight), a.closePath(), a.fill()
                    }
                    switch (this.xAlign) {
                        case "left":
                            f = this.x - c + (this.cornerRadius + this.caretHeight);
                            break;
                        case "right":
                            f = this.x - (this.cornerRadius + this.caretHeight)
                    }
                    I(a, f, g, c, d, this.cornerRadius), a.fill(), a.fillStyle = this.textColor, a.textAlign = "center", a.textBaseline = "middle", a.fillText(this.text, f + c / 2, g + d / 2)
                }
            }
        }), c.MultiTooltip = c.Element.extend({
            initialize: function() {
                this.font = G(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = G(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.titleHeight = this.title ? 1.5 * this.titleFontSize : 0, this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + this.titleHeight, this.ctx.font = this.titleFont;
                var a = this.ctx.measureText(this.title).width,
                    b = H(this.ctx, this.font, this.labels) + this.fontSize + 3,
                    c = p([b, a]);
                this.width = c + 2 * this.xPadding;
                var d = this.height / 2;
                this.y - d < 0 ? this.y = d : this.y + d > this.chart.height && (this.y = this.chart.height - d), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
            },
            getLineHeight: function(a) {
                var b = this.y - this.height / 2 + this.yPadding,
                    c = a - 1;
                return 0 === a ? b + this.titleHeight / 3 : b + (1.5 * this.fontSize * c + this.fontSize / 2) + this.titleHeight
            },
            draw: function() {
                if (this.custom) this.custom(this);
                else {
                    I(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                    var a = this.ctx;
                    a.fillStyle = this.fillColor, a.fill(), a.closePath(), a.textAlign = "left", a.textBaseline = "middle", a.fillStyle = this.titleTextColor, a.font = this.titleFont, a.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), a.font = this.font, d.each(this.labels, function(b, c) {
                        a.fillStyle = this.textColor, a.fillText(b, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(c + 1)), a.fillStyle = this.legendColorBackground, a.fillRect(this.x + this.xPadding, this.getLineHeight(c + 1) - this.fontSize / 2, this.fontSize, this.fontSize), a.fillStyle = this.legendColors[c].fill, a.fillRect(this.x + this.xPadding, this.getLineHeight(c + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                    }, this)
                }
            }
        }), c.Scale = c.Element.extend({
            initialize: function() {
                this.fit()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var a = r(this.stepValue), b = 0; b <= this.steps; b++) this.yLabels.push(v(this.templateString, {
                    value: (this.min + b * this.stepValue).toFixed(a)
                }));
                this.yLabelWidth = this.display && this.showLabels ? H(this.ctx, this.font, this.yLabels) + 10 : 0
            },
            addXLabel: function(a) {
                this.xLabels.push(a), this.valuesCount++, this.fit()
            },
            removeXLabel: function() {
                this.xLabels.shift(), this.valuesCount--, this.fit()
            },
            fit: function() {
                this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
                var a, b = this.endPoint,
                    c = this.endPoint - this.startPoint;
                for (this.calculateYRange(c), this.buildYLabels(), this.calculateXLabelRotation(); c > this.endPoint - this.startPoint;) c = this.endPoint - this.startPoint, a = this.yLabelWidth, this.calculateYRange(c), this.buildYLabels(), a < this.yLabelWidth && (this.endPoint = b, this.calculateXLabelRotation())
            },
            calculateXLabelRotation: function() {
                this.ctx.font = this.font;
                var a, b, c = this.ctx.measureText(this.xLabels[0]).width,
                    d = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
                if (this.xScalePaddingRight = d / 2 + 3, this.xScalePaddingLeft = c / 2 > this.yLabelWidth ? c / 2 : this.yLabelWidth, this.xLabelRotation = 0, this.display) {
                    var e, f = H(this.ctx, this.font, this.xLabels);
                    this.xLabelWidth = f;
                    for (var g = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > g && 0 === this.xLabelRotation || this.xLabelWidth > g && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) e = Math.cos(s(this.xLabelRotation)), a = e * c, b = e * d, a + this.fontSize / 2 > this.yLabelWidth && (this.xScalePaddingLeft = a + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = e * f;
                    this.xLabelRotation > 0 && (this.endPoint -= Math.sin(s(this.xLabelRotation)) * f + 3)
                } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
            },
            calculateYRange: k,
            drawingArea: function() {
                return this.startPoint - this.endPoint
            },
            calculateY: function(a) {
                var b = this.drawingArea() / (this.min - this.max);
                return this.endPoint - b * (a - this.min)
            },
            calculateX: function(a) {
                var b = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                    c = b / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
                    d = c * a + this.xScalePaddingLeft;
                return this.offsetGridLines && (d += c / 2), Math.round(d)
            },
            update: function(a) {
                d.extend(this, a), this.fit()
            },
            draw: function() {
                var a = this.ctx,
                    b = (this.endPoint - this.startPoint) / this.steps,
                    c = Math.round(this.xScalePaddingLeft);
                this.display && (a.fillStyle = this.textColor, a.font = this.font, e(this.yLabels, function(e, f) {
                    var g = this.endPoint - b * f,
                        h = Math.round(g),
                        i = this.showHorizontalLines;
                    a.textAlign = "right", a.textBaseline = "middle", this.showLabels && a.fillText(e, c - 10, g), 0 !== f || i || (i = !0), i && a.beginPath(), f > 0 ? (a.lineWidth = this.gridLineWidth, a.strokeStyle = this.gridLineColor) : (a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor), h += d.aliasPixel(a.lineWidth), i && (a.moveTo(c, h), a.lineTo(this.width, h), a.stroke(), a.closePath()), a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor, a.beginPath(), a.moveTo(c - 5, h), a.lineTo(c, h), a.stroke(), a.closePath()
                }, this), e(this.xLabels, function(b, c) {
                    var d = this.calculateX(c) + t(this.lineWidth),
                        e = this.calculateX(c - (this.offsetGridLines ? .5 : 0)) + t(this.lineWidth),
                        f = this.xLabelRotation > 0,
                        g = this.showVerticalLines;
                    0 !== c || g || (g = !0), g && a.beginPath(), c > 0 ? (a.lineWidth = this.gridLineWidth, a.strokeStyle = this.gridLineColor) : (a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor), g && (a.moveTo(e, this.endPoint), a.lineTo(e, this.startPoint - 3), a.stroke(), a.closePath()), a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor, a.beginPath(), a.moveTo(e, this.endPoint), a.lineTo(e, this.endPoint + 5), a.stroke(), a.closePath(), a.save(), a.translate(d, f ? this.endPoint + 12 : this.endPoint + 8), a.rotate(-1 * s(this.xLabelRotation)), a.font = this.font, a.textAlign = f ? "right" : "center", a.textBaseline = f ? "middle" : "top", a.fillText(b, 0, 0), a.restore()
                }, this))
            }
        }), c.RadialScale = c.Element.extend({
            initialize: function() {
                this.size = q([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
            },
            calculateCenterOffset: function(a) {
                var b = this.drawingArea / (this.max - this.min);
                return (a - this.min) * b
            },
            update: function() {
                this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var a = r(this.stepValue), b = 0; b <= this.steps; b++) this.yLabels.push(v(this.templateString, {
                    value: (this.min + b * this.stepValue).toFixed(a)
                }))
            },
            getCircumference: function() {
                return 2 * Math.PI / this.valuesCount
            },
            setScaleSize: function() {
                var a, b, c, d, e, f, g, h, i, j, k, l, m = q([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                    n = this.width,
                    p = 0;
                for (this.ctx.font = G(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), b = 0; b < this.valuesCount; b++) a = this.getPointPosition(b, m), c = this.ctx.measureText(v(this.templateString, {
                        value: this.labels[b]
                    })).width + 5, 0 === b || b === this.valuesCount / 2 ? (d = c / 2, a.x + d > n && (n = a.x + d, e = b), a.x - d < p && (p = a.x - d, g = b)) : b < this.valuesCount / 2 ? a.x + c > n && (n = a.x + c, e = b) : b > this.valuesCount / 2 && a.x - c < p && (p = a.x - c, g = b);
                i = p, j = Math.ceil(n - this.width), f = this.getIndexAngle(e), h = this.getIndexAngle(g), k = j / Math.sin(f + Math.PI / 2), l = i / Math.sin(h + Math.PI / 2), k = o(k) ? k : 0, l = o(l) ? l : 0, this.drawingArea = m - (l + k) / 2, this.setCenterPoint(l, k)
            },
            setCenterPoint: function(a, b) {
                var c = this.width - b - this.drawingArea,
                    d = a + this.drawingArea;
                this.xCenter = (d + c) / 2, this.yCenter = this.height / 2
            },
            getIndexAngle: function(a) {
                var b = 2 * Math.PI / this.valuesCount;
                return a * b - Math.PI / 2
            },
            getPointPosition: function(a, b) {
                var c = this.getIndexAngle(a);
                return {
                    x: Math.cos(c) * b + this.xCenter,
                    y: Math.sin(c) * b + this.yCenter
                }
            },
            draw: function() {
                if (this.display) {
                    var a = this.ctx;
                    if (e(this.yLabels, function(b, c) {
                            if (c > 0) {
                                var d, e = c * (this.drawingArea / this.steps),
                                    f = this.yCenter - e;
                                if (this.lineWidth > 0)
                                    if (a.strokeStyle = this.lineColor, a.lineWidth = this.lineWidth, this.lineArc) a.beginPath(), a.arc(this.xCenter, this.yCenter, e, 0, 2 * Math.PI), a.closePath(), a.stroke();
                                    else {
                                        a.beginPath();
                                        for (var g = 0; g < this.valuesCount; g++) d = this.getPointPosition(g, this.calculateCenterOffset(this.min + c * this.stepValue)), 0 === g ? a.moveTo(d.x, d.y) : a.lineTo(d.x, d.y);
                                        a.closePath(), a.stroke()
                                    }
                                if (this.showLabels) {
                                    if (a.font = G(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                        var h = a.measureText(b).width;
                                        a.fillStyle = this.backdropColor, a.fillRect(this.xCenter - h / 2 - this.backdropPaddingX, f - this.fontSize / 2 - this.backdropPaddingY, h + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                    }
                                    a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = this.fontColor, a.fillText(b, this.xCenter, f)
                                }
                            }
                        }, this), !this.lineArc) {
                        a.lineWidth = this.angleLineWidth, a.strokeStyle = this.angleLineColor;
                        for (var b = this.valuesCount - 1; b >= 0; b--) {
                            var c = null,
                                d = null;
                            if (this.angleLineWidth > 0 && (c = this.calculateCenterOffset(this.max), d = this.getPointPosition(b, c), a.beginPath(), a.moveTo(this.xCenter, this.yCenter), a.lineTo(d.x, d.y), a.stroke(), a.closePath()), this.backgroundColors && this.backgroundColors.length == this.valuesCount) {
                                null == c && (c = this.calculateCenterOffset(this.max)), null == d && (d = this.getPointPosition(b, c));
                                var f = this.getPointPosition(0 === b ? this.valuesCount - 1 : b - 1, c),
                                    g = this.getPointPosition(b === this.valuesCount - 1 ? 0 : b + 1, c),
                                    h = {
                                        x: (f.x + d.x) / 2,
                                        y: (f.y + d.y) / 2
                                    },
                                    i = {
                                        x: (d.x + g.x) / 2,
                                        y: (d.y + g.y) / 2
                                    };
                                a.beginPath(), a.moveTo(this.xCenter, this.yCenter), a.lineTo(h.x, h.y), a.lineTo(d.x, d.y), a.lineTo(i.x, i.y), a.fillStyle = this.backgroundColors[b], a.fill(), a.closePath()
                            }
                            var j = this.getPointPosition(b, this.calculateCenterOffset(this.max) + 5);
                            a.font = G(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), a.fillStyle = this.pointLabelFontColor;
                            var k = this.labels.length,
                                l = this.labels.length / 2,
                                m = l / 2,
                                n = m > b || b > k - m,
                                o = b === m || b === k - m;
                            0 === b ? a.textAlign = "center" : b === l ? a.textAlign = "center" : l > b ? a.textAlign = "left" : a.textAlign = "right", o ? a.textBaseline = "middle" : n ? a.textBaseline = "bottom" : a.textBaseline = "top",
                                a.fillText(this.labels[b], j.x, j.y)
                        }
                    }
                }
            }
        }), c.animationService = {
            frameDuration: 17,
            animations: [],
            dropFrames: 0,
            addAnimation: function(a, b) {
                for (var c = 0; c < this.animations.length; ++c)
                    if (this.animations[c].chartInstance === a) return void(this.animations[c].animationObject = b);
                this.animations.push({
                    chartInstance: a,
                    animationObject: b
                }), 1 == this.animations.length && d.requestAnimFrame.call(window, this.digestWrapper)
            },
            cancelAnimation: function(a) {
                var b = d.findNextWhere(this.animations, function(b) {
                    return b.chartInstance === a
                });
                b && this.animations.splice(b, 1)
            },
            digestWrapper: function() {
                c.animationService.startDigest.call(c.animationService)
            },
            startDigest: function() {
                var a = Date.now(),
                    b = 0;
                this.dropFrames > 1 && (b = Math.floor(this.dropFrames), this.dropFrames -= b);
                for (var c = 0; c < this.animations.length; c++) null === this.animations[c].animationObject.currentStep && (this.animations[c].animationObject.currentStep = 0), this.animations[c].animationObject.currentStep += 1 + b, this.animations[c].animationObject.currentStep > this.animations[c].animationObject.numSteps && (this.animations[c].animationObject.currentStep = this.animations[c].animationObject.numSteps), this.animations[c].animationObject.render(this.animations[c].chartInstance, this.animations[c].animationObject), this.animations[c].animationObject.currentStep == this.animations[c].animationObject.numSteps && (this.animations[c].animationObject.onAnimationComplete.call(this.animations[c].chartInstance), this.animations.splice(c, 1), c--);
                var e = Date.now(),
                    f = e - a - this.frameDuration,
                    g = f / this.frameDuration;
                g > 1 && (this.dropFrames += g), this.animations.length > 0 && d.requestAnimFrame.call(window, this.digestWrapper)
            }
        }, d.addEvent(window, "resize", function() {
            var a;
            return function() {
                clearTimeout(a), a = setTimeout(function() {
                    e(c.instances, function(a) {
                        a.options.responsive && a.resize(a.render, !0)
                    })
                }, 50)
            }
        }()), n ? define(function() {
            return c
        }) : "object" == typeof module && module.exports && (module.exports = c), a.Chart = c, c.noConflict = function() {
            return a.Chart = b, c
        }
    }.call(this),
    function() {
        "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers,
            d = {
                scaleBeginAtZero: !0,
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                barShowStroke: !0,
                barStrokeWidth: 2,
                barValueSpacing: 5,
                barDatasetSpacing: 1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'
            };
        b.Type.extend({
            name: "Bar",
            defaults: d,
            initialize: function(a) {
                var d = this.options;
                this.ScaleClass = b.Scale.extend({
                    offsetGridLines: !0,
                    calculateBarX: function(a, b, c) {
                        var e = this.calculateBaseWidth(),
                            f = this.calculateX(c) - e / 2,
                            g = this.calculateBarWidth(a);
                        return f + g * b + b * d.barDatasetSpacing + g / 2
                    },
                    calculateBaseWidth: function() {
                        return this.calculateX(1) - this.calculateX(0) - 2 * d.barValueSpacing
                    },
                    calculateBarWidth: function(a) {
                        var b = this.calculateBaseWidth() - (a - 1) * d.barDatasetSpacing;
                        return b / a
                    }
                }), this.datasets = [], this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getBarsAtEvent(a) : [];
                    this.eachBars(function(a) {
                        a.restore(["fillColor", "strokeColor"])
                    }), c.each(b, function(a) {
                        a.fillColor = a.highlightFill, a.strokeColor = a.highlightStroke
                    }), this.showTooltip(b)
                }), this.BarClass = b.Rectangle.extend({
                    strokeWidth: this.options.barStrokeWidth,
                    showStroke: this.options.barShowStroke,
                    ctx: this.chart.ctx
                }), c.each(a.datasets, function(b, d) {
                    var e = {
                        label: b.label || null,
                        fillColor: b.fillColor,
                        strokeColor: b.strokeColor,
                        bars: []
                    };
                    this.datasets.push(e), c.each(b.data, function(c, d) {
                        e.bars.push(new this.BarClass({
                            value: c,
                            label: a.labels[d],
                            datasetLabel: b.label,
                            strokeColor: b.strokeColor,
                            fillColor: b.fillColor,
                            highlightFill: b.highlightFill || b.fillColor,
                            highlightStroke: b.highlightStroke || b.strokeColor
                        }))
                    }, this)
                }, this), this.buildScale(a.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(a, b, d) {
                    c.extend(a, {
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        x: this.scale.calculateBarX(this.datasets.length, d, b),
                        y: this.scale.endPoint
                    }), a.save()
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), c.each(this.activeElements, function(a) {
                    a.restore(["fillColor", "strokeColor"])
                }), this.eachBars(function(a) {
                    a.save()
                }), this.render()
            },
            eachBars: function(a) {
                c.each(this.datasets, function(b, d) {
                    c.each(b.bars, a, this, d)
                }, this)
            },
            getBarsAtEvent: function(a) {
                for (var b, d = [], e = c.getRelativePosition(a), f = function(a) {
                    d.push(a.bars[b])
                }, g = 0; g < this.datasets.length; g++)
                    for (b = 0; b < this.datasets[g].bars.length; b++)
                        if (this.datasets[g].bars[b].inRange(e.x, e.y)) return c.each(this.datasets, f), d;
                return d
            },
            buildScale: function(a) {
                var b = this,
                    d = function() {
                        var a = [];
                        return b.eachBars(function(b) {
                            a.push(b.value)
                        }), a
                    },
                    e = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: a.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(a) {
                            var b = c.calculateScaleRange(d(), a, this.fontSize, this.beginAtZero, this.integersOnly);
                            c.extend(this, b)
                        },
                        xLabels: a,
                        font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && c.extend(e, {
                    calculateYRange: c.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new this.ScaleClass(e)
            },
            addData: function(a, b) {
                c.each(a, function(a, c) {
                    this.datasets[c].bars.push(new this.BarClass({
                        value: a,
                        label: b,
                        datasetLabel: this.datasets[c].label,
                        x: this.scale.calculateBarX(this.datasets.length, c, this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        base: this.scale.endPoint,
                        strokeColor: this.datasets[c].strokeColor,
                        fillColor: this.datasets[c].fillColor
                    }))
                }, this), this.scale.addXLabel(b), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), c.each(this.datasets, function(a) {
                    a.bars.shift()
                }, this), this.update()
            },
            reflow: function() {
                c.extend(this.BarClass.prototype, {
                    y: this.scale.endPoint,
                    base: this.scale.endPoint
                });
                var a = c.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(a)
            },
            draw: function(a) {
                var b = a || 1;
                this.clear(), this.chart.ctx, this.scale.draw(b), c.each(this.datasets, function(a, d) {
                    c.each(a.bars, function(a, c) {
                        a.hasValue() && (a.base = this.scale.endPoint, a.transition({
                            x: this.scale.calculateBarX(this.datasets.length, d, c),
                            y: this.scale.calculateY(a.value),
                            width: this.scale.calculateBarWidth(this.datasets.length)
                        }, b).draw())
                    }, this)
                }, this)
            }
        })
    }.call(this),
    function() {
        "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers,
            d = {
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                percentageInnerCutout: 50,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'
            };
        b.Type.extend({
            name: "Doughnut",
            defaults: d,
            initialize: function(a) {
                this.segments = [], this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = b.Arc.extend({
                    ctx: this.chart.ctx,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getSegmentsAtEvent(a) : [];
                    c.each(this.segments, function(a) {
                        a.restore(["fillColor"])
                    }), c.each(b, function(a) {
                        a.fillColor = a.highlightColor
                    }), this.showTooltip(b)
                }), this.calculateTotal(a), c.each(a, function(b, c) {
                    b.color || (b.color = "hsl(" + 360 * c / a.length + ", 100%, 50%)"), this.addData(b, c, !0)
                }, this), this.render()
            },
            getSegmentsAtEvent: function(a) {
                var b = [],
                    d = c.getRelativePosition(a);
                return c.each(this.segments, function(a) {
                    a.inRange(d.x, d.y) && b.push(a)
                }, this), b
            },
            addData: function(a, c, d) {
                var e = void 0 !== c ? c : this.segments.length;
                "undefined" == typeof a.color && (a.color = b.defaults.global.segmentColorDefault[e % b.defaults.global.segmentColorDefault.length], a.highlight = b.defaults.global.segmentHighlightColorDefaults[e % b.defaults.global.segmentHighlightColorDefaults.length]), this.segments.splice(e, 0, new this.SegmentArc({
                    value: a.value,
                    outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                    innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                    fillColor: a.color,
                    highlightColor: a.highlight || a.color,
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    startAngle: 1.5 * Math.PI,
                    circumference: this.options.animateRotate ? 0 : this.calculateCircumference(a.value),
                    label: a.label
                })), d || (this.reflow(), this.update())
            },
            calculateCircumference: function(a) {
                return this.total > 0 ? 2 * Math.PI * (a / this.total) : 0
            },
            calculateTotal: function(a) {
                this.total = 0, c.each(a, function(a) {
                    this.total += Math.abs(a.value)
                }, this)
            },
            update: function() {
                this.calculateTotal(this.segments), c.each(this.activeElements, function(a) {
                    a.restore(["fillColor"])
                }), c.each(this.segments, function(a) {
                    a.save()
                }), this.render()
            },
            removeData: function(a) {
                var b = c.isNumber(a) ? a : this.segments.length - 1;
                this.segments.splice(b, 1), this.reflow(), this.update()
            },
            reflow: function() {
                c.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, c.each(this.segments, function(a) {
                    a.update({
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    })
                }, this)
            },
            draw: function(a) {
                var b = a ? a : 1;
                this.clear(), c.each(this.segments, function(a, c) {
                    a.transition({
                        circumference: this.calculateCircumference(a.value),
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    }, b), a.endAngle = a.startAngle + a.circumference, a.draw(), 0 === c && (a.startAngle = 1.5 * Math.PI), c < this.segments.length - 1 && (this.segments[c + 1].startAngle = a.endAngle)
                }, this)
            }
        }), b.types.Doughnut.extend({
            name: "Pie",
            defaults: c.merge(d, {
                percentageInnerCutout: 0
            })
        })
    }.call(this),
    function() {
        "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers,
            d = {
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                bezierCurve: !0,
                bezierCurveTension: .4,
                pointDot: !0,
                pointDotRadius: 4,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>',
                offsetGridLines: !1
            };
        b.Type.extend({
            name: "Line",
            defaults: d,
            initialize: function(a) {
                this.PointClass = b.Point.extend({
                    offsetGridLines: this.options.offsetGridLines,
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx,
                    inRange: function(a) {
                        return Math.pow(a - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                    }
                }), this.datasets = [], this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getPointsAtEvent(a) : [];
                    this.eachPoints(function(a) {
                        a.restore(["fillColor", "strokeColor"])
                    }), c.each(b, function(a) {
                        a.fillColor = a.highlightFill, a.strokeColor = a.highlightStroke
                    }), this.showTooltip(b)
                }), c.each(a.datasets, function(b) {
                    var d = {
                        label: b.label || null,
                        fillColor: b.fillColor,
                        strokeColor: b.strokeColor,
                        pointColor: b.pointColor,
                        pointStrokeColor: b.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(d), c.each(b.data, function(c, e) {
                        d.points.push(new this.PointClass({
                            value: c,
                            label: a.labels[e],
                            datasetLabel: b.label,
                            strokeColor: b.pointStrokeColor,
                            fillColor: b.pointColor,
                            highlightFill: b.pointHighlightFill || b.pointColor,
                            highlightStroke: b.pointHighlightStroke || b.pointStrokeColor
                        }))
                    }, this), this.buildScale(a.labels), this.eachPoints(function(a, b) {
                        c.extend(a, {
                            x: this.scale.calculateX(b),
                            y: this.scale.endPoint
                        }), a.save()
                    }, this)
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), c.each(this.activeElements, function(a) {
                    a.restore(["fillColor", "strokeColor"])
                }), this.eachPoints(function(a) {
                    a.save()
                }), this.render()
            },
            eachPoints: function(a) {
                c.each(this.datasets, function(b) {
                    c.each(b.points, a, this)
                }, this)
            },
            getPointsAtEvent: function(a) {
                var b = [],
                    d = c.getRelativePosition(a);
                return c.each(this.datasets, function(a) {
                    c.each(a.points, function(a) {
                        a.inRange(d.x, d.y) && b.push(a)
                    })
                }, this), b
            },
            buildScale: function(a) {
                var d = this,
                    e = function() {
                        var a = [];
                        return d.eachPoints(function(b) {
                            a.push(b.value)
                        }), a
                    },
                    f = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        offsetGridLines: this.options.offsetGridLines,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: a.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(a) {
                            var b = c.calculateScaleRange(e(), a, this.fontSize, this.beginAtZero, this.integersOnly);
                            c.extend(this, b)
                        },
                        xLabels: a,
                        font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && c.extend(f, {
                    calculateYRange: c.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new b.Scale(f)
            },
            addData: function(a, b) {
                c.each(a, function(a, c) {
                    this.datasets[c].points.push(new this.PointClass({
                        value: a,
                        label: b,
                        datasetLabel: this.datasets[c].label,
                        x: this.scale.calculateX(this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        strokeColor: this.datasets[c].pointStrokeColor,
                        fillColor: this.datasets[c].pointColor
                    }))
                }, this), this.scale.addXLabel(b), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), c.each(this.datasets, function(a) {
                    a.points.shift()
                }, this), this.update()
            },
            reflow: function() {
                var a = c.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(a)
            },
            draw: function(a) {
                var b = a || 1;
                this.clear();
                var d = this.chart.ctx,
                    e = function(a) {
                        return null !== a.value
                    },
                    f = function(a, b, d) {
                        return c.findNextWhere(b, e, d) || a
                    },
                    g = function(a, b, d) {
                        return c.findPreviousWhere(b, e, d) || a
                    };
                this.scale && (this.scale.draw(b), c.each(this.datasets, function(a) {
                    var h = c.where(a.points, e);
                    c.each(a.points, function(a, c) {
                        a.hasValue() && a.transition({
                            y: this.scale.calculateY(a.value),
                            x: this.scale.calculateX(c)
                        }, b)
                    }, this), this.options.bezierCurve && c.each(h, function(a, b) {
                        var d = b > 0 && b < h.length - 1 ? this.options.bezierCurveTension : 0;
                        a.controlPoints = c.splineCurve(g(a, h, b), a, f(a, h, b), d), a.controlPoints.outer.y > this.scale.endPoint ? a.controlPoints.outer.y = this.scale.endPoint : a.controlPoints.outer.y < this.scale.startPoint && (a.controlPoints.outer.y = this.scale.startPoint), a.controlPoints.inner.y > this.scale.endPoint ? a.controlPoints.inner.y = this.scale.endPoint : a.controlPoints.inner.y < this.scale.startPoint && (a.controlPoints.inner.y = this.scale.startPoint)
                    }, this), d.lineWidth = this.options.datasetStrokeWidth, d.strokeStyle = a.strokeColor, d.beginPath(), c.each(h, function(a, b) {
                        if (0 === b) d.moveTo(a.x, a.y);
                        else if (this.options.bezierCurve) {
                            var c = g(a, h, b);
                            d.bezierCurveTo(c.controlPoints.outer.x, c.controlPoints.outer.y, a.controlPoints.inner.x, a.controlPoints.inner.y, a.x, a.y)
                        } else d.lineTo(a.x, a.y)
                    }, this), this.options.datasetStroke && d.stroke(), this.options.datasetFill && h.length > 0 && (d.lineTo(h[h.length - 1].x, this.scale.endPoint), d.lineTo(h[0].x, this.scale.endPoint), d.fillStyle = a.fillColor, d.closePath(), d.fill()), c.each(h, function(a) {
                        a.draw()
                    })
                }, this))
            }
        })
    }.call(this),
    function() {
        "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers,
            d = {
                scaleShowLabelBackdrop: !0,
                scaleBackdropColor: "rgba(255,255,255,0.75)",
                scaleBeginAtZero: !0,
                scaleBackdropPaddingY: 2,
                scaleBackdropPaddingX: 2,
                scaleShowLine: !0,
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'
            };
        b.Type.extend({
            name: "PolarArea",
            defaults: d,
            initialize: function(a) {
                this.segments = [], this.SegmentArc = b.Arc.extend({
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    ctx: this.chart.ctx,
                    innerRadius: 0,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.scale = new b.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    lineArc: !0,
                    width: this.chart.width,
                    height: this.chart.height,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    valuesCount: a.length
                }), this.updateScaleRange(a), this.scale.update(), c.each(a, function(a, b) {
                    this.addData(a, b, !0)
                }, this), this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getSegmentsAtEvent(a) : [];
                    c.each(this.segments, function(a) {
                        a.restore(["fillColor"])
                    }), c.each(b, function(a) {
                        a.fillColor = a.highlightColor
                    }), this.showTooltip(b)
                }), this.render()
            },
            getSegmentsAtEvent: function(a) {
                var b = [],
                    d = c.getRelativePosition(a);
                return c.each(this.segments, function(a) {
                    a.inRange(d.x, d.y) && b.push(a)
                }, this), b
            },
            addData: function(a, b, c) {
                var d = b || this.segments.length;
                this.segments.splice(d, 0, new this.SegmentArc({
                    fillColor: a.color,
                    highlightColor: a.highlight || a.color,
                    label: a.label,
                    value: a.value,
                    outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(a.value),
                    circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                    startAngle: 1.5 * Math.PI
                })), c || (this.reflow(), this.update())
            },
            removeData: function(a) {
                var b = c.isNumber(a) ? a : this.segments.length - 1;
                this.segments.splice(b, 1), this.reflow(), this.update()
            },
            calculateTotal: function(a) {
                this.total = 0, c.each(a, function(a) {
                    this.total += a.value
                }, this), this.scale.valuesCount = this.segments.length
            },
            updateScaleRange: function(a) {
                var b = [];
                c.each(a, function(a) {
                    b.push(a.value)
                });
                var d = this.options.scaleOverride ? {
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                } : c.calculateScaleRange(b, c.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                c.extend(this.scale, d, {
                    size: c.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                })
            },
            update: function() {
                this.calculateTotal(this.segments), c.each(this.segments, function(a) {
                    a.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                c.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.updateScaleRange(this.segments), this.scale.update(), c.extend(this.scale, {
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), c.each(this.segments, function(a) {
                    a.update({
                        outerRadius: this.scale.calculateCenterOffset(a.value)
                    })
                }, this)
            },
            draw: function(a) {
                var b = a || 1;
                this.clear(), c.each(this.segments, function(a, c) {
                    a.transition({
                        circumference: this.scale.getCircumference(),
                        outerRadius: this.scale.calculateCenterOffset(a.value)
                    }, b), a.endAngle = a.startAngle + a.circumference, 0 === c && (a.startAngle = 1.5 * Math.PI), c < this.segments.length - 1 && (this.segments[c + 1].startAngle = a.endAngle), a.draw()
                }, this), this.scale.draw()
            }
        })
    }.call(this),
    function() {
        "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers;
        b.Type.extend({
            name: "Radar",
            defaults: {
                scaleShowLine: !0,
                angleShowLineOut: !0,
                scaleShowLabels: !1,
                scaleBeginAtZero: !0,
                angleLineColor: "rgba(0,0,0,.1)",
                angleLineWidth: 1,
                pointLabelFontFamily: "'Arial'",
                pointLabelFontStyle: "normal",
                pointLabelFontSize: 10,
                pointLabelFontColor: "#666",
                pointDot: !0,
                pointDotRadius: 3,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'
            },
            initialize: function(a) {
                this.PointClass = b.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx
                }), this.datasets = [], this.buildScale(a), this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getPointsAtEvent(a) : [];
                    this.eachPoints(function(a) {
                        a.restore(["fillColor", "strokeColor"])
                    }), c.each(b, function(a) {
                        a.fillColor = a.highlightFill, a.strokeColor = a.highlightStroke
                    }), this.showTooltip(b)
                }), c.each(a.datasets, function(b) {
                    var d = {
                        label: b.label || null,
                        fillColor: b.fillColor,
                        strokeColor: b.strokeColor,
                        pointColor: b.pointColor,
                        pointStrokeColor: b.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(d), c.each(b.data, function(c, e) {
                        var f;
                        this.scale.animation || (f = this.scale.getPointPosition(e, this.scale.calculateCenterOffset(c))), d.points.push(new this.PointClass({
                            value: c,
                            label: a.labels[e],
                            datasetLabel: b.label,
                            x: this.options.animation ? this.scale.xCenter : f.x,
                            y: this.options.animation ? this.scale.yCenter : f.y,
                            strokeColor: b.pointStrokeColor,
                            fillColor: b.pointColor,
                            highlightFill: b.pointHighlightFill || b.pointColor,
                            highlightStroke: b.pointHighlightStroke || b.pointStrokeColor
                        }))
                    }, this)
                }, this), this.render()
            },
            eachPoints: function(a) {
                c.each(this.datasets, function(b) {
                    c.each(b.points, a, this)
                }, this)
            },
            getPointsAtEvent: function(a) {
                var b = c.getRelativePosition(a),
                    d = c.getAngleFromPoint({
                        x: this.scale.xCenter,
                        y: this.scale.yCenter
                    }, b),
                    e = 2 * Math.PI / this.scale.valuesCount,
                    f = Math.round((d.angle - 1.5 * Math.PI) / e),
                    g = [];
                return (f >= this.scale.valuesCount || 0 > f) && (f = 0), d.distance <= this.scale.drawingArea && c.each(this.datasets, function(a) {
                    g.push(a.points[f])
                }), g
            },
            buildScale: function(a) {
                this.scale = new b.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backgroundColors: this.options.scaleBackgroundColors,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    angleLineColor: this.options.angleLineColor,
                    angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                    pointLabelFontColor: this.options.pointLabelFontColor,
                    pointLabelFontSize: this.options.pointLabelFontSize,
                    pointLabelFontFamily: this.options.pointLabelFontFamily,
                    pointLabelFontStyle: this.options.pointLabelFontStyle,
                    height: this.chart.height,
                    width: this.chart.width,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    labels: a.labels,
                    valuesCount: a.datasets[0].data.length
                }), this.scale.setScaleSize(), this.updateScaleRange(a.datasets), this.scale.buildYLabels()
            },
            updateScaleRange: function(a) {
                var b = function() {
                        var b = [];
                        return c.each(a, function(a) {
                            a.data ? b = b.concat(a.data) : c.each(a.points, function(a) {
                                b.push(a.value)
                            })
                        }), b
                    }(),
                    d = this.options.scaleOverride ? {
                        steps: this.options.scaleSteps,
                        stepValue: this.options.scaleStepWidth,
                        min: this.options.scaleStartValue,
                        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                    } : c.calculateScaleRange(b, c.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                c.extend(this.scale, d)
            },
            addData: function(a, b) {
                this.scale.valuesCount++, c.each(a, function(a, c) {
                    var d = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(a));
                    this.datasets[c].points.push(new this.PointClass({
                        value: a,
                        label: b,
                        datasetLabel: this.datasets[c].label,
                        x: d.x,
                        y: d.y,
                        strokeColor: this.datasets[c].pointStrokeColor,
                        fillColor: this.datasets[c].pointColor
                    }))
                }, this), this.scale.labels.push(b), this.reflow(), this.update()
            },
            removeData: function() {
                this.scale.valuesCount--, this.scale.labels.shift(), c.each(this.datasets, function(a) {
                    a.points.shift()
                }, this), this.reflow(), this.update()
            },
            update: function() {
                this.eachPoints(function(a) {
                    a.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                c.extend(this.scale, {
                    width: this.chart.width,
                    height: this.chart.height,
                    size: c.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
            },
            draw: function(a) {
                var b = a || 1,
                    d = this.chart.ctx;
                this.clear(), this.scale.draw(), c.each(this.datasets, function(a) {
                    c.each(a.points, function(a, c) {
                        a.hasValue() && a.transition(this.scale.getPointPosition(c, this.scale.calculateCenterOffset(a.value)), b)
                    }, this), d.lineWidth = this.options.datasetStrokeWidth, d.strokeStyle = a.strokeColor, d.beginPath(), c.each(a.points, function(a, b) {
                        0 === b ? d.moveTo(a.x, a.y) : d.lineTo(a.x, a.y)
                    }, this), d.closePath(), d.stroke(), d.fillStyle = a.fillColor, this.options.datasetFill && d.fill(), c.each(a.points, function(a) {
                        a.hasValue() && a.draw()
                    })
                }, this)
            }
        })
    }.call(this),
    function() {
        var a, b, c, d, e, f = function(a, b) {
                return function() {
                    return a.apply(b, arguments)
                }
            },
            g = [].indexOf || function(a) {
                    for (var b = 0, c = this.length; c > b; b++)
                        if (b in this && this[b] === a) return b;
                    return -1
                };
        b = function() {
            function a() {}
            return a.prototype.extend = function(a, b) {
                var c, d;
                for (c in b) d = b[c], null == a[c] && (a[c] = d);
                return a
            }, a.prototype.isMobile = function(a) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
            }, a.prototype.createEvent = function(a, b, c, d) {
                var e;
                return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
            }, a.prototype.emitEvent = function(a, b) {
                return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
            }, a.prototype.addEvent = function(a, b, c) {
                return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
            }, a.prototype.removeEvent = function(a, b, c) {
                return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
            }, a.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, a
        }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
                function a() {
                    this.keys = [], this.values = []
                }
                return a.prototype.get = function(a) {
                    var b, c, d, e, f;
                    for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                        if (c = f[b], c === a) return this.values[b]
                }, a.prototype.set = function(a, b) {
                    var c, d, e, f, g;
                    for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                        if (d = g[c], d === a) return void(this.values[c] = b);
                    return this.keys.push(a), this.values.push(b)
                }, a
            }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
                function a() {
                    "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
                }
                return a.notSupported = !0, a.prototype.observe = function() {}, a
            }()), d = this.getComputedStyle || function(a, b) {
                return this.getPropertyValue = function(b) {
                    var c;
                    return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
                        return b.toUpperCase()
                    }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
                }, this
            }, e = /(\-([a-z]){1})/g, this.WOW = function() {
            function e(a) {
                null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
            }
            return e.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null
            }, e.prototype.init = function() {
                var a;
                return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, e.prototype.start = function() {
                var b, c, d, e;
                if (this.stopped = !1, this.boxes = function() {
                        var a, c, d, e;
                        for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                        return e
                    }.call(this), this.all = function() {
                        var a, c, d, e;
                        for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                        return e
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
                return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) {
                    return function(b) {
                        var c, d, e, f, g;
                        for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() {
                            var a, b, c, d;
                            for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
                            return d
                        }.call(a));
                        return g
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, e.prototype.stop = function() {
                return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, e.prototype.sync = function(b) {
                return a.notSupported ? this.doSync(this.element) : void 0
            }, e.prototype.doSync = function(a) {
                var b, c, d, e, f;
                if (null == a && (a = this.element), 1 === a.nodeType) {
                    for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                    return f;
                }
            }, e.prototype.show = function(a) {
                return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
            }, e.prototype.applyStyle = function(a, b) {
                var c, d, e;
                return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
                    return function() {
                        return f.customStyle(a, b, d, c, e)
                    }
                }(this))
            }, e.prototype.animate = function() {
                return "requestAnimationFrame" in window ? function(a) {
                    return window.requestAnimationFrame(a)
                } : function(a) {
                    return a()
                }
            }(), e.prototype.resetStyle = function() {
                var a, b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
                return e
            }, e.prototype.resetAnimation = function(a) {
                var b;
                return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
            }, e.prototype.customStyle = function(a, b, c, d, e) {
                return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                    animationDuration: c
                }), d && this.vendorSet(a.style, {
                    animationDelay: d
                }), e && this.vendorSet(a.style, {
                    animationIterationCount: e
                }), this.vendorSet(a.style, {
                    animationName: b ? "none" : this.cachedAnimationName(a)
                }), a
            }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
                var c, d, e, f;
                d = [];
                for (c in b) e = b[c], a["" + c] = e, d.push(function() {
                    var b, d, g, h;
                    for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                    return h
                }.call(this));
                return d
            }, e.prototype.vendorCSS = function(a, b) {
                var c, e, f, g, h, i;
                for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
                return g
            }, e.prototype.animationName = function(a) {
                var b;
                try {
                    b = this.vendorCSS(a, "animation-name").cssText
                } catch (c) {
                    b = d(a).getPropertyValue("animation-name")
                }
                return "none" === b ? "" : b
            }, e.prototype.cacheAnimationName = function(a) {
                return this.animationNameCache.set(a, this.animationName(a))
            }, e.prototype.cachedAnimationName = function(a) {
                return this.animationNameCache.get(a)
            }, e.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, e.prototype.scrollCallback = function() {
                var a;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                    var b, c, d, e;
                    for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                    return e
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, e.prototype.offsetTop = function(a) {
                for (var b; void 0 === a.offsetTop;) a = a.parentNode;
                for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
                return b
            }, e.prototype.isVisible = function(a) {
                var b, c, d, e, f;
                return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
            }, e.prototype.util = function() {
                return null != this._util ? this._util : this._util = new b
            }, e.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, e
        }()
    }.call(this), $(window).scroll(function() {
    $(".navbar").offset() && ($(".navbar").offset().top > 50 ? $(".scrolling-navbar").addClass("top-nav-collapse") : $(".scrolling-navbar").removeClass("top-nav-collapse"))
}), $(function() {
    $("a.page-scroll").bind("click", function(a) {
        var b = $(this);
        $("html, body").stop().animate({
            scrollTop: $(b.attr("href")).offset().top
        }, 1500, "easeInOutExpo"), a.preventDefault()
    })
}),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define([], function() {
            return b.apply(a)
        }) : "object" == typeof exports ? module.exports = b.call(a) : a.Waves = b.call(a)
    }("object" == typeof global ? global : this, function() {
        "use strict";

        function a(a) {
            return null !== a && a === a.window
        }

        function b(b) {
            return a(b) ? b : 9 === b.nodeType && b.defaultView
        }

        function c(a) {
            var b = typeof a;
            return "function" === b || "object" === b && !!a
        }

        function d(a) {
            return c(a) && a.nodeType > 0
        }

        function e(a) {
            var b = m.call(a);
            return "[object String]" === b ? l(a) : c(a) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(b) && a.hasOwnProperty("length") ? a : d(a) ? [a] : []
        }

        function f(a) {
            var c, d, e = {
                    top: 0,
                    left: 0
                },
                f = a && a.ownerDocument;
            return c = f.documentElement, "undefined" != typeof a.getBoundingClientRect && (e = a.getBoundingClientRect()), d = b(f), {
                top: e.top + d.pageYOffset - c.clientTop,
                left: e.left + d.pageXOffset - c.clientLeft
            }
        }

        function g(a) {
            var b = "";
            for (var c in a) a.hasOwnProperty(c) && (b += c + ":" + a[c] + ";");
            return b
        }

        function h(a, b, c) {
            if (c) {
                c.classList.remove("waves-rippling");
                var d = c.getAttribute("data-x"),
                    e = c.getAttribute("data-y"),
                    f = c.getAttribute("data-scale"),
                    h = c.getAttribute("data-translate"),
                    i = Date.now() - Number(c.getAttribute("data-hold")),
                    j = 350 - i;
                0 > j && (j = 0), "mousemove" === a.type && (j = 150);
                var k = "mousemove" === a.type ? 2500 : o.duration;
                setTimeout(function() {
                    var a = {
                        top: e + "px",
                        left: d + "px",
                        opacity: "0",
                        "-webkit-transition-duration": k + "ms",
                        "-moz-transition-duration": k + "ms",
                        "-o-transition-duration": k + "ms",
                        "transition-duration": k + "ms",
                        "-webkit-transform": f + " " + h,
                        "-moz-transform": f + " " + h,
                        "-ms-transform": f + " " + h,
                        "-o-transform": f + " " + h,
                        transform: f + " " + h
                    };
                    c.setAttribute("style", g(a)), setTimeout(function() {
                        try {
                            b.removeChild(c)
                        } catch (a) {
                            return !1
                        }
                    }, k)
                }, j)
            }
        }

        function i(a) {
            if (q.allowEvent(a) === !1) return null;
            for (var b = null, c = a.target || a.srcElement; null !== c.parentElement;) {
                if (c.classList.contains("waves-effect") && !(c instanceof SVGElement)) {
                    b = c;
                    break
                }
                c = c.parentElement
            }
            return b
        }

        function j(a) {
            var b = i(a);
            if (null !== b) {
                if (b.disabled || b.getAttribute("disabled") || b.classList.contains("disabled")) return;
                if (q.registerEvent(a), "touchstart" === a.type && o.delay) {
                    var c = !1,
                        d = setTimeout(function() {
                            d = null, o.show(a, b)
                        }, o.delay),
                        e = function(e) {
                            d && (clearTimeout(d), d = null, o.show(a, b)), c || (c = !0, o.hide(e, b))
                        },
                        f = function(a) {
                            d && (clearTimeout(d), d = null), e(a)
                        };
                    b.addEventListener("touchmove", f, !1), b.addEventListener("touchend", e, !1), b.addEventListener("touchcancel", e, !1)
                } else o.show(a, b), n && (b.addEventListener("touchend", o.hide, !1), b.addEventListener("touchcancel", o.hide, !1)), b.addEventListener("mouseup", o.hide, !1), b.addEventListener("mouseleave", o.hide, !1)
            }
        }
        var k = k || {},
            l = document.querySelectorAll.bind(document),
            m = Object.prototype.toString,
            n = "ontouchstart" in window,
            o = {
                duration: 750,
                delay: 200,
                show: function(a, b, c) {
                    if (2 === a.button) return !1;
                    b = b || this;
                    var d = document.createElement("div");
                    d.className = "waves-ripple waves-rippling", b.appendChild(d);
                    var e = f(b),
                        h = 0,
                        i = 0;
                    "touches" in a && a.touches.length ? (h = a.touches[0].pageY - e.top, i = a.touches[0].pageX - e.left) : (h = a.pageY - e.top, i = a.pageX - e.left), i = i >= 0 ? i : 0, h = h >= 0 ? h : 0;
                    var j = "scale(" + b.clientWidth / 100 * 3 + ")",
                        k = "translate(0,0)";
                    c && (k = "translate(" + c.x + "px, " + c.y + "px)"), d.setAttribute("data-hold", Date.now()), d.setAttribute("data-x", i), d.setAttribute("data-y", h), d.setAttribute("data-scale", j), d.setAttribute("data-translate", k);
                    var l = {
                        top: h + "px",
                        left: i + "px"
                    };
                    d.classList.add("waves-notransition"), d.setAttribute("style", g(l)), d.classList.remove("waves-notransition"), l["-webkit-transform"] = j + " " + k, l["-moz-transform"] = j + " " + k, l["-ms-transform"] = j + " " + k, l["-o-transform"] = j + " " + k, l.transform = j + " " + k, l.opacity = "1";
                    var m = "mousemove" === a.type ? 2500 : o.duration;
                    l["-webkit-transition-duration"] = m + "ms", l["-moz-transition-duration"] = m + "ms", l["-o-transition-duration"] = m + "ms", l["transition-duration"] = m + "ms", d.setAttribute("style", g(l))
                },
                hide: function(a, b) {
                    b = b || this;
                    for (var c = b.getElementsByClassName("waves-rippling"), d = 0, e = c.length; e > d; d++) h(a, b, c[d])
                }
            },
            p = {
                input: function(a) {
                    var b = a.parentNode;
                    if ("i" !== b.tagName.toLowerCase() || !b.classList.contains("waves-effect")) {
                        var c = document.createElement("i");
                        c.className = a.className + " waves-input-wrapper", a.className = "waves-button-input", b.replaceChild(c, a), c.appendChild(a);
                        var d = window.getComputedStyle(a, null),
                            e = d.color,
                            f = d.backgroundColor;
                        c.setAttribute("style", "color:" + e + ";background:" + f), a.setAttribute("style", "background-color:rgba(0,0,0,0);")
                    }
                },
                img: function(a) {
                    var b = a.parentNode;
                    if ("i" !== b.tagName.toLowerCase() || !b.classList.contains("waves-effect")) {
                        var c = document.createElement("i");
                        b.replaceChild(c, a), c.appendChild(a)
                    }
                }
            },
            q = {
                touches: 0,
                allowEvent: function(a) {
                    var b = !0;
                    return /^(mousedown|mousemove)$/.test(a.type) && q.touches && (b = !1), b
                },
                registerEvent: function(a) {
                    var b = a.type;
                    "touchstart" === b ? q.touches += 1 : /^(touchend|touchcancel)$/.test(b) && setTimeout(function() {
                        q.touches && (q.touches -= 1)
                    }, 500)
                }
            };
        return k.init = function(a) {
            var b = document.body;
            a = a || {}, "duration" in a && (o.duration = a.duration), "delay" in a && (o.delay = a.delay), n && (b.addEventListener("touchstart", j, !1), b.addEventListener("touchcancel", q.registerEvent, !1), b.addEventListener("touchend", q.registerEvent, !1)), b.addEventListener("mousedown", j, !1)
        }, k.attach = function(a, b) {
            a = e(a), "[object Array]" === m.call(b) && (b = b.join(" ")), b = b ? " " + b : "";
            for (var c, d, f = 0, g = a.length; g > f; f++) c = a[f], d = c.tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(d) && (p[d](c), c = c.parentElement), -1 === c.className.indexOf("waves-effect") && (c.className += " waves-effect" + b)
        }, k.ripple = function(a, b) {
            a = e(a);
            var c = a.length;
            if (b = b || {}, b.wait = b.wait || 0, b.position = b.position || null, c)
                for (var d, g, h, i = {}, j = 0, k = {
                    type: "mousedown",
                    button: 1
                }, l = function(a, b) {
                    return function() {
                        o.hide(a, b)
                    }
                }; c > j; j++)
                    if (d = a[j], g = b.position || {
                                x: d.clientWidth / 2,
                                y: d.clientHeight / 2
                            }, h = f(d), i.x = h.left + g.x, i.y = h.top + g.y, k.pageX = i.x, k.pageY = i.y, o.show(k, d), b.wait >= 0 && null !== b.wait) {
                        var m = {
                            type: "mouseup",
                            button: 1
                        };
                        setTimeout(l(m, d), b.wait)
                    }
        }, k.calm = function(a) {
            a = e(a);
            for (var b = {
                type: "mouseup",
                button: 1
            }, c = 0, d = a.length; d > c; c++) o.hide(b, a[c])
        }, k.displayEffect = function(a) {
            console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), k.init(a)
        }, k
    }), Waves.attach(".btn, .btn-floating", ["waves-light"]), Waves.attach(".view .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a, .nav-icons li a, .navbar form, .nav-tabs .nav-item", ["waves-light"]), Waves.attach(".navbar-brand", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init(), $(document).ready(function() {
    $("#preloader-markup").load("mdb-addons/preloader.html", function() {
        $(window).load(function() {
            $("#mdb-preloader").fadeOut("slow")
        })
    })
}),
    function(a) {
        a(document).ready(function() {
            a(document).on("click.card", ".card", function(b) {
                a(this).find(".card-reveal").length && (a(b.target).is(a(".card-reveal .card-title")) || a(b.target).is(a(".card-reveal .card-title i")) ? a(this).find(".card-reveal").velocity({
                    translateY: 0
                }, {
                    duration: 225,
                    queue: !1,
                    easing: "easeInOutQuad",
                    complete: function() {
                        a(this).css({
                            display: "none"
                        })
                    }
                }) : (a(b.target).is(a(".card .activator")) || a(b.target).is(a(".card .activator i"))) && a(this).find(".card-reveal").css({
                    display: "block"
                }).velocity("stop", !1).velocity({
                    translateY: "-100%"
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeInOutQuad"
                }))
            })
        })
    }(jQuery), $(document).ready(function(a) {
    a(".card-share > a").on("click", function(b) {
        b.preventDefault(), a(this).parent().find("div").toggleClass("social-reveal-active"), a(this).toggleClass("share-expanded")
    })
}),
    function(a) {
        function b() {
            var b = +a(this).attr("length"),
                c = +a(this).val().length,
                d = b >= c;
            a(this).parent().find('span[class="character-counter"]').html(c + "/" + b), e(d, a(this))
        }

        function c(b) {
            var c = a("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1);
            b.parent().append(c)
        }

        function d() {
            a(this).parent().find('span[class="character-counter"]').html("")
        }

        function e(a, b) {
            var c = b.hasClass("invalid");
            a && c ? b.removeClass("invalid") : a || c || (b.removeClass("valid"), b.addClass("invalid"))
        }
        a.fn.characterCounter = function() {
            return this.each(function() {
                var e = void 0 !== a(this).attr("length");
                e && (a(this).on("input", b), a(this).on("focus", b), a(this).on("blur", d), c(a(this)))
            })
        }, a(document).ready(function() {
            a("input, textarea").characterCounter()
        })
    }(jQuery),
    function(a) {
        a(["jquery"], function(a) {
            return function() {
                function b(a, b, c) {
                    return o({
                        type: v.error,
                        iconClass: p().iconClasses.error,
                        message: a,
                        optionsOverride: c,
                        title: b
                    })
                }

                function c(b, c) {
                    return b || (b = p()), r = a("#" + b.containerId), r.length ? r : (c && (r = l(b)), r)
                }

                function d(a, b, c) {
                    return o({
                        type: v.info,
                        iconClass: p().iconClasses.info,
                        message: a,
                        optionsOverride: c,
                        title: b
                    })
                }

                function e(a) {
                    s = a
                }

                function f(a, b, c) {
                    return o({
                        type: v.success,
                        iconClass: p().iconClasses.success,
                        message: a,
                        optionsOverride: c,
                        title: b
                    })
                }

                function g(a, b, c) {
                    return o({
                        type: v.warning,
                        iconClass: p().iconClasses.warning,
                        message: a,
                        optionsOverride: c,
                        title: b
                    })
                }

                function h(a, b) {
                    var d = p();
                    r || c(d), k(a, d, b) || j(d)
                }

                function i(b) {
                    var d = p();
                    return r || c(d), b && 0 === a(":focus", b).length ? void q(b) : void(r.children().length && r.remove())
                }

                function j(b) {
                    for (var c = r.children(), d = c.length - 1; d >= 0; d--) k(a(c[d]), b)
                }

                function k(b, c, d) {
                    var e = !(!d || !d.force) && d.force;
                    return !(!b || !e && 0 !== a(":focus", b).length) && (b[c.hideMethod]({
                            duration: c.hideDuration,
                            easing: c.hideEasing,
                            complete: function() {
                                q(b)
                            }
                        }), !0)
                }

                function l(b) {
                    return r = a("<div/>").attr("id", b.containerId).addClass(b.positionClass).attr("aria-live", "polite").attr("role", "alert"), r.appendTo(a(b.target)), r
                }

                function m() {
                    return {
                        tapToDismiss: !0,
                        toastClass: "toast",
                        containerId: "toast-container",
                        debug: !1,
                        showMethod: "fadeIn",
                        showDuration: 300,
                        showEasing: "swing",
                        onShown: void 0,
                        hideMethod: "fadeOut",
                        hideDuration: 1e3,
                        hideEasing: "swing",
                        onHidden: void 0,
                        closeMethod: !1,
                        closeDuration: !1,
                        closeEasing: !1,
                        extendedTimeOut: 1e3,
                        iconClasses: {
                            error: "toast-error",
                            info: "toast-info",
                            success: "toast-success",
                            warning: "toast-warning"
                        },
                        iconClass: "toast-info",
                        positionClass: "toast-top-right",
                        timeOut: 5e3,
                        titleClass: "toast-title",
                        messageClass: "toast-message",
                        escapeHtml: !1,
                        target: "body",
                        closeHtml: '<button type="button">&times;</button>',
                        newestOnTop: !0,
                        preventDuplicates: !1,
                        progressBar: !1
                    }
                }

                function n(a) {
                    s && s(a)
                }

                function o(b) {
                    function d(a) {
                        return null == a && (a = ""), new String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                    }

                    function e() {
                        h(), j(), k(), l(), m(), i()
                    }

                    function f() {
                        B.hover(w, v), !y.onclick && y.tapToDismiss && B.click(s), y.closeButton && F && F.click(function(a) {
                            a.stopPropagation ? a.stopPropagation() : void 0 !== a.cancelBubble && a.cancelBubble !== !0 && (a.cancelBubble = !0), s(!0)
                        }), y.onclick && B.click(function(a) {
                            y.onclick(a), s()
                        })
                    }

                    function g() {
                        B.hide(), B[y.showMethod]({
                            duration: y.showDuration,
                            easing: y.showEasing,
                            complete: y.onShown
                        }), y.timeOut > 0 && (A = setTimeout(s, y.timeOut), G.maxHideTime = parseFloat(y.timeOut), G.hideEta = (new Date).getTime() + G.maxHideTime, y.progressBar && (G.intervalId = setInterval(x, 10)))
                    }

                    function h() {
                        b.iconClass && B.addClass(y.toastClass).addClass(z)
                    }

                    function i() {
                        y.newestOnTop ? r.prepend(B) : r.append(B)
                    }

                    function j() {
                        b.title && (C.append(y.escapeHtml ? d(b.title) : b.title).addClass(y.titleClass), B.append(C))
                    }

                    function k() {
                        b.message && (D.append(y.escapeHtml ? d(b.message) : b.message).addClass(y.messageClass), B.append(D))
                    }

                    function l() {
                        y.closeButton && (F.addClass("toast-close-button").attr("role", "button"), B.prepend(F))
                    }

                    function m() {
                        y.progressBar && (E.addClass("toast-progress"), B.prepend(E))
                    }

                    function o(a, b) {
                        if (a.preventDuplicates) {
                            if (b.message === t) return !0;
                            t = b.message
                        }
                        return !1
                    }

                    function s(b) {
                        var c = b && y.closeMethod !== !1 ? y.closeMethod : y.hideMethod,
                            d = b && y.closeDuration !== !1 ? y.closeDuration : y.hideDuration,
                            e = b && y.closeEasing !== !1 ? y.closeEasing : y.hideEasing;
                        return !a(":focus", B).length || b ? (clearTimeout(G.intervalId), B[c]({
                            duration: d,
                            easing: e,
                            complete: function() {
                                q(B), y.onHidden && "hidden" !== H.state && y.onHidden(), H.state = "hidden", H.endTime = new Date, n(H)
                            }
                        })) : void 0
                    }

                    function v() {
                        (y.timeOut > 0 || y.extendedTimeOut > 0) && (A = setTimeout(s, y.extendedTimeOut), G.maxHideTime = parseFloat(y.extendedTimeOut), G.hideEta = (new Date).getTime() + G.maxHideTime)
                    }

                    function w() {
                        clearTimeout(A), G.hideEta = 0, B.stop(!0, !0)[y.showMethod]({
                            duration: y.showDuration,
                            easing: y.showEasing
                        })
                    }

                    function x() {
                        var a = (G.hideEta - (new Date).getTime()) / G.maxHideTime * 100;
                        E.width(a + "%")
                    }
                    var y = p(),
                        z = b.iconClass || y.iconClass;
                    if ("undefined" != typeof b.optionsOverride && (y = a.extend(y, b.optionsOverride), z = b.optionsOverride.iconClass || z), !o(y, b)) {
                        u++, r = c(y, !0);
                        var A = null,
                            B = a("<div/>"),
                            C = a("<div/>"),
                            D = a("<div/>"),
                            E = a("<div/>"),
                            F = a(y.closeHtml),
                            G = {
                                intervalId: null,
                                hideEta: null,
                                maxHideTime: null
                            },
                            H = {
                                toastId: u,
                                state: "visible",
                                startTime: new Date,
                                options: y,
                                map: b
                            };
                        return e(), g(), f(), n(H), y.debug && console && console.log(H), B
                    }
                }

                function p() {
                    return a.extend({}, m(), w.options)
                }

                function q(a) {
                    r || (r = c()), a.is(":visible") || (a.remove(), a = null, 0 === r.children().length && (r.remove(), t = void 0))
                }
                var r, s, t, u = 0,
                    v = {
                        error: "error",
                        info: "info",
                        success: "success",
                        warning: "warning"
                    },
                    w = {
                        clear: h,
                        remove: i,
                        error: b,
                        getContainer: c,
                        info: d,
                        options: {},
                        subscribe: e,
                        success: f,
                        version: "2.1.2",
                        warning: g
                    };
                return w
            }()
        })
    }("function" == typeof define && define.amd ? define : function(a, b) {
        "undefined" != typeof module && module.exports ? module.exports = b(require("jquery")) : window.toastr = b(window.jQuery)
    }), $(".smooth-scroll").on("click", "a", function(a) {
    a.preventDefault();
    var b = $(this).attr("href");
    $("body,html").animate({
        scrollTop: $(b).offset().top
    }, 700)
}),
    function(a) {
        a.fn.scrollTo = function(b) {
            return a(this).scrollTop(a(this).scrollTop() - a(this).offset().top + a(b).offset().top), this
        }, a.fn.dropdown = function(b) {
            var c = {
                inDuration: 300,
                outDuration: 225,
                constrain_width: !0,
                hover: !1,
                gutter: 0,
                belowOrigin: !1,
                alignment: "left"
            };
            this.each(function() {
                function d() {
                    void 0 !== g.data("induration") && (h.inDuration = g.data("inDuration")), void 0 !== g.data("outduration") && (h.outDuration = g.data("outDuration")), void 0 !== g.data("constrainwidth") && (h.constrain_width = g.data("constrainwidth")), void 0 !== g.data("hover") && (h.hover = g.data("hover")), void 0 !== g.data("gutter") && (h.gutter = g.data("gutter")), void 0 !== g.data("beloworigin") && (h.belowOrigin = g.data("beloworigin")), void 0 !== g.data("alignment") && (h.alignment = g.data("alignment"))
                }

                function e(b) {
                    "focus" === b && (i = !0), d(), j.addClass("active"), g.addClass("active"), h.constrain_width === !0 ? j.css("width", g.outerWidth()) : j.css("white-space", "nowrap");
                    var c = window.innerHeight,
                        e = g.innerHeight(),
                        f = g.offset().left,
                        k = g.offset().top - a(window).scrollTop(),
                        l = h.alignment,
                        m = 0,
                        n = 0,
                        o = 0;
                    h.belowOrigin === !0 && (o = e);
                    var p = 0,
                        q = g.parent();
                    if (!q.is("body") && q[0].scrollHeight > q[0].clientHeight && (p = q[0].scrollTop), f + j.innerWidth() > a(window).width() ? l = "right" : f - j.innerWidth() + g.innerWidth() < 0 && (l = "left"), k + j.innerHeight() > c)
                        if (k + e - j.innerHeight() < 0) {
                            var r = c - k - o;
                            j.css("max-height", r)
                        } else o || (o += e), o -= j.innerHeight();
                    if ("left" === l) m = h.gutter, n = g.position().left + m;
                    else if ("right" === l) {
                        var s = g.position().left + g.outerWidth() - j.outerWidth();
                        m = -h.gutter, n = s + m
                    }
                    j.css({
                        position: "absolute",
                        top: g.position().top + o + p,
                        left: n
                    }), j.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: h.inDuration,
                        easing: "easeOutCubic",
                        complete: function() {
                            a(this).css("height", "")
                        }
                    }).animate({
                        opacity: 1
                    }, {
                        queue: !1,
                        duration: h.inDuration,
                        easing: "easeOutSine"
                    })
                }

                function f() {
                    i = !1, j.fadeOut(h.outDuration), j.removeClass("active"), g.removeClass("active"), setTimeout(function() {
                        j.css("max-height", "")
                    }, h.outDuration)
                }
                var g = a(this),
                    h = a.extend({}, c, b),
                    i = !1,
                    j = a("#" + g.attr("data-activates"));
                if (d(), g.after(j), h.hover) {
                    var k = !1;
                    g.unbind("click." + g.attr("id")), g.on("mouseenter", function(a) {
                        k === !1 && (e(), k = !0)
                    }), g.on("mouseleave", function(b) {
                        var c = b.toElement || b.relatedTarget;
                        a(c).closest(".dropdown-content").is(j) || (j.stop(!0, !0), f(), k = !1)
                    }), j.on("mouseleave", function(b) {
                        var c = b.toElement || b.relatedTarget;
                        a(c).closest(".dropdown-button").is(g) || (j.stop(!0, !0), f(), k = !1)
                    })
                } else g.unbind("click." + g.attr("id")), g.bind("click." + g.attr("id"), function(b) {
                    i || (g[0] != b.currentTarget || g.hasClass("active") || 0 !== a(b.target).closest(".dropdown-content").length ? g.hasClass("active") && (f(), a(document).unbind("click." + j.attr("id") + " touchstart." + j.attr("id"))) : (b.preventDefault(), e("click")), j.hasClass("active") && a(document).bind("click." + j.attr("id") + " touchstart." + j.attr("id"), function(b) {
                        j.is(b.target) || g.is(b.target) || g.find(b.target).length || (f(), a(document).unbind("click." + j.attr("id") + " touchstart." + j.attr("id")))
                    }))
                });
                g.on("open", function(a, b) {
                    e(b)
                }), g.on("close", f)
            })
        }, a(document).ready(function() {
            a(".dropdown-button").dropdown()
        })
    }(jQuery);
var dropdownSelectors = $(".dropdown, .dropup");
dropdownSelectors.on({
    "show.bs.dropdown": function() {
        var a = dropdownEffectData(this);
        dropdownEffectStart(a, a.effectIn)
    },
    "shown.bs.dropdown": function() {
        var a = dropdownEffectData(this);
        a.effectIn && a.effectOut && dropdownEffectEnd(a, function() {})
    },
    "hide.bs.dropdown": function(a) {
        var b = dropdownEffectData(this);
        b.effectOut && (a.preventDefault(), dropdownEffectStart(b, b.effectOut), dropdownEffectEnd(b, function() {
            b.dropdown.removeClass("open")
        }))
    }
}), $(".rotate-btn").on("click", function() {
    var a = $(this).attr("data-card");
    $("#" + a).toggleClass("flipped")
}),
    function(a) {
        function b(b) {
            if ($this = b, $this.hasClass("active") === !1) {
                $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                    scaleY: ".4",
                    scaleX: ".4",
                    translateY: "40px"
                }, {
                    duration: 0
                });
                var c = 0;
                $this.find("ul .btn-floating").reverse().each(function() {
                    a(this).velocity({
                        opacity: "1",
                        scaleX: "1",
                        scaleY: "1",
                        translateY: "0"
                    }, {
                        duration: 80,
                        delay: c
                    }), c += 40
                })
            } else {
                $this.removeClass("active");
                var c = 0;
                $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
                    opacity: "0",
                    scaleX: ".4",
                    scaleY: ".4",
                    translateY: "40px"
                }, {
                    duration: 80
                })
            }
        }
        a(document).ready(function() {
            a.fn.reverse = [].reverse, a(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(b) {
                var d = a(this);
                c(d)
            }), a(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(b) {
                var c = a(this);
                d(c)
            }), a(document).on("click.fixedActionBtn", ".fixed-action-btn.click-to-toggle > a", function(b) {
                var e = a(this),
                    f = e.parent();
                f.hasClass("active") ? d(f) : c(f)
            })
        }), a.fn.extend({
            openFAB: function() {
                c(a(this))
            },
            closeFAB: function() {
                d(a(this))
            }
        });
        var c = function(b) {
                if ($this = b, $this.hasClass("active") === !1) {
                    var c, d, e = $this.hasClass("horizontal");
                    e === !0 ? d = 40 : c = 40, $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                        scaleY: ".4",
                        scaleX: ".4",
                        translateY: c + "px",
                        translateX: d + "px"
                    }, {
                        duration: 0
                    });
                    var f = 0;
                    $this.find("ul .btn-floating").reverse().each(function() {
                        a(this).velocity({
                            opacity: "1",
                            scaleX: "1",
                            scaleY: "1",
                            translateY: "0",
                            translateX: "0"
                        }, {
                            duration: 80,
                            delay: f
                        }), f += 40
                    })
                }
            },
            d = function(a) {
                $this = a;
                var b, c, d = $this.hasClass("horizontal");
                d === !0 ? c = 40 : b = 40, $this.removeClass("active"), $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
                    opacity: "0",
                    scaleX: ".4",
                    scaleY: ".4",
                    translateY: b + "px",
                    translateX: c + "px"
                }, {
                    duration: 80
                })
            };
        a(".fixed-action-btn").on({
            click: function(c) {
                return c.preventDefault(), b(a(".fixed-action-btn")), !1
            }
        })
    }(jQuery),
    function(a, b, c, d) {
        "use strict";

        function e(a, b, c) {
            return setTimeout(j(a, c), b)
        }

        function f(a, b, c) {
            return !!Array.isArray(a) && (g(a, c[b], c), !0)
        }

        function g(a, b, c) {
            var e;
            if (a)
                if (a.forEach) a.forEach(b, c);
                else if (a.length !== d)
                    for (e = 0; e < a.length;) b.call(c, a[e], e, a), e++;
                else
                    for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a)
        }

        function h(b, c, d) {
            var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
            return function() {
                var c = new Error("get-stack-trace"),
                    d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    f = a.console && (a.console.warn || a.console.log);
                return f && f.call(a.console, e, d), b.apply(this, arguments)
            }
        }

        function i(a, b, c) {
            var d, e = b.prototype;
            d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c)
        }

        function j(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        }

        function k(a, b) {
            return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a
        }

        function l(a, b) {
            return a === d ? b : a
        }

        function m(a, b, c) {
            g(q(b), function(b) {
                a.addEventListener(b, c, !1)
            })
        }

        function n(a, b, c) {
            g(q(b), function(b) {
                a.removeEventListener(b, c, !1)
            })
        }

        function o(a, b) {
            for (; a;) {
                if (a == b) return !0;
                a = a.parentNode
            }
            return !1
        }

        function p(a, b) {
            return a.indexOf(b) > -1
        }

        function q(a) {
            return a.trim().split(/\s+/g)
        }

        function r(a, b, c) {
            if (a.indexOf && !c) return a.indexOf(b);
            for (var d = 0; d < a.length;) {
                if (c && a[d][c] == b || !c && a[d] === b) return d;
                d++
            }
            return -1
        }

        function s(a) {
            return Array.prototype.slice.call(a, 0)
        }

        function t(a, b, c) {
            for (var d = [], e = [], f = 0; f < a.length;) {
                var g = b ? a[f][b] : a[f];
                r(e, g) < 0 && d.push(a[f]), e[f] = g, f++
            }
            return c && (d = b ? d.sort(function(a, c) {
                return a[b] > c[b]
            }) : d.sort()), d
        }

        function u(a, b) {
            for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
                if (c = ma[g], e = c ? c + f : b, e in a) return e;
                g++
            }
            return d
        }

        function v() {
            return ua++
        }

        function w(b) {
            var c = b.ownerDocument || b;
            return c.defaultView || c.parentWindow || a
        }

        function x(a, b) {
            var c = this;
            this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function(b) {
                k(a.options.enable, [a]) && c.handler(b)
            }, this.init()
        }

        function y(a) {
            var b, c = a.options.inputClass;
            return new(b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z)
        }

        function z(a, b, c) {
            var d = c.pointers.length,
                e = c.changedPointers.length,
                f = b & Ea && d - e === 0,
                g = b & (Ga | Ha) && d - e === 0;
            c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c
        }

        function A(a, b) {
            var c = a.session,
                d = b.pointers,
                e = d.length;
            c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);
            var f = c.firstInput,
                g = c.firstMultiple,
                h = g ? g.center : f.center,
                i = b.center = E(d);
            b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);
            var j = F(b.deltaTime, b.deltaX, b.deltaY);
            b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);
            var k = a.element;
            o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k
        }

        function B(a, b) {
            var c = b.center,
                d = a.offsetDelta || {},
                e = a.prevDelta || {},
                f = a.prevInput || {};
            (b.eventType === Ea || f.eventType === Ga) && (e = a.prevDelta = {
                x: f.deltaX || 0,
                y: f.deltaY || 0
            }, d = a.offsetDelta = {
                x: c.x,
                y: c.y
            }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
        }

        function C(a, b) {
            var c, e, f, g, h = a.lastInterval || b,
                i = b.timeStamp - h.timeStamp;
            if (b.eventType != Ha && (i > Da || h.velocity === d)) {
                var j = b.deltaX - h.deltaX,
                    k = b.deltaY - h.deltaY,
                    l = F(i, j, k);
                e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b
            } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
            b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
        }

        function D(a) {
            for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
                clientX: pa(a.pointers[c].clientX),
                clientY: pa(a.pointers[c].clientY)
            }, c++;
            return {
                timeStamp: ra(),
                pointers: b,
                center: E(b),
                deltaX: a.deltaX,
                deltaY: a.deltaY
            }
        }

        function E(a) {
            var b = a.length;
            if (1 === b) return {
                x: pa(a[0].clientX),
                y: pa(a[0].clientY)
            };
            for (var c = 0, d = 0, e = 0; b > e;) c += a[e].clientX, d += a[e].clientY, e++;
            return {
                x: pa(c / b),
                y: pa(d / b)
            }
        }

        function F(a, b, c) {
            return {
                x: b / a || 0,
                y: c / a || 0
            }
        }

        function G(a, b) {
            return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma
        }

        function H(a, b, c) {
            c || (c = Qa);
            var d = b[c[0]] - a[c[0]],
                e = b[c[1]] - a[c[1]];
            return Math.sqrt(d * d + e * e)
        }

        function I(a, b, c) {
            c || (c = Qa);
            var d = b[c[0]] - a[c[0]],
                e = b[c[1]] - a[c[1]];
            return 180 * Math.atan2(e, d) / Math.PI
        }

        function J(a, b) {
            return I(b[1], b[0], Ra) + I(a[1], a[0], Ra)
        }

        function K(a, b) {
            return H(b[0], b[1], Ra) / H(a[0], a[1], Ra)
        }

        function L() {
            this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments)
        }

        function M() {
            this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function N() {
            this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments)
        }

        function O(a, b) {
            var c = s(a.touches),
                d = s(a.changedTouches);
            return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d]
        }

        function P() {
            this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments)
        }

        function Q(a, b) {
            var c = s(a.touches),
                d = this.targetIds;
            if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
            var e, f, g = s(a.changedTouches),
                h = [],
                i = this.target;
            if (f = c.filter(function(a) {
                    return o(a.target, i)
                }), b === Ea)
                for (e = 0; e < f.length;) d[f[e].identifier] = !0, e++;
            for (e = 0; e < g.length;) d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;
            return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0
        }

        function R() {
            x.apply(this, arguments);
            var a = j(this.handler, this);
            this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = []
        }

        function S(a, b) {
            a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b)
        }

        function T(a) {
            var b = a.changedPointers[0];
            if (b.identifier === this.primaryTouch) {
                var c = {
                    x: b.clientX,
                    y: b.clientY
                };
                this.lastTouches.push(c);
                var d = this.lastTouches,
                    e = function() {
                        var a = d.indexOf(c);
                        a > -1 && d.splice(a, 1)
                    };
                setTimeout(e, cb)
            }
        }

        function U(a) {
            for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
                var e = this.lastTouches[d],
                    f = Math.abs(b - e.x),
                    g = Math.abs(c - e.y);
                if (db >= f && db >= g) return !0
            }
            return !1
        }

        function V(a, b) {
            this.manager = a, this.set(b)
        }

        function W(a) {
            if (p(a, jb)) return jb;
            var b = p(a, kb),
                c = p(a, lb);
            return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb
        }

        function X() {
            if (!fb) return !1;
            var b = {},
                c = a.CSS && a.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(d) {
                b[d] = !c || a.CSS.supports("touch-action", d)
            }), b
        }

        function Y(a) {
            this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = []
        }

        function Z(a) {
            return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : ""
        }

        function $(a) {
            return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : ""
        }

        function _(a, b) {
            var c = b.manager;
            return c ? c.get(a) : a
        }

        function aa() {
            Y.apply(this, arguments)
        }

        function ba() {
            aa.apply(this, arguments), this.pX = null, this.pY = null
        }

        function ca() {
            aa.apply(this, arguments)
        }

        function da() {
            Y.apply(this, arguments), this._timer = null, this._input = null
        }

        function ea() {
            aa.apply(this, arguments)
        }

        function fa() {
            aa.apply(this, arguments)
        }

        function ga() {
            Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function ha(a, b) {
            return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b)
        }

        function ia(a, b) {
            this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function(a) {
                var b = this.add(new a[0](a[1]));
                a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
            }, this)
        }

        function ja(a, b) {
            var c = a.element;
            if (c.style) {
                var d;
                g(a.options.cssProps, function(e, f) {
                    d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || ""
                }), b || (a.oldCssProps = {})
            }
        }

        function ka(a, c) {
            var d = b.createEvent("Event");
            d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
        }
        var la, ma = ["", "webkit", "Moz", "MS", "ms", "o"],
            na = b.createElement("div"),
            oa = "function",
            pa = Math.round,
            qa = Math.abs,
            ra = Date.now;
        la = "function" != typeof Object.assign ? function(a) {
            if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");
            for (var b = Object(a), c = 1; c < arguments.length; c++) {
                var e = arguments[c];
                if (e !== d && null !== e)
                    for (var f in e) e.hasOwnProperty(f) && (b[f] = e[f])
            }
            return b
        } : Object.assign;
        var sa = h(function(a, b, c) {
                for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
                return a
            }, "extend", "Use `assign`."),
            ta = h(function(a, b) {
                return sa(a, b, !0)
            }, "merge", "Use `assign`."),
            ua = 1,
            va = /mobile|tablet|ip(ad|hone|od)|android/i,
            wa = "ontouchstart" in a,
            xa = u(a, "PointerEvent") !== d,
            ya = wa && va.test(navigator.userAgent),
            za = "touch",
            Aa = "pen",
            Ba = "mouse",
            Ca = "kinect",
            Da = 25,
            Ea = 1,
            Fa = 2,
            Ga = 4,
            Ha = 8,
            Ia = 1,
            Ja = 2,
            Ka = 4,
            La = 8,
            Ma = 16,
            Na = Ja | Ka,
            Oa = La | Ma,
            Pa = Na | Oa,
            Qa = ["x", "y"],
            Ra = ["clientX", "clientY"];
        x.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler),
                this.evWin && n(w(this.element), this.evWin, this.domHandler)
            }
        };
        var Sa = {
                mousedown: Ea,
                mousemove: Fa,
                mouseup: Ga
            },
            Ta = "mousedown",
            Ua = "mousemove mouseup";
        i(L, x, {
            handler: function(a) {
                var b = Sa[a.type];
                b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, {
                    pointers: [a],
                    changedPointers: [a],
                    pointerType: Ba,
                    srcEvent: a
                }))
            }
        });
        var Va = {
                pointerdown: Ea,
                pointermove: Fa,
                pointerup: Ga,
                pointercancel: Ha,
                pointerout: Ha
            },
            Wa = {
                2: za,
                3: Aa,
                4: Ba,
                5: Ca
            },
            Xa = "pointerdown",
            Ya = "pointermove pointerup pointercancel";
        a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, {
            handler: function(a) {
                var b = this.store,
                    c = !1,
                    d = a.type.toLowerCase().replace("ms", ""),
                    e = Va[d],
                    f = Wa[a.pointerType] || a.pointerType,
                    g = f == za,
                    h = r(b, a.pointerId, "pointerId");
                e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
                    pointers: b,
                    changedPointers: [a],
                    pointerType: f,
                    srcEvent: a
                }), c && b.splice(h, 1))
            }
        });
        var Za = {
                touchstart: Ea,
                touchmove: Fa,
                touchend: Ga,
                touchcancel: Ha
            },
            $a = "touchstart",
            _a = "touchstart touchmove touchend touchcancel";
        i(N, x, {
            handler: function(a) {
                var b = Za[a.type];
                if (b === Ea && (this.started = !0), this.started) {
                    var c = O.call(this, a, b);
                    b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
                        pointers: c[0],
                        changedPointers: c[1],
                        pointerType: za,
                        srcEvent: a
                    })
                }
            }
        });
        var ab = {
                touchstart: Ea,
                touchmove: Fa,
                touchend: Ga,
                touchcancel: Ha
            },
            bb = "touchstart touchmove touchend touchcancel";
        i(P, x, {
            handler: function(a) {
                var b = ab[a.type],
                    c = Q.call(this, a, b);
                c && this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: za,
                    srcEvent: a
                })
            }
        });
        var cb = 2500,
            db = 25;
        i(R, x, {
            handler: function(a, b, c) {
                var d = c.pointerType == za,
                    e = c.pointerType == Ba;
                if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
                    if (d) S.call(this, b, c);
                    else if (e && U.call(this, c)) return;
                    this.callback(a, b, c)
                }
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var eb = u(na.style, "touchAction"),
            fb = eb !== d,
            gb = "compute",
            hb = "auto",
            ib = "manipulation",
            jb = "none",
            kb = "pan-x",
            lb = "pan-y",
            mb = X();
        V.prototype = {
            set: function(a) {
                a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var a = [];
                return g(this.manager.recognizers, function(b) {
                    k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
                }), W(a.join(" "))
            },
            preventDefaults: function(a) {
                var b = a.srcEvent,
                    c = a.offsetDirection;
                if (this.manager.session.prevented) return void b.preventDefault();
                var d = this.actions,
                    e = p(d, jb) && !mb[jb],
                    f = p(d, lb) && !mb[lb],
                    g = p(d, kb) && !mb[kb];
                if (e) {
                    var h = 1 === a.pointers.length,
                        i = a.distance < 2,
                        j = a.deltaTime < 250;
                    if (h && i && j) return
                }
                return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0
            },
            preventSrc: function(a) {
                this.manager.session.prevented = !0, a.preventDefault()
            }
        };
        var nb = 1,
            ob = 2,
            pb = 4,
            qb = 8,
            rb = qb,
            sb = 16,
            tb = 32;
        Y.prototype = {
            defaults: {},
            set: function(a) {
                return la(this.options, a), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(a) {
                if (f(a, "recognizeWith", this)) return this;
                var b = this.simultaneous;
                return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
            },
            dropRecognizeWith: function(a) {
                return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this)
            },
            requireFailure: function(a) {
                if (f(a, "requireFailure", this)) return this;
                var b = this.requireFail;
                return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this
            },
            dropRequireFailure: function(a) {
                if (f(a, "dropRequireFailure", this)) return this;
                a = _(a, this);
                var b = r(this.requireFail, a);
                return b > -1 && this.requireFail.splice(b, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(a) {
                return !!this.simultaneous[a.id]
            },
            emit: function(a) {
                function b(b) {
                    c.manager.emit(b, a)
                }
                var c = this,
                    d = this.state;
                qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d))
            },
            tryEmit: function(a) {
                return this.canEmit() ? this.emit(a) : void(this.state = tb)
            },
            canEmit: function() {
                for (var a = 0; a < this.requireFail.length;) {
                    if (!(this.requireFail[a].state & (tb | nb))) return !1;
                    a++
                }
                return !0
            },
            recognize: function(a) {
                var b = la({}, a);
                return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void(this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void(this.state = tb))
            },
            process: function(a) {},
            getTouchAction: function() {},
            reset: function() {}
        }, i(aa, Y, {
            defaults: {
                pointers: 1
            },
            attrTest: function(a) {
                var b = this.options.pointers;
                return 0 === b || a.pointers.length === b
            },
            process: function(a) {
                var b = this.state,
                    c = a.eventType,
                    d = b & (ob | pb),
                    e = this.attrTest(a);
                return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb
            }
        }), i(ba, aa, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Pa
            },
            getTouchAction: function() {
                var a = this.options.direction,
                    b = [];
                return a & Na && b.push(lb), a & Oa && b.push(kb), b
            },
            directionTest: function(a) {
                var b = this.options,
                    c = !0,
                    d = a.distance,
                    e = a.direction,
                    f = a.deltaX,
                    g = a.deltaY;
                return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
            },
            attrTest: function(a) {
                return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a))
            },
            emit: function(a) {
                this.pX = a.deltaX, this.pY = a.deltaY;
                var b = $(a.direction);
                b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a)
            }
        }), i(ca, aa, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [jb]
            },
            attrTest: function(a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob)
            },
            emit: function(a) {
                if (1 !== a.scale) {
                    var b = a.scale < 1 ? "in" : "out";
                    a.additionalEvent = this.options.event + b
                }
                this._super.emit.call(this, a)
            }
        }), i(da, Y, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function() {
                return [hb]
            },
            process: function(a) {
                var b = this.options,
                    c = a.pointers.length === b.pointers,
                    d = a.distance < b.threshold,
                    f = a.deltaTime > b.time;
                if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f) this.reset();
                else if (a.eventType & Ea) this.reset(), this._timer = e(function() {
                    this.state = rb, this.tryEmit()
                }, b.time, this);
                else if (a.eventType & Ga) return rb;
                return tb
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(a) {
                this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)))
            }
        }), i(ea, aa, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [jb]
            },
            attrTest: function(a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob)
            }
        }), i(fa, aa, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: Na | Oa,
                pointers: 1
            },
            getTouchAction: function() {
                return ba.prototype.getTouchAction.call(this)
            },
            attrTest: function(a) {
                var b, c = this.options.direction;
                return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga
            },
            emit: function(a) {
                var b = $(a.offsetDirection);
                b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
            }
        }), i(ga, Y, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [ib]
            },
            process: function(a) {
                var b = this.options,
                    c = a.pointers.length === b.pointers,
                    d = a.distance < b.threshold,
                    f = a.deltaTime < b.time;
                if (this.reset(), a.eventType & Ea && 0 === this.count) return this.failTimeout();
                if (d && f && c) {
                    if (a.eventType != Ga) return this.failTimeout();
                    var g = !this.pTime || a.timeStamp - this.pTime < b.interval,
                        h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
                    this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
                    var i = this.count % b.taps;
                    if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function() {
                        this.state = rb, this.tryEmit()
                    }, b.interval, this), ob) : rb
                }
                return tb
            },
            failTimeout: function() {
                return this._timer = e(function() {
                    this.state = tb
                }, this.options.interval, this), tb
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), ha.VERSION = "2.0.7", ha.defaults = {
            domEvents: !1,
            touchAction: gb,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [ea, {
                    enable: !1
                }],
                [ca, {
                    enable: !1
                },
                    ["rotate"]
                ],
                [fa, {
                    direction: Na
                }],
                [ba, {
                    direction: Na
                },
                    ["swipe"]
                ],
                [ga],
                [ga, {
                    event: "doubletap",
                    taps: 2
                },
                    ["tap"]
                ],
                [da]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        var ub = 1,
            vb = 2;
        ia.prototype = {
            set: function(a) {
                return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this
            },
            stop: function(a) {
                this.session.stopped = a ? vb : ub
            },
            recognize: function(a) {
                var b = this.session;
                if (!b.stopped) {
                    this.touchAction.preventDefaults(a);
                    var c, d = this.recognizers,
                        e = b.curRecognizer;
                    (!e || e && e.state & rb) && (e = b.curRecognizer = null);
                    for (var f = 0; f < d.length;) c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++
                }
            },
            get: function(a) {
                if (a instanceof Y) return a;
                for (var b = this.recognizers, c = 0; c < b.length; c++)
                    if (b[c].options.event == a) return b[c];
                return null
            },
            add: function(a) {
                if (f(a, "add", this)) return this;
                var b = this.get(a.options.event);
                return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
            },
            remove: function(a) {
                if (f(a, "remove", this)) return this;
                if (a = this.get(a)) {
                    var b = this.recognizers,
                        c = r(b, a); - 1 !== c && (b.splice(c, 1), this.touchAction.update())
                }
                return this
            },
            on: function(a, b) {
                if (a !== d && b !== d) {
                    var c = this.handlers;
                    return g(q(a), function(a) {
                        c[a] = c[a] || [], c[a].push(b)
                    }), this
                }
            },
            off: function(a, b) {
                if (a !== d) {
                    var c = this.handlers;
                    return g(q(a), function(a) {
                        b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a]
                    }), this
                }
            },
            emit: function(a, b) {
                this.options.domEvents && ka(a, b);
                var c = this.handlers[a] && this.handlers[a].slice();
                if (c && c.length) {
                    b.type = a, b.preventDefault = function() {
                        b.srcEvent.preventDefault()
                    };
                    for (var d = 0; d < c.length;) c[d](b), d++
                }
            },
            destroy: function() {
                this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, la(ha, {
            INPUT_START: Ea,
            INPUT_MOVE: Fa,
            INPUT_END: Ga,
            INPUT_CANCEL: Ha,
            STATE_POSSIBLE: nb,
            STATE_BEGAN: ob,
            STATE_CHANGED: pb,
            STATE_ENDED: qb,
            STATE_RECOGNIZED: rb,
            STATE_CANCELLED: sb,
            STATE_FAILED: tb,
            DIRECTION_NONE: Ia,
            DIRECTION_LEFT: Ja,
            DIRECTION_RIGHT: Ka,
            DIRECTION_UP: La,
            DIRECTION_DOWN: Ma,
            DIRECTION_HORIZONTAL: Na,
            DIRECTION_VERTICAL: Oa,
            DIRECTION_ALL: Pa,
            Manager: ia,
            Input: x,
            TouchAction: V,
            TouchInput: P,
            MouseInput: L,
            PointerEventInput: M,
            TouchMouseInput: R,
            SingleTouchInput: N,
            Recognizer: Y,
            AttrRecognizer: aa,
            Tap: ga,
            Pan: ba,
            Swipe: fa,
            Pinch: ca,
            Rotate: ea,
            Press: da,
            on: m,
            off: n,
            each: g,
            merge: ta,
            extend: sa,
            assign: la,
            inherit: i,
            bindFn: j,
            prefixed: u
        });
        var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
        wb.Hammer = ha, "function" == typeof define && define.amd ? define(function() {
            return ha
        }) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha
    }(window, document, "Hammer"),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], a) : "object" == typeof exports ? a(require("jquery"), require("hammerjs")) : a(jQuery, Hammer)
    }(function(a, b) {
        function c(c, d) {
            var e = a(c);
            e.data("hammer") || e.data("hammer", new b(e[0], d))
        }
        a.fn.hammer = function(a) {
            return this.each(function() {
                c(this, a)
            })
        }, b.Manager.prototype.emit = function(b) {
            return function(c, d) {
                b.call(this, c, d), a(this.element).trigger({
                    type: c,
                    gesture: d
                })
            }
        }(b.Manager.prototype.emit)
    }),
    function(a) {
        var b = {
            init: function(b) {
                var c = {
                    menuWidth: 240,
                    edge: "left",
                    closeOnClick: !1
                };
                b = a.extend(c, b), a(this).each(function() {
                    function c(c) {
                        g = !1, h = !1, a("body").css({
                            overflow: "",
                            width: ""
                        }), a("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                a(this).remove()
                            }
                        }), "left" === b.edge ? (f.css({
                            width: "",
                            right: "",
                            left: "0"
                        }), e.velocity({
                            translateX: "-100%"
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                c === !0 && (e.removeAttr("style"), e.css("width", b.menuWidth))
                            }
                        })) : (f.css({
                            width: "",
                            right: "0",
                            left: ""
                        }), e.velocity({
                            translateX: "100%"
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                c === !0 && (e.removeAttr("style"), e.css("width", b.menuWidth))
                            }
                        }))
                    }
                    var d = a(this),
                        e = a("#" + d.attr("data-activates"));
                    240 != b.menuWidth && e.css("width", b.menuWidth);
                    var f = a('<div class="drag-target"></div>');
                    a("body").append(f), "left" == b.edge ? (e.css("transform", "translateX(-100%)"), f.css({
                        left: 0
                    })) : (e.addClass("right-aligned").css("transform", "translateX(100%)"), f.css({
                        right: 0
                    })), e.hasClass("fixed") && window.innerWidth > 1440 && e.css("transform", "translateX(0)"), e.hasClass("fixed") && a(window).resize(function() {
                        window.innerWidth > 1440 ? 0 != a("#sidenav-overlay").length && h ? c(!0) : e.css("transform", "translateX(0%)") : h === !1 && ("left" === b.edge ? e.css("transform", "translateX(-100%)") : e.css("transform", "translateX(100%)"))
                    }), b.closeOnClick === !0 && e.on("click.itemclick", "a:not(.collapsible-header)", function() {
                        c()
                    });
                    var g = !1,
                        h = !1;
                    f.on("click", function() {
                        c()
                    }), f.hammer({
                        prevent_default: !1
                    }).bind("pan", function(d) {
                        if ("touch" == d.gesture.pointerType) {
                            var f = (d.gesture.direction, d.gesture.center.x),
                                g = (d.gesture.center.y, d.gesture.velocityX, a("body")),
                                i = g.innerWidth();
                            if (g.css("overflow", "hidden"), g.width(i), 0 === a("#sidenav-overlay").length) {
                                var j = a('<div id="sidenav-overlay"></div>');
                                j.css("opacity", 0).click(function() {
                                    c()
                                }), a("body").append(j)
                            }
                            if ("left" === b.edge && (f > b.menuWidth ? f = b.menuWidth : 0 > f && (f = 0)), "left" === b.edge) f < b.menuWidth / 2 ? h = !1 : f >= b.menuWidth / 2 && (h = !0), e.css("transform", "translateX(" + (f - b.menuWidth) + "px)");
                            else {
                                f < window.innerWidth - b.menuWidth / 2 ? h = !0 : f >= window.innerWidth - b.menuWidth / 2 && (h = !1);
                                var k = f - b.menuWidth / 2;
                                0 > k && (k = 0), e.css("transform", "translateX(" + k + "px)")
                            }
                            var l;
                            "left" === b.edge ? (l = f / b.menuWidth, a("#sidenav-overlay").velocity({
                                opacity: l
                            }, {
                                duration: 10,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (l = Math.abs((f - window.innerWidth) / b.menuWidth), a("#sidenav-overlay").velocity({
                                opacity: l
                            }, {
                                duration: 10,
                                queue: !1,
                                easing: "easeOutQuad"
                            }))
                        }
                    }).bind("panend", function(c) {
                        if ("touch" == c.gesture.pointerType) {
                            var d = c.gesture.velocityX,
                                i = c.gesture.center.x,
                                j = i - b.menuWidth,
                                k = i - b.menuWidth / 2;
                            j > 0 && (j = 0), 0 > k && (k = 0), g = !1, "left" === b.edge ? h && .3 >= d || -.5 > d ? (0 != j && e.velocity({
                                translateX: [0, j]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), f.css({
                                width: "50%",
                                right: 0,
                                left: ""
                            })) : (!h || d > .3) && (a("body").css({
                                overflow: "",
                                width: ""
                            }), e.velocity({
                                translateX: [-1 * b.menuWidth - 10, j]
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    a(this).remove()
                                }
                            }), f.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : h && d >= -.3 || d > .5 ? (e.velocity({
                                translateX: [0, k]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), f.css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!h || -.3 > d) && (a("body").css({
                                overflow: "",
                                width: ""
                            }), e.velocity({
                                translateX: [b.menuWidth + 10, k]
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    a(this).remove()
                                }
                            }), f.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }), d.click(function() {
                        if (h === !0) h = !1, g = !1, c();
                        else {
                            var d = a("body"),
                                i = d.innerWidth();
                            d.css("overflow", "hidden"), d.width(i), a("body").append(f), "left" === b.edge ? (f.css({
                                width: "50%",
                                right: 0,
                                left: ""
                            }), e.velocity({
                                translateX: [0, -1 * b.menuWidth]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (f.css({
                                width: "50%",
                                right: "",
                                left: 0
                            }), e.velocity({
                                translateX: [0, b.menuWidth]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }));
                            var j = a('<div id="sidenav-overlay"></div>');
                            j.css("opacity", 0).click(function() {
                                h = !1, g = !1, c(), j.velocity({
                                    opacity: 0
                                }, {
                                    duration: 300,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        a(this).remove()
                                    }
                                })
                            }), a("body").append(j), j.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    h = !0, g = !1
                                }
                            })
                        }
                        return !1
                    })
                })
            },
            show: function() {
                this.trigger("click")
            },
            hide: function() {
                a("#sidenav-overlay").trigger("click")
            }
        };
        a.fn.sideNav = function(c) {
            return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.sideNav") : b.init.apply(this, arguments)
        }
    }(jQuery),
    function(a) {
        a.fn.collapsible = function(b) {
            var c = {
                accordion: void 0
            };
            return b = a.extend(c, b), this.each(function() {
                function c(b) {
                    h = g.find("> li > .collapsible-header"), b.hasClass("active") ? b.parent().addClass("active") : b.parent().removeClass("active"), b.parent().hasClass("active") ? b.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            a(this).css("height", "")
                        }
                    }) : b.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            a(this).css("height", "")
                        }
                    }), h.not(b).removeClass("active").parent().removeClass("active"), h.not(b).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            a(this).css("height", "")
                        }
                    })
                }

                function d(b) {
                    b.hasClass("active") ? b.parent().addClass("active") : b.parent().removeClass("active"), b.parent().hasClass("active") ? b.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            a(this).css("height", "")
                        }
                    }) : b.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            a(this).css("height", "")
                        }
                    })
                }

                function e(a) {
                    var b = f(a);
                    return b.length > 0
                }

                function f(a) {
                    return a.closest("li > .collapsible-header")
                }
                var g = a(this),
                    h = a(this).find("> li > .collapsible-header"),
                    i = g.data("collapsible");
                g.off("click.collapse", ".collapsible-header"), h.off("click.collapse"), b.accordion || "accordion" === i || void 0 === i ? (h = g.find("> li > .collapsible-header"), h.on("click.collapse", function(b) {
                    var d = a(b.target);
                    e(d) && (d = f(d)), d.toggleClass("active"), c(d)
                }), c(h.filter(".active").first())) : h.each(function() {
                    a(this).on("click.collapse", function(b) {
                        var c = a(b.target);
                        e(c) && (c = f(c)), c.toggleClass("active"), d(c)
                    }), a(this).hasClass("active") && d(a(this))
                })
            })
        }, a(document).ready(function() {
            a(".collapsible").collapsible()
        })
    }(jQuery),
    function(a, b) {
        "function" == typeof define && define.amd ? define(["jquery"], function(a) {
            return b(a)
        }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
    }(this, function(a) {
        var b = function(a, b) {
                var c, d = document.createElement("canvas");
                a.appendChild(d), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d);
                var e = d.getContext("2d");
                d.width = d.height = b.size;
                var f = 1;
                window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [b.size, "px"].join(""), d.width = d.height = b.size * f, e.scale(f, f)), e.translate(b.size / 2, b.size / 2), e.rotate((-.5 + b.rotate / 180) * Math.PI);
                var g = (b.size - b.lineWidth) / 2;
                b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2), Date.now = Date.now || function() {
                        return +new Date
                    };
                var h = function(a, b, c) {
                        c = Math.min(Math.max(-1, c || 0), 1);
                        var d = 0 >= c;
                        e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke()
                    },
                    i = function() {
                        var a, c;
                        e.lineWidth = 1, e.fillStyle = b.scaleColor, e.save();
                        for (var d = 24; d > 0; --d) d % 6 === 0 ? (c = b.scaleLength, a = 0) : (c = .6 * b.scaleLength, a = b.scaleLength - c), e.fillRect(-b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
                        e.restore()
                    },
                    j = function() {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) {
                                window.setTimeout(a, 1e3 / 60)
                            }
                    }(),
                    k = function() {
                        b.scaleColor && i(), b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1)
                    };
                this.getCanvas = function() {
                    return d
                }, this.getCtx = function() {
                    return e
                }, this.clear = function() {
                    e.clearRect(b.size / -2, b.size / -2, b.size, b.size)
                }, this.draw = function(a) {
                    b.scaleColor || b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, b.size * f, b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = b.lineCap;
                    var d;
                    d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor, h(d, b.lineWidth, a / 100)
                }.bind(this), this.animate = function(a, c) {
                    var d = Date.now();
                    b.onStart(a, c);
                    var e = function() {
                        var f = Math.min(Date.now() - d, b.animate.duration),
                            g = b.easing(this, f, a, c - a, b.animate.duration);
                        this.draw(g), b.onStep(a, c, g), f >= b.animate.duration ? b.onStop(a, c) : j(e)
                    }.bind(this);
                    j(e)
                }.bind(this)
            },
            c = function(a, c) {
                var d = {
                    barColor: "#ef1e25",
                    trackColor: "#f9f9f9",
                    scaleColor: "#dfe0e0",
                    scaleLength: 5,
                    lineCap: "round",
                    lineWidth: 3,
                    trackWidth: void 0,
                    size: 110,
                    rotate: 0,
                    animate: {
                        duration: 1e3,
                        enabled: !0
                    },
                    easing: function(a, b, c, d, e) {
                        return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
                    },
                    onStart: function(a, b) {},
                    onStep: function(a, b, c) {},
                    onStop: function(a, b) {}
                };
                if ("undefined" != typeof b) d.renderer = b;
                else {
                    if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                    d.renderer = SVGRenderer
                }
                var e = {},
                    f = 0,
                    g = function() {
                        this.el = a, this.options = e;
                        for (var b in d) d.hasOwnProperty(b) && (e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
                        "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? e.easing = jQuery.easing[e.easing] : e.easing = d.easing, "number" == typeof e.animate && (e.animate = {
                            duration: e.animate,
                            enabled: !0
                        }), "boolean" != typeof e.animate || e.animate || (e.animate = {
                            duration: 1e3,
                            enabled: e.animate
                        }), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")))
                    }.bind(this);
                this.update = function(a) {
                    return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this
                }.bind(this), this.disableAnimation = function() {
                    return e.animate.enabled = !1, this
                }, this.enableAnimation = function() {
                    return e.animate.enabled = !0, this
                }, g()
            };
        a.fn.easyPieChart = function(b) {
            return this.each(function() {
                var d;
                a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)))
            })
        }
    }), $(function() {
    var a = !0;
    $("#accordion").on("show.bs.collapse", function() {
        a && $("#accordion .in").collapse("hide")
    })
}),
    function(a) {
        a(document).ready(function() {
            function b(b) {
                var c = b.css("font-family"),
                    e = b.css("font-size");
                e && d.css("font-size", e), c && d.css("font-family", c), "off" === b.attr("wrap") && d.css("overflow-wrap", "normal").css("white-space", "pre"), d.text(b.val() + "\n");
                var f = d.html().replace(/\n/g, "<br>");
                d.html(f), b.is(":visible") ? d.css("width", b.width()) : d.css("width", a(window).width() / 2), b.css("height", d.height())
            }
            Materialize.updateTextFields = function() {
                var b = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
                a(b).each(function(b, c) {
                    a(c).val().length > 0 || c.autofocus || void 0 !== a(this).attr("placeholder") || a(c)[0].validity.badInput === !0 ? a(this).siblings("label, i").addClass("active") : a(this).siblings("label, i").removeClass("active")
                })
            };
            var c = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            a(document).on("change", c, function() {
                (0 !== a(this).val().length || void 0 !== a(this).attr("placeholder")) && a(this).siblings("label").addClass("active"), validate_field(a(this))
            }), a(document).ready(function() {
                Materialize.updateTextFields()
            }), a(document).on("reset", function(b) {
                var d = a(b.target);
                d.is("form") && (d.find(c).removeClass("valid").removeClass("invalid"), d.find(c).each(function() {
                    "" === a(this).attr("value") && a(this).siblings("label, i").removeClass("active")
                }), d.find("select.initialized").each(function() {
                    var a = d.find("option[selected]").text();
                    d.siblings("input.select-dropdown").val(a)
                }))
            }), a(document).on("focus", c, function() {
                a(this).siblings("label, i").addClass("active")
            }), a(document).on("blur", c, function() {
                var b = a(this);
                0 === b.val().length && b[0].validity.badInput !== !0 && void 0 === b.attr("placeholder") && b.siblings("label, i").removeClass("active"), 0 === b.val().length && b[0].validity.badInput !== !0 && void 0 !== b.attr("placeholder") && b.siblings("i").removeClass("active"), validate_field(b)
            }), window.validate_field = function(a) {
                var b = void 0 !== a.attr("length"),
                    c = parseInt(a.attr("length")),
                    d = a.val().length;
                0 === a.val().length && a[0].validity.badInput === !1 ? a.hasClass("validate") && (a.removeClass("valid"), a.removeClass("invalid")) : a.hasClass("validate") && (a.is(":valid") && b && c >= d || a.is(":valid") && !b ? (a.removeClass("invalid"), a.addClass("valid")) : (a.removeClass("valid"), a.addClass("invalid")))
            };
            var d = a(".hiddendiv").first();
            d.length || (d = a('<div class="hiddendiv common"></div>'), a("body").append(d));
            var e = ".materialize-textarea";
            a(e).each(function() {
                var c = a(this);
                c.val().length && b(c)
            }), a("body").on("keyup keydown autoresize", e, function() {
                b(a(this))
            }), a(document).on("change", '.file-field input[type="file"]', function() {
                for (var b = a(this).closest(".file-field"), c = b.find("input.file-path"), d = a(this)[0].files, e = [], f = 0; f < d.length; f++) e.push(d[f].name);
                c.val(e.join(", ")), c.trigger("change")
            });
            var f, g = "input[type=range]",
                h = !1;
            a(g).each(function() {
                var b = a('<span class="thumb"><span class="value"></span></span>');
                a(this).after(b)
            });
            var i = ".range-field";
            a(document).on("change", g, function(b) {
                var c = a(this).siblings(".thumb");
                c.find(".value").html(a(this).val())
            }), a(document).on("input mousedown touchstart", g, function(b) {
                var c = a(this).siblings(".thumb"),
                    d = a(this).outerWidth();
                c.length <= 0 && (c = a('<span class="thumb"><span class="value"></span></span>'), a(this).after(c)), c.find(".value").html(a(this).val()), h = !0, a(this).addClass("active"), c.hasClass("active") || c.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), "input" !== b.type && (f = void 0 === b.pageX || null === b.pageX ? b.originalEvent.touches[0].pageX - a(this).offset().left : b.pageX - a(this).offset().left, 0 > f ? f = 0 : f > d && (f = d), c.addClass("active").css("left", f)), c.find(".value").html(a(this).val())
            }), a(document).on("mouseup touchend", i, function() {
                h = !1, a(this).removeClass("active")
            }), a(document).on("mousemove touchmove", i, function(b) {
                var c, d = a(this).children(".thumb");
                if (h) {
                    d.hasClass("active") || d.velocity({
                        height: "30px",
                        width: "30px",
                        top: "-20px",
                        marginLeft: "-15px"
                    }, {
                        duration: 300,
                        easing: "easeOutExpo"
                    }), c = void 0 === b.pageX || null === b.pageX ? b.originalEvent.touches[0].pageX - a(this).offset().left : b.pageX - a(this).offset().left;
                    var e = a(this).outerWidth();
                    0 > c ? c = 0 : c > e && (c = e), d.addClass("active").css("left", c), d.find(".value").html(d.siblings(g).val())
                }
            }), a(document).on("mouseout touchleave", i, function() {
                if (!h) {
                    var b = a(this).children(".thumb");
                    b.hasClass("active") && b.velocity({
                        height: "0",
                        width: "0",
                        top: "10px",
                        marginLeft: "-6px"
                    }, {
                        duration: 100
                    }), b.removeClass("active")
                }
            })
        }), a.fn.material_select = function(b) {
            function c(a, b, c) {
                var e = a.indexOf(b),
                    f = -1 === e;
                return f ? a.push(b) : a.splice(e, 1), c.siblings("ul.dropdown-content").find("li").eq(b).toggleClass("active"), c.find("option").eq(b).prop("selected", f), d(a, c), f
            }

            function d(a, b) {
                for (var c = "", d = 0, e = a.length; e > d; d++) {
                    var f = b.find("option").eq(a[d]).text();
                    c += 0 === d ? f : ", " + f
                }
                "" === c && (c = b.find("option:disabled").eq(0).text()), b.siblings("input.select-dropdown").val(c)
            }
            a(this).each(function() {
                var d = a(this);
                if (!d.hasClass("browser-default")) {
                    var e = !!d.attr("multiple"),
                        f = d.data("select-id");
                    if (f && (d.parent().find("span.caret").remove(), d.parent().find("input").remove(), d.unwrap(), a("ul#select-options-" + f).remove()), "destroy" === b) return void d.data("select-id", null).removeClass("initialized");
                    var g = Materialize.guid();
                    d.data("select-id", g);
                    var h = a('<div class="select-wrapper"></div>');
                    h.addClass(d.attr("class"));
                    var i = a('<ul id="select-options-' + g + '" class="dropdown-content select-dropdown ' + (e ? "multiple-select-dropdown" : "") + '"></ul>'),
                        j = d.children("option, optgroup"),
                        k = [],
                        l = !1,
                        m = d.find("option:selected").html() || d.find("option:first").html() || "",
                        n = function(b, c, d) {
                            var e = c.is(":disabled") ? "disabled " : "",
                                f = c.data("icon"),
                                g = c.attr("class");
                            if (f) {
                                var h = "";
                                return g && (h = ' class="' + g + '"'), "multiple" === d ? i.append(a('<li class="' + e + '"><img src="' + f + '"' + h + '><span><input type="checkbox"' + e + "/><label></label>" + c.html() + "</span></li>")) : i.append(a('<li class="' + e + '"><img src="' + f + '"' + h + "><span>" + c.html() + "</span></li>")), !0
                            }
                            "multiple" === d ? i.append(a('<li class="' + e + '"><span><input type="checkbox"' + e + "/><label></label>" + c.html() + "</span></li>")) : i.append(a('<li class="' + e + '"><span>' + c.html() + "</span></li>"))
                        };
                    j.length && j.each(function() {
                        if (a(this).is("option")) e ? n(d, a(this), "multiple") : n(d, a(this));
                        else if (a(this).is("optgroup")) {
                            var b = a(this).children("option");
                            i.append(a('<li class="optgroup"><span>' + a(this).attr("label") + "</span></li>")), b.each(function() {
                                n(d, a(this))
                            })
                        }
                    }), i.find("li:not(.optgroup)").each(function(f) {
                        a(this).click(function(g) {
                            if (!a(this).hasClass("disabled") && !a(this).hasClass("optgroup")) {
                                var h = !0;
                                e ? (a('input[type="checkbox"]', this).prop("checked", function(a, b) {
                                    return !b
                                }), h = c(k, a(this).index(), d), q.trigger("focus")) : (i.find("li").removeClass("active"), a(this).toggleClass("active"), q.val(a(this).text())), activateOption(i, a(this)), d.find("option").eq(f).prop("selected", h), d.trigger("change"), "undefined" != typeof b && b()
                            }
                            g.stopPropagation()
                        })
                    }), d.wrap(h);
                    var o = a('<span class="caret">&#9660;</span>');
                    d.is(":disabled") && o.addClass("disabled");
                    var p = m.replace(/"/g, "&quot;"),
                        q = a('<input type="text" class="select-dropdown" readonly="true" ' + (d.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + g + '" value="' + p + '"/>');
                    d.before(q), q.before(o), q.after(i), d.is(":disabled") || q.dropdown({
                        hover: !1,
                        closeOnClick: !1
                    }), d.attr("tabindex") && a(q[0]).attr("tabindex", d.attr("tabindex")), d.addClass("initialized"), q.on({
                        focus: function() {
                            if (a("ul.select-dropdown").not(i[0]).is(":visible") && a("input.select-dropdown").trigger("close"), !i.is(":visible")) {
                                a(this).trigger("open", ["focus"]);
                                var b = a(this).val(),
                                    c = i.find("li").filter(function() {
                                        return a(this).text().toLowerCase() === b.toLowerCase()
                                    })[0];
                                activateOption(i, c)
                            }
                        },
                        "touchend click": function(a) {
                            a.stopPropagation()
                        }
                    }), q.on("blur", function() {
                        e || a(this).trigger("close"), i.find("li.selected").removeClass("selected")
                    }), i.hover(function() {
                        l = !0
                    }, function() {
                        l = !1
                    }), a(window).on({
                        click: function() {
                            e && (l || q.trigger("close"))
                        }
                    }), e && d.find("option:selected:not(:disabled)").each(function() {
                        var b = a(this).index();
                        c(k, b, d), i.find("li").eq(b).find(":checkbox").prop("checked", !0)
                    }), activateOption = function(b, c) {
                        if (c) {
                            b.find("li.selected").removeClass("selected");
                            var d = a(c);
                            d.addClass("selected"), i.scrollTo(d)
                        }
                    };
                    var r = [],
                        s = function(b) {
                            if (9 == b.which) return void q.trigger("close");
                            if (40 == b.which && !i.is(":visible")) return void q.trigger("open");
                            if (13 != b.which || i.is(":visible")) {
                                b.preventDefault();
                                var c = String.fromCharCode(b.which).toLowerCase(),
                                    d = [9, 13, 27, 38, 40];
                                if (c && -1 === d.indexOf(b.which)) {
                                    r.push(c);
                                    var f = r.join(""),
                                        g = i.find("li").filter(function() {
                                            return 0 === a(this).text().toLowerCase().indexOf(f)
                                        })[0];
                                    g && activateOption(i, g)
                                }
                                if (13 == b.which) {
                                    var h = i.find("li.selected:not(.disabled)")[0];
                                    h && (a(h).trigger("click"), e || q.trigger("close"))
                                }
                                40 == b.which && (g = i.find("li.selected").length ? i.find("li.selected").next("li:not(.disabled)")[0] : i.find("li:not(.disabled)")[0], activateOption(i, g)), 27 == b.which && q.trigger("close"), 38 == b.which && (g = i.find("li.selected").prev("li:not(.disabled)")[0], g && activateOption(i, g)), setTimeout(function() {
                                    r = []
                                }, 1e3)
                            }
                        };
                    q.on("keydown", s)
                }
            })
        }
    }(jQuery), jQuery("select").siblings("input.select-dropdown").on("mousedown", function(a) {
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (a.clientX >= a.target.clientWidth || a.clientY >= a.target.clientHeight) && a.preventDefault()
}),
    function(a) {
        "function" == typeof define && define.amd ? define("picker", ["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : this.Picker = a(jQuery)
    }(function(a) {
        function b(f, g, i, m) {
            function n() {
                return b._.node("div", b._.node("div", b._.node("div", b._.node("div", B.component.nodes(w.open), y.box), y.wrap), y.frame), y.holder, 'tabindex="-1"');
            }

            function o() {
                z.data(g, B).addClass(y.input).val(z.data("value") ? B.get("select", x.format) : f.value), x.editable || z.on("focus." + w.id + " click." + w.id, function(a) {
                    a.preventDefault(), B.open()
                }).on("keydown." + w.id, u), e(f, {
                    haspopup: !0,
                    expanded: !1,
                    readonly: !1,
                    owns: f.id + "_root"
                })
            }

            function p() {
                e(B.$root[0], "hidden", !0)
            }

            function q() {
                B.$holder.on({
                    keydown: u,
                    "focus.toOpen": t,
                    blur: function() {
                        z.removeClass(y.target)
                    },
                    focusin: function(a) {
                        B.$root.removeClass(y.focused), a.stopPropagation()
                    },
                    "mousedown click": function(b) {
                        var c = b.target;
                        c != B.$holder[0] && (b.stopPropagation(), "mousedown" != b.type || a(c).is("input, select, textarea, button, option") || (b.preventDefault(), B.$holder[0].focus()))
                    }
                }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                    var b = a(this),
                        c = b.data(),
                        d = b.hasClass(y.navDisabled) || b.hasClass(y.disabled),
                        e = h();
                    e = e && (e.type || e.href), (d || e && !a.contains(B.$root[0], e)) && B.$holder[0].focus(), !d && c.nav ? B.set("highlight", B.component.item.highlight, {
                        nav: c.nav
                    }) : !d && "pick" in c ? (B.set("select", c.pick), x.closeOnSelect && B.close(!0)) : c.clear ? (B.clear(), x.closeOnClear && B.close(!0)) : c.close && B.close(!0)
                })
            }

            function r() {
                var b;
                x.hiddenName === !0 ? (b = f.name, f.name = "") : (b = ["string" == typeof x.hiddenPrefix ? x.hiddenPrefix : "", "string" == typeof x.hiddenSuffix ? x.hiddenSuffix : "_submit"], b = b[0] + f.name + b[1]), B._hidden = a('<input type=hidden name="' + b + '"' + (z.data("value") || f.value ? ' value="' + B.get("select", x.formatSubmit) + '"' : "") + ">")[0], z.on("change." + w.id, function() {
                    B._hidden.value = f.value ? B.get("select", x.formatSubmit) : ""
                })
            }

            function s() {
                v && l ? B.$holder.find("." + y.frame).one("transitionend", function() {
                    B.$holder[0].focus()
                }) : B.$holder[0].focus()
            }

            function t(a) {
                a.stopPropagation(), z.addClass(y.target), B.$root.addClass(y.focused), B.open()
            }

            function u(a) {
                var b = a.keyCode,
                    c = /^(8|46)$/.test(b);
                return 27 == b ? (B.close(!0), !1) : void((32 == b || c || !w.open && B.component.key[b]) && (a.preventDefault(), a.stopPropagation(), c ? B.clear().close() : B.open()))
            }
            if (!f) return b;
            var v = !1,
                w = {
                    id: f.id || "P" + Math.abs(~~(Math.random() * new Date))
                },
                x = i ? a.extend(!0, {}, i.defaults, m) : m || {},
                y = a.extend({}, b.klasses(), x.klass),
                z = a(f),
                A = function() {
                    return this.start()
                },
                B = A.prototype = {
                    constructor: A,
                    $node: z,
                    start: function() {
                        return w && w.start ? B : (w.methods = {}, w.start = !0, w.open = !1, w.type = f.type, f.autofocus = f == h(), f.readOnly = !x.editable, f.id = f.id || w.id, "text" != f.type && (f.type = "text"), B.component = new i(B, x), B.$root = a('<div class="' + y.picker + '" id="' + f.id + '_root" />'), p(), B.$holder = a(n()).appendTo(B.$root), q(), x.formatSubmit && r(), o(), x.containerHidden ? a(x.containerHidden).append(B._hidden) : z.after(B._hidden), x.container ? a(x.container).append(B.$root) : z.after(B.$root), B.on({
                            start: B.component.onStart,
                            render: B.component.onRender,
                            stop: B.component.onStop,
                            open: B.component.onOpen,
                            close: B.component.onClose,
                            set: B.component.onSet
                        }).on({
                            start: x.onStart,
                            render: x.onRender,
                            stop: x.onStop,
                            open: x.onOpen,
                            close: x.onClose,
                            set: x.onSet
                        }), v = c(B.$holder[0]), f.autofocus && B.open(), B.trigger("start").trigger("render"))
                    },
                    render: function(b) {
                        return b ? (B.$holder = a(n()), q(), B.$root.html(B.$holder)) : B.$root.find("." + y.box).html(B.component.nodes(w.open)), B.trigger("render")
                    },
                    stop: function() {
                        return w.start ? (B.close(), B._hidden && B._hidden.parentNode.removeChild(B._hidden), B.$root.remove(), z.removeClass(y.input).removeData(g), setTimeout(function() {
                            z.off("." + w.id)
                        }, 0), f.type = w.type, f.readOnly = !1, B.trigger("stop"), w.methods = {}, w.start = !1, B) : B
                    },
                    open: function(c) {
                        return w.open ? B : (z.addClass(y.active), e(f, "expanded", !0), setTimeout(function() {
                            B.$root.addClass(y.opened), e(B.$root[0], "hidden", !1)
                        }, 0), c !== !1 && (w.open = !0, v && k.css("overflow", "hidden").css("padding-right", "+=" + d()), s(), j.on("click." + w.id + " focusin." + w.id, function(a) {
                            var b = a.target;
                            b != f && b != document && 3 != a.which && B.close(b === B.$holder[0])
                        }).on("keydown." + w.id, function(c) {
                            var d = c.keyCode,
                                e = B.component.key[d],
                                f = c.target;
                            27 == d ? B.close(!0) : f != B.$holder[0] || !e && 13 != d ? a.contains(B.$root[0], f) && 13 == d && (c.preventDefault(), f.click()) : (c.preventDefault(), e ? b._.trigger(B.component.key.go, B, [b._.trigger(e)]) : B.$root.find("." + y.highlighted).hasClass(y.disabled) || (B.set("select", B.component.item.highlight), x.closeOnSelect && B.close(!0)))
                        })), B.trigger("open"))
                    },
                    close: function(a) {
                        return a && (x.editable ? f.focus() : (B.$holder.off("focus.toOpen").focus(), setTimeout(function() {
                            B.$holder.on("focus.toOpen", t)
                        }, 0))), z.removeClass(y.active), e(f, "expanded", !1), setTimeout(function() {
                            B.$root.removeClass(y.opened + " " + y.focused), e(B.$root[0], "hidden", !0)
                        }, 0), w.open ? (w.open = !1, v && k.css("overflow", "").css("padding-right", "-=" + d()), j.off("." + w.id), B.trigger("close")) : B
                    },
                    clear: function(a) {
                        return B.set("clear", null, a)
                    },
                    set: function(b, c, d) {
                        var e, f, g = a.isPlainObject(b),
                            h = g ? b : {};
                        if (d = g && a.isPlainObject(c) ? c : d || {}, b) {
                            g || (h[b] = c);
                            for (e in h) f = h[e], e in B.component.item && (void 0 === f && (f = null), B.component.set(e, f, d)), ("select" == e || "clear" == e) && z.val("clear" == e ? "" : B.get(e, x.format)).trigger("change");
                            B.render()
                        }
                        return d.muted ? B : B.trigger("set", h)
                    },
                    get: function(a, c) {
                        if (a = a || "value", null != w[a]) return w[a];
                        if ("valueSubmit" == a) {
                            if (B._hidden) return B._hidden.value;
                            a = "value"
                        }
                        if ("value" == a) return f.value;
                        if (a in B.component.item) {
                            if ("string" == typeof c) {
                                var d = B.component.get(a);
                                return d ? b._.trigger(B.component.formats.toString, B.component, [c, d]) : ""
                            }
                            return B.component.get(a)
                        }
                    },
                    on: function(b, c, d) {
                        var e, f, g = a.isPlainObject(b),
                            h = g ? b : {};
                        if (b) {
                            g || (h[b] = c);
                            for (e in h) f = h[e], d && (e = "_" + e), w.methods[e] = w.methods[e] || [], w.methods[e].push(f)
                        }
                        return B
                    },
                    off: function() {
                        var a, b, c = arguments;
                        for (a = 0, namesCount = c.length; a < namesCount; a += 1) b = c[a], b in w.methods && delete w.methods[b];
                        return B
                    },
                    trigger: function(a, c) {
                        var d = function(a) {
                            var d = w.methods[a];
                            d && d.map(function(a) {
                                b._.trigger(a, B, [c])
                            })
                        };
                        return d("_" + a), d(a), B
                    }
                };
            return new A
        }

        function c(a) {
            var b, c = "position";
            return a.currentStyle ? b = a.currentStyle[c] : window.getComputedStyle && (b = getComputedStyle(a)[c]), "fixed" == b
        }

        function d() {
            if (k.height() <= i.height()) return 0;
            var b = a('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                c = b[0].offsetWidth;
            b.css("overflow", "scroll");
            var d = a('<div style="width:100%" />').appendTo(b),
                e = d[0].offsetWidth;
            return b.remove(), c - e
        }

        function e(b, c, d) {
            if (a.isPlainObject(c))
                for (var e in c) f(b, e, c[e]);
            else f(b, c, d)
        }

        function f(a, b, c) {
            a.setAttribute(("role" == b ? "" : "aria-") + b, c)
        }

        function g(b, c) {
            a.isPlainObject(b) || (b = {
                attribute: c
            }), c = "";
            for (var d in b) {
                var e = ("role" == d ? "" : "aria-") + d,
                    f = b[d];
                c += null == f ? "" : e + '="' + b[d] + '"'
            }
            return c
        }

        function h() {
            try {
                return document.activeElement
            } catch (a) {}
        }
        var i = a(window),
            j = a(document),
            k = a(document.documentElement),
            l = null != document.documentElement.style.transition;
        return b.klasses = function(a) {
            return a = a || "picker", {
                picker: a,
                opened: a + "--opened",
                focused: a + "--focused",
                input: a + "__input",
                active: a + "__input--active",
                target: a + "__input--target",
                holder: a + "__holder",
                frame: a + "__frame",
                wrap: a + "__wrap",
                box: a + "__box"
            }
        }, b._ = {
            group: function(a) {
                for (var c, d = "", e = b._.trigger(a.min, a); e <= b._.trigger(a.max, a, [e]); e += a.i) c = b._.trigger(a.item, a, [e]), d += b._.node(a.node, c[0], c[1], c[2]);
                return d
            },
            node: function(b, c, d, e) {
                return c ? (c = a.isArray(c) ? c.join("") : c, d = d ? ' class="' + d + '"' : "", e = e ? " " + e : "", "<" + b + d + e + ">" + c + "</" + b + ">") : ""
            },
            lead: function(a) {
                return (10 > a ? "0" : "") + a
            },
            trigger: function(a, b, c) {
                return "function" == typeof a ? a.apply(b, c || []) : a
            },
            digits: function(a) {
                return /\d/.test(a[1]) ? 2 : 1
            },
            isDate: function(a) {
                return {}.toString.call(a).indexOf("Date") > -1 && this.isInteger(a.getDate())
            },
            isInteger: function(a) {
                return {}.toString.call(a).indexOf("Number") > -1 && a % 1 === 0
            },
            ariaAttr: g
        }, b.extend = function(c, d) {
            a.fn[c] = function(e, f) {
                var g = this.data(c);
                return "picker" == e ? g : g && "string" == typeof e ? b._.trigger(g[e], g, [f]) : this.each(function() {
                    var f = a(this);
                    f.data(c) || new b(this, c, d, e)
                })
            }, a.fn[c].defaults = d.defaults
        }, b
    }),
    function(a) {
        "function" == typeof define && define.amd ? define(["picker", "jquery"], a) : "object" == typeof exports ? module.exports = a(require("./picker.js"), require("jquery")) : a(Picker, jQuery)
    }(function(a, b) {
        function c(a, b) {
            var c = this,
                d = a.$node[0],
                e = d.value,
                f = a.$node.data("value"),
                g = f || e,
                h = f ? b.formatSubmit : b.format,
                i = function() {
                    return d.currentStyle ? "rtl" == d.currentStyle.direction : "rtl" == getComputedStyle(a.$root[0]).direction
                };
            c.settings = b, c.$node = a.$node, c.queue = {
                min: "measure create",
                max: "measure create",
                now: "now create",
                select: "parse create validate",
                highlight: "parse navigate create validate",
                view: "parse create validate viewset",
                disable: "deactivate",
                enable: "activate"
            }, c.item = {}, c.item.clear = null, c.item.disable = (b.disable || []).slice(0), c.item.enable = - function(a) {
                return a[0] === !0 ? a.shift() : -1
            }(c.item.disable), c.set("min", b.min).set("max", b.max).set("now"), g ? c.set("select", g, {
                format: h,
                defaultValue: !0
            }) : c.set("select", null).set("highlight", c.item.now), c.key = {
                40: 7,
                38: -7,
                39: function() {
                    return i() ? -1 : 1
                },
                37: function() {
                    return i() ? 1 : -1
                },
                go: function(a) {
                    var b = c.item.highlight,
                        d = new Date(b.year, b.month, b.date + a);
                    c.set("highlight", d, {
                        interval: a
                    }), this.render()
                }
            }, a.on("render", function() {
                a.$root.find("." + b.klass.selectMonth).on("change", function() {
                    var c = this.value;
                    c && (a.set("highlight", [a.get("view").year, c, a.get("highlight").date]), a.$root.find("." + b.klass.selectMonth).trigger("focus"))
                }), a.$root.find("." + b.klass.selectYear).on("change", function() {
                    var c = this.value;
                    c && (a.set("highlight", [c, a.get("view").month, a.get("highlight").date]), a.$root.find("." + b.klass.selectYear).trigger("focus"))
                })
            }, 1).on("open", function() {
                var d = "";
                c.disabled(c.get("now")) && (d = ":not(." + b.klass.buttonToday + ")"), a.$root.find("button" + d + ", select").attr("disabled", !1)
            }, 1).on("close", function() {
                a.$root.find("button, select").attr("disabled", !0)
            }, 1)
        }
        var d = 7,
            e = 6,
            f = a._;
        c.prototype.set = function(a, b, c) {
            var d = this,
                e = d.item;
            return null === b ? ("clear" == a && (a = "select"), e[a] = b, d) : (e["enable" == a ? "disable" : "flip" == a ? "enable" : a] = d.queue[a].split(" ").map(function(e) {
                return b = d[e](a, b, c)
            }).pop(), "select" == a ? d.set("highlight", e.select, c) : "highlight" == a ? d.set("view", e.highlight, c) : a.match(/^(flip|min|max|disable|enable)$/) && (e.select && d.disabled(e.select) && d.set("select", e.select, c), e.highlight && d.disabled(e.highlight) && d.set("highlight", e.highlight, c)), d)
        }, c.prototype.get = function(a) {
            return this.item[a]
        }, c.prototype.create = function(a, c, d) {
            var e, g = this;
            return c = void 0 === c ? a : c, c == -(1 / 0) || c == 1 / 0 ? e = c : b.isPlainObject(c) && f.isInteger(c.pick) ? c = c.obj : b.isArray(c) ? (c = new Date(c[0], c[1], c[2]), c = f.isDate(c) ? c : g.create().obj) : c = f.isInteger(c) || f.isDate(c) ? g.normalize(new Date(c), d) : g.now(a, c, d), {
                year: e || c.getFullYear(),
                month: e || c.getMonth(),
                date: e || c.getDate(),
                day: e || c.getDay(),
                obj: e || c,
                pick: e || c.getTime()
            }
        }, c.prototype.createRange = function(a, c) {
            var d = this,
                e = function(a) {
                    return a === !0 || b.isArray(a) || f.isDate(a) ? d.create(a) : a
                };
            return f.isInteger(a) || (a = e(a)), f.isInteger(c) || (c = e(c)), f.isInteger(a) && b.isPlainObject(c) ? a = [c.year, c.month, c.date + a] : f.isInteger(c) && b.isPlainObject(a) && (c = [a.year, a.month, a.date + c]), {
                from: e(a),
                to: e(c)
            }
        }, c.prototype.withinRange = function(a, b) {
            return a = this.createRange(a.from, a.to), b.pick >= a.from.pick && b.pick <= a.to.pick
        }, c.prototype.overlapRanges = function(a, b) {
            var c = this;
            return a = c.createRange(a.from, a.to), b = c.createRange(b.from, b.to), c.withinRange(a, b.from) || c.withinRange(a, b.to) || c.withinRange(b, a.from) || c.withinRange(b, a.to)
        }, c.prototype.now = function(a, b, c) {
            return b = new Date, c && c.rel && b.setDate(b.getDate() + c.rel), this.normalize(b, c)
        }, c.prototype.navigate = function(a, c, d) {
            var e, f, g, h, i = b.isArray(c),
                j = b.isPlainObject(c),
                k = this.item.view;
            if (i || j) {
                for (j ? (f = c.year, g = c.month, h = c.date) : (f = +c[0], g = +c[1], h = +c[2]), d && d.nav && k && k.month !== g && (f = k.year, g = k.month), e = new Date(f, g + (d && d.nav ? d.nav : 0), 1), f = e.getFullYear(), g = e.getMonth(); new Date(f, g, h).getMonth() !== g;) h -= 1;
                c = [f, g, h]
            }
            return c
        }, c.prototype.normalize = function(a) {
            return a.setHours(0, 0, 0, 0), a
        }, c.prototype.measure = function(a, b) {
            var c = this;
            return b ? "string" == typeof b ? b = c.parse(a, b) : f.isInteger(b) && (b = c.now(a, b, {
                rel: b
            })) : b = "min" == a ? -(1 / 0) : 1 / 0, b
        }, c.prototype.viewset = function(a, b) {
            return this.create([b.year, b.month, 1])
        }, c.prototype.validate = function(a, c, d) {
            var e, g, h, i, j = this,
                k = c,
                l = d && d.interval ? d.interval : 1,
                m = -1 === j.item.enable,
                n = j.item.min,
                o = j.item.max,
                p = m && j.item.disable.filter(function(a) {
                        if (b.isArray(a)) {
                            var d = j.create(a).pick;
                            d < c.pick ? e = !0 : d > c.pick && (g = !0)
                        }
                        return f.isInteger(a)
                    }).length;
            if ((!d || !d.nav && !d.defaultValue) && (!m && j.disabled(c) || m && j.disabled(c) && (p || e || g) || !m && (c.pick <= n.pick || c.pick >= o.pick)))
                for (m && !p && (!g && l > 0 || !e && 0 > l) && (l *= -1); j.disabled(c) && (Math.abs(l) > 1 && (c.month < k.month || c.month > k.month) && (c = k, l = l > 0 ? 1 : -1), c.pick <= n.pick ? (h = !0, l = 1, c = j.create([n.year, n.month, n.date + (c.pick === n.pick ? 0 : -1)])) : c.pick >= o.pick && (i = !0, l = -1, c = j.create([o.year, o.month, o.date + (c.pick === o.pick ? 0 : 1)])), !h || !i);) c = j.create([c.year, c.month, c.date + l]);
            return c
        }, c.prototype.disabled = function(a) {
            var c = this,
                d = c.item.disable.filter(function(d) {
                    return f.isInteger(d) ? a.day === (c.settings.firstDay ? d : d - 1) % 7 : b.isArray(d) || f.isDate(d) ? a.pick === c.create(d).pick : b.isPlainObject(d) ? c.withinRange(d, a) : void 0
                });
            return d = d.length && !d.filter(function(a) {
                    return b.isArray(a) && "inverted" == a[3] || b.isPlainObject(a) && a.inverted
                }).length, -1 === c.item.enable ? !d : d || a.pick < c.item.min.pick || a.pick > c.item.max.pick
        }, c.prototype.parse = function(a, b, c) {
            var d = this,
                e = {};
            return b && "string" == typeof b ? (c && c.format || (c = c || {}, c.format = d.settings.format), d.formats.toArray(c.format).map(function(a) {
                var c = d.formats[a],
                    g = c ? f.trigger(c, d, [b, e]) : a.replace(/^!/, "").length;
                c && (e[a] = b.substr(0, g)), b = b.substr(g)
            }), [e.yyyy || e.yy, +(e.mm || e.m) - 1, e.dd || e.d]) : b
        }, c.prototype.formats = function() {
            function a(a, b, c) {
                var d = a.match(/[^\x00-\x7F]+|\w+/)[0];
                return c.mm || c.m || (c.m = b.indexOf(d) + 1), d.length
            }

            function b(a) {
                return a.match(/\w+/)[0].length
            }
            return {
                d: function(a, b) {
                    return a ? f.digits(a) : b.date
                },
                dd: function(a, b) {
                    return a ? 2 : f.lead(b.date)
                },
                ddd: function(a, c) {
                    return a ? b(a) : this.settings.weekdaysShort[c.day]
                },
                dddd: function(a, c) {
                    return a ? b(a) : this.settings.weekdaysFull[c.day]
                },
                m: function(a, b) {
                    return a ? f.digits(a) : b.month + 1
                },
                mm: function(a, b) {
                    return a ? 2 : f.lead(b.month + 1)
                },
                mmm: function(b, c) {
                    var d = this.settings.monthsShort;
                    return b ? a(b, d, c) : d[c.month]
                },
                mmmm: function(b, c) {
                    var d = this.settings.monthsFull;
                    return b ? a(b, d, c) : d[c.month]
                },
                yy: function(a, b) {
                    return a ? 2 : ("" + b.year).slice(2)
                },
                yyyy: function(a, b) {
                    return a ? 4 : b.year
                },
                toArray: function(a) {
                    return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
                },
                toString: function(a, b) {
                    var c = this;
                    return c.formats.toArray(a).map(function(a) {
                        return f.trigger(c.formats[a], c, [0, b]) || a.replace(/^!/, "")
                    }).join("")
                }
            }
        }(), c.prototype.isDateExact = function(a, c) {
            var d = this;
            return f.isInteger(a) && f.isInteger(c) || "boolean" == typeof a && "boolean" == typeof c ? a === c : (f.isDate(a) || b.isArray(a)) && (f.isDate(c) || b.isArray(c)) ? d.create(a).pick === d.create(c).pick : !(!b.isPlainObject(a) || !b.isPlainObject(c)) && (d.isDateExact(a.from, c.from) && d.isDateExact(a.to, c.to))
        }, c.prototype.isDateOverlap = function(a, c) {
            var d = this,
                e = d.settings.firstDay ? 1 : 0;
            return f.isInteger(a) && (f.isDate(c) || b.isArray(c)) ? (a = a % 7 + e, a === d.create(c).day + 1) : f.isInteger(c) && (f.isDate(a) || b.isArray(a)) ? (c = c % 7 + e, c === d.create(a).day + 1) : !(!b.isPlainObject(a) || !b.isPlainObject(c)) && d.overlapRanges(a, c)
        }, c.prototype.flipEnable = function(a) {
            var b = this.item;
            b.enable = a || (-1 == b.enable ? 1 : -1)
        }, c.prototype.deactivate = function(a, c) {
            var d = this,
                e = d.item.disable.slice(0);
            return "flip" == c ? d.flipEnable() : c === !1 ? (d.flipEnable(1), e = []) : c === !0 ? (d.flipEnable(-1), e = []) : c.map(function(a) {
                for (var c, g = 0; g < e.length; g += 1)
                    if (d.isDateExact(a, e[g])) {
                        c = !0;
                        break
                    }
                c || (f.isInteger(a) || f.isDate(a) || b.isArray(a) || b.isPlainObject(a) && a.from && a.to) && e.push(a)
            }), e
        }, c.prototype.activate = function(a, c) {
            var d = this,
                e = d.item.disable,
                g = e.length;
            return "flip" == c ? d.flipEnable() : c === !0 ? (d.flipEnable(1), e = []) : c === !1 ? (d.flipEnable(-1), e = []) : c.map(function(a) {
                var c, h, i, j;
                for (i = 0; g > i; i += 1) {
                    if (h = e[i], d.isDateExact(h, a)) {
                        c = e[i] = null, j = !0;
                        break
                    }
                    if (d.isDateOverlap(h, a)) {
                        b.isPlainObject(a) ? (a.inverted = !0, c = a) : b.isArray(a) ? (c = a, c[3] || c.push("inverted")) : f.isDate(a) && (c = [a.getFullYear(), a.getMonth(), a.getDate(), "inverted"]);
                        break
                    }
                }
                if (c)
                    for (i = 0; g > i; i += 1)
                        if (d.isDateExact(e[i], a)) {
                            e[i] = null;
                            break
                        }
                if (j)
                    for (i = 0; g > i; i += 1)
                        if (d.isDateOverlap(e[i], a)) {
                            e[i] = null;
                            break
                        }
                c && e.push(c)
            }), e.filter(function(a) {
                return null != a
            })
        }, c.prototype.nodes = function(a) {
            var b = this,
                c = b.settings,
                g = b.item,
                h = g.now,
                i = g.select,
                j = g.highlight,
                k = g.view,
                l = g.disable,
                m = g.min,
                n = g.max,
                o = function(a, b) {
                    return c.firstDay && (a.push(a.shift()), b.push(b.shift())), f.node("thead", f.node("tr", f.group({
                        min: 0,
                        max: d - 1,
                        i: 1,
                        node: "th",
                        item: function(d) {
                            return [a[d], c.klass.weekdays, 'scope=col title="' + b[d] + '"']
                        }
                    })))
                }((c.showWeekdaysFull ? c.weekdaysFull : c.weekdaysShort).slice(0), c.weekdaysFull.slice(0)),
                p = function(a) {
                    return f.node("div", " ", c.klass["nav" + (a ? "Next" : "Prev")] + (a && k.year >= n.year && k.month >= n.month || !a && k.year <= m.year && k.month <= m.month ? " " + c.klass.navDisabled : ""), "data-nav=" + (a || -1) + " " + f.ariaAttr({
                            role: "button",
                            controls: b.$node[0].id + "_table"
                        }) + ' title="' + (a ? c.labelMonthNext : c.labelMonthPrev) + '"')
                },
                q = function() {
                    var d = c.showMonthsShort ? c.monthsShort : c.monthsFull;
                    return c.selectMonths ? f.node("select", f.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: "option",
                        item: function(a) {
                            return [d[a], 0, "value=" + a + (k.month == a ? " selected" : "") + (k.year == m.year && a < m.month || k.year == n.year && a > n.month ? " disabled" : "")]
                        }
                    }), c.klass.selectMonth, (a ? "" : "disabled") + " " + f.ariaAttr({
                            controls: b.$node[0].id + "_table"
                        }) + ' title="' + c.labelMonthSelect + '"') : f.node("div", d[k.month], c.klass.month)
                },
                r = function() {
                    var d = k.year,
                        e = c.selectYears === !0 ? 5 : ~~(c.selectYears / 2);
                    if (e) {
                        var g = m.year,
                            h = n.year,
                            i = d - e,
                            j = d + e;
                        if (g > i && (j += g - i, i = g), j > h) {
                            var l = i - g,
                                o = j - h;
                            i -= l > o ? o : l, j = h
                        }
                        return f.node("select", f.group({
                            min: i,
                            max: j,
                            i: 1,
                            node: "option",
                            item: function(a) {
                                return [a, 0, "value=" + a + (d == a ? " selected" : "")]
                            }
                        }), c.klass.selectYear, (a ? "" : "disabled") + " " + f.ariaAttr({
                                controls: b.$node[0].id + "_table"
                            }) + ' title="' + c.labelYearSelect + '"')
                    }
                    return f.node("div", d, c.klass.year)
                };
            return f.node("div", (c.selectYears ? r() + q() : q() + r()) + p() + p(1), c.klass.header) + f.node("table", o + f.node("tbody", f.group({
                        min: 0,
                        max: e - 1,
                        i: 1,
                        node: "tr",
                        item: function(a) {
                            var e = c.firstDay && 0 === b.create([k.year, k.month, 1]).day ? -7 : 0;
                            return [f.group({
                                min: d * a - k.day + e + 1,
                                max: function() {
                                    return this.min + d - 1
                                },
                                i: 1,
                                node: "td",
                                item: function(a) {
                                    a = b.create([k.year, k.month, a + (c.firstDay ? 1 : 0)]);
                                    var d = i && i.pick == a.pick,
                                        e = j && j.pick == a.pick,
                                        g = l && b.disabled(a) || a.pick < m.pick || a.pick > n.pick,
                                        o = f.trigger(b.formats.toString, b, [c.format, a]);
                                    return [f.node("div", a.date, function(b) {
                                        return b.push(k.month == a.month ? c.klass.infocus : c.klass.outfocus), h.pick == a.pick && b.push(c.klass.now), d && b.push(c.klass.selected), e && b.push(c.klass.highlighted), g && b.push(c.klass.disabled), b.join(" ")
                                    }([c.klass.day]), "data-pick=" + a.pick + " " + f.ariaAttr({
                                            role: "gridcell",
                                            label: o,
                                            selected: !(!d || b.$node.val() !== o) || null,
                                            activedescendant: !!e || null,
                                            disabled: !!g || null
                                        })), "", f.ariaAttr({
                                        role: "presentation"
                                    })]
                                }
                            })]
                        }
                    })), c.klass.table, 'id="' + b.$node[0].id + '_table" ' + f.ariaAttr({
                        role: "grid",
                        controls: b.$node[0].id,
                        readonly: !0
                    })) + f.node("div", f.node("button", c.today, c.klass.buttonToday, "type=button data-pick=" + h.pick + (a && !b.disabled(h) ? "" : " disabled") + " " + f.ariaAttr({
                            controls: b.$node[0].id
                        })) + f.node("button", c.clear, c.klass.buttonClear, "type=button data-clear=1" + (a ? "" : " disabled") + " " + f.ariaAttr({
                            controls: b.$node[0].id
                        })) + f.node("button", c.close, c.klass.buttonClose, "type=button data-close=true " + (a ? "" : " disabled") + " " + f.ariaAttr({
                            controls: b.$node[0].id
                        })), c.klass.footer)
        }, c.defaults = function(a) {
            return {
                labelMonthNext: "Next month",
                labelMonthPrev: "Previous month",
                labelMonthSelect: "Select a month",
                labelYearSelect: "Select a year",
                monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                today: "Today",
                clear: "Clear",
                close: "Close",
                closeOnSelect: !0,
                closeOnClear: !0,
                format: "d mmmm, yyyy",
                klass: {
                    table: a + "table",
                    header: a + "header",
                    navPrev: a + "nav--prev",
                    navNext: a + "nav--next",
                    navDisabled: a + "nav--disabled",
                    month: a + "month",
                    year: a + "year",
                    selectMonth: a + "select--month",
                    selectYear: a + "select--year",
                    weekdays: a + "weekday",
                    day: a + "day",
                    disabled: a + "day--disabled",
                    selected: a + "day--selected",
                    highlighted: a + "day--highlighted",
                    now: a + "day--today",
                    infocus: a + "day--infocus",
                    outfocus: a + "day--outfocus",
                    footer: a + "footer",
                    buttonClear: a + "button--clear",
                    buttonToday: a + "button--today",
                    buttonClose: a + "button--close"
                }
            }
        }(a.klasses().picker + "__"), a.extend("pickadate", c)
    }), $.extend($.fn.pickadate.defaults, {
    selectMonths: !0,
    selectYears: 15,
    onRender: function() {
        var a = this.$root,
            b = this.get("highlight", "yyyy"),
            c = this.get("highlight", "dd"),
            d = this.get("highlight", "mmm"),
            e = this.get("highlight", "dddd");
        a.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">' + e + '</div><div class="picker__month-display"><div>' + d + '</div></div><div class="picker__day-display"><div>' + c + '</div></div><div    class="picker__year-display"><div>' + b + "</div></div></div>")
    }
}),
    function() {
        function a(a) {
            return document.createElementNS(i, a)
        }

        function b(a) {
            return (10 > a ? "0" : "") + a
        }

        function c(a) {
            var b = ++q + "";
            return a ? a + b : b
        }

        function d(d, g) {
            function i(a, b) {
                var c = l.offset(),
                    d = /^touch/.test(a.type),
                    e = c.left + r,
                    f = c.top + r,
                    i = (d ? a.originalEvent.touches[0] : a).pageX - e,
                    k = (d ? a.originalEvent.touches[0] : a).pageY - f,
                    m = Math.sqrt(i * i + k * k),
                    p = !1;
                if (!b || !(s - u > m || m > s + u)) {
                    a.preventDefault();
                    var q = setTimeout(function() {
                        D.popover.addClass("clockpicker-moving")
                    }, 200);
                    j && l.append(D.canvas), D.setHand(i, k, !b, !0), h.off(n).on(n, function(a) {
                        a.preventDefault();
                        var b = /^touch/.test(a.type),
                            c = (b ? a.originalEvent.touches[0] : a).pageX - e,
                            d = (b ? a.originalEvent.touches[0] : a).pageY - f;
                        (p || c !== i || d !== k) && (p = !0, D.setHand(c, d, !1, !0))
                    }), h.off(o).on(o, function(a) {
                        h.off(o), a.preventDefault();
                        var c = /^touch/.test(a.type),
                            d = (c ? a.originalEvent.changedTouches[0] : a).pageX - e,
                            j = (c ? a.originalEvent.changedTouches[0] : a).pageY - f;
                        (b || p) && d === i && j === k && D.setHand(d, j), "hours" === D.currentView ? D.toggleView("minutes", w / 2) : g.autoclose && (D.minutesView.addClass("clockpicker-dial-out"), setTimeout(function() {
                            D.done()
                        }, w / 2)), l.prepend(L), clearTimeout(q), D.popover.removeClass("clockpicker-moving"), h.off(n)
                    })
                }
            }
            var k = f(x),
                l = k.find(".clockpicker-plate"),
                p = k.find(".picker__holder"),
                q = k.find(".clockpicker-hours"),
                y = k.find(".clockpicker-minutes"),
                z = k.find(".clockpicker-am-pm-block"),
                A = "INPUT" === d.prop("tagName"),
                B = A ? d : d.find("input"),
                C = f("label[for=" + B.attr("id") + "]"),
                D = this;
            if (this.id = c("cp"), this.element = d, this.holder = p, this.options = g, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = A, this.input = B, this.label = C, this.popover = k, this.plate = l, this.hoursView = q, this.minutesView = y, this.amPmBlock = z, this.spanHours = k.find(".clockpicker-span-hours"), this.spanMinutes = k.find(".clockpicker-span-minutes"), this.spanAmPm = k.find(".clockpicker-span-am-pm"), this.footer = k.find(".picker__footer"), this.amOrPm = "PM", g.twelvehour) {
                var E = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">', "AM", "</button>", '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">', "PM", "</button>", "</div>"].join("");
                f(E), g.ampmclickable ? (this.spanAmPm.empty(), f('<div id="click-am">AM</div>').on("click", function() {
                    D.spanAmPm.children("#click-am").addClass("text-primary"), D.spanAmPm.children("#click-pm").removeClass("text-primary"), D.amOrPm = "AM"
                }).appendTo(this.spanAmPm), f('<div id="click-pm">PM</div>').on("click", function() {
                    D.spanAmPm.children("#click-pm").addClass("text-primary"), D.spanAmPm.children("#click-am").removeClass("text-primary"), D.amOrPm = "PM"
                }).appendTo(this.spanAmPm)) : (f('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click", function() {
                    D.amOrPm = "AM", D.amPmBlock.children(".pm-button").removeClass("active"), D.amPmBlock.children(".am-button").addClass("active"), D.spanAmPm.empty().append("AM")
                }).appendTo(this.amPmBlock), f('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click", function() {
                    D.amOrPm = "PM", D.amPmBlock.children(".am-button").removeClass("active"), D.amPmBlock.children(".pm-button").addClass("active"), D.spanAmPm.empty().append("PM")
                }).appendTo(this.amPmBlock))
            }
            g.darktheme && k.addClass("darktheme"), f('<button type="button" class="btn-flat clockpicker-button" tabindex="' + (g.twelvehour ? "3" : "1") + '">' + g.donetext + "</button>").click(f.proxy(this.done, this)).appendTo(this.footer), this.spanHours.click(f.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(f.proxy(this.toggleView, this, "minutes")), B.on("focus.clockpicker click.clockpicker", f.proxy(this.show, this));
            var F, G, H, I, J = f('<div class="clockpicker-tick"></div>');
            if (g.twelvehour)
                for (F = 1; 13 > F; F += 1) G = J.clone(), H = F / 6 * Math.PI, I = s, G.css("font-size", "140%"), G.css({
                    left: r + Math.sin(H) * I - u,
                    top: r - Math.cos(H) * I - u
                }), G.html(0 === F ? "00" : F), q.append(G), G.on(m, i);
            else
                for (F = 0; 24 > F; F += 1) {
                    G = J.clone(), H = F / 6 * Math.PI;
                    var K = F > 0 && 13 > F;
                    I = K ? t : s, G.css({
                        left: r + Math.sin(H) * I - u,
                        top: r - Math.cos(H) * I - u
                    }), K && G.css("font-size", "120%"), G.html(0 === F ? "00" : F), q.append(G), G.on(m, i)
                }
            for (F = 0; 60 > F; F += 5) G = J.clone(), H = F / 30 * Math.PI, G.css({
                left: r + Math.sin(H) * s - u,
                top: r - Math.cos(H) * s - u
            }), G.css("font-size", "140%"), G.html(b(F)), y.append(G), G.on(m, i);
            if (l.on(m, function(a) {
                    0 === f(a.target).closest(".clockpicker-tick").length && i(a, !0)
                }), j) {
                var L = k.find(".clockpicker-canvas"),
                    M = a("svg");
                M.setAttribute("class", "clockpicker-svg"), M.setAttribute("width", v), M.setAttribute("height", v);
                var N = a("g");
                N.setAttribute("transform", "translate(" + r + "," + r + ")");
                var O = a("circle");
                O.setAttribute("class", "clockpicker-canvas-bearing"), O.setAttribute("cx", 0), O.setAttribute("cy", 0), O.setAttribute("r", 2);
                var P = a("line");
                P.setAttribute("x1", 0), P.setAttribute("y1", 0);
                var Q = a("circle");
                Q.setAttribute("class", "clockpicker-canvas-bg"), Q.setAttribute("r", u);
                var R = a("circle");
                R.setAttribute("class", "clockpicker-canvas-fg"), R.setAttribute("r", 5), N.appendChild(P), N.appendChild(Q), N.appendChild(R), N.appendChild(O), M.appendChild(N), L.append(M), this.hand = P, this.bg = Q, this.fg = R, this.bearing = O, this.g = N, this.canvas = L
            }
            e(this.options.init)
        }

        function e(a) {
            a && "function" == typeof a && a()
        }
        var f = window.jQuery,
            g = f(window),
            h = f(document),
            i = "http://www.w3.org/2000/svg",
            j = "SVGAngle" in window && function() {
                    var a, b = document.createElement("div");
                    return b.innerHTML = "<svg/>", a = (b.firstChild && b.firstChild.namespaceURI) == i, b.innerHTML = "", a
                }(),
            k = function() {
                var a = document.createElement("div").style;
                return "transition" in a || "WebkitTransition" in a || "MozTransition" in a || "msTransition" in a || "OTransition" in a
            }(),
            l = "ontouchstart" in window,
            m = "mousedown" + (l ? " touchstart" : ""),
            n = "mousemove.clockpicker" + (l ? " touchmove.clockpicker" : ""),
            o = "mouseup.clockpicker" + (l ? " touchend.clockpicker" : ""),
            p = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null,
            q = 0,
            r = 135,
            s = 110,
            t = 80,
            u = 20,
            v = 2 * r,
            w = k ? 350 : 1,
            x = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");
        d.DEFAULTS = {
            default: "",
            fromnow: 0,
            donetext: "Done",
            autoclose: !1,
            ampmclickable: !1,
            darktheme: !1,
            twelvehour: !0,
            vibrate: !0
        }, d.prototype.toggle = function() {
            this[this.isShown ? "hide" : "show"]()
        }, d.prototype.locate = function() {
            var a = this.element,
                b = this.popover;
            a.offset(), a.outerWidth(), a.outerHeight(), this.options.align, b.show()
        }, d.prototype.show = function(a) {
            if (!this.isShown) {
                e(this.options.beforeShow), f(":input").each(function() {
                    f(this).attr("tabindex", -1)
                });
                var c = this;
                this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), f(document.body).css("overflow", "hidden"), this.isAppended || (this.popover.insertAfter(this.input), this.options.twelvehour && (this.amOrPm = "PM", this.options.ampmclickable ? (this.spanAmPm.children("#click-pm").addClass("text-primary"), this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.amPmBlock.children(".am-button").removeClass("active"), this.amPmBlock.children(".pm-button").addClass("active"), this.spanAmPm.empty().append("PM"))), g.on("resize.clockpicker" + this.id, function() {
                    c.isShown && c.locate()
                }), this.isAppended = !0);
                var d = ((this.input.prop("value") || this.options.default || "") + "").split(":");
                if (this.options.twelvehour && "undefined" != typeof d[1] && (d[1] = d[1].replace("AM", "").replace("PM", "")), "now" === d[0]) {
                    var i = new Date(+new Date + this.options.fromnow);
                    d = [i.getHours(), i.getMinutes()]
                }
                this.hours = +d[0] || 0, this.minutes = +d[1] || 0, this.spanHours.html(b(this.hours)), this.spanMinutes.html(b(this.minutes)), this.toggleView("hours"), this.locate(), this.isShown = !0, h.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, function(a) {
                    var b = f(a.target);
                    0 === b.closest(c.popover.find(".picker__wrap")).length && 0 === b.closest(c.input).length && c.hide()
                }), h.on("keyup.clockpicker." + this.id, function(a) {
                    27 === a.keyCode && c.hide()
                }), e(this.options.afterShow)
            }
        }, d.prototype.hide = function() {
            e(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), f(document.body).css("overflow", "visible"), this.isShown = !1, f(":input").each(function(a) {
                f(this).attr("tabindex", a + 1)
            }), h.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), h.off("keyup.clockpicker." + this.id), this.popover.hide(), e(this.options.afterHide)
        }, d.prototype.toggleView = function(a, b) {
            var c = !1;
            "minutes" === a && "visible" === f(this.hoursView).css("visibility") && (e(this.options.beforeHourSelect), c = !0);
            var d = "hours" === a,
                g = d ? this.hoursView : this.minutesView,
                h = d ? this.minutesView : this.hoursView;
            this.currentView = a, this.spanHours.toggleClass("text-primary", d), this.spanMinutes.toggleClass("text-primary", !d), h.addClass("clockpicker-dial-out"), g.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(b), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function() {
                h.css("visibility", "hidden")
            }, w), c && e(this.options.afterHourSelect)
        }, d.prototype.resetClock = function(a) {
            var b = this.currentView,
                c = this[b],
                d = "hours" === b,
                e = Math.PI / (d ? 6 : 30),
                f = c * e,
                g = d && c > 0 && 13 > c ? t : s,
                h = Math.sin(f) * g,
                i = -Math.cos(f) * g,
                k = this;
            j && a ? (k.canvas.addClass("clockpicker-canvas-out"), setTimeout(function() {
                k.canvas.removeClass("clockpicker-canvas-out"), k.setHand(h, i)
            }, a)) : this.setHand(h, i)
        }, d.prototype.setHand = function(a, c, d, e) {
            var g, h = Math.atan2(a, -c),
                i = "hours" === this.currentView,
                k = Math.PI / (i || d ? 6 : 30),
                l = Math.sqrt(a * a + c * c),
                m = this.options,
                n = i && (s + t) / 2 > l,
                o = n ? t : s;
            if (m.twelvehour && (o = s), 0 > h && (h = 2 * Math.PI + h), g = Math.round(h / k), h = g * k, m.twelvehour ? i ? 0 === g && (g = 12) : (d && (g *= 5), 60 === g && (g = 0)) : i ? (12 === g && (g = 0), g = n ? 0 === g ? 12 : g : 0 === g ? 0 : g + 12) : (d && (g *= 5), 60 === g && (g = 0)), i ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : g % 5 == 0 ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : this.fg.setAttribute("class", "clockpicker-canvas-fg active"), this[this.currentView] !== g && p && this.options.vibrate && (this.vibrateTimer || (navigator[p](10), this.vibrateTimer = setTimeout(f.proxy(function() {
                    this.vibrateTimer = null
                }, this), 100))), this[this.currentView] = g, this[i ? "spanHours" : "spanMinutes"].html(b(g)), !j) return void this[i ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function() {
                var a = f(this);
                a.toggleClass("active", g === +a.html())
            });
            e || !i && g % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg),
                this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));
            var q = Math.sin(h) * (o - u),
                r = -Math.cos(h) * (o - u),
                v = Math.sin(h) * o,
                w = -Math.cos(h) * o;
            this.hand.setAttribute("x2", q), this.hand.setAttribute("y2", r), this.bg.setAttribute("cx", v), this.bg.setAttribute("cy", w), this.fg.setAttribute("cx", v), this.fg.setAttribute("cy", w)
        }, d.prototype.done = function() {
            e(this.options.beforeDone), this.hide(), this.label.addClass("active");
            var a = this.input.prop("value"),
                c = b(this.hours) + ":" + b(this.minutes);
            this.options.twelvehour && (c += this.amOrPm), this.input.prop("value", c), c !== a && (this.input.triggerHandler("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), e(this.options.afterDone)
        }, d.prototype.remove = function() {
            this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (g.off("resize.clockpicker" + this.id), this.popover.remove())
        }, f.fn.pickatime = function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var c = f(this),
                    e = c.data("clockpicker");
                if (e) "function" == typeof e[a] && e[a].apply(e, b);
                else {
                    var g = f.extend({}, d.DEFAULTS, c.data(), "object" == typeof a && a);
                    c.data("clockpicker", new d(c, g))
                }
            })
        }
    }(), ! function(a, b) {
    "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipe = b()
}(this, function() {
    "use strict";
    var a = function(a, b, c, d) {
        var e = {
            features: null,
            bind: function(a, b, c, d) {
                var e = (d ? "remove" : "add") + "EventListener";
                b = b.split(" ");
                for (var f = 0; f < b.length; f++) b[f] && a[e](b[f], c, !1)
            },
            isArray: function(a) {
                return a instanceof Array
            },
            createEl: function(a, b) {
                var c = document.createElement(b || "div");
                return a && (c.className = a), c
            },
            getScrollY: function() {
                var a = window.pageYOffset;
                return void 0 !== a ? a : document.documentElement.scrollTop
            },
            unbind: function(a, b, c) {
                e.bind(a, b, c, !0)
            },
            removeClass: function(a, b) {
                var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
                a.className = a.className.replace(c, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            },
            addClass: function(a, b) {
                e.hasClass(a, b) || (a.className += (a.className ? " " : "") + b)
            },
            hasClass: function(a, b) {
                return a.className && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
            },
            getChildByClass: function(a, b) {
                for (var c = a.firstChild; c;) {
                    if (e.hasClass(c, b)) return c;
                    c = c.nextSibling
                }
            },
            arraySearch: function(a, b, c) {
                for (var d = a.length; d--;)
                    if (a[d][c] === b) return d;
                return -1
            },
            extend: function(a, b, c) {
                for (var d in b)
                    if (b.hasOwnProperty(d)) {
                        if (c && a.hasOwnProperty(d)) continue;
                        a[d] = b[d]
                    }
            },
            easing: {
                sine: {
                    out: function(a) {
                        return Math.sin(a * (Math.PI / 2))
                    },
                    inOut: function(a) {
                        return -(Math.cos(Math.PI * a) - 1) / 2
                    }
                },
                cubic: {
                    out: function(a) {
                        return --a * a * a + 1
                    }
                }
            },
            detectFeatures: function() {
                if (e.features) return e.features;
                var a = e.createEl(),
                    b = a.style,
                    c = "",
                    d = {};
                if (d.oldIE = document.all && !document.addEventListener, d.touch = "ontouchstart" in window, window.requestAnimationFrame && (d.raf = window.requestAnimationFrame, d.caf = window.cancelAnimationFrame), d.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !d.pointerEvent) {
                    var f = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var g = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        g && g.length > 0 && (g = parseInt(g[1], 10), g >= 1 && 8 > g && (d.isOldIOSPhone = !0))
                    }
                    var h = f.match(/Android\s([0-9\.]*)/),
                        i = h ? h[1] : 0;
                    i = parseFloat(i), i >= 1 && (4.4 > i && (d.isOldAndroid = !0), d.androidVersion = i), d.isMobileOpera = /opera mini|opera mobi/i.test(f)
                }
                for (var j, k, l = ["transform", "perspective", "animationName"], m = ["", "webkit", "Moz", "ms", "O"], n = 0; 4 > n; n++) {
                    c = m[n];
                    for (var o = 0; 3 > o; o++) j = l[o], k = c + (c ? j.charAt(0).toUpperCase() + j.slice(1) : j), !d[j] && k in b && (d[j] = k);
                    c && !d.raf && (c = c.toLowerCase(), d.raf = window[c + "RequestAnimationFrame"], d.raf && (d.caf = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]))
                }
                if (!d.raf) {
                    var p = 0;
                    d.raf = function(a) {
                        var b = (new Date).getTime(),
                            c = Math.max(0, 16 - (b - p)),
                            d = window.setTimeout(function() {
                                a(b + c)
                            }, c);
                        return p = b + c, d
                    }, d.caf = function(a) {
                        clearTimeout(a)
                    }
                }
                return d.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, e.features = d, d
            }
        };
        e.detectFeatures(), e.features.oldIE && (e.bind = function(a, b, c, d) {
            b = b.split(" ");
            for (var e, f = (d ? "detach" : "attach") + "Event", g = function() {
                c.handleEvent.call(c)
            }, h = 0; h < b.length; h++)
                if (e = b[h])
                    if ("object" == typeof c && c.handleEvent) {
                        if (d) {
                            if (!c["oldIE" + e]) return !1
                        } else c["oldIE" + e] = g;
                        a[f]("on" + e, c["oldIE" + e])
                    } else a[f]("on" + e, c)
        });
        var f = this,
            g = 25,
            h = 3,
            i = {
                allowPanToNext: !0,
                spacing: .12,
                bgOpacity: 1,
                mouseUsed: !1,
                loop: !0,
                pinchToClose: !0,
                closeOnScroll: !0,
                closeOnVerticalDrag: !0,
                verticalDragRange: .75,
                hideAnimationDuration: 333,
                showAnimationDuration: 333,
                showHideOpacity: !1,
                focus: !0,
                escKey: !0,
                arrowKeys: !0,
                mainScrollEndFriction: .35,
                panEndFriction: .35,
                isClickableElement: function(a) {
                    return "A" === a.tagName
                },
                getDoubleTapZoom: function(a, b) {
                    return a ? 1 : b.initialZoomLevel < .7 ? 1 : 1.33
                },
                maxSpreadZoom: 1.33,
                modal: !0,
                scaleMode: "fit"
            };
        e.extend(i, d);
        var j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la = function() {
                return {
                    x: 0,
                    y: 0
                }
            },
            ma = la(),
            na = la(),
            oa = la(),
            pa = {},
            qa = 0,
            ra = {},
            sa = la(),
            ta = 0,
            ua = !0,
            va = [],
            wa = {},
            xa = !1,
            ya = function(a, b) {
                e.extend(f, b.publicMethods), va.push(a)
            },
            za = function(a) {
                var b = _b();
                return a > b - 1 ? a - b : 0 > a ? b + a : a
            },
            Aa = {},
            Ba = function(a, b) {
                return Aa[a] || (Aa[a] = []), Aa[a].push(b)
            },
            Ca = function(a) {
                var b = Aa[a];
                if (b) {
                    var c = Array.prototype.slice.call(arguments);
                    c.shift();
                    for (var d = 0; d < b.length; d++) b[d].apply(f, c)
                }
            },
            Da = function() {
                return (new Date).getTime()
            },
            Ea = function(a) {
                ia = a, f.bg.style.opacity = a * i.bgOpacity
            },
            Fa = function(a, b, c, d, e) {
                (!xa || e && e !== f.currItem) && (d /= e ? e.fitRatio : f.currItem.fitRatio), a[E] = u + b + "px, " + c + "px" + v + " scale(" + d + ")"
            },
            Ga = function(a) {
                da && (a && (s > f.currItem.fitRatio ? xa || (lc(f.currItem, !1, !0), xa = !0) : xa && (lc(f.currItem), xa = !1)), Fa(da, oa.x, oa.y, s))
            },
            Ha = function(a) {
                a.container && Fa(a.container.style, a.initialPosition.x, a.initialPosition.y, a.initialZoomLevel, a)
            },
            Ia = function(a, b) {
                b[E] = u + a + "px, 0px" + v
            },
            Ja = function(a, b) {
                if (!i.loop && b) {
                    var c = m + (sa.x * qa - a) / sa.x,
                        d = Math.round(a - sb.x);
                    (0 > c && d > 0 || c >= _b() - 1 && 0 > d) && (a = sb.x + d * i.mainScrollEndFriction)
                }
                sb.x = a, Ia(a, n)
            },
            Ka = function(a, b) {
                var c = tb[a] - ra[a];
                return na[a] + ma[a] + c - c * (b / t)
            },
            La = function(a, b) {
                a.x = b.x, a.y = b.y, b.id && (a.id = b.id)
            },
            Ma = function(a) {
                a.x = Math.round(a.x), a.y = Math.round(a.y)
            },
            Na = null,
            Oa = function() {
                Na && (e.unbind(document, "mousemove", Oa), e.addClass(a, "pswp--has_mouse"), i.mouseUsed = !0, Ca("mouseUsed")), Na = setTimeout(function() {
                    Na = null
                }, 100)
            },
            Pa = function() {
                e.bind(document, "keydown", f), N.transform && e.bind(f.scrollWrap, "click", f), i.mouseUsed || e.bind(document, "mousemove", Oa), e.bind(window, "resize scroll", f), Ca("bindEvents")
            },
            Qa = function() {
                e.unbind(window, "resize", f), e.unbind(window, "scroll", r.scroll), e.unbind(document, "keydown", f), e.unbind(document, "mousemove", Oa), N.transform && e.unbind(f.scrollWrap, "click", f), U && e.unbind(window, p, f), Ca("unbindEvents")
            },
            Ra = function(a, b) {
                var c = hc(f.currItem, pa, a);
                return b && (ca = c), c
            },
            Sa = function(a) {
                return a || (a = f.currItem), a.initialZoomLevel
            },
            Ta = function(a) {
                return a || (a = f.currItem), a.w > 0 ? i.maxSpreadZoom : 1
            },
            Ua = function(a, b, c, d) {
                return d === f.currItem.initialZoomLevel ? (c[a] = f.currItem.initialPosition[a], !0) : (c[a] = Ka(a, d), c[a] > b.min[a] ? (c[a] = b.min[a], !0) : c[a] < b.max[a] && (c[a] = b.max[a], !0))
            },
            Va = function() {
                if (E) {
                    var b = N.perspective && !G;
                    return u = "translate" + (b ? "3d(" : "("), void(v = N.perspective ? ", 0px)" : ")")
                }
                E = "left", e.addClass(a, "pswp--ie"), Ia = function(a, b) {
                    b.left = a + "px"
                }, Ha = function(a) {
                    var b = a.fitRatio > 1 ? 1 : a.fitRatio,
                        c = a.container.style,
                        d = b * a.w,
                        e = b * a.h;
                    c.width = d + "px", c.height = e + "px", c.left = a.initialPosition.x + "px", c.top = a.initialPosition.y + "px"
                }, Ga = function() {
                    if (da) {
                        var a = da,
                            b = f.currItem,
                            c = b.fitRatio > 1 ? 1 : b.fitRatio,
                            d = c * b.w,
                            e = c * b.h;
                        a.width = d + "px", a.height = e + "px", a.left = oa.x + "px", a.top = oa.y + "px"
                    }
                }
            },
            Wa = function(a) {
                var b = "";
                i.escKey && 27 === a.keyCode ? b = "close" : i.arrowKeys && (37 === a.keyCode ? b = "prev" : 39 === a.keyCode && (b = "next")), b && (a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || (a.preventDefault ? a.preventDefault() : a.returnValue = !1, f[b]()))
            },
            Xa = function(a) {
                a && (X || W || ea || S) && (a.preventDefault(), a.stopPropagation())
            },
            Ya = function() {
                f.setScrollOffset(0, e.getScrollY())
            },
            Za = {},
            $a = 0,
            _a = function(a) {
                Za[a] && (Za[a].raf && I(Za[a].raf), $a--, delete Za[a])
            },
            ab = function(a) {
                Za[a] && _a(a), Za[a] || ($a++, Za[a] = {})
            },
            bb = function() {
                for (var a in Za) Za.hasOwnProperty(a) && _a(a)
            },
            cb = function(a, b, c, d, e, f, g) {
                var h, i = Da();
                ab(a);
                var j = function() {
                    if (Za[a]) {
                        if (h = Da() - i, h >= d) return _a(a), f(c), void(g && g());
                        f((c - b) * e(h / d) + b), Za[a].raf = H(j)
                    }
                };
                j()
            },
            db = {
                shout: Ca,
                listen: Ba,
                viewportSize: pa,
                options: i,
                isMainScrollAnimating: function() {
                    return ea
                },
                getZoomLevel: function() {
                    return s
                },
                getCurrentIndex: function() {
                    return m
                },
                isDragging: function() {
                    return U
                },
                isZooming: function() {
                    return _
                },
                setScrollOffset: function(a, b) {
                    ra.x = a, M = ra.y = b, Ca("updateScrollOffset", ra)
                },
                applyZoomPan: function(a, b, c, d) {
                    oa.x = b, oa.y = c, s = a, Ga(d)
                },
                init: function() {
                    if (!j && !k) {
                        var c;
                        f.framework = e, f.template = a, f.bg = e.getChildByClass(a, "pswp__bg"), J = a.className, j = !0, N = e.detectFeatures(), H = N.raf, I = N.caf, E = N.transform, L = N.oldIE, f.scrollWrap = e.getChildByClass(a, "pswp__scroll-wrap"), f.container = e.getChildByClass(f.scrollWrap, "pswp__container"), n = f.container.style, f.itemHolders = y = [{
                            el: f.container.children[0],
                            wrap: 0,
                            index: -1
                        }, {
                            el: f.container.children[1],
                            wrap: 0,
                            index: -1
                        }, {
                            el: f.container.children[2],
                            wrap: 0,
                            index: -1
                        }], y[0].el.style.display = y[2].el.style.display = "none", Va(), r = {
                            resize: f.updateSize,
                            scroll: Ya,
                            keydown: Wa,
                            click: Xa
                        };
                        var d = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
                        for (N.animationName && N.transform && !d || (i.showAnimationDuration = i.hideAnimationDuration = 0), c = 0; c < va.length; c++) f["init" + va[c]]();
                        if (b) {
                            var g = f.ui = new b(f, e);
                            g.init()
                        }
                        Ca("firstUpdate"), m = m || i.index || 0, (isNaN(m) || 0 > m || m >= _b()) && (m = 0), f.currItem = $b(m), (N.isOldIOSPhone || N.isOldAndroid) && (ua = !1), a.setAttribute("aria-hidden", "false"), i.modal && (ua ? a.style.position = "fixed" : (a.style.position = "absolute", a.style.top = e.getScrollY() + "px")), void 0 === M && (Ca("initialLayout"), M = K = e.getScrollY());
                        var l = "pswp--open ";
                        for (i.mainClass && (l += i.mainClass + " "), i.showHideOpacity && (l += "pswp--animate_opacity "), l += G ? "pswp--touch" : "pswp--notouch", l += N.animationName ? " pswp--css_animation" : "", l += N.svg ? " pswp--svg" : "", e.addClass(a, l), f.updateSize(), o = -1, ta = null, c = 0; h > c; c++) Ia((c + o) * sa.x, y[c].el.style);
                        L || e.bind(f.scrollWrap, q, f), Ba("initialZoomInEnd", function() {
                            f.setContent(y[0], m - 1), f.setContent(y[2], m + 1), y[0].el.style.display = y[2].el.style.display = "block", i.focus && a.focus(), Pa()
                        }), f.setContent(y[1], m), f.updateCurrItem(), Ca("afterInit"), ua || (w = setInterval(function() {
                            $a || U || _ || s !== f.currItem.initialZoomLevel || f.updateSize()
                        }, 1e3)), e.addClass(a, "pswp--visible")
                    }
                },
                close: function() {
                    j && (j = !1, k = !0, Ca("close"), Qa(), bc(f.currItem, null, !0, f.destroy))
                },
                destroy: function() {
                    Ca("destroy"), Wb && clearTimeout(Wb), a.setAttribute("aria-hidden", "true"), a.className = J, w && clearInterval(w), e.unbind(f.scrollWrap, q, f), e.unbind(window, "scroll", f), yb(), bb(), Aa = null
                },
                panTo: function(a, b, c) {
                    c || (a > ca.min.x ? a = ca.min.x : a < ca.max.x && (a = ca.max.x), b > ca.min.y ? b = ca.min.y : b < ca.max.y && (b = ca.max.y)), oa.x = a, oa.y = b, Ga()
                },
                handleEvent: function(a) {
                    a = a || window.event, r[a.type] && r[a.type](a)
                },
                goTo: function(a) {
                    a = za(a);
                    var b = a - m;
                    ta = b, m = a, f.currItem = $b(m), qa -= b, Ja(sa.x * qa), bb(), ea = !1, f.updateCurrItem()
                },
                next: function() {
                    f.goTo(m + 1)
                },
                prev: function() {
                    f.goTo(m - 1)
                },
                updateCurrZoomItem: function(a) {
                    if (a && Ca("beforeChange", 0), y[1].el.children.length) {
                        var b = y[1].el.children[0];
                        da = e.hasClass(b, "pswp__zoom-wrap") ? b.style : null
                    } else da = null;
                    ca = f.currItem.bounds, t = s = f.currItem.initialZoomLevel, oa.x = ca.center.x, oa.y = ca.center.y, a && Ca("afterChange")
                },
                invalidateCurrItems: function() {
                    x = !0;
                    for (var a = 0; h > a; a++) y[a].item && (y[a].item.needsUpdate = !0)
                },
                updateCurrItem: function(a) {
                    if (0 !== ta) {
                        var b, c = Math.abs(ta);
                        if (!(a && 2 > c)) {
                            f.currItem = $b(m), xa = !1, Ca("beforeChange", ta), c >= h && (o += ta + (ta > 0 ? -h : h), c = h);
                            for (var d = 0; c > d; d++) ta > 0 ? (b = y.shift(), y[h - 1] = b, o++, Ia((o + 2) * sa.x, b.el.style), f.setContent(b, m - c + d + 1 + 1)) : (b = y.pop(), y.unshift(b), o--, Ia(o * sa.x, b.el.style), f.setContent(b, m + c - d - 1 - 1));
                            if (da && 1 === Math.abs(ta)) {
                                var e = $b(z);
                                e.initialZoomLevel !== s && (hc(e, pa), lc(e), Ha(e))
                            }
                            ta = 0, f.updateCurrZoomItem(), z = m, Ca("afterChange")
                        }
                    }
                },
                updateSize: function(b) {
                    if (!ua && i.modal) {
                        var c = e.getScrollY();
                        if (M !== c && (a.style.top = c + "px", M = c), !b && wa.x === window.innerWidth && wa.y === window.innerHeight) return;
                        wa.x = window.innerWidth, wa.y = window.innerHeight, a.style.height = wa.y + "px"
                    }
                    if (pa.x = f.scrollWrap.clientWidth, pa.y = f.scrollWrap.clientHeight, Ya(), sa.x = pa.x + Math.round(pa.x * i.spacing), sa.y = pa.y, Ja(sa.x * qa), Ca("beforeResize"), void 0 !== o) {
                        for (var d, g, j, k = 0; h > k; k++) d = y[k], Ia((k + o) * sa.x, d.el.style), j = m + k - 1, i.loop && _b() > 2 && (j = za(j)), g = $b(j), g && (x || g.needsUpdate || !g.bounds) ? (f.cleanSlide(g), f.setContent(d, j), 1 === k && (f.currItem = g, f.updateCurrZoomItem(!0)), g.needsUpdate = !1) : -1 === d.index && j >= 0 && f.setContent(d, j), g && g.container && (hc(g, pa), lc(g), Ha(g));
                        x = !1
                    }
                    t = s = f.currItem.initialZoomLevel, ca = f.currItem.bounds, ca && (oa.x = ca.center.x, oa.y = ca.center.y, Ga(!0)), Ca("resize")
                },
                zoomTo: function(a, b, c, d, f) {
                    b && (t = s, tb.x = Math.abs(b.x) - oa.x, tb.y = Math.abs(b.y) - oa.y, La(na, oa));
                    var g = Ra(a, !1),
                        h = {};
                    Ua("x", g, h, a), Ua("y", g, h, a);
                    var i = s,
                        j = {
                            x: oa.x,
                            y: oa.y
                        };
                    Ma(h);
                    var k = function(b) {
                        1 === b ? (s = a, oa.x = h.x, oa.y = h.y) : (s = (a - i) * b + i, oa.x = (h.x - j.x) * b + j.x, oa.y = (h.y - j.y) * b + j.y), f && f(b), Ga(1 === b)
                    };
                    c ? cb("customZoomTo", 0, 1, c, d || e.easing.sine.inOut, k) : k(1)
                }
            },
            eb = 30,
            fb = 10,
            gb = {},
            hb = {},
            ib = {},
            jb = {},
            kb = {},
            lb = [],
            mb = {},
            nb = [],
            ob = {},
            pb = 0,
            qb = la(),
            rb = 0,
            sb = la(),
            tb = la(),
            ub = la(),
            vb = function(a, b) {
                return a.x === b.x && a.y === b.y
            },
            wb = function(a, b) {
                return Math.abs(a.x - b.x) < g && Math.abs(a.y - b.y) < g
            },
            xb = function(a, b) {
                return ob.x = Math.abs(a.x - b.x), ob.y = Math.abs(a.y - b.y), Math.sqrt(ob.x * ob.x + ob.y * ob.y)
            },
            yb = function() {
                Y && (I(Y), Y = null)
            },
            zb = function() {
                U && (Y = H(zb), Pb())
            },
            Ab = function() {
                return !("fit" === i.scaleMode && s === f.currItem.initialZoomLevel)
            },
            Bb = function(a, b) {
                return !(!a || a === document) && (!(a.getAttribute("class") && a.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (b(a) ? a : Bb(a.parentNode, b)))
            },
            Cb = {},
            Db = function(a, b) {
                return Cb.prevent = !Bb(a.target, i.isClickableElement), Ca("preventDragEvent", a, b, Cb), Cb.prevent
            },
            Eb = function(a, b) {
                return b.x = a.pageX, b.y = a.pageY, b.id = a.identifier, b
            },
            Fb = function(a, b, c) {
                c.x = .5 * (a.x + b.x), c.y = .5 * (a.y + b.y)
            },
            Gb = function(a, b, c) {
                if (a - P > 50) {
                    var d = nb.length > 2 ? nb.shift() : {};
                    d.x = b, d.y = c, nb.push(d), P = a
                }
            },
            Hb = function() {
                var a = oa.y - f.currItem.initialPosition.y;
                return 1 - Math.abs(a / (pa.y / 2))
            },
            Ib = {},
            Jb = {},
            Kb = [],
            Lb = function(a) {
                for (; Kb.length > 0;) Kb.pop();
                return F ? (ka = 0, lb.forEach(function(a) {
                    0 === ka ? Kb[0] = a : 1 === ka && (Kb[1] = a), ka++
                })) : a.type.indexOf("touch") > -1 ? a.touches && a.touches.length > 0 && (Kb[0] = Eb(a.touches[0], Ib), a.touches.length > 1 && (Kb[1] = Eb(a.touches[1], Jb))) : (Ib.x = a.pageX, Ib.y = a.pageY, Ib.id = "", Kb[0] = Ib), Kb
            },
            Mb = function(a, b) {
                var c, d, e, g, h = 0,
                    j = oa[a] + b[a],
                    k = b[a] > 0,
                    l = sb.x + b.x,
                    m = sb.x - mb.x;
                return c = j > ca.min[a] || j < ca.max[a] ? i.panEndFriction : 1, j = oa[a] + b[a] * c, !i.allowPanToNext && s !== f.currItem.initialZoomLevel || (da ? "h" !== fa || "x" !== a || W || (k ? (j > ca.min[a] && (c = i.panEndFriction, h = ca.min[a] - j, d = ca.min[a] - na[a]), (0 >= d || 0 > m) && _b() > 1 ? (g = l, 0 > m && l > mb.x && (g = mb.x)) : ca.min.x !== ca.max.x && (e = j)) : (j < ca.max[a] && (c = i.panEndFriction, h = j - ca.max[a], d = na[a] - ca.max[a]), (0 >= d || m > 0) && _b() > 1 ? (g = l, m > 0 && l < mb.x && (g = mb.x)) : ca.min.x !== ca.max.x && (e = j))) : g = l, "x" !== a) ? void(ea || Z || s > f.currItem.fitRatio && (oa[a] += b[a] * c)) : (void 0 !== g && (Ja(g, !0), Z = g !== mb.x), ca.min.x !== ca.max.x && (void 0 !== e ? oa.x = e : Z || (oa.x += b.x * c)), void 0 !== g)
            },
            Nb = function(a) {
                if (!("mousedown" === a.type && a.button > 0)) {
                    if (Zb) return void a.preventDefault();
                    if (!T || "mousedown" !== a.type) {
                        if (Db(a, !0) && a.preventDefault(), Ca("pointerDown"), F) {
                            var b = e.arraySearch(lb, a.pointerId, "id");
                            0 > b && (b = lb.length), lb[b] = {
                                x: a.pageX,
                                y: a.pageY,
                                id: a.pointerId
                            }
                        }
                        var c = Lb(a),
                            d = c.length;
                        $ = null, bb(), U && 1 !== d || (U = ga = !0, e.bind(window, p, f), R = ja = ha = S = Z = X = V = W = !1, fa = null, Ca("firstTouchStart", c), La(na, oa), ma.x = ma.y = 0, La(jb, c[0]), La(kb, jb), mb.x = sa.x * qa, nb = [{
                            x: jb.x,
                            y: jb.y
                        }], P = O = Da(), Ra(s, !0), yb(), zb()), !_ && d > 1 && !ea && !Z && (t = s, W = !1, _ = V = !0, ma.y = ma.x = 0, La(na, oa), La(gb, c[0]), La(hb, c[1]), Fb(gb, hb, ub), tb.x = Math.abs(ub.x) - oa.x, tb.y = Math.abs(ub.y) - oa.y, aa = ba = xb(gb, hb))
                    }
                }
            },
            Ob = function(a) {
                if (a.preventDefault(), F) {
                    var b = e.arraySearch(lb, a.pointerId, "id");
                    if (b > -1) {
                        var c = lb[b];
                        c.x = a.pageX, c.y = a.pageY
                    }
                }
                if (U) {
                    var d = Lb(a);
                    if (fa || X || _) $ = d;
                    else if (sb.x !== sa.x * qa) fa = "h";
                    else {
                        var f = Math.abs(d[0].x - jb.x) - Math.abs(d[0].y - jb.y);
                        Math.abs(f) >= fb && (fa = f > 0 ? "h" : "v", $ = d)
                    }
                }
            },
            Pb = function() {
                if ($) {
                    var a = $.length;
                    if (0 !== a)
                        if (La(gb, $[0]), ib.x = gb.x - jb.x, ib.y = gb.y - jb.y, _ && a > 1) {
                            if (jb.x = gb.x, jb.y = gb.y, !ib.x && !ib.y && vb($[1], hb)) return;
                            La(hb, $[1]), W || (W = !0, Ca("zoomGestureStarted"));
                            var b = xb(gb, hb),
                                c = Ub(b);
                            c > f.currItem.initialZoomLevel + f.currItem.initialZoomLevel / 15 && (ja = !0);
                            var d = 1,
                                e = Sa(),
                                g = Ta();
                            if (e > c)
                                if (i.pinchToClose && !ja && t <= f.currItem.initialZoomLevel) {
                                    var h = e - c,
                                        j = 1 - h / (e / 1.2);
                                    Ea(j), Ca("onPinchClose", j), ha = !0
                                } else d = (e - c) / e, d > 1 && (d = 1), c = e - d * (e / 3);
                            else c > g && (d = (c - g) / (6 * e), d > 1 && (d = 1), c = g + d * e);
                            0 > d && (d = 0), aa = b, Fb(gb, hb, qb), ma.x += qb.x - ub.x, ma.y += qb.y - ub.y, La(ub, qb), oa.x = Ka("x", c), oa.y = Ka("y", c), R = c > s, s = c, Ga()
                        } else {
                            if (!fa) return;
                            if (ga && (ga = !1, Math.abs(ib.x) >= fb && (ib.x -= $[0].x - kb.x), Math.abs(ib.y) >= fb && (ib.y -= $[0].y - kb.y)), jb.x = gb.x, jb.y = gb.y, 0 === ib.x && 0 === ib.y) return;
                            if ("v" === fa && i.closeOnVerticalDrag && !Ab()) {
                                ma.y += ib.y, oa.y += ib.y;
                                var k = Hb();
                                return S = !0, Ca("onVerticalDrag", k), Ea(k), void Ga()
                            }
                            Gb(Da(), gb.x, gb.y), X = !0, ca = f.currItem.bounds;
                            var l = Mb("x", ib);
                            l || (Mb("y", ib), Ma(oa), Ga())
                        }
                }
            },
            Qb = function(a) {
                if (N.isOldAndroid) {
                    if (T && "mouseup" === a.type) return;
                    a.type.indexOf("touch") > -1 && (clearTimeout(T), T = setTimeout(function() {
                        T = 0
                    }, 600))
                }
                Ca("pointerUp"), Db(a, !1) && a.preventDefault();
                var b;
                if (F) {
                    var c = e.arraySearch(lb, a.pointerId, "id");
                    if (c > -1)
                        if (b = lb.splice(c, 1)[0], navigator.pointerEnabled) b.type = a.pointerType || "mouse";
                        else {
                            var d = {
                                4: "mouse",
                                2: "touch",
                                3: "pen"
                            };
                            b.type = d[a.pointerType], b.type || (b.type = a.pointerType || "mouse")
                        }
                }
                var g, h = Lb(a),
                    j = h.length;
                if ("mouseup" === a.type && (j = 0), 2 === j) return $ = null, !0;
                1 === j && La(kb, h[0]), 0 !== j || fa || ea || (b || ("mouseup" === a.type ? b = {
                    x: a.pageX,
                    y: a.pageY,
                    type: "mouse"
                } : a.changedTouches && a.changedTouches[0] && (b = {
                    x: a.changedTouches[0].pageX,
                    y: a.changedTouches[0].pageY,
                    type: "touch"
                })), Ca("touchRelease", a, b));
                var k = -1;
                if (0 === j && (U = !1, e.unbind(window, p, f), yb(), _ ? k = 0 : -1 !== rb && (k = Da() - rb)), rb = 1 === j ? Da() : -1, g = -1 !== k && 150 > k ? "zoom" : "swipe", _ && 2 > j && (_ = !1, 1 === j && (g = "zoomPointerUp"), Ca("zoomGestureEnded")), $ = null, X || W || ea || S)
                    if (bb(), Q || (Q = Rb()), Q.calculateSwipeSpeed("x"), S) {
                        var l = Hb();
                        if (l < i.verticalDragRange) f.close();
                        else {
                            var m = oa.y,
                                n = ia;
                            cb("verticalDrag", 0, 1, 300, e.easing.cubic.out, function(a) {
                                oa.y = (f.currItem.initialPosition.y - m) * a + m, Ea((1 - n) * a + n), Ga()
                            }), Ca("onVerticalDrag", 1)
                        }
                    } else {
                        if ((Z || ea) && 0 === j) {
                            var o = Tb(g, Q);
                            if (o) return;
                            g = "zoomPointerUp"
                        }
                        if (!ea) return "swipe" !== g ? void Vb() : void(!Z && s > f.currItem.fitRatio && Sb(Q))
                    }
            },
            Rb = function() {
                var a, b, c = {
                    lastFlickOffset: {},
                    lastFlickDist: {},
                    lastFlickSpeed: {},
                    slowDownRatio: {},
                    slowDownRatioReverse: {},
                    speedDecelerationRatio: {},
                    speedDecelerationRatioAbs: {},
                    distanceOffset: {},
                    backAnimDestination: {},
                    backAnimStarted: {},
                    calculateSwipeSpeed: function(d) {
                        nb.length > 1 ? (a = Da() - P + 50, b = nb[nb.length - 2][d]) : (a = Da() - O, b = kb[d]), c.lastFlickOffset[d] = jb[d] - b, c.lastFlickDist[d] = Math.abs(c.lastFlickOffset[d]), c.lastFlickDist[d] > 20 ? c.lastFlickSpeed[d] = c.lastFlickOffset[d] / a : c.lastFlickSpeed[d] = 0, Math.abs(c.lastFlickSpeed[d]) < .1 && (c.lastFlickSpeed[d] = 0), c.slowDownRatio[d] = .95, c.slowDownRatioReverse[d] = 1 - c.slowDownRatio[d], c.speedDecelerationRatio[d] = 1
                    },
                    calculateOverBoundsAnimOffset: function(a, b) {
                        c.backAnimStarted[a] || (oa[a] > ca.min[a] ? c.backAnimDestination[a] = ca.min[a] : oa[a] < ca.max[a] && (c.backAnimDestination[a] = ca.max[a]), void 0 !== c.backAnimDestination[a] && (c.slowDownRatio[a] = .7, c.slowDownRatioReverse[a] = 1 - c.slowDownRatio[a], c.speedDecelerationRatioAbs[a] < .05 && (c.lastFlickSpeed[a] = 0, c.backAnimStarted[a] = !0, cb("bounceZoomPan" + a, oa[a], c.backAnimDestination[a], b || 300, e.easing.sine.out, function(b) {
                            oa[a] = b, Ga()
                        }))))
                    },
                    calculateAnimOffset: function(a) {
                        c.backAnimStarted[a] || (c.speedDecelerationRatio[a] = c.speedDecelerationRatio[a] * (c.slowDownRatio[a] + c.slowDownRatioReverse[a] - c.slowDownRatioReverse[a] * c.timeDiff / 10), c.speedDecelerationRatioAbs[a] = Math.abs(c.lastFlickSpeed[a] * c.speedDecelerationRatio[a]), c.distanceOffset[a] = c.lastFlickSpeed[a] * c.speedDecelerationRatio[a] * c.timeDiff, oa[a] += c.distanceOffset[a])
                    },
                    panAnimLoop: function() {
                        return Za.zoomPan && (Za.zoomPan.raf = H(c.panAnimLoop), c.now = Da(), c.timeDiff = c.now - c.lastNow, c.lastNow = c.now, c.calculateAnimOffset("x"), c.calculateAnimOffset("y"), Ga(), c.calculateOverBoundsAnimOffset("x"), c.calculateOverBoundsAnimOffset("y"), c.speedDecelerationRatioAbs.x < .05 && c.speedDecelerationRatioAbs.y < .05) ? (oa.x = Math.round(oa.x), oa.y = Math.round(oa.y), Ga(), void _a("zoomPan")) : void 0
                    }
                };
                return c
            },
            Sb = function(a) {
                return a.calculateSwipeSpeed("y"), ca = f.currItem.bounds, a.backAnimDestination = {}, a.backAnimStarted = {}, Math.abs(a.lastFlickSpeed.x) <= .05 && Math.abs(a.lastFlickSpeed.y) <= .05 ? (a.speedDecelerationRatioAbs.x = a.speedDecelerationRatioAbs.y = 0, a.calculateOverBoundsAnimOffset("x"), a.calculateOverBoundsAnimOffset("y"), !0) : (ab("zoomPan"), a.lastNow = Da(), void a.panAnimLoop())
            },
            Tb = function(a, b) {
                var c;
                ea || (pb = m);
                var d;
                if ("swipe" === a) {
                    var g = jb.x - kb.x,
                        h = b.lastFlickDist.x < 10;
                    g > eb && (h || b.lastFlickOffset.x > 20) ? d = -1 : -eb > g && (h || b.lastFlickOffset.x < -20) && (d = 1)
                }
                var j;
                d && (m += d, 0 > m ? (m = i.loop ? _b() - 1 : 0, j = !0) : m >= _b() && (m = i.loop ? 0 : _b() - 1, j = !0), (!j || i.loop) && (ta += d, qa -= d, c = !0));
                var k, l = sa.x * qa,
                    n = Math.abs(l - sb.x);
                return c || l > sb.x == b.lastFlickSpeed.x > 0 ? (k = Math.abs(b.lastFlickSpeed.x) > 0 ? n / Math.abs(b.lastFlickSpeed.x) : 333, k = Math.min(k, 400), k = Math.max(k, 250)) : k = 333, pb === m && (c = !1), ea = !0, Ca("mainScrollAnimStart"), cb("mainScroll", sb.x, l, k, e.easing.cubic.out, Ja, function() {
                    bb(), ea = !1, pb = -1, (c || pb !== m) && f.updateCurrItem(), Ca("mainScrollAnimComplete")
                }), c && f.updateCurrItem(!0), c
            },
            Ub = function(a) {
                return 1 / ba * a * t
            },
            Vb = function() {
                var a = s,
                    b = Sa(),
                    c = Ta();
                b > s ? a = b : s > c && (a = c);
                var d, g = 1,
                    h = ia;
                return ha && !R && !ja && b > s ? (f.close(), !0) : (ha && (d = function(a) {
                    Ea((g - h) * a + h)
                }), f.zoomTo(a, 0, 200, e.easing.cubic.out, d), !0)
            };
        ya("Gestures", {
            publicMethods: {
                initGestures: function() {
                    var a = function(a, b, c, d, e) {
                        A = a + b, B = a + c, C = a + d, D = e ? a + e : ""
                    };
                    F = N.pointerEvent, F && N.touch && (N.touch = !1), F ? navigator.pointerEnabled ? a("pointer", "down", "move", "up", "cancel") : a("MSPointer", "Down", "Move", "Up", "Cancel") : N.touch ? (a("touch", "start", "move", "end", "cancel"), G = !0) : a("mouse", "down", "move", "up"), p = B + " " + C + " " + D, q = A, F && !G && (G = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), f.likelyTouchDevice = G, r[A] = Nb, r[B] = Ob, r[C] = Qb, D && (r[D] = r[C]), N.touch && (q += " mousedown", p += " mousemove mouseup", r.mousedown = r[A], r.mousemove = r[B], r.mouseup = r[C]), G || (i.allowPanToNext = !1)
                }
            }
        });
        var Wb, Xb, Yb, Zb, $b, _b, ac, bc = function(b, c, d, g) {
                Wb && clearTimeout(Wb), Zb = !0, Yb = !0;
                var h;
                b.initialLayout ? (h = b.initialLayout, b.initialLayout = null) : h = i.getThumbBoundsFn && i.getThumbBoundsFn(m);
                var j = d ? i.hideAnimationDuration : i.showAnimationDuration,
                    k = function() {
                        _a("initialZoom"), d ? (f.template.removeAttribute("style"), f.bg.removeAttribute("style")) : (Ea(1), c && (c.style.display = "block"), e.addClass(a, "pswp--animated-in"), Ca("initialZoom" + (d ? "OutEnd" : "InEnd"))), g && g(), Zb = !1
                    };
                if (!j || !h || void 0 === h.x) return Ca("initialZoom" + (d ? "Out" : "In")), s = b.initialZoomLevel, La(oa, b.initialPosition), Ga(), a.style.opacity = d ? 0 : 1, Ea(1), void(j ? setTimeout(function() {
                    k()
                }, j) : k());
                var n = function() {
                    var c = l,
                        g = !f.currItem.src || f.currItem.loadError || i.showHideOpacity;
                    b.miniImg && (b.miniImg.style.webkitBackfaceVisibility = "hidden"), d || (s = h.w / b.w, oa.x = h.x, oa.y = h.y - K, f[g ? "template" : "bg"].style.opacity = .001, Ga()), ab("initialZoom"), d && !c && e.removeClass(a, "pswp--animated-in"), g && (d ? e[(c ? "remove" : "add") + "Class"](a, "pswp--animate_opacity") : setTimeout(function() {
                        e.addClass(a, "pswp--animate_opacity")
                    }, 30)), Wb = setTimeout(function() {
                        if (Ca("initialZoom" + (d ? "Out" : "In")), d) {
                            var f = h.w / b.w,
                                i = {
                                    x: oa.x,
                                    y: oa.y
                                },
                                l = s,
                                m = ia,
                                n = function(b) {
                                    1 === b ? (s = f, oa.x = h.x, oa.y = h.y - M) : (s = (f - l) * b + l, oa.x = (h.x - i.x) * b + i.x, oa.y = (h.y - M - i.y) * b + i.y), Ga(), g ? a.style.opacity = 1 - b : Ea(m - b * m)
                                };
                            c ? cb("initialZoom", 0, 1, j, e.easing.cubic.out, n, k) : (n(1), Wb = setTimeout(k, j + 20))
                        } else s = b.initialZoomLevel, La(oa, b.initialPosition), Ga(), Ea(1), g ? a.style.opacity = 1 : Ea(1), Wb = setTimeout(k, j + 20)
                    }, d ? 25 : 90)
                };
                n()
            },
            cc = {},
            dc = [],
            ec = {
                index: 0,
                errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                forceProgressiveLoading: !1,
                preload: [1, 1],
                getNumItemsFn: function() {
                    return Xb.length
                }
            },
            fc = function() {
                return {
                    center: {
                        x: 0,
                        y: 0
                    },
                    max: {
                        x: 0,
                        y: 0
                    },
                    min: {
                        x: 0,
                        y: 0
                    }
                }
            },
            gc = function(a, b, c) {
                var d = a.bounds;
                d.center.x = Math.round((cc.x - b) / 2), d.center.y = Math.round((cc.y - c) / 2) + a.vGap.top, d.max.x = b > cc.x ? Math.round(cc.x - b) : d.center.x, d.max.y = c > cc.y ? Math.round(cc.y - c) + a.vGap.top : d.center.y, d.min.x = b > cc.x ? 0 : d.center.x, d.min.y = c > cc.y ? a.vGap.top : d.center.y
            },
            hc = function(a, b, c) {
                if (a.src && !a.loadError) {
                    var d = !c;
                    if (d && (a.vGap || (a.vGap = {
                            top: 0,
                            bottom: 0
                        }), Ca("parseVerticalMargin", a)), cc.x = b.x, cc.y = b.y - a.vGap.top - a.vGap.bottom, d) {
                        var e = cc.x / a.w,
                            f = cc.y / a.h;
                        a.fitRatio = f > e ? e : f;
                        var g = i.scaleMode;
                        "orig" === g ? c = 1 : "fit" === g && (c = a.fitRatio), c > 1 && (c = 1), a.initialZoomLevel = c, a.bounds || (a.bounds = fc())
                    }
                    if (!c) return;
                    return gc(a, a.w * c, a.h * c), d && c === a.initialZoomLevel && (a.initialPosition = a.bounds.center), a.bounds
                }
                return a.w = a.h = 0, a.initialZoomLevel = a.fitRatio = 1, a.bounds = fc(), a.initialPosition = a.bounds.center, a.bounds
            },
            ic = function(a, b, c, d, e, g) {
                b.loadError || d && (b.imageAppended = !0, lc(b, d, b === f.currItem && xa), c.appendChild(d), g && setTimeout(function() {
                    b && b.loaded && b.placeholder && (b.placeholder.style.display = "none", b.placeholder = null)
                }, 500))
            },
            jc = function(a) {
                a.loading = !0, a.loaded = !1;
                var b = a.img = e.createEl("pswp__img", "img"),
                    c = function() {
                        a.loading = !1, a.loaded = !0, a.loadComplete ? a.loadComplete(a) : a.img = null, b.onload = b.onerror = null, b = null
                    };
                return b.onload = c, b.onerror = function() {
                    a.loadError = !0, c()
                }, b.src = a.src, b
            },
            kc = function(a, b) {
                return a.src && a.loadError && a.container ? (b && (a.container.innerHTML = ""), a.container.innerHTML = i.errorMsg.replace("%url%", a.src), !0) : void 0
            },
            lc = function(a, b, c) {
                if (a.src) {
                    b || (b = a.container.lastChild);
                    var d = c ? a.w : Math.round(a.w * a.fitRatio),
                        e = c ? a.h : Math.round(a.h * a.fitRatio);
                    a.placeholder && !a.loaded && (a.placeholder.style.width = d + "px", a.placeholder.style.height = e + "px"), b.style.width = d + "px", b.style.height = e + "px"
                }
            },
            mc = function() {
                if (dc.length) {
                    for (var a, b = 0; b < dc.length; b++) a = dc[b], a.holder.index === a.index && ic(a.index, a.item, a.baseDiv, a.img, !1, a.clearPlaceholder);
                    dc = []
                }
            };
        ya("Controller", {
            publicMethods: {
                lazyLoadItem: function(a) {
                    a = za(a);
                    var b = $b(a);
                    b && (!b.loaded && !b.loading || x) && (Ca("gettingData", a, b), b.src && jc(b))
                },
                initController: function() {
                    e.extend(i, ec, !0), f.items = Xb = c, $b = f.getItemAt, _b = i.getNumItemsFn, ac = i.loop, _b() < 3 && (i.loop = !1), Ba("beforeChange", function(a) {
                        var b, c = i.preload,
                            d = null === a || a >= 0,
                            e = Math.min(c[0], _b()),
                            g = Math.min(c[1], _b());
                        for (b = 1;
                             (d ? g : e) >= b; b++) f.lazyLoadItem(m + b);
                        for (b = 1;
                             (d ? e : g) >= b; b++) f.lazyLoadItem(m - b)
                    }), Ba("initialLayout", function() {
                        f.currItem.initialLayout = i.getThumbBoundsFn && i.getThumbBoundsFn(m)
                    }), Ba("mainScrollAnimComplete", mc), Ba("initialZoomInEnd", mc), Ba("destroy", function() {
                        for (var a, b = 0; b < Xb.length; b++) a = Xb[b], a.container && (a.container = null), a.placeholder && (a.placeholder = null), a.img && (a.img = null), a.preloader && (a.preloader = null), a.loadError && (a.loaded = a.loadError = !1);
                        dc = null
                    })
                },
                getItemAt: function(a) {
                    return a >= 0 && void 0 !== Xb[a] && Xb[a]
                },
                allowProgressiveImg: function() {
                    return i.forceProgressiveLoading || !G || i.mouseUsed || screen.width > 1200
                },
                setContent: function(a, b) {
                    i.loop && (b = za(b));
                    var c = f.getItemAt(a.index);
                    c && (c.container = null);
                    var d, g = f.getItemAt(b);
                    if (!g) return void(a.el.innerHTML = "");
                    Ca("gettingData", b, g), a.index = b, a.item = g;
                    var h = g.container = e.createEl("pswp__zoom-wrap");
                    if (!g.src && g.html && (g.html.tagName ? h.appendChild(g.html) : h.innerHTML = g.html), kc(g), hc(g, pa), !g.src || g.loadError || g.loaded) g.src && !g.loadError && (d = e.createEl("pswp__img", "img"), d.style.opacity = 1, d.src = g.src, lc(g, d), ic(b, g, h, d, !0));
                    else {
                        if (g.loadComplete = function(c) {
                                if (j) {
                                    if (a && a.index === b) {
                                        if (kc(c, !0)) return c.loadComplete = c.img = null, hc(c, pa), Ha(c), void(a.index === m && f.updateCurrZoomItem());
                                        c.imageAppended ? !Zb && c.placeholder && (c.placeholder.style.display = "none", c.placeholder = null) : N.transform && (ea || Zb) ? dc.push({
                                            item: c,
                                            baseDiv: h,
                                            img: c.img,
                                            index: b,
                                            holder: a,
                                            clearPlaceholder: !0
                                        }) : ic(b, c, h, c.img, ea || Zb, !0)
                                    }
                                    c.loadComplete = null, c.img = null, Ca("imageLoadComplete", b, c)
                                }
                            }, e.features.transform) {
                            var k = "pswp__img pswp__img--placeholder";
                            k += g.msrc ? "" : " pswp__img--placeholder--blank";
                            var l = e.createEl(k, g.msrc ? "img" : "");
                            g.msrc && (l.src = g.msrc), lc(g, l), h.appendChild(l), g.placeholder = l
                        }
                        g.loading || jc(g), f.allowProgressiveImg() && (!Yb && N.transform ? dc.push({
                            item: g,
                            baseDiv: h,
                            img: g.img,
                            index: b,
                            holder: a
                        }) : ic(b, g, h, g.img, !0, !0))
                    }
                    Yb || b !== m ? Ha(g) : (da = h.style, bc(g, d || g.img)), a.el.innerHTML = "", a.el.appendChild(h)
                },
                cleanSlide: function(a) {
                    a.img && (a.img.onload = a.img.onerror = null), a.loaded = a.loading = a.img = a.imageAppended = !1
                }
            }
        });
        var nc, oc = {},
            pc = function(a, b, c) {
                var d = document.createEvent("CustomEvent"),
                    e = {
                        origEvent: a,
                        target: a.target,
                        releasePoint: b,
                        pointerType: c || "touch"
                    };
                d.initCustomEvent("pswpTap", !0, !0, e), a.target.dispatchEvent(d)
            };
        ya("Tap", {
            publicMethods: {
                initTap: function() {
                    Ba("firstTouchStart", f.onTapStart), Ba("touchRelease", f.onTapRelease), Ba("destroy", function() {
                        oc = {}, nc = null
                    })
                },
                onTapStart: function(a) {
                    a.length > 1 && (clearTimeout(nc), nc = null)
                },
                onTapRelease: function(a, b) {
                    if (b && !X && !V && !$a) {
                        var c = b;
                        if (nc && (clearTimeout(nc), nc = null, wb(c, oc))) return void Ca("doubleTap", c);
                        if ("mouse" === b.type) return void pc(a, b, "mouse");
                        var d = a.target.tagName.toUpperCase();
                        if ("BUTTON" === d || e.hasClass(a.target, "pswp__single-tap")) return void pc(a, b);
                        La(oc, c), nc = setTimeout(function() {
                            pc(a, b), nc = null
                        }, 300)
                    }
                }
            }
        });
        var qc;
        ya("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function() {
                    L || (G ? Ba("mouseUsed", function() {
                        f.setupDesktopZoom()
                    }) : f.setupDesktopZoom(!0))
                },
                setupDesktopZoom: function(b) {
                    qc = {};
                    var c = "wheel mousewheel DOMMouseScroll";
                    Ba("bindEvents", function() {
                        e.bind(a, c, f.handleMouseWheel)
                    }), Ba("unbindEvents", function() {
                        qc && e.unbind(a, c, f.handleMouseWheel)
                    }), f.mouseZoomedIn = !1;
                    var d, g = function() {
                            f.mouseZoomedIn && (e.removeClass(a, "pswp--zoomed-in"), f.mouseZoomedIn = !1), 1 > s ? e.addClass(a, "pswp--zoom-allowed") : e.removeClass(a, "pswp--zoom-allowed"), h()
                        },
                        h = function() {
                            d && (e.removeClass(a, "pswp--dragging"), d = !1)
                        };
                    Ba("resize", g), Ba("afterChange", g), Ba("pointerDown", function() {
                        f.mouseZoomedIn && (d = !0, e.addClass(a, "pswp--dragging"))
                    }), Ba("pointerUp", h), b || g()
                },
                handleMouseWheel: function(a) {
                    if (s <= f.currItem.fitRatio) return i.modal && (!i.closeOnScroll || $a || U ? a.preventDefault() : E && Math.abs(a.deltaY) > 2 && (l = !0, f.close())), !0;
                    if (a.stopPropagation(), qc.x = 0, "deltaX" in a) 1 === a.deltaMode ? (qc.x = 18 * a.deltaX, qc.y = 18 * a.deltaY) : (qc.x = a.deltaX, qc.y = a.deltaY);
                    else if ("wheelDelta" in a) a.wheelDeltaX && (qc.x = -.16 * a.wheelDeltaX), a.wheelDeltaY ? qc.y = -.16 * a.wheelDeltaY : qc.y = -.16 * a.wheelDelta;
                    else {
                        if (!("detail" in a)) return;
                        qc.y = a.detail
                    }
                    Ra(s, !0);
                    var b = oa.x - qc.x,
                        c = oa.y - qc.y;
                    (i.modal || b <= ca.min.x && b >= ca.max.x && c <= ca.min.y && c >= ca.max.y) && a.preventDefault(), f.panTo(b, c)
                },
                toggleDesktopZoom: function(b) {
                    b = b || {
                            x: pa.x / 2 + ra.x,
                            y: pa.y / 2 + ra.y
                        };
                    var c = i.getDoubleTapZoom(!0, f.currItem),
                        d = s === c;
                    f.mouseZoomedIn = !d, f.zoomTo(d ? f.currItem.initialZoomLevel : c, b, 333), e[(d ? "remove" : "add") + "Class"](a, "pswp--zoomed-in")
                }
            }
        });
        var rc, sc, tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc = {
                history: !0,
                galleryUID: 1
            },
            Ec = function() {
                return Bc.hash.substring(1)
            },
            Fc = function() {
                rc && clearTimeout(rc), tc && clearTimeout(tc)
            },
            Gc = function() {
                var a = Ec(),
                    b = {};
                if (a.length < 5) return b;
                var c, d = a.split("&");
                for (c = 0; c < d.length; c++)
                    if (d[c]) {
                        var e = d[c].split("=");
                        e.length < 2 || (b[e[0]] = e[1])
                    }
                if (i.galleryPIDs) {
                    var f = b.pid;
                    for (b.pid = 0, c = 0; c < Xb.length; c++)
                        if (Xb[c].pid === f) {
                            b.pid = c;
                            break
                        }
                } else b.pid = parseInt(b.pid, 10) - 1;
                return b.pid < 0 && (b.pid = 0), b
            },
            Hc = function() {
                if (tc && clearTimeout(tc), $a || U) return void(tc = setTimeout(Hc, 500));
                uc ? clearTimeout(sc) : uc = !0;
                var a = m + 1,
                    b = $b(m);
                b.hasOwnProperty("pid") && (a = b.pid);
                var c = xc + "&gid=" + i.galleryUID + "&pid=" + a;
                yc || -1 === Bc.hash.indexOf(c) && (Ac = !0);
                var d = Bc.href.split("#")[0] + "#" + c;
                Cc ? "#" + c !== window.location.hash && history[yc ? "replaceState" : "pushState"]("", document.title, d) : yc ? Bc.replace(d) : Bc.hash = c,
                    yc = !0, sc = setTimeout(function() {
                    uc = !1
                }, 60)
            };
        ya("History", {
            publicMethods: {
                initHistory: function() {
                    if (e.extend(i, Dc, !0), i.history) {
                        Bc = window.location, Ac = !1, zc = !1, yc = !1, xc = Ec(), Cc = "pushState" in history, xc.indexOf("gid=") > -1 && (xc = xc.split("&gid=")[0], xc = xc.split("?gid=")[0]), Ba("afterChange", f.updateURL), Ba("unbindEvents", function() {
                            e.unbind(window, "hashchange", f.onHashChange)
                        });
                        var a = function() {
                            wc = !0, zc || (Ac ? history.back() : xc ? Bc.hash = xc : Cc ? history.pushState("", document.title, Bc.pathname + Bc.search) : Bc.hash = ""), Fc()
                        };
                        Ba("unbindEvents", function() {
                            l && a()
                        }), Ba("destroy", function() {
                            wc || a()
                        }), Ba("firstUpdate", function() {
                            m = Gc().pid
                        });
                        var b = xc.indexOf("pid=");
                        b > -1 && (xc = xc.substring(0, b), "&" === xc.slice(-1) && (xc = xc.slice(0, -1))), setTimeout(function() {
                            j && e.bind(window, "hashchange", f.onHashChange)
                        }, 40)
                    }
                },
                onHashChange: function() {
                    return Ec() === xc ? (zc = !0, void f.close()) : void(uc || (vc = !0, f.goTo(Gc().pid), vc = !1))
                },
                updateURL: function() {
                    Fc(), vc || (yc ? rc = setTimeout(Hc, 800) : Hc())
                }
            }
        }), e.extend(f, db)
    };
    return a
}), ! function(a, b) {
    "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipeUI_Default = b()
}(this, function() {
    "use strict";
    var a = function(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = this,
            w = !1,
            x = !0,
            y = !0,
            z = {
                barsSize: {
                    top: 44,
                    bottom: "auto"
                },
                closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                timeToIdle: 4e3,
                timeToIdleOutside: 1e3,
                loadingIndicatorDelay: 1e3,
                addCaptionHTMLFn: function(a, b) {
                    return a.title ? (b.children[0].innerHTML = a.title, !0) : (b.children[0].innerHTML = "", !1)
                },
                closeEl: !0,
                captionEl: !0,
                fullscreenEl: !0,
                zoomEl: !0,
                shareEl: !0,
                counterEl: !0,
                arrowEl: !0,
                preloaderEl: !0,
                tapToClose: !1,
                tapToToggleControls: !0,
                clickToCloseNonZoomable: !0,
                shareButtons: [{
                    id: "facebook",
                    label: "Share on Facebook",
                    url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                }, {
                    id: "twitter",
                    label: "Tweet",
                    url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                }, {
                    id: "pinterest",
                    label: "Pin it",
                    url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                }, {
                    id: "download",
                    label: "Download image",
                    url: "{{raw_image_url}}",
                    download: !0
                }],
                getImageURLForShare: function() {
                    return a.currItem.src || ""
                },
                getPageURLForShare: function() {
                    return window.location.href
                },
                getTextForShare: function() {
                    return a.currItem.title || ""
                },
                indexIndicatorSep: " / ",
                fitControlsWidth: 1200
            },
            A = function(a) {
                if (r) return !0;
                a = a || window.event, q.timeToIdle && q.mouseUsed && !k && K();
                for (var c, d, e = a.target || a.srcElement, f = e.getAttribute("class") || "", g = 0; g < S.length; g++) c = S[g], c.onTap && f.indexOf("pswp__" + c.name) > -1 && (c.onTap(), d = !0);
                if (d) {
                    a.stopPropagation && a.stopPropagation(), r = !0;
                    var h = b.features.isOldAndroid ? 600 : 30;
                    s = setTimeout(function() {
                        r = !1
                    }, h)
                }
            },
            B = function() {
                return !a.likelyTouchDevice || q.mouseUsed || screen.width > q.fitControlsWidth
            },
            C = function(a, c, d) {
                b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c)
            },
            D = function() {
                var a = 1 === q.getNumItemsFn();
                a !== p && (C(d, "ui--one-slide", a), p = a)
            },
            E = function() {
                C(i, "share-modal--hidden", y)
            },
            F = function() {
                return y = !y, y ? (b.removeClass(i, "pswp__share-modal--fade-in"), setTimeout(function() {
                    y && E()
                }, 300)) : (E(), setTimeout(function() {
                    y || b.addClass(i, "pswp__share-modal--fade-in")
                }, 30)), y || H(), !1
            },
            G = function(b) {
                b = b || window.event;
                var c = b.target || b.srcElement;
                return a.shout("shareLinkClick", b, c), !!c.href && (!!c.hasAttribute("download") || (window.open(c.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), y || F(), !1))
            },
            H = function() {
                for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++) a = q.shareButtons[g], c = q.getImageURLForShare(a), d = q.getPageURLForShare(a), e = q.getTextForShare(a), b = a.url.replace("{{url}}", encodeURIComponent(d)).replace("{{image_url}}", encodeURIComponent(c)).replace("{{raw_image_url}}", c).replace("{{text}}", encodeURIComponent(e)), f += '<a href="' + b + '" target="_blank" class="pswp__share--' + a.id + '"' + (a.download ? "download" : "") + ">" + a.label + "</a>", q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
                i.children[0].innerHTML = f, i.children[0].onclick = G
            },
            I = function(a) {
                for (var c = 0; c < q.closeElClasses.length; c++)
                    if (b.hasClass(a, "pswp__" + q.closeElClasses[c])) return !0
            },
            J = 0,
            K = function() {
                clearTimeout(u), J = 0, k && v.setIdle(!1)
            },
            L = function(a) {
                a = a ? a : window.event;
                var b = a.relatedTarget || a.toElement;
                b && "HTML" !== b.nodeName || (clearTimeout(u), u = setTimeout(function() {
                    v.setIdle(!0)
                }, q.timeToIdleOutside))
            },
            M = function() {
                q.fullscreenEl && !b.features.isOldAndroid && (c || (c = v.getFullscreenAPI()), c ? (b.bind(document, c.eventK, v.updateFullscreen), v.updateFullscreen(), b.addClass(a.template, "pswp--supports-fs")) : b.removeClass(a.template, "pswp--supports-fs"))
            },
            N = function() {
                q.preloaderEl && (O(!0), l("beforeChange", function() {
                    clearTimeout(o), o = setTimeout(function() {
                        a.currItem && a.currItem.loading ? (!a.allowProgressiveImg() || a.currItem.img && !a.currItem.img.naturalWidth) && O(!1) : O(!0)
                    }, q.loadingIndicatorDelay)
                }), l("imageLoadComplete", function(b, c) {
                    a.currItem === c && O(!0)
                }))
            },
            O = function(a) {
                n !== a && (C(m, "preloader--active", !a), n = a)
            },
            P = function(a) {
                var c = a.vGap;
                if (B()) {
                    var g = q.barsSize;
                    if (q.captionEl && "auto" === g.bottom)
                        if (f || (f = b.createEl("pswp__caption pswp__caption--fake"), f.appendChild(b.createEl("pswp__caption__center")), d.insertBefore(f, e), b.addClass(d, "pswp__ui--fit")), q.addCaptionHTMLFn(a, f, !0)) {
                            var h = f.clientHeight;
                            c.bottom = parseInt(h, 10) || 44
                        } else c.bottom = g.top;
                    else c.bottom = "auto" === g.bottom ? 0 : g.bottom;
                    c.top = g.top
                } else c.top = c.bottom = 0
            },
            Q = function() {
                q.timeToIdle && l("mouseUsed", function() {
                    b.bind(document, "mousemove", K), b.bind(document, "mouseout", L), t = setInterval(function() {
                        J++, 2 === J && v.setIdle(!0)
                    }, q.timeToIdle / 2)
                })
            },
            R = function() {
                l("onVerticalDrag", function(a) {
                    x && .95 > a ? v.hideControls() : !x && a >= .95 && v.showControls()
                });
                var a;
                l("onPinchClose", function(b) {
                    x && .9 > b ? (v.hideControls(), a = !0) : a && !x && b > .9 && v.showControls()
                }), l("zoomGestureEnded", function() {
                    a = !1, a && !x && v.showControls()
                })
            },
            S = [{
                name: "caption",
                option: "captionEl",
                onInit: function(a) {
                    e = a
                }
            }, {
                name: "share-modal",
                option: "shareEl",
                onInit: function(a) {
                    i = a
                },
                onTap: function() {
                    F()
                }
            }, {
                name: "button--share",
                option: "shareEl",
                onInit: function(a) {
                    h = a
                },
                onTap: function() {
                    F()
                }
            }, {
                name: "button--zoom",
                option: "zoomEl",
                onTap: a.toggleDesktopZoom
            }, {
                name: "counter",
                option: "counterEl",
                onInit: function(a) {
                    g = a
                }
            }, {
                name: "button--close",
                option: "closeEl",
                onTap: a.close
            }, {
                name: "button--arrow--left",
                option: "arrowEl",
                onTap: a.prev
            }, {
                name: "button--arrow--right",
                option: "arrowEl",
                onTap: a.next
            }, {
                name: "button--fs",
                option: "fullscreenEl",
                onTap: function() {
                    c.isFullscreen() ? c.exit() : c.enter()
                }
            }, {
                name: "preloader",
                option: "preloaderEl",
                onInit: function(a) {
                    m = a
                }
            }],
            T = function() {
                var a, c, e, f = function(d) {
                    if (d)
                        for (var f = d.length, g = 0; f > g; g++) {
                            a = d[g], c = a.className;
                            for (var h = 0; h < S.length; h++) e = S[h], c.indexOf("pswp__" + e.name) > -1 && (q[e.option] ? (b.removeClass(a, "pswp__element--disabled"), e.onInit && e.onInit(a)) : b.addClass(a, "pswp__element--disabled"))
                        }
                };
                f(d.children);
                var g = b.getChildByClass(d, "pswp__top-bar");
                g && f(g.children)
            };
        v.init = function() {
            b.extend(a.options, z, !0), q = a.options, d = b.getChildByClass(a.scrollWrap, "pswp__ui"), l = a.listen, R(), l("beforeChange", v.update), l("doubleTap", function(b) {
                var c = a.currItem.initialZoomLevel;
                a.getZoomLevel() !== c ? a.zoomTo(c, b, 333) : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333)
            }), l("preventDragEvent", function(a, b, c) {
                var d = a.target || a.srcElement;
                d && d.getAttribute("class") && a.type.indexOf("mouse") > -1 && (d.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) && (c.prevent = !1)
            }), l("bindEvents", function() {
                b.bind(d, "pswpTap click", A), b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap), a.likelyTouchDevice || b.bind(a.scrollWrap, "mouseover", v.onMouseOver)
            }), l("unbindEvents", function() {
                y || F(), t && clearInterval(t), b.unbind(document, "mouseout", L), b.unbind(document, "mousemove", K), b.unbind(d, "pswpTap click", A), b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap), b.unbind(a.scrollWrap, "mouseover", v.onMouseOver), c && (b.unbind(document, c.eventK, v.updateFullscreen), c.isFullscreen() && (q.hideAnimationDuration = 0, c.exit()), c = null)
            }), l("destroy", function() {
                q.captionEl && (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")), i && (i.children[0].onclick = null), b.removeClass(d, "pswp__ui--over-close"), b.addClass(d, "pswp__ui--hidden"), v.setIdle(!1)
            }), q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"), l("initialZoomIn", function() {
                q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden")
            }), l("initialZoomOut", function() {
                b.addClass(d, "pswp__ui--hidden")
            }), l("parseVerticalMargin", P), T(), q.shareEl && h && i && (y = !0), D(), Q(), M(), N()
        }, v.setIdle = function(a) {
            k = a, C(d, "ui--idle", a)
        }, v.update = function() {
            x && a.currItem ? (v.updateIndexIndicator(), q.captionEl && (q.addCaptionHTMLFn(a.currItem, e), C(e, "caption--empty", !a.currItem.title)), w = !0) : w = !1, y || F(), D()
        }, v.updateFullscreen = function(d) {
            d && setTimeout(function() {
                a.setScrollOffset(0, b.getScrollY())
            }, 50), b[(c.isFullscreen() ? "add" : "remove") + "Class"](a.template, "pswp--fs")
        }, v.updateIndexIndicator = function() {
            q.counterEl && (g.innerHTML = a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn())
        }, v.onGlobalTap = function(c) {
            c = c || window.event;
            var d = c.target || c.srcElement;
            if (!r)
                if (c.detail && "mouse" === c.detail.pointerType) {
                    if (I(d)) return void a.close();
                    b.hasClass(d, "pswp__img") && (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio ? q.clickToCloseNonZoomable && a.close() : a.toggleDesktopZoom(c.detail.releasePoint))
                } else if (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()), q.tapToClose && (b.hasClass(d, "pswp__img") || I(d))) return void a.close()
        }, v.onMouseOver = function(a) {
            a = a || window.event;
            var b = a.target || a.srcElement;
            C(d, "ui--over-close", I(b))
        }, v.hideControls = function() {
            b.addClass(d, "pswp__ui--hidden"), x = !1
        }, v.showControls = function() {
            x = !0, w || v.update(), b.removeClass(d, "pswp__ui--hidden")
        }, v.supportsFullscreen = function() {
            var a = document;
            return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen)
        }, v.getFullscreenAPI = function() {
            var b, c = document.documentElement,
                d = "fullscreenchange";
            return c.requestFullscreen ? b = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: d
            } : c.mozRequestFullScreen ? b = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + d
            } : c.webkitRequestFullscreen ? b = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + d
            } : c.msRequestFullscreen && (b = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            }), b && (b.enter = function() {
                return j = q.closeOnScroll, q.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? a.template[this.enterK]() : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }, b.exit = function() {
                return q.closeOnScroll = j, document[this.exitK]()
            }, b.isFullscreen = function() {
                return document[this.elementK]
            }), b
        }
    };
    return a
});
var initPhotoSwipeFromDOM = function(a) {
    for (var b = function(a) {
        for (var b, c, d, e, f = a.childNodes, g = f.length, h = [], i = 0; g > i; i++) b = f[i], 1 === b.nodeType && (c = b.children[0], d = c.getAttribute("data-size").split("x"), e = {
            src: c.getAttribute("href"),
            w: parseInt(d[0], 10),
            h: parseInt(d[1], 10)
        }, b.children.length > 1 && (e.title = b.children[1].innerHTML), c.children.length > 0 && (e.msrc = c.children[0].getAttribute("src")), e.el = b, h.push(e));
        return h
    }, c = function a(b, c) {
        return b && (c(b) ? b : a(b.parentNode, c))
    }, d = function(a) {
        a = a || window.event, a.preventDefault ? a.preventDefault() : a.returnValue = !1;
        var b = a.target || a.srcElement,
            d = c(b, function(a) {
                return a.tagName && "FIGURE" === a.tagName.toUpperCase()
            });
        if (d) {
            for (var e, g = d.parentNode, h = d.parentNode.childNodes, i = h.length, j = 0, k = 0; i > k; k++)
                if (1 === h[k].nodeType) {
                    if (h[k] === d) {
                        e = j;
                        break
                    }
                    j++
                }
            return e >= 0 && f(e, g), !1
        }
    }, e = function() {
        var a = window.location.hash.substring(1),
            b = {};
        if (a.length < 5) return b;
        for (var c = a.split("&"), d = 0; d < c.length; d++)
            if (c[d]) {
                var e = c[d].split("=");
                e.length < 2 || (b[e[0]] = e[1])
            }
        return b.gid && (b.gid = parseInt(b.gid, 10)), b
    }, f = function(a, c, d, e) {
        var f, g, h, i = document.querySelectorAll(".pswp")[0];
        if (h = b(c), g = {
                galleryUID: c.getAttribute("data-pswp-uid"),
                getThumbBoundsFn: function(a) {
                    var b = h[a].el.getElementsByTagName("img")[0],
                        c = window.pageYOffset || document.documentElement.scrollTop,
                        d = b.getBoundingClientRect();
                    return {
                        x: d.left,
                        y: d.top + c,
                        w: d.width
                    }
                }
            }, e)
            if (g.galleryPIDs) {
                for (var j = 0; j < h.length; j++)
                    if (h[j].pid == a) {
                        g.index = j;
                        break
                    }
            } else g.index = parseInt(a, 10) - 1;
        else g.index = parseInt(a, 10);
        isNaN(g.index) || (d && (g.showAnimationDuration = 0), f = new PhotoSwipe(i, PhotoSwipeUI_Default, h, g), f.init())
    }, g = document.querySelectorAll(a), h = 0, i = g.length; i > h; h++) g[h].setAttribute("data-pswp-uid", h + 1), g[h].onclick = d;
    var j = e();
    j.pid && j.gid && f(j.pid, g[j.gid - 1], !0, !0)
};
initPhotoSwipeFromDOM(".mdb-lightbox"),
    function(a) {
        a.fn.sticky = function(b) {
            function c() {
                return "number" == typeof f.zIndex
            }

            function d() {
                return 0 < a(f.stopper).length || "number" == typeof f.stopper
            }
            var e = {
                    topSpacing: 0,
                    zIndex: "",
                    stopper: ".sticky-stopper"
                },
                f = a.extend({}, e, b),
                g = c(),
                h = d();
            return this.each(function() {
                function b() {
                    var b = n.scrollTop();
                    if (h && "string" == typeof m) var e = a(m).offset().top,
                        f = e - d - i;
                    else if (h && "number" == typeof m) var f = m;
                    if (b > k) {
                        if (c.after(l).css({
                                position: "fixed",
                                top: i
                            }), g && c.css({
                                zIndex: j
                            }), h && b > f) {
                            var o = f - b + i;
                            c.css({
                                top: o
                            })
                        }
                    } else c.css({
                        position: "static",
                        top: null,
                        left: null
                    }), l.remove()
                }
                var c = a(this),
                    d = c.outerHeight(),
                    e = c.outerWidth(),
                    i = f.topSpacing,
                    j = f.zIndex,
                    k = c.offset().top - i,
                    l = a("<div></div>").width(e).height(d).addClass("sticky-placeholder"),
                    m = f.stopper,
                    n = a(window);
                n.bind("scroll", b)
            })
        }
    }(jQuery), ! function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function(a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [function(a, b, c) {
        "use strict";
        var d = a("../main");
        "function" == typeof define && define.amd ? define(d) : (window.PerfectScrollbar = d, "undefined" == typeof window.Ps && (window.Ps = d))
    }, {
        "../main": 7
    }],
    2: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            var c = a.className.split(" ");
            c.indexOf(b) < 0 && c.push(b), a.className = c.join(" ")
        }

        function e(a, b) {
            var c = a.className.split(" "),
                d = c.indexOf(b);
            d >= 0 && c.splice(d, 1), a.className = c.join(" ")
        }
        c.add = function(a, b) {
            a.classList ? a.classList.add(b) : d(a, b)
        }, c.remove = function(a, b) {
            a.classList ? a.classList.remove(b) : e(a, b)
        }, c.list = function(a) {
            return a.classList ? Array.prototype.slice.apply(a.classList) : a.className.split(" ")
        }
    }, {}],
    3: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            return window.getComputedStyle(a)[b]
        }

        function e(a, b, c) {
            return "number" == typeof c && (c = c.toString() + "px"), a.style[b] = c, a
        }

        function f(a, b) {
            for (var c in b) {
                var d = b[c];
                "number" == typeof d && (d = d.toString() + "px"), a.style[c] = d
            }
            return a
        }
        var g = {};
        g.e = function(a, b) {
            var c = document.createElement(a);
            return c.className = b, c
        }, g.appendTo = function(a, b) {
            return b.appendChild(a), a
        }, g.css = function(a, b, c) {
            return "object" == typeof b ? f(a, b) : "undefined" == typeof c ? d(a, b) : e(a, b, c)
        }, g.matches = function(a, b) {
            return "undefined" != typeof a.matches ? a.matches(b) : "undefined" != typeof a.matchesSelector ? a.matchesSelector(b) : "undefined" != typeof a.webkitMatchesSelector ? a.webkitMatchesSelector(b) : "undefined" != typeof a.mozMatchesSelector ? a.mozMatchesSelector(b) : "undefined" != typeof a.msMatchesSelector ? a.msMatchesSelector(b) : void 0
        }, g.remove = function(a) {
            "undefined" != typeof a.remove ? a.remove() : a.parentNode && a.parentNode.removeChild(a)
        }, g.queryChildren = function(a, b) {
            return Array.prototype.filter.call(a.childNodes, function(a) {
                return g.matches(a, b)
            })
        }, b.exports = g
    }, {}],
    4: [function(a, b, c) {
        "use strict";
        var d = function(a) {
            this.element = a, this.events = {}
        };
        d.prototype.bind = function(a, b) {
            "undefined" == typeof this.events[a] && (this.events[a] = []), this.events[a].push(b), this.element.addEventListener(a, b, !1)
        }, d.prototype.unbind = function(a, b) {
            var c = "undefined" != typeof b;
            this.events[a] = this.events[a].filter(function(d) {
                return !(!c || d === b) || (this.element.removeEventListener(a, d, !1), !1)
            }, this)
        }, d.prototype.unbindAll = function() {
            for (var a in this.events) this.unbind(a)
        };
        var e = function() {
            this.eventElements = []
        };
        e.prototype.eventElement = function(a) {
            var b = this.eventElements.filter(function(b) {
                return b.element === a
            })[0];
            return "undefined" == typeof b && (b = new d(a), this.eventElements.push(b)), b
        }, e.prototype.bind = function(a, b, c) {
            this.eventElement(a).bind(b, c)
        }, e.prototype.unbind = function(a, b, c) {
            this.eventElement(a).unbind(b, c)
        }, e.prototype.unbindAll = function() {
            for (var a = 0; a < this.eventElements.length; a++) this.eventElements[a].unbindAll()
        }, e.prototype.once = function(a, b, c) {
            var d = this.eventElement(a),
                e = function(a) {
                    d.unbind(b, e), c(a)
                };
            d.bind(b, e)
        }, b.exports = e
    }, {}],
    5: [function(a, b, c) {
        "use strict";
        b.exports = function() {
            function a() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return function() {
                return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
            }
        }()
    }, {}],
    6: [function(a, b, c) {
        "use strict";
        var d = a("./class"),
            e = a("./dom"),
            f = c.toInt = function(a) {
                return parseInt(a, 10) || 0
            },
            g = c.clone = function(a) {
                if (null === a) return null;
                if (a.constructor === Array) return a.map(g);
                if ("object" == typeof a) {
                    var b = {};
                    for (var c in a) b[c] = g(a[c]);
                    return b
                }
                return a
            };
        c.extend = function(a, b) {
            var c = g(a);
            for (var d in b) c[d] = g(b[d]);
            return c
        }, c.isEditable = function(a) {
            return e.matches(a, "input,[contenteditable]") || e.matches(a, "select,[contenteditable]") || e.matches(a, "textarea,[contenteditable]") || e.matches(a, "button,[contenteditable]")
        }, c.removePsClasses = function(a) {
            for (var b = d.list(a), c = 0; c < b.length; c++) {
                var e = b[c];
                0 === e.indexOf("ps-") && d.remove(a, e)
            }
        }, c.outerWidth = function(a) {
            return f(e.css(a, "width")) + f(e.css(a, "paddingLeft")) + f(e.css(a, "paddingRight")) + f(e.css(a, "borderLeftWidth")) + f(e.css(a, "borderRightWidth"))
        }, c.startScrolling = function(a, b) {
            d.add(a, "ps-in-scrolling"), "undefined" != typeof b ? d.add(a, "ps-" + b) : (d.add(a, "ps-x"), d.add(a, "ps-y"))
        }, c.stopScrolling = function(a, b) {
            d.remove(a, "ps-in-scrolling"), "undefined" != typeof b ? d.remove(a, "ps-" + b) : (d.remove(a, "ps-x"), d.remove(a, "ps-y"))
        }, c.env = {
            isWebKit: "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            supportsIePointer: null !== window.navigator.msMaxTouchPoints
        }
    }, {
        "./class": 2,
        "./dom": 3
    }],
    7: [function(a, b, c) {
        "use strict";
        var d = a("./plugin/destroy"),
            e = a("./plugin/initialize"),
            f = a("./plugin/update");
        b.exports = {
            initialize: e,
            update: f,
            destroy: d
        }
    }, {
        "./plugin/destroy": 9,
        "./plugin/initialize": 17,
        "./plugin/update": 21
    }],
    8: [function(a, b, c) {
        "use strict";
        b.exports = {
            handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            stopPropagationOnClick: !0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !1,
            wheelSpeed: 1,
            theme: "default"
        }
    }, {}],
    9: [function(a, b, c) {
        "use strict";
        var d = a("../lib/helper"),
            e = a("../lib/dom"),
            f = a("./instances");
        b.exports = function(a) {
            var b = f.get(a);
            b && (b.event.unbindAll(), e.remove(b.scrollbarX), e.remove(b.scrollbarY), e.remove(b.scrollbarXRail), e.remove(b.scrollbarYRail), d.removePsClasses(a), f.remove(a))
        }
    }, {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18
    }],
    10: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            function c(a) {
                return a.getBoundingClientRect()
            }
            var d = function(a) {
                a.stopPropagation()
            };
            b.settings.stopPropagationOnClick && b.event.bind(b.scrollbarY, "click", d), b.event.bind(b.scrollbarYRail, "click", function(d) {
                var f = e.toInt(b.scrollbarYHeight / 2),
                    i = b.railYRatio * (d.pageY - window.pageYOffset - c(b.scrollbarYRail).top - f),
                    j = b.railYRatio * (b.railYHeight - b.scrollbarYHeight),
                    k = i / j;
                0 > k ? k = 0 : k > 1 && (k = 1), h(a, "top", (b.contentHeight - b.containerHeight) * k), g(a), d.stopPropagation()
            }), b.settings.stopPropagationOnClick && b.event.bind(b.scrollbarX, "click", d), b.event.bind(b.scrollbarXRail, "click", function(d) {
                var f = e.toInt(b.scrollbarXWidth / 2),
                    i = b.railXRatio * (d.pageX - window.pageXOffset - c(b.scrollbarXRail).left - f),
                    j = b.railXRatio * (b.railXWidth - b.scrollbarXWidth),
                    k = i / j;
                0 > k ? k = 0 : k > 1 && (k = 1), h(a, "left", (b.contentWidth - b.containerWidth) * k - b.negativeScrollAdjustment), g(a), d.stopPropagation()
            })
        }
        var e = a("../../lib/helper"),
            f = a("../instances"),
            g = a("../update-geometry"),
            h = a("../update-scroll");
        b.exports = function(a) {
            var b = f.get(a);
            d(a, b)
        }
    }, {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    11: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            function c(c) {
                var e = d + c * b.railXRatio,
                    g = Math.max(0, b.scrollbarXRail.getBoundingClientRect().left) + b.railXRatio * (b.railXWidth - b.scrollbarXWidth);
                0 > e ? b.scrollbarXLeft = 0 : e > g ? b.scrollbarXLeft = g : b.scrollbarXLeft = e;
                var h = f.toInt(b.scrollbarXLeft * (b.contentWidth - b.containerWidth) / (b.containerWidth - b.railXRatio * b.scrollbarXWidth)) - b.negativeScrollAdjustment;
                j(a, "left", h)
            }
            var d = null,
                e = null,
                h = function(b) {
                    c(b.pageX - e), i(a), b.stopPropagation(), b.preventDefault()
                },
                k = function() {
                    f.stopScrolling(a, "x"), b.event.unbind(b.ownerDocument, "mousemove", h)
                };
            b.event.bind(b.scrollbarX, "mousedown", function(c) {
                e = c.pageX, d = f.toInt(g.css(b.scrollbarX, "left")) * b.railXRatio, f.startScrolling(a, "x"), b.event.bind(b.ownerDocument, "mousemove", h), b.event.once(b.ownerDocument, "mouseup", k), c.stopPropagation(), c.preventDefault()
            })
        }

        function e(a, b) {
            function c(c) {
                var e = d + c * b.railYRatio,
                    g = Math.max(0, b.scrollbarYRail.getBoundingClientRect().top) + b.railYRatio * (b.railYHeight - b.scrollbarYHeight);
                0 > e ? b.scrollbarYTop = 0 : e > g ? b.scrollbarYTop = g : b.scrollbarYTop = e;
                var h = f.toInt(b.scrollbarYTop * (b.contentHeight - b.containerHeight) / (b.containerHeight - b.railYRatio * b.scrollbarYHeight));
                j(a, "top", h)
            }
            var d = null,
                e = null,
                h = function(b) {
                    c(b.pageY - e), i(a), b.stopPropagation(), b.preventDefault()
                },
                k = function() {
                    f.stopScrolling(a, "y"), b.event.unbind(b.ownerDocument, "mousemove", h)
                };
            b.event.bind(b.scrollbarY, "mousedown", function(c) {
                e = c.pageY, d = f.toInt(g.css(b.scrollbarY, "top")) * b.railYRatio, f.startScrolling(a, "y"), b.event.bind(b.ownerDocument, "mousemove", h), b.event.once(b.ownerDocument, "mouseup", k), c.stopPropagation(), c.preventDefault()
            })
        }
        var f = a("../../lib/helper"),
            g = a("../../lib/dom"),
            h = a("../instances"),
            i = a("../update-geometry"),
            j = a("../update-scroll");
        b.exports = function(a) {
            var b = h.get(a);
            d(a, b), e(a, b)
        }
    }, {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    12: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            function c(c, d) {
                var e = a.scrollTop;
                if (0 === c) {
                    if (!b.scrollbarYActive) return !1;
                    if (0 === e && d > 0 || e >= b.contentHeight - b.containerHeight && 0 > d) return !b.settings.wheelPropagation
                }
                var f = a.scrollLeft;
                if (0 === d) {
                    if (!b.scrollbarXActive) return !1;
                    if (0 === f && 0 > c || f >= b.contentWidth - b.containerWidth && c > 0) return !b.settings.wheelPropagation
                }
                return !0
            }
            var d = !1;
            b.event.bind(a, "mouseenter", function() {
                d = !0
            }), b.event.bind(a, "mouseleave", function() {
                d = !1
            });
            var g = !1;
            b.event.bind(b.ownerDocument, "keydown", function(j) {
                if (!(j.isDefaultPrevented && j.isDefaultPrevented() || j.defaultPrevented)) {
                    var k = f.matches(b.scrollbarX, ":focus") || f.matches(b.scrollbarY, ":focus");
                    if (d || k) {
                        var l = document.activeElement ? document.activeElement : b.ownerDocument.activeElement;
                        if (l) {
                            if ("IFRAME" === l.tagName) l = l.contentDocument.activeElement;
                            else
                                for (; l.shadowRoot;) l = l.shadowRoot.activeElement;
                            if (e.isEditable(l)) return
                        }
                        var m = 0,
                            n = 0;
                        switch (j.which) {
                            case 37:
                                m = -30;
                                break;
                            case 38:
                                n = 30;
                                break;
                            case 39:
                                m = 30;
                                break;
                            case 40:
                                n = -30;
                                break;
                            case 33:
                                n = 90;
                                break;
                            case 32:
                                n = j.shiftKey ? 90 : -90;
                                break;
                            case 34:
                                n = -90;
                                break;
                            case 35:
                                n = j.ctrlKey ? -b.contentHeight : -b.containerHeight;
                                break;
                            case 36:
                                n = j.ctrlKey ? a.scrollTop : b.containerHeight;
                                break;
                            default:
                                return
                        }
                        i(a, "top", a.scrollTop - n), i(a, "left", a.scrollLeft + m), h(a), g = c(m, n), g && j.preventDefault()
                    }
                }
            })
        }
        var e = a("../../lib/helper"),
            f = a("../../lib/dom"),
            g = a("../instances"),
            h = a("../update-geometry"),
            i = a("../update-scroll");
        b.exports = function(a) {
            var b = g.get(a);
            d(a, b)
        }
    }, {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    13: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            function c(c, d) {
                var e = a.scrollTop;
                if (0 === c) {
                    if (!b.scrollbarYActive) return !1;
                    if (0 === e && d > 0 || e >= b.contentHeight - b.containerHeight && 0 > d) return !b.settings.wheelPropagation
                }
                var f = a.scrollLeft;
                if (0 === d) {
                    if (!b.scrollbarXActive) return !1;
                    if (0 === f && 0 > c || f >= b.contentWidth - b.containerWidth && c > 0) return !b.settings.wheelPropagation
                }
                return !0
            }

            function d(a) {
                var b = a.deltaX,
                    c = -1 * a.deltaY;
                return "undefined" != typeof b && "undefined" != typeof c || (b = -1 * a.wheelDeltaX / 6, c = a.wheelDeltaY / 6), a.deltaMode && 1 === a.deltaMode && (b *= 10, c *= 10), b !== b && c !== c && (b = 0, c = a.wheelDelta), [b, c]
            }

            function e(b, c) {
                var d = a.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                if (d) {
                    if ("TEXTAREA" !== d.tagName && !window.getComputedStyle(d).overflow.match(/(scroll|auto)/)) return !1;
                    var e = d.scrollHeight - d.clientHeight;
                    if (e > 0 && !(0 === d.scrollTop && c > 0 || d.scrollTop === e && 0 > c)) return !0;
                    var f = d.scrollLeft - d.clientWidth;
                    if (f > 0 && !(0 === d.scrollLeft && 0 > b || d.scrollLeft === f && b > 0)) return !0
                }
                return !1
            }

            function h(h) {
                var j = d(h),
                    k = j[0],
                    l = j[1];
                e(k, l) || (i = !1, b.settings.useBothWheelAxes ? b.scrollbarYActive && !b.scrollbarXActive ? (l ? g(a, "top", a.scrollTop - l * b.settings.wheelSpeed) : g(a, "top", a.scrollTop + k * b.settings.wheelSpeed), i = !0) : b.scrollbarXActive && !b.scrollbarYActive && (k ? g(a, "left", a.scrollLeft + k * b.settings.wheelSpeed) : g(a, "left", a.scrollLeft - l * b.settings.wheelSpeed), i = !0) : (g(a, "top", a.scrollTop - l * b.settings.wheelSpeed), g(a, "left", a.scrollLeft + k * b.settings.wheelSpeed)), f(a), i = i || c(k, l), i && (h.stopPropagation(), h.preventDefault()))
            }
            var i = !1;
            "undefined" != typeof window.onwheel ? b.event.bind(a, "wheel", h) : "undefined" != typeof window.onmousewheel && b.event.bind(a, "mousewheel", h)
        }
        var e = a("../instances"),
            f = a("../update-geometry"),
            g = a("../update-scroll");
        b.exports = function(a) {
            var b = e.get(a);
            d(a, b)
        }
    }, {
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    14: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            b.event.bind(a, "scroll", function() {
                f(a)
            })
        }
        var e = a("../instances"),
            f = a("../update-geometry");
        b.exports = function(a) {
            var b = e.get(a);
            d(a, b)
        }
    }, {
        "../instances": 18,
        "../update-geometry": 19
    }],
    15: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            function c() {
                var a = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                return 0 === a.toString().length ? null : a.getRangeAt(0).commonAncestorContainer
            }

            function d() {
                j || (j = setInterval(function() {
                    return f.get(a) ? (h(a, "top", a.scrollTop + k.top), h(a, "left", a.scrollLeft + k.left), void g(a)) : void clearInterval(j)
                }, 50))
            }

            function i() {
                j && (clearInterval(j), j = null), e.stopScrolling(a)
            }
            var j = null,
                k = {
                    top: 0,
                    left: 0
                },
                l = !1;
            b.event.bind(b.ownerDocument, "selectionchange", function() {
                a.contains(c()) ? l = !0 : (l = !1, i())
            }), b.event.bind(window, "mouseup", function() {
                l && (l = !1, i())
            }), b.event.bind(window, "mousemove", function(b) {
                if (l) {
                    var c = {
                            x: b.pageX,
                            y: b.pageY
                        },
                        f = {
                            left: a.offsetLeft,
                            right: a.offsetLeft + a.offsetWidth,
                            top: a.offsetTop,
                            bottom: a.offsetTop + a.offsetHeight
                        };
                    c.x < f.left + 3 ? (k.left = -5, e.startScrolling(a, "x")) : c.x > f.right - 3 ? (k.left = 5, e.startScrolling(a, "x")) : k.left = 0, c.y < f.top + 3 ? (f.top + 3 - c.y < 5 ? k.top = -5 : k.top = -20, e.startScrolling(a, "y")) : c.y > f.bottom - 3 ? (c.y - f.bottom + 3 < 5 ? k.top = 5 : k.top = 20, e.startScrolling(a, "y")) : k.top = 0, 0 === k.top && 0 === k.left ? i() : d()
                }
            })
        }
        var e = a("../../lib/helper"),
            f = a("../instances"),
            g = a("../update-geometry"),
            h = a("../update-scroll");
        b.exports = function(a) {
            var b = f.get(a);
            d(a, b)
        }
    }, {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    16: [function(a, b, c) {
        "use strict";

        function d(a, b, c, d) {
            function e(c, d) {
                var e = a.scrollTop,
                    f = a.scrollLeft,
                    g = Math.abs(c),
                    h = Math.abs(d);
                if (h > g) {
                    if (0 > d && e === b.contentHeight - b.containerHeight || d > 0 && 0 === e) return !b.settings.swipePropagation
                } else if (g > h && (0 > c && f === b.contentWidth - b.containerWidth || c > 0 && 0 === f)) return !b.settings.swipePropagation;
                return !0
            }

            function i(b, c) {
                h(a, "top", a.scrollTop - c), h(a, "left", a.scrollLeft - b), g(a)
            }

            function j() {
                u = !0
            }

            function k() {
                u = !1
            }

            function l(a) {
                return a.targetTouches ? a.targetTouches[0] : a
            }

            function m(a) {
                return !(!a.targetTouches || 1 !== a.targetTouches.length) || !(!a.pointerType || "mouse" === a.pointerType || a.pointerType === a.MSPOINTER_TYPE_MOUSE)
            }

            function n(a) {
                if (m(a)) {
                    v = !0;
                    var b = l(a);
                    q.pageX = b.pageX, q.pageY = b.pageY, r = (new Date).getTime(), null !== t && clearInterval(t), a.stopPropagation()
                }
            }

            function o(a) {
                if (!v && b.settings.swipePropagation && n(a), !u && v && m(a)) {
                    var c = l(a),
                        d = {
                            pageX: c.pageX,
                            pageY: c.pageY
                        },
                        f = d.pageX - q.pageX,
                        g = d.pageY - q.pageY;
                    i(f, g), q = d;
                    var h = (new Date).getTime(),
                        j = h - r;
                    j > 0 && (s.x = f / j, s.y = g / j, r = h), e(f, g) && (a.stopPropagation(), a.preventDefault())
                }
            }

            function p() {
                !u && v && (v = !1, clearInterval(t), t = setInterval(function() {
                    return f.get(a) ? Math.abs(s.x) < .01 && Math.abs(s.y) < .01 ? void clearInterval(t) : (i(30 * s.x, 30 * s.y), s.x *= .8, void(s.y *= .8)) : void clearInterval(t)
                }, 10))
            }
            var q = {},
                r = 0,
                s = {},
                t = null,
                u = !1,
                v = !1;
            c && (b.event.bind(window, "touchstart", j), b.event.bind(window, "touchend", k), b.event.bind(a, "touchstart", n), b.event.bind(a, "touchmove", o), b.event.bind(a, "touchend", p)), d && (window.PointerEvent ? (b.event.bind(window, "pointerdown", j), b.event.bind(window, "pointerup", k), b.event.bind(a, "pointerdown", n), b.event.bind(a, "pointermove", o), b.event.bind(a, "pointerup", p)) : window.MSPointerEvent && (b.event.bind(window, "MSPointerDown", j), b.event.bind(window, "MSPointerUp", k), b.event.bind(a, "MSPointerDown", n), b.event.bind(a, "MSPointerMove", o), b.event.bind(a, "MSPointerUp", p)))
        }
        var e = a("../../lib/helper"),
            f = a("../instances"),
            g = a("../update-geometry"),
            h = a("../update-scroll");
        b.exports = function(a) {
            if (e.env.supportsTouch || e.env.supportsIePointer) {
                var b = f.get(a);
                d(a, b, e.env.supportsTouch, e.env.supportsIePointer)
            }
        }
    }, {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    17: [function(a, b, c) {
        "use strict";
        var d = a("../lib/helper"),
            e = a("../lib/class"),
            f = a("./instances"),
            g = a("./update-geometry"),
            h = {
                "click-rail": a("./handler/click-rail"),
                "drag-scrollbar": a("./handler/drag-scrollbar"),
                keyboard: a("./handler/keyboard"),
                wheel: a("./handler/mouse-wheel"),
                touch: a("./handler/touch"),
                selection: a("./handler/selection")
            },
            i = a("./handler/native-scroll");
        b.exports = function(a, b) {
            b = "object" == typeof b ? b : {}, e.add(a, "ps-container");
            var c = f.add(a);
            c.settings = d.extend(c.settings, b), e.add(a, "ps-theme-" + c.settings.theme), c.settings.handlers.forEach(function(b) {
                h[b](a)
            }), i(a), g(a)
        }
    }, {
        "../lib/class": 2,
        "../lib/helper": 6,
        "./handler/click-rail": 10,
        "./handler/drag-scrollbar": 11,
        "./handler/keyboard": 12,
        "./handler/mouse-wheel": 13,
        "./handler/native-scroll": 14,
        "./handler/selection": 15,
        "./handler/touch": 16,
        "./instances": 18,
        "./update-geometry": 19
    }],
    18: [function(a, b, c) {
        "use strict";

        function d(a) {
            function b() {
                i.add(a, "ps-focus")
            }

            function c() {
                i.remove(a, "ps-focus")
            }
            var d = this;
            d.settings = h.clone(j), d.containerWidth = null, d.containerHeight = null, d.contentWidth = null, d.contentHeight = null, d.isRtl = "rtl" === k.css(a, "direction"), d.isNegativeScroll = function() {
                var b = a.scrollLeft,
                    c = null;
                return a.scrollLeft = -1, c = a.scrollLeft < 0, a.scrollLeft = b, c
            }(), d.negativeScrollAdjustment = d.isNegativeScroll ? a.scrollWidth - a.clientWidth : 0, d.event = new l, d.ownerDocument = a.ownerDocument || document, d.scrollbarXRail = k.appendTo(k.e("div", "ps-scrollbar-x-rail"), a), d.scrollbarX = k.appendTo(k.e("div", "ps-scrollbar-x"), d.scrollbarXRail), d.scrollbarX.setAttribute("tabindex", 0), d.event.bind(d.scrollbarX, "focus", b), d.event.bind(d.scrollbarX, "blur", c), d.scrollbarXActive = null, d.scrollbarXWidth = null, d.scrollbarXLeft = null, d.scrollbarXBottom = h.toInt(k.css(d.scrollbarXRail, "bottom")), d.isScrollbarXUsingBottom = d.scrollbarXBottom === d.scrollbarXBottom, d.scrollbarXTop = d.isScrollbarXUsingBottom ? null : h.toInt(k.css(d.scrollbarXRail, "top")), d.railBorderXWidth = h.toInt(k.css(d.scrollbarXRail, "borderLeftWidth")) + h.toInt(k.css(d.scrollbarXRail, "borderRightWidth")), k.css(d.scrollbarXRail, "display", "block"), d.railXMarginWidth = h.toInt(k.css(d.scrollbarXRail, "marginLeft")) + h.toInt(k.css(d.scrollbarXRail, "marginRight")), k.css(d.scrollbarXRail, "display", ""), d.railXWidth = null, d.railXRatio = null, d.scrollbarYRail = k.appendTo(k.e("div", "ps-scrollbar-y-rail"), a), d.scrollbarY = k.appendTo(k.e("div", "ps-scrollbar-y"), d.scrollbarYRail), d.scrollbarY.setAttribute("tabindex", 0), d.event.bind(d.scrollbarY, "focus", b), d.event.bind(d.scrollbarY, "blur", c), d.scrollbarYActive = null, d.scrollbarYHeight = null, d.scrollbarYTop = null, d.scrollbarYRight = h.toInt(k.css(d.scrollbarYRail, "right")),
                d.isScrollbarYUsingRight = d.scrollbarYRight === d.scrollbarYRight, d.scrollbarYLeft = d.isScrollbarYUsingRight ? null : h.toInt(k.css(d.scrollbarYRail, "left")), d.scrollbarYOuterWidth = d.isRtl ? h.outerWidth(d.scrollbarY) : null, d.railBorderYWidth = h.toInt(k.css(d.scrollbarYRail, "borderTopWidth")) + h.toInt(k.css(d.scrollbarYRail, "borderBottomWidth")), k.css(d.scrollbarYRail, "display", "block"), d.railYMarginHeight = h.toInt(k.css(d.scrollbarYRail, "marginTop")) + h.toInt(k.css(d.scrollbarYRail, "marginBottom")), k.css(d.scrollbarYRail, "display", ""), d.railYHeight = null, d.railYRatio = null
        }

        function e(a) {
            return a.getAttribute("data-ps-id")
        }

        function f(a, b) {
            a.setAttribute("data-ps-id", b)
        }

        function g(a) {
            a.removeAttribute("data-ps-id")
        }
        var h = a("../lib/helper"),
            i = a("../lib/class"),
            j = a("./default-setting"),
            k = a("../lib/dom"),
            l = a("../lib/event-manager"),
            m = a("../lib/guid"),
            n = {};
        c.add = function(a) {
            var b = m();
            return f(a, b), n[b] = new d(a), n[b]
        }, c.remove = function(a) {
            delete n[e(a)], g(a)
        }, c.get = function(a) {
            return n[e(a)]
        }
    }, {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/event-manager": 4,
        "../lib/guid": 5,
        "../lib/helper": 6,
        "./default-setting": 8
    }],
    19: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            return a.settings.minScrollbarLength && (b = Math.max(b, a.settings.minScrollbarLength)), a.settings.maxScrollbarLength && (b = Math.min(b, a.settings.maxScrollbarLength)), b
        }

        function e(a, b) {
            var c = {
                width: b.railXWidth
            };
            b.isRtl ? c.left = b.negativeScrollAdjustment + a.scrollLeft + b.containerWidth - b.contentWidth : c.left = a.scrollLeft, b.isScrollbarXUsingBottom ? c.bottom = b.scrollbarXBottom - a.scrollTop : c.top = b.scrollbarXTop + a.scrollTop, h.css(b.scrollbarXRail, c);
            var d = {
                top: a.scrollTop,
                height: b.railYHeight
            };
            b.isScrollbarYUsingRight ? b.isRtl ? d.right = b.contentWidth - (b.negativeScrollAdjustment + a.scrollLeft) - b.scrollbarYRight - b.scrollbarYOuterWidth : d.right = b.scrollbarYRight - a.scrollLeft : b.isRtl ? d.left = b.negativeScrollAdjustment + a.scrollLeft + 2 * b.containerWidth - b.contentWidth - b.scrollbarYLeft - b.scrollbarYOuterWidth : d.left = b.scrollbarYLeft + a.scrollLeft, h.css(b.scrollbarYRail, d), h.css(b.scrollbarX, {
                left: b.scrollbarXLeft,
                width: b.scrollbarXWidth - b.railBorderXWidth
            }), h.css(b.scrollbarY, {
                top: b.scrollbarYTop,
                height: b.scrollbarYHeight - b.railBorderYWidth
            })
        }
        var f = a("../lib/helper"),
            g = a("../lib/class"),
            h = a("../lib/dom"),
            i = a("./instances"),
            j = a("./update-scroll");
        b.exports = function(a) {
            var b = i.get(a);
            b.containerWidth = a.clientWidth, b.containerHeight = a.clientHeight, b.contentWidth = a.scrollWidth, b.contentHeight = a.scrollHeight;
            var c;
            a.contains(b.scrollbarXRail) || (c = h.queryChildren(a, ".ps-scrollbar-x-rail"), c.length > 0 && c.forEach(function(a) {
                h.remove(a)
            }), h.appendTo(b.scrollbarXRail, a)), a.contains(b.scrollbarYRail) || (c = h.queryChildren(a, ".ps-scrollbar-y-rail"), c.length > 0 && c.forEach(function(a) {
                h.remove(a)
            }), h.appendTo(b.scrollbarYRail, a)), !b.settings.suppressScrollX && b.containerWidth + b.settings.scrollXMarginOffset < b.contentWidth ? (b.scrollbarXActive = !0, b.railXWidth = b.containerWidth - b.railXMarginWidth, b.railXRatio = b.containerWidth / b.railXWidth, b.scrollbarXWidth = d(b, f.toInt(b.railXWidth * b.containerWidth / b.contentWidth)), b.scrollbarXLeft = f.toInt((b.negativeScrollAdjustment + a.scrollLeft) * (b.railXWidth - b.scrollbarXWidth) / (b.contentWidth - b.containerWidth))) : b.scrollbarXActive = !1, !b.settings.suppressScrollY && b.containerHeight + b.settings.scrollYMarginOffset < b.contentHeight ? (b.scrollbarYActive = !0, b.railYHeight = b.containerHeight - b.railYMarginHeight, b.railYRatio = b.containerHeight / b.railYHeight, b.scrollbarYHeight = d(b, f.toInt(b.railYHeight * b.containerHeight / b.contentHeight)), b.scrollbarYTop = f.toInt(a.scrollTop * (b.railYHeight - b.scrollbarYHeight) / (b.contentHeight - b.containerHeight))) : b.scrollbarYActive = !1, b.scrollbarXLeft >= b.railXWidth - b.scrollbarXWidth && (b.scrollbarXLeft = b.railXWidth - b.scrollbarXWidth), b.scrollbarYTop >= b.railYHeight - b.scrollbarYHeight && (b.scrollbarYTop = b.railYHeight - b.scrollbarYHeight), e(a, b), b.scrollbarXActive ? g.add(a, "ps-active-x") : (g.remove(a, "ps-active-x"), b.scrollbarXWidth = 0, b.scrollbarXLeft = 0, j(a, "left", 0)), b.scrollbarYActive ? g.add(a, "ps-active-y") : (g.remove(a, "ps-active-y"), b.scrollbarYHeight = 0, b.scrollbarYTop = 0, j(a, "top", 0))
        }
    }, {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-scroll": 20
    }],
    20: [function(a, b, c) {
        "use strict";
        var d, e, f = a("./instances"),
            g = document.createEvent("Event"),
            h = document.createEvent("Event"),
            i = document.createEvent("Event"),
            j = document.createEvent("Event"),
            k = document.createEvent("Event"),
            l = document.createEvent("Event"),
            m = document.createEvent("Event"),
            n = document.createEvent("Event"),
            o = document.createEvent("Event"),
            p = document.createEvent("Event");
        g.initEvent("ps-scroll-up", !0, !0), h.initEvent("ps-scroll-down", !0, !0), i.initEvent("ps-scroll-left", !0, !0), j.initEvent("ps-scroll-right", !0, !0), k.initEvent("ps-scroll-y", !0, !0), l.initEvent("ps-scroll-x", !0, !0), m.initEvent("ps-x-reach-start", !0, !0), n.initEvent("ps-x-reach-end", !0, !0), o.initEvent("ps-y-reach-start", !0, !0), p.initEvent("ps-y-reach-end", !0, !0), b.exports = function(a, b, c) {
            if ("undefined" == typeof a) throw "You must provide an element to the update-scroll function";
            if ("undefined" == typeof b) throw "You must provide an axis to the update-scroll function";
            if ("undefined" == typeof c) throw "You must provide a value to the update-scroll function";
            "top" === b && 0 >= c && (a.scrollTop = c = 0, a.dispatchEvent(o)), "left" === b && 0 >= c && (a.scrollLeft = c = 0, a.dispatchEvent(m));
            var q = f.get(a);
            "top" === b && c >= q.contentHeight - q.containerHeight && (c = q.contentHeight - q.containerHeight, c - a.scrollTop <= 1 ? c = a.scrollTop : a.scrollTop = c, a.dispatchEvent(p)), "left" === b && c >= q.contentWidth - q.containerWidth && (c = q.contentWidth - q.containerWidth, c - a.scrollLeft <= 1 ? c = a.scrollLeft : a.scrollLeft = c, a.dispatchEvent(n)), d || (d = a.scrollTop), e || (e = a.scrollLeft), "top" === b && d > c && a.dispatchEvent(g), "top" === b && c > d && a.dispatchEvent(h), "left" === b && e > c && a.dispatchEvent(i), "left" === b && c > e && a.dispatchEvent(j), "top" === b && (a.scrollTop = d = c, a.dispatchEvent(k)), "left" === b && (a.scrollLeft = e = c, a.dispatchEvent(l))
        }
    }, {
        "./instances": 18
    }],
    21: [function(a, b, c) {
        "use strict";
        var d = a("../lib/helper"),
            e = a("../lib/dom"),
            f = a("./instances"),
            g = a("./update-geometry"),
            h = a("./update-scroll");
        b.exports = function(a) {
            var b = f.get(a);
            b && (b.negativeScrollAdjustment = b.isNegativeScroll ? a.scrollWidth - a.clientWidth : 0, e.css(b.scrollbarXRail, "display", "block"), e.css(b.scrollbarYRail, "display", "block"), b.railXMarginWidth = d.toInt(e.css(b.scrollbarXRail, "marginLeft")) + d.toInt(e.css(b.scrollbarXRail, "marginRight")), b.railYMarginHeight = d.toInt(e.css(b.scrollbarYRail, "marginTop")) + d.toInt(e.css(b.scrollbarYRail, "marginBottom")), e.css(b.scrollbarXRail, "display", "none"), e.css(b.scrollbarYRail, "display", "none"), g(a), h(a, "top", a.scrollTop), h(a, "left", a.scrollLeft), e.css(b.scrollbarXRail, "display", ""), e.css(b.scrollbarYRail, "display", ""))
        }
    }, {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-geometry": 19,
        "./update-scroll": 20
    }]
}, {}, [1]), $(function() {
    $(".arrow-r").on("click", function() {
        $(".arrow-r").not(this).find(".fa-angle-down").removeClass("rotate-element"), $(this).find(".fa-angle-down").toggleClass("rotate-element")
    })
}),
    function(a) {
        var b = !1,
            c = {
                data: [],
                placeholder: "",
                secondaryPlaceholder: ""
            };
        a(document).ready(function() {
            a(document).on("click", ".chip .close", function(b) {
                var c = a(this).closest(".chips");
                c.data("initialized") || a(this).closest(".chip").remove()
            })
        }), a.fn.material_chip = function(d) {
            var e = this;
            return this.$el = a(this), this.$document = a(document), this.SELS = {
                CHIPS: ".chips",
                CHIP: ".chip",
                INPUT: "input",
                DELETE: ".fa",
                SELECTED_CHIP: ".selected"
            }, "data" === d ? this.$el.data("chips") : "options" === d ? this.$el.data("options") : (this.$el.data("options", a.extend({}, c, d)), this.init = function() {
                var b = 0;
                e.$el.each(function() {
                    var c = a(this);
                    if (!c.data("initialized")) {
                        var d = c.data("options");
                        (!d.data || !d.data instanceof Array) && (d.data = []), c.data("chips", d.data), c.data("index", b), c.data("initialized", !0), c.hasClass(e.SELS.CHIPS) || c.addClass("chips"), e.chips(c), b++
                    }
                })
            }, this.handleEvents = function() {
                var b = e.SELS;
                e.$document.on("click", b.CHIPS, function(c) {
                    a(c.target).find(b.INPUT).focus()
                }), e.$document.on("click", b.CHIP, function(c) {
                    a(b.CHIP).removeClass("selected"), a(this).toggleClass("selected")
                }), e.$document.on("keydown", function(c) {
                    if (!a(c.target).is("input, textarea")) {
                        var d, f = e.$document.find(b.CHIP + b.SELECTED_CHIP),
                            g = f.closest(b.CHIPS),
                            h = f.siblings(b.CHIP).length;
                        if (f.length)
                            if (8 === c.which || 46 === c.which) {
                                c.preventDefault();
                                var i = g.data("index");
                                d = f.index(), e.deleteChip(i, d, g);
                                var j = null;
                                h > d + 1 ? j = d : (d === h || d + 1 === h) && (j = h - 1), 0 > j && (j = null), null !== j && e.selectChip(i, j, g), h || g.find("input").focus()
                            } else if (37 === c.which) {
                                if (d = f.index() - 1, 0 > d) return;
                                a(b.CHIP).removeClass("selected"), e.selectChip(g.data("index"), d, g)
                            } else if (39 === c.which) {
                                if (d = f.index() + 1, a(b.CHIP).removeClass("selected"), d > h) return void g.find("input").focus();
                                e.selectChip(g.data("index"), d, g)
                            }
                    }
                }), e.$document.on("focusin", b.CHIPS + " " + b.INPUT, function(c) {
                    a(c.target).closest(b.CHIPS).addClass("focus"), a(b.CHIP).removeClass("selected")
                }), e.$document.on("focusout", b.CHIPS + " " + b.INPUT, function(c) {
                    a(c.target).closest(b.CHIPS).removeClass("focus")
                }), e.$document.on("keydown", b.CHIPS + " " + b.INPUT, function(c) {
                    var d = a(c.target),
                        f = d.closest(b.CHIPS),
                        g = f.data("index"),
                        h = f.children(b.CHIP).length;
                    return 13 === c.which ? (c.preventDefault(), e.addChip(g, {
                        tag: d.val()
                    }, f), void d.val("")) : 8 !== c.keyCode && 37 !== c.keyCode || "" !== d.val() || !h ? void 0 : (e.selectChip(g, h - 1, f), void d.blur())
                }), e.$document.on("click", b.CHIPS + " " + b.DELETE, function(c) {
                    var d = a(c.target),
                        f = d.closest(b.CHIPS),
                        g = d.closest(b.CHIP);
                    c.stopPropagation(), e.deleteChip(f.data("index"), g.index(), f), f.find("input").focus()
                })
            }, this.chips = function(a) {
                var b = "";
                a.data("options"), a.data("chips").forEach(function(a) {
                    b += e.renderChip(a)
                }), b += '<input class="input" placeholder="">', a.html(b), e.setPlaceholder(a)
            }, this.renderChip = function(a) {
                if (a.tag) {
                    var b = '<div class="chip">' + a.tag;
                    return a.image && (b += ' <img src="' + a.image + '"> '), b += '<i class="close fa fa-times"></i>', b += "</div>"
                }
            }, this.setPlaceholder = function(a) {
                var b = a.data("options");
                a.data("chips").length && b.placeholder ? a.find("input").prop("placeholder", b.placeholder) : !a.data("chips").length && b.secondaryPlaceholder && a.find("input").prop("placeholder", b.secondaryPlaceholder)
            }, this.isValid = function(a, b) {
                for (var c = a.data("chips"), d = !1, e = 0; e < c.length; e++)
                    if (c[e].tag === b.tag) return void(d = !0);
                return "" !== b.tag && !d
            }, this.addChip = function(b, c, d) {
                if (e.isValid(d, c)) {
                    var f = (d.data("options"), e.renderChip(c));
                    d.data("chips").push(c), a(f).insertBefore(d.find("input")), d.trigger("chip.add", c), e.setPlaceholder(d)
                }
            }, this.deleteChip = function(a, b, c) {
                var d = c.data("chips")[b];
                c.find(".chip").eq(b).remove(), c.data("chips").splice(b, 1), c.trigger("chip.delete", d), e.setPlaceholder(c)
            }, this.selectChip = function(a, b, c) {
                var d = c.find(".chip").eq(b);
                d && !1 === d.hasClass("selected") && (d.addClass("selected"), c.trigger("chip.select", c.data("chips")[b]))
            }, this.getChipsElement = function(a, b) {
                return b.eq(a)
            }, this.init(), void(b || (this.handleEvents(), b = !0)))
        }
    }(jQuery);
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function() {
        var a = /\blang(?:uage)?-(\w+)\b/i,
            b = 0,
            c = _self.Prism = {
                util: {
                    encode: function(a) {
                        return a instanceof d ? new d(a.type, c.util.encode(a.content), a.alias) : "Array" === c.util.type(a) ? a.map(c.util.encode) : a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function(a) {
                        return Object.prototype.toString.call(a).match(/\[object (\w+)\]/)[1]
                    },
                    objId: function(a) {
                        return a.__id || Object.defineProperty(a, "__id", {
                            value: ++b
                        }), a.__id
                    },
                    clone: function(a) {
                        var b = c.util.type(a);
                        switch (b) {
                            case "Object":
                                var d = {};
                                for (var e in a) a.hasOwnProperty(e) && (d[e] = c.util.clone(a[e]));
                                return d;
                            case "Array":
                                return a.map && a.map(function(a) {
                                        return c.util.clone(a)
                                    })
                        }
                        return a
                    }
                },
                languages: {
                    extend: function(a, b) {
                        var d = c.util.clone(c.languages[a]);
                        for (var e in b) d[e] = b[e];
                        return d
                    },
                    insertBefore: function(a, b, d, e) {
                        e = e || c.languages;
                        var f = e[a];
                        if (2 == arguments.length) {
                            d = arguments[1];
                            for (var g in d) d.hasOwnProperty(g) && (f[g] = d[g]);
                            return f
                        }
                        var h = {};
                        for (var i in f)
                            if (f.hasOwnProperty(i)) {
                                if (i == b)
                                    for (var g in d) d.hasOwnProperty(g) && (h[g] = d[g]);
                                h[i] = f[i]
                            }
                        return c.languages.DFS(c.languages, function(b, c) {
                            c === e[a] && b != a && (this[b] = h)
                        }), e[a] = h
                    },
                    DFS: function(a, b, d, e) {
                        e = e || {};
                        for (var f in a) a.hasOwnProperty(f) && (b.call(a, f, a[f], d || f), "Object" !== c.util.type(a[f]) || e[c.util.objId(a[f])] ? "Array" !== c.util.type(a[f]) || e[c.util.objId(a[f])] || (e[c.util.objId(a[f])] = !0, c.languages.DFS(a[f], b, f, e)) : (e[c.util.objId(a[f])] = !0, c.languages.DFS(a[f], b, null, e)))
                    }
                },
                plugins: {},
                highlightAll: function(a, b) {
                    var d = {
                        callback: b,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    c.hooks.run("before-highlightall", d);
                    for (var e, f = d.elements || document.querySelectorAll(d.selector), g = 0; e = f[g++];) c.highlightElement(e, a === !0, d.callback)
                },
                highlightElement: function(b, d, e) {
                    for (var f, g, h = b; h && !a.test(h.className);) h = h.parentNode;
                    h && (f = (h.className.match(a) || [, ""])[1], g = c.languages[f]), b.className = b.className.replace(a, "").replace(/\s+/g, " ") + " language-" + f, h = b.parentNode, /pre/i.test(h.nodeName) && (h.className = h.className.replace(a, "").replace(/\s+/g, " ") + " language-" + f);
                    var i = b.textContent,
                        j = {
                            element: b,
                            language: f,
                            grammar: g,
                            code: i
                        };
                    if (!i || !g) return void c.hooks.run("complete", j);
                    if (c.hooks.run("before-highlight", j), d && _self.Worker) {
                        var k = new Worker(c.filename);
                        k.onmessage = function(a) {
                            j.highlightedCode = a.data, c.hooks.run("before-insert", j), j.element.innerHTML = j.highlightedCode, e && e.call(j.element), c.hooks.run("after-highlight", j), c.hooks.run("complete", j)
                        }, k.postMessage(JSON.stringify({
                            language: j.language,
                            code: j.code,
                            immediateClose: !0
                        }))
                    } else j.highlightedCode = c.highlight(j.code, j.grammar, j.language), c.hooks.run("before-insert", j), j.element.innerHTML = j.highlightedCode, e && e.call(b), c.hooks.run("after-highlight", j), c.hooks.run("complete", j)
                },
                highlight: function(a, b, e) {
                    var f = c.tokenize(a, b);
                    return d.stringify(c.util.encode(f), e)
                },
                tokenize: function(a, b) {
                    var d = c.Token,
                        e = [a],
                        f = b.rest;
                    if (f) {
                        for (var g in f) b[g] = f[g];
                        delete b.rest
                    }
                    a: for (var g in b)
                        if (b.hasOwnProperty(g) && b[g]) {
                            var h = b[g];
                            h = "Array" === c.util.type(h) ? h : [h];
                            for (var i = 0; i < h.length; ++i) {
                                var j = h[i],
                                    k = j.inside,
                                    l = !!j.lookbehind,
                                    m = !!j.greedy,
                                    n = 0,
                                    o = j.alias;
                                j = j.pattern || j;
                                for (var p = 0; p < e.length; p++) {
                                    var q = e[p];
                                    if (e.length > a.length) break a;
                                    if (!(q instanceof d)) {
                                        j.lastIndex = 0;
                                        var r = j.exec(q),
                                            s = 1;
                                        if (!r && m && p != e.length - 1) {
                                            var t = e[p + 1].matchedStr || e[p + 1],
                                                u = q + t;
                                            if (p < e.length - 2 && (u += e[p + 2].matchedStr || e[p + 2]), j.lastIndex = 0, r = j.exec(u), !r) continue;
                                            var v = r.index + (l ? r[1].length : 0);
                                            if (v >= q.length) continue;
                                            var w = r.index + r[0].length,
                                                x = q.length + t.length;
                                            if (s = 3, x >= w) {
                                                if (e[p + 1].greedy) continue;
                                                s = 2, u = u.slice(0, x)
                                            }
                                            q = u
                                        }
                                        if (r) {
                                            l && (n = r[1].length);
                                            var v = r.index + n,
                                                r = r[0].slice(n),
                                                w = v + r.length,
                                                y = q.slice(0, v),
                                                z = q.slice(w),
                                                A = [p, s];
                                            y && A.push(y);
                                            var B = new d(g, k ? c.tokenize(r, k) : r, o, r, m);
                                            A.push(B), z && A.push(z), Array.prototype.splice.apply(e, A)
                                        }
                                    }
                                }
                            }
                        }
                    return e
                },
                hooks: {
                    all: {},
                    add: function(a, b) {
                        var d = c.hooks.all;
                        d[a] = d[a] || [], d[a].push(b)
                    },
                    run: function(a, b) {
                        var d = c.hooks.all[a];
                        if (d && d.length)
                            for (var e, f = 0; e = d[f++];) e(b)
                    }
                }
            },
            d = c.Token = function(a, b, c, d, e) {
                this.type = a, this.content = b, this.alias = c, this.matchedStr = d || null, this.greedy = !!e
            };
        if (d.stringify = function(a, b, e) {
                if ("string" == typeof a) return a;
                if ("Array" === c.util.type(a)) return a.map(function(c) {
                    return d.stringify(c, b, a)
                }).join("");
                var f = {
                    type: a.type,
                    content: d.stringify(a.content, b, e),
                    tag: "span",
                    classes: ["token", a.type],
                    attributes: {},
                    language: b,
                    parent: e
                };
                if ("comment" == f.type && (f.attributes.spellcheck = "true"), a.alias) {
                    var g = "Array" === c.util.type(a.alias) ? a.alias : [a.alias];
                    Array.prototype.push.apply(f.classes, g)
                }
                c.hooks.run("wrap", f);
                var h = "";
                for (var i in f.attributes) h += (h ? " " : "") + i + '="' + (f.attributes[i] || "") + '"';
                return "<" + f.tag + ' class="' + f.classes.join(" ") + '" ' + h + ">" + f.content + "</" + f.tag + ">"
            }, !_self.document) return _self.addEventListener ? (_self.addEventListener("message", function(a) {
            var b = JSON.parse(a.data),
                d = b.language,
                e = b.code,
                f = b.immediateClose;
            _self.postMessage(c.highlight(e, c.languages[d], d)), f && _self.close()
        }, !1), _self.Prism) : _self.Prism;
        var e = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        return e && (c.filename = e.src, document.addEventListener && !e.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", c.highlightAll)), _self.Prism
    }();
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
    comment: /<!--[\w\W]*?-->/,
    prolog: /<\?[\w\W]+?\?>/,
    doctype: /<!DOCTYPE[\w\W]+?>/,
    cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "attr-value": {
                pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
                inside: {
                    punctuation: /[=>"']/
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: /&#?[\da-z]{1,8};/i
}, Prism.hooks.add("wrap", function(a) {
    "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"))
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = {
    comment: /\/\*[\w\W]*?\*\//,
    atrule: {
        pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
        inside: {
            rule: /@[\w-]+/
        }
    },
    url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
    string: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
    property: /(\b|\B)[\w-]+(?=\s*:)/i,
    important: /\B!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
}, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: Prism.languages.css,
        alias: "language-css"
    }
}), Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|').*?\1/i,
        inside: {
            "attr-name": {
                pattern: /^\s*style/i,
                inside: Prism.languages.markup.tag.inside
            },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {
                pattern: /.+/i,
                inside: Prism.languages.css
            }
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag)), Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0
    }],
    string: {
        pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /(\.|\\)/
        }
    },
    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(true|false)\b/,
    function: /[a-z0-9_]+(?=\()/i,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
    function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
}), Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0,
        greedy: !0
    }
}), Prism.languages.insertBefore("javascript", "class-name", {
    "template-string": {
        pattern: /`(?:\\\\|\\?[^\\])*?`/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\$\{[^}]+\}/,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    }
}), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
        alias: "language-javascript"
    }
}), Prism.languages.js = Prism.languages.javascript, ! function() {
    self.Prism && Prism.hooks.add("after-highlight", function(a) {
        var b = a.element.parentNode;
        if (b && /pre/i.test(b.nodeName) && -1 !== b.className.indexOf("code-toolbar")) {
            var c = document.createElement("div");
            if (c.setAttribute("class", "toolbar"), window.ZeroClipboard) {
                var d = document.createElement("a");
                d.innerHTML = "Copy";
                var e = new ZeroClipboard(d);
                e.on("ready", function(a) {
                    e.on("copy", function(a) {
                        var b = a.target.parentNode.parentNode.getElementsByTagName("code")[0];
                        a.clipboardData.setData("text/plain", b.textContent || b.innerText)
                    }), e.on("aftercopy", function(a) {
                        a.target.parentNode.parentNode.getElementsByTagName("code")[0].focus()
                    })
                }), c.appendChild(d)
            }
            b.appendChild(c)
        }
    })
}(), ! function(a, b) {
    "use strict";
    var c, d, e, f = a,
        g = f.document,
        h = f.navigator,
        i = f.setTimeout,
        j = f.clearTimeout,
        k = f.setInterval,
        l = f.clearInterval,
        m = f.getComputedStyle,
        n = f.encodeURIComponent,
        o = f.ActiveXObject,
        p = f.Error,
        q = f.Number.parseInt || f.parseInt,
        r = f.Number.parseFloat || f.parseFloat,
        s = f.Number.isNaN || f.isNaN,
        t = f.Date.now,
        u = f.Object.keys,
        v = f.Object.defineProperty,
        w = f.Object.prototype.hasOwnProperty,
        x = f.Array.prototype.slice,
        y = function() {
            var a = function(a) {
                return a
            };
            if ("function" == typeof f.wrap && "function" == typeof f.unwrap) try {
                var b = g.createElement("div"),
                    c = f.unwrap(b);
                1 === b.nodeType && c && 1 === c.nodeType && (a = f.unwrap)
            } catch (a) {}
            return a
        }(),
        z = function(a) {
            return x.call(a, 0)
        },
        A = function() {
            var a, c, d, e, f, g, h = z(arguments),
                i = h[0] || {};
            for (a = 1, c = h.length; c > a; a++)
                if (null != (d = h[a]))
                    for (e in d) w.call(d, e) && (f = i[e], g = d[e], i !== g && g !== b && (i[e] = g));
            return i
        },
        B = function(a) {
            var b, c, d, e;
            if ("object" != typeof a || null == a || "number" == typeof a.nodeType) b = a;
            else if ("number" == typeof a.length)
                for (b = [], c = 0, d = a.length; d > c; c++) w.call(a, c) && (b[c] = B(a[c]));
            else {
                b = {};
                for (e in a) w.call(a, e) && (b[e] = B(a[e]))
            }
            return b
        },
        C = function(a, b) {
            for (var c = {}, d = 0, e = b.length; e > d; d++) b[d] in a && (c[b[d]] = a[b[d]]);
            return c
        },
        D = function(a, b) {
            var c = {};
            for (var d in a) - 1 === b.indexOf(d) && (c[d] = a[d]);
            return c
        },
        E = function(a) {
            if (a)
                for (var b in a) w.call(a, b) && delete a[b];
            return a
        },
        F = function(a, b) {
            if (a && 1 === a.nodeType && a.ownerDocument && b && (1 === b.nodeType && b.ownerDocument && b.ownerDocument === a.ownerDocument || 9 === b.nodeType && !b.ownerDocument && b === a.ownerDocument))
                do {
                    if (a === b) return !0;
                    a = a.parentNode
                } while (a);
            return !1
        },
        G = function(a) {
            var b;
            return "string" == typeof a && a && (b = a.split("#")[0].split("?")[0], b = a.slice(0, a.lastIndexOf("/") + 1)), b
        },
        H = function(a) {
            var b, c;
            return "string" == typeof a && a && (c = a.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/), c && c[1] ? b = c[1] : (c = a.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/), c && c[1] && (b = c[1]))), b
        },
        I = function() {
            var a, b;
            try {
                throw new p
            } catch (a) {
                b = a
            }
            return b && (a = b.sourceURL || b.fileName || H(b.stack)), a
        },
        J = function() {
            var a, c, d;
            if (g.currentScript && (a = g.currentScript.src)) return a;
            if (c = g.getElementsByTagName("script"), 1 === c.length) return c[0].src || b;
            if ("readyState" in c[0])
                for (d = c.length; d--;)
                    if ("interactive" === c[d].readyState && (a = c[d].src)) return a;
            return "loading" === g.readyState && (a = c[c.length - 1].src) ? a : (a = I()) ? a : b
        },
        K = function() {
            var a, c, d, e = g.getElementsByTagName("script");
            for (a = e.length; a--;) {
                if (!(d = e[a].src)) {
                    c = null;
                    break
                }
                if (d = G(d), null == c) c = d;
                else if (c !== d) {
                    c = null;
                    break
                }
            }
            return c || b
        },
        L = function() {
            var a = G(J()) || K() || "";
            return a + "ZeroClipboard.swf"
        },
        M = function() {
            var a = /win(dows|[\s]?(nt|me|ce|xp|vista|[\d]+))/i;
            return !!h && (a.test(h.appVersion || "") || a.test(h.platform || "") || -1 !== (h.userAgent || "").indexOf("Windows"))
        },
        N = function() {
            return null == a.opener && (!!a.top && a != a.top || !!a.parent && a != a.parent)
        }(),
        O = {
            bridge: null,
            version: "0.0.0",
            pluginType: "unknown",
            disabled: null,
            outdated: null,
            sandboxed: null,
            unavailable: null,
            degraded: null,
            deactivated: null,
            overdue: null,
            ready: null
        },
        P = "11.0.0",
        Q = {},
        R = {},
        S = null,
        T = 0,
        U = 0,
        V = {
            ready: "Flash communication is established",
            error: {
                "flash-disabled": "Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.",
                "flash-outdated": "Flash is too outdated to support ZeroClipboard",
                "flash-sandboxed": "Attempting to run Flash in a sandboxed iframe, which is impossible",
                "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
                "flash-degraded": "Flash is unable to preserve data fidelity when communicating with JavaScript",
                "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.",
                "flash-overdue": "Flash communication was established but NOT within the acceptable time limit",
                "version-mismatch": "ZeroClipboard JS version number does not match ZeroClipboard SWF version number",
                "clipboard-error": "At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard",
                "config-mismatch": "ZeroClipboard configuration does not match Flash's reality",
                "swf-not-found": "The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity"
            }
        },
        W = ["flash-unavailable", "flash-degraded", "flash-overdue", "version-mismatch", "config-mismatch", "clipboard-error"],
        X = ["flash-disabled", "flash-outdated", "flash-sandboxed", "flash-unavailable", "flash-degraded", "flash-deactivated", "flash-overdue"],
        Y = new RegExp("^flash-(" + X.map(function(a) {
                return a.replace(/^flash-/, "")
            }).join("|") + ")$"),
        Z = new RegExp("^flash-(" + X.slice(1).map(function(a) {
                return a.replace(/^flash-/, "")
            }).join("|") + ")$"),
        $ = {
            swfPath: L(),
            trustedDomains: a.location.host ? [a.location.host] : [],
            cacheBust: !0,
            forceEnhancedClipboard: !1,
            flashLoadTimeout: 3e4,
            autoActivate: !0,
            bubbleEvents: !0,
            fixLineEndings: !0,
            containerId: "global-zeroclipboard-html-bridge",
            containerClass: "global-zeroclipboard-container",
            swfObjectId: "global-zeroclipboard-flash-bridge",
            hoverClass: "zeroclipboard-is-hover",
            activeClass: "zeroclipboard-is-active",
            forceHandCursor: !1,
            title: null,
            zIndex: 999999999
        },
        _ = function(a) {
            if ("object" == typeof a && null !== a)
                for (var b in a)
                    if (w.call(a, b))
                        if (/^(?:forceHandCursor|title|zIndex|bubbleEvents|fixLineEndings)$/.test(b)) $[b] = a[b];
                        else if (null == O.bridge)
                            if ("containerId" === b || "swfObjectId" === b) {
                                if (!oa(a[b])) throw new Error("The specified `" + b + "` value is not valid as an HTML4 Element ID");
                                $[b] = a[b]
                            } else $[b] = a[b];
            return "string" == typeof a && a ? w.call($, a) ? $[a] : void 0 : B($)
        },
        aa = function() {
            return Va(), {
                browser: C(h, ["userAgent", "platform", "appName", "appVersion"]),
                flash: D(O, ["bridge"]),
                zeroclipboard: {
                    version: Xa.version,
                    config: Xa.config()
                }
            }
        },
        ba = function() {
            return !!(O.disabled || O.outdated || O.sandboxed || O.unavailable || O.degraded || O.deactivated)
        },
        ca = function(a, d) {
            var e, f, g, h = {};
            if ("string" == typeof a && a) g = a.toLowerCase().split(/\s+/);
            else if ("object" == typeof a && a && "undefined" == typeof d)
                for (e in a) w.call(a, e) && "string" == typeof e && e && "function" == typeof a[e] && Xa.on(e, a[e]);
            if (g && g.length) {
                for (e = 0, f = g.length; f > e; e++) a = g[e].replace(/^on/, ""), h[a] = !0, Q[a] || (Q[a] = []), Q[a].push(d);
                if (h.ready && O.ready && Xa.emit({
                        type: "ready"
                    }), h.error) {
                    for (e = 0, f = X.length; f > e; e++)
                        if (O[X[e].replace(/^flash-/, "")] === !0) {
                            Xa.emit({
                                type: "error",
                                name: X[e]
                            });
                            break
                        }
                    c !== b && Xa.version !== c && Xa.emit({
                        type: "error",
                        name: "version-mismatch",
                        jsVersion: Xa.version,
                        swfVersion: c
                    })
                }
            }
            return Xa
        },
        da = function(a, b) {
            var c, d, e, f, g;
            if (0 === arguments.length) f = u(Q);
            else if ("string" == typeof a && a) f = a.split(/\s+/);
            else if ("object" == typeof a && a && "undefined" == typeof b)
                for (c in a) w.call(a, c) && "string" == typeof c && c && "function" == typeof a[c] && Xa.off(c, a[c]);
            if (f && f.length)
                for (c = 0, d = f.length; d > c; c++)
                    if (a = f[c].toLowerCase().replace(/^on/, ""), g = Q[a], g && g.length)
                        if (b)
                            for (e = g.indexOf(b); - 1 !== e;) g.splice(e, 1), e = g.indexOf(b, e);
                        else g.length = 0;
            return Xa
        },
        ea = function(a) {
            var b;
            return b = "string" == typeof a && a ? B(Q[a]) || null : B(Q)
        },
        fa = function(a) {
            var b, c, d;
            return a = pa(a), a && !wa(a) ? "ready" === a.type && O.overdue === !0 ? Xa.emit({
                type: "error",
                name: "flash-overdue"
            }) : (b = A({}, a), ua.call(this, b), "copy" === a.type && (d = Ea(R), c = d.data, S = d.formatMap), c) : void 0
        },
        ga = function() {
            var a = O.sandboxed;
            if (Va(), "boolean" != typeof O.ready && (O.ready = !1), O.sandboxed !== a && O.sandboxed === !0) O.ready = !1, Xa.emit({
                type: "error",
                name: "flash-sandboxed"
            });
            else if (!Xa.isFlashUnusable() && null === O.bridge) {
                var b = $.flashLoadTimeout;
                "number" == typeof b && b >= 0 && (T = i(function() {
                    "boolean" != typeof O.deactivated && (O.deactivated = !0), O.deactivated === !0 && Xa.emit({
                        type: "error",
                        name: "flash-deactivated"
                    })
                }, b)), O.overdue = !1, Ca()
            }
        },
        ha = function() {
            Xa.clearData(), Xa.blur(), Xa.emit("destroy"), Da(), Xa.off()
        },
        ia = function(a, b) {
            var c;
            if ("object" == typeof a && a && "undefined" == typeof b) c = a, Xa.clearData();
            else {
                if ("string" != typeof a || !a) return;
                c = {}, c[a] = b
            }
            for (var d in c) "string" == typeof d && d && w.call(c, d) && "string" == typeof c[d] && c[d] && (R[d] = Ua(c[d]))
        },
        ja = function(a) {
            "undefined" == typeof a ? (E(R), S = null) : "string" == typeof a && w.call(R, a) && delete R[a]
        },
        ka = function(a) {
            return "undefined" == typeof a ? B(R) : "string" == typeof a && w.call(R, a) ? R[a] : void 0
        },
        la = function(a) {
            if (a && 1 === a.nodeType) {
                d && (Ma(d, $.activeClass), d !== a && Ma(d, $.hoverClass)), d = a, La(a, $.hoverClass);
                var b = a.getAttribute("title") || $.title;
                if ("string" == typeof b && b) {
                    var c = Ba(O.bridge);
                    c && c.setAttribute("title", b)
                }
                var e = $.forceHandCursor === !0 || "pointer" === Na(a, "cursor");
                Sa(e), Ra()
            }
        },
        ma = function() {
            var a = Ba(O.bridge);
            a && (a.removeAttribute("title"), a.style.left = "0px", a.style.top = "-9999px", a.style.width = "1px", a.style.height = "1px"), d && (Ma(d, $.hoverClass), Ma(d, $.activeClass), d = null)
        },
        na = function() {
            return d || null
        },
        oa = function(a) {
            return "string" == typeof a && a && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(a)
        },
        pa = function(a) {
            var b;
            if ("string" == typeof a && a ? (b = a, a = {}) : "object" == typeof a && a && "string" == typeof a.type && a.type && (b = a.type), b) {
                b = b.toLowerCase(), !a.target && (/^(copy|aftercopy|_click)$/.test(b) || "error" === b && "clipboard-error" === a.name) && (a.target = e), A(a, {
                    type: b,
                    target: a.target || d || null,
                    relatedTarget: a.relatedTarget || null,
                    currentTarget: O && O.bridge || null,
                    timeStamp: a.timeStamp || t() || null
                });
                var c = V[a.type];
                return "error" === a.type && a.name && c && (c = c[a.name]), c && (a.message = c), "ready" === a.type && A(a, {
                    target: null,
                    version: O.version
                }), "error" === a.type && (Y.test(a.name) && A(a, {
                    target: null,
                    minimumVersion: P
                }), Z.test(a.name) && A(a, {
                    version: O.version
                })), "copy" === a.type && (a.clipboardData = {
                    setData: Xa.setData,
                    clearData: Xa.clearData
                }), "aftercopy" === a.type && (a = Fa(a, S)), a.target && !a.relatedTarget && (a.relatedTarget = qa(a.target)), ra(a)
            }
        },
        qa = function(a) {
            var b = a && a.getAttribute && a.getAttribute("data-clipboard-target");
            return b ? g.getElementById(b) : null
        },
        ra = function(a) {
            if (a && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type)) {
                var c = a.target,
                    d = "_mouseover" === a.type && a.relatedTarget ? a.relatedTarget : b,
                    e = "_mouseout" === a.type && a.relatedTarget ? a.relatedTarget : b,
                    h = Oa(c),
                    i = f.screenLeft || f.screenX || 0,
                    j = f.screenTop || f.screenY || 0,
                    k = g.body.scrollLeft + g.documentElement.scrollLeft,
                    l = g.body.scrollTop + g.documentElement.scrollTop,
                    m = h.left + ("number" == typeof a._stageX ? a._stageX : 0),
                    n = h.top + ("number" == typeof a._stageY ? a._stageY : 0),
                    o = m - k,
                    p = n - l,
                    q = i + o,
                    r = j + p,
                    s = "number" == typeof a.movementX ? a.movementX : 0,
                    t = "number" == typeof a.movementY ? a.movementY : 0;
                delete a._stageX, delete a._stageY, A(a, {
                    srcElement: c,
                    fromElement: d,
                    toElement: e,
                    screenX: q,
                    screenY: r,
                    pageX: m,
                    pageY: n,
                    clientX: o,
                    clientY: p,
                    x: o,
                    y: p,
                    movementX: s,
                    movementY: t,
                    offsetX: 0,
                    offsetY: 0,
                    layerX: 0,
                    layerY: 0
                })
            }
            return a
        },
        sa = function(a) {
            var b = a && "string" == typeof a.type && a.type || "";
            return !/^(?:(?:before)?copy|destroy)$/.test(b)
        },
        ta = function(a, b, c, d) {
            d ? i(function() {
                a.apply(b, c)
            }, 0) : a.apply(b, c)
        },
        ua = function(a) {
            if ("object" == typeof a && a && a.type) {
                var b = sa(a),
                    c = Q["*"] || [],
                    d = Q[a.type] || [],
                    e = c.concat(d);
                if (e && e.length) {
                    var g, h, i, j, k, l = this;
                    for (g = 0, h = e.length; h > g; g++) i = e[g], j = l, "string" == typeof i && "function" == typeof f[i] && (i = f[i]), "object" == typeof i && i && "function" == typeof i.handleEvent && (j = i, i = i.handleEvent), "function" == typeof i && (k = A({}, a),
                        ta(i, j, [k], b))
                }
                return this
            }
        },
        va = function(a) {
            var b = null;
            return (N === !1 || a && "error" === a.type && a.name && -1 !== W.indexOf(a.name)) && (b = !1), b
        },
        wa = function(a) {
            var b = a.target || d || null,
                f = "swf" === a._source;
            switch (delete a._source, a.type) {
                case "error":
                    var g = "flash-sandboxed" === a.name || va(a);
                    "boolean" == typeof g && (O.sandboxed = g), -1 !== X.indexOf(a.name) ? A(O, {
                        disabled: "flash-disabled" === a.name,
                        outdated: "flash-outdated" === a.name,
                        unavailable: "flash-unavailable" === a.name,
                        degraded: "flash-degraded" === a.name,
                        deactivated: "flash-deactivated" === a.name,
                        overdue: "flash-overdue" === a.name,
                        ready: !1
                    }) : "version-mismatch" === a.name && (c = a.swfVersion, A(O, {
                        disabled: !1,
                        outdated: !1,
                        unavailable: !1,
                        degraded: !1,
                        deactivated: !1,
                        overdue: !1,
                        ready: !1
                    })), Qa();
                    break;
                case "ready":
                    c = a.swfVersion;
                    var h = O.deactivated === !0;
                    A(O, {
                        disabled: !1,
                        outdated: !1,
                        sandboxed: !1,
                        unavailable: !1,
                        degraded: !1,
                        deactivated: !1,
                        overdue: h,
                        ready: !h
                    }), Qa();
                    break;
                case "beforecopy":
                    e = b;
                    break;
                case "copy":
                    var i, j, k = a.relatedTarget;
                    !R["text/html"] && !R["text/plain"] && k && (j = k.value || k.outerHTML || k.innerHTML) && (i = k.value || k.textContent || k.innerText) ? (a.clipboardData.clearData(), a.clipboardData.setData("text/plain", i), j !== i && a.clipboardData.setData("text/html", j)) : !R["text/plain"] && a.target && (i = a.target.getAttribute("data-clipboard-text")) && (a.clipboardData.clearData(), a.clipboardData.setData("text/plain", i));
                    break;
                case "aftercopy":
                    xa(a), Xa.clearData(), b && b !== Ka() && b.focus && b.focus();
                    break;
                case "_mouseover":
                    Xa.focus(b), $.bubbleEvents === !0 && f && (b && b !== a.relatedTarget && !F(a.relatedTarget, b) && ya(A({}, a, {
                        type: "mouseenter",
                        bubbles: !1,
                        cancelable: !1
                    })), ya(A({}, a, {
                        type: "mouseover"
                    })));
                    break;
                case "_mouseout":
                    Xa.blur(), $.bubbleEvents === !0 && f && (b && b !== a.relatedTarget && !F(a.relatedTarget, b) && ya(A({}, a, {
                        type: "mouseleave",
                        bubbles: !1,
                        cancelable: !1
                    })), ya(A({}, a, {
                        type: "mouseout"
                    })));
                    break;
                case "_mousedown":
                    La(b, $.activeClass), $.bubbleEvents === !0 && f && ya(A({}, a, {
                        type: a.type.slice(1)
                    }));
                    break;
                case "_mouseup":
                    Ma(b, $.activeClass), $.bubbleEvents === !0 && f && ya(A({}, a, {
                        type: a.type.slice(1)
                    }));
                    break;
                case "_click":
                    e = null, $.bubbleEvents === !0 && f && ya(A({}, a, {
                        type: a.type.slice(1)
                    }));
                    break;
                case "_mousemove":
                    $.bubbleEvents === !0 && f && ya(A({}, a, {
                        type: a.type.slice(1)
                    }))
            }
            return !!/^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type) || void 0
        },
        xa = function(a) {
            if (a.errors && a.errors.length > 0) {
                var b = B(a);
                A(b, {
                    type: "error",
                    name: "clipboard-error"
                }), delete b.success, i(function() {
                    Xa.emit(b)
                }, 0)
            }
        },
        ya = function(a) {
            if (a && "string" == typeof a.type && a) {
                var b, c = a.target || null,
                    d = c && c.ownerDocument || g,
                    e = {
                        view: d.defaultView || f,
                        canBubble: !0,
                        cancelable: !0,
                        detail: "click" === a.type ? 1 : 0,
                        button: "number" == typeof a.which ? a.which - 1 : "number" == typeof a.button ? a.button : d.createEvent ? 0 : 1
                    },
                    h = A(e, a);
                c && d.createEvent && c.dispatchEvent && (h = [h.type, h.canBubble, h.cancelable, h.view, h.detail, h.screenX, h.screenY, h.clientX, h.clientY, h.ctrlKey, h.altKey, h.shiftKey, h.metaKey, h.button, h.relatedTarget], b = d.createEvent("MouseEvents"), b.initMouseEvent && (b.initMouseEvent.apply(b, h), b._source = "js", c.dispatchEvent(b)))
            }
        },
        za = function() {
            var a = $.flashLoadTimeout;
            if ("number" == typeof a && a >= 0) {
                var b = Math.min(1e3, a / 10),
                    c = $.swfObjectId + "_fallbackContent";
                U = k(function() {
                    var a = g.getElementById(c);
                    Pa(a) && (Qa(), O.deactivated = null, Xa.emit({
                        type: "error",
                        name: "swf-not-found"
                    }))
                }, b)
            }
        },
        Aa = function() {
            var a = g.createElement("div");
            return a.id = $.containerId, a.className = $.containerClass, a.style.position = "absolute", a.style.left = "0px", a.style.top = "-9999px", a.style.width = "1px", a.style.height = "1px", a.style.zIndex = "" + Ta($.zIndex), a
        },
        Ba = function(a) {
            for (var b = a && a.parentNode; b && "OBJECT" === b.nodeName && b.parentNode;) b = b.parentNode;
            return b || null
        },
        Ca = function() {
            var a, b = O.bridge,
                c = Ba(b);
            if (!b) {
                var d = Ja(f.location.host, $),
                    e = "never" === d ? "none" : "all",
                    h = Ha(A({
                        jsVersion: Xa.version
                    }, $)),
                    i = $.swfPath + Ga($.swfPath, $);
                c = Aa();
                var j = g.createElement("div");
                c.appendChild(j), g.body.appendChild(c);
                var k = g.createElement("div"),
                    l = "activex" === O.pluginType;
                k.innerHTML = '<object id="' + $.swfObjectId + '" name="' + $.swfObjectId + '" width="100%" height="100%" ' + (l ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + i + '"') + ">" + (l ? '<param name="movie" value="' + i + '"/>' : "") + '<param name="allowScriptAccess" value="' + d + '"/><param name="allowNetworking" value="' + e + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + h + '"/><div id="' + $.swfObjectId + '_fallbackContent">&nbsp;</div></object>', b = k.firstChild, k = null, y(b).ZeroClipboard = Xa, c.replaceChild(b, j), za()
            }
            return b || (b = g[$.swfObjectId], b && (a = b.length) && (b = b[a - 1]), !b && c && (b = c.firstChild)), O.bridge = b || null, b
        },
        Da = function() {
            var a = O.bridge;
            if (a) {
                var d = Ba(a);
                d && ("activex" === O.pluginType && "readyState" in a ? (a.style.display = "none", function b() {
                    if (4 === a.readyState) {
                        for (var c in a) "function" == typeof a[c] && (a[c] = null);
                        a.parentNode && a.parentNode.removeChild(a), d.parentNode && d.parentNode.removeChild(d)
                    } else i(b, 10)
                }()) : (a.parentNode && a.parentNode.removeChild(a), d.parentNode && d.parentNode.removeChild(d))), Qa(), O.ready = null, O.bridge = null, O.deactivated = null, c = b
            }
        },
        Ea = function(a) {
            var b = {},
                c = {};
            if ("object" == typeof a && a) {
                for (var d in a)
                    if (d && w.call(a, d) && "string" == typeof a[d] && a[d]) switch (d.toLowerCase()) {
                        case "text/plain":
                        case "text":
                        case "air:text":
                        case "flash:text":
                            b.text = a[d], c.text = d;
                            break;
                        case "text/html":
                        case "html":
                        case "air:html":
                        case "flash:html":
                            b.html = a[d], c.html = d;
                            break;
                        case "application/rtf":
                        case "text/rtf":
                        case "rtf":
                        case "richtext":
                        case "air:rtf":
                        case "flash:rtf":
                            b.rtf = a[d], c.rtf = d
                    }
                return {
                    data: b,
                    formatMap: c
                }
            }
        },
        Fa = function(a, b) {
            if ("object" != typeof a || !a || "object" != typeof b || !b) return a;
            var c = {};
            for (var d in a)
                if (w.call(a, d))
                    if ("errors" === d) {
                        c[d] = a[d] ? a[d].slice() : [];
                        for (var e = 0, f = c[d].length; f > e; e++) c[d][e].format = b[c[d][e].format]
                    } else if ("success" !== d && "data" !== d) c[d] = a[d];
                    else {
                        c[d] = {};
                        var g = a[d];
                        for (var h in g) h && w.call(g, h) && w.call(b, h) && (c[d][b[h]] = g[h])
                    }
            return c
        },
        Ga = function(a, b) {
            var c = null == b || b && b.cacheBust === !0;
            return c ? (-1 === a.indexOf("?") ? "?" : "&") + "noCache=" + t() : ""
        },
        Ha = function(a) {
            var b, c, d, e, g = "",
                h = [];
            if (a.trustedDomains && ("string" == typeof a.trustedDomains ? e = [a.trustedDomains] : "object" == typeof a.trustedDomains && "length" in a.trustedDomains && (e = a.trustedDomains)), e && e.length)
                for (b = 0, c = e.length; c > b; b++)
                    if (w.call(e, b) && e[b] && "string" == typeof e[b]) {
                        if (d = Ia(e[b]), !d) continue;
                        if ("*" === d) {
                            h.length = 0, h.push(d);
                            break
                        }
                        h.push.apply(h, [d, "//" + d, f.location.protocol + "//" + d])
                    }
            return h.length && (g += "trustedOrigins=" + n(h.join(","))), a.forceEnhancedClipboard === !0 && (g += (g ? "&" : "") + "forceEnhancedClipboard=true"), "string" == typeof a.swfObjectId && a.swfObjectId && (g += (g ? "&" : "") + "swfObjectId=" + n(a.swfObjectId)), "string" == typeof a.jsVersion && a.jsVersion && (g += (g ? "&" : "") + "jsVersion=" + n(a.jsVersion)), g
        },
        Ia = function(a) {
            if (null == a || "" === a) return null;
            if (a = a.replace(/^\s+|\s+$/g, ""), "" === a) return null;
            var b = a.indexOf("//");
            a = -1 === b ? a : a.slice(b + 2);
            var c = a.indexOf("/");
            return a = -1 === c ? a : -1 === b || 0 === c ? null : a.slice(0, c), a && ".swf" === a.slice(-4).toLowerCase() ? null : a || null
        },
        Ja = function() {
            var a = function(a) {
                var b, c, d, e = [];
                if ("string" == typeof a && (a = [a]), "object" != typeof a || !a || "number" != typeof a.length) return e;
                for (b = 0, c = a.length; c > b; b++)
                    if (w.call(a, b) && (d = Ia(a[b]))) {
                        if ("*" === d) {
                            e.length = 0, e.push("*");
                            break
                        } - 1 === e.indexOf(d) && e.push(d)
                    }
                return e
            };
            return function(b, c) {
                var d = Ia(c.swfPath);
                null === d && (d = b);
                var e = a(c.trustedDomains),
                    f = e.length;
                if (f > 0) {
                    if (1 === f && "*" === e[0]) return "always";
                    if (-1 !== e.indexOf(b)) return 1 === f && b === d ? "sameDomain" : "always"
                }
                return "never"
            }
        }(),
        Ka = function() {
            try {
                return g.activeElement
            } catch (a) {
                return null
            }
        },
        La = function(a, b) {
            var c, d, e, f = [];
            if ("string" == typeof b && b && (f = b.split(/\s+/)), a && 1 === a.nodeType && f.length > 0) {
                for (e = (" " + (a.className || "") + " ").replace(/[\t\r\n\f]/g, " "), c = 0, d = f.length; d > c; c++) - 1 === e.indexOf(" " + f[c] + " ") && (e += f[c] + " ");
                e = e.replace(/^\s+|\s+$/g, ""), e !== a.className && (a.className = e)
            }
            return a
        },
        Ma = function(a, b) {
            var c, d, e, f = [];
            if ("string" == typeof b && b && (f = b.split(/\s+/)), a && 1 === a.nodeType && f.length > 0 && a.className) {
                for (e = (" " + a.className + " ").replace(/[\t\r\n\f]/g, " "), c = 0, d = f.length; d > c; c++) e = e.replace(" " + f[c] + " ", " ");
                e = e.replace(/^\s+|\s+$/g, ""), e !== a.className && (a.className = e)
            }
            return a
        },
        Na = function(a, b) {
            var c = m(a, null).getPropertyValue(b);
            return "cursor" !== b || c && "auto" !== c || "A" !== a.nodeName ? c : "pointer"
        },
        Oa = function(a) {
            var b = {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            };
            if (a.getBoundingClientRect) {
                var c = a.getBoundingClientRect(),
                    d = f.pageXOffset,
                    e = f.pageYOffset,
                    h = g.documentElement.clientLeft || 0,
                    i = g.documentElement.clientTop || 0,
                    j = 0,
                    k = 0;
                if ("relative" === Na(g.body, "position")) {
                    var l = g.body.getBoundingClientRect(),
                        m = g.documentElement.getBoundingClientRect();
                    j = l.left - m.left || 0, k = l.top - m.top || 0
                }
                b.left = c.left + d - h - j, b.top = c.top + e - i - k, b.width = "width" in c ? c.width : c.right - c.left, b.height = "height" in c ? c.height : c.bottom - c.top
            }
            return b
        },
        Pa = function(a) {
            if (!a) return !1;
            var b = m(a, null);
            if (!b) return !1;
            var c = r(b.height) > 0,
                d = r(b.width) > 0,
                e = r(b.top) >= 0,
                f = r(b.left) >= 0,
                g = c && d && e && f,
                h = g ? null : Oa(a),
                i = "none" !== b.display && "collapse" !== b.visibility && (g || !!h && (c || h.height > 0) && (d || h.width > 0) && (e || h.top >= 0) && (f || h.left >= 0));
            return i
        },
        Qa = function() {
            j(T), T = 0, l(U), U = 0
        },
        Ra = function() {
            var a;
            if (d && (a = Ba(O.bridge))) {
                var b = Oa(d);
                A(a.style, {
                    width: b.width + "px",
                    height: b.height + "px",
                    top: b.top + "px",
                    left: b.left + "px",
                    zIndex: "" + Ta($.zIndex)
                })
            }
        },
        Sa = function(a) {
            O.ready === !0 && (O.bridge && "function" == typeof O.bridge.setHandCursor ? O.bridge.setHandCursor(a) : O.ready = !1)
        },
        Ta = function(a) {
            if (/^(?:auto|inherit)$/.test(a)) return a;
            var b;
            return "number" != typeof a || s(a) ? "string" == typeof a && (b = Ta(q(a, 10))) : b = a, "number" == typeof b ? b : "auto"
        },
        Ua = function(a) {
            var b = /(\r\n|\r|\n)/g;
            return "string" == typeof a && $.fixLineEndings === !0 && (M() ? /((^|[^\r])\n|\r([^\n]|$))/.test(a) && (a = a.replace(b, "\r\n")) : /\r/.test(a) && (a = a.replace(b, "\n"))), a
        },
        Va = function(b) {
            var c, d, e, f = O.sandboxed,
                g = null;
            if (b = b === !0, N === !1) g = !1;
            else {
                try {
                    d = a.frameElement || null
                } catch (a) {
                    e = {
                        name: a.name,
                        message: a.message
                    }
                }
                if (d && 1 === d.nodeType && "IFRAME" === d.nodeName) try {
                    g = d.hasAttribute("sandbox")
                } catch (a) {
                    g = null
                } else {
                    try {
                        c = document.domain || null
                    } catch (a) {
                        c = null
                    }(null === c || e && "SecurityError" === e.name && /(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(e.message.toLowerCase())) && (g = !0)
                }
            }
            return O.sandboxed = g, f === g || b || Wa(o), g
        },
        Wa = function(a) {
            function b(a) {
                var b = a.match(/[\d]+/g);
                return b.length = 3, b.join(".")
            }

            function c(a) {
                return !!a && (a = a.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(a) || "chrome.plugin" === a.slice(-13))
            }

            function d(a) {
                a && (i = !0, a.version && (l = b(a.version)), !l && a.description && (l = b(a.description)), a.filename && (k = c(a.filename)))
            }
            var e, f, g, i = !1,
                j = !1,
                k = !1,
                l = "";
            if (h.plugins && h.plugins.length) e = h.plugins["Shockwave Flash"], d(e), h.plugins["Shockwave Flash 2.0"] && (i = !0, l = "2.0.0.11");
            else if (h.mimeTypes && h.mimeTypes.length) g = h.mimeTypes["application/x-shockwave-flash"], e = g && g.enabledPlugin, d(e);
            else if ("undefined" != typeof a) {
                j = !0;
                try {
                    f = new a("ShockwaveFlash.ShockwaveFlash.7"), i = !0, l = b(f.GetVariable("$version"))
                } catch (c) {
                    try {
                        f = new a("ShockwaveFlash.ShockwaveFlash.6"), i = !0, l = "6.0.21"
                    } catch (c) {
                        try {
                            f = new a("ShockwaveFlash.ShockwaveFlash"), i = !0, l = b(f.GetVariable("$version"))
                        } catch (a) {
                            j = !1
                        }
                    }
                }
            }
            O.disabled = i !== !0, O.outdated = l && r(l) < r(P), O.version = l || "0.0.0", O.pluginType = k ? "pepper" : j ? "activex" : i ? "netscape" : "unknown"
        };
    Wa(o), Va(!0);
    var Xa = function() {
        return this instanceof Xa ? void("function" == typeof Xa._createClient && Xa._createClient.apply(this, z(arguments))) : new Xa
    };
    v(Xa, "version", {
        value: "2.3.0-beta.1",
        writable: !1,
        configurable: !0,
        enumerable: !0
    }), Xa.config = function() {
        return _.apply(this, z(arguments))
    }, Xa.state = function() {
        return aa.apply(this, z(arguments))
    }, Xa.isFlashUnusable = function() {
        return ba.apply(this, z(arguments))
    }, Xa.on = function() {
        return ca.apply(this, z(arguments))
    }, Xa.off = function() {
        return da.apply(this, z(arguments))
    }, Xa.handlers = function() {
        return ea.apply(this, z(arguments))
    }, Xa.emit = function() {
        return fa.apply(this, z(arguments))
    }, Xa.create = function() {
        return ga.apply(this, z(arguments))
    }, Xa.destroy = function() {
        return ha.apply(this, z(arguments))
    }, Xa.setData = function() {
        return ia.apply(this, z(arguments))
    }, Xa.clearData = function() {
        return ja.apply(this, z(arguments))
    }, Xa.getData = function() {
        return ka.apply(this, z(arguments))
    }, Xa.focus = Xa.activate = function() {
        return la.apply(this, z(arguments))
    }, Xa.blur = Xa.deactivate = function() {
        return ma.apply(this, z(arguments))
    }, Xa.activeElement = function() {
        return na.apply(this, z(arguments))
    };
    var Ya = 0,
        Za = {},
        $a = 0,
        _a = {},
        ab = {};
    A($, {
        autoActivate: !0
    });
    var bb = function(a) {
            var b = this;
            b.id = "" + Ya++, Za[b.id] = {
                instance: b,
                elements: [],
                handlers: {}
            }, a && b.clip(a), Xa.on("*", function(a) {
                return b.emit(a)
            }), Xa.on("destroy", function() {
                b.destroy()
            }), Xa.create()
        },
        cb = function(a, d) {
            var e, f, g, h = {},
                i = Za[this.id],
                j = i && i.handlers;
            if (!i) throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");
            if ("string" == typeof a && a) g = a.toLowerCase().split(/\s+/);
            else if ("object" == typeof a && a && "undefined" == typeof d)
                for (e in a) w.call(a, e) && "string" == typeof e && e && "function" == typeof a[e] && this.on(e, a[e]);
            if (g && g.length) {
                for (e = 0, f = g.length; f > e; e++) a = g[e].replace(/^on/, ""), h[a] = !0, j[a] || (j[a] = []), j[a].push(d);
                if (h.ready && O.ready && this.emit({
                        type: "ready",
                        client: this
                    }), h.error) {
                    for (e = 0, f = X.length; f > e; e++)
                        if (O[X[e].replace(/^flash-/, "")]) {
                            this.emit({
                                type: "error",
                                name: X[e],
                                client: this
                            });
                            break
                        }
                    c !== b && Xa.version !== c && this.emit({
                        type: "error",
                        name: "version-mismatch",
                        jsVersion: Xa.version,
                        swfVersion: c
                    })
                }
            }
            return this
        },
        db = function(a, b) {
            var c, d, e, f, g, h = Za[this.id],
                i = h && h.handlers;
            if (!i) return this;
            if (0 === arguments.length) f = u(i);
            else if ("string" == typeof a && a) f = a.split(/\s+/);
            else if ("object" == typeof a && a && "undefined" == typeof b)
                for (c in a) w.call(a, c) && "string" == typeof c && c && "function" == typeof a[c] && this.off(c, a[c]);
            if (f && f.length)
                for (c = 0, d = f.length; d > c; c++)
                    if (a = f[c].toLowerCase().replace(/^on/, ""), g = i[a], g && g.length)
                        if (b)
                            for (e = g.indexOf(b); - 1 !== e;) g.splice(e, 1), e = g.indexOf(b, e);
                        else g.length = 0;
            return this
        },
        eb = function(a) {
            var b = null,
                c = Za[this.id] && Za[this.id].handlers;
            return c && (b = "string" == typeof a && a ? c[a] ? c[a].slice(0) : [] : B(c)), b
        },
        fb = function(a) {
            if (kb.call(this, a)) {
                "object" == typeof a && a && "string" == typeof a.type && a.type && (a = A({}, a));
                var b = A({}, pa(a), {
                    client: this
                });
                lb.call(this, b)
            }
            return this
        },
        gb = function(a) {
            if (!Za[this.id]) throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");
            a = mb(a);
            for (var b = 0; b < a.length; b++)
                if (w.call(a, b) && a[b] && 1 === a[b].nodeType) {
                    a[b].zcClippingId ? -1 === _a[a[b].zcClippingId].indexOf(this.id) && _a[a[b].zcClippingId].push(this.id) : (a[b].zcClippingId = "zcClippingId_" + $a++, _a[a[b].zcClippingId] = [this.id], $.autoActivate === !0 && nb(a[b]));
                    var c = Za[this.id] && Za[this.id].elements; - 1 === c.indexOf(a[b]) && c.push(a[b])
                }
            return this
        },
        hb = function(a) {
            var b = Za[this.id];
            if (!b) return this;
            var c, d = b.elements;
            a = "undefined" == typeof a ? d.slice(0) : mb(a);
            for (var e = a.length; e--;)
                if (w.call(a, e) && a[e] && 1 === a[e].nodeType) {
                    for (c = 0; - 1 !== (c = d.indexOf(a[e], c));) d.splice(c, 1);
                    var f = _a[a[e].zcClippingId];
                    if (f) {
                        for (c = 0; - 1 !== (c = f.indexOf(this.id, c));) f.splice(c, 1);
                        0 === f.length && ($.autoActivate === !0 && ob(a[e]), delete a[e].zcClippingId)
                    }
                }
            return this
        },
        ib = function() {
            var a = Za[this.id];
            return a && a.elements ? a.elements.slice(0) : []
        },
        jb = function() {
            Za[this.id] && (this.unclip(), this.off(), delete Za[this.id])
        },
        kb = function(a) {
            if (!a || !a.type) return !1;
            if (a.client && a.client !== this) return !1;
            var b = Za[this.id],
                c = b && b.elements,
                d = !!c && c.length > 0,
                e = !a.target || d && -1 !== c.indexOf(a.target),
                f = a.relatedTarget && d && -1 !== c.indexOf(a.relatedTarget),
                g = a.client && a.client === this;
            return !(!b || !(e || f || g))
        },
        lb = function(a) {
            var b = Za[this.id];
            if ("object" == typeof a && a && a.type && b) {
                var c = sa(a),
                    d = b && b.handlers["*"] || [],
                    e = b && b.handlers[a.type] || [],
                    g = d.concat(e);
                if (g && g.length) {
                    var h, i, j, k, l, m = this;
                    for (h = 0, i = g.length; i > h; h++) j = g[h], k = m, "string" == typeof j && "function" == typeof f[j] && (j = f[j]), "object" == typeof j && j && "function" == typeof j.handleEvent && (k = j, j = j.handleEvent), "function" == typeof j && (l = A({}, a), ta(j, k, [l], c))
                }
            }
        },
        mb = function(a) {
            return "string" == typeof a && (a = []), "number" != typeof a.length ? [a] : a
        },
        nb = function(a) {
            if (a && 1 === a.nodeType) {
                var b = function(a) {
                        (a || (a = f.event)) && ("js" !== a._source && (a.stopImmediatePropagation(), a.preventDefault()), delete a._source)
                    },
                    c = function(c) {
                        (c || (c = f.event)) && (b(c), Xa.focus(a))
                    };
                a.addEventListener("mouseover", c, !1), a.addEventListener("mouseout", b, !1), a.addEventListener("mouseenter", b, !1), a.addEventListener("mouseleave", b, !1), a.addEventListener("mousemove", b, !1), ab[a.zcClippingId] = {
                    mouseover: c,
                    mouseout: b,
                    mouseenter: b,
                    mouseleave: b,
                    mousemove: b
                }
            }
        },
        ob = function(a) {
            if (a && 1 === a.nodeType) {
                var b = ab[a.zcClippingId];
                if ("object" == typeof b && b) {
                    for (var c, d, e = ["move", "leave", "enter", "out", "over"], f = 0, g = e.length; g > f; f++) c = "mouse" + e[f], d = b[c], "function" == typeof d && a.removeEventListener(c, d, !1);
                    delete ab[a.zcClippingId]
                }
            }
        };
    Xa._createClient = function() {
        bb.apply(this, z(arguments))
    }, Xa.prototype.on = function() {
        return cb.apply(this, z(arguments))
    }, Xa.prototype.off = function() {
        return db.apply(this, z(arguments))
    }, Xa.prototype.handlers = function() {
        return eb.apply(this, z(arguments))
    }, Xa.prototype.emit = function() {
        return fb.apply(this, z(arguments))
    }, Xa.prototype.clip = function() {
        return gb.apply(this, z(arguments))
    }, Xa.prototype.unclip = function() {
        return hb.apply(this, z(arguments))
    }, Xa.prototype.elements = function() {
        return ib.apply(this, z(arguments))
    }, Xa.prototype.destroy = function() {
        return jb.apply(this, z(arguments))
    }, Xa.prototype.setText = function(a) {
        if (!Za[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        return Xa.setData("text/plain", a), this
    }, Xa.prototype.setHtml = function(a) {
        if (!Za[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        return Xa.setData("text/html", a), this
    }, Xa.prototype.setRichText = function(a) {
        if (!Za[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        return Xa.setData("application/rtf", a), this
    }, Xa.prototype.setData = function() {
        if (!Za[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        return Xa.setData.apply(this, z(arguments)), this
    }, Xa.prototype.clearData = function() {
        if (!Za[this.id]) throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");
        return Xa.clearData.apply(this, z(arguments)), this
    }, Xa.prototype.getData = function() {
        if (!Za[this.id]) throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");
        return Xa.getData.apply(this, z(arguments))
    }, "function" == typeof define && define.amd ? define(function() {
        return Xa
    }) : "object" == typeof module && module && "object" == typeof module.exports && module.exports ? module.exports = Xa : a.ZeroClipboard = Xa
}(function() {
    return this || window
}()),
    function(a) {
        a.extend(a.fn, {
            validate: function(b) {
                if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var c = a.data(this[0], "validator");
                return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function(b) {
                    c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
                }), this.submit(function(b) {
                    function d() {
                        var d;
                        return !c.settings.submitHandler || (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1)
                    }
                    return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
                })), c)
            },
            valid: function() {
                var b, c;
                return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), this.each(function() {
                    b = c.element(this) && b
                })), b
            },
            removeAttrs: function(b) {
                var c = {},
                    d = this;
                return a.each(b.split(/\s/), function(a, b) {
                    c[b] = d.attr(b), d.removeAttr(b)
                }), c
            },
            rules: function(b, c) {
                var d, e, f, g, h, i, j = this[0];
                if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {}, a.each(c.split(/\s/), function(b, c) {
                            i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
                        }), i) : (delete e[j.name], f)
                }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
                    required: h
                }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                    remote: h
                })), g
            }
        }), a.extend(a.expr[":"], {
            blank: function(b) {
                return !a.trim("" + a(b).val())
            },
            filled: function(b) {
                return !!a.trim("" + a(b).val())
            },
            unchecked: function(b) {
                return !a(b).prop("checked")
            }
        }), a.validator = function(b, c) {
            this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
        }, a.validator.format = function(b, c) {
            return 1 === arguments.length ? function() {
                var c = a.makeArray(arguments);
                return c.unshift(b), a.validator.format.apply(this, c)
            } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
                b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                    return c
                })
            }), b)
        }, a.extend(a.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusInvalid: !0,
                errorContainer: a([]),
                errorLabelContainer: a([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(a) {
                    this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide())
                },
                onfocusout: function(a) {
                    this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
                },
                onkeyup: function(a, b) {
                    (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
                },
                onclick: function(a) {
                    a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
                },
                highlight: function(b, c, d) {
                    "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
                },
                unhighlight: function(b, c, d) {
                    "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
                }
            },
            setDefaults: function(b) {
                a.extend(a.validator.defaults, b)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: a.validator.format("Please enter no more than {0} characters."),
                minlength: a.validator.format("Please enter at least {0} characters."),
                rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
                range: a.validator.format("Please enter a value between {0} and {1}."),
                max: a.validator.format("Please enter a value less than or equal to {0}."),
                min: a.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function b(b) {
                        var c = a.data(this[0].form, "validator"),
                            d = "on" + b.type.replace(/^validate/, ""),
                            e = c.settings;
                        e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b)
                    }
                    this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var c, d = this.groups = {};
                    a.each(this.settings.groups, function(b, c) {
                        "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
                            d[c] = b
                        })
                    }), c = this.settings.rules, a.each(c, function(b, d) {
                        c[b] = a.validator.normalizeRule(d)
                    }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                },
                form: function() {
                    return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                    return this.valid()
                },
                element: function(b) {
                    var c = this.clean(b),
                        d = this.validationTargetFor(c),
                        e = !0;
                    return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
                },
                showErrors: function(b) {
                    if (b) {
                        a.extend(this.errorMap, b), this.errorList = [];
                        for (var c in b) this.errorList.push({
                            message: b[c],
                            element: this.findByName(c)[0]
                        });
                        this.successList = a.grep(this.successList, function(a) {
                            return !(a.name in b)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(a) {
                    var b, c = 0;
                    for (b in a) c++;
                    return c
                },
                hideErrors: function() {
                    this.addWrapper(this.toHide).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (a) {}
                },
                findLastActive: function() {
                    var b = this.lastActive;
                    return b && 1 === a.grep(this.errorList, function(a) {
                            return a.element.name === b.name
                        }).length && b
                },
                elements: function() {
                    var b = this,
                        c = {};
                    return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                        return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in c || !b.objectLength(a(this).rules())) && (c[this.name] = !0, !0)
                    })
                },
                clean: function(b) {
                    return a(b)[0]
                },
                errors: function() {
                    var b = this.settings.errorClass.split(" ").join(".");
                    return a(this.settings.errorElement + "." + b, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(a) {
                    this.reset(), this.toHide = this.errorsFor(a)
                },
                elementValue: function(b) {
                    var c, d = a(b),
                        e = d.attr("type");
                    return "radio" === e || "checkbox" === e ? a("input[name='" + d.attr("name") + "']:checked").val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
                },
                check: function(b) {
                    b = this.validationTargetFor(this.clean(b));
                    var c, d, e, f = a(b).rules(),
                        g = a.map(f, function(a, b) {
                            return b
                        }).length,
                        h = !1,
                        i = this.elementValue(b);
                    for (d in f) {
                        e = {
                            method: d,
                            parameters: f[d]
                        };
                        try {
                            if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
                                h = !0;
                                continue
                            }
                            if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                            if (!c) return this.formatAndAdd(b, e), !1
                        } catch (a) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", a), a
                        }
                    }
                    if (!h) return this.objectLength(f) && this.successList.push(b), !0
                },
                customDataMessage: function(b, c) {
                    return a(b).data("msg" + c[0].toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
                },
                customMessage: function(a, b) {
                    var c = this.settings.messages[a];
                    return c && (c.constructor === String ? c : c[b])
                },
                findDefined: function() {
                    for (var a = 0; a < arguments.length; a++)
                        if (void 0 !== arguments[a]) return arguments[a]
                },
                defaultMessage: function(b, c) {
                    return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
                },
                formatAndAdd: function(b, c) {
                    var d = this.defaultMessage(b, c.method),
                        e = /\$?\{(\d+)\}/g;
                    "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
                        message: d,
                        element: b,
                        method: c.method
                    }), this.errorMap[b.name] = d, this.submitted[b.name] = d
                },
                addWrapper: function(a) {
                    return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
                },
                defaultShowErrors: function() {
                    var a, b, c;
                    for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                    if (this.settings.unhighlight)
                        for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return a(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(b, c) {
                    var d = this.errorsFor(b);
                    d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), d.html(c)) : (d = a("<" + this.settings.errorElement + ">").attr("for", this.idOrName(b)).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b))), !c && this.settings.success && (d.text(""), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d, b)), this.toShow = this.toShow.add(d)
                },
                errorsFor: function(b) {
                    var c = this.idOrName(b);
                    return this.errors().filter(function() {
                        return a(this).attr("for") === c
                    })
                },
                idOrName: function(a) {
                    return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
                },
                validationTargetFor: function(a) {
                    return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
                },
                checkable: function(a) {
                    return /radio|checkbox/i.test(a.type)
                },
                findByName: function(b) {
                    return a(this.currentForm).find("[name='" + b + "']")
                },
                getLength: function(b, c) {
                    switch (c.nodeName.toLowerCase()) {
                        case "select":
                            return a("option:selected", c).length;
                        case "input":
                            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                    }
                    return b.length
                },
                depend: function(a, b) {
                    return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
                },
                dependTypes: {
                    boolean: function(a) {
                        return a
                    },
                    string: function(b, c) {
                        return !!a(b, c.form).length
                    },
                    function: function(a, b) {
                        return a(b)
                    }
                },
                optional: function(b) {
                    var c = this.elementValue(b);
                    return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
                },
                startRequest: function(a) {
                    this.pending[a.name] || (this.pendingRequest++,
                        this.pending[a.name] = !0)
                },
                stopRequest: function(b, c) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(b) {
                    return a.data(b, "previousValue") || a.data(b, "previousValue", {
                            old: null,
                            valid: !0,
                            message: this.defaultMessage(b, "remote")
                        })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(b, c) {
                b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
            },
            classRules: function(b) {
                var c = {},
                    d = a(b).attr("class");
                return d && a.each(d.split(" "), function() {
                    this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
                }), c
            },
            attributeRules: function(b) {
                var c, d, e = {},
                    f = a(b),
                    g = b.getAttribute("type");
                for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
                return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
            },
            dataRules: function(b) {
                var c, d, e = {},
                    f = a(b);
                for (c in a.validator.methods) d = f.data("rule" + c[0].toUpperCase() + c.substring(1).toLowerCase()), void 0 !== d && (e[c] = d);
                return e
            },
            staticRules: function(b) {
                var c = {},
                    d = a.data(b.form, "validator");
                return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
            },
            normalizeRules: function(b, c) {
                return a.each(b, function(d, e) {
                    if (e === !1) return void delete b[d];
                    if (e.param || e.depends) {
                        var f = !0;
                        switch (typeof e.depends) {
                            case "string":
                                f = !!a(e.depends, c.form).length;
                                break;
                            case "function":
                                f = e.depends.call(c, c)
                        }
                        f ? b[d] = void 0 === e.param || e.param : delete b[d]
                    }
                }), a.each(b, function(d, e) {
                    b[d] = a.isFunction(e) ? e(c) : e
                }), a.each(["minlength", "maxlength"], function() {
                    b[this] && (b[this] = Number(b[this]))
                }), a.each(["rangelength", "range"], function() {
                    var c;
                    b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
                }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
            },
            normalizeRule: function(b) {
                if ("string" == typeof b) {
                    var c = {};
                    a.each(b.split(/\s/), function() {
                        c[this] = !0
                    }), b = c
                }
                return b
            },
            addMethod: function(b, c, d) {
                a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
            },
            methods: {
                required: function(b, c, d) {
                    if (!this.depend(d, c)) return "dependency-mismatch";
                    if ("select" === c.nodeName.toLowerCase()) {
                        var e = a(c).val();
                        return e && e.length > 0
                    }
                    return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
                },
                email: function(a, b) {
                    return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
                },
                url: function(a, b) {
                    return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
                },
                date: function(a, b) {
                    return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
                },
                dateISO: function(a, b) {
                    return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)
                },
                number: function(a, b) {
                    return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
                },
                digits: function(a, b) {
                    return this.optional(b) || /^\d+$/.test(a)
                },
                creditcard: function(a, b) {
                    if (this.optional(b)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(a)) return !1;
                    var c, d, e = 0,
                        f = 0,
                        g = !1;
                    if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
                    for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
                    return e % 10 === 0
                },
                minlength: function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                    return this.optional(c) || e >= d
                },
                maxlength: function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                    return this.optional(c) || d >= e
                },
                rangelength: function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                    return this.optional(c) || e >= d[0] && e <= d[1]
                },
                min: function(a, b, c) {
                    return this.optional(b) || a >= c
                },
                max: function(a, b, c) {
                    return this.optional(b) || c >= a
                },
                range: function(a, b, c) {
                    return this.optional(b) || a >= c[0] && a <= c[1]
                },
                equalTo: function(b, c, d) {
                    var e = a(d);
                    return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        a(c).valid()
                    }), b === e.val()
                },
                remote: function(b, c, d) {
                    if (this.optional(c)) return "dependency-mismatch";
                    var e, f, g = this.previousValue(c);
                    return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {
                            url: d
                        } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
                        url: d,
                        mode: "abort",
                        port: "validate" + c.name,
                        dataType: "json",
                        data: f,
                        context: e.currentForm,
                        success: function(d) {
                            var f, h, i, j = d === !0 || "true" === d;
                            e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
                        }
                    }, d)), "pending")
                }
            }
        }), a.format = function() {
            throw "$.format has been deprecated. Please use $.validator.format instead."
        }
    }(jQuery),
    function(a) {
        var b, c = {};
        a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
            var e = a.port;
            "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
        }) : (b = a.ajax, a.ajax = function(d) {
            var e = ("mode" in d ? d : a.ajaxSettings).mode,
                f = ("port" in d ? d : a.ajaxSettings).port;
            return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
        })
    }(jQuery),
    function(a) {
        a.extend(a.fn, {
            validateDelegate: function(b, c, d) {
                return this.bind(c, function(c) {
                    var e = a(c.target);
                    return e.is(b) ? d.apply(e, arguments) : void 0
                })
            }
        })
    }(jQuery);
  
};