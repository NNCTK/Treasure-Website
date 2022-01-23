'use strict';
var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype)
        return a;
    a[b] = c.value;
    return a
}
;
function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math)
            return c
    }
    throw Error("Cannot find global object");
}
var da = ba(this);
function ea(a, b) {
    if (b)
        a: {
            var c = da;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c))
                    break a;
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && aa(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
}
ea("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [], d;
        for (d in b)
            Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});
ea("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b))
                return !0
        }
        return !1
    }
});
ea("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global)
            throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b,b instanceof RegExp ? void 0 : "g")
          , d = this
          , e = !1
          , f = {
            next: function() {
                if (e)
                    return {
                        value: void 0,
                        done: !0
                    };
                var g = c.exec(d);
                if (!g)
                    return e = !0,
                    {
                        value: void 0,
                        done: !0
                    };
                "" === g[0] && (c.lastIndex += 1);
                return {
                    value: g,
                    done: !1
                }
            }
        };
        f[Symbol.iterator] = function() {
            return f
        }
        ;
        return f
    }
});
ea("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
var q = this || self;
function r(a, b) {
    a = a.split(".");
    b = b || q;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]],
        null == b)
            return null;
    return b
}
function fa() {}
function u(a, b) {
    a = a.split(".");
    var c = q;
    a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
        a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}
function v(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.oa = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.wa = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
            g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
}
;function ha(a) {
    if (Error.captureStackTrace)
        Error.captureStackTrace(this, ha);
    else {
        const b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
}
v(ha, Error);
ha.prototype.name = "CustomError";
function ia(a, b, c) {
    Array.prototype.forEach.call(a, b, c)
}
function ja(a, b) {
    for (let d = 1; d < arguments.length; d++) {
        const e = arguments[d];
        var c = typeof e;
        c = "object" != c ? c : e ? Array.isArray(e) ? "array" : c : "null";
        if ("array" == c || "object" == c && "number" == typeof e.length) {
            c = a.length || 0;
            const f = e.length || 0;
            a.length = c + f;
            for (let g = 0; g < f; g++)
                a[c + g] = e[g]
        } else
            a.push(e)
    }
}
function ka(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
}
;function la(a) {
    if (!a || "object" !== typeof a)
        return a;
    if ("function" === typeof a.clone)
        return a.clone();
    const b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a)
        b[c] = la(a[c]);
    return b
}
var ma = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function na(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (let f = 0; f < ma.length; f++)
            c = ma[f],
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
}
;var oa = String.prototype.trim ? function(a) {
    return a.trim()
}
: function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
}
;
(class {
    constructor(a, b) {
        this.h = b === pa ? a : ""
    }
}
).prototype.toString = function() {
    return this.h.toString()
}
;
var pa = {};
var qa;
a: {
    var ra = q.navigator;
    if (ra) {
        var sa = ra.userAgent;
        if (sa) {
            qa = sa;
            break a
        }
    }
    qa = ""
}
function y(a) {
    return -1 != qa.indexOf(a)
}
;function ta(a, b, c) {
    if (ua.length) {
        var d = ua.pop();
        a && va(d, a, b, c);
        return d
    }
    return new wa(a,b,c)
}
function va(a, b, c, d) {
    b = b.constructor === Uint8Array ? b : b.constructor === ArrayBuffer ? new Uint8Array(b) : b.constructor === Array ? new Uint8Array(b) : b.constructor === String ? xa(b) : b instanceof Uint8Array ? new Uint8Array(b.buffer,b.byteOffset,b.byteLength) : new Uint8Array(0);
    a.j = b;
    a.l = void 0 !== c ? c : 0;
    a.i = void 0 !== d ? a.l + d : a.j.length;
    a.h = a.l
}
function ya(a) {
    var b = a.j;
    var c = b[a.h + 0];
    var d = c & 127;
    if (128 > c)
        return a.h += 1,
        d;
    c = b[a.h + 1];
    d |= (c & 127) << 7;
    if (128 > c)
        return a.h += 2,
        d;
    c = b[a.h + 2];
    d |= (c & 127) << 14;
    if (128 > c)
        return a.h += 3,
        d;
    c = b[a.h + 3];
    d |= (c & 127) << 21;
    if (128 > c)
        return a.h += 4,
        d;
    c = b[a.h + 4];
    d |= (c & 15) << 28;
    if (128 > c)
        return a.h += 5,
        d >>> 0;
    a.h += 5;
    128 <= b[a.h++] && 128 <= b[a.h++] && 128 <= b[a.h++] && 128 <= b[a.h++] && a.h++;
    return d
}
class wa {
    constructor(a, b, c) {
        this.j = null;
        this.h = this.i = this.l = 0;
        this.m = !1;
        a && va(this, a, b, c)
    }
    clone() {
        return ta(this.j, this.l, this.i - this.l)
    }
    clear() {
        this.j = null;
        this.h = this.i = this.l = 0;
        this.m = !1
    }
    reset() {
        this.h = this.l
    }
    advance(a) {
        this.h += a
    }
}
var ua = [];
function za(a) {
    var b = a.h;
    (b = b.h == b.i) || (b = a.l) || (b = a.h,
    b = b.m || 0 > b.h || b.h > b.i);
    if (b)
        return !1;
    b = ya(a.h);
    var c = b & 7;
    if (0 != c && 5 != c && 1 != c && 2 != c && 3 != c && 4 != c)
        return a.l = !0,
        !1;
    a.j = b >>> 3;
    a.i = c;
    return !0
}
function z(a) {
    switch (a.i) {
    case 0:
        if (0 != a.i)
            z(a);
        else {
            for (a = a.h; a.j[a.h] & 128; )
                a.h++;
            a.h++
        }
        break;
    case 1:
        1 != a.i ? z(a) : a.h.advance(8);
        break;
    case 2:
        if (2 != a.i)
            z(a);
        else {
            var b = ya(a.h);
            a.h.advance(b)
        }
        break;
    case 5:
        5 != a.i ? z(a) : a.h.advance(4);
        break;
    case 3:
        b = a.j;
        do {
            if (!za(a)) {
                a.l = !0;
                break
            }
            if (4 == a.i) {
                a.j != b && (a.l = !0);
                break
            }
            z(a)
        } while (1);
        break;
    default:
        a.l = !0
    }
}
class Aa {
    constructor(a) {
        this.h = ta(a, void 0, void 0);
        this.i = this.j = -1;
        this.l = !1
    }
    reset() {
        this.h.reset();
        this.i = this.j = -1
    }
    advance(a) {
        this.h.advance(a)
    }
}
;var Ba = y("Safari") && !((y("Chrome") || y("CriOS")) && !y("Edge") || y("Coast") || y("Opera") || y("Edge") || y("Edg/") || y("OPR") || y("Firefox") || y("FxiOS") || y("Silk") || y("Android")) && !(y("iPhone") && !y("iPod") && !y("iPad") || y("iPad") || y("iPod"));
var Ca = {}
  , Da = null;
