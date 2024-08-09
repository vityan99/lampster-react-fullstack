import React, { useState, useEffect } from "react";
import style from "./orderOptionGroup.module.css";
import OrderOption from "../orderOption/OrderOption";
import LastChangesDateBy from "../lastChangesDateBy/LastChangesDateBy";
import UpdateStatusButton from "../updateStatusButton/UpdateStatusButton";

function OrderOptionGroup({ orderNumber, status, userInfo, lastModifiedBy, date, onUpdateOrder }) {
  const initialSelectedStatus = (Array.isArray(status) && status.find((s) => s.selected)?.text) || "";
  const [selectedStatus, setSelectedStatus] = useState(initialSelectedStatus);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    setSelectedStatus(initialSelectedStatus);
  }, [status]);

  const disableButtonHandler = () => setChanged(false);

  const changedHandler = (e) => {
    const newValue = e.target.value;
    setSelectedStatus(newValue);
    setChanged(newValue !== initialSelectedStatus);
  };

  return (
    <div className={style["order-info__status"]}>
      <div className={style["custom-select-wrapper"]}>
        <select name="status" id="order-status" value={selectedStatus} onChange={changedHandler}>
          {Array.isArray(status) && status.map(({ text }, i) => <OrderOption value={text} text={text} key={i} />)}
        </select>
      </div>
      <div className={style["order-info__change-status"]}>
        <UpdateStatusButton
          changed={changed}
          orderNumber={orderNumber}
          orderStatus={selectedStatus}
          userName={userInfo.name}
          disableButtonHandler={disableButtonHandler}
          onUpdateOrder={onUpdateOrder}
        />
        <LastChangesDateBy lastModifiedBy={lastModifiedBy} date={date} />
      </div>
    </div>
  );
}

export default OrderOptionGroup;
