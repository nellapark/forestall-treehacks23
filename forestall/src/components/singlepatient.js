import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import "./css/singlepatient.css";
import "./css/patients.css";
import Sidebar from "./sidebar.js";
import { useParams } from 'react-router-dom';
import BackArrow from "../assets/back-arrow.png";
import Alert from "../assets/alert.png";
import Trash from "../assets/trash.png";
import Plus from "../assets/plus.png";
import MagnifyingGlass from "../assets/magnifyingglass.png";

const SinglePatient = () => {
  const {patient_id} = useParams();
  const [patientObject, setPatientObject] = useState({profile_url: "", patient_id: 0, practitioner_id: 0, name: "", gender: true, weight: 0, age: 0, allergies: [], current_medication: [], risk: 0});
  useEffect(() => {
    // make backend call to get patient
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
    setPatientObject(fetched_object);
  }, [])

  const returnRiskString = riskLevel => {
    if (riskLevel==0) return "Low Risk"
    else if (riskLevel==1) return "Medium Risk"
    else return "High Risk"
  }

  const fake_notes_data = [{
    patient_id: 11,
    practitioner_id: 12,
    note: "Patient prefers pills over liquid medicine",
    date: "2/23/22"
  },
  {
    patient_id: 18,
    practitioner_id: 14,
    note: "No visible signs of allergic reaction to pollen",
    date: "2/23/22"
  },
]

  return (
    <div id="singlepatient-cont">
      <Sidebar />
      <div id="singlepatient-inner-cont">
        <div id="singlepatient-child-cont">
          <div id="singlepatient-header-cont">
            <Link to="/patients" id="singlepatient-header-img">
              <img src={BackArrow} id="singlepatient-arrow-img" />
            </Link>
            <div id="singlepatient-header-hero">
              <div id="singlepatient-header-name">{patientObject["name"]}</div>
              <div id="singlepatient-header-id">#{patientObject["patient_id"]}</div>
            </div>
            <div id="singlepatient-risk-cont">
              <div className="singlepatient-risk-label" style={
                patientObject["risk"]==0 ? {backgroundColor: "#E8F0F2"} :
                patientObject["risk"]==1 ? {backgroundColor: "#F3C77A"} :
                {backgroundColor: "#F08489"}
                }>
                <img className="patients-cell-imgs" style={{marginRight: "5px"}} src={Alert} />
                {returnRiskString(patientObject["risk"])}
              </div>
            </div>
          </div>
          <div id="singlepatient-profile-cont">
            <div id="singlepatient-profile-image-cont">
              <img id="singlepatient-profile-image" src={patientObject["profile_url"]} />
            </div>
            <div id="singlepatient-measurables-cont">
              <div className="singlepatient-measurables-cell">
                <div style={{marginRight: "10px"}}>Gender:</div>
                {
                  patientObject["gender"]?
                  <div className="patients-male-label">Male</div>
                    :
                  <div className="patients-female-label">Female</div>
                }
              </div>
              <div className="singlepatient-measurables-cell">
                <div style={{marginRight: "10px"}}>Weight:</div>
                <div className="patients-weight-label">{patientObject["weight"]} lbs</div>
              </div>
              <div className="singlepatient-measurables-cell">
                <div style={{marginRight: "10px"}}>Age:</div>
                <div className="patients-age-label">{patientObject["age"]} yrs</div>
              </div>
            </div>
            <div className="singlepatient-lists-cont">
              <div id="singlepatient-allergies-header">ALLERGIES</div>
              <div id="singlepatient-allergies">
                {
                  patientObject["allergies"].map(allergy => {
                    return(
                      <div className="patients-allergy-cell">{allergy}</div>
                    )
                  })
                }
              </div>
            </div>
            <div className="singlepatient-lists-cont" style={{width: "30%"}}>
              <div id="singlepatient-allergies-header">CURRENT MEDICATION</div>
              <div id="singlepatient-allergies">
              {
                patientObject["current_medication"].map(medication => {
                  return(
                    <div className="patients-medication-cell">{medication}</div>
                  )
                })
              }
              </div>
            </div>
          </div>
          <div id="singlepatient-other-cont">
            <div id="singlepatient-notes-cont">
              <div id="singlepatient-notes-header">NOTES:</div>
              <div id="singlepatient-notes-content">
                {
                  fake_notes_data.map(note => {
                    return(
                      <div className="singlepatient-note-cell">
                        <div>{note["date"]} &#x2022; {note["note"]}</div>
                        <div className="singlepatient-notedelete">                    
                          <img className="patients-cell-imgs" style={{marginRight: "5px"}} src={Trash} />
                          <div>Delete</div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div id="singlepatient-notes-create">
                <input id="singlepatient-notes-create-input" placeholder="Add new..." />
                <div className="singlepatient-notedelete" style={{backgroundColor: "#D8FBCF"}}>                    
                  <img className="patients-cell-imgs" style={{marginRight: "5px"}} src={Plus} />
                  <div>Add</div>
                </div>
              </div>
            </div>
            <div id="singlepatient-incompatible-cont">
              <div id="singlepatient-incompatible-modal">
                <div id="singlepatient-incompatible-header">INCOMPATIBLE MEDICATION:</div>
                <div id="singlepatient-incompatible-search">
                  <input id="singlepatient-incompatible-search-input" placeholder="Search..." />
                  <div id="singlepatient-incompatible-search-button">
                    <img src={MagnifyingGlass} className="patients-search-imgs" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePatient;