(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {




        $('.menu-open , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').addClass('active');

        });
        $('.menu-close , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').removeClass('active');

        });



        $(".hero__slider__wrapper").owlCarousel({
            items: 1,
            nav: true,
            dot: false,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 2500,
            mouseDrag: true, 
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            smartSpeed: 1000,
            responsiveClass: true,
            navText: ["<i class='far fa-chevron-left'></i>", "<i class='far fa-chevron-right'></i>"]

        });


    });

    // $(window).load(function() {
    //     $(".preloader").delay(4000).fadeOut("slow");
    //   $(".overlay").delay(4500).fadeOut("slow");
    // })
 

}(jQuery));