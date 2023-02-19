import React, {useRef} from "react";
import Navbar from './landing/navbar.js'
import Header from './landing/header.js'
import Description from './landing/description.js'
import CTA from './landing/cta.js'

const Landing = () => {

  return (
    <div>
      <Navbar />
      <Header />
      <Description />
      <CTA />
    </div>
  );
}

export default Landing;