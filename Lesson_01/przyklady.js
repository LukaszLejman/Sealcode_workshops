function Osoba(name) {
    this.name = name;
}

Osoba.prototype.getName = function () {
    return this.name + ' Kowalski';
}

var test = new Osoba('Jan');
console.log(test.getName());