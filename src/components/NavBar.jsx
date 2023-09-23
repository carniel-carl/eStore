import React from "react";

import "./../assets/styles/NavBar.scss";

import { BsCart4, BsSearch } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { IoStorefrontSharp } from "react-icons/io5";
import { BiListCheck } from "react-icons/bi";

import LinkWithIcon from "./UI/LinkWithIcon";
import { NavLink } from "react-router-dom";

const NavBar = () => {
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
          <LinkWithIcon title="Home" icon={<FaHome />} to="/" />
        </li>
        <li>
          <LinkWithIcon
            title="Products"
            icon={<IoStorefrontSharp />}
            to="/products"
          />
        </li>
        <li>
          <LinkWithIcon title="Order " icon={<BiListCheck />} to="/orders" />
        </li>
        <li>
          <NavLink to="/cart" className="cart">
            <BsCart4 className="cart_icon" />
            <span className="order_count">0</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
