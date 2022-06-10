$(function () {
	let header = document.querySelector('.header');
	let button_return = document.querySelector('.button_return');

	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			header.classList.add('header_active');
		} else {
			header.classList.remove('header_active');
		}

		if (window.pageYOffset > 500) {
			button_return.classList.add('arrow_top');
		} else {
			button_return.classList.remove('arrow_top');
		}
	};

	//slick-slider

	$('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		prevArrow: $(".cards-mobile img.arrow_left"),
        nextArrow: $(".cards-mobile img.arrow_right"),
    });

	$('header .layout .opened-menu .close-button').on('click', function () {
		$('header .layout .burger_menu').toggleClass("change");

		$('header .layout .opened-menu').css("display", "none");
	})

});

function myFunction(x) {
	x.classList.toggle("change");

	$('.header').toggleClass('active');

	$('header .layout .opened-menu').css("display", "block");
	
}