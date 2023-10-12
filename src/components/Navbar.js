import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [show, handleshow] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                handleshow(true)
            } else handleshow(false);
        });
        return () =>{
            // window.removeEventListener("scroll");
        };
    }, [])

  return (
    <div 
    className={`nav ${show && "nav__black"}`}
    >
        <div className='nav__contents'>
            <img
                onClick={() => navigate("/")}
                className='nav__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                alt='netflix logo'
            />

            <img
                onClick={() => navigate("/profile")}
                className='nav__avatar'
                src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.webp'
                alt='netflix avatar'
            />
        </div>
        
    </div>
  )
}

export default Navbar