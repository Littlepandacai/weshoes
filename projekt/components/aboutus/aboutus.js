function renderButton(parent) { // var den ska ligga, i vårt fall, body (anropar i index.js)
    const button = document.createElement("button");
    button.id = "redButton"; // i button.css har vi skapat ett id med namnet "redButton"
    button.textContent = "Make the button red!" // knappen ska innehålla text
    parent.append(button); // parent, i vårt fall body, får knappen i sig som child

    button.addEventListener("click", function () { // behöver ha en funktion så vi skapar en till här
        document.body.classList.toggle("redBackground");
    })
};

// 1. Skapa filstrukturen för alla mappar
// 2. Skapa komponentens mapp, i detta fall, button
// 3. Skapa .js-filen -> skapa render-funktion
// 4. Skapa .css-filen -> för knappen och body
// 5. Länka alla filer från index.html
// 6. Koda appars start-up-kod i index.js -> alltså render-knappen