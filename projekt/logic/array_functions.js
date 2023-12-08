//Array average (för betygen)
//Array find, returnerar det första elementet

//arrayEach, går igenom en array och anropar callback function för varje element

function arrayFilter (array, callback) {

    let temp = [];
    for (let shoe of array) {
        if (callback(shoe.kind_id)) {
            temp.push(shoe);
        }
    }
    return temp;
}


//arrayFilter, testar maxPrice och returnerar boleskt värde (true/false)


function arrayFind (array, findFunction) 
{
  for (let element of array) {
    let resultat = findFunction(element);
    if (resultat === true) {
        return element;
    }
  }
}


function arrayAverage(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return ("" + (sum / a.length)).substring(0, 4);
}

function arrayEach (array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}


console.log(arrayFilter(SHOES, function (x) {
    return x === 2;
}));
