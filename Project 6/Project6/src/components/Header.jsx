import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Header = () => {
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
                </ul>
            </nav>
        </header>
    );
};

export default Header;