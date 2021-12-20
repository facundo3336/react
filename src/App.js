import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ItemDetailsContainer } from "./components/ItemDetailsContainer/ItemDetailsContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { Cart } from "./components/Cart/Cart";
import { CartContextProvider } from "./components/CartContextProvider/CartContextProvider";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailsContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
