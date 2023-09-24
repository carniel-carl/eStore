export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS":
      return { ...state, products: action.payload };
    case "ALL_PRODUCTS_ERRORS":
      return { ...state, productError: action.payload };
    case "ALL_CATEGORY":
      return { ...state, categories: action.payload };
    case "ALL_CATEGORY_ERRORS":
      return { ...state, categoryErrors: action.payload };

    default:
      return state;
  }
};
