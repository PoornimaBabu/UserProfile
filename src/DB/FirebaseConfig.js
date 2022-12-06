// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "add-user-profile.firebaseapp.com",
  projectId: "add-user-profile",
  storageBucket: "add-user-profile.appspot.com",
  messagingSenderId: "831950690394",
  appId: "1:831950690394:web:09908fd0098ecb6840a063",
  measurementId: "G-ETN8J8YVPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
// const analytics = getAnalytics(app);