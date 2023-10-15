import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
       <div className='footer__container'>
       <p>Questions? Call <a>000-800-***-****</a></p>
        <div className='footer__details'>
            <div className='footer__row1'>
                <p><a>FAQ</a></p>
                <p><a>Investor Relations</a></p>
                <p><a>Privacy</a></p>
                <p><a>Speed Test</a></p>
            </div>
            <div className='footer__row2'>
                <p><a>Help Centre</a></p>
                <p><a>Jobs</a></p>
                <p><a>Cookie Preferences</a></p>
                <p><a>Legal Notices</a></p>
            </div>
            <div className='footer__row3'>
                <p><a>Account</a></p>
                <p><a>Ways to Watch</a></p>
                <p><a>Corporate Information</a></p>
                <p><a>Only on Netflix</a></p>
            </div>
            <div className='footer__row4'>
                <p><a>Media Centre</a></p>
                <p><a>Term of Use</a></p>
                <p><a>Contact Us</a></p>
            </div>
        </div>
        <p className='footer__link'><a href='https://github.com/aRumaniac/netflix-clone'>Netflix Clone</a></p>
       </div>
    </footer>
  )
}

export default Footer