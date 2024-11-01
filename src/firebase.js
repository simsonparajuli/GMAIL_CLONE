// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeJU6MkhtHS9jN2c7xNToiKqzuwhBQwlU",
  authDomain: "clone-9abba.firebaseapp.com",
  projectId: "clone-9abba",
  storageBucket: "clone-9abba.firebasestorage.app",
  messagingSenderId: "222336434131",
  appId: "1:222336434131:web:3594a6e03b9538c2463926",
  measurementId: "G-Y96K1KGX5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// For Authentication
export const auth = getAuth();
// For Database
export const db = getFirestore(app);
// To Login with google
export const provider = new GoogleAuthProvider();