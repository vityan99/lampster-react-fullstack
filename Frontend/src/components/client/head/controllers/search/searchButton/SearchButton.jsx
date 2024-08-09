import React from "react";
import style from "./searchButton.module.css";
import SearchIcon from "../searchIcon/SearchIcon";

function SearchButton({ clickHandler }) {
  return (
    <button className={`${style.btn} ${style["btn--search"]} ${style["header__control-btn"]}`} onClick={clickHandler}>
      <SearchIcon />
    </button>
  );
}

export default SearchButton;
