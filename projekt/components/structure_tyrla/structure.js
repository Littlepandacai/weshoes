function render_structure ()
{
  const container = document.querySelector("#wrapper");
  container.innerHTML = container.innerHTML = `
  <div id="top"></div>
  <header></header>
  <main> 
      <div id="left"></div>
      <div id="right"></div> 
      <footer></footer> 
  </main>
  `
  ;

  return {
    top: container.querySelector("top"),
    header: container.querySelector("header"),
    left: container.querySelector("#left"),
    right: container.querySelector("#right"),
    footer: container.querySelector("footer"),
  };
}