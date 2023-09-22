import React from "react";

// componets
import NavBar from "./components/NavBar";

// style
import "./App.scss";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <main>
        {/* <Home /> */}
        <ProductPage />
      </main>
    </div>
  );
};

export default App;
