import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "home/Header";
import ProductList from "home/ProductList";
import ProductDetail from "product/ProductDetail";

const Layout = () => {
  return (
    <Router>
      <div class="min-h-full">
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Layout;
