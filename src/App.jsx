import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// componets
import NavBar from "./components/NavBar";

// style
import "./App.scss";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
