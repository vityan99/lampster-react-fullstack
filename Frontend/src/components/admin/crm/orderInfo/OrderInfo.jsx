import React, { useState } from "react";
import style from "./orderInfo.module.css";
import Order from "../order/Order";
import OrderOptionGroup from "../orderOptionGroup/OrderOptionGroup";

function OrderInfo({ order, userInfo, onUpdateOrder }) {
  const [openInfo, setOpenInfo] = useState(false);
  const { orderNumber, userName, userSurname, userPhone, userAdress, orderData, status, lastModifiedBy, date } = order;

  return (
    <div className={style["order-info"]}>
      <span className={style["order-info__number"]}>Заказ №{orderNumber}</span>
      <span className={style["order-info__name"]}>{userName}</span>
      <span className={style["order-info__surname"]}>{userSurname}</span>
      <span className={style["order-info__phone"]}>{userPhone}</span>
      <span className={style["order-info__address"]}>{userAdress}</span>
      <button className={`${style.btn} ${style["btn--info"]}`} onClick={() => setOpenInfo((current) => !current)}>
        Информация
      </button>
      <div className={`${style["order-info__details"]} ${openInfo ? style["order-info__details--active"] : ""}`}>
        {orderData.map(({ productId, title, wattsText, count, price, img, colorText }) => (
          <Order
            key={productId}
            productId={productId}
            title={title}
            wattsText={wattsText}
            count={count}
            price={price}
            img={img}
            colorText={colorText}
          />
        ))}
        <OrderOptionGroup
          orderNumber={orderNumber}
          status={status}
          userInfo={userInfo}
          lastModifiedBy={lastModifiedBy}
          date={date}
          onUpdateOrder={onUpdateOrder}
        />
      </div>
    </div>
  );
}

export default OrderInfo;
