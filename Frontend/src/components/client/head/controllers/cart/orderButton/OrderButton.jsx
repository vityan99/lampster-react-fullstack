import React from "react";
import style from "./orderButton.module.css";

function OrderButton({ openCartPopupHandler }) {
  return (
    <button className={`${style.btn} ${style["btn--order"]}`} onClick={openCartPopupHandler}>
      Оформить заказ
    </button>
  );
}

export default OrderButton;
