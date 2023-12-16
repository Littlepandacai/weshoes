
// Med detta anrop skapar vi HTML-strukturen.
// Returvärdet ger oss referenser till viktiga HTML-element.
const structureContainers = renderStructure();

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

render_header();
render_nav();
renderPopUpFilter(parentElement);


// Här ska resten av render_funktionerna anropas (listan av komponenter finns ovan).

//funktion för att få sidebar att funka (om vi behöver en sidebar)
let sidebar_menu = document.querySelector("#menu");
sidebar_menu.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("active")
})

