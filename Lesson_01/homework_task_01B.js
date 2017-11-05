class Osoba {
    constructor(imie, nazwisko, rokUrodzenia, plec) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.rokUrodzenia = new Date(rokUrodzenia);
        this.plec = plec;
    }
    podajWiek() {
        var dzisiaj = new Date();
        var wiek = dzisiaj.getFullYear() - this.rokUrodzenia.getFullYear();
        return wiek;
    }
};

class Nauczyciel extends Osoba {
    constructor(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy) {
        super(imie, nazwisko, rokUrodzenia, plec);
        this.nauczanyPrzedmiot = nauczanyPrzedmiot;
        this.rokRozpoczeciaPracy = new Date(rokRozpoczeciaPracy);
    };
    podajIloscLatPracy() {
        var dzisiaj = new Date();
        var iloscLatPracy = dzisiaj.getFullYear() - this.rokRozpoczeciaPracy.getFullYear();
        return iloscLatPracy;
    };

};

class Wychowawca extends Nauczyciel {
    constructor(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy, przydzielonaKlasa) {
        super(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy);
        this.przydzielonaKlasa = przydzielonaKlasa;
    };
};
var lukasz = new Osoba('Łukasz', 'Lejman', '1996', 'mężczyzna');
console.log(lukasz.podajWiek(), lukasz);
var lukaszNauczyciel = new Nauczyciel('Łukasz', 'Lejman', '1996', 'mężczyzna', 'przedmiot', '2001');
console.log(lukaszNauczyciel.podajIloscLatPracy(), lukaszNauczyciel);
var lukaszWychowawca = new Wychowawca('Łukasz', 'Lejman', '1996', 'mężczyzna', 'przedmiot', '2001', '3A');
console.log(lukaszWychowawca.podajIloscLatPracy(), lukaszWychowawca.podajWiek(), lukaszWychowawca);