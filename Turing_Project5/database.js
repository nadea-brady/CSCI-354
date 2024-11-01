
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPB6CS7skybezkU9207xd_Ks6bNzy51qM",
  authDomain: "cs-354.firebaseapp.com",
  projectId: "cs-354",
  storageBucket: "cs-354.appspot.com",
  messagingSenderId: "256832386546",
  appId: "1:256832386546:web:e0d6c11b066033f5aee76b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };