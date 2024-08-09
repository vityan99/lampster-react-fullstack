import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./productList.module.css";
import PopupImg from "../popupImg/PopupImg";
import PopupDesc from "../popupDesc/PopupDesc";
import Product from "../product/Product";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [popupImgActive, setPopupImgActive] = useState(false);
  const [popupImgData, setPopupImgData] = useState({});
  const [popupDescActive, setPopupDescActive] = useState(false);
  const [popupDescData, setPopupDescData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState({});

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getProducts = async (url) => {
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

    const fetchProducts = async () => {
      const data = await getProducts("http://localhost:3000/getProducts");
      if (data) {
        setProducts(data);
      }
    };

    fetchProducts();

    return () => {
      source.cancel("Запрос отменен при размонтировании компонента");
    };
  }, []);

  const popupImgClickHandler = () => {
    setPopupDescActive(false);
    setPopupImgActive((current) => !current);
  };

  const popupSetImgData = (id) => setPopupImgData((current) => (current = id));

  const popupDescClickHandler = () => {
    setPopupImgActive(false);
    setPopupDescActive((current) => !current);
  };

  const popupSetDescData = (properties) => setPopupDescData((current) => (current = properties));

  useEffect(() => {
    const handleSearchProduct = (e) => {
      setSearchValue(e.detail);
    };

    const handleSetFilter = (e) => {
      setFilter(e.detail);
    };

    document.addEventListener("searchProduct", handleSearchProduct);
    document.addEventListener("filter", handleSetFilter);

    return () => {
      document.removeEventListener("searchProduct", handleSearchProduct);
      document.removeEventListener("filter", handleSetFilter);
    };
  }, []);

  const applyFilters = (product, filter) => {
    return Object.keys(filter).every((filterKey) => {
      const filterValue = filter[filterKey];
      if (!filterValue) return true;

      if (filterKey.includes("-from")) {
        const key = filterKey.split("-from")[0];
        if (key === "price") {
          return product.price >= parseFloat(filterValue);
        } else {
          const property = product.properties.find((prop) => prop.key === key);
          return property ? property.value >= parseFloat(filterValue) : true;
        }
      }

      if (filterKey.includes("-to")) {
        const key = filterKey.split("-to")[0];
        if (key === "price") {
          return product.price <= parseFloat(filterValue);
        } else {
          const property = product.properties.find((prop) => prop.key === key);
          return property ? property.value <= parseFloat(filterValue) : true;
        }
      }

      if (["voltage", "powerSupply", "colorTemperature"].includes(filterKey)) {
        const property = product.properties.find((prop) => prop.key === filterKey);
        return property ? property.value == filterValue : true;
      }
      return true;
    });
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchValue.toLowerCase());
    const matchesFilter = applyFilters(product, filter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className={style["products-list"]}>
      {products
        .filter((product) => product.id === popupImgData.id && product.colors)
        .flatMap((product) =>
          product.colors.map((color) =>
            color.id === popupImgData.color.id ? (
              <PopupImg clicked={popupImgActive} img={color.img} clickHandler={popupImgClickHandler} key={color.id} />
            ) : null
          )
        )}

      {Object.keys(popupDescData).length !== 0 ? (
        <PopupDesc clicked={popupDescActive} clickHandler={popupDescClickHandler} properties={popupDescData} />
      ) : null}

      {filteredProducts.map(({ id, title, price, priceType, description, properties, watts, colors }) => (
        <Product
          id={id}
          title={title}
          price={price}
          priceType={priceType}
          description={description}
          properties={properties}
          watts={watts}
          colors={colors}
          searchValue={searchValue}
          popupImgClickHandler={popupImgClickHandler}
          popupSetImgData={popupSetImgData}
          popupDescClickHandler={popupDescClickHandler}
          popupSetDescData={popupSetDescData}
          key={id}
        />
      ))}
    </div>
  );
}

export default ProductList;
