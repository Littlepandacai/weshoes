// Med detta anrop skapar vi HTML-strukturen.
// Returvärdet ger oss referenser till viktiga HTML-element.
const structureContainers = renderStructure(body);


// Använd returvärdet av render_structure(), där finns referenser till alla HTML-element (parents)
// som behövs för att rendera komponenterna:
// - header
// - kindsFilters
// - countriesFilters
// - priceFilters
// - sorterList
// - catalogueList
// - popUp
// - aboutUs

// Så här renderas header med hjälp av returvärdet av render_structure:

//  OBS!!! inte den korrekta renderingen, måste korrigeras innan!!

renderHeader(body);
renderNav(body);
renderCountryFilter(left);
renderKindFilter(left);
renderPriceFilter(left);
//catalogue();
//render_catalogueObject();

renderCatalogueList(rightBottom, SHOES);
let main = document.querySelector("main");
renderPopUpElement(main);
renderFooter(structureContainers.footer);


// Här ska resten av render_funktionerna anropas (listan av komponenter finns ovan).

//funktion för att få sidebar att funka (om vi behöver en sidebar)
// let sidebar_menu = document.querySelector("#menu");
// sidebar_menu.addEventListener("click", function () {
//     document.querySelector("#sidebar").classList.toggle("active")
// })
