"use strict";





function hampus_filter(shoe_array, x, y) {
    let filtered_array = [];
    for (let shoe of shoe_array) {
        if (shoe.price >= x && shoe.price <= y) {
            filtered_array.push(shoe);
        }
    }

    return filtered_array;
}