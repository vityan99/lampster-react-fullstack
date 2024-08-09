import React from "react";
import style from "./updateStatusButton.module.css";
import axios from "axios";

function UpdateStatusButton({ changed, orderNumber, orderStatus, userName, disableButtonHandler, onUpdateOrder }) {
  const getChangesDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `в ${hours}:${minutes} - ${day}.${month}.${year}`;
  };

  const sendChangeRequestHandler = () => {
    if (changed) {
      const data = {
        orderNumber,
        orderStatus,
        userName,
        date: getChangesDate(),
      };
      axios
        .post("http://localhost:3000/statusChange", data)
        .then((response) => {
          console.log(response);
          onUpdateOrder(orderNumber, orderStatus, userName, getChangesDate());
        })
        .catch((error) => console.log(error));
    }
    disableButtonHandler();
  };

  return (
    <button
      className={`${style.btn} ${style["btn--update"]} ${changed ? "" : style["btn--not-active"]}`}
      disabled={!changed}
      onClick={sendChangeRequestHandler}
    >
      Обновить
    </button>
  );
}

export default UpdateStatusButton;
