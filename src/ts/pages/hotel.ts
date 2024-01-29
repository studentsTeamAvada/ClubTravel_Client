import { Header } from "../components/header";
import { HotelSlider } from '../code/swiper';
import { DropDown } from '../components/dropDown';

new Header();

class Hotel{
    swiper: HotelSlider;
    dropDown: DropDown;
    constructor(){
        this.swiper = new HotelSlider()
        this.dropDown = new DropDown('.tour__quantity-drop');
    }
}

new Hotel()