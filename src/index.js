import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// React toma el <div id="root"> de public/index.html y dibuja la App ahí
const raiz = ReactDOM.createRoot(document.getElementById("root"));
raiz.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
