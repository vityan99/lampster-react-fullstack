import { useState } from "react";
import style from "./popupAddUser.module.css";
import axios from "axios";

function PopupAddUser({ active, clickHandler }) {
  const [userStatus, setUserStatus] = useState("admin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleStatusChange = (e) => setUserStatus(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const sendRequestHandler = (e) => {
    e.preventDefault();

    const data = {
      name,
      userEmail: email,
      userPassword: password,
      status: userStatus,
    };

    axios
      .post("http://localhost:3000/addNewUser", data)
      .then((response) => console.log(response))
      .then((error) => console.log(error)).finally(() => clickHandler())
  };

  return (
    <div className={`${style.popup} ${active ? style["popup--active"] : ""}`}>
      <div className={style.popup__wrapper}>
        <div className={`${style.popup__container} ${style["popup__container--new-user"]}`}>
          <button className={`${style.btn} ${style.popup__btn}`} onClick={clickHandler}>
            X
          </button>
          <form className={style["popup-form"]} action="#">
            <h1 className={style["popup-title"]}>Добавить пользователя</h1>
            <input className={style["popup-input"]} type="text" placeholder="Имя" name="name" value={name} onChange={handleNameChange} />
            <input
              className={style["popup-input"]}
              type="email"
              placeholder="Почта"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              className={style["popup-input"]}
              type="password"
              placeholder="Пароль"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className={`${style["custom-select-wrapper"]} ${style["select-status"]}`}>
              <select name="user-status" id="user-status" value={userStatus} onChange={handleStatusChange}>
                <option value="admin">Администратор</option>
                <option value="manager">Менеджер</option>
              </select>
            </div>
            <button className={`${style.btn} ${style["btn--popup-send"]}`} type="submit" id="addUser" onClick={sendRequestHandler}>
              Добавить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupAddUser;
