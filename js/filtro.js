$(function () {

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-nosotros').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: nosotros -100
        },467);
    });

});