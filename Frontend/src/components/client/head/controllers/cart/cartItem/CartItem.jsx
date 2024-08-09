import React from "react";
import style from "./cartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function CartItem({ id, img, title, price, count, products, openClickHandler, deleteProductHandler }) {
  const clickDeleteHandler = () => {
    if (products.length > 1) {
      deleteProductHandler(id);
    } else {
      deleteProductHandler(id);
      openClickHandler();
    }
  };

  return (
    <div className={style["mini-product"]}>
      <div className={style["mini-product__img-wrapper"]}>
        <img className={style["mini-product__img"]} src={img} alt="product" />
      </div>
      <div className={style["mini-product__content"]}>
        <h4 className={style["mini-product__title"]}>{title}</h4>
        <span className={style["mini-product__count"]}>
          {price} руб. {count === 1 ? "" : `${count} шт.`}
        </span>
      </div>
      <button className={`${style.btn} ${style["btn--delete"]}`}>
        <FontAwesomeIcon icon={faXmark} style={{ color: "#f56a43" }} onClick={clickDeleteHandler} />
      </button>
    </div>
  );
}

export default CartItem;
