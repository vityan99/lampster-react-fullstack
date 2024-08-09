import React from "react";
import style from "./lastChangesDateBy.module.css";

function LastChangesDateBy({ lastModifiedBy, date }) {
  return (
    <span className={style["last-modified-changes-by"]}>
      Последнее изменение было произведено пользователем:
      <span className={style["last-modified-changes-by--accent"]}>{lastModifiedBy === null ? "" : ` ${lastModifiedBy} ${date}`}</span>
    </span>
  );
}

export default LastChangesDateBy;
