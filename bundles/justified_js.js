!function(n) {
    n.fn.justifiedGallery = function(t) {
        function c(n, t, i) {
            var r;
            return r = n > t ? n : t,
            100 >= r ? i.settings.sizeRangeSuffixes.lt100 : 240 >= r ? i.settings.sizeRangeSuffixes.lt240 : 320 >= r ? i.settings.sizeRangeSuffixes.lt320 : 500 >= r ? i.settings.sizeRangeSuffixes.lt500 : 640 >= r ? i.settings.sizeRangeSuffixes.lt640 : i.settings.sizeRangeSuffixes.lt1024
        }
        function l(n, t) {
            return -1 !== n.indexOf(t, n.length - t.length)
        }
        function a(n, t) {
            return n.substring(0, n.length - t.length)
        }
        function v(n, t) {
            var r = !1;
            for (var i in t.settings.sizeRangeSuffixes)
                if (0 !== t.settings.sizeRangeSuffixes[i].length) {
                    if (l(n, t.settings.sizeRangeSuffixes[i]))
                        return t.settings.sizeRangeSuffixes[i]
                } else
                    r = !0;
            if (r)
                return "";
            throw "unknown suffix for " + n;
        }
        function y(n, t, i, r) {
            var f = n.match(r.settings.extension)
              , e = null != f ? f[0] : ""
              , u = n.replace(r.settings.extension, "");
            return u = a(u, v(u, r)),
            u + (c(t, i, r) + e)
        }
        function p(t) {
            var i = n(t.currentTarget).find(".caption");
            t.data.settings.cssAnimation ? i.addClass("caption-visible").removeClass("caption-hidden") : i.stop().fadeTo(t.data.settings.captionSettings.animationDuration, t.data.settings.captionSettings.visibleOpacity)
        }
        function w(t) {
            var i = n(t.currentTarget).find(".caption");
            t.data.settings.cssAnimation ? i.removeClass("caption-visible").removeClass("caption-hidden") : i.stop().fadeTo(t.data.settings.captionSettings.animationDuration, t.data.settings.captionSettings.nonVisibleOpacity)
        }
        function u(n, t, i) {
            i.settings.cssAnimation ? (n.addClass("entry-visible"),
            t()) : n.stop().fadeTo(i.settings.imagesAnimationDuration, 1, t)
        }
        function b(n, t) {
            t.settings.cssAnimation ? n.removeClass("entry-visible") : n.stop().fadeTo(0, 0)
        }
        function r(n) {
            var t = n.find("> img");
            return 0 === t.length && (t = n.find("> a > img")),
            t
        }
        function k(t, i, f, e, o, s, c) {
            function g() {
                k !== d && l.attr("src", d)
            }
            var l = r(t), k, d, a, v, b;
            l.css("width", e);
            l.css("height", o);
            l.css("margin-left", -e / 2);
            l.css("margin-top", -o / 2);
            t.width(e);
            t.height(s);
            t.css("top", f);
            t.css("left", i);
            k = l.attr("src");
            d = y(k, e, o, c);
            l.one("error", function() {
                l.attr("src", l.data("jg.originalSrc"))
            });
            "skipped" === l.data("jg.loaded") ? h(k, function() {
                u(t, g, c);
                l.data("jg.loaded", !0)
            }) : u(t, g, c);
            a = t.data("jg.captionMouseEvents");
            c.settings.captions === !0 ? (v = t.find(".caption"),
            0 === v.length && (b = l.attr("alt"),
            "undefined" == typeof b && (b = t.attr("title")),
            "undefined" != typeof b && (v = n('<div class="caption">' + b + "<\/div>"),
            t.append(v))),
            0 !== v.length && (c.settings.cssAnimation || v.stop().fadeTo(c.settings.imagesAnimationDuration, c.settings.captionSettings.nonVisibleOpacity),
            "undefined" == typeof a && (a = {
                mouseenter: p,
                mouseleave: w
            },
            t.on("mouseenter", void 0, c, a.mouseenter),
            t.on("mouseleave", void 0, c, a.mouseleave),
            t.data("jg.captionMouseEvents", a)))) : "undefined" != typeof a && (t.off("mouseenter", void 0, c, a.mouseenter),
            t.off("mouseleave", void 0, c, a.mouseleave),
            t.removeData("jg.captionMouseEvents"))
        }
        function d(n, t) {
            var i, c, f, l, s, e, u = n.settings, a = !0, o = 0, h = n.galleryWidth - 2 * n.border - (n.buildingRow.entriesBuff.length - 1) * u.margins, v = h / n.buildingRow.aspectRatio, y = n.buildingRow.width / h > u.justifyThreshold;
            if (t && "hide" === u.lastRow && !y) {
                for (i = 0; i < n.buildingRow.entriesBuff.length; i++)
                    c = n.buildingRow.entriesBuff[i],
                    u.cssAnimation ? c.removeClass("entry-visible") : c.stop().fadeTo(0, 0);
                return -1
            }
            for (t && !y && "nojustify" === u.lastRow && (a = !1),
            i = 0; i < n.buildingRow.entriesBuff.length; i++)
                f = r(n.buildingRow.entriesBuff[i]),
                l = f.data("jg.imgw") / f.data("jg.imgh"),
                a ? (s = i === n.buildingRow.entriesBuff.length - 1 ? h : v * l,
                e = v) : (s = u.rowHeight * l,
                e = u.rowHeight),
                h -= Math.round(s),
                f.data("jg.jimgw", Math.round(s)),
                f.data("jg.jimgh", Math.ceil(e)),
                (0 === i || o > e) && (o = e);
            return u.fixedHeight && o > u.rowHeight && (o = u.rowHeight),
            {
                minHeight: o,
                justify: a
            }
        }
        function f(n) {
            n.lastAnalyzedIndex = -1;
            n.buildingRow.entriesBuff = [];
            n.buildingRow.aspectRatio = 0;
            n.buildingRow.width = 0;
            n.offY = n.border
        }
        function e(n, t) {
            var o, f, i, s, u = n.settings, h = n.border, e;
            if (s = d(n, t),
            i = s.minHeight,
            t && "hide" === u.lastRow && -1 === i)
                return n.buildingRow.entriesBuff = [],
                n.buildingRow.aspectRatio = 0,
                void (n.buildingRow.width = 0);
            for (u.maxRowHeight > 0 && u.maxRowHeight < i ? i = u.maxRowHeight : 0 === u.maxRowHeight && 1.5 * u.rowHeight < i && (i = 1.5 * u.rowHeight),
            e = 0; e < n.buildingRow.entriesBuff.length; e++)
                o = n.buildingRow.entriesBuff[e],
                f = r(o),
                k(o, h, n.offY, f.data("jg.jimgw"), f.data("jg.jimgh"), i, n),
                h += f.data("jg.jimgw") + u.margins;
            n.$gallery.height(n.offY + i + n.border + (n.spinner.active ? n.spinner.$el.innerHeight() : 0));
            (!t || i <= n.settings.rowHeight && s.justify) && (n.offY += i + n.settings.margins,
            n.buildingRow.entriesBuff = [],
            n.buildingRow.aspectRatio = 0,
            n.buildingRow.width = 0,
            n.$gallery.trigger("jg.rowflush"))
        }
        function g(n) {
            n.checkWidthIntervalId = setInterval(function() {
                var t = parseInt(n.$gallery.width(), 10);
                n.galleryWidth !== t && (n.galleryWidth = t,
                f(n),
                i(n, !0))
            }, n.settings.refreshTime)
        }
        function nt(n) {
            clearInterval(n.intervalId);
            n.intervalId = setInterval(function() {
                n.phase < n.$points.length ? n.$points.eq(n.phase).fadeTo(n.timeslot, 1) : n.$points.eq(n.phase - n.$points.length).fadeTo(n.timeslot, 0);
                n.phase = (n.phase + 1) % (2 * n.$points.length)
            }, n.timeslot)
        }
        function tt(n) {
            clearInterval(n.intervalId);
            n.intervalId = null
        }
        function o(n) {
            n.yield.flushed = 0;
            null !== n.imgAnalyzerTimeout && clearTimeout(n.imgAnalyzerTimeout)
        }
        function i(n, t) {
            o(n);
            n.imgAnalyzerTimeout = setTimeout(function() {
                s(n, t)
            }, .001);
            s(n, t)
        }
        function s(t, u) {
            for (var a, l, s, v, c, h = t.settings, f = t.lastAnalyzedIndex + 1; f < t.entries.length; f++)
                if (l = n(t.entries[f]),
                s = r(l),
                s.data("jg.loaded") === !0 || "skipped" === s.data("jg.loaded")) {
                    if (a = f >= t.entries.length - 1,
                    v = t.galleryWidth - 2 * t.border - (t.buildingRow.entriesBuff.length - 1) * h.margins,
                    c = s.data("jg.imgw") / s.data("jg.imgh"),
                    v / (t.buildingRow.aspectRatio + c) < h.rowHeight && (e(t, a),
                    ++t.yield.flushed >= t.yield.every))
                        return void i(t, u);
                    t.buildingRow.entriesBuff.push(l);
                    t.buildingRow.aspectRatio += c;
                    t.buildingRow.width += c * h.rowHeight;
                    t.lastAnalyzedIndex = f
                } else if ("error" !== s.data("jg.loaded"))
                    return;
            t.buildingRow.entriesBuff.length > 0 && e(t, !0);
            t.spinner.active && (t.spinner.active = !1,
            t.$gallery.height(t.$gallery.height() - t.spinner.$el.innerHeight()),
            t.spinner.$el.detach(),
            tt(t.spinner));
            o(t);
            t.$gallery.trigger(u ? "jg.resize" : "jg.complete")
        }
        function it(n) {
            function r(n) {
                if ("string" != typeof t.sizeRangeSuffixes[n])
                    throw "sizeRangeSuffixes." + n + " must be a string";
            }
            function i(n, t) {
                if ("string" == typeof n[t]) {
                    if (n[t] = parseFloat(n[t], 10),
                    isNaN(n[t]))
                        throw "invalid number for " + t;
                } else {
                    if ("number" != typeof n[t])
                        throw t + " must be a number";
                    if (isNaN(n[t]))
                        throw "invalid number for " + t;
                }
            }
            var t = n.settings;
            if ("object" != typeof t.sizeRangeSuffixes)
                throw "sizeRangeSuffixes must be defined and must be an object";
            if (r("lt100"),
            r("lt240"),
            r("lt320"),
            r("lt500"),
            r("lt640"),
            r("lt1024"),
            i(t, "rowHeight"),
            i(t, "maxRowHeight"),
            t.maxRowHeight > 0 && t.maxRowHeight < t.rowHeight && (t.maxRowHeight = t.rowHeight),
            i(t, "margins"),
            i(t, "border"),
            "nojustify" !== t.lastRow && "justify" !== t.lastRow && "hide" !== t.lastRow)
                throw 'lastRow must be "nojustify", "justify" or "hide"';
            if (i(t, "justifyThreshold"),
            t.justifyThreshold < 0 || t.justifyThreshold > 1)
                throw "justifyThreshold must be in the interval [0,1]";
            if ("boolean" != typeof t.cssAnimation)
                throw "cssAnimation must be a boolean";
            if (i(t.captionSettings, "animationDuration"),
            i(t, "imagesAnimationDuration"),
            i(t.captionSettings, "visibleOpacity"),
            t.captionSettings.visibleOpacity < 0 || t.captionSettings.visibleOpacity > 1)
                throw "captionSettings.visibleOpacity must be in the interval [0, 1]";
            if (i(t.captionSettings, "nonVisibleOpacity"),
            t.captionSettings.visibleOpacity < 0 || t.captionSettings.visibleOpacity > 1)
                throw "captionSettings.nonVisibleOpacity must be in the interval [0, 1]";
            if ("boolean" != typeof t.fixedHeight)
                throw "fixedHeight must be a boolean";
            if ("boolean" != typeof t.captions)
                throw "captions must be a boolean";
            if (i(t, "refreshTime"),
            "boolean" != typeof t.randomize)
                throw "randomize must be a boolean";
        }
        function h(t, i, r) {
            if (i || r) {
                var u = new Image
                  , f = n(u);
                i && f.one("load", function() {
                    f.off("load error");
                    i(u)
                });
                r && f.one("error", function() {
                    f.off("load error");
                    r(u)
                });
                u.src = t
            }
        }
        var rt = {
            sizeRangeSuffixes: {
                lt100: "",
                lt240: "",
                lt320: "",
                lt500: "",
                lt640: "",
                lt1024: ""
            },
            rowHeight: 120,
            maxRowHeight: 0,
            margins: 1,
            border: -1,
            lastRow: "nojustify",
            justifyThreshold: .75,
            fixedHeight: !1,
            waitThumbnailsLoad: !0,
            captions: !0,
            cssAnimation: !1,
            imagesAnimationDuration: 500,
            captionSettings: {
                animationDuration: 500,
                visibleOpacity: .7,
                nonVisibleOpacity: 0
            },
            rel: null,
            target: null,
            extension: /\.[^.\\/]+$/,
            refreshTime: 100,
            randomize: !1
        };
        return this.each(function(u, e) {
            var s = n(e), o, l, a, v;
            if (s.addClass("justified-gallery"),
            o = s.data("jg.context"),
            "undefined" == typeof o) {
                if ("undefined" != typeof t && null !== t && "object" != typeof t)
                    throw "The argument must be an object";
                var y = n('<div class="spinner"><span><\/span><span><\/span><span><\/span><\/div>')
                  , c = n.extend({}, rt, t)
                  , p = c.border >= 0 ? c.border : c.margins;
                o = {
                    settings: c,
                    imgAnalyzerTimeout: null,
                    entries: null,
                    buildingRow: {
                        entriesBuff: [],
                        width: 0,
                        aspectRatio: 0
                    },
                    lastAnalyzedIndex: -1,
                    yield: {
                        every: 2,
                        flushed: 0
                    },
                    border: p,
                    offY: p,
                    spinner: {
                        active: !1,
                        phase: 0,
                        timeslot: 150,
                        $el: y,
                        $points: y.find("span"),
                        intervalId: null
                    },
                    checkWidthIntervalId: null,
                    galleryWidth: s.width(),
                    $gallery: s
                };
                s.data("jg.context", o)
            } else if ("norewind" === t)
                for (l = 0; l < o.buildingRow.entriesBuff.length; l++)
                    b(o.buildingRow.entriesBuff[l], o);
            else
                o.settings = n.extend({}, o.settings, t),
                o.border = o.settings.border >= 0 ? o.settings.border : o.settings.margins,
                f(o);
            (it(o),
            o.entries = s.find("> a, > div:not(.spinner)").toArray(),
            0 !== o.entries.length) && (o.settings.randomize && (o.entries.sort(function() {
                return 2 * Math.random() - 1
            }),
            n.each(o.entries, function() {
                n(this).appendTo(s)
            })),
            a = !1,
            v = !1,
            n.each(o.entries, function(t, u) {
                var e = n(u), f = r(e), c, l, y;
                if (e.addClass("jg-entry"),
                f.data("jg.loaded") !== !0 && "skipped" !== f.data("jg.loaded")) {
                    if (null !== o.settings.rel && e.attr("rel", o.settings.rel),
                    null !== o.settings.target && e.attr("target", o.settings.target),
                    c = "undefined" != typeof f.data("safe-src") ? f.data("safe-src") : f.attr("src"),
                    f.data("jg.originalSrc", c),
                    f.attr("src", c),
                    l = parseInt(f.attr("width"), 10),
                    y = parseInt(f.attr("height"), 10),
                    o.settings.waitThumbnailsLoad !== !0 && !isNaN(l) && !isNaN(y))
                        return f.data("jg.imgw", l),
                        f.data("jg.imgh", y),
                        f.data("jg.loaded", "skipped"),
                        v = !0,
                        i(o, !1),
                        !0;
                    f.data("jg.loaded", !1);
                    a = !0;
                    o.spinner.active === !1 && (o.spinner.active = !0,
                    s.append(o.spinner.$el),
                    s.height(o.offY + o.spinner.$el.innerHeight()),
                    nt(o.spinner));
                    h(c, function(n) {
                        f.data("jg.imgw", n.width);
                        f.data("jg.imgh", n.height);
                        f.data("jg.loaded", !0);
                        i(o, !1)
                    }, function() {
                        f.data("jg.loaded", "error");
                        i(o, !1)
                    })
                }
            }),
            a || v || i(o, !1),
            g(o))
        })
    }
}(jQuery)
// JavaScript Document