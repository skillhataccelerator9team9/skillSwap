import React from 'react'

import '../styles/LandingPageAboutUsStyle.css'

import img1 from '../assets/aboutUs1.jpeg'

function LandingPageAboutUs () {
  return (
    <div id="about" className='aboutUs'>
      <div className='container'>
        <div className='aboutUs-text'>
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Suspendisse lobortis vitae quis vehicula pellentesque sit id. Urna posuere consequat velit vulputate faucibus pretium arcu accumsan sit. Vel venenatis sapien.</p>
        </div>
        <div className='aboutUs-columns'>
          <div className='column1'>
            <img src={img1} alt="image1" className="imageColumn" />
          </div>
          <div className='column2'>
            <ul className="lists">
              <li className='item'>
                We envision a network of people that enrich others lives through the exchange of skills
              </li>
              <li className='item'>
                By bringing individuals together, we foster a unique relationship where each person contributes personal or professional development, ultimately creating a better way of living
              </li>
              <li className='item'>
                Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.
              </li>
              <li className='item'>
                Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.
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