function xa(a) {
    var b = a.length
      , c = 3 * b / 4;
    c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
    var d = new Uint8Array(c)
      , e = 0;
    Ea(a, function(f) {
        d[e++] = f
    });
    return d.subarray(0, e)
}
function Ea(a, b) {
    function c(k) {
        for (; d < a.length; ) {
            var l = a.charAt(d++)
              , p = Da[l];
            if (null != p)
                return p;
            if (!/^[\s\xa0]*$/.test(l))
                throw Error("Unknown base64 encoding at char: " + l);
        }
        return k
    }
    Ga();
    for (var d = 0; ; ) {
        var e = c(-1)
          , f = c(0)
          , g = c(64)
          , h = c(64);
        if (64 === h && -1 === e)
            break;
        b(e << 2 | f >> 4);
        64 != g && (b(f << 4 & 240 | g >> 2),
        64 != h && b(g << 6 & 192 | h))
    }
}
function Ga() {
    if (!Da) {
        Da = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
            var d = a.concat(b[c].split(""));
            Ca[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                void 0 === Da[f] && (Da[f] = e)
            }
        }
    }
}
;function Ha() {}
var Ia = "function" == typeof Uint8Array;
function A(a, b, c, d, e, f) {
    a.h = null;
    b || (b = c ? [c] : []);
    a.u = c ? String(c) : void 0;
    a.l = 0 === c ? -1 : 0;
    a.i = b;
    a: {
        c = a.i.length;
        b = -1;
        if (c && (b = c - 1,
        c = a.i[b],
        !(null === c || "object" != typeof c || Array.isArray(c) || Ia && c instanceof Uint8Array))) {
            a.m = b - a.l;
            a.j = c;
            break a
        }
        -1 < d ? (a.m = Math.max(d, b + 1 - a.l),
        a.j = null) : a.m = Number.MAX_VALUE
    }
    a.F = {};
    if (a.G = e)
        for (d = 0; d < e.length; d++)
            b = e[d],
            b < a.m ? (b += a.l,
            a.i[b] = a.i[b] || Ja) : (Ka(a),
            a.j[b] = a.j[b] || Ja);
    if (f && f.length)
        for (d = 0; d < f.length; d++) {
            b = e = void 0;
            c = a;
            for (var g = f[d], h = 0; h < g.length; h++) {
                var k = g[h]
                  , l = B(c, k);
                null != l && (b = k,
                e = l,
                La(c, k, void 0))
            }
            b && La(c, b, e)
        }
}
var Ja = [];
function Ka(a) {
    var b = a.m + a.l;
    a.i[b] || (a.j = a.i[b] = {})
}
function B(a, b) {
    if (b < a.m) {
        b += a.l;
        var c = a.i[b];
        return c !== Ja ? c : a.i[b] = []
    }
    if (a.j)
        return c = a.j[b],
        c === Ja ? a.j[b] = [] : c
}
function La(a, b, c) {
    b < a.m ? a.i[b + a.l] = c : (Ka(a),
    a.j[b] = c)
}
function Ma(a) {
    var b = Na;
    a.h || (a.h = {});
    if (!a.h[1]) {
        let e = B(a, 1);
        for (var c = [], d = 0; d < e.length; d++)
            c[d] = new b(e[d]);
        a.h[1] = c
    }
    b = a.h[1];
    b == Ja && (b = a.h[1] = []);
    return b
}
function Oa(a) {
    if (a.h)
        for (var b in a.h) {
            var c = a.h[b];
            if (Array.isArray(c))
                for (var d = 0; d < c.length; d++)
                    c[d] && Oa(c[d]);
            else
                c && Oa(c)
        }
    return a.i
}
Ha.prototype.clone = function() {
    return Pa(this)
}
;
function Pa(a) {
    const b = Qa(Oa(a))
      , c = A;
    A = function(d, e, f, g, h, k) {
        c(d, b, f, g, h, k);
        A = c
    }
    ;
    a = new a.constructor(b);
    A !== c && (A = c);
    return a
}
function Qa(a) {
    if (Array.isArray(a)) {
        for (var b = Array(a.length), c = 0; c < a.length; c++) {
            var d = a[c];
            null != d && (b[c] = "object" == typeof d ? Qa(d) : d)
        }
        return b
    }
    if (Ia && a instanceof Uint8Array)
        return new Uint8Array(a);
    b = {};
    for (c in a)
        d = a[c],
        null != d && (b[c] = "object" == typeof d ? Qa(d) : d);
    return b
}
;var C = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Ra(a) {
    return a ? decodeURI(a) : a
}
function Sa(a, b, c) {
    if (Array.isArray(b))
        for (var d = 0; d < b.length; d++)
            Sa(a, String(b[d]), c);
    else
        null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
}
function Ta(a) {
    var b = [], c;
    for (c in a)
        Sa(c, a[c], b);
    return b.join("&")
}
;function E(a, b) {
    var c = void 0;
    return new (c || (c = Promise))(function(d, e) {
        function f(k) {
            try {
                h(b.next(k))
            } catch (l) {
                e(l)
            }
        }
        function g(k) {
            try {
                h(b["throw"](k))
            } catch (l) {
                e(l)
            }
        }
        function h(k) {
            k.done ? d(k.value) : (new c(function(l) {
                l(k.value)
            }
            )).then(f, g)
        }
        h((b = b.apply(a, void 0)).next())
    }
    )
}
;function Ua(a) {
    if (!a)
        return "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3)
      , c = b.indexOf("/");
    -1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c)
        throw Error("URI is missing protocol: " + a);
    if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c)
        throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === c && "80" !== e || "https" === c && "443" !== e)
            a = ":" + e
    }
    return c + "://" + b + a
}
;function Va() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        p = l = 0
    }
    function b(n) {
        for (var t = g, m = 0; 64 > m; m += 4)
            t[m / 4] = n[m] << 24 | n[m + 1] << 16 | n[m + 2] << 8 | n[m + 3];
        for (m = 16; 80 > m; m++)
            n = t[m - 3] ^ t[m - 8] ^ t[m - 14] ^ t[m - 16],
            t[m] = (n << 1 | n >>> 31) & 4294967295;
        n = e[0];
        var w = e[1]
          , x = e[2]
          , D = e[3]
          , ca = e[4];
        for (m = 0; 80 > m; m++) {
            if (40 > m)
                if (20 > m) {
                    var P = D ^ w & (x ^ D);
                    var Fa = 1518500249
                } else
                    P = w ^ x ^ D,
                    Fa = 1859775393;
            else
                60 > m ? (P = w & x | D & (w | x),
                Fa = 2400959708) : (P = w ^ x ^ D,
                Fa = 3395469782);
            P = ((n << 5 | n >>> 27) & 4294967295) + P + ca + Fa + t[m] & 4294967295;
            ca = D;
            D = x;
            x = (w << 30 | w >>> 2) & 4294967295;
            w = n;
            n = P
        }
        e[0] = e[0] + n & 4294967295;
        e[1] = e[1] + w & 4294967295;
        e[2] = e[2] + x & 4294967295;
        e[3] = e[3] + D & 4294967295;
        e[4] = e[4] + ca & 4294967295
    }
    function c(n, t) {
        if ("string" === typeof n) {
            n = unescape(encodeURIComponent(n));
            for (var m = [], w = 0, x = n.length; w < x; ++w)
                m.push(n.charCodeAt(w));
            n = m
        }
        t || (t = n.length);
        m = 0;
        if (0 == l)
            for (; m + 64 < t; )
                b(n.slice(m, m + 64)),
                m += 64,
                p += 64;
        for (; m < t; )
            if (f[l++] = n[m++],
            p++,
            64 == l)
                for (l = 0,
                b(f); m + 64 < t; )
                    b(n.slice(m, m + 64)),
                    m += 64,
                    p += 64
    }
    function d() {
        var n = []
          , t = 8 * p;
        56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
        for (var m = 63; 56 <= m; m--)
            f[m] = t & 255,
            t >>>= 8;
        b(f);
        for (m = t = 0; 5 > m; m++)
            for (var w = 24; 0 <= w; w -= 8)
                n[t++] = e[m] >> w & 255;
        return n
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k)
        h[k] = 0;
    var l, p;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        da: function() {
            for (var n = d(), t = "", m = 0; m < n.length; m++)
                t += "0123456789ABCDEF".charAt(Math.floor(n[m] / 16)) + "0123456789ABCDEF".charAt(n[m] % 16);
            return t
        }
    }
}
;function Wa(a, b, c) {
    var d = String(q.location.href);
    return d && a && b ? [b, Xa(Ua(d), a, c || null)].join(" ") : null
}
function Xa(a, b, c) {
    var d = []
      , e = [];
    if (1 == (Array.isArray(c) ? 2 : 1))
        return e = [b, a],
        ia(d, function(h) {
            e.push(h)
        }),
        Ya(e.join(" "));
    var f = []
      , g = [];
    ia(c, function(h) {
        g.push(h.key);
        f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    ia(d, function(h) {
        e.push(h)
    });
    a = Ya(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
}
function Ya(a) {
    var b = Va();
    b.update(a);
    return b.da().toLowerCase()
}
;const Za = {};
function F() {
    this.h = document || {
        cookie: ""
    }
}
F.prototype.isEnabled = function() {
    if (!q.navigator.cookieEnabled)
        return !1;
    if (!this.isEmpty())
        return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        U: 60
    });
    if ("1" !== this.get("TESTCOOKIESENABLED"))
        return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
}
;
F.prototype.set = function(a, b, c) {
    let d, e, f, g = !1, h;
    "object" === typeof c && (h = c.Ea,
    g = c.Fa || !1,
    f = c.domain || void 0,
    e = c.path || void 0,
    d = c.U);
    if (/[;=\s]/.test(a))
        throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b))
        throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = -1);
    this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
}
;
F.prototype.get = function(a, b) {
    const c = a + "="
      , d = (this.h.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = oa(d[e]);
        if (0 == f.lastIndexOf(c, 0))
            return f.substr(c.length);
        if (f == a)
            return ""
    }
    return b
}
;
F.prototype.remove = function(a, b, c) {
    const d = void 0 !== this.get(a);
    this.set(a, "", {
        U: 0,
        path: b,
        domain: c
    });
    return d
}
;
F.prototype.isEmpty = function() {
    return !this.h.cookie
}
;
F.prototype.clear = function() {
    var a = (this.h.cookie || "").split(";");
    const b = []
      , c = [];
    let d, e;
    for (let f = 0; f < a.length; f++)
        e = oa(a[f]),
        d = e.indexOf("="),
        -1 == d ? (b.push(""),
        c.push(e)) : (b.push(e.substring(0, d)),
        c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--)
        this.remove(b[a])
}
;
function $a() {
    return !!Za.FPA_SAMESITE_PHASE2_MOD || !1
}
function ab(a, b, c, d) {
    (a = q[a]) || (a = (new F).get(b));
    return a ? Wa(a, c, d) : null
}
function bb() {
    var a = []
      , b = Ua(String(q.location.href));
    const c = [];
    var d = q.__SAPISID || q.__APISID || q.__3PSAPISID || q.__OVERRIDE_SID;
    $a() && (d = d || q.__1PSAPISID);
    if (d)
        var e = !0;
    else
        e = new F,
        d = e.get("SAPISID") || e.get("APISID") || e.get("__Secure-3PAPISID") || e.get("SID"),
        $a() && (d = d || e.get("__Secure-1PAPISID")),
        e = !!d;
    e && (d = (e = b = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:") || 0 == b.indexOf("moz-extension:")) ? q.__SAPISID : q.__APISID,
    d || (d = new F,
    d = d.get(e ? "SAPISID" : "APISID") || d.get("__Secure-3PAPISID")),
    (e = d ? Wa(d, e ? "SAPISIDHASH" : "APISIDHASH", a) : null) && c.push(e),
    b && $a() && ((b = ab("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && c.push(b),
    (a = ab("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && c.push(a)));
    return 0 == c.length ? null : c.join(" ")
}
;var cb = class {
    constructor(a, b) {
        this.j = a;
        this.l = b;
        this.i = 0;
        this.h = null
    }
    get() {
        let a;
        0 < this.i ? (this.i--,
        a = this.h,
        this.h = a.next,
        a.next = null) : a = this.j();
        return a
    }
    put(a) {
        this.l(a);
        100 > this.i && (this.i++,
        a.next = this.h,
        this.h = a)
    }
}
;
function db(a) {
    q.setTimeout(()=>{
        throw a;
    }
    , 0)
}
;class eb {
    constructor() {
        this.i = this.h = null
    }
    add(a, b) {
        const c = fb.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.h = c;
        this.i = c
    }
    remove() {
        let a = null;
        this.h && (a = this.h,
        this.h = this.h.next,
        this.h || (this.i = null),
        a.next = null);
        return a
    }
}
var fb = new cb(()=>new gb,a=>a.reset());
class gb {
    constructor() {
        this.next = this.scope = this.h = null
    }
    set(a, b) {
        this.h = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.h = null
    }
}
;function hb(a, b) {
    ib || jb();
    kb || (ib(),
    kb = !0);
    lb.add(a, b)
}
var ib;
function jb() {
    var a = q.Promise.resolve(void 0);
    ib = function() {
        a.then(mb)
    }
}
var kb = !1
  , lb = new eb;
function mb() {
    for (var a; a = lb.remove(); ) {
        try {
            a.h.call(a.scope)
        } catch (b) {
            db(b)
        }
        fb.put(a)
    }
    kb = !1
}
;function nb(a) {
    var b = r("window.location.href");
    null == a && (a = 'Unknown Error of type "null/undefined"');
    if ("string" === typeof a)
        return {
            message: a,
            name: "Unknown error",
            lineNumber: "Not available",
            fileName: b,
            stack: "Not available"
        };
    var c = !1;
    try {
        var d = a.lineNumber || a.line || "Not available"
    } catch (g) {
        d = "Not available",
        c = !0
    }
    try {
        var e = a.fileName || a.filename || a.sourceURL || q.$googDebugFname || b
    } catch (g) {
        e = "Not available",
        c = !0
    }
    b = ob(a);
    if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        c = a.message;
        if (null == c) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name)
                    c = a.constructor.name;
                else if (c = a.constructor,
                pb[c])
                    c = pb[c];
                else {
                    c = String(c);
                    if (!pb[c]) {
                        var f = /function\s+([^\(]+)/m.exec(c);
                        pb[c] = f ? f[1] : "[Anonymous]"
                    }
                    c = pb[c]
                }
                c = 'Unknown Error of type "' + c + '"'
            } else
                c = "Unknown Error of unknown type";
            "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
        }
        return {
            message: c,
            name: a.name || "UnknownError",
            lineNumber: d,
            fileName: e,
            stack: b || "Not available"
        }
    }
    a.stack = b;
    return a
}
function ob(a, b) {
    b || (b = {});
    b[qb(a)] = !0;
    var c = a.stack || "";
    (a = a.ya) && !b[qb(a)] && (c += "\nCaused by: ",
    a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"),
    c += ob(a, b));
    return c
}
function qb(a) {
    var b = "";
    "function" === typeof a.toString && (b = "" + a);
    return b + a.stack
}
var pb = {};
function rb() {
    this.j = this.j;
    this.l = this.l
}
rb.prototype.j = !1;
rb.prototype.dispose = function() {
    this.j || (this.j = !0,
    this.F())
}
;
rb.prototype.F = function() {
    if (this.l)
        for (; this.l.length; )
            this.l.shift()()
}
;
function G(a) {
    this.s = 0;
    this.Z = void 0;
    this.D = this.A = this.C = null;
    this.H = this.K = !1;
    if (a != fa)
        try {
            var b = this;
            a.call(void 0, function(c) {
                H(b, 2, c)
            }, function(c) {
                H(b, 3, c)
            })
        } catch (c) {
            H(this, 3, c)
        }
}
function sb() {
    this.next = this.context = this.onRejected = this.i = this.h = null;
    this.j = !1
}
sb.prototype.reset = function() {
    this.context = this.onRejected = this.i = this.h = null;
    this.j = !1
}
;
var tb = new cb(function() {
    return new sb
}
,function(a) {
    a.reset()
}
);
function ub(a, b, c) {
    var d = tb.get();
    d.i = a;
    d.onRejected = b;
    d.context = c;
    return d
}
function vb(a) {
    if (a instanceof G)
        return a;
    var b = new G(fa);
    H(b, 2, a);
    return b
}
G.prototype.then = function(a, b, c) {
    return wb(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
}
;
G.prototype.$goog_Thenable = !0;
G.prototype.cancel = function(a) {
    if (0 == this.s) {
        var b = new xb(a);
        hb(function() {
            yb(this, b)
        }, this)
    }
}
;
function yb(a, b) {
    if (0 == a.s)
        if (a.C) {
            var c = a.C;
            if (c.A) {
                for (var d = 0, e = null, f = null, g = c.A; g && (g.j || (d++,
                g.h == a && (e = g),
                !(e && 1 < d))); g = g.next)
                    e || (f = g);
                e && (0 == c.s && 1 == d ? yb(c, b) : (f ? (d = f,
                d.next == c.D && (c.D = d),
                d.next = d.next.next) : zb(c),
                Ab(c, e, 3, b)))
            }
            a.C = null
        } else
            H(a, 3, b)
}
function Bb(a, b) {
    a.A || 2 != a.s && 3 != a.s || Cb(a);
    a.D ? a.D.next = b : a.A = b;
    a.D = b
}
function wb(a, b, c, d) {
    var e = ub(null, null, null);
    e.h = new G(function(f, g) {
        e.i = b ? function(h) {
            try {
                var k = b.call(d, h);
                f(k)
            } catch (l) {
                g(l)
            }
        }
        : f;
        e.onRejected = c ? function(h) {
            try {
                var k = c.call(d, h);
                void 0 === k && h instanceof xb ? g(h) : f(k)
            } catch (l) {
                g(l)
            }
        }
        : g
    }
    );
    e.h.C = a;
    Bb(a, e);
    return e.h
}
G.prototype.ra = function(a) {
    this.s = 0;
    H(this, 2, a)
}
;
G.prototype.sa = function(a) {
    this.s = 0;
    H(this, 3, a)
}
;
function H(a, b, c) {
    if (0 == a.s) {
        a === c && (b = 3,
        c = new TypeError("Promise cannot resolve to itself"));
        a.s = 1;
        a: {
            var d = c
              , e = a.ra
              , f = a.sa;
            if (d instanceof G) {
                Bb(d, ub(e || fa, f || null, a));
                var g = !0
            } else {
                if (d)
                    try {
                        var h = !!d.$goog_Thenable
                    } catch (l) {
                        h = !1
                    }
                else
                    h = !1;
                if (h)
                    d.then(e, f, a),
                    g = !0;
                else {
                    h = typeof d;
                    if ("object" == h && null != d || "function" == h)
                        try {
                            var k = d.then;
                            if ("function" === typeof k) {
                                Db(d, k, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (l) {
                            f.call(a, l);
                            g = !0;
                            break a
                        }
                    g = !1
                }
            }
        }
        g || (a.Z = c,
        a.s = b,
        a.C = null,
        Cb(a),
        3 != b || c instanceof xb || Eb(a, c))
    }
}
function Db(a, b, c, d, e) {
    function f(k) {
        h || (h = !0,
        d.call(e, k))
    }
    function g(k) {
        h || (h = !0,
        c.call(e, k))
    }
    var h = !1;
    try {
        b.call(a, g, f)
    } catch (k) {
        f(k)
    }
}
function Cb(a) {
    a.K || (a.K = !0,
    hb(a.ea, a))
}
function zb(a) {
    var b = null;
    a.A && (b = a.A,
    a.A = b.next,
    b.next = null);
    a.A || (a.D = null);
    return b
}
G.prototype.ea = function() {
    for (var a; a = zb(this); )
        Ab(this, a, this.s, this.Z);
    this.K = !1
}
;
function Ab(a, b, c, d) {
    if (3 == c && b.onRejected && !b.j)
        for (; a && a.H; a = a.C)
            a.H = !1;
    if (b.h)
        b.h.C = null,
        Fb(b, c, d);
    else
        try {
            b.j ? b.i.call(b.context) : Fb(b, c, d)
        } catch (e) {
            Gb.call(null, e)
        }
    tb.put(b)
}
function Fb(a, b, c) {
    2 == b ? a.i.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c)
}
function Eb(a, b) {
    a.H = !0;
    hb(function() {
        a.H && Gb.call(null, b)
    })
}
var Gb = db;
function xb(a) {
    ha.call(this, a)
}
v(xb, ha);
xb.prototype.name = "cancel";
function I(a) {
    rb.call(this);
    this.P = 1;
    this.m = [];
    this.u = 0;
    this.h = [];
    this.i = {};
    this.ca = !!a
}
v(I, rb);
I.prototype.ba = function(a, b, c) {
    var d = this.i[a];
    d || (d = this.i[a] = []);
    var e = this.P;
    this.h[e] = a;
    this.h[e + 1] = b;
    this.h[e + 2] = c;
    this.P = e + 3;
    d.push(e);
    return e
}
;
I.prototype.O = function(a) {
    var b = this.h[a];
    if (b) {
        var c = this.i[b];
        if (0 != this.u)
            this.m.push(a),
            this.h[a + 1] = fa;
        else {
            if (c) {
                var d = Array.prototype.indexOf.call(c, a, void 0);
                0 <= d && Array.prototype.splice.call(c, d, 1)
            }
            delete this.h[a];
            delete this.h[a + 1];
            delete this.h[a + 2]
        }
    }
    return !!b
}
;
I.prototype.G = function(a, b) {
    var c = this.i[a];
    if (c) {
        for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++)
            d[e - 1] = arguments[e];
        if (this.ca)
            for (e = 0; e < c.length; e++) {
                var g = c[e];
                Hb(this.h[g + 1], this.h[g + 2], d)
            }
        else {
            this.u++;
            try {
                for (e = 0,
                f = c.length; e < f; e++)
                    g = c[e],
                    this.h[g + 1].apply(this.h[g + 2], d)
            } finally {
                if (this.u--,
                0 < this.m.length && 0 == this.u)
                    for (; c = this.m.pop(); )
                        this.O(c)
            }
        }
        return 0 != e
    }
    return !1
}
;
function Hb(a, b, c) {
    hb(function() {
        a.apply(b, c)
    })
}
I.prototype.clear = function(a) {
    if (a) {
        var b = this.i[a];
        b && (ia(b, this.O, this),
        delete this.i[a])
    } else
        this.h.length = 0,
        this.i = {}
}
;
I.prototype.F = function() {
    I.oa.F.call(this);
    this.clear();
    this.m.length = 0
}
;
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Ib = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
function Jb() {
    var a = [], b;
    var c = c || Ib.length;
    for (b = 0; 256 > b; b++)
        a[b] = Ib[0 | Math.random() * c];
    return a.join("")
}
;const J = window.yt && window.yt.config_ || window.ytcfg && window.ytcfg.data_ || {};
u("yt.config_", J);
function K(a) {
    var b = arguments;
    1 < b.length ? J[b[0]] = b[1] : 1 === b.length && Object.assign(J, b[0])
}
function L(a, b) {
    return a in J ? J[a] : b
}
;function M(a) {
    a = Kb(a);
    return "string" === typeof a && "false" === a ? !1 : !!a
}
function Lb(a, b) {
    a = Kb(a);
    return void 0 === a && void 0 !== b ? b : Number(a || 0)
}
function Kb(a) {
    const b = L("EXPERIMENTS_FORCED_FLAGS", {});
    return void 0 !== b[a] ? b[a] : L("EXPERIMENT_FLAGS", {})[a]
}
;var Mb = ["notification/convert_endpoint_to_url"]
  , Nb = ["notification/record_interactions"]
  , Ob = ["notification_registration/set_registration"];
var Pb = a=>new Promise((b,c)=>{
    let d = a.length
      , e = null;
    if (d) {
        var f = (g,h)=>{
            g || e || (e = h);
            d--;
            d || (e ? c(e) : b())
        }
        ;
        for (const g of a)
            g.then(f.bind(null, !0), f.bind(null, !1))
    } else
        b()
}
)
  , Qb = a=>self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var Rb = ["notifications_register", "notifications_check_registration"];
var Sb = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b]
    }
}
;
let Tb = null;
function Ub() {
    return N("NotificationsDisabled")
}
function O(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return Vb().then(d=>new Promise((e,f)=>{
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = ()=>{
                e()
            }
            ;
            g.onerror = ()=>{
                f()
            }
        } catch (g) {
            f(g)
        }
    }
    ))
}
function Wb() {
    return O("IndexedDBCheck", "testing IndexedDB").then(()=>N("IndexedDBCheck")).then(a=>"testing IndexedDB" === a ? Promise.resolve() : Promise.reject()).then(()=>!0).catch(()=>!1)
}
function N(a) {
    const b = new Sb("Error accessing DB");
    return Vb().then(c=>new Promise((d,e)=>{
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = ()=>{
                const g = f.result;
                d(g ? g.value : null)
            }
            ;
            f.onerror = ()=>{
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            },
            e(b)
        }
    }
    ), ()=>null)
}
function Vb() {
    return Tb ? Promise.resolve(Tb) : new Promise((a,b)=>{
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = ()=>{
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore"))
                Tb = d,
                a(Tb);
            else
                return self.indexedDB.deleteDatabase("swpushnotificationsdb"),
                Vb()
        }
        ;
        c.onupgradeneeded = Xb
    }
    )
}
function Xb(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
}
;const Yb = {
    ["WEB_UNPLUGGED"]: "^unplugged/",
    ["WEB_UNPLUGGED_ONBOARDING"]: "^unplugged/",
    ["WEB_UNPLUGGED_OPS"]: "^unplugged/",
    ["WEB_UNPLUGGED_PUBLIC"]: "^unplugged/",
    ["WEB_CREATOR"]: "^creator/",
    ["WEB_KIDS"]: "^kids/",
    ["WEB_EXPERIMENTS"]: "^experiments/",
    ["WEB_MUSIC"]: "^music/",
    ["WEB_REMIX"]: "^music/",
    ["WEB_MUSIC_EMBEDDED_PLAYER"]: "^music/",
    ["WEB_MUSIC_EMBEDDED_PLAYER"]: "^main_app/|^sfv/"
};
function Zb(a) {
    if (1 === a.length)
        return a[0];
    var b = Yb.UNKNOWN_INTERFACE;
    if (b) {
        b = new RegExp(b);
        for (var c of a)
            if (b.exec(c))
                return c
    }
    const d = [];
    Object.entries(Yb).forEach(([e,f])=>{
        "UNKNOWN_INTERFACE" !== e && d.push(f)
    }
    );
    c = new RegExp(d.join("|"));
    a.sort((e,f)=>e.length - f.length);
    for (const e of a)
        if (!c.exec(e))
            return e;
    return a[0]
}
function $b(a) {
    return `/youtubei/v1/${Zb(a)}`
}
;function ac(a) {
    A(this, a, 0, -1, null, null)
}
v(ac, Ha);
function bc(a) {
    A(this, a, "yt.sw.adr", -1, null, null)
}
v(bc, Ha);
let cc = 0;
u("ytDomDomGetNextId", r("ytDomDomGetNextId") || (()=>++cc));
const dc = [];
function ec(a) {
    dc.forEach(b=>b(a))
}
function fc(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            gc(b),
            ec(b)
        }
    }
    : a
}
function gc(a) {
    var b = r("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0) : (b = L("ERRORS", []),
    b.push([a, "ERROR", void 0, void 0, void 0]),
    K("ERRORS", b))
}
function hc(a) {
    var b = r("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0) : (b = L("ERRORS", []),
    b.push([a, "WARNING", void 0, void 0, void 0]),
    K("ERRORS", b))
}
;u("ytEventsEventsListeners", q.ytEventsEventsListeners || {});
u("ytEventsEventsCounter", q.ytEventsEventsCounter || {
    count: 0
});
function ic(a, b) {
    "function" === typeof a && (a = fc(a));
    return window.setTimeout(a, b)
}
;class jc {
}
;class kc extends jc {
    start() {
        const a = r("yt.scheduler.instance.start");
        a && a()
    }
}
(function() {
    var a = kc;
    a.S = void 0;
    a.fa = function() {
        a.S || (a.S = new a)
    }
}
)();
kc.fa();
const lc = /^[\w.]*$/
  , mc = {
    q: !0,
    search_query: !0
};
function nc(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const h = b[f].split("=");
        if (1 == h.length && h[0] || 2 == h.length)
            try {
                const k = oc(h[0] || "")
                  , l = oc(h[1] || "");
                k in c ? Array.isArray(c[k]) ? ja(c[k], l) : c[k] = [c[k], l] : c[k] = l
            } catch (k) {
                var d = k
                  , e = h[0];
                const l = String(nc);
                d.args = [{
                    key: e,
                    value: h[1],
                    query: a,
                    method: pc == l ? "unchanged" : l
                }];
                mc.hasOwnProperty(e) || hc(d)
            }
    }
    return c
}
const pc = String(nc);
function qc(a) {
    "?" == a.charAt(0) && (a = a.substr(1));
    return nc(a, "&")
}
function rc(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = 1 < d.length ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = qc(e[1] || "");
    for (var f in b)
        !c && null !== e && f in e || (e[f] = b[f]);
    b = a;
    a = Ta(e);
    a ? (c = b.indexOf("#"),
    0 > c && (c = b.length),
    f = b.indexOf("?"),
    0 > f || f > c ? (f = c,
    e = "") : e = b.substring(f + 1, c),
    b = [b.substr(0, f), e, b.substr(c)],
    c = b[1],
    b[1] = a ? c ? c + "&" + a : a : c,
    a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
    return a + d
}
function sc(a) {
    if (!b)
        var b = window.location.href;
    const c = a.match(C)[1] || null
      , d = Ra(a.match(C)[3] || null);
    c && d ? (a = a.match(C),
    b = b.match(C),
    a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? Ra(b.match(C)[3] || null) == d && (Number(b.match(C)[4] || null) || null) == (Number(a.match(C)[4] || null) || null) : !0;
    return a
}
function oc(a) {
    return a && a.match(lc) ? a : decodeURIComponent(a.replace(/\+/g, " "))
}
;let tc = !1;
function uc(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    a = vc(a, b);
    const d = wc(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    const e = b.context || q;
    let f = !1, g;
    fetch(a, c).then(h=>{
        if (!f) {
            f = !0;
            g && window.clearTimeout(g);
            var k = h.ok
              , l = p=>{
                p = p || {};
                k ? b.onSuccess && b.onSuccess.call(e, p, h) : b.onError && b.onError.call(e, p, h);
                b.onFinish && b.onFinish.call(e, p, h)
            }
            ;
            "JSON" == (b.format || "JSON") && (k || 400 <= h.status && 500 > h.status) ? h.json().then(l, function() {
                l(null)
            }) : l(null)
        }
    }
    ).catch(()=>{
        b.onError && b.onError.call(e, {}, {})
    }
    );
    b.onFetchTimeout && 0 < b.timeout && (g = ic(()=>{
        f || (f = !0,
        window.clearTimeout(g),
        b.onFetchTimeout.call(b.context || q))
    }
    , b.timeout))
}
function vc(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = L("XSRF_FIELD_NAME", void 0);
    if (b = b.urlParams)
        b[c] && delete b[c],
        a = rc(a, b || {}, !0);
    return a
}
function wc(a, b) {
    const c = L("XSRF_FIELD_NAME", void 0)
      , d = L("XSRF_TOKEN", void 0);
    var e = b.postBody || ""
      , f = b.postParams;
    const g = L("XSRF_FIELD_NAME", void 0);
    let h;
    b.headers && (h = b.headers["Content-Type"]);
    b.excludeXsrf || Ra(a.match(C)[3] || null) && !b.withCredentials && Ra(a.match(C)[3] || null) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}),
    f[c] = d);
    f && "string" === typeof e && (e = qc(e),
    na(e, f),
    e = b.postBodyFormat && "JSON" == b.postBodyFormat ? JSON.stringify(e) : Ta(e));
    if (!(a = e) && (a = f)) {
        a: {
            for (const k in f) {
                f = !1;
                break a
            }
            f = !0
        }
        a = !f
    }
    !tc && a && "POST" != b.method && (tc = !0,
    gc(Error("AJAX request with postData should use POST")));
    return e
}
;q.ytPubsubPubsubInstance || new I;
const Q = window;
var R = Q.ytcsi && Q.ytcsi.now ? Q.ytcsi.now : Q.performance && Q.performance.timing && Q.performance.now && Q.performance.timing.navigationStart ? ()=>Q.performance.timing.navigationStart + Q.performance.now() : ()=>(new Date).getTime();
const xc = Lb("initial_gel_batch_timeout", 1E3)
  , yc = Math.pow(2, 16) - 1;
