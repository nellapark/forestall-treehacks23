import React, { useState, useEffect } from "react";
import './css/navbar.css';
import Logo from '../../assets/logo.png';
import { useMatch, Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <div id="bar-cont">
      <div id="bar-logo-cont">
        <img id="bar-logo-img" src={Logo} />
      </div>
      <div id="bar-clickables-cont">
        <Link id="bar-login-button">Login</Link>
        <Link id="bar-demo-button">Request a Demo</Link>
      </div>
    </div>
  );
}

export default Navbar;