import React, { useState, useEffect } from 'react';
import lockImage from '../assets/lock.png';

import '../styles/ResetPasswordStyle.css'

import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ResetPassword = () => {

  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);
  const togglePasswordVisibility1 = () => {
    setIsPasswordVisible1(!isPasswordVisible1);
  };

  const togglePasswordVisibility2 = () => {
    setIsPasswordVisible2(!isPasswordVisible2);
  };

  const forgotPasswordFunction = (e) => {
    e.preventDefault();

  };

  return (
    <div className="reset-container">
      <div className="reset-frame">
        <div className="lock-image-wrapper">
          <img src={lockImage} alt="lock" className="lock-image" />
        </div>

        <div className="reset-heading">
          <h1 className="reset-title">Reset Password</h1>
          <p className="reset-subtitle">
            Lorem ipsum dolor sit amet consectetur. Diam feugiat urna tincidunt at aenean blandit
          </p>
        </div>

        <form className="reset-Form" onSubmit={forgotPasswordFunction}>

          <div className="input-wrapper">
            <input
              type={isPasswordVisible1 ? 'text' : 'password'}
              className="input-field"
              value={newPassword}
              placeholder="Your password" required
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <div className="input-icon" onClick={togglePasswordVisibility1}>
              {isPasswordVisible1 ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>

          <div className="input-wrapper">
            <input
              type={isPasswordVisible2 ? 'text' : 'password'}
              className="input-field"
              value={confirmNewPassword}
              placeholder="Your password" required
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            <div className="input-icon" onClick={togglePasswordVisibility2}>
              {isPasswordVisible2 ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>

          <button className="continue-btn">Continue</button>
        </form>
      </div >
    </div >
  )
}

export default ResetPassword
