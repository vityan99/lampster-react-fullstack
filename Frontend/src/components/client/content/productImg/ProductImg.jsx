import React from "react";
import style from "./productImg.module.css";

function ProductImg({ img, clickHandler }) {
  return <img className={style.product__img} alt="product" src={img} onClick={clickHandler} />;
}

export default ProductImg;
