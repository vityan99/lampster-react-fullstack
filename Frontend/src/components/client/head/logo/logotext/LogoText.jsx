import React from "react";
import style from "./logoText.module.css";

function LogoText({ isAdmin }) {
  return (
    <span>
      <span className={isAdmin ? style["logo__text-admin"] : ""}>lamp</span>
      <span className={style["logo__text-primary"]}>ster</span>
    </span>
  );
}

export default LogoText;