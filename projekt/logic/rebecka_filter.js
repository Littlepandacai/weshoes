"use strict";

function rebecka_filter(x, y) {
    let price_filter = [];
    for (let shoe of SHOES) {
        if (x < shoe.price && y > shoe.price) {
            price_filter.push(shoe.price);
        }
    }
    return price_filter
}



