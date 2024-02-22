
import { app } from "../../modules/firebase";
import { getAuth, Auth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { FirebaseApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { fbUser } from "../../type";
 
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
      .then((userData) => {
        const user = userData.user;
        const userDataWithEmail: fbUser = {
          email: user.email || '',
          name: '',
          photo: '',
          orders: []
        };

        this.addUserToFirebase(userDataWithEmail);

        emailInput.value = '';
        passwordInput.value = '';
        repeatPasswordInput.value = '';
        alert('Вы зарегистрированы!');
        console.log("Registration with email successful:", user);
      })
      .catch((error) => {
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
        const userDataWithGoogle: fbUser = {
          email: user.email || '',
          name: user.displayName || '',
          photo: user.photoURL || '',
          orders: []
        };

        this.addUserToFirebase(userDataWithGoogle);

        console.log("Registration with Google successful:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration with Google failed:", errorCode, errorMessage);
      });
  }

  registrationWithFacebook() {
    const facebookProvider = new FacebookAuthProvider();

    signInWithPopup(this.auth, facebookProvider)
      .then((result) => {
        const user = result.user;

        const userDataWithFacebook: fbUser = {
          email: user.email || '',
          name: user.displayName || '',
          photo: user.photoURL || '',
          orders: []
        };
        this.addUserToFirebase(userDataWithFacebook);

        console.log("Registration with Facebook successful:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration with Facebook failed:", errorCode, errorMessage);
      });
  }

  addUserToFirebase(userData: fbUser) {
    const db = getFirestore(app);
    addDoc(collection(db, "users"), userData)
      .then((user) => {
        console.log("Document written with ID: ", user.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
}