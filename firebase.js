// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM6Hl4leWZ_mUf8kiev93LY2oGsxPy_fg",
  authDomain: "cwfighters-a0313.firebaseapp.com",
  projectId: "cwfighters-a0313",
  storageBucket: "cwfighters-a0313.firebasestorage.app",
  messagingSenderId: "255543788632",
  appId: "1:255543632:web:a26e4ab5906e04abf5762d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ====== SIGN UP ======
export function signUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup successful!");
      // Redirect to home page or another page
      window.location.href = "home.html"; // change to your page
    })
    .catch((error) => {
      console.error("Signup error:", error.code, error.message);
      alert("Signup error: " + error.message);
    });
}

// ====== LOGIN ======
export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      // Redirect to home page or another page
      window.location.href = "home.html"; // change to your page
    })
    .catch((error) => {
      console.error("Login error:", error.code, error.message);
      alert("Login error: " + error.message);
    });
}