function renderPriceFilter (parent) {
    const container = document.createElement("div");
    container.id = "price_filter";
    parent.append(container);
  
    container.innerHTML = `
    <h3>PRICE</h3>
    <div id="price_input">
        <p>MAX PRICE</p>
        <input id="price_input_field">
    </div>
    <p>AMOUNT OF ARTICLES</p>
    `;
    
  }