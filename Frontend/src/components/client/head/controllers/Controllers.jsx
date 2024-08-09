import React from "react";
import style from "./controllers.module.css";
import Search from "./search/Search";
import Cart from "./cart/Cart";

function Controllers() {
  return (
    <div className={style["mini-cart-wrapper"]}>
      <Search />
      <Cart />
    </div>
  );
}

export default Controllers;
