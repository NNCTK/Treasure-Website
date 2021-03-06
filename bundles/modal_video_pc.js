!function(n) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = n();
    else if ("function" == typeof define && define.amd)
        define([], n);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this;
        t.ModalVideo = n()
    }
}(function() {
    return function n(t, i, r) {
        function u(f, o) {
            var h, c, s;
            if (!i[f]) {
                if (!t[f]) {
                    if (h = "function" == typeof require && require,
                    !o && h)
                        return h(f, !0);
                    if (e)
                        return e(f, !0);
                    c = new Error("Cannot find module '" + f + "'");
                    throw c.code = "MODULE_NOT_FOUND",
                    c;
                }
                s = i[f] = {
                    exports: {}
                };
                t[f][0].call(s.exports, function(n) {
                    var i = t[f][1][n];
                    return u(i || n)
                }, s, s.exports, n, t, i, r)
            }
            return i[f].exports
        }
        for (var e = "function" == typeof require && require, f = 0; f < r.length; f++)
            u(r[f]);
        return u
    }({
        1: [function() {
            var n, t;
            try {
                if (n = new window.CustomEvent("test"),
                n.preventDefault(),
                !0 !== n.defaultPrevented)
                    throw new Error("Could not prevent default");
            } catch (e) {
                t = function(n, t) {
                    var i, r;
                    return t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    },
                    i = document.createEvent("CustomEvent"),
                    i.initCustomEvent(n, t.bubbles, t.cancelable, t.detail),
                    r = i.preventDefault,
                    i.preventDefault = function() {
                        r.call(this);
                        try {
                            Object.defineProperty(this, "defaultPrevented", {
                                get: function() {
                                    return !0
                                }
                            })
                        } catch (n) {
                            this.defaultPrevented = !0
                        }
                    }
                    ,
                    i
                }
                ;
                t.prototype = window.Event.prototype;
                window.CustomEvent = t
            }
        }
        , {}],
        2: [function(n, t) {
            "use strict";
            function i(n) {
                var u, i, t, r, e;
                if (void 0 === n || null === n)
                    throw new TypeError("Cannot convert first argument to object");
                for (u = Object(n),
                i = 1; i < arguments.length; i++)
                    if (t = arguments[i],
                    void 0 !== t && null !== t)
                        for (var o = Object.keys(Object(t)), f = 0, s = o.length; f < s; f++)
                            r = o[f],
                            e = Object.getOwnPropertyDescriptor(t, r),
                            void 0 !== e && e.enumerable && (u[r] = t[r]);
                return u
            }
            function r() {
                Object.assign || Object.defineProperty(Object, "assign", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: i
                })
            }
            t.exports = {
                assign: i,
                polyfill: r
            }
        }
        , {}],
        3: [function(n, t, i) {
            "use strict";
            function f(n, t) {
                if (!(n instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            var u;
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            u = function() {
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
            }();
            n("custom-event-polyfill");
            var r = n("../lib/util")
              , e = n("es6-object-assign").assign
              , o = {
                channel: "youtube",
                facebook: {},
                youtube: {
                    autoplay: 1,
                    cc_load_policy: 1,
                    color: null,
                    controls: 1,
                    disablekb: 0,
                    enablejsapi: 0,
                    end: null,
                    fs: 1,
                    h1: null,
                    iv_load_policy: 1,
                    list: null,
                    listType: null,
                    loop: 0,
                    modestbranding: null,
                    origin: null,
                    playlist: null,
                    playsinline: null,
                    rel: 0,
                    showinfo: 1,
                    start: 0,
                    wmode: "transparent",
                    theme: "dark",
                    nocookie: !1
                },
                ratio: "16:9",
                vimeo: {
                    api: !1,
                    autopause: !0,
                    autoplay: !0,
                    byline: !0,
                    callback: null,
                    color: null,
                    height: null,
                    loop: !1,
                    maxheight: null,
                    maxwidth: null,
                    player_id: null,
                    portrait: !0,
                    title: !0,
                    width: null,
                    xhtml: !1
                },
                allowFullScreen: !0,
                animationSpeed: 300,
                classNames: {
                    modalVideo: "modal-video",
                    modalVideoClose: "modal-video-close",
                    modalVideoBody: "modal-video-body",
                    modalVideoInner: "modal-video-inner",
                    modalVideoIframeWrap: "modal-video-movie-wrap",
                    modalVideoCloseBtn: "modal-video-close-btn"
                },
                aria: {
                    openMessage: "You just openned the modal video",
                    dismissBtnMessage: "Close the modal by clicking here"
                }
            }
              , s = function() {
                function n(t, i) {
                    var s = this;
                    f(this, n);
                    var u = e({}, o, i)
                      , h = "string" == typeof t ? document.querySelectorAll(t) : t
                      , c = document.querySelector("body")
                      , l = u.classNames
                      , a = u.animationSpeed;
                    [].forEach.call(h, function(n) {
                        n.addEventListener("click", function(t) {
                            var i, f;
                            "A" === n.tagName && t.preventDefault();
                            var o = n.dataset.videoId
                              , h = n.dataset.channel || u.channel
                              , e = r.getUniqId()
                              , v = n.dataset.videoUrl || s.getVideoUrl(u, h, o)
                              , y = s.getHtml(u, v, e);
                            r.append(c, y);
                            i = document.getElementById(e);
                            f = i.querySelector(".js-modal-video-dismiss-btn");
                            i.focus();
                            i.addEventListener("click", function() {
                                r.addClass(i, l.modalVideoClose);
                                setTimeout(function() {
                                    r.remove(i);
                                    n.focus()
                                }, a)
                            });
                            i.addEventListener("keydown", function(n) {
                                9 === n.which && (n.preventDefault(),
                                document.activeElement === i ? f.focus() : (i.setAttribute("aria-label", ""),
                                i.focus()))
                            });
                            f.addEventListener("click", function() {
                                r.triggerEvent(i, "click")
                            })
                        })
                    })
                }
                return u(n, [{
                    key: "getPadding",
                    value: function(n) {
                        var t = n.split(":")
                          , i = Number(t[0]);
                        return 100 * Number(t[1]) / i + "%"
                    }
                }, {
                    key: "getQueryString",
                    value: function(n) {
                        var t = "";
                        return Object.keys(n).forEach(function(i) {
                            t += i + "=" + n[i] + "&"
                        }),
                        t.substr(0, t.length - 1)
                    }
                }, {
                    key: "getVideoUrl",
                    value: function(n, t, i) {
                        return "youtube" === t ? this.getYoutubeUrl(n.youtube, i) : "vimeo" === t ? this.getVimeoUrl(n.vimeo, i) : "facebook" === t ? this.getFacebookUrl(n.facebook, i) : ""
                    }
                }, {
                    key: "getVimeoUrl",
                    value: function(n, t) {
                        return "//player.vimeo.com/video/" + t + "?" + this.getQueryString(n)
                    }
                }, {
                    key: "getYoutubeUrl",
                    value: function(n, t) {
                        var i = this.getQueryString(n);
                        return !0 === n.nocookie ? "//www.youtube-nocookie.com/embed/" + t + "?" + i : "//www.youtube.com/embed/" + t + "?" + i
                    }
                }, {
                    key: "getFacebookUrl",
                    value: function(n, t) {
                        return "//www.facebook.com/v2.10/plugins/video.php?href=https://www.facebook.com/facebook/videos/" + t + "&" + this.getQueryString(n)
                    }
                }, {
                    key: "getHtml",
                    value: function(n, t, i) {
                        var u = this.getPadding(n.ratio)
                          , r = n.classNames;
                        return '\n      <div class="' + r.modalVideo + '" tabindex="-1" role="dialog" aria-label="' + n.aria.openMessage + '" id="' + i + '">\n        <div class="' + r.modalVideoBody + '">\n          <div class="' + r.modalVideoInner + '">\n            <div class="' + r.modalVideoIframeWrap + '" style="padding-bottom:' + u + '">\n              <button class="' + r.modalVideoCloseBtn + ' js-modal-video-dismiss-btn" aria-label="' + n.aria.dismissBtnMessage + "\"><\/button>\n              <iframe width='460' height='230' src=\"" + t + "\" frameborder='0' allowfullscreen=" + n.allowFullScreen + ' tabindex="-1"/>\n            <\/div>\n          <\/div>\n        <\/div>\n      <\/div>\n    '
                    }
                }]),
                n
            }();
            i.default = s;
            t.exports = i.default
        }
        , {
            "../lib/util": 5,
            "custom-event-polyfill": 1,
            "es6-object-assign": 2
        }],
        4: [function(n, t) {
            "use strict";
            t.exports = n("./core/")
        }
        , {
            "./core/": 3
        }],
        5: [function(n, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            i.append = function(n, t) {
                var i = document.createElement("div");
                for (i.innerHTML = t; i.children.length > 0; )
                    n.appendChild(i.children[0])
            }
            ;
            i.getUniqId = function() {
                return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()
            }
            ;
            i.remove = function(n) {
                n && n.parentNode && n.parentNode.removeChild(n)
            }
            ;
            i.addClass = function(n, t) {
                n.classList ? n.classList.add(t) : n.className += " " + t
            }
            ;
            i.triggerEvent = function(n, t, i) {
                var r = void 0;
                window.CustomEvent ? r = new CustomEvent(t,{
                    cancelable: !0
                }) : (r = document.createEvent("CustomEvent"),
                r.initCustomEvent(t, !1, !1, i));
                n.dispatchEvent(r)
            }
        }
        , {}]
    }, {}, [4])(4)
})
// JavaScript Document