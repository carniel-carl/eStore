import React, { useEffect, useMemo } from "react";

import "../assets/styles/ProductsList.scss";
import Card from "./UI/Card";
import { productContext } from "../context/Context";
import apiClient from "../utils/api-client";
import { useSearchParams } from "react-router-dom";

const ProductsList = () => {
  // ----------USESEARCHPARAMS TO GET SELECTED CATEGORY---------------------
  const [searchParams, _] = useSearchParams();

  let filteredCategory = searchParams.get("category");

  // ----------GETTING THE PRODUCTS FROM CONTEXT STORE-----------------------

  const {
    state: { products, productErrors },
    dispatch,
  } = productContext();

  // ----------SETTING THE PRODUCTS GOTTEN FROM API TO CONTEXT STORE-----------------------

  useEffect(() => {
    if (!products || filteredCategory === "all" || !filteredCategory) {
      apiClient
        .get()
        .then((res) => dispatch({ type: "ALL_PRODUCTS", payload: res.data }))
        .catch((err) =>
          dispatch({ type: "ALL_PRODUCTS_ERRORS", payload: err.message })
        );
    }

    if (filteredCategory && filteredCategory !== "all") {
      apiClient
        .get(`/category/${filteredCategory}`)
        .then((res) => dispatch({ type: "ALL_PRODUCTS", payload: res.data }))
        .catch((err) =>
          dispatch({ type: "ALL_PRODUCTS_ERRORS", payload: err.message })
        );
    }
  }, [filteredCategory]);

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
        {productErrors && <em className="error">{productErrors}</em>}

        {products?.products &&
          products.products.map((product) => (
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
