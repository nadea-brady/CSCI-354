// Listen for changes in the monster dropdown
document.getElementById('monster-select').addEventListener('change', function() {
    const monsterName = this.value;
    if (monsterName !== '') {
        fetch('monster.json')
            .then(response => response.json())
            .then(data => {
                const monster = data.monsters.find(mon => mon.name === monsterName);
                if (monster) {
                    displayMonsterDetails(monster);
                    displayGear(monster.gear);
                } else {
                    displayError('No data found for the selected monster.');
                }
            })
            .catch(error => {
                console.error('Error loading monster data:', error);
                displayError('Failed to load data.');
            });
    } else {
        // Clear details and gear if no monster is selected
        document.getElementById('monster-details').innerHTML = '';
        document.getElementById('gear-list').innerHTML = '';
    }
});

// Display monster details with all selected monster info and best weapon and gear from monster
function displayMonsterDetails(monster) {
    const detailsSection = document.getElementById('monster-details');
    detailsSection.innerHTML = `
        <h2>${monster.name}</h2>
        <img src="${monster.image}" alt="${monster.name}" style="max-width: 100%; height: auto; border-radius: 8px;">
        <ul>
            <li><strong>Monsters Type:</strong> ${monster.monsterType}</li>
            <li><strong>Weakness:</strong> ${monster.weakness}</li>
            <li><strong>HP:</strong> ${monster.hp}</li>
            <li><strong>Size:</strong> ${monster.size}</li>
            <li><strong>Habitat:</strong> ${monster.habitat}</li>
            <li><strong>Best Weapon Type:</strong> ${monster.gearRecommendations.bestWeaponType}</li>
            <li><strong>Elemental Resistance:</strong>
                <ul>
                    <li>Fire: ${monster.elementalResistance.fire}</li>
                    <li>Water: ${monster.elementalResistance.water}</li>
                    <li>Thunder: ${monster.elementalResistance.thunder}</li>
                    <li>Ice: ${monster.elementalResistance.ice}</li>
                    <li>Dragon: ${monster.elementalResistance.dragon}</li>
                </ul>
            </li>
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
            <li><strong>Craftable Armor Set:</strong> ${monster.gearRecommendations.armorSet}</li>
            <li><strong>Suggested Items:</strong> ${monster.gearRecommendations.suggestedItems.join(', ')}</li>
        </ul>
    `;
}


// Display gear options for the selected monster
function displayGear(gear) {
    const gearList = document.getElementById('gear-list');
    gearList.innerHTML = ''; // Clear existing gear
    gear.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Type: ${item.type}, Attack: ${item.attack}, Element: ${item.element}`;
        gearList.appendChild(li);
    });
}

// Display an error message
function displayError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
}
