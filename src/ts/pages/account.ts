import { Header } from "../components/header";
import { Account } from "../code/account/account";

document.addEventListener("DOMContentLoaded", async function() {
    new Header();
    const productAccount = new Account();
    await productAccount.loadCards();
})


