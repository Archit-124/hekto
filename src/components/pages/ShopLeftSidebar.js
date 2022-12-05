import React from "react";
import "./ShopLeftSidebar.css";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
const ShopLeftSidebar = () => {
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <div className="shopleftsidebar-main">
        <Header />
        <div className="shopLeftSidebar">
          <div className="sls-sec1">
            <div className="child-sls-sec1">
              <div className="sls-title1">Shop Left Sidebar</div>
              <div className="sls-sec1-pages">
                <div>Home </div>
                <div>Pages</div>
                <div>Shop Left Sidebar</div>
              </div>
            </div>
          </div>
          <div className="sls-sec2">
            <div className="child-sls-sec2">
              <div className="sls-sec2-allheadings">
                <div className="sls-sec2-heading">
                  <h3>Ecommerce Acceories & Fashion item </h3>
                  <p>About 9,620 results (0.62 seconds)</p>
                </div>
                <div className="sls-sec2-perpage">
                  <div>Per Page:</div>
                  <input />
                </div>
                <div className="sls-sec2-sortby">
                  <div>Sort By:</div>
                  <input placeholder="Best Match" />
                </div>
                <div className="sls-sec2-views">
                  <div className="child-sls-sec2-views">View:</div>
                  <div
                    className="sls-sec2-views-img1"
                    onClick={() => navigate("/gridDefault")}
                  ></div>
                  <div className="sls-sec2-views-img2"></div>
                  <input placeholder="Search" />
                </div>
              </div>
              <div className="sls-sec2-parent-cards">
                <div className="child1-sls-sec2-parent-cards">
                  <div className="sls-sec2-pd">
                    <h2>Product Brand</h2>
                    <ul className="sls-pb-ul1">
                      <Checkbox {...label} defaultChecked color="success" />
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                        className="input_checkbox_purple"
                      />
                      <label for="vehicle1"> I have a bike</label>
                      <br />
                      <p>Coaster Furniture</p>
                      <li>Fusion Dot High Fashion</li>
                      <li>Unique Furnitture Restor</li>
                      <li>Dream Furnitture Flipping</li>
                      <li>Young Repurposed</li>
                      <li>Green DIY furniture</li>
                    </ul>
                  </div>
                  <div className="sls-sec2-do">
                    <h2>Discount Offer</h2>
                    <ul className="sls-pb-ul2">
                      <li>20% Cashback</li>
                      <li>5% Cashback Offer</li>
                      <li>25% Discount Offer</li>
                    </ul>
                  </div>
                  <div className="sls-sec2-ri">
                    <h2>Rating Item</h2>
                    <div>
                      <div className="child-sls-sec2-ri">
                        <div className="sls-sec2-tick"></div>
                        <div className="sls-sec2-stars"></div>
                        <div>(2341)</div>
                      </div>
                      <div className="child-sls-sec2-ri">
                        <div className="sls-sec2-tick"></div>
                        <div className="sls-sec2-stars"></div>
                        <div>(2341)</div>
                      </div>
                      <div className="child-sls-sec2-ri">
                        <div className="sls-sec2-tick"></div>
                        <div className="sls-sec2-stars"></div>
                        <div>(2341)</div>
                      </div>
                      <div className="child-sls-sec2-ri">
                        <div className="sls-sec2-tick"></div>
                        <div className="sls-sec2-stars"></div>
                        <div>(2341)</div>
                      </div>
                    </div>
                  </div>
                  <div className="sls-sec2-ca">
                    <h2>Categories</h2>
                    <ul className="sls-pb-ul4">
                      <li>Prestashop</li>
                      <li>Magento</li>
                      <li>Bigcommerce</li>
                      <li>osCommerce</li>
                      <li>3dcart</li>
                      <li>Bags</li>
                      <li>Accessories</li>
                      <li>Jewellery</li>
                      <li>Watches</li>
                    </ul>
                  </div>
                  <div className="sls-sec2-pf">
                    <h2>Price Filter</h2>
                    <ul className="sls-pb-ul4">
                      <li>$0.00 - $150.00</li>
                      <li>$150.00 - $350.00</li>
                      <li>$150.00 - $504.00</li>
                      <li>$450.00 +</li>
                    </ul>
                  </div>
                  <div className="sls-sec2-sb">
                    <input placeholder="$10.00 - 20000$" type="search"></input>
                  </div>
                  <div className="sls-sec2-fbc">
                    <h2>Filter By Color</h2>
                    <ul className="sls-pb-ul5">
                      <li className="sls-sec2-blue">Blue</li>
                      <li className="sls-sec2-Orange">Orange</li>
                      <li className="sls-sec2-Brown">Brown</li>
                      <li className="sls-sec2-Green">Green</li>
                      <li className="sls-sec2-Purple">Purple</li>
                      <li className="sls-sec2-Sky">Sky</li>
                    </ul>
                  </div>
                </div>
                <div className="child2-sls-sec2-parent-cards">
                  <div className="sls-sec2-card">
                    <div className="sls-sec2-card-img1"></div>
                    <div className="sls-sec2-sidetext">
                      <div className="sls-sec2-sidetext-title">
                        <h2>Dictum morbi</h2>
                        <div className="parent-sls-dots">
                          <div className="sls-sec2-sidetext-orangedot1"></div>
                          <div className="sls-sec2-sidetext-pinkdot1"></div>
                          <div className="sls-sec2-sidetext-bluedot1"></div>
                        </div>
                      </div>
                      <div className="sls-sec2-card-dollars">
                        <div className="sls-sec2-child1-dollar">$26.00</div>
                        <div className="sls-sec2-child2-dollar">$52.00</div>
                        <div className="sls-stars"></div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Magna in est adipiscing in phasellus non in justo.
                      </p>
                      <div className="sls-sec2-icons">
                        <div className="sls-sec2-icons-icn1"></div>
                        <div className="sls-sec2-icons-icn2"></div>
                        <div className="sls-sec2-icons-icn3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="sls-sec2-card">
                    <div className="sls-sec2-card-img2"></div>
                    <div className="sls-sec2-sidetext">
                      <div className="sls-sec2-sidetext-title">
                        <h2>Sodales sit</h2>
                        <div className="parent-sls-dots">
                          <div className="sls-sec2-sidetext-orangedot1"></div>
                          <div className="sls-sec2-sidetext-pinkdot1"></div>
                          <div className="sls-sec2-sidetext-bluedot1"></div>
                        </div>
                      </div>
                      <div className="sls-sec2-card-dollars">
                        <div className="sls-sec2-child1-dollar">$26.00</div>
                        <div className="sls-sec2-child2-dollar">$52.00</div>
                        <div className="sls-stars"></div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Magna in est adipiscing in phasellus non in justo.
                      </p>
                      <div className="sls-sec2-icons">
                        <div className="sls-sec2-icons-icn1"></div>
                        <div className="sls-sec2-icons-icn2"></div>
                        <div className="sls-sec2-icons-icn3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="sls-sec2-card">
                    <div className="sls-sec2-card-img3"></div>
                    <div className="sls-sec2-sidetext">
                      <div className="sls-sec2-sidetext-title">
                        <h2>Nibh varius</h2>
                        <div className="parent-sls-dots">
                          <div className="sls-sec2-sidetext-orangedot1"></div>
                          <div className="sls-sec2-sidetext-pinkdot1"></div>
                          <div className="sls-sec2-sidetext-bluedot1"></div>
                        </div>
                      </div>
                      <div className="sls-sec2-card-dollars">
                        <div className="sls-sec2-child1-dollar">$26.00</div>
                        <div className="sls-sec2-child2-dollar">$52.00</div>
                        <div className="sls-stars"></div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Magna in est adipiscing in phasellus non in justo.
                      </p>
                      <div className="sls-sec2-icons">
                        <div className="sls-sec2-icons-icn1"></div>
                        <div className="sls-sec2-icons-icn2"></div>
                        <div className="sls-sec2-icons-icn3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="sls-sec2-card">
                    <div className="sls-sec2-card-img4"></div>
                    <div className="sls-sec2-sidetext">
                      <div className="sls-sec2-sidetext-title">
                        <h2>Mauris quis</h2>
                        <div className="parent-sls-dots">
                          <div className="sls-sec2-sidetext-orangedot1"></div>
                          <div className="sls-sec2-sidetext-pinkdot1"></div>
                          <div className="sls-sec2-sidetext-bluedot1"></div>
                        </div>
                      </div>
                      <div className="sls-sec2-card-dollars">
                        <div className="sls-sec2-child1-dollar">$26.00</div>
                        <div className="sls-sec2-child2-dollar">$52.00</div>
                        <div className="sls-stars"></div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Magna in est adipiscing in phasellus non in justo.
                      </p>
                      <div className="sls-sec2-icons">
                        <div className="sls-sec2-icons-icn1"></div>
                        <div className="sls-sec2-icons-icn2"></div>
                        <div className="sls-sec2-icons-icn3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="sls-sec2-card">
                    <div className="sls-sec2-card-img5"></div>
                    <div className="sls-sec2-sidetext">
                      <div className="sls-sec2-sidetext-title">
                        <h2>Morbi sagittis</h2>
                        <div className="parent-sls-dots">
                          <div className="sls-sec2-sidetext-orangedot1"></div>
                          <div className="sls-sec2-sidetext-pinkdot1"></div>
                          <div className="sls-sec2-sidetext-bluedot1"></div>
                        </div>
                      </div>
                      <div className="sls-sec2-card-dollars">
                        <div className="sls-sec2-child1-dollar">$26.00</div>
                        <div className="sls-sec2-child2-dollar">$52.00</div>
                        <div className="sls-stars"></div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Magna in est adipiscing in phasellus non in justo.
                      </p>
                      <div className="sls-sec2-icons">
                        <div className="sls-sec2-icons-icn1"></div>
                        <div className="sls-sec2-icons-icn2"></div>
                        <div className="sls-sec2-icons-icn3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="sls-sec2-card">
                    <div className="sls-sec2-card-img6"></div>
                    <div className="sls-sec2-sidetext">
                      <div className="sls-sec2-sidetext-title">
                        <h2>Ultricies venenatis</h2>
                        <div className="parent-sls-dots">
                          <div className="sls-sec2-sidetext-orangedot1"></div>
                          <div className="sls-sec2-sidetext-pinkdot1"></div>
                          <div className="sls-sec2-sidetext-bluedot1"></div>
                        </div>
                      </div>
                      <div className="sls-sec2-card-dollars">
                        <div className="sls-sec2-child1-dollar">$26.00</div>
                        <div className="sls-sec2-child2-dollar">$52.00</div>
                        <div className="sls-stars"></div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Magna in est adipiscing in phasellus non in justo.
                      </p>
                      <div className="sls-sec2-icons">
                        <div className="sls-sec2-icons-icn1"></div>
                        <div className="sls-sec2-icons-icn2"></div>
                        <div className="sls-sec2-icons-icn3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="sls-sec2-card">
                    <div className="sls-sec2-card-img7"></div>
                    <div className="sls-sec2-sidetext">
                      <div className="sls-sec2-sidetext-title">
                        <h2>Scelerisque dignissim</h2>
                        <div className="parent-sls-dots">
                          <div className="sls-sec2-sidetext-orangedot1"></div>
                          <div className="sls-sec2-sidetext-pinkdot1"></div>
                          <div className="sls-sec2-sidetext-bluedot1"></div>
                        </div>
                      </div>
                      <div className="sls-sec2-card-dollars">
                        <div className="sls-sec2-child1-dollar">$26.00</div>
                        <div className="sls-sec2-child2-dollar">$52.00</div>
                        <div className="sls-stars"></div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Magna in est adipiscing in phasellus non in justo.
                      </p>
                      <div className="sls-sec2-icons">
                        <div className="sls-sec2-icons-icn1"></div>
                        <div className="sls-sec2-icons-icn2"></div>
                        <div className="sls-sec2-icons-icn3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gd-sec3">
            <div className="gd-sec3-img"></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ShopLeftSidebar;
