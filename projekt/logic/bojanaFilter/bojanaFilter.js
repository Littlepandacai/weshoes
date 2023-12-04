

"use strict";


function filterBojana(unfilteredShoeArray, x, y) {

    // Loopa igenom varje sko i den ofiltrerade arrayen
    let filterPriceArray = [];
    for (let shoe of unfilteredShoeArray) {
        // Kontrollera om skons pris är inom det angivna intervallet [x, y]
        if (shoe.price >= x && shoe.price <= y) {
            // Om ja, lägg till skon i den filtrerade arrayen
            filterPriceArray.push(shoe);
        }
    }
    // Returnera den filtrerade arrayen
    return filterPriceArray;
}

// Anropa funktionen med skorna och prisintervallet [200, 800]
filterBojana(SHOES, 200, 800);