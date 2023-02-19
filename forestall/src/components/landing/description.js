import React, { useState, useEffect } from "react";
import './css/description.css';
import MedicalVideo from '../../assets/medical-video.mp4'


const Description = () => {
  return(
    <div id="description-cont">
      <video id="description-video" muted autoPlay loop>
        <source src={MedicalVideo} type="video/mp4"/>
      </video>
      <div id="description-header-cont">
        <div id="description-header">A costly mistake</div>
      </div>
      <div id="description-header-content">
        <div id="description-header-content-text">
          Medical errors were estimated to be <b>the third leading cause of death</b> in the U.S. if it were counted as a disease. Furthermore, nearly <b>two-thirds</b> of these are preventable.
        </div>
      </div>
    </div>
  );
}

export default Description;