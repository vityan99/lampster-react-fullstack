import React, { useState } from "react";
import style from "./popupAccountSettings.module.css";
import axios from "axios";

function PopupAccountSettings({ active, clickHandler, user }) {
  const { _id, userPassword } = user;

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (oldPassword !== userPassword) {
      setError("Старый пароль введен неверно");
      return;
    }

    if (newPassword !== newPasswordRepeat) {
      setError("Новые пароли не совпадают");
      return;
    }

    try {
      const data = {
        id: _id,
        oldPassword,
        newPassword,
      };

      await axios.post("http://localhost:3000/userPasswordChange", data);
      setError("");
      alert("Пароль успешно обновлён!");
      clickHandler();
    } catch (err) {
      setError("Произошла ошибка при обновлении пароля");
    }
  };

  return (
    <div className={`${style.popup} ${active ? style["popup--active"] : ""}`}>
      <div className={style.popup__wrapper}>
        <div className={style.popup__container}>
          <button className={`${style.btn} ${style.popup__btn}`} onClick={clickHandler}>
            X
          </button>
          <form className={style["popup-form"]} onSubmit={handleSubmit}>
            <h1 className={style["popup-title"]}>Настройки аккаунта</h1>
            <input
              className={style["popup-input"]}
              type="password"
              placeholder="Старый пароль"
              name="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <input
              className={style["popup-input"]}
              type="password"
              placeholder="Новый пароль"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              className={style["popup-input"]}
              type="password"
              placeholder="Повторите пароль"
              name="newPasswordRepeat"
              value={newPasswordRepeat}
              onChange={(e) => setNewPasswordRepeat(e.target.value)}
            />
            <button
              className={`${style.btn} ${style["btn--popup-send"]}`}
              type="submit"
              id="updatePassword"
              data-element="btnUpdatePassword"
            >
              Обновить
            </button>
            {error && <span className={style["popup--error"]}>{error}</span>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupAccountSettings;
