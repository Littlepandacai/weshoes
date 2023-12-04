"use strict";

const PRICES = [100, 450, 600, 155, 90, 77, 299];

function rebecka_filter(x, y) {
    let price_filter = [];
    for (let price of PRICES) {
        if (x < price && y > price) {
            price_filter.push(price);
        }
    }
    return price_filter
}

