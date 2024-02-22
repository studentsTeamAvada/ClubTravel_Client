import { app } from "../../modules/firebase";
import { getAuth, Auth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { FirebaseApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { fbUser } from "../../type";

export class Authorization {
  app: FirebaseApp;
  auth: Auth;

  constructor() {
    this.app = app;
    this.auth = getAuth();
  }

  authorizationWithEmail() {
    const emailInput = document.querySelector(
      "#authorizationMail",
    ) as HTMLInputElement;
    const email = emailInput.value;
    const passwordInput = document.querySelector(
      "#authorizationPassword",
    ) as HTMLInputElement;
    const password = passwordInput.value;

    signInWithEmailAndPassword(this.auth, email, password)
      .then((userData) => {
        const user = userData.user;
        alert("Пользователь вошел");
        emailInput.value = "";
        passwordInput.value = "";
        console.log("User signed in:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Почта или пароль введены неверно");
        console.error("Login failed:", errorCode, errorMessage);
      });
  }

  authorizationWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(this.auth, provider)
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
        alert("Не удалось войти с помощью Google");
        console.error("Login failed:", errorCode, errorMessage);
      });
  }

  authorizationFacebook() {
    const provider = new FacebookAuthProvider();

    signInWithPopup(this.auth, provider)
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
        alert("Не удалось войти с помощью Facebook");
        console.error("Login failed:", errorCode, errorMessage);
      });
  }

  addUserToFirebase(userData: fbUser) {
    const db = getFirestore(app);
    addDoc(collection(db, "users"), userData)
      .then((user) => {
        console.log(user);
        
        console.log("Document written with ID: ", user.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
}