import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEW9qXIpswkiADLQ36etKad6fJqKCknkg",
  authDomain: "online-resume-builder-92def.firebaseapp.com",
  projectId: "online-resume-builder-92def",
  storageBucket: "online-resume-builder-92def.firebasestorage.app",
  messagingSenderId: "268042147937",
  appId: "1:268042147937:web:ea41f4fe07217c1370b220",
  measurementId: "G-78MSJ7PEMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);