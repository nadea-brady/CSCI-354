import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';
  
  // Initialize Firebase with config from database.js
  import { app } from './database.js';
  const auth = getAuth(app);
  
  // Handle Sign Up
  document.getElementById('signup-button').addEventListener('click', () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Check if user came from a specific page
        const returnUrl = document.referrer.includes('monsters.html') ? 
          'dive-sites.html' : 'index.html';
        window.location.href = returnUrl;
      })
      .catch((error) => {
        alert(error.message);
      });
  });
  
  // Handle Login
  document.getElementById('login-button').addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Check if user came from a specific page
        const returnUrl = document.referrer.includes('monster-sites.html') ? 
          'dive-sites.html' : 'index.html';
        window.location.href = returnUrl;
      })
      .catch((error) => {
        alert(error.message);
      });
  });
  