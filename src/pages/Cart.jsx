import React, { useState } from "react";

import "../assets/styles/Cart.scss";
import laptop from "../assets/Images/laptop.jpeg";
import QuantityInput from "../components/UI/QuantityInput";
import { productContext } from "../context/Context";

const Cart = () => {
  const {
    state: { cart },

    dispatch,
  } = productContext();

  const [quantity, setQuantity] = useState({
    ...cart.map((c) => ({ id: c.id, qty: c.qty })),
  });

  // const clickHandler = (type, ) => {
  //   setQuantity((prev) => ({ ...prev, [productId]: prev.qty + 1 }))
  // }

  const clickHandler = (type, id) => {
    let updatedCart = [...quantity];

    const productIndex = updatedCart.findIndex((c) => c.id === id);

    console.log(updatedCart[productIndex]);
    if (type === "increase") {
      updatedCart[productIndex].qty += 1;
      setQuantity(updatedCart);
    }
    if (type === "decrease") {
      updatedCart[productIndex].qty -= 1;
      setQuantity(updatedCart);
    }
  };

  // console.log(quantity);

  // const updateQty = (item, quantity) => {
  //   dispatch({
  //     type: "UPDATE_QTY",
  //     payload: { ...item, qty: quantity },
  //   });
  // };

  const removeHandler = (itemToRemove) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: itemToRemove,
    });
  };

  return (
    <section className="cart_page">
      {cart.length === 0 && <h2 className="cart_page_title"> Cart is empty</h2>}
      {cart.length > 0 && (
        <>
          <h2 className="cart_page_title">Basket</h2>
          <div className="cart">
            <div className="cart_items_container">
              <table className="cart_items">
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td className="remove-item">
                        <button
                          type="button"
                          className="remove-item_btn"
                          onClick={() => removeHandler(item)}
                        >
                          x
                        </button>
                      </td>
                      <td className="product-image">
                        <img src={item.thumbnail} alt="product image" />
                      </td>
                      <td>
                        <div className="product-info">
                          <h4 className="product-name">{item.title}</h4>
                          <p className="product-brand">{item.brand}</p>
                        </div>
                      </td>
                      <td className="product-price">${item.price}</td>
                      <td className="product-quantity">
                        <QuantityInput
                          quantity={item.qty}
                          stock={item.stock}
                          onClick={clickHandler}
                          cartPage={true}
                          productId={item.id}
                        />
                      </td>
                      <td className="product-total">
                        ${item.price * item.qty} &#40; incl. VAT &#41;
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="cart_checkout">
              <h3 className="cart_checkout_title"> Cart totals</h3>
              <div className="cart_subtotal">
                <h3>Subtotal</h3>
                <p>
                  $100<span className="tax"> &#40; incl. VAT &#41;</span>
                </p>
              </div>
              <div className="cart_delivery">
                <h3>Delivery</h3>
                <p>$5</p>
              </div>

              <div className="cart_total">
                <h3>Total</h3>
                <p>$105</p>
              </div>

              <button type="button" className="checkout_btn">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
