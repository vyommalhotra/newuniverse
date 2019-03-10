(function ($) {

  "use strict";
    $(document).ready(function () {
    



    // Parallax Effect
    parallaxen();




    // jQuery to collapse the navbar on scroll
    function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
            if ($(this).scrollTop() > 800) {
            $("#back-to-top").stop().animate({ opacity: '1' }, 150);
        } else {
            $("#back-to-top").stop().animate({ opacity: '0' }, 150);
        }
    }
    $(window).scroll(collapseNavbar);
    



    // Closes the Responsive Menu on Menu Item Click
    $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
    });




    


    // Smooth Scroll to Anchor c) 2016 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
    smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
    selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 800, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
    });




    // ScrollReveal
    window.sr = ScrollReveal();
    sr.reveal('.fadeHero', { duration: 1500, delay: 200 } )
    sr.reveal('.fadeIn', { duration: 1500, viewFactor: 0.6} )
    sr.reveal('.fadeLeft', { duration: 500, origin: 'left', viewFactor: 0.7,}, 200)
    sr.reveal('.fadeLeft2', { duration: 1500, origin: 'left', viewFactor: 0.7,}, 200)




    // Owl Carousels

    // Owl Slider for Client Section
    $(".owl-clients").owlCarousel({
        autoplay : false,
        autoplayTimeout: 4000,
        loop: false,
        dots: false,
        nav: false,
        responsiveRefreshRate: 200,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });

    // Owl Slider for Team Section
    $(".owl-testimonials").owlCarousel({
        autoplay : true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1500,
        loop: true,
        dots: true,
        responsiveRefreshRate: 200,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });


    /*
         * ----------------------------------------------------------------------------------------
         *  WORK JS
         * ----------------------------------------------------------------------------------------
         */

        $('.work-inner').mixItUp();



        /*
         * ----------------------------------------------------------------------------------------
         *  MAGNIFIC POPUP JS
         * ----------------------------------------------------------------------------------------
         */

        var magnifPopup = function () {
            $('.work-popup').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it

                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function

                    // The "opener" function should return the element from which popup will be zoomed in
                    // and to which popup will be scaled down
                    // By defailt it looks for an image tag:
                    opener: function (openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        };
        // Call the functions 
        magnifPopup();


    });
})(jQuery);