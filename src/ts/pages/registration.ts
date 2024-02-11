import { Header } from "../components/header";
import { justValidateRegistration } from "../modules/justValidate";
import { Registration } from "../code/registration/registration";

new Header();
justValidateRegistration();

const registrationInstance = new Registration();

const buttonRegistration = document.querySelector(
  ".registration__btn-registration",
) as HTMLElement;
buttonRegistration.addEventListener("click", () => {
  registrationInstance.registration();
});
