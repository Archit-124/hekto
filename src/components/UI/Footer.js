import React from "react";
import "./Footer.css";
import { Outlet, Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="main">
          <div className="child-main hekto">
            <h3>Hekto</h3>
            <div className="child-hekto">
              <input type="email" placeholder="Enter Email Address"></input>
              <button>Sign Up</button>
            </div>
            <div>
              <Link to="/contactUs">Contact info</Link>
            </div>
            <div> 17 Princess Road, London, Greater London NW1 8JR, UK</div>
          </div>
          <div className="child-main">
            <h3>Category</h3>
            <div>Laptops & Computers</div>
            <div>Cameras & Photography</div>
            <div>Smart Phones & Tablets</div>
            <div>Video Games & Consoles</div>
            <div>Waterproof Headphones</div>
          </div>
          <div className="child-main">
            <h3>Customer Care</h3>
            <div>
              <Link to="/login">My Account</Link>
            </div>
            <div>Discount</div>
            <div>Returns</div>
            <div>Orders History</div>
            <div>Order Tracking</div>
            <div>
              <Link to="/faq">Faq</Link>
            </div>
          </div>
          <div className="child-main">
            <h3>Pages</h3>
            <div>Blog</div>
            <div>Browse the Shop</div>
            <div>Category</div>
            <div>Pre-Built Pages</div>
            <div>Visual Composer Elements</div>
            <div>WooCommerce Pages</div>
          </div>
        </div>
        <div className="last">
          <div className="sub-last">©Webecy - All Rights Reserved</div>
          <div className="sub-last">
            <div className="fb"></div>
            <div className="insta"></div>
            <div className="twt"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
