//Array average (för betygen)
//Array find, returnerar det första elementet

//arrayEach, går igenom en array och anropar callback function för varje element

function arrayEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function arrayFilter(array, callback) {

    let temp = [];
    for (let element of array) {
        if (callback(element)) {
            temp.push(element);
        }
    }
    return temp;
}


//arrayFilter, testar maxPrice och returnerar boleskt värde (true/false)


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
    }
    return filteredArray;
}

//console.log(amanda_filter(SHOES, 200, 900));









