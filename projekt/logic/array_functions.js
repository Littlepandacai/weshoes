
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



//arrayFilter, testar maxPrice och returnerar boleskt värde (true/false)

function arrayFilter(array, callback) {

    let temp = [];
    for (let shoe of array) {
        if (callback(shoe.kind_id)) {
            temp.push(shoe);
        }
    }
    return temp;
}



//arrayEach, går igenom en array och anropar callback function för varje element

function arrayEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

//arrayMap

function arrayMap(a, transformFunction) {

    let result = [];
    for (let i = 0; i < a.length; i++) {
        result.push(transformFunction(a[i]));
    }
    return result;
}





console.log(arrayFilter(SHOES, function (x) {
    return x === 2;
}));
