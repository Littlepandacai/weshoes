"use strict";

function structure_rebecka(parent) {
    parent.innerHTML = ` 
    <header></header>
    <div id="title">
        <h1>SHOES/BOOTS</h1>
    </div>
    <main>
        <h2>FILTERS</h2>
        <div id="container">
            <div id="filters-side"></div>
            <div id="products-side"></div>
        </div>
    </main>
    <footer></footer>
  `;

    return {
        header: parent.querySelector("header"),
        filters_side: parent.querySelector("#filters-side"),
        products_side: parent.querySelector("#products-side"),
        footer: parent.querySelector("footer"),
    };
}
