import React from "react";
import style from "./exitButton.module.css";

function ExitButton({ clickSetLoginHandler }) {
  return (
    <button className={`${style.btn} ${style["btn--exit"]}`} onClick={clickSetLoginHandler}>
      Выйти
    </button>
  );
}

export default ExitButton;
