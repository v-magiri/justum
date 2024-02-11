import React from 'react';
import logo from '../../public/assets/victor.svg';
import vlogo from '../../public/assets/logo.png';
import '../styles/navbar.css';

const NavbarComponent = () => {
  return (
    <nav className='navbar'>
        <img src={vlogo} alt="Logo"  className='logo'/>
        <div className="menu">
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        </div>
        <div className="cta">
            <button>Contact Me</button>
        </div>
    </nav>
  )
}

export default NavbarComponent;
