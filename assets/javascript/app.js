// scroll functions
$(window).scroll(function(e) {

    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $('.masthead').addClass("navbar-hide");
    } else {
        $('.masthead').removeClass("navbar-hide");
    }

});