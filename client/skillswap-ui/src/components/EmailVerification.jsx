import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const EmailVerification = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the token from the URL
  const [message, setMessage] = useState('');

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
        setTimeout(() => {
          navigate('/login');
        }, 2000); // Wait for 2 seconds before redirecting
      }
    } catch (err) {
      setMessage('Invalid or expired token. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="email-verification">
      <h1>Email Verification</h1>
      <p>{message}</p>
    </div>
  );
};

export default EmailVerification;
