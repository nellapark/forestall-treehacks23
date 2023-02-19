import React, {useEffect} from "react";
import "./css/sidebar.css";
import { useMatch, Link } from 'react-router-dom';
import ProfileImage from "../assets/profile.png";
import PractitionersImage from "../assets/practitioners.png";
import NotesImage from "../assets/notes.png";
import AlertImage from "../assets/alert.png";
import AnalyticsImage from "../assets/analytics.png";

const fake_data = [
  {
    "Hospital": "Stanford Medical",
    "Location": "Palo Alto, CA",
    "Practitioner": "",
    "isHospital": true
  },
  {
    "Hospital": "Stanford Medical",
    "Location": "Palo Alto, CA",
    "Practitioner": "Allen Park",
    "isHospital": false
  },
]

const Sidebar = () => {
  const isPatientsRoute = useMatch("patients")
  const isSpecificPatientsRoute = useMatch("patients/:id")
  const isPractitionersRoute = useMatch("practitioners")
  const isNotesRoute = useMatch("notes")
  const isMistakesRoute = useMatch("mistakes")
  const isReportRoute = useMatch("report")
  const isAnalyticsRoute = useMatch("analytics")

  return (
    <div id="sidebar-cont">
      <div id="sidebar-header-cont">
        {/* <svg style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40"><path fill="currentColor" d="M120 816v-66.666h720V816H120Zm0-206.667v-66.666h720v66.666H120Zm0-206.667V336h720v66.666H120Z"/></svg> */}
        {
          fake_data[0]["isHospital"] ?
          <>
            <div className="sidebar-header-hero">{fake_data[0]["Hospital"]}</div>
            <div>{fake_data[0]["Location"]}</div>
          </>
          :
          <>
            <div className="sidebar-header-hero">{fake_data[0]["Practitioner"]}</div>
            <div>{fake_data[0]["Hospital"]}</div>
          </>
        }
      </div>
      <div id="sidebar-content-cont">
        <Link to={"/patients"} className="sidebar-content-element" style={(isPatientsRoute || isSpecificPatientsRoute) ? {backgroundColor: "#7bb9c5"} : {backgroundColor: "#BAD9E0"}}>
          <img src={ProfileImage} className="sidebar-imgs"/>
          <div className="sidebar-titles">Patients</div>
        </Link>
        {/* {
          fake_data[0]["isHospital"] ?
          <Link to={"/practitioners"} className="sidebar-content-element" style={isPractitionersRoute ? {backgroundColor: "#7bb9c5"} : {backgroundColor: "#BAD9E0"}}>
            <img src={PractitionersImage} className="sidebar-imgs"/>
            <div>Practitioners</div>
          </Link>
          :
          <Link to={"/notes"} className="sidebar-content-element" style={isNotesRoute ? {backgroundColor: "#7bb9c5"} : {backgroundColor: "#BAD9E0"}}>
            <img src={NotesImage} className="sidebar-imgs"/>
            <div>Notes</div>
          </Link>
        } */}
        {
          fake_data[0]["isHospital"] ?
          <Link to={"/mistakes"} className="sidebar-content-element" style={isMistakesRoute ? {backgroundColor: "#7bb9c5"} : {backgroundColor: "#BAD9E0"}}>
            <img src={AlertImage} className="sidebar-imgs"/>
            <div className="sidebar-titles">Mistakes</div>
          </Link>
          :
          <Link to={"/report"} className="sidebar-content-element" style={isReportRoute ? {backgroundColor: "#7bb9c5"} : {backgroundColor: "#BAD9E0"}}>
            <img src={AlertImage} className="sidebar-imgs"/>
            <div className="sidebar-titles">Report Error</div>
          </Link>
        }
        {/* <Link to={"/analytics"} className="sidebar-content-element" style={isAnalyticsRoute ? {backgroundColor: "#7bb9c5"} : {backgroundColor: "#BAD9E0"}}>
          <img src={AnalyticsImage} className="sidebar-imgs"/>
          <div>Analytics</div>
        </Link> */}
      </div>
    </div>
  );
}

export default Sidebar;