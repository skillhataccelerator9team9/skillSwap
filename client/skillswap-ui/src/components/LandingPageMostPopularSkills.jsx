

import React, { useState } from 'react';
import '../styles/LandingPageMostPolularSkillsStyle.css';
import { FaHeart } from 'react-icons/fa';
import popular1 from '../assets/popular1.png';
import popular2 from '../assets/popular2.png';
import popular3 from '../assets/popular3.png';
import popular4 from '../assets/popular4.png';


const skillsData = {
  Popular: [
    { name: 'John Doe', skill: 'Photographer', city: 'New York', coins: 40, image: popular1 },
    { name: 'Jane Smith', skill: 'Carpentry', city: 'Toronto', coins: 45, image: popular2 },
    { name: 'Alice Johnson', skill: 'Electrical', city: 'Vancouver', coins: 140, image: popular3 },
    { name: 'Mark Lee', skill: 'Painting', city: 'San Francisco', coins: 302, image: popular4 }
  ],
  Tech: [
    { name: 'David Clark', skill: 'Coding', city: 'Austin', coins: 30, image: popular4 },
    { name: 'Sophia White', skill: 'Web Development', city: 'Chicago', coins: 350, image: popular3 },
    { name: 'Mason Green', skill: 'Cybersecurity', city: 'Boston', coins: 400, image: popular2 },
    { name: 'Eva Brown', skill: 'Cloud Engineering', city: 'Seattle', coins: 450, image: popular1 }
  ],
  Cleaning: [
    { name: 'Jacob Wilson', skill: 'House Cleaning', city: 'Miami', coins: 500, image: popular3 },
    { name: 'Olivia Martinez', skill: 'Window Cleaning', city: 'Dallas', coins: 550, image: popular2 },
    { name: 'Emily Harris', skill: 'Carpet Cleaning', city: 'Denver', coins: 600, image: popular4 },
    { name: 'Michael Young', skill: 'Office Cleaning', city: 'Las Vegas', coins: 650, image: popular1 }
  ],
  DayCare: [
    { name: 'Amelia King', skill: 'Child Care', city: 'Los Angeles', coins: 700, image: popular4 },
    { name: 'Liam Scott', skill: 'Elderly Care', city: 'Phoenix', coins: 750, image: popular1 },
    { name: 'Charlotte Adams', skill: 'Pet Care', city: 'Houston', coins: 800, image: popular2 },
    { name: 'Benjamin Hall', skill: 'Baby Sitting', city: 'Orlando', coins: 850, image: popular3 }
  ]
};

const LandingPageMostPolpularSkills = () => {
  const [activeTab, setActiveTab] = useState('Popular');

  return (
    <div className="mostPopularSkills">
      <h1>Most Popular Skills</h1>
      <p>Lorem ipsum dolor sit amet consectetur. Mattis eu etiam nec facilisis aenean quam quis eu nunc.</p>

      <div className="tabs">
        {Object.keys(skillsData).map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="cardsContainer">
        {skillsData[activeTab].map((person, index) => (
          <div className="card" key={index}>
            <div className="cardContent">
              {/* Display the person's image */}
              <img src={person.image} alt={`${person.name}'s profile`} className="imageLayout" />

              {/* Person Info */}
              <div className="personInfo">
                <p className="name">{person.name}</p>
                <p className="skill">{person.skill}</p>
                <p className="city">{person.city}</p>
              </div>

              {/* Coins at the bottom-left */}
              <div className="coinIcon">
                {person.coins} coins
              </div>

              {/* Heart Icon in the top-right corner */}
              <FaHeart className="heartIcon" />

              {/* Join Us Button in the bottom-right corner */}
              <button className="joinUsButton">Join Us</button>
            </div>
          </div>
        ))}
      </div>

      {/* Join Us Button and Skills Text outside of the cards */}
      <div className="footerSection">
        <button className="centerButton">Contact Us</button>
        <p className="skillsCount">120 skills</p>
      </div>

    </div>
  );
};

export default LandingPageMostPolpularSkills;
