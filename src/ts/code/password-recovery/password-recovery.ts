import { app } from "../../modules/firebase";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export class PasswordRecovery {
  app: any;
  auth: any;

  constructor() {
    this.app = app;
    this.auth = getAuth();
  }

  passwordRecovery() {
    const emailInput = document.querySelector("#passwordRecoveryMail") as HTMLInputElement;
    const email = emailInput.value;

    sendPasswordResetEmail(this.auth, email)
      .then(() => {
        alert("Password reset email sent. Please check your inbox.");
        emailInput.value = '';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Password reset failed:", errorCode, errorMessage);
        alert("Password reset failed. Please try again later.");
      });
  }
}
