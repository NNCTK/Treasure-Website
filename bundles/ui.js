$(function() {
    $(document).ready(function() {
        var n = $(".selectbox select");
        n.on("blur", function() {
            $(this).parent().removeClass("focus")
        });
        n.change(function() {
            var n = $(this).children("option:selected").text();
            $(this).siblings("label").text(n)
        })
    });
    $(document).ready(function() {
        var n = 700
          , i = "..."
          , t = "MORE >"
          , r = "";
        $(".dis_more_cont").each(function() {
            var r = $(this).html();
            if (r.length > n) {
                var u = r.substr(0, n)
                  , f = r.substr(n, r.length - n)
                  , e = u + '<span class="moreellipses">' + i + '&nbsp;<\/span><span class="morecontent"><span>' + f + '<\/span>&nbsp;&nbsp;<a href="" class="morelink">' + t + "<\/a><\/span>";
                $(this).html(e)
            }
        });
        $(".morelink").click(function() {
            return $(this).hasClass("less") ? ($(this).removeClass("less"),
            $(this).html(t)) : ($(this).addClass("less"),
            $(this).html(r)),
            $(this).parent().prev().toggle(),
            $(this).prev().toggle(),
            !1
        })
    })
})
