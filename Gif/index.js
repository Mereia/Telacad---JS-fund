// Selectam imaginea.
let gif = document.querySelector('#gif');

// Salvam valorile surselor imaginilor.
const images = [
  'img/0.png',
  'img/1.png',
  'img/2.png',
  'img/3.png',
  'img/4.png',
  'img/5.png'
];

// Counterul este folosit pentru a selecta o anumita imagine.
// images[0] => prima imagine; images[5] => ultima imagine
let counter = 0;

// Functie care mofica imaginea afisata
function changeImage() {
  // Cand counterul ajunge la 6, il resetam, ca sa o ia de la inceput, iar giful sa se afiseze continuu.
  if (counter === 6) {
    counter = 0;
  }
  // Modificam imaginea curenta, in functie de counter. Modificarea imaginii inseamna modificarea src-ului.
  gif.src = images[counter];
  // De fiecare cand e apelata functia, incrementam counterul.
  counter++;
}

// Modificam imaginea o data la 100 de milisecunde.
setInterval(changeImage, 100);
