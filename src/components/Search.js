import React from "react";
import "./Styles/search.css";

const Search = () => {
  return (
    <>
      <div className="search">
        <form className="search-form">
          <input type="text" placeholder="job titles, keywords or company" />
          <input type="text" placeholder="city, state or zip code" />
          <button className='btn'>Find Jobs</button>
        </form>
      </div>
    </>
  );
};

export default Search;
