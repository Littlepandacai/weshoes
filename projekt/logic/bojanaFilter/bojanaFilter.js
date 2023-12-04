
// Detta är bara en bit av Databasen för att testa att koden funkade, så jag läten den vara kvar.
const SHOES = [
    // Nycklarna:
    // id: skonmodellens id, unik för varje skomodell
    // kind_id: vilken typ av sko det handlar om
    // country_id: var skon har tillverkats
    // file_name: namnet på bildfilen för denna modell

    // Notera att nycklarna i ett objekt kan också skrivas inom citationstecken
    {
        "id": 1,
        "name": "Fresh Prince",
        "price": 939,
        "kind_id": 3,
        "country_id": 1,
        "file_name": "fresh_prince_sneakers.jpg"
    },
    { "id": 2, "name": "Black Nick", "price": 709, "kind_id": 3, "country_id": 3, "file_name": "black_nick_sneakers.jpg" },
    { "id": 3, "name": "Blue Kids", "price": 349, "kind_id": 1, "country_id": 6, "file_name": "blue_kids_tofflor.jpg" },
    { "id": 4, "name": "White Fluffy", "price": 329, "kind_id": 1, "country_id": 3, "file_name": "white_fluffy_tofflor.jpg" },
    { "id": 5, "name": "White Leather", "price": 209, "kind_id": 2, "country_id": 7, "file_name": "white_leather_boots.jpg" },
    { "id": 6, "name": "Peaky Blinders", "price": 479, "kind_id": 2, "country_id": 8, "file_name": "peaky_blinders_boots.jpg" },
    { "id": 7, "name": "Beige Chelsea", "price": 899, "kind_id": 2, "country_id": 1, "file_name": "beige_chelsea_boots.jpg" },
]


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