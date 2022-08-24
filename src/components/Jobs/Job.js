import React from "react";
import { useNavigate } from "react-router-dom/";

import "../Styles/main.css";
import jobLogo from "../../assets/job-logo.webp";
import { ReactComponent as TimeIcon } from "../../assets/time.svg";
import { ReactComponent as LocationIcon } from "../../assets/location.svg";

const Job = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="job" onClick={() => navigate("/job-details")}>
        <div className="job-logo">
          <img src={jobLogo} alt="" />
          <div className="job-title">
            <span>User Experience Design</span>
            <span>Ception</span>
            <span className="job-location">
              <LocationIcon className="location-icon" />
              Accra, Thompson
            </span>
          </div>
        </div>
        <div className="job-type">
          <span className="date-posted">
            <TimeIcon className="date-posted-icon" />5 days ago
          </span>
          <span className="fulltime">Fulltime</span>
        </div>
      </div>
    </>
  );
};

export default Job;
