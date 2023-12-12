
"use strict";

//Array average (för betygen)

function arrayAverage(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return ("" + (sum / a.length)).substring(0, 3);
}


function arrayRandomElement(a) {
    const randomIndex = getRandomNumber(a.length);
    return a[randomIndex];
}


//Array find, returnerar det första elementet

function arrayFind(array, findFunction) {
    for (let element of array) {
        let resultat = findFunction(element);
        if (resultat === true) {
            return element;
        }
    }
}

function arrayEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}


//arrayFilter, testar maxPrice och returnerar boleskt värde (true/false)

function arrayFilter(array, callback) {

    let temp = [];
    for (let element of array) {
        if (callback(element)) {
            temp.push(element);
        }
    }
    return temp;
}



//arrayEach, går igenom en array och anropar callback function för varje element

function arrayFind(array, findFunction) {
    for (let element of array) {
        if (findFunction(element)) {
            return element;
        }
    }
}

function arrayMap(array, transformFunction) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(transformFunction(array[i]))
    }
    return result
}


//rewievs
function arrayAverage(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return ("" + (sum / a.length)).substring(0, 4);
}


// skapa funktionerna för de 3 filterna, countries, price, type of shoe
//

// filter för max-min pris av skorna

function amanda_filter(array, x, y) {
    let filteredArray = [];
    for (let shoe of array) {
        if (shoe.price >= x && shoe.price <= y) {
            filteredArray.push(shoe);
        }
        function arrayEach(array, callback) {
            for (let i = 0; i < array.length; i++) {
                callback(array[i]);
            }
            return filteredArray;
        }
    }
}

//console.log(amanda_filter(SHOES, 200, 900));




//arrayMap

function arrayMap(a, transformFunction) {

    let result = [];
    for (let i = 0; i < a.length; i++) {
        result.push(transformFunction(a[i]));
    }
    return result;
}



//Filter Countries

"use strict";

