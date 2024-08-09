import React, { useState } from "react";
import style from "./filterGroup.module.css";
import FieldGroup from "../fieldGroup/FieldGroup";
import OptionGroup from "../optionGroup/OptionGroup";

function FilterGroup({ filterKey, text, unit, groupType, options, filterHandler }) {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  return (
    <div className={style["filter-group"]}>
      <span className={style["filter-group__title"]}>{text}</span>
      <div className={style["filter-group__field-holder"]}>
        {groupType === 1 ? (
          <>
            <FieldGroup
              filterKey={`${filterKey}-from`}
              direction={"from"}
              directionTitle={"от"}
              value={fromValue}
              changeValue={setFromValue}
              filterHandler={filterHandler}
              key="from-field"
            />
            <FieldGroup
              filterKey={`${filterKey}-to`}
              direction={"to"}
              directionTitle={"до"}
              value={toValue}
              changeValue={setToValue}
              filterHandler={filterHandler}
              key="to-field"
            />
          </>
        ) : (
          <OptionGroup filterKey={filterKey} options={options} filterHandler={filterHandler} />
        )}
      </div>
    </div>
  );
}

export default FilterGroup;
