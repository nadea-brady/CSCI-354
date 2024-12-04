  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
  import '../style.css';

  const AuthPage = () => {
    const [activeForm, setActiveForm] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
    const navigate = useNavigate(); // Initialize the navigate function

    const auth = getAuth();

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful!');
        navigate('/monsters'); // Redirect to MonsterType page
      } catch (err) {
        setMessage(err.message);
      }
    };

    const handleSignup = async (e) => {
      e.preventDefault();
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Signup successful!');
        navigate('/monsters'); // Redirect to MonsterType page
      } catch (err) {
        setMessage(err.message);
      }
    };

    const handleForgotPassword = async (e) => {
      e.preventDefault();
      try {
        await sendPasswordResetEmail(auth, email);
        setMessage('Password reset email sent!');
      } catch (err) {
        setMessage(err.message);
      }
    };

    return (
      <div>
        <h2>Logging In? Click Here!</h2>
        <div>
          <button onClick={() => setActiveForm('login')}>Login</button>
          <h2>Signing Up? Click Here!</h2>
          <button onClick={() => setActiveForm('signup')}>Signup</button>
          <h2>Forgot Your Password? Click Here!</h2>
          <button onClick={() => setActiveForm('forgotPassword')}>Forgot Password</button>
        </div>
        {message && <p>{message}</p>}
        {activeForm === 'login' && (
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        )}
        {activeForm === 'signup' && (
          <form onSubmit={handleSignup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Signup</button>
          </form>
        )}
        {activeForm === 'forgotPassword' && (
          <form onSubmit={handleForgotPassword}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Send Reset Email</button>
          </form>
        )}
      </div>
    );
  };

  export default AuthPage;