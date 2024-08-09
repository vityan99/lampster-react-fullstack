import React from "react";
import Filter from "../../filters/filter/Filter";
import ProductList from "../../content/productList/ProductList";

function MainPage() {
  return (
    <>
      <Filter />
      <ProductList />
    </>
  );
}

export default MainPage;
