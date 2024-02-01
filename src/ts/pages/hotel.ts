import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { HotelSlider, HotelSecondSlider } from '../code/swiper';
import { InfoBlock } from '../code/hotel/info-block';




class Hotel{
    swiper: HotelSlider;
    bottomSlider: HotelSecondSlider;
    infoBlock: InfoBlock;
    constructor(){
        this.swiper = new HotelSlider();
        this.bottomSlider = new HotelSecondSlider()
        this.infoBlock = new InfoBlock();
        this.init()
    }
    init(){
        
    }

}

document.addEventListener('DOMContentLoaded', () => {
    new Footer();
    new Header()
    new Hotel()
});

