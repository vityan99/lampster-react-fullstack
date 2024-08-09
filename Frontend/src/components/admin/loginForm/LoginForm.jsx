import React, { useState } from "react";
import axios from "axios";
import style from "./loginForm.module.css";

function LoginForm({ setLogin, setUserInfo }) {
  const [formValue, setFormValue] = useState({
    userEmail: "",
    userPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const clickHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/login", formValue)
      .then((response) => {
        console.log(response);

        if (response.status === 200) {
          setUserInfo((current) => (current = response.data));
          setLogin((current) => !current);
        }
      })
      .catch((eroor) => console.log(eroor));
  };

  return (
    <div className={style.container}>
      <div className={`${style["form-container"]} ${style["sign-in-container"]}}`}>
        <form action="#" className={style.form}>
          <h1 className={style["form-title"]}>Авторизация</h1>
          <input
            className={style.input}
            type="email"
            placeholder="Почта"
            name="userEmail"
            value={formValue.userEmail}
            onChange={handleInputChange}
          />
          <input
            className={style.input}
            type="password"
            placeholder="Пароль"
            name="userPassword"
            value={formValue.userPassword}
            onChange={handleInputChange}
          />
          <button className={`${style.btn} ${style["btn--auth"]}`} type="submit" id="authorization" onClick={clickHandler}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
