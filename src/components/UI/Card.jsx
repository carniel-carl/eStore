import React from "react";

import "../../assets/styles/UI/Card.scss";
import { Link } from "react-router-dom";
import { productContext } from "../../context/Context";

const Card = ({ id, image, title, price, rating, stock, product }) => {
  const { addToBasket } = productContext();

  return (
    <article className="product_card">
      <div className="product_image">
        <Link to={`/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className="product_detail">
        <h3 className="product_price">${price ? price.toFixed(2) : 100}</h3>
        <p className="product_title">
          {title ? title.substring(0, 20) : "Iphone 14"}
          {title && title.length > 20 && "..."}
        </p>
        <footer className="product_info_footer">
          <p className="product_rating">{rating}</p>

          {stock > 0 && (
            <button
              className="add_to_cart"
              onClick={() => addToBasket(product, 1)}
            >
              Add to cart
            </button>
          )}
        </footer>
      </div>
    </article>
  );
};

export default Card;
