// String-urile sunt INDEXABILE. Ce inseamna asta? Fiecare caracter are o pozitie corespunzatoare.
// string:   talent
// pozitie:  012345
let myString = 'talent';
// Indexul corespunzator primei cifre este 0 (index = pozitie).
// "talent" are 6 caractere, deci ultimul index este 5.

// Cum putem accesa caracterul de la pozitia 4?
// Varianta 1 - paranteze patrate
console.log(myString[3]);
// Varianta 2 - metoda charAt
console.log(myString.charAt(3));
// Metodele sunt echivalente, dar charAt e mai vechi, azi preferandu-se prima varianta.

// ATENTIE: String-urile sunt IMUTABILE. Ce inseamna asta? Un string nu poate fi modificat partial.
myString[0] = 'T';
// String-ul nu a fost modificat.
console.log(myString);
// Pentru a-l modifica pe myString trebuie sa ii acordam o noua valoare.
myString = 'Talent';
console.log(myString);