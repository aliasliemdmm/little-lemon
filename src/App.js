import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Footer from "./layouts/Footer";
import "./App.css";
import TestRadio from "./pages/TestRadio";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/testradio" element={<TestRadio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
