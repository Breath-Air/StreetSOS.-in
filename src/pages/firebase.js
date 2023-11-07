import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
 
const firebaseConfig = {
  apiKey: "AIzaSyAaLhDTX5ApdObOU9zkHT_hANHGetmFAmM",
  authDomain: "streetsos.firebaseapp.com",
  projectId: "streetsos",
  storageBucket: "streetsos.appspot.com",
  messagingSenderId: "588601762331",
  appId: "1:588601762331:web:1fb35d87a2312b105c8ebe",
  measurementId: "G-PLPL95RKC7"
};

const app = initializeApp(firebaseConfig);
export const imgDB = getStorage(app)
export const txtDB = getFirestore(app)



// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage"
// import { getFirestore } from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyDQMc7MXyOIKOFX_7BHv23pLTgkE-AXsvk",
//   authDomain: "database-9d84f.firebaseapp.com",
//   databaseURL: "https://database-9d84f-default-rtdb.firebaseio.com",
//   projectId: "database-9d84f",
//   storageBucket: "database-9d84f.appspot.com",
//   messagingSenderId: "487212057834",
//   appId: "1:487212057834:web:62752572f692406dae8393",
//   measurementId: "G-2CVRF2CGWH"
// };

// const app = initializeApp(firebaseConfig);
// export const imgDB = getStorage(app)
// export const txtDB = getFirestore(app)