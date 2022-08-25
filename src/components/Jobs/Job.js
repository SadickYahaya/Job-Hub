import React from "react";
import { useNavigate } from "react-router-dom/";

import "../Styles/main.css";
import { ReactComponent as TimeIcon } from "../../assets/time.svg";
import { ReactComponent as LocationIcon } from "../../assets/location.svg";

const Job = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="job" onClick={() => navigate("/job-details")}>
        <div className="job-logo">
          <img src={props.logo} alt="" />
          <div className="job-title">
            <span>{props.jobTitle}</span>
            <span>{props.companyName}</span>
            <span className="job-location">
              <LocationIcon className="location-icon" />
              {props.location}
            </span>
          </div>
        </div>
        <div className="job-type">
          <span className="date-posted">
            <TimeIcon className="date-posted-icon" />{props.datePosted}
          </span>
          <span className="fulltime">{props.jobType}</span>
        </div>
      </div>
    </>
  );
};

export default Job;
