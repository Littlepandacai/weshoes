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






function filter_by_kind(shoes) {
  const checked_kind_doms = document.querySelectorAll("#kind_filters .checked .text");

  const checked_kind_names = array_map(checked_kind_doms, function (dom) { return dom.textContent });

  const checked_kind_objects = array_map(checked_kind_names, function (kind_name) {
    return array_find(KINDS, function (kind) {
      return kind.name === kind_name;
    });
  });

  const checked_kind_ids = array_map(checked_kind_objects, function (kind_object) {
    return kind_object.id;
  });

  shoes = array_filter(shoes, function (programme) {
    return checked_kind_ids.includes(programme.kindID);
  });

  return shoes;
}


function filter_by_country(shoes) {
  const checked_country_doms = document.querySelectorAll("#country_filters .checked .text");

  const checked_country_names = array_map(checked_country_doms, function (dom) { return dom.textContent });

  const checked_country_objects = array_map(checked_country_names, function (country_name) {
    return array_find(COUNTRIES, function (country) {
      return country.name === country_name;
    });
  });

  const checked_country_ids = array_map(checked_country_objects, function (country_object) {
    return country_object.id;
  });

  shoes = array_filter(shoes, function (programme) {
    return checked_country_ids.includes(programme.countryID);
  });

  return shoes;
}

function filter_by_price(shoes) {

    const checked_price_doms = document.querySelectorAll("#price_filters .checked .text");

    const checked_price_amount = array_map(checked_price_doms, function (dom) { return dom.textContent });

    checked_price_amount = parseInt(checked_price_amount);

    let checked_price_objects = arrayFilter(SHOES, function (shoe) { 
    return shoe.price <= checked_price_amount
});

  shoes = checked_price_objects;

  return shoes;
}