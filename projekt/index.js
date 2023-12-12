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
// - programmeList
// - aboutUs

// Så här renderas header med hjälp av returvärdet av render_structure:

//  OBS!!! inte den korrekta renderingen, måste korrigeras innan!!

renderHeader(structureContainers.header);
renderKindsFilters(structureContainers.left);
renderCountriesFilters(structureContainers.left);
renderPriceFilters(structureContainers.left);
renderSorterList(structureContainers.rightTop)
renderProgrammeList(structureContainers.rightBottom, SHOES);
renderAboutUs(structureContainers.footer);

// Här ska resten av render_funktionerna anropas (listan av komponenter finns ovan).



