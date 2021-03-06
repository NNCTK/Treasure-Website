!function(n, t) {
    if ("function" == typeof define && define.amd)
        define(["module", "exports"], t);
    else if ("undefined" != typeof exports)
        t(module, exports);
    else {
        var i = {
            exports: {}
        };
        t(i, i.exports);
        n.WOW = i.exports
    }
}(this, function(n, t) {
    "use strict";
    function r(n, t) {
        if (!(n instanceof t))
            throw new TypeError("Cannot call a class as a function");
    }
    function f(n, t) {
        return t.indexOf(n) >= 0
    }
    function l(n, t) {
        var i, r;
        for (i in t)
            null == n[i] && (r = t[i],
            n[i] = r);
        return n
    }
    function a(n) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(n)
    }
    function v(n) {
        var i = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1]
          , r = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2]
          , u = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3]
          , t = void 0;
        return null != document.createEvent ? (t = document.createEvent("CustomEvent"),
        t.initCustomEvent(n, i, r, u)) : null != document.createEventObject ? (t = document.createEventObject(),
        t.eventType = n) : t.eventName = n,
        t
    }
    function y(n, t) {
        null != n.dispatchEvent ? n.dispatchEvent(t) : t in (null != n) ? n[t]() : "on" + t in (null != n) && n["on" + t]()
    }
    function i(n, t, i) {
        null != n.addEventListener ? n.addEventListener(t, i, !1) : null != n.attachEvent ? n.attachEvent("on" + t, i) : n[t] = i
    }
    function e(n, t, i) {
        null != n.removeEventListener ? n.removeEventListener(t, i, !1) : null != n.detachEvent ? n.detachEvent("on" + t, i) : delete n[t]
    }
    function p() {
        return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, s, u = function() {
        function n(n, t) {
            for (var i, r = 0; r < t.length; r++)
                i = t[r],
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(n, i.key, i)
        }
        return function(t, i, r) {
            return i && n(t.prototype, i),
            r && n(t, r),
            t
        }
    }(), w = window.WeakMap || window.MozWeakMap || function() {
        function n() {
            r(this, n);
            this.keys = [];
            this.values = []
        }
        return u(n, [{
            key: "get",
            value: function(n) {
                for (var i, t = 0; t < this.keys.length; t++)
                    if (i = this.keys[t],
                    i === n)
                        return this.values[t]
            }
        }, {
            key: "set",
            value: function(n, t) {
                for (var r, i = 0; i < this.keys.length; i++)
                    if (r = this.keys[i],
                    r === n)
                        return this.values[i] = t,
                        this;
                return this.keys.push(n),
                this.values.push(t),
                this
            }
        }]),
        n
    }(), h = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (s = o = function() {
        function n() {
            r(this, n);
            "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."),
            console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
        }
        return u(n, [{
            key: "observe",
            value: function() {}
        }]),
        n
    }(),
    o.notSupported = !0,
    s), c = window.getComputedStyle || function(n) {
        var t = /(\-([a-z]){1})/g;
        return {
            getPropertyValue: function(i) {
                "float" === i && (i = "styleFloat");
                t.test(i) && i.replace(t, function(n, t) {
                    return t.toUpperCase()
                });
                var r = n.currentStyle;
                return (null != r ? r[i] : void 0) || null
            }
        }
    }
    , b = function() {
        function n() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            r(this, n);
            this.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null,
                resetAnimation: !0
            };
            this.animate = function() {
                return "requestAnimationFrame"in window ? function(n) {
                    return window.requestAnimationFrame(n)
                }
                : function(n) {
                    return n()
                }
            }();
            this.vendors = ["moz", "webkit"];
            this.start = this.start.bind(this);
            this.resetAnimation = this.resetAnimation.bind(this);
            this.scrollHandler = this.scrollHandler.bind(this);
            this.scrollCallback = this.scrollCallback.bind(this);
            this.scrolled = !0;
            this.config = l(t, this.defaults);
            null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer));
            this.animationNameCache = new w;
            this.wowEvent = v(this.config.boxClass)
        }
        return u(n, [{
            key: "init",
            value: function() {
                this.element = window.document.documentElement;
                f(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start);
                this.finished = []
            }
        }, {
            key: "start",
            value: function() {
                var u = this, n, t, r;
                if (this.stopped = !1,
                this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)),
                this.all = this.boxes.slice(0),
                this.boxes.length)
                    if (this.disabled())
                        this.resetStyle();
                    else
                        for (n = 0; n < this.boxes.length; n++)
                            t = this.boxes[n],
                            this.applyStyle(t, !0);
                (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                i(window, "resize", this.scrollHandler),
                this.interval = setInterval(this.scrollCallback, 50)),
                this.config.live) && (r = new h(function(n) {
                    for (var r, i, f, t = 0; t < n.length; t++)
                        for (r = n[t],
                        i = 0; i < r.addedNodes.length; i++)
                            f = r.addedNodes[i],
                            u.doSync(f)
                }
                ),
                r.observe(document.body, {
                    childList: !0,
                    subtree: !0
                }))
            }
        }, {
            key: "stop",
            value: function() {
                this.stopped = !0;
                e(this.config.scrollContainer || window, "scroll", this.scrollHandler);
                e(window, "resize", this.scrollHandler);
                null != this.interval && clearInterval(this.interval)
            }
        }, {
            key: "sync",
            value: function() {
                h.notSupported && this.doSync(this.element)
            }
        }, {
            key: "doSync",
            value: function(n) {
                var r, i, t;
                if ("undefined" != typeof n && null !== n || (n = this.element),
                1 === n.nodeType)
                    for (n = n.parentNode || n,
                    r = n.querySelectorAll("." + this.config.boxClass),
                    i = 0; i < r.length; i++)
                        t = r[i],
                        f(t, this.all) || (this.boxes.push(t),
                        this.all.push(t),
                        this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0),
                        this.scrolled = !0)
            }
        }, {
            key: "show",
            value: function(n) {
                return this.applyStyle(n),
                n.className = n.className + " " + this.config.animateClass,
                null != this.config.callback && this.config.callback(n),
                y(n, this.wowEvent),
                this.config.resetAnimation && (i(n, "animationend", this.resetAnimation),
                i(n, "oanimationend", this.resetAnimation),
                i(n, "webkitAnimationEnd", this.resetAnimation),
                i(n, "MSAnimationEnd", this.resetAnimation)),
                n
            }
        }, {
            key: "applyStyle",
            value: function(n, t) {
                var i = this
                  , r = n.getAttribute("data-wow-duration")
                  , u = n.getAttribute("data-wow-delay")
                  , f = n.getAttribute("data-wow-iteration");
                return this.animate(function() {
                    return i.customStyle(n, t, r, u, f)
                })
            }
        }, {
            key: "resetStyle",
            value: function() {
                for (var t, n = 0; n < this.boxes.length; n++)
                    t = this.boxes[n],
                    t.style.visibility = "visible"
            }
        }, {
            key: "resetAnimation",
            value: function(n) {
                if (n.type.toLowerCase().indexOf("animationend") >= 0) {
                    var t = n.target || n.srcElement;
                    t.className = t.className.replace(this.config.animateClass, "").trim()
                }
            }
        }, {
            key: "customStyle",
            value: function(n, t, i, r, u) {
                return t && this.cacheAnimationName(n),
                n.style.visibility = t ? "hidden" : "visible",
                i && this.vendorSet(n.style, {
                    animationDuration: i
                }),
                r && this.vendorSet(n.style, {
                    animationDelay: r
                }),
                u && this.vendorSet(n.style, {
                    animationIterationCount: u
                }),
                this.vendorSet(n.style, {
                    animationName: t ? "none" : this.cachedAnimationName(n)
                }),
                n
            }
        }, {
            key: "vendorSet",
            value: function(n, t) {
                var i, u, r, f;
                for (i in t)
                    if (t.hasOwnProperty(i))
                        for (u = t[i],
                        n["" + i] = u,
                        r = 0; r < this.vendors.length; r++)
                            f = this.vendors[r],
                            n["" + f + i.charAt(0).toUpperCase() + i.substr(1)] = u
            }
        }, {
            key: "vendorCSS",
            value: function(n, t) {
                for (var f, u = c(n), i = u.getPropertyCSSValue(t), r = 0; r < this.vendors.length; r++)
                    f = this.vendors[r],
                    i = i || u.getPropertyCSSValue("-" + f + "-" + t);
                return i
            }
        }, {
            key: "animationName",
            value: function(n) {
                var t = void 0;
                try {
                    t = this.vendorCSS(n, "animation-name").cssText
                } catch (i) {
                    t = c(n).getPropertyValue("animation-name")
                }
                return "none" === t ? "" : t
            }
        }, {
            key: "cacheAnimationName",
            value: function(n) {
                return this.animationNameCache.set(n, this.animationName(n))
            }
        }, {
            key: "cachedAnimationName",
            value: function(n) {
                return this.animationNameCache.get(n)
            }
        }, {
            key: "scrollHandler",
            value: function() {
                this.scrolled = !0
            }
        }, {
            key: "scrollCallback",
            value: function() {
                var i, t, n;
                if (this.scrolled) {
                    for (this.scrolled = !1,
                    i = [],
                    t = 0; t < this.boxes.length; t++)
                        if (n = this.boxes[t],
                        n) {
                            if (this.isVisible(n)) {
                                this.show(n);
                                continue
                            }
                            i.push(n)
                        }
                    this.boxes = i;
                    this.boxes.length || this.config.live || this.stop()
                }
            }
        }, {
            key: "offsetTop",
            value: function(n) {
                for (; void 0 === n.offsetTop; )
                    n = n.parentNode;
                for (var t = n.offsetTop; n.offsetParent; )
                    n = n.offsetParent,
                    t += n.offsetTop;
                return t
            }
        }, {
            key: "isVisible",
            value: function(n) {
                var r = n.getAttribute("data-wow-offset") || this.config.offset
                  , t = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset
                  , u = t + Math.min(this.element.clientHeight, p()) - r
                  , i = this.offsetTop(n)
                  , f = i + n.clientHeight;
                return u >= i && f >= t
            }
        }, {
            key: "disabled",
            value: function() {
                return !this.config.mobile && a(navigator.userAgent)
            }
        }]),
        n
    }();
    t["default"] = b;
    n.exports = t["default"]
})
