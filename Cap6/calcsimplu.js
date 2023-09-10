// Selectam elementele cu care vom interactiona userii/browserul
let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let addButton = document.querySelector('#add');
let subtractButton = document.querySelector('#subtract');
let finalResult = document.querySelector('.show-class');

// Functie care aduna numerele introduse
function add() {
    // Valorile introduse de utilizator prin tag-urile input sunt salvate in atributul "value". Odata ce inputul e selectat in JS, valoarea atributului este accesata ca mai jos (<numeInput>.value).
    // ATENTIE! Chit ca inputul are tipul number (in HTML), in JS ce primim din input e tratat ca fiind string! => facem conversie.
    let result = Number(number1.value) + Number(number2.value);
    // Dupa ce calculam rezultatul, il afisam pe ecran, modificand continutul divului corespunzator.
    finalResult.innerHTML = result;
}

// Functie care scade numerele introduse
function subtract() {
    let result = Number(number1.value) - Number(number2.value);
    finalResult.innerHTML = result;
}

// Adaugam pe butoane event listenere, asociind functiile pe care browserul le va executa cand userul da click.
addButton.addEventListener('click', add);
subtractButton.addEventListener('click', subtract);