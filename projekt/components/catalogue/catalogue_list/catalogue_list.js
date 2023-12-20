"use strict";

function renderCatalogueList(parent, catalogue) {
  const container = document.createElement("div");
  container.id = "catalogue_list";
  parent.append(container);

  container.innerHTML = `
    <p class="feedback"></p>
    <ol></ol>
  `;

  updateCatalogueList(catalogue);
}

function updateCatalogueList() {
  const container = document.querySelector("#catalogue_list");
  const list_dom = container.querySelector("ol");
  const feedback_dom = container.querySelector(".feedback");

  const catalogue = filter_shoes();

  list_dom.innerHTML = "";
  feedback_dom.style.display = "block";

  if (catalogue === undefined) {
    feedback_dom.textContent = "Show shoes by selecting from the filters";
  }
  else if (catalogue.length === 0) {
    feedback_dom.textContent = "No shoes for this combination of filters";
  }
  else {
    feedback_dom.style.display = "none";

    renderCatalogue(list_dom, catalogue);


    //sort_programme_list();
  }
}
