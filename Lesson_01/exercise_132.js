class Figura {
    constructor(nazwa) {
        this.nazwa = nazwa;
    }

    podajNazwe() {
        console.log(this.nazwa);
    }
};

class Czworokat extends Figura {
    constructor(nazwa,typCzworokata, dlugosciBokow) {
        super.constructor(nazwa);
        this.typCzworokata = typCzworokata;
        this.dlugosciBokow = dlugosciBokow;
    }
};
var obj = new Czworokat("blabla","prostokat",[5,8,5,8]);
obj.podajNazwe();
//pozniej dokoncze