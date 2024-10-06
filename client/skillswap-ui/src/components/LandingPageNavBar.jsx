

import React, { useState } from 'react'
import { NavLink } from "react-router-dom";


import { FaWindowClose } from 'react-icons/fa'
import { TbGridDots } from 'react-icons/tb'

import logo from '../assets/logo1.png'

import '../styles/LandingPageNavBarStyle.css'


const LandingPageNavBar = () => {

  //code to toggle/show navBar
  //set the value of className='navBar' as name active using useState
  const [active, setActive] = useState('navBar')

  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  const removeNav = () => {
    setActive('navBar')
  }

  const [transparent, setTransparent] = useState('header')

  const addBg = () => {
    if (window.scrollY >= 15) {
      setTransparent('header activeHeader')
    }
    else {
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)

  const scrollPage = () => {
    window.scrollTo(0, 0);
  }

  return (
    <section className='navBarSection'>
      <div className={transparent}>
        <div className="logoDiv">
          <NavLink className="logo" to="/Home" onClick={() => scrollPage()}>
            <img src={logo} alt="Image title" />
          </NavLink>
        </div>

        <div className={active}>
          <div className="logoDiv">
            <NavLink className="logo" to="/Home" onClick={() => scrollPage()}>
              <img src={logo} alt="Image title" />
            </NavLink>
          </div>
          <ul className="navLists flex">
            <li className='navItem'>
              <NavLink to="/Home" onClick={() => scrollPage()} className={({ isActive }) =>
                isActive ? "activeNavLink" : "navLink"
              }>
                Home
              </NavLink>
            </li>

            <li className='navItem'>
              <NavLink to="/ContactUS" onClick={() => scrollPage()} className={({ isActive }) =>
                isActive ? "activeNavLink" : "navLink"
              }>
                About Us
              </NavLink>
            </li>

            <li className='navItem'>
              <NavLink to="/Login" onClick={() => scrollPage()} className={({ isActive }) =>
                isActive ? "activeNavLink" : "navLink"
              }>
                How It Works
              </NavLink>
            </li>

            <li className='navItem'>
              <NavLink to="/Login" onClick={() => scrollPage()} className={({ isActive }) =>
                isActive ? "activeNavLink" : "navLink"
              }>
                Why Choose Us
              </NavLink>
            </li>

            <li className='navItem'>
              <NavLink to="/Login" onClick={() => scrollPage()} className={({ isActive }) =>
                isActive ? "activeNavLink" : "navLink"
              }>
                Testimonial
              </NavLink>
            </li>


          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <FaWindowClose className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>

        <div className="navButton">
          <button
            className="btn btn1"
            type="submit"
          >
            Join Our Waitlist
          </button>
        </div>

      </div>
    </section >
  )
}

export default LandingPageNavBar
