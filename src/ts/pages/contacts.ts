import { Header } from "../components/header";
import { Footer } from "../components/footer";
// import $ from "jquery";

class Contacts{
    header: Header;
    footer: Footer;
    constructor() {
      this.header = new Header();
      this.footer = new Footer();
      this.init();
    }
    init(){

    }
}

new Contacts();