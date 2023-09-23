import React from "react";

import "../assets/styles/ProductSideBar.scss";
import LinkWithIcon from "./UI/LinkWithIcon";
import { BsPhone } from "react-icons/bs";
import useFetch from "../hooks/useFetch";

const ProductSideBar = () => {
  const { data: categories, errors } = useFetch("/categories");
  return (
    <aside className="product_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        {errors && <em className="error">{errors}</em>}
        {categories?.map((category, index) => (
          <LinkWithIcon
            key={index}
            icon={<BsPhone />}
            to={`?category=${category}`}
            title={category}
            sidebar={true}
          />
        ))}
      </div>
    </aside>
  );
};

export default ProductSideBar;
