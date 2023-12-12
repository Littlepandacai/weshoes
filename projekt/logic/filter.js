"use strict";

function filter_shoes() {
    let selected_shoes = SHOES;

    if (any_filter_checked("kind")) {
        selected_shoes = kind_filter(selected_shoes);
    }

    if (any_filter_checked("country")) {
        selected_shoes = country_filter(selected_shoes);
    }

    if (any_filter_checked("price")) {
        selected_shoes = price_filter(selected_shoes);
    }

    return selected_shoes;
}

function any_filter_checked (filter_kind) {
    const checked_filters = document.querySelectorAll(`#${filter_kind}_filter > .checked`);   //Beroende på hur elementen ser ut får selektorn ändras för högre specificitet
    return checked_filters.length > 0;
}