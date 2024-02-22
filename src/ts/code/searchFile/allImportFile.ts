import { Filtering } from './filteringCountry';
import { Duration } from './filterDuration';
import { SelectData } from './filterDate';
import { Guests } from './filterGuests';
import { Hotels } from './filterHotel';

export class AllImportFile {
  filterinf: Filtering;
  duration: Duration;
  selectData: SelectData;
  guests: Guests;
  hotels: Hotels;

  constructor() {
    this.filterinf = new Filtering();
    this.duration = new Duration();
    this.selectData = new SelectData();
    this.guests = new Guests();
    this.hotels = new Hotels();
  }
}
