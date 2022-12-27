import React, { useState } from "react";
import "./ShopLeftSidebar.css";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import { useNavigate } from "react-router-dom";
import dummydata from "../mockdata/Dummy.json";
import images1 from "../images/image";
import {
  cb_productBrand,
  cb_discountOffer,
  cb_Categories,
} from "../mockdata/sls";

// Name , email pass
// Axious . intercepter
const ShopLeftSidebar = () => {
  // console.log(data);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const filterCheck = e.target.value;
    if (e.target.checked) {
      console.log(filterCheck);
    } else {
      return;
    }
  };
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
                      {cb_productBrand.map((checkbox) => (
                        <div className="checkbox-sls-main">
                          <input
                            type={checkbox.type}
                            id={checkbox.id}
                            name={checkbox.name}
                            value={checkbox.value}
                            className="input_checkbox_purple"
                            onChange={handleChange}
                          />
                          <label for={checkbox.name}>{checkbox.name}</label>
                          <br />
                        </div>
                      ))}
                    </ul>
                  </div>
                  <div className="sls-sec2-do">
                    <h2>Discount Offer</h2>
                    <ul className="sls-pb-ul2">
                      {cb_discountOffer.map((checkbox) => (
                        <div className="checkbox-sls-main">
                          <input
                            type={checkbox.type}
                            id={checkbox.id}
                            name={checkbox.name}
                            value={checkbox.value}
                            className="input_checkbox_pink"
                            onChange={handleChange}
                          />
                          <label for={checkbox.name}>{checkbox.name}</label>
                          <br />
                        </div>
                      ))}
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
                        <div>(1726)</div>
                      </div>
                      <div className="child-sls-sec2-ri">
                        <div className="sls-sec2-tick"></div>
                        <div className="sls-sec2-stars"></div>
                        <div>(258)</div>
                      </div>
                      <div className="child-sls-sec2-ri">
                        <div className="sls-sec2-tick"></div>
                        <div className="sls-sec2-stars"></div>
                        <div>(25)</div>
                      </div>
                    </div>
                  </div>
                  <div className="sls-sec2-ca">
                    <h2>Categories</h2>
                    <ul className="sls-pb-ul4">
                      {cb_Categories.map((checkbox) => (
                        <div className="checkbox-sls-main">
                          <input
                            type={checkbox.type}
                            id={checkbox.id}
                            name={checkbox.name}
                            value={checkbox.value}
                            className="input_checkbox_pink"
                            onChange={handleChange}
                          />
                          <label for={checkbox.name}>{checkbox.name}</label>
                          <br />
                        </div>
                      ))}
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
                  {dummydata.data.map((products) => (
                    <div className="sls-sec2-card">
                      <img src={images1[products.image]} alt="//"></img>
                      <div className="sls-sec2-sidetext">
                        <div className="sls-sec2-sidetext-title">
                          <h2>{products.title}</h2>
                          <div className="parent-sls-dots">
                            <div className="sls-sec2-sidetext-orangedot1"></div>
                            <div className="sls-sec2-sidetext-pinkdot1"></div>
                            <div className="sls-sec2-sidetext-bluedot1"></div>
                          </div>
                        </div>
                        <div className="sls-sec2-card-dollars">
                          <div className="sls-sec2-child1-dollar">
                            {products.price}
                          </div>
                          <div className="sls-sec2-child2-dollar">
                            {products["prev-price"]}
                          </div>
                          <div className="sls-stars"></div>
                        </div>
                        <p>{products.description}</p>
                        <div className="sls-sec2-icons">
                          <div className="sls-sec2-icons-icn1"></div>
                          <div className="sls-sec2-icons-icn2"></div>
                          <div className="sls-sec2-icons-icn3"></div>
                        </div>
                      </div>
                    </div>
                  ))}
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
