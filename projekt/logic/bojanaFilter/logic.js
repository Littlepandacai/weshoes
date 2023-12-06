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




// Eriks kod inlämningsuppgift filter.js

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