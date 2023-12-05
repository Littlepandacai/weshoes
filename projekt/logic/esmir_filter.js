"use strict";
//x = minpris, y = maxpris
function esmir_filter(array, x, y) {
    let filterArray = [];
    for (let shoe of array) {
        if (shoe.price >= x && shoe.price <= y) {
            filterArray.push(shoe);
        }
    }
    return filterArray;
}