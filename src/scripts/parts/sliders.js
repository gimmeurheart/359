$('.header__slider').slick({
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Prev" type="button" style=""></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""></button>',
        asNavFor: '.header__slider-second',
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'

    });

    $('.header__slider-second').slick({
        infinite: true,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.header__slider',
        focusOnSelect: true
    });

    $('.pop__slider').slick({
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Prev" type="button" style=""></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    });
