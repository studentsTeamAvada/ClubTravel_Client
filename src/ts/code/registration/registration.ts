
import { app } from "../../modules/firebase";
import { getAuth, Auth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { FirebaseApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
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
        
        this.addUserToFirebase(user.uid, userDataWithEmail);

        emailInput.value = '';
        passwordInput.value = '';
        repeatPasswordInput.value = '';

        window.location.href = 'index.html';
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

       this.addUserToFirebase(user.uid, userDataWithGoogle);
        // window.location.href = 'index.html';
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
        this.addUserToFirebase(user.uid, userDataWithFacebook);
        window.location.href = 'index.html';
        console.log("Registration with Facebook successful:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration with Facebook failed:", errorCode, errorMessage);
      });
  }

    async addUserToFirebase(uid: string, userData: fbUser) {
    const db = getFirestore(app);
    const userRef = doc(collection(db, "users"), uid);
    await setDoc(userRef, userData)
      .then(() => {
        console.log("Document written with UID: ", uid);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
}