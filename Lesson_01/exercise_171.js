function poleWycinkaKola(kat, r, pi = Math.PI) {
    let wynik = (kat / 360) * pi * Math.pow(r, 2);
    return wynik;

}

console.log(poleWycinkaKola(60, 5, 3.14));
console.log(poleWycinkaKola(30, 7, 22 / 7));
console.log(poleWycinkaKola(45, 2));