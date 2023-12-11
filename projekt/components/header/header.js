"use strict";

function render_nav(parent) {

    const div = document.createElement("div");
    parent.appendChild(div);
    div.setAttribute("id", "navigation");

    const container = document.querySelector("#navigation");
    container.innerHTML = `
    <div id="menu"></div>
    <h1>WeShoes</h1>
    <input type="search" id="search_bar"></input>
    <div id="shopping_cart"></div>
    `;

    return {
        menu: container.querySelector("#menu"),
        logo: container.querySelector("h1"),
        search_bar: container.querySelector("#search_bar"),
        shopping_cart: container.querySelector("#shopping_cart"),
    }
}

//render_nav(document.querySelector("nav"))