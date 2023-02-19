import React, { useState, useEffect } from "react";
import './css/cta.css';
import Radar from "../../assets/radar.png"
import Binocular from "../../assets/binocular.png"
import Pill from "../../assets/pill.png"
import { useGLTF } from '@react-three/drei'


const CTA = () => {
  const glbfile = "/stethoscope.glb";
  const StethoscopeModel = () => {
    const { scene } = useGLTF(glbfile);
    return (
      <mesh>
        {/* <primitive position={[0,0,0]} object={scene} dispose={null} scale={3} rotation={[deg2rad(35),deg2rad(-45),0]} /> */}
        <primitive position={[0,0,0]} object={scene} dispose={null} />
      </mesh>
    )
  }
  return(
    <div id="cta-cont">
      <div id="cta-header">Eliminate medication uncertainty</div>
      <div id="cta-description-cont">
        <div id="cta-description-left">
          <div id="cta-description-left-text-cont">
            <div className="cta-description-left-content">
              <img className="cta-imgs" src={Radar} />
              <div>Detect various medication risk levels for a patient</div>
            </div>
            <div className="cta-description-left-content">
              <img className="cta-imgs" src={Binocular} />
              <div>Foresee possible causes of medication issues with AI</div>
            </div>
            <div className="cta-description-left-content">
              <img className="cta-imgs" src={Pill} />
              <div>Identify incompatible prescriptions</div>
            </div>
          </div>
          <div id="cta-description-left-button">Request a Demo</div>
        </div>
        {/* <div id="cta-description-right">
          <StethoscopeModel />
        </div> */}
      </div>
    </div>
  );
}

export default CTA;