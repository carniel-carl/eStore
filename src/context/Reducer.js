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
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: action.payload.qty }],
      };
    case "UPDATE_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    default:
      return state;
  }
};
