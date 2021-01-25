import renderMarkup from './js/renderMarkup';
import refs from "./js/refs";
import notifyError from './js/pnotify';
import debounce from 'lodash.debounce';

const baseUrl = 'https://restcountries.eu/rest/v2';

refs.query.addEventListener('input', debounce(fetchCountries, 3000));

function fetchCountries() {
  const searchQuery = refs.query.value;

  refs.countriesList.innerHTML = ' ';
  refs.countryWrp.innerHTML = ' ';

  if (searchQuery.length > 1) {
    fetch(`${baseUrl}/name/${searchQuery}`)
      .then(response => response.json())
      .then(countries => {
        if (countries.length > 0 && countries.length <= 10) {
          renderMarkup(countries);
        } else if (countries.length > 10) {
          notifyError('Too many matches found. Please enter a more specific query!');
        } else {
          notifyError('No matches found!');
        }
      })
      .catch(error => notifyError(error.message));
  }
}
