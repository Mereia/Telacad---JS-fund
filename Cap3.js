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