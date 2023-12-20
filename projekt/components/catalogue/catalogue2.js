"use strict";

function renderCatalogue(parent, shoes) {
  for (let i = 0; i < shoes.length; i++) {
    const container = document.createElement("div");
    container.classList.add("catalogue");
    container.id = shoes[i].id;
    parent.append(container);

    const country = array_find(COUNTRIES, (x) => x.id === shoes[i].country_id);
    const type = array_find(KINDS, (x) => x.id === shoes[i].kind_id);
    const price = array_find(SHOES, (x) => x.price === shoes[i].price)

    container.innerHTML = `
        <div id="shoe-img"></div>
        <div id="shoeBoxText">
          <h1>${shoes[i].name}</h1>
          <div class="country">${country.name}</div>
          <div class="type">${type.name}</div>
          <div class="price">${price.price} sek</div>
        </div>
      `;

    const image_path = shoes[i].file_name;
    const shoeImg = container.querySelector("#shoe-img");
    shoeImg.style.backgroundImage = `url(./images/skobilder/${image_path})`;

  }
}



