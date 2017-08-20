//Adds a class to the navbar upon scrolling to change the color
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    //30% of window height
    if (scroll >= $(window).height()*0.1 ) {
        $(".navbar").addClass("navbar-show");
    } else {
        $(".navbar").removeClass("navbar-show");
    }
});
