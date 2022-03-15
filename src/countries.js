import axios from "axios";

function fetchCountries(enteredText) {
  //https://restcountries.com/v3.1/name/{name}
  const url = `https://restcountries.com/v3.1/name/${enteredText}`;
  //const url = "https://restcountries.com/v3.1/name/" + enteredText;

  return new Promise((resolve) => {
    axios
      .get(url)
      .then((response) => {
        console.log("success", response.data);
        resolve(response.data);
      })
      .catch((err) => console.error(err));
  });
}

export default fetchCountries;
