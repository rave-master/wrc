import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAns1ZSZMKXE7eqkHPVne3N188hx62sLSc",
  authDomain: "locaator.firebaseapp.com",
  projectId: "locaator",
  storageBucket: "locaator.firebasestorage.app",
  messagingSenderId: "133910390605",
  appId: "1:133910390605:web:7145d01350b87a88977904",
  measurementId: "G-JSZMC9D7SJ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, onAuthStateChanged };
