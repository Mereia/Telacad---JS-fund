// Adaugam un element la sfarsitul array-ului - push
let animals = ['vulpe', 'babuin', 'maki'];
animals.push('girafa');
console.log(animals);
 
// Scoatem ultimul element din array - pop
animals.pop();
console.log(animals);

// Inversarea elementelor dintr-un array - sort
let salaries = [7465, 9051, 3400, 1800, 100000, 8882];
salaries.reverse();
console.log(salaries);

// Sortam elementele dintr-un array - sort
salaries.sort();
// ATENTIE! By default sort compara elementele ca si cum ar fi stringuri! Vom vedea la cursurile urmatoare cum putem customiza 
// comportamentul lui sort.
console.log(salaries);