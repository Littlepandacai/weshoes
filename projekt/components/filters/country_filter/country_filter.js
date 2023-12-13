function renderCountryFilter (parent) {
  const container = document.createElement("div");
  container.id = "country_filter";
  parent.append(container);

  container.innerHTML = `
  <h3>COUNTRY OF PRODUCTION</h3>
  `

  for (country of COUNTRIES)
  {
    const country_checkmarks = document.createElement("div");
    container.append(country_checkmarks);
    country_checkmarks.classList.add("country_checkmarks");

    renderFilterElements(country_checkmarks, country.name);
   
  }
}



