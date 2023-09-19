// La baza Array-urile sunt niste obiecte. Au metode suplimentare fata de obiecte, ceea ce le transforma intr-o structura de date foarte puternica.
// Fata de obiecte, arrayurile au cheile de tip numeric. Cheile unui array se numesc "indecsi".
// Array-ul are si o lungime stiuta (length).

// EX: un array care contine animale
// Valoarea:         ['vulpe', 'babuin', 'maki']
// Cheia(indexul):       0         1       2
// length: 3
// Pe pozitia 0 se afla prima valoare.
// Pe pozitia length - 1 se afla ultima valoare.
const animals = ['vulpe', 'babuin', 'maki'];
console.log(animals.length);
console.log(animals[0]);
console.log(animals[animals.length - 1]);

// Rulati in consola urmatoarele exemple. Ce diferente observati intre cele doua structuri de date?
const array1 = ['vulpe', 'babuin', 'maki'];
const object1 = {0:'vulpe', 1:'babuin', 2:'maki'};
// Vectorul are in plus lungimea.
// Vectorul nu poate sa aiba cheile de tip String, Obiectul poate.
// De asemenea, daca ne uitam in __proto__, vom vedea ca vectorul are in plus niste metode fata de obiect.
const object2 = {zero:'vulpe', unu:'babuin', doi:'maki'};

// ATENTIE! Nu folositi obiecte pe post de array-uri sau viceversa. Obiectele sunt pentru a grupa informatii diferite, dar care apartin unui 
// lucru (ex: nume, prenume, nota pentru elev), in timp ce array-urile sunt folosite pentru a stoca informatii repetitive (o lista de elevi).
// GRESIT: Informatia este repetitiva.
const objectCatalog = {
  dan: 10,
  teo: 10,
  otilia: 9
}
// CORECT: catalogul reprezinta o lista de elevi (deci un array), iar fiecare elev este reprezentat printr-un obiect.
const arrayCatalog = [
  {
    nume: "dan",
    prenume: "duroaia",
    nota: 10
  },
  {
    nume: "teo",
    prenume: "ghica",
    nota: 10,
  },
  {
    nume: "otilia",
    prenume: "ghinescu",
    nota: 9
  }
]