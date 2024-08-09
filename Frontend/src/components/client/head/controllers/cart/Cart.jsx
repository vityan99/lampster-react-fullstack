import React, { useState, useEffect } from "react";
import style from "./cart.module.css";
import CartCalculate from "./cartCalculate/CartCalculate";
import CartIcon from "./cartIcon/CartIcon";
import CartPanel from "./cartPanel/CartPanel";
import CartPopup from "./cartPopup/CartPopup";

function Cart() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartPopupActive, setCartPopupActive] = useState(false);

  const openClickHandler = () => setOpen((current) => !current);

  const deleteProductHandler = (productId) => {
    setProducts((current) => current.filter((product) => product.productId !== productId));
  };

  const deleteAllProducts = () => setProducts([]);

  const resetCartAfterOrderHandler = () => {
    deleteAllProducts();
    openClickHandler();
  };

  const openCartPopupHandler = () => setCartPopupActive((current) => !current);

  const totalPrice = products.reduce((acc, product) => acc + product.price * product.count, 0);
  const totalCount = products.reduce((acc, product) => acc + product.count, 0);

  useEffect(() => {
    const handleBtnBuy = (e) => {
      const newProduct = e.detail;
      setProducts((current) => {
        const existingProductIndex = current.findIndex((product) => product.productId === newProduct.productId);
        if (existingProductIndex !== -1) {
          const updatedProducts = [...current];
          updatedProducts[existingProductIndex] = {
            ...updatedProducts[existingProductIndex],
            count: updatedProducts[existingProductIndex].count + 1,
          };
          return updatedProducts;
        } else {
          return [...current, { ...newProduct, count: 1 }];
        }
      });
    };
    document.body.addEventListener("btnBuy", handleBtnBuy);
    return () => document.body.removeEventListener("btnBuy", handleBtnBuy);
  }, []);

  return (
    <>
      {cartPopupActive && products.length > 0 ? (
        <CartPopup
          cartPopupActive={cartPopupActive}
          openCartPopupHandler={openCartPopupHandler}
          products={products}
          resetCartAfterOrderHandler={resetCartAfterOrderHandler}
        />
      ) : null}
      <div className={style["mini-cart"]}>
        <CartIcon clickHandler={openClickHandler} products={products} />
        <CartPanel
          open={open}
          openClickHandler={openClickHandler}
          products={products}
          deleteProductHandler={deleteProductHandler}
          openCartPopupHandler={openCartPopupHandler}
        />
      </div>
      <div className={style["cart-calc"]}>
        <CartCalculate price={totalPrice} count={totalCount} />
      </div>
    </>
  );
}

export default Cart;
