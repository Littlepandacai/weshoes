"use strict";

//let shoeImg = document.querySelector("#shoe-img");
let img = document.querySelectorAll(".catalogue #shoe-img")
let wrapper = document.querySelector("#wrapper");

for (let shoe of img) {

    shoe.addEventListener("click", function renderPopUpFilter(wrapper) {
        console.log("hej")
        const container = document.createElement("div");
        container.id = "popupContainer";
        parent.append(container);

        container.innerHTML = `
    
      <div class="popup" id="popup">
            <span class="close" id="closePopupBtn">&times;</span>
           
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
                      <p>0/5</p>
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


        const closePopupBtn = document.getElementById('closePopupBtn');
        const popup = document.getElementById('popup');


        openPopupBtn.addEventListener('click', function () {
            popup.style.display = 'block';

        });

        closePopupBtn.addEventListener('click', function () {
            popup.style.display = 'none';
        });

        // window.addEventListener('click', function (event) {
        //     if (event.target === popup) {
        //         popup.style.display = 'none';
        //     }
        // });

    });
}



// const parentElement = document.body;
// renderPopUpFilter(parentElement);


