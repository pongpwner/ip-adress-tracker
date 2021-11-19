import React from "react";
import "./search-bar.styles.scss";
import arrow from "../../images/icon-arrow.svg";

const SearchBar = ({ search, setSearch, placeholder, onSubmit }) => (
  <div className="search-bar">
    <input
      placeholder={placeholder}
      type="text"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    ></input>
    <button type="button" onClick={onSubmit}>
      <img src={arrow} alt="arrow" />
    </button>
  </div>
);

export default SearchBar;
