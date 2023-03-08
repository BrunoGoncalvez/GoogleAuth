// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyZGHo3vWTf3zx5zmlf2_9IWbCMVgjMF8",
  authDomain: "animoauth.firebaseapp.com",
  projectId: "animoauth",
  storageBucket: "animoauth.appspot.com",
  messagingSenderId: "870619079945",
  appId: "1:870619079945:web:e1e48d8947b3d868305fd8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');