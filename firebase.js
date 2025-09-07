// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAM6Hl4leWZ_mUf8kiev93LY2oGsxPy_fg",
  authDomain: "cwfighters-a0313.firebaseapp.com",
  projectId: "cwfighters-a0313",
  storageBucket: "cwfighters-a0313.firebasestorage.app",
  messagingSenderId: "255543788632",
  appId: "1:255543632:web:a26e4ab5906e04abf5762d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function signUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => alert("Signed up!"))
    .catch(error => alert("Signup error: " + error.message));
}

export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => alert("Logged in!"))
    .catch(error => alert("Login error: " + error.message));
}