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
          <!-- <p id="popupText">WeShoes!</p> -->
      </div>
      <div id="popUpItems">
          <div id="boxTopLeft">
              <div id="kinds">
                  <h1>Name of Shoe</h1>
                  <p>COUNTRY</p>
                  <p>TYPE</p>
              </div>
              <div id="size">
                  <div class="sizeType">37</div>
                  <div class="sizeType">38</div>
                  <div class="sizeType">39</div>
                  <div class="sizeType">40</div>
                  <div class="sizeType">41</div>
                  <div class="sizeType">42</div>
              </div>
              <div id="reviews">
                  <img src="" alt="star">
              </div>
          </div>
          <div id="reviewsText">
              <p class="content">Reviews, content</p>
          </div>
          <div id="boxTopRight">
              <div id="image"></div>
          </div>
          <div id="boxBottomRight">
              <div id="price">
                  <h3>PRICE</h3>
                  <button id="buy">BUY</button>
              </div>
          </div>
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

    // window.addEventListener('click', function (event) {
    //     if (event.target === popup) {
    //         popup.style.display = 'none';
    //     }
    // });
}


const parentElement = document.body;
renderPopUpFilter(parentElement);


