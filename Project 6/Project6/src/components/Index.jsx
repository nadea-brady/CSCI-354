import React from 'react';
import '../style.css';

function Index() {
  return (
    <div>
        <section id="about" aria-label="About Section">
          <h2>Welcome, Hunter!</h2>
          <p>
            Monster Hunter World presents a unique challenge to players who must gather information about monsters, resources, and gear. Monster Hunter World Planner consolidates this information and provides real-time recommendations for players based on their loadouts and the monsters they are hunting.
          </p>
        </section>

        <section id="features" aria-label="Features Section">
          <h2>Features</h2>
          <ul>
            <li>Consolidated monster data and gear recommendations</li>
            <li>Real-time loadout suggestions based on player input</li>
            <li>Access to monster weaknesses, resistances, and behaviors</li>
            <li>Helpful tips, drop rates, and crafting materials</li>
          </ul>
        </section>
    </div>
  );
}

export default Index;
