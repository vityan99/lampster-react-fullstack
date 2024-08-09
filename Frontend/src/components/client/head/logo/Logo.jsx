import React from "react";
import style from "./logo.module.css";
import LogoText from "./logotext/LogoText";
import Logotype from "./logotype/Logotype";

function Logo({ link, isAdmin }) {
  return (
    <a href={link} className={style.logo}>
      <Logotype />
      <LogoText isAdmin={isAdmin}/>
    </a>
  );
}

export default Logo;
