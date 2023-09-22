import React from "react";

import "../assets/styles/ProductPage.scss";
import ProductSideBar from "../components/ProductSideBar";
import ProductsList from "../components/ProductsList";

const ProductPage = () => {
  return (
    <section className="product-page">
      <ProductSideBar />
      <ProductsList />
    </section>
  );
};

export default ProductPage;
