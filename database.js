<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getdatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDYhZOsb2vaSAHNpXZ7mFr-ZdKPzRf709Q",
    authDomain: "ktsdata-3ef2e.firebaseapp.com",
    databaseURL: "https://ktsdata-3ef2e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ktsdata-3ef2e",
    storageBucket: "ktsdata-3ef2e.appspot.com",
    messagingSenderId: "955870825357",
    appId: "1:955870825357:web:0bc2361f714b4008cd4bc4",
    measurementId: "G-6BX6XTWYS7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getdatabase(app);
  const analytics = getAnalytics(app);
  const auth = getAuth();
  
  signUp.addEventListener('click',(e)=> {
	  
	  var email = document.getElementById('email').value;
	  var password = document.getElementById('pass').value;
	  
	  
	  
	  
	  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
	alert('Success');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
	
	alert('errorMessage');
    // ..
  });
	  
	  
	  
  
</script>