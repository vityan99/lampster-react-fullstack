import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./menu.module.css";
import MenuItem from "./menuitem/MenuItem";

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getMenu = async (url) => {
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

    const fetchMenu = async () => {
      const data = await getMenu("http://localhost:3000/getMenu");
      if (data) {
        setMenu(data);
      }
    };

    fetchMenu();

    return () => {
      source.cancel("Запрос отменен при размонтировании компонента");
    };
  }, []);

  return (
    <ul className={style.menu}>
      {menu.map((item, i) => (
        <MenuItem menu={item} key={i} />
      ))}
    </ul>
  );
}

export default Menu;
