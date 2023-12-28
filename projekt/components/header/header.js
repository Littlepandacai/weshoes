"use strict";

function renderNav() {

    const container = document.querySelector("nav");
    container.innerHTML = `
    <div id="sidebar"></div>
    <div id="navigation">
        <div id="menu">
            <div id="menuIcon">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </div>
        <h1>WeShoes</h1>
        <div id="navRight">
            <div id="searchBarIcon"></div>
            <input type="search" id="searchBar"></input>
            <div id="shoppingCart"></div>
        </div>
    </div>
    `;

    return {
        sidebar: container.querySelector("#sidebar"),
        navigation: container.querySelector("#navigation"),
        menu: container.querySelector("#menu"),
        logo: container.querySelector("h1"),
        right: container.querySelector("#right"),
        searchBarIcon: container.querySelector("#searchBarIcon"),
        searchBar: container.querySelector("#searchBar"),
        shoppingCart: container.querySelector("#shoppingCart"),
    }
}

// let sidebar = document.querySelector("#menu");
// sidebar.addEventListener("click", function () {
//     document.querySelector("#sidebar").classList.toggle("active")
// }

function renderHeader() {

    const header = document.querySelector("header");
    header.innerHTML = `
    <div id="headerLeft"></div>
    <div id="title">
        <h1>SHOES  /<span> ALL</span></h1>
        <div id="line"></div>
    </div>
    `;

    return {
        headerLeft: header.querySelector("#headerLeft"),
        titleBox: header.querySelector("#title"),
        title: header.querySelector("h1"),
        line: header.querySelector("#line"),
    }
}

