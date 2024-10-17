
import React from 'react'
import UserNavBar from '../components/UserNavBar';
import UserPageSearchSkills from '../components/UserPageSearchSkills';


function UserSearchScreen () {
  return (
    <div className='UserSearchScreen'>
      <UserNavBar />
      <UserPageSearchSkills />
    </div>
  )
}

export default UserSearchScreen;