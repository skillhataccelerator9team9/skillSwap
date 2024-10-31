
import { React, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import logo1 from '../assets/logo1.png'; // Importing the logo image
import '../styles/UserNavBarStyle.css'
import { useUser } from './UserContext';

const UserNavBar = () => {

  const { userData, signOut } = useUser();

  // console.log('User data in NavBar:', userData);

  const [transparent, setTransparent] = useState('navbar')
  const [userName, setUserName] = useState('');

  const navigate = useNavigate()  // Hook to navigate to another page

  //code to toggle/show navBar
  //set the value of className='navBar' as name active using useState
  // const [active, setActive] = useState('navBar')

  // const showNav = () => {
  //   setActive('navBar activeNavbar')
  // }


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

    setUserName(userData.user?.username);

    window.addEventListener('scroll', addBackground);

    return () => {
      window.removeEventListener('scroll', addBackground); // Cleanup listener on component unmount
    };
  }, []); // Empty array ensures this effect runs only once

  const scrollPage = () => {
    window.scrollTo(0, 0);
  }

  const handleSignOut = () => {
    signOut();
    navigate('/');  // Redirect to the login page
  };

  return (
    <nav className={transparent}>
      <div className="navbar-container">
        <div>
          <img src={logo1} alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-items">
          {/* <a href="#" className="navbar-item">User Profile</a>
          <a href="#" className="navbar-item">Search</a> */}
          <ul className="navbar-items">
            <li className='navbar-item'>
              <NavLink to="/userPage" onClick={() => scrollPage()} className={({ isActive }) =>
                isActive ? "activeNavLink" : "navLink"
              }>
                User Profile
              </NavLink>
            </li>

            <li className='navbar-item'>
              <NavLink to="/userSearchPage" onClick={() => scrollPage()} className={({ isActive }) =>
                isActive ? "activeNavLink" : "navLink"
              }>
                Search
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="nav-userName-signOut">
          {/* <h1>{userName || 'Name'}</h1> */}

          <h1>Welcome, {userName || 'User'}!</h1>
          <button className="navbar-button" onClick={() => handleSignOut()}>
            Sign Out
          </button>
        </div>
      </div>
    </nav >
  );
};

export default UserNavBar;
