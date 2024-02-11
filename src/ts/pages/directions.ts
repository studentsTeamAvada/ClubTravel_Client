import { Header } from "../components/header";
import { DirectionProduct } from "../code/directions/directions";

new Header();
const productDirection = new DirectionProduct();

await productDirection.loadCards();
