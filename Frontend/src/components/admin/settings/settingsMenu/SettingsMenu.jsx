import { useState, useEffect } from "react";
import style from "./settingsMenu.module.css";
import axios from "axios";
import SettingsItem from "../settingsItem/SettingsItem";

function SettingsMenu({ userInfo, popupAddUserHandler, popupAccountSettingsHandler }) {
  const [settingsItems, setSettingsItems] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getSettingsItems = async (url) => {
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

    const fetchSettingsItems = async () => {
      const data = await getSettingsItems("http://localhost:3000/getSettings");
      if (data) {
        setSettingsItems(data);
      }
    };

    fetchSettingsItems();

    return () => {
      source.cancel("Запрос отменен при размонтировании компонента");
    };
  }, []);

  const filterSettings = () => {
    return settingsItems.filter((item) => {
      if (userInfo.status === "admin") {
        return true;
      }

      if (userInfo.status === "manager") {
        return item.status === "public";
      }

      return false;
    });
  };

  const getPopupHandler = (value) => {
    const handlers = {
      "Добавить пользователя": popupAddUserHandler,
      "Настройка аккаунта": popupAccountSettingsHandler,
    };
    return handlers[value] || null;
  };

  return (
    <div className={style.settings}>
      <ul className={style.menu}>
        {filterSettings().map((item, i) => {
          const { value } = item;
          const userId = userInfo._id;
          const userPassword = userInfo.userPassword;
          const selectedHandler = getPopupHandler(value);

          return <SettingsItem key={i} value={value} userId={userId} userPassword={userPassword} popupHandler={selectedHandler} />;
        })}
      </ul>
    </div>
  );
}

export default SettingsMenu;
