import React from 'react'
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetials";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App