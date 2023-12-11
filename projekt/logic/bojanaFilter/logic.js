// Filter Countries

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


function filter_programmes() {
    let selected_programmes = PROGRAMMES;

    if (any_filter_checked("city")) {
        selected_programmes = filter_by_city(selected_programmes);
    }

    if (any_filter_checked("level")) {
        selected_programmes = filter_by_level(selected_programmes);
    }

    if (any_filter_checked("subject")) {
        selected_programmes = filter_by_subject(selected_programmes);
    }

    if (any_filter_checked("language")) {
        selected_programmes = filter_by_language(selected_programmes);
    }

    return selected_programmes;
}

function any_filter_checked(filter_kind) {
    const checked_filters = document.querySelectorAll(`#${filter_kind}_filters .checked`);
    return checked_filters.length > 0;
}

function filter_by_city(programmes) {
    const checked_city_doms = document.querySelectorAll("#city_filters .checked .text");

    const checked_city_names = array_map(checked_city_doms, function (dom) { return dom.textContent });

    const checked_level_objects = array_map(checked_city_names, function (city_name) {
        return array_find(CITIES, function (city) {
            return city.name === city_name;
        });
    });

    const checked_city_ids = array_map(checked_level_objects, function (city_object) {
        return city_object.id;
    });

    const university_ids = [];
    for (let city_id of checked_city_ids) {
        for (let university of UNIVERSITIES) {
            if (university.cityID === city_id) {
                university_ids.push(university.id);
            }
        }
    }

    programmes = array_filter(programmes, function (programme) {
        return university_ids.includes(programme.universityID);
    });

    return programmes;
}

function filter_by_level(programmes) {
    const checked_level_doms = document.querySelectorAll("#level_filters .checked .text");

    const checked_level_names = array_map(checked_level_doms, function (dom) { return dom.textContent });

    const checked_level_objects = array_map(checked_level_names, function (level_name) {
        return array_find(LEVELS, function (level) {
            return level.name === level_name;
        });
    });

    const checked_level_ids = array_map(checked_level_objects, function (level_object) {
        return level_object.id;
    });

    programmes = array_filter(programmes, function (programme) {
        return checked_level_ids.includes(programme.levelID);
    });

    return programmes;
}

function filter_by_subject(programmes) {
    const checked_subject_doms = document.querySelectorAll("#subject_filters .checked .text");

    const checked_subject_names = array_map(checked_subject_doms, function (dom) { return dom.textContent });

    const checked_subject_objects = array_map(checked_subject_names, function (subject_name) {
        return array_find(SUBJECTS, function (subject) {
            return subject.name === subject_name;
        });
    });

    const checked_subject_ids = array_map(checked_subject_objects, function (subject_object) {
        return subject_object.id;
    });

    programmes = array_filter(programmes, function (programme) {
        return checked_subject_ids.includes(programme.subjectID);
    });

    return programmes;
}

function filter_by_language(programmes) {
    const checked_language_doms = document.querySelectorAll("#language_filters .checked .text");

    const checked_language_names = array_map(checked_language_doms, function (dom) { return dom.textContent });

    const checked_language_objects = array_map(checked_language_names, function (language_name) {
        return array_find(LANGUAGES, function (language) {
            return language.name === language_name;
        });
    });

    const checked_language_ids = array_map(checked_language_objects, function (language_object) {
        return language_object.id;
    });

    programmes = array_filter(programmes, function (programme) {
        return checked_language_ids.includes(programme.languageID);
    });

    return programmes;
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







//från Eriks lektion 7november

function filter_shoes(array, max_price) {
    let temp = [];
    for (let shoe of array) {
        if (shoe.price <= max_price) {
            temp.push(shoe);
        }
    }
    return temp;
}
// let filtered_shoes = filter_shoes(SHOES, 399);



// function x (obj, max_price)
// {
//   return obj.price <= max_price;
// }

function array_filter(array, filter_function) {
    let temp = [];
    for (let element of array) {
        if (filter_function(element)) {
            temp.push(element);
        }
    }
    return temp;
}

function array_find(array, find_function) {
    for (let element of array) {
        let resultat = find_function(element);
        if (resultat === true) return element;
    }
}



let filtered_shoes_2 = array_filter(SHOES, function (obj) {
    return obj.price <= document.querySelector("input").value;
});

let sweden_shoes = array_filter(SHOES, function (obj) {

    let country = array_find(COUNTRIES, function (obj) {
        return obj.name === "Sweden";
    });

    return obj.country_id === country.id;

});


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


function get_all_sizes_from_country(country_name) {

}