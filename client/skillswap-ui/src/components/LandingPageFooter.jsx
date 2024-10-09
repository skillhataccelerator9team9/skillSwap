import React from 'react';
import '../styles/LandingPageFooterStyle.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo1.png'; // Assuming the logo is in your assets folder

const LandingPageFooter = () => {
  return (
    <footer className="footer">
      <div className="footerColumns">

        {/* First Column */}
        <div className="footerColumn">
          <div className="logo">
            <img src={logo} alt="Auto Fast Logo" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur. Proin varius arcu mauris habitasse viverra odio massa at.</p>
          <div className="socialIcons">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>

        {/* Second Column */}
        <div className="footerColumn">
          <h3>About</h3>
          <ul>
            <li>Mission</li>
            <li>Our Story</li>
            <li>Meet Our Team</li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="footerColumn">
          <h3>Community</h3>
          <ul>
            <li>Events</li>
            <li>Blogs</li>
            <li>Invite a Friend</li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div className="footerColumn">
          <h3>Social</h3>
          <ul>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footerBottom">
        <p>©2024 Auto Fast. All rights reserved</p>
        <div className="policies">
          <a href="/privacy-policy">Privacy & Policy</a>
          <span></span>
          <a href="/terms-condition">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
};

export default LandingPageFooter;
