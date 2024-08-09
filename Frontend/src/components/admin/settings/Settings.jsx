import React, { useState } from "react";
import style from "./settings.module.css";
import ButtonSettings from "./buttonSettings/ButtonSettings";
import SettingsMenu from "./settingsMenu/SettingsMenu";

function Settings({ userInfo, popupAddUserHandler, popupAccountSettingsHandler }) {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const clickSettingsHandler = () => setSettingsOpen((current) => !current);

  return (
    <div className={style["crm-settings"]}>
      <ButtonSettings clickSettingsHandler={clickSettingsHandler} />
      <div>
        {settingsOpen && (
          <SettingsMenu
            userInfo={userInfo}
            popupAddUserHandler={popupAddUserHandler}
            popupAccountSettingsHandler={popupAccountSettingsHandler}
          />
        )}
      </div>
    </div>
  );
}

export default Settings;
