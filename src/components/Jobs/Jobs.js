import React from "react";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
import jobLogo from "../../assets/job-logo.webp";
import jobLogo2 from "../../assets/logo2.png";
import jobLogo3 from "../../assets/logo3.jpg";
import "../Styles/main.css";
import Job from "./Job";

const Jobs = () => {
  return (
    <div className="jobs">
      <Job
        logo={jobLogo}
        jobTitle="UI/UX Designer"
        companyName="Ception"
        location="Accra, Ghana"
        datePosted="10 days ago"
        jobType="PartTime"
      />
      <Job
        logo={jobLogo2}
        jobTitle="Python Developer"
        companyName="Twitter"
        location="Kumasi, Ghana"
        datePosted="2 days ago"
        jobType="FullTime"
      />
      <Job logo={jobLogo3}
        jobTitle="Senior React Developer"
        companyName="Amalitech"
        location="Takoradi, Ghana"
        datePosted="2 days ago"
        jobType="FullTime" />
      <Job />
      <Job />
    </div>
  );
};

export default Jobs;
