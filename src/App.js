import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbBar from "./components/Navbar/NavbBar";
import Category from "./components/Navbar/Category";
import Body from "./components/Body";

function App() {
  return (
    <Router>
      <NavbBar />
      <Category />
      <Routes>
        <Route path="/" element={<Body />} />
      </Routes>
    </Router>
  );
}

export default App;
