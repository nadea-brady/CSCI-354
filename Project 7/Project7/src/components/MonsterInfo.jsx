import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import withAuth from './withAuth'; 
import '../style.css';

const MonsterInfo = () => {
  const { monsterType, monsterName } = useParams();
  const navigate = useNavigate();
  const [monster, setMonster] = useState(null);

  useEffect(() => {
    const fetchMonster = async () => {
      try {
        const docRef = doc(db, 'monsters', 'monsters');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const monsterList = data[monsterType] || [];
          const monsterData = monsterList.find(m => m.name === monsterName);
          setMonster(monsterData);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching monster details:", error);
      }
    };

    fetchMonster();
  }, [monsterType, monsterName]);

  if (!monster) {
    return <div aria-label="Monster Not Found">Monster not found</div>;
  }

  const handleBackClick = () => {
    navigate(`/monsters/${monsterType}`);
  };

  return (
    <div className="monster-info-container" aria-label={`${monster.name} Information`}>
      <h1>{monster.name}</h1>
      <img src={monster.image} alt={monster.name} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />

      <div className="monster-info-section" aria-label="Elemental Weakness">
        <h2>Elemental Weakness</h2>
        <ul>
          <li>{monster.weakness}</li>
        </ul>
      </div>

      <div className="monster-info-section" aria-label="Habitat">
        <h2>Habitat</h2>
        <ul>
          <li>{monster.habitat}</li>
        </ul>
      </div>

      <div className="monster-info-section" aria-label="Size">
        <h2>Size</h2>
        <ul>
          <li>{monster.size}</li>
        </ul>
      </div>

      <div className="monster-info-section" aria-label="HP Scaling">
        <h2>HP Scaling</h2>
        <ul>
          {monster.hpScaling.solo ? (
            <>
              <li>Solo: {monster.hpScaling.solo}</li>
              <li>Duo: {monster.hpScaling.duo}</li>
              <li>3-4 Players: {monster.hpScaling.threeOrFourPlayers}</li>
            </>
          ) : (
            <>
              <li>Low Rank:</li>
              <ul>
                <li>1 Player: {monster.hpScaling.lowRank["1Player"]}</li>
                <li>2 Players: {monster.hpScaling.lowRank["2Players"]}</li>
                <li>3-4 Players: {monster.hpScaling.lowRank["3-4Players"]}</li>
              </ul>
              <li>High Rank:</li>
              <ul>
                <li>1 Player: {monster.hpScaling.highRank["1Player"]}</li>
                <li>2 Players: {monster.hpScaling.highRank["2Players"]}</li>
                <li>3-4 Players: {monster.hpScaling.highRank["3-4Players"]}</li>
              </ul>
            </>
          )}
        </ul>
      </div>

      <div className="monster-info-section" aria-label="Elemental Resistances">
        <h2>Elemental Resistances</h2>
        <ul>
          <li>Fire: {monster.elementalResistance.fire}</li>
          <li>Water: {monster.elementalResistance.water}</li>
          <li>Thunder: {monster.elementalResistance.thunder}</li>
          <li>Ice: {monster.elementalResistance.ice}</li>
          <li>Dragon: {monster.elementalResistance.dragon}</li>
        </ul>
      </div>

      <div className="monster-info-section" aria-label="Attack Patterns">
        <h2>Attack Patterns</h2>
        <ul>
          {monster.attackPatterns.map(pattern => (
            <li key={pattern}>{pattern}</li>
          ))}
        </ul>
      </div>

      <div className="monster-info-section" aria-label="Gear Recommendations">
        <h2>Gear Recommendations</h2>
        <ul>
          <li>Recommended Weapon: {monster.gearRecommendations.recommendedWeapon.name} ({monster.gearRecommendations.recommendedWeapon.type}, {monster.gearRecommendations.recommendedWeapon.element})</li>
          <li>Alternative Weapons:
            <ul>
              {monster.gearRecommendations.alternativeWeapons.map(weapon => (
                <li key={weapon.name}>{weapon.name} ({weapon.type}, {weapon.element})</li>
              ))}
            </ul>
          </li>
          <li>Armor Set: {monster.gearRecommendations.armorSet}</li>
          <li>Suggested Items:
            <ul>
              {monster.gearRecommendations.suggestedItems.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      <button className="button" onClick={handleBackClick} aria-label={`Back to ${monsterType} Monsters`}>Back to {monsterType} Monsters</button>
    </div>
  );
};

export default withAuth(MonsterInfo);