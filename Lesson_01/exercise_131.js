function Figura(nazwa) {
    this.nazwa = nazwa;
    this.podajNazwe = function() {
        console.log(name);
    };
};


function Czworokat(nazwa, typCzworokata, dlugosciBokow) {
    Figura.call(this, nazwa);
        this.typCzworokata = typCzworokata;
        this.dlugosciBokow = dlugosciBokow;
        this.podajTyp = function() {
            console.log(typCzworokata);
        };
};
function Prostokat(nazwa, typCzworokata, dlugosciBokow) {
    Czworokat.call(this, nazwa, typCzworokata, dlugosciBokow);
    this.podajPole = function () {
            console.log(dlugosciBokow[0] * dlugosciBokow[1]);
        };
    this.podajObwod = function() {
        console.log(dlugosciBokow[0] + dlugosciBokow[1] + dlugosciBokow[2] + dlugosciBokow[3]);
    };
}
var obj = new Prostokat('jakisprostokat','Prostokat',[5,8,5,8]);
obj.podajNazwe();
obj.podajTyp();
obj.podajObwod();
obj.podajPole();