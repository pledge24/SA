$(document).ready(function() {
    $(".hov-anim").mouseover(function () {
        console.log("hover");
        $(this).attr("src", $(this).data("animated"));
    }).mouseout(function () {
        console.log("leave");
        $(this).attr("src", $(this).data("static"));
    });
});