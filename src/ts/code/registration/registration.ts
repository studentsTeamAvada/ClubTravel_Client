import { app } from "../../modules/firebase";
import { getAuth, Auth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { FirebaseApp } from "firebase/app";
export class Registration {
  app: FirebaseApp;
  auth: Auth;

  constructor() {
    this.app = app;
    this.auth = getAuth();
  }

  registrationWithEmail() {
    const emailInput = document.querySelector("#registrationMail") as HTMLInputElement;
    const email = emailInput.value;
    const passwordInput = document.querySelector("#registrationPassword") as HTMLInputElement;
    const password = passwordInput.value;
    const repeatPasswordInput = document.querySelector("#registrationRepeatPassword") as HTMLInputElement;

    if (password !== repeatPasswordInput.value) {
      return;
    }

    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userData: any) => {
        const user = userData.user;
        emailInput.value = '';
        passwordInput.value = '';
        repeatPasswordInput.value = '';
        alert('Вы зарегистрированы!');
        console.log("Registration with email successful:", user);
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration with email failed:", errorCode, errorMessage);
      });
  }

  registrationWithGoogle() {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(this.auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log("Registration with Google successful:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration with Google failed:", errorCode, errorMessage);
      });
  }

  registrationWithFacebook() {
    const facebookProvider =  new FacebookAuthProvider();

    signInWithPopup(this.auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log("Registration with Facebook successful:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration with Facebook failed:", errorCode, errorMessage);
      });
  }


}


