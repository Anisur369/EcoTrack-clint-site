// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi5CDZOOI8XU7sXUe-qKV-jLRYjq_atD8",
  authDomain: "ecotrack-d394f.firebaseapp.com",
  projectId: "ecotrack-d394f",
  storageBucket: "ecotrack-d394f.firebasestorage.app",
  messagingSenderId: "450098089205",
  appId: "1:450098089205:web:d31ddc7477c7b13f2dc9bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;