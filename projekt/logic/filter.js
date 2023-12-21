"use strict";

function filter_shoes() {
  let selected_shoes = SHOES;

  if (any_filter_checked("kind")) {
    selected_shoes = filter_by_kind(selected_shoes);
  }

  if (any_filter_checked("country")) {
    selected_shoes = filter_by_country(selected_shoes);
  }

  if (any_filter_checked("price")) {
    selected_shoes = filter_by_price(selected_shoes);
  }

  return selected_shoes;
}





function any_filter_checked(filter_kind) {
  const checked_filters = document.querySelectorAll(`#${filter_kind}_filter > .${filter_kind}_checkmarks > .checked`);   //Beroende på hur elementen ser ut får selektorn ändras för högre specificitet
  return checked_filters.length > 0;
}



function filter_by_kind(shoes) {
  const checked_kind_doms = document.querySelectorAll("#kind_filter .checked .text");

  const checked_kind_names = array_map(checked_kind_doms, function (dom) { return dom.textContent });

  const checked_kind_objects = array_map(checked_kind_names, function (kind_name) {
    return array_find(KINDS, function (kind) {
      return kind.name === kind_name;
    });
  });

  const checked_kind_ids = array_map(checked_kind_objects, function (kind_object) {
    return kind_object.id;
  });

  shoes = array_filter(shoes, function (catalouge) {
    return checked_kind_ids.includes(catalouge.kind_id);
  });

  return shoes;
}



function filter_by_country(shoes) {
  const checked_country_doms = document.querySelectorAll("#country_filter .checked .text");

  const checked_country_names = array_map(checked_country_doms, function (dom) { return dom.textContent });

  const checked_country_objects = array_map(checked_country_names, function (country_name) {
    return array_find(COUNTRIES, function (country) {
      return country.name === country_name;
    });
  });

  const checked_country_ids = array_map(checked_country_objects, function (country_object) {
    return country_object.id;
  });

  const shoes_ids = [];
  for (let country_id of checked_country_ids) {
    for (let shoes of SHOES) {
      if (shoes.country_id === country_id) {
        shoes_ids.push(shoes.id);
      }
    }
  }
    shoes = array_filter(shoes, function (catalouge) {
      return shoes_ids.includes(catalouge.id);
    });

    return shoes;
}




function filter_by_price(shoes) {

  const checked_price_doms = document.querySelectorAll("#price_filter .checked .text");

  const checked_price_amount = array_map(checked_price_doms, function (dom) { return dom.textContent });

  let price_checker;

  if (checked_price_amount.includes("Under 300kr")) {
    price_checker = 300;

  } else if (checked_price_amount.includes("Under 700kr")) {
    price_checker = 700;

  } else if (checked_price_amount.includes("Under 1000kr")) {
    price_checker = 1000;
  }

  shoes = array_filter(shoes, function (shoe) {
    return shoe.price <= price_checker;
  });

  return shoes;
}