import React from 'react'

import '../styles/LandingPageAboutUsStyle.css'

import img1 from '../assets/aboutUs1.jpeg'

function LandingPageAboutUs () {
  return (
    <div id="about" className='aboutUs'>
      <div className='container'>
        <div className='aboutUs-text'>
          <h1>About Us</h1>
          <p></p>
        </div>
        <div className='aboutUs-columns'>
          <div className='column1'>
            <img src={img1} alt="image1" className="imageColumn" />
          </div>
          <div className='column2'>
            <ul className="lists">
              <li className='item'>
                Who We Are: Skilltopia is a platform dedicated to connecting people in
                Canada  who are eager to exchange skills and services within their
                communities
              </li>
              <li className='item'>
                Our Story: Founded by a team passionate about fostering new ways for
                people to collaborate and save, Skilltopia was built for individuals to share
                expertise without traditional costs.
              </li>
              <li className='item'>
                Our Purpose: We believe in empowering connections that expand skills,
                create valuable contacts, and unlock possibilities—all while saving money.
                Join us in building a cash-free community for service-based collaboration.
                No money? No Problem! We are here for you!
              </li>
            </ul>
            <button className="aboutUs-button">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPageAboutUs;


