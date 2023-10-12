import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux';
import { selectUser } from '../counters/userSlice'

function ProfileScreen() {
  const user= useSelector(selectUser);

  return (
    <div className='profileScreen'>
        <Navbar/>
        <div className='profileScreen__body'>
          <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
            <img 
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.webp" 
            alt=''/>
            <div className='profileScreen__details'>
              <h2>{user.email}</h2>
              <div className='profileScreen__plans'>
                <h3>Plans</h3>
                <p></p>
                <button onClick={() => auth.signOut()}
                className='profileScreen__signOut'>Sign Out</button>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen