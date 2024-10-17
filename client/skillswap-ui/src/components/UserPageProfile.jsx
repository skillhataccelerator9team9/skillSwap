// import React from 'react'

// import '../styles/UserPageProfileStyle.css'

// import img1 from '../assets/aboutUs1.jpeg'

// function UserPageProfile () {
//   return (
//     <div id="profile" className='profile'>
//       <div className='container'>
//         <div className='profile-text'>
//           <h1>User Profile</h1>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default UserPageProfile;

import React from 'react';
import '../styles/UserPageProfileStyle.css';
import customer1 from '../assets/customer1.jpeg'
import { FaEnvelope, FaPhone, FaLock, FaTrash, FaArrowRight } from 'react-icons/fa'; // Importing icons
import { FaLocationPin } from 'react-icons/fa6';
import { TbFlaskFilled } from 'react-icons/tb';

function UserPageProfile () {
  return (
    <div id="profile" className="profile">
      <div className='container'>
        <div className='profile-text'>
          <h1>User Profile</h1>

        </div>
        {/* Top frame with user name and edit button */}
        <div className="top-frame">
          <span className="user-name">John Doe</span>
          <button className="edit-button">Edit</button>
        </div>

        {/* Frame with photo and right-hand side content */}
        <div className="info-frame">
          <div className="profile-photo">
            <img src={customer1} alt="User" className="photo-circle" />
          </div>
          <div className="right-info-frame">
            {/* <div className="info-row">
            <label>Name:</label>
            <span>John Doe</span>
          </div>
          <div className="info-row">
            <label>Email:</label>
            <span>john@example.com</span>
          </div>
          <div className="info-row">
            <label>Phone:</label>
            <span>+123456789</span>
          </div>
          <div className="info-row">
            <label>Joined:</label>
            <span>Jan 1, 2020</span>
          </div> */}
          </div>
        </div>

        {/* Location frame */}
        <div className="location-frame">
          <span className="location-label">Location</span>
          <div className="location-details">
            <FaLocationPin className="icon" />
            <span className="location-name">New York, USA</span>
          </div>
        </div>

        {/* Personal details frame */}
        <div className="personal-details-frame">
          <span className="personal-details-label">Personal Details</span>

          {/* Email */}
          <div className="details-row">
            <FaEnvelope className="icon" />
            <span className="detail-text">john1212@example.com</span>

          </div>

          {/* Phone */}
          <div className="details-row">
            <FaPhone className="icon" />
            <span className="detail-text">432-121-2121</span>

          </div>

          {/* Reset Password */}
          <div className="details-row">
            <FaLock className="icon" />
            <span className="detail-text">Reset Password</span>

          </div>

          {/* Delete Account */}
          <div className="details-row">
            <FaTrash className="icon" />
            <span className="detail-text">Delete Account</span>

          </div>

          {/* My Skills with Arrow */}
          <div className="details-row">
            <TbFlaskFilled className="icon" />
            <span className="detail-text">My Skills</span>
            <div className="skills-icons">
              <FaArrowRight className="icon arrow-icon" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default UserPageProfile;
