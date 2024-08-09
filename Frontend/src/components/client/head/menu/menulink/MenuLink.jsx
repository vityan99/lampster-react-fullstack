import React from "react";
import style from "./menuLink.module.css";
import { NavLink } from "react-router-dom";

function MenuLink({ link, title }) {
  return (
    <NavLink to={link} className={({ isActive }) => `${style.menu__link} ${isActive ? style["menu__link--active"] : ""}`}>
      {title}
    </NavLink>
  );
}

export default MenuLink;
