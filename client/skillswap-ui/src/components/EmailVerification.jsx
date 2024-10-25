import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/EmailVerificationStyle.css';
import { FaCheck } from 'react-icons/fa';  // For the checkmark icon

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const EmailVerification = () => {
  const location = useLocation(); // Get the token from the URL
  const [message, setMessage] = useState('');

  const navigate = useNavigate();  // Hook for navigation

  const handleLoginClick = () => {
    const mode = 'signIn';
    navigate('/loginPage', { state: { mode } });  // Route to the login page

  };

  const handleSkipClick = () => {
    navigate('/');  // Route to the landing page
  };

  useEffect(() => {
    // Extract token from URL
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      verifyEmail(token);
    } else {
      setMessage('Invalid or missing token');
    }
  }, [location]);

  const verifyEmail = async (token) => {
    try {
      const res = await axios.get(`${apiBaseUrl}/auth/verify-email?token=${token}`);
      if (res.status === 200) {
        setMessage('Email verified successfully. You can now log in.');
        // Navigate to login after success
        // setTimeout(() => {
        //   navigate('/loginPage');
        // }, 2000);
        // Wait for 2 seconds before redirecting
      }
    } catch (err) {
      setMessage('Invalid or expired token. Please try again.');
      console.error(err);
    }
  };

  return (
    // <div className="email-verification">
    //   <h1>Email Verification</h1>
    //   <p>{message}</p>
    // </div>
    <div className="verification-container-wrapper">
      <div className="verification-container">
        <h1 className="verification-title">Email Verification Successful</h1>
        <div className="verification-check-circle">
          <FaCheck className="verification-check-icon" />
        </div>
        <p className="verification-message">
          Great job! You have successfully verified your account. Log in to enjoy more.
        </p>
        <button className="login-button" onClick={handleLoginClick}>Login</button>
        <p className="skip-text" onClick={handleSkipClick}>Skip</p>
      </div>
    </div>

  );
};

export default EmailVerification;
