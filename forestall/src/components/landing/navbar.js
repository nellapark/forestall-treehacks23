import React, { useState, useEffect } from "react";
import './css/navbar.css';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return(
    <div id="bar-cont">
      <div id="bar-logo-cont">
        <img id="bar-logo-img" src={Logo} />
      </div>
      <div id="bar-clickables-cont">
        <div id="bar-login-button">Login</div>
        <div id="bar-demo-button">Request a Demo</div>
      </div>
    </div>
  );
}

export default Navbar;