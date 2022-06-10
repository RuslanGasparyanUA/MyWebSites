$(document).ready(function(){
    $('section.brif .layout .brif_items .brif_items-cloud ul li').click(function(){
        $(this).toggleClass('clicked');
    });
    $('header .layout .header_menu .header_lang').click(function(){
        $(this).toggleClass('lang-visible');
    });
    var porfolioCard = $('section.portfolio .layout .portfolio_works .portfolio_cards .portfolio_card');
    $('section.portfolio .layout .portfolio_top .portfolio_menu ul li').click(function(){
        $('section.portfolio .layout .portfolio_top .portfolio_menu ul li').removeClass('choosed');
        $(this).toggleClass('choosed');
        if ($(this).hasClass('dev')){
            porfolioCard.hide();
            $('section.portfolio .layout .portfolio_works .portfolio_cards .dev').show(500);
        } else if ($(this).hasClass('dis')){
            porfolioCard.hide();
            $('section.portfolio .layout .portfolio_works .portfolio_cards .dis').show(500);
        } else if ($(this).hasClass('smm')){
            porfolioCard.hide();
            $('section.portfolio .layout .portfolio_works .portfolio_cards .smm').show(500);
        } else if ($(this).hasClass('all')){
            porfolioCard.hide();
            porfolioCard.show(500);
        }
    });
    $('body .form-wrapper .form .form-items ul li').click(function(){
        $(this).toggleClass('clicked');
    });
    $('header .layout .header_menu .header_brif').click(function(){
        $('body .form-wrapper').css('display', 'flex');
        $('body').addClass('scroll-off');
    });
    $('body .form-wrapper .form .button-close').click(function(){
        $('body .form-wrapper').css('display', 'none');
        $('body').removeClass('scroll-off');
    });

    //slick-slider for section.testimonials

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $(".top-buttons .button-circle-left"),
        nextArrow: $(".top-buttons .button-circle-right"),
    });
    $('.slider-pad').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $(".top-buttons-pad .button-circle-left"),
        nextArrow: $(".top-buttons-pad .button-circle-right"),
    });
    $('.slider-mobile').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".top-buttons-mobile .button-circle-left"),
        nextArrow: $(".top-buttons-mobile .button-circle-right"),
    });

    //slick-slider for section.products

    $('.slick-products').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".info-buttons .button-left"),
        nextArrow: $(".info-buttons .button-right"),
    });

    //burger-menu

    $('header .layout .header_menu .burger-wrap').click(function(){
        $('header .layout .header_menu .burger-wrap .burger').toggleClass('moved');
        $('header .layout .header_menu').toggleClass('opened');
        $('header .layout .header_menu').toggleClass('closed');
        $('header').toggleClass('open');
        if ($(window).width() <= '1024') {
            $('header .layout .display_blur').toggleClass('on');
            $('body').toggleClass('scroll-off');
        }
    });

    $('body .form-wrapper .form .close-line').click(function(){
        $('body .form-wrapper').css('display', 'none');
    });

});