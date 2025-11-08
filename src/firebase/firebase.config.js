// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvZuFuYG-si0vR3fBTd16Lw5ZrdFfa5GU",
  authDomain: "social-events-59ee3.firebaseapp.com",
  projectId: "social-events-59ee3",
  storageBucket: "social-events-59ee3.firebasestorage.app",
  messagingSenderId: "512138194007",
  appId: "1:512138194007:web:4923176545f3fcfad64712",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
