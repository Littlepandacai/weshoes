/* "use strict";

function renderPriceFilter(parent) {
    const container = document.createElement("div");
    container.id = "price_filter";
    parent.append(container);

    container.innerHTML = `
    <h3>PRICE</h3>
    <p id="min_price_text">MIN PRICE</p>
    <input id="min_price_input">
    <p id="max_price_text">MAX PRICE</p>
    <input id="max_price_input">
    <p id="amount"></p>
    <p id="result"></p>
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
                amount_products(price_filter.length)
            }
        })
        return price_filter
    });
}

let amount_div = document.createElement("div")
*/
// function amount_products(amount) {
//   let container = document.querySelector("#amount");
//   let result = document.querySelector("#result")
//   container.appendChild(result);
//   result.innerHTML = `<p>${amount} ARTICLES</p>`
//   return amount
// }


function renderPriceFilter(parent) {
  const container = document.createElement("div");
  container.id = "priceFilter";
  parent.append(container);

  container.innerHTML = `
      <h3>PRICE</h3>
      <p id="amount"></p>
      <p id="result"></p>
    `;

  const priceRanges = ['Under 300kr', 'Under 700kr', 'Under 1000kr'];

  for (const price of priceRanges) {
    const priceCheckmarks = document.createElement("div");
    container.append(priceCheckmarks);
    priceCheckmarks.classList.add("priceCheckmarks");

    renderFilterElements(priceCheckmarks, price);
  }
}