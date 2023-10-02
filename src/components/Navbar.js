import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [show, handleshow] = useState(false);

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
        <img
            className='nav__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
            alt='netflix logo'
        />
    </div>
  )
}

export default Navbar