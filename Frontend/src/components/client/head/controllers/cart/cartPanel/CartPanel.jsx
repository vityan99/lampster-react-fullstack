import React from "react";
import style from "./cartPanel.module.css";
import OrderButton from "../orderButton/OrderButton";
import CartItem from "../cartItem/CartItem";

function CartPanel({ open, openClickHandler, products, deleteProductHandler, openCartPopupHandler }) {
  return (
    <div className={`${style["mini-cart-list-wrapper"]} ${open ? style["mini-cart-list-wrapper--active"] : ""}`}>
      <span className={style["mini-cart-list-wrapper__title"]}>Товары в корзине:</span>
      <div className={style["mini-cart-list"]}>
        {products.map(({ productId, img, title, price, count }) => (
          <CartItem
            key={productId}
            id={productId}
            img={img}
            title={title}
            price={price}
            count={count}
            products={products}
            openClickHandler={openClickHandler}
            deleteProductHandler={deleteProductHandler}
          />
        ))}
      </div>
      <OrderButton openCartPopupHandler={openCartPopupHandler} />
    </div>
  );
}

export default CartPanel;
