import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const VerifyEmail = () => {
  const location = useLocation();

  useEffect(() => {
    // Extract token from URL
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    // Call backend API to verify email
    const verifyEmail = async () => {
      try {
        const res = await axios.get(`${apiBaseUrl}/auth/verify-email?token=${token}`);
        console.log(res.data);
        alert("Email verified successfully!");
      } catch (err) {
        console.error(err.response.data);
        alert("Error verifying email.");
      }
    };

    if (token) {
      verifyEmail();
    }
  }, [location]);

  return (
    <div>
      <h2>Verifying your email...</h2>
    </div>
  );
};

export default VerifyEmail;
