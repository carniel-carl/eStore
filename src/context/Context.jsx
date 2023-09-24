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

  // -----------------CONTEXT PROVIDER----------------------------------

  return (
    <Products.Provider value={{ state, dispatch }}>
      {children}
    </Products.Provider>
  );
};

export default Context;

// -----------------TO USE THE CONTEXT OF THE CONTEXT API(CONTEXT CONSUMER)----------------------------
export const productContext = () => {
  return useContext(Products);
};
