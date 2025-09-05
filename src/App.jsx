import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart"  element={< Cart />}/>
        <Route path="/checkout"  element={< Checkout />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
