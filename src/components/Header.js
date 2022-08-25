import React from "react";
import useLocalStorage from "use-local-storage";

import "./Styles/header.css";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as DownArrow } from "../assets/down.svg";
import { ReactComponent as MoonIcon } from "../assets/moon.svg";
import { ReactComponent as SunIcon } from "../assets/sun.svg";
import avatar from "../assets/avatar.jpg";
// import Search from "./Search";

const Header = (props) => {
  const [icon, setIcon] = useLocalStorage("");

  const onClick = () => {
    props.onClick();
    setIcon(!icon);
  };
  return (
    <>
      <header>
        <div className="logo">
          <Logo className="jobs-logo" />
          <h3>Jobs Hub</h3>
        </div>
        <div className="navbar">{/* <Search /> */}</div>
        <div className="profile">
          <span onClick={onClick}>
            {icon ? (
              <MoonIcon className="moon-icon" />
            ) : (
              <SunIcon className="moon-icon" />
            )}
          </span>
          <img src={avatar} alt="" />
          <p>Sadick Yahaya Abubakar</p>
          <DownArrow className="down-arrow" />
        </div>
      </header>
    </>
  );
};

export default Header;
