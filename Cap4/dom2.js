// Pas 1 : Selectam elementul (tag-ul) cu care userul va interactiona.
let imageButton = document.querySelector('#show-image');

// Pas2: Ne cream o functie care va modifica HTML-ul.
function displayImage() {
  // Selectam elementul al carui continut va fi modificat.
  let surprise = document.querySelector('#surprise');
  // Cu innerHTML modificam HTML-ul intern al tag-ului selectat.
  surprise.innerHTML = '<img src="https://www.scientia.ro/images/stories/articles/quantum/pisica_schrodinger.jpg">';
}

// Pas3: Vrem sa adaugam un comportament la click.
// Cu addEventListener, pe o zona selectata(in cazul de fata: un buton), la aparitia unui eveniment (in cazul de fata click-ul dat de utilizator) se executa o functie.
// Functia ce va fi executata este pasata ca cel de-al doilea parametru. Atentie, pasam definitia functiei, nu apelul ei!
imageButton.addEventListener('click', displayImage);