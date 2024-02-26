import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { InfoBlock } from "../code/hotel/info-block";
import { PullData } from "../code/hotel/pull-data";
import { Order } from "../code/hotel/order";

document.addEventListener("DOMContentLoaded", () => {
  class Hotel {
    infoBlock: InfoBlock;
    footer: Footer;
    pullData: PullData;
    order: Order

    constructor() {
      this.infoBlock = new InfoBlock();
      this.footer = new Footer();
      this.pullData = new PullData();
      this.order = new Order();
    }
  }
  // todo: delete class
  new Hotel();
  new Header()
});


