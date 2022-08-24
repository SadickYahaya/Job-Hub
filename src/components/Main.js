import React from "react";
import Jobs from "./Jobs/Jobs";
import Sidebar from "./Jobs/Sidebar";

import './Styles/main.css'

const Main = () => {
  return (
    <div className="jobs-section">
      <Sidebar />
      <Jobs />
    </div>
  );
};

export default Main;
