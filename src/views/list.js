// Hrvatska - Zagreb - Europe
function createList(countriesArray) {
  console.log("createList");
  let listItems = "";
  for (let i = 0; i < countriesArray.length; i++) {
    const c = countriesArray[i];
    const name = c.name.official;
    const capital = c.capital[0];
    const region = c.region;
    const newCountry = `<li> ${name} - ${capital} - ${region} </li>`;
    listItems += newCountry;
  }

  return `<ul>${listItems}</ul>`;

  /* 
    <ul>
        <li>Hrvatska - Zagreb - Europe</li>
        <li>Hrvatska - Zagreb - Europe</li>
        <li>Hrvatska - Zagreb - Europe</li>
    </ul>; 
    */
}

export default createList;
