// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__cid"
            }],
            "tags": [{
                "function": "__rep",
                "once_per_event": true,
                "vtp_containerId": ["macro", 1],
                "tag_id": 1
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [[["if", 0], ["add", 0]]]
        },
        "runtime": []

    };

    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var aa, ba = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, ca = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: ba(a)
        }
    }, da = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , fa;
    if ("function" == typeof Object.setPrototypeOf)
        fa = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = {
                a: !0
            }
              , ma = {};
            try {
                ma.__proto__ = ia;
                ha = ma.a;
                break a
            } catch (a) {}
            ha = !1
        }
        fa = ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var oa = fa
      , pa = function(a, b) {
        a.prototype = da(b.prototype);
        a.prototype.constructor = a;
        if (oa)
            oa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Th = b.prototype
    }
      , qa = this || self
      , ta = function(a) {
        if (a && a != qa)
            return ra(a.document);
        null === sa && (sa = ra(qa.document));
        return sa
    }
      , ua = /^[\w+/_-]+[=]{0,2}$/
      , sa = null
      , ra = function(a) {
        var b = a.querySelector && a.querySelector("script[nonce]");
        if (b) {
            var c = b.nonce || b.getAttribute("nonce");
            if (c && ua.test(c))
                return c
        }
        return ""
    }
      , va = function(a) {
        return a
    };
    var wa = {}
      , ya = function(a, b) {
        wa[a] = wa[a] || [];
        wa[a][b] = !0
    }
      , za = function(a) {
        for (var b = [], c = wa[a] || [], d = 0; d < c.length; d++)
            c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
        for (var e = 0; e < b.length; e++)
            b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
        return b.join("")
    };
    var Ba = function() {}
      , Ca = function(a) {
        return "function" == typeof a
    }
      , g = function(a) {
        return "string" == typeof a
    }
      , Ea = function(a) {
        return "number" == typeof a && !isNaN(a)
    }
      , Fa = function(a) {
        var b = "[object Array]" == Object.prototype.toString.call(Object(a));
        Array.isArray ? Array.isArray(a) !== b && ya("TAGGING", 4) : ya("TAGGING", 5);
        return b
    }
      , Ga = function(a, b) {
        if (Array.prototype.indexOf) {
            var c = a.indexOf(b);
            return "number" == typeof c ? c : -1
        }
        for (var d = 0; d < a.length; d++)
            if (a[d] === b)
                return d;
        return -1
    }
      , Ha = function(a, b) {
        if (a && Fa(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c]))
                    return a[c]
    }
      , Ia = function(a, b) {
        if (!Ea(a) || !Ea(b) || a > b)
            a = 0,
            b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
      , La = function(a, b) {
        for (var c = new Ka, d = 0; d < a.length; d++)
            c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e]))
                return !0;
        return !1
    }
      , Ma = function(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }
      , Na = function(a) {
        return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
    }
      , Oa = function(a) {
        return Math.round(Number(a)) || 0
    }
      , Qa = function(a) {
        return "false" == String(a).toLowerCase() ? !1 : !!a
    }
      , Ta = function(a) {
        var b = [];
        if (Fa(a))
            for (var c = 0; c < a.length; c++)
                b.push(String(a[c]));
        return b
    }
      , Ua = function(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }
      , Va = function() {
        return (new Date).getTime()
    }
      , Ka = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    Ka.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    }
    ;
    Ka.prototype.get = function(a) {
        return this.values[this.prefix + a]
    }
    ;
    var Ya = function(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }
      , Za = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }
      , bb = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }
      , cb = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b))
                return !0;
        return !1
    }
      , eb = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            c.push(a[d]),
            c.push.apply(c, b[a[d]] || []);
        return c
    }
      , gb = function(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
            d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
      , hb = function(a) {
        var b = [];
        Ma(a, function(c, d) {
            10 > c.length && d && b.push(c)
        });
        return b.join(",")
    };
    /*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var ib = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
      , jb = function(a) {
        if (null == a)
            return String(a);
        var b = ib.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }
      , kb = function(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }
      , mb = function(a) {
        if (!a || "object" != jb(a) || a.nodeType || a == a.window)
            return !1;
        try {
            if (a.constructor && !kb(a, "constructor") && !kb(a.constructor.prototype, "isPrototypeOf"))
                return !1
        } catch (c) {
            return !1
        }
        for (var b in a)
            ;
        return void 0 === b || kb(a, b)
    }
      , m = function(a, b) {
        var c = b || ("array" == jb(a) ? [] : {}), d;
        for (d in a)
            if (kb(a, d)) {
                var e = a[d];
                "array" == jb(e) ? ("array" != jb(c[d]) && (c[d] = []),
                c[d] = m(e, c[d])) : mb(e) ? (mb(c[d]) || (c[d] = {}),
                c[d] = m(e, c[d])) : c[d] = e
            }
        return c
    };
    var qb = function(a) {
        if (void 0 === a || Fa(a) || mb(a))
            return !0;
        switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
            return !0
        }
        return !1
    };
    var rb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            zf: a("consent"),
            Af: a("consent_always_fire"),
            Rd: a("convert_case_to"),
            Sd: a("convert_false_to"),
            Td: a("convert_null_to"),
            Ud: a("convert_true_to"),
            Vd: a("convert_undefined_to"),
            Eh: a("debug_mode_metadata"),
            Na: a("function"),
            ng: a("instance_name"),
            pg: a("live_only"),
            qg: a("malware_disabled"),
            rg: a("metadata"),
            Hh: a("original_activity_id"),
            Ih: a("original_vendor_template_id"),
            ug: a("once_per_event"),
            Je: a("once_per_load"),
            Ne: a("setup_tags"),
            Oe: a("tag_id"),
            Pe: a("teardown_tags")
        }
    }();
    var Rb;
    var Sb = [], Tb = [], Ub = [], Vb = [], Wb = [], Xb = {}, Yb, Zb, $b, ac = function(a, b) {
        var c = a["function"];
        if (!c)
            throw Error("Error: No function name given for function call.");
        var d = Xb[c], e = {}, f;
        for (f in a)
            if (a.hasOwnProperty(f))
                if (0 === f.indexOf("vtp_"))
                    d && b && b.Se && b.Se(a[f]),
                    e[void 0 !== d ? f : f.substr(4)] = a[f];
                else if (f === rb.Af.toString() && a[f]) {}
        return void 0 !== d ? d(e) : Rb(c, e, b)
    }, cc = function(a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a)
            a.hasOwnProperty(e) && (d[e] = bc(a[e], b, c));
        return d
    }, bc = function(a, b, c) {
        if (Fa(a)) {
            var d;
            switch (a[0]) {
            case "function_id":
                return a[1];
            case "list":
                d = [];
                for (var e = 1; e < a.length; e++)
                    d.push(bc(a[e], b, c));
                return d;
            case "macro":
                var f = a[1];
                if (c[f])
                    return;
                var h = Sb[f];
                if (!h || b.wd(h))
                    return;
                c[f] = !0;
                try {
                    var k = cc(h, b, c);
                    k.vtp_gtmEventId = b.id;
                    d = ac(k, b);
                    $b && (d = $b.Ig(d, k))
                } catch (A) {
                    b.ef && b.ef(A, Number(f)),
                    d = !1
                }
                c[f] = !1;
                return d;
            case "map":
                d = {};
                for (var l = 1; l < a.length; l += 2)
                    d[bc(a[l], b, c)] = bc(a[l + 1], b, c);
                return d;
            case "template":
                d = [];
                for (var n = !1, q = 1; q < a.length; q++) {
                    var p = bc(a[q], b, c);
                    Zb && (n = n || p === Zb.fc);
                    d.push(p)
                }
                return Zb && n ? Zb.Lg(d) : d.join("");
            case "escape":
                d = bc(a[1], b, c);
                if (Zb && Fa(a[1]) && "macro" === a[1][0] && Zb.dh(a))
                    return Zb.rh(d);
                d = String(d);
                for (var r = 2; r < a.length; r++)
                    sb[a[r]] && (d = sb[a[r]](d));
                return d;
            case "tag":
                var u = a[1];
                if (!Vb[u])
                    throw Error("Unable to resolve tag reference " + u + ".");
                return d = {
                    Ye: a[2],
                    index: u
                };
            case "zb":
                var t = {
                    arg0: a[2],
                    arg1: a[3],
                    ignore_case: a[5]
                };
                t["function"] = a[1];
                var v = dc(t, b, c)
                  , x = !!a[4];
                return x || 2 !== v ? x !== (1 === v) : null;
            default:
                throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, dc = function(a, b, c) {
        try {
            return Yb(cc(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    };
    var gc = null
      , jc = function(a) {
        function b(p) {
            for (var r = 0; r < p.length; r++)
                d[p[r]] = !0
        }
        var c = []
          , d = [];
        gc = hc(a);
        for (var e = 0; e < Tb.length; e++) {
            var f = Tb[e]
              , h = ic(f);
            if (h) {
                for (var k = f.add || [], l = 0; l < k.length; l++)
                    c[k[l]] = !0;
                b(f.block || [])
            } else
                null === h && b(f.block || [])
        }
        for (var n = [], q = 0; q < Vb.length; q++)
            c[q] && !d[q] && (n[q] = !0);
        return n
    }
      , ic = function(a) {
        for (var b = a["if"] || [], c = 0; c < b.length; c++) {
            var d = gc(b[c]);
            if (0 === d)
                return !1;
            if (2 === d)
                return null
        }
        for (var e = a.unless || [], f = 0; f < e.length; f++) {
            var h = gc(e[f]);
            if (2 === h)
                return null;
            if (1 === h)
                return !1
        }
        return !0
    }
      , hc = function(a) {
        var b = [];
        return function(c) {
            void 0 === b[c] && (b[c] = dc(Ub[c], a));
            return b[c]
        }
    };
    var kc = {
        Ig: function(a, b) {
            b[rb.Rd] && "string" === typeof a && (a = 1 == b[rb.Rd] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(rb.Td) && null === a && (a = b[rb.Td]);
            b.hasOwnProperty(rb.Vd) && void 0 === a && (a = b[rb.Vd]);
            b.hasOwnProperty(rb.Ud) && !0 === a && (a = b[rb.Ud]);
            b.hasOwnProperty(rb.Sd) && !1 === a && (a = b[rb.Sd]);
            return a
        }
    };
    var C = {
        zb: "_ee",
        kd: "_syn",
        Kh: "_uei",
        cd: "_eu",
        Jh: "_pci",
        Qc: "event_callback",
        Xb: "event_timeout",
        Z: "gtag.config",
        oa: "gtag.get",
        na: "purchase",
        Xa: "refund",
        Ka: "begin_checkout",
        Va: "add_to_cart",
        Wa: "remove_from_cart",
        Jf: "view_cart",
        Zd: "add_to_wishlist",
        za: "view_item",
        Yd: "view_promotion",
        Xd: "select_promotion",
        Lc: "select_item",
        Ub: "view_item_list",
        Wd: "add_payment_info",
        If: "add_shipping_info",
        Ba: "value_key",
        Aa: "value_callback",
        fa: "allow_ad_personalization_signals",
        Yc: "restricted_data_processing",
        pb: "allow_google_signals",
        ia: "cookie_expires",
        sb: "cookie_update",
        wb: "session_duration",
        ac: "session_engaged_time",
        ra: "user_properties",
        Da: "transport_url",
        N: "ads_data_redaction",
        bd: "user_data",
        Yb: "first_party_collection",
        B: "ad_storage",
        J: "analytics_storage",
        Pd: "region",
        Qd: "wait_for_update"
    };
    C.Mc = "page_view";
    C.$d = "user_engagement";
    C.Df = "app_remove";
    C.Ef = "app_store_refund";
    C.Ff = "app_store_subscription_cancel";
    C.Gf = "app_store_subscription_convert";
    C.Hf = "app_store_subscription_renew";
    C.Kf = "first_open";
    C.Lf = "first_visit";
    C.Mf = "in_app_purchase";
    C.Nf = "session_start";
    C.Of = "allow_custom_scripts";
    C.Pf = "allow_display_features";
    C.Nc = "allow_enhanced_conversions";
    C.qe = "enhanced_conversions";
    C.Ya = "client_id";
    C.W = "cookie_domain";
    C.Wb = "cookie_name";
    C.La = "cookie_path";
    C.qa = "cookie_flags";
    C.ja = "currency";
    C.je = "custom_map";
    C.Uc = "groups";
    C.Za = "language";
    C.he = "country";
    C.Fh = "non_interaction";
    C.ub = "page_location";
    C.Ca = "page_referrer";
    C.Xc = "page_title";
    C.vb = "send_page_view";
    C.Ma = "send_to";
    C.Zc = "session_engaged";
    C.bc = "session_id";
    C.$c = "session_number";
    C.ig = "tracking_id";
    C.ka = "linker";
    C.Ea = "url_passthrough";
    C.$a = "accept_incoming";
    C.I = "domains";
    C.cb = "url_position";
    C.ab = "decorate_forms";
    C.we = "phone_conversion_number";
    C.ue = "phone_conversion_callback";
    C.ve = "phone_conversion_css_class";
    C.xe = "phone_conversion_options";
    C.dg = "phone_conversion_ids";
    C.cg = "phone_conversion_country_code";
    C.ae = "aw_remarketing";
    C.be = "aw_remarketing_only";
    C.Vb = "gclid";
    C.Fa = "value";
    C.eg = "quantity";
    C.Uf = "affiliation";
    C.pe = "tax";
    C.oe = "shipping";
    C.Pc = "list_name";
    C.ne = "checkout_step";
    C.me = "checkout_option";
    C.Vf = "coupon";
    C.Wf = "promotions";
    C.xb = "transaction_id";
    C.yb = "user_id";
    C.fg = "retoken";
    C.rb = "conversion_linker";
    C.qb = "conversion_cookie_prefix";
    C.aa = "cookie_prefix";
    C.V = "items";
    C.fe = "aw_merchant_id";
    C.de = "aw_feed_country";
    C.ee = "aw_feed_language";
    C.ce = "discount";
    C.ke = "disable_merchant_reported_purchases";
    C.te = "new_customer";
    C.ie = "customer_lifetime_value";
    C.Tf = "dc_natural_search";
    C.Sf = "dc_custom_params";
    C.jg = "trip_type";
    C.bg = "passengers";
    C.$f = "method";
    C.hg = "search_term";
    C.Qf = "content_type";
    C.ag = "optimize_id";
    C.Xf = "experiments";
    C.tb = "google_signals";
    C.Tc = "google_tld";
    C.cc = "update";
    C.Sc = "firebase_id";
    C.Zb = "ga_restrict_domain";
    C.Rc = "event_settings";
    C.Oc = "dynamic_event_settings";
    C.gg = "screen_name";
    C.Zf = "_x_19";
    C.Yf = "_x_20";
    C.Wc = "internal_traffic_results";
    C.ye = "traffic_type";
    C.$b = "referral_exclusion_definition";
    C.Vc = "ignore_referrer";
    C.ad = "delivery_postal_code";
    C.se = "estimated_delivery_date";
    C.Rf = "developer_id";
    C.kg = [C.fa, C.Nc, C.pb, C.V, C.Yc, C.W, C.ia, C.qa, C.Wb, C.La, C.aa, C.sb, C.je, C.Oc, C.Qc, C.Rc, C.Xb, C.Yb, C.Zb, C.tb, C.Tc, C.Uc, C.Wc, C.ka, C.$b, C.Ma, C.vb, C.wb, C.ac, C.Da, C.cc, C.ra, C.ad, C.cd];
    C.ze = [C.ub, C.Ca, C.Xc, C.Za, C.gg, C.yb, C.Sc];
    C.mg = [C.Df, C.Ef, C.Ff, C.Gf, C.Hf, C.Kf, C.Lf, C.Mf, C.Nf, C.$d];
    var Hc = {};
    C.xf = (Hc[C.fa] = !0,
    Hc[C.Nc] = !0,
    Hc[C.ae] = !0,
    Hc[C.be] = !0,
    Hc[C.ce] = !0,
    Hc[C.de] = !0,
    Hc[C.ee] = !0,
    Hc[C.V] = !0,
    Hc[C.fe] = !0,
    Hc[C.qb] = !0,
    Hc[C.rb] = !0,
    Hc[C.W] = !0,
    Hc[C.ia] = !0,
    Hc[C.qa] = !0,
    Hc[C.aa] = !0,
    Hc[C.ja] = !0,
    Hc[C.ie] = !0,
    Hc[C.ke] = !0,
    Hc[C.qe] = !0,
    Hc[C.se] = !0,
    Hc[C.Sc] = !0,
    Hc[C.Yb] = !0,
    Hc[C.Za] = !0,
    Hc[C.te] = !0,
    Hc[C.ub] = !0,
    Hc[C.Ca] = !0,
    Hc[C.ue] = !0,
    Hc[C.ve] = !0,
    Hc[C.we] = !0,
    Hc[C.xe] = !0,
    Hc[C.Yc] = !0,
    Hc[C.vb] = !0,
    Hc[C.Ma] = !0,
    Hc[C.ad] = !0,
    Hc[C.xb] = !0,
    Hc[C.Da] = !0,
    Hc[C.cc] = !0,
    Hc[C.Ea] = !0,
    Hc[C.bd] = !0,
    Hc[C.yb] = !0,
    Hc[C.Fa] = !0,
    Hc);
    C.Be = [C.na, C.Xa, C.Ka, C.Va, C.Wa, C.Jf, C.Zd, C.za, C.Yd, C.Xd, C.Ub, C.Lc, C.Wd, C.If];
    C.Ae = [C.fa, C.pb, C.sb];
    C.Ce = [C.ia, C.Xb, C.wb, C.ac];
    var D = function(a) {
        ya("GTM", a)
    };
    var Ic = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }
      , Jc = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    var Kc, Lc = function() {
        if (void 0 === Kc) {
            var a = null
              , b = qa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: va,
                        createScript: va,
                        createScriptURL: va
                    })
                } catch (c) {
                    qa.console && qa.console.error(c.message)
                }
                Kc = a
            } else
                Kc = a
        }
        return Kc
    };
    var Nc = function(a, b) {
        this.m = b === Mc ? a : ""
    };
    Nc.prototype.toString = function() {
        return this.m + ""
    }
    ;
    var Mc = {};
    var Rc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var Sc;
    a: {
        var Tc = qa.navigator;
        if (Tc) {
            var Uc = Tc.userAgent;
            if (Uc) {
                Sc = Uc;
                break a
            }
        }
        Sc = ""
    }
    var Vc = function(a) {
        return -1 != Sc.indexOf(a)
    };
    var Xc = function(a, b, c) {
        this.m = c === Wc ? a : ""
    };
    Xc.prototype.toString = function() {
        return this.m.toString()
    }
    ;
    var Yc = function(a) {
        return a instanceof Xc && a.constructor === Xc ? a.m : "type_error:SafeHtml"
    }
      , Wc = {}
      , Zc = function(a) {
        var b = Lc()
          , c = b ? b.createHTML(a) : a;
        return new Xc(c,null,Wc)
    }
      , $c = new Xc(qa.trustedTypes && qa.trustedTypes.emptyHTML || "",0,Wc);
    var ad = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }(function() {
        var a = document.createElement("div")
          , b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        var c = a.firstChild.firstChild;
        a.innerHTML = Yc($c);
        return !c.parentElement
    })
      , bd = function(a, b) {
        if (ad())
            for (; a.lastChild; )
                a.removeChild(a.lastChild);
        a.innerHTML = Yc(b)
    };
    var G = window
      , H = document
      , cd = navigator
      , dd = H.currentScript && H.currentScript.src
      , ed = function(a, b) {
        var c = G[a];
        G[a] = void 0 === c ? b : c;
        return G[a]
    }
      , fd = function(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null,
            b())
        }
        )
    };
    Object.freeze({
        async: 1,
        nonce: 1,
        onerror: 1,
        onload: 1,
        src: 1,
        type: 1
    });
    var gd = function(a, b, c) {
        var d = H.createElement("script");
        d.type = "text/javascript";
        d.async = !0;
        var e, f = Lc(), h = f ? f.createScriptURL(a) : a;
        e = new Nc(h,Mc);
        d.src = e instanceof Nc && e.constructor === Nc ? e.m : "type_error:TrustedResourceUrl";
        var k = ta(d.ownerDocument && d.ownerDocument.defaultView);
        k && d.setAttribute("nonce", k);
        fd(d, b);
        c && (d.onerror = c);
        var l = ta();
        l && d.setAttribute("nonce", l);
        var n = H.getElementsByTagName("script")[0] || H.body || H.head;
        n.parentNode.insertBefore(d, n);
        return d
    }
      , hd = function() {
        if (dd) {
            var a = dd.toLowerCase();
            if (0 === a.indexOf("https://"))
                return 2;
            if (0 === a.indexOf("http://"))
                return 3
        }
        return 1
    }
      , id = function(a, b) {
        var c = H.createElement("iframe");
        c.height = "0";
        c.width = "0";
        c.style.display = "none";
        c.style.visibility = "hidden";
        var d = H.body && H.body.lastChild || H.body || H.head;
        d.parentNode.insertBefore(c, d);
        fd(c, b);
        void 0 !== a && (c.src = a);
        return c
    }
      , jd = function(a, b, c) {
        var d = new Image(1,1);
        d.onload = function() {
            d.onload = null;
            b && b()
        }
        ;
        d.onerror = function() {
            d.onerror = null;
            c && c()
        }
        ;
        d.src = a;
        return d
    }
      , kd = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
      , ld = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }
      , I = function(a) {
        G.setTimeout(a, 0)
    }
      , md = function(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }
      , nd = function(a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }
      , od = function(a) {
        var b = H.createElement("div")
          , c = Zc("A<div>" + a + "</div>");
        bd(b, c);
        b = b.lastChild;
        for (var d = []; b.firstChild; )
            d.push(b.removeChild(b.firstChild));
        return d
    }
      , pd = function(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++)
            d[b[e]] = !0;
        for (var f = a, h = 0; f && h <= c; h++) {
            if (d[String(f.tagName).toLowerCase()])
                return f;
            f = f.parentElement
        }
        return null
    }
      , qd = function(a) {
        cd.sendBeacon && cd.sendBeacon(a) || jd(a)
    }
      , rd = function(a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    };
    var sd = function() {
        var a = {};
        this.m = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.o = function() {
            a[1933] = !0
        }
    };
    sd.m = void 0;
    sd.o = function() {
        return sd.m ? sd.m : sd.m = new sd
    }
    ;
    var td = function(a) {
        var b;
        b = void 0 === b ? !1 : b;
        return sd.o().m(a, b)
    };
    var ud = [];
    function vd() {
        var a = ed("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: wd,
            update: xd,
            addListener: yd,
            notifyListeners: zd,
            active: !1,
            usedDefault: !1
        });
        return a.ics
    }
    function wd(a, b, c, d, e, f) {
        var h = vd();
        h.active = !0;
        h.usedDefault = !0;
        if (void 0 != b) {
            var k = h.entries
              , l = k[a] || {}
              , n = l.region
              , q = c && g(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || q === e || (q === d ? n !== e : !q && !n)) {
                var p = !!(f && 0 < f && void 0 === l.update)
                  , r = {
                    region: q,
                    initial: "granted" === b,
                    update: l.update,
                    quiet: p
                };
                if ("" !== d || !1 !== l.initial)
                    k[a] = r;
                p && G.setTimeout(function() {
                    k[a] === r && r.quiet && (r.quiet = !1,
                    Ad(a),
                    zd(),
                    ya("TAGGING", 2))
                }, f)
            }
        }
    }
    function xd(a, b) {
        var c = vd();
        c.active = !0;
        if (void 0 != b) {
            var d = Bd(a)
              , e = c.entries
              , f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var h = Bd(a);
            f.quiet ? (f.quiet = !1,
            Ad(a)) : h !== d && Ad(a)
        }
    }
    function yd(a, b) {
        ud.push({
            Ue: a,
            Tg: b
        })
    }
    function Ad(a) {
        for (var b = 0; b < ud.length; ++b) {
            var c = ud[b];
            Fa(c.Ue) && -1 !== c.Ue.indexOf(a) && (c.jf = !0)
        }
    }
    function zd(a) {
        for (var b = 0; b < ud.length; ++b) {
            var c = ud[b];
            if (c.jf) {
                c.jf = !1;
                try {
                    c.Tg({
                        Te: a
                    })
                } catch (d) {}
            }
        }
    }
    var Bd = function(a) {
        var b = vd().entries[a] || {};
        return void 0 !== b.update ? b.update : void 0 !== b.initial ? b.initial : void 0
    }
      , Cd = function(a) {
        return (vd().entries[a] || {}).initial
    }
      , Dd = function(a) {
        return !(vd().entries[a] || {}).quiet
    }
      , Ed = function() {
        return td(1933) ? vd().active : !1
    }
      , Fd = function() {
        return vd().usedDefault
    }
      , Gd = function(a, b) {
        vd().addListener(a, b)
    }
      , Hd = function(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!Dd(b[e]))
                    return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            Gd(b, function(e) {
                d || c() || (d = !0,
                a(e))
            })
        } else
            a({})
    }
      , Id = function(a, b) {
        if (!1 === Bd(b)) {
            var c = !1;
            Gd([b], function(d) {
                !c && Bd(b) && (a(d),
                c = !0)
            })
        }
    };
    function Jd(a) {
        for (var b = [], c = 0; c < Kd.length; c++) {
            var d = a(Kd[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Kd = [C.B, C.J]
      , Ld = function(a) {
        var b = a[C.Pd];
        b && D(40);
        var c = a[C.Qd];
        c && D(41);
        for (var d = Fa(b) ? b : [b], e = 0; e < d.length; ++e)
            for (var f in a)
                if (a.hasOwnProperty(f) && f !== C.Pd && f !== C.Qd)
                    if (-1 < Ga(Kd, f)) {
                        var h = f
                          , k = a[f]
                          , l = d[e];
                        vd().set(h, k, l, "TH", "TH-10", c)
                    } else {}
    }
      , Md = function(a, b) {
        for (var c in a)
            if (a.hasOwnProperty(c))
                if (-1 < Ga(Kd, c)) {
                    var d = c
                      , e = a[c];
                    vd().update(d, e)
                } else {}
        vd().notifyListeners(b)
    }
      , Nd = function(a) {
        var b = Bd(a);
        return void 0 != b ? b : !0
    }
      , Od = function() {
        return "G1" + Jd(Bd)
    }
      , Pd = function(a, b) {
        Hd(a, b)
    };
    var Rd = function(a) {
        return Qd ? H.querySelectorAll(a) : null
    }
      , Sd = function(a, b) {
        if (!Qd)
            return null;
        if (Element.prototype.closest)
            try {
                return a.closest(b)
            } catch (e) {
                return null
            }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector
          , d = a;
        if (!H.documentElement.contains(d))
            return null;
        do {
            try {
                if (c.call(d, b))
                    return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }
      , Td = !1;
    if (H.querySelectorAll)
        try {
            var Ud = H.querySelectorAll(":root");
            Ud && 1 == Ud.length && Ud[0] == H.documentElement && (Td = !0)
        } catch (a) {}
    var Qd = Td;
    var Vd = function(a) {
        if (H.hidden)
            return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !G.getComputedStyle)
            return !0;
        var c = G.getComputedStyle(a, null);
        if ("hidden" === c.visibility)
            return !0;
        for (var d = a, e = c; d; ) {
            if ("none" === e.display)
                return !0;
            var f = e.opacity
              , h = e.filter;
            if (h) {
                var k = h.indexOf("opacity(");
                0 <= k && (h = h.substring(k + 8, h.indexOf(")", k)),
                "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)),
                f = Math.min(h, f))
            }
            if (void 0 !== f && 0 >= f)
                return !0;
            (d = d.parentElement) && (e = G.getComputedStyle(d, null))
        }
        return !1
    };
    var ee = /:[0-9]+$/
      , fe = function(a, b, c) {
        for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].split("=");
            if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                var h = f.slice(1).join("=");
                return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
            }
        }
    }
      , ie = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b)
            a.protocol = ge(a.protocol) || ge(G.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : G.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || G.location.hostname).replace(ee, "").toLowerCase());
        return he(a, b, c, d, e)
    }
      , he = function(a, b, c, d, e) {
        var f, h = ge(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
        case "url_no_fragment":
            f = je(a);
            break;
        case "protocol":
            f = h;
            break;
        case "host":
            f = a.hostname.replace(ee, "").toLowerCase();
            if (c) {
                var k = /^www\d*\./.exec(f);
                k && k[0] && (f = f.substr(k[0].length))
            }
            break;
        case "port":
            f = String(Number(a.port) || ("http" == h ? 80 : "https" == h ? 443 : ""));
            break;
        case "path":
            a.pathname || a.hostname || ya("TAGGING", 1);
            f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
            var l = f.split("/");
            0 <= Ga(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
            f = l.join("/");
            break;
        case "query":
            f = a.search.replace("?", "");
            e && (f = fe(f, e, void 0));

            break;
        case "extension":
            var n = a.pathname.split(".");
            f = 1 < n.length ? n[n.length - 1] : "";
            f = f.split("/")[0];
            break;
        case "fragment":
            f = a.hash.replace("#", "");
            break;
        default:
            f = a && a.href
        }
        return f
    }
      , ge = function(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }
      , je = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }
      , ke = function(a) {
        var b = H.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || ya("TAGGING", 1),
        c = "/" + c);
        var d = b.hostname.replace(ee, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    }
      , le = function(a) {
        function b(n) {
            var q = n.split("=")[0];
            return 0 > d.indexOf(q) ? n : q + "=0"
        }
        function c(n) {
            return n.split("&").map(b).filter(function(q) {
                return void 0 != q
            }).join("&")
        }
        var d = "gclid dclid gbraid gclaw gcldc gclha gclgf gclgb _gl".split(" ")
          , e = ke(a)
          , f = a.split(/[?#]/)[0]
          , h = e.search
          , k = e.hash;
        "?" === h[0] && (h = h.substring(1));
        "#" === k[0] && (k = k.substring(1));
        h = c(h);
        k = c(k);
        "" !== h && (h = "?" + h);
        "" !== k && (k = "#" + k);
        var l = "" + f + h + k;
        "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
        return l
    };
    var me = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)
      , ne = new RegExp(/support|noreply/i)
      , oe = ["SCRIPT", "IMG", "SVG", "PATH", "BR"]
      , pe = ["BR"];
    function qe(a) {
        var b;
        if (a === H.body)
            b = "body";
        else {
            var c;
            if (a.id)
                c = "#" + a.id;
            else {
                var d;
                if (a.parentElement) {
                    var e;
                    a: {
                        var f = a.parentElement;
                        if (f) {
                            for (var h = 0; h < f.childElementCount; h++)
                                if (f.children[h] === a) {
                                    e = h + 1;
                                    break a
                                }
                            e = -1
                        } else
                            e = 1
                    }
                    d = qe(a.parentElement) + ">:nth-child(" + e + ")"
                } else
                    d = "";
                c = d
            }
            b = c
        }
        return b
    }
    function re(a, b) {
        if (1 >= a.length)
            return a;
        var c = a.filter(b);
        return 0 == c.length ? a : c
    }
    function se(a) {
        if (0 == a.length)
            return null;
        var b;
        b = re(a, function(c) {
            return !ne.test(c.Jc)
        });
        b = re(b, function(c) {
            return "INPUT" === c.element.tagName.toUpperCase()
        });
        b = re(b, function(c) {
            return !Vd(c.element)
        });
        return b[0]
    }
    function te() {
        var a;
        var b = []
          , c = H.body;
        if (c) {
            for (var d = c.querySelectorAll("*"), e = 0; e < d.length && 1E4 > e; e++) {
                var f = d[e];
                if (!(0 <= oe.indexOf(f.tagName.toUpperCase()))) {
                    for (var h = !1, k = 0; k < f.childElementCount && 1E4 > k; k++)
                        if (!(0 <= pe.indexOf(f.children[k].tagName.toUpperCase()))) {
                            h = !0;
                            break
                        }
                    h || b.push(f)
                }
            }
            a = {
                elements: b,
                status: 1E4 < d.length ? "2" : "1"
            }
        } else
            a = {
                elements: b,
                status: "4"
            };
        for (var l = a, n = l.elements, q = [], p = 0; p < n.length; p++) {
            var r = n[p]
              , u = r.textContent;
            r.value && (u = r.value);
            if (u) {
                var t = u.match(me);
                if (t) {
                    var v = t[0], x;
                    if (G.location) {
                        var A = he(G.location, "host", !0);
                        x = 0 <= v.toLowerCase().indexOf(A)
                    } else
                        x = !1;
                    x || q.push({
                        element: r,
                        Jc: v
                    })
                }
            }
        }
        var w = se(q)
          , y = [];
        if (w) {
            var z = w.element;
            y.push({
                Jc: w.Jc,
                querySelector: qe(z),
                tagName: z.tagName,
                isVisible: !Vd(z),
                type: 1,
                df: !0
            })
        }
        return {
            elements: y,
            status: 10 < q.length ? "3" : l.status
        }
    }
    var He = {}
      , L = null
      , Ie = Math.random();
    He.D = "UA-46828308-37";
    He.kc = "3a0";
    He.Gh = "c";
    He.Cf = "ChAI8JfRggYQ8piJv7n8wdBwEicAuj9nzURVtrChLTY4Jt9W3PC0w65a7omxRVDTkpKbqL5Yt/+c2SwaAl2+";
    var Je = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0
    }, Ke = {
        __paused: !0,
        __tg: !0
    }, Le;
    for (Le in Je)
        Je.hasOwnProperty(Le) && (Ke[Le] = !0);
    var Me = "www.googletagmanager.com/gtm.js";
    Me = "www.googletagmanager.com/gtag/js";
    var Ne = Me
      , Oe = Qa("")
      , Pe = null
      , Qe = null
      , Re = "//www.googletagmanager.com/a?id=" + He.D + "&cv=1"
      , Se = {}
      , Te = {}
      , Ue = function() {
        var a = L.sequence || 1;
        L.sequence = a + 1;
        return a
    };
    He.Bf = "";
    var Ve = {}
      , We = new Ka
      , Xe = {}
      , Ye = {}
      , af = {
        name: "dataLayer",
        set: function(a, b) {
            m(gb(a, b), Xe);
            Ze()
        },
        get: function(a) {
            return $e(a, 2)
        },
        reset: function() {
            We = new Ka;
            Xe = {};
            Ze()
        }
    }
      , $e = function(a, b) {
        return 2 != b ? We.get(a) : bf(a)
    }
      , bf = function(a) {
        var b, c = a.split(".");
        b = b || [];
        for (var d = Xe, e = 0; e < c.length; e++) {
            if (null === d)
                return !1;
            if (void 0 === d)
                break;
            d = d[c[e]];
            if (-1 !== Ga(b, d))
                return
        }
        return d
    }
      , cf = function(a, b) {
        Ye.hasOwnProperty(a) || (We.set(a, b),
        m(gb(a, b), Xe),
        Ze())
    }
      , Ze = function(a) {
        Ma(Ye, function(b, c) {
            We.set(b, c);
            m(gb(b, void 0), Xe);
            m(gb(b, c), Xe);
            a && delete Ye[b]
        })
    }
      , df = function(a, b, c) {
        Ve[a] = Ve[a] || {};
        var d = 1 !== c ? bf(b) : We.get(b);
        "array" === jb(d) || "object" === jb(d) ? Ve[a][b] = m(d) : Ve[a][b] = d
    }
      , ef = function(a, b) {
        if (Ve[a])
            return Ve[a][b]
    }
      , ff = function(a, b) {
        Ve[a] && delete Ve[a][b]
    };
    var jf = {}
      , kf = function(a, b) {
        if (G._gtmexpgrp && G._gtmexpgrp.hasOwnProperty(a))
            return G._gtmexpgrp[a];
        void 0 === jf[a] && (jf[a] = Math.floor(Math.random() * b));
        return jf[a]
    };
    var lf = function(a) {
        var b = 1, c, d, e;
        if (a)
            for (b = 0,
            d = a.length - 1; 0 <= d; d--)
                e = a.charCodeAt(d),
                b = (b << 6 & 268435455) + e + (e << 14),
                c = b & 266338304,
                b = 0 != c ? b ^ c >> 21 : b;
        return b
    };
    function mf(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var h = e[f].split("=")
              , k = h[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    }
    ;var of = function(a, b, c, d) {
        return nf(d) ? mf(a, String(b || document.cookie), c) : []
    }
      , uf = function(a, b, c, d, e) {
        if (nf(e)) {
            var f = pf(a, d, e);
            if (1 === f.length)
                return f[0].id;
            if (0 !== f.length) {
                f = tf(f, function(h) {
                    return h.uc
                }, b);
                if (1 === f.length)
                    return f[0].id;
                f = tf(f, function(h) {
                    return h.Nb
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };
    function vf(a, b, c, d) {
        var e = document.cookie;
        document.cookie = a;
        var f = document.cookie;
        return e != f || void 0 != c && 0 <= of(b, f, !1, d).indexOf(c)
    }
    var zf = function(a, b, c) {
        function d(u, t, v) {
            if (null == v)
                return delete h[t],
                u;
            h[t] = v;
            return u + "; " + t + "=" + v
        }
        function e(u, t) {
            if (null == t)
                return delete h[t],
                u;
            h[t] = !0;
            return u + "; " + t
        }
        if (!nf(c.xa))
            return 2;
        var f;
        void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)),
        b = wf(b),
        f = a + "=" + b);
        var h = {};
        f = d(f, "path", c.path);
        var k;
        c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
        f = d(f, "expires", k);
        f = d(f, "max-age", c.Qh);
        f = d(f, "samesite", c.Rh);
        c.Sh && (f = e(f, "secure"));
        var l = c.domain;
        if ("auto" === l) {
            for (var n = xf(), q = 0; q < n.length; ++q) {
                var p = "none" !== n[q] ? n[q] : void 0
                  , r = d(f, "domain", p);
                r = e(r, c.flags);
                if (!yf(p, c.path) && vf(r, a, b, c.xa))
                    return 0
            }
            return 1
        }
        l && "none" !== l && (f = d(f, "domain", l));
        f = e(f, c.flags);
        return yf(l, c.path) ? 1 : vf(f, a, b, c.xa) ? 0 : 1
    }
      , Af = function(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return zf(a, b, c)
    };
    function tf(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var k = a[h]
              , l = b(k);
            l === c ? d.push(k) : void 0 === f || l < f ? (e = [k],
            f = l) : l === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }
    function pf(a, b, c) {
        for (var d = [], e = of(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var h = e[f].split(".")
              , k = h.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var l = h.shift();
                l && (l = l.split("-"),
                d.push({
                    id: h.join("."),
                    uc: 1 * l[0] || 1,
                    Nb: 1 * l[1] || 1
                }))
            }
        }
        return d
    }
    var wf = function(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
      , Bf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
      , Cf = /(^|\.)doubleclick\.net$/i
      , yf = function(a, b) {
        return Cf.test(document.location.hostname) || "/" === b && Bf.test(a)
    }
      , xf = function() {
        var a = []
          , b = document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c)
                return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--)
            a.push(b.slice(d).join("."));
        var e = document.location.hostname;
        Cf.test(e) || Bf.test(e) || a.push("none");
        return a
    }
      , nf = function(a) {
        if (!td(1933) || !a || !Ed())
            return !0;
        if (!Dd(a))
            return !1;
        var b = Bd(a);
        return null == b ? !0 : !!b
    };
    var Df = function() {
        for (var a = cd.userAgent + (H.cookie || "") + (H.referrer || ""), b = a.length, c = G.history.length; 0 < c; )
            a += c-- ^ b++;
        return [Math.round(2147483647 * Math.random()) ^ lf(a) & 2147483647, Math.round(Va() / 1E3)].join(".")
    }
      , Gf = function(a, b, c, d, e) {
        var f = Ef(b);
        return uf(a, f, Ff(c), d, e)
    }
      , Hf = function(a, b, c, d) {
        var e = "" + Ef(c)
          , f = Ff(d);
        1 < f && (e += "-" + f);
        return [b, e, a].join(".")
    }
      , Ef = function(a) {
        if (!a)
            return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }
      , Ff = function(a) {
        if (!a || "/" === a)
            return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    };
    function If(a, b, c) {
        var d, e = a.Mb;
        null == e && (e = 7776E3);
        0 !== e && (d = new Date((b || Va()) + 1E3 * e));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    }
    ;var Jf = ["1"]
      , Kf = {}
      , Nf = function(a) {
        var b = Lf(a.prefix)
          , c = Kf[b];
        c && Mf(b, c, a)
    }
      , Pf = function(a) {
        var b = Lf(a.prefix);
        if (!Kf[b] && !Of(b, a.path, a.domain)) {
            var c = Df();
            if (0 === Mf(b, c, a)) {
                var d = ed("google_tag_data", {});
                d._gcl_au ? ya("GTM", 57) : d._gcl_au = c
            }
            Of(b, a.path, a.domain)
        }
    };
    function Mf(a, b, c) {
        var d = Hf(b, "1", c.domain, c.path)
          , e = If(c);
        e.xa = "ad_storage";
        return Af(a, d, e)
    }
    function Of(a, b, c) {
        var d = Gf(a, b, c, Jf, "ad_storage");
        d && (Kf[a] = d);
        return d
    }
    function Lf(a) {
        return (a || "_gcl") + "_au"
    }
    ;function Qf() {
        for (var a = Rf, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b
    }
    function Sf() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Rf, Tf;
    function Uf(a) {
        function b(l) {
            for (; d < a.length; ) {
                var n = a.charAt(d++)
                  , q = Tf[n];
                if (null != q)
                    return q;
                if (!/^[\s\xa0]*$/.test(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return l
        }
        Rf = Rf || Sf();
        Tf = Tf || Qf();
        for (var c = "", d = 0; ; ) {
            var e = b(-1)
              , f = b(0)
              , h = b(64)
              , k = b(64);
            if (64 === k && -1 === e)
                return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2),
            64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
        }
    }
    ;var Vf;
    var Zf = function() {
        var a = Wf
          , b = Xf
          , c = Yf()
          , d = function(h) {
            a(h.target || h.srcElement || {})
        }
          , e = function(h) {
            b(h.target || h.srcElement || {})
        };
        if (!c.init) {
            kd(H, "mousedown", d);
            kd(H, "keyup", d);
            kd(H, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                b(this);
                f.call(this)
            }
            ;
            c.init = !0
        }
    }
      , $f = function(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: 2 === c,
            placement: c,
            forms: d,
            sameHost: e
        };
        Yf().decorators.push(f)
    }
      , ag = function(a, b, c) {
        for (var d = Yf().decorators, e = {}, f = 0; f < d.length; ++f) {
            var h = d[f], k;
            if (k = !c || h.forms)
                a: {
                    var l = h.domains
                      , n = a
                      , q = !!h.sameHost;
                    if (l && (q || n !== H.location.hostname))
                        for (var p = 0; p < l.length; p++)
                            if (l[p]instanceof RegExp) {
                                if (l[p].test(n)) {
                                    k = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(l[p]) || q && 0 <= l[p].indexOf(n)) {
                                k = !0;
                                break a
                            }
                    k = !1
                }
            if (k) {
                var r = h.placement;
                void 0 == r && (r = h.fragment ? 2 : 1);
                r === b && bb(e, h.callback())
            }
        }
        return e
    }
      , Yf = function() {
        var a = ed("google_tag_data", {})
          , b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        },
        a.gl = b);
        return b
    };
    var bg = /(.*?)\*(.*?)\*(.*)/
      , cg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/
      , dg = /^(?:www\.|m\.|amp\.)+/
      , eg = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function fg(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var hg = function(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                    b.push(c);
                    var e = b, f = e.push, h, k = String(d);
                    Rf = Rf || Sf();
                    Tf = Tf || Qf();
                    for (var l = [], n = 0; n < k.length; n += 3) {
                        var q = n + 1 < k.length
                          , p = n + 2 < k.length
                          , r = k.charCodeAt(n)
                          , u = q ? k.charCodeAt(n + 1) : 0
                          , t = p ? k.charCodeAt(n + 2) : 0
                          , v = r >> 2
                          , x = (r & 3) << 4 | u >> 4
                          , A = (u & 15) << 2 | t >> 6
                          , w = t & 63;
                        p || (w = 64,
                        q || (A = 64));
                        l.push(Rf[v], Rf[x], Rf[A], Rf[w])
                    }
                    h = l.join("");
                    f.call(e, h)
                }
            }
        var y = b.join("*");
        return ["1", gg(y), y].join("*")
    }
      , gg = function(a, b) {
        var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d;
        if (!(d = Vf)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var h = f, k = 0; 8 > k; k++)
                    h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                e[f] = h
            }
            d = e
        }
        Vf = d;
        for (var l = 4294967295, n = 0; n < c.length; n++)
            l = l >>> 8 ^ Vf[(l ^ c.charCodeAt(n)) & 255];
        return ((l ^ -1) >>> 0).toString(36)
    }
      , jg = function() {
        return function(a) {
            var b = ke(G.location.href)
              , c = b.search.replace("?", "")
              , d = fe(c, "_gl", !0) || "";
            a.query = ig(d) || {};
            var e = ie(b, "fragment").match(fg("_gl"));
            a.fragment = ig(e && e[3] || "") || {}
        }
    }
      , kg = function(a) {
        var b = jg()
          , c = Yf();
        c.data || (c.data = {
            query: {},
            fragment: {}
        },
        b(c.data));
        var d = {}
          , e = c.data;
        e && (bb(d, e.query),
        a && bb(d, e.fragment));
        return d
    }
      , ig = function(a) {
        var b;
        b = void 0 === b ? 3 : b;
        try {
            if (a) {
                var c;
                a: {
                    for (var d = a, e = 0; 3 > e; ++e) {
                        var f = bg.exec(d);
                        if (f) {
                            c = f;
                            break a
                        }
                        d = decodeURIComponent(d)
                    }
                    c = void 0
                }
                var h = c;
                if (h && "1" === h[1]) {
                    var k = h[3], l;
                    a: {
                        for (var n = h[2], q = 0; q < b; ++q)
                            if (n === gg(k, q)) {
                                l = !0;
                                break a
                            }
                        l = !1
                    }
                    if (l) {
                        for (var p = {}, r = k ? k.split("*") : [], u = 0; u < r.length; u += 2)
                            p[r[u]] = Uf(r[u + 1]);
                        return p
                    }
                }
            }
        } catch (t) {}
    };
    function lg(a, b, c, d) {
        function e(q) {
            var p = q
              , r = fg(a).exec(p)
              , u = p;
            if (r) {
                var t = r[2]
                  , v = r[4];
                u = r[1];
                v && (u = u + t + v)
            }
            q = u;
            var x = q.charAt(q.length - 1);
            q && "&" !== x && (q += "&");
            return q + n
        }
        d = void 0 === d ? !1 : d;
        var f = eg.exec(c);
        if (!f)
            return "";
        var h = f[1]
          , k = f[2] || ""
          , l = f[3] || ""
          , n = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : k = "?" + e(k.substring(1));
        return "" + h + k + l
    }
    function mg(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase()
          , d = ag(b, 1, c)
          , e = ag(b, 2, c)
          , f = ag(b, 3, c);
        if (cb(d)) {
            var h = hg(d);
            c ? ng("_gl", h, a) : og("_gl", h, a, !1)
        }
        if (!c && cb(e)) {
            var k = hg(e);
            og("_gl", k, a, !0)
        }
        for (var l in f)
            if (f.hasOwnProperty(l))
                a: {
                    var n = l
                      , q = f[l]
                      , p = a;
                    if (p.tagName) {
                        if ("a" === p.tagName.toLowerCase()) {
                            og(n, q, p, void 0);
                            break a
                        }
                        if ("form" === p.tagName.toLowerCase()) {
                            ng(n, q, p);
                            break a
                        }
                    }
                    "string" == typeof p && lg(n, q, p, void 0)
                }
    }
    function og(a, b, c, d) {
        if (c.href) {
            var e = lg(a, b, c.href, void 0 === d ? !1 : d);
            Rc.test(e) && (c.href = e)
        }
    }
    function ng(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
                    var k = e[h];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var l = H.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var n = lg(a, b, c.action);
                Rc.test(n) && (c.action = n)
            }
        }
    }
    var Wf = function(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || mg(e, e.hostname)
            }
        } catch (h) {}
    }
      , Xf = function(a) {
        try {
            if (a.action) {
                var b = ie(ke(a.action), "host");
                mg(a, b)
            }
        } catch (c) {}
    }
      , pg = function(a, b, c, d) {
        Zf();
        $f(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }
      , qg = function(a, b) {
        Zf();
        $f(a, [he(G.location, "host", !0)], b, !0, !0)
    }
      , rg = function() {
        var a = H.location.hostname
          , b = cg.exec(H.referrer);
        if (!b)
            return !1;
        var c = b[2]
          , d = b[1]
          , e = "";
        if (c) {
            var f = c.split("/")
              , h = f[1];
            e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
        } else if (d) {
            if (0 === d.indexOf("xn--"))
                return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var k = a.replace(dg, ""), l = e.replace(dg, ""), n;
        if (!(n = k === l)) {
            var q = "." + l;
            n = k.substring(k.length - q.length, k.length) === q
        }
        return n
    }
      , sg = function(a, b) {
        return !1 === a ? !1 : a || b || rg()
    };
    var tg = {};
    var ug = function() {
        for (var a = [], b = H.cookie.split(";"), c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, d = 0; d < b.length; d++) {
            var e = b[d].match(c);
            e && a.push({
                Ld: e[1],
                value: e[2],
                timestamp: Number(e[2].split(".")[1]) || 0
            })
        }
        a.sort(function(f, h) {
            return h.timestamp - f.timestamp
        });
        return a
    };
    function vg() {
        var a = ug()
          , b = {};
        if (!a || !a.length)
            return b;
        for (var c = 0; c < a.length; c++) {
            var d = a[c].value.split(".");
            "1" == d[0] && 3 === d.length && d[1] && (b[a[c].Ld] || (b[a[c].Ld] = []),
            b[a[c].Ld].push({
                timestamp: d[1],
                Ia: d[2]
            }))
        }
        return b
    }
    ;var wg = /^\w+$/
      , xg = /^[\w-]+$/
      , yg = /^~?[\w-]+$/
      , zg = {
        aw: "_aw",
        dc: "_dc",
        gf: "_gf",
        ha: "_ha",
        gp: "_gp",
        gb: "_gb"
    }
      , Ag = function() {
        if (!td(1933) || !Ed())
            return !0;
        var a = Bd("ad_storage");
        return null == a ? !0 : !!a
    }
      , Bg = function(a, b) {
        Dd("ad_storage") ? Ag() ? a() : Id(a, "ad_storage") : b ? ya("TAGGING", 3) : Hd(function() {
            Bg(a, !0)
        }, ["ad_storage"])
    }
      , Dg = function(a) {
        return Cg(a).map(function(b) {
            return b.Ia
        })
    }
      , Cg = function(a) {
        var b = [];
        if (!H.cookie)
            return b;
        var c = of(a, H.cookie, void 0, "ad_storage");
        if (!c || 0 == c.length)
            return b;
        for (var d = {}, e = 0; e < c.length; d = {
            kb: d.kb
        },
        e++) {
            d.kb = Eg(c[e]);
            var f = Fg(c[e]);
            if (d.kb && f) {
                var h = Ha(b, function(k) {
                    return function(l) {
                        return l.Ia === k.kb
                    }
                }(d));
                h && h.timestamp < f ? h.timestamp = f : h || b.push({
                    Ia: d.kb,
                    timestamp: f
                })
            }
        }
        b.sort(function(k, l) {
            return l.timestamp - k.timestamp
        });
        return Gg(b)
    };
    function Hg(a) {
        return a && "string" == typeof a && a.match(wg) ? a : "_gcl"
    }
    var Jg = function() {
        var a = ke(G.location.href)
          , b = ie(a, "query", !1, void 0, "gclid")
          , c = ie(a, "query", !1, void 0, "gclsrc")
          , d = ie(a, "query", !1, void 0, "gbraid")
          , e = ie(a, "query", !1, void 0, "dclid");
        if (!b || !c || !d) {
            var f = a.hash.replace("#", "");
            b = b || fe(f, "gclid", void 0);
            c = c || fe(f, "gclsrc", void 0);
            d = d || fe(f, "gbraid", void 0)
        }
        return Ig(b, c, e, d)
    }
      , Ig = function(a, b, c, d) {
        var e = {}
          , f = function(h, k) {
            e[k] || (e[k] = []);
            e[k].push(h)
        };
        e.gclid = a;
        e.gclsrc = b;
        e.dclid = c;
        void 0 !== d && xg.test(d) && (e.gbraid = d,
        f(d, "gb"));
        if (void 0 !== a && a.match(xg))
            switch (b) {
            case void 0:
                f(a, "aw");
                break;
            case "aw.ds":
                f(a, "aw");
                f(a, "dc");
                break;
            case "ds":
                f(a, "dc");
                break;
            case "3p.ds":
                f(a, "dc");
                break;
            case "gf":
                f(a, "gf");
                break;
            case "ha":
                f(a, "ha")
            }
        c && f(c, "dc");
        return e
    }
      , Kg = function(a, b) {
        switch (a) {
        case void 0:
        case "aw":
            return "aw" === b;
        case "aw.ds":
            return "aw" === b || "dc" === b;
        case "ds":
        case "3p.ds":
            return "dc" === b;
        case "gf":
            return "gf" === b;
        case "ha":
            return "ha" === b
        }
        return !1
    }
      , Mg = function(a) {
        var b = Jg();
        Bg(function() {
            Lg(b, a)
        })
    };
    function Lg(a, b, c, d) {
        function e(q, p) {
            var r = Ng(q, f);
            r && (Af(r, p, h),
            k = !0)
        }
        b = b || {};
        d = d || [];
        var f = Hg(b.prefix);
        c = c || Va();
        var h = If(b, c, !0);
        h.xa = "ad_storage";
        var k = !1
          , l = Math.round(c / 1E3)
          , n = function(q) {
            var p = ["GCL", l, q];
            0 < d.length && p.push(d.join("."));
            return p.join(".")
        };
        a.aw && (!0 === b.Uh ? e("aw", n("~" + a.aw[0])) : e("aw", n(a.aw[0])));
        a.dc && e("dc", n(a.dc[0]));
        a.gf && e("gf", n(a.gf[0]));
        a.ha && e("ha", n(a.ha[0]));
        a.gp && e("gp", n(a.gp[0]));
        (void 0 == tg.enable_gbraid_cookie_write ? 0 : tg.enable_gbraid_cookie_write) && !k && a.gb && e("gb", n(a.gb[0]))
    }
    var Og = function(a, b) {
        var c = kg(!0);
        Bg(function() {
            for (var d = Hg(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== zg[f]) {
                    var h = Ng(f, d)
                      , k = c[h];
                    if (k) {
                        var l = Math.min(Fg(k), Va()), n;
                        b: {
                            for (var q = l, p = of(h, H.cookie, void 0, "ad_storage"), r = 0; r < p.length; ++r)
                                if (Fg(p[r]) > q) {
                                    n = !0;
                                    break b
                                }
                            n = !1
                        }
                        if (!n) {
                            var u = If(b, l, !0);
                            u.xa = "ad_storage";
                            Af(h, k, u)
                        }
                    }
                }
            }
            Lg(Ig(c.gclid, c.gclsrc), b)
        })
    }
      , Ng = function(a, b) {
        var c = zg[a];
        if (void 0 !== c)
            return b + c
    }
      , Fg = function(a) {
        return Pg(a) ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    };
    function Eg(a) {
        if (Pg(a))
            return a.split(".")[2]
    }
    var Pg = function(a) {
        var b = a.split(".");
        return 3 > b.length || "GCL" !== b[0] || !/^\d+$/.test(b[1]) || !yg.test(b[2]) ? !1 : !0
    }
      , Qg = function(a, b, c, d, e) {
        if (Fa(b)) {
            var f = Hg(e)
              , h = function() {
                for (var k = {}, l = 0; l < a.length; ++l) {
                    var n = Ng(a[l], f);
                    if (n) {
                        var q = of(n, H.cookie, void 0, "ad_storage");
                        q.length && (k[n] = q.sort()[q.length - 1])
                    }
                }
                return k
            };
            Bg(function() {
                pg(h, b, c, d)
            })
        }
    }
      , Gg = function(a) {
        return a.filter(function(b) {
            return yg.test(b.Ia)
        })
    }
      , Rg = function(a, b) {
        for (var c = Hg(b.prefix), d = {}, e = 0; e < a.length; e++)
            zg[a[e]] && (d[a[e]] = zg[a[e]]);
        Bg(function() {
            Ma(d, function(f, h) {
                var k = of(c + h, H.cookie, void 0, "ad_storage");
                if (k.length) {
                    var l = k[0]
                      , n = Fg(l)
                      , q = Pg(l) ? l.split(".").slice(3) : []
                      , p = {};
                    p[f] = [Eg(l)];
                    Lg(p, b, n, q)
                }
            })
        })
    };
    function Sg(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]])
                return !0;
        return !1
    }
    var Tg = function() {
        function a(e, f, h) {
            h && (e[f] = h)
        }
        var b = ["aw", "dc"];
        if (Ed()) {
            var c = Jg();
            if (Sg(c, b)) {
                var d = {};
                a(d, "gclid", c.gclid);
                a(d, "dclid", c.dclid);
                a(d, "gclsrc", c.gclsrc);
                qg(function() {
                    return d
                }, 3);
                qg(function() {
                    var e = {};
                    return e._up = "1",
                    e
                }, 1)
            }
        }
    };
    var Ug = /^\d+\.fls\.doubleclick\.net$/
      , Vg = !1;
    function Wg(a, b) {
        Dd(C.B) ? Nd(C.B) ? a() : Id(a, C.B) : b ? D(42) : Pd(function() {
            Wg(a, !0)
        }, [C.B])
    }
    function Xg(a) {
        var b = ke(G.location.href)
          , c = ie(b, "host", !1);
        if (c && c.match(Ug)) {
            var d = ie(b, "path").split(a + "=");
            if (1 < d.length)
                return d[1].split(";")[0].split("?")[0]
        }
    }
    function Yg(a, b, c) {
        if ("aw" == a || "dc" == a) {
            var d = Xg("gcl" + a);
            if (d)
                return d.split(".")
        }
        var e = Hg(b);
        if ("_gcl" == e) {
            c = void 0 === c ? !0 : c;
            var f = !Nd(C.B) && c, h;
            h = Jg()[a] || [];
            if (0 < h.length)
                return f ? ["0"] : h
        }
        var k = Ng(a, e);
        return k ? Dg(k) : []
    }
    var Zg = function(a) {
        var b = Xg("gac");
        if (b)
            return !Nd(C.B) && a ? "0" : decodeURIComponent(b);
        var c = Ag() ? vg() : {}
          , d = [];
        Ma(c, function(e, f) {
            f = Gg(f);
            for (var h = [], k = 0; k < f.length; k++)
                h.push(f[k].Ia);
            h.length && d.push(e + ":" + h.join(","))
        });
        return d.join(";")
    }
      , ah = function(a, b) {
        if (Vg)
            $g(a, b, "dc");
        else {
            var c = Jg().dc || [];
            Wg(function() {
                Pf(b);
                var d = Kf[Lf(b.prefix)]
                  , e = !1;
                if (d && 0 < c.length) {
                    var f = L.joined_au = L.joined_au || {}
                      , h = b.prefix || "_gcl";
                    if (!f[h])
                        for (var k = 0; k < c.length; k++) {
                            var l = "https://adservice.google.com/ddm/regclk";
                            l = l + "?gclid=" + c[k] + "&auiddc=" + d;
                            qd(l);
                            e = f[h] = !0
                        }
                }
                null == a && (a = e);
                a && d && Nf(b)
            })
        }
    }
      , $g = function(a, b, c) {
        var d = Jg()
          , e = []
          , f = d.gclid
          , h = d.dclid
          , k = d.gclsrc || "aw";
        !f || "aw.ds" !== k && "aw" !== k && "ds" !== k || c && !Kg(k, c) || e.push({
            Ia: f,
            bf: k
        });
        !h || c && "dc" !== c || e.push({
            Ia: h,
            bf: "ds"
        });
        Wg(function() {
            Pf(b);
            var l = Kf[Lf(b.prefix)]
              , n = !1;
            if (l && 0 < e.length)
                for (var q = L.joined_auid = L.joined_auid || {}, p = 0; p < e.length; p++) {
                    var r = e[p]
                      , u = r.Ia
                      , t = r.bf
                      , v = (b.prefix || "_gcl") + "." + t + "." + u;
                    if (!q[v]) {
                        var x = "https://adservice.google.com/pagead/regclk";
                        x = x + "?gclid=" + u + "&auid=" + l + "&gclsrc=" + t;
                        qd(x);
                        n = q[v] = !0
                    }
                }
            null == a && (a = n);
            a && l && Nf(b)
        })
    };
    var bh = /[A-Z]+/
      , ch = /\s/
      , dh = function(a) {
        if (g(a) && (a = Ua(a),
        !ch.test(a))) {
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (bh.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                        if (!d[e])
                            return;
                    return {
                        id: a,
                        prefix: c,
                        containerId: c + "-" + d[0],
                        F: d
                    }
                }
            }
        }
    }
      , fh = function(a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = dh(a[c]);
            d && (b[d.id] = d)
        }
        eh(b);
        var e = [];
        Ma(b, function(f, h) {
            e.push(h)
        });
        return e
    };
    function eh(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.F[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e)
            delete a[b[e]]
    }
    ;var gh = function() {
        var a = !1;
        return a
    };
    var ih = function(a, b, c, d) {
        return (2 === hh() || d || "http:" != G.location.protocol ? a : b) + c
    }
      , hh = function() {
        var a = hd(), b;
        if (1 === a)
            a: {
                var c = Ne;
                c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, h = H.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
                    var l = h[k].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === l.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
        else
            b = a;
        return b
    };
    var kh = function(a, b, c) {
        if (G[a.functionName])
            return b.Ad && I(b.Ad),
            G[a.functionName];
        var d = jh();
        G[a.functionName] = d;
        if (a.nc)
            for (var e = 0; e < a.nc.length; e++)
                G[a.nc[e]] = G[a.nc[e]] || jh();
        a.xc && void 0 === G[a.xc] && (G[a.xc] = c);
        gd(ih("https://", "http://", a.Id), b.Ad, b.oh);
        return d
    }
      , jh = function() {
        var a = function() {
            a.q = a.q || [];
            a.q.push(arguments)
        };
        return a
    }
      , lh = {
        functionName: "_googWcmImpl",
        xc: "_googWcmAk",
        Id: "www.gstatic.com/wcm/loader.js"
    }
      , mh = {
        functionName: "_gaPhoneImpl",
        xc: "ga_wpid",
        Id: "www.gstatic.com/gaphone/loader.js"
    }
      , nh = {
        yf: "",
        wg: "5"
    }
      , oh = {
        functionName: "_googCallTrackingImpl",
        nc: [mh.functionName, lh.functionName],
        Id: "www.gstatic.com/call-tracking/call-tracking_" + (nh.yf || nh.wg) + ".js"
    }
      , ph = {}
      , qh = function(a, b, c, d) {
        D(22);
        if (c) {
            d = d || {};
            var e = kh(lh, d, a)
              , f = {
                ak: a,
                cl: b
            };
            void 0 === d.va && (f.autoreplace = c);
            e(2, d.va, f, c, 0, new Date, d.options)
        }
    }
      , rh = function(a, b, c, d) {
        D(21);
        if (b && c) {
            d = d || {};
            for (var e = {
                countryNameCode: c,
                destinationNumber: b,
                retrievalTime: new Date
            }, f = 0; f < a.length; f++) {
                var h = a[f];

                ph[h.id] || (h && "AW" === h.prefix && !e.adData && 2 <= h.F.length ? (e.adData = {
                    ak: h.F[0],
                    cl: h.F[1]
                },
                ph[h.id] = !0) : h && "UA" === h.prefix && !e.gaData && (e.gaData = {
                    gaWpid: h.containerId
                },
                ph[h.id] = !0))
            }
            (e.gaData || e.adData) && kh(oh, d)(d.va, e, d.options)
        }
    }
      , sh = function() {
        var a = !1;
        return a
    }
      , th = function(a, b) {
        if (a)
            if (gh()) {} else {
                if (g(a)) {
                    var c = dh(a);
                    if (!c)
                        return;
                    a = c
                }
                var d = void 0
                  , e = !1
                  , f = b.getWithConfig(C.dg);
                if (f && Fa(f)) {
                    d = [];
                    for (var h = 0; h < f.length; h++) {
                        var k = dh(f[h]);
                        k && (d.push(k),
                        (a.id === k.id || a.id === a.containerId && a.containerId === k.containerId) && (e = !0))
                    }
                }
                if (!d || e) {
                    var l = b.getWithConfig(C.we), n;
                    if (l) {
                        Fa(l) ? n = l : n = [l];
                        var q = b.getWithConfig(C.ue)
                          , p = b.getWithConfig(C.ve)
                          , r = b.getWithConfig(C.xe)
                          , u = b.getWithConfig(C.cg)
                          , t = q || p
                          , v = 1;
                        "UA" !== a.prefix || d || (v = 5);
                        for (var x = 0; x < n.length; x++)
                            if (x < v)
                                if (d)
                                    rh(d, n[x], u, {
                                        va: t,
                                        options: r
                                    });
                                else if ("AW" === a.prefix && a.F[1])
                                    sh() ? rh([a], n[x], u || "US", {
                                        va: t,
                                        options: r
                                    }) : qh(a.F[0], a.F[1], n[x], {
                                        va: t,
                                        options: r
                                    });
                                else if ("UA" === a.prefix)
                                    if (sh())
                                        rh([a], n[x], u || "US", {
                                            va: t
                                        });
                                    else {
                                        var A = a.containerId
                                          , w = n[x]
                                          , y = {
                                            va: t
                                        };
                                        D(23);
                                        if (w) {
                                            y = y || {};
                                            var z = kh(mh, y, A)
                                              , B = {};
                                            void 0 !== y.va ? B.receiver = y.va : B.replace = w;
                                            B.ga_wpid = A;
                                            B.destination = w;
                                            z(2, new Date, B)
                                        }
                                    }
                    }
                }
            }
    };
    var wh = function(a) {
        return Nd(C.B) ? a : a.replace(/&url=([^&#]+)/, function(b, c) {
            var d = le(decodeURIComponent(c));
            return "&url=" + encodeURIComponent(d)
        })
    }
      , xh = function() {
        var a;
        if (!(a = Oe)) {
            var b;
            if (!0 === G._gtmdgs)
                b = !0;
            else {
                var c = cd && cd.userAgent || "";
                b = 0 > c.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(c) || 11 > ((/Version\/([\d]+)/.exec(c) || [])[1] || "") ? !1 : !0
            }
            a = !b
        }
        if (a)
            return -1;
        var d = Oa("1");
        return kf(1, 100) < d ? kf(2, 2) : -1
    }
      , yh = function(a) {
        var b;
        if (!a || !a.length)
            return;
        for (var c = [], d = 0; d < a.length; ++d) {
            var e = a[d];
            e && e.estimated_delivery_date ? c.push("" + e.estimated_delivery_date) : c.push("")
        }
        b = c.join(",");
        return b
    };
    var zh = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/)
      , Ah = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }
      , Bh = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }
      , Ch = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Dh = function() {
        var a = !1;
        a = !0;
        return a
    }
      , Fh = function(a) {
        var b = $e("gtm.allowlist") || $e("gtm.whitelist");
        b && D(9);
        Dh() && (b = "google gtagfl lcl zone oid op".split(" "));
        var c = b && eb(Ta(b), Ah)
          , d = $e("gtm.blocklist") || $e("gtm.blacklist");
        d || (d = $e("tagTypeBlacklist")) && D(3);
        d ? D(8) : d = [];
        Eh() && (d = Ta(d),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        0 <= Ga(Ta(d), "google") && D(2);
        var e = d && eb(Ta(d), Bh)
          , f = {};
        return function(h) {
            var k = h && h[rb.Na];
            if (!k || "string" != typeof k)
                return !0;
            k = k.replace(/^_*/, "");
            if (void 0 !== f[k])
                return f[k];
            var l = Te[k] || []
              , n = a(k, l);
            if (b) {
                var q;
                if (q = n)
                    a: {
                        if (0 > Ga(c, k))
                            if (l && 0 < l.length)
                                for (var p = 0; p < l.length; p++) {
                                    if (0 > Ga(c, l[p])) {
                                        D(11);
                                        q = !1;
                                        break a
                                    }
                                }
                            else {
                                q = !1;
                                break a
                            }
                        q = !0
                    }
                n = q
            }
            var r = !1;
            if (d) {
                var u = 0 <= Ga(e, k);
                if (u)
                    r = u;
                else {
                    var t = La(e, l || []);
                    t && D(10);
                    r = t
                }
            }

            var v = !n || r;
            v || !(0 <= Ga(l, "sandboxedScripts")) || c && -1 !== Ga(c, "sandboxedScripts") || (v = La(e, Ch));
            return f[k] = v
        }
    }
      , Eh = function() {
        return zh.test(G.location && G.location.hostname)
    };
    var Gh = {
        active: !0,
        isAllowed: function() {
            return !0
        }
    }
      , Hh = function(a) {
        var b = L.zones;
        return b ? b.checkState(He.D, a) : Gh
    }
      , Ih = function(a) {
        var b = L.zones;
        !b && a && (b = L.zones = a());
        return b
    };
    var Jh = function() {}
      , Kh = function() {};
    var Lh = !1
      , Mh = 0
      , Nh = [];
    function Sh(a) {
        if (!Lh) {
            var b = H.createEventObject
              , c = "complete" == H.readyState
              , d = "interactive" == H.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Lh = !0;
                for (var e = 0; e < Nh.length; e++)
                    I(Nh[e])
            }
            Nh.push = function() {
                for (var f = 0; f < arguments.length; f++)
                    I(arguments[f]);
                return 0
            }
        }
    }
    function Th() {
        if (!Lh && 140 > Mh) {
            Mh++;
            try {
                H.documentElement.doScroll("left"),
                Sh()
            } catch (a) {
                G.setTimeout(Th, 50)
            }
        }
    }
    var Uh = function(a) {
        Lh ? a() : Nh.push(a)
    };
    var Wh = function(a, b) {
        this.m = !1;
        this.H = [];
        this.T = {
            tags: []
        };
        this.Y = !1;
        this.o = this.C = 0;
        Vh(this, a, b)
    }
      , Xh = function(a, b, c, d) {
        if (Ke.hasOwnProperty(b) || "__zone" === b)
            return -1;
        var e = {};
        mb(d) && (e = m(d, e));
        e.id = c;
        e.status = "timeout";
        return a.T.tags.push(e) - 1
    }
      , Yh = function(a, b, c, d) {
        var e = a.T.tags[b];
        e && (e.status = c,
        e.executionTime = d)
    }
      , Zh = function(a) {
        if (!a.m) {
            for (var b = a.H, c = 0; c < b.length; c++)
                b[c]();
            a.m = !0;
            a.H.length = 0
        }
    }
      , Vh = function(a, b, c) {
        Ca(b) && $h(a, b);
        c && G.setTimeout(function() {
            return Zh(a)
        }, Number(c))
    }
      , $h = function(a, b) {
        var c = Za(function() {
            return I(function() {
                b(He.D, a.T)
            })
        });
        a.m ? c() : a.H.push(c)
    }
      , ai = function(a) {
        a.C++;
        return Za(function() {
            a.o++;
            a.Y && a.o >= a.C && Zh(a)
        })
    };
    var bi = function() {
        function a(d) {
            return !Ea(d) || 0 > d ? 0 : d
        }
        if (!L._li && G.performance && G.performance.timing) {
            var b = G.performance.timing.navigationStart
              , c = Ea(af.get("gtm.start")) ? af.get("gtm.start") : 0;
            L._li = {
                cst: a(c - b),
                cbt: a(Qe - b)
            }
        }
    };
    var fi = {}
      , gi = function() {
        return G.GoogleAnalyticsObject && G[G.GoogleAnalyticsObject]
    }
      , hi = !1;
    var ii = function(a) {
        G.GoogleAnalyticsObject || (G.GoogleAnalyticsObject = a || "ga");
        var b = G.GoogleAnalyticsObject;
        if (G[b])
            G.hasOwnProperty(b) || D(12);
        else {
            var c = function() {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(new Date);
            G[b] = c
        }
        bi();
        return G[b]
    }
      , ji = function(a, b, c, d) {
        b = String(b).replace(/\s+/g, "").split(",");
        var e = gi();
        e(a + "require", "linker");
        e(a + "linker:autoLink", b, c, d)
    }
      , ki = function(a) {
        if (!Ed())
            return;
        var b = gi();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
    };
    var mi = function(a) {}
      , li = function() {
        return G.GoogleAnalyticsObject || "ga"
    }
      , ni = function(a, b) {
        return function() {
            var c = gi()
              , d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var h = f.get("hitPayload")
                      , k = f.get("hitCallback")
                      , l = 0 > h.indexOf("&tid=" + b);
                    l && (f.set("hitPayload", h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
                    f.set("hitCallback", void 0, !0));
                    e(f);
                    l && (f.set("hitPayload", h, !0),
                    f.set("hitCallback", k, !0),
                    f.set("_x_19", void 0, !0),
                    e(f))
                })
            }
        }
    };
    var si = function() {
        return "&tc=" + Vb.filter(function(a) {
            return a
        }).length
    }
      , vi = function() {
        2022 <= ti().length && ui()
    }
      , xi = function() {
        wi || (wi = G.setTimeout(ui, 500))
    }
      , ui = function() {
        wi && (G.clearTimeout(wi),
        wi = void 0);
        void 0 === yi || zi[yi] && !Ai && !Bi || (Ci[yi] || Di.eh() || 0 >= Ei-- ? (D(1),
        Ci[yi] = !0) : (Di.vh(),
        jd(ti()),
        zi[yi] = !0,
        Fi = Gi = Hi = Bi = Ai = ""))
    }
      , ti = function() {
        var a = yi;
        if (void 0 === a)
            return "";
        var b = za("GTM")
          , c = za("TAGGING");
        return [Ii, zi[a] ? "" : "&es=1", Ji[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", si(), Ai, Bi, Hi ? Hi : "", Gi, Fi, "&z=0"].join("")
    }
      , Ki = function() {
        return [Re, "&v=3&t=t", "&pid=" + Ia(), "&rv=" + He.kc].join("")
    }
      , Li = "0.005000" > Math.random()
      , Ii = Ki()
      , Mi = function() {
        Ii = Ki()
    }
      , zi = {}
      , Ai = ""
      , Bi = ""
      , Fi = ""
      , Gi = ""
      , Hi = ""
      , yi = void 0
      , Ji = {}
      , Ci = {}
      , wi = void 0
      , Di = function(a, b) {
        var c = 0
          , d = 0;
        return {
            eh: function() {
                if (c < a)
                    return !1;
                Va() - d >= b && (c = 0);
                return c >= a
            },
            vh: function() {
                Va() - d >= b && (c = 0);
                c++;
                d = Va()
            }
        }
    }(2, 1E3)
      , Ei = 1E3
      , Ni = function(a, b, c) {
        if (Li && !Ci[a] && b) {
            a !== yi && (ui(),
            yi = a);
            var d, e = String(b[rb.Na] || "").replace(/_/g, "");
            0 === e.indexOf("cvt") && (e = "cvt");
            d = e;
            var f = c + d;
            Ai = Ai ? Ai + "." + f : "&tr=" + f;
            var h = b["function"];
            if (!h)
                throw Error("Error: No function name given for function call.");
            var k = (Xb[h] ? "1" : "2") + d;
            Fi = Fi ? Fi + "." + k : "&ti=" + k;
            xi();
            vi()
        }
    }
      , Oi = function(a, b, c) {
        if (Li && !Ci[a]) {
            a !== yi && (ui(),
            yi = a);
            var d = c + b;
            Bi = Bi ? Bi + "." + d : "&epr=" + d;
            xi();
            vi()
        }
    }
      , Pi = function(a, b, c) {};
    function Qi(a, b, c, d) {
        var e = Vb[a]
          , f = Ri(a, b, c, d);
        if (!f)
            return null;
        var h = bc(e[rb.Ne], c, []);
        if (h && h.length) {
            var k = h[0];
            f = Qi(k.index, {
                onSuccess: f,
                onFailure: 1 === k.Ye ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }
    function Ri(a, b, c, d) {
        function e() {
            if (f[rb.qg])
                k();
            else {
                var x = cc(f, c, []);
                var y = Xh(c.Oa, String(f[rb.Na]), Number(f[rb.Oe]), x[rb.rg])
                  , z = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!z) {
                        z = !0;
                        var F = Va() - E;
                        Ni(c.id, Vb[a], "5");
                        Yh(c.Oa, y, "success", F);
                        h()
                    }
                }
                ;
                x.vtp_gtmOnFailure = function() {
                    if (!z) {
                        z = !0;
                        var F = Va() - E;
                        Ni(c.id, Vb[a], "6");
                        Yh(c.Oa, y, "failure", F);
                        k()
                    }
                }
                ;
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                Ni(c.id, f, "1");
                var B = function() {
                    var F = Va() - E;
                    Ni(c.id, f, "7");
                    Yh(c.Oa, y, "exception", F);
                    z || (z = !0,
                    k())
                };
                var E = Va();
                try {
                    ac(x, c)
                } catch (F) {
                    B(F)
                }
            }
        }
        var f = Vb[a]
          , h = b.onSuccess
          , k = b.onFailure
          , l = b.terminate;
        if (c.wd(f))
            return null;
        var n = bc(f[rb.Pe], c, []);
        if (n && n.length) {
            var q = n[0]
              , p = Qi(q.index, {
                onSuccess: h,
                onFailure: k,
                terminate: l
            }, c, d);
            if (!p)
                return null;
            h = p;
            k = 2 === q.Ye ? l : p
        }
        if (f[rb.Je] || f[rb.ug]) {
            var r = f[rb.Je] ? Wb : c.Ah
              , u = h
              , t = k;
            if (!r[a]) {
                e = Za(e);
                var v = Si(a, r, e);
                h = v.onSuccess;
                k = v.onFailure
            }
            return function() {
                r[a](u, t)
            }
        }
        return e
    }
    function Si(a, b, c) {
        var d = []
          , e = [];
        b[a] = Ti(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Ui;
                for (var f = 0; f < d.length; f++)
                    d[f]()
            },
            onFailure: function() {
                b[a] = Vi;
                for (var f = 0; f < e.length; f++)
                    e[f]()
            }
        }
    }
    function Ti(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }
    function Ui(a) {
        a()
    }
    function Vi(a, b) {
        b()
    }
    ;var Yi = function(a, b) {
        for (var c = [], d = 0; d < Vb.length; d++)
            if (a[d]) {
                var e = Vb[d];
                var f = ai(b.Oa);
                try {
                    var h = Qi(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (h) {
                        var k = c
                          , l = k.push
                          , n = d
                          , q = e["function"];
                        if (!q)
                            throw "Error: No function name given for function call.";
                        var p = Xb[q];
                        l.call(k, {
                            tf: n,
                            kf: p ? p.priorityOverride || 0 : 0,
                            Sg: h
                        })
                    } else
                        Wi(d, b),
                        f()
                } catch (t) {
                    f()
                }
            }
        var r = b.Oa;
        r.Y = !0;
        r.o >= r.C && Zh(r);
        c.sort(Xi);
        for (var u = 0; u < c.length; u++)
            c[u].Sg();
        return 0 < c.length
    };
    function Xi(a, b) {
        var c, d = b.kf, e = a.kf;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c)
            f = c;
        else {
            var h = a.tf
              , k = b.tf;
            f = h > k ? 1 : h < k ? -1 : 0
        }
        return f
    }
    function Wi(a, b) {
        if (!Li)
            return;
        var c = function(d) {
            var e = b.wd(Vb[d]) ? "3" : "4"
              , f = bc(Vb[d][rb.Ne], b, []);
            f && f.length && c(f[0].index);
            Ni(b.id, Vb[d], e);
            var h = bc(Vb[d][rb.Pe], b, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }
    var Zi = !1
      , dj = function(a) {
        var b = a["gtm.uniqueEventId"]
          , c = a.event;
        if ("gtm.js" === c) {
            if (Zi)
                return !1;
            Zi = !0
        }
        var d = Hh(b)
          , e = !1;
        if (!d.active) {
            if ("gtm.js" !== c)
                return !1;
            e = !0;
            d = Hh(Number.MAX_SAFE_INTEGER)
        }
        Li && !Ci[b] && yi !== b && (ui(),
        yi = b,
        Fi = Ai = "",
        Ji[b] = "&e=" + (0 === c.indexOf("gtm.") ? encodeURIComponent(c) : "*") + "&eid=" + b,
        xi());
        var f = a.eventCallback
          , h = a.eventTimeout
          , k = {
            id: b,
            name: c,
            wd: Fh(d.isAllowed),
            Ah: [],
            ef: function() {
                D(6)
            },
            Se: $i(b),
            Oa: new Wh(f,h)
        };
        aj(b, k.Oa);
        var l = jc(k);
        e && (l = bj(l));
        var n = Yi(l, k);
        "gtm.js" !== c && "gtm.sync" !== c || mi(He.D);
        switch (c) {
        case "gtm.init":
            n && D(20)
        }
        return cj(l, n)
    };
    function $i(a) {
        return function(b) {
            Li && (qb(b) || Pi(a, "input", b))
        }
    }
    function aj(a, b) {
        df(a, "event", 1);
        df(a, "ecommerce", 1);
        df(a, "gtm");
        df(a, "eventModel");
    }
    function bj(a) {
        for (var b = [], c = 0; c < a.length; c++)
            a[c] && Je[String(Vb[c][rb.Na])] && (b[c] = !0);
        return b
    }
    function cj(a, b) {
        if (!b)
            return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Vb[c] && !Ke[String(Vb[c][rb.Na])])
                return !0;
        return !1
    }
    function ej(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return ke("" + c + b).href
        }
    }
    function fj(a, b) {
        return gj() ? ej(a, b) : void 0
    }
    function gj() {
        var a = !1;
        return a
    }
    ;var hj = function() {
        this.eventModel = {};
        this.targetConfig = {};
        this.containerConfig = {};
        this.remoteConfig = {};
        this.globalConfig = {};
        this.onSuccess = function() {}
        ;
        this.onFailure = function() {}
        ;
        this.setContainerTypeLoaded = function() {}
        ;
        this.getContainerTypeLoaded = function() {}
        ;
        this.eventId = void 0
    }
      , ij = function(a) {
        var b = new hj;
        b.eventModel = a;
        return b
    }
      , jj = function(a, b) {
        a.targetConfig = b;
        return a
    }
      , kj = function(a, b) {
        a.containerConfig = b;
        return a
    }
      , lj = function(a, b) {
        a.remoteConfig = b;
        return a
    }
      , mj = function(a, b) {
        a.globalConfig = b;
        return a
    }
      , nj = function(a, b) {
        a.onSuccess = b;
        return a
    }
      , oj = function(a, b) {
        a.setContainerTypeLoaded = b;
        return a
    }
      , pj = function(a, b) {
        a.getContainerTypeLoaded = b;
        return a
    }
      , qj = function(a, b) {
        a.onFailure = b;
        return a
    };
    hj.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a])
            return this.eventModel[a];
        if (void 0 !== this.targetConfig[a])
            return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a])
            return this.containerConfig[a];
        if (void 0 !== this.remoteConfig[a])
            return this.remoteConfig[a];
        if (void 0 !== this.globalConfig[a])
            return this.globalConfig[a]
    }
    ;
    var rj = function(a) {
        function b(e) {
            Ma(e, function(f) {
                c[f] = null
            })
        }
        var c = {};
        b(a.eventModel);
        b(a.targetConfig);
        b(a.containerConfig);
        b(a.globalConfig);
        var d = [];
        Ma(c, function(e) {
            d.push(e)
        });
        return d
    };
    var sj;
    if (3 === He.kc.length)
        sj = "g";
    else {
        var tj = "G";
        tj = "g";
        sj = tj
    }
    var uj = {
        "": "n",
        UA: "u",
        AW: "a",
        DC: "d",
        G: "e",
        GF: "f",
        HA: "h",
        GTM: sj,
        OPT: "o"
    }
      , vj = function(a) {
        var b = He.D.split("-"), c = b[0].toUpperCase(), d = uj[c] || "i", e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", f;
        if (3 === He.kc.length) {
            var h = "w";
            h = gh() ? "s" : "o";
            f = "2" + h
        } else
            f = "";
        return f + d + He.kc + e
    };
    var wj = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };
    var xj = function() {
        return Vc("iPhone") && !Vc("iPod") && !Vc("iPad")
    };
    Vc("Opera");
    Vc("Trident") || Vc("MSIE");
    Vc("Edge");
    !Vc("Gecko") || -1 != Sc.toLowerCase().indexOf("webkit") && !Vc("Edge") || Vc("Trident") || Vc("MSIE") || Vc("Edge");
    -1 != Sc.toLowerCase().indexOf("webkit") && !Vc("Edge") && Vc("Mobile");
    Vc("Macintosh");
    Vc("Windows");
    Vc("Linux") || Vc("CrOS");
    var yj = qa.navigator || null;
    yj && (yj.appVersion || "").indexOf("X11");
    Vc("Android");
    xj();
    Vc("iPad");
    Vc("iPod");
    xj() || Vc("iPad") || Vc("iPod");
    Sc.toLowerCase().indexOf("kaios");
    var zj = function(a, b) {
        for (var c = a, d = 0; 50 > d; ++d) {
            var e;
            try {
                e = !(!c.frames || !c.frames[b])
            } catch (k) {
                e = !1
            }
            if (e)
                return c;
            var f;
            a: {
                try {
                    var h = c.parent;
                    if (h && h != c) {
                        f = h;
                        break a
                    }
                } catch (k) {}
                f = null
            }
            if (!(c = f))
                break
        }
        return null
    };
    var Aj = function() {};
    var Bj = function(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , Cj = function(a, b) {
        this.o = a;
        this.m = null;
        this.H = {};
        this.Y = 0;
        this.T = void 0 === b ? 500 : b;
        this.C = null
    };
    pa(Cj, Aj);
    var Ej = function(a) {
        return "function" === typeof a.o.__tcfapi || null != Dj(a)
    };
    Cj.prototype.addEventListener = function(a) {
        var b = {}
          , c = Jc(function() {
            return a(b)
        })
          , d = 0;
        -1 !== this.T && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.T));
        var e = function(f, h) {
            clearTimeout(d);
            f ? (b = f,
            b.internalErrorState = Bj(b),
            h && 0 === b.internalErrorState || (b.tcString = "tcunavailable",
            h || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable",
            b.internalErrorState = 3);
            a(b)
        };
        try {
            Fj(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable",
            b.internalErrorState = 3,
            d && (clearTimeout(d),
            d = 0),
            c()
        }
    }
    ;
    Cj.prototype.removeEventListener = function(a) {
        a && a.listenerId && Fj(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var Hj = function(a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var h = e;
        if (0 === h)
            return !1;
        var k = c;
        2 === c ? (k = 0,
        2 === h && (k = 1)) : 3 === c && (k = 1,
        1 === h && (k = 0));
        var l;
        if (0 === k)
            if (a.purpose && a.vendor) {
                var n = Gj(a.vendor.consents, void 0 === d ? "755" : d);
                l = n && "1" === b && a.purposeOneTreatment && ("DE" === a.publisherCC || td(1936) && "CH" === a.publisherCC) ? !0 : n && Gj(a.purpose.consents, b)
            } else
                l = !0;
        else
            l = 1 === k ? a.purpose && a.vendor ? Gj(a.purpose.legitimateInterests, b) && Gj(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return l
    }
      , Gj = function(a, b) {
        return !(!a || !a[b])
    }
      , Fj = function(a, b, c, d) {
        c || (c = function() {}
        );
        if ("function" === typeof a.o.__tcfapi) {
            var e = a.o.__tcfapi;
            e(b, 2, c, d)
        } else if (Dj(a)) {
            Ij(a);
            var f = ++a.Y;
            a.H[f] = c;
            if (a.m) {
                var h = {};
                a.m.postMessage((h.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: f,
                    parameter: d
                },
                h), "*")
            }
        } else
            c({}, !1)
    }
      , Dj = function(a) {
        if (a.m)
            return a.m;
        a.m = zj(a.o, "__tcfapiLocator");
        return a.m
    }
      , Ij = function(a) {
        a.C || (a.C = function(b) {
            try {
                var c;
                c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.H[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        wj(a.o, a.C))
    };
    var Jj = !0;
    var Kj = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };
    function Lj(a, b) {
        if ("" === a)
            return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }
    var Mj = Lj("", 550)
      , Nj = Lj("", 500);
    function Oj() {
        var a = L.tcf || {};
        return L.tcf = a
    }
    var Pj = function(a, b) {
        this.C = a;
        this.m = b;
        this.o = Va();
    }
      , Qj = function(a) {}
      , Rj = function(a) {}
      , Xj = function() {
        var a = Oj()
          , b = new Cj(G,Jj ? 3E3 : -1)
          , c = new Pj(b,a);
        if ((Sj() ? !0 === G.gtag_enable_tcf_support : !1 !== G.gtag_enable_tcf_support) && !a.active && ("function" === typeof G.__tcfapi || Ej(b))) {
            a.active = !0;
            a.Ob = {};
            Tj();
            var d = null;
            Jj ? d = G.setTimeout(function() {
                Uj(a);
                Vj(a);
                d = null
            }, Nj) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(e) {
                    d && (clearTimeout(d),
                    d = null);
                    if (0 !== e.internalErrorState)
                        Uj(a),
                        Vj(a),
                        Qj(c);
                    else {
                        var f;
                        a.gdprApplies = e.gdprApplies;
                        if (!1 === e.gdprApplies)
                            f = Wj(),
                            b.removeEventListener(e);
                        else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                            var h = {}, k;
                            for (k in Kj)
                                if (Kj.hasOwnProperty(k))
                                    if ("1" === k) {
                                        var l, n = e, q = !0;
                                        q = void 0 === q ? !1 : q;
                                        var p;
                                        var r = n;
                                        !1 === r.gdprApplies ? p = !0 : (void 0 === r.internalErrorState && (r.internalErrorState = Bj(r)),
                                        p = "error" === r.cmpStatus || 0 !== r.internalErrorState || "loaded" === r.cmpStatus && ("tcloaded" === r.eventStatus || "useractioncomplete" === r.eventStatus) ? !0 : !1);
                                        l = p ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !q || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Hj(n, "1", 0) : !1;
                                        h["1"] = l
                                    } else
                                        h[k] = Hj(e, k, Kj[k]);
                            f = h
                        }
                        f && (a.tcString = e.tcString || "tcempty",
                        a.Ob = f,
                        Vj(a),
                        Qj(c))
                    }
                }),
                Rj(c)
            } catch (e) {
                d && (clearTimeout(d),
                d = null),
                Uj(a),
                Vj(a)
            }
        }
    };
    function Uj(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        Jj && (a.Ob = Wj())
    }
    function Tj() {
        var a = {};
        Ld((a.ad_storage = "denied",
        a.wait_for_update = Mj,
        a))
    }
    var Sj = function() {
        var a = !1;
        a = !0;
        return a
    };
    function Wj() {
        var a = {}, b;
        for (b in Kj)
            Kj.hasOwnProperty(b) && (a[b] = !0);
        return a
    }
    function Vj(a) {
        var b = {};
        Md((b.ad_storage = a.Ob["1"] ? "granted" : "denied",
        b))
    }
    var Yj = function() {
        var a = Oj();
        if (a.active && void 0 !== a.loadTime)
            return Number(a.loadTime)
    }
      , Zj = function() {
        var a = Oj();
        return a.active ? a.tcString || "" : ""
    }
      , ak = function() {
        var a = Oj();
        return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
    }
      , bk = function(a) {
        if (!Kj.hasOwnProperty(String(a)))
            return !0;
        var b = Oj();
        return b.active && b.Ob ? !!b.Ob[String(a)] : !0
    };
    var ck = !1;
    function dk(a) {
        var b = String(G.location).split(/[?#]/)[0]
          , c = He.Cf || G._CONSENT_MODE_SALT;
        return a ? c ? String(lf(b + a + c)) : "0" : ""
    }
    function ek(a) {
        function b(t) {
            var v;
            L.reported_gclid || (L.reported_gclid = {});
            v = L.reported_gclid;
            var x;
            x = ck && h && (!Ed() || Nd(C.B)) ? l + "." + (f.prefix || "_gcl") + (t ? "gcu" : "gcs") : l + (t ? "gcu" : "gcs");
            if (!v[x]) {
                v[x] = !0;
                var A = []
                  , w = {}
                  , y = function(N, P) {
                    P && (A.push(N + "=" + encodeURIComponent(P)),
                    w[N] = !0)
                }
                  , z = "https://www.google.com";
                if (Ed()) {
                    var B = Nd(C.B);
                    y("gcs", Od());
                    t && y("gcu", "1");
                    L.dedupe_gclid || (L.dedupe_gclid = "" + Df());
                    y("rnd", L.dedupe_gclid);
                    if ((!l || n && "aw.ds" !== n) && Nd(C.B)) {
                        var E = Dg("_gcl_aw");
                        y("gclaw", E.join("."))
                    }
                    y("url", String(G.location).split(/[?#]/)[0]);
                    y("dclid", fk(d, q));
                    var F = !1;
                    F = !0;
                    B || !d && !F || (z = "https://pagead2.googlesyndication.com")
                }
                y("gdpr_consent", Zj()),
                y("gdpr", ak());
                "1" === kg(!1)._up && y("gtm_up", "1");
                y("gclid", fk(d, l));
                y("gclsrc", n);
                y("gtm", vj(!e));
                ck && h && Nd(C.B) && (Pf(f || {}),
                y("auid", Kf[Lf(f.prefix)] || ""));
                var M = z + "/pagead/landing?" + A.join("&");
                qd(M)
            }
        }
        var c = !!a.nd
          , d = !!a.la
          , e = a.R
          , f = void 0 === a.qc ? {} : a.qc
          , h = void 0 === a.yc ? !0 : a.yc
          , k = Jg()
          , l = k.gclid || ""
          , n = k.gclsrc
          , q = k.dclid || ""
          , p = k.gbraid || ""
          , r = !c && ((!l || n && "aw.ds" !== n ? !1 : !0) || p)
          , u = Ed();
        if (r || u)
            u ? Pd(function() {
                b();
                Nd(C.B) || Id(function(t) {
                    return b(!0, t.Te)
                }, C.B)
            }, [C.B]) : b()
    }
    function fk(a, b) {
        var c = a && !Nd(C.B);
        return b && c ? "0" : b
    }
    var gk = function(a) {
        var b = fj(a, "/pagead/conversion_async.js");
        if (b)
            return b;
        var c = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox")
          , d = ih("https://", "http://", "www.googleadservices.com");
        if (c || 1 === xh())
            d = "https://www.google.com";
        return d + "/pagead/conversion_async.js"
    }
      , hk = !1
      , ik = []
      , jk = ["aw", "dc"]
      , kk = function(a) {
        var b = G.google_trackConversion
          , c = a.gtm_onFailure;
        "function" == typeof b ? b(a) || c() : c()
    }
      , lk = function() {
        for (; 0 < ik.length; )
            kk(ik.shift())
    }
      , mk = function(a, b) {
        var c = !1;
        var d = hk;
        c && (d = b.getContainerTypeLoaded("AW"));
        if (!d) {
            hk = !0;
            bi();
            var e = function() {
                c && b.setContainerTypeLoaded("AW", !0);
                lk();
                ik = {
                    push: kk
                }
            };
            gh() ? e() : gd(a, e, function() {
                lk();
                hk = !1;
                c && b.setContainerTypeLoaded("AW", !1)
            })
        }
    }
      , nk = function(a) {
        if (a) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && b.push({
                    item_id: d.id,
                    quantity: d.quantity,
                    value: d.price,
                    start_date: d.start_date,
                    end_date: d.end_date
                })
            }
            return b
        }
    }
      , ok = function(a, b, c, d) {
        function e() {
            Da("gdpr_consent", Zj()),
            Da("gdpr", ak());
        }
        function f() {
            var ja = [];
            return ja
        }
        function h(ja) {
            var Aa = !0
              , Ja = [];
            if (ja) {
                Ja = f();
            }
            u && (Y("delopc", t(C.ad)),
            Y("oedeld", t(C.se)),
            Y("delc", t(C.he)),
            Y("shf", t(C.oe)),
            Y("iedeld", yh(t(C.V))));
            Aa && ik.push(Q)
        }
        function k() {
            return function(ja) {
                v && (ja = wh(ja));
                return ja
            }
        }
        function l() {}
        var n = dh(a)
          , q = b == C.Z;
        n.containerId !== He.D && D(61);
        var p = n.F[0]
          , r = n.F[1]
          , u = void 0 !== r
          , t = function(ja) {
            return d.getWithConfig(ja)
        }
          , v = void 0 != t(C.N) && !1 !== t(C.N)
          , x = !1 !== t(C.rb)
          , A = t(C.qb) || t(C.aa)
          , w = t(C.W)
          , y = t(C.ia)
          , z = t(C.qa)
          , B = t(C.Rf)
          , E = hb(mb(B) ? B : {})
          , F = t(C.Da)
          , J = gk(F);
        mk(J, d);
        var M = {
            prefix: A,
            domain: w,
            Mb: y,
            flags: z
        };
        if (q) {
            var N = t(C.ka) || {};
            if (x) {
                var P = t(C.sb)
                  , ka = void 0 === P ? !0 : !!P;
                sg(N[C.$a], !!N[C.I]) && Og(jk, M);
                Mg(M);
                Rg(["aw", "dc"], M);
            }
            t(C.Ea) && Tg();
            N[C.I] && Qg(jk, N[C.I], N[C.cb], !!N[C.ab], A);
            th(n, d);
            ek({
                nd: !1,
                la: v,
                R: a,
                eventId: d.eventId,
                qc: x ? M : void 0,
                yc: x,
                We: E
            })
        }
        if (b === C.oa) {
            var S = t(C.Ba)
              , K = t(C.Aa)
              , T = t(S);
            if (S === C.Vb && void 0 === T) {
                var U = Yg("aw", M.prefix, v);
                0 === U.length ? K(void 0) : 1 === U.length ? K(U[0]) : K(U)
            } else
                K(T)
        } else {
            var la = !1 === t(C.ae) || !1 === t(C.vb);
            if (!q || !u && !la)
                if (!0 === t(C.be) && (u = !1),
                !1 !== t(C.fa) || u) {
                    var Q = {
                        google_conversion_id: p,
                        google_remarketing_only: !u,
                        onload_callback: d.onSuccess,
                        gtm_onFailure: d.onFailure,
                        google_conversion_format: "3",
                        google_conversion_color: "ffffff",
                        google_conversion_domain: "",
                        google_conversion_label: r,
                        google_conversion_language: t(C.Za),
                        google_conversion_value: t(C.Fa),
                        google_conversion_currency: t(C.ja),
                        google_conversion_order_id: t(C.xb),
                        google_user_id: t(C.yb),
                        google_conversion_page_url: t(C.ub),
                        google_conversion_referrer_url: t(C.Ca),
                        google_gtm: vj()
                    };
                    Q.google_gtm_experiments = {
                        capi: !0
                    };
                    u && (Q.google_transport_url = ej(F, "/"));
                    Q.google_restricted_data_processing = t(C.Yc);
                    gh() && (Q.opt_image_generator = function() {
                        return new Image
                    }
                    ,
                    Q.google_enable_display_cookie_match = !1);
                    !1 === t(C.fa) && (Q.google_allow_ad_personalization_signals = !1);
                    Q.google_read_gcl_cookie_opt_out = !x;
                    x && A && (Q.google_gcl_cookie_prefix = A);
                    var xa = function() {
                        var ja = {
                            event: b
                        }
                          , Aa = d.eventModel;
                        if (!Aa)
                            return null;
                        m(Aa, ja);
                        for (var Ja in ja)
                            ja.hasOwnProperty(Ja) && C.xf[Ja.split(".")[0]] && delete ja[Ja];
                        return ja
                    }();
                    xa && (Q.google_custom_params = xa);
                    !u && t(C.V) && (Q.google_gtag_event_data = {
                        items: t(C.V)
                    });
                    if (u && b == C.na) {
                        Q.google_conversion_merchant_id = t(C.fe);
                        Q.google_basket_feed_country = t(C.de);
                        Q.google_basket_feed_language = t(C.ee);
                        Q.google_basket_discount = t(C.ce);
                        Q.google_basket_transaction_type = b;
                        Q.google_disable_merchant_reported_conversions = !0 === t(C.ke);
                        gh() && (Q.google_disable_merchant_reported_conversions = !0);
                        var na = nk(t(C.V));
                        na && (Q.google_conversion_items = na)
                    }
                    var Y = function(ja, Aa) {
                        void 0 != Aa && "" !== Aa && (Q.google_additional_conversion_params = Q.google_additional_conversion_params || {},
                        Q.google_additional_conversion_params[ja] = Aa)
                    }
                      , Da = function(ja, Aa) {
                        void 0 != Aa && "" !== Aa && (Q.google_additional_params = Q.google_additional_params || {},
                        Q.google_additional_params[ja] = Aa)
                    };
                    "1" === kg(!1)._up && Y("gtm_up", "1");
                    u && (Y("vdnc", t(C.te)),
                    Y("vdltv", t(C.ie)));
                    e();
                    var lb = xh();
                    0 === lb ? Da("dg", "c") : 1 === lb && Da("dg", "e");
                    Q.google_gtm_url_processor = k();
                    (function() {
                        Ed() ? Pd(function() {
                            e();
                            var ja = Nd(C.B);
                            if (u) {
                                Y("gcs", Od());
                                l();
                                var Aa = !1;
                                Aa = !0;
                                ja || F || !v && !Aa || (Q.google_transport_url = "https://pagead2.googlesyndication.com/");
                                h(ja)
                            } else if (ja) {
                                h(ja);
                                return
                            }
                            ja || Id(function(Ja) {
                                var Wa = Ja.Te;
                                Q = m(Q);
                                Q.google_gtm_url_processor = k(Wa);
                                !F && Q.google_transport_url && delete Q.google_transport_url;
                                e();
                                u && (Y("gcs", Od()),
                                l(),
                                Y("gcu", "1"));
                                h(!0)
                            }, C.B)
                        }, [C.B]) : h(!0)
                    }
                    )()
                }
        }
    };
    var pk = function(a) {
        return !(void 0 === a || null === a || 0 === (a + "").length)
    }
      , qk = function(a, b) {
        var c;
        if (2 === b.ca)
            return a("ord", Ia(1E11, 1E13)),
            !0;
        if (3 === b.ca)
            return a("ord", "1"),
            a("num", Ia(1E11, 1E13)),
            !0;
        if (4 === b.ca)
            return pk(b.sessionId) && a("ord", b.sessionId),
            !0;
        if (5 === b.ca)
            c = "1";
        else if (6 === b.ca)
            c = b.Gd;
        else
            return !1;
        pk(c) && a("qty", c);
        pk(b.sc) && a("cost", b.sc);
        pk(b.transactionId) && a("ord", b.transactionId);
        return !0
    }
      , sk = function(a, b, c) {
        function d(z, B, E) {
            r.hasOwnProperty(z) || (B = String(B),
            p.push(";" + z + "=" + (E ? B : rk(B))))
        }
        function e(z, B) {
            B && d(z, B)
        }
        var f = a.pd
          , h = a.Jd
          , k = a.protocol
          , l = a.td;
        k += h ? "//" + f + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
        var n = ";"
          , q = !1;
        q = !0;
        Nd(C.B) || l || !a.la && !q || (k = "https://ade.googlesyndication.com/ddm/activity",
        n = "/",
        h = !1);
        var p = [n, "src=" + rk(f), ";type=" + rk(a.sd), ";cat=" + rk(a.Eb)]
          , r = a.Ng || {};
        Ma(r, function(z, B) {
            p.push(";" + rk(z) + "=" + rk(B + ""))
        });
        if (qk(d, a)) {
            pk(a.Ic) && d("u", a.Ic);
            pk(a.Hc) && d("tran", a.Hc);
            d("gtm", vj());
            Ed() && !l && (d("gcs", Od()),
            c && d("gcu", "1"));
            e("gdpr_consent", Zj()),
            e("gdpr", ak());
            "1" === kg(!1)._up && d("gtm_up", "1");
            !1 === a.Bg && d("npa", "1");
            if (a.od) {
                var u = void 0 === a.la ? !0 : !!a.la
                  , t = Yg("dc", a.fb, u);
                t && t.length && d("gcldc", t.join("."));
                var v = Yg("aw", a.fb, u);
                v && v.length && d("gclaw", v.join("."));
                var x = Zg(u);
                x && d("gac", x);
                Pf({
                    prefix: a.fb,
                    Mb: a.Kg,
                    domain: a.Jg,
                    flags: a.Mh
                });
                var A = Kf[Lf(a.fb)];
                A && d("auiddc", A)
            }
            pk(a.Dd) && d("prd", a.Dd, !0);
            Ma(a.Nd, function(z, B) {
                d(z, B)
            });
            p.push(b || "");
            if (pk(a.zc)) {
                var w = a.zc || "";
                Nd(C.B) || l || !a.la || (w = le(w));
                d("~oref", w)
            }
            var y = k + p.join("") + "?";
            h ? id(y, a.onSuccess) : jd(y, a.onSuccess, a.onFailure)
        } else
            I(a.onFailure)
    }
      , rk = encodeURIComponent
      , tk = function(a, b) {
        !Ed() || a.td ? sk(a, b) : Pd(function() {
            sk(a, b);
            Nd(C.B) || Id(function() {
                sk(a, b, !0)
            }, C.B)
        }, [C.B])
    };
    var uk = function(a, b, c, d) {
        function e() {
            var f = {
                config: a,
                gtm: vj()
            };
            c && (Pf(d),
            f.auiddc = Kf[Lf(d.prefix)]);
            b && (f.loadInsecure = b);
            void 0 === G.__dc_ns_processor && (G.__dc_ns_processor = []);
            G.__dc_ns_processor.push(f);
            gd((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
        }
        Nd(C.B) ? e() : Id(e, C.B)
    }
      , vk = function(a) {
        var b = /^u([1-9]\d?|100)$/
          , c = a.getWithConfig(C.je) || {}
          , d = rj(a)
          , e = {}
          , f = {};
        if (mb(c))
            for (var h in c)
                if (c.hasOwnProperty(h) && b.test(h)) {
                    var k = c[h];
                    g(k) && (e[h] = k)
                }
        for (var l = 0; l < d.length; l++) {
            var n = d[l];
            b.test(n) && (e[n] = n)
        }
        for (var q in e)
            e.hasOwnProperty(q) && (f[q] = a.getWithConfig(e[q]));
        return f
    }
      , wk = function(a) {
        function b(l, n, q) {
            void 0 !== q && 0 !== (q + "").length && d.push(l + n + ":" + c(q + ""))
        }
        var c = encodeURIComponent
          , d = []
          , e = a(C.V) || [];
        if (Fa(e))
            for (var f = 0; f < e.length; f++) {
                var h = e[f]
                  , k = f + 1;
                b("i", k, h.id);
                b("p", k, h.price);
                b("q", k, h.quantity);
                b("c", k, a(C.he));
                b("l", k, a(C.Za))
            }
        return d.join("|")
    }
      , xk = function(a) {
        var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
        if (b) {
            var c = {
                standard: 2,
                unique: 3,
                per_session: 4,
                transactions: 5,
                items_sold: 6,
                "": 1
            }[(b[5] || "").toLowerCase()];
            if (c)
                return {
                    containerId: "DC-" + b[1],
                    R: b[3] ? a : "",
                    zg: b[1],
                    yg: b[3] || "",
                    Eb: b[4] || "",
                    ca: c
                }
        }
    }
      , Ak = function(a, b, c, d) {
        var e = xk(a);
        if (e) {
            e.containerId !== He.D && D(59);
            var f = function(K) {
                return d.getWithConfig(K)
            }
              , h = !1 !== f(C.rb)
              , k = f(C.qb) || f(C.aa)
              , l = f(C.W)
              , n = f(C.ia)
              , q = f(C.qa)
              , p = f(C.Tf)
              , r = void 0 != f(C.N) && !1 !== f(C.N)
              , u = 3 === hh();
            if (b === C.oa) {
                var t = f(C.Ba)
                  , v = f(C.Aa)
                  , x = f(t);
                if (t === C.Vb && void 0 === x) {
                    var A = Yg("dc", k, r);
                    0 === A.length ? v(void 0) : 1 === A.length ? v(A[0]) : v(A)
                } else
                    v(x)
            } else if (b === C.Z) {
                var w = {
                    prefix: k,
                    domain: l,
                    Mb: n,
                    flags: q
                }
                  , y = f(C.ka) || {}
                  , z = f(C.sb)
                  , B = void 0 === z ? !0 : !!z;
                h && (sg(y[C.$a], !!y[C.I]) && Og(yk, w),
                Mg(w),
                Rg(yk, w),
                zk ? $g(B, w) : ah(B, w));
                y[C.I] && Qg(yk, y[C.I], y[C.cb], !!y[C.ab], k);
                f(C.Ea) && Tg();
                if (p && p.exclusion_parameters && p.engines)
                    if (gh()) {} else
                        uk(p, u, h, w);
                ek({
                    nd: !0,
                    la: r,
                    R: a,
                    eventId: d.eventId,
                    qc: h ? w : void 0,
                    yc: h
                });
                I(d.onSuccess)
            } else {
                var E = {}
                  , F = f(C.Sf);
                if (mb(F))
                    for (var J in F)
                        if (F.hasOwnProperty(J)) {
                            var M = F[J];
                            void 0 !== M && null !== M && (E[J] = M)
                        }
                var N = "";
                if (5 === e.ca || 6 === e.ca)
                    N = wk(f);
                var P = vk(d)
                  , ka = !0 === f(C.Of);
                if (gh() && ka) {
                    ka = !1
                }
                var S = {
                    Eb: e.Eb,
                    od: h,
                    Jg: l,
                    Kg: n,
                    fb: k,
                    sc: f(C.Fa),
                    ca: e.ca,
                    Ng: E,
                    pd: e.zg,
                    sd: e.yg,
                    onFailure: d.onFailure,
                    onSuccess: d.onSuccess,
                    zc: je(ke(G.location.href)),
                    Dd: N,
                    protocol: u ? "http:" : "https:",
                    Gd: f(C.eg),
                    Jd: ka,
                    sessionId: f(C.bc),
                    Hc: void 0,
                    transactionId: f(C.xb),
                    Ic: void 0,
                    Nd: P,
                    Bg: !1 !== f(C.fa),
                    eventId: d.eventId,
                    la: r
                };
                tk(S)
            }
        } else
            I(d.onFailure)
    }
      , yk = ["aw", "dc"]
      , zk = !1;
    var Ck = function(a) {
        function b() {
            var d = c
              , e = Bk(JSON.stringify(a[d]))
              , f = "https://www.google.com/travel/flights/click/conversion/" + Bk(a.conversion_id) + "/?" + d + "=" + e;
            if (a.conversionLinkerEnabled) {
                var h = Yg("gf", a.cookiePrefix, void 0);
                if (h && h.length)
                    for (var k = 0; k < h.length; k++)
                        f += "&gclgf=" + Bk(h[k])
            }
            jd(f, a.onSuccess, a.onFailure)
        }
        var c;
        if (a.hasOwnProperty("conversion_data"))
            c = "conversion_data";
        else if (a.hasOwnProperty("price"))
            c = "price";
        else
            return;
        Nd(C.B) ? b() : Id(b, C.B)
    }
      , Bk = function(a) {
        return null === a || void 0 === a || 0 === String(a).length ? "" : encodeURIComponent(String(a))
    };
    var Dk = /.*\.google\.com(:\d+)?\/(?:booking|travel)\/flights.*/
      , Fk = function(a, b, c, d) {
        var e = function(F) {
            return d.getWithConfig(F)
        }
          , f = dh(a)
          , h = f.F[0];
        f.containerId !== He.D && D(62);
        var k = !1 !== e(C.rb)
          , l = e(C.qb) || e(C.aa)
          , n = e(C.W)
          , q = e(C.ia)
          , p = e(C.qa);
        if (b === C.oa) {
            var r = e(C.Ba)
              , u = e(C.Aa)
              , t = e(r);
            if (r === C.Vb && void 0 === t) {
                var v = void 0 != e(C.N) && !1 !== e(C.N)
                  , x = Yg("gf", l, v);
                0 === x.length ? u(void 0) : 1 === x.length ? u(x[0]) : u(x)
            } else
                u(t)
        } else if (b === C.Z) {
            if (k) {
                var A = {
                    prefix: l,
                    domain: n,
                    flags: p,
                    Mb: q
                };
                Mg(A);
                Rg(["aw", "dc"], A)
            }
            I(d.onSuccess)
        } else {
            var w = {
                conversion_id: h,
                onFailure: d.onFailure,
                onSuccess: d.onSuccess,
                conversionLinkerEnabled: k,
                cookiePrefix: l
            }
              , y = Dk.test(G.location.href);
            if (b === C.za) {
                var z = {
                    partner_id: h,
                    is_direct_booking: y,
                    total_price: e(C.Fa),
                    currency: e(C.ja)

                };
                w.price = z;
                Ck(w)
            } else if (b !== C.na)
                I(d.onFailure);
            else {
                var B = {
                    partner_id: h,
                    trip_type: e(C.jg),
                    total_price: e(C.Fa),
                    currency: e(C.ja),
                    is_direct_booking: y,
                    flight_segment: Ek(e(C.V))
                }
                  , E = e(C.bg);
                E && "object" === typeof E && (B.passengers_total = Oa(E.total),
                B.passengers_adult = Oa(E.adult),
                B.passengers_child = Oa(E.child),
                B.passengers_infant_in_seat = Oa(E.infant_in_seat),
                B.passengers_infant_in_lap = Oa(E.infant_in_lap));
                w.conversion_data = B;
                Ck(w)
            }
        }
    }
      , Ek = function(a) {
        if (a) {
            for (var b = [], c = 0, d = 0; d < a.length; ++d) {
                var e = a[d];
                !e || void 0 !== e.category && "" !== e.category && "FlightSegment" !== e.category || (b[c] = {
                    cabin: e.travel_class,
                    fare_product: e.fare_product,
                    booking_code: e.booking_code,
                    flight_number: e.flight_number,
                    origin: e.origin,
                    destination: e.destination,
                    departure_date: e.start_date
                },
                c++)
            }
            return b
        }
    };
    var Pk = function() {
        var a = !0;
        bk(7) && bk(9) && bk(10) || (a = !1);
        var b = !0;
        b = !1;
        b && !Ok() && (a = !1);
        return a
    }
      , Ok = function() {
        var a = !0;
        bk(3) && bk(4) || (a = !1);
        return a
    };
    var Tk = function(a, b) {
        var c = b.getWithConfig(C.Ba)
          , d = b.getWithConfig(C.Aa)
          , e = b.getWithConfig(c);
        if (void 0 === e) {
            var f = void 0;
            Qk.hasOwnProperty(c) ? f = Qk[c] : Rk.hasOwnProperty(c) && (f = Rk[c]);
            1 === f && (f = Sk(c));
            g(f) ? gi()(function() {
                var h = gi().getByName(a).get(f);
                d(h)
            }) : d(void 0)
        } else
            d(e)
    }, Wk = function(a, b, c) {
        if (Ed()) {
            var d = function() {
                var e = gi()
                  , f = Uk(a, b, "", c);
                Vk(b, f.Ga) && (e(function() {
                    e.remove(b)
                }),
                e("create", a, f.Ga))
            };
            Id(d, C.J);
            Id(d, C.B)
        }
    }, cl = function(a, b, c) {
        var d = "https://www.google-analytics.com/analytics.js"
          , e = ii();
        if (Ca(e)) {
            var f = "gtag_" + a.split("-").join("_")
              , h = function(w) {
                var y = [].slice.call(arguments, 0);
                y[0] = f + "." + y[0];
                e.apply(window, y)
            }
              , k = function() {
                var w = function(E, F) {
                    for (var J = 0; F && J < F.length; J++)
                        h(E, F[J])
                }
                  , y = Xk(b, c);
                if (y) {
                    var z = y.action;
                    if ("impressions" === z)
                        w("ec:addImpression", y.$g);
                    else if ("promo_click" === z || "promo_view" === z) {
                        var B = y.Fd;
                        w("ec:addPromo", y.Fd);
                        B && 0 < B.length && "promo_click" === z && h("ec:setAction", z)
                    } else
                        w("ec:addProduct", y.ib),
                        h("ec:setAction", z, y.Db)
                }
            }
              , l = function() {
                if (gh()) {} else {
                    var w = c.getWithConfig(C.ag);
                    w && (h("require", w, {
                        dataLayer: "dataLayer"
                    }),
                    h("require", "render"))
                }
            }
              , n = Uk(a, f, b, c)
              , q = function(w, y, z) {
                z && (y = "" + y);
                n.Ha[w] = y
            };
            Vk(f, n.Ga) && (e(function() {
                gi() && gi().remove(f)
            }),
            Yk[f] = !1);
            e("create", a, n.Ga);
            if (n.Ga._x_19) {
                var p = fj(n.Ga._x_19, "/analytics.js");
                p && (d = p);
                n.Ga._x_20 && !Yk[f] && (Yk[f] = !0,
                e(ni(f, n.Ga._x_20)))
            }
            (function() {
                var w = c.getWithConfig("custom_map");
                e(function() {
                    if (mb(w)) {
                        var y = n.Ha, z = gi().getByName(f), B;
                        for (B in w)
                            if (w.hasOwnProperty(B) && /^(dimension|metric)\d+$/.test(B) && void 0 != w[B]) {
                                var E = z.get(Sk(w[B]));
                                Zk(y, B, E)
                            }
                    }
                })
            }
            )();
            (function(w) {
                if (w) {
                    var y = {};
                    if (mb(w))
                        for (var z in $k)
                            $k.hasOwnProperty(z) && al($k[z], z, w[z], y);
                    h("require", "linkid", y)
                }
            }
            )(n.linkAttribution);
            var r = n[C.ka];
            if (r && r[C.I]) {
                var u = r[C.cb];
                ji(f + ".", r[C.I], void 0 === u ? !!r.use_anchor : "fragment" === u, !!r[C.ab])
            }
            b === C.Mc ? (l(),
            h("send", "pageview", n.Ha)) : b === C.Z ? (l(),
            th(a, c),
            c.getWithConfig(C.Ea) && (Tg(),
            ki(f + ".")),
            0 != n.sendPageView && h("send", "pageview", n.Ha),
            Wk(a, f, c)) : b === C.oa ? Tk(f, c) : "screen_view" === b ? h("send", "screenview", n.Ha) : "timing_complete" === b ? (q("timingCategory", n.eventCategory, !0),
            q("timingVar", n.name, !0),
            q("timingValue", Oa(n.value)),
            void 0 !== n.eventLabel && q("timingLabel", n.eventLabel, !0),
            h("send", "timing", n.Ha)) : "exception" === b ? h("send", "exception", n.Ha) : "optimize.callback" !== b && (0 <= Ga([C.Ub, "select_content", C.za, C.Va, C.Wa, C.Ka, "set_checkout_option", C.na, C.Xa, "view_promotion", "checkout_progress"], b) && (h("require", "ec", "ec.js"),
            k()),
            q("eventCategory", n.eventCategory, !0),
            q("eventAction", n.eventAction || b, !0),
            void 0 !== n.eventLabel && q("eventLabel", n.eventLabel, !0),
            void 0 !== n.value && q("eventValue", Oa(n.value)),
            h("send", "event", n.Ha));
            var t = !1;
            var v = bl;
            t && (v = c.getContainerTypeLoaded("UA"));
            if (!v) {
                bl = !0;
                t && c.setContainerTypeLoaded("UA", !0);
                bi();
                var x = function() {
                    t && c.setContainerTypeLoaded("UA", !1);
                    c.onFailure()
                }
                  , A = function() {
                    gi().loaded || x()
                };
                gh() ? I(A) : gd(d, A, x)
            }
        } else
            I(c.onFailure)
    }, dl = function(a, b, c, d) {
        Pd(function() {
            cl(a, b, d)
        }, [C.J, C.B])
    }, el = function(a) {
        return Nd(a)
    }, bl, Yk = {}, Qk = {
        client_id: 1,
        client_storage: "storage",
        cookie_name: 1,
        cookie_domain: 1,
        cookie_expires: 1,
        cookie_path: 1,
        cookie_update: 1,
        cookie_flags: 1,
        sample_rate: 1,
        site_speed_sample_rate: 1,
        use_amp_client_id: 1,
        store_gac: 1,
        conversion_linker: "storeGac"
    }, Rk = {
        anonymize_ip: 1,
        app_id: 1,
        app_installer_id: 1,
        app_name: 1,
        app_version: 1,
        campaign: {
            name: "campaignName",
            source: "campaignSource",
            medium: "campaignMedium",
            term: "campaignKeyword",
            content: "campaignContent",
            id: "campaignId"
        },
        currency: "currencyCode",
        description: "exDescription",
        fatal: "exFatal",
        language: 1,
        non_interaction: 1,
        page_hostname: "hostname",
        page_referrer: "referrer",
        page_path: "page",
        page_location: "location",
        page_title: "title",
        screen_name: 1,
        transport_type: "transport",
        user_id: 1
    }, fl = {
        content_id: 1,
        event_category: 1,
        event_action: 1,
        event_label: 1,
        link_attribution: 1,
        linker: 1,
        method: 1,
        name: 1,
        send_page_view: 1,
        value: 1
    }, $k = {
        cookie_name: 1,
        cookie_expires: "duration",
        levels: 1
    }, gl = {
        anonymize_ip: 1,
        fatal: 1,
        non_interaction: 1,
        use_amp_client_id: 1,
        send_page_view: 1,
        store_gac: 1,
        conversion_linker: 1
    }, al = function(a, b, c, d) {
        if (void 0 !== c)
            if (gl[b] && (c = Qa(c)),
            "anonymize_ip" !== b || c || (c = void 0),
            1 === a)
                d[Sk(b)] = c;
            else if (g(a))
                d[a] = c;
            else
                for (var e in a)
                    a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
    }, Sk = function(a) {
        return a && g(a) ? a.replace(/(_[a-z])/g, function(b) {
            return b[1].toUpperCase()
        }) : a
    }, hl = function(a) {
        var b = "general";
        0 <= Ga([C.Wd, C.Va, C.Zd, C.Ka, "checkout_progress", C.na, C.Xa, C.Wa, "set_checkout_option"], a) ? b = "ecommerce" : 0 <= Ga("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), a) ? b = "engagement" : "exception" === a && (b = "error");
        return b
    }, Zk = function(a, b, c) {
        a.hasOwnProperty(b) || (a[b] = c)
    }, il = function(a) {
        if (Fa(a)) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c];
                if (void 0 != d) {
                    var e = d.id
                      , f = d.variant;
                    void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                }
            }
            return 0 < b.length ? b.join("!") : void 0
        }
    }, Uk = function(a, b, c, d) {
        function e(F, J) {
            void 0 !== J && (k[F] = J)
        }
        a !== He.D && D(60);
        var f = function(F) {
            return d.getWithConfig(F)
        }
          , h = {}
          , k = {}
          , l = {}
          , n = il(f(C.Xf));
        n && Zk(k, "exp", n);
        Ed() && (l._cs = el);
        var q = f("custom_map");
        if (mb(q))
            for (var p in q)
                if (q.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != q[p]) {
                    var r = f(String(q[p]));
                    void 0 !== r && Zk(k, p, r)
                }
        for (var u = rj(d), t = 0; t < u.length; ++t) {
            var v = u[t]
              , x = f(v);
            if (fl.hasOwnProperty(v))
                al(fl[v], v, x, h);
            else if (Rk.hasOwnProperty(v))
                al(Rk[v], v, x, k);
            else if (Qk.hasOwnProperty(v))
                al(Qk[v], v, x, l);
            else if (/^(dimension|metric|content_group)\d+$/.test(v))
                al(1, v, x, k);
            else if ("developer_id" === v) {
                var A = hb(x);
                A && (k["&did"] = A)
            } else
                v === C.aa && 0 > Ga(u, C.Wb) && (l.cookieName = x + "_ga")
        }
        Zk(l, "cookieDomain", "auto");
        Zk(k, "forceSSL", !0);
        Zk(h, "eventCategory", hl(c));
        0 <= Ga(["view_item", "view_item_list", "view_promotion", "view_search_results"], c) && Zk(k, "nonInteraction", !0);
        "login" === c || "sign_up" === c || "share" === c ? Zk(h, "eventLabel", f(C.$f)) : "search" === c || "view_search_results" === c ? Zk(h, "eventLabel", f(C.hg)) : "select_content" === c && Zk(h, "eventLabel", f(C.Qf));
        var w = h[C.ka] || {}
          , y = w[C.$a];
        y || 0 != y && w[C.I] ? l.allowLinker = !0 : !1 === y && Zk(l, "useAmpClientId", !1);
        f(C.Ea) && (l._useUp = !0);
        !1 !== f(C.Pf) && !1 !== f(C.pb) && Pk() || (k.allowAdFeatures = !1);
        if (!1 === f(C.fa) || !Ok()) {
            var z = "allowAdFeatures";
            z = "allowAdPersonalizationSignals";
            k[z] = !1
        }
        l.name = b;
        k["&gtm"] = vj(!0);
        k.hitCallback = d.onSuccess;
        Ed() && (k["&gcs"] = Od(),
        Nd(C.J) || (l.storage = "none"),
        Nd(C.B) || (k.allowAdFeatures = !1,
        l.storeGac = !1));
        var B = f(C.Da) || f(C.Zf) || $e("gtag.remote_config." + a + ".url", 2)
          , E = f(C.Yf) || $e("gtag.remote_config." + a + ".dualId", 2);
        if (B && null != dd) {
            l._x_19 = B;
        }
        E && (l._x_20 = E);
        h.Ha = k;
        h.Ga = l;
        return h
    }, Xk = function(a, b) {
        function c(v) {
            function x(w, y) {
                for (var z = 0; z < y.length; z++) {
                    var B = y[z];
                    if (v[B]) {
                        A[w] = v[B];
                        break
                    }
                }
            }
            var A = m(v);
            x("listPosition", ["list_position"]);
            x("creative", ["creative_name"]);
            x("list", ["list_name"]);
            x("position", ["list_position", "creative_slot"]);
            return A
        }
        function d(v) {
            for (var x = [], A = 0; v && A < v.length; A++)
                v[A] && x.push(c(v[A]));
            return x.length ? x : void 0
        }
        function e(v) {
            return {
                id: f(C.xb),
                affiliation: f(C.Uf),
                revenue: f(C.Fa),
                tax: f(C.pe),
                shipping: f(C.oe),
                coupon: f(C.Vf),
                list: f(C.Pc) || v
            }
        }
        for (var f = function(v) {
            return b.getWithConfig(v)
        }, h = f(C.V), k, l = 0; h && l < h.length && !(k = h[l][C.Pc]); l++)
            ;
        var n = f("custom_map");
        if (mb(n))
            for (var q = 0; h && q < h.length; ++q) {
                var p = h[q], r;
                for (r in n)
                    n.hasOwnProperty(r) && /^(dimension|metric)\d+$/.test(r) && void 0 != n[r] && Zk(p, r, p[n[r]])
            }
        var u = null
          , t = f(C.Wf);
        a === C.na || a === C.Xa ? u = {
            action: a,
            Db: e(),
            ib: d(h)
        } : a === C.Va ? u = {
            action: "add",
            ib: d(h)
        } : a === C.Wa ? u = {
            action: "remove",
            ib: d(h)
        } : a === C.za ? u = {
            action: "detail",
            Db: e(k),
            ib: d(h)
        } : a === C.Ub ? u = {
            action: "impressions",
            $g: d(h)
        } : "view_promotion" === a ? u = {
            action: "promo_view",
            Fd: d(t)
        } : "select_content" === a && t && 0 < t.length ? u = {
            action: "promo_click",
            Fd: d(t)
        } : "select_content" === a ? u = {
            action: "click",
            Db: {
                list: f(C.Pc) || k
            },
            ib: d(h)
        } : a === C.Ka || "checkout_progress" === a ? u = {
            action: "checkout",
            ib: d(h),
            Db: {
                step: a === C.Ka ? 1 : f(C.ne),
                option: f(C.me)
            }
        } : "set_checkout_option" === a && (u = {
            action: "checkout_option",
            Db: {
                step: f(C.ne),
                option: f(C.me)
            }
        });
        u && (u.Nh = f(C.ja));
        return u
    }, jl = {}, Vk = function(a, b) {
        var c = jl[a];
        jl[a] = m(b);
        if (!c)
            return !1;
        for (var d in b)
            if (b.hasOwnProperty(d) && b[d] !== c[d])
                return !0;
        for (var e in c)
            if (c.hasOwnProperty(e) && c[e] !== b[e])
                return !0;
        return !1
    };
    var kl = !1;
    function ll() {
        var a = L;
        return a.gcq = a.gcq || new ml
    }
    var nl = function(a, b, c) {
        ll().register(a, b, c)
    }
      , ol = function(a, b, c, d) {
        ll().push("event", [b, a], c, d)
    }
      , pl = function(a, b) {
        ll().push("config", [a], b)
    }
      , ql = function(a, b, c, d) {
        ll().push("get", [a, b], c, d)
    }
      , rl = {}
      , sl = function() {
        this.status = 1;
        this.containerConfig = {};
        this.targetConfig = {};
        this.remoteConfig = {};
        this.o = null;
        this.m = !1
    }
      , tl = function(a, b, c, d, e) {
        this.type = a;
        this.C = b;
        this.R = c || "";
        this.m = d;
        this.o = e
    }
      , ml = function() {
        this.H = {};
        this.o = {};
        this.m = [];
        this.C = {
            AW: !1,
            UA: !1
        }
    }
      , ul = function(a, b) {
        var c = dh(b);
        return a.H[c.containerId] = a.H[c.containerId] || new sl
    }
      , vl = function(a, b, c) {
        if (b) {
            var d = dh(b);
            if (d && 1 === ul(a, b).status) {
                ul(a, b).status = 2;
                var e = {};
                Li && (e.timeoutId = G.setTimeout(function() {
                    D(38);
                    xi()
                }, 3E3));
                a.push("require", [e], d.containerId);
                rl[d.containerId] = Va();
                if (gh()) {} else {
                    var h = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=dataLayer&cx=c"
                      , k = ("http:" != G.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + h)
                      , l = fj(c, h) || k;
                    gd(l)
                }
            }
        }
    }
      , wl = function(a, b, c, d) {
        if (d.R) {
            var e = ul(a, d.R)
              , f = e.o;
            if (f) {
                var h = m(c)
                  , k = m(e.targetConfig[d.R])
                  , l = m(e.containerConfig)
                  , n = m(e.remoteConfig)
                  , q = m(a.o)
                  , p = $e("gtm.uniqueEventId")
                  , r = dh(d.R).prefix
                  , u = pj(oj(qj(nj(mj(lj(kj(jj(ij(h), k), l), n), q), function() {
                    Oi(p, r, "2");
                }), function() {
                    Oi(p, r, "3");
                }), function(t, v) {
                    a.C[t] = v
                }), function(t) {
                    return a.C[t]
                });
                try {
                    Oi(p, r, "1");
                    f(d.R, b, d.C, u)
                } catch (t) {
                    Oi(p, r, "4");
                }
            }
        }
    };
    aa = ml.prototype;
    aa.register = function(a, b, c) {
        var d = ul(this, a);
        if (3 !== d.status) {
            d.o = b;
            d.status = 3;
            if (c) {
                m(d.remoteConfig, c);
                d.remoteConfig = c
            }
            var e = dh(a)
              , f = rl[e.containerId];
            if (void 0 !== f) {
                var h = L[e.containerId].bootstrap
                  , k = e.prefix.toUpperCase();
                L[e.containerId]._spx && (k = k.toLowerCase());
                var l = $e("gtm.uniqueEventId")
                  , n = k
                  , q = Va() - h;
                if (Li && !Ci[l]) {
                    l !== yi && (ui(),
                    yi = l);
                    var p = n + "." + Math.floor(h - f) + "." + Math.floor(q);
                    Gi = Gi ? Gi + "," + p : "&cl=" + p
                }
                delete rl[e.containerId]
            }
            this.flush()
        }
    }
    ;
    aa.push = function(a, b, c, d) {
        var e = Math.floor(Va() / 1E3);
        vl(this, c, b[0][C.Da] || this.o[C.Da]);
        kl && c && ul(this, c).m && (d = !1);
        this.m.push(new tl(a,e,c,b,d));
        d || this.flush()
    }
    ;
    aa.insert = function(a, b, c) {
        var d = Math.floor(Va() / 1E3);
        0 < this.m.length ? this.m.splice(1, 0, new tl(a,d,c,b,!1)) : this.m.push(new tl(a,d,c,b,!1))
    }
    ;
    aa.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.m.length; ) {
            var f = this.m[0];
            if (f.o)
                kl ? !f.R || ul(this, f.R).m ? (f.o = !1,
                this.m.push(f)) : c.push(f) : (f.o = !1,
                this.m.push(f));
            else
                switch (f.type) {
                case "require":
                    if (3 !== ul(this, f.R).status && !a) {
                        kl && this.m.push.apply(this.m, c);
                        return
                    }
                    Li && G.clearTimeout(f.m[0].timeoutId);
                    break;
                case "set":
                    Ma(f.m[0], function(r, u) {
                        m(gb(r, u), b.o)
                    });
                    break;
                case "config":
                    e.ma = {};
                    Ma(f.m[0], function(r) {
                        return function(u, t) {
                            m(gb(u, t), r.ma)
                        }
                    }(e));
                    var h = !!e.ma[C.cc];
                    delete e.ma[C.cc];
                    var k = ul(this, f.R)
                      , l = dh(f.R)
                      , n = l.containerId === l.id;
                    h || (n ? k.containerConfig = {} : k.targetConfig[f.R] = {});
                    k.m && h || wl(this, C.Z, e.ma, f);
                    k.m = !0;
                    delete e.ma[C.zb];
                    n ? m(e.ma, k.containerConfig) : m(e.ma, k.targetConfig[f.R]);
                    kl && (d = !0);
                    break;
                case "event":
                    wl(this, f.m[1], f.m[0], f);
                    break;
                case "get":
                    var q = {}
                      , p = (q[C.Ba] = f.m[0],
                    q[C.Aa] = f.m[1],
                    q);
                    wl(this, C.oa, p, f)
                }
            this.m.shift();
            e = {
                ma: e.ma
            }
        }
        kl && (this.m.push.apply(this.m, c),
        d && this.flush())
    }
    ;
    aa.getRemoteConfig = function(a) {
        return ul(this, a).remoteConfig
    }
    ;
    var xl = function(a, b, c) {
        var d = {
            event: b,
            "gtm.element": a,
            "gtm.elementClasses": rd(a, "className"),
            "gtm.elementId": a["for"] || md(a, "id") || "",
            "gtm.elementTarget": a.formTarget || rd(a, "target") || ""
        };
        c && (d["gtm.triggers"] = c.join(","));
        d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || rd(a, "href") || a.src || a.code || a.codebase || "";
        return d
    }
      , yl = function(a) {
        L.hasOwnProperty("autoEventsSettings") || (L.autoEventsSettings = {});
        var b = L.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a]
    }
      , zl = function(a, b, c) {
        yl(a)[b] = c
    }
      , Al = function(a, b, c, d) {
        var e = yl(a)
          , f = Ya(e, b, d);
        e[b] = c(f)
    }
      , Bl = function(a, b, c) {
        var d = yl(a);
        return Ya(d, b, c)
    };
    var Cl = !!G.MutationObserver
      , Dl = void 0
      , El = function(a) {
        if (!Dl) {
            var b = function() {
                var c = H.body;
                if (c)
                    if (Cl)
                        (new MutationObserver(function() {
                            for (var e = 0; e < Dl.length; e++)
                                I(Dl[e])
                        }
                        )).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                    else {
                        var d = !1;
                        kd(c, "DOMNodeInserted", function() {
                            d || (d = !0,
                            I(function() {
                                d = !1;
                                for (var e = 0; e < Dl.length; e++)
                                    I(Dl[e])
                            }))
                        })
                    }
            };
            Dl = [];
            H.body ? b() : I(b)
        }
        Dl.push(a)
    };
    var Gl = !1
      , Hl = [];
    function Il() {
        if (!Gl) {
            Gl = !0;
            for (var a = 0; a < Hl.length; a++)
                I(Hl[a])
        }
    }
    var Jl = function(a) {
        Gl ? I(a) : Hl.push(a)
    };
    Object.freeze({
        dl: 1,
        id: 1
    });
    var Kl = "HA GF G UA AW DC".split(" ")
      , Ll = !1
      , Ml = {}
      , Nl = !1;
    function Ol(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = m(b),
        b[C.Qc] && (c.eventCallback = b[C.Qc]),
        b[C.Xb] && (c.eventTimeout = b[C.Xb]));
        return c
    }
    function Pl() {
        Ll = Ll || !L.gtagRegistered,
        L.gtagRegistered = !0,
        Ll && (L.addTargetToGroup = function(a) {
            Ql(a, "default")
        }
        );
        return Ll
    }
    var Rl = function(a) {
        Ma(Ml, function(b, c) {
            var d = Ga(c, a);
            0 <= d && c.splice(d, 1)
        })
    }
      , Ql = function(a, b) {
        b = b.toString().split(",");
        for (var c = 0; c < b.length; c++)
            Ml[b[c]] = Ml[b[c]] || [],
            Ml[b[c]].push(a)
    };
    var Sl = {
        config: function(a) {
            var b;
            if (2 > a.length || !g(a[1]))
                return;
            var c = {};
            if (2 < a.length) {
                if (void 0 != a[2] && !mb(a[2]) || 3 < a.length)
                    return;
                c = a[2]
            }
            var d = dh(a[1]);
            if (!d)
                return;
            Rl(d.id);
            Ql(d.id, c[C.Uc] || "default");
            delete c[C.Uc];
            Nl || D(43);
            Ue();
            if (Pl() && -1 !== Ga(Kl, d.prefix)) {
                "G" === d.prefix && (c[C.zb] = !0);
                pl(c, d.id);
                return
            }
            cf("gtag.targets." + d.id, void 0);
            cf("gtag.targets." + d.id, m(c));
            var e = {};
            e[C.Ma] = d.id;
            b = Ol(C.Z, e);
            return b
        },
        consent: function(a) {
            function b() {
                Pl() && m(a[2], {
                    subcommand: a[1]
                })
            }
            if (3 === a.length) {
                D(39);
                var c = Ue()
                  , d = a[1];
                "default" === d ? (b(),
                Ld(a[2])) : "update" === d && (b(),
                Md(a[2], c))
            }
        },
        event: function(a) {
            var b = a[1];
            if (!(2 > a.length) && g(b)) {
                var c;
                if (2 < a.length) {
                    if (!mb(a[2]) && void 0 != a[2] || 3 < a.length)
                        return;
                    c = a[2]
                }
                var d = Ol(b, c);
                var e;
                var f = c && c[C.Ma];
                void 0 === f && (f = $e(C.Ma, 2),
                void 0 === f && (f = "default"));
                if (g(f) || Fa(f)) {
                    for (var h = f.toString().replace(/\s+/g, "").split(","), k = [], l = 0; l < h.length; l++)
                        0 <= h[l].indexOf("-") ? k.push(h[l]) : k = k.concat(Ml[h[l]] || []);
                    e = fh(k)
                } else
                    e = void 0;
                var n = e;
                if (!n)
                    return;
                var q = Pl();
                Ue();
                for (var p = [], r = 0; q && r < n.length; r++) {
                    var u = n[r];
                    if (-1 !== Ga(Kl, u.prefix)) {
                        var t = m(c);
                        "G" === u.prefix && (t[C.zb] = !0);
                        ol(b, t, u.id)
                    }
                    p.push(u.id)
                }
                d.eventModel = d.eventModel || {};
                0 < n.length ? d.eventModel[C.Ma] = p.join() : delete d.eventModel[C.Ma];
                Nl || D(43);
                return d
            }
        },
        get: function(a) {
            D(53);
            if (4 !== a.length || !g(a[1]) || !g(a[2]) || !Ca(a[3]))
                return;
            var b = dh(a[1])
              , c = String(a[2])
              , d = a[3];
            if (!b)
                return;
            Nl || D(43);
            if (!Pl() || -1 === Ga(Kl, b.prefix))
                return;
            Ue();
            var e = {};
            Jh(m((e[C.Ba] = c,
            e[C.Aa] = d,
            e)));
            ql(c, function(f) {
                I(function() {
                    return d(f)
                })
            }, b.id);
        },
        js: function(a) {
            if (2 == a.length && a[1].getTime)
                return Nl = !0,
                Pl(),
                {
                    event: "gtm.js",
                    "gtm.start": a[1].getTime()
                }
        },
        policy: function() {},
        set: function(a) {
            var b;
            2 == a.length && mb(a[1]) ? b = m(a[1]) : 3 == a.length && g(a[1]) && (b = {},
            mb(a[2]) || Fa(a[2]) ? b[a[1]] = m(a[2]) : b[a[1]] = a[2]);
            if (b) {
                if (Ue(),
                Pl()) {
                    m(b);
                    var c = m(b);
                    ll().push("set", [c])
                }
                b._clear = !0;
                return b
            }
        }
    }
      , Tl = {
        policy: !0
    };
    var Ul = function(a, b) {
        var c = a.hide;
        if (c && void 0 !== c[b] && c.end) {
            c[b] = !1;
            var d = !0, e;
            for (e in c)
                if (c.hasOwnProperty(e) && !0 === c[e]) {
                    d = !1;
                    break
                }
            d && (c.end(),
            c.end = null)
        }
    }
      , Wl = function(a) {
        var b = Vl()
          , c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var om = function(a) {
        if (nm(a))
            return a;
        this.m = a
    };
    om.prototype.Yg = function() {
        return this.m
    }
    ;
    var nm = function(a) {
        return !a || "object" !== jb(a) || mb(a) ? !1 : "getUntrustedUpdateValue"in a
    };
    om.prototype.getUntrustedUpdateValue = om.prototype.Yg;
    var pm = []
      , qm = !1
      , rm = !1
      , sm = !1
      , tm = function(a) {
        return G["dataLayer"].push(a)
    }
      , um = function(a) {
        var b = L["dataLayer"]
          , c = b ? b.subscribers : 1
          , d = 0;
        return function() {
            ++d === c && a()
        }
    };
    function vm(a) {
        var b = a._clear;
        Ma(a, function(d, e) {
            "_clear" !== d && (b && cf(d, void 0),
            cf(d, e))
        });
        Pe || (Pe = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event)
            return !1;
        c || (c = Ue(),
        a["gtm.uniqueEventId"] = c,
        cf("gtm.uniqueEventId", c));
        return dj(a)
    }
    function wm() {
        var a = pm[0];
        if (null == a || "object" !== typeof a)
            return !1;
        if (a.event)
            return !0;
        if (Na(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b)
                return !0
        }
        return !1
    }
    function xm() {
        for (var a = !1; !sm && 0 < pm.length; ) {
            var b = !1;
            b = !1;
            b = !0;
            if (b && !rm && wm()) {
                var c = {};
                pm.unshift((c.event = "gtm.init",
                c));
                rm = !0
            }
            var d = !1;
            d = !1;
            if (d && !qm && wm()) {
                var e = {};
                pm.unshift((e.event = "gtm.init_consent",
                e));
                qm = !0
            }
            sm = !0;
            delete Xe.eventModel;
            Ze();
            var f = pm.shift();
            if (null != f) {
                var h = nm(f);
                if (h) {
                    var k = f;
                    f = nm(k) ? k.getUntrustedUpdateValue() : void 0;
                    for (var l = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], n = 0; n < l.length; n++) {
                        var q = l[n]
                          , p = $e(q, 1);
                        if (Fa(p) || mb(p))
                            p = m(p);
                        Ye[q] = p
                    }
                }
                try {
                    if (Ca(f))
                        try {
                            f.call(af)
                        } catch (y) {}
                    else if (Fa(f)) {
                        var r = f;
                        if (g(r[0])) {
                            var u = r[0].split(".")
                              , t = u.pop()
                              , v = r.slice(1)
                              , x = $e(u.join("."), 2);
                            if (void 0 !== x && null !== x)
                                try {
                                    x[t].apply(x, v)
                                } catch (y) {}
                        }
                    } else {
                        if (Na(f)) {
                            a: {
                                var A = f;
                                if (A.length && g(A[0])) {
                                    var w = Sl[A[0]];
                                    if (w && (!h || !Tl[A[0]])) {
                                        f = w(A);
                                        break a
                                    }
                                }
                                f = void 0
                            }
                            if (!f) {
                                sm = !1;
                                continue
                            }
                        }
                        a = vm(f) || a
                    }
                } finally {
                    h && Ze(!0)
                }
            }
            sm = !1
        }
        return !a
    }
    function ym() {
        var a = xm();
        try {
            Ul(G["dataLayer"], He.D)
        } catch (b) {}
        return a
    }
    var Am = function() {
        var a = ed("dataLayer", [])
          , b = ed("google_tag_manager", {});
        b = b["dataLayer"] = b["dataLayer"] || {};
        Uh(function() {
            b.gtmDom || (b.gtmDom = !0,
            a.push({
                event: "gtm.dom"
            }))
        });
        Jl(function() {
            b.gtmLoad || (b.gtmLoad = !0,
            a.push({
                event: "gtm.load"
            }))
        });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function() {
            var e;
            if (0 < L.SANDBOXED_JS_SEMAPHORE) {
                e = [];
                for (var f = 0; f < arguments.length; f++)
                    e[f] = new om(arguments[f])
            } else
                e = [].slice.call(arguments, 0);
            var h = c.apply(a, e);
            pm.push.apply(pm, e);
            if (300 < this.length)
                for (D(4); 300 < this.length; )
                    this.shift();
            var k = "boolean" !== typeof h || h;
            return xm() && k
        }
        ;
        var d = a.slice(0);
        pm.push.apply(pm, d);
        zm() && I(ym)
    }
      , zm = function() {
        var a = !0;
        a = !1;
        return a
    };
    var Bm = {};
    Bm.fc = new String("undefined");
    var Cm = function(a) {
        this.m = function(b) {
            for (var c = [], d = 0; d < a.length; d++)
                c.push(a[d] === Bm.fc ? b : a[d]);
            return c.join("")
        }
    };
    Cm.prototype.toString = function() {
        return this.m("undefined")
    }
    ;
    Cm.prototype.valueOf = Cm.prototype.toString;
    Bm.xg = Cm;
    Bm.hd = {};
    Bm.Lg = function(a) {
        return new Cm(a)
    }
    ;
    var Dm = {};
    Bm.wh = function(a, b) {
        var c = Ue();
        Dm[c] = [a, b];
        return c
    }
    ;
    Bm.Ve = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = Dm[c];
            if (d && "function" === typeof d[b])
                d[b]();
            Dm[c] = void 0
        }
    }
    ;
    Bm.dh = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++)
            b = b || 8 === a[d],
            c = c || 16 === a[d];
        return b && c
    }
    ;
    Bm.rh = function(a) {
        if (a === Bm.fc)
            return a;
        var b = Ue();
        Bm.hd[b] = a;
        return 'google_tag_manager["' + He.D + '"].macro(' + b + ")"
    }
    ;
    Bm.nh = function(a, b, c) {
        a instanceof Bm.xg && (a = a.m(Bm.wh(b, c)),
        b = Ba);
        return {
            Zg: a,
            onSuccess: b
        }
    }
    ;
    var Em = ["input", "select", "textarea"]
      , Fm = ["button", "hidden", "image", "reset", "submit"]
      , Gm = function(a) {
        var b = a.tagName.toLowerCase();
        return !Ha(Em, function(c) {
            return c === b
        }) || "input" === b && Ha(Fm, function(c) {
            return c === a.type.toLowerCase()
        }) ? !1 : !0
    }
      , Hm = function(a) {
        return a.form ? a.form.tagName ? a.form : H.getElementById(a.form) : pd(a, ["form"], 100)
    }
      , Im = function(a, b, c) {
        if (!a.elements)
            return 0;
        for (var d = b.getAttribute(c), e = 0, f = 1; e < a.elements.length; e++) {
            var h = a.elements[e];
            if (Gm(h)) {
                if (h.getAttribute(c) === d)
                    return f;
                f++
            }
        }
        return 0
    };
    var Tm = G.clearTimeout
      , Um = G.setTimeout
      , O = function(a, b, c) {
        if (gh()) {
            b && I(b)
        } else
            return gd(a, b, c)
    }
      , Vm = function() {
        return new Date
    }
      , Wm = function() {
        return G.location.href
    }
      , Xm = function(a) {
        return ie(ke(a), "fragment")
    }
      , Ym = function(a) {
        return je(ke(a))
    }
      , Zm = function(a, b) {
        return $e(a, b || 2)
    }
      , $m = function(a, b, c) {
        var d;
        b ? (a.eventCallback = b,
        c && (a.eventTimeout = c),
        d = tm(a)) : d = tm(a);
        return d
    }
      , an = function(a, b) {
        G[a] = b
    }
      , W = function(a, b, c) {
        b && (void 0 === G[a] || c && !G[a]) && (G[a] = b);
        return G[a]
    }
      , bn = function(a, b, c) {
        return of(a, b, void 0 === c ? !0 : !!c)
    }
      , cn = function(a, b, c) {
        return 0 === Af(a, b, c)
    }
      , dn = function(a, b) {
        if (gh()) {
            b && I(b)
        } else
            id(a, b)
    }
      , en = function(a) {
        return !!Bl(a, "init", !1)
    }
      , fn = function(a) {
        zl(a, "init", !0)
    }
      , gn = function(a, b) {
        var c = (void 0 === b ? 0 : b) ? "www.googletagmanager.com/gtag/js" : Ne;
        c += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
        O(ih("https://", "http://", c))
    }
      , hn = function(a, b, c) {
        Li && (qb(a) || Pi(c, b, a))
    };
    var jn = Bm.nh;
    function Gn(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    var Hn = new Ka;
    function In(a, b) {
        function c(h) {
            var k = ke(h)
              , l = ie(k, "protocol")
              , n = ie(k, "host", !0)
              , q = ie(k, "port")
              , p = ie(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" == l && "80" == q || "https" == l && "443" == q)
                l = "web",
                q = "default";
            return [l, n, q, p]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f])
                return !1;
        return !0
    }
    function Jn(a) {
        return Kn(a) ? 1 : 0
    }
    function Kn(a) {
        var b = a.arg0
          , c = a.arg1;
        if (a.any_of && Fa(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = m(a, {});
                m({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Jn(e))
                    return !0
            }
            return !1
        }
        switch (a["function"]) {
        case "_cn":
            return 0 <= String(b).indexOf(String(c));
        case "_css":
            var f;
            a: {
                if (b) {
                    var h = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                    try {
                        for (var k = 0; k < h.length; k++)
                            if (b[h[k]]) {
                                f = b[h[k]](c);
                                break a
                            }
                    } catch (u) {}
                }
                f = !1
            }
            return f;
        case "_ew":
            return Gn(b, c);
        case "_eq":
            return String(b) == String(c);
        case "_ge":
            return Number(b) >= Number(c);
        case "_gt":
            return Number(b) > Number(c);
        case "_lc":
            var l;
            l = String(b).split(",");
            return 0 <= Ga(l, String(c));
        case "_le":
            return Number(b) <= Number(c);
        case "_lt":
            return Number(b) < Number(c);
        case "_re":
            var n;
            var q = a.ignore_case ? "i" : void 0;
            try {
                var p = String(c) + q
                  , r = Hn.get(p);
                r || (r = new RegExp(c,q),
                Hn.set(p, r));
                n = r.test(b)
            } catch (u) {
                n = !1
            }
            return n;
        case "_sw":
            return 0 == String(b).indexOf(String(c));
        case "_um":
            return In(b, c)
        }
        return !1
    }
    ;var Ln = encodeURI
      , X = encodeURIComponent
      , Mn = jd;
    var Nn = function(a, b) {
        if (!a)
            return !1;
        var c = ie(ke(a), "host");
        if (!c)
            return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--,
                e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f)
                    return !0
            }
        }
        return !1
    };
    var On = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c],
            e = !0);
        return e ? d : null
    };
    function up() {
        return G.gaGlobal = G.gaGlobal || {}
    }
    var vp = function() {
        var a = up();
        a.hid = a.hid || Ia();
        return a.hid
    }
      , wp = function(a, b) {
        var c = up();
        if (void 0 == c.vid || b && !c.from_cookie)
            c.vid = a,
            c.from_cookie = b
    };
    var gq = window
      , hq = document
      , iq = function(a) {
        var b = gq._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === gq["ga-disable-" + a])
            return !0;
        try {
            var c = gq.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                return !0
        } catch (f) {}
        for (var d = mf("AMP_TOKEN", String(hq.cookie), !0), e = 0; e < d.length; e++)
            if ("$OPT_OUT" == d[e])
                return !0;
        return hq.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    var jq = {};
    function lq(a) {
        delete a.eventModel[C.zb];
        nq(a.eventModel)
    }
    var nq = function(a) {
        Ma(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[C.ra] || {};
        Ma(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var qq = function(a, b, c) {
        ol(b, c, a)
    }
      , rq = function(a, b, c) {
        ol(b, c, a, !0)
    }
      , xq = function(a, b) {};
    function sq(a, b) {}
    var Z = {
        g: {}
    };

    Z.g.e = ["google"],
    function() {
        (function(a) {
            Z.__e = a;
            Z.__e.h = "e";
            Z.__e.i = !0;
            Z.__e.priorityOverride = 0
        }
        )(function(a) {
            return String(ef(a.vtp_gtmEventId, "event"))
        })
    }();

    Z.g.v = ["google"],
    function() {
        (function(a) {
            Z.__v = a;
            Z.__v.h = "v";
            Z.__v.i = !0;
            Z.__v.priorityOverride = 0
        }
        )(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace)
                return !1;
            var c = Zm(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1)
              , d = void 0 !== c ? c : a.vtp_defaultValue;
            hn(d, "v", a.vtp_gtmEventId);
            return d
        })
    }();

    Z.g.rep = ["google"],
    function() {
        (function(a) {
            Z.__rep = a;
            Z.__rep.h = "rep";
            Z.__rep.i = !0;
            Z.__rep.priorityOverride = 0
        }
        )(function(a) {
            var b;
            switch (dh(a.vtp_containerId).prefix) {
            case "AW":
                b = ok;
                break;
            case "DC":
                b = Ak;
                break;
            case "GF":
                b = Fk;
                break;
            case "HA":
                b = Kk;
                break;
            case "UA":
                b = dl;
                break;
            default:
                I(a.vtp_gtmOnFailure);
                return
            }
            I(a.vtp_gtmOnSuccess);
            nl(a.vtp_containerId, b, a.vtp_remoteConfig || {})
        })
    }();

    Z.g.cid = ["google"],
    function() {
        (function(a) {
            Z.__cid = a;
            Z.__cid.h = "cid";
            Z.__cid.i = !0;
            Z.__cid.priorityOverride = 0
        }
        )(function() {
            return He.D
        })
    }();

    Z.g.gtagaw = ["google"],
    function() {
        (function(a) {
            Z.__gtagaw = a;
            Z.__gtagaw.h = "gtagaw";
            Z.__gtagaw.i = !0;
            Z.__gtagaw.priorityOverride = 0
        }
        )(function(a) {
            var b = "AW-" + String(a.vtp_conversionId);
            ol(String(a.vtp_eventName), a.vtp_eventData || {}, a.vtp_conversionLabel ? b + "/" + String(a.vtp_conversionLabel) : b);
            I(a.vtp_gtmOnSuccess)
        })
    }();

    Z.g.get = ["google"],
    function() {
        (function(a) {
            Z.__get = a;
            Z.__get.h = "get";
            Z.__get.i = !0;
            Z.__get.priorityOverride = 0
        }
        )(function(a) {
            var b = a.vtp_settings;
            (a.vtp_deferrable ? rq : qq)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
            a.vtp_gtmOnSuccess()
        })
    }();

    Z.g.gtagfl = [],
    function() {
        (function(a) {
            Z.__gtagfl = a;
            Z.__gtagfl.h = "gtagfl";
            Z.__gtagfl.i = !0;
            Z.__gtagfl.priorityOverride = 0
        }
        )(function(a) {
            I(a.vtp_gtmOnSuccess)
        })
    }();

    Z.g.gtaggf = ["google"],
    function() {
        (function(a) {
            Z.__gtaggf = a;
            Z.__gtaggf.h = "gtaggf";
            Z.__gtaggf.i = !0;
            Z.__gtaggf.priorityOverride = 0
        }
        )(function(a) {
            I(a.vtp_gtmOnSuccess)
        })
    }();

    Z.g.gtagua = ["google"],
    function() {
        (function(a) {
            Z.__gtagua = a;
            Z.__gtagua.h = "gtagua";
            Z.__gtagua.i = !0;
            Z.__gtagua.priorityOverride = 0
        }
        )(function(a) {
            I(a.vtp_gtmOnSuccess)
        })
    }();

    var yq = {};
    yq.macro = function(a) {
        if (Bm.hd.hasOwnProperty(a))
            return Bm.hd[a]
    }
    ,
    yq.onHtmlSuccess = Bm.Ve(!0),
    yq.onHtmlFailure = Bm.Ve(!1);
    yq.dataLayer = af;
    yq.callback = function(a) {
        Se.hasOwnProperty(a) && Ca(Se[a]) && Se[a]();
        delete Se[a]
    }
    ;
    yq.bootstrap = 0;
    yq._spx = !1;
    function zq() {
        L[He.D] = yq;
        bb(Te, Z.g);
        Zb = Zb || Bm;
        $b = kc
    }
    function Aq() {
        sd.o().o();
        L = G.google_tag_manager = G.google_tag_manager || {};
        Xj();
        if (L[He.D]) {
            var a = L.zones;
            a && a.unregisterChild(He.D);
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++)
                Sb.push(c[d]);
            for (var e = b.tags || [], f = 0; f < e.length; f++)
                Vb.push(e[f]);
            for (var h = b.predicates || [], k = 0; k < h.length; k++)
                Ub.push(h[k]);
            for (var l = b.rules || [], n = 0; n < l.length; n++) {
                for (var q = l[n], p = {}, r = 0; r < q.length; r++)
                    p[q[r][0]] = Array.prototype.slice.call(q[r], 1);
                Tb.push(p)
            }
            Xb = Z;
            Yb = Jn;
            zq();
            Am();
            Lh = !1;
            Mh = 0;
            if ("interactive" == H.readyState && !H.createEventObject || "complete" == H.readyState)
                Sh();
            else {
                kd(H, "DOMContentLoaded", Sh);
                kd(H, "readystatechange", Sh);
                if (H.createEventObject && H.documentElement.doScroll) {
                    var u = !0;
                    try {
                        u = !G.frameElement
                    } catch (A) {}
                    u && Th()
                }
                kd(G, "load", Sh)
            }
            Gl = !1;
            "complete" === H.readyState ? Il() : kd(G, "load", Il);
            a: {
                if (!Li)
                    break a;
                G.setInterval(Mi, 864E5);
            }
            Qe = (new Date).getTime();
            yq.bootstrap = Qe;
            yq._spx = !0,
            ym();
        }
    }
    (function(a) {
        if (!G["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (H.referrer) {
                var c = ke(H.referrer);
                b = "cct.google" === he(c, "host")
            }
            if (!b) {
                var d = of("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (G["__TAGGY_INSTALLED"] = !0,
            gd("https://cct.google/taggy/agent.js"))
        }
        var f = function() {
            var p = G["google.tagmanager.debugui2.queue"];
            p || (p = [],
            G["google.tagmanager.debugui2.queue"] = p,
            gd("https://www.googletagmanager.com/debug/bootstrap"));
            return p
        }
          , h = "x" === ie(G.location, "query", !1, void 0, "gtm_debug");
        if (!h && H.referrer) {
            var k = ke(H.referrer);
            h = "tagassistant.google.com" === he(k, "host")
        }
        if (!h) {
            var l = of("__TAG_ASSISTANT");
            h = l.length && l[0].length
        }
        G.__TAG_ASSISTANT_API && (h = !0);
        if (h && dd) {
            var n = f()
              , q = {
                messageType: "CONTAINER_STARTING",
                data: {
                    scriptSource: dd,
                    resume: function() {
                        a()
                    }
                }
            };
            He.Bf && (q.data.initialPublish = !0);
            n.push(q)
        } else
            a()
    }
    )(Aq);

}
)()
// JavaScript Document