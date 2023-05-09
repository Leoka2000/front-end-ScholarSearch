import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { SiGooglescholar } from 'react-icons/si';
import {BsArrowReturnLeft} from 'react-icons/bs'

import './navbar.css';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className='navbar'>
      {pathname !== '/' ? (
        <Link style={{ textDecoration: 'none' }} to='/'><BsArrowReturnLeft/><h1>Back home</h1></Link>
      ) : (
        <div style={{ textDecoration: 'none' }} to='/'><SiGooglescholar/><h1>ScholarSearch</h1></div>
      )}
    </nav>
  );
};

export default Navbar;