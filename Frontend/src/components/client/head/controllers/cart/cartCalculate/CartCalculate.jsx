import React from "react";
import style from "./cartCalculate.module.css";

function CartCalculate({ price, count }) {
  return (
    <div className={style["cart-calc"]}>
      <div className={style["mini-cart__calculates-wrapper"]}>
        <span className={style["mini-cart__calculate"]}>{price ? price : 0} руб</span>
        <span className={style["mini-cart__count"]}>{count ? count : 0} товаров</span>
      </div>
    </div>
  );
}

export default CartCalculate;
