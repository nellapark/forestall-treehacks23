import React, {useRef} from "react";
import "./css/report.css";
import "./css/patients.css";
import Sidebar from "./sidebar.js";
import Alert from "../assets/alert-red.png"

const Report = () => {
  return (
    <div id="report-cont">
      <Sidebar />
      <div id="patients-inner-cont">
        <div id="patients-child-cont" style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
          <div id="patients-search-cont" style={{alignItems: "center"}}>
            <img className="reported-error-img" src={Alert} />
            <div className="reported-error-header">Report Error (anonymous)</div>
          </div>
          <div id="report-dropdown-cont">
            <div id="report-inner-dropdown-cont">
              <div className="report-dropdown">
                <div className="report-text-cont">PATIENT NAME:</div>
                <input className="report-inputs" />
              </div>
              <div className="report-dropdown">
                <div className="report-text-cont">MEDICATION:</div>
                <input className="report-inputs" />
              </div>
            </div>
          </div>
          <div id="report-description-cont">
            <div className="report-description-outer">
              <div className="report-description">DESCRIPTION:</div>
            </div>
            <input className="report-inputs" style={{height: "60%", width: "50%", marginLeft: "50px"}} />
          </div>
          <div id="report-submit-button">SUBMIT</div>
        </div>
      </div>
    </div>
  );
}

export default Report;