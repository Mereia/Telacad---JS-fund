// EX: Declaram doua variabile. Adunam respectivele variabile
// si le afisam la consola.

// EX1: 2 + 3
/*var number1 = 2
var number2 = 3
var sum = number1 + number2;
console.log(sum)

// EX2: 4 + 7
var number1 = 4
var number2 = 7
var sum = number1 + number2;
console.log(sum)

// EX3: 5 + 8
var number1 = 5
var number2 = 8
var sum = number1 + number2;
console.log(sum) */

// ATENTIE! Codul pe care l-am scris este repetitiv...
// Daca vrem sa modificam cerinta in "concatenam cele doua numere"
// => va trebui sa punem .toString() de 3 ori... NU E OK!
// Pentru a rezolva problema, avem nevoie de FUNCTII.

// EX: Faceti o functie care aduna doua numere.

// VARIANTA1: fara return
// Declarare:
function sum1(number1, number2) {
    var result = number1 + number2;
    console.log(result);
  }
  // Apelare:
  sum1(2, 3);
  
// VARIANTA2: cu return
// Declarare:
  function sum2(number1, number2) {
    var result = number1 + number2;
    return result;
  }
// Apelare (functia returneaza o valoare, deci o salvam intr-o variabila):
  var result2 = sum2(2, 3);
  console.log(result2);
  
// Varianta cu return este preferabila, deoarece, de obicei, vrem ca
// rezultatul functiei (ce returneaza) sa fie folosit ulterior in program.
  
// Executia functiei se face la apelare. Prin partea de declarare, functia este
// salvata in memorie, deci la apelare, JS va sti de unde sa o ia.
// Parametri sunt un fel de variabile. Numele lor se da la declararea
// functiei, iar valoarea lor se da la apelarea functiei.


// O FUNCTIE POATE PRIMI NUMAR VARIABIL DE PARAMETRI!

function multiply(number1, number2) {
    return number1 * number2;
  }
// Daca primeste mai putini parametri decat are definiti, 
// pentru cei care nu sunt definiti va atribui ca valoare undefined.
  console.log(multiply(1));
  console.log(multiply(3, 4));
// Daca primeste mai multi parametri decat are definiti, ii ia in considerare,
// doar pe cei corespunzatori definitiei functiei (aici pe 2 si e 7, pe care ii
// atribuie lui number1 si number2), iar pe urmatorii ii ignora.
  console.log(multiply(2, 7, 5, 8, 6));


// FUNCTIA ANONIMA

// Are aceeasi sintaxa cu functia normala, doar ca NU are nume.

// function (number1, number2) {
//   var result = number1 + number2;
//   console.log(result);
// }

// => o mica mare problema... cum o apelam, nu?

// SINTAXA 2 - Function expression (functiile salvate in variabile)

// Avand in vedere ca avem deja un nume atribuit constantei,
// functia trebuie sa fie anonima, nu are sens sa dam doua nume.
// DA, putem atribui unei variabile o functie.
const sumo = function(number1, number2) {
  var result = number1 + number2;
  return result;
}
// Apelarea:
var result = sumo(2, 3);
console.log(result);


// Si acum va intrebati.. la ce ma ajuta noua sintaxa? 
// Avem urmatorul scenariu: Dan scrie urmatoarea functie:
function operation(number1, number2) {
    var multiply = number1 * number2;
    return multiply;
  }
  var multiplyResult = operation(2, 5);
  console.log(multiplyResult);
  
// IN ACELASI FISIER, peste sute de linii de cod (presupunem asta)
// vine Andrei si scrie urmatoarea functie
  function operation(number1, number2) {
    var sum = number1 + number2;
    return sum;
  }
  var sumResult = operation(2, 5);
  console.log(sumResult);
  
// Vedem cu stupoare, ca cea de-a doua functie o suprascrie pe prima..
// Cum rezolvam problema asta?
  
// SINTAXA 2
// Cu const, nu putem redeclara valoarea atribuita!!
  const operation2 = function(number1, number2) {
    var multiply = number1 * number2;
    return multiply;
  }
  var multiplyResult = operation2(2, 5);
  console.log(multiplyResult);
  
// Daca ati decometa urmatoarea bucata de cod, ati vedea ca avem
// eroare: functia cu numele operation2 a fost deja declarata.
  
// const operation2 = function(number1, number2) {
//   var sum = number1 + number2;
//   return sum;
// }
// var sumResult = operation2(2, 5);
// console.log(sumResult);


// EX: Facem o functie care verifica daca un numar este palindrom.
// palindrom => numarul sa fie egal cu inversul sau
// 4224 => palindrom
// 2232 => nu e palindorm
// Functia primeste ca parametru un numar, returneaza true daca numarul e
// palindrom, returneaza false daca numarul nu e palindrom.

// LOGICA:
// Functia va primi ca parametru numarul. Ii va calcula inversul, folosind
// secventa de mai sus. Daca inversul este egal cu numarul primit
// ca parametru, returneaza true, altfel returneaza false.

