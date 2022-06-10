$(function() {
    $('.burger-menu').click(function(){
        $(this).toggleClass('active');
        $('header').toggleClass('active');
    })
});