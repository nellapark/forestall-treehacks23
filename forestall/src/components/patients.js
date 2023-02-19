import React, {useState} from "react";
import "./css/patients.css";
import { Link } from 'react-router-dom';
import Sidebar from "./sidebar.js";
import Modals from "../assets/modals.png"
import Rows from "../assets/rows.png"
import MagnifyingGlass from "../assets/magnifyingglass.png"
import Arrow from "../assets/arrow.png"
import Alert from "../assets/alert.png"

const Patients = () => {

  const fake_data = [
    {
      profile_url: "https://s3.amazonaws.com/arc-authors/washpost/50eda441-600e-4fa5-9f0d-6cb1714ac367.png",
      patient_id: 124085,
      practitioner_id: 108646,
      name: "Kathy Jane",
      gender: false,
      weight: 119,
      age: 32,
      allergies: ["Soy", "Shellfish"],
      current_medication: ["Aspirin"],
      risk: 1
    },
    {
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
    },
  ]

  const [isRow, setIsRow] = useState(true)

  const returnRiskString = riskLevel => {
    if (riskLevel==0) return "Low Risk"
    else if (riskLevel==1) return "Medium Risk"
    else return "High Risk"
  }

  return (
    <div id="patients-cont">
      <Sidebar />
      <div id="patients-inner-cont">
        <div id="patients-child-cont">
          <div id="patients-search-cont">
            <input id="patients-search-input" placeholder="Search..." />
            <div id="patients-search-button">
              <img src={MagnifyingGlass} className="patients-search-imgs" />
            </div>
            {/* <div id="patients-search-toggle">
              {
                isRow ?
                  <img className="patients-search-imgs" src={Modals} />
                :
                  <img className="patients-search-imgs" src={Rows} />
              }
            </div> */}
          </div>
          <div id="patients-parameters-cont">
            <div className="patients-parameter" style={{cursor: "pointer"}}>
              <div>Patient ID</div>
              {/* <img src={Arrow} className="patients-arrow-imgs"/> */}
            </div>
            <div className="patients-parameter">
              <div>Demographic</div>
            </div>
            <div className="patients-parameter">
              <div>Allergies</div>
            </div>
            <div className="patients-parameter">
              <div>Current Med.</div>
            </div>
            <div className="patients-parameter" style={{cursor: "pointer"}}>
              <div>Risks</div>
              {/* <img src={Arrow} className="patients-arrow-imgs"/> */}
            </div>
          </div>
          <div id="patients-results-cont">
            {
              fake_data.map(patient => {
                return(
                  <Link to={String(patient["patient_id"])} className="patients-row-cont">
                    <div className="patients-parameter">
                      <div className="patients-subsection-inner">
                        <img className="patients-img" src={patient["profile_url"]} />
                      </div>
                      <div className="patients-subsection-inner" style={{flexDirection: "column"}}>
                        <div>#{patient["patient_id"]}</div>
                        <div>{patient["name"]}</div>
                      </div>
                    </div>
                    <div className="patients-parameter" style={{flexDirection: "column"}}>
                      <div className="patients-horizontal-split-cell">
                        {
                          patient["gender"]?
                          <div className="patients-male-label">Male</div>
                            :
                          <div className="patients-female-label">Female</div>
                        }
                      </div>
                      <div className="patients-horizontal-split-cell">
                        <div className="patients-weight-label">{patient["weight"]} lbs</div>
                        <div className="patients-age-label">{patient["age"]} yrs</div>
                      </div>
                    </div>
                    <div className="patients-parameter" style={{flexDirection: "column", justifyContent: "space-evenly"}}>
                      {
                        patient["allergies"].map(allergy => {
                          return(
                            <div className="patients-allergy-cell">{allergy}</div>
                          )
                        })
                      }
                    </div>
                    <div className="patients-parameter" style={{flexDirection: "column", justifyContent: "space-evenly"}}>
                      {
                        patient["current_medication"].map(medication => {
                          return(
                            <div className="patients-medication-cell">{medication}</div>
                          )
                        })
                      }
                    </div>
                    <div className="patients-parameter">
                      <div className="patients-risk-label" style={
                        patient["risk"]==0 ? {backgroundColor: "#E8F0F2"} :
                        patient["risk"]==1 ? {backgroundColor: "#F3C77A"} :
                        {backgroundColor: "#F08489"}
                        }>
                        <img className="patients-cell-imgs" style={{marginRight: "5px"}} src={Alert} />
                        {returnRiskString(patient["risk"])}
                      </div>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patients;