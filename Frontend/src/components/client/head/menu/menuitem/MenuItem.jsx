import React from "react";
import style from "./menuItem.module.css";
import MenuLink from "../menulink/MenuLink";

function MenuItem({ menu }) {
  return (
    <li className={style.menu__item}>
      <MenuLink link={menu.link} title={menu.title} />
    </li>
  );
}

export default MenuItem;
