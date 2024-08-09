import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartIcon({ clickHandler, products }) {
  const iconStyles = {
    cursor: "pointer",
  };

  return (
    <FontAwesomeIcon style={iconStyles} icon={faCartShopping} size="lg" color="#FFF" onClick={products.length > 0 ? clickHandler : null} />
  );
}

export default CartIcon;
