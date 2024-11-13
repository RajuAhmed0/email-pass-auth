// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZFzFtHH0giaQoiZeYGG2RG1Ysj07d6e0",
  authDomain: "login-form-6f503.firebaseapp.com",
  projectId: "login-form-6f503",
  storageBucket: "login-form-6f503.firebasestorage.app",
  messagingSenderId: "228478071671",
  appId: "1:228478071671:web:20c5e212b469d0a80ae772"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;