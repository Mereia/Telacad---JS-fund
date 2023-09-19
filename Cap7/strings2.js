// Concatenarea sirurilor de caractere
// Varianta 1: operatorul +
let nume = 'Freeman';
let prenume = 'Morgan';
console.log(nume + ' ' + prenume) // => "Morgan Freeman"
// Varianta 2: metoda concat
console.log(nume.concat(' ', prenume)) // => "Morgan Freeman"
// ATENTIE! mereu folositi operatorul + ! E mai bun pentru performanta.

// Extragerea unui subsir
// Varianta 1: metoda substring
let cnp = '1990511772341';
// Extragem anul nasterii din cnp
console.log(cnp.substring(1, 3));
// ATENTIE! cnp-ul nu e modificat! Daca vrem sa salvam subsirul, il punem intr-o variabila.
let month = cnp.substring(3, 5) ;
console.log(month);
// Varianta 2: slice - similar cu substring, dar accepta si indecsi negativi.
// Afisam ultimele 6 cifre din cnp
console.log(cnp.slice(-6)); // => 772341

// Inlocuirea unui sir cu altul - replace
let sentence = 'Am mers la mare.';
// ATENTIE! Modificam valoarea lui sentence.
sentence = sentence.replace('mare', 'munte');
console.log(sentence)

// Pentru a testa daca un sir contine un anumit subsir - includes
let sentence2 = 'Subscriberi: Mihaela, Daniela, Manuel, Miguel';
console.log(sentence2.includes('Daniela'));

// Transformarea unui string intr-un array - split
// Sparam cuvintele dupa virgula.
let sentence3 = 'Ana,Maria,3500,pictor';
console.log(sentence3.split(','));
// Daca dam ca parametru un sir gol, fiecare caracter va fi un element din array-ul rezultat.
console.log(sentence3.split(''));