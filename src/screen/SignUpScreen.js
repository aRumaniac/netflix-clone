import React, { useRef } from 'react'
import './SignUpScreen.css'
import { auth } from '../stores/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function SignUpScreen() {

  const emailRef = useRef(null);  
  const passwordRef = useRef(null);  

  
  const register = (e) => {
    e.preventDefault();
    
    createUserWithEmailAndPassword (auth,
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      // console.log(authUser);
    })
    .catch((error) => {
      alert(error.message)
    });
  }; 

  const sigIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword (auth,
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      // console.log(authUser);
    })
    .catch((error) => {
      alert(error.message)
    });
  }

  return (
    <div className='signupscreen'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder='Email' type='email'/>
            <input ref={passwordRef} placeholder='Password' type="password"/>
            <button type='submit'
            onClick={sigIn}
            >Sign In</button>

            <h4>
                <span className='signupscreen__gray'>New to Netflix?</span> 
                <span className='signupscreen__link'
                onClick={register}
                > Sign Up Now.</span>
            </h4>
        </form>
    </div>
  )
}

export default SignUpScreen