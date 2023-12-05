
"use strict";


function filterBojana(unfilteredShoeArray, x, y) {

    let filterPriceArray = [];
    for (let shoe of unfilteredShoeArray) {
        if (shoe.price >= x && shoe.price <= y) {
            filterPriceArray.push(shoe);
        }
    }
    return filterPriceArray;
}

filterBojana(SHOES, 200, 800);