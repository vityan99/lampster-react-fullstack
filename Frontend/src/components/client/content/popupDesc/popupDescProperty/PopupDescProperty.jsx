import React from "react";
import style from "./popupDescProperty.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons/faAnglesRight";

function PopupDescProperty({ text, value, unit }) {
  return (
    <div className={style.popup__info}>
      <div className={style.popup__icon}>
        <FontAwesomeIcon icon={faAnglesRight} style={{ color: "#000000" }} />
      </div>
      <div className={style.popup__items}>
        <span className={style["popup__item-desc"]}>{text}</span>
        <span className={style["popup__item-text"]}>
          {value} {unit}
        </span>
      </div>
    </div>
  );
}

export default PopupDescProperty;
