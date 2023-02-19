import React, { useState, useEffect } from "react";
import './css/header.css';
import LandingImage from '../../assets/forestall-landing.png';

const Header = () => {
  return(
    <div id="header-cont">
      <img src={LandingImage} id="header-img" />
      <div id="header-text-cont">
        <div id="header-hero">Catch medication mistakes beforehand</div>
        <div id="header-description">Use Forestall to identify patients with high risk to medication mistakes and discover optimal prescriptions.</div>
      </div>
    </div>
  );
}

export default Header;