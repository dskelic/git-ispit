import layout from "./views/layout";
import fetchCountries from "./countries";
import createList from "./views/list";

function render(markup, parent) {
  parent.innerHTML = markup;
}

function setup() {
  console.log("setup mkdamskd!");
  const layoutContainer = document.getElementById("app");
  //layoutContainer.innerHTML = layout;
  render(layout, layoutContainer);

  const searchInput = document.getElementById("search");
  const searchButton = document.getElementById("searchButton");
  const appContainer = document.getElementById("content");

  searchButton.addEventListener("click", () => {
    //dohvatiti upisani tekst od korisnika
    //validacija upisanog teksta
    //API poziv
    //prikaz rezultata sa API poziva
    const enteredText = searchInput.value.trim();
    console.log("enteredText", enteredText);

    if (!enteredText || enteredText.length < 2) {
      alert("please enter some text!");
      return;
    }

    fetchCountries(enteredText).then((countriesArray) => {
      console.log("countriesArray", countriesArray);
      const list = createList(countriesArray);
      console.log("list", list);
      render(list, appContainer);
    });
  });
}

export default setup;
