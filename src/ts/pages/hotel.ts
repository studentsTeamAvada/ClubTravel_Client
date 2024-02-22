import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { InfoBlock } from "../code/hotel/info-block";
import { PullData } from "../code/hotel/pull-data";
import { Order } from "../code/hotel/order";
import { IsAuthorization } from "../components/isAuthorization";

document.addEventListener("DOMContentLoaded", () => {
  class Hotel {
    infoBlock: InfoBlock;
    header: Header;
    footer: Footer;
    pullData: PullData;
    order: Order

    constructor() {
      this.infoBlock = new InfoBlock();
      this.header = new Header();
      this.footer = new Footer();
      this.pullData = new PullData();
      this.order = new Order();

      this.init();
    }
    init() {}
  }
  new Hotel();
  new IsAuthorization();
});


