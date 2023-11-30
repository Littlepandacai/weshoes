// Function - render - structure - Bojana
"use strict";
function render_structure() {
    const container = document.querySelector("#wrapper");
    container.innerHTML = `c
    <header>
       <h1>Header</h1>
    </header>

    <main>
          <div id="middle">
              <h2>Shoes</h2>
          </div>

          <div class="leftContainer">
              <div class="leftColumn">
              <div class="row">1</div>
              <div class="row">2</div>
              <div class="row">3</div>
          </div>
          
          <div class="mainContent">
              <div class="box">1</div>
              <div class="box">2</div>
              <div class="box">3</div>
              <div class="box">4</div>
              <div class="box">5</div>
              <div class="box">6</div>
              <div class="box">7</div>
              <div class="box">8</div>
              <div class="box">9</div>
              </div>
          </div>

          <footer></footer/>
      </main>
  `;

    return {
        header: container.querySelector("header"),
        middle: container.querySelector("#middle"),
        leftContainer: container.querySelector("#left"),
        mainContent: container.querySelector("#main"),
        footer: container.querySelector("#footer"),
    };
}

render_structure();