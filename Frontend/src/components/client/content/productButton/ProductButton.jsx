import React from "react";
import style from "./productButton.module.css";

function ProductButton({ buttonTitle, id, color, watt, title, price }) {
  const clickHandler = (e) => {
    const event = new CustomEvent("btnBuy", {
      bubbles: true,
      detail: {
        productId: id,
        img: color.img,
        title,
        price,
        wattsId: watt.id,
        wattsText: watt.text,
        colorId: color.id,
        colorText: color.text,
      },
    });
    e.currentTarget.dispatchEvent(event);
  };

  return (
    <button className={`${style.btn} ${style["btn--buy"]}`} onClick={clickHandler}>
      {buttonTitle}
    </button>
  );
}

export default ProductButton;
