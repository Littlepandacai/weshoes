


function render_structure(parent) {

    const container = document.createElement("div");
    container.id = "wrapper";
    parent.append(container);
    container.innerHTML = `
        <nav></nav>
        <header></header>
        <main>
            <div id="left"></div>
            <div id="right">
                <div id="right_top"></div>
                <div id="right_bottom"></div>
            </div>
        </main>
        <footer></footer>
    `;

    return {
        nav: container.querySelector("nav"),
        header: container.querySelector("header"),
        left: container.querySelector("#left"),
        right: container.querySelector("#right"),
        right_top: container.querySelector("#right_top"),
        right_bottom: container.querySelector("#right_bottom"),
    };
}





