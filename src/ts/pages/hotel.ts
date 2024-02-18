import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { HotelSlider, HotelSecondSlider } from "../code/swiper";
import { InfoBlock } from "../code/hotel/info-block";
import { Preloader } from "../components/preloader";

document.addEventListener("DOMContentLoaded", () => {
  class Hotel {
    swiper: HotelSlider;
    bottomSlider: HotelSecondSlider;
    infoBlock: InfoBlock;
    header: Header;
    footer: Footer;
    constructor() {
      this.swiper = new HotelSlider();
      this.bottomSlider = new HotelSecondSlider();
      this.infoBlock = new InfoBlock();
      this.header = new Header();
      this.footer = new Footer();
      this.init();
    }
    init() {}
  }
  new Hotel();
  new Preloader();
});


