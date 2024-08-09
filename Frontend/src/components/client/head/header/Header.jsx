import React from "react";
import style from "./header.module.css";
import Logo from "../logo/Logo";
import HeaderMenu from "../menu/Menu";
import Controllers from "../controllers/Controllers";

function Header() {
  return (
    <header className={style.header}>
      <Logo link="/" />
      <HeaderMenu />
      <Controllers />
    </header>
  );
}

export default Header;
