
import React from 'react'
import UserNavBar from '../components/UserNavBar';
import UserPageProfile from '../components/UserPageProfile';


function UserProfileScreen () {
  return (
    <div className='UserProfileScreen'>
      <UserNavBar />
      <UserPageProfile />
    </div>
  )
}

export default UserProfileScreen;