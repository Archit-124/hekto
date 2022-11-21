import React from "react";
import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Layout from "../pages/Layout";
import ContactUs from "../pages/ContactUs";
import ProductDetails from "../pages/ProductDetails";
import ShopList from "../pages/Shoplist";
import BlogPage from "../pages/BlogPage";
import Faq from "../pages/Faq";
import Login from "../pages/Login";
import GridDefault from "../pages/GrifDefault";
const RoutesNav = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/contactUs" element={<ContactUs />} />
          <Route exact path="/productDetails" element={<ProductDetails />} />
          <Route exact path="/blogPage" element={<BlogPage />} />
          <Route path="/shopList" element={<ShopList />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gridDefault" element={<GridDefault />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RoutesNav;
