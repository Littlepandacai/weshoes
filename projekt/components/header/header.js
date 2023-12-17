"use strict";

function render_nav() {

    const container = document.querySelector("nav");
    container.innerHTML = `
    <div id="sidebar"></div>
    <div id="navigation">
        <div id="menu">
            <div id="menu_icon">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </div>
        <h1>WeShoes</h1>
        <div id="nav_right">
            <input type="search" id="search_bar"></input>
            <div id="shopping_cart"></div>
        </div>
    </div>
    `;

    return {
        sidebar: container.querySelector("#sidebar"),
        navigation: container.querySelector("#navigation"),
        menu: container.querySelector("#menu"),
        logo: container.querySelector("h1"),
        right: container.querySelector("#right"),
        search_bar: container.querySelector("#search_bar"),
        shopping_cart: container.querySelector("#shopping_cart"),
    }
}

// let sidebar = document.querySelector("#menu");
// sidebar.addEventListener("click", function () {
//     document.querySelector("#sidebar").classList.toggle("active")
// }

function render_header() {

    const header = document.querySelector("header");
    header.innerHTML = `
    <div id="header_left"></div>
    <div id="title">
        <h1>SHOES/<span>ALL</span></h1>
        <div id="line"></div>
    </div>
    `;

    return {
        header_left: header.querySelector("#header_left"),
        title_box: header.querySelector("#title"),
        title: header.querySelector("h1"),
        line: header.querySelector("#line"),
    }
}