function filterByCountry(array) {
    let filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        if (filterIfTrue(array[i].country_id)) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

function filterIfTrue(shoe) {
    //for (let i = 0; i < COUNTRIES.length; i++) {
    if (7 === shoe) {
        return true;
    }
    return false;
}



//_________________________________________________________________

// Eriks kod inlämningsuppgift filter.js - vi radera dettna kod när vi är klara med filterfunktionen, den är bara som hjälp.

//________________________________________________________________

// Funktionerna filter_by_level, filter_by_subject och filter_by_language
// gör i princip exakt samma sak. Se nedan.
// Optional:
//    Skapa en funktion general_filter som kan ersätta alla tre funktioner ovan.
//    Tips: 
//      Studera noggrant funktionerna för att lista ut vad som är gemensamt för alla och vad
//        som inte är det.
//      Notera att den nya funktionen behöver ta emot fler parametrar än bara programmes.
//    


function general_filter(programmes, filter_kind, attribute_id) {
    // Hämta alla markerade filter för det angivna filterkind (t.ex. "city_filters")
    const checked_filter_doms = document.querySelectorAll(`#${filter_kind}_filters .checked .text`);

    // Extrahera namnen på de markerade filterna och spara dem i en array
    const checked_filter_names = array_map(checked_filter_doms, function (dom) { return dom.textContent });

    // Hitta objekten för de markerade filterna
    const checked_filter_objects = array_map(checked_filter_names, function (filter_name) {
        return array_find(FILTERS[filter_kind], function (filter) {
            return filter.name === filter_name;
        });
    });

    // Extrahera ID:n för de markerade filterna
    const checked_filter_ids = array_map(checked_filter_objects, function (filter_object) {
        return filter_object.id;
    });

    // Filtrera programmen baserat på de markerade filterna och det angivna attributet
    programmes = array_filter(programmes, function (programme) {
        return checked_filter_ids.includes(programme[attribute_id]);
    });

    // Returnera de filtrerade programmen
    return programmes;
}

function filter_programmes() {
    let selected_programmes = PROGRAMMES;

    // Om staden är markerad, filtrera programmen baserat på staden
    if (any_filter_checked("city")) {
        selected_programmes = general_filter(selected_programmes, "city", "universityID");
    }

    // Om nivån är markerad, filtrera programmen baserat på nivån
    if (any_filter_checked("level")) {
        selected_programmes = general_filter(selected_programmes, "level", "levelID");
    }

    // Om ämnet är markerat, filtrera programmen baserat på ämnet
    if (any_filter_checked("subject")) {
        selected_programmes = general_filter(selected_programmes, "subject", "subjectID");
    }

    // Om språket är markerat, filtrera programmen baserat på språket
    if (any_filter_checked("language")) {
        selected_programmes = general_filter(selected_programmes, "language", "languageID");
    }

    // Returnera de slutliga filtrerade programmen
    return selected_programmes;
}

// Här är förklaringarna för varje del:

//     general_filter-funktionen:
//         Input: programmes (en array av program), filter_kind (vilken typ av filter vi vill applicera), attribute_id (vilket attribut i 
//         programobjekten vi vill filtrera på). Funktionen använder document.querySelectorAll för att hämta alla markerade filter 
//         (de med klassen .checked .text) för det angivna filterkindet. Genom att använda hjälpfunktionen array_map extraherar den namnen på 
//         de markerade filtren och sparar dem i checked_filter_names-arrayen. Sedan används array_map igen för att hitta objekten för de 
//         markerade filtren genom att jämföra namnen med filterobjekten som finns i FILTERS[filter_kind]. ID:na för de markerade filtren 
//         extraheras och lagras i checked_filter_ids. Slutligen filtreras programmen baserat på de markerade filtren och det angivna attributet 
//         (attribute_id).

//     filter_programmes-funktionen:
//         Funktionen skapar en kopia av PROGRAMMES som heter selected_programmes.
//         För varje typ av filter (stad, nivå, ämne, språk) kontrollerar den om några filter är markerade (any_filter_checked). Om de är det, 
//         anropas general_filter-funktionen för att filtrera programmen baserat på det specifika filtret och attributet.
//         Till sist returnerar den de slutliga filtrerade programmen.




//Eriks inlämningsuppgift arrat_functions.js

function array_average(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return ("" + (sum / a.length)).substring(0, 4);
}

function array_random_element(a) {
    const random_index = get_random_number(a.length);
    return a[random_index];
}

function array_find(a, test_function) {

    for (let i = 0; i < a.length; i++) {
        if (test_function(a[i]) === true)
            return a[i];
    }
}
// Loopar igenom arrayen a och anropar funktionen test_function med varje element i a som argument.
// Loopen (och funktionen) avbryts när ett test_function returnerar true.
// Funktionen returnerar elementet i a för vilken test_function returnerade true.


function array_filter(a, test_function) {

    let returnArray = [];
    for (let i = 0; i < a.length; i++) {
        if (test_function(a[i]) === true)
            returnArray.push(a[i]);
    }
    return returnArray;
}
// Loopar igenom arrayen a och anropar funktionen test_function med varje element i a som argument.
// Funktionen returnerar en ny array med alla elementet i a för vilka test_function returnerade true.


function array_each(a, callback) {

    for (let i = 0; a.length; i++) {
        callback(a[i]);
    }
}
// Loopar igenom arrayen a och anropar funktionen callback med varje element i a som argument.


function array_map(a, transform_function) {
    // Loopar igenom arrayen a och anropar funktionen transform_function med varje element i a som argument.
    // Funktionen returnerar en ny array med returvärdet av varje anrop av transform_function.
    let result = [];
    for (let i = 0; i < a.length; i++) {
        result.push(transform_function(a[i]));
    }
    return result;
}

/*---------------------------------------------------------------------------------------------------------*/

function maxPriceFilter(array, max_price) {
    let temp = [];
    for (let shoe of array) {
        if (shoe.price <= max_price) {
            temp.push(shoe);
        }
    }
    return temp;
}

/*
let shoesMaxPrice = maxPriceFilter(SHOES, 300);
console.log(shoesMaxPrice)
*/


function findCountryShoes(x) {
    let countryShoes = array_filter(SHOES, function (obj) {
        let shoesCountry = x
        let country = array_find(COUNTRIES, function (obj) {
            return obj.name === shoesCountry;
        });
        console.log(obj.country_id, country.id)
        return obj.country_id === country.id;
    });
    return countryShoes
}

/*
console.log(findCountryShoes("Sweden"))
console.log(findCountryShoes("Spain"))
console.log(findCountryShoes("Germany"))
console.log(findCountryShoes("USA"))
console.log(findCountryShoes("UK"))
console.log(findCountryShoes("France"))
console.log(findCountryShoes("Italy"))
console.log(findCountryShoes("Japan"))
*/


function shoesKindFilter(x) {
    let kindOfShoes = array_filter(SHOES, function (obj) {
        let kind = x
        let kinds = array_find(KINDS, function (obj) {
            return obj.name === kind;
        });
        //console.log(obj.country_id, country.id)
        return obj.kind_id === kinds.id;
    });
    return kindOfShoes
}

/*
console.log(shoesKindFilter("Slippers"))
console.log(shoesKindFilter("Boots"))
console.log(shoesKindFilter("Sneakers"))
*/







function reviews_of_shoe(array, shoe_id) {
    return array_filter(array, function (obj) {
        return obj.shoe_id === shoe_id;
    });
}

function reviews_by_land(array, country_name) {
    let a = [];
    for (let review of array) {
        let shoe_id = review.shoe_id;
        let shoe_obj = array_find(SHOES, function (obj) {
            return shoe_id === obj.id;
        });

        let country_id = shoe_obj.country_id;
        let country_obj = array_find(COUNTRIES, function (obj) {
            return country_id === obj.id;
        });

        let shoe_country_name = country_obj.name;
        if (shoe_country_name === country_name) {
            a.push(review)
        }
    }
    return a;
}

/*
function get_all_sizes_from_country(country_name) {

}


render_shoes(parent, SHOES)

function render_shoes(parent, programme) {
    for (let i = 0; i < SHOES.length; i++) {
        const container = document.createElement("div");
        container.classList.add("programme");
        container.id = programme.id;
        parent.append(container);


        const shoesType = array_find(KINDS, function (x) { return x.id === programme[0].kind_id; });
        const country = array_find(COUNTRIES, function (x) { return x.id === programme[0].country_id; });


        container.innerHTML = `
    <div>
      <h1>${shoesType.name}</h1>
      <div class="country">${COUNTRIES[0].name}</div>
      <div class="price">${SHOES[i].price}sek</div>
    </div>
  `;


        const image_path = SHOES[i].file_name;
        console.log(image_path)
        container.style.backgroundImage = `url(images/skobilder/${image_path})`;

    }
}

/*function array_random_element(a) {
    const random_index = get_random_number(a.length);
    return a[random_index];
}


function get_random_number(max, min = 0) {
    // Returns a random number between min (inclusive) and max (exclusive)

    // Du behöver inte förstå det matematiska uttrycket nedan.
    // Du måste dock förstå hur denna funktion används i array_random_element (array_functions.js)
    return min + Math.floor(max * Math.random());
}*/
