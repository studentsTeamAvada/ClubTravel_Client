import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getStorage, ref,  uploadBytesResumable,getDownloadURL } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",
  authDomain: "clubtravel-6eff6.firebaseapp.com",
  projectId: "clubtravel-6eff6",
  storageBucket: "clubtravel-6eff6.appspot.com",
  messagingSenderId: "883499742498",
  appId: "1:883499742498:web:b0bf6b06d8073d249a217b",
};

export const app = initializeApp(firebaseConfig);




export class GetSing{
  promise(){
    return new Promise(resolve => {
      onAuthStateChanged(getAuth(), (user) => {
        if(user){
          resolve(user)
        }else{
          resolve(false)
        }
      })
    })
  }
}

// const user = await new GetSing().promise() 








