// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp34O6jOeWW7SEp6ZaoVo4xdaV1gMAbW0",
  authDomain: "fir-tut1-a754c.firebaseapp.com",
  projectId: "fir-tut1-a754c",
  storageBucket: "fir-tut1-a754c.appspot.com",
  messagingSenderId: "944859545679",
  appId: "1:944859545679:web:b4a1448ef2737a52346a3a",
  measurementId: "G-R1SVW74ZB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);