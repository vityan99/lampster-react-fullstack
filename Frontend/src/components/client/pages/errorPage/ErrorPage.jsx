import React from "react";
import style from "./errorPage.module.css";

function ErrorPage() {
  return (
    <div className={`${style.container} ${style.error__container}`}>
      <img
        src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className={style.error__img}
      />
    </div>
  );
}

export default ErrorPage;
