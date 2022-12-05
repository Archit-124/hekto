import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Header = () => {
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
              {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Home
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl> */}
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
      <section class="top-nav">
        <div className="menu-hekto-title">Hekto</div>
        <input id="menu-toggle" type="checkbox" />
        <label class="menu-button-container" for="menu-toggle">
          <div class="menu-button"></div>
        </label>
        {/* <div className="parent-menu"> */}
        <ul class="menu">
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
        {/* </div> */}
      </section>
    </div>
  );
};

export default Header;
