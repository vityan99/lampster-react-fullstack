import React from "react";
import style from "./fieldGroup.module.css";

function FieldGroup({ filterKey, direction, directionTitle, value, changeValue, filterHandler }) {
  const handleFilterChange = (e) => {
    changeValue(e.target.value);
    filterHandler(filterKey, e.target.value);
  };

  return (
    <div className={style["filter-field-group"]}>
      <label className={style["form-control-label"]} htmlFor={`${filterKey}-${direction}`}>
        {directionTitle}
      </label>
      <input
        className={style["form-control-field"]}
        type="text"
        placeholder="0"
        value={value}
        id={`${filterKey}-${direction}`}
        onChange={handleFilterChange}
      />
    </div>
  );
}

export default FieldGroup;
