import React from "react";
import style from "./order.module.css";
import OrderImg from "../orderImg/OrderImg";

function Order({ productId, title, wattsText, count, price, img, colorText }) {
  const divStyle = {
    backgroundColor: colorText,
  };

  return (
    <div className={style.order}>
      <div className={style["order__img-wrapper"]}>
        <OrderImg img={img} />
      </div>
      <span className={style.order__id}>{productId}</span>
      <span className={style.order__title}>{title}</span>
      <span className={style.order__watts}>{wattsText} Ватт</span>
      <div className={style.order__color} style={divStyle}></div>
      <span className={style.order__count}>{count}</span>
      <span className={style.order__price}>{price} ₽</span>
    </div>
  );
}

export default Order;
