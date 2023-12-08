"use strict";

// filter för max-min pris av skorna

function amanda_filter (array, x, y) {
    let filteredArray = [];
    for (let shoe of array) {
        if (shoe.price >= x && shoe.price <= y) {
            filteredArray.push(shoe);
        }
    }
    return filteredArray;
}

console.log(amanda_filter(SHOES, 200, 900));


function filterShoes () {
    let selectedShoes = SHOES;
        //filterByCountry är en funktion
    if (anyFilterChecked("country")) {
        selectedShoes = filterByCountry(selectedShoes);
    }
        //filterByKind är en funktion
    if (anyFilterChecked("kindOfShoe")) {
        selectedShoes = filterByKind(selectedShoes);
    }

    if (anyFilterChecked("price")) {
        selectedShoes = filterByPrice(selectedShoes);
    }  
    return selectedShoes;
}