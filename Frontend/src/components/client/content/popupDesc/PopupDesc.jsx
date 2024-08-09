import React, { useEffect } from "react";
import style from "./popupDesc.module.css";
import PopupDescProperty from "./popupDescProperty/PopupDescProperty";

function PopupDesc({ clicked, clickHandler, properties }) {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      clickHandler();
    }
  };

  useEffect(() => {
    if (clicked) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [clicked, clickHandler]);

  const handleClickOutside = (event) => {
    if (event.target.classList.contains(style.popup__wrapper)) {
      clickHandler();
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={`${style.popup} ${clicked ? style["popup--active"] : ""}`}>
      <div className={style.popup__wrapper}>
        <div className={style.popup__container}>
          <button className={`${style.btn} ${style.popup__btn}`} onClick={clickHandler}>
            X
          </button>
          <div className={style["popup__info-block"]}>
            {properties.map(({ text, value, unit }) => (
              <PopupDescProperty text={text} value={value} unit={unit} key={text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupDesc;