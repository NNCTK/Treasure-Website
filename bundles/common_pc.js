function openNav() {
    document.getElementById("mySidenav").style.height = "100%"
}
function closeNav() {
    document.getElementById("mySidenav").style.height = "0"
}
$(function() {
    (new WOW).init();
    var n = $("#topBanner")
      , t = $("#goTop")
      , i = $(window).scrollTop();
    $(window).width() > 500 ? ($("#video-bg iframe").css("display", "block"),
    $("#video-bg").css("height", $(window).width() * .57)) : $("#video-bg iframe").css("display", "none");
    $(".gnb").find("a").on("click", function() {
        $("body").removeClass("active")
    });
    $(".gnb_list li a").hover(function() {
        $(this).toggleClass("artist_color")
    })
})