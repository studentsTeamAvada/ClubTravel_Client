// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { collection, getDocs } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",
//     authDomain: "clubtravel-6eff6.firebaseapp.com",
//     projectId: "clubtravel-6eff6",
//     storageBucket: "clubtravel-6eff6.appspot.com",
//     messagingSenderId: "883499742498",
//     appId: "1:883499742498:web:b0bf6b06d8073d249a217b",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);



// const querySnapshot = await getDocs(collection(db, "hotels"));
// querySnapshot.forEach((doc) => {
// // doc.data() is never undefined for query doc snapshots
// console.log(doc.id, " => ", doc.data());
// });



import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDO8MiN9PG7tKA9mFASAZd3l3ZSZkSZkpY",
    authDomain: "our-flowers.firebaseapp.com",
    projectId: "our-flowers",
    storageBucket: "our-flowers.appspot.com",
    messagingSenderId: "1059937229113",
    appId: "1:1059937229113:web:2f1bd4d3f5809db0fdb0e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
  });



const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
// doc.data() is never undefined for query doc snapshots
console.log(doc.id, " => ", doc.data());
});