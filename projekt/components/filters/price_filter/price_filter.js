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
  }

  