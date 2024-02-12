import React from 'react';
import vlogo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <nav className='navbar'>
        <img src={vlogo} alt="Logo"  className='logo'/>
        <div className="menu">
            <ul className='menuContainer'>
                <li className='nav-item'><a href="">Home</a></li>
                <li className='nav-item'><a href="">About</a></li>
                <li className='nav-item'><a href="">Projects</a></li>
                <li className='nav-item'><a href="">Blog</a></li>
            </ul>
        </div>
        <div className="cta">
            <button className='contactBtn'>
                <FontAwesomeIcon icon={faMessage} className='contactIcon'/>
                Contact Me
            </button>
        </div>
    </nav>
  )
}

export default NavbarComponent;
