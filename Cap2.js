var phone = "Iphone 12 Pro Max";
if (true) {
  // Putem redeclara o variabila cu var (nu vrem asta in mod normal).
  // Telefonul va fi modificat si in afara if-ului
  var phone = "Nokia 3310";
  console.log(phone);
}
console.log(phone);


var phone = 'Iphone 12 Pro Max';
// Intr-o functie (vom vedea mai multe desprea crearea unei functii cursul urmator)
// daca declari o variabila cu var este vizibila DOAR in interiorul functiei.
function dream() {
  var phone = 'Nokia 3310';
  console.log(phone);
}
dream ()
console.log(phone);


let color = 'galben';
// REDECLARAREA (let color) va genera eroare.
// let color = 'blue';
// REASIGNAREA unei valori (modificarea acesteia) este posibila.
color = 'bleu';
console.log(color);

// LET are BLOCK scope (vezi desenul cu scoping).
if (true) {
// Daca declari o variabila cu let in interiorul unui bloc (if, for)
// va fi vizibila doar in interiorul blocului.
  let color = 'rosu';
  console.log(color);
}
console.log(color);


const director = 'F.F. Coppola';
// REASIGNAREA VA DA EROARE, valoarea variabilei nu mai poate fi modificata
// director = 'S. Spielberg';

// CONST are, asemenea lui LET, BLOCK scope
if (true) {
  const director = 'S. Spielberg';
  console.log(director);
}
console.log(director);

// IF 
// EX: Daca ai luat nota mai mare de 9, afisam la consola "Nota mare!".
// Daca ai luat nota mai mare de 8, afisam "Nota buna!".
// Daca ai luat nota mai mare de 5 => "Ai trecut!".
// Altfel, asisam "Iti multumim pentru timpul acordat, din pacate...".

var grade = 3;

if (grade >= 9) {
  console.log('Nota mare!');
} else if (grade >= 8) {
  console.log ('Nota buna!');
} else if (grade >= 5) {
  console.log('Ai trecut!');
} else {
  console.log('Iti multumim pentru timpul acordat, din pacate...');
}


// SWITCH
// EX: Daca sortarea este dupa nume, sa se afiseze 'sortare dupa nume', daca este
// dupa pret sa se afiseze 'sortare dupa pret', daca este dupa data, sa se afiseze
// 'sortare dupa data', altfel sa se afiseze 'sortare'.

const sortType = 'SORT_BY_PRICE';

switch (sortType) {
  case 'SORT_BY_NAME':
    console.log('sortare dupa nume')
    break;
  case 'SORT_BY_PRICE':
    console.log('sortare dupa pret')
    break;
  case 'SORT_BY_DATE':
    console.log('sortare dupa data')
    break;
  default:
    console.log('sortare')
    break;
}


// OPERATORUL TERNAR

// Varianta cu if:
var sign;
var number = 7
if (number > 0) {
    sign = 'plus';
} else {
    sign = 'minus';
}

// Varianta cu operatorul ternar:
var sign = (number > 0 ? 'plus' : 'minus')


// EX: Se da un numar:
// Daca numarul e divizibil cu 3 afisati "Fizz".
// Daca numarul e divizibil cu 5 afisati "Buzz".
// Daca numarul e divizibil si cu 3 si cu 5 afisati "FizzBuzz".
// Altfel afisat numarul.

var number = 15;
if (number % 5 === 0 && number % 3 === 0) {
  console.log("FizzBuzz");
} else if (number % 5 === 0) {
  console.log("Buzz");
} else if (number % 3 === 0){
  console.log("Fizz");
} else {
  console.log(number);
}


// 1. Declarati o variabila numita year. Daca anul respectiv este bisect,
// afisati la consola "Anul este bisect", altfel afisati "Anul nu este bisect".

// EX:
// var year = 2020; // should console.log "Anul este bisect"
// year = 2019; // should console.log "Anul nu este bisect"

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  const userInput = 2024; // Replace with any year you want to check
  if (isLeapYear(userInput)) {
    console.log(userInput + " is a leap year.");
  } else {
    console.log(userInput + " is not a leap year.");
  }
  


// 2. Se dau 3 numere(variati valorile lor). Comparand cele 3 numere, 
// salvati intr-o variabila numita "max" valoarea maxima. 
// EX:
var nr1 = 4;
var nr2 = 2;
var nr3 = 1;

const result = Math.max(nr1, nr2, nr3); // should be 5
console.log("The max number is: ", result);


// 3. Folosind structuri repetitive, afisati la consola primele 10 numere,
// in ordine DESCRESCATOARE!
// EX: 10, 9, 8, ..., 1 (afisate rand pe rand)
for (let i = 10; i >= 1; i--) {
    console.log(i);
  }


// 4. Folosind structuri repetitive, calculati suma primelor 10 numere naturale.
let sum = 0;
for (let nr = 1 ; nr <= 10; nr++) {
    sum += nr;
  }
console.log("The sum of the first 10 digits is:", sum);
// EX: 55 trebuie sa fie raspunsul final

let numberOfDogs = 8;
let numberOfCats = 6;
let numberOfEmployees = 2;

// EX: Daca avem numar par de caini si numar par de pisici
// afisam mesajul "Toata lumea este fericita!".
if ( numberOfDogs % 2 === 0 && numberOfCats % 2 === 0) {
  console.log("Toata lumea este fericita!");
}

// EX: Daca numarul cainilor si al pisicilor e mai mic sau egal cu 15
// si avem mai mult de 2 afisam mesajul "Toate animalele sunt ingrijite bine!".
if ( numberOfDogs + numberOfCats < 15 || numberOfEmployees > 2 ) {
  console.log("Toate animalele sunt ingrijite bine!");
}


// WHILE

// EX: Numaram din 1 in 1 pana la 20, pornind de la 1.
var number = 1;
while (number <= 20) {
  console.log(number);
  number = number + 1;
}

// ATENTIE: bucla infinita => O SA BLOCHEZE BROWSERUL!
// Daca vreti va blocati browserul, decomentati urmatoarea bucata de cod:
// while( true ) {
//   console.log("infinit");
// }

// FOR

// EX: Numaram din 1 in 1 pana la 20, pornind de la 1.
for (var number = 1; number <= 20; number++) {
   console.log(number);
}


// EX: Se da un numar. Afisati cate cifre are respectivul numar.

// declaram variabilele
let numar = 352;
let numarCifre = 0;
// Ne gandim la conditia de terminare a structurii repetitive.
while (numar > 0) {
  // ATENTIE: / da si rest la impartire!
  numar = parseInt(numar / 10);
  // PRO Tip: folositi console.log pentru a gasi greseli in cod.
  // console.log(numar);
  numarCifre ++;
}
console.log(numarCifre);
