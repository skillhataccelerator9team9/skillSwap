import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import '../styles/navBar.css'

import { FaWindowClose } from 'react-icons/fa'
import { TbGridDots } from 'react-icons/tb'

import logo from '../assets/logo.png'


const NavBar = () => {

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
                HOME
              </NavLink>
            </li>

            <li className='navItem'>
              <NavLink to="/ContactUS" onClick={() => scrollPage()} className={({ isActive }) =>
                isActive ? "activeNavLink" : "navLink"
              }>
                CONTACT US
              </NavLink>
            </li>

            <li className='navItem'>
              <NavLink to="/Login" onClick={() => scrollPage()} className={({ isActive }) =>
                isActive ? "activeNavLink" : "navLink"
              }>
                LOGIN
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

      </div>
    </section >
  )
}

export default NavBar