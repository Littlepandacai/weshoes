"use strict";

function renderFooter (parent) {
    let btn = document.createElement("button");
    btn.textContent = "ABOUT US";
    parent.appendChild(btn);

    btn.addEventListener("click", function () {
        const overlay = document.createElement("div");
        overlay.classList.add("boxBackground");

        const box = document.createElement("div");
        box.id = "infoBox";
        box.textContent = "MEET THE TEAM BEHIND WeSHOES";
        overlay.appendChild(box);

        const exitbutton = document.createElement("button");
        exitbutton.textContent = "X";
        exitbutton.classList.add("exitButton");
        exitbutton.addEventListener("click", function () {
        parent.removeChild(overlay);
        });
        
        box.appendChild(exitbutton);

        const imgContainer = document.createElement("div");
        imgContainer.id = "imgContainer";

        box.appendChild(imgContainer);

        parent.appendChild(overlay);

        overlay.addEventListener("click", function(event) {
            if (event.target === overlay) {
                parent.removeChild(overlay);
            }
        });
    });
}