"use strict";

function renderStructure() {
  const div = document.createElement("div");
  document.body.appendChild(div);
  div.setAttribute("id", "wrapper");

  const container = document.querySelector("#wrapper");
  container.innerHTML = `
    <nav></nav>
    <header></header>
    <main>
      <div id="left"></div>
      <div id="right">
        <div id="rightTop"></div>
        <div id="rightBottom"></div>
      </div>
    </main>
    <footer></footer>
  `;

  return {
    nav: container.querySelector("nav"),
    header: container.querySelector("header"),
    left: container.querySelector("#left"),
    rightTop: container.querySelector("#rightTop"),
    rightBottom: container.querySelector("#rightBottom"),
    footer: container.querySelector("footer"),
  };
}
