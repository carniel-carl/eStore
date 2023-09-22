import React from "react";

import "../assets/styles/ProductsList.scss";
import Card from "./UI/Card";

const ProductsList = () => {
  return (
    <section className="product_list_section">
      <header className="product_list_header">
        <h2>Products</h2>
        <select name="sort" id="" className="product_sort">
          <option value="">Relevance</option>
          <option value="price desc">PRICE HIGH TO LOW</option>
          <option value="price asc">PRICE LOW TO HIGH</option>
          <option value="rate desc">RATE HIGH TO LOW</option>
          <option value="rate asc">RATE LOW TO HIGH</option>
        </select>
      </header>

      <div className="products_list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default ProductsList;
