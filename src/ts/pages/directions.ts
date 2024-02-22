import { Header } from "../components/header";
import { DirectionProduct } from "../code/directions/directions";
import { Preloader } from "../components/preloader";
import { IsAuthorization } from "../components/isAuthorization";




document.addEventListener("DOMContentLoaded", async function() {
    const productDirection = new DirectionProduct();
    await productDirection.loadCards();
    
    new Header();
    new Preloader();
    new IsAuthorization();
})

