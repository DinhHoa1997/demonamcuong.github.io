(function(sttc) {
    /* 
     
         Copyright The Closure Library Authors. 
         SPDX-License-Identifier: Apache-2.0 
        */
    var n;

    function aa(a) { var b = 0; return function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) { if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value; return a };

    function ca(a) { a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global]; for (var b = 0; b < a.length; ++b) { var c = a[b]; if (c && c.Math == Math) return c } throw Error("Cannot find global object"); }
    var da = ca(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        r = {},
        ha = {};

    function t(a, b) { var c = ha[b]; if (null == c) return a[b];
        c = a[c]; return void 0 !== c ? c : a[b] }

    function ia(a, b, c) { if (b) a: { var d = a.split(".");a = 1 === d.length; var e = d[0],
                f;!a && e in r ? f = r : f = da; for (e = 0; e < d.length - 1; e++) { var g = d[e]; if (!(g in f)) break a;
                f = f[g] }
            d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ba(r, d, { configurable: !0, writable: !0, value: b }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = fa ? da.Symbol(d) : "$jscp$" + a + "$" + d), ba(f, ha[d], { configurable: !0, writable: !0, value: b }))) } }
    ia("Symbol", function(a) {
        function b(f) { if (this instanceof b) throw new TypeError("Symbol is not a constructor"); return new c(d + (f || "") + "_" + e++, f) }

        function c(f, g) { this.g = f;
            ba(this, "description", { configurable: !0, writable: !0, value: g }) } if (a) return a;
        c.prototype.toString = function() { return this.g }; var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0; return b }, "es6");
    ia("Symbol.iterator", function(a) { if (a) return a;
        a = (0, r.Symbol)("Symbol.iterator"); for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) { var d = da[b[c]]; "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, { configurable: !0, writable: !0, value: function() { return ja(aa(this)) } }) } return a }, "es6");

    function ja(a) { a = { next: a };
        a[t(r.Symbol, "iterator")] = function() { return this }; return a }

    function ka(a) { return a.raw = a }

    function u(a) { var b = "undefined" != typeof r.Symbol && t(r.Symbol, "iterator") && a[t(r.Symbol, "iterator")]; return b ? b.call(a) : { next: aa(a) } }

    function la(a) { if (!(a instanceof Array)) { a = u(a); for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c } return a }
    var ma = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a; return new b },
        na;
    if (fa && "function" == typeof Object.setPrototypeOf) na = Object.setPrototypeOf;
    else { var oa;
        a: { var pa = { a: !0 },
                qa = {}; try { qa.__proto__ = pa;
                oa = qa.a; break a } catch (a) {}
            oa = !1 }
        na = oa ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null }
    var ra = na;

    function x(a, b) { a.prototype = ma(b.prototype);
        a.prototype.constructor = a; if (ra) ra(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) { var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d) } else a[c] = b[c];
        a.Ja = b.prototype }

    function sa(a, b) { return Object.prototype.hasOwnProperty.call(a, b) }
    ia("WeakMap", function(a) {
        function b(g) { this.g = (f += Math.random() + 1).toString(); if (g) { g = u(g); for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1]) } }

        function c() {}

        function d(g) { var h = typeof g; return "object" === h && null !== g || "function" === h }
        if (function() { if (!a || !Object.seal) return !1; try { var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]); if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4); return !k.has(g) && 4 == k.get(h) } catch (l) { return !1 } }()) return a;
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(g, h) { if (!d(g)) throw Error("Invalid WeakMap key"); if (!sa(g, e)) { var k = new c;
                ba(g, e, { value: k }) } if (!sa(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.g] = h; return this };
        b.prototype.get = function(g) { return d(g) && sa(g, e) ? g[e][this.g] : void 0 };
        b.prototype.has = function(g) { return d(g) && sa(g, e) && sa(g[e], this.g) };
        b.prototype.delete = function(g) { return d(g) && sa(g, e) && sa(g[e], this.g) ? delete g[e][this.g] : !1 };
        return b
    }, "es6");
    ia("Map", function(a) {
        function b() { var h = {}; return h.u = h.next = h.head = h }

        function c(h, k) { var l = h.g; return ja(function() { if (l) { for (; l.head != h.g;) l = l.u; for (; l.next != l.head;) return l = l.next, { done: !1, value: k(l) };
                    l = null } return { done: !0, value: void 0 } }) }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h.h[l];
            if (m && sa(h.h, l))
                for (h = 0; h < m.length; h++) { var q = m[h]; if (k !== k && q.key !== q.key || k === q.key) return { id: l, list: m, index: h, m: q } }
            return {
                id: l,
                list: m,
                index: -1,
                m: void 0
            }
        }

        function e(h) { this.h = {};
            this.g = b();
            this.size = 0; if (h) { h = u(h); for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1]) } }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({ x: 4 }),
                        k = new a(u([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({ x: 4 }) || k.set({ x: 4 }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x ||
                        "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (q) { return !1 }
            }()) return a;
        var f = new r.WeakMap;
        e.prototype.set = function(h, k) { h = 0 === h ? 0 : h; var l = d(this, h);
            l.list || (l.list = this.h[l.id] = []);
            l.m ? l.m.value = k : (l.m = { next: this.g, u: this.g.u, head: this.g, key: h, value: k }, l.list.push(l.m), this.g.u.next = l.m, this.g.u = l.m, this.size++); return this };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.m && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.m.u.next = h.m.next, h.m.next.u = h.m.u, h.m.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() { this.h = {};
            this.g = this.g.u = b();
            this.size = 0 };
        e.prototype.has = function(h) { return !!d(this, h).m };
        e.prototype.get = function(h) { return (h = d(this, h).m) && h.value };
        e.prototype.entries = function() { return c(this, function(h) { return [h.key, h.value] }) };
        e.prototype.keys = function() { return c(this, function(h) { return h.key }) };
        e.prototype.values = function() { return c(this, function(h) { return h.value }) };
        e.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                h.call(k, m[1], m[0], this)
        };
        e.prototype[t(r.Symbol, "iterator")] = e.prototype.entries;
        var g = 0;
        return e
    }, "es6");

    function ta(a, b, c) { if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined"); if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression"); return a + "" }
    ia("String.prototype.endsWith", function(a) { return a ? a : function(b, c) { var d = ta(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length)); for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e } }, "es6");
    ia("Array.prototype.find", function(a) { return a ? a : function(b, c) { a: { var d = this;d instanceof String && (d = String(d)); for (var e = d.length, f = 0; f < e; f++) { var g = d[f]; if (b.call(c, g, f, d)) { b = g; break a } }
                b = void 0 } return b } }, "es6");
    ia("String.prototype.startsWith", function(a) { return a ? a : function(b, c) { var d = ta(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length)); for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f } }, "es6");

    function ua(a, b) { a instanceof String && (a += ""); var c = 0,
            d = !1,
            e = { next: function() { if (!d && c < a.length) { var f = c++; return { value: b(f, a[f]), done: !1 } }
                    d = !0; return { done: !0, value: void 0 } } };
        e[t(r.Symbol, "iterator")] = function() { return e }; return e }
    ia("Set", function(a) {
        function b(c) { this.g = new r.Map; if (c) { c = u(c); for (var d; !(d = c.next()).done;) this.add(d.value) }
            this.size = this.g.size }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({ x: 4 }),
                        d = new a(u([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({ x: 4 }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x ||
                        f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) { return !1 }
            }()) return a;
        b.prototype.add = function(c) { c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size; return this };
        b.prototype.delete = function(c) { c = this.g.delete(c);
            this.size = this.g.size; return c };
        b.prototype.clear = function() { this.g.clear();
            this.size = 0 };
        b.prototype.has = function(c) { return this.g.has(c) };
        b.prototype.entries = function() { return this.g.entries() };
        b.prototype.values = function() { return t(this.g, "values").call(this.g) };
        b.prototype.keys = t(b.prototype,
            "values");
        b.prototype[t(r.Symbol, "iterator")] = t(b.prototype, "values");
        b.prototype.forEach = function(c, d) { var e = this;
            this.g.forEach(function(f) { return c.call(d, f, f, e) }) };
        return b
    }, "es6");
    ia("Array.prototype.keys", function(a) { return a ? a : function() { return ua(this, function(b) { return b }) } }, "es6");
    ia("Array.prototype.values", function(a) { return a ? a : function() { return ua(this, function(b, c) { return c }) } }, "es8");
    var y = this || self;

    function va(a) { a = a.split("."); for (var b = y, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b }

    function wa(a, b, c) { return a.call.apply(a.bind, arguments) }

    function xa(a, b, c) { if (!a) throw Error(); if (2 < arguments.length) { var d = Array.prototype.slice.call(arguments, 2); return function() { var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d); return a.apply(b, e) } } return function() { return a.apply(b, arguments) } }

    function ya(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ya = wa : ya = xa; return ya.apply(null, arguments) }

    function za(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function() { var d = c.slice();
            d.push.apply(d, arguments); return a.apply(this, d) } }

    function Aa(a) { return a };
    var Ba = (new Date).getTime();

    function Da(a) { var b = !1,
            c; return function() { b || (c = a(), b = !0); return c } };

    function Ea(a, b) { for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a) }

    function Fa(a, b) { for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) { var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h) }
        return d }

    function Ga(a, b) { for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a)); return d }

    function Ha(a, b) { for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1 }

    function Ia(a, b) { a: { for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) { b = e; break a }
            b = -1 } return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b] }

    function Ja(a, b) { a: { for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) { b = d; break a }
            b = -1 } return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b] }

    function Ka(a, b) { a: if ("string" === typeof a) a = "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            else { for (var c = 0; c < a.length; c++)
                    if (c in a && a[c] === b) { a = c; break a }
                a = -1 } return 0 <= a };

    function La(a, b) { var c = {},
            d; for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]); return c }

    function Ma(a, b) { for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1 }

    function Na(a, b) { return null !== a && b in a };
    var Oa;

    function Pa() { if (void 0 === Oa) { var a = null,
                b = y.trustedTypes; if (b && b.createPolicy) { try { a = b.createPolicy("goog#html", { createHTML: Aa, createScript: Aa, createScriptURL: Aa }) } catch (c) { y.console && y.console.error(c.message) }
                Oa = a } else Oa = a } return Oa };

    function Qa(a, b) { this.h = a === Ra && b || "";
        this.g = Sa }
    var Sa = {},
        Ra = {};

    function Ta(a, b) { this.g = b === Ua ? a : "" }
    Ta.prototype.toString = function() { return this.g + "" };

    function Va(a) { return a instanceof Ta && a.constructor === Ta ? a.g : "type_error:TrustedResourceUrl" }
    var Ya = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Ua = {};

    function Za(a) { var b = Pa();
        a = b ? b.createScriptURL(a) : a; return new Ta(a, Ua) }

    function $a(a, b, c) { if (null == c) return b; if ("string" === typeof c) return c ? a + encodeURIComponent(c) : ""; for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) { var e = c[d];
                e = Array.isArray(e) ? e : [e]; for (var f = 0; f < e.length; f++) { var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g))) } }
        return b };

    function ab(a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1] }

    function bb(a, b) { var c = 0;
        a = ab(String(a)).split(".");
        b = ab(String(b)).split("."); for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) { var f = a[e] || "",
                g = b[e] || "";
            do { f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""]; if (0 == f[0].length && 0 == g[0].length) break;
                c = cb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || cb(0 == f[2].length, 0 == g[2].length) || cb(f[2], g[2]);
                f = f[3];
                g = g[3] } while (0 == c) } return c }

    function cb(a, b) { return a < b ? -1 : a > b ? 1 : 0 };
    var db;
    a: { var eb = y.navigator; if (eb) { var fb = eb.userAgent; if (fb) { db = fb; break a } }
        db = "" }

    function A(a) { return -1 != db.indexOf(a) }

    function gb(a) { for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]); return c };

    function hb() {
        function a(e) { e = Ia(e, d); return c[e] || "" } var b = db; if (A("Trident") || A("MSIE")) return ib(b);
        b = gb(b); var c = {};
        b.forEach(function(e) { c[e[0]] = e[1] }); var d = za(Na, c); return A("Opera") ? a(["Version", "Opera"]) : A("Edge") ? a(["Edge"]) : A("Edg/") ? a(["Edg"]) : !A("Chrome") && !A("CriOS") || A("Edge") ? (b = b[2]) && b[1] || "" : a(["Chrome", "CriOS", "HeadlessChrome"]) }

    function ib(a) { var b = /rv: *([\d\.]*)/.exec(a); if (b && b[1]) return b[1];
        b = ""; var c = /MSIE +([\d\.]+)/.exec(a); if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                if (a && a[1]) switch (a[1]) {
                    case "4.0":
                        b = "8.0"; break;
                    case "5.0":
                        b = "9.0"; break;
                    case "6.0":
                        b = "10.0"; break;
                    case "7.0":
                        b = "11.0" } else b = "7.0";
                else b = c[1];
        return b };

    function jb(a, b, c) { this.g = c === kb ? a : "" }
    jb.prototype.toString = function() { return this.g.toString() };
    var kb = {};

    function lb(a) { lb[" "](a); return a }
    lb[" "] = function() {};
    var mb = {},
        nb = null;

    function ob(a) {
        var b;
        void 0 === b && (b = 0);
        if (!nb) { nb = {}; for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) { var f = c.concat(d[e].split(""));
                mb[e] = f; for (var g = 0; g < f.length; g++) { var h = f[g];
                    void 0 === nb[h] && (nb[h] = g) } } }
        b = mb[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) { var k = a[f],
                l = a[f + 1];
            h = a[f + 2];
            g = b[k >> 2];
            k = b[(k & 3) << 4 | l >> 4];
            l = b[(l & 15) << 2 | h >> 6];
            h = b[h & 63];
            c[e++] = g + k + l + h }
        g = 0;
        h = d;
        switch (a.length - f) {
            case 2:
                g =
                    a[f + 1], h = b[(g & 15) << 2] || d;
            case 1:
                a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };
    var pb = "function" === typeof Uint8Array;

    function qb(a, b, c) { return "object" === typeof a ? pb && !Array.isArray(a) && a instanceof Uint8Array ? c(a) : rb(a, b, c) : b(a) }

    function rb(a, b, c) { if (Array.isArray(a)) { for (var d = Array(a.length), e = 0; e < a.length; e++) { var f = a[e];
                null != f && (d[e] = qb(f, b, c)) }
            Array.isArray(a) && a.va && sb(d); return d }
        d = {}; for (e in a) Object.prototype.hasOwnProperty.call(a, e) && (f = a[e], null != f && (d[e] = qb(f, b, c))); return d }

    function tb(a) { return rb(a, function(b) { return "number" === typeof b ? isNaN(b) || Infinity === b || -Infinity === b ? String(b) : b : b }, function(b) { return ob(b) }) }
    var ub = { va: { value: !0, configurable: !0 } };

    function sb(a) { Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, ub); return a };

    function B() {}
    var vb;

    function C(a, b, c, d) { a.g = null;
        vb && (b || (b = vb), vb = null); var e = a.constructor.messageId;
        b || (b = e ? [e] : []);
        a.j = e ? 0 : -1;
        a.h = b;
        a: { if (b = a.h.length)
                if (--b, e = a.h[b], !(null === e || "object" != typeof e || Array.isArray(e) || pb && e instanceof Uint8Array)) { a.l = b - a.j;
                    a.i = e; break a }
            a.l = Number.MAX_VALUE }
        a.o = {}; if (c)
            for (b = 0; b < c.length; b++)
                if (e = c[b], e < a.l) { e += a.j; var f = a.h[e];
                    f ? sb(f) : a.h[e] = wb } else xb(a), (f = a.i[e]) ? sb(f) : a.i[e] = wb;
        if (d && d.length)
            for (c = 0; c < d.length; c++) yb(a, d[c]) }
    var wb = Object.freeze(sb([]));

    function xb(a) { var b = a.l + a.j;
        a.h[b] || (a.i = a.h[b] = {}) }

    function zb(a, b) { if (b < a.l) { b += a.j; var c = a.h[b]; return c !== wb ? c : a.h[b] = sb([]) } if (a.i) return c = a.i[b], c !== wb ? c : a.i[b] = sb([]) }

    function E(a, b, c) { a = zb(a, b); return null == a ? c : a }

    function Bb(a, b) { var c = void 0 === c ? !1 : c;
        a = zb(a, b);
        a = null == a ? a : !!a; return null == a ? c : a }

    function Cb(a, b) { var c = void 0 === c ? 0 : c;
        a = zb(a, b);
        a = null == a ? a : +a; return null == a ? c : a }

    function Db(a, b, c) { b < a.l ? a.h[b + a.j] = c : (xb(a), a.i[b] = c); return a }

    function yb(a, b) { for (var c, d, e = 0; e < b.length; e++) { var f = b[e],
                g = zb(a, f);
            null != g && (c = f, d = g, Db(a, f, void 0)) } return c ? (Db(a, c, d), c) : 0 }

    function Eb(a, b, c) { a.g || (a.g = {}); if (!a.g[c]) { var d = zb(a, c);
            d && (a.g[c] = new b(d)) } return a.g[c] }

    function G(a, b, c) { a.g || (a.g = {}); if (!a.g[c]) { for (var d = zb(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.g[c] = e }
        b = a.g[c];
        b == wb && (b = a.g[c] = []); return b }

    function Fb(a) { if (a.g)
            for (var b in a.g)
                if (Object.prototype.hasOwnProperty.call(a.g, b)) { var c = a.g[b]; if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++) c[d] && Gb(c[d]);
                    else c && Gb(c) } }

    function Gb(a) { Fb(a); return a.h }

    function Hb(a) { Fb(a); return tb(a.h) }

    function Ib(a, b) { switch (typeof b) {
            case "number":
                return isNaN(b) || Infinity === b || -Infinity === b ? String(b) : b;
            case "object":
                if (pb && null != b && b instanceof Uint8Array) return ob(b) } return b };

    function Jb(a) { C(this, a, Kb, null) }
    x(Jb, B);

    function Lb(a) { C(this, a, null, null) }
    x(Lb, B);
    var Kb = [2, 3];

    function Mb(a) { a.google_ad_modifications || (a.google_ad_modifications = {}); return a.google_ad_modifications }

    function Nb() { var a = Mb(H),
            b = a.space_collapsing || "none"; return a.remove_ads_by_default ? { qa: !0, Ia: b, Ga: a.ablation_viewport_offset } : null }

    function Ob(a) { a = Mb(a);
        a.eids || (a.eids = []); return a.eids };

    function Pb(a) { return !!a }

    function Qb() { var a = Rb; if (!(Sb || Pb)(a)) throw Error(String(a)); };

    function Tb(a, b) { return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1 }

    function Ub(a) { var b = H.document; if (b.currentScript) return Tb(b.currentScript, a);
        b = u(b.scripts); for (var c = b.next(); !c.done; c = b.next())
            if (0 === Tb(c.value, a)) return 0;
        return 1 };
    var I = {},
        Vb = (I.google_ad_channel = !0, I.google_ad_client = !0, I.google_ad_host = !0, I.google_ad_host_channel = !0, I.google_adtest = !0, I.google_tag_for_child_directed_treatment = !0, I.google_tag_for_under_age_of_consent = !0, I.google_tag_partner = !0, I.google_restrict_data_processing = !0, I.google_page_url = !0, I.google_debug_params = !0, I.google_adbreak_test = !0, I.google_ad_frequency_hint = !0, I.google_admob_interstitial_slot = !0, I.google_admob_rewarded_slot = !0, I.google_max_ad_content_rating = !0, I);
    var Wb = {};

    function Xb() { var a = "undefined" !== typeof window ? window.trustedTypes : void 0; return null !== a && void 0 !== a ? a : null }
    var Yb;

    function Zb() { var a, b;
        void 0 === Yb && (Yb = null !== (b = null === (a = Xb()) || void 0 === a ? void 0 : a.createPolicy("google#safe", { createHTML: function(c) { return c }, createScript: function(c) { return c }, createScriptURL: function(c) { return c } })) && void 0 !== b ? b : null); return Yb };

    function $b() {}

    function ac(a, b) { if (b !== Wb) throw Error("Bad secret");
        this.g = a }
    x(ac, $b);
    ac.prototype.toString = function() { return this.g.toString() };

    function bc(a) { var b, c = null === (b = Zb()) || void 0 === b ? void 0 : b.createScriptURL(a); return new ac(null !== c && void 0 !== c ? c : a, Wb) };

    function cc(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (!Array.isArray(a) || !Array.isArray(a.raw)) throw new TypeError("trustedResourceUrl is a template literal tag function and can only be called as such (e.g. trustedResourceUrl`/somepath.js`)");
        if (0 === c.length) return bc(a[0]);
        d = a[0].toLowerCase();
        if (/^data:/.test(d)) throw Error("Data URLs cannot have expressions in the template literal input.");
        if (/^https:\/\//.test(d) || /^\/\//.test(d)) {
            var e = d.indexOf("//") + 2;
            var f = d.indexOf("/",
                e);
            if (f <= e) throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");
            e = d.substring(e, f);
            if (!/^[0-9a-z.:-]+$/i.test(e)) throw Error("The origin contains unsupported characters.");
            if (!/^[^:]*(:[0-9]+)?$/i.test(e)) throw Error("Invalid port number.");
            if (!/(^|\.)[a-z][^.]*$/i.test(e)) throw Error("The top-level domain must start with a letter.");
            e = !0
        } else e = !1;
        if (e = !e) {
            if (/^\//.test(d))
                if ("/" === d || 1 < d.length && "/" !== d[1] && "\\" !== d[1]) e = !0;
                else throw Error("The path start in the url is invalid.");
            else e = !1;
            e = !e
        }
        if (e) { if (/^about:blank/.test(d)) { if ("about:blank" !== d && !/^about:blank#/.test(d)) throw Error("The about url is invalid.");
                d = !0 } else d = !1;
            e = !d }
        if (e) throw Error("Trying to interpolate expressions in an unsupported url format.");
        d = [a[0]];
        for (e = 0; e < c.length; e++) d.push(encodeURIComponent(c[e])), d.push(a[e + 1]);
        return bc(d.join(""))
    };
    var dc = ka(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/slotcar_library", ".js"]),
        ec = ka(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]),
        fc = ka(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl", ".js"]),
        gc = ka(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_with_ama", ".js"]),
        hc = ka(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_instrumented", ".js"]);

    function ic(a) { var b = 2012 < E(a, 1, 0) ? "_fy" + E(a, 1, 0) : "";
        E(a, 3, ""); var c = E(a, 3, "").replace(/^\//, "");
        a = E(a, 2, ""); var d = cc(dc, a, c, b),
            e = cc(ec, a, c); return { Ha: d, Ba: cc(fc, a, c, b), za: cc(gc, a, c, b), Aa: cc(hc, a, c, b), Ka: e, Ea: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/ } };
    var jc = document,
        H = window,
        kc, lc = null,
        mc = jc.getElementsByTagName("script");
    mc && mc.length && (lc = mc[mc.length - 1]);
    kc = lc;
    var nc = { "120x90": !0, "160x90": !0, "180x90": !0, "200x90": !0, "468x15": !0, "728x15": !0 };

    function oc(a, b) { if (15 == b) { if (728 <= a) return 728; if (468 <= a) return 468 } else if (90 == b) { if (200 <= a) return 200; if (180 <= a) return 180; if (160 <= a) return 160; if (120 <= a) return 120 } return null };

    function pc(a) { if (a instanceof $b) { var b; if (null === (b = Xb()) || void 0 === b || !b.isScriptURL(a))
                if (a instanceof ac) a = a.g;
                else throw Error("wrong type"); } else a = Va(a); return a };

    function qc(a, b) { var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c }

    function rc(a) { return !!(a.error && a.meta && a.id) };

    function sc(a, b, c) { a.addEventListener && a.addEventListener(b, c, !1) };

    function tc() { var a = document; var b = "INS"; "application/xhtml+xml" === a.contentType && (b = b.toLowerCase()); return a.createElement(b) };

    function uc() { return A("iPad") || A("Android") && !A("Mobile") || A("Silk") };
    var vc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function wc(a) { try { var b; if (b = !!a && null != a.location.href) a: { try { lb(a.foo);
                    b = !0; break a } catch (c) {}
                b = !1 }
            return b } catch (c) { return !1 } }

    function xc(a, b) { var c = a.createElement("script");
        c.src = pc(b); var d;
        b = (c.ownerDocument && c.ownerDocument.defaultView || window).document;
        (d = (b = null === (d = b.querySelector) || void 0 === d ? void 0 : d.call(b, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d); return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null }

    function yc(a, b) { return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle }

    function zc(a, b) { if (!Ac() && !Bc()) { var c = Math.random(); if (c < b) return c = Cc(y), a[Math.floor(c * a.length)] } return null }

    function Cc(a) { if (!a.crypto) return Math.random(); try { var b = new Uint32Array(1);
            a.crypto.getRandomValues(b); return b[0] / 65536 / 65536 } catch (c) { return Math.random() } }

    function Dc(a, b) { if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a) }

    function Ec(a) { var b = a.length; if (0 == b) return 0; for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295; return 0 < c ? c : 4294967296 + c }
    var Bc = Da(function() { return Ha(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Fc) || 1E-4 > Math.random() });

    function Gc(a, b) { var c = -1; try { a && (c = parseInt(a.getItem(b), 10)) } catch (d) { return null } return 0 <= c && 1E3 > c ? c : null }

    function Hc(a, b, c) { a = Bc() ? null : Math.floor(1E3 * Cc(a)); var d; if (d = null != a && b) a: { var e = String(a); try { if (b) { b.setItem(c, e);
                    d = e; break a } } catch (f) {}
            d = null }
        return d ? a : null }
    var Ac = Da(function() { return Fc("MSIE") });

    function Fc(a) { return -1 != db.indexOf(a) }
    var Ic = /^([0-9.]+)px$/,
        Jc = /^(-?[0-9.]{1,30})$/;

    function Kc(a) { return (a = Ic.exec(a)) ? +a[1] : null }
    var Lc = Da(function() { return !uc() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile")) ? 2 : uc() ? 1 : 0 });

    function Mc(a, b) { b = void 0 === b ? window.document : b;
        0 != a.length && b.head && a.forEach(function(c) { if (c) { var d = b;
                d = void 0 === d ? window.document : d; if (c && d.head) { var e = document.createElement("meta");
                    d.head.appendChild(e);
                    e.httpEquiv = "origin-trial";
                    e.content = c } } }) };

    function Nc(a) { a = void 0 === a ? y : a; var b = a.context || a.AMP_CONTEXT_DATA; if (!b) try { b = a.parent.context || a.parent.AMP_CONTEXT_DATA } catch (c) {}
        try { if (b && b.pageViewId && b.canonicalUrl) return b } catch (c) {} return null };

    function Oc(a, b, c) { a.google_image_requests || (a.google_image_requests = []); var d = a.document.createElement("img"); if (c) { var e = function(f) { c && c(f);
                d.removeEventListener && d.removeEventListener("load", e, !1);
                d.removeEventListener && d.removeEventListener("error", e, !1) };
            sc(d, "load", e);
            sc(d, "error", e) }
        d.src = b;
        a.google_image_requests.push(d) }

    function Pc(a, b) { var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        Dc(a, function(d, e) { d && (c += "&" + e + "=" + encodeURIComponent(d)) });
        Qc(c) }

    function Qc(a) { var b = window;
        b.fetch ? b.fetch(a, { keepalive: !0, credentials: "include", redirect: "follow", method: "get", mode: "no-cors" }) : Oc(b, a, null) };

    function Rc(a, b) { if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a) }

    function Sc(a) { return !(!a || !a.call) && "function" === typeof a }

    function Tc() { var a = H; "google_onload_fired" in a || (a.google_onload_fired = !1, sc(a, "load", function() { a.google_onload_fired = !0 })) }

    function Uc(a) { a = a.google_unique_id; return "number" === typeof a ? a : 0 }
    var Vc = !!window.google_async_iframe_id,
        Wc = Vc && window.parent || window;

    function Xc() { if (Vc && !wc(Wc)) { var a = "." + jc.domain; try { for (; 2 < a.split(".").length && !wc(Wc);) jc.domain = a = a.substr(a.indexOf(".") + 1), Wc = window.parent } catch (b) {}
            wc(Wc) || (Wc = window) } return Wc }

    function Yc() { var a = void 0 === a ? H : a; if (!a) return !1; try { return !(!a.navigator.standalone && !a.top.navigator.standalone) } catch (b) { return !1 } }

    function Zc(a) { a = a.top; return wc(a) ? a : null };

    function $c(a, b) { if (!a) return !1;
        a = a.hash; if (!a || !a.indexOf) return !1; if (-1 != a.indexOf(b)) return !0;
        b = ad(b); return "go" != b && -1 != a.indexOf(b) ? !0 : !1 }

    function ad(a) { var b = "";
        Rc(a.split("_"), function(c) { b += c.substr(0, 2) }); return b };

    function Sb(a) { return "string" === typeof a };

    function bd(a) { C(this, a, cd, dd) }
    x(bd, B);
    var cd = [2, 8],
        dd = [
            [3, 4, 5],
            [6, 7]
        ];
    var ed;
    ed = { Fa: 0, na: 3, oa: 4, pa: 5 };
    var fd = ed.na,
        J = ed.oa,
        gd = ed.pa;

    function hd(a) { return null != a ? !a : a }

    function id(a, b) { for (var c = !1, d = 0; d < a.length; d++) { var e = a[d](); if (e === b) return e;
            null == e && (c = !0) } if (!c) return !b }

    function jd(a, b) { var c = G(a, bd, 2); if (!c.length) return kd(a, b);
        a = E(a, 1, 0); if (1 === a) return hd(jd(c[0], b));
        c = Ga(c, function(d) { return function() { return jd(d, b) } }); switch (a) {
            case 2:
                return id(c, !1);
            case 3:
                return id(c, !0) } }

    function kd(a, b) {
        var c = yb(a, dd[0]);
        a: { switch (c) {
                case fd:
                    var d = E(a, 3, 0); break a;
                case J:
                    d = E(a, 4, 0); break a;
                case gd:
                    d = E(a, 5, 0); break a }
            d = void 0 }
        if (d && (b = (b = b[c]) && b[d])) {
            try { var e = b.apply(null, la(zb(a, 8))) } catch (f) { return }
            b = E(a, 1, 0);
            if (4 === b) return !!e;
            d = null != e;
            if (5 === b) return d;
            if (12 === b) a = E(a, 7, "");
            else a: { switch (c) {
                    case J:
                        a = Cb(a, 6); break a;
                    case gd:
                        a = E(a, 7, ""); break a }
                a = void 0 }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === bb(String(e), a);
                if (d) switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e >
                            a;
                    case 12:
                        return Sb(a) && Sb(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === bb(String(e), a);
                    case 11:
                        return null != e && 1 === bb(String(e), a)
                }
            }
        }
    }

    function ld(a, b) { return !a || !(!b || !jd(a, b)) };

    function md(a) { C(this, a, nd, null) }
    x(md, B);
    var nd = [4];

    function od(a) { C(this, a, null, null) }
    x(od, B);

    function pd(a) { C(this, a, qd, rd) }
    x(pd, B);
    var qd = [5],
        rd = [
            [1, 2, 3, 6, 7]
        ];

    function sd(a) { C(this, a, td, null) }
    x(sd, B);
    sd.prototype.getId = function() { return E(this, 1, 0) };
    sd.prototype.N = function() { return E(this, 7, 0) };
    var td = [2];

    function ud(a) { C(this, a, vd, null) }
    x(ud, B);
    ud.prototype.N = function() { return E(this, 5, 0) };
    var vd = [2];

    function wd(a) { C(this, a, xd, null) }
    x(wd, B);

    function yd(a) { C(this, a, zd, null) }
    x(yd, B);
    yd.prototype.N = function() { return E(this, 1, 0) };
    var xd = [1, 4, 2, 3],
        zd = [2];

    function Ad(a) { C(this, a, null, Bd) }
    x(Ad, B);
    var Bd = [
        [13, 14]
    ];

    function Cd(a) { if (!a) return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a); return a };
    var Dd = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function Ed(a, b) { this.g = a;
        this.h = b }

    function Fd(a, b, c) { this.url = a;
        this.g = b;
        this.ga = !!c;
        this.depth = null };

    function Gd() { this.i = "&";
        this.h = {};
        this.j = 0;
        this.g = [] }

    function Hd(a, b) { var c = {};
        c[a] = b; return [c] }

    function Id(a, b, c, d, e) { var f = [];
        Dc(a, function(g, h) {
            (g = Jd(g, b, c, d, e)) && f.push(h + "=" + g) }); return f.join(b) }

    function Jd(a, b, c, d, e) { if (null == a) return "";
        b = b || "&";
        c = c || ",$"; "string" == typeof c && (c = c.split("")); if (a instanceof Array) { if (d = d || 0, d < c.length) { for (var f = [], g = 0; g < a.length; g++) f.push(Jd(a[g], b, c, d + 1, e)); return f.join(c[d]) } } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Id(a, b, c, d, e + 1)) : "..."; return encodeURIComponent(String(a)) }

    function Kd(a, b, c) { b = b + "//pagead2.googlesyndication.com" + c; var d = Ld(a) - c.length; if (0 > d) return "";
        a.g.sort(function(m, q) { return m - q });
        c = null; for (var e = "", f = 0; f < a.g.length; f++)
            for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) { if (!d) { c = null == c ? g : c; break } var l = Id(h[k], a.i, ",$"); if (l) { l = e + l; if (d >= l.length) { d -= l.length;
                        b += l;
                        e = a.i; break }
                    c = null == c ? g : c } }
        a = "";
        null != c && (a = e + "trn=" + c); return b + a }

    function Ld(a) { var b = 1,
            c; for (c in a.h) b = c.length > b ? c.length : b; return 3997 - b - a.i.length - 1 };

    function Md(a, b, c, d, e, f) { if ((d ? a.g : Math.random()) < (e || .01)) try { if (c instanceof Gd) var g = c;
            else g = new Gd, Dc(c, function(k, l) { var m = g,
                    q = m.j++;
                k = Hd(l, k);
                m.g.push(q);
                m.h[q] = k }); var h = Kd(g, a.h, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" !== typeof f ? Oc(y, h, void 0 === f ? null : f) : Oc(y, h, null)) } catch (k) {} };
    var Nd = null;

    function Od() { if (null === Nd) { Nd = ""; try { var a = ""; try { a = y.top.location.hash } catch (c) { a = y.location.hash } if (a) { var b = a.match(/\bdeid=([\d,]+)/);
                    Nd = b ? b[1] : "" } } catch (c) {} } return Nd };

    function Pd() { var a = y.performance; return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now() }

    function Qd() { var a = void 0 === a ? y : a; return (a = a.performance) && a.now ? a.now() : null };

    function Rd(a, b) { var c = Qd() || Pd();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0 };
    var K = y.performance,
        Sd = !!(K && K.mark && K.measure && K.clearMarks),
        Td = Da(function() { var a; if (a = Sd) a = Od(), a = !!a.indexOf && 0 <= a.indexOf("1337"); return a });

    function Ud() { var a = Vd;
        this.events = [];
        this.h = a || y; var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.g = Td() || (null != b ? b : 1 > Math.random()) }

    function Wd(a) { a && K && Td() && (K.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), K.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end")) }
    Ud.prototype.start = function(a, b) { if (!this.g) return null;
        a = new Rd(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        K && Td() && K.mark(b); return a };
    Ud.prototype.end = function(a) { if (this.g && "number" === typeof a.value) { a.duration = (Qd() || Pd()) - a.value; var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            K && Td() && K.mark(b);!this.g || 2048 < this.events.length || this.events.push(a) } };

    function Xd() { var a = Zd;
        this.l = $d;
        this.h = null;
        this.j = this.s;
        this.g = void 0 === a ? null : a;
        this.i = !1 }
    n = Xd.prototype;
    n.la = function(a) { this.j = a };
    n.S = function(a) { this.h = a };
    n.ma = function(a) { this.i = a };
    n.O = function(a, b, c) { try { if (this.g && this.g.g) { var d = this.g.start(a.toString(), 3); var e = b();
                this.g.end(d) } else e = b() } catch (h) { b = !0; try { Wd(d), b = this.j(a, new qc(h, { message: ae(h) }), void 0, c) } catch (k) { this.s(217, k) } if (b) { var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h) } else throw h; } return e };
    n.ia = function(a, b, c, d) { var e = this; return function(f) { for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h]; return e.O(a, function() { return b.apply(c, g) }, d) } };
    n.s = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new Gd;
            f.g.push(1);
            f.h[1] = Hd("context", a);
            rc(b) || (b = new qc(b, { message: ae(b) }));
            if (b.msg) { var g = b.msg.substring(0, 512);
                f.g.push(2);
                f.h[2] = Hd("msg", g) }
            var h = b.meta || {};
            if (this.h) try { this.h(h) } catch (Ab) {}
            if (d) try { d(h) } catch (Ab) {}
            b = [h];
            f.g.push(3);
            f.h[3] = b;
            d = y;
            b = [];
            g = null;
            do { var k = d; if (wc(k)) { var l = k.location.href;
                    g = k.document && k.document.referrer || null } else l = g, g = null;
                b.push(new Fd(l || "", k)); try { d = k.parent } catch (Ab) { d = null } } while (d && k != d);
            l = 0;
            for (var m =
                    b.length - 1; l <= m; ++l) b[l].depth = m - l;
            k = y;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) { var q = b[m];
                    q.url || (q.url = k.location.ancestorOrigins[m - 1] || "", q.ga = !0) }
            var z = new Fd(y.location.href, y, !1);
            k = null;
            var v = b.length - 1;
            for (q = v; 0 <= q; --q) { var w = b[q];!k && Dd.test(w.url) && (k = w); if (w.url && !w.ga) { z = w; break } }
            w = null;
            var P = b.length && b[v].url;
            0 != z.depth && P && (w = b[v]);
            var p = new Ed(z, w);
            if (p.h) { var D = p.h.url || "";
                f.g.push(4);
                f.h[4] = Hd("top", D) }
            var F = { url: p.g.url || "" };
            if (p.g.url) { var Ca = p.g.url.match(vc),
                    ea = Ca[1],
                    Wa = Ca[3],
                    Xa = Ca[4];
                z = "";
                ea && (z += ea + ":");
                Wa && (z += "//", z += Wa, Xa && (z += ":" + Xa)); var Yd = z } else Yd = "";
            F = [F, { url: Yd }];
            f.g.push(5);
            f.h[5] = F;
            Md(this.l, e, f, this.i, c)
        } catch (Ab) { try { Md(this.l, e, { context: "ecmserr", rctx: a, msg: ae(Ab), url: p && p.g.url }, this.i, c) } catch (wi) {} }
        return !0
    };

    function ae(a) { var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message); if (a.stack) { a = a.stack; try {-1 == a.indexOf(b) && (a = b + "\n" + a); for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n") } catch (d) {} } return b };

    function L(a) { a = void 0 === a ? "" : a; var b = Error.call(this);
        this.message = b.message; "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, L) : this.stack = Error().stack || "" }
    x(L, Error);

    function be() { this.g = null;
        this.i = !1;
        this.j = Math.random();
        this.h = this.s }
    n = be.prototype;
    n.S = function(a) { this.g = a };
    n.ma = function(a) { this.i = a };
    n.la = function(a) { this.h = a };
    n.s = function(a, b, c, d, e) { if ((this.i ? this.j : Math.random()) > (void 0 === c ? .01 : c)) return !1;
        rc(b) || (b = new qc(b, { context: a, id: void 0 === e ? "jserror" : e })); if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
        y.google_js_errors = y.google_js_errors || [];
        y.google_js_errors.push(b);
        y.error_rep_loaded || (xc(y.document, Za(y.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js")), y.error_rep_loaded = !0); return !1 };
    n.O = function(a, b, c) { try { var d = b() } catch (e) { if (!this.h(a, e, .01, c, "jserror")) throw e; } return d };
    n.ia = function(a, b, c, d) { var e = this; return function(f) { for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h]; return e.O(a, function() { return b.apply(c, g) }, d) } };
    var $d, M, Vd = Xc(),
        Zd = new Ud;

    function ce(a) { null != a && (Vd.google_measure_js_timing = a);
        Vd.google_measure_js_timing || (a = Zd, a.g = !1, a.events != a.h.google_js_reporting_queue && (Td() && Ea(a.events, Wd), a.events.length = 0)) }
    $d = new function() { var a = void 0 === a ? H : a;
        this.h = "http:" === a.location.protocol ? "http:" : "https:";
        this.g = Math.random() };
    "number" !== typeof Vd.google_srt && (Vd.google_srt = Math.random());
    var de = $d,
        ee = Vd.google_srt;
    0 <= ee && 1 >= ee && (de.g = ee);
    M = new Xd;
    M.S(function() {});
    M.ma(!0);
    "complete" == Vd.document.readyState ? ce() : Zd.g && sc(Vd, "load", function() { ce() });

    function fe(a, b) { return M.O(a, b, void 0) }

    function ge(a, b) { return M.ia(a, b, void 0, void 0) }

    function he(a, b, c, d) { var e;
        rc(b) ? e = b.msg || ae(b.error) : e = ae(b); return 0 == e.indexOf("TagError") ? (c = b instanceof qc ? b.error : b, c.pbr || (c.pbr = !0, M.s(a, b, .1, d, "puberror")), !1) : M.s(a, b, c, d) };

    function ie() { this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new je }

    function je() { this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = [] };

    function ke(a) { a = a.document; var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body); return b || {} }

    function N(a) { return ke(a).clientWidth };

    function le() { this.i = this.i;
        this.j = this.j }
    le.prototype.i = !1;
    le.prototype.H = function() { if (this.j)
            for (; this.j.length;) this.j.shift()() };

    function me(a, b, c) { return ne(a, void 0 === c ? "" : c, function(d) { return Ha(G(d, Lb, 2), function(e) { return zb(e, 1) === b }) }) }

    function oe(a, b, c) { c = void 0 === c ? "" : c; var d = Zc(a) || a; return pe(d, b) ? !0 : ne(a, c, function(e) { return Ha(zb(e, 3), function(f) { return f === b }) }) }

    function pe(a, b) { a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1]; return !!a && Ka(a.split(","), b.toString()) }

    function ne(a, b, c) { a = Zc(a) || a; var d = qe(a);
        b && (b = Cd(String(b))); return Ma(d, function(e, f) { return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e) }) }

    function qe(a) { a = re(a); var b = {};
        Rc(a, function(c, d) { try { var e = new Jb(c);
                b[d] = e } catch (f) {} }); return b }

    function re(a) { try { var b = a.localStorage.getItem("google_adsense_settings"); if (!b) return {}; var c = JSON.parse(b); return c !== Object(c) ? {} : La(c, function(d, e) { return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d) }) } catch (d) { return {} } };

    function se() { var a = lb(""); return /^\d+$/.test(a) ? a : "" };

    function te(a) { var b = {};
        this[fd] = (b[55] = function() { return 0 === a }, b[23] = function(c) { return me(H, parseInt(c, 10)) }, b[24] = function(c) { return oe(H, parseInt(c, 10)) }, b);
        b = {};
        this[J] = (b[7] = function(c) { try { var d = window.localStorage } catch (g) { d = null } var e = c;
            c = window;
            e = void 0 === e ? 0 : e;
            e = 0 != e ? "google_experiment_mod" + e : "google_experiment_mod"; var f = Gc(d, e);
            d = null === f ? Hc(c, d, e) : f; return null != d ? d : void 0 }, b);
        b = {};
        this[gd] = (b[6] = se, b) };

    function O(a) { if (a.P && a.hasOwnProperty("P")) return a.P; var b = new a; return a.P = b };

    function ue() { var a = {};
        this.g = (a[fd] = {}, a[J] = {}, a[gd] = {}, a) };
    var ve = /^true$/.test("false");

    function we(a, b) { switch (b) {
            case 1:
                return E(a, 1, 0);
            case 2:
                return E(a, 2, 0);
            case 3:
                return E(a, 3, 0);
            case 6:
                return E(a, 6, 0);
            default:
                return null } }

    function xe(a, b) { if (!a) return null; switch (b) {
            case 1:
                return Bb(a, 1);
            case 7:
                return E(a, 3, "");
            case 2:
                return Cb(a, 2);
            case 3:
                return E(a, 3, "");
            case 6:
                return zb(a, 4);
            default:
                return null } }
    var ye = Da(function() { if (!ve) return {}; try { var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK"); if (a) return JSON.parse(a) } catch (b) {} return {} });

    function ze(a, b, c, d) { d = void 0 === d ? 0 : d; var e = ye(); if (null != e[b]) return e[b];
        b = Ae(d)[b]; if (!b) return c;
        b = new pd(b);
        b = Be(b);
        a = xe(b, a); return null != a ? a : c }

    function Be(a) { var b = O(ue).g; if (b) { var c = Ja(G(a, od, 5), function(d) { return ld(Eb(d, bd, 1), b) }); if (c) return Eb(c, md, 2) } return Eb(a, md, 4) }

    function Ce() { this.g = {};
        this.h = [] }

    function De(a, b, c) { return !!ze(1, a, void 0 === b ? !1 : b, c) }

    function Ee(a, b, c) { b = void 0 === b ? 0 : b;
        a = Number(ze(2, a, b, c)); return isNaN(a) ? b : a }

    function Fe(a, b, c) { return ze(3, a, void 0 === b ? "" : b, c) }

    function Ge(a, b, c) { b = void 0 === b ? [] : b; return ze(6, a, b, c) }

    function Ae(a) { return O(Ce).g[a] || (O(Ce).g[a] = {}) }

    function He(a, b) { var c = Ae(b);
        Dc(a, function(d, e) { return c[e] = d }) }

    function Ie(a, b) { var c = Ae(b);
        Ea(a, function(d) { var e = yb(d, rd[0]);
            (e = we(d, e)) && (c[e] = Hb(d)) }) }

    function Je(a, b) { var c = Ae(b);
        Ea(a, function(d) { var e = new pd(d),
                f = yb(e, rd[0]);
            (e = we(e, f)) && (c[e] || (c[e] = d)) }) }

    function Ke() { return Ga(t(Object, "keys").call(Object, O(Ce).g), function(a) { return Number(a) }) }

    function Le(a) { Ka(O(Ce).h, a) || He(Ae(4), a) };

    function Q(a) { this.methodName = a }
    var Me = new Q(1),
        Ne = new Q(15),
        Oe = new Q(2),
        Pe = new Q(3),
        Qe = new Q(4),
        Re = new Q(5),
        Se = new Q(6),
        Te = new Q(7),
        Ue = new Q(8),
        Ve = new Q(9),
        We = new Q(10),
        Xe = new Q(11),
        Ye = new Q(12),
        Ze = new Q(13),
        $e = new Q(14);

    function R(a, b, c) { c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), { value: b }) }

    function S(a, b, c) { return b[a.methodName] || c || function() {} }

    function af(a) { R(Re, De, a);
        R(Se, Ee, a);
        R(Te, Fe, a);
        R(Ue, Ge, a);
        R(Ze, Je, a);
        R(Ne, Le, a) }

    function bf(a) { R(Qe, function(b) { O(ue).g = b }, a);
        R(Ve, function(b, c) { var d = O(ue);
            d.g[fd][b] || (d.g[fd][b] = c) }, a);
        R(We, function(b, c) { var d = O(ue);
            d.g[J][b] || (d.g[J][b] = c) }, a);
        R(Xe, function(b, c) { var d = O(ue);
            d.g[gd][b] || (d.g[gd][b] = c) }, a);
        R($e, function(b) { for (var c = O(ue), d = u([fd, J, gd]), e = d.next(); !e.done; e = d.next()) { var f = e.value;
                e = void 0; var g = c.g[f];
                f = b[f]; for (e in f) g[e] = f[e] } }, a) }

    function cf(a) { a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", { value: !0 }) };

    function df(a) { a = void 0 === a ? y : a; return a.ggeac || (a.ggeac = {}) };

    function ef() { this.h = function() {};
        this.g = function() { return [] } }

    function ff(a, b, c) { a.h = function(d) { S(Oe, b, function() { return [] })(d, c) };
        a.g = function() { return S(Pe, b, function() { return [] })(c) } };

    function gf(a, b) { try { a: { var c = a.split(".");a = y; for (var d = 0, e; d < c.length; d++)
                    if (e = a, a = a[c[d]], null == a) { var f = null; break a }
                f = "function" === typeof a ? e[c[d - 1]]() : a } if (typeof f === b) return f }
        catch (g) {} }

    function hf() {
        var a = {};
        this[fd] = (a[8] = function(b) { try { return null != va(b) } catch (c) {} }, a[9] = function(b) { try { var c = va(b) } catch (d) { return } if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]"); return b }, a[10] = function() { return window == window.top }, a[6] = function(b) { return Ka(O(ef).g(), parseInt(b, 10)) }, a[27] = function(b) { b = gf(b, "boolean"); return void 0 !== b ? b : void 0 }, a);
        a = {};
        this[J] = (a[3] = function() { return Lc() }, a[6] = function(b) {
            b = gf(b, "number");
            return void 0 !==
                b ? b : void 0
        }, a[11] = function(b) { b = void 0 === b ? "" : b; var c = y;
            b = void 0 === b ? "" : b;
            c = void 0 === c ? window : c;
            b = (c = (c = c.location.href.match(vc)[3] || null) ? decodeURI(c) : c) ? Ec(c + b) : null; return null == b ? void 0 : b % 1E3 }, a);
        a = {};
        this[gd] = (a[2] = function() { return window.location.href }, a[3] = function() { try { return window.top.location.hash } catch (b) { return "" } }, a[4] = function(b) { b = gf(b, "string"); return void 0 !== b ? b : void 0 }, a)
    };
    var jf = [12, 13, 20];

    function kf() {}

    function lf(a, b, c, d) { d = void 0 === d ? {} : d; var e = void 0 === d.fa ? !1 : d.fa,
            f = void 0 === d.wa ? {} : d.wa;
        d = void 0 === d.ya ? [] : d.ya;
        a.i = b;
        a.l = {};
        a.o = e;
        a.j = f;
        b = {};
        a.g = (b[c] = [], b[4] = [], b);
        a.h = {};
        (c = Od()) && Ea(c.split(",") || [], function(g) {
            (g = parseInt(g, 10)) && (a.h[g] = !0) });
        Ea(d, function(g) { a.h[g] = !0 }); return a }

    function mf(a, b, c) { if (a.l[b]) return .001 >= Math.random() && Pc({ b: c, dp: b }, "tagging_dupdiv"), !0;
        a.l[b] = !0; return !1 }

    function nf(a, b, c) { var d = [],
            e = of(a.i, b); if (9 !== b && mf(a, b, c) || !e.length) return d; var f = Ka(jf, b);
        Ea(e, function(g) { if (g = pf(a, g, c)) { var h = g.getId();
                d.push(h);
                qf(a, h, f ? 4 : c); var k = G(g, pd, 2);
                k && (f ? Ea(Ke(), function(l) { return Ie(k, l) }) : Ie(k, c)) } }); return d }

    function qf(a, b, c) { a.g[c] || (a.g[c] = []);
        a = a.g[c];
        Ka(a, b) ? Pc({ eids: JSON.stringify(a), dup: b }, "gpt_dupeid") : a.push(b) }

    function rf(a, b) { a.i.push.apply(a.i, la(Fa(Ga(b, function(c) { return new yd(c) }), function(c) { return !Ka(jf, c.N()) }))) }

    function pf(a, b, c) {
        var d = O(ue).g;
        if (!ld(Eb(b, bd, 3), d)) return null;
        var e = G(b, sd, 2),
            f = e.length * E(b, 1, 0),
            g = E(b, 6, 0);
        if (g) { f = d[J]; switch (c) {
                case 2:
                    var h = f[8]; break;
                case 1:
                    h = f[7] }
            c = void 0; if (h) try { c = h(g) } catch (k) {}
            return (b = sf(b, c)) ? tf(a, [b], 1) : null }
        if (g = E(b, 10, 0)) { f = null; switch (c) {
                case 1:
                    f = d[J][9]; break;
                case 2:
                    f = d[J][10]; break;
                default:
                    return null }
            c = f ? f(String(g)) : void 0; return void 0 === c && 1 === E(b, 11, 0) ? null : (b = sf(b, c)) ? tf(a, [b], 1) : null }
        c = d ? Fa(e, function(k) { return ld(Eb(k, bd, 3), d) }) : e;
        return c.length ? (b =
            E(b, 4, 0)) ? uf(a, b, f, c) : tf(a, c, f / 1E3) : null
    }

    function uf(a, b, c, d) { var e = null != a.j[b] ? a.j[b] : 1E3; if (0 >= e) return null;
        d = tf(a, d, c / e);
        a.j[b] = d ? 0 : e - c; return d }

    function tf(a, b, c) { var d = a.h,
            e = Ia(b, function(f) { return !!d[f.getId()] }); return e ? e : a.o ? null : zc(b, c) }

    function vf(a, b) { R(Me, function(c) { a.h[c] = !0 }, b);
        R(Oe, function(c, d) { return nf(a, c, d) }, b);
        R(Pe, function(c) { return (a.g[c] || []).concat(a.g[4]) }, b);
        R(Ye, function(c) { return rf(a, c) }, b) }

    function of(a, b) { return (a = Ia(a, function(c) { return c.N() == b })) && G(a, ud, 2) || [] }

    function sf(a, b) { var c = G(a, sd, 2),
            d = c.length,
            e = E(a, 1, 0);
        a = E(a, 8, 0);
        b = void 0 !== b ? b : Math.floor(1E3 * Cc(window)); var f = (b - a) % d; if (b < a || b - a - f >= d * e - 1) return null;
        c = c[f];
        d = O(ue).g; return !c || d && !ld(Eb(c, bd, 3), d) ? null : c };

    function T(a, b) { this.g = a;
        this.defaultValue = void 0 === b ? !1 : b }

    function wf(a, b) { this.g = a;
        this.defaultValue = void 0 === b ? 0 : b };
    var xf = new wf(1077),
        yf = new T(1026),
        zf = new wf(1046),
        Af = new T(1049, !0),
        Bf = new T(218),
        Cf = new T(216),
        Df = new T(217),
        Ef = new T(1002),
        Ff = new T(233),
        Gf = new T(232),
        Hf = new T(227),
        If = new T(208),
        Jf = new T(282),
        Kf = new function(a, b) { this.g = a;
            this.defaultValue = void 0 === b ? "" : b }(14),
        Lf = new T(251),
        Mf = new T(1060),
        Nf = new T(203),
        Of = new T(241),
        Pf = new T(84),
        Qf = new wf(1929, 50),
        Rf = new wf(1905),
        Sf = new T(240),
        Tf = new T(1928),
        Uf = new T(1941),
        Vf = new T(370946349),
        Wf = new T(374326588),
        Xf = new T(379841917),
        Yf = new T(377105258),
        Zf = new wf(1935),
        $f = new T(1942);

    function ag() { var a = {};
        this.h = function(b, c) { return null != a[b] ? a[b] : c };
        this.i = function(b, c) { return null != a[b] ? a[b] : c };
        this.g = function(b, c) { return null != a[b] ? a[b] : c };
        this.l = function(b, c) { return null != a[b] ? a[b] : c };
        this.j = function() {} }

    function U(a) { return O(ag).h(a.g, a.defaultValue) }

    function bg(a) { return O(ag).i(a.g, a.defaultValue) };

    function cg() { this.g = function() {} }

    function dg(a) { O(cg).g(a) };

    function eg(a, b, c, d) { var e = 1;
        d = void 0 === d ? df() : d;
        e = void 0 === e ? 0 : e;
        d.hasOwnProperty("init-done") ? (S(Ye, d)(Ga(G(a, yd, 2), function(f) { return Hb(f) })), S(Ze, d)(Ga(G(a, pd, 1), function(f) { return Hb(f) }), e), b && S($e, d)(b), fg(d, e)) : (vf(lf(O(kf), G(a, yd, 2), e, c), d), af(d), bf(d), cf(d), fg(d, e), Ie(G(a, pd, 1), e), ve = ve || !(!c || !c.ta), dg(O(hf)), b && dg(b)) }

    function fg(a, b) { a = void 0 === a ? df() : a;
        b = void 0 === b ? 0 : b; var c = a,
            d = b;
        d = void 0 === d ? 0 : d;
        ff(O(ef), c, d);
        gg(a, b);
        O(cg).g = S($e, a);
        O(ag).j() }

    function gg(a, b) { b = void 0 === b ? 0 : b; var c = O(ag);
        c.h = function(d, e) { return S(Re, a, function() { return !1 })(d, e, b) };
        c.i = function(d, e) { return S(Se, a, function() { return 0 })(d, e, b) };
        c.g = function(d, e) { return S(Te, a, function() { return "" })(d, e, b) };
        c.l = function(d, e) { return S(Ue, a, function() { return [] })(d, e, b) };
        c.j = function() { S(Ne, a)(b) } };

    function hg(a, b) { var c = H,
            d = Mb(c); if (d.plle) fg(df(c), 1);
        else { d.plle = !0; try { var e = c.localStorage } catch (f) { e = null }
            d = e;
            null == Gc(d, "goog_pem_mod") && Hc(c, d, "goog_pem_mod");
            d = Eb(a, wd, 12);
            e = Bb(a, 9);
            eg(d, new te(b), { fa: e && !!c.google_disable_experiments, ta: e }, df(c));
            O(ef).h(12);
            O(ef).h(10);
            b = Ob(c);
            (a = E(a, 10, "")) && b.push(a);
            c = Zc(c) || c;
            $c(c.location, "google_mc_lab") && b.push("44738307") } };

    function ig(a, b, c) { a = a.style;
        a.border = "none";
        a.height = c + "px";
        a.width = b + "px";
        a.margin = 0;
        a.padding = 0;
        a.position = "relative";
        a.visibility = "visible";
        a.backgroundColor = "transparent" };

    function jg(a, b) {
        var c = a.document;
        a = void 0;
        for (var d = 0; !a || c.getElementById(a + "_anchor");) a = "aswift_" + d++;
        d = b.google_ad_width;
        var e = b.google_ad_height,
            f = b.gml,
            g = b.gmr,
            h = b.gzi;
        if (U(Mf)) {
            var k = tc();
            k.id = a + "_anchor";
            ig(k, d, e);
            k.style.display = "block";
            var l = tc();
            l.id = a + "_expand";
            ig(l, d, e);
            l.style.display = "inline-table";
            l.appendChild(k);
            b.google_ad_slot && (l.dataset.adSlot = b.google_ad_slot);
            f && (l.style.marginLeft = f);
            g && (l.style.marginRight = g);
            h && (l.style.zIndex = h);
            a: if (c.currentScript) c = c.currentScript.parentElement;
                else { c = c.scripts; for (b = c.length - 1; 0 <= b; b--)
                        if (0 <= c[b].src.indexOf("/pagead/show_ads.js")) { c = c[b].parentElement; break a }
                    throw Error("shntfnd"); }
            c.appendChild(l)
        } else {
            l = (f ? "margin-left:" + f + ";" : "") + (g ? "margin-right:" + g + ";" : "") + (h ? "z-index:" + h + ";" : "");
            if (f = b.ds) f += t(f, "endsWith").call(f, ";") ? "" : ";", l += f;
            b = b.google_ad_slot;
            b = void 0 === b ? "" : b;
            d = "border:none;height:" + e + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + (d + "px;background-color:transparent;");
            b = ['<ins id="' + (a + '_expand"'),
                ' style="display:inline-table;' + d + (void 0 === l ? "" : l) + '"', b ? ' data-ad-slot="' + b + '">' : ">", '<ins id="' + (a + '_anchor" style="display:block;') + d + '">', "</ins></ins>"
            ].join("");
            b = (d = Pa()) ? d.createHTML(b) : b;
            b = new jb(b, null, kb);
            c.write(b instanceof jb && b.constructor === jb ? b.g : "type_error:SafeHtml")
        }
        return a
    };
    var kg = null;

    function lg(a) { a = void 0 === a ? [] : a; var b = !1;
        y.google_logging_queue || (b = !0, y.google_logging_queue = []);
        y.google_logging_queue.push([16, a]); if (a = b) { if (null == kg) { kg = !1; try { var c = Zc(y);
                    c && -1 !== c.location.hash.indexOf("google_logging") && (kg = !0);
                    y.localStorage.getItem("google_logging") && (kg = !0) } catch (d) {} }
            a = kg }
        a && (c = y.document, a = new Qa(Ra, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = Za(a instanceof Qa && a.constructor === Qa && a.g === Sa ? a.h : "type_error:Const"), xc(c, a)) };

    function mg() { this.debugCard = null;
        this.debugCardRequested = !1 };
    var ng = { rectangle: 1, horizontal: 2, vertical: 4 };

    function og(a, b) { try { var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect(); return { x: d.left - c.left, y: d.top - c.top } } catch (e) { return null } }

    function pg(a, b) { do { var c = yc(a, b); if (c && "fixed" == c.position) return !1 } while (a = a.parentElement); return !0 }

    function qg(a) { var b = 0,
            c; for (c in ng) - 1 != a.indexOf(c) && (b |= ng[c]); return b }

    function rg(a, b, c, d, e) { if (a.top != a) return Zc(a) ? 3 : 16; if (!(488 > N(a))) return 4; if (!(a.innerHeight >= a.innerWidth)) return 5; var f = N(a); if (!f || (f - c) / f > d) a = 6;
        else { if (c = "true" != e.google_full_width_responsive) a: { c = N(a); for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = yc(b, a)) && (e = Kc(d.width)) && !(e >= c) && "visible" != d.overflow) { c = !0; break a }
                c = !1 }
            a = c ? 7 : !0 } return a }

    function sg(a, b, c) { a = a.style; "rtl" == b ? U(Lf) ? a.setProperty("margin-right", c, "important") : a.marginRight = c : U(Lf) ? a.setProperty("margin-left", c, "important") : a.marginLeft = c }

    function tg(a, b) { if (3 == b.nodeType) return /\S/.test(b.data); if (1 == b.nodeType) { if (/^(script|style)$/i.test(b.nodeName)) return !1; try { var c = yc(b, a) } catch (d) {} return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility)) } return !1 }

    function ug(a, b) { for (var c = 0; 100 > c && b.parentElement; ++c) { for (var d = b.parentElement.childNodes, e = 0; e < d.length; ++e) { var f = d[e]; if (f != b && tg(a, f)) return }
            b = b.parentElement;
            b.style.width = "100%";
            b.style.height = "auto" } }

    function vg(a, b, c) { a = og(b, a); return "rtl" == c ? -a.x : a.x }

    function wg(a) { return U(Ff) || a.location && "#bffwroe2etoq" == a.location.hash };

    function xg(a, b) { sc(a, "load", function() { if (!a.adsbygoogle) { a.adsbygoogle = []; var c = a.document; var d = Za("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");
                xc(c, d) }
            a.adsbygoogle.push(b) }) }

    function yg(a) { var b = {}; return { enable_page_level_ads: (b.pltais = !0, b), google_ad_client: a } };

    function zg(a, b) { var c = oe(a, 12, b.google_ad_client);
        b = "google_ad_host" in b; var d = .5 > Math.random();
        a = $c(a.location, "google_ads_preview"); return c && !b && d || a }

    function Ag(a, b) { if (a.google_apltlad || a.top != a || !b.google_ad_client) return null; var c = zg(a, b);
        a.google_apltlad = !0;
        a = yg(b.google_ad_client); var d = a.enable_page_level_ads;
        Dc(b, function(e, f) { Vb[f] && "google_ad_client" !== f && (d[f] = e) }); if (c) d.google_ad_channel = "AutoInsertAutoAdCode";
        else if (d.google_pgb_reactive = 7, "google_ad_section" in b || "google_ad_region" in b) d.google_ad_section = b.google_ad_section || b.google_ad_region; return a };

    function Bg(a, b) { a.S(function(c) { c.shv = String(b);
            c.mnvr = ""; var d = O(ef).g(); var e = Ob(y);
            (d = d.concat(e).join(",")) && (c.eid = 50 < d.length ? d.substring(0, 50) + "T" : d) }) };

    function V(a, b) { this.i = a;
        this.h = b }
    V.prototype.minWidth = function() { return this.i };
    V.prototype.height = function() { return this.h };
    V.prototype.g = function(a) { return 300 < a && 300 < this.h ? this.i : Math.min(1200, Math.round(a)) };

    function W(a, b, c, d) { d = void 0 === d ? !1 : d;
        V.call(this, a, b);
        this.M = c;
        this.ua = d }
    x(W, V);
    W.prototype.R = function() { return this.M };

    function Cg(a) { return function(b) { return !!(b.M & a) } };

    function Dg(a, b, c) { var d = Kc;
        d = void 0 === d ? function(f) { return f } : d; var e; return a.style && a.style[c] && d(a.style[c]) || (e = yc(a, b)) && e[c] && d(e[c]) || null }

    function Eg(a) { return function(b) { return b.minWidth() <= a } }

    function Fg(a, b, c, d) { var e = a && Gg(c, b),
            f = Hg(b, d); return function(g) { return !(e && g.height() >= f) } }

    function Ig(a) { return function(b) { return b.height() <= a } }

    function Gg(a, b) { a = og(a, b); return (a ? a.y : 0) < ke(b).clientHeight - 100 }

    function Jg(a, b) { var c = Dg(b, a, "height"); if (c) return c; var d = b.style.height;
        b.style.height = "inherit";
        c = Dg(b, a, "height");
        b.style.height = d; if (c) return c;
        c = Infinity;
        do(d = b.style && Kc(b.style.height)) && (c = Math.min(c, d)), (d = Dg(b, a, "maxHeight")) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName); return c }

    function Hg(a, b) { var c = 0 == Uc(a); return b && c ? Math.max(250, 2 * ke(a).clientHeight / 3) : 250 };
    var Kg = lb("script");

    function Lg(a, b, c, d, e, f, g, h, k, l, m, q, z, v, w) { this.o = a;
        this.L = b;
        this.M = void 0 === c ? null : c;
        this.h = void 0 === d ? null : d;
        this.C = void 0 === e ? null : e;
        this.g = void 0 === f ? null : f;
        this.i = void 0 === g ? null : g;
        this.J = void 0 === h ? null : h;
        this.K = void 0 === k ? null : k;
        this.j = void 0 === l ? null : l;
        this.l = void 0 === m ? null : m;
        this.B = void 0 === q ? null : q;
        this.G = void 0 === z ? null : z;
        this.H = void 0 === v ? null : v;
        this.D = void 0 === w ? null : w }
    Lg.prototype.size = function() { return this.L };

    function Mg(a, b, c) {
        null != a.M && (c.google_responsive_formats = a.M);
        null != a.C && (c.google_safe_for_responsive_override = a.C);
        null != a.g && (!0 === a.g ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.g));
        null != a.i && !0 !== a.i && (c.gfwrnher = a.i);
        var d = a.l || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.j || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().g(b);
        var e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.g(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.o;
            null != a.h && (c.armr = a.h);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.g && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.J && (c.gfwroml = a.J);
        null != a.K && (c.gfwromr = a.K);
        null != a.j && (c.gfwroh = a.j);
        null != a.l && (c.gfwrow = a.l);
        null != a.B && (c.gfwroz = a.B);
        null != a.G && (c.gml = a.G);
        null != a.H && (c.gmr = a.H);
        null != a.D && (c.gzi = a.D);
        b = Xc();
        b = Zc(b) || b;
        $c(b.location, "google_responsive_slot_debug") &&
            (c.ds = "outline:thick dashed " + (d && e ? !0 !== a.g || !0 !== a.i ? "#ffa500" : "#0f0" : "#f00") + " !important;");
        $c(b.location, "google_responsive_dummy_ad") && (Ka([1, 2, 3, 4, 5, 6, 7, 8], a.o) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({ googMsgType: "adpnt", key_value: [{ key: "qid", value: "DUMMY_AD" }] }), c.dash = "<" + Kg + ">window.top.postMessage('" + a + "', '*');\n          </" + Kg + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' +
            d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
    /* 
         
         Copyright 2019 The AMP HTML Authors. All Rights Reserved. 
         
         Licensed under the Apache License, Version 2.0 (the "License"); 
         you may not use this file except in compliance with the License. 
         You may obtain a copy of the License at 
         
              http://www.apache.org/licenses/LICENSE-2.0 
         
         Unless required by applicable law or agreed to in writing, software 
         distributed under the License is distributed on an "AS-IS" BASIS, 
         WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
         See the License for the specific language governing permissions and 
         limitations under the License. 
        */
    var Ng = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function Og(a, b) { V.call(this, a, b) }
    x(Og, V);
    Og.prototype.g = function() { return this.minWidth() };
    var Pg = { "image-top": function(a) { return 600 >= a ? 284 + .414 * (a - 250) : 429 }, "image-middle": function(a) { return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500) }, "image-side": function(a) { return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500) }, "text-only": function(a) { return 500 >= a ? 187 - .228 * (a - 250) : 130 }, "in-article": function(a) { return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200 } };

    function Qg(a, b) { V.call(this, a, b) }
    x(Qg, V);
    Qg.prototype.g = function() { return Math.min(1200, this.minWidth()) };

    function Rg(a) { return function(b) { for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0 } }

    function Sg(a, b) { for (var c = Tg.slice(0), d = c.length, e = null, f = 0; f < d; ++f) { var g = c[f]; if (a(g)) { if (!b || b(g)) return g;
                null === e && (e = g) } } return e };
    var X = [new W(970, 90, 2), new W(728, 90, 2), new W(468, 60, 2), new W(336, 280, 1), new W(320, 100, 2), new W(320, 50, 2), new W(300, 600, 4), new W(300, 250, 1), new W(250, 250, 1), new W(234, 60, 2), new W(200, 200, 1), new W(180, 150, 1), new W(160, 600, 4), new W(125, 125, 1), new W(120, 600, 4), new W(120, 240, 4), new W(120, 120, 1, !0)],
        Tg = [X[6], X[12], X[3], X[0], X[7], X[14], X[1], X[8], X[10], X[4], X[15], X[2], X[11], X[5], X[13], X[9], X[16]];

    function Ug(a, b, c, d, e) {
        var f = fe(247, function() {
                var P;
                if ("false" == e.google_full_width_responsive) var p = { v: a, A: 1 };
                else if ("autorelaxed" == b && e.google_full_width_responsive || Vg(b) || e.google_ad_resize) { 488 > N(c) && (wg(c) || U(Ef)) && ug(c, d);
                    p = rg(c, d, a, .3, e); if (!0 === p)
                        if ("true" == e.google_full_width_responsive || pg(d, c))
                            if (wg(c)) p = !0;
                            else { p = N(c); var D = p - a;
                                p = p && 0 <= D ? !0 : p ? -10 > D ? 11 : 0 > D ? 14 : 12 : 10 }
                    else p = 9;
                    p = !0 !== p ? { v: a, A: p } : { v: N(c) || a, A: !0 } } else p = { v: a, A: 2 };
                D = p;
                p = D.v;
                D = D.A;
                if (!0 !== D) p = { v: a, A: D };
                else if (P = yc(d, c)) {
                    var F =
                        Kc(P.paddingLeft) || 0;
                    P = P.direction;
                    var Ca = p - a;
                    if (e.google_ad_resize) F = -1 * (Ca + F) + "px";
                    else { for (var ea = d, Wa = 0, Xa = 0; 100 > Xa && ea; Xa++) Wa += ea.offsetLeft + ea.clientLeft - ea.scrollLeft, ea = ea.offsetParent;
                        F = Wa + F;
                        F = "rtl" == P ? -1 * (Ca - F) + "px" : -1 * F + "px" }
                    P = "rtl" == P;
                    p = { v: p, A: D, marginLeft: P ? void 0 : F, marginRight: P ? F : void 0, zIndex: 30 }
                } else p = { v: a, A: D };
                return p
            }),
            g = f.A,
            h = f.marginLeft,
            k = f.marginRight,
            l = f.zIndex,
            m = e.google_ad_height || 0,
            q = Wg(f.v, b, c, d, e, !0 === g);
        f = q.I;
        var z = q.F,
            v = q.R;
        q = q.ha;
        var w = Xg(b, v);
        return new Lg(w, f,
            v, null, q, g, z, "", "", m, a, "", h, k, l)
    }

    function Vg(a) { return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a) }

    function Wg(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, N(c)) ? 4 : 3 : qg(b);
        var g = !1,
            h = !1;
        if (488 > N(c)) { var k = pg(d, c); var l = Gg(d, c);
            g = !l && k;
            h = l && k }
        l = 488 > N(c);
        var m = [Eg(a), Cg(b)];
        wg(c) || m.push(Fg(l, c, d, h));
        null != e.google_max_responsive_height && m.push(Ig(e.google_max_responsive_height));
        var q = [function(v) { return !v.ua }];
        !g && !h || wg(c) || (g = Jg(c, d), q.push(Ig(g)));
        var z = l && !f && 3 === b && Yg(c) ? new W(a, Math.floor(a / 1.2), 1) : Sg(Rg(m), Rg(q));
        if (!z) throw new L("No slot size for availableWidth=" + a);
        l = fe(248, function() {
            var v;
            a: if (f) { if (e.gfwrnh && (v = Kc(e.gfwrnh))) { v = { I: new Og(a, v), F: !0 }; break a }
                v = a / 1.2; if (wg(c)) var w = v;
                else { w = Math; var P = w.min; if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var p = Infinity;
                    else { p = d; var D = Infinity;
                        do { var F = Dg(p, c, "height");
                            F && (D = Math.min(D, F));
                            (F = Dg(p, c, "maxHeight")) && (D = Math.min(D, F)) } while ((p = p.parentElement) && "HTML" != p.tagName);
                        p = D }
                    w = P.call(w, v, p); if (w < .5 * v || 100 > w) w = v }
                U(Jf) && !Gg(d, c) && (w = Math.max(w, .5 * ke(c).clientHeight));
                v = { I: new Og(a, Math.floor(w)), F: w < v ? 102 : !0 } } else v = { I: z, F: 100 };
            return v
        });
        g = l.I;
        l = l.F;
        return "in-article" === e.google_ad_layout && Zg(c) ? { I: $g(a, c, d, g, e), F: !1, R: b, ha: k } : { I: g, F: l, R: b, ha: k }
    }

    function Xg(a, b) { if ("auto" == a) return 1; switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8 } throw Error("bad mask"); }

    function $g(a, b, c, d, e) {
        var f = e.google_ad_height || Dg(c, b, "height");
        a: {
            var g = a;
            var h = e.google_ad_layout || "image-top";
            if ("in-article" == h) {
                var k = g;
                if ("false" == e.google_full_width_responsive) g = k;
                else if (g = rg(b, c, k, .2, e), !0 !== g) e.gfwrnwer = g, g = k;
                else if (g = N(b))
                    if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                        if (ug(b, c), k = (k = c.parentElement) ? (k = yc(k, b)) ? k.direction : "" : "", k) {
                            c.style.border = c.style.borderStyle = c.style.outline = c.style.outlineStyle = c.style.transition = "none";
                            c.style.borderSpacing =
                                c.style.padding = "0";
                            sg(c, k, "0px");
                            c.style.width = N(b) + "px";
                            if (0 !== vg(b, c, k)) { sg(c, k, "0px"); var l = vg(b, c, k);
                                sg(c, k, -1 * l + "px"); var m = vg(b, c, k);
                                0 !== m && m !== l && sg(c, k, l / (m - l) * l + "px") }
                            c.style.zIndex = 30
                        }
                    } else g = k;
                else g = k
            }
            if (250 > g) throw new L("Fluid responsive ads must be at least 250px wide: availableWidth=" + g);g = Math.min(1200, Math.floor(g));
            if (f && "in-article" != h) { h = Math.ceil(f); if (50 > h) throw new L("Fluid responsive ads must be at least 50px tall: height=" + h);
                g = new Lg(11, new V(g, h)) } else {
                if ("in-article" !=
                    h && (e = e.google_ad_layout_key)) {
                    h = "" + e;
                    b = Math.pow(10, 3);
                    if (e = (c = h.match(/([+-][0-9a-z]+)/g)) && c.length) { f = []; for (k = 0; k < e; k++) f.push(parseInt(c[k], 36) / b);
                        b = f } else b = null;
                    if (!b) throw new L("Invalid data-ad-layout-key value: " + h);
                    h = (g + -725) / 1E3;
                    c = 0;
                    e = 1;
                    f = b.length;
                    for (k = 0; k < f; k++) c += b[k] * e, e *= h;
                    h = Math.ceil(1E3 * c - -725 + 10);
                    if (isNaN(h)) throw new L("Invalid height: height=" + h);
                    if (50 > h) throw new L("Fluid responsive ads must be at least 50px tall: height=" + h);
                    if (1200 < h) throw new L("Fluid responsive ads must be at most 1200px tall: height=" +
                        h);
                    g = new Lg(11, new V(g, h));
                    break a
                }
                e = Pg[h];
                if (!e) throw new L("Invalid data-ad-layout value: " + h);
                c = Gg(c, b);
                b = N(b);
                b = "in-article" !== h || c || g !== b ? Math.ceil(e(g)) : Math.ceil(1.25 * e(g));
                g = new Lg(11, "in-article" == h ? new Qg(g, b) : new V(g, b))
            }
        }
        g = g.size();
        return g.minWidth() * g.height() > a * d.height() ? new W(g.minWidth(), g.height(), 1) : d
    }

    function Zg(a) { return U(Hf) || a.location && "#hffwroe2etoq" == a.location.hash }

    function Yg(a) { return U(Gf) || a.location && "#affwroe2etoq" == a.location.hash };

    function ah(a, b) { var c = b.google_ad_format; if ("autorelaxed" == c) { a: { if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = u(Ng), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) { b = !0; break a }
                b = !1 } return b ? 9 : 5 } if (Vg(c)) return 1; if ("link" === c) return 4; if ("fluid" == c) { if (c = "in-article" === b.google_ad_layout) c = U(If) || U(Hf) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash); return c ? (bh(b), 1) : 8 } if (27 === b.google_reactive_ad_format) return bh(b), 1 }

    function bh(a) { a.google_ad_format = "auto";
        a.armr = 3 };
    var ch = null;

    function Y(a) { this.i = [];
        this.j = a || window;
        this.g = 0;
        this.h = null;
        this.l = 0 }
    var dh;
    n = Y.prototype;
    n.ra = function(a, b) { 0 != this.g || 0 != this.i.length || b && b != window ? this.ea(a, b) : (this.g = 2, this.ka(new eh(a, window))) };
    n.ea = function(a, b) { this.i.push(new eh(a, b || this.j));
        fh(this) };
    n.xa = function(a) { this.g = 1; if (a) { var b = ge(188, ya(this.ja, this, !0));
            this.h = this.j.setTimeout(b, a) } };
    n.ja = function(a) { a && ++this.l;
        1 == this.g && (null != this.h && (this.j.clearTimeout(this.h), this.h = null), this.g = 0);
        fh(this) };
    n.Ca = function() { return !(!window || !Array) };
    n.sa = function() { return this.l };

    function fh(a) { var b = ge(189, ya(a.Da, a));
        a.j.setTimeout(b, 0) }
    n.Da = function() { if (0 == this.g && this.i.length) { var a = this.i.shift();
            this.g = 2; var b = ge(190, ya(this.ka, this, a));
            a.g.setTimeout(b, 0);
            fh(this) } };
    n.ka = function(a) { this.g = 0;
        a.h() };

    function gh(a) { try { return a.sz() } catch (b) { return !1 } }

    function hh() { if (dh && gh(dh)) return dh; var a; if (!ch) { for (var b = a = y, c = 0; a && a != a.parent;)
                if (a = a.parent, c++, wc(a)) b = a;
                else break;
            ch = b }
        a = ch; return (b = a.google_jobrunner) && ("object" === typeof b || "function" === typeof b) && gh(b) && Sc(b.nq) && Sc(b.nqa) && Sc(b.al) && Sc(b.rl) ? dh = b : a.google_jobrunner = dh = new Y(a) }

    function ih(a, b) { hh().nq(a, b) }

    function jh(a, b) { hh().nqa(a, b) }
    Y.prototype.nq = Y.prototype.ra;
    Y.prototype.nqa = Y.prototype.ea;
    Y.prototype.al = Y.prototype.xa;
    Y.prototype.rl = Y.prototype.ja;
    Y.prototype.sz = Y.prototype.Ca;
    Y.prototype.tc = Y.prototype.sa;

    function eh(a, b) { this.h = a;
        this.g = b };
    var Rb = "undefined" === typeof sttc ? void 0 : sttc;

    function kh() { try { return Qb(), new Ad(JSON.parse(Rb)) } catch (a) { M.s(838, a instanceof Error ? a : Error(String(a)), void 0, function(b) { b.jspb = String(Rb) }) } return new Ad };

    function lh(a, b) { var c = Zc(b); if (c) { c = N(c); var d = yc(a, b) || {},
                e = d.direction; if ("0px" === d.width && "none" != d.cssFloat) return -1; if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left)); if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2))) } return -1 };
    var mh = "google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_layout google_ad_layout_key google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_semantic_area google_placement_id google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_apsail google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ad_positions google_content_recommendation_columns_num google_content_recommendation_rows_num google_content_recommendation_ui_type google_content_recommendation_use_square_imgs google_contents google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_enable_content_recommendations google_enable_ose google_encoding google_font_face google_font_size google_frame_id google_full_width_responsive_allowed efwr google_full_width_responsive gfwroh gfwrow gfwroml gfwromr gfwroz gfwrnh gfwrnwer gfwrnher google_gl google_hints google_image_size google_kw google_kw_type google_language google_loeid google_max_num_ads google_max_radlink_len google_max_responsive_height google_ml_rank google_mtl google_native_ad_template google_native_settings_key google_num_radlinks google_num_radlinks_per_unit google_override_format google_page_url google_pgb_reactive google_pucrd google_referrer_url google_region google_resizing_allowed google_resizing_height google_resizing_width rpe google_responsive_formats google_responsive_auto_format armr google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_video_play_muted google_source_type google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_tag_origin google_tag_partner google_targeting google_tfs google_video_doc_id google_video_product_type google_webgl_support google_package google_debug_params dash google_restrict_data_processing".split(" "),
        nh = {},
        oh = (nh.google_ad_modifications = !0, nh.google_analytics_domain_name = !0, nh.google_analytics_uacct = !0, nh.google_pause_ad_requests = !0, nh.google_trust_token_operation_status = !0, nh.google_user_agent_client_hint = !0, nh);

    function ph(a) { return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && /google_ad_client/.test(a[1]) ? a[1] : null }

    function qh(a) { if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && /google_ad_client/.test(a[1])) return a[1];
        return null }

    function rh(a, b) {
        var c = a.document.getElementsByTagName("script");
        b = (void 0 === b ? 0 : b) ? "google_parsed_script_for_pub_code" : "google_parsed_script";
        a = a.navigator && a.navigator.userAgent || "";
        a = /appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !Yc() ? ph : qh;
        for (var d = c.length - 1; 0 <= d; d--) {
            var e = c[d];
            if (!e[b] && (e[b] = !0, e = a(e))) return e
        }
        return null
    }

    function sh(a) { try { var b = rh(a) } catch (c) { return !1 } if (!b) return !1; try { th(uh(b), a) } catch (c) { return !1 } return !!a.google_ad_client }

    function vh(a) { for (var b = 0, c = mh.length; b < c; b++) { var d = mh[b];
            oh[d] || (a[d] = null) } }

    function wh(a) { switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try { var b = a.match(/^(?:'(.*)'|"(.*)")$/); if (b) return b[1] || b[2] || ""; if (/^[-+]?\d*(\.\d+)?$/.test(a)) { var c = parseFloat(a); return c === c ? c : void 0 } } catch (d) {} } }

    function uh(a) { for (var b = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm, c = {}, d; d = b.exec(a);) c[d[1]] = wh(d[2]); return c }

    function th(a, b) { for (var c = 0; c < mh.length; c++) { var d = mh[c];
            null == b[d] && null != a[d] && (b[d] = a[d]) } };
    var xh = ["AwfG8hAcHnPa/kJ1Co0EvG/K0F9l1s2JZGiDLt2mhC3QI5Fh4qmsmSwrWObZFbRC9ieDaSLU6lHRxhGUF/i9sgoAAACBeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "AwQ7dCmHkvR6FuOFxAuNnktYSQrGbL4dF+eBkrwNLALc69Wr//PnO1yzns3pjUoCaYbKHtVcnng2hU+8OUm0PAYAAACHeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
        "AysVDPGQTLD/Scn78x4mLwB1tMfje5jwUpAAzGRpWsr1NzoN7MTFhT3ClmImi2svDZA7V6nWGIV8YTPsSRTe0wYAAACHeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
    ];

    function yh() { var a = H.document;
        a = void 0 === a ? window.document : a;
        Mc(xh, a) };
    var zh = ["A3HucHUo1oW9s+9kIKz8mLkbcmdaj5lxt3eiIMp1Nh49dkkBlg1Fhg4Fd/r0vL69mRRA36YutI9P/lJUfL8csQoAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A0OysezhLoCRYomumeYlubLurZTCmsjTb087OvtCy95jNM65cfEsbajrJnhaGwiTxhz38ZZbm+UhUwQuXfVPTg0AAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
        "AxoOxdZQmIoA1WeAPDixRAeWDdgs7ZtVFfH2y19ziTgD1iaHE5ZGz2UdSjubkWvob9C5PrjUfkWi4ZSLgWk3Xg8AAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A7+rMYR5onPnACrz+niKSeFdH3xw1IyHo2AZSHmxrofRk9w4HcQPMYcpBUKu6OQ6zsdxf4m/vqa6tG6Na4OLpAQAAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
    ];

    function Ah() { var a = H.document;
        a = void 0 === a ? window.document : a;
        Mc(zh, a) };

    function Bh(a, b, c) { var d = window; return function() { var e = Qd(),
                f = 3; try { var g = b.apply(this, arguments) } catch (h) { f = 13; if (c) return c(a, h), g; throw h; } finally { d.google_measure_js_timing && e && (e = { label: a.toString(), value: e, duration: (Qd() || 0) - e, type: f }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e)) } return g } }

    function Ch(a, b) { return Bh(a, b, function(c, d) {
            (new be).s(c, d) }) };

    function Z(a, b) { return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b) }

    function Dh(a, b) { return "&" + a + "=" + b.toFixed(3) }

    function Eh() { var a = new r.Set; try { if ("undefined" === typeof googletag || !googletag.pubads) return a; for (var b = googletag.pubads(), c = u(b.getSlots()), d = c.next(); !d.done; d = c.next()) a.add(d.value.getSlotId().getDomId()) } catch (e) {} return a }

    function Fh(a) { a = a.id; return null != a && (Eh().has(a) || t(a, "startsWith").call(a, "google_ads_iframe_") || t(a, "startsWith").call(a, "aswift")) }

    function Gh(a, b, c) { if (!a.sources) return !1; var d = bg(Qf); switch (Hh(a)) {
            case 2:
                var e = Ih(a); if (e) return c.some(function(g) { return Jh(e, g, d) });
            case 1:
                var f = Kh(a); if (f) return b.some(function(g) { return Jh(f, g, d) }) } return !1 }

    function Hh(a) { if (!a.sources) return 0;
        a = a.sources.filter(function(b) { return b.previousRect && b.currentRect }); if (1 <= a.length) { a = a[0]; if (a.previousRect.top < a.currentRect.top) return 2; if (a.previousRect.top > a.currentRect.top) return 1 } return 0 }

    function Kh(a) { return Lh(a, function(b) { return b.currentRect }) }

    function Ih(a) { return Lh(a, function(b) { return b.previousRect }) }

    function Lh(a, b) { return a.sources.reduce(function(c, d) { d = b(d); return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d }, null) }

    function Mh() { le.call(this);
        this.h = this.g = this.B = this.K = this.G = 0;
        this.aa = this.Y = Number.NEGATIVE_INFINITY;
        this.U = this.W = this.X = this.Z = this.da = this.l = this.ca = this.L = 0;
        this.V = !1;
        this.C = this.J = this.o = 0; var a = document.querySelector("[data-google-query-id]");
        this.ba = a ? a.getAttribute("data-google-query-id") : null;
        this.D = null;
        this.$ = !1;
        this.T = function() {} }
    x(Mh, le);

    function Nh() { var a = new Mh; if (U(Nf) && !window.google_plmetrics && window.PerformanceObserver) { window.google_plmetrics = !0; for (var b = u(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]), c = b.next(); !c.done; c = b.next()) c = c.value, Oh(a).observe({ type: c, buffered: !U(Sf) });
            Ph(a) } }

    function Oh(a) {
        a.D || (a.D = new PerformanceObserver(Ch(640, function(b) {
            var c = Qh !== window.scrollX || Rh !== window.scrollY ? [] : Sh,
                d = Th();
            b = u(b.getEntries());
            for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                case "layout-shift":
                    var f = a;
                    if (!e.hadRecentInput && (!U(Of) || .01 < e.value)) {
                        f.G += Number(e.value);
                        Number(e.value) > f.K && (f.K = Number(e.value));
                        f.B += 1;
                        var g = Gh(e, c, d);
                        g && (f.l += e.value, f.Z++);
                        if (5E3 < e.startTime - f.Y || 1E3 < e.startTime - f.aa) f.Y = e.startTime, f.g = 0, f.h = 0;
                        f.aa = e.startTime;
                        f.g += e.value;
                        g && (f.h += e.value);
                        f.g > f.L && (f.L = f.g, f.da = f.h, f.ca = e.startTime + e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    a.X = Math.floor(e.renderTime || e.loadTime);
                    a.W = e.size;
                    break;
                case "first-input":
                    a.U = Number((e.processingStart - e.startTime).toFixed(3));
                    a.V = !0;
                    break;
                case "longtask":
                    e = Math.max(0, e.duration - 50), a.o += e, a.J = Math.max(a.J, e), a.C += 1
            }
        })));
        return a.D
    }

    function Ph(a) { var b = Ch(641, function() { var f = document;
                2 == ({ visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[f.visibilityState || f.webkitVisibilityState || f.mozVisibilityState || ""] || 0) && Uh(a) }),
            c = Ch(641, function() { return void Uh(a) });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c); var d = bg(Rf),
            e;
        0 < d && (e = setTimeout(c, 1E3 * d));
        a.T = function() { document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            Oh(a).disconnect();
            e && clearTimeout(e) } }
    Mh.prototype.H = function() { le.prototype.H.call(this);
        this.T() };

    function Uh(a) {
        if (!a.$) {
            a.$ = !0;
            Oh(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Dh("cls", a.G), b += Dh("mls", a.K), b += Z("nls", a.B), window.LayoutShiftAttribution && (b += Dh("cas", a.l), b += Z("nas", a.Z)), b += Dh("wls", a.L), b += Dh("tls", a.ca), window.LayoutShiftAttribution && (b += Dh("was", a.da)));
            window.LargestContentfulPaint && (b += Z("lcp", a.X), b += Z("lcps", a.W));
            window.PerformanceEventTiming && a.V && (b += Z("fid", a.U));
            window.PerformanceLongTaskTiming &&
                (b += Z("cbt", a.o), b += Z("mbt", a.J), b += Z("nlt", a.C));
            for (var c = 0, d = u(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Fh(e.value) && c++;
            b += Z("nif", c);
            b += Z("ifi", Uc(window));
            c = O(ef).g();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (y === y.top ? 1 : 0);
            if (a.ba) c = "&qqid=" + encodeURIComponent(a.ba);
            else {
                if ("number" !== typeof y.goog_pvsid) try { Object.defineProperty(y, "goog_pvsid", { value: Math.floor(Math.random() * Math.pow(2, 52)), configurable: !1 }) } catch (f) {}
                c = Z("pvsid", Number(y.goog_pvsid) ||
                    -1)
            }
            b += c;
            window.googletag && (b += "&gpt=1");
            window.fetch(b, { keepalive: !0, credentials: "include", redirect: "follow", method: "get", mode: "no-cors" });
            a.i || (a.i = !0, a.H())
        }
    }

    function Jh(a, b, c) { if (0 === c) return !0; var d = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top); return 0 >= d || 0 >= a ? !1 : 100 * d * a / ((b.right - b.left) * (b.bottom - b.top)) >= c }

    function Th() { var a = [].concat(la(document.getElementsByTagName("iframe"))).filter(Fh),
            b = [].concat(la(Eh())).map(function(c) { return document.getElementById(c) }).filter(function(c) { return null !== c });
        Qh = window.scrollX;
        Rh = window.scrollY; return Sh = [].concat(la(a), la(b)).map(function(c) { return c.getBoundingClientRect() }) }
    var Qh = void 0,
        Rh = void 0,
        Sh = [];

    function Vh(a) { a = void 0 === a ? window : a; return !a.PeriodicSyncManager }
    var Wh = { issuerOrigin: "https://adservice.google.com", issuancePath: "/tt/i", redemptionPath: "/tt/r", shouldRedeemToken: function() { var a = void 0 === a ? window : a; return !Vh(a) || U($f) ? !0 : !1 }, shouldRequestToken: function() { return !1 } };

    function Xh() { var a = void 0 === a ? window : a; if (!Vh(a) && U(Tf) || Vh(a) && U(Uf)) { a = a.navigator.userAgent; var b = /Chrome/.test(a); return /Android/.test(a) && b } return !1 }
    var Yh = { issuerOrigin: "https://attestation.android.com", issuancePath: "/att/i", redemptionPath: "/att/r", shouldRedeemToken: function() { return Xh() }, shouldRequestToken: function() { return Xh() } };
    var Zh = ["A+b/H0b8RPXNaJgaNFpO0YOFuGK6myDQXlwnJB3SwzvNMfcndat4DZYMrP4ClJIzYWo3/yP2S+8FTZ/lpqbPAAEAAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", "A9ZgbRtm4pU3oZiuNzOsKcC8ppFSZdcjP2qYcdQrFKVzkmiWH1kdYY1Mi9x7G8+PS8HV9Ha9Cz0gaMdKsiVZIgMAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
        "AxL6oBxcpn5rQDPKSAs+d0oxNyJYq2/4esBUh3Yx5z8QfcLu+AU8iFCXYRcr/CEEfDnkxxLTsvXPJFQBxHfvkgMAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A9KPtG5kl3oLTk21xqynDPGQ5t18bSOpwt0w6kGa6dEWbuwjpffmdUpR3W+faZDubGT+KIk2do0BX2ca16x8qAcAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
        "AookgM0K6zABiuRTZwpn+R95G2CKmUH/2+zf2kS/QpMlVZ6HTI6QekeLkrJyxeIi62p2ejcQTF464pkdlx0Nwg0AAABmeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJUcnVzdFRva2VucyIsImV4cGlyeSI6MTYzNDA4MzE5OSwiaXNTdWJkb21haW4iOnRydWV9"
    ];

    function $h(a, b, c) { a = void 0 === a ? function() {} : a;
        b = void 0 === b ? null : b;
        c = void 0 === c ? !1 : c;
        le.call(this);
        ai();
        this.o = b || U(Wf) ? [Yh] : [Wh, Yh];
        this.h = c;
        this.l = a; if (document.hasTrustToken && !U(Vf))
            if (U(Yf)) { if (!Array.isArray(window.goog_tt_state)) { var d = bi(this);
                    Object.defineProperty(window, "goog_tt_state", { configurable: !1, get: function() { return d.slice() } }) } } else this.g = bi(this) }
    x($h, le);

    function ai() { var a = void 0 === a ? window.document : a;
        Mc(Zh, a) }

    function bi(a) { var b = a.o.map(function(c) { return { issuerOrigin: c.issuerOrigin, state: U(Xf) && !a.h ? 12 : 1 } });
        U(Yf) || a.l(b); return b }

    function ci(a, b, c) { if (U(Yf)) { if (a = t(window.goog_tt_state, "find").call(window.goog_tt_state, function(e) { return e.issuerOrigin === b })) a.state = c } else { var d = t(a.g, "find").call(a.g, function(e) { return e.issuerOrigin === b });
            d && (d.state = c, a.l(a.g)) } }

    function di() { var a = window.goog_tt_state; return Array.isArray(a) && a.some(function(b) { return 1 != b.state }) }

    function ei(a, b) { var c = b.issuerOrigin + b.redemptionPath,
            d = { keepalive: !0, redirect: "follow", method: "get", trustToken: { type: "token-redemption", issuer: b.issuerOrigin, refreshPolicy: "none" } };
        ci(a, b.issuerOrigin, 2); return window.fetch(c, d).then(function(e) { if (!e.ok) throw Error(e.status + ": Network response was not ok!");
            ci(a, b.issuerOrigin, 6) }).catch(function(e) { e && "NoModificationAllowedError" === e.name ? ci(a, b.issuerOrigin, 6) : ci(a, b.issuerOrigin, 5) }) }

    function fi(a, b, c) { var d = b.issuerOrigin + b.issuancePath;
        ci(a, b.issuerOrigin, 8); return window.fetch(d, { trustToken: { type: "token-request" } }).then(function(e) { if (!e.ok) throw Error(e.status + ": Network response was not ok!");
            ci(a, b.issuerOrigin, 10); if (c) return ei(a, b) }).catch(function(e) { if (e && "NoModificationAllowedError" === e.name) { if (ci(a, b.issuerOrigin, 10), c) return ei(a, b) } else ci(a, b.issuerOrigin, 9) }) }

    function gi(a) { if (!(!document.hasTrustToken || U(Vf) || U(Xf) && !a.h || U(Yf) && di())) { var b = [];
            a.o.forEach(function(c) { var d = c.shouldRedeemToken(),
                    e = c.shouldRequestToken(); if (d || e) { var f = document.hasTrustToken(c.issuerOrigin).then(function(g) { if (g) { if (d) return ei(a, c) } else { if (e) return fi(a, c, d);
                            ci(a, c.issuerOrigin, 3) } });
                    b.push(f) } else ci(a, c.issuerOrigin, 7) }); if (window.Promise && window.Promise.all) return window.Promise.all(b) } };

    function hi(a) { C(this, a, ii, null) }
    x(hi, B);
    var ii = [6];
    var ji = "platform platformVersion architecture model uaFullVersion bitness".split(" ");

    function ki() { var a = H; return a.navigator && a.navigator.userAgentData && "function" === typeof a.navigator.userAgentData.getHighEntropyValues ? a.navigator.userAgentData.getHighEntropyValues(ji).then(function(b) { var c = new hi;
            c = Db(c, 1, b.platform);
            c = Db(c, 2, b.platformVersion);
            c = Db(c, 3, b.architecture);
            c = Db(c, 4, b.model);
            c = Db(c, 5, b.uaFullVersion); return Db(c, 9, b.bitness) }) : null };

    function li(a) { a.google_sa_impl && !a.document.getElementById("google_shimpl") && (a.google_sa_queue = null, a.google_sl_win = null, a.google_sa_impl = null) }

    function mi(a, b) { var c = H; var d = void 0 === d ? "" : d;
        li(c);
        c.google_sa_queue || (c.google_sa_queue = [], c.google_sl_win = c, c.google_process_slots = function() { return ni(c) }, a = oi(c, d, a, b), xc(c.document, a).id = "google_shimpl") }
    var ni = ge(215, function(a) { var b = a.google_sa_queue,
            c = b.shift();
        a.google_sa_impl || Md($d, "shimpl", { t: "no_fn" }, !0, void 0, void 0); "function" === typeof c && fe(216, c);
        b.length && a.setTimeout(function() { return ni(a) }, 0) });

    function pi(a, b, c) { a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b) }

    function oi(a, b, c, d) {
        var e = Math.random() < bg(zf) ? Za(pc(c.Aa).toString()) : null;
        c = Bb(d, 4) ? c.za : c.Ba;
        c = e ? e : Za(pc(c).toString());
        e = {};
        a: { if (Bb(d, 4)) { if (d = b || qi(a)) { var f = {};
                    d = (f.client = d, f.plah = a.location.host, f.amaexp = 1, f); break a } throw Error("PublisherCodeNotFoundForAma"); }
            d = {} }
        ri(d, e);
        a: { if (d = bg(xf))
                if (b = b || qi(a)) { f = {};
                    a = (f.client = b, f.plah = a.location.host, f.eid = "" + d, f.ama_t = "adsense", f); break a }
            a = {} }
        ri(a, e);
        a = [];
        O(ag).g(Kf.g, Kf.defaultValue) && a.push(O(ag).g(Kf.g, Kf.defaultValue));
        ri(0 === a.length ? {} : { bust: a.join("~") }, e);
        a = Ya.exec(Va(c).toString());
        c = a[3] || "";
        return Za(a[1] + $a("?", a[2] || "", e) + $a("#", c, void 0))
    }

    function ri(a, b) { Dc(a, function(c, d) { void 0 === b[d] && (b[d] = c) }) }

    function qi(a) { if (a.google_ad_client) return a.google_ad_client; if (Af) { var b = Mb(a).head_tag_slot_vars; if (b && b.google_ad_client) return b.google_ad_client } else if (b = a.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]')) return b.getAttribute("data-ad-client"); if (b = a.document.querySelector(".adsbygoogle[data-ad-client]")) return b.getAttribute("data-ad-client");
        (a = rh(a, !0)) ? (a = uh(a), a = a.google_ad_client ? a.google_ad_client : "") : a = ""; return a ? a : "" }

    function si(a) {
        var b = H,
            c = {};
        null == b.google_ad_client && sh(b) && (c.google_loader_features_used = 2048);
        th(b, c);
        if (!c.google_ad_host) { var d = b.document.querySelector('meta[name="google-adsense-platform-account"]');
            d && (c.google_ad_host = d.getAttribute("content")) }
        d = b;
        var e = void 0 === e ? 1 : e;
        var f = Nc(d) || Nc();
        d = (f ? wc(f.master) ? f.master : null : null) || d;
        d.google_unique_id = (d.google_unique_id || 0) + e;
        c.google_unique_id = d.google_unique_id;
        c.google_loader_used = "sa";
        vh(b);
        e = b.document;
        e.currentScript ? e = e.currentScript.parentElement :
            (e = e.getElementsByTagName("script"), e = e[e.length - 1].parentElement);
        if (b.document && b.document.body && !ah(b, c) && !c.google_reactive_ad_format) {
            d = c.google_ad_width;
            var g = lh(e, b);
            if (0 < g && d > g) {
                f = c.google_ad_height;
                d = !!nc[d + "x" + f];
                var h = g;
                if (d) { var k = oc(g, f); if (k) h = k, c.google_ad_format = k + "x" + f + "_0ads_al";
                    else throw new L("No slot size for availableWidth=" + g); }
                c.google_ad_resize = !0;
                c.google_ad_width = h;
                d || (c.google_ad_format = null, c.google_override_format = !0);
                g = h;
                f = Ug(g, "auto", b, e, c);
                Mg(f, g, c);
                f = f.size();
                c.google_responsive_formats =
                    null;
                f.minWidth() > g && !d && (c.google_ad_width = f.minWidth())
            }
        }
        d = c.google_ad_width || 0;
        f = za(Ug, d, "auto", b, e, c, !1, !0);
        g = Zc(b) || b;
        h = c.google_ad_client;
        g = g.location && "#ftptohbh" === g.location.hash ? 2 : $c(g.location, "google_responsive_slot_debug") || $c(g.location, "google_responsive_slot_preview") || U(Df) ? 1 : U(Bf) ? 2 : me(g, 1, h) ? 1 : 0;
        if (h = 0 !== g) b: if ((h = !(488 > N(b)) && !U(Cf) || c.google_reactive_ad_format || ah(b, c)) || (h = !((Jc.test(c.google_ad_width) || Ic.test(e.style.width)) && (Jc.test(c.google_ad_height) || Ic.test(e.style.height)))),
                h) h = !1;
            else { for (h = e; h; h = h.parentElement) { k = yc(h, b); if (!k) { c.gfwrnwer = 18;
                        h = !1; break b } if (!Ka(["static", "relative"], k.position)) { c.gfwrnwer = 17;
                        h = !1; break b } } if (!U(Cf) && (h = rg(b, e, d, .3, c), !0 !== h)) { c.gfwrnwer = h;
                    h = !1; break b }
                h = b.top == b ? !0 : !1 }
        h && (c.google_resizing_allowed = !0, c.ovlp = !0, 2 === g ? (g = {}, Mg(f(), d, g), c.google_resizing_width = g.google_ad_width, c.google_resizing_height = g.google_ad_height, g.ds && (c.ds = g.ds), c.iaaso = !1) : (c.google_ad_format = "auto", c.iaaso = !0, c.armr = 1));
        (d = 1 === Uc(c) && Ag(b, c)) && xg(b, d);
        1 ==
            ah(b, c) && (d = c.google_ad_width || 0, Mg(Ug(d, c.google_ad_format, b, e, c), d, c));
        ti(b, c, a)
    }

    function ti(a, b, c) {
        var d = jg(a, b);
        ui(a, b);
        var e = (new Date).getTime();
        b.google_lrv = E(c, 2, "");
        b.google_async_iframe_id = d;
        b.google_start_time = Ba;
        b.google_bpp = e > Ba ? e - Ba : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[d] = b;
        b.dninfo = b.google_loader_used;
        e = (c = !!a.document.getElementById(d + "_anchor")) ? ih : jh;
        b.dninfo += "_" + c;
        var f = { pubWin: a, iframeWin: null, vars: b };
        pi(a, function() {
            b.dninfo += "_" + !!a.document.getElementById(d + "_anchor");
            var g = a.google_sa_impl(f);
            g && g.catch && g.catch(function(h) {
                M.s(911, h instanceof Error ? h : Error(h), void 0, void 0)
            })
        }, e)
    }

    function ui(a, b) {
        var c = b.google_ad_output,
            d = b.google_ad_format,
            e = b.google_ad_width || 0,
            f = b.google_ad_height || 0;
        d || "html" != c && null != c || (d = e + "x" + f);
        c = !b.google_ad_slot || b.google_override_format || !nc[b.google_ad_width + "x" + b.google_ad_height] && "aa" == b.google_loader_used;
        d && c ? d = d.toLowerCase() : d = "";
        b.google_ad_format = d;
        if ("number" !== typeof b.google_reactive_sra_index || !b.google_ad_unit_key) {
            d = [b.google_ad_slot, b.google_orig_ad_format || b.google_ad_format, b.google_ad_type, b.google_orig_ad_width || b.google_ad_width,
                b.google_orig_ad_height || b.google_ad_height
            ];
            c = [];
            e = 0;
            for (f = kc.parentElement; f && 25 > e; f = f.parentNode, ++e) 9 === f.nodeType ? c.push("") : c.push(f.id);
            (c = c.join()) && d.push(c);
            b.google_ad_unit_key = Ec(d.join(":")).toString();
            d = kc;
            var g = void 0 === g ? !1 : g;
            c = [];
            for (e = 0; d && 25 > e; ++e) {
                f = "";
                void 0 !== g && g || (f = (f = 9 !== d.nodeType && d.id) ? "/" + f : "");
                a: {
                    if (d && d.nodeName && d.parentElement) {
                        var h = d.nodeName.toString().toLowerCase();
                        for (var k = d.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                            var q = k[m];
                            if (q.nodeName && q.nodeName.toString().toLowerCase() ===
                                h) { if (d === q) { h = "." + l; break a }++l }
                        }
                    }
                    h = ""
                }
                c.push((d.nodeName && d.nodeName.toString().toLowerCase()) + f + h);
                d = d.parentElement
            }
            g = c.join() + ":";
            d = [];
            if (a) try { var z = a.parent; for (c = 0; z && z !== a && 25 > c; ++c) { var v = z.frames; for (e = 0; e < v.length; ++e)
                        if (a === v[e]) { d.push(e); break }
                    a = z;
                    z = a.parent } } catch (w) {}
            b.google_ad_dom_fingerprint = Ec(g + d.join()).toString()
        }
    }

    function vi() {
        var a = kh();
        Bg(M, E(a, 2, ""));
        M.la(he);
        var b = ic(a);
        lg([1, Hb(a)]);
        if (!A("Trident") && !A("MSIE") || 0 <= bb(hb(), 11))
            if ("js" == H.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else if (hg(a, null === H.document.currentScript ? 1 : Ub(b.Ea)), null == (H.Prototype || {}).Version || !U(yf)) {
            ce(U(Pf));
            try { Nh() } catch (e) {}
            var c = Zc(y);
            c && (c.google_reactive_ads_global_state ? null == c.google_reactive_ads_global_state.floatingAdsStacking &&
                (c.google_reactive_ads_global_state.floatingAdsStacking = new je) : c.google_reactive_ads_global_state = new ie, c = c.google_reactive_ads_global_state, c.tagSpecificState[1] || (c.tagSpecificState[1] = new mg));
            if ((c = Nb()) && c.qa) vh(H);
            else {
                Tc();
                if (!U(Xf)) { var d = ge(781, function(e) { H.google_trust_token_operation_status = e });
                    ge(779, function() { var e = U(Yf) ? new $h : new $h(d);
                        0 < bg(Zf) ? H.google_trust_token_operation_promise = gi(e) : gi(e) })() }
                c = ki();
                null != c && c.then(function(e) {
                    H.google_user_agent_client_hint = JSON.stringify(e.h &&
                        Gb(e), Ib)
                });
                Ah();
                yh();
                mi(b, a);
                si(a)
            }
        }
    };
    fe(158, function() { vi() });
}).call(this, "[2019,\"r20210701\",\"\/r20190131\",null,[],null,null,\".google.com.vn\",null,null,[],[[[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1010,null,[null,1]],[null,1017,null,[null,-1]],[1021,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[null,1041,null,[null,50]],[1042,null,null,[1]],[1040,null,null,[1]],[1049,null,null,[1]],[1078,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[1036,null,null,[1]],[310,null,null,[1]],[1051,null,null,[1]],[325,null,null,[1]],[1007,null,null,[1]],[null,1008,null,[null,2]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1055,null,null,[1]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[null,64,null,[null,300]],[1074,null,null,[1]],[230,null,null,[1]],[1931,null,null,[1]],[1945,null,null,[1]],[1938,null,null,[1]],[null,1929,null,[null,50]],[null,null,null,[null,null,null,[\"facebook[.]com\",\"whatsapp[.]com\",\"youtube[.]com\",\"google[.]com\",\"\\\\\/ads?\\\\\/\"]],null,9]],[[10,[[10,[[44739547],[44739548,[[1049,null,null,[1]]]]]],[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[150,[[42530671],[42530672,[[1004,null,null,[1]]]]]],[1,[[42530887,[[290,null,null,[1]]]],[42530888,[[290,null,null,[1]]]],[42530889,[[290,null,null,[1]]]],[42530890,[[290,null,null,[1]]]],[42530891,[[290,null,null,[1]]]],[42530892,[[290,null,null,[1]]]],[42530893,[[290,null,null,[1]]]]],null,null,null,53],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[1,[[44743411],[44743412,[[null,1072,null,[null,0.75]]]],[44743413,[[null,1072,null,[null,0.75]]]]],null,null,null,53,null,100],[1,[[44743414],[44743415,[[null,1072,null,[null,0.75]]]],[44743416,[[null,1072,null,[null,0.75]]]]],null,null,null,53,null,120],[1,[[44743417],[44743418,[[null,1072,null,[null,0.75]]]],[44743419,[[null,1072,null,[null,0.75]]]]],null,null,null,53,null,140],[null,[[44739390],[44739391,[[1033,null,null,[1]]]],[44739392,[[1033,null,null,[1]]]]]],[null,[[44744331],[44744332,[[1033,null,null,[1]]]],[44744333,[[1033,null,null,[1]]]],[44744334,[[1033,null,null,[1]]]],[44744335,[[1033,null,null,[1]]]],[44744336,[[1033,null,null,[1]]]]]],[1,[[44745298],[44745299,[[1033,null,null,[1]]]],[44745300,[[1033,null,null,[1]]]],[44745301,[[1033,null,null,[1]]]],[44745302,[[1033,null,null,[1]]]],[44745303,[[1033,null,null,[1]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982300,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984300,null,[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[50,[[31060004,null,[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]],[31060005,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]]]],[10,[[31060030],[31060031,[[1928,null,null,[1]]]]]],[10,[[31060930],[31060932,[[1060,null,null,[1]]]]]],[50,[[31060956],[31060957,[[1059,null,null,[1]]]]]],[100,[[31060972]]],[1000,[[31060973,null,[6,null,null,null,6,null,\"31060917\"]],[31060974,[[null,null,14,[null,null,\"exp=31060974\"]]],[6,null,null,null,6,null,\"31060918\"]],[31060975,[[null,null,14,[null,null,\"exp=31060975\"]]],[6,null,null,null,6,null,\"31060919\"]]]],[10,[[31061380],[31061381,[[1073,null,null,[1]]]]]],[10,[[31061485],[31061486,[[1078,null,null,[1]]]]]],[1000,[[31061745,null,[6,null,null,null,6,null,\"31060917\"]],[31061746,[[null,null,14,[null,null,\"exp=31061746\"]]],[6,null,null,null,6,null,\"31060918\"]],[31061747,[[null,null,14,[null,null,\"exp=31061747\"]]],[6,null,null,null,6,null,\"31060919\"]]],[4,null,55]],[1,[[44736076],[44736077,[[null,1046,null,[null,0.01]]]]]],[10,[[31061760],[31061761,[[null,1032,null,[null,200]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]]]]],[13,[[50,[[31061420],[31061421,[[377914450,null,null,[1]]]]]],[10,[[21065726,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21065727,[[240,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21065728,[[241,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[100,[[21067087],[21067088,[[78,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,[\"31061691\"]]]]],[10,[[21067664,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21067665,[[null,1905,null,[null,30]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067666,[[null,1905,null,[null,60]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067667,[[null,1905,null,[null,120]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[10,[[21069888,[[null,1929,null,[null,50]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069889,[[null,1929,null,[null,25]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069890,[[null,1929,null,[null,1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069891,[[null,1929,null,[null,75]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069892,[[null,1929,null,[null,100]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]]]],[20,[[10,[[31061694],[31061695,[[380025941,null,null,[1]]]]],null,null,null,null,null,201,null,102]]],[17,[[5,[[44744439,[[290,null,null,[1]],[190,null,null,[1]]]],[44744440,[[1064,null,null,[1]],[null,1056,null,[null,3000]],[null,1057,null,[null,650]],[290,null,null,[1]],[190,null,null,[1]]]],[44744441,[[1064,null,null,[1]],[null,1056,null,[null,3000]],[null,1057,null,[null,650]],[290,null,null,[1]],[190,null,null,[1]]]]],null,null,null,null,null,null,null,105],[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[11,[[1000,[[21067496]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[1000,[[31060474,null,[2,[[1,[[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]],[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]]]]]]],[100,[[31060744],[31060745,[[360245598,null,null,[1]],[null,1927,null,[null,100]]]]],[4,null,9,null,null,null,null,[\"document.interestCohort\"]]],[1000,[[31060791,null,[4,null,8,null,null,null,null,[\"window.top.frames.google_ads_top_frame_ctrl\"]]],[31060792,[[null,1044,null,[null,200]]],[4,null,8,null,null,null,null,[\"window.top.frames.google_ads_top_frame\"]]]]]]],[12,[[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[50,[[31061217],[31061218,[[374326588,null,null,[1]]]]]],[50,[[31061382],[31061383,[[377105258,null,null,[1]]]]]],[10,[[31061487],[31061488,[[379841917,null,null,[1]]]]]],[100,[[31061661],[31061662,[[377431981,null,null,[1]]]]]],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[50,[[44740386]]],[10,[[44743203,[[1940,null,null,[1]]]],[44743204,[[1940,null,null,[]]]],[44744170]]]]]]]]");