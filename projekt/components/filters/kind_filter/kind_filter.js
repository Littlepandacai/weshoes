function renderKindFilter (parent) {
    const container = document.createElement("div");
    container.id = "kind_filter";
    parent.append(container);
  
    container.innerHTML = `
    <h3>TYPE OF SHOE</h3>
    `;
  
    for (kind of KINDS)
    {
      const kinds_checkmarks = document.createElement("div");
      container.append(kinds_checkmarks);
      kinds_checkmarks.classList.add("kinds_checkmarks");
  
      renderFilterElements(kinds_checkmarks, kind.name);
    }
  }