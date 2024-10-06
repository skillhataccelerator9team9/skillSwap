
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
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LandingPageNavBar;

// import React, { useState } from 'react'
// import { NavLink } from "react-router-dom";


// import { FaWindowClose } from 'react-icons/fa'
// import { TbGridDots } from 'react-icons/tb'

// import logo from '../assets/logo1.png'

// import '../styles/LandingPageNavBarStyle.css';


// const LandingPageNavBar = () => {

//   //code to toggle/show navBar
//   //set the value of className='navBar' as name active using useState
//   const [active, setActive] = useState('navBar')

//   const showNav = () => {
//     setActive('navBar activeNavbar')
//   }

//   const removeNav = () => {
//     setActive('navBar')
//   }

//   const [transparent, setTransparent] = useState('header')

//   const addBg = () => {
//     if (window.scrollY >= 15) {
//       setTransparent('header activeHeader')
//     }
//     else {
//       setTransparent('header')
//     }
//   }
//   window.addEventListener('scroll', addBg)

//   const scrollPage = () => {
//     window.scrollTo(0, 0);
//   }

//   return (
//     <section className='navBarSection'>
//       <div className={transparent}>
//         <div className="logoDiv">
//           <NavLink className="logo" to="/Home" onClick={() => scrollPage()}>
//             <img src={logo} alt="Image title" />
//           </NavLink>
//         </div>

//         <div className={active}>
//           <div className="logoDiv">
//             <NavLink className="logo" to="/Home" onClick={() => scrollPage()}>
//               <img src={logo} alt="Image title" />
//             </NavLink>
//           </div>
//           <ul className="navLists flex">
//             <li className='navItem'>
//               <NavLink to="/Home" onClick={() => scrollPage()} className={({ isActive }) =>
//                 isActive ? "activeNavLink" : "navLink"
//               }>
//                 Home
//               </NavLink>
//             </li>

//             <li className='navItem'>
//               <NavLink to="/ContactUS" onClick={() => scrollPage()} className={({ isActive }) =>
//                 isActive ? "activeNavLink" : "navLink"
//               }>
//                 About Us
//               </NavLink>
//             </li>

//             <li className='navItem'>
//               <NavLink to="/Login" onClick={() => scrollPage()} className={({ isActive }) =>
//                 isActive ? "activeNavLink" : "navLink"
//               }>
//                 How It Works
//               </NavLink>
//             </li>

//             <li className='navItem'>
//               <NavLink to="/Login" onClick={() => scrollPage()} className={({ isActive }) =>
//                 isActive ? "activeNavLink" : "navLink"
//               }>
//                 Why Choose Us
//               </NavLink>
//             </li>

//             <li className='navItem'>
//               <NavLink to="/Login" onClick={() => scrollPage()} className={({ isActive }) =>
//                 isActive ? "activeNavLink" : "navLink"
//               }>
//                 Testimonial
//               </NavLink>
//             </li>


//           </ul>

//           <div onClick={removeNav} className="closeNavbar">
//             <FaWindowClose className="icon" />
//           </div>
//         </div>

//         <div onClick={showNav} className="toggleNavbar">
//           <TbGridDots className="icon" />
//         </div>

//         <div className="navButton">
//           <button
//             className="btn btn1"
//             type="submit"
//           >
//             Join Our Waitlist
//           </button>
//         </div>

//       </div>
//     </section >
//   )
// }

// export default LandingPageNavBar
