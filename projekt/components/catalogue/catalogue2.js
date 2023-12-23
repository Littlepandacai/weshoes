"use strict";

function renderCatalogue(parent, shoes) {
  for (let i = 0; i < shoes.length; i++) {
    const container = document.createElement("div");
    container.classList.add("catalogue");
    container.id = shoes[i].id;
    parent.append(container);

    const country = arrayFind(COUNTRIES, (x) => x.id === shoes[i].country_id);
    const type = arrayFind(KINDS, (x) => x.id === shoes[i].kind_id);
    const price = arrayFind(SHOES, (x) => x.price === shoes[i].price)

    container.innerHTML = `
        <div class="shoeImg" id="${shoes[i].id}"></div>
        <div id="shoeBoxText">
          <h1>${shoes[i].name}</h1>
          <div class="country">${country.name}</div>
          <div class="type">${type.name}</div>
          <div class="price">${price.price} sek</div>
        </div>
      `;

    const imagePath = shoes[i].file_name;
    const shoeImg = container.querySelector(".shoeImg");
    shoeImg.style.backgroundImage = `url(./images/skobilder/${imagePath})`;

  }
}



