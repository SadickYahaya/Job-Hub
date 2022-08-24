import React from "react";

import "../Styles/main.css";
import jobLogo from "../../assets/job-logo.webp";

const Job = () => {
  return (
    <>
      <div className="job">
        <div className="job-logo">
          <img src={jobLogo} alt="" />
          <div className="job-title">
            <span>User Experience Design</span>
            <span className="job-location">Accra, Thompson</span>
          </div>
        </div>
        <div className="job-type">
          <span className='date-posted'>5 days ago</span>
          <span className='fulltime'>Fulltime</span>
        </div>
      </div>
    </>
  );
};

export default Job;
