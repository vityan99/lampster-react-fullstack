import React, { useState } from "react";
import style from "./productChoice.module.css";
import Choice from "../choice/Choice";

function ProductChoice({ title, choice, clickHanlder }) {
  const [listActive, setListActive] = useState(false);
  const [choiceActive, setChoiceActive] = useState(1);

  const clickChoiceHandler = (id, text, unit) => {
    setChoiceActive((current) => (current = id));
    clickHanlder(id, text, unit);
  };

  return (
    <div className={style.choice}>
      <button className={style.choice__btn} onClick={() => setListActive((current) => !current)}>
        {title}
      </button>
      <div className={`${style.choice__list} ${listActive ? style["choice__list--active"] : ""}`}>
        {choice.map(({ id, text, unit }) => (
          <Choice id={id} text={text} unit={unit} active={choiceActive} clickHandler={clickChoiceHandler} key={id} />
        ))}
      </div>
    </div>
  );
}

export default ProductChoice;
