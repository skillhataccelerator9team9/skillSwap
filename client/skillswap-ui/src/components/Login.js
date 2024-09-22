import React, { useState } from 'react';

import '../styles/login.css'

const Login = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonName, setButtonName] = useState('Sign In');
  const [message1, setMessage1] = useState('Need an account?');
  const [message2, setMessage2] = useState('Sign Up');

  const switchLogin = (e) => {
    e.preventDefault();
    setButtonName(prevMessage => (prevMessage === 'Sign In' ? 'Sign Up' : 'Sign In'));
    setMessage2(prevMessage => (prevMessage === 'Sign Up' ? 'Sign In' : 'Sign Up'));
    setMessage1(prevMessage => (prevMessage === 'Need an account?' ? 'Already have an account?' : 'Need an account?'));

    console.log("Switch login");
  };

  const loginFunction = (e) => {
    e.preventDefault();

    console.log({ username });
    console.log({ email });
    console.log({ password });


    console.log("Login function");
  };

  return (
    <div className='login'>

      <div className="secContainer container grid">

        <div className="loginTitle">
          <h1>Login</h1>
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
