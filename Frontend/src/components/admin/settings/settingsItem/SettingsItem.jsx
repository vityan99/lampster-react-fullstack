import React from "react";
import style from "./settingsItem.module.css";

function SettingsItem({ value, userId, userPassword, popupHandler }) {
  return (
    <li className={style.menu__item}>
      <button className={`${style.btn} ${style.menu__btn}`} onClick={popupHandler}>{value}</button>
    </li>
  );
}

export default SettingsItem;
