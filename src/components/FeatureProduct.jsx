import React from "react";

import "./../assets/styles/FeatureProduct.scss";
import Card from "./UI/Card";

const FeatureProduct = () => {
  return (
    <section className="feature-container">
      <h2>Featured Product</h2>

      <div className="featured_products_list">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default FeatureProduct;
