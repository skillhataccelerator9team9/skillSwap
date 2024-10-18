import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';
// import Cookies from 'js-cookie';

import '../styles/login.css'

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const Login = () => {

  const location = useLocation();  // Hook to access passed state

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonName, setButtonName] = useState('Sign Up');
  const [message1, setMessage1] = useState('Already have an account?');
  const [message2, setMessage2] = useState('Sign In');
  //const [message3, setMessage3] = useState('successfully_signin');
  const navigate = useNavigate();  // Hook for navigation

  // Use the passed state to set the initial form mode
  useEffect(() => {
    if (location.state && location.state.mode === 'signIn') {
      setButtonName('Sign In');
      setMessage1('Need an account?');
      setMessage2('Sign Up');
    } else {
      setButtonName('Sign Up');
      setMessage1('Already have an account?');
      setMessage2('Sign In');
    }
  }, [location.state]);

  const switchLogin = (e) => {
    e.preventDefault();
    setButtonName(prevMessage => (prevMessage === 'Sign In' ? 'Sign Up' : 'Sign In'));
    setMessage2(prevMessage => (prevMessage === 'Sign Up' ? 'Sign In' : 'Sign Up'));
    setMessage1(prevMessage => (prevMessage === 'Need an account?' ? 'Already have an account?' : 'Need an account?'));

    console.log("Switch login");
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

        // This will contain the JWT token
        alert("Signin successful!");

        setUsername('');
        setEmail('');
        setPassword('');

        navigate('/userPage');
      } catch (err) {
        console.error(err.response.data);
        console.error('Error:', err);  // Check if there’s an error in the request
        console.error('Error response:', err.response); // Check if the response is being sent by backend
        //alert("Login failed. Please check your credentials.");
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
    <div className='login'>

      <div className="secContainer container grid">

        <div className="loginTitle">
          <h1>{buttonName}</h1>
        </div>

        <div className="loginForm">
          <form className="login-Form" onSubmit={loginFunction}>
            {buttonName === "Sign In" ? <div></div> : <input
              className="loginInput"
              type="text"
              name="name"
              value={username}
              placeholder="Your Name" required
              onChange={(e) => setUsername(e.target.value)}
            />
            }
            <input
              className="loginInput"
              type="email"
              name="email"
              value={email}
              placeholder="Your Email" required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="loginInput"
              type="password"
              name="password"
              value={password}
              placeholder="Your password" required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="buttonAndStatus">
              <button
                className="btn btn1"
                type="text"
              >
                {buttonName}
              </button>

            </div>

            <h2 className="message" >

              {message1} <span className="messageLogin" onClick={switchLogin}>{message2}</span>
            </h2>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Login
