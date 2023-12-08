"use strict";

// skapa funktionerna för de 3 filterna, countries, price, type of shoe
//

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

