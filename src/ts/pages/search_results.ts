import { Country } from '../code/searchFile/filterCountry';
import { AdvancedSearch } from './../components/searchNew';
import { Duration } from '../code/searchFile/filterDuration';
import { Region } from '../code/searchFile/filterRegion';
import {SelectData} from "../code/searchFile/filterDate";
import {Hotels} from "../code/searchFile/filterHotel";
import {Guests} from "../code/searchFile/filterGuests";
// import { Preloader } from "../components/preloader";
// import { Header } from "../components/header"

document.addEventListener('DOMContentLoaded', async () => {
  // new Header();
  new Country();
  new AdvancedSearch();
  new Duration();
  new Region();
  new SelectData();
  new Hotels();
  new Guests();
  // new Preloader()
});
