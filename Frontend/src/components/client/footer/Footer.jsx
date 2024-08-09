import React from "react";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.footer}>
        <span className={style.footer__copyright}> &copy; Все права защищены. Электронная почта: info@lampster.ru </span>
      </div>
    </div>
  );
}
