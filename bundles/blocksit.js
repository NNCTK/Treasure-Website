(function(n) {
    var i = {
        numOfCol: 5,
        offsetX: 5,
        offsetY: 5,
        blockElement: "div"
    }, r, u, t = [];
    Array.prototype.indexOf || (Array.prototype.indexOf = function(n) {
        var i = this.length >>> 0
          , t = Number(arguments[1]) || 0;
        for (t = t < 0 ? Math.ceil(t) : Math.floor(t),
        t < 0 && (t += i); t < i; t++)
            if (t in this && this[t] === n)
                return t;
        return -1
    }
    );
    var s = function() {
        t = [];
        for (var n = 0; n < i.numOfCol; n++)
            e("empty-" + n, n, 0, 1, -i.offsetY)
    }
      , e = function(n, r, u, f, e) {
        for (var o, s = 0; s < f; s++)
            o = {},
            o.x = r + s,
            o.size = f,
            o.endY = u + e + i.offsetY * 2,
            t.push(o)
    }
      , h = function(n, i) {
        for (var u, r = 0; r < i; r++)
            u = o(n + r, "x"),
            t.splice(u, 1)
    }
      , o = function(n, i) {
        for (var u, r = 0; r < t.length; r++)
            if ((u = t[r],
            i == "x" && u.x == n) || i == "endY" && u.endY == n)
                return r
    }
      , f = function(n, i) {
        for (var f, e, r = [], u = 0; u < i; u++)
            r.push(t[o(n + u, "x")].endY);
        return f = Math.min.apply(Math, r),
        e = Math.max.apply(Math, r),
        [f, e, r.indexOf(f)]
    }
      , c = function(n) {
        var h, o, i, s, u, c, r, e;
        if (n > 1) {
            for (h = t.length - n,
            o = !1,
            u = 0; u < t.length; u++)
                c = t[u],
                r = c.x,
                r >= 0 && r <= h && (e = f(r, n),
                o ? e[1] < i[1] && (i = e,
                s = r) : (o = !0,
                i = e,
                s = r));
            return [s, i[1]]
        }
        return i = f(0, t.length),
        [i[2], i[0]]
    }
      , l = function(n) {
        var t, r, f;
        !n.data("size") || n.data("size") < 0 ? n.data("size", 1) : n.data("size") > i.numOfCol && n.data("size", i.numOfCol);
        t = c(n.data("size"));
        r = u * n.data("size") - (n.outerWidth() - n.width());
        n.css({
            width: r - i.offsetX * 2,
            left: t[0] * u,
            top: t[1],
            position: "absolute"
        });
        f = n.outerHeight();
        h(t[0], n.data("size"));
        e(n.attr("id"), t[0], t[1], n.data("size"), f)
    };
    n.fn.BlocksIt = function(e) {
        e && typeof e == "object" && n.extend(i, e);
        r = n(this);
        u = r.width() / i.numOfCol;
        s();
        r.children(i.blockElement).each(function(t) {
            l(n(this), t)
        });
        var o = f(0, t.length);
        return r.height(o[1] + i.offsetY),
        this
    }
}
)(jQuery)
// JavaScript Document