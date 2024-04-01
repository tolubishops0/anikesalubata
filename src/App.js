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
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import ResetPassWord from "./components/Auth/ResetPassWord";
import PageNotFound from "./components/PageNotFound";
import Delivery from "./components/Delivery/Delivery";

function App() {
  return (
    <CartState>
      <Router>
        <NavbBar />
        <Category />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/products/:category" element={<ProductListing />} />
          <Route path="/products/search" element={<ProductListing />} />{" "}
          <Route path="/products/:category/:id" element={<ProductDetail />} />
          <Route path="/products/search/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassWord />} />
          <Route path="/user-details" element={<Delivery />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </CartState>
  );
}

export default App;
