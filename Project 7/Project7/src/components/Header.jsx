import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import '../style.css';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert('Sign-out successful!');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header aria-label="Main Header">
      <h1>Monster Hunter World Planner</h1>
      <nav aria-label="Main Navigation">
        <ul>
          <li><Link to="/" aria-label="Home">Home</Link></li>
          <li><Link to="/about" aria-label="About">About</Link></li>
          <li><Link to="/quests" aria-label="Quests">Quests</Link></li>
          <li><Link to="/rewards" aria-label="Rewards">Rewards</Link></li>
          <li><Link to="/monsters" aria-label="Monsters">Monsters</Link></li>
          {!isAuthenticated && <li><Link to="/auth" aria-label="Signup/Login">Signup/Login</Link></li>}
          {isAuthenticated && <li><button onClick={handleSignOut} aria-label="Sign Out">Sign Out</button></li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;