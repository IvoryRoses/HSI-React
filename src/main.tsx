import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/style/index.css";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
