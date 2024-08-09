import React, { useState } from "react";
import style from "./optionGroup.module.css";
import Option from "../option/Option";

function OptionGroup({ filterKey, options, filterHandler }) {
  const [selectedValue, setSelectedValue] = useState(options[0] ? options[0].value : "");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);
    filterHandler(filterKey, newValue);
  };

  return (
    <select className={style["form-control-select"]} name={filterKey} value={selectedValue} onChange={handleChange}>
      {options.map((option) => {
        const { value, text } = option;

        return <Option value={value} text={text} key={value} />;
      })}
    </select>
  );
}

export default OptionGroup;
