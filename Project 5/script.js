// Fetch the monsters data from the monsters.json file
fetch('monsters.json')
    .then(response => response.json())
    .then(data => {
        const monsterTypes = Object.keys(data.monsters); // Get monster types from the structure
        createMonsterTypeButtons(data.monsters, monsterTypes); // Pass data for further handling
    })
    .catch(error => {
        console.error('Error loading monster data:', error);
        displayError('Failed to load monster data.');
    });

// Step 1: Create buttons for Monster Types
function createMonsterTypeButtons(monstersData, monsterTypes) {
    const monsterTypeButtonsContainer = document.getElementById('monster-type-buttons');
    monsterTypeButtonsContainer.innerHTML = ''; // Clear any existing buttons

    monsterTypes.forEach(type => {
        // Create a button for each monster type
        const button = document.createElement('button');
        button.textContent = type;  // e.g., "FlyingWyverns"
        
        // Add event listener to show specific monsters when type is selected
        button.addEventListener('click', function() {
            createMonsterButtons(monstersData[type]); // Pass type-specific data to function
        });

        monsterTypeButtonsContainer.appendChild(button);
    });
}

// Step 2: Create buttons for specific monsters based on the selected type
function createMonsterButtons(monsters) {
    const monsterButtonsContainer = document.getElementById('monster-buttons');
    monsterButtonsContainer.innerHTML = ''; // Clear previous buttons

    monsters.forEach(monster => {
        // Create a button for each monster
        const button = document.createElement('button');
        button.textContent = monster.name;  // e.g., "Rathalos"

        // Add event listener to display monster details when clicked
        button.addEventListener('click', function() {
            displayMonsterDetails(monster);
        });

        monsterButtonsContainer.appendChild(button);
    });
}

// Function to display monster details
function displayMonsterDetails(monster) {
    const detailsSection = document.getElementById('monster-details');
    detailsSection.innerHTML = ` 
        <h2>${monster.name}</h2>
        <img src="${monster.image}" alt="${monster.name}" style="max-width: 100%; height: auto; border-radius: 8px;">
        <ul>
            <li><strong>Elemental Weakness:</strong> ${monster.weakness}</li>
            <li><strong>HP:</strong>
                <ul>
                    ${monster.hpScaling.solo ? `
                        <li>Solo: ${monster.hpScaling.solo}</li>
                        <li>Duo: ${monster.hpScaling.duo}</li>
                        <li>3-4 Players: ${monster.hpScaling.threeOrFourPlayers}</li>
                    ` : `
                        <li>Low Rank:</li>
                        <ul>
                            <li>1 Player: ${monster.hpScaling.lowRank["1Player"]}</li>
                            <li>2 Players: ${monster.hpScaling.lowRank["2Players"]}</li>
                            <li>3-4 Players: ${monster.hpScaling.lowRank["3-4Players"]}</li>
                        </ul>
                        <li>High Rank:</li>
                        <ul>
                            <li>1 Player: ${monster.hpScaling.highRank["1Player"]}</li>
                            <li>2 Players: ${monster.hpScaling.highRank["2Players"]}</li>
                            <li>3-4 Players: ${monster.hpScaling.highRank["3-4Players"]}</li>
                        </ul>
                    `}
                </ul>
            </li>
            <li><strong>Habitat:</strong> ${monster.habitat}</li>
            <li><strong>Size:</strong> ${monster.size}</li>
        </ul>
        <h3>Elemental Resistances</h3>
        <ul>
            <li>Fire: ${monster.elementalResistance.fire}</li>
            <li>Water: ${monster.elementalResistance.water}</li>
            <li>Thunder: ${monster.elementalResistance.thunder}</li>
            <li>Ice: ${monster.elementalResistance.ice}</li>
            <li>Dragon: ${monster.elementalResistance.dragon}</li>
        </ul>
        <h3>Attack Patterns</h3>
        <ul>
            ${monster.attackPatterns.map(pattern => `<li>${pattern}</li>`).join('')}
        </ul>
        <h3>Gear Recommendations</h3>
        <ul>
            <li><strong>Recommended Weapon:</strong> ${monster.gearRecommendations.recommendedWeapon.name} (${monster.gearRecommendations.recommendedWeapon.type}, ${monster.gearRecommendations.recommendedWeapon.element})</li>
            <li><strong>Alternative Weapons:</strong>
                <ul>
                    ${monster.gearRecommendations.alternativeWeapons.map(weapon => `<li>${weapon.name} (${weapon.type}, ${weapon.element})</li>`).join('')}
                </ul>
            </li>
            <li><strong>Armor Set:</strong> ${monster.gearRecommendations.armorSet}</li>
            <li><strong>Suggested Items:</strong> ${monster.gearRecommendations.suggestedItems.join(', ')}</li>
        </ul>
    `;
}

// Function to display an error message
function displayError(message) {
    const errorMessage = document.getElementById('monster-details');
    errorMessage.textContent = message;
}
