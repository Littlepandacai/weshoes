function tyrla_filter (shoeArray, minPrice, maxPrice) {
    let filteredArray = [];
    for (let shoe of shoeArray) {
        if (shoe.price >= minPrice && shoe.price <= maxPrice) {
            filteredArray.push (shoe);
        }

    }

    return filteredArray;

}

tyrla_filter (SHOES, 200, 700);

console.log (tyrla_filter (SHOES, 200, 700))