$(function() {
  const swiper1 = new Swiper('.programs-mobile', {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });
  const swiper = new Swiper('.programs-pads', {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });
  $('.burger-menu').click(function(){
    $(this).toggleClass('active');
    $('header').toggleClass('opened');
  });
  $('.calculator-form .button').click(function(){
    $('.calculator-mobile-form').css('display', 'block');
    $('body').toggleClass('scroll-off');
  });
  $('.close-button').click(function(){
    $('.calculator-mobile-form').css('display', 'none');
    $('body').toggleClass('scroll-off');
  });
  $('.registration-form .button').click(function(){
    $('.registration-mobile-form').css('display', 'block');
    $('body').toggleClass('scroll-off');
  });
  $('.exit-button').click(function(){
    $('.registration-mobile-form').css('display', 'none');
    $('body').toggleClass('scroll-off');
  });
});