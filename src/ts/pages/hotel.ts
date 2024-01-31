import { Header } from "../components/header";
import { HotelSlider, HotelSecondSlider } from '../code/swiper';
import { InfoBlock } from '../code/hotel/info-block';




class Hotel{
    swiper: HotelSlider;
    bottomSlider: HotelSecondSlider;
    infoBlock: InfoBlock;
    header: Header;
    constructor(){
        this.swiper = new HotelSlider();
        this.bottomSlider = new HotelSecondSlider()
        this.infoBlock = new InfoBlock();
        this.header = new Header();
        this.init()
    }
    init(){
        
    }
}

new Hotel()