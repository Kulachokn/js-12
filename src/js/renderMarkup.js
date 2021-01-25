import countryTmp from '../templates/countryTml.hbs';
import countriesListTmp from '../templates/countriesListTmp.hbs';
import refs from "../js/refs";

function renderMarkup(countries) {
    let markup = null;
    if (countries.length === 1) {
        markup = countryTmp(countries);
        return refs.countryWrp.insertAdjacentHTML('beforeend', markup);
    } else if (countries.length <= 10 || countries.length > 1) {
        markup = countriesListTmp(countries);
        return refs.countriesList.insertAdjacentHTML('beforeend', markup);
    }
}

export default renderMarkup;
