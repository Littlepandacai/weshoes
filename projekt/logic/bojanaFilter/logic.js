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


function general_filter(programmes, filter_kind, attribute_id) {
    // Hämta alla markerade filter för det angivna filterkind (t.ex. "city_filters")
    const checked_filter_doms = document.querySelectorAll(`#${filter_kind}_filters .checked .text`);

    // Extrahera namnen på de markerade filterna och spara dem i en array
    const checked_filter_names = array_map(checked_filter_doms, function (dom) { return dom.textContent });

    // Hitta objekten för de markerade filterna
    const checked_filter_objects = array_map(checked_filter_names, function (filter_name) {
        return array_find(FILTERS[filter_kind], function (filter) {
            return filter.name === filter_name;
        });
    });

    // Extrahera ID:n för de markerade filterna
    const checked_filter_ids = array_map(checked_filter_objects, function (filter_object) {
        return filter_object.id;
    });

    // Filtrera programmen baserat på de markerade filterna och det angivna attributet
    programmes = array_filter(programmes, function (programme) {
        return checked_filter_ids.includes(programme[attribute_id]);
    });

    // Returnera de filtrerade programmen
    return programmes;
}

function filter_programmes() {
    let selected_programmes = PROGRAMMES;

    // Om staden är markerad, filtrera programmen baserat på staden
    if (any_filter_checked("city")) {
        selected_programmes = general_filter(selected_programmes, "city", "universityID");
    }

    // Om nivån är markerad, filtrera programmen baserat på nivån
    if (any_filter_checked("level")) {
        selected_programmes = general_filter(selected_programmes, "level", "levelID");
    }

    // Om ämnet är markerat, filtrera programmen baserat på ämnet
    if (any_filter_checked("subject")) {
        selected_programmes = general_filter(selected_programmes, "subject", "subjectID");
    }

    // Om språket är markerat, filtrera programmen baserat på språket
    if (any_filter_checked("language")) {
        selected_programmes = general_filter(selected_programmes, "language", "languageID");
    }

    // Returnera de slutliga filtrerade programmen
    return selected_programmes;
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
