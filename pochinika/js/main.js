$(function() {
    $('section.testimonials .cards').slick({
        arrows:true,
        nextArrow: '<img src="../img/testimonials-icon-next.png" alt="">',
        prevArrow: '<img src="../img/testimonials-icon-prev.png" alt="">',
    });
});
function myFunction(x) {
    x.classList.toggle('opened');
    $('nav ul.mobile').toggleClass('opened');
}