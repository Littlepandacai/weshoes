"use strict";

function array_random_element(a) {
    const random_index = get_random_number(a.length);
    return a[random_index];
}


function get_random_number(max, min = 0) {
    // Returns a random number between min (inclusive) and max (exclusive)
    return min + Math.floor(max * Math.random());
}

function array_average(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return ("" + (sum / a.length)).substring(0, 3);
}

//arrayMap
function array_map(a, transform_function) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        result.push(transform_function(a[i]));
    }
    return result;
}


//arrayEach, går igenom en array och anropar callback function för varje element
function array_each(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
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



/*-------------------- skapa funktionerna för de 3 filterna, countries, price, type of shoe-----------------*/

//Filter shoes by countries
function find_country_shoes(country_shoe) {
    let country_shoes = array_filter(SHOES, function (obj) {
        let shoes_country = country_shoe
        let country = array_find(COUNTRIES, function (obj) {
            return obj.name === shoes_country;
        });
        return obj.country_id === country.id;
    });
    return country_shoes
}

/*
console.log(find_country_shoes("Sweden"));
console.log(find_country_shoes("Spain"));
console.log(find_country_shoes("Germany"));
console.log(find_country_shoes("USA"));
console.log(find_country_shoes("UK"));
console.log(find_country_shoes("France"));
console.log(find_country_shoes("Italy"));
console.log(find_country_shoes("Japan"));
*/


//Filter shoes by kind
function shoes_kind_filter(shoe) {
    let kind_of_shoes = array_filter(SHOES, function (obj) {
        let kind = shoe;
        let kinds = array_find(KINDS, function (obj) {
            return obj.name === kind;
        });
        return obj.kind_id === kinds.id;
    });
    return kind_of_shoes
}

/*
console.log(shoes_kind_filter("Slippers"))
console.log(shoes_kind_filter("Boots"))
console.log(shoes_kind_filter("Sneakers"))
*/


// filter för båda max och min pris av skorna

function price_minmax_filter(array, min, max) {
    let filtered_array = [];
    for (let shoe of array) {
        if (shoe.price >= min && shoe.price <= max) {
            filtered_array.push(shoe);
        }
    }
    return filtered_array;
}


//Reviews
/*
function reviews_by_land(array, country_name) {
    let review_array = [];
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
            review_array.push(review)
        }
    }
    
    return review_array;
}
*/


function reviews_by_land(array, country_name) {
    let review_array = [];
    for (let review of array) {
      let shoe_id = review.shoe_id;

      let shoe_obj = array_find(SHOES, function (obj) {
        return shoe_id === obj.id;
      });

      if (shoe_obj) {
        let country_id = shoe_obj.country_id;
        let country_obj = array_find(COUNTRIES, function (obj) {
          return country_id === obj.id;
        });

        if (country_obj) {
          let shoe_country_name = country_obj.name;
          if (shoe_country_name === country_name) {
            review_array.push(review);
          }
        }
      }
    }
    
    return review_array;
  }



console.log(reviews_by_land(REVIEWS, "Germany"));




function reviews_of_shoe(array, shoe_id) {
    return array_filter(array, function (obj) {
        return obj.shoe_id === shoe_id;
    });
}






































































