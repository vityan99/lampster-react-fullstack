import React from "react";
import style from "./orderImg.module.css";

function OrderImg({ img }) {
  return <img className={style.order__img} src={img} alt="product" />;
}

export default OrderImg;
