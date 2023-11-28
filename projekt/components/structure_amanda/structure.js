
function renderStructure (parent)
{
    let container = document.createElement("div");
    container.id ="wrapper";
    parent.append(container);
    console.log(container);
    container.innerHTML = `
    <header></header>
    <h1>SHOES/BOOTS</h1>
    <main>
        <div id="left">
        <div id="right">
    </main>
    <footer></footer>`;

    return {
        header: container.querySelector("header"),
        filters: container.querySelector("#left"),
        price: container.querySelector("#right"), 
        footer: container.querySelector("footer"),
    };
}