import React, { useEffect } from "react";

import "./../assets/styles/NavBar.scss";

import { BsCart4, BsSearch } from "react-icons/bs";

const NavBar = () => {
  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // });

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1 className="navbar-header_title">
          <a href="/">cStore</a>
        </h1>
        <form method="post" className="navbar-header_form">
          <input
            type="text"
            className="navbar_search"
            placeholder="Search products"
          />
          <button type="submit" className="navbar_search__btn">
            <BsSearch />
          </button>
        </form>
      </div>

      <ul className="navbar_links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Order</a>
        </li>
        <li>
          <a href="#" className="cart">
            <BsCart4 className="cart_icon" />{" "}
            <span className="order_count">0</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
