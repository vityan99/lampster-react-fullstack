import React, { useState } from "react";
import axios from "axios";
import style from "./cartPopup.module.css";

function CartPopup({ cartPopupActive, openCartPopupHandler, products, resetCartAfterOrderHandler }) {
  console.log(products)
  const [userOrderInfo, setUserOrderInfo] = useState({
    userName: "",
    userSurname: "",
    userPhone: "",
    userAdress: "",
    orderData: products,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserOrderInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendOrderRequest = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/createOrder", userOrderInfo)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const buttonOrderHandler = (e) => {
    sendOrderRequest(e);
    openCartPopupHandler();
    resetCartAfterOrderHandler();
  };

  return (
    <div className={`${style.popup} ${cartPopupActive ? style["popup--active"] : ""}`}>
      <div className={style.popup__wrapper}>
        <div className={style.popup__container}>
          <button className={`${style.btn} ${style.popup__btn}`} onClick={openCartPopupHandler}>
            X
          </button>
          <form className={style["order-form"]} action="#">
            <h1 className={style["order-title"]}>Оформление заказа</h1>
            <input
              className={style["order-input"]}
              type="text"
              placeholder="Имя"
              name="userName"
              value={userOrderInfo.userName}
              onChange={handleInputChange}
            />
            <input
              className={style["order-input"]}
              type="text"
              placeholder="Фамилия"
              name="userSurname"
              value={userOrderInfo.userSurname}
              onChange={handleInputChange}
            />
            <input
              className={style["order-input"]}
              type="text"
              placeholder="Телефон"
              name="userPhone"
              value={userOrderInfo.userPhone}
              onChange={handleInputChange}
            />
            <input
              className={style["order-input"]}
              type="text"
              placeholder="Адрес"
              name="userAdress"
              value={userOrderInfo.userAdress}
              onChange={handleInputChange}
            />
            <button className={`${style.btn} ${style["btn--buy"]}`} type="submit" id="order" onClick={buttonOrderHandler}>
              Оформить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CartPopup;
