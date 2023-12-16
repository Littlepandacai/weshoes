"use strict";

function catalogue () {

    const container = document.getElementById("rightBottom");
    container.innerHTML = `
    <div class="catalogueObject"></div>
    <div class="catalogueObject"></div>
    <div class="catalogueObject"></div>
    <div class="catalogueObject"></div>
    <div class="catalogueObject"></div>
    <div class="catalogueObject"></div>
    <div class="catalogueObject"></div>
    <div class="catalogueObject"></div>
    <div class="catalogueObject"></div>
    `;

  return {
    catalogueObject: container.querySelectorAll(".catalogueObject")
  };
}

catalogue();

function render_catalogueObject(){

  const container = document.querySelectorAll(".catalogueObject");
  container.innerHTML = `
  <div class="imageBox">
      <img src="" alt="">
      <p>TYPE</p>
  </div>
  <div class="textBox">
      <h2>NAME OF SHOE</h2>
      <div>
        <p>COUNTRY</p>
        <p>PRICE</p>
      </div>
  </div>
  `;
  return{
    imageBox: container.querySelector(".imageBox"),
    textBox: container.querySelector(".textBox"),
    // somethingsomething: container.querySelector("h2"),
    //somethingsomething: container.querySelector("p"),
  };
}
