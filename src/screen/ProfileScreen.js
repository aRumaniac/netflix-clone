import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux';
import { auth } from '../stores/firebase';
import { selectUser } from '../counters/userSlice'
import './ProfileScreen.css';

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
                <div className='profileScreen__data'>
                  <p>Renewal Date :</p>
                  <div className='profileScreen__subscription'>
                    <div className='profileScreen__subscribeOptions'>
                      <p>Netflix Standard<br/>1080p</p>
                      
                      <button>Subscribe</button>
                    </div>
                    <div className='profileScreen__subscribeOptions'>
                      <p>Netflix Basic<br/>480p</p>
                      
                      <button>Subscribe</button>
                    </div>
                    <div className='profileScreen__subscribeOptions'>
                      <p>Netflix Premium<br/>4K+HDR</p>
                      
                      <button>Subscribe</button>
                    </div>
                  </div>
                </div>
                <button onClick={() => auth.signOut()}
                className='profileScreen__signOut'>Sign Out</button>
              </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default ProfileScreen