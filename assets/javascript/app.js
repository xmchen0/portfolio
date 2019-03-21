$(window).scroll(function () {
    var y = $(window).scrollTop();
    if (y > 0) {
        $("#masthead").addClass('--not-top');
    } else {
        $("#masthead").removeClass('--not-top');
    }
});