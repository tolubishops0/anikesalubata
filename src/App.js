import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartContext } from "./Context/CartContext";
import "./App.css";
import NavbBar from "./components/Navbar/NavbBar";
import Category from "./components/Navbar/Category";
import Body from "./components/Body";
import ProductListing from "./components/ProductListings/ProductListing";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductListings/ProductDetail";
import Cart from "./components/Cart/Cart";
import CartState from "./Context/Cart/CartState";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import ResetPassWord from "./components/Auth/ResetPassWord";

function App() {
  return (
    <CartState>
      <Router>
        <NavbBar />
        <Category />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/:category" element={<ProductListing />} />
          <Route path="/:category/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassWord />} />
        </Routes>
        <Footer />
      </Router>
    </CartState>
  );
}

export default App;
