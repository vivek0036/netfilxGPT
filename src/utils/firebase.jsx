// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { exp } from "firebase/firestore/pipelines";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKQZ0mZBA_u_RK2CFZyhhsYZGORHSScAk",
  authDomain: "netflixgpt-9dc77.firebaseapp.com",
  projectId: "netflixgpt-9dc77",
  storageBucket: "netflixgpt-9dc77.firebasestorage.app",
  messagingSenderId: "805999229153",
  appId: "1:805999229153:web:4cc3b8546cd87c3da41fa0",
  measurementId: "G-HYQQV2QMZR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
