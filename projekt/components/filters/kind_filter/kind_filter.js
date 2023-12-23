function renderKindFilter (parent) {
    const container = document.createElement("div");
    container.id = "kindFilter";
    parent.append(container);
  
    container.innerHTML = `
    <h3>TYPE OF SHOE</h3>
    `;
  
    for (kind of KINDS)
    {
      const kindsCheckmarks = document.createElement("div");
      container.append(kindsCheckmarks);
      kindsCheckmarks.classList.add("kindCheckmarks");
  
      renderFilterElements(kindsCheckmarks, kind.name);
    }
  }