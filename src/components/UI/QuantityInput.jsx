import React from "react";

import "../../assets/styles/UI/QuantityInput.scss";

const QuantityInput = ({ quantity, setQuantity, stock }) => {
  return (
    <>
      <button
        className="quantity_input_btn"
        disabled={quantity <= 1}
        onClick={() => setQuantity(quantity - 1)}
      >
        -
      </button>
      <p className="quantity_count">{quantity}</p>
      <button
        className="quantity_input_btn"
        disabled={quantity >= stock}
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
    </>
  );
};

export default QuantityInput;
