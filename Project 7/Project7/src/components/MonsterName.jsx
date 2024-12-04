import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import withAuth from './withAuth'; 
import '../style.css';

const MonsterName = () => {
  const { monsterType } = useParams();
  const navigate = useNavigate();
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const docRef = doc(db, 'monsters', 'monsters');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const monsterList = data[monsterType] || [];
          setMonsters(monsterList);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching monsters:", error);
      }
    };

    fetchMonsters();
  }, [monsterType]);

  const handleMonsterClick = (monsterName) => {
    navigate(`/monsters/${monsterType}/${monsterName}`);
  };

  const handleBackToTypesClick = () => {
    navigate('/monsters');
  };

  return (
    <div>
      <div className="monster-container" aria-label={`${monsterType} Monsters`}>
        <h1>{monsterType} Monsters</h1>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {monsters.map((monster) => (
          <li key={monster.name} style={{ margin: '5px 0' }}>
            <button className="button" onClick={() => handleMonsterClick(monster.name)} aria-label={`View ${monster.name}`}>
              {monster.name}
            </button>
          </li>
        ))}
      </ul>
      <button className="button" onClick={handleBackToTypesClick} aria-label="Back to Monster Types">Back to Monster Types</button>
    </div>
  );
};

export default withAuth(MonsterName);