function renderFilterElements(parent, text) {
  const container = document.createElement("div");
  parent.append(container);
  container.classList.add("filterElement");

  container.innerHTML = `
    <div class="checkContainer">
      <div class="checkmarkBox"></div>
    </div>
    <div class="text">${text}</div>
  `;

  container.addEventListener("click", function () {
    const checkmarkBox = this.querySelector(".checkmarkBox");
    
    // Toggle mellan "X" och inget innehåll
    checkmarkBox.innerHTML = checkmarkBox.innerHTML === "" ? `<p class="checkmark">X</p>` : "";

    container.classList.toggle("checked");
    updateCatalogueList();

    const main = document.querySelector("main");
    renderPopUpElement(main);
  });
}