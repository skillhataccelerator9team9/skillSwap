import React, { useState } from 'react';

import '../styles/login.css'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='login'>

      <div className="secContainer container grid">

        <div className="loginTitle">
          <h1>Login</h1>
        </div>

        <div className="loginForm">
          <form className="login-Form">
            <input
              className="loginInput"
              type="text"
              name="name"
              value={username}
              placeholder="Your Name" required
              onChange={(e) => setUsername(e.target.value)}
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
                type="Sign In"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Login
