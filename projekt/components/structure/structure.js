
function renderStructure (parent)
{
    let container = document.createElement("div");
    container.id ="wrapper";
    parent.append(container);
    console.log(container);
    container.innerHTML = `
    <header>
        <img src="" alt="menu">
        <img src="" alt="logo">
        <img src="" alt="kundvagn">
    </header>
    <main>
        <div id="filters">
            <div id="country"></div>
            <div  id="type"></div>
            <div id="price"></div>
        </div>
    </main>
    <footer><div><p>About us</p></div></footer>`;

    return {
        header: container.querySelector("header"),
        filters: container.querySelector("#filters"),
        country: container.querySelector("#country"),
        type: container.querySelector("#type"),
        price: container.querySelector("#price"), 
        footer: container.querySelector("footer"),
    };
}