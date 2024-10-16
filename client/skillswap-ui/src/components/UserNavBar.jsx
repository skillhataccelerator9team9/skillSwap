
import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import logo1 from '../assets/logo1.png'; // Importing the logo image

import '../styles/UserNavBarStyle.css'

const UserNavBar = () => {

  const [transparent, setTransparent] = useState('navbar')
  const [userName, setUserName] = useState('');  // State to store username

  const navigate = useNavigate()  // Hook to navigate to another page

  const addBackground = () => {
    if (window.scrollY >= 15) {
      setTransparent('navbar activeNavbar')
    }
    else {
      setTransparent('navbar')
    }
  }

  // Using useEffect to handle the scroll event and clean it up
  useEffect(() => {

    window.addEventListener('scroll', addBackground);

    // Fetch the username from cookies when the component loads
    // const storedUserName = Cookies.get('user');
    // if (storedUserName) {
    //   setUserName(storedUserName);
    // }

    return () => {
      window.removeEventListener('scroll', addBackground); // Cleanup listener on component unmount
    };
  }, []); // Empty array ensures this effect runs only once

  const handleSignOut = (mode) => {
    navigate('/');  // Redirect to the login page
  };

  return (
    <nav className={transparent}>
      <div className="navbar-container">
        <div>
          <img src={logo1} alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-items">
          <a href="#" className="navbar-item">User Profile</a>
          <a href="#" className="navbar-item">Search</a>
        </div>
        <div className="nav-userName-signOut">
          <h1>{userName || 'Name'}</h1>
          <button className="navbar-button" onClick={() => handleSignOut()}>
            Sign Out
          </button>
        </div>
      </div>
    </nav >
  );
};

export default UserNavBar;
