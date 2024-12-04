import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import withAuth from './withAuth'; 

const MonsterType = () => {
  const navigate = useNavigate();
  const [monsterTypes, setMonsterTypes] = useState([]);

  useEffect(() => {
    const fetchMonsterTypes = async () => {
      try {
        const docRef = doc(db, 'monsters', 'monsters');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const types = Object.keys(data);
          setMonsterTypes(types);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching monster types:", error);
      }
    };

    fetchMonsterTypes();
  }, []);

  const handleStateChange = (monsterType) => {
    navigate(`/monsters/${monsterType}`);
  };

  return (
    <div className="monster-container" aria-label="Monster Types">
      <h1>Monster Types</h1>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {monsterTypes.map((type) => (
          <li key={type} style={{ margin: '5px 0' }}>
            <button className="button" onClick={() => handleStateChange(type)} aria-label={`View ${type} Monsters`}>
              {type}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withAuth(MonsterType);