function renderCountryFilter (parent) {
  const container = document.createElement("div");
  container.id = "countryFilter";
  parent.append(container);

  container.innerHTML = `
  <h3>COUNTRY OF PRODUCTION</h3>
  `

  for (country of COUNTRIES)
  {
    const countryCheckmarks = document.createElement("div");
    container.append(countryCheckmarks);
    countryCheckmarks.classList.add("countryCheckmarks");

    renderFilterElements(countryCheckmarks, country.name);
   
  }
}



