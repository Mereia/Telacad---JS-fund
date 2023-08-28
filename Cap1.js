// Function that sums up the digits of a three digit number
function sumOfDigits(number) {
    if (number < 100 || number > 999) {
      return "Please enter a valid three-digit number.";
    }
  
    const digit1 = Math.floor(number / 100);
    const digit2 = Math.floor((number % 100) / 10);
    const digit3 = number % 10;
  
    return digit1 + digit2 + digit3;
  }
  
  const userInput = 345; // Replace with any three-digit number
  const result = sumOfDigits(userInput);
  
  console.log("Sum of digits:", result);


// Folosind doua prompt-uri cereti utilizatorului 
// prenumele si numele. La final alertati
// utilizatorul cu prenumele + numele introduse.
var prenume = prompt('Introduceti prenumele:');
var nume = prompt('Introduceti numele:');
var fullName = prenume + ' ' + nume;
alert(fullName);


// Folosind doua prompt-uri cereti utilizatorului doua numare
// si alertati suma celor doua numere.
var number1 = prompt('Introdu primul numar:');
// Trebuie sa transformam primul string intr-un numar.
number1 = Number(number1);
var number2 = prompt('Introdu cel de-al doilea numar:');
// Similar cu primul numar.
number2 = Number(number2);
var sum = number1 + number2;
alert(sum);
