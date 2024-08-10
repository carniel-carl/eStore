import React, { useEffect } from "react";

import "../assets/styles/ProductSideBar.scss";
import LinkWithIcon from "./UI/LinkWithIcon";
import { BsPhone } from "react-icons/bs";
import { productContext } from "../context/Context";
import apiClient from "../utils/api-client";
import { useSearchParams } from "react-router-dom";

const ProductSideBar = () => {
  // ----------USESEARCHPARAMS TO UPDATE THE URL FOR SELECTED CATEGORY---------------------

  const [searchParams, setSearchParams] = useSearchParams();

  let selectedCategory = searchParams.get("category");

  // ----------GETTING THE CATEGORIES FROM CONTEXT STORE-----------------------
  const {
    state: { categories, categoryErrors: errors },
    dispatch,
  } = productContext();

  // ----------SETTING THE CATEGORIES TO CONTEXT STORE-----------------------
  useEffect(() => {
    if (!categories) {
      apiClient
        .get("/categories")
        .then((res) => {
          dispatch({ type: "ALL_CATEGORY", payload: res.data });
        })
        .catch((err) =>
          dispatch({ type: "ALL_CATEGORY_ERRORS", payload: err.message })
        );
    }
  }, [categories]);

  // ----------HANDLING THE SELECTED CATEGORY-----------------------
  const handleChange = (e) => {
    setSearchParams({ category: e.target.value });
  };

  return (
    <aside className="product_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        {errors && <em className="error">{errors}</em>}
        <label htmlFor="all" className="category_btn">
          <input
            type="radio"
            name="categories"
            value="all"
            onChange={handleChange}
            id="all"
            checked={selectedCategory === "all"}
          />
          All
        </label>
        {categories?.map((category, index) => (
          <label htmlFor={category.name} key={index} className="category_btn">
            <input
              type="radio"
              name="categories"
              value={category.name}
              onChange={handleChange}
              id={category.name}
              checked={selectedCategory === category.name}
            />

            {category?.name}
          </label>
        ))}
      </div>
    </aside>
  );
};

export default ProductSideBar;
