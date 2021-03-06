function YoutubeBackground(n, t, i, r) {
    this.is_mobile = this.isMobile();
    this.element = n;
    this.ytid = i;
    this.uid = r;
    this.player = null;
    this.buttons = {};
    this.state = {};
    this.state.play = !1;
    this.state.mute = !1;
    this.params = {};
    this.defaults = {
        pause: !1,
        "play-button": !1,
        "mute-button": !1,
        autoplay: !0,
        muted: !0,
        loop: !0,
        mobile: !1,
        "load-background": !0,
        resolution: "16:9",
        offset: 200
    };
    this.__init__ = function() {
        this.ytid && (this.parseProperties(t),
        this.params.resolution_mod = this.parseResolutionString(this.params.resolution),
        this.state.playing = this.params.autoplay,
        this.state.muted = this.params.muted,
        this.buildHTML(),
        this.injectIFrame(),
        this.params["play-button"] && this.generateActionButton({
            name: "play",
            className: "play-toggle",
            innerHtml: '<i class="fa"><\/i>',
            initialState: !1,
            stateClassName: "paused",
            condition_parameter: "autoplay",
            stateChildClassNames: ["fa-pause-circle", "fa-play-circle"],
            actions: ["play", "pause"]
        }),
        this.params["mute-button"] && this.generateActionButton({
            name: "mute",
            className: "mute-toggle",
            innerHtml: '<i class="fa"><\/i>',
            initialState: !0,
            stateClassName: "muted",
            condition_parameter: "muted",
            stateChildClassNames: ["fa-volume-up", "fa-volume-mute"],
            actions: ["unmute", "mute"]
        }))
    }
    ;
    this.__init__()
}
function ActivityMonitor(n, t, i, r, u) {
    this.timer = null;
    this.timeout = r || 1e4;
    this.activity_timer = null;
    this.activity_timeout = i || 1e3;
    this.last_activity = null;
    this.resetTimer = function() {
        this.timer && (clearTimeout(this.timer),
        this.timer = null);
        var n = this;
        this.timer = setTimeout(function() {
            n.last_activity + n.timeout + n.activity_timeout >= (new Date).getTime() && t && t()
        }, this.timeout)
    }
    ;
    this.logActivity = function() {
        this.last_activity = (new Date).getTime();
        n && n()
    }
    ;
    this.onActivity = function() {
        if (!this.activity_timer) {
            var n = this;
            this.activity_timer = setTimeout(function() {
                n.logActivity();
                n.resetTimer();
                clearTimeout(n.activity_timer);
                n.activity_timer = null
            }, this.activity_timeout)
        }
    }
    ;
    this.__init__ = function() {
        var t = this, n;
        for (u ? typeof u == "string" && (u = [u]) : u = ["click", "mousemove", "scroll"],
        n = 0; n < u.length; n++)
            document.addEventListener(u[n], function() {
                t.onActivity()
            })
    }
    ;
    this.__init__()
}
function VideoBackgrounds(n, t) {
    this.elements = n;
    typeof n == "string" && (this.elements = document.querySelectorAll(n));
    this.index = {};
    this.re = {};
    this.re.YOUTUBE = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
    this.__init__ = function() {
        for (var r, n = 0; n < this.elements.length; n++) {
            var u = this.elements[n]
              , e = u.getAttribute("data-youtube")
              , f = this.getYTID(e)
              , i = this.generateUID(f)
              , o = new YoutubeBackground(u,t,f,i);
            i && (this.index[i] = o)
        }
        r = this;
        this.initYTPlayers(function() {
            t && (t.hasOwnProperty("activity_timeout") || t.hasOwnProperty("inactivity_timeout")) && (this.activity_monitor = new ActivityMonitor(function() {
                r.playVideos()
            }
            ,function() {
                r.pauseVideos()
            }
            ,t ? t.activity_timeout : null,t ? t.inactivity_timeout : null,["mousemove", "scroll"]))
        })
    }
    ;
    this.__init__()
}
var tag = document.createElement("script"), firstScriptTag;
tag.src = "https://www.youtube.com/player_api";
firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
window.hasOwnProperty("d0") || (window.d0 = {},
d0.hasClass = function(n, t) {
    return n.classList ? n.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(n.className)
}
,
d0.addClass = function(n, t) {
    if (n.classList) {
        n.classList.add(t);
        return
    }
    d0.hasClass(n, t) || (n.className += " " + t)
}
,
d0.removeClass = function(n, t) {
    if (n.classList) {
        n.classList.remove(t);
        return
    }
    n.className = n.className.replace(new RegExp("\\b" + t + "\\b","g"), "")
}
,
d0.toogleClass = function(n, t) {
    d0.hasClass(n, t) ? d0.removeClass(n, t) : d0.addClass(n, t)
}
);
YoutubeBackground.prototype.initYTPlayer = function() {
    var n = this;
    window.hasOwnProperty("YT") && (this.player = new YT.Player(this.uid,{
        events: {
            onReady: function(t) {
                n.onVideoPlayerReady(t)
            },
            onStateChange: function(t) {
                n.onVideoStateChange(t)
            },
            onError: function() {}
        }
    }))
}
;
YoutubeBackground.prototype.onVideoPlayerReady = function(n) {
    this.params.autoplay && n.target.playVideo()
}
;
YoutubeBackground.prototype.onVideoStateChange = function(n) {
    n.data === 0 && this.params.loop && n.target.playVideo();
    n.data === -1 && this.params.autoplay && n.target.playVideo();
    n.data === 1 && (this.iframe.style.opacity = 1)
}
;
YoutubeBackground.prototype.parseProperties = function(n) {
    var i, t;
    if (n)
        for (i in this.defaults)
            this.params.hasOwnProperty(i) || (this.params[i] = this.defaults[i]);
    else
        this.params = this.defaults;
    for (i in this.params)
        if (t = this.element.getAttribute("data-ytbg-" + i),
        t !== undefined && t !== null) {
            switch (t) {
            case t === "false":
                t = !1;
                break;
            case t === "true":
                t = !0
            }
            this.params[i] = t
        }
    this.params.pause && (this.params["play-button"] = this.params.pause)
}
;
YoutubeBackground.prototype.injectIFrame = function() {
    function i() {
        var t = n.iframe.parentNode.offsetHeight + n.params.offset
          , i = n.iframe.parentNode.offsetWidth + n.params.offset
          , r = n.params.resolution_mod;
        r > i / t ? (n.iframe.style.width = t * r + "px",
        n.iframe.style.height = t + "px") : (n.iframe.style.width = i + "px",
        n.iframe.style.height = i / r + "px")
    }
    var t, n;
    this.iframe = document.createElement("iframe");
    this.iframe.setAttribute("frameborder", 0);
    this.iframe.setAttribute("allow", ["autoplay; mute"]);
    t = "https://www.youtube.com/embed/" + this.ytid + "?enablejsapi=1&disablekb=1&controls=0&rel=0&iv_load_policy=3&cc_load_policy=0&playsinline=1&showinfo=0&modestbranding=1&fs=0&origin=" + window.location.origin;
    this.params.muted && (t += "&mute=1");
    this.params.autoplay && (t += "&autoplay=1");
    this.params.loop && (t += "&loop=1");
    this.iframe.src = t;
    this.uid && (this.iframe.id = this.uid);
    this.iframe.style.top = "50%";
    this.iframe.style.left = "50%";
    this.iframe.style.transform = "translateX(-50%) translateY(-50%)";
    this.iframe.style.position = "absolute";
    this.iframe.style.opacity = 0;
    this.element.parentNode.appendChild(this.iframe);
    this.iframe.parentNode.removeChild(this.element);
    n = this;
    window.addEventListener("resize", i);
    i()
}
;
YoutubeBackground.prototype.buildHTML = function() {
    var f = this.element.parentNode, n = document.createElement("div"), u, t, r, i;
    n.className = "youtube-background";
    f.insertBefore(n, this.element);
    n.appendChild(this.element);
    u = this.element.id;
    this.element.id = "";
    n.id = u;
    t = {
        height: "100%",
        width: "100%",
        "z-index": "0",
        position: "absolute",
        overflow: "hidden",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    };
    this.params["mute-button"] || (t["pointer-events"] = "none");
    this.params["load-background"] && (t["background-image"] = "url(https://img.youtube.com/vi/" + this.ytid + "/maxresdefault.jpg)",
    t["background-size"] = "cover",
    t["background-repeat"] = "no-repeat",
    t["background-position"] = "center");
    for (r in t)
        n.style[r] = t[r];
    return (n.parentNode.style.position = "relative",
    this.is_mobile && !this.params.mobile) ? n : ((this.params["play-button"] || this.params["mute-button"]) && (i = document.createElement("div"),
    i.className = "video-background-controls",
    i.style.position = "absolute",
    i.style.top = "10px",
    i.style.right = "10px",
    i.style["z-index"] = 2,
    this.controls_element = i,
    n.parentNode.appendChild(i)),
    n)
}
;
YoutubeBackground.prototype.play = function() {
    if (this.buttons.hasOwnProperty("play")) {
        var n = this.buttons.play;
        d0.removeClass(n.element, n.button_properties.stateClassName);
        d0.addClass(n.element.firstChild, n.button_properties.stateChildClassNames[0]);
        d0.removeClass(n.element.firstChild, n.button_properties.stateChildClassNames[1])
    }
    this.player && this.player.playVideo()
}
;
YoutubeBackground.prototype.pause = function() {
    if (this.buttons.hasOwnProperty("play")) {
        var n = this.buttons.play;
        d0.addClass(n.element, n.button_properties.stateClassName);
        d0.removeClass(n.element.firstChild, n.button_properties.stateChildClassNames[0]);
        d0.addClass(n.element.firstChild, n.button_properties.stateChildClassNames[1])
    }
    this.player && this.player.pauseVideo()
}
;
YoutubeBackground.prototype.unmute = function() {
    if (this.buttons.hasOwnProperty("mute")) {
        var n = this.buttons.mute;
        d0.removeClass(n.element, n.button_properties.stateClassName);
        d0.addClass(n.element.firstChild, n.button_properties.stateChildClassNames[0]);
        d0.removeClass(n.element.firstChild, n.button_properties.stateChildClassNames[1])
    }
    this.player && this.player.unMute()
}
;
YoutubeBackground.prototype.mute = function() {
    if (this.buttons.hasOwnProperty("mute")) {
        var n = this.buttons.mute;
        d0.addClass(n.element, n.button_properties.stateClassName);
        d0.removeClass(n.element.firstChild, n.button_properties.stateChildClassNames[0]);
        d0.addClass(n.element.firstChild, n.button_properties.stateChildClassNames[1])
    }
    this.player && this.player.mute()
}
;
YoutubeBackground.prototype.generateActionButton = function(n) {
    var t = document.createElement("button"), i;
    t.className = n.className;
    t.innerHTML = n.innerHtml;
    d0.addClass(t.firstChild, n.stateChildClassNames[0]);
    this.params[n.condition_parameter] == n.initialState && (d0.addClass(t, n.stateClassName),
    d0.removeClass(t.firstChild, n.stateChildClassNames[0]),
    d0.addClass(t.firstChild, n.stateChildClassNames[1]));
    i = this;
    t.addEventListener("click", function() {
        d0.hasClass(this, n.stateClassName) ? (i.state[n.name] = !1,
        i[n.actions[0]]()) : (i.state[n.name] = !0,
        i[n.actions[1]]())
    });
    this.buttons[n.name] = {
        element: t,
        button_properties: n
    };
    this.controls_element.appendChild(t)
}
;
YoutubeBackground.prototype.parseResolutionString = function(n) {
    var t = n.split(/\s?:\s?/i), i, r;
    return t.length < 2 ? 16 / 9 : (i = parseInt(t[0], 10),
    r = parseInt(t[1], 10),
    isNaN(i) || isNaN(r)) ? 16 / 9 : i / r
}
;
YoutubeBackground.prototype.isMobile = function() {
    var n = !1;
    return function(t) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (n = !0)
    }(navigator.userAgent || navigator.vendor || window.opera),
    n
}
;
YoutubeBackground.prototype.error = function(n, t) {
    window.hasOwnProperty("console") && window.console.hasOwnProperty("error") && console.error(n, t)
}
;
VideoBackgrounds.prototype.getYTID = function(n) {
    if (n !== undefined && n !== null) {
        var t = n.match(this.re.YOUTUBE);
        if (t && t.length)
            return this.re.YOUTUBE.lastIndex = 0,
            t[1]
    }
    return null
}
;
VideoBackgrounds.prototype.generateUID = function(n) {
    function i(n, t) {
        return n = Math.ceil(n),
        t = Math.floor(t),
        Math.floor(Math.random() * (t - n + 1)) + n
    }
    for (var t = n + "-" + i(0, 9999); this.index.hasOwnProperty(t); )
        t = n + "-" + i(0, 9999);
    return t
}
;
VideoBackgrounds.prototype.pauseVideos = function() {
    for (var n in this.index)
        this.index[n].pause()
}
;
VideoBackgrounds.prototype.playVideos = function() {
    for (var n in this.index)
        this.index[n].play()
}
;
VideoBackgrounds.prototype.initYTPlayers = function(n) {
    var t = this;
    window.onYouTubeIframeAPIReady = function() {
        for (var i in t.index)
            t.index[i].initYTPlayer();
        n && setTimeout(n, 100)
    }
    ;
    window.hasOwnProperty("YT") && window.YT.loaded && window.onYouTubeIframeAPIReady()
}
;
window.hasOwnProperty("jQuery") && function(n) {
    n.fn.youtube_background = function(t) {
        var i = n(this);
        return new VideoBackgrounds(this,t),
        i
    }
}(jQuery)
// JavaScript Document