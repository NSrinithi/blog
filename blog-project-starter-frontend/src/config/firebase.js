// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCV8zfrsbtSezz9bkGT5h2JO5kumZH8c6E",
  authDomain: "blog-app-8dcaf.firebaseapp.com",
  projectId: "blog-app-8dcaf",
  storageBucket: "blog-app-8dcaf.firebasestorage.app",
  messagingSenderId: "1079254713576",
  appId: "1:1079254713576:web:058b253c69c0ac93bf355d",
  measurementId: "G-JVSG0GQGZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;