"use strict";

function array_random_element(a) {
    const random_index = get_random_number(a.length);
    return a[random_index];
}


function get_random_number(max, min = 0) {
    // Returns a random number between min (inclusive) and max (exclusive)
    return min + Math.floor(max * Math.random());
}

function arrayAverage(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return ("" + (sum / a.length)).substring(0, 3);
}

//arrayMap
function arrayMap(a, transformFunction) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        result.push(transformFunction(a[i]));
    }
    return result;
}


function arrayRandomElement(a) {
    const randomIndex = getRandomNumber(a.length);
    return a[randomIndex];
}


//arrayEach, går igenom en array och anropar callback function för varje element
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



//Array find, returnerar det första elementet
function arrayFind(array, findFunction) {
    for (let element of array) {
        if (findFunction(element)) {
            return element;
        }
    }
}



/*-------------------- skapa funktionerna för de 3 filterna, countries, price, type of shoe-----------------*/

//Filter shoes by countries
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


//Filter shoes by kind
function shoesKindFilter(x) {
    let kindOfShoes = array_filter(SHOES, function (obj) {
        let kind = x
        let kinds = array_find(KINDS, function (obj) {
            return obj.name === kind;
        });
        return obj.kind_id === kinds.id;
    });
    return kindOfShoes
}

/*
console.log(shoesKindFilter("Slippers"))
console.log(shoesKindFilter("Boots"))
console.log(shoesKindFilter("Sneakers"))
*/

// filter för båda max och min pris av skorna

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

//Filter för bara max-price
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


//Reviews
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

function reviews_of_shoe(array, shoe_id) {
    return array_filter(array, function (obj) {
        return obj.shoe_id === shoe_id;
    });
}


function get_all_sizes_from_country(country_name) {

}






































































