structure_Esmir();

render_nav();

let sidebar = document.querySelector("#menu");
sidebar.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("active")
})

render_header();
