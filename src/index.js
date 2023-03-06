import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/cart.context";
import { store } from "./store/store";

import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <BrowserRouter>
          <CartProvider>
              <App />
          </CartProvider>
      </BrowserRouter>
    </Provider>
);
