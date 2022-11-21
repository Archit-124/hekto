import React from "react";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contactUs");
  };
  return (
    <div>
      <div className="header">
        <div className="child-header">
          <div>archit123@gmail.com</div>
          <div>(12233)984634</div>
        </div>
        <div className="child-header">
          <div>English</div>
          <div>USD</div>
          <div>
            <Link className="myaccnt" to="/login">
              My Account
            </Link>
          </div>
          <div>Wishlist</div>
          <div className="img2"></div>
        </div>
      </div>
      <navbar className="nav">
        <div></div>
        <div></div>
        <div className="child-nav title">Hekto</div>
        <div className="child-nav navs">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/gridDefault">Pages</Link>
            </li>
            <li>
              <Link to="/productDetails">Products</Link>
            </li>
            <li>
              <Link to="/blogPage">Blog</Link>
            </li>
            <li>
              <Link to="/shopList">Shop</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="child-nav srch">
          <input type="text" placeholder="Search"></input>
          <div className="icon">
            <div className="img1"></div>
          </div>
        </div>
      </navbar>
    </div>
  );
};

export default Header;
