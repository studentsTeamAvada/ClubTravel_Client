import { Header } from "../components/header";
import { justValidatePasswordRecovery } from "../modules/justValidate";
import { PasswordRecovery } from "../code/password-recovery/password-recovery";

document.addEventListener("DOMContentLoaded", () => {

  justValidatePasswordRecovery();
  
  const passwordRecoveryInstance = new PasswordRecovery();
  
  const buttonSend = document.querySelector(
    ".password-recovery__btn-registration",
  ) as HTMLElement;
  buttonSend.addEventListener("click", () => {
    passwordRecoveryInstance.passwordRecovery();
  }); // todo: components
  
  new Header();
})
