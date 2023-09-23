import React from "react";

import "./../assets/styles/FeatureProduct.scss";
import Card from "./UI/Card";

import laptop from "../assets/Images/laptop.jpeg";

const FeatureProduct = () => {
  return (
    <section className="feature-container">
      <h2>Featured Product</h2>

      <div className="featured_products_list">
        <Card id="product/1" stock={10} image={laptop} rating="5.0" />
        <Card id="product/1" stock={10} image={laptop} rating="5.0" />
        <Card id="product/1" stock={10} image={laptop} rating="5.0" />
      </div>
    </section>
  );
};

export default FeatureProduct;
