import React from "react";

import "../../assets/styles/UI/Card.scss";
import laptop from "../../assets/images/laptop.jpeg";

const Card = () => {
  return (
    <article className="product_card">
      <div className="product_image">
        <a href="product/1">
          <img src={laptop} alt="product image" />
        </a>
      </div>
      <div className="product_detail">
        <h3 className="product_price">$999</h3>
        <p className="product_title">Iphone 14 pro</p>
        <footer className="product_info_footer">
          <p className="product_rating">5.0</p>

          <button className="add_to_cart">Add to cart </button>
        </footer>
      </div>
    </article>
  );
};

export default Card;
