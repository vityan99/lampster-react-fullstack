import React, { useEffect } from "react";
import style from "./popupImg.module.css";

function PopupImg({ clicked, img, clickHandler }) {
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
          <img src={img} alt="product" />
          <button className={`${style.btn} ${style.popup__btn}`} onClick={clickHandler}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupImg;