function isPalindrom(number) {
    var reverseNumber = '';
    // ATENTIE! daca nu facem copie, la sfarsitul prelucrarii (taierea
    // cifrelor), numarul va fi 0.
    var numberCopy = number;
    
    while (number > 0) {
      const lastDigit = number % 10;
      reverseNumber = reverseNumber + lastDigit;
      number = parseInt(number / 10);
    }
    
    // ATENTIE! numarul rezultat dupa prelucrare e sir de caractere
    // => trebuie convertit la numar pentru a fi ok.
    if (numberCopy === Number(reverseNumber)) {
      return true;
    } else {
      return false;
    }
  }
  
  var isPalindromResult = isPalindrom(4224);
  console.log(isPalindromResult);


// HOISTING - se aplica doar pentru variabilele declarate cu var si pentru
// functiile declarate cu function!

// Ce va fi afisat pentru urmatoarea bucata de cod?
// R: undefined - de ce? Browserul muta declararea variabilelor 
// la inceputul programului.
console.log(name2);
var name2 = 'Gigel';

// Cum vede browserul codul scris mai sus?
// (vede name2, dar eu am pus name3 ptc name2 deja avea atribuita
// valoarea 'Gigel' de mai sus)
var name3;
console.log(name3);
name3 = 'Gigel';
// ATENTIE! E mutata doar declararea variabilei, nu si atribuirea valorii

// Ce va fi afisat pentru urmatoarea bucata de cod?
// R: eroare - let e declarat inainte sa fie afisat. let, spre deosebire
// de var, nu este mutat la inceput.
// (Decomentati urmatoarele doua randuri, ca sa vedeti.)
// console.log(name);
// let name = 'Gigel';

// Ce va fi afisat pentru urmatoarea bucata de cod?
// R: 3. De ce? Declararea functiei este mutata de browser la 
// inceputul programului, chiar inaintea declararii variabilelor.
console.log(sum(1, 2))
function sum(a, b) {
  return a + b;
}

// cum vede browserul codul scris mai sus?
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2))


// CALLBACK-ul e o functie pasata ca parametru unei alte functii.
// CALLBACK-ul este apelat DUPA o anumita serie de intructiuni.
function conversation(message, callback) {
    console.log(message);
    callback();
  }
  
function hodorReply() {
    console.log('Hodor');
  }
  
// Functia care are rol de callback este hodorReply.
// Daca ne uitam la implementarea functiei conversation, practic
// hodorReaply va fi mereu apelata dupa ce mesajul nostru este afisat.
  conversation('Ce zici, Hodor?', hodorReply);
  conversation('Cat e ceasul?', hodorReply);


  function doMath(myNumber) {
    var nr=0;
    while(myNumber !== 0) {
        myNumber = parseInt(myNumber/10);
        nr++;
    }
    return nr;
}
console.log(doMath(345));


var adidasi = {
    nike: 345,
    adidas: 543,
    reebok: 234
}
console.log(adidasi.reebok);


var books = {
    malcomGladwell: 'Exceptionalii'
}
books.danBrown = 'Codul lui daVinci';
console.log(books);


function doNote(grade) {
    var catalog = {
        "George": grade,
        "Dani": grade
    }
    return catalog;
}
var myCatalog = doNote(10);
console.log(myCatalog['Dani']);


// 1. Creati o functie care primeste ca parametru doua numere si returneaza
// rezultatul ridicarii primului numar la puterea celui de-al doilea numar.


function power(nr1, nr2) {
  var ridicare = nr1 ** nr2;
  console.log(ridicare);
}
power(5, 3);

// EX: power(2, 4) => 16
// 2*2*2*2 = 16
// power(3, 2) => 9
// 3*3 = 9

// CHALLENGE: Incercati sa nu folositi o functie predefinita, sau un operator
// care deja face asta. Folositi structuri repetitive.


// Se da urmatorul obiect:
const product = {
  name: 'black backpack',
  price: 23,
  currency: 'dollars'
}

// 2. Creati o functie care primeste ca parametru un obiect, reprezentand
// un produs. Functia va afisa returna un mesaj de genul 
// "Produsul <numeProdus> costa <pretProdus> <tipMoneda>"

// EX: productInformation(product) =>
// "Produsul XD Design Backpack costa 23 LEI"
function mesaj(product) {
  const { name, price, currency } = product;
  return `Product ${name} costs ${price} ${currency}.`; 
  }
  
  console.log(mesaj(product));
 

// 3. Creati o functie care primeste ca parametru un obiect, reprezentand un
// produs. Functia va returna UN NOU OBIECT, care va contine informatiile
// obiectului primit ca parametru, la care se va mai adauga un camp
// numit "category". Daca pretul obiectului este >= 50 de lei, valoarea
// lui "category" va fi "expensive", altfel va fi "cheap".

const product1 = {
  nume: 'ruj fenty',
  pret: 10,
  moneda: 'ron'
}

function extendObject(product1, newKey, newValue) {
  // Create a new object by cloning the original object
  const extendedObject = { ...product1 };

  // Add the new key-value pair to the extended object
  if (newValue >= 100) {
    extendedObject[newKey] = 'scump';

  } else {
    extendedObject[newKey] = 'ieftin';
  }

  return extendedObject;
}

const product2 = extendObject(product1, 'category', 10);
console.log(product2);

// EX: extendObject(product) => 
// {
//    name: 'XD Design Backpack',
//    price: 23,
//    currency: 'LEI',
//    category: 'cheap'
// }

// Creati si un alt produs si testati cu el!
