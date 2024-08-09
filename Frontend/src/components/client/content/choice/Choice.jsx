import React from "react";
import style from "./choice.module.css";

function Choice({ id, text, unit, active, clickHandler }) {
  return (
    <div
      className={`${style["choice-item"]} ${active === id ? style["choice-item--active"] : ""}`}
      onClick={() => clickHandler(id, text, unit)}
    >
      {text}
      {unit ? unit : ""}
    </div>
  );
}

export default Choice;
