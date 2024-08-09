import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductIconFavorite({ icon, clicked, clickHandler }) {
  return <FontAwesomeIcon icon={icon} color={`${clicked ? "red" : ""}`} onClick={clickHandler} />;
}

export default ProductIconFavorite;
