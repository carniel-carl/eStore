import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./assets/styles/index.scss";
import Context from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <App />
  </Context>
);
