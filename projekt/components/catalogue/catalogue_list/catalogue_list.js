"use strict";

function renderCatalogueList(parent, catalogue) {
  const container = document.createElement("div");
  container.id = "catalogueList";
  parent.append(container);

  container.innerHTML = `
    <p class="feedback"></p>
    <ol></ol>
  `;

  updateCatalogueList(catalogue);
}

function updateCatalogueList() {
  const container = document.querySelector("#catalogueList");
  const listDom = container.querySelector("ol");
  const feedbackDom = container.querySelector(".feedback");

  const catalogue = filterShoes();

  listDom.innerHTML = "";
  feedbackDom.style.display = "block";

  if (catalogue === undefined) {
    feedbackDom.textContent = "Show shoes by selecting from the filters";
  }
  else if (catalogue.length === 0) {
    feedbackDom.textContent = "No shoes for this combination of filters";
  }
  else {
    feedbackDom.style.display = "none";

    renderCatalogue(listDom, catalogue);
  }
}
