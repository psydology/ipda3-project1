new WOW().init();

$(document).ready(function() {

    $('.responsive').slick({
        infinite: true,
        rtl: true,
        slidesToShow: 3,
        slidesToScroll: 3,
    });

    $(".responsive").owlCarousel({
        loop: true,
        rtl: true,
        nav: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    });




    $('.slick-carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });

});