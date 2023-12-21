"use strict";

function renderPopUpElement(parent) {
    let shoeImg = document.querySelectorAll(".catalogue > div:first-child");
    //let main = document.querySelector("main");

    for (let shoe of shoeImg) {

        shoe.addEventListener("click", function renderPopUpFilter() {
            const overlay = document.createElement("div");
            overlay.classList.add("popupBackground");
            parent.appendChild(overlay);

            const container = document.createElement("div");
            container.id = "popupContainer";
            overlay.appendChild(container);

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

            let shoeId = Number(shoe.getAttribute("id"));
            console.log(shoeId);
            let reviewArray = array_filter(REVIEWS, function (product) {
                return product.shoe_id === shoeId
            });

            let revContainer = document.querySelector("#reviewsText");
            revContainer.innerHTML = ``;
            for (let review of reviewArray) {
                
 
                        let reviewDiv = document.createElement("div");
                        reviewDiv.classList.add("reviewDiv");
                        revContainer.appendChild(reviewDiv);

                        reviewDiv.innerHTML = `
                            <h1 id="score">${review.score}</h1>
                            <p id="revText">${review.rev}</p>      
                        `;

                        if (review.rev === "") {
                            let revText = document.querySelector("#revText");
                            revText.textContent = "No review text.";
                           }
            }

            let image_box = document.querySelector("#image");
            image_box.style.backgroundImage = shoe.style.backgroundImage

            let closePopUpBtn = document.querySelector("#closePopupBtn")
            closePopUpBtn.addEventListener("click", function () {
                container.remove();
            });
        
        overlay.addEventListener("click", function(event) {
            if (event.target === overlay) {
                parent.removeChild(overlay);
            }
        });

    });
}
}