let zc = null
  , Ac = 0
  , Bc = void 0
  , Cc = 0
  , Dc = 0
  , Ec = 0
  , Fc = !0;
const Gc = q.ytLoggingTransportGELQueue_ || new Map
  , Hc = q.ytLoggingTransportTokensToCttTargetIds_ || {};
function Ic(a, b) {
    if ("log_event" === a.endpoint) {
        var c = "";
        a.v && (Hc[a.v.token] = Jc(a.v),
        c = a.v.token);
        var d = Gc.get(c) || [];
        Gc.set(c, d);
        d.push(a.payload);
        b && (Bc = new b);
        a = Lb("web_logging_max_batch") || 100;
        b = R();
        d.length >= a ? Kc({
            writeThenSend: !0
        }) : 10 <= b - Ec && (Lc(),
        Ec = b)
    }
}
function Mc(a, b) {
    if ("log_event" === a.endpoint) {
        var c = "";
        a.v && (Hc[a.v.token] = Jc(a.v),
        c = a.v.token);
        var d = new Map;
        d.set(c, [a.payload]);
        b && (Bc = new b);
        return new G(e=>{
            Bc && Nc(Bc) ? Oc(d, e, {
                bypassNetworkless: !0
            }) : e()
        }
        )
    }
}
function Kc(a={}) {
    return new G(b=>{
        window.clearTimeout(Cc);
        window.clearTimeout(Dc);
        Dc = 0;
        Bc && Nc(Bc) ? (Oc(Gc, b, a),
        Gc.clear()) : (Lc(),
        b())
    }
    )
}
function Lc() {
    M("web_gel_timeout_cap") && !Dc && (Dc = ic(Kc, 6E4));
    window.clearTimeout(Cc);
    let a = L("LOGGING_BATCH_TIMEOUT", Lb("web_gel_debounce_ms", 1E4));
    M("shorten_initial_gel_batch_timeout") && Fc && (a = xc);
    Cc = ic(()=>{
        Kc({
            writeThenSend: !0
        })
    }
    , a)
}
function Oc(a, b, c={}) {
    var d = Bc;
    const e = Math.round(R());
    let f = a.size;
    for (const [g,h] of a) {
        a = la({
            context: Pc(d.h || Qc())
        });
        a.events = h;
        const k = Hc[g];
        k && Rc(a, g, k);
        delete Hc[g];
        Sc(a, e);
        Tc(d, a, {
            retry: !0,
            onSuccess: ()=>{
                f--;
                f || b();
                Ac = Math.round(R() - e)
            }
            ,
            onError: ()=>{
                f--;
                f || b()
            }
            ,
            Ca: c
        });
        Fc = !1
    }
}
function Sc(a, b) {
    a.requestTimeMs = String(b);
    M("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    if (b = L("EVENT_ID", void 0)) {
        let c = L("BATCH_CLIENT_COUNTER", void 0) || 0;
        c || (c = Math.floor(Math.random() * yc / 2));
        c++;
        c > yc && (c = 1);
        K("BATCH_CLIENT_COUNTER", c);
        b = {
            serializedEventId: b,
            clientCounter: String(c)
        };
        a.serializedClientEventId = b;
        zc && Ac && M("log_gel_rtt_web") && (a.previousBatchInfo = {
            serializedClientEventId: zc,
            roundtripMs: String(Ac)
        });
        zc = b;
        Ac = 0
    }
}
function Rc(a, b, c) {
    let d;
    if (c.videoId)
        d = "VIDEO";
    else if (c.playlistId)
        d = "PLAYLIST";
    else
        return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{
        token: b,
        scope: d
    }]
}
function Jc(a) {
    const b = {};
    a.videoId ? b.videoId = a.videoId : a.playlistId && (b.playlistId = a.playlistId);
    return b
}
;const Uc = q.ytLoggingGelSequenceIdObj_ || {};
function Vc(a, b, c, d={}) {
    const e = {};
    e.eventTimeMs = Math.round(d.timestamp || R());
    e[a] = b;
    a = r("_lact", window);
    a = null == a ? -1 : Math.max(Date.now() - a, 0);
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    M("log_sequence_info_on_gel_web") && d.aa && (a = e.context,
    b = d.aa,
    Uc[b] = b in Uc ? Uc[b] + 1 : 0,
    a.sequence = {
        index: Uc[b],
        groupKey: b
    },
    d.za && delete Uc[d.aa]);
    (d.Ga ? Mc : Ic)({
        endpoint: "log_event",
        payload: e,
        v: d.v
    }, c)
}
;function Wc() {
    if (!q.matchMedia)
        return "WEB_DISPLAY_MODE_UNKNOWN";
    try {
        return q.matchMedia("(display-mode: standalone)").matches ? "WEB_DISPLAY_MODE_STANDALONE" : q.matchMedia("(display-mode: minimal-ui)").matches ? "WEB_DISPLAY_MODE_MINIMAL_UI" : q.matchMedia("(display-mode: fullscreen)").matches ? "WEB_DISPLAY_MODE_FULLSCREEN" : q.matchMedia("(display-mode: browser)").matches ? "WEB_DISPLAY_MODE_BROWSER" : "WEB_DISPLAY_MODE_UNKNOWN"
    } catch (a) {
        return "WEB_DISPLAY_MODE_UNKNOWN"
    }
}
;u("ytglobal.prefsUserPrefsPrefs_", r("ytglobal.prefsUserPrefsPrefs_") || {});
const Xc = {
    bluetooth: "CONN_DISCO",
    cellular: "CONN_CELLULAR_UNKNOWN",
    ethernet: "CONN_WIFI",
    none: "CONN_NONE",
    wifi: "CONN_WIFI",
    wimax: "CONN_CELLULAR_4G",
    other: "CONN_UNKNOWN",
    unknown: "CONN_UNKNOWN",
    "slow-2g": "CONN_CELLULAR_2G",
    "2g": "CONN_CELLULAR_2G",
    "3g": "CONN_CELLULAR_3G",
    "4g": "CONN_CELLULAR_4G"
}
  , Yc = {
    "slow-2g": "EFFECTIVE_CONNECTION_TYPE_SLOW_2G",
    "2g": "EFFECTIVE_CONNECTION_TYPE_2G",
    "3g": "EFFECTIVE_CONNECTION_TYPE_3G",
    "4g": "EFFECTIVE_CONNECTION_TYPE_4G"
};
function Zc() {
    const a = q.navigator;
    return a ? a.connection : void 0
}
;function $c() {
    return "INNERTUBE_API_KEY"in J && "INNERTUBE_API_VERSION"in J
}
function Qc() {
    return {
        innertubeApiKey: L("INNERTUBE_API_KEY", void 0),
        innertubeApiVersion: L("INNERTUBE_API_VERSION", void 0),
        ha: L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        ia: L("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        innertubeContextClientVersion: L("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0),
        ka: L("INNERTUBE_CONTEXT_HL", void 0),
        ja: L("INNERTUBE_CONTEXT_GL", void 0),
        la: L("INNERTUBE_HOST_OVERRIDE", void 0) || "",
        na: !!L("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        ma: !!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: L("SERIALIZED_CLIENT_CONFIG_DATA", void 0)
    }
}
function Pc(a) {
    const b = {
        client: {
            hl: a.ka,
            gl: a.ja,
            clientName: a.ia,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.ha
        }
    };
    var c = q.devicePixelRatio;
    c && 1 != c && (b.client.screenDensityFloat = String(c));
    c = L("EXPERIMENTS_TOKEN", "");
    "" !== c && (b.client.experimentsToken = c);
    c = [];
    const d = L("EXPERIMENTS_FORCED_FLAGS", {});
    for (var e in d)
        c.push({
            key: e,
            value: String(d[e])
        });
    e = L("EXPERIMENT_FLAGS", {});
    for (var f in e)
        f.startsWith("force_") && void 0 === d[f] && c.push({
            key: f,
            value: String(e[f])
        });
    0 < c.length && (b.request = {
        internalExperimentFlags: c
    });
    f = b.client.clientName;
    if ("WEB" === f || "MWEB" === f || 1 === f || 2 === f) {
        if (!M("web_include_display_mode_killswitch")) {
            var g;
            b.client.mainAppWebInfo = null != (g = b.client.mainAppWebInfo) ? g : {};
            b.client.mainAppWebInfo.webDisplayMode = Wc()
        }
    } else if (g = b.client.clientName,
    ("WEB_REMIX" === g || 76 === g) && !M("music_web_display_mode_killswitch")) {
        var h;
        b.client.W = null != (h = b.client.W) ? h : {};
        b.client.W.webDisplayMode = Wc()
    }
    a.appInstallData && (b.client.configInfo = b.client.configInfo || {},
    b.client.configInfo.appInstallData = a.appInstallData);
    L("DELEGATED_SESSION_ID") && !M("pageid_as_header_web") && (b.user = {
        onBehalfOfUser: L("DELEGATED_SESSION_ID")
    });
    a: {
        if (h = Zc()) {
            a = Xc[h.type || "unknown"] || "CONN_UNKNOWN";
            h = Xc[h.effectiveType || "unknown"] || "CONN_UNKNOWN";
            "CONN_CELLULAR_UNKNOWN" === a && "CONN_UNKNOWN" !== h && (a = h);
            if ("CONN_UNKNOWN" !== a)
                break a;
            if ("CONN_UNKNOWN" !== h) {
                a = h;
                break a
            }
        }
        a = void 0
    }
    a && (b.client.connectionType = a);
    M("web_log_effective_connection_type") && (a = Zc(),
    a = null !== a && void 0 !== a && a.effectiveType ? Yc.hasOwnProperty(a.effectiveType) ? Yc[a.effectiveType] : "EFFECTIVE_CONNECTION_TYPE_UNKNOWN" : void 0,
    a && (b.client.effectiveConnectionType = a));
    a = Object;
    h = a.assign;
    g = b.client;
    f = L("DEVICE", "");
    e = {};
    for (const [k,l] of Object.entries(qc(f)))
        "cbrand" === k ? e.deviceMake = l : "cmodel" === k ? e.deviceModel = l : "cbr" === k ? e.browserName = l : "cbrver" === k ? e.browserVersion = l : "cos" === k ? e.osName = l : "cosver" === k ? e.osVersion = l : "cplatform" === k && (e.platform = l);
    b.client = h.call(a, g, e);
    return b
}
function ad(a, b, c) {
    c = void 0 === c ? {} : c;
    const d = {
        "X-Goog-Visitor-Id": c.visitorData || L("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com"))
        return d;
    (b = c.va || L("AUTHORIZATION")) || (a ? b = `Bearer ${r("gapi.auth.getToken")().ta}` : b = bb());
    b && (d.Authorization = b,
    d["X-Goog-AuthUser"] = L("SESSION_INDEX", 0),
    M("pageid_as_header_web") && (d["X-Goog-PageId"] = L("DELEGATED_SESSION_ID")));
    return d
}
;const bd = ["client.name", "client.version"];
function cd(a) {
    if (!a.errorMetadata || !a.errorMetadata.kvPairs)
        return a;
    a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter(b=>b.key ? bd.includes(b.key) : !1);
    return a
}
function dd(a) {
    const b = {
        timestamp: a.timestamp
    };
    if (a.appShellAssetLoadReport)
        return {
            payloadName: "appShellAssetLoadReport",
            payload: a.appShellAssetLoadReport,
            options: b
        };
    if (a.clientError)
        return {
            payloadName: "clientError",
            payload: a.clientError,
            options: b
        }
}
;const ed = r("ytPubsub2Pubsub2Instance") || new I;
I.prototype.subscribe = I.prototype.ba;
I.prototype.unsubscribeByKey = I.prototype.O;
I.prototype.publish = I.prototype.G;
I.prototype.clear = I.prototype.clear;
u("ytPubsub2Pubsub2Instance", ed);
u("ytPubsub2Pubsub2SubscribedKeys", r("ytPubsub2Pubsub2SubscribedKeys") || {});
u("ytPubsub2Pubsub2TopicToKeys", r("ytPubsub2Pubsub2TopicToKeys") || {});
u("ytPubsub2Pubsub2IsAsync", r("ytPubsub2Pubsub2IsAsync") || {});
u("ytPubsub2Pubsub2SkipSubKey", null);
function fd(a) {
    const b = {};
    var c = bb();
    c && (b.Authorization = c,
    c = a = null === a || void 0 === a ? void 0 : a.sessionIndex,
    void 0 === c && (c = Number(L("SESSION_INDEX", 0)),
    c = isNaN(c) ? 0 : c),
    b["X-Goog-AuthUser"] = c,
    "INNERTUBE_HOST_OVERRIDE"in J || (b["X-Origin"] = window.location.origin),
    M("pageid_as_header_web") && void 0 === a && "DELEGATED_SESSION_ID"in J && (b["X-Goog-PageId"] = L("DELEGATED_SESSION_ID")));
    return b
}
var gd = class {
    constructor() {
        this.pa = !0
    }
}
;
var hd = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
};
const S = [];
let id, jd = !1;
function kd(a) {
    jd || (id ? id.handleError(a) : (S.push({
        type: "ERROR",
        payload: a
    }),
    10 < S.length && S.shift()))
}
function ld(a, b) {
    jd || (id ? id.I(a, b) : (S.push({
        type: "EVENT",
        eventType: a,
        payload: b
    }),
    10 < S.length && S.shift()))
}
;var md = class {
    constructor() {
        this.h = this.failureMessage = void 0;
        this.h || (this.h = {
            createdTimestampMs: R(),
            isSupported: !0,
            resultCount: 0
        })
    }
    isSupported() {
        return !0
    }
    log() {}
}
;
function nd(a) {
    if (0 <= a.indexOf(":"))
        throw Error("Database name cannot contain ':'");
}
function od(a) {
    return a.substr(0, a.indexOf(":")) || a
}
;const pd = {
    ["AUTH_INVALID"]: "No user identifier specified.",
    ["EXPLICIT_ABORT"]: "Transaction was explicitly aborted.",
    ["IDB_NOT_SUPPORTED"]: "IndexedDB is not supported.",
    ["MISSING_OBJECT_STORE"]: "Object store not created.",
    ["UNKNOWN_ABORT"]: "Transaction was aborted for unknown reasons.",
    ["QUOTA_EXCEEDED"]: "The current transaction exceeded its quota limitations.",
    ["QUOTA_MAYBE_EXCEEDED"]: "The current transaction may have failed because of exceeding quota limitations.",
    ["EXECUTE_TRANSACTION_ON_CLOSED_DB"]: "Can't start a transaction on a closed database"
}
  , qd = {
    ["AUTH_INVALID"]: "ERROR",
    ["EXECUTE_TRANSACTION_ON_CLOSED_DB"]: "WARNING",
    ["EXPLICIT_ABORT"]: "IGNORED",
    ["IDB_NOT_SUPPORTED"]: "ERROR",
    ["MISSING_OBJECT_STORE"]: "ERROR",
    ["QUOTA_EXCEEDED"]: "WARNING",
    ["QUOTA_MAYBE_EXCEEDED"]: "WARNING",
    ["UNKNOWN_ABORT"]: "WARNING"
};
var T = class extends Sb {
    constructor(a, b={}, c=pd[a], d=qd[a]) {
        super(c, Object.assign({
            name: "YtIdbKnownError",
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            type: a
        }, b));
        this.type = a;
        this.message = c;
        this.level = d;
        Object.setPrototypeOf(this, T.prototype)
    }
}
  , rd = class extends T {
    constructor(a) {
        super("MISSING_OBJECT_STORE", {
            Ba: a
        }, pd.MISSING_OBJECT_STORE);
        Object.setPrototypeOf(this, rd.prototype)
    }
}
;
const sd = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

