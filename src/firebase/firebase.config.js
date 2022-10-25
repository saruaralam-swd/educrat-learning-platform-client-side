// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1J7ul4JZ5VuNQwbvCUT0uCPDMlZAK2y8",
  authDomain: "learning-platform-client-f6cbc.firebaseapp.com",
  projectId: "learning-platform-client-f6cbc",
  storageBucket: "learning-platform-client-f6cbc.appspot.com",
  messagingSenderId: "612936496782",
  appId: "1:612936496782:web:7c371a7368132683893bdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;