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

function filter_by_kind (programmes)
{
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

  programmes = array_filter(programmes, function (programme) {
    return checked_kind_ids.includes(programme.kindID);
  });

  return programmes;
}


function filter_by_country (programmes)
{
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

  programmes = array_filter(programmes, function (programme) {
    return checked_country_ids.includes(programme.countryID);
  });

  return programmes;
}

function filter_by_price (programmes)
{
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

  programmes = array_filter(programmes, function (programme) {
    return checked_country_ids.includes(programme.countryID);
  });

  return programmes;
}