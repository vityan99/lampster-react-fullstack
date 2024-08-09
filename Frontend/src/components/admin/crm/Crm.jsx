import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./crm.module.css";
import Logo from "../../client/head/logo/Logo";
import Settings from "../settings/Settings";
import ExitButton from "./exitButton/ExitButton";
import OrderInfo from "./orderInfo/OrderInfo";
import PopupAddUser from "./popupAddUser/PopupAddUser";
import PopupAccountSettings from "./popupAccountSetting/PopupAccountSettings";

function Crm({ userInfo, clickSetLoginHandler }) {
  const [orders, setOrders] = useState([]);
  const [popupAddUserOpen, setPopupAddUserOpen] = useState(false);
  const [popupAccountSettingsOpen, setPopupAccountSettingsOpen] = useState(false);

  const popupAddUserHandler = () => {
    setPopupAccountSettingsOpen(false);
    setPopupAddUserOpen((current) => !current);
  };

  const popupAccountSettingsHandler = () => {
    setPopupAddUserOpen(false);
    setPopupAccountSettingsOpen((current) => !current);
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getOrders = async (url) => {
      try {
        const response = await axios.get(url, { cancelToken: source.token });
        return response.data;
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Запрос отменен:", error.message);
        } else {
          console.error("Ошибка при получении данных:", error);
        }
      }
    };

    const fetchOrders = async () => {
      const data = await getOrders("http://localhost:3000/getOrders");
      if (data) {
        setOrders(data);
      }
    };

    fetchOrders();
    return () => {
      source.cancel("Запрос отменен при размонтировании компонента");
    };
  }, []);

  const updateOrder = (orderNumber, selectedStatusText, userName, date) => {
    setOrders((currentOrders) => {
      return currentOrders.map((order) => {
        if (order.orderNumber === orderNumber) {
          const updatedStatus = order.status.map((status) => ({
            ...status,
            selected: status.text === selectedStatusText,
          }));

          return {
            ...order,
            status: updatedStatus,
            lastModifiedBy: userName,
            date,
          };
        }
        return order;
      });
    });
  };

  return (
    <section className={style.area}>
      {popupAddUserOpen && <PopupAddUser active={popupAddUserOpen} clickHandler={popupAddUserHandler} />}
      {popupAccountSettingsOpen && (
        <PopupAccountSettings active={popupAccountSettingsOpen} clickHandler={popupAccountSettingsHandler} user={userInfo} />
      )}
      <div className={style.area__top}>
        <Logo link="/admin" isAdmin={true} />
        <h2 className={style["crm-greeting"]}>Добро пожаловать, {userInfo.name.length === 0 ? "Пользователь" : userInfo.name}!</h2>
        <div className={style["crm-control"]}>
          <Settings
            userInfo={userInfo}
            popupAddUserHandler={popupAddUserHandler}
            popupAccountSettingsHandler={popupAccountSettingsHandler}
          />
          <ExitButton clickSetLoginHandler={clickSetLoginHandler} />
        </div>
      </div>
      <div className={style.area__content}>
        {orders.map((order) => (
          <OrderInfo order={order} key={order._id} userInfo={userInfo} onUpdateOrder={updateOrder} />
        ))}
      </div>
    </section>
  );
}

export default Crm;
