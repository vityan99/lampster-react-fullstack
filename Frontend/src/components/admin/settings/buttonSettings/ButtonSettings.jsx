import React from "react";
import style from "./buttonSettings.module.css";
import IconSettings from "../iconSettings/IconSettings";

function ButtonSettings({ clickSettingsHandler }) {
  return (
    <button className={style.btn} onClick={clickSettingsHandler}>
      <IconSettings />
    </button>
  );
}

export default ButtonSettings;
