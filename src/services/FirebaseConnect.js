// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgcuolNXfIejfCEy23a4gor5gNRg_btbk",
    authDomain: "star-wars-345f1.firebaseapp.com",
    projectId: "star-wars-345f1",
    storageBucket: "star-wars-345f1.appspot.com",
    messagingSenderId: "995129333136",
    appId: "1:995129333136:web:ed05cba234f9755de00f15"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

