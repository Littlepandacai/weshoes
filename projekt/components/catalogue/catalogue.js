"use strict";

function catalogue () {
    const div = document.createElement("div");
    document.body.rightBottom.appendChild(div);
    div.setAttribute("id", "catalogue");

    const container = document.querySelector("#catalogue");
    container.innerHTML = `
        <div id="catalogue-object"></div>
        <div id="catalogue-object"></div>
        <div id="catalogue-object"></div>
        <div id="catalogue-object"></div>
        <div id="catalogue-object"></div>
        <div id="catalogue-object"></div>
        <div id="catalogue-object"></div>
        <div id="catalogue-object"></div>
        <div id="catalogue-object"></div>

  `;

  return {
    div: container.querySelector("catalogue-object"),
  };
}

catalogue();