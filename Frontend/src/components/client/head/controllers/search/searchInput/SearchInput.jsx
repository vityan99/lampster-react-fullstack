import React from "react";
import style from "./searchInput.module.css";

function SearchInput({ open, value, onChange }) {
  const inputHandler = (e) => {
    onChange(e.target.value);

    const event = new CustomEvent("searchProduct", {
      bubbles: true,
      detail: e.target.value,
    });
    e.currentTarget.dispatchEvent(event);
  };

  return (
    <div className={`${style["mini-search__form-wrapper"]} ${open ? style["mini-search__form-wrapper--active"] : ""}`}>
      <form className={style["mini-search-form"]} action="#" method="post">
        <input
          className={style["mini-search-form__field"]}
          type="text"
          placeholder="Название продукта..."
          value={value}
          onChange={inputHandler}
        />
      </form>
    </div>
  );
}

export default SearchInput;
