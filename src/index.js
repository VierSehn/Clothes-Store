import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/products.context";
import { CartDropdownProvider } from "./contexts/cart-dropdown.context";

import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <CartDropdownProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </CartDropdownProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
