import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYhZOsb2vaSAHNpXZ7mFr-ZdKPzRf709Q",
  authDomain: "ktsdata-3ef2e.firebaseapp.com",
  databaseURL:
    "https://ktsdata-3ef2e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ktsdata-3ef2e",
  storageBucket: "ktsdata-3ef2e.appspot.com",
  messagingSenderId: "955870825357",
  appId: "1:955870825357:web:0bc2361f714b4008cd4bc4",
  measurementId: "G-6BX6XTWYS7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

// Signup Function
let logButton = document.getElementById("login");
logButton.addEventListener("click", (e) => {
  e.preventDefault();

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  console.log(email.value, password.value);
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // location.reload();
      // Signed in
      var user = userCredential.user;
      console.log("user", user.email);
      alert("login works");
      window.location.replace("../BookingSystem/index.html");
    })
    .catch((error) => {
      var errorMessage = error.message;
      alert(errorMessage);
    });
});

// let create = document.getElementById("create");
// create.addEventListener("click", (e) => {
//   //window.location.replace("../signupForm/Signup.html");
// });