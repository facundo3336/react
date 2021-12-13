import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ItemDetailsContainer } from "./components/ItemDetailsContainer/ItemDetailsContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailsContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
