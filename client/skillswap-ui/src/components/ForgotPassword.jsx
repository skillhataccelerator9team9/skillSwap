import React, { useState, useEffect } from 'react';
import letterImage from '../assets/letter.png';

import { FaRegTimesCircle } from 'react-icons/fa';

import '../styles/ForgotPasswordStyle.css'

const ForgotPassword = () => {

  const [email, setEmail] = useState('');

  const handleClearEmail = () => {
    setEmail(''); // Clear the email state
  };

  const forgotPasswordFunction = (e) => {
    e.preventDefault();


  };

  return (
    <div className="forgot-container">
      <div className="forgot-frame">
        <div className="letter-image-wrapper">
          <img src={letterImage} alt="letter" className="letter-image" />
        </div>

        <div className="forgot-heading">
          <h1 className="forgot-title">Forgot Password</h1>
          <p className="forgot-subtitle">
            Lorem ipsum dolor sit amet consectetur. Diam feugiat urna tincidunt at aenean blandit
          </p>
        </div>

        <form className="forgot-Form" onSubmit={forgotPasswordFunction}>

          <div className="input-wrapper">
            <input
              type="email"
              className="input-field"
              value={email}
              placeholder="Your Email" required
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaRegTimesCircle className="input-icon"
              onClick={handleClearEmail}
            />
          </div>

          <button className="continue-btn">Continue</button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
