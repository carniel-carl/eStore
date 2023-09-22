import React from "react";

import "../assets/styles/ProductSideBar.scss";
import LinkWithIcon from "./UI/LinkWithIcon";
import { BsPhone } from "react-icons/bs";

const ProductSideBar = () => {
  return (
    <aside className="product_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        <LinkWithIcon
          title="Smart phones"
          icon={<BsPhone />}
          to="products?category=smartphone"
          sidebar={true}
        />
      </div>
    </aside>
  );
};

export default ProductSideBar;
