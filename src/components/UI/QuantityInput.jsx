import React from "react";

import "../../assets/styles/UI/QuantityInput.scss";

const QuantityInput = ({
  quantity,
  setQuantity,
  stock,
  cartPage,
  productId,
}) => {
  return (
    <>
      <button
        className="quantity_input_btn"
        disabled={quantity <= 1}
        onClick={() => {
          cartPage
            ? setQuantity("decrease", productId)
            : setQuantity(quantity - 1);
        }}
      >
        -
      </button>
      <p className="quantity_count">{quantity}</p>
      <button
        className="quantity_input_btn"
        disabled={quantity >= stock}
        onClick={() => {
          cartPage
            ? setQuantity("increase", productId)
            : setQuantity(quantity + 1);
        }}
      >
        +
      </button>
    </>
  );
};

export default QuantityInput;
