import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

function Rewards() {
    return (
        <div aria-label="Rewards List">
            <section id="great-jagras" aria-label="Great Jagras Rewards">
                <h2>Great Jagras</h2>
                <label><strong>Materials Dropped (Low Rank):</strong></label>
                <ul>
                    <li>Jagras Scale - 45%</li>
                    <li>Jagras Hide - 30%</li>
                    <li>Monster Bone S - 15%</li>
                    <li>Iron Ore - 10%</li>
                </ul>
                <label><strong>Materials Dropped (High Rank):</strong></label>
                <ul>
                    <li>Jagras Scale+ - 40%</li>
                    <li>Jagras Hide+ - 35%</li>
                    <li>Sharp Claw - 15%</li>
                    <li>Monster Bone M - 10%</li>
                </ul>
            </section>

            <section id="kulu-ya-ku" aria-label="Kulu-Ya-Ku Rewards">
                <h2>Kulu-Ya-Ku</h2>
                <label><strong>Materials Dropped (Low Rank):</strong></label>
                <ul>
                    <li>Kulu-Ya-Ku Plume - 40%</li>
                    <li>Kulu-Ya-Ku Hide - 35%</li>
                    <li>Monster Bone S - 15%</li>
                    <li>Iron Ore - 10%</li>
                </ul>
                <label><strong>Materials Dropped (High Rank):</strong></label>
                <ul>
                    <li>Kulu-Ya-Ku Plume+ - 35%</li>
                    <li>Kulu-Ya-Ku Hide+ - 30%</li>
                    <li>Beak and Sharp Claw - 20%</li>
                    <li>Monster Bone L - 15%</li>
                </ul>
            </section>

            <section id="anjanath" aria-label="Anjanath Rewards">
                <h2>Anjanath</h2>
                <label><strong>Materials Dropped (Low Rank):</strong></label>
                <ul>
                    <li>Anjanath Fang - 30%</li>
                    <li>Anjanath Pelt - 35%</li>
                    <li>Flame Sac - 20%</li>
                    <li>Monster Bone M - 15%</li>
                </ul>
                <label><strong>Materials Dropped (High Rank):</strong></label>
                <ul>
                    <li>Anjanath Fang+ - 35%</li>
                    <li>Anjanath Pelt+ - 30%</li>
                    <li>Inferno Sac - 20%</li>
                    <li>Monster Hardbone - 15%</li>
                </ul>
            </section>

            <section id="tobi-kadachi" aria-label="Tobi-Kadachi Rewards">
                <h2>Tobi-Kadachi</h2>
                <label><strong>Materials Dropped (Low Rank):</strong></label>
                <ul>
                    <li>Kadachi Scale - 40%</li>
                    <li>Kadachi Hide - 30%</li>
                    <li>Electro Sac - 20%</li>
                    <li>Monster Bone S - 10%</li>
                </ul>
                <label><strong>Materials Dropped (High Rank):</strong></label>
                <ul>
                    <li>Kadachi Scale+ - 35%</li>
                    <li>Kadachi Hide+ - 30%</li>
                    <li>Thunder Sac - 20%</li>
                    <li>Monster Bone M - 15%</li>
                </ul>
            </section>

            <section id="rathalos" aria-label="Rathalos Rewards">
                <h2>Rathalos</h2>
                <label><strong>Materials Dropped (Low Rank):</strong></label>
                <ul>
                    <li>Rathalos Scale - 35%</li>
                    <li>Rathalos Wing - 25%</li>
                    <li>Inferno Sac - 25%</li>
                    <li>Monster Bone L - 15%</li>
                </ul>
                <label><strong>Materials Dropped (High Rank):</strong></label>
                <ul>
                    <li>Rathalos Scale+ - 35%</li>
                    <li>Rathalos Wing+ - 25%</li>
                    <li>Rathalos Ruby - 20%</li>
                    <li>Monster Hardbone - 15%</li>
                </ul>
            </section>

            <section id="rathian" aria-label="Rathian Rewards">
                <h2>Rathian</h2>
                <label><strong>Materials Dropped (Low Rank):</strong></label>
                <ul>
                    <li>Rathian Scale - 40%</li>
                    <li>Rathian Shell - 30%</li>
                    <li>Poison Sac - 20%</li>
                    <li>Monster Bone M - 10%</li>
                </ul>
                <label><strong>Materials Dropped (High Rank):</strong></label>
                <ul>
                    <li>Rathian Scale+ - 35%</li>
                    <li>Rathian Carapace - 30%</li>
                    <li>Rathian Ruby - 20%</li>
                    <li>Monster Hardbone - 15%</li>
                </ul>
            </section>

            <section id="barroth" aria-label="Barroth Rewards">
                <h2>Barroth</h2>
                <label><strong>Materials Dropped (Low Rank):</strong></label>
                <ul>
                    <li>Barroth Shell - 40%</li>
                    <li>Barroth Ridge - 30%</li>
                    <li>Fertile Mud - 20%</li>
                    <li>Monster Bone M - 10%</li>
                </ul>
                <label><strong>Materials Dropped (High Rank):</strong></label>
                <ul>
                    <li>Barroth Carapace - 35%</li>
                    <li>Barroth Ridge+ - 30%</li>
                    <li>Fertile Mud+ - 20%</li>
                    <li>Monster Hardbone - 15%</li>
                </ul>
            </section>

            <section id="diablos" aria-label="Diablos Rewards">
                <h2>Diablos</h2>
                <label><strong>Materials Dropped (Low Rank):</strong></label>
                <ul>
                    <li>Diablos Fang - 30%</li>
                    <li>Diablos Ridge - 35%</li>
                    <li>Blos Medulla - 20%</li>
                    <li>Monster Bone L - 15%</li>
                </ul>
                <label><strong>Materials Dropped (High Rank):</strong></label>
                <ul>
                    <li>Diablos Fang+ - 35%</li>
                    <li>Diablos Ridge+ - 30%</li>
                    <li>Blos Medulla - 20%</li>
                    <li>Monster Hardbone - 15%</li>
                </ul>
            </section>

            <section id="zinogre" aria-label="Zinogre Rewards">
                <h2>Zinogre</h2>
                <label><strong>Materials Dropped (Low Rank):</strong></label>
                <ul>
                    <li>Zinogre Electrofur - 40%</li>
                    <li>Zinogre Shell - 30%</li>
                    <li>Electro Sac - 20%</li>
                    <li>Monster Bone L - 10%</li>
                </ul>
                <label><strong>Materials Dropped (High Rank):</strong></label>
                <ul>
                    <li>Zinogre Electrofur+ - 35%</li>
                    <li>Zinogre Carapace - 30%</li>
                    <li>Lightning Sac - 20%</li>
                    <li>Monster Hardbone - 15%</li>
                </ul>
            </section>

            <section id="nergigante" aria-label="Nergigante Rewards">
                <h2>Nergigante</h2>
                <label><strong>Materials Dropped (Low Rank):</strong></label>
                <ul>
                    <li>Nergigante Carapace - 30%</li>
                    <li>Nergigante Talon - 25%</li>
                    <li>Elder Dragon Bone - 25%</li>
                    <li>Monster Hardbone - 20%</li>
                </ul>
                <label><strong>Materials Dropped (High Rank):</strong></label>
                <ul>
                    <li>Nergigante Regrowth Plate - 25%</li>
                    <li>Nergigante Talon+ - 25%</li>
                    <li>Elder Dragon Blood - 30%</li>
                    <li>Monster Hardbone - 20%</li>
                </ul>
            </section>

            <section id="zorah-magdaros" aria-label="Zorah Magdaros Rewards">
                <h2>Zorah Magdaros</h2>
                <label><strong>Materials Dropped (Low Rank):</strong></label>
                <ul>
                    <li>Zorah Magdaros Heat Scale - 35%</li>
                    <li>Zorah Magdaros Magma - 25%</li>
                    <li>Elder Dragon Bone - 25%</li>
                    <li>Dragonite Ore - 15%</li>
                </ul>
                <label><strong>Materials Dropped (High Rank):</strong></label>
                <ul>
                    <li>Zorah Magdaros Heat Scale+ - 35%</li>
                    <li>Zorah Magdaros Ridge+ - 25%</li>
                    <li>Elder Dragon Blood - 25%</li>
                    <li>Firecell Stone - 15%</li>
                </ul>
            </section>

            <p><cite>Data from: Monster Hunter World Official Wiki and Capcom.</cite></p>
        </div>
    );
}

export default Rewards;