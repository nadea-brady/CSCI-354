import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

function About() {
    return (
        <div aria-label="About Page">
            <section id="about" aria-label="Project Overview">
                <h2>Project Overview</h2>
                <p>The <strong>Monster Hunter World Planner</strong> is an interactive web application designed for players of the popular game <strong>Monster Hunter World</strong>. This planner allows players to easily track and organize their monster hunts, gear, and quests in one centralized location.</p>
            </section>

            <section id="features" aria-label="Features">
                <h2>Features</h2>
                <ul>
                    <li><strong>Monster Information:</strong> Comprehensive details about large monsters, including weaknesses, habitats, and health points (HP).</li>
                    <li><strong>Gear Recommendations:</strong> Suggested weapons and armor sets tailored to each monster, helping players optimize their loadouts for hunts.</li>
                    <li><strong>Interactive Navigation:</strong> Easily accessible navigation to move between sections of the app, including quests and rewards.</li>
                    <li><strong>Responsive Design:</strong> The application is designed to be user-friendly and accessible on various devices.</li>
                </ul>
            </section>

            <section id="future-enhancements" aria-label="Future Enhancements">
                <h2>Future Enhancements</h2>
                <p>In future updates, we plan to include:</p>
                <ul>
                    <li>Integration of a user login system for personalized experience.</li>
                    <li>Ability to track and save gear setups and monster hunts.</li>
                    <li>Dynamic data updates for monster stats and gear based on game patches.</li>
                </ul>
            </section>

            <section id="contact" aria-label="Contact Information">
                <h2>Contact</h2>
                <p>For any inquiries or support, please contact us at <Link to="/contact" aria-label="Contact Page">contact@monsterhunterworldplanner.com</Link>.</p>
            </section>
        </div>
    );
}

export default About;