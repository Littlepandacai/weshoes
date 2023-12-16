"use strict";

function renderPopUpFilter(parent) {
    const container = document.createElement("div");
    container.id = "popupContainer";
    parent.append(container);

    container.innerHTML = `
      <button id="openPopupBtn">Click Me</button>
  
      <div class="popup" id="popup">
        <div class="popup-content" id="popupContent">
          <span class="close" id="closePopupBtn">&times;</span>
          <p id="popupText">WeShoes!</p>
        </div>
      </div>
    `;

    const openPopupBtn = document.getElementById('openPopupBtn');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popupText');

    openPopupBtn.addEventListener('click', function () {
        popup.style.display = 'block';
        popupText.innerHTML = 'WeShoes';
    });

    closePopupBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
}


const parentElement = document.body;
renderPopUpFilter(parentElement);


