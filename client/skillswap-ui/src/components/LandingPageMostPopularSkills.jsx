

import React, { useState } from 'react';
import '../styles/LandingPageMostPolularSkillsStyle.css';
import { FaHeart } from 'react-icons/fa';
import personImage from '../assets/BannerPhoto.jpeg';

const skillsData = {
  Popular: [
    { name: 'John Doe', skill: 'Plumbing', city: 'New York', coins: 100 },
    { name: 'Jane Smith', skill: 'Carpentry', city: 'Toronto', coins: 150 },
    { name: 'Alice Johnson', skill: 'Electrical', city: 'Vancouver', coins: 200 },
    { name: 'Mark Lee', skill: 'Painting', city: 'San Francisco', coins: 250 }
  ],
  Tech: [
    { name: 'David Clark', skill: 'Coding', city: 'Austin', coins: 300 },
    { name: 'Sophia White', skill: 'Web Development', city: 'Chicago', coins: 350 },
    { name: 'Mason Green', skill: 'Cybersecurity', city: 'Boston', coins: 400 },
    { name: 'Eva Brown', skill: 'Cloud Engineering', city: 'Seattle', coins: 450 }
  ],
  Cleaning: [
    { name: 'Jacob Wilson', skill: 'House Cleaning', city: 'Miami', coins: 500 },
    { name: 'Olivia Martinez', skill: 'Window Cleaning', city: 'Dallas', coins: 550 },
    { name: 'Emily Harris', skill: 'Carpet Cleaning', city: 'Denver', coins: 600 },
    { name: 'Michael Young', skill: 'Office Cleaning', city: 'Las Vegas', coins: 650 }
  ],
  DayCare: [
    { name: 'Amelia King', skill: 'Child Care', city: 'Los Angeles', coins: 700 },
    { name: 'Liam Scott', skill: 'Elderly Care', city: 'Phoenix', coins: 750 },
    { name: 'Charlotte Adams', skill: 'Pet Care', city: 'Houston', coins: 800 },
    { name: 'Benjamin Hall', skill: 'Baby Sitting', city: 'Orlando', coins: 850 }
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
        <button className="centerButton">Join Us</button>
        <p className="skillsCount">120 skills</p>
      </div>

    </div>
  );
};

export default LandingPageMostPolpularSkills;
