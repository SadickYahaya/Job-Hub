import React from "react";
// import useLocalStorage from "use-local-storage";

// import { ReactComponent as DownArrow } from "../../assets/down.svg";
import "../Styles/sidebar.css";
import CitySelect from "../../utils/Radio";
import FullTImeCheckbox from "../../utils/Checkbox";

const Sidebar = () => {
  //   const [showLocations, setShowLocations] = useLocalStorage("");
  //   const [jobType, setShowJobType] = useLocalStorage("");

  return (
    <>
      <div className="sidebar">
        <CitySelect />
        <div className="full-time-checkbox">
          <FullTImeCheckbox />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
