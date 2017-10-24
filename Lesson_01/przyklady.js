/* Zasięg funkcyjny */

var i = 100; // zmienna globalna
for (var i = 0; i < 5; i++) { // nadpisanie tej samej zmiennej globalnej
    // działanie pętli for
}
console.log(i); // wyświetli wartość 5

/* Domknięcie */

var j = 100;
(function () {
    for (var j = 0; j < 5; j++) { // zmiennna lokalna
        // działanie pętli for
    }
})();
console.log(j); // wyświetli wartość 100

/* Zasięg blokowy */

let k = 100; // zmienna globalna
for (let k = 0; k < 5; k++) { // zmiennna lokalna w zakresie pętli for
    // działanie pętli for
}

console.log(k); // wyświetli wartość 100