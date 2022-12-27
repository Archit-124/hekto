import React from "react";
import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import ProductDetails from "../pages/ProductDetails";
import ShopList from "../pages/Shoplist";
import BlogPage from "../pages/BlogPage";
import Faq from "../pages/Faq";
import Login from "../pages/Login";
import GridDefault from "../pages/GrifDefault";
import ShopLeftSidebar from "../pages/ShopLeftSidebar";
import SignUp from "../pages/SignUp";
import ShoppingCart from "../pages/ShoppingCart";
const RoutesNav = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/contactUs" element={<ContactUs />} />
          <Route
            exact
            path="/productDetails/:id"
            element={<ProductDetails />}
          />
          <Route exact path="/blogPage" element={<BlogPage />} />
          <Route path="/shopList" element={<ShopList />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gridDefault" element={<GridDefault />} />
          <Route path="/shopLeftSidebar" element={<ShopLeftSidebar />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RoutesNav;
