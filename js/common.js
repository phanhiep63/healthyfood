// common
$(document).ready(function() {
    "use strict";
    $('#nav-icon4').click(function() {
        $('#nav-icon4').toggleClass('open');
        $('#gnavi').stop(0, 1).slideToggle();
    });
});