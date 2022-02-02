// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiJo-y7LvfoAF4vmJiZAxz5AumeT95PXY",
  authDomain: "my-quiz-4cd91.firebaseapp.com",
  projectId: "my-quiz-4cd91",
  storageBucket: "my-quiz-4cd91.appspot.com",
  messagingSenderId: "173700285554",
  appId: "1:173700285554:web:e9a220da1880bf21ca2eeb",
  measurementId: "G-C55KJX5WK9",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
