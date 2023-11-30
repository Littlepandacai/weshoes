function renderStructure() {
    const container = document.querySelector("#wrapper");
    container.innerHTML = ` 
        <header></header>
        <nav></nav>
        <main>
        </main>
        `
        ;
    //kommentar
    return {
        header: container.querySelector("header"),
        nav: container.querySelector("nav"),
        main: container.querySelector("main"),
    };
}