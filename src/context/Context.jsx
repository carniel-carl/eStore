import { createContext, useContext, useReducer, useEffect } from "react";

import { cartReducer } from "./reducer";

const Products = createContext();

const Context = ({ children }) => {
  // -----------------USEREDUCER HOOK FOR MANAGING ALL STATE OF THE APP----------------------------
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    products: null,
    productErrors: false,
    categories: null,
    categoryErrors: false,
  });

  const updateQty = (type, id) => {
    let updatedCart = [...state.cart];

    const productIndex = updatedCart.findIndex((c) => c.id === id);
    if (type === "increase") {
      updatedCart[productIndex].qty += 1;
      cart = updatedCart[productIndex];
    }
    if (type === "decrease") {
      updatedCart[productIndex].qty -= 1;
      cart = updatedCart[productIndex];
    }
  };

  // -----------------ADD ITEM TO BASKET---------------------------------

  const addToBasket = (item, quantity) => {
    if (state.cart.some((p) => p.id === item.id && p.qty === quantity)) {
      alert("Already added to cart");
    } else if (state.cart.some((p) => p.id === item.id && p.qty !== quantity)) {
      dispatch({
        type: "UPDATE_QTY",
        payload: { ...item, qty: quantity },
      });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...item, qty: quantity },
      });
    }
  };

  // -----------------CONTEXT PROVIDER----------------------------------

  return (
    <Products.Provider value={{ state, dispatch, addToBasket, updateQty }}>
      {children}
    </Products.Provider>
  );
};

export default Context;

// -----------------TO USE THE CONTEXT OF THE CONTEXT API(CONTEXT CONSUMER)----------------------------
export const productContext = () => {
  return useContext(Products);
};
