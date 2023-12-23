"use strict";

//arrayMap
function arrayMap(a, transformFunction) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        result.push(transformFunction(a[i]));
    }
    return result;
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