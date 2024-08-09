import React, { useState } from "react";
import LoginForm from "../loginForm/LoginForm";
import Crm from "../crm/Crm";

function AdminPanel() {
  const [login, setLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const clickSetLoginHandler = () => setLogin((current) => !current);

  return (
    <>
      {!login ? (
        <LoginForm setLogin={setLogin} setUserInfo={setUserInfo} />
      ) : (
        <Crm userInfo={userInfo} clickSetLoginHandler={clickSetLoginHandler} />
      )}
    </>
  );
}

export default AdminPanel;
