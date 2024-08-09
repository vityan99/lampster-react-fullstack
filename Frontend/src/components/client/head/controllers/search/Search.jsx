import React, { useState } from "react";
import style from "./search.module.css";
import SearchButton from "./searchButton/SearchButton";
import SearchInput from "./searchInput/SearchInput";

function Search() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const openSearchHandler = () => {
    setOpen((current) => !current);
  };

  return (
    <div className={style["mini-search-wrapper"]} data-mini-search-wrapper>
      <div className={style["mini-search"]} data-element="miniSearch">
        <SearchButton clickHandler={openSearchHandler} />
        <SearchInput open={open} value={value} onChange={setValue} />
      </div>
    </div>
  );
}

export default Search;
