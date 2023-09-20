import React from "react";

// componets
import NavBar from "./components/NavBar";

// style
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <main>All routing</main>
    </div>
  );
};

export default App;
