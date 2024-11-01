import { React, useState, useEffect } from 'react';
import '../styles/MainDashboardStyle.css';
import backgroundImage from '../assets/dashboard2.png';
import tips_articles from '../assets/dashboard3.png';
import { FaCheckCircle } from 'react-icons/fa';
import { GrInProgress } from "react-icons/gr";
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import { PiCoins } from "react-icons/pi";
import customer1 from '../assets/dashboard1.png'
import { useUser } from './UserContext';

const MainDashboard = () => {

  const { userData } = useUser();

  const [userName, setUserName] = useState('');
  const [userPoints, setUserPoints] = useState('');


  useEffect(() => {

    setUserName(userData.user?.username);
    setUserPoints(userData.user?.points);

  }, []);


  return (
    <div className="dashboard">
      {/* Greeting */}
      <div className="greeting">Hello {userName || 'User'}!</div>

      {/* Coin Balance Section */}
      <div className="coin-balance">
        <span>Coin Balance</span>
        <div className="coin-info">
          <span className="coin-amount">{userPoints || '$$'}!</span>
          <PiCoins className="coin-icon" />
        </div>
      </div>

      {/* Stats Frame */}
      <div className="stats-frame">
        <div className="stat-section completed-task">
          <div className="stat-icon">
            <FaCheckCircle className="icon" />
          </div>
          <div className="stat-details">
            <span className="stat-title">Completed Task</span>
            <span className="stat-number">16</span>
          </div>
        </div>

        <div className="stat-section in-progress-task">
          <div className="stat-icon">
            <GrInProgress className="icon" />
          </div>
          <div className="stat-details">
            <span className="stat-title">Tasks in Progress</span>
            <span className="stat-number">8</span>
          </div>
        </div>
        <div className="stat-section incoming-request">
          <div className="stat-icon">
            <HiMiniArrowRightEndOnRectangle className="icon" />
          </div>
          <div className="stat-details">
            <span className="stat-title">Incoming Requests</span>
            <span className="stat-number">4</span>
          </div>
        </div>
        <div className="stat-section outgoing-request">
          <div className="stat-icon">
            <HiMiniArrowRightOnRectangle className="icon" />
          </div>
          <div className="stat-details">
            <span className="stat-title">Outgoing Requests</span>
            <span className="stat-number">28</span>
          </div>
        </div>
      </div>


      <div
        className="offer-services"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="offer-overlay"></div> {/* Gradient overlay div */}
        <div className="offer-text">
          Give your credit card a break! Instead, pay for services with your skills
        </div>
        <button className="offer-button">Offer Service</button>
      </div>

      {/* Trending Skills Section */}
      <div className="trending-skills">
        <h3 className="trending-title">Trending Skills</h3>
        <div className="skills-list">
          <div className="skill-item">Arts</div>
          <div className="skill-item">Cooking</div>
          <div className="skill-item">HR</div>
          <div className="skill-item">IT</div>
          <div className="skill-item">Writing</div>
          <div className="skill-item">Plumbing</div>
          <div className="skill-item">Cleaning</div>
          <div className="skill-item">Music</div>
          <div className="skill-item">Technician</div>
          <div className="skill-item">Snow Removal</div>
          <div className="skill-item">Math Teacher</div>
        </div>
      </div>

      {/* Top Skilltopians Section */}
      <div className="top-skilltopians">
        <h3 className="top-skilltopians-title">Top Skilltopians</h3>
        <div className="skilltopians-list">
          <div className="skilltopian-card">
            <div className="person-photo">
              <img src={customer1} alt="User" className="photo-circle" />
            </div>
            <div className="person-info">
              <span className="person-name">Andrew Peters</span>
              <span className="person-skill">Product Designer</span>
              <button className="view-profile-btn">View Profile</button>
            </div>
          </div>
          <div className="skilltopian-card">
            <div className="person-photo">
              <img src={customer1} alt="User" className="photo-circle" />
            </div>
            <div className="person-info">
              <span className="person-name">Andrew Peters</span>
              <span className="person-skill">Product Designer</span>
              <button className="view-profile-btn">View Profile</button>
            </div>
          </div>
          <div className="skilltopian-card">
            <div className="person-photo">
              <img src={customer1} alt="User" className="photo-circle" />
            </div>
            <div className="person-info">
              <span className="person-name">Andrew Peters</span>
              <span className="person-skill">Product Designer</span>
              <button className="view-profile-btn">View Profile</button>
            </div>
          </div>
          <div className="skilltopian-card">
            <div className="person-photo">
              <img src={customer1} alt="User" className="photo-circle" />
            </div>
            <div className="person-info">
              <span className="person-name">Andrew Peters</span>
              <span className="person-skill">Product Designer</span>
              <button className="view-profile-btn">View Profile</button>
            </div>
          </div>
          <div className="skilltopian-card">
            <div className="person-photo">
              <img src={customer1} alt="User" className="photo-circle" />
            </div>
            <div className="person-info">
              <span className="person-name">Andrew Peters</span>
              <span className="person-skill">Product Designer</span>
              <button className="view-profile-btn">View Profile</button>
            </div>
          </div>
        </div>
      </div>

      <div className="tips-articles">
        {/* Tips and Articles Heading */}
        <h3 className="tips-heading">Tips and Articles</h3>

        {/* Photo Frame with Background Image, Gradient, and Text */}

        <div className="tips-articles-list">
          <div className="photo-frame" style={{ backgroundImage: `url(${tips_articles})` }}>
            <div className="photo-gradient">
              <h4 className="photo-heading">Product Design</h4>
              <p className="photo-description">
                The world of product design is changing, and you need to work hard to achieve success.
              </p>
            </div>
          </div>

          <div className="photo-frame" style={{ backgroundImage: `url(${tips_articles})` }}>
            <div className="photo-gradient">
              <h4 className="photo-heading">Product Design</h4>
              <p className="photo-description">
                The world of product design is changing, and you need to work hard to achieve success.
              </p>
            </div>
          </div>

          <div className="photo-frame" style={{ backgroundImage: `url(${tips_articles})` }}>
            <div className="photo-gradient">
              <h4 className="photo-heading">Product Design</h4>
              <p className="photo-description">
                The world of product design is changing, and you need to work hard to achieve success.
              </p>
            </div>
          </div>

          <div className="photo-frame" style={{ backgroundImage: `url(${tips_articles})` }}>
            <div className="photo-gradient">
              <h4 className="photo-heading">Product Design</h4>
              <p className="photo-description">
                The world of product design is changing, and you need to work hard to achieve success.
              </p>
            </div>
          </div>
        </div>
      </div>



    </div >
  );
};

export default MainDashboard;
