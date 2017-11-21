$('#left').on('click', function () {
    $('.block').animate({
        left: '+=50',
    }, 500);
}); 

$('#right').on('click', function () {
    $('.block').animate({
        left: '-=50',
    }, 500);
}); 

