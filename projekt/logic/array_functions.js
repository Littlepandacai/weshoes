//Array average (för betygen)
//Array find, returnerar det första elementet

//arrayEach, går igenom en array och anropar callback function för varje element

function arrayFilter (array, callback) {

    let temp = [];
    for (let shoe of array) {
        if (callback(shoe.price)) {
            temp.push(shoe);
        }
    }
    return temp;
}


//arrayFilter, testar maxPrice och returnerar boleskt värde (true/false)

function arrayFilter (maxPrice) {
    return maxPrice <= 1000;
}

function arrayFind (array, findFunction) 
{
  for (let element of array)
  {
    let resultat = findFunction(element);
    if (resultat === true) return element;
  }
}

console.log(arrayEach(SHOES, arrayFilter));
