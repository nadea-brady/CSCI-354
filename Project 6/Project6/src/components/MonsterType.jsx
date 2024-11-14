import React from 'react';
import { useNavigate } from 'react-router-dom';
import monsters from '../monsters.json';

const MonsterType = () => {
  const navigate = useNavigate();

  const handleStateChange = (monsterType) => {
    navigate(`/monsters/${monsterType}`);
  };

  return (
    <div>
      <h1>Monster Types</h1>
      <ul>
        {Object.keys(monsters).map((monsterType) => (
          <li key={monsterType}>
            <button onClick={() => handleStateChange(monsterType)}>
              {monsterType}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
  }

  export default MonsterType;
