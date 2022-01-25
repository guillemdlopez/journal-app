import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAamHnauBkuPPrP5K6hbg6_JgEsq5o1Xtg",
  authDomain: "journal-app-8a697.firebaseapp.com",
  projectId: "journal-app-8a697",
  storageBucket: "journal-app-8a697.appspot.com",
  messagingSenderId: "282886546108",
  appId: "1:282886546108:web:68739c29715152aa5da6b9",
  measurementId: "G-R8P3KBFZ8S",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// db === referencia
export { db, googleAuthProvider, firebase };
