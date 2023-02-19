import React, {useRef} from "react";
import "./css/mistakes.css";
import "./css/patients.css";
import Sidebar from "./sidebar.js";
import Arrow from "../assets/arrow.png";
import Alert from "../assets/alert-red.png";

const Mistakes = () => {
  const fake_data = [
    {
      patient_id: 12,
      date: "2/12/22",
      error_medication: "oxy",
      description: "patient was allergic"
    },
    {
      patient_id: 12,
      date: "2/12/22",
      error_medication: "oxy",
      description: "patient was allergic"
    },
  ]
  const fetched_object = {
    profile_url: "https://s3.amazonaws.com/arc-authors/washpost/50eda441-600e-4fa5-9f0d-6cb1714ac367.png",
    patient_id: 113211,
    practitioner_id: 207461,
    name: "Deontay James",
    gender: true,
    weight: 186,
    age: 38,
    allergies: ["Nuts"],
    current_medication: ["Oxy"],
    risk: 2
  };
  return (
    <div id="mistakes-cont">
      <Sidebar />
      <div id="patients-inner-cont">
        <div id="patients-child-cont">
          <div id="patients-search-cont" style={{alignItems: "center"}}>
            <img className="reported-error-img" src={Alert} />
            <div className="reported-error-header">Reported Errors</div>
          </div>
          <div id="patients-parameters-cont">
            <div className="patients-parameter" style={{cursor: "pointer"}}>
              <div>Date</div>
              {/* <img src={Arrow} className="patients-arrow-imgs"/> */}
            </div>
            <div className="patients-parameter" style={{cursor: "pointer"}}>
              <div>Patient ID</div>
              {/* <img src={Arrow} className="patients-arrow-imgs"/> */}
            </div>
            <div className="patients-parameter">
              <div>Error Med.</div>
            </div>
            <div className="patients-parameter" style={{width: "40%"}}>
              <div>Description</div>
            </div>
          </div>
          <div id="patients-results-cont">
            {
              fake_data.map(mistake => {
                return(
                  <div className="patients-row-cont">
                    <div className="patients-parameter" style={{flexDirection: "column"}}>
                      {mistake["date"]}
                    </div>
                    <div className="patients-parameter">
                      <div className="patients-subsection-inner">
                        <img className="patients-img" src={fetched_object["profile_url"]} />
                      </div>
                      <div className="patients-subsection-inner" style={{flexDirection: "column"}}>
                        <div>#{fetched_object["patient_id"]}</div>
                        <div>{fetched_object["name"]}</div>
                      </div>
                    </div>
                    <div className="patients-parameter">
                    <div className="patients-medication-cell">{mistake["error_medication"]}</div>
                    </div>
                    <div className="patients-parameter" style={{width: "40%"}}>
                      {mistake["description"]}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mistakes;