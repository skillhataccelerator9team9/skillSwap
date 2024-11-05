import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';


import { FaEye, FaEyeSlash, FaRegTimesCircle } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import clapsImage from '../assets/claps.png';
import { GoogleLogin } from 'react-google-login';

import '../styles/login.css'
import { useUser } from './UserContext';


const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
const googleClientID = process.env.REACT_APP_GOOGLE_CLIENT_ID

const Login = () => {

  const { signIn } = useUser();

  const location = useLocation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonName, setButtonName] = useState('Sign Up');
  const [message1, setMessage1] = useState('Already have an account?');
  const [message2, setMessage2] = useState('Sign In');
  const [message3, setMessage3] = useState('Get Started');
  const [message4, setMessage4] = useState('Create an account to start using brand name');
  const navigate = useNavigate();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleClearEmail = () => {
    setEmail(''); // Clear the email state
  };

  const [rememberPassword, setRememberPassword] = useState(false);

  const handleCheckboxChange = () => {
    setRememberPassword(!rememberPassword);
  };

  // Use the passed state to set the initial form mode
  useEffect(() => {
    if (location.state && location.state.mode === 'signIn') {
      setButtonName('Sign In');
      setMessage1('Need an account?');
      setMessage2('Sign Up');
      setMessage3("Welcome Back");
    } else {
      setButtonName('Create Account');
      setMessage1('Already have an account?');
      setMessage2('Sign In');
      setMessage3("Get Started");
    }
  }, [location.state]);

  const switchLogin = (e) => {
    e.preventDefault();
    setButtonName(prevMessage => (prevMessage === 'Sign In' ? 'Create Account' : 'Sign In'));
    setMessage2(prevMessage => (prevMessage === 'Sign Up' ? 'Sign In' : 'Sign Up'));
    setMessage1(prevMessage => (prevMessage === 'Need an account?' ? 'Already have an account?' : 'Need an account?'));
    setMessage3(prevMessage => (prevMessage === 'Welcome Back' ? 'Get Started' : 'Welcome Back'));
    setMessage4(prevMessage => (prevMessage === 'Login into your account' ? 'Create an account to start using brand name' : 'Login into your account'));

    setUsername("");
    setEmail("");
    setPassword("");
    console.log("Switch login");
  };

  const forgotPassowrdFunction = () => {
    navigate('/forgotPasswordPage');
  };



  const loginFunction = async (e) => {
    e.preventDefault();


    if (buttonName === "Sign In") {
      console.log("You are in Sign In");

      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const body = JSON.stringify({ email, password });
        console.log(body);

        console.log({ apiBaseUrl });

        const res = await axios.post(`${apiBaseUrl}/auth/login`, body, config);
        console.log(res.data);

        // Assuming the response contains user data
        const userData = res.data; // Adjust this based on your API response structure

        console.log("Data: - >", userData);
        console.log(userData);


        // This will contain the JWT token
        alert("Signin successful!");
        setUsername('');
        setEmail('');
        setPassword('');

        signIn(userData);
        navigate('/dashboard');


      } catch (err) {
        console.error(err.response.data);
        console.error('Error:', err);
        console.error('Error response:', err.response);
      }

    }
    else {
      console.log("You are in Sign up");

      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const body = JSON.stringify({ username, email, password });
        console.log(body);

        console.log({ apiBaseUrl });

        const res = await axios.post(`${apiBaseUrl}/auth/signup`, body, config);
        console.log(res.data);

        // const res = await axios.post("http://localhost:80/api/auth/signup", body, config);

        alert("Signup successful!");

        setUsername('');
        setEmail('');
        setPassword('');

        setButtonName('Sign In');
        setMessage1('Need an account?');
        setMessage2('Sign Up');

      } catch (err) {
        console.error(err.response.data);
        alert("Signup failed. Please check your details.");
      }
    }
  };

  return (

    <div className="signup-container">
      <div className="signup-frame">
        {/* Claps Image */}
        <div className="claps-image-wrapper">
          <img src={clapsImage} alt="Claps" className="claps-image" />
        </div>

        {/* Sign Up Heading */}
        <div className="signup-heading">
          <h1 className="signup-title">{message3}</h1>
          <p className="signup-subtitle">
            {message4}
          </p>
        </div>

        <form className="login-Form" onSubmit={loginFunction}>
          {buttonName === "Sign In"
            ?
            <div></div>
            :
            <div className="input-wrapper">
              <input
                type="text"
                className="input-field"
                value={username}
                placeholder="Your Name" required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          }

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

          <div className="input-wrapper">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              className="input-field"
              value={password}
              placeholder="Your password" required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="input-icon" onClick={togglePasswordVisibility}>
              {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>

          {buttonName === "Sign In"
            ?
            <div className="checkbox-frame">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberPassword}
                  onChange={handleCheckboxChange}
                  className="checkbox"
                />
                <label htmlFor="remember" className="remember-label">
                  Remember Password
                </label>

              </div>
              <label className="forgot-password-label" onClick={forgotPassowrdFunction}>Forget Password?</label>
            </div>
            :
            <div></div>
          }


          {/* OR Section */}
          <div className="or-section">
            <span className="or-line"></span>
            <span className="or-text">OR</span>
            <span className="or-line"></span>
          </div>

          {/* Google Sign In */}
          <div className="google-signin-wrapper">
            <div className="google-signin">
              <FcGoogle className="google-icon" />
            </div>
          </div>


          {/* Agreement Checkbox */}
          <div className="agreement-section">
            <input type="checkbox" className="agreement-checkbox" />
            <label className="agreement-label">
              I’m agree to the Terms of Service and Privacy Policy
            </label>
          </div>

          {/* Create Account Button */}
          <button className="create-account-btn">{buttonName}</button>

          {/* Sign In Option */}
          <p className="signin-option">
            {message1} <span className="signin-link" onClick={switchLogin}>{message2}</span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
