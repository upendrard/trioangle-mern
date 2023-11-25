// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "upendra-estate.firebaseapp.com",
  projectId: "upendra-estate",
  storageBucket: "upendra-estate.appspot.com",
  messagingSenderId: "406610467672",
  appId: "1:406610467672:web:fec9aa933a045346e8632d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);