import React, { useState } from 'react';
import vlogo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import '../styles/navbar.css';
import { Link } from 'react-scroll';

const NavbarComponent = () => {
    const [showMenu,setShowMenu]=useState(false);

    const toggleMenu=()=>{
        setShowMenu(!showMenu);
    }
  return (
    <nav className='navbar'>
            <img src={vlogo} alt="Logo"  className='logo'/>

            <div className='nav-links'>                
                <Link className='nav-item' activeClass='active' to='home' spy={true} smooth='true' offset={-100} duration={500}>Home</Link>
                <Link className='nav-item' activeClass='active' to='about' spy={true} smooth='true' offset={-100} duration={500}>About</Link>
                <Link className='nav-item' activeClass='active' to='projects' spy={true} smooth='true' offset={-100} duration={500}>Projects</Link>
                <Link className='nav-item' activeClass='active' to='skills' spy={true} smooth='true' offset={-100} duration={500}>Skills</Link>
            </div>

            <div className="cta">
                <button className='contactBtn' onClick={(e)=>{
                    document.getElementById('contact').scrollIntoView({behavior:'smooth',offset:-100});
                }}>
                <FontAwesomeIcon icon={faMessage} className='contactIcon'/>
                    Contact Me
                </button>
            </div>

            <div className={`mobile-nav text-center ${showMenu ? 'active':''}`}>
                <div className="mob-links">
                    <Link className='mob-item' activeClass='active' to='home' spy={true} smooth='true' offset={-100} duration={500} onClick={toggleMenu}>Home</Link>
                    <Link className='mob-item' activeClass='active' to='about' spy={true} smooth='true' offset={-100} duration={500} onClick={toggleMenu}>About</Link>
                    <Link className='mob-item' activeClass='active' to='projects' spy={true} smooth='true' offset={-100} duration={500} onClick={toggleMenu}>Projects</Link>
                    <Link className='mob-item' activeClass='active' to='skills' spy={true} smooth='true' offset={-100} duration={500} onClick={toggleMenu}>Skills</Link>
                    <Link className='mob-item' activeClass='active' to='contact' spy={true} smooth='true' offset={-100} duration={500} onClick={toggleMenu}>Contact</Link>
                </div>
            </div>

            <div className="mob-menu-icon" >
                {
                    showMenu ? (
                        <img src="/icons/close.svg" alt="Menu" className='mob-menu' onClick={toggleMenu}/>
                    ):(
                        <img src="/icons/menu.svg" alt="Menu" className='mob-menu' onClick={toggleMenu}/>
                    )
                }
            </div>
    </nav>
  )
}

export default NavbarComponent;
