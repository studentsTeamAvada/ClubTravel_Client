import { Header } from "../components/header";
import { justValidateAuthorization } from "../modules/justValidate";
import { Authorization } from "../code/authorization/authorization";

new Header();
justValidateAuthorization();

const authorizationInstance = new Authorization();

const buttonAuthorization = document.querySelector(
  ".authorization__btn-registration",
) as HTMLElement;

buttonAuthorization.addEventListener("click", () => {
  authorizationInstance.authorization();
});
