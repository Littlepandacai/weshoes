"use strict";

//arrayMap
function array_map(a, transform_function) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        result.push(transform_function(a[i]));
    }
    return result;
}



//arrayFilter, testar maxPrice och returnerar boleskt värde (true/false)
function array_filter(array, callback) {
    let temp = [];
    for (let element of array) {
        if (callback(element)) {
            temp.push(element);
        }
    }
    return temp;
}



//Array find, returnerar det första elementet
function array_find(array, findFunction) {
    for (let element of array) {
        if (findFunction(element)) {
            return element;
        }
    }
}





























































