import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductIconMore({ icon, clickHandler }) {
  return <FontAwesomeIcon icon={icon} onClick={clickHandler} />;
}

export default ProductIconMore;
