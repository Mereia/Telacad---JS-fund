// Transformarea array-ului intr-un string - join
let words = ['Am', 'plecat', 'in', 'excursie.'];
// Cream o propozitie, pornind de la cuvintele de mai sus.
console.log(words.join(' '));
// Array-ul initial nu se modifica
console.log(words);

// Recapitulare - arrow functions
// Cele 3 functii de mai jos sunt echivalente
// Varianta 1 - function keyword
function multiply1(number) {
  return number * 2;
}
// Varianta 2 - arrow function scurt
const multiply2 = number => number * 2;
// Varianta 3 - arrow function lung
const multiply = (number) => {
  return number * 2;
}

// EX: Fie un vector ce contine salarii. Sa se calculeze salariile dublate, rezultatul fiind stocat intr-un vector nou.
const salaries = [200, 350, 450, 100, 900];
const doubledSalaries = [];
// putem face cu un for simplu
for (let i = 0; i < salaries.length; i++) {
  const salary = salaries[i];
  doubledSalaries.push(salary*2);
}
console.log(doubledSalaries);

// Exista o varianta mai buna de a face asta! MAP
const doubledSalaries2 = salaries.map(salary => salary * 2);
console.log(doubledSalaries2);
// Aspecte importante la map:
// - ITEREAZA prin array => parcurge rand pe rand fiecare element (are un for intern)
// - primeste ca parametru O FUNCTIE. Functia va fi apelata rand pe rand pentru fiecare element din array, deci va primi ca valoare a 
// primului parametru (in cazul de fata - salary) elementul curent.
// - RETURNEAZA un nou array, care va contine fiecare element din array-ul initial, modificat de functia primita ca parametru de map.

// Cum filtram elementele unui array - FILTER
// EX: Sa se salveze intr-un vector numai salariile de peste 350.
const filteredSalaries = salaries.filter(salary => {
  if (salary > 350) {
    return true;
  } else {
    return false;
  }
});
console.log(filteredSalaries);
// Varianta scurta
const filteredSalaries2 = salaries.filter(salary => salary * 2);
console.log(filteredSalaries2);
// Aspecte importante la FILTER:
// Similar cu map, ITEREAZA prin array, primeste ca parametru O FUNCTIE si RETURNEAZA un array nou.
// Diferenta o face functia primita ca parametru de filter: daca functia returneaza TRUE, elementul se va regasi in noul array 
// (array-ul rezultat), altfel va fi omis.

// Cum calculam suma elementelor dintr-un array? - REDUCE
const sum = salaries.reduce((accumulator, salary) => {
  return accumulator + salary;
}, 0)
console.log(sum);
// Aspecte importante la REDUCE:
// Similar cu map si filter, ITEREAZA prin elementele array-ului, primeste ca parametru o functie si RETURNEAZA un nou array
// Reduce primeste si un al doilea parametru, un acumulator (valoarea initiala a acestuia).
// Functia primita ca parametru de reduce primeste ca prim parametru (la fiecare pas) valoarea curenta a acumulatorui, iar elementul 
// curent este cel de-al doilea parametru.
// Functia returneaza la fiecare pas NOUA valoare a acumulatorului.
