import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

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
let signUpButton = document.getElementById("signUp");
signUpButton.addEventListener("click", (e) => {
  e.preventDefault();

  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var name = document.getElementById("name");
  var number = document.getElementById("number");
  var address = document.getElementById("address");
  var intake = document.getElementById("intake");
  var position = document.getElementById("position");

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log("user", user.email);
      const emailName = email.value.split("@")[0];
      set(ref(database, "Users/" + emailName), {
        Email: email.value,
        Password: password.value,
        Name: name.value,
        ContactNumber: number.value,
        Address: address.value,
        Intake: intake.value,
        position: position.value,
      })
        .then(() => {
          alert("Data added successfully");
          window.location.replace("../loginForm/login.html");
        })
        .catch((error) => {
          alert(error);
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error code", errorCode);
      console.log("error Message", errorMessage);
      alert(errorMessage)
    });
});