"use strict";

function renderPriceFilter (parent) {
    const container = document.createElement("div");
    container.id = "price_filter";
    parent.append(container);
  
    container.innerHTML = `
    <h3>PRICE</h3>
    <p id="min_price_text">MIN PRICE</p>
    <input id="min_price_input">
    <p id="max_price_text">MAX PRICE</p>
    <input id="max_price_input">
    <p id="amount">AMOUNT OF ARTICLES</p>
    `;

    let inputMinPrice = document.querySelector("#min_price_input");
    let inputMaxPrice = document.querySelector("#max_price_input");
    let max_min_price = [inputMinPrice, inputMaxPrice];
    let price_filter;

    max_min_price.forEach(function (elem) {
        elem.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                console.log(price_minmax_filter(SHOES, parseInt(inputMinPrice.value), parseInt(inputMaxPrice.value)));
                price_filter = price_minmax_filter(SHOES, parseInt(inputMinPrice.value), parseInt(inputMaxPrice.value))
            }
        })
        return price_filter
  });
}
  