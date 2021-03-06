(function(n, t, i, r) {
    "use strict";
    function o(n, t) {
        var r = [], u = 0, f, e;
        n && n.isDefaultPrevented() || (n.preventDefault(),
        t = n && n.data ? n.data.options : t || {},
        f = t.$target || i(n.currentTarget),
        e = f.attr("data-fancybox") || "",
        e ? (r = t.selector ? i(t.selector) : n.data ? n.data.items : [],
        r = r.length ? r.filter('[data-fancybox="' + e + '"]') : i('[data-fancybox="' + e + '"]'),
        u = r.index(f),
        u < 0 && (u = 0)) : r = [f],
        i.fancybox.open(r, t, u))
    }
    if (n.console = n.console || {
        info: function() {}
    },
    i) {
        if (i.fn.fancybox) {
            console.info("fancyBox already initialized");
            return
        }
        var a = {
            loop: !1,
            gutter: 50,
            keyboard: !0,
            arrows: !0,
            infobar: !0,
            smallBtn: "auto",
            toolbar: "auto",
            buttons: ["zoom", "thumbs", "close"],
            idleTime: 3,
            protect: !1,
            modal: !1,
            image: {
                preload: !1
            },
            ajax: {
                settings: {
                    data: {
                        fancybox: !0
                    }
                }
            },
            iframe: {
                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""><\/iframe>',
                preload: !0,
                css: {},
                attr: {
                    scrolling: "auto"
                }
            },
            defaultType: "image",
            animationEffect: "zoom",
            animationDuration: 366,
            zoomOpacity: "auto",
            transitionEffect: "fade",
            transitionDuration: 366,
            slideClass: "",
            baseClass: "",
            baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"><\/div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index><\/span>&nbsp;/&nbsp;<span data-fancybox-count><\/span><\/div><div class="fancybox-toolbar">{{buttons}}<\/div><div class="fancybox-navigation">{{arrows}}<\/div><div class="fancybox-stage"><\/div><div class="fancybox-caption"><\/div><\/div><\/div>',
            spinnerTpl: '<div class="fancybox-loading"><\/div>',
            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<\/p><\/div>',
            btnTpl: {
                download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M13,16 L20,23 L27,16 M20,7 L20,23 M10,24 L10,28 L30,28 L30,24" /><\/svg><\/a>',
                zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M18,17 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 M24,22 L31,29" /><\/svg><\/button>',
                close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /><\/svg><\/button>',
                smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"><\/path><\/svg><\/button>',
                arrowLeft: '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M18,12 L10,20 L18,28 M10,20 L30,20"><\/path><\/svg><\/a>',
                arrowRight: '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 M22,12 L30,20 L22,28"><\/path><\/svg><\/a>'
            },
            parentEl: "body",
            autoFocus: !1,
            backFocus: !0,
            trapFocus: !0,
            fullScreen: {
                autoStart: !1
            },
            touch: {
                vertical: !0,
                momentum: !0
            },
            hash: null,
            media: {},
            slideShow: {
                autoStart: !1,
                speed: 4e3
            },
            thumbs: {
                autoStart: !1,
                hideOnClose: !0,
                parentEl: ".fancybox-container",
                axis: "y"
            },
            wheel: "auto",
            onInit: i.noop,
            beforeLoad: i.noop,
            afterLoad: i.noop,
            beforeShow: i.noop,
            afterShow: i.noop,
            beforeClose: i.noop,
            afterClose: i.noop,
            onActivate: i.noop,
            onDeactivate: i.noop,
            clickContent: function(n) {
                return n.type === "image" ? "zoom" : !1
            },
            clickSlide: "close",
            clickOutside: "close",
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1,
            mobile: {
                idleTime: !1,
                clickContent: function(n) {
                    return n.type === "image" ? "toggleControls" : !1
                },
                clickSlide: function(n) {
                    return n.type === "image" ? "toggleControls" : "close"
                },
                dblclickContent: function(n) {
                    return n.type === "image" ? "zoom" : !1
                },
                dblclickSlide: function(n) {
                    return n.type === "image" ? "zoom" : !1
                }
            },
            lang: "en",
            i18n: {
                en: {
                    CLOSE: "Close",
                    NEXT: "Next",
                    PREV: "Previous",
                    ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                    PLAY_START: "Start slideshow",
                    PLAY_STOP: "Pause slideshow",
                    FULL_SCREEN: "Full screen",
                    THUMBS: "Thumbnails",
                    DOWNLOAD: "Download",
                    SHARE: "Share",
                    ZOOM: "Zoom"
                },
                de: {
                    CLOSE: "Schliessen",
                    NEXT: "Weiter",
                    PREV: "Zur??ck",
                    ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp??ter nochmal.",
                    PLAY_START: "Diaschau starten",
                    PLAY_STOP: "Diaschau beenden",
                    FULL_SCREEN: "Vollbild",
                    THUMBS: "Vorschaubilder",
                    DOWNLOAD: "Herunterladen",
                    SHARE: "Teilen",
                    ZOOM: "Ma??stab"
                }
            }
        }
          , e = i(n)
          , u = i(t)
          , v = 0
          , y = function(n) {
            return n && n.hasOwnProperty && n instanceof i
        }
          , c = function() {
            return n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || function(t) {
                return n.setTimeout(t, 1e3 / 60)
            }
        }()
          , l = function() {
            var u = t.createElement("fakeelement"), n, i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (n in i)
                if (u.style[n] !== r)
                    return i[n];
            return "transitionend"
        }()
          , f = function(n) {
            return n && n.length && n[0].offsetHeight
        }
          , s = function(n, t) {
            var r = i.extend(!0, {}, n, t);
            return i.each(t, function(n, t) {
                i.isArray(t) && (r[n] = t)
            }),
            r
        }
          , h = function(n, r, u) {
            var f = this;
            (f.opts = s({
                index: u
            }, i.fancybox.defaults),
            i.isPlainObject(r) && (f.opts = s(f.opts, r)),
            i.fancybox.isMobile && (f.opts = s(f.opts, f.opts.mobile)),
            f.id = f.opts.id || ++v,
            f.currIndex = parseInt(f.opts.index, 10) || 0,
            f.prevIndex = null,
            f.prevPos = null,
            f.currPos = 0,
            f.firstRun = !0,
            f.group = [],
            f.slides = {},
            f.addContent(n),
            f.group.length) && (f.$lastFocus = i(t.activeElement).trigger("blur"),
            f.init())
        };
        i.extend(h.prototype, {
            init: function() {
                var u = this, c = u.group[u.currIndex], f = c.opts, o = i.fancybox.scrollbarWidth, e, s, h;
                i.fancybox.getInstance() || (i("body").addClass("fancybox-active"),
                !i.fancybox.isMobile && t.body.scrollHeight > n.innerHeight && (o === r && (e = i('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body"),
                o = i.fancybox.scrollbarWidth = e[0].offsetWidth - e[0].clientWidth,
                e.remove()),
                i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + o + "px; }<\/style>"),
                i("body").addClass("compensate-for-scrollbar")));
                h = "";
                i.each(f.buttons, function(n, t) {
                    h += f.btnTpl[t] || ""
                });
                s = i(u.translate(u, f.baseTpl.replace("{{buttons}}", h).replace("{{arrows}}", f.btnTpl.arrowLeft + f.btnTpl.arrowRight))).attr("id", "fancybox-container-" + u.id).addClass("fancybox-is-hidden").addClass(f.baseClass).data("FancyBox", u).appendTo(f.parentEl);
                u.$refs = {
                    container: s
                };
                ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(n) {
                    u.$refs[n] = s.find(".fancybox-" + n)
                });
                u.trigger("onInit");
                u.activate();
                u.jumpTo(u.currIndex)
            },
            translate: function(n, t) {
                var i = n.opts.i18n[n.opts.lang];
                return t.replace(/\{\{(\w+)\}\}/g, function(n, t) {
                    var u = i[t];
                    return u === r ? n : u
                })
            },
            addContent: function(n) {
                var t = this, f = i.makeArray(n), u;
                i.each(f, function(n, u) {
                    var f = {}, e = {}, h, o, l, s, c;
                    i.isPlainObject(u) ? (f = u,
                    e = u.opts || u) : i.type(u) === "object" && i(u).length ? (h = i(u),
                    e = h.data() || {},
                    e = i.extend(!0, {}, e, e.options),
                    e.$orig = h,
                    f.src = t.opts.src || e.src || h.attr("href"),
                    f.type || f.src || (f.type = "inline",
                    f.src = u)) : f = {
                        type: "html",
                        src: u + ""
                    };
                    f.opts = i.extend(!0, {}, t.opts, e);
                    i.isArray(e.buttons) && (f.opts.buttons = e.buttons);
                    o = f.type || f.opts.type;
                    s = f.src || "";
                    !o && s && ((l = s.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)) ? (o = "video",
                    f.opts.videoFormat || (f.opts.videoFormat = "video/" + (l[1] === "ogv" ? "ogg" : l[1]))) : s.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? o = "image" : s.match(/\.(pdf)((\?|#).*)?$/i) ? o = "iframe" : s.charAt(0) === "#" && (o = "inline"));
                    o ? f.type = o : t.trigger("objectNeedsType", f);
                    f.contentType || (f.contentType = i.inArray(f.type, ["html", "inline", "ajax"]) > -1 ? "html" : f.type);
                    f.index = t.group.length;
                    f.opts.smallBtn == "auto" && (f.opts.smallBtn = i.inArray(f.type, ["html", "inline", "ajax"]) > -1);
                    f.opts.toolbar === "auto" && (f.opts.toolbar = !f.opts.smallBtn);
                    f.opts.$trigger && f.index === t.opts.index && (f.opts.$thumb = f.opts.$trigger.find("img:first"));
                    f.opts.$thumb && f.opts.$thumb.length || !f.opts.$orig || (f.opts.$thumb = f.opts.$orig.find("img:first"));
                    i.type(f.opts.caption) === "function" && (f.opts.caption = f.opts.caption.apply(u, [t, f]));
                    i.type(t.opts.caption) === "function" && (f.opts.caption = t.opts.caption.apply(u, [t, f]));
                    f.opts.caption instanceof i || (f.opts.caption = f.opts.caption === r ? "" : f.opts.caption + "");
                    f.type === "ajax" && (c = s.split(/\s+/, 2),
                    c.length > 1 && (f.src = c.shift(),
                    f.opts.filter = c.shift()));
                    f.opts.modal && (f.opts = i.extend(!0, f.opts, {
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    }));
                    t.group.push(f)
                });
                Object.keys(t.slides).length && (t.updateControls(),
                u = t.Thumbs,
                u && u.isActive && (u.create(),
                u.focus()))
            },
            addEvents: function() {
                var r = this;
                r.removeEvents();
                r.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(n) {
                    n.stopPropagation();
                    n.preventDefault();
                    r.close(n)
                }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(n) {
                    n.stopPropagation();
                    n.preventDefault();
                    r.previous()
                }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(n) {
                    n.stopPropagation();
                    n.preventDefault();
                    r.next()
                }).on("click.fb", "[data-fancybox-zoom]", function() {
                    r[r.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                });
                e.on("orientationchange.fb resize.fb", function(n) {
                    n && n.originalEvent && n.originalEvent.type === "resize" ? c(function() {
                        r.update()
                    }) : (r.$refs.stage.hide(),
                    setTimeout(function() {
                        r.$refs.stage.show();
                        r.update()
                    }, i.fancybox.isMobile ? 600 : 250))
                });
                u.on("focusin.fb", function(n) {
                    var r = i.fancybox ? i.fancybox.getInstance() : null;
                    r.isClosing || !r.current || !r.current.opts.trapFocus || i(n.target).hasClass("fancybox-container") || i(n.target).is(t) || r && i(n.target).css("position") !== "fixed" && !r.$refs.container.has(n.target).length && (n.stopPropagation(),
                    r.focus())
                });
                u.on("keydown.fb", function(n) {
                    var u = r.current
                      , t = n.keyCode || n.which;
                    if (u && u.opts.keyboard && !n.ctrlKey && !n.altKey && !n.shiftKey && !i(n.target).is("input") && !i(n.target).is("textarea")) {
                        if (t === 8 || t === 27) {
                            n.preventDefault();
                            r.close(n);
                            return
                        }
                        if (t === 37 || t === 38) {
                            n.preventDefault();
                            r.previous();
                            return
                        }
                        if (t === 39 || t === 40) {
                            n.preventDefault();
                            r.next();
                            return
                        }
                        r.trigger("afterKeydown", n, t)
                    }
                });
                if (r.group[r.currIndex].opts.idleTime) {
                    r.idleSecondsCounter = 0;
                    u.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function() {
                        r.idleSecondsCounter = 0;
                        r.isIdle && r.showControls();
                        r.isIdle = !1
                    });
                    r.idleInterval = n.setInterval(function() {
                        r.idleSecondsCounter++;
                        r.idleSecondsCounter >= r.group[r.currIndex].opts.idleTime && !r.isDragging && (r.isIdle = !0,
                        r.idleSecondsCounter = 0,
                        r.hideControls())
                    }, 1e3)
                }
            },
            removeEvents: function() {
                var t = this;
                e.off("orientationchange.fb resize.fb");
                u.off("focusin.fb keydown.fb .fb-idle");
                this.$refs.container.off(".fb-close .fb-prev .fb-next");
                t.idleInterval && (n.clearInterval(t.idleInterval),
                t.idleInterval = null)
            },
            previous: function(n) {
                return this.jumpTo(this.currPos - 1, n)
            },
            next: function(n) {
                return this.jumpTo(this.currPos + 1, n)
            },
            jumpTo: function(n, t) {
                var u = this, c = u.group.length, h, l, e, o, v, a, s;
                if (!u.isDragging && !u.isClosing && (!u.isAnimating || !u.firstRun)) {
                    if (n = parseInt(n, 10),
                    l = u.current ? u.current.opts.loop : u.opts.loop,
                    !l && (n < 0 || n >= c))
                        return !1;
                    if (h = u.firstRun = !Object.keys(u.slides).length,
                    !(c < 2) || h || !u.isDragging) {
                        if (o = u.current,
                        u.prevIndex = u.currIndex,
                        u.prevPos = u.currPos,
                        e = u.createSlide(n),
                        c > 1 && ((l || e.index > 0) && u.createSlide(n - 1),
                        (l || e.index < c - 1) && u.createSlide(n + 1)),
                        u.current = e,
                        u.currIndex = e.index,
                        u.currPos = e.pos,
                        u.trigger("beforeShow", h),
                        u.updateControls(),
                        a = i.fancybox.getTranslate(e.$slide),
                        e.isMoved = (a.left !== 0 || a.top !== 0) && !e.$slide.hasClass("fancybox-animated"),
                        e.forcedDuration = r,
                        i.isNumeric(t) ? e.forcedDuration = t : t = e.opts[h ? "animationDuration" : "transitionDuration"],
                        t = parseInt(t, 10),
                        h) {
                            e.opts.animationEffect && t && u.$refs.container.css("transition-duration", t + "ms");
                            u.$refs.container.removeClass("fancybox-is-hidden");
                            f(u.$refs.container);
                            u.$refs.container.addClass("fancybox-is-open");
                            f(u.$refs.container);
                            e.$slide.addClass("fancybox-slide--previous");
                            u.loadSlide(e);
                            e.$slide.removeClass("fancybox-slide--previous").addClass("fancybox-slide--current");
                            u.preload("image");
                            return
                        }
                        (i.each(u.slides, function(n, t) {
                            i.fancybox.stop(t.$slide)
                        }),
                        e.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),
                        e.isMoved ? (v = Math.round(e.$slide.width()),
                        i.each(u.slides, function(n, r) {
                            var f = r.pos - e.pos;
                            i.fancybox.animate(r.$slide, {
                                top: 0,
                                left: f * v + f * r.opts.gutter
                            }, t, function() {
                                r.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous");
                                r.pos === u.currPos && (e.isMoved = !1,
                                u.complete())
                            })
                        })) : u.$refs.stage.children().removeAttr("style"),
                        e.isLoaded ? u.revealContent(e) : u.loadSlide(e),
                        u.preload("image"),
                        o.pos !== e.pos) && (s = "fancybox-slide--" + (o.pos > e.pos ? "next" : "previous"),
                        o.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),
                        o.isComplete = !1,
                        t && (e.isMoved || e.opts.transitionEffect)) && (e.isMoved ? o.$slide.addClass(s) : (s = "fancybox-animated " + s + " fancybox-fx-" + e.opts.transitionEffect,
                        i.fancybox.animate(o.$slide, s, t, function() {
                            o.$slide.removeClass(s).removeAttr("style")
                        })))
                    }
                }
            },
            createSlide: function(n) {
                var t = this, u, r;
                return r = n % t.group.length,
                r = r < 0 ? t.group.length + r : r,
                !t.slides[n] && t.group[r] && (u = i('<div class="fancybox-slide"><\/div>').appendTo(t.$refs.stage),
                t.slides[n] = i.extend(!0, {}, t.group[r], {
                    pos: n,
                    $slide: u,
                    isLoaded: !1
                }),
                t.updateSlide(t.slides[n])),
                t.slides[n]
            },
            scaleToActual: function(n, t, u) {
                var e = this, f = e.current, y = f.$content, a = i.fancybox.getTranslate(f.$slide).width, v = i.fancybox.getTranslate(f.$slide).height, c = f.width, l = f.height, o, s, h, p, w;
                !e.isAnimating && y && f.type == "image" && f.isLoaded && !f.hasError && (i.fancybox.stop(y),
                e.isAnimating = !0,
                n = n === r ? a * .5 : n,
                t = t === r ? v * .5 : t,
                o = i.fancybox.getTranslate(y),
                o.top -= i.fancybox.getTranslate(f.$slide).top,
                o.left -= i.fancybox.getTranslate(f.$slide).left,
                p = c / o.width,
                w = l / o.height,
                s = a * .5 - c * .5,
                h = v * .5 - l * .5,
                c > a && (s = o.left * p - (n * p - n),
                s > 0 && (s = 0),
                s < a - c && (s = a - c)),
                l > v && (h = o.top * w - (t * w - t),
                h > 0 && (h = 0),
                h < v - l && (h = v - l)),
                e.updateCursor(c, l),
                i.fancybox.animate(y, {
                    top: h,
                    left: s,
                    scaleX: p,
                    scaleY: w
                }, u || 330, function() {
                    e.isAnimating = !1
                }),
                e.SlideShow && e.SlideShow.isActive && e.SlideShow.stop())
            },
            scaleToFit: function(n) {
                var r = this, u = r.current, f = u.$content, t;
                !r.isAnimating && f && u.type == "image" && u.isLoaded && !u.hasError && (i.fancybox.stop(f),
                r.isAnimating = !0,
                t = r.getFitPos(u),
                r.updateCursor(t.width, t.height),
                i.fancybox.animate(f, {
                    top: t.top,
                    left: t.left,
                    scaleX: t.width / f.width(),
                    scaleY: t.height / f.height()
                }, n || 330, function() {
                    r.isAnimating = !1
                }))
            },
            getFitPos: function(n) {
                var h = this, c = n.$content, t = n.width || n.opts.width, i = n.height || n.opts.height, e, o, s, r, u, f = {};
                return !n.isLoaded || !c || !c.length ? !1 : (r = {
                    top: parseInt(n.$slide.css("paddingTop"), 10),
                    right: parseInt(n.$slide.css("paddingRight"), 10),
                    bottom: parseInt(n.$slide.css("paddingBottom"), 10),
                    left: parseInt(n.$slide.css("paddingLeft"), 10)
                },
                e = parseInt(h.$refs.stage.width(), 10) - (r.left + r.right),
                o = parseInt(h.$refs.stage.height(), 10) - (r.top + r.bottom),
                t && i || (t = e,
                i = o),
                s = Math.min(1, e / t, o / i),
                t = Math.floor(s * t),
                i = Math.floor(s * i),
                n.type === "image" ? (f.top = Math.floor((o - i) * .5) + r.top,
                f.left = Math.floor((e - t) * .5) + r.left) : n.contentType === "video" && (u = n.opts.width && n.opts.height ? t / i : n.opts.ratio || 16 / 9,
                i > t / u ? i = t / u : t > i * u && (t = i * u)),
                f.width = t,
                f.height = i,
                f)
            },
            update: function() {
                var n = this;
                i.each(n.slides, function(t, i) {
                    n.updateSlide(i)
                })
            },
            updateSlide: function(n) {
                var t = this
                  , r = n && n.$content
                  , u = n.width || n.opts.width
                  , f = n.height || n.opts.height;
                r && (u || f || n.contentType === "video") && !n.hasError && (i.fancybox.stop(r),
                i.fancybox.setTranslate(r, t.getFitPos(n)),
                n.pos === t.currPos && (t.isAnimating = !1,
                t.updateCursor()));
                n.$slide.trigger("refresh");
                t.$refs.toolbar.toggleClass("compensate-for-scrollbar", n.$slide.get(0).scrollHeight > n.$slide.get(0).clientHeight);
                t.trigger("onUpdate", n)
            },
            centerSlide: function(n, t) {
                var f = this, e, u;
                f.current && (e = Math.round(n.$slide.width()),
                u = n.pos - f.current.pos,
                i.fancybox.animate(n.$slide, {
                    top: 0,
                    left: u * e + u * n.opts.gutter,
                    opacity: 1
                }, t === r ? 0 : t, null, !1))
            },
            updateCursor: function(n, t) {
                var u = this, r = u.current, f = u.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut"), e;
                r && !u.isClosing && (e = u.isZoomable(),
                f.toggleClass("fancybox-is-zoomable", e),
                i("[data-fancybox-zoom]").prop("disabled", !e),
                e && (r.opts.clickContent === "zoom" || i.isFunction(r.opts.clickContent) && r.opts.clickContent(r) === "zoom") ? u.isScaledDown(n, t) ? f.addClass("fancybox-can-zoomIn") : r.opts.touch ? f.addClass("fancybox-can-drag") : f.addClass("fancybox-can-zoomOut") : r.opts.touch && r.contentType !== "video" && f.addClass("fancybox-can-drag"))
            },
            isZoomable: function() {
                var t = this, n = t.current, i;
                return n && !t.isClosing && n.type === "image" && !n.hasError && (!n.isLoaded || (i = t.getFitPos(n),
                n.width > i.width || n.height > i.height)) ? !0 : !1
            },
            isScaledDown: function(n, t) {
                var o = this
                  , u = !1
                  , f = o.current
                  , e = f.$content;
                return n !== r && t !== r ? u = n < f.width && t < f.height : e && (u = i.fancybox.getTranslate(e),
                u = u.width < f.width && u.height < f.height),
                u
            },
            canPan: function() {
                var r = this, n = !1, t = r.current, i;
                return t.type === "image" && (i = t.$content) && !t.hasError && (n = r.getFitPos(t),
                n = Math.abs(i.width() - n.width) > 1 || Math.abs(i.height() - n.height) > 1),
                n
            },
            loadSlide: function(n) {
                var t = this, u, r, f;
                if (!n.isLoading && !n.isLoaded) {
                    n.isLoading = !0;
                    t.trigger("beforeLoad", n);
                    u = n.type;
                    r = n.$slide;
                    r.off("refresh").trigger("onReset").addClass(n.opts.slideClass);
                    switch (u) {
                    case "image":
                        t.setImage(n);
                        break;
                    case "iframe":
                        t.setIframe(n);
                        break;
                    case "html":
                        t.setContent(n, n.src || n.content);
                        break;
                    case "video":
                        t.setContent(n, '<video class="fancybox-video" controls controlsList="nodownload"><source src="' + n.src + '" type="' + n.opts.videoFormat + "\">Your browser doesn't support HTML5 video<\/video");
                        break;
                    case "inline":
                        i(n.src).length ? t.setContent(n, i(n.src)) : t.setError(n);
                        break;
                    case "ajax":
                        t.showLoading(n);
                        f = i.ajax(i.extend({}, n.opts.ajax.settings, {
                            url: n.src,
                            success: function(i, r) {
                                r === "success" && t.setContent(n, i)
                            },
                            error: function(i, r) {
                                i && r !== "abort" && t.setError(n)
                            }
                        }));
                        r.one("onReset", function() {
                            f.abort()
                        });
                        break;
                    default:
                        t.setError(n)
                    }
                    return !0
                }
            },
            setImage: function(t) {
                var o = this, s = t.opts.srcset || t.opts.image.srcset, h, r, u, c, l, e, f;
                if (t.timouts = setTimeout(function() {
                    var n = t.$image;
                    !t.isLoading || n && n[0].complete || t.hasError || o.showLoading(t)
                }, 350),
                s) {
                    for (c = n.devicePixelRatio || 1,
                    l = n.innerWidth * c,
                    u = s.split(",").map(function(n) {
                        var t = {};
                        return n.trim().split(/\s+/).forEach(function(n, i) {
                            var r = parseInt(n.substring(0, n.length - 1), 10);
                            if (i === 0)
                                return t.url = n;
                            r && (t.value = r,
                            t.postfix = n[n.length - 1])
                        }),
                        t
                    }),
                    u.sort(function(n, t) {
                        return n.value - t.value
                    }),
                    e = 0; e < u.length; e++)
                        if (f = u[e],
                        f.postfix === "w" && f.value >= l || f.postfix === "x" && f.value >= c) {
                            r = f;
                            break
                        }
                    !r && u.length && (r = u[u.length - 1]);
                    r && (t.src = r.url,
                    t.width && t.height && r.postfix == "w" && (t.height = t.width / t.height * r.value,
                    t.width = r.value),
                    t.opts.srcset = s)
                }
                t.$content = i('<div class="fancybox-content"><\/div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image"));
                h = t.opts.thumb || (t.opts.$thumb && t.opts.$thumb.length ? t.opts.$thumb.attr("src") : !1);
                t.opts.preload !== !1 && t.opts.width && t.opts.height && h && (t.width = t.opts.width,
                t.height = t.opts.height,
                t.$ghost = i("<img />").one("error", function() {
                    i(this).remove();
                    t.$ghost = null
                }).one("load", function() {
                    o.afterLoad(t)
                }).addClass("fancybox-image").appendTo(t.$content).attr("src", h));
                o.setBigImage(t)
            },
            setBigImage: function(n) {
                var r = this
                  , t = i("<img />");
                n.$image = t.one("error", function() {
                    r.setError(n)
                }).one("load", function() {
                    var i;
                    (n.$ghost || (r.resolveImageSlideSize(n, this.naturalWidth, this.naturalHeight),
                    r.afterLoad(n)),
                    n.timouts && (clearTimeout(n.timouts),
                    n.timouts = null),
                    r.isClosing) || (n.opts.srcset && (i = n.opts.sizes,
                    i && i !== "auto" || (i = (n.width / n.height > 1 && e.width() / e.height() > 1 ? "100" : Math.round(n.width / n.height * 100)) + "vw"),
                    t.attr("sizes", i).attr("srcset", n.opts.srcset)),
                    n.$ghost && setTimeout(function() {
                        n.$ghost && !r.isClosing && n.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, n.height / 1600))),
                    r.hideLoading(n))
                }).addClass("fancybox-image").attr("src", n.src).appendTo(n.$content);
                (t[0].complete || t[0].readyState == "complete") && t[0].naturalWidth && t[0].naturalHeight ? t.trigger("load") : t[0].error && t.trigger("error")
            },
            resolveImageSlideSize: function(n, t, i) {
                var r = parseInt(n.opts.width, 10)
                  , u = parseInt(n.opts.height, 10);
                n.width = t;
                n.height = i;
                r > 0 && (n.width = r,
                n.height = Math.floor(r * i / t));
                u > 0 && (n.width = Math.floor(u * t / i),
                n.height = u)
            },
            setIframe: function(n) {
                var e = this, t = n.opts.iframe, f = n.$slide, u;
                if (n.$content = i('<div class="fancybox-content' + (t.preload ? " fancybox-is-hidden" : "") + '"><\/div>').css(t.css).appendTo(f),
                f.addClass("fancybox-slide--" + n.contentType),
                n.$iframe = u = i(t.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(t.attr).appendTo(n.$content),
                t.preload) {
                    e.showLoading(n);
                    u.on("load.fb error.fb", function() {
                        this.isReady = 1;
                        n.$slide.trigger("refresh");
                        e.afterLoad(n)
                    });
                    f.on("refresh.fb", function() {
                        var f = n.$content, e = t.css.width, o = t.css.height, s, i;
                        if (u[0].isReady === 1) {
                            try {
                                s = u.contents();
                                i = s.find("body")
                            } catch (h) {}
                            i && i.length && i.children().length && (f.css({
                                width: "",
                                height: ""
                            }),
                            e === r && (e = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))),
                            e && f.width(e),
                            o === r && (o = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))),
                            o && f.height(o));
                            f.removeClass("fancybox-is-hidden")
                        }
                    })
                } else
                    this.afterLoad(n);
                u.attr("src", n.src);
                f.one("onReset", function() {
                    try {
                        i(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                    } catch (t) {}
                    i(this).off("refresh.fb").empty();
                    n.isLoaded = !1
                })
            },
            setContent: function(n, t) {
                var r = this;
                if (!r.isClosing) {
                    r.hideLoading(n);
                    n.$content && i.fancybox.stop(n.$content);
                    n.$slide.empty();
                    y(t) && t.parent().length ? (t.parent().parent(".fancybox-slide--inline").trigger("onReset"),
                    n.$placeholder = i("<div>").hide().insertAfter(t),
                    t.css("display", "inline-block")) : n.hasError || (i.type(t) === "string" && (t = i("<div>").append(i.trim(t)).contents(),
                    t[0].nodeType === 3 && (t = i("<div>").html(t))),
                    n.opts.filter && (t = i("<div>").html(t).find(n.opts.filter)));
                    n.$slide.one("onReset", function() {
                        i(this).find("video,audio").trigger("pause");
                        n.$placeholder && (n.$placeholder.after(t.hide()).remove(),
                        n.$placeholder = null);
                        n.$smallBtn && (n.$smallBtn.remove(),
                        n.$smallBtn = null);
                        n.hasError || (i(this).empty(),
                        n.isLoaded = !1)
                    });
                    i(t).appendTo(n.$slide);
                    i(t).is("video,audio") && (i(t).addClass("fancybox-video"),
                    i(t).wrap("<div><\/div>"),
                    n.contentType = "video",
                    n.opts.width = n.opts.width || i(t).attr("width"),
                    n.opts.height = n.opts.height || i(t).attr("height"));
                    n.$content = n.$slide.children().filter("div,form,main,video,audio").first().addClass("fancybox-content");
                    n.$slide.addClass("fancybox-slide--" + n.contentType);
                    this.afterLoad(n)
                }
            },
            setError: function(n) {
                n.hasError = !0;
                n.$slide.trigger("onReset").removeClass("fancybox-slide--" + n.contentType).addClass("fancybox-slide--error");
                n.contentType = "html";
                this.setContent(n, this.translate(n, n.opts.errorTpl));
                n.pos === this.currPos && (this.isAnimating = !1)
            },
            showLoading: function(n) {
                var t = this;
                n = n || t.current;
                n && !n.$spinner && (n.$spinner = i(t.translate(t, t.opts.spinnerTpl)).appendTo(n.$slide))
            },
            hideLoading: function(n) {
                var t = this;
                n = n || t.current;
                n && n.$spinner && (n.$spinner.remove(),
                delete n.$spinner)
            },
            afterLoad: function(n) {
                var t = this;
                if (!t.isClosing) {
                    if (n.isLoading = !1,
                    n.isLoaded = !0,
                    t.trigger("afterLoad", n),
                    t.hideLoading(n),
                    n.pos === t.currPos && t.updateCursor(),
                    !n.opts.smallBtn || n.$smallBtn && n.$smallBtn.length || (n.$smallBtn = i(t.translate(n, n.opts.btnTpl.smallBtn)).prependTo(n.$content)),
                    n.opts.protect && n.$content && !n.hasError) {
                        n.$content.on("contextmenu.fb", function(n) {
                            return n.button == 2 && n.preventDefault(),
                            !0
                        });
                        n.type === "image" && i('<div class="fancybox-spaceball"><\/div>').appendTo(n.$content)
                    }
                    t.revealContent(n)
                }
            },
            revealContent: function(n) {
                var t = this, h = n.$slide, e = !1, o = !1, u, l, s, c;
                if (u = n.opts[t.firstRun ? "animationEffect" : "transitionEffect"],
                s = n.opts[t.firstRun ? "animationDuration" : "transitionDuration"],
                s = parseInt(n.forcedDuration === r ? s : n.forcedDuration, 10),
                n.pos === t.currPos && (n.isComplete ? u = !1 : t.isAnimating = !0),
                (n.isMoved || n.pos !== t.currPos || !s) && (u = !1),
                u === "zoom" && (n.pos === t.currPos && s && n.type === "image" && !n.hasError && (o = t.getThumbPos(n)) ? e = t.getFitPos(n) : u = "fade"),
                u === "zoom") {
                    e.scaleX = e.width / o.width;
                    e.scaleY = e.height / o.height;
                    c = n.opts.zoomOpacity;
                    c == "auto" && (c = Math.abs(n.width / n.height - o.width / o.height) > .1);
                    c && (o.opacity = .1,
                    e.opacity = 1);
                    i.fancybox.setTranslate(n.$content.removeClass("fancybox-is-hidden"), o);
                    f(n.$content);
                    i.fancybox.animate(n.$content, e, s, function() {
                        t.isAnimating = !1;
                        t.complete()
                    });
                    return
                }
                if (t.updateSlide(n),
                !u) {
                    f(h);
                    n.$content.removeClass("fancybox-is-hidden");
                    n.pos === t.currPos && t.complete();
                    return
                }
                i.fancybox.stop(h);
                l = "fancybox-animated fancybox-slide--" + (n.pos >= t.prevPos ? "next" : "previous") + " fancybox-fx-" + u;
                h.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(l);
                n.$content.removeClass("fancybox-is-hidden");
                f(h);
                i.fancybox.animate(h, "fancybox-slide--current", s, function() {
                    h.removeClass(l).removeAttr("style");
                    n.pos === t.currPos && t.complete()
                }, !0)
            },
            getThumbPos: function(r) {
                var s = this, o = !1, u = r.opts.$thumb, f = u && u.length && u[0].ownerDocument === t ? u.offset() : 0, e, h = function(t) {
                    for (var u = t[0], r = u.getBoundingClientRect(), f = [], e; u.parentElement !== null; )
                        (i(u.parentElement).css("overflow") === "hidden" || i(u.parentElement).css("overflow") === "auto") && f.push(u.parentElement.getBoundingClientRect()),
                        u = u.parentElement;
                    return e = f.every(function(n) {
                        var t = Math.min(r.right, n.right) - Math.max(r.left, n.left)
                          , i = Math.min(r.bottom, n.bottom) - Math.max(r.top, n.top);
                        return t > 0 && i > 0
                    }),
                    e && r.bottom > 0 && r.right > 0 && r.left < i(n).width() && r.top < i(n).height()
                };
                return f && h(u) && (e = s.$refs.stage.offset(),
                o = {
                    top: f.top - e.top + parseFloat(u.css("border-top-width") || 0),
                    left: f.left - e.left + parseFloat(u.css("border-left-width") || 0),
                    width: u.width(),
                    height: u.height(),
                    scaleX: 1,
                    scaleY: 1
                }),
                o
            },
            complete: function() {
                var r = this
                  , n = r.current
                  , u = {};
                !n.isMoved && n.isLoaded && (n.isComplete || (n.isComplete = !0,
                n.$slide.siblings().trigger("onReset"),
                r.preload("inline"),
                f(n.$slide),
                n.$slide.addClass("fancybox-slide--complete"),
                i.each(r.slides, function(n, t) {
                    t.pos >= r.currPos - 1 && t.pos <= r.currPos + 1 ? u[t.pos] = t : t && (i.fancybox.stop(t.$slide),
                    t.$slide.off().remove())
                }),
                r.slides = u),
                r.isAnimating = !1,
                r.updateCursor(),
                r.trigger("afterShow"),
                n.$slide.find("video,audio").filter(":visible:first").trigger("play"),
                !i(t.activeElement).is("[disabled]") && (!n.opts.autoFocus || n.type == "image" || n.type === "iframe") || r.focus())
            },
            preload: function(n) {
                var t = this
                  , i = t.slides[t.currPos + 1]
                  , r = t.slides[t.currPos - 1];
                i && i.type === n && t.loadSlide(i);
                r && r.type === n && t.loadSlide(r)
            },
            focus: function() {
                var t = this.current, n;
                this.isClosing || t && t.isComplete && t.$content && (n = t.$content.find("input[autofocus]:enabled:visible:first"),
                n.length || (n = t.$content.find("button,:input,[tabindex],a").filter(":enabled:visible:first")),
                n = n && n.length ? n : t.$content,
                n.trigger("focus"))
            },
            activate: function() {
                var n = this;
                i(".fancybox-container").each(function() {
                    var t = i(this).data("FancyBox");
                    t && t.id !== n.id && !t.isClosing && (t.trigger("onDeactivate"),
                    t.removeEvents(),
                    t.isVisible = !1)
                });
                n.isVisible = !0;
                (n.current || n.isIdle) && (n.update(),
                n.updateControls());
                n.trigger("onActivate");
                n.addEvents()
            },
            close: function(n, t) {
                var u = this, r = u.current, o, s, h, a, v, p, e, y = function() {
                    u.cleanUp(n)
                };
                return u.isClosing ? !1 : (u.isClosing = !0,
                u.trigger("beforeClose", n) === !1) ? (u.isClosing = !1,
                c(function() {
                    u.update()
                }),
                !1) : (u.removeEvents(),
                r.timouts && clearTimeout(r.timouts),
                h = r.$content,
                o = r.opts.animationEffect,
                s = i.isNumeric(t) ? t : o ? r.opts.animationDuration : 0,
                r.$slide.off(l).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                r.$slide.siblings().trigger("onReset").remove(),
                s && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),
                u.hideLoading(r),
                u.hideControls(),
                u.updateCursor(),
                o !== "zoom" || n !== !0 && h && s && r.type === "image" && !r.hasError && (e = u.getThumbPos(r)) || (o = "fade"),
                o === "zoom") ? (i.fancybox.stop(h),
                a = i.fancybox.getTranslate(h),
                p = {
                    top: a.top,
                    left: a.left,
                    scaleX: a.width / e.width,
                    scaleY: a.height / e.height,
                    width: e.width,
                    height: e.height
                },
                v = r.opts.zoomOpacity,
                v == "auto" && (v = Math.abs(r.width / r.height - e.width / e.height) > .1),
                v && (e.opacity = 0),
                i.fancybox.setTranslate(h, p),
                f(h),
                i.fancybox.animate(h, e, s, y),
                !0) : (o && s ? n === !0 ? setTimeout(y, s) : i.fancybox.animate(r.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + o, s, y) : y(),
                !0)
            },
            cleanUp: function(n) {
                var t = this, u = i("body"), r;
                t.current.$slide.trigger("onReset");
                t.$refs.container.empty().remove();
                t.trigger("afterClose", n);
                t.$lastFocus && !!t.current.opts.backFocus && t.$lastFocus.trigger("focus");
                t.current = null;
                r = i.fancybox.getInstance();
                r ? r.activate() : (u.removeClass("fancybox-active compensate-for-scrollbar"),
                i("#fancybox-style-noscroll").remove())
            },
            trigger: function(n, t) {
                var f = Array.prototype.slice.call(arguments, 1), e = this, r = t && t.opts ? t : e.current, o;
                if (r ? f.unshift(r) : r = e,
                f.unshift(e),
                i.isFunction(r.opts[n]) && (o = r.opts[n].apply(r, f)),
                o === !1)
                    return o;
                n !== "afterClose" && e.$refs ? e.$refs.container.trigger(n + ".fb", f) : u.trigger(n + ".fb", f)
            },
            updateControls: function() {
                var n = this
                  , t = n.current
                  , r = t.index
                  , u = t.opts.caption
                  , i = n.$refs.container
                  , f = n.$refs.caption;
                t.$slide.trigger("refresh");
                n.$caption = u && u.length ? f.html(u) : null;
                n.isHiddenControls || n.isIdle || n.showControls();
                i.find("[data-fancybox-count]").html(n.group.length);
                i.find("[data-fancybox-index]").html(r + 1);
                i.find("[data-fancybox-prev]").toggleClass("disabled", !t.opts.loop && r <= 0);
                i.find("[data-fancybox-next]").toggleClass("disabled", !t.opts.loop && r >= n.group.length - 1);
                t.type === "image" ? i.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", t.opts.image.src || t.src).show() : t.opts.toolbar && i.find("[data-fancybox-download],[data-fancybox-zoom]").hide()
            },
            hideControls: function() {
                this.isHiddenControls = !0;
                this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
            },
            showControls: function() {
                var n = this
                  , t = n.current ? n.current.opts : n.opts
                  , i = n.$refs.container;
                n.isHiddenControls = !1;
                n.idleSecondsCounter = 0;
                i.toggleClass("fancybox-show-toolbar", !!(t.toolbar && t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && n.group.length > 1)).toggleClass("fancybox-show-nav", !!(t.arrows && n.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal);
                n.$caption ? i.addClass("fancybox-show-caption ") : i.removeClass("fancybox-show-caption")
            },
            toggleControls: function() {
                this.isHiddenControls ? this.showControls() : this.hideControls()
            }
        });
        i.fancybox = {
            version: "3.3.4",
            defaults: a,
            getInstance: function(n) {
                var t = i('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox")
                  , r = Array.prototype.slice.call(arguments, 1);
                return t instanceof h ? (i.type(n) === "string" ? t[n].apply(t, r) : i.type(n) === "function" && n.apply(t, r),
                t) : !1
            },
            open: function(n, t, i) {
                return new h(n,t,i)
            },
            close: function(n) {
                var t = this.getInstance();
                t && (t.close(),
                n === !0 && this.close())
            },
            destroy: function() {
                this.close(!0);
                u.add("body").off("click.fb-start", "**")
            },
            isMobile: t.createTouch !== r && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: function() {
                var i = t.createElement("div");
                return n.getComputedStyle && n.getComputedStyle(i) && n.getComputedStyle(i).getPropertyValue("transform") && !(t.documentMode && t.documentMode < 11)
            }(),
            getTranslate: function(n) {
                var t;
                return !n || !n.length ? !1 : (t = n[0].getBoundingClientRect(),
                {
                    top: t.top || 0,
                    left: t.left || 0,
                    width: t.width,
                    height: t.height,
                    opacity: parseFloat(n.css("opacity"))
                })
            },
            setTranslate: function(n, t) {
                var i = ""
                  , u = {};
                if (n && t)
                    return (t.left !== r || t.top !== r) && (i = (t.left === r ? n.position().left : t.left) + "px, " + (t.top === r ? n.position().top : t.top) + "px",
                    i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"),
                    t.scaleX !== r && t.scaleY !== r && (i = (i.length ? i + " " : "") + "scale(" + t.scaleX + ", " + t.scaleY + ")"),
                    i.length && (u.transform = i),
                    t.opacity !== r && (u.opacity = t.opacity),
                    t.width !== r && (u.width = t.width),
                    t.height !== r && (u.height = t.height),
                    n.css(u)
            },
            animate: function(n, t, u, f, e) {
                var o = !1;
                i.isFunction(u) && (f = u,
                u = null);
                i.isPlainObject(t) || n.removeAttr("style");
                i.fancybox.stop(n);
                n.on(l, function(r) {
                    r && r.originalEvent && (!n.is(r.originalEvent.target) || r.originalEvent.propertyName == "z-index") || (i.fancybox.stop(n),
                    o && i.fancybox.setTranslate(n, o),
                    i.isPlainObject(t) ? e === !1 && n.removeAttr("style") : e !== !0 && n.removeClass(t),
                    i.isFunction(f) && f(r))
                });
                i.isNumeric(u) && n.css("transition-duration", u + "ms");
                i.isPlainObject(t) ? (t.scaleX !== r && t.scaleY !== r && (o = i.extend({}, t, {
                    width: n.width() * t.scaleX,
                    height: n.height() * t.scaleY,
                    scaleX: 1,
                    scaleY: 1
                }),
                delete t.width,
                delete t.height,
                n.parent().hasClass("fancybox-slide--image") && n.parent().addClass("fancybox-is-scaling")),
                i.fancybox.setTranslate(n, t)) : n.addClass(t);
                n.data("timer", setTimeout(function() {
                    n.trigger("transitionend")
                }, u + 16))
            },
            stop: function(n) {
                n && n.length && (clearTimeout(n.data("timer")),
                n.off("transitionend").css("transition-duration", ""),
                n.parent().removeClass("fancybox-is-scaling"))
            }
        };
        i.fn.fancybox = function(n) {
            var t;
            if (n = n || {},
            t = n.selector || !1,
            t)
                i("body").off("click.fb-start", t).on("click.fb-start", t, {
                    options: n
                }, o);
            else
                this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: n
                }, o);
            return this
        }
        ;
        u.on("click.fb-start", "[data-fancybox]", o);
        u.on("click.fb-start", "[data-trigger]", function(n) {
            o(n, {
                $target: i('[data-fancybox="' + i(n.currentTarget).attr("data-trigger") + '"]').eq(i(n.currentTarget).attr("data-index") || 0),
                $trigger: i(this)
            })
        })
    }
}
)(window, document, window.jQuery || jQuery),
function(n) {
    "use strict";
    var t = function(t, i, r) {
        if (t)
            return r = r || "",
            n.type(r) === "object" && (r = n.param(r, !0)),
            n.each(i, function(n, i) {
                t = t.replace("$" + n, i || "")
            }),
            r.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + r),
            t
    }
      , i = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "//www.youtube.com/embed/$4",
            thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1,
                api: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function(n) {
                return "//maps.google." + n[2] + "/?ll=" + (n[9] ? n[9] + "&z=" + Math.floor(n[10]) + (n[12] ? n[12].replace(/^\//, "&") : "") : n[12] + "").replace(/\?/, "&") + "&output=" + (n[12] && n[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function(n) {
                return "//maps.google." + n[2] + "/maps?q=" + n[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
            }
        }
    };
    n(document).on("objectNeedsType.fb", function(r, u, f) {
        var e = f.src || "", h = !1, v, y, o, c, s, a, l;
        v = n.extend(!0, {}, i, f.opts.media);
        n.each(v, function(i, r) {
            var u, v;
            if (o = e.match(r.matcher),
            o) {
                if (h = r.type,
                l = i,
                a = {},
                r.paramPlace && o[r.paramPlace])
                    for (s = o[r.paramPlace],
                    s[0] == "?" && (s = s.substring(1)),
                    s = s.split("&"),
                    u = 0; u < s.length; ++u)
                        v = s[u].split("=", 2),
                        v.length == 2 && (a[v[0]] = decodeURIComponent(v[1].replace(/\+/g, " ")));
                return c = n.extend(!0, {}, r.params, f.opts[i], a),
                e = n.type(r.url) === "function" ? r.url.call(this, o, c, f) : t(r.url, o, c),
                y = n.type(r.thumb) === "function" ? r.thumb.call(this, o, c, f) : t(r.thumb, o),
                i === "youtube" ? e = e.replace(/&t=((\d+)m)?(\d+)s/, function(n, t, i, r) {
                    return "&start=" + ((i ? parseInt(i, 10) * 60 : 0) + parseInt(r, 10))
                }) : i === "vimeo" && (e = e.replace("&%23", "#")),
                !1
            }
        });
        h ? (f.opts.thumb || f.opts.$thumb && f.opts.$thumb.length || (f.opts.thumb = y),
        h === "iframe" && (f.opts = n.extend(!0, f.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })),
        n.extend(f, {
            type: h,
            src: e,
            origSrc: f.src,
            contentSource: l,
            contentType: h === "image" ? "image" : l == "gmap_place" || l == "gmap_search" ? "map" : "video"
        })) : e && (f.type = f.opts.defaultType)
    })
}(window.jQuery || jQuery),
function(n, t, i) {
    "use strict";
    var s = function() {
        return n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || function(t) {
            return n.setTimeout(t, 1e3 / 60)
        }
    }()
      , f = function() {
        return n.cancelAnimationFrame || n.webkitCancelAnimationFrame || n.mozCancelAnimationFrame || n.oCancelAnimationFrame || function(t) {
            n.clearTimeout(t)
        }
    }()
      , e = function(t) {
        var r = [], i;
        t = t.originalEvent || t || n.e;
        t = t.touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t];
        for (i in t)
            t[i].pageX ? r.push({
                x: t[i].pageX,
                y: t[i].pageY
            }) : t[i].clientX && r.push({
                x: t[i].clientX,
                y: t[i].clientY
            });
        return r
    }
      , u = function(n, t, i) {
        return !t || !n ? 0 : i === "x" ? n.x - t.x : i === "y" ? n.y - t.y : Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2))
    }
      , h = function(n) {
        if (n.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio') || i.isFunction(n.get(0).onclick) || n.data("selectable"))
            return !0;
        for (var t = 0, r = n[0].attributes, u = r.length; t < u; t++)
            if (r[t].nodeName.substr(0, 14) === "data-fancybox-")
                return !0;
        return !1
    }
      , c = function(t) {
        var i = n.getComputedStyle(t)["overflow-y"]
          , r = n.getComputedStyle(t)["overflow-x"]
          , u = (i === "scroll" || i === "auto") && t.scrollHeight > t.clientHeight
          , f = (r === "scroll" || r === "auto") && t.scrollWidth > t.clientWidth;
        return u || f
    }
      , o = function(n) {
        for (var t = !1; ; ) {
            if (t = c(n.get(0)),
            t)
                break;
            if (n = n.parent(),
            !n.length || n.hasClass("fancybox-stage") || n.is("body"))
                break
        }
        return t
    }
      , r = function(n) {
        var t = this;
        t.instance = n;
        t.$bg = n.$refs.bg;
        t.$stage = n.$refs.stage;
        t.$container = n.$refs.container;
        t.destroy();
        t.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(t, "ontouchstart"))
    };
    r.prototype.destroy = function() {
        this.$container.off(".fb.touch")
    }
    ;
    r.prototype.ontouchstart = function(r) {
        var f = this
          , s = i(r.target)
          , l = f.instance
          , c = l.current
          , v = c.$content
          , a = r.type == "touchstart";
        if ((a && f.$container.off("mousedown.fb.touch"),
        !r.originalEvent || r.originalEvent.button != 2) && s.length && !h(s) && !h(s.parent()) && (s.is("img") || !(r.originalEvent.clientX > s[0].clientWidth + s.offset().left))) {
            if (!c || l.isAnimating || l.isClosing) {
                r.stopPropagation();
                r.preventDefault();
                return
            }
            if (f.realPoints = f.startPoints = e(r),
            f.startPoints.length) {
                r.stopPropagation();
                f.startEvent = r;
                f.canTap = !0;
                f.$target = s;
                f.$content = v;
                f.opts = c.opts.touch;
                f.isPanning = !1;
                f.isSwiping = !1;
                f.isZooming = !1;
                f.isScrolling = !1;
                f.startTime = (new Date).getTime();
                f.distanceX = f.distanceY = f.distance = 0;
                f.canvasWidth = Math.round(c.$slide[0].clientWidth);
                f.canvasHeight = Math.round(c.$slide[0].clientHeight);
                f.contentLastPos = null;
                f.contentStartPos = i.fancybox.getTranslate(f.$content) || {
                    top: 0,
                    left: 0
                };
                f.sliderStartPos = f.sliderLastPos || i.fancybox.getTranslate(c.$slide);
                f.stagePos = i.fancybox.getTranslate(l.$refs.stage);
                f.sliderStartPos.top -= f.stagePos.top;
                f.sliderStartPos.left -= f.stagePos.left;
                f.contentStartPos.top -= f.stagePos.top;
                f.contentStartPos.left -= f.stagePos.left;
                i(t).off(".fb.touch").on(a ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(f, "ontouchend")).on(a ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(f, "ontouchmove"));
                if (i.fancybox.isMobile && t.addEventListener("scroll", f.onscroll, !0),
                !(f.opts || l.canPan()) || !(s.is(f.$stage) || f.$stage.find(s).length)) {
                    s.is(".fancybox-image") && r.preventDefault();
                    return
                }
                i.fancybox.isMobile && (o(s) || o(s.parent())) || r.preventDefault();
                (f.startPoints.length === 1 || c.hasError) && (f.instance.canPan() ? (i.fancybox.stop(f.$content),
                f.$content.css("transition-duration", ""),
                f.isPanning = !0) : f.isSwiping = !0,
                f.$container.addClass("fancybox-controls--isGrabbing"));
                f.startPoints.length === 2 && c.type === "image" && (c.isLoaded || c.$ghost) && (f.canTap = !1,
                f.isSwiping = !1,
                f.isPanning = !1,
                f.isZooming = !0,
                i.fancybox.stop(f.$content),
                f.$content.css("transition-duration", ""),
                f.centerPointStartX = (f.startPoints[0].x + f.startPoints[1].x) * .5 - i(n).scrollLeft(),
                f.centerPointStartY = (f.startPoints[0].y + f.startPoints[1].y) * .5 - i(n).scrollTop(),
                f.percentageOfImageAtPinchPointX = (f.centerPointStartX - f.contentStartPos.left) / f.contentStartPos.width,
                f.percentageOfImageAtPinchPointY = (f.centerPointStartY - f.contentStartPos.top) / f.contentStartPos.height,
                f.startDistanceBetweenFingers = u(f.startPoints[0], f.startPoints[1]))
            }
        }
    }
    ;
    r.prototype.onscroll = function() {
        var n = this;
        n.isScrolling = !0;
        t.removeEventListener("scroll", n.onscroll, !0)
    }
    ;
    r.prototype.ontouchmove = function(n) {
        var t = this
          , r = i(n.target);
        if (n.originalEvent.buttons !== undefined && n.originalEvent.buttons === 0) {
            t.ontouchend(n);
            return
        }
        if (t.isScrolling || !(r.is(t.$stage) || t.$stage.find(r).length)) {
            t.canTap = !1;
            return
        }
        if ((t.newPoints = e(n),
        (t.opts || t.instance.canPan()) && t.newPoints.length && t.newPoints.length) && (t.isSwiping && t.isSwiping === !0 || n.preventDefault(),
        t.distanceX = u(t.newPoints[0], t.startPoints[0], "x"),
        t.distanceY = u(t.newPoints[0], t.startPoints[0], "y"),
        t.distance = u(t.newPoints[0], t.startPoints[0]),
        t.distance > 0))
            if (t.isSwiping)
                t.onSwipe(n);
            else
                t.isPanning ? t.onPan() : t.isZooming && t.onZoom()
    }
    ;
    r.prototype.onSwipe = function() {
        var t = this, u = t.isSwiping, r = t.sliderStartPos.left || 0, e;
        if (u === !0) {
            if (Math.abs(t.distance) > 10) {
                if (t.canTap = !1,
                t.instance.group.length < 2 && t.opts.vertical ? t.isSwiping = "y" : t.instance.isDragging || t.opts.vertical === !1 || t.opts.vertical === "auto" && i(n).width() > 800 ? t.isSwiping = "x" : (e = Math.abs(Math.atan2(t.distanceY, t.distanceX) * 180 / Math.PI),
                t.isSwiping = e > 45 && e < 135 ? "y" : "x"),
                t.canTap = !1,
                t.isSwiping === "y" && i.fancybox.isMobile && (o(t.$target) || o(t.$target.parent()))) {
                    t.isScrolling = !0;
                    return
                }
                t.instance.isDragging = t.isSwiping;
                t.startPoints = t.newPoints;
                i.each(t.instance.slides, function(n, r) {
                    i.fancybox.stop(r.$slide);
                    r.$slide.css("transition-duration", "");
                    r.inTransition = !1;
                    r.pos === t.instance.current.pos && (t.sliderStartPos.left = i.fancybox.getTranslate(r.$slide).left - i.fancybox.getTranslate(t.instance.$refs.stage).left)
                });
                t.instance.SlideShow && t.instance.SlideShow.isActive && t.instance.SlideShow.stop()
            }
            return
        }
        u == "x" && (r = t.distanceX > 0 && (t.instance.group.length < 2 || t.instance.current.index === 0 && !t.instance.current.opts.loop) ? r + Math.pow(t.distanceX, .8) : t.distanceX < 0 && (t.instance.group.length < 2 || t.instance.current.index === t.instance.group.length - 1 && !t.instance.current.opts.loop) ? r - Math.pow(-t.distanceX, .8) : r + t.distanceX);
        t.sliderLastPos = {
            top: u == "x" ? 0 : t.sliderStartPos.top + t.distanceY,
            left: r
        };
        t.requestId && (f(t.requestId),
        t.requestId = null);
        t.requestId = s(function() {
            t.sliderLastPos && (i.each(t.instance.slides, function(n, r) {
                var u = r.pos - t.instance.currPos;
                i.fancybox.setTranslate(r.$slide, {
                    top: t.sliderLastPos.top,
                    left: t.sliderLastPos.left + u * t.canvasWidth + u * r.opts.gutter
                })
            }),
            t.$container.addClass("fancybox-is-sliding"))
        })
    }
    ;
    r.prototype.onPan = function() {
        var n = this;
        if (u(n.newPoints[0], n.realPoints[0]) < (i.fancybox.isMobile ? 10 : 5)) {
            n.startPoints = n.newPoints;
            return
        }
        n.canTap = !1;
        n.contentLastPos = n.limitMovement();
        n.requestId && (f(n.requestId),
        n.requestId = null);
        n.requestId = s(function() {
            i.fancybox.setTranslate(n.$content, n.contentLastPos)
        })
    }
    ;
    r.prototype.limitMovement = function() {
        var i = this, f = i.canvasWidth, v = i.canvasHeight, r = i.distanceX, u = i.distanceY, e = i.contentStartPos, o = e.left, y = e.top, s = e.width, p = e.height, h, c, l, a, n, t;
        return n = s > f ? o + r : o,
        t = y + u,
        h = Math.max(0, f * .5 - s * .5),
        c = Math.max(0, v * .5 - p * .5),
        l = Math.min(f - s, f * .5 - s * .5),
        a = Math.min(v - p, v * .5 - p * .5),
        r > 0 && n > h && (n = h - 1 + Math.pow(-h + o + r, .8) || 0),
        r < 0 && n < l && (n = l + 1 - Math.pow(l - o - r, .8) || 0),
        u > 0 && t > c && (t = c - 1 + Math.pow(-c + y + u, .8) || 0),
        u < 0 && t < a && (t = a + 1 - Math.pow(a - y - u, .8) || 0),
        {
            top: t,
            left: n
        }
    }
    ;
    r.prototype.limitPosition = function(n, t, i, r) {
        var e = this
          , u = e.canvasWidth
          , f = e.canvasHeight;
        return i > u ? (n = n > 0 ? 0 : n,
        n = n < u - i ? u - i : n) : n = Math.max(0, u / 2 - i / 2),
        r > f ? (t = t > 0 ? 0 : t,
        t = t < f - r ? f - r : t) : t = Math.max(0, f / 2 - r / 2),
        {
            top: t,
            left: n
        }
    }
    ;
    r.prototype.onZoom = function() {
        var t = this
          , r = t.contentStartPos
          , o = r.width
          , h = r.height
          , a = r.left
          , v = r.top
          , y = u(t.newPoints[0], t.newPoints[1])
          , e = y / t.startDistanceBetweenFingers
          , c = Math.floor(o * e)
          , l = Math.floor(h * e)
          , p = (o - c) * t.percentageOfImageAtPinchPointX
          , w = (h - l) * t.percentageOfImageAtPinchPointY
          , b = (t.newPoints[0].x + t.newPoints[1].x) / 2 - i(n).scrollLeft()
          , k = (t.newPoints[0].y + t.newPoints[1].y) / 2 - i(n).scrollTop()
          , d = b - t.centerPointStartX
          , g = k - t.centerPointStartY
          , nt = a + (p + d)
          , tt = v + (w + g)
          , it = {
            top: tt,
            left: nt,
            scaleX: e,
            scaleY: e
        };
        t.canTap = !1;
        t.newWidth = c;
        t.newHeight = l;
        t.contentLastPos = it;
        t.requestId && (f(t.requestId),
        t.requestId = null);
        t.requestId = s(function() {
            i.fancybox.setTranslate(t.$content, t.contentLastPos)
        })
    }
    ;
    r.prototype.ontouchend = function(n) {
        var r = this
          , u = Math.max((new Date).getTime() - r.startTime, 1)
          , o = r.isSwiping
          , s = r.isPanning
          , h = r.isZooming
          , c = r.isScrolling;
        if (r.endPoints = e(n),
        r.$container.removeClass("fancybox-controls--isGrabbing"),
        i(t).off(".fb.touch"),
        t.removeEventListener("scroll", r.onscroll, !0),
        r.requestId && (f(r.requestId),
        r.requestId = null),
        r.isSwiping = !1,
        r.isPanning = !1,
        r.isZooming = !1,
        r.isScrolling = !1,
        r.instance.isDragging = !1,
        r.canTap)
            return r.onTap(n);
        r.speed = 366;
        r.velocityX = r.distanceX / u * .5;
        r.velocityY = r.distanceY / u * .5;
        r.speedX = Math.max(r.speed * .5, Math.min(r.speed * 1.5, 1 / Math.abs(r.velocityX) * r.speed));
        s ? r.endPanning() : h ? r.endZooming() : r.endSwiping(o, c);
        return
    }
    ;
    r.prototype.endSwiping = function(n, t) {
        var r = this
          , u = !1
          , f = r.instance.group.length;
        r.sliderLastPos = null;
        n == "y" && !t && Math.abs(r.distanceY) > 50 ? (i.fancybox.animate(r.instance.current.$slide, {
            top: r.sliderStartPos.top + r.distanceY + r.velocityY * 150,
            opacity: 0
        }, 200),
        u = r.instance.close(!0, 200)) : n == "x" && r.distanceX > 50 && f > 1 ? u = r.instance.previous(r.speedX) : n == "x" && r.distanceX < -50 && f > 1 && (u = r.instance.next(r.speedX));
        u === !1 && (n == "x" || n == "y") && (t || f < 2 ? r.instance.centerSlide(r.instance.current, 150) : r.instance.jumpTo(r.instance.current.index));
        r.$container.removeClass("fancybox-is-sliding")
    }
    ;
    r.prototype.endPanning = function() {
        var n = this, r, u, t;
        n.contentLastPos && (n.opts.momentum === !1 ? (r = n.contentLastPos.left,
        u = n.contentLastPos.top) : (r = n.contentLastPos.left + n.velocityX * n.speed,
        u = n.contentLastPos.top + n.velocityY * n.speed),
        t = n.limitPosition(r, u, n.contentStartPos.width, n.contentStartPos.height),
        t.width = n.contentStartPos.width,
        t.height = n.contentStartPos.height,
        i.fancybox.animate(n.$content, t, 330))
    }
    ;
    r.prototype.endZooming = function() {
        var n = this, e = n.instance.current, u, f, o, s, t = n.newWidth, r = n.newHeight;
        n.contentLastPos && (u = n.contentLastPos.left,
        f = n.contentLastPos.top,
        s = {
            top: f,
            left: u,
            width: t,
            height: r,
            scaleX: 1,
            scaleY: 1
        },
        i.fancybox.setTranslate(n.$content, s),
        t < n.canvasWidth && r < n.canvasHeight ? n.instance.scaleToFit(150) : t > e.width || r > e.height ? n.instance.scaleToActual(n.centerPointStartX, n.centerPointStartY, 150) : (o = n.limitPosition(u, f, t, r),
        i.fancybox.setTranslate(n.$content, i.fancybox.getTranslate(n.$content)),
        i.fancybox.animate(n.$content, o, 150)))
    }
    ;
    r.prototype.onTap = function(t) {
        var r = this, s = i(t.target), u = r.instance, o = u.current, h = t && e(t) || r.startPoints, c = h[0] ? h[0].x - i(n).scrollLeft() - r.stagePos.left : 0, l = h[0] ? h[0].y - i(n).scrollTop() - r.stagePos.top : 0, f, a = function(n) {
            var f = o.opts[n];
            if (i.isFunction(f) && (f = f.apply(u, [o, t])),
            f)
                switch (f) {
                case "close":
                    u.close(r.startEvent);
                    break;
                case "toggleControls":
                    u.toggleControls(!0);
                    break;
                case "next":
                    u.next();
                    break;
                case "nextOrClose":
                    u.group.length > 1 ? u.next() : u.close(r.startEvent);
                    break;
                case "zoom":
                    o.type == "image" && (o.isLoaded || o.$ghost) && (u.canPan() ? u.scaleToFit() : u.isScaledDown() ? u.scaleToActual(c, l) : u.group.length < 2 && u.close(r.startEvent))
                }
        };
        if ((!t.originalEvent || t.originalEvent.button != 2) && (s.is("img") || !(c > s[0].clientWidth + s.offset().left))) {
            if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))
                f = "Outside";
            else if (s.is(".fancybox-slide"))
                f = "Slide";
            else if (u.current.$content && u.current.$content.find(s).addBack().filter(s).length)
                f = "Content";
            else
                return;
            if (r.tapped) {
                if (clearTimeout(r.tapped),
                r.tapped = null,
                Math.abs(c - r.tapX) > 50 || Math.abs(l - r.tapY) > 50)
                    return this;
                a("dblclick" + f)
            } else
                r.tapX = c,
                r.tapY = l,
                o.opts["dblclick" + f] && o.opts["dblclick" + f] !== o.opts["click" + f] ? r.tapped = setTimeout(function() {
                    r.tapped = null;
                    a("click" + f)
                }, 500) : a("click" + f);
            return this
        }
    }
    ;
    i(t).on("onActivate.fb", function(n, t) {
        t && !t.Guestures && (t.Guestures = new r(t))
    })
}(window, document, window.jQuery || jQuery),
function(n, t) {
    "use strict";
    t.extend(!0, t.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /><\/svg><\/button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3
        }
    });
    var i = function(n) {
        this.instance = n;
        this.init()
    };
    t.extend(i.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var n = this;
            n.$button = n.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                n.toggle()
            });
            (n.instance.group.length < 2 || !n.instance.group[n.instance.currIndex].opts.slideShow) && n.$button.hide()
        },
        set: function(n) {
            var t = this;
            t.instance && t.instance.current && (n === !0 || t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function() {
                t.isActive && t.instance.jumpTo((t.instance.currIndex + 1) % t.instance.group.length)
            }, t.instance.current.opts.slideShow.speed) : (t.stop(),
            t.instance.idleSecondsCounter = 0,
            t.instance.showControls())
        },
        clear: function() {
            var n = this;
            clearTimeout(n.timer);
            n.timer = null
        },
        start: function() {
            var n = this
              , t = n.instance.current;
            t && (n.isActive = !0,
            n.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),
            n.set(!0))
        },
        stop: function() {
            var n = this
              , t = n.instance.current;
            n.clear();
            n.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play");
            n.isActive = !1
        },
        toggle: function() {
            var n = this;
            n.isActive ? n.stop() : n.start()
        }
    });
    t(n).on({
        "onInit.fb": function(n, t) {
            t && !t.SlideShow && (t.SlideShow = new i(t))
        },
        "beforeShow.fb": function(n, t, i, r) {
            var u = t && t.SlideShow;
            r ? u && i.opts.slideShow.autoStart && u.start() : u && u.isActive && u.clear()
        },
        "afterShow.fb": function(n, t) {
            var i = t && t.SlideShow;
            i && i.isActive && i.set()
        },
        "afterKeydown.fb": function(i, r, u, f, e) {
            var o = r && r.SlideShow;
            o && u.opts.slideShow && (e === 80 || e === 32) && !t(n.activeElement).is("button,a,input") && (f.preventDefault(),
            o.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(n, t) {
            var i = t && t.SlideShow;
            i && i.stop()
        }
    });
    t(n).on("visibilitychange", function() {
        var r = t.fancybox.getInstance()
          , i = r && r.SlideShow;
        i && i.isActive && (n.hidden ? i.clear() : i.set())
    })
}(document, window.jQuery || jQuery),
function(n, t) {
    "use strict";
    var i = function() {
        for (var t, i, r = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], f = {}, u = 0; u < r.length; u++)
            if (t = r[u],
            t && t[1]in n) {
                for (i = 0; i < t.length; i++)
                    f[r[0][i]] = t[i];
                return f
            }
        return !1
    }(), r;
    if (!i) {
        t && t.fancybox && (t.fancybox.defaults.btnTpl.fullScreen = !1);
        return
    }
    r = {
        request: function(t) {
            t = t || n.documentElement;
            t[i.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
        },
        exit: function() {
            n[i.exitFullscreen]()
        },
        toggle: function(t) {
            t = t || n.documentElement;
            this.isFullscreen() ? this.exit() : this.request(t)
        },
        isFullscreen: function() {
            return Boolean(n[i.fullscreenElement])
        },
        enabled: function() {
            return Boolean(n[i.fullscreenEnabled])
        }
    };
    t.extend(!0, t.fancybox.defaults, {
        btnTpl: {
            fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 v16 h22 v-16 h-22 v8" /><\/svg><\/button>'
        },
        fullScreen: {
            autoStart: !1
        }
    });
    t(n).on({
        "onInit.fb": function(n, t) {
            var i;
            if (t && t.group[t.currIndex].opts.fullScreen) {
                i = t.$refs.container;
                i.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(n) {
                    n.stopPropagation();
                    n.preventDefault();
                    r.toggle()
                });
                t.opts.fullScreen && t.opts.fullScreen.autoStart === !0 && r.request();
                t.FullScreen = r
            } else
                t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
        },
        "afterKeydown.fb": function(n, t, i, r, u) {
            t && t.FullScreen && u === 70 && (r.preventDefault(),
            t.FullScreen.toggle())
        },
        "beforeClose.fb": function(n, t) {
            t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && r.exit()
        }
    });
    t(n).on(i.fullscreenchange, function() {
        var i = r.isFullscreen()
          , n = t.fancybox.getInstance();
        n && (n.current && n.current.type === "image" && n.isAnimating && (n.current.$content.css("transition", "none"),
        n.isAnimating = !1,
        n.update(!0, !0, 0)),
        n.trigger("onFullscreenChange", i),
        n.$refs.container.toggleClass("fancybox-is-fullscreen", i))
    })
}(document, window.jQuery || jQuery),
function(n, t) {
    "use strict";
    var i = "fancybox-thumbs", u = i + "-active", f = i + "-loading", r;
    t.fancybox.defaults = t.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /><\/svg><\/button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, t.fancybox.defaults);
    r = function(n) {
        this.init(n)
    }
    ;
    t.extend(r.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(n) {
            var t = this, i, r;
            if (t.instance = n,
            n.Thumbs = t,
            t.opts = n.group[n.currIndex].opts.thumbs,
            i = n.group[0],
            i = i.opts.thumb || (i.opts.$thumb && i.opts.$thumb.length ? i.opts.$thumb.attr("src") : !1),
            n.group.length > 1 && (r = n.group[1],
            r = r.opts.thumb || (r.opts.$thumb && r.opts.$thumb.length ? r.opts.$thumb.attr("src") : !1)),
            t.$button = n.$refs.toolbar.find("[data-fancybox-thumbs]"),
            t.opts && i && r && i && r) {
                t.$button.show().on("click", function() {
                    t.toggle()
                });
                t.isActive = !0
            } else
                t.$button.hide()
        },
        create: function() {
            var n = this, u = n.instance, e = n.opts.parentEl, o = [], r;
            if (!n.$grid) {
                n.$grid = t('<div class="' + i + " " + i + "-" + n.opts.axis + '"><\/div>').appendTo(u.$refs.container.find(e).addBack().filter(e));
                n.$grid.on("click", "li", function() {
                    u.jumpTo(t(this).attr("data-index"))
                })
            }
            n.$list || (n.$list = t("<ul>").appendTo(n.$grid));
            t.each(u.group, function(n, t) {
                r = t.opts.thumb || (t.opts.$thumb ? t.opts.$thumb.attr("src") : null);
                r || t.type !== "image" || (r = t.src);
                o.push('<li data-index="' + n + '" tabindex="0" class="' + f + '"' + (r && r.length ? ' style="background-image:url(' + r + ')" />' : "") + "><\/li>")
            });
            n.$list[0].innerHTML = o.join("");
            n.opts.axis === "x" && n.$list.width(parseInt(n.$grid.css("padding-right"), 10) + u.group.length * n.$list.children().eq(0).outerWidth(!0))
        },
        focus: function(n) {
            var i = this, r = i.$list, e = i.$grid, f, t;
            i.instance.current && (f = r.children().removeClass(u).filter('[data-index="' + i.instance.current.index + '"]').addClass(u),
            t = f.position(),
            i.opts.axis === "y" && (t.top < 0 || t.top > r.height() - f.outerHeight()) ? r.stop().animate({
                scrollTop: r.scrollTop() + t.top
            }, n) : i.opts.axis === "x" && (t.left < e.scrollLeft() || t.left > e.scrollLeft() + (e.width() - f.outerWidth())) && r.parent().stop().animate({
                scrollLeft: t.left
            }, n))
        },
        update: function() {
            var n = this;
            n.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);
            n.isVisible ? (n.$grid || n.create(),
            n.instance.trigger("onThumbsShow"),
            n.focus(0)) : n.$grid && n.instance.trigger("onThumbsHide");
            n.instance.update()
        },
        hide: function() {
            this.isVisible = !1;
            this.update()
        },
        show: function() {
            this.isVisible = !0;
            this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible;
            this.update()
        }
    });
    t(n).on({
        "onInit.fb": function(n, t) {
            var i;
            t && !t.Thumbs && (i = new r(t),
            i.isActive && i.opts.autoStart === !0 && i.show())
        },
        "beforeShow.fb": function(n, t, i, r) {
            var u = t && t.Thumbs;
            u && u.isVisible && u.focus(r ? 0 : 250)
        },
        "afterKeydown.fb": function(n, t, i, r, u) {
            var f = t && t.Thumbs;
            f && f.isActive && u === 71 && (r.preventDefault(),
            f.toggle())
        },
        "beforeClose.fb": function(n, t) {
            var i = t && t.Thumbs;
            i && i.isVisible && i.opts.hideOnClose !== !1 && i.$grid.hide()
        }
    })
}(document, window.jQuery || jQuery),
function(n, t) {
    "use strict";
    function i(n) {
        var t = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };
        return String(n).replace(/[&<>"'`=\/]/g, function(n) {
            return t[n]
        })
    }
    t.extend(!0, t.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"><\/svg><\/button>'
        },
        share: {
            url: function(n, t) {
                return (!n.currentHash && !(t.type === "inline" || t.type === "html") ? t.origSrc || t.src : !1) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}<\/h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /><\/svg><span>Facebook<\/span><\/a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /><\/svg><span>Twitter<\/span><\/a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/><\/svg><span>Pinterest<\/span><\/a><\/p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /><\/p><\/div>'
        }
    });
    t(n).on("click", "[data-fancybox-share]", function() {
        var r = t.fancybox.getInstance(), n = r.current || null, u, f;
        n && (t.type(n.opts.share.url) === "function" && (u = n.opts.share.url.apply(n, [r, n])),
        f = n.opts.share.tpl.replace(/\{\{media\}\}/g, n.type === "image" ? encodeURIComponent(n.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(u)).replace(/\{\{url_raw\}\}/g, i(u)).replace(/\{\{descr\}\}/g, r.$caption ? encodeURIComponent(r.$caption.text()) : ""),
        t.fancybox.open({
            src: r.translate(r, f),
            type: "html",
            opts: {
                animationEffect: !1,
                afterLoad: function(n, t) {
                    r.$refs.container.one("beforeClose.fb", function() {
                        n.close(null, 0)
                    });
                    t.$content.find(".fancybox-share__links a").click(function() {
                        return window.open(this.href, "Share", "width=550, height=450"),
                        !1
                    })
                }
            }
        }))
    })
}(document, window.jQuery || jQuery),
function(n, t, i) {
    "use strict";
    function r() {
        var i = t.location.hash.substr(1)
          , n = i.split("-")
          , r = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1
          , u = n.join("-");
        return {
            hash: i,
            index: r < 1 ? 1 : r,
            gallery: u
        }
    }
    function f(n) {
        var t;
        n.gallery !== "" && (t = i("[data-fancybox='" + i.escapeSelector(n.gallery) + "']").eq(n.index - 1).trigger("click.fb-start"))
    }
    function u(n) {
        var t, i;
        return n ? (t = n.current ? n.current.opts : n.opts,
        i = t.hash || (t.$orig ? t.$orig.data("fancybox") : ""),
        i === "" ? !1 : i) : !1
    }
    i.escapeSelector || (i.escapeSelector = function(n) {
        var t = function(n, t) {
            return t ? n === "\0" ? "???" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
        };
        return (n + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, t)
    }
    );
    i(function() {
        if (i.fancybox.defaults.hash !== !1) {
            i(n).on({
                "onInit.fb": function(n, t) {
                    var i, f;
                    t.group[t.currIndex].opts.hash !== !1 && (i = r(),
                    f = u(t),
                    f && i.gallery && f == i.gallery && (t.currIndex = i.index - 1))
                },
                "beforeShow.fb": function(i, r, f, e) {
                    var o;
                    f && f.opts.hash !== !1 && (o = u(r),
                    o) && (r.currentHash = o + (r.group.length > 1 ? "-" + (f.index + 1) : ""),
                    t.location.hash !== "#" + r.currentHash) && (r.origHash || (r.origHash = t.location.hash),
                    r.hashTimer && clearTimeout(r.hashTimer),
                    r.hashTimer = setTimeout(function() {
                        "replaceState"in t.history ? (t.history[e ? "pushState" : "replaceState"]({}, n.title, t.location.pathname + t.location.search + "#" + r.currentHash),
                        e && (r.hasCreatedHistory = !0)) : t.location.hash = r.currentHash;
                        r.hashTimer = null
                    }, 300))
                },
                "beforeClose.fb": function(i, r, f) {
                    var e;
                    f.opts.hash !== !1 && (e = u(r),
                    r.currentHash && r.hasCreatedHistory ? t.history.back() : r.currentHash && ("replaceState"in t.history ? t.history.replaceState({}, n.title, t.location.pathname + t.location.search + (r.origHash || "")) : t.location.hash = r.origHash),
                    r.currentHash = null,
                    clearTimeout(r.hashTimer))
                }
            });
            i(t).on("hashchange.fb", function() {
                var t = r(), n;
                i.each(i(".fancybox-container").get().reverse(), function(t, r) {
                    var u = i(r).data("FancyBox");
                    if (u.currentHash)
                        return n = u,
                        !1
                });
                n ? !n.currentHash || n.currentHash === t.gallery + "-" + t.index || t.index === 1 && n.currentHash == t.gallery || (n.currentHash = null,
                n.close()) : t.gallery !== "" && f(t)
            });
            setTimeout(function() {
                i.fancybox.getInstance() || f(r())
            }, 50)
        }
    })
}(document, window, window.jQuery || jQuery),
function(n, t) {
    "use strict";
    var i = (new Date).getTime();
    t(n).on({
        "onInit.fb": function(n, t) {
            t.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(n) {
                var r = t.current
                  , u = (new Date).getTime();
                t.group.length < 2 || r.opts.wheel === !1 || r.opts.wheel === "auto" && r.type !== "image" || (n.preventDefault(),
                n.stopPropagation(),
                r.$slide.hasClass("fancybox-animated")) || (n = n.originalEvent || n,
                u - i < 250) || (i = u,
                t[(-n.deltaY || -n.deltaX || n.wheelDelta || -n.detail) < 0 ? "next" : "previous"]())
            })
        }
    })
}(document, window.jQuery || jQuery)
// JavaScript Document