var $exclamationMark= $('<span>!</span>').css('color', 'blue');
$('aside h2').append($exclamationMark);

var $newListItem = $('<li>Nowy element</li>');
$newListItem.attr('id', 'new-id').css({
    'color': 'red',
    'font-family' : 'serif',
    'line-height':'15px'
});
$('ul').append($newListItem);

$('footer').remove();

$('h1.header1').attr('class','header-new');

$('ul').css('background-color','green');