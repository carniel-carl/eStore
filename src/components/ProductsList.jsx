import React from "react";

import "../assets/styles/ProductsList.scss";
import Card from "./UI/Card";
import useFetch from "../hooks/useFetch";

const ProductsList = () => {
  const { data, errors } = useFetch();

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
        {errors && <em className="error">{errors}</em>}

        {data?.products &&
          data.products.map((product) => (
            <Card
              key={product.id}
              id={`product/${product.id}`}
              image={product.images[0]}
              title={product.title}
              price={product.price}
              rating={product.rating}
              stock={product.stock}
            />
          ))}
      </div>
    </section>
  );
};

export default ProductsList;
