import { Filtering } from '../code/searchFile/filteringCountry';
import { AdvancedSearch } from './../components/searchNew';
import { Duration } from '../code/searchFile/filterDuration';
import { SelectData } from '../code/searchFile/filterDate';
import { Hotels } from '../code/searchFile/filterHotel';
import {Guests} from "../code/searchFile/filterGuests";
// import { Handler } from '../code/searchFile/twst';
// import { Preloader } from "../components/preloader";
// import { Header } from "../components/header"


import { Country } from '../code/searchFile/filterCountry';
document.addEventListener('DOMContentLoaded', async () => {
  // new Header();
  new Filtering();
  new Country();
  new AdvancedSearch();
  new Duration();
  new SelectData();
  new Hotels();
  new Guests();
  // new Handler();
  // // new Preloader()
});
