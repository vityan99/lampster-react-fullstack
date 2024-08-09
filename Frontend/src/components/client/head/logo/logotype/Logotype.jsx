import React from "react";
import style from "./logotype.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";

function Logotype() {
  return (
    <i className={style.logo__ico}>
      <FontAwesomeIcon icon={faFireFlameCurved} size="1x" />
    </i>
  );
}

export default Logotype;
