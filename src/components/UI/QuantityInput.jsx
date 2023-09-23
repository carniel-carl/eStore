import React from "react";

import "../../assets/styles/UI/QuantityInput.scss";

const QuantityInput = () => {
  return (
    <>
      <button className="quantity_input_btn" disabled>
        -
      </button>
      <p className="quantity_count">1</p>
      <button className="quantity_input_btn">+</button>
    </>
  );
};

export default QuantityInput;
