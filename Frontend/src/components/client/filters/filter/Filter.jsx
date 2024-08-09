import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./filter.module.css";
import FilterGroup from "../filterGroup/FilterGroup";

function Filter() {
  const [filterConfig, setFilterConfig] = useState([]);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getFilters = async (url) => {
      try {
        const response = await axios.get(url, { cancelToken: source.token });
        return response.data;
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Запрос отменен:", error.message);
        } else {
          console.error("Ошибка при получении данных:", error);
        }
      }
    };

    const fetchFilterConfig = async () => {
      const data = await getFilters("http://localhost:3000/getFilter");
      if (data) {
        setFilterConfig(data);
      }
    };

    fetchFilterConfig();

    return () => {
      source.cancel("Запрос отменен при размонтировании компонента");
    };
  }, []);

  useEffect(() => {
    handleCustomEvent(filter);
  }, [filter]);

  const filterHandler = (key, value) => {
    setFilter((prevFilter) => {
      const newFilter = { ...prevFilter, [key]: value };
      return newFilter;
    });
  };

  const handleCustomEvent = (newFilter) => {
    const event = new CustomEvent("filter", {
      bubbles: true,
      detail: newFilter,
    });
    document.dispatchEvent(event);
  };

  return (
    <form className={style.filter} action="#">
      {filterConfig.map((categorie) => {
        const { key, text, unit, groupType, options } = categorie;

        return (
          <FilterGroup
            key={key}
            filterKey={key}
            text={text}
            unit={unit}
            groupType={groupType}
            options={options}
            filterHandler={filterHandler}
          />
        );
      })}
    </form>
  );
}

export default Filter;
