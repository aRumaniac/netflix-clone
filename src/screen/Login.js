import React, { useState } from 'react';
import './SignUpScreen';
import './Login.css';
import SignUpScreen from './SignUpScreen';

function Login() {
  const [SignIn, setSignIn] = useState(false);
  return (
    <div className='login'>
        <div className='login__background'>
            <img
              className='login__logo'
              src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
              alt='netflix'
            />
            <button className='login__button' onClick={() => setSignIn(true)}>Sign In</button>

            <div className='login__gradient'></div>
        </div>
        <div className='login__body'>
        {SignIn ? <SignUpScreen/> : (
          <>
            <h1>Unlimited files, TV Programmes and more.</h1>
            <h2>Watch anywhere. Cancel at anytime</h2>
            <h3>Ready to watch? Enter your Email to create or restart your membership</h3>
        <div className='login__input'>
          <form>
            <input type='email' placeholder='Email Address'/>
            <button className='login__getstarted' 
            onClick={() => setSignIn(true)}>GET STARTED</button>
          </form>
        </div> 
        </> )}
        </div>
    </div>
  )
}

export default Login