import React from 'react';
import { useNavigate } from 'react-router-dom';
import monstersData from '../monsters.json';
import '../style.css';

const MonsterType = () => {
  const navigate = useNavigate();

  const handleStateChange = (monsterType) => {
    navigate(`/monsters/${monsterType}`);
  };

  return (
    <div>
      <div className="monster-container" aria-label="Monster Types">
        <h1>Monster Types</h1>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {Object.keys(monstersData.monsters).map((monsterType) => (
          <li key={monsterType} style={{ margin: '5px 0' }}>
            <button className="button" onClick={() => handleStateChange(monsterType)} aria-label={`View ${monsterType} Monsters`}>
              {monsterType}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MonsterType;