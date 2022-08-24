import React from "react";

import "./Styles/header.css";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as DownArrow } from "../assets/down.svg";
import { ReactComponent as MoonIcon } from "../assets/moon.svg";
import avatar from "../assets/avatar.jpg";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <Logo className="jobs-logo" />
          <h3>Jobs Hub</h3>
        </div>
        <div className="navbar">
          <span>Find Jobs</span>
          <span>Company Reviews</span>
        </div>
        <div className="profile">
          <MoonIcon className="moon-icon" />
          <img src={avatar} alt="" />
          <p>Sadick Yahaya Abubakar</p>
          <DownArrow />
        </div>
      </header>
    </>
  );
};

export default Header;
