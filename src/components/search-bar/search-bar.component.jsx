import React from "react";
import "./search-bar.styles.scss";
import arrow from "../../images/icon-arrow.svg";

const SearchBar = () => (
  <div className="search-bar">
    <form>
      <input type="text"></input>
      <button type="submit">
        <img src={arrow} alt="arrow" />
      </button>
    </form>
  </div>
);

export default SearchBar;
