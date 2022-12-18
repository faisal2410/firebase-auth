// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqHAPj45KSMIDa5BzcYhwlxENAWbDlUJM",
  authDomain: "fir-authentication-6b0b5.firebaseapp.com",
  projectId: "fir-authentication-6b0b5",
  storageBucket: "fir-authentication-6b0b5.appspot.com",
  messagingSenderId: "395642442548",
  appId: "1:395642442548:web:0addf01edd9f64c6c9cb61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;