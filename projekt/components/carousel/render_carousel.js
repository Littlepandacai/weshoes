"use strict";

function renderCarousel (parent) {
    let carousel = document.createElement("div");
    carousel.id = "slideshow";
    parent.appendChild(carousel);
    
    carousel.innerHTML = `
    <div class="holder">
      <div class="slide1"></div>
      <div class="slide2"></div>
      <div class="slide3"></div>
      <div class="slide4"></div>
    </div>

    <div id="buttonCarousel">
        <div id="circle"></div>
    </div>

    <div class="buttons"> 
        <a href="#" id="prev" class="buttons"><</a>
        <a href="#" id="next" class="buttons">></a>
    </div>
    `;

    return {
        slide_1: document.querySelector(".slide1"),
        slide_2: document.querySelector(".slide2"),
        slide_3: document.querySelector(".slide3"),
        slide_4: document.querySelector(".slide4"),
        buttonCarousel: document.querySelector("#buttonCarousel")
    }
}
