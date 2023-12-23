"use strict";

function filterShoes() {
  let selectedShoes = SHOES;

  if (anyFilterChecked("kind")) {
    selectedShoes = filterByKind(selectedShoes);
    // amount_products(selectedShoes.length)
  }

  if (anyFilterChecked("country")) {
    selectedShoes = filterByCountry(selectedShoes);

  }

  if (anyFilterChecked("price")) {
    selectedShoes = filterByPrice(selectedShoes);
    // amount_products(selectedShoes.length)
  }


  // else {
  //   amount_products("275")
  // }

  return selectedShoes;
}





function anyFilterChecked(filterKind) {
  const checkedFilters = document.querySelectorAll(`#${filterKind}Filter > .${filterKind}Checkmarks > .checked`);   //Beroende på hur elementen ser ut får selektorn ändras för högre specificitet
  return checkedFilters.length > 0;
}



function filterByKind(shoes) {
  const checkedKindDoms = document.querySelectorAll("#kindFilter .checked .text");

  const checkedKindNames = arrayMap(checkedKindDoms, function (dom) { return dom.textContent });

  const checkedKindObjects = arrayMap(checkedKindNames, function (kindName) {
    return arrayFind(KINDS, function (kind) {
      return kind.name === kindName;
    });
  });

  const checkedKindIds = arrayMap(checkedKindObjects, function (kindObject) {
    return kindObject.id;
  });

  shoes = arrayFilter(shoes, function (catalouge) {
    return checkedKindIds.includes(catalouge.kind_id);
  });

  return shoes;
}



function filterByCountry(shoes) {
  const checkedCountryDoms = document.querySelectorAll("#countryFilter .checked .text");

  const checkedCountryNames = arrayMap(checkedCountryDoms, function (dom) { return dom.textContent });

  const checkedCountryObjects = arrayMap(checkedCountryNames, function (countryName) {
    return arrayFind(COUNTRIES, function (country) {
      return country.name === countryName;
    });
  });

  const checkedCountryIds = arrayMap(checkedCountryObjects, function (countryObject) {
    return countryObject.id;
  });

  const shoesIds = [];
  for (let countryId of checkedCountryIds) {
    for (let shoes of SHOES) {
      if (shoes.country_id === countryId) {
        shoesIds.push(shoes.id);
      }
    }
  }
  shoes = arrayFilter(shoes, function (catalouge) {
    return shoesIds.includes(catalouge.id);
  });

  return shoes;
}




function filterByPrice(shoes) {

  const checkedPriceDoms = document.querySelectorAll("#priceFilter .checked .text");

  const checkedPriceAmount = arrayMap(checkedPriceDoms, function (dom) { return dom.textContent });

  let priceChecker;

  if (checkedPriceAmount.includes("Under 300kr")) {
    priceChecker = 300;

  } else if (checkedPriceAmount.includes("Under 700kr")) {
    priceChecker = 700;

  } else if (checkedPriceAmount.includes("Under 1000kr")) {
    priceChecker = 1000;
  }

  shoes = arrayFilter(shoes, function (shoe) {
    return shoe.price <= priceChecker;
  });

  return shoes;
}