class Figura {
    constructor(nazwa) {
        this.nazwa = nazwa;
    }

    podajNazwe() {
        console.log(this.nazwa);
    }
};

class Czworokat extends Figura {
    constructor(nazwa, typCzworokata, dlugosciBokow) {
        super(nazwa);
        this.typCzworokata = typCzworokata;
        this.dlugosciBokow = dlugosciBokow;
    };
    podajTyp() {
        console.log(this.typCzworokata);
    };

};
class Prostokat extends Czworokat {
    podajPole() {
        console.log(this.dlugosciBokow[0] * this.dlugosciBokow[1]);
    };
    podajObwod() {
        console.log(this.dlugosciBokow[0] + this.dlugosciBokow[1] + this.dlugosciBokow[2] + this.dlugosciBokow[3]);
    };

};
var obj = new Prostokat('jakisprostokat', 'Prostokat', [5, 8, 5, 8]);
obj.podajNazwe();
obj.podajTyp();
obj.podajObwod();
obj.podajPole();