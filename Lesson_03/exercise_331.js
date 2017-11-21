function task($element) {
    console.log($element);
    console.log('bezpośredni rodzic', $element.parent());
    console.log('najbliższy element nadrzędny <section>', $element.closest('section'));
    console.log('następny', $element.next());
    console.log('poprzedni', $element.prev());
    console.log('wszystkie elementy potomne', $element.children());
    console.log('_________________________________');
};

task($('.popular-recipes'));
task($('nav'));
task($('aside'));
task($('form'));