function td(a, b, c) {
    b = od(b);
    let d;
    d = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
    if (d instanceof T)
        return d;
    if ("QuotaExceededError" === d.name)
        return new T("QUOTA_EXCEEDED",{
            objectStoreNames: c,
            dbName: b
        });
    if (Ba && "UnknownError" === d.name)
        return new T("QUOTA_MAYBE_EXCEEDED",{
            objectStoreNames: c,
            dbName: b
        });
    if ("InvalidStateError" === d.name && sd.some(e=>d.message.includes(e)))
        return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB",{
            objectStoreNames: c,
            dbName: b
        });
    if ("AbortError" === d.name)
        return new T("UNKNOWN_ABORT",{
            objectStoreNames: c,
            dbName: b
        },d.message);
    d.args = [{
        name: "IdbError",
        Da: d.name,
        dbName: b,
        objectStoreNames: c
    }];
    d.level = "WARNING";
    return d
}
;function ud(a) {
    if (!a)
        throw Error();
    throw a;
}
function vd(a) {
    return a
}
function wd(a, b, c, d, e) {
    try {
        if ("FULFILLED" !== a.state.status)
            throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof U ? xd(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}
function yd(a, b, c, d, e) {
    try {
        if ("REJECTED" !== a.state.status)
            throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof U ? xd(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}
function xd(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f=>{
        f instanceof U ? xd(a, b, f, d, e) : d(f)
    }
    , f=>{
        e(f)
    }
    )
}
var U = class {
    constructor(a) {
        this.i = a;
        this.state = {
            status: "PENDING"
        };
        this.h = [];
        this.onRejected = [];
        a = c=>{
            if ("PENDING" === this.state.status) {
                this.state = {
                    status: "FULFILLED",
                    value: c
                };
                for (const d of this.h)
                    d()
            }
        }
        ;
        const b = c=>{
            if ("PENDING" === this.state.status) {
                this.state = {
                    status: "REJECTED",
                    reason: c
                };
                for (const d of this.onRejected)
                    d()
            }
        }
        ;
        try {
            this.i(a, b)
        } catch (c) {
            b(c)
        }
    }
    static all(a) {
        return new U((b,c)=>{
            const d = [];
            let e = a.length;
            0 === e && b(d);
            for (let f = 0; f < a.length; ++f)
                U.resolve(a[f]).then(g=>{
                    d[f] = g;
                    e--;
                    0 === e && b(d)
                }
                ).catch(g=>{
                    c(g)
                }
                )
        }
        )
    }
    static resolve(a) {
        return new U((b,c)=>{
            a instanceof U ? a.then(b, c) : b(a)
        }
        )
    }
    static reject(a) {
        return new U((b,c)=>{
            c(a)
        }
        )
    }
    then(a, b) {
        const c = null !== a && void 0 !== a ? a : vd
          , d = null !== b && void 0 !== b ? b : ud;
        return new U((e,f)=>{
            "PENDING" === this.state.status ? (this.h.push(()=>{
                wd(this, this, c, e, f)
            }
            ),
            this.onRejected.push(()=>{
                yd(this, this, d, e, f)
            }
            )) : "FULFILLED" === this.state.status ? wd(this, this, c, e, f) : "REJECTED" === this.state.status && yd(this, this, d, e, f)
        }
        )
    }
    catch(a) {
        return this.then(void 0, a)
    }
}
;
function zd(a, b, c) {
    const d = ()=>{
        try {
            a.removeEventListener("success", e),
            a.removeEventListener("error", f)
        } catch (g) {}
    }
      , e = ()=>{
        b(a.result);
        d()
    }
      , f = ()=>{
        c(a.error);
        d()
    }
    ;
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}
function Ad(a) {
    return new Promise((b,c)=>{
        zd(a, b, c)
    }
    )
}
function V(a) {
    return new U((b,c)=>{
        zd(a, b, c)
    }
    )
}
;function Bd(a, b) {
    return new U((c,d)=>{
        const e = ()=>{
            const f = a ? b(a) : null;
            f ? f.then(g=>{
                a = g;
                e()
            }
            , d) : c()
        }
        ;
        e()
    }
    )
}
;function W(a, b, c, d) {
    return E(a, function*() {
        var e = {
            mode: "readonly",
            B: !1
        };
        "string" === typeof c ? e.mode = c : e = c;
        this.transactionCount++;
        let f = e.B ? Lb("ytidb_transaction_try_count", 1) : 1, g;
        for (; !g; ) {
            f--;
            const k = Math.round(R());
            try {
                const l = this.h.transaction(b, e.mode);
                var h = d;
                const p = new Cd(l)
                  , n = yield Dd(p, h)
                  , t = Math.round(R());
                Ed(this, k, t, void 0, b.join(), e);
                return n
            } catch (l) {
                h = Math.round(R());
                const p = td(l, this.h.name, b.join());
                if (p instanceof T && "EXPLICIT_ABORT" === p.type || 0 >= f)
                    Ed(this, k, h, p, b.join(), e),
                    g = p
            }
        }
        return Promise.reject(g)
    })
}
function Fd(a, b, c) {
    a = a.h.createObjectStore(b, c);
    return new Gd(a)
}
function Ed(a, b, c, d, e, f) {
    b = c - b;
    d ? (d instanceof T && ("QUOTA_EXCEEDED" === d.type || "QUOTA_MAYBE_EXCEEDED" === d.type) && ld("QUOTA_EXCEEDED", {
        dbName: od(a.h.name),
        objectStoreNames: e,
        transactionCount: a.transactionCount,
        transactionMode: f.mode
    }),
    d instanceof T && "UNKNOWN_ABORT" === d.type && (ld("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: e,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c - a.j
    }),
    a.i = !0),
    Hd(a, !1, e, b),
    kd(d)) : Hd(a, !0, e, b)
}
function Hd(a, b, c, d) {
    ld("TRANSACTION_ENDED", {
        objectStoreNames: c,
        connectionHasUnknownAbortedTransaction: a.i,
        duration: d,
        isSuccessful: b
    })
}
var Id = class {
    constructor(a, b) {
        this.h = a;
        this.options = b;
        this.transactionCount = 0;
        this.j = Math.round(R());
        this.i = !1
    }
    add(a, b, c) {
        return W(this, [a], {
            mode: "readwrite",
            B: M("ytidb_transaction_enable_retries_core_and_nwl")
        }, d=>X(d, a).add(b, c))
    }
    clear(a) {
        return W(this, [a], {
            mode: "readwrite",
            B: M("ytidb_transaction_enable_retries_core_and_nwl")
        }, b=>X(b, a).clear())
    }
    close() {
        var a;
        this.h.close();
        (null === (a = this.options) || void 0 === a ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return W(this, [a], {
            mode: "readonly",
            B: M("ytidb_transaction_enable_retries_core_and_nwl")
        }, c=>X(c, a).count(b))
    }
    delete(a, b) {
        return W(this, [a], {
            mode: "readwrite",
            B: M("ytidb_transaction_enable_retries_core_and_nwl")
        }, c=>X(c, a).delete(b))
    }
    get(a, b) {
        return W(this, [a], {
            mode: "readonly",
            B: M("ytidb_transaction_enable_retries_core_and_nwl")
        }, c=>X(c, a).get(b))
    }
    put(a, b, c) {
        return W(this, [a], {
            mode: "readwrite",
            B: M("ytidb_transaction_enable_retries_core_and_nwl")
        }, d=>X(d, a).put(b, c))
    }
}
;
function Jd(a, b, c) {
    a = a.h.openCursor(b.query, b.direction);
    return Kd(a).then(d=>Bd(d, c))
}
function Ld(a, b) {
    return Jd(a, {
        query: b
    }, c=>c.delete().then(()=>c.continue())).then(()=>{}
    )
}
var Gd = class {
    constructor(a) {
        this.h = a
    }
    add(a, b) {
        return V(this.h.add(a, b))
    }
    clear() {
        return V(this.h.clear()).then(()=>{}
        )
    }
    count(a) {
        return V(this.h.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? Ld(this, a) : V(this.h.delete(a))
    }
    get(a) {
        return V(this.h.get(a))
    }
    index(a) {
        return new Md(this.h.index(a))
    }
    put(a, b) {
        return V(this.h.put(a, b))
    }
}
;
function Dd(a, b) {
    const c = new Promise((d,e)=>{
        b(a).then(f=>{
            a.commit();
            d(f)
        }
        ).catch(e)
    }
    );
    return Promise.all([c, a.done]).then(([d])=>d)
}
function X(a, b) {
    b = a.h.objectStore(b);
    let c = a.i.get(b);
    c || (c = new Gd(b),
    a.i.set(b, c));
    return c
}
var Cd = class {
    constructor(a) {
        this.h = a;
        this.i = new Map;
        this.aborted = !1;
        this.done = new Promise((b,c)=>{
            this.h.addEventListener("complete", ()=>{
                b()
            }
            );
            this.h.addEventListener("error", d=>{
                d.currentTarget === d.target && c(this.h.error)
            }
            );
            this.h.addEventListener("abort", ()=>{
                var d = this.h.error;
                if (d)
                    c(d);
                else if (!this.aborted) {
                    d = T;
                    var e = this.h.objectStoreNames;
                    const f = [];
                    for (let g = 0; g < e.length; g++) {
                        const h = e.item(g);
                        if (null === h)
                            throw Error("Invariant: item in DOMStringList is null");
                        f.push(h)
                    }
                    d = new d("UNKNOWN_ABORT",{
                        objectStoreNames: f.join(),
                        dbName: this.h.db.name,
                        mode: this.h.mode
                    });
                    c(d)
                }
            }
            )
        }
        )
    }
    abort() {
        this.h.abort();
        this.aborted = !0;
        throw new T("EXPLICIT_ABORT");
    }
    commit() {
        const a = this.h;
        a.commit && !this.aborted && a.commit()
    }
}
;
function Nd(a, b, c) {
    const {query: d=null, direction: e="next"} = b;
    a = a.h.openCursor(d, e);
    return Kd(a).then(f=>Bd(f, c))
}
var Md = class {
    constructor(a) {
        this.h = a
    }
    count(a) {
        return V(this.h.count(a))
    }
    delete(a) {
        return Nd(this, {
            query: a
        }, b=>b.delete().then(()=>b.continue()))
    }
    get(a) {
        return V(this.h.get(a))
    }
    getKey(a) {
        return V(this.h.getKey(a))
    }
}
;
function Kd(a) {
    return V(a).then(b=>null === b ? null : new Od(a,b))
}
var Od = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    advance(a) {
        this.cursor.advance(a);
        return Kd(this.request)
    }
    continue(a) {
        this.cursor.continue(a);
        return Kd(this.request)
    }
    delete() {
        return V(this.cursor.delete()).then(()=>{}
        )
    }
    getKey() {
        return this.cursor.key
    }
    update(a) {
        return V(this.cursor.update(a))
    }
}
;
function Pd(a, b, c) {
    return E(this, function*() {
        const d = self.indexedDB.open(a, b)
          , e = c.blocked
          , f = c.blocking
          , g = c.qa
          , h = c.upgrade
          , k = c.closed;
        let l;
        const p = ()=>{
            l || (l = new Id(d.result,{
                closed: k
            }));
            return l
        }
        ;
        d.addEventListener("upgradeneeded", t=>{
            if (null === t.newVersion)
                throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
            if (null === d.transaction)
                throw Error("Invariant: transaction on IDbOpenDbRequest is null");
            t.dataLoss && "none" !== t.dataLoss && ld("IDB_DATA_CORRUPTED", {
                reason: t.dataLossMessage || "unknown reason",
                dbName: od(a)
            });
            const m = p()
              , w = new Cd(d.transaction);
            h && h(m, t.oldVersion, t.newVersion, w)
        }
        );
        e && d.addEventListener("blocked", ()=>{
            e()
        }
        );
        const n = yield Ad(d);
        f && n.addEventListener("versionchange", ()=>{
            f(p())
        }
        );
        n.addEventListener("close", ()=>{
            ld("IDB_UNEXPECTEDLY_CLOSED", {
                dbName: od(a),
                dbVersion: n.version
            });
            g && g()
        }
        );
        return p()
    })
}
function Qd(a, b, c={}) {
    return Pd(a, b, c)
}
function Rd(a, b={}) {
    return E(this, function*() {
        const c = self.indexedDB.deleteDatabase(a)
          , d = b.blocked;
        d && c.addEventListener("blocked", ()=>{
            d()
        }
        );
        yield Ad(c)
    })
}
;function Y(a) {
    if (!a.h) {
        let b;
        const c = ()=>{
            a.h === b && (a.h = void 0)
        }
          , d = {
            blocking: f=>{
                f.close()
            }
            ,
            closed: c,
            qa: c,
            upgrade: a.options.upgrade
        }
          , e = ()=>E(a, function*() {
            try {
                const k = yield this.i(this.name, this.options.version, d);
                a: {
                    var f = k
                      , g = this.options;
                    for (const l of Object.keys(g.L))
                        if (!f.h.objectStoreNames.contains(l)) {
                            var h = l;
                            break a
                        }
                    h = void 0
                }
                if (void 0 !== h) {
                    if (!this.j)
                        return this.j = !0,
                        yield this.delete(),
                        e();
                    throw new rd(h);
                }
                return k
            } catch (k) {
                if (k instanceof DOMException ? "VersionError" === k.name : "DOMError"in self && k instanceof DOMError ? "VersionError" === k.name : k instanceof Object && "message"in k && "An attempt was made to open a database using a lower version than the existing version." === k.message)
                    return this.i(this.name, void 0, Object.assign(Object.assign({}, d), {
                        upgrade: void 0
                    }));
                c();
                throw k;
            }
        });
        b = e();
        a.h = b
    }
    return a.h
}
var Sd = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.j = !1
    }
    i(a, b, c={}) {
        return Qd(a, b, c)
    }
    delete(a={}) {
        return Rd(this.name, a)
    }
}
;
const Td = new Sd("YtIdbMeta",{
    L: {
        databases: !0
    },
    upgrade(a, b) {
        1 > b && Fd(a, "databases", {
            keyPath: "actualName"
        })
    }
});
function Ud(a) {
    return E(this, function*() {
        return W(yield Y(Td), ["databases"], "readwrite", b=>{
            const c = X(b, "databases");
            return c.get(a.actualName).then(d=>{
                if (d ? a.actualName !== d.actualName || a.publicName !== d.publicName || a.userIdentifier !== d.userIdentifier || a.clearDataOnAuthChange !== d.clearDataOnAuthChange : 1)
                    return c.put(a).then(()=>{}
                    )
            }
            )
        }
        )
    })
}
function Vd(a) {
    return E(this, function*() {
        return (yield Y(Td)).delete("databases", a)
    })
}
;let Wd;
function Xd() {
    return E(this, function*() {
        return new md
    })
}
function Yd() {
    if (void 0 !== Wd)
        return Wd;
    jd = !0;
    return Wd = Xd().then(a=>{
        jd = !1;
        a.log();
        return a.isSupported()
    }
    )
}
;function Zd() {
    const a = new T("AUTH_INVALID");
    kd(a);
    throw a;
    throw Error("Datasync ID not set");
}
function $d(a, b, c, d) {
    var e;
    return E(this, function*() {
        yield ae({
            caller: "openDbImpl",
            publicName: a,
            version: b
        });
        nd(a);
        let f;
        c ? f = {
            actualName: a,
            publicName: a,
            userIdentifier: void 0
        } : f = Zd();
        f.clearDataOnAuthChange = null !== (e = d.clearDataOnAuthChange) && void 0 !== e ? e : !1;
        try {
            return yield Ud(f),
            yield Qd(f.actualName, b, d)
        } catch (g) {
            try {
                yield Vd(f.actualName)
            } catch (h) {}
            throw g;
        }
    })
}
function ae(a) {
    return E(this, function*() {
        if (!(yield Yd())) {
            const b = new T("IDB_NOT_SUPPORTED",{
                context: a
            });
            kd(b);
            throw b;
        }
    })
}
function be(a, b, c={}) {
    return $d(a, b, !1, c)
}
function ce(a, b, c={}) {
    return $d(a, b, !0, c)
}
function de(a, b={}) {
    return E(this, function*() {
        if (yield Yd()) {
            nd(a);
            var c = Zd();
            yield Rd(c.actualName, b);
            yield Vd(c.actualName)
        }
    })
}
function ee(a, b={}) {
    return E(this, function*() {
        if (yield Yd())
            nd(a),
            yield Rd(a, b),
            yield Vd(a)
    })
}
;var fe = class extends Sd {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        nd(a)
    }
    i(a, b, c={}) {
        return (this.options.N ? ce : be)(a, b, Object.assign(Object.assign({}, c), {
            clearDataOnAuthChange: this.options.clearDataOnAuthChange
        }))
    }
    delete(a={}) {
        return (this.options.N ? ee : de)(this.name, a)
    }
}
;
function ge(a, b) {
    let c;
    return ()=>{
        c || (c = new fe(a,b));
        return c
    }
}
;let he;
function ie() {
    he || (he = ge("LogsDatabaseV2", {
        L: {
            ["LogsRequestsStore"]: !0,
            ["sapisid"]: !0,
            ["SWHealthLog"]: !0
        },
        N: !M("nwl_use_ytidb_partitioning"),
        upgrade(a, b) {
            2 > b && (Fd(a, "LogsRequestsStore", {
                keyPath: "id",
                autoIncrement: !0
            }).h.createIndex("newRequest", ["status", "authHash", "interface", "timestamp"], {
                unique: !1
            }),
            Fd(a, "sapisid"));
            3 > b && Fd(a, "SWHealthLog", {
                keyPath: "id",
                autoIncrement: !0
            }).h.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
                unique: !1
            })
        },
        version: 3
    }));
    return Y(he())
}
function je(a) {
    return E(this, function*() {
        var b = yield ie()
          , c = b.put
          , d = L("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
        const e = Object.assign({}, a);
        e.clientError && (e.clientError = cd(e.clientError));
        e.interface = d;
        return c.call(b, "SWHealthLog", e)
    })
}
;function Nc(a) {
    !a.h && $c() && (a.h = Qc());
    return !!a.h
}
function Tc(a, b, c) {
    !L("VISITOR_DATA") && .01 > Math.random() && hc(new Sb("Missing VISITOR_DATA when sending innertube request.","log_event",b,c));
    if (!Nc(a))
        throw a = new Sb("innertube xhrclient not ready","log_event",b,c),
        gc(a),
        a;
    b = {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        postParams: b,
        postBodyFormat: "JSON",
        onTimeout: ()=>{
            c.onTimeout()
        }
        ,
        onFetchTimeout: c.onTimeout,
        onSuccess: (g,h)=>{
            if (c.onSuccess)
                c.onSuccess(h)
        }
        ,
        onFetchSuccess: g=>{
            if (c.onSuccess)
                c.onSuccess(g)
        }
        ,
        onError: (g,h)=>{
            if (c.onError)
                c.onError(h)
        }
        ,
        onFetchError: g=>{
            if (c.onError)
                c.onError(g)
        }
        ,
        timeout: c.timeout,
        withCredentials: !0
    };
    let d = "";
    var e = a.h.la;
    e && (d = e);
    e = ad(a.h.na || !1, d, c);
    Object.assign(b.headers, e);
    b.headers.Authorization && !d && (b.headers["x-origin"] = window.location.origin);
    e = `/${"youtubei"}/${a.h.innertubeApiVersion}/${"log_event"}`;
    let f = {
        alt: "json"
    };
    a.h.ma && b.headers.Authorization || (f.key = a.h.innertubeApiKey);
    a = rc(`${d}${e}`, f || {}, !0);
    try {
        uc(a, b)
    } catch (g) {
        if ("InvalidAccessError" == g.name)
            hc(Error("An extension is blocking network request."));
        else
            throw g;
    }
}
class ke {
    constructor(a) {
        this.h = null;
        a ? this.h = a : $c() && (this.h = Qc())
    }
}
;let le = ke;
function me(a, b, c={}) {
    let d = le;
    L("ytLoggingEventsDefaultDisabled", !1) && le == ke && (d = null);
    Vc(a, b, d, c)
}
;const ne = [{
    V: a=>`Cannot read property '${a.key}'`,
    M: {
        TypeError: [{
            o: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            o: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            o: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            o: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            o: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }],
        Error: [{
            o: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }]
    }
}, {
    V: a=>`Cannot call '${a.key}'`,
    M: {
        TypeError: [{
            o: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
            groups: ["base", "key"]
        }, {
            o: /([^ ]+) called on (null or undefined)/,
            groups: ["key", "value"]
        }, {
            o: /Object (.*) has no method '([^ ]+)'/,
            groups: ["base", "key"]
        }, {
            o: /Object doesn't support property or method '([^ ]+)'/,
            groups: ["key"]
        }, {
            o: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
            groups: ["key"]
        }, {
            o: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
            groups: ["key"]
        }]
    }
}];
function oe() {
    pe || (pe = new qe);
    return pe
}
var qe = class {
    constructor() {
        this.h = [];
        this.i = []
    }
}
, pe;
const re = new I;
function se(a) {
    const b = a.length;
    let c = 0;
    const d = ()=>a.charCodeAt(c++);
    do {
        var e = te(d);
        if (Infinity === e)
            break;
        const f = e >> 3;
        switch (e & 7) {
        case 0:
            e = te(d);
            if (2 === f)
                return e;
            break;
        case 1:
            if (2 === f)
                return;
            c += 8;
            break;
        case 2:
            e = te(d);
            if (2 === f)
                return a.substr(c, e);
            c += e;
            break;
        case 5:
            if (2 === f)
                return;
            c += 4;
            break;
        default:
            return
        }
    } while (c < b)
}
function te(a) {
    let b = a()
      , c = b & 127;
    if (128 > b)
        return c;
    b = a();
    c |= (b & 127) << 7;
    if (128 > b)
        return c;
    b = a();
    c |= (b & 127) << 14;
    if (128 > b)
        return c;
    b = a();
    return 128 > b ? c | (b & 127) << 21 : Infinity
}
;function ue(a, b, c, d) {
    if (a)
        if (Array.isArray(a)) {
            var e = d;
            for (d = 0; d < a.length && !(a[d] && (e += ve(d, a[d], b, c),
            500 < e)); d++)
                ;
            d = e
        } else if ("object" === typeof a)
            for (e in a) {
                if (a[e]) {
                    var f = e;
                    var g = a[e]
                      , h = b
                      , k = c;
                    f = "string" !== typeof g || "clickTrackingParams" !== f && "trackingParams" !== f ? 0 : (g = se(atob(g.replace(/-/g, "+").replace(/_/g, "/")))) ? ve(`${f}.ve`, g, h, k) : 0;
                    d += f;
                    d += ve(e, a[e], b, c);
                    if (500 < d)
                        break
                }
            }
        else
            c[b] = we(a),
            d += c[b].length;
    else
        c[b] = we(a),
        d += c[b].length;
    return d
}
function ve(a, b, c, d) {
    c += `.${a}`;
    a = we(b);
    d[c] = a;
    return c.length + a.length
}
function we(a) {
    return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
}
;var xe = new Set
  , ye = 0
  , ze = 0
  , Ae = 0
  , Be = [];
const Ce = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];
function De(a, b="ERROR") {
    var c = {};
    c.name = L("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = L("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0);
    Ee(a, c || {}, b)
}
function Ee(a, b, c="ERROR") {
    if (a) {
        a.level && (c = a.level);
        if (M("console_log_js_exceptions")) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            a.hasOwnProperty("args") && d.push(`Error args: ${JSON.stringify(a.args)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(5 <= ye)) {
            var e = nb(a);
            d = e.message || "Unknown Error";
            const w = e.name || "UnknownError";
            var f = e.stack || a.h || "Not available";
            if (f.startsWith(`${w}: ${d}`)) {
                var g = f.split("\n");
                g.shift();
                f = g.join("\n")
            }
            g = e.lineNumber || "Not available";
            e = e.fileName || "Not available";
            let x = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var h = 0; h < a.args.length && !(x = ue(a.args[h], `params.${h}`, b, x),
                500 <= x); h++)
                    ;
            else if (a.hasOwnProperty("params") && a.params) {
                const D = a.params;
                if ("object" === typeof a.params)
                    for (h in D) {
                        if (!D[h])
                            continue;
                        const ca = `params.${h}`
                          , P = we(D[h]);
                        b[ca] = P;
                        x += ca.length + P.length;
                        if (500 < x)
                            break
                    }
                else
                    b.params = we(D)
            }
            if (Be.length)
                for (h = 0; h < Be.length && !(x = ue(Be[h], `params.context.${h}`, b, x),
                500 <= x); h++)
                    ;
            navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
            b = {
                message: d,
                name: w,
                lineNumber: g,
                fileName: e,
                stack: f,
                params: b,
                sampleWeight: 1
            };
            d = Number(a.columnNumber);
            isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
            if ("IGNORED" === a.level)
                var k = 0;
            else
                a: {
                    a = oe();
                    d = b;
                    for (k of a.i)
                        if (d.message && d.message.match(k.Aa)) {
                            k = k.weight;
                            break a
                        }
                    for (var l of a.h)
                        if (l.xa(d)) {
                            k = l.weight;
                            break a
                        }
                    k = 1
                }
            b.sampleWeight = k;
            k = b;
            for (var p of ne)
                if (p.M[k.name]) {
                    l = p.M[k.name];
                    for (var n of l)
                        if (l = k.message.match(n.o)) {
                            k.params["params.error.original"] = l[0];
                            a = n.groups;
                            b = {};
                            for (d = 0; d < a.length; d++)
                                b[a[d]] = l[d + 1],
                                k.params[`params.error.${a[d]}`] = l[d + 1];
                            k.message = p.V(b);
                            break
                        }
                }
            k.params || (k.params = {});
            p = oe();
            k.params["params.errorServiceSignature"] = `msg=${p.i.length}&cb=${p.h.length}`;
            k.params["params.serviceWorker"] = "true";
            q.document && q.document.querySelectorAll && (k.params["params.fscripts"] = String(document.querySelectorAll("script:not([nonce])").length));
            window.yterr && "function" === typeof window.yterr && window.yterr(k);
            if (0 !== k.sampleWeight && !xe.has(k.message)) {
                "ERROR" === c ? (re.G("handleError", k),
                M("record_app_crashed_web") && 0 === Ae && 1 === k.sampleWeight && (Ae++,
                me("appCrashed", {
                    appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                })),
                ze++) : "WARNING" === c && re.G("handleWarning", k);
                b: {
                    for (t of Ce)
                        if ((p = qa) && 0 <= p.toLowerCase().indexOf(t.toLowerCase())) {
                            var t = !0;
                            break b
                        }
                    t = !1
                }
                if (t)
                    var m = void 0;
                else {
                    p = {
                        stackTrace: k.stack
                    };
                    k.fileName && (p.filename = k.fileName);
                    t = k.lineNumber && k.lineNumber.split ? k.lineNumber.split(":") : [];
                    0 !== t.length && (1 !== t.length || isNaN(Number(t[0])) ? 2 !== t.length || isNaN(Number(t[0])) || isNaN(Number(t[1])) || (p.lineNumber = Number(t[0]),
                    p.columnNumber = Number(t[1])) : p.lineNumber = Number(t[0]));
                    t = {
                        level: "ERROR_LEVEL_UNKNOWN",
                        message: k.message,
                        errorClassName: k.name,
                        sampleWeight: k.sampleWeight
                    };
                    "ERROR" === c ? t.level = "ERROR_LEVEL_ERROR" : "WARNING" === c && (t.level = "ERROR_LEVEL_WARNNING");
                    c = {
                        isObfuscated: !0,
                        browserStackInfo: p
                    };
                    p = {
                        pageUrl: window.location.href,
                        kvPairs: []
                    };
                    L("FEXP_EXPERIMENTS") && (p.experimentIds = L("FEXP_EXPERIMENTS"));
                    if (n = k.params)
                        for (m of Object.keys(n))
                            p.kvPairs.push({
                                key: `client.${m}`,
                                value: String(n[m])
                            });
                    m = L("SERVER_NAME", void 0);
                    n = L("SERVER_VERSION", void 0);
                    m && n && (p.kvPairs.push({
                        key: "server.name",
                        value: m
                    }),
                    p.kvPairs.push({
                        key: "server.version",
                        value: n
                    }));
                    m = {
                        errorMetadata: p,
                        stackTrace: c,
                        logMessage: t
                    }
                }
                m && (me("clientError", m),
                Kc());
                xe.add(k.message);
                ye++
            }
        }
    }
}
;function Fe(a) {
    return E(a, function*() {
        var b = yield q.fetch(this.i);
        if (200 !== b.status)
            return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n"))
            return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if (b[c][0] === (new bc).u) {
                    b = new bc(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}
function Ge(a=!1) {
    return E(He.h, function*() {
        if (a || !this.h)
            this.h = Fe(this).then(this.j).catch(b=>{
                delete this.h;
                De(b)
            }
            );
        return this.h
    })
}
var He = class {
    constructor() {
        this.i = `${self.location.origin}/sw.js_data`
    }
    j(a) {
        var b;
        a.h || (a.h = {});
        a.h[2] || (b = B(a, 2)) && (a.h[2] = new ac(b));
        if (b = a.h[2]) {
            const c = B(b, 5);
            c && (q.__SAPISID = c);
            null != B(b, 7) && K("VISITOR_DATA", B(b, 7));
            null != B(b, 4) && K("SESSION_INDEX", String(B(b, 4)));
            null != B(b, 8) && K("DELEGATED_SESSION_ID", B(b, 8))
        }
        return a
    }
}
;
const Ie = Date.now().toString();
let Je = q.ytLoggingDocDocumentNonce_;
if (!Je) {
    var Ke;
    a: {
        if (window.crypto && window.crypto.getRandomValues)
            try {
                const d = Array(16)
                  , e = new Uint8Array(16);
                window.crypto.getRandomValues(e);
                for (let f = 0; f < d.length; f++)
                    d[f] = e[f];
                Ke = d;
                break a
            } catch (d) {}
        const c = Array(16);
        for (let d = 0; 16 > d; d++) {
            const e = Date.now();
            for (let f = 0; f < e % 23; f++)
                c[d] = Math.random();
            c[d] = Math.floor(256 * Math.random())
        }
        if (Ie) {
            let d = 1;
            for (let e = 0; e < Ie.length; e++)
                c[d % 16] = c[d % 16] ^ c[(d - 1) % 16] / 4 ^ Ie.charCodeAt(e),
                d++
        }
        Ke = c
    }
    const a = Ke
      , b = [];
    for (let c = 0; c < a.length; c++)
        b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    Je = b.join("")
}
;var Le = class {
    constructor() {
        this.h = {}
    }
}
;
function Me() {
    var a = L("INNERTUBE_CONTEXT");
    if (!a)
        return De(Error("Error: No InnerTubeContext shell provided in ytconfig.")),
        {};
    a = la(a);
    a.client || (a.client = {});
    var b = a.client;
    b.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var c = L("EXPERIMENTS_TOKEN", "");
    c ? b.experimentsToken = c : delete b.experimentsToken;
    Le.h || (Le.h = new Le);
    b = Le.h.h;
    c = [];
    let d = 0;
    for (const e in b)
        c[d++] = b[e];
    a.request = Object.assign(Object.assign({}, a.request), {
        consistencyTokenJars: c
    });
    a.user = Object.assign({}, a.user);
    return a
}
;function Ne(a) {
    gd.h || (gd.h = new gd);
    Oe.h = new Oe(a)
}
function Pe(a, b) {
    return E(a, function*() {
        var c;
        if (this.h.pa) {
            const d = null === (c = null === b || void 0 === b ? void 0 : b.R) || void 0 === c ? void 0 : c.sessionIndex;
            c = fd({
                sessionIndex: d
            });
            c = Object.assign(Object.assign({}, Qe()), c)
        } else
            c = Re(b);
        return c
    })
}
function Se(a, b, c) {
    return E(a, function*() {
        const d = JSON.stringify(b.ga);
        b.J = Object.assign(Object.assign({}, b.J), {
            headers: c
        });
        let e = Object.assign({}, b.J);
        "POST" === b.J.method && (e = Object.assign(Object.assign({}, e), {
            body: d
        }));
        return this.i.fetch(b.input, e).then(f=>Promise.resolve(f))
    })
}
function Te(a, b, c) {
    var d = {
        R: {
            identity: hd
        }
    };
    b.context || (b.context = Me());
    return new G(e=>E(a, function*() {
        const f = yield Pe(this, d);
        var g;
        var h = L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") && (null === f || void 0 === f ? 0 : f.Authorization) ? c : rc(c, {
            key: L("INNERTUBE_API_KEY")
        }, !1);
        if (g = L("INNERTUBE_HOST_OVERRIDE")) {
            g = String(g);
            var k = String
              , l = h.match(C);
            h = l[5];
            var p = l[6];
            l = l[7];
            var n = "";
            h && (n += h);
            p && (n += "?" + p);
            l && (n += "#" + l);
            h = g + k(n)
        }
        g = h;
        k = {
            method: "POST",
            mode: sc(g) ? "same-origin" : "cors",
            credentials: sc(g) ? "same-origin" : "include"
        };
        e(Se(this, {
            input: g,
            J: k,
            ga: b,
            config: d
        }, f))
    }))
}
function Re(a) {
    var b;
    a = null === (b = null === a || void 0 === a ? void 0 : a.R) || void 0 === b ? void 0 : b.sessionIndex;
    return vb(fd({
        sessionIndex: a
    })).then(c=>Promise.resolve(Object.assign(Object.assign({}, Qe()), c)))
}
function Qe() {
    const a = {
        "Content-Type": "application/json"
    };
    var b = L("VISITOR_DATA");
    b && (a["X-Goog-Visitor-Id"] = b);
    (b = L("INNERTUBE_CONTEXT_CLIENT_NAME")) && (a["X-Youtube-Client-Name"] = b);
    (b = L("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (a["X-Youtube-Client-Version"] = b);
    M("webfe_track_one_platform_auth_mismatch") && (a["X-Youtube-Bootstrap-Logged-In"] = L("LOGGED_IN", !1));
    (b = L("CHROME_CONNECTED_HEADER")) && (a["X-Youtube-Chrome-Connected"] = b);
    return a
}
var Oe = class {
    constructor(a) {
        var b = gd.h
          , c = Ue;
        this.i = a;
        this.h = b;
        this.handleError = c
    }
}
;
function Z(a) {
    return E(this, function*() {
        yield Ve();
        De(a, "WARNING")
    })
}
function Ue(a) {
    return E(this, function*() {
        yield Ve();
        De(a)
    })
}
function We(a) {
    E(this, function*() {
        if (void 0 !== (yield Ge())) {
            var b = dd(a);
            b && me(b.payloadName, b.payload)
        } else
            M("nwl_sw_health_payloads") ? yield je(a) : (b = dd(a)) && me(b.payloadName, b.payload)
    })
}
function Ve() {
    return E(this, function*() {
        try {
            yield Ge()
        } catch (a) {}
    })
}
;let Xe;
function Ye() {
    Xe || (Ne({
        fetch: (a,b)=>vb(fetch(new Request(a,b)))
    }),
    Xe = Oe.h);
    return Xe
}
;const Ze = {
    granted: "GRANTED",
    denied: "DENIED",
    unknown: "UNKNOWN"
};
function $e(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    "notifications_register" === a ? (O("IDToken", b),
    af()) : "notifications_check_registration" === a && bf(b)
}
function cf() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a=>{
        if (a)
            for (const b of a)
                b.postMessage({
                    type: "update_unseen_notifications_count_signal"
                })
    }
    )
}
function df(a) {
    const b = [];
    a.forEach(c=>{
        b.push({
            key: c.key,
            value: c.value
        })
    }
    );
    return b
}
function ef(a) {
    return E(this, function*() {
        const b = df(a.payload.chrome.extraUrlParams)
          , c = {
            recipientId: a.recipientId,
            endpoint: a.payload.chrome.endpoint,
            extraUrlParams: b
        }
          , d = $b(Mb);
        return ff().then(e=>Te(e, c, d).then(f=>{
            f.json().then(g=>{
                if (!g || !g.endpointUrl)
                    return Promise.resolve();
                a.payload.chrome.postedEndpoint && gf(a.payload.chrome.postedEndpoint);
                return hf(a, g.endpointUrl)
            }
            )
        }
        ))
    })
}
function jf(a) {
    return E(this, function*() {
        if (M("kevlar_enable_convert_endpoint_to_url_oneplatform_migration"))
            return ef(a);
        if (!(a.payload && a.payload.chrome && a.payload.chrome.endpoint))
            return Promise.resolve();
        const b = new FormData;
        b.append("json_navigation_endpoints", JSON.stringify([a.payload.chrome.endpoint]));
        let c = "[]";
        a.payload.chrome.extraUrlParams && (c = JSON.stringify(a.payload.chrome.extraUrlParams));
        b.append("extra_url_params", c);
        b.append("hashed_identifier", a.hashedIdentifier || "");
        b.append("identifier_salt", a.identifierSalt || "");
        return fetch("/notifications_ajax?action_convert_endpoint_to_url=1", {
            credentials: "include",
            method: "POST",
            body: b
        }).then(d=>d.ok ? d.json().then(e=>{
            if (!e.successful_conversion)
                return Promise.resolve();
            a.payload.chrome.postedEndpoint && gf(a.payload.chrome.postedEndpoint);
            return hf(a, e.url)
        }
        ).catch(e=>{
            Z(e);
            return Promise.resolve()
        }
        ) : Promise.resolve())
    })
}
function hf(a, b) {
    a.deviceId && O("DeviceId", a.deviceId);
    a.timestampSec && kf(a.timestampSec);
    const c = a.payload.chrome;
    return self.registration.showNotification(c.title, {
        body: c.body,
        icon: c.iconUrl,
        data: {
            nav: b,
            id: c.notificationId,
            attributionTag: c.attributionTag,
            clickEndpoint: c.clickEndpoint
        },
        tag: c.title + c.body + c.iconUrl,
        requireInteraction: !0
    }).then(()=>{
        lf(a.displayCap)
    }
    ).catch(()=>{}
    )
}
function gf(a) {
    if (M("kevlar_enable_record_notification_interaction_oneplatform_migration"))
        return mf(a);
    const b = new FormData;
    b.append("record_notification_interactions_endpoint", JSON.stringify(a));
    return fetch("/notifications_ajax?action_record_notification_interactions=1", {
        credentials: "include",
        method: "POST",
        body: b
    })
}
function mf(a) {
    if (!a.recordNotificationInteractionsEndpoint)
        return Promise.reject();
    const b = {
        serializedRecordNotificationInteractionsRequest: a.recordNotificationInteractionsEndpoint.serializedInteractionsRequest
    }
      , c = $b(Nb);
    return ff().then(d=>Te(d, b, c))
}
function nf() {
    return Promise.all([N("TimestampLowerBound"), of(), N("DeviceId")]).then(([a,b,c])=>{
        if (!a)
            return Promise.reject(null);
        a = {
            credentials: "include",
            method: "POST",
            body: pf({
                endpoint: b,
                deviceId: c,
                ts: a
            })
        };
        return fetch("/notifications_ajax?action_get_notifications=1", a).then(qf)
    }
    )
}
function qf(a) {
    return a.ok ? a.json().then(rf).catch(()=>{}
    ) : Promise.resolve()
}
function rf(a) {
    if (a.errors)
        return Promise.reject(a.errors);
    a.device_id && O("DeviceId", a.device_id);
    a.ts && kf(a.ts);
    if (a.notifications) {
        const b = [];
        a.notifications.forEach(c=>{
            b.push(self.registration.showNotification(c.title, {
                body: c.message,
                icon: c.iconUrl,
                data: {
                    nav: c.nav,
                    id: c.id,
                    attributionTag: c.attributionTag,
                    clickEndpoint: {}
                },
                tag: c.title + c.message + c.iconUrl,
                requireInteraction: c.requireInteraction
            }))
        }
        );
        return Pb(b).then(()=>{
            lf(a.display_cap)
        }
        )
    }
    return Promise.resolve()
}
function lf(a) {
    -1 !== a && self.registration.getNotifications().then(b=>{
        for (let c = 0; c < b.length - a; c++)
            b[c].close()
    }
    )
}
function bf(a) {
    const b = [sf(a), N("RegistrationTimestamp").then(tf), uf(), vf(), wf()];
    Promise.all(b).catch(()=>{
        O("IDToken", a);
        af();
        return Promise.resolve()
    }
    )
}
function tf(a) {
    return 9E7 >= Date.now() - (a || 0) ? Promise.resolve() : Promise.reject()
}
function sf(a) {
    return N("IDToken").then(b=>a === b ? Promise.resolve() : Promise.reject())
}
function uf() {
    return N("Permission").then(a=>Notification.permission === a ? Promise.resolve() : Promise.reject())
}
function vf() {
    return N("Endpoint").then(a=>of().then(b=>a === b ? Promise.resolve() : Promise.reject()))
}
function wf() {
    return N("application_server_key").then(a=>xf().then(b=>a === b ? Promise.resolve() : Promise.reject()))
}
function yf() {
    var a = Notification.permission;
    if (Ze[a])
        return Ze[a]
}
function af() {
    O("RegistrationTimestamp", 0);
    Promise.all([of(), zf(), Af(), xf()]).then(([a,b,c,d])=>{
        b = b ? Qb(b) : null;
        c = c ? Qb(c) : null;
        if (d) {
            d = new Uint8Array(d);
            var e = 4;
            void 0 === e && (e = 0);
            Ga();
            e = Ca[e];
            for (var f = [], g = 0; g < d.length; g += 3) {
                var h = d[g]
                  , k = g + 1 < d.length
                  , l = k ? d[g + 1] : 0
                  , p = g + 2 < d.length
                  , n = p ? d[g + 2] : 0
                  , t = h >> 2;
                h = (h & 3) << 4 | l >> 4;
                l = (l & 15) << 2 | n >> 6;
                n &= 63;
                p || (n = 64,
                k || (l = 64));
                f.push(e[t], e[h], e[l] || "", e[n] || "")
            }
            d = f.join("")
        } else
            d = null;
        Bf(a, b, c, d)
    }
    ).catch(()=>{
        Bf()
    }
    )
}
function Bf(a=null, b=null, c=null, d=null) {
    Wb().then(e=>{
        e && (O("Endpoint", a),
        O("P256dhKey", b),
        O("AuthKey", c),
        O("application_server_key", d),
        O("Permission", Notification.permission),
        M("kevlar_enable_set_notification_registration_oneplatform_migration") ? Promise.all([N("DeviceId"), Ub()]).then(([f,g])=>{
            Cf(a, f, b, c, d, g, void 0)
        }
        ) : Promise.all([N("DeviceId"), Ub(), Df()]).then(([f,g,h])=>{
            Cf(a, f, b, c, d, g, h)
        }
        ))
    }
    )
}
function Cf(a, b, c, d, e, f, g) {
    M("kevlar_enable_set_notification_registration_oneplatform_migration") ? Ef(null !== b && void 0 !== b ? b : Jb(), null !== a && void 0 !== a ? a : void 0, null !== c && void 0 !== c ? c : void 0, null !== d && void 0 !== d ? d : void 0, null !== e && void 0 !== e ? e : void 0, null !== f && void 0 !== f ? f : void 0) : (a = {
        credentials: "include",
        method: "POST",
        body: pf({
            endpoint: a,
            deviceId: b,
            X: f,
            p256dhKey: c,
            authKey: d,
            applicationServerKey: e,
            Y: g
        })
    },
    q.fetch("/notifications_ajax?action_register_device=1", a).then(Ff).catch(()=>{}
    ))
}
function Ef(a, b, c, d, e, f) {
    E(this, function*() {
        const g = {
            notificationRegistration: {
                chromeRegistration: {
                    deviceId: a,
                    pushParams: {
                        applicationServerKey: e,
                        authKey: d,
                        p256dhKey: c,
                        browserEndpoint: b
                    },
                    notificationsDisabledInApp: f,
                    permission: yf()
                }
            }
        }
          , h = $b(Ob);
        return ff().then(k=>Te(k, g, h).then(()=>{
            O("DeviceId", a);
            Gf();
            kf(Date.now())
        }
        , l=>{
            Z(l)
        }
        ))
    })
}
function pf(a) {
    const b = new FormData;
    a.endpoint && b.append("endpoint", a.endpoint);
    a.deviceId && b.append("device_id", a.deviceId);
    a.ts && b.append("timestamp_lower_bound", a.ts);
    a.T && (b.append("notification_id", a.T.id),
    b.append("attribution_tag", a.T.attributionTag));
    a.X && b.append("notifications_disabled", (!!a.X).toString());
    a.p256dhKey && b.append("p256dh_key", a.p256dhKey);
    a.authKey && b.append("auth_key", a.authKey);
    a.applicationServerKey && b.append("application_server_key", a.applicationServerKey);
    a.Y && b.append("registration_token", a.Y);
    b.append("permission", Notification.permission);
    return b
}
function Ff(a) {
    Gf();
    a.ok && a.json().then(b=>{
        b.ts && kf(b.ts);
        b.device_id && O("DeviceId", b.device_id)
    }
    ).catch(()=>{}
    )
}
function of() {
    return self.registration.pushManager.getSubscription().then(a=>a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}
function zf() {
    return self.registration.pushManager.getSubscription().then(a=>a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}
function Af() {
    return self.registration.pushManager.getSubscription().then(a=>a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}
function xf() {
    return self.registration.pushManager.getSubscription().then(a=>a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}
function Df() {
    return fetch("/notifications_ajax?action_get_registration_token=1", {
        credentials: "include",
        method: "POST"
    }).then(a=>{
        if (a.ok)
            return a.json().then(b=>b.registration_token).catch(()=>{}
            )
    }
    )
}
function Gf() {
    O("RegistrationTimestamp", Date.now())
}
function kf(a) {
    O("TimestampLowerBound", a)
}
function ff() {
    return E(this, function*() {
        try {
            return yield Ge(!0),
            Ye()
        } catch (a) {
            return yield Z(a),
            Promise.reject(a)
        }
    })
}
;let Hf = void 0;
function If(a) {
    return E(this, function*() {
        Hf || (Hf = yield a.open("yt-appshell-assets"));
        return Hf
    })
}
function Jf(a, b) {
    return E(this, function*() {
        const c = yield If(a)
          , d = b.map(e=>Kf(c, e));
        return Promise.all(d)
    })
}
function Lf(a, b) {
    return E(this, function*() {
        return a.match(b, {
            cacheName: "yt-appshell-assets"
        })
    })
}
function Mf(a, b) {
    return E(this, function*() {
        const c = yield If(a)
          , d = (yield c.keys()).filter(e=>!b.includes(e.url)).map(e=>c.delete(e));
        return Promise.all(d)
    })
}
function Nf(a, b, c) {
    return E(this, function*() {
        yield(yield If(a)).put(b, c)
    })
}
function Of(a, b) {
    E(this, function*() {
        yield(yield If(a)).delete(b)
    })
}
function Kf(a, b) {
    return E(this, function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
}
;let Pf = null;
const Qf = ge("yt-serviceworker-metadata", {
    L: {
        ["auth"]: !0,
        ["resource-manifest-assets"]: !0
    },
    N: !0,
    upgrade(a, b) {
        1 > b && Fd(a, "resource-manifest-assets");
        2 > b && Fd(a, "auth")
    },
    version: 2
});
function Rf() {
    return new Promise(a=>{
        Yd().then(b=>{
            b ? (Sf.h || (Sf.h = new Sf),
            a(Sf.h)) : a(void 0)
        }
        )
    }
    )
}
function Tf(a, b) {
    return E(a, function*() {
        yield W(yield Y(Qf()), ["resource-manifest-assets"], "readwrite", c=>{
            const d = X(c, "resource-manifest-assets")
              , e = Date.now();
            return d.put(b, e).then(()=>{
                Pf = e;
                let f = !0;
                return Jd(d, {
                    query: IDBKeyRange.bound(0, Date.now()),
                    direction: "prev"
                }, g=>f ? (f = !1,
                g.advance(5)) : d.delete(g.getKey()).then(()=>g.continue()))
            }
            )
        }
        )
    })
}
function Uf(a, b) {
    return E(a, function*() {
        let c = !1
          , d = 0;
        yield W(yield Y(Qf()), ["resource-manifest-assets"], "readonly", e=>Jd(X(e, "resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, f=>{
            if (f.cursor.value.includes(b))
                c = !0;
            else
                return d += 1,
                f.continue()
        }
        ));
        return c ? d : -1
    })
}
function Vf(a) {
    return E(a, function*() {
        Pf || (yield W(yield Y(Qf()), ["resource-manifest-assets"], "readonly", b=>Jd(X(b, "resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, c=>{
            Pf = c.getKey()
        }
        )));
        return Pf
    })
}
var Sf = class {
}
;
function Wf() {
    return new Promise(a=>{
        Yd().then(b=>{
            b ? (Xf.h || (Xf.h = new Xf),
            a(Xf.h)) : a(void 0)
        }
        )
    }
    )
}
function Yf(a, b) {
    return E(a, function*() {
        yield(yield Y(Qf())).put("auth", b, "shell_identifier_key")
    })
}
function Zf(a) {
    return E(a, function*() {
        return (yield(yield Y(Qf())).get("auth", "shell_identifier_key")) || ""
    })
}
function $f(a) {
    return E(a, function*() {
        yield(yield Y(Qf())).clear("auth")
    })
}
var Xf = class {
}
;
function ag() {
    E(this, function*() {
        const a = yield Wf();
        a && (yield $f(a))
    })
}
;function Na(a) {
    A(this, a, 0, -1, null, null)
}
v(Na, Ha);
function bg(a, b) {
    for (; za(b) && 4 != b.i; ) {
        var c = void 0;
        switch (b.j) {
        case 1:
            c = b;
            var d = ya(c.h);
            c = c.h;
            var e = c.j
              , f = c.h
              , g = f + d
              , h = [];
            for (d = ""; f < g; ) {
                var k = e[f++];
                if (128 > k)
                    h.push(k);
                else if (192 > k)
                    continue;
                else if (224 > k) {
                    var l = e[f++];
                    h.push((k & 31) << 6 | l & 63)
                } else if (240 > k) {
                    l = e[f++];
                    var p = e[f++];
                    h.push((k & 15) << 12 | (l & 63) << 6 | p & 63)
                } else if (248 > k) {
                    l = e[f++];
                    p = e[f++];
                    var n = e[f++];
                    k = (k & 7) << 18 | (l & 63) << 12 | (p & 63) << 6 | n & 63;
                    k -= 65536;
                    h.push((k >> 10 & 1023) + 55296, (k & 1023) + 56320)
                }
                8192 <= h.length && (d += String.fromCharCode.apply(null, h),
                h.length = 0)
            }
            if (8192 >= h.length)
                h = String.fromCharCode.apply(null, h);
            else {
                e = "";
                for (g = 0; g < h.length; g += 8192)
                    e += String.fromCharCode.apply(null, ka(h, g, g + 8192));
                h = e
            }
            d += h;
            c.h = f;
            c = d;
            La(a, 1, c);
            break;
        default:
            z(b)
        }
    }
    return a
}
;function cg(a) {
    A(this, a, 0, -1, dg, null)
}
v(cg, Ha);
var dg = [1];
function eg(a) {
    var b = new cg;
    for (a = new Aa(a); za(a) && 4 != a.i; ) {
        var c = void 0;
        switch (a.j) {
        case 1:
            c = new Na;
            var d = a
              , e = c
              , f = bg
              , g = d.h.i
              , h = ya(d.h);
            h = d.h.h + h;
            d.h.i = h;
            f(e, d);
            d.h.h = h;
            d.h.i = g;
            d = b;
            e = c;
            c = Ma(d);
            e = e ? e : new Na;
            d = B(d, 1);
            c.push(e);
            d.push(Oa(e));
            break;
        default:
            z(a)
        }
    }
    return b
}
;function fg(a) {
    return E(this, function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(gg(b)) : Promise.reject(Error("No resource manifest header"))
    })
}
function gg(a) {
    return Ma(eg(decodeURIComponent(a))).reduce((b,c)=>{
        (c = B(c, 1)) && b.push(c);
        return b
    }
    , [])
}
;function hg(a) {
    return E(a, function*() {
        const b = yield Ge();
        if (b && null != B(b, 3)) {
            var c = yield Wf();
            c && (c = yield Zf(c),
            B(b, 3) !== c && (Of(this.h, this.i),
            ag()))
        }
    })
}
function ig(a) {
    return E(a, function*() {
        let b, c;
        try {
            c = yield jg(this, this.j),
            b = yield fg(c),
            yield Jf(this.h, b)
        } catch (d) {
            return Promise.reject(d)
        }
        try {
            yield kg(this),
            yield Nf(this.h, this.i, c)
        } catch (d) {
            return Promise.reject(d)
        }
        if (b)
            try {
                yield lg(this, b, this.i)
            } catch (d) {}
        return Promise.resolve()
    })
}
function mg(a) {
    return E(a, function*() {
        yield hg(this);
        return ig(this)
    })
}
function jg(a, b) {
    return E(a, function*() {
        try {
            return yield q.fetch(new Request(b))
        } catch (c) {
            return Promise.reject(c)
        }
    })
}
function kg(a) {
    return E(a, function*() {
        var b = yield Ge();
        let c;
        b && null != B(b, 3) && (c = B(b, 3));
        return c ? (b = yield Wf()) ? Promise.resolve(Yf(b, c)) : Promise.reject(Error("Could not get AuthMonitor instance")) : Promise.reject(Error("Could not get datasync ID"))
    })
}
function lg(a, b, c) {
    return E(a, function*() {
        const d = yield Rf();
        if (d)
            try {
                yield Tf(d, b)
            } catch (e) {
                yield Z(e)
            }
        b.push(c);
        try {
            yield Mf(this.h, b)
        } catch (e) {
            yield Z(e)
        }
        return Promise.resolve()
    })
}
function ng(a, b) {
    return E(a, function*() {
        return Lf(this.h, b)
    })
}
function og(a) {
    return E(a, function*() {
        return Lf(this.h, this.i)
    })
}
var pg = class {
    constructor() {
        var a = self.location.origin + "/app_shell"
          , b = self.location.origin + "/app_shell_home";
        this.h = self.caches;
        this.j = a;
        this.i = b
    }
}
;
function qg(a, b) {
    return E(a, function*() {
        const c = b.request
          , d = yield ng(this.h, c.url);
        if (d)
            return rg(c),
            d;
        sg(c);
        return tg(b)
    })
}
function ug(a, b) {
    return E(a, function*() {
        const c = yield vg(this, b);
        if (c.response && (c.response.ok || "opaqueredirect" === c.response.type || 303 === c.response.status || 300 <= c.response.status && 400 > c.response.status))
            return c.response;
        const d = yield og(this.h);
        if (d)
            return rg(b.request),
            d;
        sg(b.request);
        return c.response ? c.response : Promise.reject(c.error)
    })
}
function wg(a, b) {
    b = new URL(b);
    if (!a.i.includes(b.pathname))
        return !1;
    if (!b.search)
        return !0;
    for (const c of a.l)
        if (a = b.searchParams.get(c.key),
        void 0 === c.value || a === c.value)
            if (b.searchParams.delete(c.key),
            !b.search)
                return !0;
    return !1
}
function xg(a, b) {
    return E(a, function*() {
        const c = yield og(this.h);
        if (!c)
            return sg(b.request),
            tg(b);
        rg(b.request);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d),
            !isNaN(d))) {
                d = Math.round(R() - d);
                break a
            }
            d = -1
        }
        if (!(-1 < d && 7 <= d / 864E5))
            return c;
        d = yield vg(this, b);
        return d.response && d.response.ok ? d.response : c
    })
}
function tg(a) {
    return Promise.resolve(a.preloadResponse).then(b=>b || q.fetch(a.request))
}
function rg(a) {
    We({
        appShellAssetLoadReport: {
            assetPath: a.url,
            cacheHit: !0
        },
        timestamp: R()
    })
}
function sg(a) {
    const b = {
        assetPath: a.url,
        cacheHit: !1
    };
    Rf().then(c=>{
        if (c) {
            var d = Vf(c).then(e=>{
                e && (b.currentAppBundleTimestampSec = String(Math.floor(e / 1E3)))
            }
            );
            c = Uf(c, a.url).then(e=>{
                b.appBundleVersionDiffCount = e
            }
            );
            Promise.all([d, c]).catch(e=>{
                Z(e)
            }
            ).finally(()=>{
                We({
                    appShellAssetLoadReport: b,
                    timestamp: R()
                })
            }
            )
        } else
            We({
                appShellAssetLoadReport: b,
                timestamp: R()
            })
    }
    )
}
function vg(a, b) {
    return E(a, function*() {
        try {
            return {
                response: yield tg(b)
            }
        } catch (c) {
            return {
                error: c
            }
        }
    })
}
var Dg = class {
    constructor() {
        var a = yg
          , b = zg
          , c = Ag
          , d = Bg;
        const e = [];
        e.push({
            key: "feature",
            value: "ytca"
        });
        e.push({
            key: "client_dev_root_url"
        });
        var f = Cg();
        this.h = a;
        this.m = b;
        this.u = c;
        this.i = d;
        this.l = e;
        this.j = f
    }
}
;
var Bg = ["/", "/feed/downloads"];
const Eg = [/^\/$/, /^\/feed\/downloads$/]
  , Fg = [/^\/$/, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/];
function Cg() {
    return new RegExp((M("kevlar_sw_app_wide_fallback") ? Fg : Eg).map(a=>a.source).join("|"))
}
var zg = /^https:\/\/[\w-]*\.?youtube\.com.*(\.css$|\.js$|\/ytmweb\/_\/js\/|\/ytmweb\/_\/ss\/)/
  , Ag = /^https:\/\/[\w-]*\.?youtube\.com.*(purge_shell=1|\/signin|\/logout)/;
var Gg = class {
    constructor() {
        var a = yg
          , b = new Dg;
        this.h = self;
        this.i = a;
        this.m = b;
        this.G = Rb
    }
    init() {
        this.h.oninstall = this.u.bind(this);
        this.h.onactivate = this.j.bind(this);
        this.h.onfetch = this.l.bind(this);
        this.h.onmessage = this.F.bind(this)
    }
    u(a) {
        a.waitUntil(this.h.skipWaiting());
        const b = mg(this.i).catch(c=>{
            Z(c);
            return Promise.resolve()
        }
        );
        a.waitUntil(b)
    }
    j(a) {
        const b = [this.h.clients.claim()];
        this.h.registration.navigationPreload && b.push(this.h.registration.navigationPreload.enable());
        a.waitUntil(Promise.all(b))
    }
    l(a) {
        return E(this, function*() {
            var b = this.m
              , c = !!this.h.registration.navigationPreload;
            const d = a.request;
            if (b.u.test(d.url))
                He.h && (delete He.h.h,
                q.__SAPISID = void 0,
                K("VISITOR_DATA", void 0),
                K("SESSION_INDEX", void 0),
                K("DELEGATED_SESSION_ID", void 0)),
                c = a.respondWith,
                b = b.h,
                Of(b.h, b.i),
                ag(),
                b = tg(a),
                c.call(a, b);
            else if (b.m.test(d.url))
                a.respondWith(qg(b, a));
            else if ("navigate" === d.mode) {
                const e = new URL(d.url);
                b.j.test(e.pathname) ? a.respondWith(ug(b, a)) : wg(b, d.url) ? a.respondWith(xg(b, a)) : c && a.respondWith(tg(a))
            }
        })
    }
    F(a) {
        const b = a.data;
        this.G.includes(b.type) ? $e(a) : "refresh_shell" === b.type && ig(this.i).catch(c=>{
            Z(c)
        }
        )
    }
}
;
function Hg() {
    var a, b;
    return E(this, function*() {
        const c = navigator;
        if (null === (a = c.storage) || void 0 === a ? 0 : a.estimate)
            return c.storage.estimate();
        if (null === (b = c.webkitTemporaryStorage) || void 0 === b ? 0 : b.queryUsageAndQuota)
            return Ig()
    })
}
function Ig() {
    const a = navigator;
    return new Promise((b,c)=>{
        var d;
        null !== (d = a.webkitTemporaryStorage) && void 0 !== d && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota((e,f)=>{
            b({
                usage: e,
                quota: f
            })
        }
        , e=>{
            c(e)
        }
        ) : c(Error("webkitTemporaryStorage is not supported."))
    }
    )
}
;function Jg(a, b) {
    Hg().then(c=>{
        c = Object.assign(Object.assign({}, b), {
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: Kg(null === c || void 0 === c ? void 0 : c.usage),
            deviceStorageQuotaMbytes: Kg(null === c || void 0 === c ? void 0 : c.quota)
        });
        a.h("idbQuotaExceeded", c)
    }
    )
}
class Lg {
    constructor() {
        var a = Mg;
        this.handleError = Ng;
        this.h = a;
        this.i = !1;
        void 0 === self.document || self.addEventListener("beforeunload", ()=>{
            this.i = !0
        }
        )
    }
    I(a, b) {
        switch (a) {
        case "IDB_DATA_CORRUPTED":
            M("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
            break;
        case "IDB_UNEXPECTEDLY_CLOSED":
            this.h("idbUnexpectedlyClosed", b);
            break;
        case "IS_SUPPORTED_COMPLETED":
            M("idb_is_supported_completed_killswitch") || this.h("idbIsSupportedCompleted", b);
            break;
        case "QUOTA_EXCEEDED":
            Jg(this, b);
            break;
        case "TRANSACTION_ENDED":
            Math.random() <= Lb("ytidb_transaction_ended_event_rate_limit", .02) && this.h("idbTransactionEnded", b);
            break;
        case "TRANSACTION_UNEXPECTEDLY_ABORTED":
            a = Object.assign(Object.assign({}, b), {
                hasWindowUnloaded: this.i
            }),
            this.h("idbTransactionAborted", a)
        }
    }
}
function Kg(a) {
    return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576))
}
;var {handleError: Ng=function(a) {
    De(a)
}
, I: Mg=me} = {
    handleError: Ue,
    I: function(a, b) {
        return E(this, function*() {
            yield Ve();
            me(a, b)
        })
    }
};
for (id = new Lg; 0 < S.length; ) {
    const a = S.shift();
    switch (a.type) {
    case "ERROR":
        id.handleError(a.payload);
        break;
    case "EVENT":
        id.I(a.eventType, a.payload)
    }
}
He.h = new He;
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data
      , c = self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    });
    c.then(d=>{
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    }
    );
    a.waitUntil(c);
    a.waitUntil(gf(b.clickEndpoint))
}
;
self.onpush = function(a) {
    a.waitUntil(Ub().then(b=>{
        if (b)
            return Promise.resolve();
        if (a.data && a.data.text().length)
            try {
                return jf(a.data.json())
            } catch (c) {
                return Promise.resolve(c.message)
            }
        return nf()
    }
    ));
    a.waitUntil(cf())
}
;
self.onpushsubscriptionchange = function() {
    af()
}
;
const yg = new pg;
(new Gg).init();
