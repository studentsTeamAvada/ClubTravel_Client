import { initializeApp } from "firebase/app";
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
// const storage = getStorage(app);

// const photo = document.querySelector("#photo") as HTMLInputElement;
// const form = document.querySelector("#form") as HTMLFormElement;

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const file = photo.files ? photo.files[0] : null;
//   if (file) {
//     const storageRef = ref(storage, `images/${file.name}`);
//     const uploadTask = uploadBytesResumable(storageRef, file);
//     uploadTask.then(() => {
//       console.log('Upload successful');

//       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: string) => {
//         console.table(downloadURL);
//       });
//     }).catch((error) => {
//       console.error('Upload failed:', error);
//     });
//   }
// });
