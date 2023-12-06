"use strict";

function lucia_filter (array, minPrice, maxPrice) {
    let filteredArray = [];
    
    for (let shoe of array) {
        if (shoe.price >= minPrice && shoe.price <= maxPrice) {
            filteredArray.push(shoe);
        }
    }
    return filteredArray;
}