$(document).ready(function(){
	$('#burger_menu').click(function(){
		$(this).toggleClass('open');
		$('.header_navigation').toggleClass('mobile_nav');
	});

	$('.featured-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
		prevArrow: $(".arrow-buttons-for-slider .arrow_left"),
        nextArrow: $(".arrow-buttons-for-slider .arrow_right"),
    });

    $('.featured-slider-mobile').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		prevArrow: $(".arrow-buttons-for-slider-mobile .arrow_left"),
        nextArrow: $(".arrow-buttons-for-slider-mobile .arrow_right"),
    });
    $('.stories-slider-pad').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
		prevArrow: $(".arrow-buttons-for-stories-slider .arrow_prev"),
        nextArrow: $(".arrow-buttons-for-stories-slider .arrow_next"),
    });
    $('.stories-slider-mobile').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		prevArrow: $(".arrow-buttons-for-stories-slider-mobile .arrow_prev"),
        nextArrow: $(".arrow-buttons-for-stories-slider-mobile .arrow_next"),
    });
    $('.testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		prevArrow: $("section.testimonials .layout .circle_arrows .prev"),
        nextArrow: $("section.testimonials .layout .circle_arrows .next"),
    });
});


$(window).scroll(function (event) {
    var top = $(window).scrollTop();
    if(top >= 800){
    	$('.return_up').addClass('on');
    } else {
		$('.return_up').removeClass('on');
    }
});