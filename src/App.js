import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ItemDetailsContainer } from "./components/ItemDetailsContainer/ItemDetailsContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { Cart } from "./components/Cart/Cart";
import { CartContextProvider } from "./components/CartContextProvider/CartContextProvider";
import { OrdersContainer } from "./components/OrdersContainer/OrdersContainer";
import "./App.css";
import { OrderDetailContainer } from "./components/OrderDetailContainer/OrderDetailContainer";
import { Checkout } from "./components/Checkout/Checkout";
import { ThankYouPage } from "./components/ThankYouPage/ThankYouPage";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailsContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="/admin/orders" element={<OrdersContainer />} />
          <Route path="/admin/orders/:id" element={<OrderDetailContainer />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
