let palindromPhobia = "aibohphobia";
// Stringul este transformat in array, fiecare caracter al string-ului devenind un element al array-ului.
palindromPhobia = palindromPhobia.split('');
// Inversam array-ul, deci practic caracterele care formeaza stringul.
palindromPhobia = palindromPhobia.reverse();
// Unim caracterele intr-un singur sir.
palindromPhobia = palindromPhobia.join('');
// Fun fact: frica da palindroame este... un palindrom.
console.log(palindromPhobia);