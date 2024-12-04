import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/Index.jsx';
import About from './components/About.jsx';
import Quests from './components/Quests.jsx';
import Rewards from './components/Rewards.jsx';
import MonsterType from './components/MonsterType.jsx';
import MonsterName from './components/MonsterName.jsx';
import MonsterInfo from './components/MonsterInfo.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AuthPage from './components/AuthPage.jsx'; // Import the new component
import './style.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/quests" element={<Quests />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/monsters" element={<MonsterType />} />
          <Route path="/monsters/:monsterType" element={<MonsterName />} />
          <Route path="/monsters/:monsterType/:monsterName" element={<MonsterInfo />} />
          <Route path="/auth" element={<AuthPage />} /> {/* Added route for AuthPage */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
export default App;