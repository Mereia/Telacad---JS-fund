// Exista valorile -Infinity si +Infinity
// console.log(1/0);
// console.log(-1/0);
// Infinity nu e decat un numar foarte mare
// console.log(999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999);

// Transformarea in numere

// Varianta 1 - parseInt - incearca transforme un sir de caractere intr-un numar intreg. Daca in loc de string primeste alt tip de date, mai intai converteste acel tip de date intr-un numar. Daca nu poate converti, rezultatul este NaN.
console.log(parseInt("23.34"));
console.log(parseInt(23.34));
console.log(parseInt("23.4hdhdhd"));
console.log(parseInt("finesse"));
// Daca vrem sa facem conversia dintr-o alta baza(ex: 2 sau 16) in baza 10, specificam un al doilea parametru pentru parseInt, care semnifica baza din care se face conversia la un numar intreg, in baza 10.
console.log(parseInt("ff", 16));
// Baza 2 si baza 16 sunt baze des utilizate in programare. Baza 2 foloseste numai cifrele 0 si 1, iar baza 16 are cifre de la 0 la 9, plus litere de la a la f.

// Varianta 2 - Number - transforma orice tip de date intr-un numar, pastrand si zecimalele.
console.log(Number("23.34"));

// Transformarea numerelor in siruri de caractere

// Varianta 1 - toString
// ATENTIE! daca scriam 23.toString() nu ar fi mers!
let number1 = 53;
console.log(number1.toString());

// Varianta 2 - String
let number2 = 54;
console.log(String(number2));