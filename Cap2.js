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