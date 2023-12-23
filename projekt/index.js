// Med detta anrop skapar vi HTML-strukturen.
// Returvärdet ger oss referenser till viktiga HTML-element.
const structureContainers = renderStructure(body);

render_header(body);
render_nav(body);
renderCountryFilter(left);
renderKindFilter(left);
renderPriceFilter(left);
//catalogue();
//render_catalogueObject();

renderCatalogueList(rightBottom, SHOES);
let main = document.querySelector("main");
renderPopUpElement(main);
renderFooter(structureContainers.footer);
