// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration (new config)
const firebaseConfig = {
  apiKey: "AIzaSyA_xBZBmAelYXQ5UCdbeQycucLs1RgKZ-o",
  authDomain: "questionshub-75964.firebaseapp.com",
  projectId: "questionshub-75964",
  storageBucket: "questionshub-75964.firebasestorage.app",
  messagingSenderId: "816284924942",
  appId: "1:816284924942:web:9c69dafef79813a5aa905f",
  measurementId: "G-BMC27GC3XJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Analytics
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider, analytics };
