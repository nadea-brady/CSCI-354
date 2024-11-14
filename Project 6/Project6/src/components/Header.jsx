import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Header = () => {
    return (
        <header>
            <h1>Monster Hunter World Planner</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/quests">Quests</Link></li>
                    <li><Link to="/rewards">Rewards</Link></li>
                    <li><Link to="/monsters">Monsters</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;