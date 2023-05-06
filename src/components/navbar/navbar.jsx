import React, { useState, useRef } from 'react'

import './navbar.css'
import logo1 from '../../assets/brand/logo.png'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-scroll'

import './navbar.css';

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);
  const navRef = useRef();


  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };


  const navbarScroll = () => {
    if (window.scrollY >= 100) {
      setNavbar(false)

    } else {
      setNavbar(true)

    }
  }

  window.addEventListener('scroll', navbarScroll)

  return (
    <>
      <nav className={navbar ? "navbar" : "activated"}>
        <div className='logo-wrapper'>
          <img alt='Logo BioNexus' src={logo1} />
        </div>

        <ul className='original-size-ul' ref={navRef}>
          <li><Link onClick={showNavbar} to="services" spy={true} smooth={true} offset={100} duration={500}>Sobre</Link></li>
          <li><Link onClick={showNavbar} to="about" spy={true} smooth={true} offset={100} duration={500}>Serviços</Link></li>
          <li><Link onClick={showNavbar} to="team" spy={true} smooth={true} offset={-100} duration={500}>Contato</Link></li>
          <button className="nav-contact-btn"><Link onClick={showNavbar} to="contact" spy={true} smooth={true} offset={100} duration={500}>Portfolio</Link></button>
          <button
            className="nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </ul>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </nav>


    </>
  );
}

export default Navbar
