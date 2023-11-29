function render_structure (parent)
{
  const container = document.createElement("div");
  container.id = "structure";
  parent.appendChild(container);

  container.innerHTML = `
    <header></header>
    <main>
      <div id="carousel"></div>
      <div id="left"></div>
      <div id="right"></div>
    </main>
    <footer></footer>
  `;

  return {
    header: container.querySelector("header"),
    carousel: container.querySelector("#carousel"),
    left: container.querySelector("#left"),
    right: container.querySelector("#right"),
    footer: container.querySelector("footer")
  };
}
