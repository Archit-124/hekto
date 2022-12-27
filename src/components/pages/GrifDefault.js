import React from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import "./GridDefault.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GrifDefault = () => {
  const [activeColor, setActiveColor] = useState(false);
  const [storedApiData, setstoredApiData] = useState([]);
  const [currentComponent, setCurrentComponent] = useState("ComponentA");

  useEffect(() => {
    axios
      .get("https://api-ecommerce-dev.devtomaster.com/v1/product/getProducts")
      .then((Response) => {
        // console.log(Response.data.result.products);
        const data1 = Response.data.result.products;
        setstoredApiData(data1);
        console.log(data1);
        return;
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, []);

  // console.log(storedApiData.map((card1) => card1.productName));
  console.log(storedApiData);

  return (
    <div>
      <div className="gridDefault-main">
        <Header />
        <div className="gridDefault">
          <div className="gd-sec1">
            <div className="child-gd-sec1">
              <div className="gd-title1">Shop Grid Default</div>
              <div className="gd-sec1-pages">
                <div>Home </div>
                <div>Pages</div>
                <div>Shop Grid Default</div>
              </div>
            </div>
          </div>
          <div className="gd-sec2">
            <div className="child-gd-sec2">
              <div className="gd-sec2-allheadings">
                <div className="gd-sec2-heading">
                  <h3>Ecommerce Acceories & Fashion item </h3>
                  <p>About 9,620 results (0.62 seconds)</p>
                </div>
                <div className="gd-sec2-perpage">
                  <div>Per Page:</div>
                  <input />
                </div>
                <div className="gd-sec2-sortby">
                  <div>Sort By:</div>
                  <input placeholder="Best Match" />
                </div>
                <div className="gd-sec2-views">
                  <div className="child-gd-sec2-views">View:</div>
                  <div
                    className="gd-sec2-views-img1"
                    onClick={() => setCurrentComponent("ComponentA")}
                  ></div>
                  <div
                    className="gd-sec2-views-img2"
                    onClick={() => setCurrentComponent("ComponentB")}
                  ></div>
                  <input placeholder="Search" type="search" />
                </div>
              </div>
              {currentComponent === "ComponentA" && (
                <div className="gd-sec2-parent-cards">
                  {storedApiData.map((cardss) => (
                    <Link to={`/productDetails/${cardss._id}`}>
                      <div className="gd-sec2-card">
                        <div
                          className="child1-gd-sec2-card"
                          style={{
                            backgroundColor: activeColor
                              ? activeColor
                              : "#f6f7fb",
                          }}
                        >
                          <img
                            className="child1-gd-sec2-card-img"
                            src={cardss.images[0].img}
                            alt="Not Rendered"
                          ></img>
                        </div>
                        <div className="child2gd-sec2-card">
                          <h3>{cardss.productName}</h3>
                          <div className="gd-sec2-parent-dots-img">
                            <div
                              className="gd-sec2-parent-dots-img1"
                              onClick={() => setActiveColor("#de9034")}
                            ></div>
                            <div
                              className="gd-sec2-parent-dots-img2"
                              onClick={() => setActiveColor("#ec42a2")}
                            ></div>
                            <div
                              className="gd-sec2-parent-dots-img3"
                              onClick={() => setActiveColor("#8568ff")}
                            ></div>
                          </div>
                          <div className="gd-sec2-dollars">
                            <div className="child1-gd-sec2-dollars">
                              {cardss.price}
                            </div>
                            <div className="child2-gd-sec2-dollars">
                              {cardss.offer}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              {currentComponent === "ComponentB" && (
                <div className="sl-sec2-parent-cards">
                  {storedApiData.map((card) => (
                    <Link to={`/productDetails/${card._id}`}>
                      <div className="sl-sec2-card">
                        <img
                          src={card.images[0].img}
                          alt="Not rendered"
                          className="sl-sec2-card-img1"
                        ></img>
                        <div className="sl-sec2-sidetext">
                          <div className="sl-sec2-sidetext-title">
                            <h2>{card.productName}</h2>
                            <div className="parent-sl-dots">
                              <div className="sl-sec2-sidetext-orangedot1"></div>
                              <div className="sl-sec2-sidetext-pinkdot1"></div>
                              <div className="sl-sec2-sidetext-bluedot1"></div>
                            </div>
                          </div>
                          <div className="sl-sec2-card-dollars">
                            <div className="sl-sec2-child1-dollar">
                              {card.price}
                            </div>
                            <div className="sl-sec2-child2-dollar">
                              {card.offer}
                            </div>
                            <div className="sl-stars"></div>
                          </div>
                          <p>{card.description}</p>
                          <div className="sl-sec2-icons">
                            <div className="sl-sec2-icons-icn1"></div>
                            <div className="sl-sec2-icons-icn2"></div>
                            <div className="sl-sec2-icons-icn3"></div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
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

export default GrifDefault;
