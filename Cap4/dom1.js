// Metode mai vechi
// ATENTIE! getElementById e singura dintre metodele vechi care returneaza un singur element!
// Selectam dupa id.
console.log(document.getElementById('second-button'));
// Selectam dupa numele tagului.
console.log(document.getElementsByTagName('button'));
// Selectam dupa clasa.
console.log(document.getElementsByClassName('pink-button'));

// Metoda mai noua: querySelector
// 1. tag => intre apostroafe scriem numele tagului
// querySelector RETURNEAZA UN SINGUR ELEMENT!
// Daca am mai o multe tag-uri de tip button, va fi returnat doar primul.
console.log(document.querySelector('button'));
// 2. clasa => intre apostroafe, inainte de numele clasei, punem .
console.log(document.querySelector('.pink-button'));
// 3. id => intre apostroafe, inainte de numele clasei, punem #
console.log(document.querySelector('#second-button'));

// querySelectorAll => returneaza toate elementele de tipul respectiv.
console.log(document.querySelectorAll('button'));
console.log(document.querySelectorAll('.pink-button'));