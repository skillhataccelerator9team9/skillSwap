
import { React, useState, useEffect } from 'react';
import logo1 from '../assets/logo1.png'; // Importing the logo image
import '../styles/LandingPageNavBarStyle.css'

const LandingPageNavBar = () => {

  const [transparent, setTransparent] = useState('navbar')

  const addBackground = () => {
    if (window.scrollY >= 15) {
      setTransparent('navbar activeNavbar')
      console.log("hello111");
    }
    else {
      setTransparent('navbar')
      console.log("hello1");
    }
  }

  // Using useEffect to handle the scroll event and clean it up
  useEffect(() => {

    window.addEventListener('scroll', addBackground);

    return () => {
      window.removeEventListener('scroll', addBackground); // Cleanup listener on component unmount
    };
  }, []); // Empty array ensures this effect runs only once


  return (
    <nav className={transparent}>
      <div className="navbar-container">
        <div>
          <img src={logo1} alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-items">
          <a href="#home" className="navbar-item">Home</a>
          <a href="#about" className="navbar-item">About Us</a>
          <a href="#how-it-works" className="navbar-item">How it Works</a>
          <a href="#why-choose-us" className="navbar-item">Why Choose Us</a>
          <a href="#testimonial" className="navbar-item">Testimonial</a>
        </div>
        <div>
          <button className="navbar-button">
            Sign In
          </button>
          <button className="navbar-button">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LandingPageNavBar;
