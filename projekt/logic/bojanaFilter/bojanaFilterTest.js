
//började att skriva fileterShoes 

"use strict";

function filterShoes() {
    let selectedShoes = SHOES;

    if (anyFilterChecked("kinds")) {
        selectedShoes = filterByKinds(selectedShoes);
    }

    if (anyFilterChecked("countries")) {
        selectedShoes = filterByCountries(selectedShoes);
    }

    if (anyFilterChecked("price")) {
        selectedShoes = filterByPrice(selectedShoes);
    }

    return selectedShoes;
}


function anyFilterChecked(filterKind) {
    const checkedFilters = document.querySelectorAll(`#${filterKind}_filters .checked`);
    return checkedFilters.length > 0;
}



//testa att skriva en generalFilter, har ingen aning om detta funkar 


function generalFilter(shoes, filterKind, objectId) {

    const checkedFilterDoms = document.querySelectorAll(`#${filterKind}_filters .checked .text`);

    const checkedFilterNames = arrayMap(checkedFilterDoms, function (element) { return element.textContent });

    const checkedFilterObjects = arrayMap(checkedFilterNames, function (filterName) {
        return arrayFind(FILTERS[filterKind], function (filter) {
            return filter.name === filterName;
        });
    });

    const checkedFilterIds = arrayMap(checkedFilterObjects, function (filterObject) {
        return filterObject.id;
    });

    shoes = arrayFilter(shoes, function (shoes) {
        return checkedFilterIds.includes(shoes[objectId]);
    });


    return shoes;
}



function filterShoes() {
    let selectedShoes = SHOES;

    if (anyFilterChecked("kinds")) {
        selectedShoes = generalFilter(selectedShoes, "kinds");
    }

    if (anyFilterChecked("countries")) {
        selectedShoes = generalFilter(selectedShoes, "countries");
    }

    if (anyFilterChecked("price")) {
        selectedShoes = generalFilter(selectedShoes, "price");
    }

    return selectedShoes;
}


