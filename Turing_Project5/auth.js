import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { app } from './database.js';

const auth = getAuth(app);

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
  const navLoginSignup = document.getElementById('nav-login-signup');
  if (navLoginSignup) { // Ensure the element exists
    if (user) {
      // User is signed in, change to "Logout"
      navLoginSignup.textContent = 'Logout';
      navLoginSignup.onclick = (event) => {
        event.preventDefault(); // Prevent default link behavior
        signOut(auth).then(() => {
          // Sign-out successful, redirect or update UI
          window.location.href = 'index.html'; // Redirect to home page or login page
        }).catch((error) => {
          console.error('Sign out error:', error);
        });
      };
    } else {
      // No user is signed in, show "Login/Signup"
      navLoginSignup.textContent = 'Login/Signup';
      navLoginSignup.onclick = (event) => {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = 'login.html'; // Redirect to login/signup page
      };
    }
  }
});

// Handle Sign Up Form Submission
document.querySelector('#signup-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const errorDiv = document.getElementById('signup-error');

    // Clear previous error message
    errorDiv.textContent = '';

    if (password !== confirmPassword) {
      errorDiv.textContent = 'Passwords do not match';
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Redirect after successful signup
        const returnUrl = document.referrer.includes('monsters.html') ? 'monsters.html' : 'index.html';
        window.location.href = returnUrl;
      })
      .catch((error) => {
        errorDiv.textContent = error.message;
      });
});


// Handle Login Form Submission
document.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorDiv = document.getElementById('login-error');

    // Clear previous error message
    errorDiv.textContent = '';

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Redirect after successful login
        const returnUrl = document.referrer.includes('monsters.html') ? 'monsters.html' : 'index.html';
        window.location.href = returnUrl;
      })
      .catch((error) => {
        errorDiv.textContent = error.message;
      });
});