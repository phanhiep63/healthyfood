//totop
$(document).ready(function() {
    "use strict";
    $("#toTop").hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
    $("#toTop").click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 400);
    });
});