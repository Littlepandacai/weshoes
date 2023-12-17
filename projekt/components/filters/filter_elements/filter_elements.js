function renderFilterElements(parent, text) {
  const container = document.createElement("div");
  parent.append(container);
  container.classList.add("filter_element");

  container.innerHTML = `
    <div class="check_container">
      <div class="checkmark_box"></div>
    </div>
    <div class="text">${text}</div>
  `;

  container.addEventListener("click", function () {
    const checkmark_box = this.querySelector(".checkmark_box");
    
    // Toggle mellan "X" och inget innehåll
    checkmark_box.innerHTML = checkmark_box.innerHTML === "" ? `<p class="checkmark">X</p>` : "";

    container.classList.toggle("checked");
    // update catalogue
  });
}